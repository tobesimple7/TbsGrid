
import {TbsBase} from "./tbs.base";
import {columnAlias} from "../tbs.grid.types";



export class TbsDataArrayTable extends TbsBase {

    tableName: string;
    data: object[][];
    currentRowId: number;
    type: string;

    constructor(tableName: string) {
        super();
        this.tableName = tableName;
        this.data = [];
        this.currentRowId = -1;
        this.type = 'table';
    }

    /**
     * select functions
     */
    selectRows(arrayIndex: any, field: any, value: any, topIndex?: any) {
        let result: object[] = [];
        for (let i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            let dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) {
                result.push(dataRow);
                if (topIndex != undefined) {
                    if (result.length == topIndex) break;
                }
            }
        }
        return result;
    }

    selectRow(arrayIndex: any, field: any, value: any) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowByRowIndex(arrayIndex: any, rowIndex: any) { return this.data[arrayIndex][rowIndex]; }

    selectRowByRowId(arrayIndex: any, rowId: any) {
        let dataRows = this.selectRows(arrayIndex, columnAlias.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowIndexByRowId(arrayIndex: any, rowId: any) { return this.selectRowIndex(arrayIndex, columnAlias.rowId, rowId); }

    selectRowIndex(arrayIndex: any, field: any, value: any) {
        let result = null;
        for (let i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            let dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) { result = i; break; }
        }
        return result;
    }

    selectRowIdByRowIndex(arrayIndex: any, rowIndex: any) {
        const dataRow = this.selectRowByRowIndex(arrayIndex, rowIndex);
        return dataRow[columnAlias.rowId];
    }

    selectRowRange(arrayIndex: any, startRowIndex: any, endRowIndex: any) {
        if (endRowIndex == undefined) endRowIndex = this.count() - 1

        const result = [];
        for (let i = startRowIndex; i <= endRowIndex; i++) result.push(this.data[i]);
        return result;
    }

    selectValue(arrayIndex: any, rowIndex: any, field: any) {
        return this.data[arrayIndex][rowIndex][field];
    }

    isRow(arrayIndex: any, field: any, value: any) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0;
    }

    /**
     * Insert
     */
    insertRows(arrayIndex: any, dataRows: any) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[columnAlias.rowId] = this.currentRowId;
                dataRow[columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        this.data[arrayIndex].push(...dataRows);
    }

    insertRowsBefore(arrayIndex: any, dataRows: any, rowIndex: any) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[columnAlias.rowId] = this.currentRowId;
                dataRow[columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex, 0, ...dataRows);
        else this.data[arrayIndex].push(...dataRows);
    }

    insertRowsAfter(arrayIndex: any, dataRows: any, rowIndex: any) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[columnAlias.rowId] = this.currentRowId;
                dataRow[columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex + 1, 0, ...dataRows);
        else this.data[arrayIndex].push(...dataRows);
    }

    insert(arrayIndex: any, dataRow: any) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[columnAlias.rowId] = this.currentRowId;
            dataRow[columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];

        this.data[arrayIndex].push(dataRow);
    }

    insertBefore(arrayIndex: any, dataRow: any, rowIndex: any) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[columnAlias.rowId] = this.currentRowId;
            dataRow[columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];

        if (rowIndex < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex, 0, dataRow);
        else this.data[arrayIndex].push(dataRow);
    }

    insertAfter(arrayIndex: any, dataRow: any, rowIndex: any) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[columnAlias.rowId] = this.currentRowId;
            dataRow[columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex + 1, 0, dataRow);
        else this.data[arrayIndex].push(dataRow);
    }

    /**
     * Remove
     */
    remove(arrayIndex?: any, rowIndex?: any) {
        if (arguments.length == 2) this.data[arrayIndex].splice(rowIndex, 1);
        else if (arguments.length == 1) this.data[arrayIndex] = [];
        else this.data = [];
    }

    removeByRowId(arryIndex: any, rowId: any) {
        let rowIndex = this.selectRowIndex(arryIndex, columnAlias.rowId, rowId);
        if (this.notNull(rowIndex)) this.remove(rowIndex);
    }

    /**
     * Update
     */

    update(arrayIndex: any, columnName: any, field: any, value: any) {
        let dataRows = this.selectRows(arrayIndex, columnAlias.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(arrayIndex: any, columnName: any, field: any, value: any) {
        let dataRows = this.selectRows(arrayIndex, columnAlias.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateByRowIndex(arrayIndex: any, rowIndex: any, name: any, value: any) {
        let dataRow = this.data[arrayIndex][rowIndex];
        dataRow[name] = value;
    }

    updateByRowId(arrayIndex: any, rowId: any, name: any, value: any) {
        let dataRow = this.selectRowByRowId(arrayIndex, rowId);
        dataRow[name] = value;
    }

    count(arrayIndex?: any, field?: any, value?: any) : number {
        if (arguments.length == 3) {
            return this.selectRows(arrayIndex, field, value).length;
        }
        else if (arguments.length == 1) {
            return this.data[arrayIndex].length;
        }
        else {
            return this.data.length;
        }
    }

    makeColIndex () : void {
        for (let i = 0; i < this.count(); i++) {
            const columns = this.data[i];
            columns.map((column: any, index: any) => column[columnAlias.colIndex] = index);
        }
    }
}