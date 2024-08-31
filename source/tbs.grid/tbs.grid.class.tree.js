class TbsGridTree {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.options = {};
        this.options['name'		  ] = null;
        this.options['parentName' ] = null;
        this.options['rootValue'  ] = null;
        this.options['sortColumns'] = null;
    }
}
TbsGridTree.prototype.tbs_setTreeOption = function (optionName, optionValue) {
    let selector = this.selector;
    let grid = this.grid;
    let classTree = this;

    classTree.options[optionName] = optionValue;
}
TbsGrid.prototype.tbs_createTreeData = function(dataRows) {
    /**
     * @function tbs_createTreeData
     *
     * @description crateData
     * @param dataRows
     * @param isPartData part data
     *
     * @returns {*[]}
     */
    let selector = '#' + this.gridId;
    let grid = this;

    let copyRows = [];
    let resultRows = [];

    dataRows.map(row => copyRows.push(grid.tbs_copyJson(row)));
    const fn_getChildrenRowIds = function(row) {
        row[grid.code_children] = [];
        for (let i = 0, len= copyRows.length; i < len; i++) {
            let copyRow = copyRows[i];
            if (row[grid.classTree.options['name']] == copyRow[grid.classTree.options['parentName']]) {
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
        if (grid.classTree.options['rootValue'] == copyRow[grid.classTree.options['parentName']]) {
            fn_addChildrenRows(copyRow);
        }
    }
    return resultRows;
}
TbsGrid.prototype.tbs_setTreeSortColumns = function (sortColumns) {
    let selector = '#' + this.gridId;
    let grid = this;
    this.sortColumns = grid.tbs_copyJson(sortColumns);
}
TbsGrid.prototype.tbs_setTreeData = function (data, openDepth) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.grid_mode = grid.code_tree;
    if (grid.null(data)) return;

    grid.data_user = grid.tbs_copyJson(data);
    grid.data_table = [];
    grid.data_view = [];

    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];

    let columns = grid.columns;
    let dataRows= data;

    dataRows.map((dataRow, rowIndex) => dataRow[grid.code_rowId] = rowIndex);

    // 1) data sorting (to do : sorting)
    // 2) data setting : all rows
    dataRows = grid.tbs_createTreeData(dataRows);

    let count = dataRows.length;
    for (let i = 0; i < count; i++) {
        let source = {};
        let data30 = {};
        let row = dataRows[i];

        source[grid.code_rowId] = data30[grid.code_rowId] = row[grid.code_rowId];
        source[grid.code_mode]     = data30[grid.code_mode]  = ''; // S, U, I, D, blank
        source[grid.code_depth]    = data30[grid.code_depth] = row[grid.code_depth];

        //data30[grid.const_seq]   = parseInt(i + 1);
        source[grid.code_children] = grid.tbs_copyJson(row[grid.code_children]);
        data30[grid.code_children] = grid.tbs_copyJson(row[grid.code_children]);
        source[grid.code_isOpen]   = false;// keep open, closed state

        source.data = {}; source.layout = {};
        data30.data = {}; data30.layout = {};

        for (let colIndex= 0, len= columns.length; colIndex < len; colIndex++) {
            let col = columns[colIndex];
            let id  = col[grid.column_name];
            let val = grid.null(row[id]) ? null : grid.tbs_getFormatValue(col, row[id]);
            let colType = columns[colIndex][grid.column_type];

            source.data[id] = val;
            data30.data[id] = val;

            source.layout[id] = {};
            //source.layout[id][grid.layout_visible] = col[grid.column_visible]; //for merge cell
            source.layout[id][grid.layout_text] = grid.tbs_getFormatText(col, row[id]);
            source.layout[id][grid.layout_rowSpan] = 1;
            source.layout[id][grid.layout_colSpan] = 1;
            source.layout[id][grid.layout_subRowSpan] = 1;
            source.layout[id][grid.layout_subColSpan] = 1;
            source.layout[id][grid.layout_color]     = '';
            source.layout[id][grid.layout_backgroundColor]= '';

            data30.data[id] = val;
            data30.layout[id] = {};
            //data30.layout[id][grid.layout_visible] = col[grid.column_visible];
            data30.layout[id][grid.layout_text] = grid.tbs_getFormatText(col, row[id]);
            data30.layout[id][grid.layout_rowSpan] = 1;
            data30.layout[id][grid.layout_colSpan] = 1;
            data30.layout[id][grid.layout_subRowSpan] = 1;
            data30.layout[id][grid.layout_subColSpan] = 1;
            data30.layout[id][grid.layout_color]     = '';
            data30.layout[id][grid.layout_backgroundColor]= '';

        }
        grid.data_table.push(source);
        grid.data_view.push(data30);
    }

    //=======================================
    // open depth
    //=======================================
    if (grid.notNull(openDepth)) {
        for (let i = grid.data_view.length - 1; i >= 0; i--) {
            let row = grid.data_view[i];
            let depth = row.depth;
            if (depth > openDepth) grid.data_view.splice(i, 1);
        }
    }
    grid.maxRowId = dataRows.length;
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
    grid.tbs_selectRange(0, 0, 0, 0);
}
TbsGrid.prototype.tbs_setTreeDataTable1 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataTable1(param);
}
TbsGrid.prototype.tbs_setTreeDataTable2 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataTable2(param);
}
/**
 * @function tbs_setTreeDataTable3
 *
 * @description set panel30 tree data
 * @param param { panelName: panelName, topRowIndex: topRowIndex }
 *
 */
TbsGrid.prototype.tbs_setTreeDataTable3 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

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
        tableRow.dataset.rowIndex = i;

        if (tableRow.style.height != grid.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';

        // row alternative background color
        grid.tbs_setAlternativeRowColor(panelName, tableRow, i);

        let selectedValue = grid.tbs_isSelectedCell('panel31', i, 0);
        if (tableRow.style.display == 'none') tableRow.style.display = '';

        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x]; //content tr > tableCell
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            } else {
                if (x < startColumnIndex) continue;
            }

            let column = grid.columns[x];
            let layout = grid.tbs_getLayout(i, column[grid.column_name]);
            let colValue = layout[grid.layout_text];
            let divCell = tableCell.childNodes[0];
            // When x == startColumnIndex, tree icon

            // open all
            if (x == startColumnIndex) {
                let row = grid.tbs_getRow(i);
                let rowDepth = row[grid.code_depth];
                let childrenRows = row[grid.code_children];

                let icon = grid.tbs_createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                grid.tbs_prependIcon(tableCell, icon);
                grid.tbs_setTreeIcon(tableCell, i);

                grid.tbs_setCellStyle(divCell  , 'paddingLeft', (rowDepth * 15) + 'px');
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , column[grid.column_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', layout[grid.layout_rowSpan]);
            }
            else {
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , column[grid.column_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', layout[grid.layout_rowSpan]);
            }
            grid.tbs_setSelectedCell(panelName, tableCell, i, x);
            let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
            grid.tbs_setCell(spanText, 'textContent', colValue);
        }
        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell= tableRow.childNodes[x];
            if (grid.fixedColumnIndex != -1 && x <= grid.fixedColumnIndex)
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
        }
        tableRowIndex += 1;
    }
    // hide Unnecessary tableRows
    grid.tbs_hiddenTableRows(panelName, tableRows, tableRowIndex, grid.pageRowCount);

    // panel21 : display rowCount
    if (param.panelName == 'panel30') document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.tbs_getRowCount();
}
TbsGrid.prototype.tbs_setTreeDataSummaryTable = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataSummaryTable(param);
}
TbsGrid.prototype.tbs_setTreeDataHeaderTable1 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataHeaderTable1(param);
}
TbsGrid.prototype.tbs_setTreeDataHeaderTable2 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataHeaderTable2(param);

}
TbsGrid.prototype.tbs_setTreeDataHeaderTable3 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataHeaderTable3(param);
}
/**
 *
 * spanIcon, spanImg, spanText
 *
 */
TbsGrid.prototype.tbs_setTreeIcon = function (tableCell, rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;
    let row = grid.tbs_getRow(rowIndex);
    let arrayChildren = row[grid.code_children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

    if (arrayChildren.length > 0) {
        let nextRow = grid.tbs_getRow(rowIndex + 1);
        if (grid.null(nextRow)) grid.tbs_toggleTreeIcon(rowIndex, element, 'closed');
        else {
            if (nextRow.data[grid.classTree.options['parentName']] == row.data[grid.classTree.options['itemName']])
                grid.tbs_toggleTreeIcon(rowIndex, element, 'open');
            else
                grid.tbs_toggleTreeIcon(rowIndex, element, 'closed');
        }
    }
    else grid.tbs_toggleTreeIcon(rowIndex, element);
}
TbsGrid.prototype.tbs_toggleTreeIcon = function (rowIndex, element, type) {
    let selector = '#' + this.gridId;
    let grid = this;
    if      (type == grid.code_open)   element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_open.png)';
    else if (type == grid.code_closed) element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    else element.style['backgroundImage'] = '';
}
TbsGrid.prototype.tbs_getTreeFlodingStatus = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;

    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return grid.code_open;
    else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return grid.code_closed;
    else return null;
}
/**
 * @function tbs_setTreeFolding
 *
 * @Description Tbs grid event
 * @param tableCell
 */
TbsGrid.prototype.tbs_setTreeFolding = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.tbs_getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;

    let folding = grid.tbs_getTreeFlodingStatus(tableCell);
    if      (folding == grid.code_open)   grid.tbs_closeTreeRow(rowIndex);
    else if (folding == grid.code_closed) grid.tbs_openTreeRow(rowIndex, false);

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
}
TbsGrid.prototype.tbs_getTreeChildrenRows = function (folding, rowIndex, isAll = true) {
    // folding : open, closed
    let selector = '#' + this.gridId;
    let grid = this;

    let dataRows= grid.data_table;
    let resultRows= [];
    const fn_getChildrenRows = function(row, count) {
        if (count > 1) resultRows.push(grid.tbs_copyJson(row));
        let arr = row[grid.code_children]; //rowId array
        if (arr.length > 0) {
            //default : get first lower rows
            if (count == 1) {
                for (let i = 0, len = dataRows.length; i < len; i++) {
                    let dataRow = dataRows[i];
                    if (arr.indexOf(dataRow[grid.code_rowId]) != -1) {
                        fn_getChildrenRows(dataRow, count + 1);
                    }
                }
            }
            else {
                if (folding == grid.code_open) {
                    if (row[grid.code_isOpen]) {
                        for (let i = 0, len = dataRows.length; i < len; i++) {
                            let dataRow = dataRows[i];
                            if (arr.indexOf(dataRow[grid.code_rowId]) != -1) {
                                fn_getChildrenRows(dataRow, count + 1);
                            }
                        }
                    }
                }
                else {
                    for (let i = 0, len = dataRows.length; i < len; i++) {
                        let dataRow = dataRows[i];
                        if (arr.indexOf(dataRow[grid.code_rowId]) != -1) {
                            fn_getChildrenRows(dataRow, count + 1);
                        }
                    }
                }
            }
        }
    }
    let row = grid.tbs_getRow(rowIndex);
    fn_getChildrenRows(row, 1);
    return resultRows;
}
TbsGrid.prototype.tbs_openTreeRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.code_rowId])
            grid.data_table[i][grid.code_isOpen] = true; // keep folding status
    }

    let rows = grid.tbs_getTreeChildrenRows(grid.code_open, rowIndex, false);
    grid.tbs_addTreeRows(rowIndex);

}
TbsGrid.prototype.tbs_closeTreeRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.code_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.code_rowId])
            grid.data_table[i][grid.code_isOpen] = false; // keep folding status
    }

    let rows = grid.tbs_getTreeChildrenRows(grid.code_closed, rowIndex, true);
    rows.map(row => grid.tbs_removeTreeRow(row));

}
TbsGrid.prototype.tbs_addTreeRows = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rows = grid.tbs_getTreeChildrenRows(grid.code_open, rowIndex, false);
    for (let i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
        grid.tbs_addTreeRow(startRowIndex, rows[i]);
    }
}
TbsGrid.prototype.tbs_addTreeRow = function (startRowIndex, row) {
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
TbsGrid.prototype.tbs_removeTreeRow = function (row) {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_removeRowInPanel30(row);
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
}




