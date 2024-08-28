/* Top Columns */
TbsGrid.prototype.tbs_setTopColumns = function (topColumns) {
    let selector = '#' + this.id;
    let grid = this;

    this.topColumns = grid.tbs_copyJson(topColumns);
}

/* Set Data */
TbsGrid.prototype.tbs_setTopData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.topColumns.length == 0) return;

    let topColumns = grid.topColumns;

    grid.data_top = [];

    let item = {};
    item[grid.const_rowId] = grid.topMaxRowId; grid.topMaxRowId += 1;
    item[grid.const_mode] = '';
    item.data = {};
    item.layout = {};

    let columns = grid.columns;
    for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {
        let column = columns[colIndex];
        let columnName  = column[grid.column_name];
        item.data[columnName]   = null;
        item.layout[columnName] = {};
        item.layout[columnName][grid.layout_text] = null;
        // for merging
        item.layout[columnName][grid.layout_visible] = column[grid.column_visible];
        item.layout[columnName][grid.layout_rowSpan] = 1;
        item.layout[columnName][grid.layout_colSpan] = 1;
    }
    grid.data_top.push(item);

    let topRow = grid.data_top[0];

    // Calculate Sum
    for (let rowIndex = 0, len = grid.data_view.length; rowIndex < len; rowIndex++) {
        let row = grid.data_view[rowIndex].data;
        for (let i = 0, colCount = topColumns.length; i < colCount; i++) {
            let topColumn = topColumns[i];
            let columnName = topColumn[grid.column_name];
            let sum = 0;
            if (grid.tbs_isColumnTypeNumber(columnName) && topColumn[grid.column_summaryType] == 'sum') {
                topRow.data[columnName] += parseFloat(row[columnName]);
            }
        }
    }
    // Calcuate Avg
    let rowCount = grid.tbs_getRowCount();
    for (let i = 0, colCount = topColumns.length; i < colCount; i++) {
        let topColumn = topColumns[i];
        let columnName = topColumn[grid.column_name];
        if (grid.tbs_isColumnTypeNumber(columnName) && topColumn[grid.column_summaryType] == 'avg') {
            topRow.data[columnName] = topRow.data[columnName] / rowCount;
        }
    }
    // layout data
    for (let i = 0, len = grid.data_top.length; i < len; i++) {
        let row = grid.data_top[0];
        for (let x = 0, len2 = grid.columns.length; x < len2; x++) {
            let column = grid.columns[x];
            let columnName = grid.getColumnName(x);
            let value = grid.tbs_getTopValue(i, columnName);
            grid.tbs_setTopValue(i, columnName, value);
        }
    }
}

/* get, set */
TbsGrid.prototype.tbs_getTopValue = function (rowIndex, columnName) {
    let column = this.tbs_getColumn(columnName);
    let columnType = column[this.column_type];
    let val = this.data_top[rowIndex].data[columnName];

    if (columnType == this.code_number) return Number(val);
    else if (columnType == this.code_currency) return Number(val);
    else return val;
}
TbsGrid.prototype.tbs_getTopValueByIndex = function (rowIndex, colIndex) {
    let columnName = this.tbs_getColumnName(colIndex);
    return this.tbs_getTopValue(rowIndex, columnName);
}
TbsGrid.prototype.tbs_getTopText = function (rowIndex, columnName) {
    return this.data_top[rowIndex].layout[columnName][this.layout_text];
}
TbsGrid.prototype.tbs_setTopValue = function (rowIndex, columnName, value) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(columnName);
    let result = grid.tbs_getFormat(column, value);

    let oldValue = grid.tbs_getTopValue(rowIndex, columnName);
    if (oldValue != result.value) {
        grid.data_top[rowIndex].data[columnName] = result.value;
        this.tbs_setTopLayoutValue(rowIndex, columnName, grid.layout_text, result.text);
    }
}
TbsGrid.prototype.tbs_setTopValueByIndex = function (rowIndex, cellIndex, value) {
    let columnName = this.tbs_getColumnName(cellIndex);
    this.tbs_setTopValue(rowIndex, columnName, value);
}

/* Layout Data */
TbsGrid.prototype.tbs_getTopLayout = function (rowIndex, columnName) {
    let grid = this;
    try { return grid.data_top[rowIndex].layout[columnName]; }
    catch (e) { return null; }
}
TbsGrid.prototype.tbs_getTopLayoutValue = function (rowIndex, columnName, property) {
    let grid = this;
    try { return grid.data_top[rowIndex].layout[columnName][property]; }
    catch (e) { return null; }
}
TbsGrid.prototype.tbs_setTopLayoutValue = function(rowIndex, columnName, property, value) {
    let grid = this;
    let column = grid.tbs_getColumn(columnName);
    let text = grid.tbs_getFormatText(column, value);
    if (grid.null(grid.data_top[rowIndex].layout[columnName])) grid.data_top[rowIndex].layout[columnName] = {};
    grid.data_top[rowIndex].layout[columnName][property] = text;
}

