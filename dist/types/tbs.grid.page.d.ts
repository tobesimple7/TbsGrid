import { TbsGrid } from "./tbs.grid";
export declare class TbsGridPage {
    grid: TbsGrid;
    selector: string;
    pageIndex: number;
    pageCount: number;
    pageRowCount: number;
    pageTotalRowCount: number;
    options: any;
    user_clickPageFirst: any;
    user_clickPagePrev: any;
    user_clickPageIndex: any;
    user_clickPageNext: any;
    user_clickPageLast: any;
    constructor(grid: any);
    setPageOption(optionName: any, optionValue: any): void;
    setPageData(): void;
}
//# sourceMappingURL=tbs.grid.page.d.ts.map