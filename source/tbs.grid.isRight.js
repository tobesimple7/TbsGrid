TbsGrid.prototype.tbs_isSortableColumn = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = false;
    let column = grid.tbs_getColumn(columnName);

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
    let column = grid.tbs_getColumn(columnName);

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
    let column = grid.tbs_getColumn(columnName);

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
    let column = grid.tbs_getColumn(columnName);

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
    let column = grid.tbs_getColumn(columnName);

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
TbsGrid.prototype.tbs_isInPanel = function(e, panelName, startX, startY) {  //tbs-grid-panel30
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