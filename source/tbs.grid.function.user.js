/**
 * @description User Event.
 *
 */
TbsGrid.prototype.click = function (userFunction) {
    this.user_click = userFunction;
}
TbsGrid.prototype.dblclick = function (userFunction) {
    this.user_dblclick = userFunction;
}
TbsGrid.prototype.edit = function (userFunction) {
    this.user_edit = userFunction;
}
/**
 * @description Main
 *
 */
TbsGrid.prototype.setToolbar = function (toolbar) {
    this.tbs_setToolbar(toolbar);
}
TbsGrid.prototype.setGrid = function (columns, options) {
    this.tbs_setGrid(columns, options);
}
TbsGrid.prototype.setData = function (data) {
    this.tbs_setData(data);
}
/**
 * @description Data
 *
 */
TbsGrid.prototype.getValue = function (rowIndex, columnName) {
    return this.tbs_getValue(rowIndex, columnName);
}
TbsGrid.prototype.getText = function (rowIndex, columnName) {
    return this.tbs_getText(rowIndex, columnName);
}
TbsGrid.prototype.setValue = function (rowIndex, columnName, value) {
    this.tbs_setValue(rowIndex, columnName, value);
}
TbsGrid.prototype.setDataValue = function (rowIndex, columnName, value) {
    this.tbs_setDataValue(rowIndex, columnName, value)
}
TbsGrid.prototype.applyData = function () {
    this.tbs_applyData();
}
TbsGrid.prototype.setComboData = function (keyName, valueName, comboData) {
    return this.tbs_setComboData(keyName, valueName, comboData);
}
/**
 * @description Row functions
 *
 */
TbsGrid.prototype.getRowCount = function () {
    return this.tbs_getRowCount();
}
TbsGrid.prototype.getRow = function (rowIndex) {
    return this.tbs_getRow(rowIndex);
}
TbsGrid.prototype.getRows = function (startRowIndex, endRowIndex) {
    return this.tbs_getRows(startRowIndex, endRowIndex);
}
TbsGrid.prototype.getSelectedRow = function () {
    return this.tbs_getSelectedRow();
}
TbsGrid.prototype.getSelectedRows = function () {
    return this.tbs_getSelectedRows();
}
TbsGrid.prototype.setRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
    this.tbs_selectedRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
}
TbsGrid.prototype.selectRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
    this.tbs_selectedRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
}
TbsGrid.prototype.getCheckedRows = function () {
    return this.tbs_getCheckedRows();
}
TbsGrid.prototype.getChangedRowsData = function () {
    return this.tbs_getChangedRowsData();
}
TbsGrid.prototype.getDeletedRowsData = function () {
    return this.tbs_getDeletedRowsData();
}
TbsGrid.prototype.getUpdatedRowsData = function () {
    return this.tbs_getUpdatedRowsData();
}
TbsGrid.prototype.getInsertRowsData = function () {
    return this.tbs_getInsertedRowsData();
}
/**
 * @description add row, remove row
 *
 */
TbsGrid.prototype.addRow = function (row, type = 'bottom') {
    //type : first, last, up, down
    this.tbs_addRow(row, type);
}
TbsGrid.prototype.removeRows = function (rows) {
    this.tbs_removeRows(rows);
}
/**
 * @description Columns.
 *
 */
TbsGrid.prototype.setColumn = function (columnName, columnProperty, value) {
    this.tbs_setColumn(columnName, columnProperty, value);
}
TbsGrid.prototype.setColumnByType = function (columnType, columnProperty, value) {
    this.tbs_setColumnByType(columnType, columnProperty, value);
}
TbsGrid.prototype.setTopColumns = function (topColumns) {
    this.tbs_setTopColumns(topColumns)
}
TbsGrid.prototype.setFooterColumns = function (footerColumns) {
    this.tbs_setFooterColumns(footerColumns)
}
/**
 * @description Frozen.
 *
 */
TbsGrid.prototype.setFrozenColumn = function(fixedColumnIndex) {
    this.tbs_setFrozenColumn(fixedColumnIndex);
}
TbsGrid.prototype.setFrozenRow = function(fixedRowIndex) {
    let fixedRowCount = fixedRowIndex + 1;
    this.tbs_setFrozenRow(fixedRowIndex, fixedRowCount);
}
TbsGrid.prototype.removeFrozenColumn = function() {
    this.tbs_removeFrozenColumn();
}
TbsGrid.prototype.removeFrozenRow = function() {
    this.tbs_removeFrozenRow();
}

/**
 * @description Options
 *
 */
TbsGrid.prototype.setOption = function (optionGroup, optionName, optionValue) {
    this.tbs_setOption(optionGroup, optionName, optionValue);
}
TbsGrid.prototype.setOptions = function (optionGroup, options) {
    this.tbs_setOptions(optionGroup, options);
}
/**
 * @description Tree Grid
 *
 */
TbsGrid.prototype.setTreeData = function (data, openDepth) {
    this.tbs_setTreeData(data, openDepth);
}
TbsGrid.prototype.setTreeSortColumn = function (sortColumn) {
    this.tbs_setTreeSortColumns(sortColumn);
}
