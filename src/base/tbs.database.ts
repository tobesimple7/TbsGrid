import {TbsBase} from './tbs.base';
import {TbsDataTable} from "./tbs.data.table";
import {TbsDataArrayTable} from "./tbs.data.array.table";

export type DataTableType = TbsDataTable | TbsDataArrayTable;


export class TbsDatabase extends TbsBase {
    tables: DataTableType[];

    constructor() {
        super();
        this.tables = [];
    }

    createTable(tableName: string): TbsDataTable {
        const table = new TbsDataTable(tableName);
        table.type = 'table';
        this.tables.push(table);

        return this.getTable(tableName) as TbsDataTable;
    }

    createView(tableName: string): TbsDataTable {
        const table = new TbsDataTable(tableName);
        table.type = 'view';
        this.tables.push(table);

        return this.getTable(tableName) as TbsDataTable;
    }

    createArrayTable(tableName: string): TbsDataArrayTable {
        const table = new TbsDataArrayTable(tableName);
        table.type = 'table';
        this.tables.push(table);

        return this.getTable(tableName) as TbsDataArrayTable;
    }

    removeTable(tableName: string): void {
        for (let i = 0, len = this.tables.length; i < len; i++) {
            const table: DataTableType = this.tables[i];
            if (table!.tableName === tableName) {
                this.tables.splice(i, 1);
                break;
            }
        }
    }

    getTable(tableName: string): DataTableType {
        let result: DataTableType = null;
        for (let i: number = 0, len: number = this.tables.length; i < len; i++) {
            const table: DataTableType = this.tables[i];
            if (table!.tableName == tableName) {
                result = table;
                break;
            }
        }
        return result;
    }
}

