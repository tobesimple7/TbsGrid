import { TbsGrid } from "./tbs.grid";
export declare class TbsGridScroll {
    /**
     * ScrollName : verticalScroll, horizontalScroll, verticalScroll60, horizontalScroll32
     *
     */
    grid: TbsGrid;
    selector: string;
    scrollName: string;
    barSize: number;
    railSize: number;
    moveCount: number;
    margin: string;
    hiddenSize: number;
    panelName: string;
    type: string;
    constructor(grid: TbsGrid, scrollName: string);
    setScroll(type: any): void;
    setHorizontalScroll(): void;
    setVerticalScroll(): void;
    showScroll(type: any): void;
    hideScroll(type: any): void;
    setScrollSize(type: any): void;
    getBarSize(type: any): any;
    getHorizontalBarSize(): any;
    getVerticalBarSize(): number;
    getRailSize(type: any, barSize: any): number;
    getHorizontalRailSize(barSize: any): number;
    getVerticalRailSize(barSize: any): number;
    getMoveCount(type: any, railSize: any): number;
    getHiddenSize(type: any): any;
    getBarWidth(type: any, barSize: any): string;
}
//# sourceMappingURL=tbs.grid.scroll.d.ts.map