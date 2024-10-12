import { TbsGridPanelBase } from './tbs.grid.panel.base';
import { TbsGrid } from "../tbs.grid";
export declare class TbsGridPanel20 extends TbsGridPanelBase {
    isChecked: boolean;
    constructor(grid: TbsGrid);
    createHtml(parentElement: any): void;
    createTable(): void;
    setDataPanel(topRowIndex?: number): void;
    setDataPanel1(param: any): void;
    setDataPanel2(param: any): void;
    setDataPanel0(param: any): void;
    setDataPanelSub(panelName: any, param: any): void;
    panel21_select(): void;
    panel20_select(panelName: any): void;
}
//# sourceMappingURL=tbs.grid.panel20.d.ts.map