import { TbsGrid } from "../tbs.grid";
export declare class TbsGridRenderPanel70 {
    grid: TbsGrid;
    selector: string;
    column: any;
    columnIndex: number;
    columnName: string;
    columnType: string;
    valueName: string;
    textName: string;
    rowIndex: number;
    cellValue: any;
    cellText: any;
    align: string;
    className: string;
    width: number;
    visible: boolean;
    editable: boolean;
    tableCell: any;
    panelName: string;
    cellTemplate: any;
    depth: number;
    constructor(grid: any);
    start(panelName: any, tableCell: any, column: any, rowIndex: any, columnIndex: any): void;
    updateData(): void;
    createHtml(): void;
    setBounding(): void;
}
//# sourceMappingURL=tbs.grid.render.panel70.d.ts.map