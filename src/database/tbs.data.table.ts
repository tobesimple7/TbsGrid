import {TbsBase} from '../tbs.base';
import {CellType, ColumnAlias, SortColumn} from "../tbs.grid.types";

export class TbsDataTable extends TbsBase {
    tableName: string;
    data: any[];
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

    select() {
        /**
         * whereColumns = [*{name: 'userName', type: include | startWith | lastWith }, count: 10}]
         * orderColumns = [*{name: 'userName', order: asc | desc }]
         * return : [{}, {}];
         */

    }

    selectRows(field?: string, value?: any, topIndex?: number) {
        let result: object[] = [];
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

    selectRow(field: any, value: any): object {
        const dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowByRowIndex(rowIndex: number): object { return this.data[rowIndex]; }

    selectRowByRowId(rowId: any) : object {
        const dataRows: object[] = this.selectRows(ColumnAlias.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }

    selectRowIndexByRowId(rowId: any) : number { return this.selectRowIndex(ColumnAlias.rowId, rowId); }

    selectRowIndex(field: any, value: any) : number {
        let result: number = null;
        for (let i = 0, len = this.data.length; i < len; i++) {
            const dataRow = this.data[i];
            if (dataRow[field] == value) { result = i; break; }
        }
        return result;
    }

    selectRowIdByRowIndex(rowIndex: any) {
        const dataRow = this.selectRowByRowIndex(rowIndex);
        return dataRow[ColumnAlias.rowId];
    }

    selectRowRange(startRowIndex?: number, endRowIndex?: number) {
        if (endRowIndex == undefined) endRowIndex = this.count() - 1

        const result: object[] = [];
        for (let i: number = startRowIndex!; i <= endRowIndex!; i++) result.push(this.data[i]);
        return result;
    }

    selectValue(rowIndex: any, field: any) {
        return this.data[rowIndex][field];
    }

    isRow(field: any, value: any) {
        const dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0;
    }

    /**
     * Insert
     */
    insertRows(dataRows: any) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[ColumnAlias.rowId] = this.currentRowId;
                dataRow[ColumnAlias.rowMode] = 'I';
            });
        }
        this.data.push(...dataRows);
    }

    insertRowsBefore(dataRows: object[], rowIndex: number) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[ColumnAlias.rowId] = this.currentRowId;
                dataRow[ColumnAlias.rowMode] = 'I';
            });
        }
        if (rowIndex < this.data.length) this.data.splice(rowIndex, 0, ...dataRows);
        else this.data.push(...dataRows);
    }

    insertRowsAfter(dataRows: object[], rowIndex: number) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[ColumnAlias.rowId] = this.currentRowId;
                dataRow[ColumnAlias.rowMode] = 'I';
            });
        }

        if (rowIndex + 1 < this.data.length) this.data.splice(rowIndex + 1, 0, ...dataRows);
        else this.data.push(...dataRows);
    }

    insert(dataRow: object) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[ColumnAlias.rowId] = this.currentRowId;
            dataRow[ColumnAlias.rowMode] = 'I';
        }
        this.data.push(dataRow);
    }

    insertBefore(dataRow: object, rowIndex: any) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[ColumnAlias.rowId] = this.currentRowId;
            dataRow[ColumnAlias.rowMode] = 'I';
        }

        if (rowIndex < this.data.length) this.data.splice(rowIndex, 0, dataRow);
        else this.data.push(dataRow);
    }

    insertAfter(dataRow: any, rowIndex: number) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[ColumnAlias.rowId] = this.currentRowId;
            dataRow[ColumnAlias.rowMode] = 'I';
        }

        if (rowIndex + 1 < this.data.length) this.data.splice(rowIndex + 1, 0, dataRow);
        else this.data.push(dataRow);
    }

    /**
     * Remove
     */
    remove(rowIndex?: number) {
        if (arguments.length == 1) this.data.splice(rowIndex, 1);
        else this.data = [];
    }

    removeByRowId(rowId: any) {
        let rowIndex = this.selectRowIndex(ColumnAlias.rowId, rowId);
        if (this.notNull(rowIndex)) this.remove(rowIndex);
    }

    /**
     * Update
     */

    update(columnName: string, field: string, value: any) {
        let dataRows = this.selectRows(ColumnAlias.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(columnName: string, field: string, value: any) {
        let dataRows = this.selectRows(ColumnAlias.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateByRowIndex(rowIndex: number, name: string, value: any) {
        let dataRow = this.data[rowIndex];
        dataRow[name] = value;
    }

    updateByRowId(rowId: number, name: string, value: any) {
        const dataRow = this.selectRowByRowId(rowId);
        dataRow[name] = value;
    }

    count(field?: any, value?: any) {
        if (arguments.length > 0) {
            return this.selectRows(field, value).length;
        }
        else {
            return this.data.length;
        }
    }

    /**
     * orderBy
     * @param sortColumns : [{ name : , order :, dataType: string | number }, ...]
     */
    orderBy(column_table: TbsDataTable, sort_column_table: TbsDataTable) {
        return this.data.sort((a, b) => {
            for (let i = 0, len: number = sort_column_table.count(); i < len; i++) {
                const sortColumn: any = sort_column_table.data[i];
                const name: string = sortColumn[ColumnAlias.name];
                const order: string = (sortColumn[ColumnAlias.order]) ? sortColumn[ColumnAlias.order] : 'asc';

                const column: any = column_table.selectRow(ColumnAlias.name, name);
                const type: string = column[ColumnAlias.type];

                if (order == 'asc') {
                    if (type == CellType.number) {
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
                    if (type == CellType.number){
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

    getSum(columnName: string) {
        let result = 0;
        for (let i = 0, len = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result += isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
        }
        return result;
    }

    getAvg(columnName: string) {
        let rowCount = this.count();
        let result = rowCount == 0 ? 0 : this.getSum(columnName) / rowCount;
        return result
    }

    getMax(columnName: string): number {
        const arrayItem: number[] = [];

        let result: number = 0;
        for (let i: number = 0, len: number = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.max.apply(null, arrayItem);
    }

    getMin(columnName: string): number {
        const arrayItem: number[] = [];

        let result: number = 0;
        for (let i: number = 0, len: number = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.min.apply(null, arrayItem);
    }

    // filter(data, filterColumn) {
    //     const grid = this.grid;
    //
    //     let column = grid.getColumn(filterColumn.name);
    //     let columnType = column[ColumnAlias.type];
    //     let columnName = filterColumn.name;
    //     let filterType = filterColumn.type;
    //     let value = filterColumn.value;
    //
    //     return data.filter(function(dataRow) {
    //         let bool = true;
    //         if (columnType == CellType.number) {
    //             let columnText = dataRow[columnName];
    //             let isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
    //             return isExist;
    //         }
    //         else if (columnType == CellType.string || columnType == CellType.date || columnType || CellType.combo) {
    //             let val = dataRow[columnName];
    //             let columnText = grid.getFormatText(column, val);
    //
    //             let isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
    //             return isExist;
    //         }
    //         else return true;
    //     });
    // }
    //
    // filterNumberByType(filterType, n, targetNumber) {
    //     let selector = this.selector;
    //     const grid = this.grid;
    //
    //     // @Rule : when number is null, number is zero
    //     if (grid.null(n)) n = 0;
    //     if (grid.null(targetNumber)) targetNumber = 0;
    //
    //     let toNumber = null;
    //     if (filterType == grid.const_filterBetween) {
    //         let arr = n.split('-');
    //         n = parseFloat(arr[0]);
    //         if (arr.length > 1) {
    //             toNumber = parseFloat(arr[1]);
    //         }
    //         else {
    //             toNumber = 99999999999999;
    //         }
    //     }
    //     else {
    //         n = parseFloat(n);
    //         toNumber = null;
    //     }
    //
    //     targetNumber = parseFloat(targetNumber);
    //
    //     if      (filterType == tbsGridTypes.FilterType.Equal) {
    //         return (n == targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.NotEqual) {
    //         return (n != targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Greater) {
    //         return (n < targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.GreaterEqual) {
    //         return (n <= targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Less) {
    //         return (n > targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.LessEqual) {
    //         return (n >= targetNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Between) {
    //         return (targetNumber >= n && targetNumber <= toNumber) ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Blank) {
    //         return grid.null(targetNumber) || targetNumber == 0;
    //     }
    // }
    //
    // filterStringByType(filterType, s, targetString) {
    //     let selector = this.selector;
    //     const grid = this.grid;
    //     let regExp;
    //
    //     // String comparisons are case-insensitive.
    //     s = s.toLowerCase();
    //     targetString = targetString.toLowerCase();
    //     if      (filterType == tbsGridTypes.FilterType.Equal) {
    //         regExp =new RegExp(`^${s}$`)
    //         return regExp.test(targetString);
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.NotEqual) {
    //         regExp = new RegExp(`^${s}$`);
    //         return regExp.test(targetString) == false ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Include) {
    //         regExp = new RegExp(`${s}`);
    //         return regExp.test(targetString);
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.NotInclude) {
    //         regExp = new RegExp(`${s}`);
    //         return regExp.test(targetString) == false ? true : false;
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.StartCharacter) {
    //         regExp = new RegExp(`^${s}`);
    //         return regExp.test(targetString);
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.EndCharacter) {
    //         regExp = new RegExp(`${s}$`);
    //         return regExp.test(targetString);
    //     }
    //     else if (filterType == tbsGridTypes.FilterType.Blank) {
    //         regExp = new RegExp(`^$`);
    //         return regExp.test(targetString);
    //     }
    // }
}