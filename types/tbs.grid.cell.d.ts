import { TbsGrid } from "./tbs.grid";
export declare class TbsGridCell {
    grid: TbsGrid;
    column: any;
    constructor(grid: TbsGrid, column: any);
    createHtml(): void;
    createCell(): void;
    createTemplate(): void;
    hideTableCells(grid: any, panelName: any, tableRow: any, lastColumnIndex: any): void;
    showSelectedCells(grid: any, panelName: any, tableCell: any, rowIndex: any, cellIndex: any): void;
}
//# sourceMappingURL=tbs.grid.cell.d.ts.map