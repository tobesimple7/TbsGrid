import { TbsGrid } from "./tbs.grid";
export declare class TbsGridRangePanel {
    grid: TbsGrid;
    selector: string;
    panelName: string;
    startRowIndex: number;
    startCellIndex: number;
    lastRowIndex: number;
    lastCellIndex: number;
    _startRowIndex: number;
    _startCellIndex: number;
    _lastRowIndex: number;
    _lastCellIndex: number;
    selectRangeArray: any[];
    data_select_panel31: any[];
    data_select_panel30: any[];
    data_summary: any[];
    constructor(grid: TbsGrid, panelName: string);
    selectRange(startRowIndex: number, lastRowIndex: number, startCellIndex?: number, lastCellIndex?: number, topRowIndex?: number): void;
    setRange(startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any, topRowIndex: any, type?: string): void;
    setRangeValue(startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any): void;
    removeRange(startRowIndex: number, lastRowIndex: number, startCellIndex?: number, lastCellIndex?: number): void;
    addRange(startRowIndex: any, lastRowIndex: any, startCellIndex: any, lastCellIndex: any, topRowIndex: any): void;
    getMaxCellIndexByMouseMove(): any;
    getMinCellIndexByMouseMove(): any;
    getMaxCellIndexByMouseMove2(panelName: any): any;
    getMinCellIndexByMouseMove2(panelName: any): any;
}
//# sourceMappingURL=tbs.grid.range.panel.d.ts.map