import { TbsGridPanelBase } from './tbs.grid.panel.base';
import { TbsGrid } from "../tbs.grid";
export declare class TbsGridPanel10 extends TbsGridPanelBase {
    grid: TbsGrid;
    panelName: string;
    constructor(grid: TbsGrid);
    createHtml(parentElement: any): void;
    createTable(): void;
    panel10_select(): void;
    showToolbarPanel(): void;
    hideToolbarPanel(): void;
    showToolbarButtons(buttonType: any): void;
    hideToolbarButtons(buttonType: any): void;
}
//# sourceMappingURL=tbs.grid.panel10.d.ts.map