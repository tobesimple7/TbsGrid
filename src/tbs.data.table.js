import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsBase } from "./tbs.base";

export class TbsDataTable extends TbsBase {

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

    select(field, value, topIndex) {
        let result = [];
        if (arguments.length == 0) {
            result = this.data;
        }
        else {
            for (let i = 0, len = this.data.length; i < len; i++) {
                let dataRow = this.data[i];
                if (dataRow[field] == value) {
                    result.push(dataRow);
                    if (topIndex != undefined) {
                        if (result.length == topIndex) break;
                    }
                }
            }
        }
        return result;
    }

    selectRow(field, value) {
        let dataRows = this.select(field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowByRowIndex(rowIndex) { return this.data[rowIndex]; }

    selectRowByRowId(rowId) {
        let dataRows = this.select(tbsGridNames.column.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowIndex(field, value) {
        let result = null;
        for (let i = 0, len = this.data.length; i < len; i++) {
            let dataRow = this.data[i];
            if (dataRow[field] == value) { result = i; break; }
        }
        return result;
    }

    selectValue(rowIndex, field) { return this.data[rowIndex][field]; };

    isRow(field, value) {
        let dataRows = this.select(field, value, 1);
        return dataRows.length > 0;
    }

    /**
     * Insert
     */
    insert(dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }
        this.data.push(dataRow);
    }

    insertBefore(dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }

        if (rowIndex < this.data.length) this.data.splice(rowIndex, 0, dataRow);
        else this.data.push(dataRow);
    }

    insertAfter(dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbsGridNames.column.rowId] = this.currentRowId;
            dataRow[tbsGridNames.column.rowMode] = '';
        }

        if (rowIndex + 1 < this.data.length) this.data.splice(rowIndex + 1, 0, dataRow);
        else this.data.push(dataRow);
    }

    /**
     * Remove
     */
    remove(rowIndex) {
        if (arguments.length == 1) this.data.splice(rowIndex, 1);
        else this.data = [];
    }

    removeByRowId(rowId) {
        let rowIndex = this.selectRowIndex(tbsGridNames.column.rowId, rowId);
        if (this.notNull(rowIndex)) this.remove(rowIndex);
    }

    /**
     * Update
     */

    update(field, value) {
        let dataRows = this.select(field, value);
        dataRows.map(dataRow => dataRow[field] = value);
    }

    updateByRowIndex(rowIndex, name, value) {
        let dataRow = this.data[rowIndex];
        dataRow[name] = value;
    }

    updateByRowId(rowId, name, value) {
        let dataRow = this.selectRowByRowId(rowId);
        dataRow[name] = value;
    }

    count() {
        return this.data.length;
    }

    /**
     * Column type Functions
     */

    setTypeString() {};

    setTypeNumber() {};

    setTypeCombo() {};

    setTypeDate() {};
}

export class TbsDataRow extends TbsBase {}

export class TbsDataCell extends TbsBase {}