import { TbsGrid } from "./tbs.grid";
export declare class TbsGridRange {
    grid: TbsGrid;
    selector: string;
    constructor(grid: TbsGrid);
    removePanelRange: (panelName?: string) => void;
    selectRange: (startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any, topRowIndex?: number) => any;
    setRange: (startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any, topRowIndex: any, type?: string) => any;
    setRangeValue: (startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any) => void;
    removeRange: (startRowIndex: any, lastRowIndex: any, startCellIndex?: any, lastCellIndex?: any) => void;
    addRange: (startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any, topRowIndex: any) => void;
}
//# sourceMappingURL=tbs.grid.range.d.ts.map