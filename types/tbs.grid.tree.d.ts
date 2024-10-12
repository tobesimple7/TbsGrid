import { TbsGrid } from "./tbs.grid";
import { columnAlias } from "./tbs.grid.types";
export declare class TbsGridTree {
    grid: TbsGrid;
    selector: string;
    openDepth: number;
    constructor(grid: any);
    createTreeData(): void;
    setTreeSortColumns(sortColumns: any): void;
    setTreeData(data: any, openDepth?: number, isFirst?: boolean): void;
    setTreeIcon(tableCell: any, rowIndex: any): void;
    toggleTreeIcon(rowIndex: any, element: any, type?: any): void;
    getTreeFlodingStatus(tableCell: any): columnAlias.open | columnAlias.closed;
    setTreeFolding(tableCell: any): void;
    getTreechildRows(folding: any, rowIndex: any, isAll?: boolean): any[];
    openTreeRow(rowIndex: any): void;
    closeTreeRow(rowIndex: any): void;
    addTreeRows(rowIndex: any): void;
    addTreeRow(startRowIndex: any, row: any): void;
    removeTreeRow(row: any): void;
}
//# sourceMappingURL=tbs.grid.tree.d.ts.map