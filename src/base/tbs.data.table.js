import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsBase } from './tbs.base.js';

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

    selectRows(field, value, topIndex) {
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

    selectRowIndexByRowId(rowId) { return this.selectRowIndex(tbsGridNames.column.rowId, rowId); }

    selectRowIndex(field, value) {
        let result = null;
        for (let i = 0, len = this.data.length; i < len; i++) {
            let dataRow = this.data[i];
            if (dataRow[field] == value) { result = i; break; }
        }
        return result;
    }

    selectRowIdByRowIndex(rowIndex) {
        const dataRow = this.selectRowByRowIndex(rowIndex);
        return dataRow[tbsGridNames.column.rowId];
    }

    selectRowRange(startRowIndex, endRowIndex) {
        if (endRowIndex == undefined) endRowIndex = this.count() - 1

        const result = [];
        for (let i = startRowIndex; i <= endRowIndex; i++) result.push(data[i]);
        return result;
    }

    selectValue(rowIndex, field) {
        return this.data[rowIndex][field];
    }

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

    update(columnName, field, value) {
        let dataRows = this.select(tbsGridNames.column.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(columnName, field, value) {
        let dataRows = this.select(tbsGridNames.column.name, columnName);
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

    count(field, value) {
        if (arguments.length > 0) {
            return this.select(field, value).length;
        }
        else {
            return this.data.length;
        }
    }

    /**
     * orderBy
     * @param sortColumns : [{ name : , order :, dataType: string | number }, ...]
     */
    orderBy(sortColumns) {
        return this.data.toSorted((a, b) => {
            // a : The first element
            // b : The second element
            for (let i = 0, len = sortColumns.length; i < len; i++) {
                let sortColumn = sortColumns[i];
                let name = sortColumn[tbsGridNames.column.name];
                let type = (sortColumn[tbsGridNames.column.dataType]) ? sortColumn[tbsGridNames.column.dataType] : 'string';
                let order = (sortColumn[tbsGridNames.column.order]) ? sortColumn[tbsGridNames.column.order] : 'asc';
                if (order == 'asc') {
                    if (type == tbsGridTypes.CellType.number) {
                        let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')): 0;
                        let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')): 0;
                        if (x < y) return -1;
                        else if (x > y) return 1;
                    }
                    else {
                        if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                        else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                    }
                }
                else if (order == 'desc') {
                    if (type == tbsGridTypes.CellType.number){
                        let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                        let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                        if (x < y) return 1;
                        else if (x > y) return -1;
                    }
                    else {
                        if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                        else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                    }
                }
            }
        });
    }
}