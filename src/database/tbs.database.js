import { TbsBase } from '../tbs.base.js';
import { TbsDataTable } from '../tbs.data.table.js';

export class TbsDatabase extends TbsBase {

    constructor() {
        super();
        this.tables = [];
    }

    createTable(tableName) {
        let table = new TbsDataTable(tableName);
        table.type = 'table';
        this.tables.push(table);

        return this.getTable(tableName);
    }

    createView(tableName){
        let table = new TbsDataTable(tableName);
        table.type = 'view';
        this.tables.push(table);

        return this.getTable(tableName);
    }

    removeTable(tableName) {
        for (let i = 0, len = this.tables.length; i < len; i++) {
            let table = this.tables[i];
            if (table.tableName === tableName) {
                this.tables.splice(i, 1);
                break;
            }
        }
    }

    getTable(tableName) {
        let result = null;
        for (let i = 0, len = this.tables.length; i < len; i++) {
            let table = this.tables[i];
            if (table.tableName === tableName) {
                result = table;
                break;
            }
        }
        return result;
    }
}

