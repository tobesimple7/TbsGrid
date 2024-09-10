class TbsGridTree {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.options = {};
        this.options[grid.code_itemName	  ] = null;
        this.options[grid.code_parentName ] = null;
        this.options[grid.code_rootValue  ] = null;
    }
}
TbsGridTree.prototype.setTreeOption = function (optionName, optionValue) {
    let selector = this.selector;
    let grid = this.grid;
    let classTree = this;

    classTree.options[optionName] = optionValue;
}
TbsGridTree.prototype.createTreeData = function(dataRows) {
    let selector = this.selector;
    let grid = this.grid;

    let copyRows = [];
    let resultRows = [];

    dataRows.map(row => copyRows.push(grid.tbs_copyJson(row)));
    const fn_getChildrenRowIds = function(row) {
        row[grid.code_children] = [];
        for (let i = 0, len= copyRows.length; i < len; i++) {
            let copyRow = copyRows[i];
            if (row[grid.classTree.options[grid.code_itemName]] == copyRow[grid.classTree.options[grid.code_parentName]]) {
                row[grid.code_children].push(copyRow[grid.code_rowId]);
            }
        }
    }
    const fn_addChildrenRows = function(row, depth = 1) {
        fn_getChildrenRowIds(row); // return rowId Array

        let arr = row[grid.code_children];
        row[grid.code_depth] = depth;

        resultRows.push(grid.tbs_copyJson(row));

        if (arr.length > 0) {
            for (let i = 0, len = copyRows.length; i < len; i++) {
                let copyRow = copyRows[i];
                if (arr.indexOf(copyRow[grid.code_rowId]) != -1) fn_addChildrenRows(copyRow, depth + 1);
            }
        }
    }
    for (let i = 0, len = copyRows.length; i < len; i++) {
        let copyRow = copyRows[i];
        if (grid.classTree.options[grid.code_rootValue] == copyRow[grid.classTree.options[grid.code_parentName]]) {
            fn_addChildrenRows(copyRow);
        }
    }
    return resultRows;
}
TbsGridTree.prototype.setTreeSortColumns = function (sortColumns) {
    let selector = this.selector;
    let grid = this.grid;
    grid.classSort.sortColumns = grid.tbs_copyJson(sortColumns);
}
TbsGridTree.prototype.setTreeData = function (data, openDepth  = 0, isFirst = true) {
    let selector = this.selector;
    let grid = this.grid;

    if (grid.null(data) || data.length == 0) return;

    grid.data_user = [];
    for (let i = 0, len = data.length; i < len; i++) {
        let row = data[i];
        if (grid.notNull([grid.code_mode])) delete row[grid.code_mode];
        if (grid.notNull([grid.code_children])) row[grid.code_children] = [];
        grid.data_user.push(row);
    }

    let columns = grid.columns;
    let dataRows = grid.tbs_copyJson(grid.data_user);

    /* create rowId */
    dataRows.map((dataRow, rowIndex) => {
        if (grid.null(dataRow[grid.code_rowId])) {
            grid.maxRowId += 1;
            dataRow[grid.code_rowId] = grid.maxRowId;
        }
    });

    /* create data_table, data_view */
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
    grid.classFilter.filters();

    /* Soring */
    grid.classSort.setSortData(grid.data_view, grid.classSort.sortColumns);

    /* Create tree data */
    dataRows = grid.classTree.createTreeData(grid.tbs_copyJson(grid.data_view));

    grid.data_view = [];
    for (let i = 0, len = dataRows.length; i < len; i++) {
        let dataRow = dataRows[i];

        let item = {};
        item[grid.code_rowId]     = dataRow[grid.code_rowId];
        item[grid.code_mode]      = '';
        item[grid.code_depth]     = dataRow[grid.code_depth];
        item[grid.code_children]  = grid.tbs_copyJson(dataRow[grid.code_children]);
        item[grid.code_isOpen]    = false;

        for (let x= 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName  = column[grid.column_name];
            let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];

            item[columnName] = val;
        }
        grid.data_view.push(item);
    }

    /* Summary */
    // grid.classTree.getGroupSummary();

    /* Create data_temp : save before delete */
    grid.data_temp = grid.tbs_copyJson(grid.data_view);
    grid.data_temp.map(item => item[grid.code_isOpen] = false);

    // open depth
    if (grid.notNull(openDepth)) {
        for (let i = grid.data_view.length - 1; i >= 0; i--) {
            let row = grid.data_view[i];
            let depth = row[grid.code_depth];
            if (openDepth != 0 && depth > openDepth) {
                grid.data_view.splice(i, 1);
            }
        }
    }

    document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
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

    grid.tbs_removeRange(0, -1);
    let _topRowIndex = grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel30(_topRowIndex);
}
TbsGridTree.prototype.setTreeDataTable1 = function (param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataTable1(param);
}
TbsGridTree.prototype.setTreeDataTable2 = function (param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataTable2(param);
}
TbsGridTree.prototype.setTreeDataTable3 = function (param) {
    let selector = this.selector;
    let grid = this.grid;

    let panelName = param.panelName;
    if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; }

    let topRowIndex = grid.tbs_validateTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = grid.tbs_validateBottomRowIndex(panelName, topRowIndex);

    let pageRowCount = grid.tbs_getPageRowCount(panelName);
    let rowHeight = grid.rowHeight;

    let columns= grid.columns;
    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');

    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        if (i > grid.tbs_getRowCount() - 1) break;

        let tableRow = tableRows[tableRowIndex];

        /* Render: TableRow */
        grid.classRender.setTableRow(tableRow, i, panelName);

        let selectedValue = grid.tbs_isSelectedCell('panel31', i, 0);
        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x]; //content tr > tableCell
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            } else {
                if (x < startColumnIndex) continue;
            }

            let column = grid.columns[x];
            let columnName = column[grid.column_name];
            //let layout = grid.tbs_getLayout(i, column[grid.column_name]);
            //let colValue = layout[grid.layout_text];
            let colValue = grid.tbs_getText(i, columnName);
            let divCell = tableCell.childNodes[0];
            // When x == startColumnIndex, tree icon

            // open all
            if (x == startColumnIndex) {
                let row = grid.tbs_getRow(i);
                let rowDepth = row[grid.code_depth];
                let childrenRows = row[grid.code_children];

                let icon = grid.tbs_createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                grid.tbs_prependIcon(tableCell, icon);
                grid.classTree.setTreeIcon(tableCell, i);

                grid.tbs_setCellStyle(divCell  , 'paddingLeft', (rowDepth * 15) + 'px');
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , column[grid.column_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
            }
            else {
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , column[grid.column_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
            }
            grid.classRender.showSelectedCells(panelName, tableCell, i, x);
            let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
            grid.tbs_setCell(spanText, 'textContent', colValue);
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
TbsGridTree.prototype.setTreeDataSummaryTable = function (param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataSummaryTable(param);
}
TbsGridTree.prototype.setTreeDataHeaderTable1 = function(param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataHeaderTable1(param);
}
TbsGridTree.prototype.setTreeDataHeaderTable2 = function(param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataHeaderTable2(param);

}
TbsGridTree.prototype.setTreeDataHeaderTable3 = function(param) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_setDataHeaderTable0(param);
}
TbsGridTree.prototype.setTreeIcon = function (tableCell, rowIndex) {
    let selector = this.selector;
    let grid = this.grid;

    let row = grid.tbs_getRow(rowIndex);
    let arrayChildren = row[grid.code_children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

    if (arrayChildren.length > 0) {
        let nextRow = grid.tbs_getRow(rowIndex + 1);
        if (grid.null(nextRow)) grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
        else {
            if (nextRow[grid.classTree.options[grid.code_parentName]] == row[grid.classTree.options['itemName']])
                grid.classTree.toggleTreeIcon(rowIndex, element, 'open');
            else
                grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
        }
    }
    else grid.classTree.toggleTreeIcon(rowIndex, element);
}
TbsGridTree.prototype.toggleTreeIcon = function (rowIndex, element, type) {
    let selector = this.selector;
    let grid = this.grid;

    if      (type == grid.code_open)   element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_open.png)';
    else if (type == grid.code_closed) element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    else element.style['backgroundImage'] = '';
}
TbsGridTree.prototype.getTreeFlodingStatus = function (tableCell) {
    let selector = this.selector;
    let grid = this.grid;

    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;

    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return grid.code_open;
    else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return grid.code_closed;
    else return null;
}
TbsGridTree.prototype.setTreeFolding = function (tableCell) {
    let selector = this.selector;
    let grid = this.grid;

    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.tbs_getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;

    let folding = grid.classTree.getTreeFlodingStatus(tableCell);
    if      (folding == grid.code_open)   grid.classTree.closeTreeRow(rowIndex);
    else if (folding == grid.code_closed) grid.classTree.openTreeRow(rowIndex, false);

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
}
TbsGridTree.prototype.getTreeChildrenRows = function (folding, rowIndex, isAll = true) {
    // folding : open, closed
    let selector = this.selector;
    let grid = this.grid;

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
TbsGridTree.prototype.openTreeRow = function (rowIndex) {
    let selector = this.selector;
    let grid = this.grid;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.code_rowId])
            grid.data_table[i][grid.code_isOpen] = true; // keep folding status
    }

    let rows = grid.classTree.getTreeChildrenRows(grid.code_open, rowIndex, false);
    grid.classTree.addTreeRows(rowIndex);

}
TbsGridTree.prototype.closeTreeRow = function (rowIndex) {
    let selector = this.selector;
    let grid = this.grid;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.code_rowId])
            grid.data_table[i][grid.code_isOpen] = false; // keep folding status
    }

    let rows = grid.classTree.getTreeChildrenRows(grid.code_closed, rowIndex, true);
    rows.map(row => grid.classTree.removeTreeRow(row));

}
TbsGridTree.prototype.addTreeRows = function (rowIndex) {
    let selector = this.selector;
    let grid = this.grid;

    let rows = grid.classTree.getTreeChildrenRows(grid.code_open, rowIndex, false);
    for (let i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
        grid.classTree.addTreeRow(startRowIndex, rows[i]);
    }
}
TbsGridTree.prototype.addTreeRow = function (startRowIndex, row) {
    let selector = this.selector;
    let grid = this.grid;

    startRowIndex = parseInt(startRowIndex);
    if (startRowIndex == grid.data_view.length) {
        grid.data_view.push(row);
    }
    else {
        grid.data_view.splice(startRowIndex, 0, row);
    }
}
TbsGridTree.prototype.removeTreeRow = function (row) {
    let selector = this.selector;
    let grid = this.grid;

    grid.tbs_removeRowInPanel30(row);
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
}

/* User Functions */


