import {TbsGrid} from "./tbs.grid";
import {GridMode} from "./tbs.grid.types";

export class TbsGridPage {
    grid: TbsGrid;
    selector: string;

    pageIndex: number;
    pageCount: number;
    pageRowCount: number;
    pageTotalRowCount: number;

    options: any;

    user_clickPageFirst  = null;
    user_clickPagePrev   = null;
    user_clickPageIndex  = null;
    user_clickPageNext   = null;
    user_clickPageLast   = null;

    constructor(grid) {
        this.grid     = grid;
        this.selector = `#${grid.gridId}`;

        this.pageIndex = 0;
        this.pageCount = 0;
        this.pageRowCount = 0;
        this.pageTotalRowCount = 0;

        this.options = {};
        this.options.pageRowCount = 10;
        this.options.pageRowCountList = [10, 20, 30, 50, 100];

        // user event
        this.user_clickPageFirst  = null;
        this.user_clickPagePrev   = null;
        this.user_clickPageIndex  = null;
        this.user_clickPageNext   = null;
        this.user_clickPageLast   = null;
    }

    setPageOption(optionName: string, optionValue: object) {
        this.options[optionName] = optionValue;
    }

    setPageData() {
        const selector = this.selector;
        const grid = this.grid;

        if (grid.grid_mode != GridMode.page) return;
        if (grid.view_table.count() == 0) return;

        if (grid.classPage.pageRowCount == 0) grid.classPage.pageRowCount = grid.classPage.options.pageRowCount;

        grid.classPage.pageTotalRowCount = grid.page_table.count();
        grid.classPage.pageCount = Math.ceil(grid.page_table.count() / grid.classPage.pageRowCount);

        if (grid.classPage.pageIndex == 0) grid.classPage.pageIndex = 1;

        if (grid.classPage.pageIndex < 1) grid.classPage.pageIndex = 1;
        else if (grid.classPage.pageIndex > grid.classPage.pageCount) grid.classPage.pageIndex = grid.classPage.pageCount;

        grid.startRowIndex = (grid.classPage.pageIndex - 1) * grid.classPage.pageRowCount;
        grid.lastRowIndex =  grid.startRowIndex + grid.classPage.pageRowCount - 1;

        if (grid.lastRowIndex > grid.page_table.count() - 1) grid.lastRowIndex = grid.page_table.count() - 1;
        grid.view_table.remove();
        for (let i = grid.startRowIndex; i <= grid.lastRowIndex; i++) {
            const row = grid.page_table.data[i];
            grid.view_table.insert(grid.copyJson(row));
        }

        (document.querySelector(`${selector} .tbs-grid-panel10-page-select`) as HTMLElement).textContent = String(this.pageIndex);
    }

}

