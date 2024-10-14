import {columnAlias} from "../tbs.grid.types";
import {TbsGrid} from "../tbs.grid";

export class TbsGridBaseColumns {

    constructor() {
    }

    /**
     * Column Functions
     */

    setFixedColumn(this: TbsGrid, fixedColumnIndex: number) { this.classColumn.setFixedColumn(fixedColumnIndex); }

    removeFixedColumn(this: TbsGrid) { this.classColumn.removeFixedColumn(); }


    /**
     * Columns API.
     */

    getColumn(this: TbsGrid, name: string, table?) { return this.isNull(table, this.column_table).selectRow(columnAlias.name, name); }

    getColumns(this: TbsGrid, table?: any) { return this.isNull(table, this.column_table).select();  }

    getColumnByIndex(this: TbsGrid, columnIndex: number, table?: any) { return this.isNull(table, this.column_table).selectRowByRowIndex(columnIndex); }

    getColumnName(this: TbsGrid, columnIndex: number, table?: any) { return this.isNull(table, this.column_table).selectValue(columnIndex, columnAlias.name); }

    getColumnIndex(this: TbsGrid, columnName: string, table?: any) { return this.isNull(table, this.column_table).selectRowIndex(columnAlias.name, columnName); }

    setColumn(this: TbsGrid, columnName: string, property: string, value: any, table?: any) { this.isNull(table, this.column_table).updateRow(columnName, property, value); }

    /**
     * Filter Columns
     */

    getFilterColumn(this: TbsGrid, columnName) { return this.getColumn(columnName, this.filter_column_table); }

    getFilterColumnName(this: TbsGrid, columnIndex) { return this.getColumnName(columnIndex, this.filter_column_table); }

    getFilterColumnIndex(this: TbsGrid, columnName) { return this.getColumnIndex(columnName, this.filter_column_table); }

    /**
     * Columns API
     */

    setTopColumns(this: TbsGrid, topColumns) { this.classTop.setTopColumns(topColumns); }

    setFooterColumns(this: TbsGrid, footerColumns) { this.classFooter.setFooterColumns(footerColumns); }

    /**
     * Header Columns API.
     */

    getHeaderColumn(this: TbsGrid, rowIndex: number, columnIndex: number) { return this.classHeader.getHeaderColumn(rowIndex, columnIndex); }

    getHeaderColumnByNumber(this: TbsGrid, num) { return this.classHeader.getHeaderColumnByNumber(num); }

    addColumn(this: TbsGrid, addColumn: any, targetColumnIndex: number, orderType: string) { this.classColumn.addColumn(addColumn, targetColumnIndex, orderType);}

    removeColumn(this: TbsGrid, targetColumnIndex: number) { this.classColumn.removeColumn(targetColumnIndex); }

    setHeaderProperty(this: TbsGrid, rowIndex: number, colIndex: number, property: string, value: any) { this.classHeader.setHeaderProperty(rowIndex, colIndex, property, value); }


}