/**
 * @Rule
 *  - create group column in data.  _group column.
 *  -
 *
 *
 */
class TbsGridGroup {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

        this.groupColumns = [];
        // this.groupView = []; // when cell merged

        this.options = {}
        this.infoText = grid.gridConfig.options.groupInfoText;
    }
}
TbsGridGroup.prototype.tbs_setGroupOption = function (optionName, optionValue) {
    let selector = this.selector;
    let grid = this.grid;
    let classGroup = this;

    classGroup.options[optionName] = optionValue;
}

TbsGrid.prototype.tbs_createGroupData = function(dataRows){
    let selector = '#' + this.gridId;
    let grid = this;

    let resultRows = [];
    const fn_getChildrenRowIds = function(row) {
        row[grid.code_children] = [];
        for (let i = 0, len = resultRows.length; i < len; i++) {
            let resultRow = resultRows[i];
            if (row[grid.code_num] == resultRow[grid.code_parentNum]) {
                row[grid.code_children].push(resultRow[grid.code_rowId]);
            }
        }
    }
    const fn_setRelation = function(row, depth, parentNum = 0) {
        row[grid.code_num] = row[grid.code_rowId] + 1;
        row[grid.code_parentNum] = parentNum;
        resultRows.push(grid.tbs_copyJson(row));

        if (depth == grid.classGroup.groupColumns.length + 1) return;

        let key= grid.tbs_getGroupKeyByDepth(row, depth);
        for (let i = 0, len = dataRows.length; i < len; i++) {
            let dataRow = dataRows[i];
            let childKey = grid.tbs_getGroupKeyByDepth(dataRow, depth);
            let childDepth = dataRow[grid.code_depth];
            if (key == childKey && childDepth == depth + 1) fn_setRelation(dataRow, depth + 1, row[grid.code_num]);
        }
    }
    // craete dataRows depth
    let maxDepth = grid.classGroup.groupColumns.length + 1;
    dataRows.map(row => row[grid.code_depth] = maxDepth);

    // create group data
    let groupData = grid.tbs_createGroupKeyData(dataRows);
    groupData.map(row => {
        grid.maxRowId += 1;
        row[grid.code_rowId] = grid.maxRowId;
        dataRows.push(row);
    });

    // 1th Depth Row Loop
    for (let i = 0, len= dataRows.length; i < len; i++) {
        let row = dataRows[i];
        if (row[grid.code_depth] && row[grid.code_depth] == 1) fn_setRelation(row, 1);
    }
    resultRows.map(row => fn_getChildrenRowIds(row));
    return resultRows;
}
TbsGrid.prototype.tbs_createGroupKeyData = function(dataRows, depth = 1){
    let selector = '#' + this.gridId;
    let grid = this;

    let resultRows= [];
    let tempRows = [];

    const fn_getKey = function(row, depth) {
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.classGroup.groupColumns[i];
            let name = groupColumn[grid.column_name];
            key += '-' + row[name];
        }
        return key;
    }
    const fn_getKeyData = function(row, depth) {
        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.classGroup.groupColumns[i];
            let name = groupColumn[grid.column_name];
            tempRow[name] = row[name];
            tempRow[grid.code_depth] = depth;
        }
        return tempRow;
    }
    for (let i = depth, len = grid.classGroup.groupColumns.length + 1; i < len; i++) {
        let rows = dataRows.reduce((acc, row) => {
            let key = grid.tbs_getGroupKeyByDepth(row, i);
            let tempRow = grid.tbs_getGroupKeyRowByDepth(row, i);
            if (acc.hasOwnProperty(key) == false) acc[key] = tempRow;
            return acc;
        }, {});
        rows = Object.values(rows);
        rows.map(row => resultRows.push(row));
    }
    return resultRows;
}
TbsGrid.prototype.tbs_getGroupKeyByDepth = function(row, depth) {
    let selector = '#' + this.gridId;
    let grid = this;

    let key = '';
    for (let i = 0; i < depth; i++) {
        let groupColumn = grid.classGroup.groupColumns[i];
        let name = groupColumn[grid.column_name];
        key += '-' + row[name];
    }
    return key;
}
TbsGrid.prototype.tbs_getGroupKeyRowByDepth = function(row, depth) {
    let selector = '#' + this.gridId;
    let grid = this;

    let tempRow = {};
    for (let i = 0; i < depth; i++) {
        let groupColumn = grid.classGroup.groupColumns[i];
        let name = groupColumn[grid.column_name];
        tempRow[name] = row[name];
        tempRow[grid.code_depth] = depth;
    }
    return tempRow;
}
TbsGrid.prototype.tbs_setgroupColumns = function(groupColumns){
    let selector = '#' + this.gridId;
    let grid = this;

    grid.classGroup.groupColumns = groupColumns;
}
/* Group Sum, Avg */
TbsGrid.prototype.tbs_getGroupSummary = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    const getGroupSummary = function (array, columnName, isLastDepth) {
        let result = {};
        result.rowCount = 0;
        result.sum = 0;

        for (let i = 0, len = grid.data_view.length; i < len; i++) {
            let row = grid.data_view[i];
            let rowId = row[grid.code_rowId];
            array.map(item => {
                if (rowId == item) {
                    result.sum      += grid.null(row[columnName])         ? 0 : Number(row[columnName]);
                    result.rowCount += grid.null(row[grid.code_rowCount]) ? 1 : row[grid.code_rowCount];
                }
            });
        }
        return result;
    }
    /* Create Sum By Depth Unit */
    let depth = grid.classGroup.groupColumns.length;
    for (let depthIndex = depth; depthIndex >= 1; depthIndex--) {
        for (let i = 0, len = grid.data_view.length; i < len; i++) {
            let row = grid.data_view[i];
            let rowId = row[grid.code_rowId];
            let depth = row[grid.code_depth];

            if (depthIndex == depth) {
                for (let x = 0, len2 = grid.columns.length; x < len2; x++) {
                    let column = grid.columns[x];
                    let columnName = column[grid.column_name];
                    let columnType = column[grid.column_type];
                    if (columnType == grid.code_number || columnType == grid.code_currency) {
                        let result = null;
                        result = getGroupSummary(row[grid.code_children], columnName);
                        row[columnName] = result.sum.toString();
                        row[grid.code_rowCount] = result.rowCount;
                    }
                }
            }
        }
    }
    /* Create Avg By Depth Unit */
    for (let i = 0, len = grid.data_view.length; i < len; i++) {
        let row = grid.data_view[i];
        let rowId = row[grid.code_rowId];
        let rowCount = row[grid.code_children].length;

        for (let x = 0, len2 = grid.columns.length; x < len2; x++) {
            let column = grid.columns[x];
            let columnName = column[grid.column_name];
            let groupColumn = grid.tbs_getGroupColumn(columnName);
            let summaryType = grid.null(column[grid.column_summaryType]) ? null : column[grid.column_summaryType];
            let columnType = column[grid.column_type];

            if (rowCount > 0 &&(columnType == grid.code_number || columnType == grid.code_currency)) {
                // summaryType = 'sum';
                if (grid.null(summaryType)) row[columnName] = null;
                else if (summaryType == 'avg') row[columnName] = (row[columnName] / row[grid.code_rowCount]);

            }
        }
    }
}
TbsGrid.prototype.tbs_setGroupData = function (data, openDepth  = 0, isFirst = true) {
    let selector = '#' + this.gridId;
    let grid = this;

    // create group column : group_column
    if (grid.tbs_isColumnName('group_column') == false) {
        let userColumn = {name: 'group_column', header: { text: 'Group'}, width: 150, type: 'string'}
        if (grid.fixedColumnIndex != -1) grid.fixedColumnIndex += 1;
        grid.tbs_addColumn(userColumn, 0, 0, grid.code_before);
    }
    if (grid.null(data) || data.length == 0) return;

    grid.data_user = [];
    for (let i = 0, len = data.length; i < len; i++) {
        let row = data[i];
        //if (grid.notNull([grid.code_rowId    ])) delete row[grid.code_rowId    ];
        if (grid.notNull([grid.code_mode     ])) delete row[grid.code_mode     ];
        if (grid.notNull([grid.code_num      ])) delete row[grid.code_num      ];
        if (grid.notNull([grid.code_parentNum])) delete row[grid.code_parentNum];
        if (grid.notNull([grid.code_children ])) row[grid.code_children ] = [];
        grid.data_user.push(row);
    }

    let columns = grid.columns;
    let dataRows = grid.tbs_copyJson(grid.data_user);
//==============================================================================
    // create rowId
    dataRows.map((dataRow, rowIndex) => {
        if (grid.null(dataRow[grid.code_rowId])) {
            grid.maxRowId += 1;
            dataRow[grid.code_rowId] = grid.maxRowId;
        }
    });
    // create data_table, data_view
    if (isFirst == true) {
        grid.data_table = [];
        grid.data_view = [];
        for (let i = 0, len = dataRows.length; i < len; i++) {
            let dataRow = dataRows[i];

            let item = {};
            item[grid.code_rowId] = dataRow[grid.code_rowId];
            item[grid.code_mode] = '';

            for (let x = 0, len = grid.columns.length; x < len; x++) {
                let column = grid.columns[x];
                let columnName = column[grid.column_name];
                let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                item[columnName] = val;
            }
            grid.data_table.push(item);
            grid.data_view.push(grid.tbs_copyJson(item));
        }
    }
    else {
        grid.data_view = grid.tbs_copyJson(grid.data_table);
    }

    /* Filter */
    grid.tbs_filters();

    /* Soring */
    grid.tbs_setSortData(grid.data_view, grid.classSort.sortColumns);

    /* create grouping data */
    dataRows = grid.tbs_createGroupData(grid.tbs_copyJson(grid.data_view));

    grid.data_view = [];
    for (let i = 0, len = dataRows.length; i < len; i++) {
        let dataRow = dataRows[i];

        let item = {};
        item[grid.code_rowId]     = dataRow[grid.code_rowId];
        item[grid.code_mode]      = ''; // S, U, I, D, blank
        item[grid.code_depth]     = dataRow[grid.code_depth];
        item[grid.code_num]       = dataRow[grid.code_num];
        item[grid.code_parentNum] = dataRow[grid.code_parentNum];
        item[grid.code_children]  = grid.tbs_copyJson(dataRow[grid.code_children]);
        item[grid.code_isOpen]    = false;// keep open, closed state

        for (let x= 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName  = column[grid.column_name];
            let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];

            item[columnName] = val;
        }
        grid.data_view.push(item);
    }

    /* Summary */
    grid.tbs_getGroupSummary();

    /* Create data_temp : save before delete */
    grid.data_temp = grid.tbs_copyJson(grid.data_view);
    grid.data_temp.map(item => item[grid.code_isOpen] = false);

    // open depth
    if (grid.notNull(openDepth) && grid.classGroup.groupColumns.length > 0) {
        for (let i = grid.data_view.length - 1; i >= 0; i--) {
            let row = grid.data_view[i];
            let depth = row[grid.code_depth];
            if (depth > openDepth) {
                grid.data_view.splice(i, 1);
            }
        }
    }

    document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
    dataRows = grid.data_view;
    if (dataRows.length == 0) {
        document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
        grid.verticalScroll.tbs_setScroll(grid.code_vertical);
        grid.tbs_displayPanel30(0);
    }
    else {
        document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = dataRows.length;
        grid.verticalScroll.tbs_setScroll(grid.code_vertical);
        grid.tbs_displayPanel30(0);
        grid.tbs_displayPanel40();
        grid.tbs_displayPanel50();
    }
    if (grid.options[grid.option_autoWidth] == true)  grid.tbs_setColumnAutoWidth();

    grid.tbs_getGroupButtonList();
    grid.tbs_setPanelSize();

    grid.tbs_removeRange(0, -1);
    let _topRowIndex = grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel30(_topRowIndex);
}
/** spanIcon, spanImg, spanText */
TbsGrid.prototype.tbs_setGroupIcon = function (tableCell, rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;
    let row = grid.tbs_getRow(rowIndex);
    let arr = row[grid.code_children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

    if (grid.null(arr)) return;

    if (arr.length > 0) {
        let nextRow = grid.tbs_getRow(rowIndex + 1);
        if (grid.null(nextRow)) grid.tbs_toggleGroupIcon(rowIndex, element, 'closed');
        else {
            if (nextRow[grid.code_parentNum] == row[grid.code_num])
                grid.tbs_toggleGroupIcon(rowIndex, element, 'open');
            else
                grid.tbs_toggleGroupIcon(rowIndex, element, 'closed');
        }
    }
    else grid.tbs_toggleGroupIcon(rowIndex, element);
}
TbsGrid.prototype.tbs_toggleGroupIcon = function (rowIndex, element, type) {
    let selector = '#' + this.gridId;
    let grid = this;
    if      (type == grid.code_open)   element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_open.png)';
    else if (type == grid.code_closed) element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    else element.style['backgroundImage'] = '';
}
TbsGrid.prototype.tbs_isGroupChildrenRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    let row = grid.tbs_getRow(rowIndex);
    let childRow = grid.tbs_getRow(rowIndex + 1);

    if (grid.null(childRow)) result = false;
    else {
        if (row[grid.code_num] == childRow[grid.code_parentNum]) result = true;
    }
    return result;
}
TbsGrid.prototype.tbs_getGroupChildrenRows = function (folding, rowIndex, isAll = true) {
    // folding : open, closed
    let selector = '#' + this.gridId;
    let grid = this;

    let dataRows= grid.data_view;
    let resultRows= [];
    const fn_getChildrenRows = function(row, count) {
        if (Object.keys(row).length == 0) return;

        if (count > 1) resultRows.push(grid.tbs_copyJson(row));

        let arr = row[grid.code_children];
        if (arr.length > 0) {
            //default : get first lower rows
            if (count == 1) {
                for (let i = 0, len = arr.length; i < len; i++) {
                    let dataRow = grid.tbs_getTempRowByRowId(arr[i]);
                    fn_getChildrenRows(dataRow, count + 1);
                }
            }
            else {
                if (folding == grid.code_open) {
                    if (row[grid.code_isOpen]) {
                        for (let i = 0, len = arr.length; i < len; i++) {
                            let dataRow = grid.tbs_getTempRowByRowId(arr[i]);
                            fn_getChildrenRows(dataRow, count + 1);
                        }
                    }
                }
                else {
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let dataRow = grid.tbs_getTempRowByRowId(arr[i]);
                        fn_getChildrenRows(dataRow, count + 1);
                    }
                }
            }
        }
    }
    let row = grid.tbs_getRow(rowIndex);
    fn_getChildrenRows(row, 1);
    return resultRows;
}
TbsGrid.prototype.tbs_setGroupFolding = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.tbs_getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;

    let folding = grid.tbs_getGroupFlodingStatus(tableCell);
    if      (folding == grid.code_open)   grid.tbs_closeGroupRow(rowIndex);
    else if (folding == grid.code_closed) grid.tbs_openGroupRow(rowIndex, false);

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
}
TbsGrid.prototype.tbs_getGroupFlodingStatus = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;

    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return grid.code_open;
    else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return grid.code_closed;
    else return null;
}
TbsGrid.prototype.tbs_openGroupRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_temp.length; i < len; i++) {
        if (rowId == grid.data_temp[i][grid.code_rowId])
            grid.data_temp[i][grid.code_isOpen] = true; // keep folding status
    }

    let rows = grid.tbs_getGroupChildrenRows(grid.code_open, rowIndex, false);
    grid.tbs_addGroupRows(rowIndex);
}
TbsGrid.prototype.tbs_closeGroupRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_view.length; i < len; i++) {
        if (rowId == grid.data_view[i][grid.code_rowId])
            grid.data_view[i][grid.code_isOpen] = false; // keep folding status
    }

    let rows = grid.tbs_getGroupChildrenRows(grid.code_closed, rowIndex, true);
    rows.map(row=> grid.tbs_removeGroupRow(row));
}
TbsGrid.prototype.tbs_addGroupRows = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rows = grid.tbs_getGroupChildrenRows(grid.code_open, rowIndex, false);
    for (let i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
        grid.tbs_addGroupRow(startRowIndex, rows[i]);
    }
}
TbsGrid.prototype.tbs_addGroupRow = function (startRowIndex, row) {
    let selector = '#' + this.gridId;
    let grid = this;
    startRowIndex = parseInt(startRowIndex);
    if (startRowIndex == grid.data_view.length) {
        grid.data_view.push(row);
    }
    else {
        grid.data_view.splice(startRowIndex, 0, row);
    }
}
TbsGrid.prototype.tbs_removeGroupRow = function (row) {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_removeRowInPanel30(row);
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
}
/* Group Data In Table */
TbsGrid.prototype.tbs_setGroupDataTable2 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (this.fixedColumnIndex == -1) return;

    let panelName = param.panelName;

    let topRowIndex = this.tbs_validateTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = this.tbs_validateBottomRowIndex(panelName, topRowIndex);

    //startColumnIndex, lastColumIndex
    let result = this.tbs_getDisplayedHeaderColumn(panelName);
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRender.setTableHead(panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        let tableRow = tableRows[tableRowIndex];

        /* Render: TableRow */
        grid.classRender.setTableRow(tableRow, i, panelName);

        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x];

            if (x > this.fixedColumnIndex && x < startColumnIndex) continue;
            if (x <= this.fixedColumnIndex) tableCell = tableRow.childNodes[x];

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, grid.columns[x], i, x);

            /* Render: Show Selected Cells */
            grid.classRender.showSelectedCells(panelName, tableCell, i, x);
        }
        tableRowIndex += 1;
    }
    // hidden : Unnecessary tableRows
    grid.classRender.hideTableRows(panelName, tableRows, tableRowIndex, this.pageRowCount);
}
TbsGrid.prototype.tbs_setGroupDataTable0 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; }

    let topRowIndex = grid.tbs_validateTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = grid.tbs_validateBottomRowIndex(panelName, topRowIndex);

    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRender.setTableHead(panelName);

    /* table tbody */
    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        if (i > grid.tbs_getRowCount() - 1) break;

        let tableRow = tableRows[tableRowIndex];

        /* Render: TableRow */
        grid.classRender.setTableRow(tableRow, i, panelName);

        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x]; //content tr > tableCell

            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            }
            else {
                if (x < startColumnIndex) continue;
            }

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, grid.columns[x], i, x);

            /* Render: Show Selected Cells */
            grid.classRender.showSelectedCells(panelName, tableCell, i, x);
        }

        // on fixed columns
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);

        tableRowIndex += 1;
    }
    // hide Unnecessary tableRows
    grid.classRender.hideTableRows(panelName, tableRows, tableRowIndex, grid.pageRowCount);

    // panel21 : display rowCount
    if (param.panelName == 'panel30') document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.tbs_getRowCount();
}
/* Group Button */
TbsGrid.prototype.tbs_changeGroupButtonOrder = function (name, text, order, targetIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let groupColumns = grid.classGroup.groupColumns;

    /* targetIndex <> name Index */
    let sourceIndex = null;
    for (let i = 0, len = groupColumns.length; i < len; i ++) {
        let groupColumn = groupColumns[i];
        if (name == groupColumn[grid.column_name] && i == targetIndex) return;
        else if (name == groupColumn[grid.column_name]) { sourceIndex = i;  break; }
    }

    /* create column */
    let column = {};
    column[grid.column_name]  = name;
    column[grid.column_text]  = text;
    column[grid.column_order] = order;

    /* update source column */
    groupColumns[sourceIndex][grid.column_name] = '_temp_group';

    /* add */
    if (grid.notNull(targetIndex)) grid.classGroup.groupColumns.splice(targetIndex, 0, column);
    else grid.classGroup.groupColumns.push(column);

    /* remove source */
    for (let i = 0, len = groupColumns.length; i < len; i ++) {
        let groupColumn = groupColumns[i];
        if (groupColumn[grid.column_name] == '_temp_group') {
            grid.classGroup.groupColumns.splice(i, 1);
            break;
        }
    }

    // add button in group panel
    let button = grid.tbs_createGroupButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
    else bar.append(button);

    grid.tbs_toggleGroupPlaceHolder();
    let data = grid.data_user;
    grid.tbs_setGroupData(data, null, false);
}
TbsGrid.prototype.tbs_addGroupButton = function (name, text, order, targetIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    // add groupColumn in grid.classGroup.groupColumns
    // already existing column
    let groupColumns = grid.classGroup.groupColumns;
    for (let i = 0, len= groupColumns.length; i < len; i ++) {
        let groupColumn = groupColumns[i];
        if (name == groupColumn[grid.column_name]) {
            return;
        }
    }
    let column = {};
    column[grid.column_name]  = name;
    column[grid.column_text]  = text;
    column[grid.column_order] = order;
    if (grid.notNull(targetIndex)) grid.classGroup.groupColumns.splice(targetIndex, 0, column);
    else grid.classGroup.groupColumns.push(column);

    // add button in group panel
    let button = grid.tbs_createGroupButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
    else bar.append(button);

    grid.tbs_toggleGroupPlaceHolder();
    let data = grid.data_user;
    grid.tbs_setGroupData(data, null, false);
    if (grid.options[grid.option_filterVisible]) grid.tbs_showFilterPanel();
}
TbsGrid.prototype.tbs_removeGroupButton = function (element) {
    let selector = '#' + this.gridId;
    let grid = this;

    // remove groupColumn in grid.classGroup.groupColumns
    let name = element.dataset.name;
    let columnIndex;
    let groupColumns= grid.classGroup.groupColumns;
    for (let i = 0, len= groupColumns.length; i < len; i ++) {
        let groupColumn = groupColumns[i];
        if (name == groupColumn[grid.column_name]) {
            columnIndex = i;
            break;
        }
    }
    groupColumns.splice(columnIndex, 1);

    // remove button in group panel
    let button = element.parentNode;
    button.remove();

    grid.tbs_toggleGroupPlaceHolder();

    let data = grid.data_user;

    grid.tbs_setGroupData(data, null, false);
    if (grid.options[grid.option_filterVisible]) grid.tbs_showFilterPanel();
}
TbsGrid.prototype.tbs_removeGroupButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
    for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
}
TbsGrid.prototype.tbs_getGroupButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_removeGroupButtonList();

    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    let groupColumns= grid.classGroup.groupColumns;

    for (let i = 0, len = groupColumns.length; i < len; i++) {
        let groupColumn = groupColumns[i];
        let button = grid.tbs_createGroupButton(groupColumn[grid.column_name]);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.null(bar)) return;
        bar.append(button);
    }
    grid.tbs_toggleGroupPlaceHolder();
}
TbsGrid.prototype.tbs_createGroupButton = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(columnName);

    let text= document.createElement('span');
    text.classList.add('tbs-grid-panel-button-text');
    text.textContent  = column.header[grid.column_text];
    text.dataset.name = columnName;

    let icon= document.createElement('span');
    icon.classList.add('tbs-grid-panel-button-icon');
    icon.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    icon.dataset.name = columnName;

    let button = document.createElement('div');
    button.classList.add('tbs-grid-panel-button');
    button.dataset.name = columnName;

    button.append(text);
    button.append(icon);

    return button;
}
TbsGrid.prototype.tbs_toggleGroupPlaceHolder = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
    let span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
    if (buttons.length > 0) span.style.display = 'none';
    else span.style.display = '';

    if (buttons.length == 0) {
        grid.tbs_setColumn('group_column', 'visible', false);
        // grid.tbs_apply();
    }
    else {
        grid.tbs_setColumn('group_column', 'visible', true);
        // grid.tbs_apply();
    }
    grid.classControl.after_setColumnVisible();
}
TbsGrid.prototype.tbs_allowGroupMode = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_setGridMode(grid.code_group)
    grid.tbs_setOption(grid.option_groupVisible, true);
    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();

    if (grid.data_view.length >= 0 && grid.null(grid.data_view[0]['group_column'])) grid.tbs_setData(grid.data_view);
    else grid.tbs_apply();
    if (grid.options[grid.option_filterVisible]) grid.tbs_showFilterPanel();
    grid.tbs_apply();
}
TbsGrid.prototype.tbs_denyGroupMode = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    for (let i = grid.data_view.length - 1; i >= 0; i--) {
        let row = grid.data_view[i];
        if (grid.notNull(row[grid.code_children]) && row[grid.code_children].length != 0) grid.data_view.splice(i,1);
    }
    grid.tbs_setgroupColumns([]);
    grid.tbs_getGroupButtonList();
    grid.tbs_setOption(grid.option_groupVisible, false);
    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.tbs_apply()
    if (grid.options[grid.option_filterVisible]) grid.tbs_showFilterPanel();

}
TbsGrid.prototype.tbs_showGroupPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let panel = document.querySelector(selector + ' .tbs-grid-panel80');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');

}
TbsGrid.prototype.tbs_hideGroupPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    let panel = document.querySelector(selector + ' .tbs-grid-panel80');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');
}
TbsGrid.prototype.tbs_initGroupData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setgroupColumns([]);
    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    if (grid.data_view.length >= 0 && grid.null(grid.data_view[0]['group_column'])) grid.tbs_setData(grid.data_view, null, false);

}

TbsGrid.prototype.tbs_getGroupColumn = function (columnName) {
    let index = this.tbs_getGroupColumnIndex(columnName);
    return this.classGroup.groupColumns[index];
}
TbsGrid.prototype.tbs_getGroupColumnIndex = function (columnName) {
    let grid = this;
    let result = -1;

    for (let i = 0, len = this.classGroup.groupColumns.length; i < len; i++) {
        let groupColumn = this.classGroup.groupColumns[i];
        if (columnName == groupColumn[grid.column_name]) {
            result = i;
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_getGroupColumnName = function (colIndex) {
    return this.classGroup.groupColumns[colIndex][this.column_name];
}