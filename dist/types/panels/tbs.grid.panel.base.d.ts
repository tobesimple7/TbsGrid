import { TbsBase } from "../base/tbs.base";
import { TbsGrid } from "../tbs.grid";
export declare class TbsGridPanelBase extends TbsBase {
    grid: TbsGrid;
    selector: string;
    panelName: string;
    panelName1: string;
    panelName2: string;
    panelName0: string;
    constructor(grid: TbsGrid);
    /**
     *  Panel Interface
     */
    createHtml(parentElement: any): void;
    createEtcHtml(parentElement: any): void;
}
//# sourceMappingURL=tbs.grid.panel.base.d.ts.map