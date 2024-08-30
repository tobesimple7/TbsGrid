class TbsGridGroup {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }
}
/**
 * @function tbs_createGroupData
 *
 * @param dataRows
 * @returns {*[]}
 */
TbsGrid.prototype.tbs_createGroupData = function(dataRows){
    let selector = '#' + this.gridId;
    let grid = this;

    let resultRows = [];
    const fn_getChildrenRowIds = function(row) {
        row[grid.const_children] = [];
        for (let i = 0, len = resultRows.length; i < len; i++) {
            let resultRow = resultRows[i];
            if (row[grid.const_num] == resultRow[grid.const_parentNum]) {
                row[grid.const_children].push(resultRow[grid.const_rowId]);
            }
        }
    }
    const fn_setRelation = function(row, depth, parentNum = 0) {
        row[grid.const_num] = row[grid.const_rowId] + 1;
        row[grid.const_parentNum] = parentNum;
        resultRows.push(grid.tbs_copyJson(row));

        if (depth == grid.groupColumns.length + 1) return;

        let key= grid.tbs_getGroupKeyByDepth(row, depth);
        for (let i = 0, len = dataRows.length; i < len; i++) {
            let dataRow = dataRows[i];
            let childKey = grid.tbs_getGroupKeyByDepth(dataRow, depth);
            let childDepth = dataRow[grid.const_depth];
            if (key == childKey && childDepth == depth + 1) fn_setRelation(dataRow, depth + 1, row[grid.const_num]);
        }
    }
    // craete dataRows depth
    let maxDepth = grid.groupColumns.length + 1;
    dataRows.map(row => row[grid.const_depth] = maxDepth);

    // create group data
    let groupData = grid.tbs_createGroupKeyData(dataRows);
    groupData.map(row => {
        row[grid.const_rowId] = grid.maxRowId = grid.maxRowId + 1; // create rowId
        dataRows.push(row);
    });

    // 1th Depth Row Loop
    for (let i = 0, len= dataRows.length; i < len; i++) {
        let row = dataRows[i];
        if (row[grid.const_depth] && row[grid.const_depth] == 1) fn_setRelation(row, 1);
    }
    resultRows.map(row => fn_getChildrenRowIds(row));
    return resultRows;
}
/**
 * @function tbs_createGroupKeyData
 *
 * @param dataRows
 * @param depth
 * @returns {*[]}
 */
TbsGrid.prototype.tbs_createGroupKeyData = function(dataRows, depth = 1){
    let selector = '#' + this.gridId;
    let grid = this;

    let resultRows= [];
    let tempRows = [];

    const fn_getKey = function(row, depth) {
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.groupColumns[i];
            let name = groupColumn[grid.column_name];
            key += '-' + row[name];
        }
        return key;
    }
    const fn_getKeyData = function(row, depth) {
        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.groupColumns[i];
            let name = groupColumn[grid.column_name];
            tempRow[name] = row[name];
            tempRow[grid.const_depth] = depth;
        }
        return tempRow;
    }
    for (let i = depth, len = grid.groupColumns.length + 1; i < len; i++) {
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
        let groupColumn = grid.groupColumns[i];
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
        let groupColumn = grid.groupColumns[i];
        let name = groupColumn[grid.column_name];
        tempRow[name] = row[name];
        tempRow[grid.const_depth] = depth;
    }
    return tempRow;
}
TbsGrid.prototype.tbs_setgroupColumns = function(groupColumns){
    let selector = '#' + this.gridId;
    let grid = this;

    grid.groupColumns = groupColumns;
}
TbsGrid.prototype.tbs_setGroupData = function (data, openDepth) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.grid_mode = grid.code_group;
    if (grid.null(data) || data.length == 0) return;

    grid.data_user = grid.tbs_copyJson(data);
    grid.data_table = [];
    grid.data_view = [];

    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];

    let columns = grid.columns;
    let dataRows = grid.tbs_copyJson(data); // deep copy
    grid.tbs_sortJsonData(dataRows, grid.groupColumns);

    dataRows.map((dataRow, rowIndex) => dataRow[grid.const_rowId] = rowIndex);
    this.maxRowId = dataRows.length;

    // create data
    dataRows = grid.tbs_createGroupData(dataRows);

    let count = dataRows.length;
    for (let i = 0; i < count; i++) {
        let source = {};
        let data30 = {};
        let row = dataRows[i];

        source[grid.const_rowId]  = data30[grid.const_rowId] = row[grid.const_rowId];
        source[grid.const_mode]   = data30[grid.const_mode]  = ''; // S, U, I, D, blank
        source[grid.const_depth]  = data30[grid.const_depth] = row[grid.const_depth];
        source[grid.const_num]    = data30[grid.const_num]   = row[grid.const_num];
        source[grid.const_parentNum] = data30[grid.const_parentNum]   = row[grid.const_parentNum];

        source[grid.const_children] = grid.tbs_copyJson(row[grid.const_children]);
        data30[grid.const_children] = grid.tbs_copyJson(row[grid.const_children]);
        source[grid.const_isOpen]   = false;// keep open, closed state

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
            source.layout[id][grid.layout_visible] = col[grid.column_visible]; //for merge cell
            source.layout[id][grid.layout_text] = grid.tbs_getFormatText(col, row[id]);
            source.layout[id][grid.layout_rowSpan] = 1;
            source.layout[id][grid.layout_colSpan] = 1;
            source.layout[id][grid.layout_subRowSpan] = 1;
            source.layout[id][grid.layout_subColSpan] = 1;
            source.layout[id][grid.layout_color]     = '';
            source.layout[id][grid.layout_backgroundColor]= '';

            data30.data[id] = val;
            data30.layout[id] = {};
            data30.layout[id][grid.layout_visible] = col[grid.column_visible];
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
    //if (grid.notNull(openDepth)) {
    //    for (let i = grid.data_view.length - 1; i >= 0; i--) {
    //        let row = grid.data_view[i];
    //        let depth = row.depth;
    //        if (depth > openDepth) grid.data_view.splice(i, 1);
    //    }
    //}

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
        grid.tbs_displayPanel40('panel40', grid.topColumns);
        grid.tbs_displayPanel50('panel50', grid.footerColumns);
    }
    if (grid.options[grid.option_autoWidth] == true)  grid.tbs_setColumnAutoWidth();

    grid.tbs_getGroupButtonList();

    grid.tbs_removeRange(0, -1);
    grid.tbs_selectRange(0, 0, 0, 0);
}
//================================================================
/**
 *
 * spanIcon, spanImg, spanText
 *
 */
TbsGrid.prototype.tbs_setGroupIcon = function (tableCell, rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;
    let row = grid.tbs_getRow(rowIndex);
    let arr = row[grid.const_children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

    if (arr.length > 0) {
        let nextRow = grid.tbs_getRow(rowIndex + 1);
        if (grid.null(nextRow)) grid.tbs_toggleGroupIcon(rowIndex, element, 'closed');
        else {
            if (nextRow[grid.const_parentNum] == row[grid.const_num])
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
    if      (type == grid.const_open)   element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_open.png)';
    else if (type == grid.const_closed) element.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    else element.style['backgroundImage'] = '';
}
/**
 * @function tbs_isGroupChildrenRow
 *
 * @Description Check if children rows exists
 * @param rowIndex
 * @returns {boolean}
 */
TbsGrid.prototype.tbs_isGroupChildrenRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    let row = grid.tbs_getRow(rowIndex);
    let childRow = grid.tbs_getRow(rowIndex + 1);

    if (grid.null(childRow)) result = false;
    else {
        if (row[grid.const_num] == childRow[grid.const_parentNum]) result = true;
    }
    return result;
}
/**
 * @function tbs_getGroupChildrenRows
 *
 * @description find in data source
 * @param folding
 * @param rowIndex
 * @param isAll
 * @returns {*[]}
 */
TbsGrid.prototype.tbs_getGroupChildrenRows = function (folding, rowIndex, isAll = true) {
    // folding : open, closed
    let selector = '#' + this.gridId;
    let grid = this;

    let dataRows= grid.data_table;
    let resultRows= [];
    const fn_getChildrenRows = function(row, count) {
        if (Object.keys(row).length == 0) return;

        if (count > 1) resultRows.push(grid.tbs_copyJson(row));

        let arr = row[grid.const_children];
        if (arr.length > 0) {
            //default : get first lower rows
            if (count == 1) {
                for (let i = 0, len = arr.length; i < len; i++) {
                    let dataRow = grid.tbs_getSourceRowByRowId(arr[i]);
                    fn_getChildrenRows(dataRow, count + 1);
                }
            }
            else {
                if (folding == grid.const_open) {
                    if (row[grid.const_isOpen]) {
                        for (let i = 0, len = arr.length; i < len; i++) {
                            let dataRow = grid.tbs_getSourceRowByRowId(arr[i]);
                            fn_getChildrenRows(dataRow, count + 1);
                        }
                    }
                }
                else {
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let dataRow = grid.tbs_getSourceRowByRowId(arr[i]);
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
//================================================================
TbsGrid.prototype.tbs_setGroupFolding = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.tbs_getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;

    let folding = grid.tbs_getGroupFlodingStatus(tableCell);
    if      (folding == grid.const_open)   grid.tbs_closeGroupRow(rowIndex);
    else if (folding == grid.const_closed) grid.tbs_openGroupRow(rowIndex, false);

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
}
TbsGrid.prototype.tbs_getGroupFlodingStatus = function (tableCell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;

    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return grid.const_open;
    else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return grid.const_closed;
    else return null;
}
TbsGrid.prototype.tbs_openGroupRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.const_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.const_rowId])
            grid.data_table[i][grid.const_isOpen] = true; // keep folding status
    }

    let rows = grid.tbs_getGroupChildrenRows(grid.const_open, rowIndex, false);
    grid.tbs_addGroupRows(rowIndex);
}
TbsGrid.prototype.tbs_closeGroupRow = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let row = grid.tbs_getRow(rowIndex);
    let rowId = row[grid.const_rowId];
    for (let i = 0, len = grid.data_table.length; i < len; i++) {
        if (rowId == grid.data_table[i][grid.const_rowId])
            grid.data_table[i][grid.const_isOpen] = false; // keep folding status
    }

    let rows = grid.tbs_getGroupChildrenRows(grid.const_closed, rowIndex, true);
    rows.map(row=> grid.tbs_removeGroupRow(row));
}
TbsGrid.prototype.tbs_addGroupRows = function (rowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let rows = grid.tbs_getGroupChildrenRows(grid.const_open, rowIndex, false);
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
//================================================================
TbsGrid.prototype.tbs_setGroupDataTable1 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataTable1(param);
}
TbsGrid.prototype.tbs_setGroupDataTable2 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataTable2(param);
}
TbsGrid.prototype.tbs_setGroupDataTable3 = function (param) {
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

            let row = grid.tbs_getRow(i);
            let rowDepth = row[grid.const_depth];

            if (x == startColumnIndex) {
                let icon = grid.tbs_createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                grid.tbs_prependIcon(tableCell, icon);
                grid.tbs_setGroupIcon(tableCell, i);

                grid.tbs_setCellStyle(divCell  , 'paddingLeft', (rowDepth * 15) + 'px');
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , layout[grid.layout_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', layout[grid.layout_rowSpan]);
                grid.tbs_setSelectedCell(panelName, tableCell, i, x);
                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                if (rowDepth <= grid.groupColumns.length) {
                    colValue = grid.getText(i, grid.groupColumns[rowDepth - 1][grid.column_name]) + '(' + row[grid.const_children].length + ')';
                }
                grid.tbs_setCell(spanText, 'textContent', colValue);
            }
            else {
                grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
                grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
                grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
                grid.tbs_setCellStyle(tableCell, 'display'        , layout[grid.layout_visible] == true ? '' : 'none');
                grid.tbs_setCell(tableCell, 'rowSpan', '1');
                grid.tbs_setCell(tableCell, 'rowSpan', layout[grid.layout_rowSpan]);
                grid.tbs_setSelectedCell(panelName, tableCell, i, x);
                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                if (rowDepth <= grid.groupColumns.length) colValue = null;
                grid.tbs_setCell(spanText, 'textContent', colValue);
            }
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
TbsGrid.prototype.tbs_setGroupDataSummaryTable = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataSummaryTable(param);
}
TbsGrid.prototype.tbs_setGroupDataHeaderTable1 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataHeaderTable1(param);
}
TbsGrid.prototype.tbs_setGroupDataHeaderTable2 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setDataHeaderTable2(param);

}
TbsGrid.prototype.tbs_setGroupDataHeaderTable3 = function(param) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setGroupDataHeaderTable3(param);
}
//================================================================
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
TbsGrid.prototype.tbs_clearGroupButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
    for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
}
TbsGrid.prototype.tbs_getGroupButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_clearGroupButtonList();

    let bar = document.querySelector(selector + ' .tbs-grid-panel-bar');
    let groupColumns= grid.groupColumns;

    for (let i = 0, len = groupColumns.length; i< len; i++) {
        let groupColumn = groupColumns[i];
        let button = grid.tbs_createGroupButton(groupColumn[grid.column_name]);
        let bar = document.querySelector(selector + ' .tbs-grid-panel-bar');
        if (grid.null(bar)) return;
        bar.append(button);
    }
    grid.tbs_togglePlaceHolder();
}
TbsGrid.prototype.tbs_togglePlaceHolder = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
    let span = document.querySelector(selector + ' .tbs-grid-panel-bar-span');
    if (buttons.length > 0) span.style.display = 'none';
    else span.style.display = '';
}
TbsGrid.prototype.tbs_addGroupButton = function (name, text, order, targetIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    // add groupColumn in grid.groupColumns
    // already existing column
    let groupColumns = grid.groupColumns;
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
    if (grid.notNull(targetIndex)) grid.groupColumns.splice(targetIndex, 0, column);
    else grid.groupColumns.push(column);

    // add button in group panel
    let button = grid.tbs_createGroupButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
    else bar.append(button);

    grid.tbs_togglePlaceHolder();

    let data = grid.data_user;
    grid.tbs_setGroupData(data);
}
TbsGrid.prototype.tbs_removeGroupButton = function (element) {
    let selector = '#' + this.gridId;
    let grid = this;

    // remove groupColumn in grid.groupColumns
    let name = element.dataset.name;
    let columnIndex;
    let groupColumns= grid.groupColumns;
    for (let i = 0, len= groupColumns; i < len; i ++) {
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

    grid.tbs_togglePlaceHolder();

    let data = grid.data_user;
    grid.tbs_setGroupData(data);
}