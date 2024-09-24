import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridFooter {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    setFooterColumns(columns) {
        let grid = this.grid;
        columns.map(column => {
            if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'center';
            grid.footer_column_table.insert(column);
        });
    }

    setFooterData() {
        let grid = this.grid;

        if (grid.footer_column_table.count() == 0) return;

        let footerColumns = grid.footer_column_table.data;

        let dataRow = {};
        let columns = grid.column_table.data;
        for (let x = 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName = column[tbsGridNames.column.name];
            dataRow[columnName] = null;
        }
        grid.footer_table.insert(dataRow);

        /* get sum, avg */
        for (let x = 0, len2 = grid.footer_column_table.count(); x < len2; x++) {
            let footerColumn = grid.footer_column_table.data[x];
            let columnName = footerColumn[tbsGridNames.column.name];

            if (grid.isColumnTypeNumber(columnName)) {
                let sumType = footerColumn[tbsGridNames.column.summaryType];
                let result = null;
                if (sumType == 'sum') result = grid.classPanel30.getSum(columnName);
                else if (sumType == 'avg') result = grid.classPanel30.getAvg(columnName);

                grid.footer_table.updateByRowIndex(0, columnName, grid.classPanel30.getSum(columnName));
            }
        }
    }

    setFooterValue(rowIndex, columnName, value) {
        let grid = this.grid;
        let column = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
        let result = grid.getFormat(column, value);
        grid.footer_table.updateByRowIndex(rowIndex, columnName, result.value);
    }
}

