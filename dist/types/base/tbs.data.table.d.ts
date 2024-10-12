import { TbsBase } from './tbs.base';
export declare class TbsDataTable extends TbsBase {
    tableName: string;
    data: any[];
    currentRowId: number;
    type: string;
    constructor(tableName: string);
    /**
     * select functions
     */
    select(): void;
    selectRows(field?: string, value?: any, topIndex?: number): object[];
    selectRow(field: any, value: any): object;
    selectRowByRowIndex(rowIndex: number): object;
    selectRowByRowId(rowId: any): object;
    selectRowIndexByRowId(rowId: any): number;
    selectRowIndex(field: any, value: any): number;
    selectRowIdByRowIndex(rowIndex: any): any;
    selectRowRange(startRowIndex?: number, endRowIndex?: number): object[];
    selectValue(rowIndex: any, field: any): any;
    isRow(field: any, value: any): boolean;
    /**
     * Insert
     */
    insertRows(dataRows: any): void;
    insertRowsBefore(dataRows: object[], rowIndex: number): void;
    insertRowsAfter(dataRows: object[], rowIndex: number): void;
    insert(dataRow: object): void;
    insertBefore(dataRow: object, rowIndex: any): void;
    insertAfter(dataRow: any, rowIndex: number): void;
    /**
     * Remove
     */
    remove(rowIndex?: number): void;
    removeByRowId(rowId: any): void;
    /**
     * Update
     */
    update(columnName: string, field: string, value: any): void;
    updateRow(columnName: string, field: string, value: any): void;
    updateByRowIndex(rowIndex: number, name: string, value: any): void;
    updateByRowId(rowId: number, name: string, value: any): void;
    count(field?: any, value?: any): number;
    getSum(columnName: string): number;
    getAvg(columnName: string): number;
    getMax(columnName: string): number;
    getMin(columnName: string): number;
}
//# sourceMappingURL=tbs.data.table.d.ts.map