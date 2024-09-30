import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridPage {

    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

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

    setPageOption(optionName, optionValue) {
        let selector = this.selector;
        const grid = this.grid;
        let classPage = this;

        classPage.options[optionName] = optionValue;
    }

    setPageData() {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.grid_mode != tbsGridTypes.GridMode.page) return;
        if (grid.view_table.count() == 0) return;

        if (grid.classPage.pageRowCount == 0) grid.classPage.pageRowCount = grid.classPage.options.pageRowCount;

        grid.classPage.pageTotalRowCount = grid.page_table.count();
        grid.classPage.pageCount = Math.ceil(grid.page_table.count() / grid.classPage.pageRowCount);

        if (grid.classPage.pageIndex == 0) grid.classPage.pageIndex = 1;

        if (grid.classPage.pageIndex < 1) grid.classPage.pageIndex = 1;
        else if (grid.classPage.pageIndex > grid.classPage.pageCount) grid.classPage.pageIndex = grid.classPage.pageCount;

        grid.classPage.startRowIndex = (grid.classPage.pageIndex - 1) * grid.classPage.pageRowCount;
        grid.classPage.lastRowIndex =  grid.classPage.startRowIndex + grid.classPage.pageRowCount - 1;

        if (grid.classPage.lastRowIndex > grid.page_table.count() - 1) grid.classPage.lastRowIndex = grid.page_table.count() - 1;
        grid.view_table.remove();
        for (let i = grid.classPage.startRowIndex; i <= grid.classPage.lastRowIndex; i++) {
            let row = grid.page_table.data[i];
            grid.view_table.insert(grid.copyJson(row));
        }

        document.querySelector(selector + ' .tbs-grid-panel10-page-select').textContent = grid.classPage.pageIndex;
    }

}

