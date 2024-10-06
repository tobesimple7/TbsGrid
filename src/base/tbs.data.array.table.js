import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsBase } from './tbs.base.js';

export class TbsDataArrayTable extends TbsBase {

    constructor(tableName) {
        super();
        this.tableName = tableName;
        this.data = [];
        this.currentRowId = -1;
        this.type = 'table';
    }

    /**
     * select functions
     */
    selectRows(arrayIndex, field, value, topIndex) {
        let result = [];
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

    selectRow(arrayIndex, field, value) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowByRowIndex(arrayIndex, rowIndex) { return this.data[arrayIndex][rowIndex]; }

    selectRowByRowId(arrayIndex, rowId) {
        let dataRows = this.selectRows(arrayIndex, tbsGridNames.column.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowIndexByRowId(arrayIndex, rowId) { return this.selectRowIndex(arrayIndex, tbsGridNames.column.rowId, rowId); }

    selectRowIndex(arrayIndex, field, value) {
        let result = null;
        for (let i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            let dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) { result = i; break; }
        }
        return result;
    }

    selectRowIdByRowIndex(arrayIndex, rowIndex) {
        const dataRow = this.selectRowByRowIndex(arrayIndex, rowIndex);
        return dataRow[tbsGridNames.column.rowId];
    }

    selectRowRange(arrayIndex, startRowIndex, endRowIndex) {
        if (endRowIndex == undefined) endRowIndex = this.count() - 1

        const result = [];
        for (let i = startRowIndex; i <= endRowIndex; i++) result.push(data[i]);
        return result;
    }

    selectValue(arrayIndex, rowIndex, field) {
        return this.data[arrayIndex][rowIndex][field];
    }

    isRow(arrayIndex, field, value) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0;
    }

    /**
     * Insert
     */
    insertRows(arrayIndex, dataRows) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[tbsGridNames.column.rowId] = this.currentRowId;
                dataRow[tbsGridNames.column.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        this.data[arrayIndex].push(...dataRows);
    }

    insertRowsBefore(arrayIndex, dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[tbsGridNames.column.rowId] = this.currentRowId;
                dataRow[tbsGridNames.column.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex, 0, ...dataRows);
        else this.data[arrayIndex].push(...dataRows);
    }

    insertRowsAfter(arrayIndex, dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[tbsGridNames.column.rowId] = this.currentRowId;
                dataRow[tbsGridNames.column.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex + 1, 0, ...dataRows);
        else this.data[arrayIndex].push(...dataRows);
    }

    insert(arrayIndex, dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];

        this.data[arrayIndex].push(dataRow);
    }

    insertBefore(arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];

        if (rowIndex < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex, 0, dataRow);
        else this.data[arrayIndex].push(dataRow);
    }

    insertAfter(arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex])) this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length) this.data[arrayIndex].splice(rowIndex + 1, 0, dataRow);
        else this.data[arrayIndex].push(dataRow);
    }

    /**
     * Remove
     */
    remove(arryIndex, rowIndex) {
        if (arguments.length == 2) this.data[arrayIndex].splice(rowIndex, 1);
        else if (arguments.length == 1) this.data[arrayIndex] = [];
        else this.data = [];
    }

    removeByRowId(arryIndex, rowId) {
        let rowIndex = this.selectRowIndex(arryIndex, tbsGridNames.column.rowId, rowId);
        if (this.notNull(rowIndex)) this.remove(rowIndex);
    }

    /**
     * Update
     */

    update(arryIndex, columnName, field, value) {
        let dataRows = this.selectRows(arryIndex, tbsGridNames.column.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(arryIndex, columnName, field, value) {
        let dataRows = this.selectRows(arryIndex, tbsGridNames.column.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateByRowIndex(arryIndex, rowIndex, name, value) {
        let dataRow = this.data[arrayIndex][rowIndex];
        dataRow[name] = value;
    }

    updateByRowId(arryIndex, rowId, name, value) {
        let dataRow = this.selectRowByRowId(arryIndex, rowId);
        dataRow[name] = value;
    }

    count(arryIndex, field, value) {
        if (arguments.length == 3) {
            return this.selectRows(arryIndex, field, value).length;
        }
        else if (arguments.length == 1) {
            return this.data[arrayIndex].length;
        }
        else {
            return this.data.length;
        }
    }

    makeColIndex () {
        for (let i = 0; i < this.count(); i++) {
            const columns = this.data[i];
            columns.map((column, index) => column[tbsGridNames.column.colIndex] = index);
        }
    }
}