import { TbsBase } from "./tbs.base";
export declare class TbsDataArrayTable extends TbsBase {
    tableName: string;
    data: object[][];
    currentRowId: number;
    type: string;
    constructor(tableName: string);
    /**
     * select functions
     */
    selectRows(arrayIndex: any, field: any, value: any, topIndex?: any): object[];
    selectRow(arrayIndex: any, field: any, value: any): object;
    selectRowByRowIndex(arrayIndex: any, rowIndex: any): object;
    selectRowByRowId(arrayIndex: any, rowId: any): object;
    selectRowIndexByRowId(arrayIndex: any, rowId: any): any;
    selectRowIndex(arrayIndex: any, field: any, value: any): any;
    selectRowIdByRowIndex(arrayIndex: any, rowIndex: any): any;
    selectRowRange(arrayIndex: any, startRowIndex: any, endRowIndex: any): any[];
    selectValue(arrayIndex: any, rowIndex: any, field: any): any;
    isRow(arrayIndex: any, field: any, value: any): boolean;
    /**
     * Insert
     */
    insertRows(arrayIndex: any, dataRows: any): void;
    insertRowsBefore(arrayIndex: any, dataRows: any, rowIndex: any): void;
    insertRowsAfter(arrayIndex: any, dataRows: any, rowIndex: any): void;
    insert(arrayIndex: any, dataRow: any): void;
    insertBefore(arrayIndex: any, dataRow: any, rowIndex: any): void;
    insertAfter(arrayIndex: any, dataRow: any, rowIndex: any): void;
    /**
     * Remove
     */
    remove(arrayIndex?: any, rowIndex?: any): void;
    removeByRowId(arryIndex: any, rowId: any): void;
    /**
     * Update
     */
    update(arrayIndex: any, columnName: any, field: any, value: any): void;
    updateRow(arrayIndex: any, columnName: any, field: any, value: any): void;
    updateByRowIndex(arrayIndex: any, rowIndex: any, name: any, value: any): void;
    updateByRowId(arrayIndex: any, rowId: any, name: any, value: any): void;
    count(arrayIndex?: any, field?: any, value?: any): number;
    makeColIndex(): void;
}
//# sourceMappingURL=tbs.data.array.table.d.ts.map