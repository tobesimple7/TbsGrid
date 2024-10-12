import { TbsGrid } from "./tbs.grid";
export declare class TbsGridSort {
    grid: TbsGrid;
    selector: string;
    sortColumns: any[];
    options: any;
    constructor(grid: TbsGrid);
    setSortData(data: any, sortColumns: any): void;
    getSortRow(columnName: any): object;
    changeSortButtonOrder(name: any, text: any, order: any, targetIndex: any): void;
    addSortButton(name: any, text: any, order: any, targetIndex: any): void;
    removeSortButton(element: any): void;
    removeSortButtonList(): void;
    getSortButtonList(): void;
    createSortButton(columnName: any): HTMLDivElement;
    toggleSortPlaceHolder(): void;
    showSortPanel(): void;
    hideSortPanel(): void;
    initSortData(): void;
}
//# sourceMappingURL=tbs.grid.sort.d.ts.map