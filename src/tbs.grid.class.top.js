class TbsGridTop {

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }

    setTopColumnDefaultValue(topColumn) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = topColumn[grid.column_name];
        topColumn[grid.column_align] = grid.classColumn.getColumnProperty(columnName, grid.column_align);
    }

    setTopColumns(columns) {
        let selector = this.selector;
        let grid = this.grid;

        grid.topColumns = grid.tbs_copyJson(columns);
        for (let i = 0, len = grid.topColumns.length; i < len; i++) {
            let topColumn = grid.topColumns[i];
            let columnName = topColumn[grid.column_name];
            if (grid.null(topColumn[grid.column_align])) topColumn[grid.column_align] = 'center';
        }
    }

    setTopData() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.topColumns.length == 0) return;

        let topColumns = grid.topColumns;
        grid.data_top = []; // set init
        let item = {};
        item[grid.code_rowId] = grid.topMaxRowId; grid.topMaxRowId += 1;
        item[grid.code_mode] = '';
        item = {};
        // item.layout = {};

        let columns = grid.columns;
        for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {
            let column = columns[colIndex];
            let columnName  = column[grid.column_name];
            item[columnName]   = null;
            // item.layout[columnName] = {};
            // item.layout[columnName][grid.layout_text] = null;
            // for merging
            //item.layout[columnName][grid.layout_visible] = column[grid.column_visible];
            // item.layout[columnName][grid.layout_rowSpan] = 1;
            // item.layout[columnName][grid.layout_colSpan] = 1;
        }
        grid.data_top.push(item);

        let topRow = grid.data_top[0];
        // Calculate Sum
        for (let i = 0, colCount = topColumns.length; i < colCount; i++) {
            let topColumn = topColumns[i];
            let columnName = topColumn[grid.column_name];
            if (grid.tbs_isColumnTypeNumber(columnName) == false) topRow[columnName] = topColumn[grid.column_name];
        }
        // Calculate Sum
        for (let rowIndex = 0, len = grid.data_view.length; rowIndex < len; rowIndex++) {
            let row = grid.data_view[rowIndex];
            for (let i = 0, colCount = topColumns.length; i < colCount; i++) {
                let topColumn = topColumns[i];
                let columnName = topColumn[grid.column_name];
                let sum = 0;
                if (grid.tbs_isColumnTypeNumber(columnName) && topColumn[grid.column_summaryType] == 'sum') {
                    topRow[columnName] += parseFloat(row[columnName]);
                }
            }
        }
        // Calcuate Avg
        let rowCount = grid.tbs_getRowCount();
        for (let i = 0, colCount = topColumns.length; i < colCount; i++) {
            let topColumn = topColumns[i];
            let columnName = topColumn[grid.column_name];
            if (grid.tbs_isColumnTypeNumber(columnName) && topColumn[grid.column_summaryType] == 'avg') {
                topRow[columnName] = topRow[columnName] / rowCount;
            }
        }
        // layout data
        for (let i = 0, len = grid.data_top.length; i < len; i++) {
            let row = grid.data_top[0];
            for (let x = 0, len2 = grid.columns.length; x < len2; x++) {
                let column = grid.columns[x];
                let columnName = grid.getColumnName(x);
                let value = grid.classTop.getTopValue(i, columnName);
                grid.classTop.setTopValue(i, columnName, value);
            }
        }
    }

    getTopValue(rowIndex, columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let columnType = column[grid.column_type];
        let val = grid.data_top[rowIndex][columnName];
        if (isNaN(val)) val = 0;
        if (columnType == grid.code_number) return Number(val);
        else if (columnType == grid.code_currency) return Number(val);
        else return val;
    }

    getTopValueByIndex(rowIndex, colIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = grid.classColumn.getColumnName(colIndex);
        return grid.classTop.getTopValue(rowIndex, columnName);
    }

    getTopText(rowIndex, columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let value = grid.classTop.getTopValue(rowIndex, columnName);

        let result = grid.tbs_getFormat(column, value);
        return result.text;
    }

    setTopValue(rowIndex, columnName, value) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let result = grid.tbs_getFormat(column, value);


        grid.data_top[rowIndex][columnName] = result.value;
        // grid.tbs_setTopLayoutValue(rowIndex, columnName, grid.layout_text, result.text);
    }

    setTopValueByIndex(rowIndex, cellIndex, value) {
        let selector = this.selector;
        let grid = this.grid;

        let columnName = grid.classColumn.getColumnName(cellIndex);
        grid.classTop.setTopValue(rowIndex, columnName, value);
    }

    getTopColumn(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let result = null;
        for (let i = 0, len = grid.topColumns.length; i < len; i++) {
            let topColumn = grid.topColumns[i];
            if (columnName == topColumn[grid.column_name]) {
                result = topColumn;
            }
        }
        return result;
    }
}
