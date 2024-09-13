class TbsGridFooter {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    setFooterColumnDefaultValue(footerColumn) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = footerColumn[grid.column_name];
        footerColumn[grid.column_align] = grid.classColumn.getColumnProperty(columnName, grid.column_align);
    }

    setFooterColumns(columns) {
        let selector = this.selector;
        let grid = this.grid;

        grid.footerColumns = grid.tbs_copyJson(columns);
        for (let i = 0, len = grid.footerColumns.length; i < len; i++) {
            let footerColumn = grid.footerColumns[i];
            let columnName = footerColumn[grid.column_name];
            if (grid.null(footerColumn[grid.column_align])) footerColumn[grid.column_align] = 'center';
        }
    }

    setFooterData() {
        let selector = this.selector;
        let grid = this.grid;

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
                let value = grid.classFooter.getFooterValue(i, columnName);
                grid.classFooter.setFooterValue(i, columnName, value);
            }
        }
    }

    getFooterValue(rowIndex, columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let columnType = column[grid.column_type];
        let val = grid.data_footer[rowIndex][columnName];

        if (columnType == grid.code_number) return Number(val);
        else if (columnType == grid.code_currency) return Number(val);
        else return val;
    }

    getFooterValueByIndex(rowIndex, colIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = grid.classColumn.getColumnName(colIndex);
        return grid.classFooter.getFooterValue(rowIndex, columnName);
    }

    getFooterText(rowIndex, columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let value = grid.classFooter.getFooterValue(rowIndex, columnName);

        let result = grid.tbs_getFormat(column, value);
        return result.text;
    }

    setFooterValue(rowIndex, columnName, value) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let result = grid.tbs_getFormat(column, value);

        grid.data_footer[rowIndex][columnName] = result.value;
        //grid.tbs_setFooterLayoutValue(rowIndex, columnName, grid.layout_text, result.text);
    }

    setFooterValueByIndex(rowIndex, cellIndex, value) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = grid.classColumn.getColumnName(cellIndex);
        grid.classFooter.setFooterValue(rowIndex, columnName, value);
    }

    getFooterColumn(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let result = null;
        for (let i = 0, len = grid.footerColumns.length; i < len; i++) {
            let footerColumn = grid.footerColumns[i];
            if (columnName == footerColumn[grid.column_name]) {
                result = footerColumn;
            }
        }
        return result;
    }
}
