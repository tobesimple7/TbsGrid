/*
    rednder : string, number, currency, combo, date
 */
class TbsGridRender {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;
        //---
        this.column = null;
        this.columnIndex = null;
        this.columnName = null;
        this.columnType = null;

        this.valueName = null;
        this.textName = null;

        this.rowIndex = null;
        this.columnIndex = null;

        //---
        this.cellValue = null;
        this.cellText = null; //user

        this.align = null; //user
        this.className = null; //user

        this.width = null;
        this.visible = null;

        this.tableCell = null;
        this.panelName = null;
    }
}

//================================================

/* Cell Interface  */
TbsGridRender.prototype.init = function(panelName, tableCell, column, rowIndex, columnIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    this.panelName  = null;
    this.tableCell  = null;
    this.column     = null;
    this.rowIndex   = null;
    this.columnIndex= null;

    this.columnName = null;
    this.columnType = null;

    this.align      = null;
    this.className  = null;
    this.width      = null;
    this.visible    = null;

    this.cellValue  = null;
    this.cellText   = null;
}
TbsGridRender.prototype.start = function(panelName, tableCell, column, rowIndex, columnIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    this.init();

    this.panelName  = panelName;
    this.tableCell  = tableCell;
    this.column     = column;
    this.rowIndex   = rowIndex;
    this.columnIndex= columnIndex;

    this.columnName = column[grid.column_name];
    this.columnType = column[grid.column_type];
    
    this.visible    = column[grid.column_visible];
    this.width      = column[grid.column_width];

    if (this.panelName == 'panel40' || this.panelName == 'panel42') {
        let topColumn   = grid.tbs_getTopColumn(this.columnName);
        if (grid.notNull(topColumn)) {
            this.align      = grid.notNull(topColumn[grid.column_align])     ? topColumn[grid.column_align]     : column[grid.column_align];
            this.className  = grid.notNull(topColumn[grid.column_className]) ? topColumn[grid.column_className] : grid.tbs_getColumnProperty(this.columnName, grid.column_className);
        }
        else {
            this.align      = column[grid.column_align];
            this.className  = grid.tbs_getColumnProperty(this.columnName, grid.column_className);
        }
        this.cellValue  = grid.tbs_getTopValue(this.rowIndex, this.columnName);
        this.cellText   = grid.tbs_getTopText(this.rowIndex, this.columnName);
    }
    else if (this.panelName == 'panel50' || this.panelName == 'panel52') {
        let footerColumn   = grid.tbs_getFooterColumn(this.columnName);
        if (grid.notNull(footerColumn)) {
            this.align      = grid.notNull(footerColumn[grid.column_align])     ? footerColumn[grid.column_align]     : column[grid.column_align];
            this.className  = grid.notNull(footerColumn[grid.column_className]) ? footerColumn[grid.column_className] : grid.tbs_getColumnProperty(this.columnName, grid.column_className);
        }
        else {
            this.align      = column[grid.column_align];
            this.className  = grid.tbs_getColumnProperty(this.columnName, grid.column_className);
        }
        this.cellValue  = grid.tbs_getFooterValue(this.rowIndex, this.columnName);
        this.cellText   = grid.tbs_getFooterText(this.rowIndex, this.columnName);
    }
    else {
        this.align      = column[grid.column_align];
        this.className  = grid.tbs_getColumnProperty(this.columnName, grid.column_className);
        this.cellValue  = grid.tbs_getValue(this.rowIndex, this.columnName);
        this.cellText   = grid.tbs_getText(this.rowIndex, this.columnName);
    }

    this.updateData();
}
TbsGridRender.prototype.updateData = function() {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    if (grid.grid_mode == grid.code_group) {
        if (this.panelName == 'panel30' || this.panelName == 'panel32') {
            if (this.columnName == 'group_column') {
                let row = grid.tbs_getRow(this.rowIndex);
                let rowDepth = row[grid.code_depth];
                if (rowDepth <= grid.classGroup.groupColumns.length) {
                    this.cellText = grid.getText(this.rowIndex, grid.classGroup.groupColumns[rowDepth - 1][grid.column_name]) + '(' + row[grid.code_children].length + ')';
                }
            }
        }
    }
    if (grid.fixedColumnIndex != -1) {
        if (this.panelName.substring(6) == '2') {
            if (this.columnIndex > grid.fixedColumnIndex) this.visible = false;
        }
        else if (this.panelName.substring(6) == '0') {
            if (this.columnIndex <= grid.fixedColumnIndex) this.visible = false;
        }
    }

    this.updateUserData();
}
TbsGridRender.prototype.updateUserData = function() {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    this.setHtml();
}
TbsGridRender.prototype.setHtml = function() {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;
    if (this.panelName == 'panel30' || this.panelName == 'panel32') {
        if (grid.fixedColumnIndex != -1) {
            if (grid.grid_mode == grid.code_group) {
                if (this.columnName == 'group_column') {
                    let row = grid.tbs_getRow(this.rowIndex);
                    let rowDepth = row[grid.code_depth];

                    let icon = grid.tbs_createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                    grid.tbs_prependIcon(this.tableCell, icon);
                    grid.classGroup.setGroupIcon(this.tableCell, this.rowIndex);
                    grid.tbs_setCellStyle(this.tableCell.childNodes[0]  , 'paddingLeft', (rowDepth * 15) + 'px');
                }
                else {
                    let icons = this.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
                    if (icons.length > 0) icons[0].remove();
                }
            }
        }
        else {
            if (grid.grid_mode == grid.code_group) {
                if (this.columnName == 'group_column') {
                    let row = grid.tbs_getRow(this.rowIndex);
                    let rowDepth = row[grid.code_depth];

                    let icon = grid.tbs_createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                    grid.tbs_prependIcon(this.tableCell, icon);
                    grid.classGroup.setGroupIcon(this.tableCell, this.rowIndex);
                    grid.tbs_setCellStyle(this.tableCell.childNodes[0], 'paddingLeft', (rowDepth * 15) + 'px');
                } else {
                    let icons = this.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
                    if (icons.length > 0) icons[0].remove();
                }
            }
        }
    }

    this.setBounding();
}
TbsGridRender.prototype.setBounding = function() {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    grid.tbs_setCellStyle(this.tableCell, 'display'  , this.visible == true ? '' : 'none');

    grid.tbs_addUserClass(this.tableCell, this.className); // user event
    grid.tbs_setCellStyle(this.tableCell, 'textAlign', this.align); // user event
    grid.tbs_setCellStyle(this.tableCell, 'width'    , this.width + 'px');

    if (this.panelName == 'panel72' || this.panelName == 'panel70') {}
    else {
        let spanText = this.tableCell.querySelector('.tbs-grid-cell-div-text');
        grid.tbs_setCell(spanText, 'textContent', this.cellText); // user event
    }
    if (grid.user_cellBounding) {
        if (this.panelName.substring(6) == '0' || this.panelName.substring(6) == '2') {
            let param = { element:this.tableCell, rowIndex: this.rowIndex, cellIndex: this.columnIndex };
            grid.tbs_executeEvent(grid.cellBounding, 'cellBounding', param);
        }
    }
}

//================================================

/* html util */
TbsGridRender.prototype.setTableHead = function(panelName) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;
    if (grid.fixedColumnIndex != -1) {
        let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');

        for (let x = 0, len = grid.columns.length; x < len; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];

            grid.tbs_setCellStyle(tableCell, 'width', column[grid.column_width] + 'px');
            grid.tbs_setCellStyle(tableCell, 'display', '');
            if (column[grid.column_visible] == false) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
            if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
            else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
        }
    }
    else {
        let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');

        for (let x = 0, len = grid.columns.length; x < len; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];
            if (panelName.substring(6) == '0') {
                grid.tbs_setCellStyle(tableCell, 'display', column[grid.column_visible] ? '' : 'none');
                grid.tbs_setCellStyle(tableCell, 'width', column[grid.column_width] + 'px');
                //grid.tbs_setCellStyle(tableCell, 'display', '');
            }
        }
    }
}
TbsGridRender.prototype.setTableRow = function(tableRow, rowIndex, panelName = 'panel30') {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;
    //console.log(panelName + ' :setTableRow');
    tableRow.dataset.rowIndex = rowIndex;

    if (tableRow.style.height != grid.rowHeight + 'px') tableRow.style.height = grid.rowHeight + 'px';

    if (tableRow.style.display == 'none') tableRow.style.display = '';

    if (grid.grid_mode == grid.code_group) {
        if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
            let rowData = grid.getRow(rowIndex);
            let depth = rowData[grid.code_depth];
            let count = grid.null(rowData[grid.code_children]) ? 0 : rowData[grid.code_children].length;
            if (count > 0) {
                if      (depth == '1') grid.tbs_addUserClass(tableRow, 'tbs-row-color1');
                else if (depth == '2') grid.tbs_addUserClass(tableRow, 'tbs-row-color2');
                else if (depth == '3') grid.tbs_addUserClass(tableRow, 'tbs-row-color3');
                else if (depth == '4') grid.tbs_addUserClass(tableRow, 'tbs-row-color4');
                else if (depth == '5') grid.tbs_addUserClass(tableRow, 'tbs-row-color5');
                else grid.tbs_addUserClass(tableRow, 'tbs-row-color5');
            }
            else {
                if      (depth == '1') grid.tbs_removeUserClass(tableRow, 'tbs-row-color1');
                else if (depth == '2') grid.tbs_removeUserClass(tableRow, 'tbs-row-color2');
                else if (depth == '3') grid.tbs_removeUserClass(tableRow, 'tbs-row-color3');
                else if (depth == '4') grid.tbs_removeUserClass(tableRow, 'tbs-row-color4');
                else if (depth == '5') grid.tbs_removeUserClass(tableRow, 'tbs-row-color5');
                else {
                    grid.tbs_addUserClass(tableRow, 'tbs-row-color5');
                }
            }
        }
        if (grid.user_rowBounding) {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
                grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
            }
        }
    }
    else {
        if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
            let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
            grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
        }
    }
    /* row alternative background color */
    grid.classRender.showAlternativeRowColor(panelName, tableRow, rowIndex);
}
TbsGridRender.prototype.showAlternativeRowColor = function (panelName, tableRow, rowIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;
    return;
    tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
    if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
    else tableRow.classList.add('tbs-grid-tr-bg');
}
TbsGridRender.prototype.hideTableRows = function (panelName, tableRows, fromRowIndex, toRowIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
        let tableRow = tableRows[i];
        if (tableRow) {
            if (tableRow.style.display != 'none') tableRow.style.display = 'none';
        }
    }
}
TbsGridRender.prototype.hideTableCells = function (panelName, tableRow, lastColumnIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    //console.log(panelName + ' hideTableCells = function (panelName, tableRow, lastColumnIndex)');
    if (grid.fixedColumnIndex != -1) {
        for (let x = 0, len = grid.columns.length; x < len; x++) {
            let tableCell = tableRow.childNodes[x];

            if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
            else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
        }
    }
}
TbsGridRender.prototype.showSelectedCells = function(panelName, tableCell, rowIndex, cellIndex) {
    let selector = this.selector;
    let grid = this.grid;
    let classRender = this;

    let value = grid.tbs_isSelectedCell(panelName, rowIndex, cellIndex);
    if (value == 1) {
        if (grid.startRowIndex == rowIndex && grid.startCellIndex == cellIndex) tableCell.classList.add('tbs-grid-cell-start');
        else tableCell.classList.add('tbs-grid-cell-select');
    }
}