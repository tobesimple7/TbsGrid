import { TbsGrid } from "../tbs.grid";
export declare class TbsGridRenderPanelInfo {
    /**
     * num, mode, checkbox
     */
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
    constructor(grid: TbsGrid);
    start(panelName: any, tableCell: any, column: any, rowIndex: any, columnIndex: any): void;
    createHtml(): void;
    setBounding(): void;
}
//# sourceMappingURL=tbs.grid.render.panel.info.d.ts.map