import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridTop {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    setTopColumns(columns) {
        let grid = this.grid;
        columns.map(column => {
            if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'center';
            grid.top_column_table.insert(column);
        });
    }

    setTopData() {
        let grid = this.grid;

        if (grid.top_column_table.count() == 0) return;

        let topColumns = grid.top_column_table.data;

        let dataRow = {};
        let columns = grid.column_table.data;
        for (let x = 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName = column[tbsGridNames.column.name];
            dataRow[columnName] = null;
        }
        grid.top_table.insert(dataRow);

        /* get sum, avg */
        for (let x = 0, len2 = grid.top_column_table.count(); x < len2; x++) {
            let topColumn = grid.top_column_table.data[x];
            let columnName = topColumn[tbsGridNames.column.name];

            if (grid.isColumnTypeNumber(columnName)) {
                let sumType = topColumn[tbsGridNames.column.summaryType];
                let result = null;
                if (sumType == 'sum') result = grid.classPanel30.getSum(columnName);
                else if (sumType == 'avg') result = grid.classPanel30.getAvg(columnName);

                grid.top_table.updateByRowIndex(0, columnName, grid.classPanel30.getSum(columnName));
            }
        }
    }

    setTopValue(rowIndex, columnName, value) {
        let grid = this.grid;
        let column = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
        let result = grid.getFormat(column, value);
        grid.top_table.updateByRowIndex(rowIndex, columnName, result.value);
    }
}

