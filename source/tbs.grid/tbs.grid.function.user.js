/* TbsGrid functions */
TbsGrid.prototype.tbs_click = function (e, grid, row, userFunction) { let val = userFunction(e, grid, row); return val; }
TbsGrid.prototype.tbs_dblclick = function (e, grid, row, userFunction) { let val = userFunction(e, grid, row); return val; }
TbsGrid.prototype.tbs_edit = function (e, grid, row, state, userFunction) { let val = userFunction(e, grid, row, state); return val; }
/* User Event */
TbsGrid.prototype.click = function (userFunction) { this.user_click = userFunction;}
TbsGrid.prototype.dblclick = function (userFunction) { this.user_dblclick = userFunction;}
TbsGrid.prototype.edit = function (userFunction) { this.user_edit = userFunction;}

TbsGrid.prototype.editStart = function (userFunction) { this.user_editStart = userFunction;}
TbsGrid.prototype.editing = function (userFunction) { this.user_editing = userFunction;}
TbsGrid.prototype.editEnd = function (userFunction) { this.user_editEnd = userFunction;}
/* User Event : Paging */
TbsGrid.prototype.clickPageFirst = function (userFunction) { this.user_clickPageFirst = userFunction;}
TbsGrid.prototype.clickPagePrev  = function (userFunction)  { this.user_clickPagePrev  = userFunction;}
TbsGrid.prototype.clickPageIndex = function (userFunction) { this.user_clickPageIndex = userFunction;}
TbsGrid.prototype.clickPageNext  = function (userFunction)  { this.user_clickPageNext  = userFunction;}
TbsGrid.prototype.clickPageLast  = function (userFunction)  { this.user_clickPageNext  = userFunction;}
/* Grid Mode */
TbsGrid.prototype.setGridMode = function (gridMode) { this.tbs_setGridMode(gridMode); }
/* Display grid */
TbsGrid.prototype.apply = function () { this.tbs_apply(); }
/* Header Columns API. */
TbsGrid.prototype.getHeaderColumn = function (rowIndex, columnIndex) { return grid.tbs_getHeaderColumn(rowIndex, columnIndex); }
TbsGrid.prototype.getHeaderColumnByNumber = function (num) { return grid.tbs_getHeaderColumnByNumber(num); }
/* Columns API. */
TbsGrid.prototype.getColumn = function (columnName) { return this.tbs_copyJson(this.tbs_getColumn(columnName)); }
TbsGrid.prototype.getColumnByIndex = function (columnIndex) { return this.tbs_copyJson(this.tbs_getColumnByIndex(columnIndex)); }
TbsGrid.prototype.getColumns = function () { return this.tbs_copyJson(this.tbs_getColumns()); }
TbsGrid.prototype.getColumnName = function (columnIndex) { return this.tbs_getColumnName(columnIndex); }
TbsGrid.prototype.getColumnIndex = function (columnName) { return this.tbs_getColumnIndex(columnName); }
TbsGrid.prototype.setColumn = function (columnName, property, value) { this.tbs_setColumn(columnName, property, value);}
TbsGrid.prototype.setColumnByType = function (columnType, property, value) {this.tbs_setColumnByType(columnType, property, value);}
TbsGrid.prototype.addColumn = function (addColumn, targetRowIndex, targetColumnIndex, orderType) { this.tbs_addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType);}
TbsGrid.prototype.removeColumn = function (targetRowIndex, targetColumnIndex) { this.tbs_removeColumn(targetRowIndex, targetColumnIndex); }
/* Main */
TbsGrid.prototype.setToolbar = function (toolbar) { this.tbs_setToolbar(toolbar); }
TbsGrid.prototype.setGrid = function (columns, options) { this.tbs_setGrid(columns, options); }
TbsGrid.prototype.setData = function (data) { this.tbs_setData(data); }
/* Data */
TbsGrid.prototype.getValue = function (rowIndex, columnName) { return this.tbs_getValue(rowIndex, columnName); }
TbsGrid.prototype.getValueByIndex = function (rowIndex, colIndex) { return this.tbs_getValueByIndex(rowIndex, colIndex); }
TbsGrid.prototype.getText = function (rowIndex, columnName) { return this.tbs_getText(rowIndex, columnName); }
TbsGrid.prototype.getTextByIndex = function (rowIndex, colIndex) { return this.tbs_getTextByIndex(rowIndex, colIndex); }
TbsGrid.prototype.setValue = function (rowIndex, columnName, value) { this.tbs_setValue(rowIndex, columnName, value); }
TbsGrid.prototype.setValueByIndex = function (rowIndex, colIndex, value) { this.tbs_setValueByIndex(rowIndex, colIndex, value); }
TbsGrid.prototype.setDataValue = function (rowIndex, columnName, value) { this.tbs_setDataValue(rowIndex, columnName, value); }
TbsGrid.prototype.applyData = function () { this.tbs_applyData(); }
TbsGrid.prototype.setComboData = function (keyName, valueName, comboData) { return this.tbs_setComboData(keyName, valueName, comboData); }
/* Row functions */
TbsGrid.prototype.getRowCount = function () { return this.tbs_getRowCount(); }
TbsGrid.prototype.getRow = function (rowIndex) { return this.tbs_getRow(rowIndex); }
TbsGrid.prototype.getRows = function (startRowIndex, endRowIndex) { return this.tbs_getRows(startRowIndex, endRowIndex); }
TbsGrid.prototype.getSelectedRow = function () { return this.tbs_getSelectedRow(); }
TbsGrid.prototype.getSelectedRows = function () { return this.tbs_getSelectedRows(); }
TbsGrid.prototype.setRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) { this.tbs_selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2); }
TbsGrid.prototype.selectRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) { this.tbs_selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2); }
TbsGrid.prototype.getCheckedRows = function () { return this.tbs_getCheckedRows(); }
TbsGrid.prototype.getChangedRowsData = function () { return this.tbs_getChangedRowsData(); }
TbsGrid.prototype.getDeletedRowsData = function () { return this.tbs_getDeletedRowsData(); }
TbsGrid.prototype.getUpdatedRowsData = function () { return this.tbs_getUpdatedRowsData(); }
TbsGrid.prototype.getInsertRowsData = function () { return this.tbs_getInsertedRowsData(); }
/* add row, remove row */
TbsGrid.prototype.addRow = function (row, type = 'bottom') { this.tbs_addRow(row, type); }
TbsGrid.prototype.removeRows = function (rows) { this.tbs_removeRows(rows); }
/* Columns */
TbsGrid.prototype.setColumn = function (columnName, columnProperty, value) { this.tbs_setColumn(columnName, columnProperty, value); }
TbsGrid.prototype.setColumnByType = function (columnType, columnProperty, value) { this.tbs_setColumnByType(columnType, columnProperty, value);}
TbsGrid.prototype.setTopColumns = function (topColumns) { this.tbs_setTopColumns(topColumns); }
TbsGrid.prototype.setFooterColumns = function (footerColumns) { this.tbs_setFooterColumns(footerColumns); }
/* Frozen */
TbsGrid.prototype.setFrozenColumn = function(fixedColumnIndex) { this.tbs_setFrozenColumn(fixedColumnIndex); }
TbsGrid.prototype.setFrozenRow = function(fixedRowIndex) { let fixedRowCount = fixedRowIndex + 1; this.tbs_setFrozenRow(fixedRowIndex, fixedRowCount); }
TbsGrid.prototype.removeFrozenColumn = function() { this.tbs_removeFrozenColumn(); }
TbsGrid.prototype.removeFrozenRow = function() { this.tbs_removeFrozenRow(); }
/* Options */
TbsGrid.prototype.setOption = function (optionName, optionValue, optionGroup) { this.tbs_setOption(optionName, optionValue, optionGroup); }
TbsGrid.prototype.setOptions = function (options, optionGroup) { this.tbs_setOptions(options, optionGroup); }
/* Tree Grid */
TbsGrid.prototype.setTreeData = function (data, openDepth) { this.tbs_setTreeData(data, openDepth); }
TbsGrid.prototype.setTreeSortColumn = function (sortColumn) { this.tbs_setTreeSortColumns(sortColumn); }

