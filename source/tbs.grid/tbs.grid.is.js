TbsGrid.prototype.tbs_isSortableColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    //let column = grid.tbs_getColumn(columnName);

    // if (column[grid.column_sortable] == true)  result = true;
    // else if (column[grid.column_sortable] == false) result = false;
    // else {
        result = grid.options.column[grid.option_sortable];
    //}
    return result;
}
TbsGrid.prototype.tbs_isResizableColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    //let column = grid.tbs_getColumn(columnName);

    // if (column[grid.column_resizable] == true)  result = true;
    // else if (column[grid.column_resizable] == false) result = false;
    // else {
        result = grid.options.column[grid.option_resizable];
    // }
    return result;
}
TbsGrid.prototype.tbs_isMovableColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    //let column = grid.tbs_getColumn(columnName);

    // if (column[grid.column_movable] == true)  result = true;
    // else if (column[grid.column_movable] == false) result = false;
    // else {
        result = grid.options.column[grid.option_movable];
    // }
    return result;
}
TbsGrid.prototype.tbs_isAutoResizableColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    //let column = grid.tbs_getColumn(columnName);

    // if (column[grid.column_autoResizable] == true)  result = true;
    // else if (column[grid.column_autoResizable] == false) result = false;
    // else {
        result = grid.options.column[grid.option_autoResizable];
    //}
    return result;
}
TbsGrid.prototype.tbs_isAutoWidthColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    //let column = grid.tbs_getColumn(columnName);

    // if (column[grid.column_autoResizable] == true)  result = true;
    // else if (column[grid.column_autoResizable] == false) result = false;
    // else {
    result = grid.options.column[grid.option_autoWidth];
    //}
    return result;
}
TbsGrid.prototype.tbs_isClassName = function (element, className) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = element.classList.contains(className);
    return result;
}
TbsGrid.prototype.tbs_isNotValidColumnType = function (columnType) {
    let arr = ['string', 'number', 'combo', 'date'];
    return arr.indexOf(columnType) == -1 ? true : false;
}
TbsGrid.prototype.tbs_isInPanel = function(e, panelName, startX, startY) {  //tbs-grid-panel30
    /**
     * @function  tbs_isInPanel
     *
     * @Description is existed in panel
     * @param e
     * @param panelName
     * @deprecated startX
     * @deprecated startY
     * @returns {boolean}
     */
    let selector = '#' + this.gridId;
    let grid = this;

    //let lastX = window.pageXOffset + e.clientX;
    //let lastY = window.pageYOffset + e.clientY;

    let lastX = this.lastX;
    let lastY = this.lastY;

    let moveX = lastX - startX;
    let moveY = lastY - startY;

    let panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
    let absRect = grid.tbs_getOffset(panel);

    let rect= panel.getBoundingClientRect();
    let groupTop    = absRect.top;
    let groupBottom = absRect.top + rect.height;
    let groupLeft   = absRect.left;
    let groupRight  = absRect.left + rect.width;
    //outside area
    if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;
    else return true;
}
/* isSelectedCell */
TbsGrid.prototype.tbs_isSelectedCell = function (panelName, rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = [];
    if      (panelName == 'panel31') rows = this.data_select_panel31;
    else if (panelName == 'panel32') rows = this.data_select_panel30;
    else if (panelName == 'panel30') rows = this.data_select_panel30;

    else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;
    else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;
    else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;

    else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;
    else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;
    else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;

    else if (panelName == 'panel61') rows = this.data_select_panel31;
    else if (panelName == 'panel62') rows = this.data_select_panel30;
    else if (panelName == 'panel60') rows = this.data_select_panel30;
    else rows = this.data_select_panel30;

    for (let i = 0, len= rows.length; i < len; i++) {
        let row = rows[i];
        if (rowIndex == row[0][0]) {
            result = row[1][cellIndex];
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_isSelectedHeaderCell = function (panelName, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel30;

    for (let i = 0, len= rows.length; i < len; i++) {
        let row = rows[i];
        if (row[1][cellIndex] == 1) {
            result = row[1][cellIndex];
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_isSelectedCell31 = function (rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel31;
    for (let i = 0, len= rows.length; i < len; i++) {
        let row = rows[i];
        if (rowIndex == row[0][0]) {
            result = row[1][cellIndex];
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_isSelectedCell30 = function (rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel30;
    for (let i = 0, len= rows.length; i < len; i++) {
        let row = rows[i];
        if (rowIndex == row[0][0]) {
            result = row[1][cellIndex];
            break;
        }
    }
    return result;
}
/* columns */
TbsGrid.prototype.tbs_isColumnName = function (columnName) {
    let grid = this;

    let result = false;
    for (let i = 0, len = this.columns.length; i < len; i++) {
        let column = this.columns[i];
        if (columnName == column[grid.column_name]) {
            result = true;
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_isColumnTypeNumber = function (columnName) {
    let grid = this;

    let result = false;
    let column = grid.getColumn(columnName)
    if (column[grid.column_type] == grid.code_number || column[grid.column_type] == grid.code_currency) result = true;
    return result;
}
TbsGrid.prototype.tbs_isSortColumnName = function (columnName) {
    let grid = this;

    let result = false;
    for (let i = 0, len = this.sortColumns.length; i < len; i++) {
        let sortColumn = this.sortColumns[i];
        if (columnName == sortColumn[grid.column_name]) {
            result = true;
            break;
        }
    }
    return result;
}
/* bar */
TbsGrid.prototype.tbs_isLastTopRowIndex = function (rowIndex) {
    let grid = this;

    let result = false;
    let rowCount = grid.getRowCount() - 1;
    if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
        return true;
    }
    return result;
}
