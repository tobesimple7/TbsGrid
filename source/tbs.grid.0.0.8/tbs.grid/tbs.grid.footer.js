/* Footer Columns */
TbsGrid.prototype.tbs_setFooterColumnDefaultValue = function (footerColumn) {
    let selector = '#' + this.gridId;
    let grid = this;

    let columnName = footerColumn[grid.column_name];
    footerColumn[grid.column_align] = grid.tbs_getColumnProperty(columnName, grid.column_align);
}
TbsGrid.prototype.tbs_setFooterColumns = function (columns) {
    let selector = '#' + this.id;
    let grid = this;

    grid.footerColumns = grid.tbs_copyJson(columns);
    for (let i = 0, len = grid.footerColumns.length; i < len; i++) {
        let footerColumn = grid.footerColumns[i];
        let columnName = footerColumn[grid.column_name];
        if (grid.null(footerColumn[grid.column_align])) footerColumn[grid.column_align] = 'center';
    }
}
/* Set Data */
TbsGrid.prototype.tbs_setFooterData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.footerColumns.length == 0) return;

    let footerColumns = grid.footerColumns;
    grid.data_footer = []; // set init
    let item = {};
    item[grid.code_rowId] = grid.footerMaxRowId; grid.footerMaxRowId += 1;
    item[grid.code_mode] = '';

    let columns = grid.columns;
    for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {
         let column = columns[colIndex];
         let columnName  = column[grid.column_name];
         item[columnName]   = null;
    //     item.layout[columnName] = {};
    //     item.layout[columnName][grid.layout_text] = null;
    //     // for merging
    //     item.layout[columnName][grid.layout_visible] = column[grid.column_visible];
    //     item.layout[columnName][grid.layout_rowSpan] = 1;
    //     item.layout[columnName][grid.layout_colSpan] = 1;
    }
    grid.data_footer.push(item);

    let footerRow = grid.data_footer[0];
    // Calculate Sum
    for (let i = 0, colCount = footerColumns.length; i < colCount; i++) {
        let footerColumn = footerColumns[i];
        let columnName = footerColumn[grid.column_name];
        if (grid.tbs_isColumnTypeNumber(columnName) == false) footerRow[columnName] = footerColumn[grid.column_name];
    }

    // Calculate Sum
    for (let rowIndex = 0, len = grid.data_view.length; rowIndex < len; rowIndex++) {
        let row = grid.data_view[rowIndex];
        for (let i = 0, colCount = footerColumns.length; i < colCount; i++) {
            let footerColumn = footerColumns[i];
            let columnName = footerColumn[grid.column_name];
            let sum = 0;
            if (grid.tbs_isColumnTypeNumber(columnName) && footerColumn[grid.column_summaryType] == 'sum') {
                footerRow[columnName] += parseFloat(row[columnName]);
            }
        }
    }
    // Calcuate Avg
    let rowCount = grid.tbs_getRowCount();
    for (let i = 0, colCount = footerColumns.length; i < colCount; i++) {
        let footerColumn = footerColumns[i];
        let columnName = footerColumn[grid.column_name];
        if (grid.tbs_isColumnTypeNumber(columnName) && footerColumn[grid.column_summaryType] == 'avg') {
            footerRow[columnName] = footerRow[columnName] / rowCount;
        }
    }
    // layout data
    for (let i = 0, len = grid.data_footer.length; i < len; i++) {
        let row = grid.data_footer[0];
        for (let x = 0, len2 = grid.columns.length; x < len2; x++) {
            let column = grid.columns[x];
            let columnName = grid.getColumnName(x);
            let value = grid.tbs_getFooterValue(i, columnName);
            grid.tbs_setFooterValue(i, columnName, value);
        }
    }
}

/* get, set */
TbsGrid.prototype.tbs_getFooterValue = function (rowIndex, columnName) {
    let column = this.tbs_getColumn(columnName);
    let columnType = column[this.column_type];
    let val = this.data_footer[rowIndex][columnName];

    if (columnType == this.code_number) return Number(val);
    else if (columnType == this.code_currency) return Number(val);
    else return val;
}
TbsGrid.prototype.tbs_getFooterValueByIndex = function (rowIndex, colIndex) {
    let columnName = this.tbs_getColumnName(colIndex);
    return this.tbs_getFooterValue(rowIndex, columnName);
}
TbsGrid.prototype.tbs_getFooterText = function (rowIndex, columnName) {
    let grid = this;
    let column = grid.tbs_getColumn(columnName);
    let value = grid.tbs_getFooterValue(rowIndex, columnName);

    let result = grid.tbs_getFormat(column, value);
    return result.text;
}
TbsGrid.prototype.tbs_setFooterValue = function (rowIndex, columnName, value) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(columnName);
    let result = grid.tbs_getFormat(column, value);

    grid.data_footer[rowIndex][columnName] = result.value;
    //grid.tbs_setFooterLayoutValue(rowIndex, columnName, grid.layout_text, result.text);
}
TbsGrid.prototype.tbs_setFooterValueByIndex = function (rowIndex, cellIndex, value) {
    let columnName = this.tbs_getColumnName(cellIndex);
    this.tbs_setFooterValue(rowIndex, columnName, value);
}

TbsGrid.prototype.tbs_getFooterColumn = function (columnName) {
    let grid = this;

    let result = null;
    for (let i = 0, len = this.footerColumns.length; i < len; i++) {
        let footerColumn = this.footerColumns[i];
        if (columnName == footerColumn[grid.column_name]) {
            result = footerColumn;
        }
    }
    return result;
}