/**
 * use only view_table
 * row property : isShow
 */
import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridGroup {

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
        this.openDepth = null;
        this.splitChar = '__$__'
    }

    setGroupData(data, openDepth  = 0, isFirst = true) {
        let selector = this.selector;
        const grid = this.grid;

        if (isFirst) { if (grid.null(data) || data.length == 0) return; }

        grid.classGroup.openDepth = openDepth;

        // create source_data, view_table.data
        if (isFirst) {
            grid.source_table.remove();

            for (let i = 0, len = data.length; i < len; i++) {
                const dataRow = data[i];

                const item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[tbsGridNames.column.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }

                const dataColumns = grid.field_table.select();
                for (let x = 0, len = dataColumns.length; x < len; x++) {
                    const column = dataColumns[x];
                    let columnName  = column[tbsGridNames.column.name];
                    item[columnName] = dataRow[columnName];
                }

                grid.source_table.insert(item);
            }
        }

        grid.group_header_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        /* Filter */
        grid.classFilter.filters();

        /* Add Group Column */
        grid.sort_column_table.data.map(dataRow => grid.temp_table.insert(grid.copyJson(dataRow)));
        grid.sort_column_table.remove();

        grid.group_column_table.data.map(dataRow => {
            let columnName = dataRow[tbsGridNames.column.name];
            //let groupOrder = grid.isNull(dataRow[tbsGridNames.column.order], '');

            const row = grid.temp_table.selectRow(tbsGridNames.column.name, columnName);
            if (row) {
                let order = row[tbsGridNames.column.order];
                if (order == '') order = 'asc';

                row[tbsGridNames.column.order] = order;
                grid.sort_column_table.insert(row);
                // grid.group_column_table.update(columnName, tbsGridNames.column.order, order);
            }
            else {
                const item = {};
                item[tbsGridNames.column.name] = columnName;
                item[tbsGridNames.column.order] = 'asc';
                grid.sort_column_table.insert(item);
                // grid.group_column_table.update(columnName, tbsGridNames.column.order, 'asc');
            }
            let rowIndex = grid.temp_table.selectRowIndex(tbsGridNames.column.name, columnName);
            if (grid.notNull(rowIndex)) grid.temp_table.remove(rowIndex);
        });

        grid.temp_table.data.map(dataRow => grid.sort_column_table.insert(grid.copyJson(dataRow)));
        grid.temp_table.remove();

        /* Sorting */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

        /* create group data */
        grid.classGroup.createGroupData();

        /* insert into view_table from group_table */
        grid.view_table.remove();
        for (let i = 0, len = grid.group_table.count(); i < len; i++) {
            let dataRow = grid.group_table.data[i];

            dataRow[tbsGridNames.column.mode]   = ''; // S, U, I, D, blank
            dataRow[tbsGridNames.column.isOpen] = false;

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

    createGroupData(){
        const grid = this.grid;

        // create group data
        const groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
        groupData.map(row => {
            grid.source_table.currentRowId += 1;
            row[tbsGridNames.column.rowId] = grid.source_table.currentRowId;
            grid.group_header_table.insert(grid.copyJson(row));
        });

        // insert group table  select * from view_table, group_header_table
        for (let i = 0, len = grid.group_header_table.count(); i < len; i++) {
            const rootRow = grid.group_header_table.selectRowByRowIndex(i);
            const children = [];
            const item = {}
            let rootDepth = rootRow[tbsGridNames.column.depth];
            let rootString = this.getGroupKeyByDepth(rootRow, rootDepth);

            // get children group
            let isChild = false;
            for (let x = 0, len2 = grid.group_header_table.count(); x < len2; x++) {
                const row = grid.group_header_table.selectRowByRowIndex(x);
                let depth = row[tbsGridNames.column.depth];
                let childString = this.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootString == childString) {
                    isChild = true;
                    children.push(row[tbsGridNames.column.rowId]);
                }
                else {
                    if (isChild) break;
                }
            }

            // insert group_header_table
            rootRow[tbsGridNames.column.children] = children;
            rootRow[tbsGridNames.column.isOpen] = false;
            grid.group_table.insert(rootRow);

            // insert view_table
            const arr = []
            isChild = false;
            if (rootDepth == grid.group_column_table.count()) {
                for (let x = 0, len2 = grid.view_table.count(); x < len2; x++) {
                    const row = grid.view_table.selectRowByRowIndex(x);
                    let depth = grid.group_column_table.count() + 1;
                    let childString = this.getGroupKeyByDepth(row, rootDepth);
                    if (rootString == childString) {
                        isChild = true;
                        children.push(row[tbsGridNames.column.rowId]);
                        arr.push(x);
                        row[tbsGridNames.column.isOpen] = false;
                        row[tbsGridNames.column.depth] = grid.group_column_table.count() + 1;
                        grid.group_table.insert(grid.copyJson(row));
                    }
                    else {
                        if (isChild) break;
                    }
                }
                rootRow[tbsGridNames.column.children] = children;
                //delete row
                if (arr.length > 0) {
                    let startRowIndex = arr[0]
                    let lastRowIndex = arr[arr.length - 1];
                    for (let x = lastRowIndex; x >= startRowIndex; x--) {
                        if (arr.indexOf(x) != -1) grid.view_table.remove(x);
                    }
                }
            }
        }
    }

    createGroupKeyData(dataRows, depth = 1){
        const grid = this.grid;
        const resultRows = [];
        const result = [];

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

        const addRow = function (dataRow) {
            let rootDepth = dataRow[tbsGridNames.column.depth];
            let rootStr = grid.classGroup.getGroupKeyByDepth(dataRow, rootDepth);

            result.push(dataRow);

            for (let i = depth, len = resultRows.length; i < len; i++) {
                const row = resultRows[i];
                let depth = row[tbsGridNames.column.depth];
                let str = grid.classGroup.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootStr == str) {
                    addRow(row);
                }
            }
        }

        for (let i = 0, len = resultRows.length; i < len; i++) {
            let depth = resultRows[i][tbsGridNames.column.depth];
            if (depth == 1) addRow(resultRows[i]);
        }
        return result;
    }

    getGroupKeyByDepth(row, depth) {
        const grid = this.grid;
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[tbsGridNames.column.name];
            key += this.splitChar + grid.isNull(row[name], '');
        }
        return key;
    }

    getGroupKeyRowByDepth(row, depth) {
        const grid = this.grid;

        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[tbsGridNames.column.name];
            tempRow[name] = row[name];
            tempRow[tbsGridNames.column.depth] = depth;
        }
        return tempRow;
    }


    /**
     * Group Sum, Avg
     */

    getGroupSummary() {
        let selector = this.selector;
        const grid = this.grid;

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



    /**
     * spanIcon, spanImg, spanText
     */

    setGroupIcon(tableCell, rowIndex) {
        const grid = this.grid;

        let row = grid.getRow(rowIndex);
        let rootChildren = row[tbsGridNames.column.children];
        let element = tableCell.querySelector('.tbs-grid-html-icon');

        if (grid.null(rootChildren)) return;

        if (rootChildren.length > 0) {
            let nextRow = grid.getRow(rowIndex + 1);
            if (grid.null(nextRow)) grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
            else {
                if (rootChildren.indexOf(nextRow[tbsGridNames.column.rowId]) != -1)
                    grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');
                else
                    grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
            }
        }
        else grid.classGroup.toggleGroupIcon(rowIndex, element);
    }

    toggleGroupIcon(rowIndex, element, type) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.null(element)) return;

        if      (type == tbsGridNames.column.open) {
            element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_open.png)';
        }
        else if (type == tbsGridNames.column.closed) {
            element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
        }
        else element.style['backgroundImage'] = '';
    }

    isGroupChildrenRow(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;

        let result = false;
        let row = grid.getRow(rowIndex);
        let childRow = grid.getRow(rowIndex + 1);

        if (grid.null(childRow)) result = false;
        else {
            if (row[tbsGridNames.column.num] == childRow[tbsGridNames.column.parentNum]) result = true;
        }
        return result;
    }

    getGroupChildrenRows(folding, rowIndex) {
        const grid = this.grid;
        const result = [];

        let rowId = grid.view_table.selectRowIdByRowIndex(rowIndex);
        let startRowIndex = grid.group_table.selectRowIndexByRowId(rowId);
        const rootRow = grid.group_table.selectRowByRowIndex(startRowIndex);
        let rootDepth = rootRow[tbsGridNames.column.depth];

        let isChild = false;
        if (folding == tbsGridNames.column.open) {
            grid.group_table.updateByRowIndex(rowIndex, tbsGridNames.column.isOpen, true);
            grid.group_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[tbsGridNames.column.depth];
                let isOpen = dataRow[tbsGridNames.column.isOpen];
                if (depth == rootDepth + 1) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth) break;
                }
            }
        }
        else if (folding == tbsGridNames.column.closed) {
            grid.group_table.updateByRowIndex(rowIndex, tbsGridNames.column.isOpen, false);
            grid.group_table.updateByRowId(rowId, tbsGridNames.column.isOpen, false);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[tbsGridNames.column.depth];
                if (depth > rootDepth) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth) break;
                }
            }
        }
        return result;
    }

    setGroupFolding(tableCell) {
        let selector = this.selector;
        const grid = this.grid;

        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon)) return;

        let folding = grid.classGroup.getGroupFlodingStatus(tableCell);
        if      (folding == tbsGridNames.column.open)   grid.classGroup.closeGroupRow(rowIndex);
        else if (folding == tbsGridNames.column.closed) grid.classGroup.openGroupRow(rowIndex, false);

        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }

    getGroupFlodingStatus(tableCell) {
        const grid = this.grid;

        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon)) return null;

        if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return tbsGridNames.column.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return tbsGridNames.column.closed;
        else return null;
    }

    openGroupRow(rowIndex) {
        const grid = this.grid;

        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);

        grid.group_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);

        let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.open, rowIndex);
        for (let i = 0, len = rows.length; i < len; i++) {
            grid.view_table.insertAfter(rows[i], rowIndex + i);
        }
    }

    closeGroupRow(rowIndex) {
        const grid = this.grid;

        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);

        grid.group_table.updateByRowId(rowId, tbsGridNames.column.isOpen, false);

        let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.closed, rowIndex);
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
        const grid = this.grid;

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
        grid.classGroup.setGroupData(grid.view_table.data, null, false);
    }

    addGroupButton(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;

        /* Check Existing */
        if (grid.group_column_table.selectRows(tbsGridNames.column.name, name, 1).length > 0) return;

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

        //grid.classGroup.toggleGroupPlaceHolder();
        let data = grid.view_table.data;
        grid.classGroup.setGroupData(data, null, false);
    }

    removeGroupButton(element) {
        let selector = this.selector;
        const grid = this.grid;

        /* get column name */
        let name = element.dataset.name;

        /* remove group data */
        let rowIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, name);
        grid.group_column_table.remove(rowIndex);

        // remove button in group panel
        let button = element.parentNode;
        button.remove();

        if (grid.group_column_table.count() > 0) {
            grid.classGroup.toggleGroupPlaceHolder();

            let data = grid.view_table.data;
            grid.classGroup.setGroupData(data, null, false);
        }
        else {
            this.initGroupData();
        }
    }

    removeGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
    }

    getGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;

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
        const grid = this.grid;

        let column = grid.getColumn(columnName);

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
        const grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        let span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
        if (buttons.length > 0) span.style.display = 'none';
        else span.style.display = '';

        // if (buttons.length == 0) {
        //     grid.setColumn('group_column', 'visible', false);
        //     // grid.apply();
        // }
        // else {
        //     grid.setColumn('group_column', 'visible', true);
        //     // grid.apply();
        // }
        grid.classControl.after_setColumnVisible();
    }

    destroy() {
        const grid = this.grid;

        grid.setGridMode('')
        grid.group_column_table.remove();
        grid.group_table.remove();
        grid.classGroup.hideGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.setData(grid.source_table.data, false);
    }

    showGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classGroup.getGroupButtonList();

        grid.options.showGroupPanel = true;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');

        grid.apply();
    }

    hideGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classGroup.removeGroupButtonList();

        grid.options.showGroupPanel = false;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');

        grid.apply();
    }

    initGroupData() {
        const grid = this.grid;

        grid.setGridMode('')
        grid.group_column_table.remove();
        grid.sort_column_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();

        grid.classGroup.removeGroupButtonList();

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        //if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data, null, false);
        grid.setData(grid.source_table.data, null, false);
        grid.apply();
    }

    getGroupRow(columnName) { return this.grid.group_column_table.selectRow(tbsGridNames.column.name, columnName); }

    expandGroup() {
        let selector = this.selector;
        const grid = this.grid;

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
        const grid = this.grid;

        if (grid.group_column_table.count() == 0) return;
        let openDepth = grid.classGroup.openDepth;

        if (grid.null(grid.classGroup.openDepth)) openDepth = grid.group_column_table.count();
        else openDepth -= 1;

        if (openDepth <= 0) openDepth =  1;

        grid.classGroup.openDepth = openDepth;

        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }
}
