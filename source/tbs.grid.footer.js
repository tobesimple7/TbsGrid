/* Footer Columns */
TbsGrid.prototype.tbs_setFooterColumns = function (footerColumns) {
    let selector = '#' + this.id;
    let grid = this;

    this.footerColumns = grid.tbs_copyJson(footerColumns);
}

TbsGrid.prototype.tbs_setFooterData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.footerColumns.length == 0) return;

    let footerColumns = grid.footerColumns;

    grid.data_footer = [];

    let item = {};
    item[grid.const_rowId] = grid.footerMaxRowId; grid.footerMaxRowId += 1;
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
    grid.data_footer.push(item);

    let footerRow = grid.data_footer[0];

    // Calculate Sum
    for (let rowIndex = 0, len = grid.data_view.length; rowIndex < len; rowIndex++) {
        let row = grid.data_view[rowIndex].data;
        for (let i = 0, colCount = footerColumns.length; i < colCount; i++) {
            let footerColumn = footerColumns[i];
            let columnName = footerColumn[grid.column_name];
            let sum = 0;
            if (grid.tbs_isColumnTypeNumber(columnName) && footerColumn[grid.column_summaryType] == 'sum') {
                footerRow.data[columnName] += parseFloat(row[columnName]);
            }
        }
    }
    // Calcuate Avg
    let rowCount = grid.tbs_getRowCount();
    for (let i = 0, colCount = footerColumns.length; i < colCount; i++) {
        let footerColumn = footerColumns[i];
        let columnName = footerColumn[grid.column_name];
        if (grid.tbs_isColumnTypeNumber(columnName) && footerColumn[grid.column_summaryType] == 'avg') {
            footerRow.data[columnName] = footerRow.data[columnName] / rowCount;
        }
    }
}