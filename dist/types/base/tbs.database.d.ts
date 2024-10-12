import { TbsBase } from './tbs.base';
import { TbsDataTable } from "./tbs.data.table";
import { TbsDataArrayTable } from "./tbs.data.array.table";
export type DataTableType = TbsDataTable | TbsDataArrayTable;
export declare class TbsDatabase extends TbsBase {
    tables: DataTableType[];
    constructor();
    createTable(tableName: string): TbsDataTable;
    createView(tableName: string): TbsDataTable;
    createArrayTable(tableName: string): TbsDataArrayTable;
    removeTable(tableName: string): void;
    getTable(tableName: string): DataTableType;
}
//# sourceMappingURL=tbs.database.d.ts.map