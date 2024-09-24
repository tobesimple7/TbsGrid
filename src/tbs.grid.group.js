import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridGroup {

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

        this.groupColumns = [];

        this.options = {}
        this.openDepth = null;
    }

    createGroupData(){
        let grid = this.grid;

        grid.tree_table.remove();

        /* get parent number */
        const fn_setRelation = function(row, depth, parentNum) {
            row[tbsGridNames.column.parentNum] = parentNum;
            grid.tree_table.insert(grid.copyJson(row));

            if (depth > grid.group_column_table.count()) return;

            let key = grid.classGroup.getGroupKeyByDepth(row, depth);
            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                let dataRow = grid.view_table.data[i];
                let childKey = grid.classGroup.getGroupKeyByDepth(dataRow, depth);
                let childDepth = dataRow[tbsGridNames.column.depth];

                if (key == childKey && childDepth == depth + 1) {
                    fn_setRelation(dataRow, depth + 1, row[tbsGridNames.column.num]);
                }
            }
        }

        /* get children rowId */
        const fn_getChildrenRowIds = function(row) {
            row[tbsGridNames.column.children] = [];
            for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
                let resultRow = grid.tree_table.data[i];
                if (row[tbsGridNames.column.num] == resultRow[tbsGridNames.column.parentNum]) {
                    row[tbsGridNames.column.children].push(resultRow[tbsGridNames.column.rowId]);
                }
            }
        }

        // Init
        let maxDepth = grid.group_column_table.count() + 1;
        grid.view_table.data.map(dataRow => {
            if (grid.notNull([tbsGridNames.column.mode     ])) delete dataRow[tbsGridNames.column.mode     ];
            if (grid.notNull([tbsGridNames.column.num      ])) delete dataRow[tbsGridNames.column.num      ];
            if (grid.notNull([tbsGridNames.column.parentNum])) delete dataRow[tbsGridNames.column.parentNum];
            dataRow[tbsGridNames.column.depth] = maxDepth;
        });

        // create group data
        let groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
        groupData.map(row => {
            grid.source_table.currentRowId += 1;
            row[tbsGridNames.column.rowId] = grid.source_table.currentRowId;
            row['group_column'] = null;
            grid.view_table.insert(grid.copyJson(row));
        });

        // set number
        let num = 1;
        grid.view_table.data.map(row => { num += 1; row[tbsGridNames.column.num] = num; });

        // get Number, Parent Number
        for (let i = 0, len = grid.view_table.count(); i < len; i++) {
            let row = grid.view_table.data[i];
            if (row[tbsGridNames.column.depth] == 1) fn_setRelation(row, 1, 0);
        }

        // get children
        grid.tree_table.data.map(row => fn_getChildrenRowIds(row));
    }

    createGroupKeyData(dataRows, depth = 1){
        let grid = this.grid;

        let resultRows= [];

        for (let i = depth, len = grid.group_column_table.count() + 1; i < len; i++) {
            let rows = dataRows.reduce((acc, row) => {
                let key = grid.classGroup.getGroupKeyByDepth(row, i);
                let tempRow = grid.classGroup.getGroupKeyRowByDepth(row, i);
                if (acc.hasOwnProperty(key) == false) acc[key] = tempRow;
                return acc;
            }, {});
            rows = Object.values(rows);
            rows.map(row => resultRows.push(row));
        }
        return resultRows;
    }

    getGroupKeyByDepth(row, depth) {
        let grid = this.grid;
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[tbsGridNames.column.name];
            key += '-' + row[name];
        }
        return key;
    }

    getGroupKeyRowByDepth(row, depth) {
        let grid = this.grid;

        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[tbsGridNames.column.name];
            tempRow[name] = row[name];
            tempRow[tbsGridNames.column.depth] = depth;
        }
        return tempRow;
    }

    setGroupColumns(groupColumns){
        let grid = this.grid;

        grid.group_column_table.remove();
        groupColumns.map(column => grid.group_column_table.insert(grid.copyJson(column)))
    }

    /**
     * Group Sum, Avg
     */

    getGroupSummary() {
        let selector = this.selector;
        let grid = this.grid;

        const getGroupSummary = function (array, columnName, isLastDepth) {
            let result = {};
            result.rowCount = 0;
            result.sum = 0;

            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                let row = grid.view_table.data[i];
                let rowId = row[tbsGridNames.column.rowId];
                array.map(item => {
                    if (rowId == item) {
                        result.sum      += grid.null(row[columnName]) ? 0 : Number(row[columnName]);
                        result.rowCount += grid.null(row[tbsGridNames.column.rowCount]) ? 1 : row[tbsGridNames.column.rowCount];
                    }
                });
            }
            return result;
        }
        /* Create Sum By Depth Unit */
        let depth = grid.group_column_table.count();
        for (let depthIndex = depth; depthIndex >= 1; depthIndex--) {
            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                let row = grid.view_table.data[i];
                let rowId = row[tbsGridNames.column.rowId];
                let depth = row[tbsGridNames.column.depth];

                if (depthIndex == depth) {
                    for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                        let column = grid.column_table.data[x];
                        let columnName = column[tbsGridNames.column.name];
                        let columnType = column[tbsGridNames.column.type];
                        if (columnType == tbsGridTypes.CellType.number) {
                            let result = null;
                            result = getGroupSummary(row[tbsGridNames.column.children], columnName);
                            row[columnName] = result.sum.toString();
                            row[tbsGridNames.column.rowCount] = result.rowCount;
                        }
                    }
                }
            }
        }
        /* Create Avg By Depth Unit */
        for (let i = 0, len = grid.view_table.count(); i < len; i++) {
            let row = grid.view_table.data[i];
            let rowId = row[tbsGridNames.column.rowId];
            let rowCount = row[tbsGridNames.column.children].length;

            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                let column = grid.column_table.data[x];
                let columnName = column[tbsGridNames.column.name];
                let groupColumn = grid.classGroup.getGroupRow(columnName);
                let summaryType = grid.null(column[tbsGridNames.column.summaryType]) ? null : column[tbsGridNames.column.summaryType];
                let columnType = column[tbsGridNames.column.type];

                if (rowCount > 0 && columnType == tbsGridTypes.CellType.number) {
                    // summaryType = 'sum';
                    if (grid.null(summaryType)) row[columnName] = null;
                    else if (summaryType == 'avg') row[columnName] = (row[columnName] / row[tbsGridNames.column.rowCount]);
                }
            }
        }
    }

    setGroupData(data, openDepth  = 0, isFirst = true) {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.null(data) || data.length == 0) return;

        grid.classGroup.openDepth = openDepth;

        // create group column : group_column
        if (grid.isColumnName('group_column') == false) {
            let userColumn = {name: 'group_column', header: { text: 'Group'}, width: 150, type: 'string'}
            if (grid.fixedColumnIndex != -1) grid.fixedColumnIndex += 1;
            grid.classColumn.addColumn(userColumn, 0, 0, tbsGridTypes.BeforeAfter.before);
        }

        // create source_data, view_table.data
        if (isFirst == true) {
            grid.source_table.remove();

            for (let i = 0, len = data.length; i < len; i++) {
                let dataRow = data[i];

                let item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    let column = grid.column_table.data[x];
                    let columnName = column[tbsGridNames.column.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }
                grid.source_table.insert(item);
            }
        }

        // grid.view_table.remove();
        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        /* Filter */
        grid.classFilter.filters();

        /* Soring */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

        /* insert into tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(dataRow => grid.tree_table.insert(grid.copyJson(dataRow)));

        /* create group data */
        grid.classGroup.createGroupData();

        /* insert into view_table from tree_table */
        grid.view_table.remove();
        for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
            let dataRow = grid.tree_table.data[i];

            dataRow[tbsGridNames.column.mode]   = ''; // S, U, I, D, blank
            dataRow[tbsGridNames.column.isOpen] = false;// keep open, closed state

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let columnName = column[tbsGridNames.column.name];
                let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];

                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }

        /* Summary */
        grid.classGroup.getGroupSummary();

        /* create tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(dataRow => {
            let item = grid.copyJson(dataRow);
            item[tbsGridNames.column.isOpen] = false;
            grid.tree_table.insert(item);
        });

        // open depth
        if (grid.notNull(openDepth) && openDepth != 0) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                let row = grid.view_table.data[i];
                let depth = row[tbsGridNames.column.depth];
                if (depth > openDepth) grid.view_table.remove(i);
            }
        }

        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
        if (grid.view_table.count() == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
        }
        else {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.view_table.count();
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        if (grid.options[tbsGridNames.column.autoWidth] == true)  grid.setColumnAutoWidth();

        grid.classGroup.getGroupButtonList();
        grid.classScroll.setPanelSize();

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * spanIcon, spanImg, spanText
     */

    setGroupIcon(tableCell, rowIndex) {
        let selector = this.selector;
        let grid = this.grid;
        let row = grid.getRow(rowIndex);
        let arr = row[tbsGridNames.column.children];
        let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

        if (grid.null(arr)) return;

        if (arr.length > 0) {
            let nextRow = grid.getRow(rowIndex + 1);
            if (grid.null(nextRow)) grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
            else {
                if (nextRow[tbsGridNames.column.parentNum] == row[tbsGridNames.column.num])
                    grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');
                else
                    grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
            }
        }
        else grid.classGroup.toggleGroupIcon(rowIndex, element);
    }

    toggleGroupIcon(rowIndex, element, type) {
        let selector = this.selector;
        let grid = this.grid;
        if      (type == tbsGridNames.column.open)   element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_open.png)';
        else if (type == tbsGridNames.column.closed) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
        else element.style['backgroundImage'] = '';
    }

    isGroupChildrenRow(rowIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let result = false;
        let row = grid.getRow(rowIndex);
        let childRow = grid.getRow(rowIndex + 1);

        if (grid.null(childRow)) result = false;
        else {
            if (row[tbsGridNames.column.num] == childRow[tbsGridNames.column.parentNum]) result = true;
        }
        return result;
    }

    getGroupChildrenRows(folding, rowIndex, isAll = true) {
        let grid = this.grid;

        let resultRows = [];

        const fn_getChildrenRows = function(row) {
            resultRows.push(grid.copyJson(row));
            let arr = row[tbsGridNames.column.children];

            if (folding == tbsGridNames.column.open) {
                if (row[tbsGridNames.column.isOpen]) {
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let dataRow = grid.tree_table.selectRow(tbsGridNames.column.rowId, arr[i]);
                        fn_getChildrenRows(dataRow);
                    }
                }
            }
            else {
                for (let i = 0, len = arr.length; i < len; i++) {
                    let dataRow = grid.tree_table.selectRow(tbsGridNames.column.rowId, arr[i]);
                    fn_getChildrenRows(dataRow);
                }
            }
        }
        let row = grid.getRow(rowIndex);
        fn_getChildrenRows(row);

        resultRows.splice(0, 1);
        return resultRows;
    }

    setGroupFolding(tableCell) {
        let selector = this.selector;
        let grid = this.grid;

        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
        if (grid.null(spanIcon)) return;

        let folding = grid.classGroup.getGroupFlodingStatus(tableCell);
        if      (folding == tbsGridNames.column.open)   grid.classGroup.closeGroupRow(rowIndex);
        else if (folding == tbsGridNames.column.closed) grid.classGroup.openGroupRow(rowIndex, false);

        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }

    getGroupFlodingStatus(tableCell) {
        let grid = this.grid;

        let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
        if (grid.null(spanIcon)) return null;

        if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return tbsGridNames.column.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return tbsGridNames.column.closed;
        else return null;
    }

    openGroupRow(rowIndex) {
        let grid = this.grid;

        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);

        grid.tree_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);
        grid.view_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);

        let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.open, rowIndex, false);
        for (let i = 0, len = rows.length; i < len; i++) {
            grid.view_table.insertAfter(rows[i], rowIndex + i);
        }
    }

    closeGroupRow(rowIndex) {
        let grid = this.grid;

        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);
        for (let i = 0, len = grid.view_table.count(); i < len; i++) {
            if (rowId == grid.view_table.selectValue(i, tbsGridNames.column.rowId))
                grid.view_table.updateByRowIndex(i, tbsGridNames.column.isOpen, true); // keep folding status
        }

        let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.closed, rowIndex, true);
        rows.map(row => {
            grid.view_table.removeByRowId(row[tbsGridNames.column.rowId]);
        });
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }

    /**
     * Group Button
     */

    changeGroupButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let groupColumns = grid.group_column_table.data;

        /* targetIndex != name Index */
        let sourceIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, name);
        if (sourceIndex == targetIndex) return;

        /* create column */
        let dataRow = {};
        dataRow[tbsGridNames.column.name] = name;
        dataRow[tbsGridNames.column.text] = text;

        /* update source column */
        grid.group_column_table.updateByRowIndex(sourceIndex, tbsGridNames.column.name, '_temp_group');

        /* add dataRow */
        if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);
        else grid.group_column_table.insertBefore(dataRow, targetIndex);

        /* remove source */
        sourceIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, '_temp_group');
        grid.group_column_table.remove(sourceIndex);

        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classGroup.toggleGroupPlaceHolder();
        let data = grid.view_table.data;
        grid.classGroup.setGroupData(data, null, false);
    }

    addGroupButton(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

        /* Check Existing */
        if (grid.group_column_table.select(tbsGridNames.column.name, name, 1).length > 0) return;

        /* create dataRow */
        let dataRow = {};
        dataRow[tbsGridNames.column.name] = name;
        dataRow[tbsGridNames.column.text] = text;

        /* add dataRow */
        if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);
        else grid.group_column_table.insertBefore(dataRow, targetIndex);

        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classGroup.toggleGroupPlaceHolder();
        let data = grid.view_table.data;
        grid.classGroup.setGroupData(data, null, false);
        if (grid.options[grid.option_showFilterPanel]) grid.classFilter.showFilterPanel();
    }

    removeGroupButton(element) {
        let selector = this.selector;
        let grid = this.grid;

        /* get column name */
        let name = element.dataset.name;

        /* remove group data */
        let rowIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, name);
        grid.group_column_table.remove(rowIndex);

        // remove button in group panel
        let button = element.parentNode;
        button.remove();

        grid.classGroup.toggleGroupPlaceHolder();

        let data = grid.view_table.data;

        grid.classGroup.setGroupData(data, null, false);
        if (grid.options[grid.option_showFilterPanel]) grid.classFilter.showFilterPanel();
    }

    removeGroupButtonList() {
        let selector = this.selector;
        let grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
    }

    getGroupButtonList() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classGroup.removeGroupButtonList();

        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        let groupColumns= grid.group_column_table.data;

        for (let i = 0, len = groupColumns.length; i < len; i++) {
            let groupColumn = groupColumns[i];
            let button = grid.classGroup.createGroupButton(groupColumn[tbsGridNames.column.name]);
            let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
            if (grid.null(bar)) return;
            bar.append(button);
        }
        grid.classGroup.toggleGroupPlaceHolder();
    }

    createGroupButton(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);

        let text= document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent  = column.header[tbsGridNames.column.text];
        text.dataset.name = columnName;

        let icon= document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
        icon.dataset.name = columnName;

        let button = document.createElement('div');
        button.classList.add('tbs-grid-panel-button');
        button.dataset.name = columnName;

        button.append(text);
        button.append(icon);

        return button;
    }

    toggleGroupPlaceHolder() {
        let selector = this.selector;
        let grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        let span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
        if (buttons.length > 0) span.style.display = 'none';
        else span.style.display = '';

        if (buttons.length == 0) {
            grid.classColumn.setColumn('group_column', 'visible', false);
            // grid.apply();
        }
        else {
            grid.classColumn.setColumn('group_column', 'visible', true);
            // grid.apply();
        }
        grid.classControl.after_setColumnVisible();
    }

    allowGroupMode() {
        let selector = this.selector;
        let grid = this.grid;
        grid.setGridMode(tbsGridTypes.GridMode.group)
        grid.classGroup.showGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();

        if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data);
        else grid.apply();
        if (grid.options[grid.option_showFilterPanel]) grid.classFilter.showFilterPanel();
        grid.apply();
    }

    denyGroupMode() {
        let selector = this.selector;
        let grid = this.grid;

        for (let i = grid.view_table.count() - 1; i >= 0; i--) {
            let row = grid.view_table.data[i];
            if (grid.notNull(row[tbsGridNames.column.children]) && row[tbsGridNames.column.children].length != 0) grid.view_table.remove(i);
        }
        grid.classGroup.setGroupColumns([]);
        grid.classGroup.getGroupButtonList();
        grid.classGroup.hideGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply()
        if (grid.options[grid.option_showFilterPanel]) grid.classFilter.showFilterPanel();

    }

    showGroupPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.options[grid.option_showGroupPanel] = true;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
    }

    hideGroupPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.options[grid.option_showGroupPanel] = false;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
    }

    initGroupData() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classGroup.setGroupColumns([]);
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data, null, false);

    }

    getGroupRow(columnName) { return this.grid.group_column_table.selectRow(tbsGridNames.column.name, columnName); }

    expandGroup() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.group_column_table.count() == 0) return;
        let openDepth = grid.classGroup.openDepth;

        if (grid.null(grid.classGroup.openDepth)) openDepth = 1;
        else openDepth += 1;

        if (openDepth > grid.group_column_table.count() + 1) openDepth =  grid.group_column_table.count();

        grid.classGroup.openDepth = openDepth;

        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }

    collapseGroup() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.group_column_table.count() == 0) return;
        let openDepth = grid.classGroup.openDepth;

        if (grid.null(grid.classGroup.openDepth)) openDepth = grid.group_column_table.count();
        else openDepth -= 1;

        if (openDepth <= 0) openDepth =  1;

        grid.classGroup.openDepth = openDepth;

        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }
}
