/**
 * Paging Module
 * - pageMode: 1) paging
 *             2) pagenation
 *
 * - grouping: deny
 * - tree: deny
 * - fixed row : deny
 *
 * - sorting, filtering : allow
 *
 * 1) paging
 * setData
 * sorting
 * filtering
 * make data_page is also created.
 * Recreate data_view when displaying.
 * I guess I also need to do layout update -> data_page (later)
 *
 * 2) page navigation
 * Do nothing. Just create page navigationg.
 * Just call the setData function.
 *
 */
class TbsGridPage {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

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
}
TbsGridPage.prototype.tbs_setPageOption = function (optionName, optionValue) {
    let selector = this.selector;
    let grid = this.grid;
    let classPage = this;

    classPage.options[optionName] = optionValue;
}
TbsGrid.prototype.tbs_setPageData = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.grid_mode != grid.module_paging) return;
    if (grid.data_view.length == 0) return;

    if (grid.classPage.pageRowCount == 0) grid.classPage.pageRowCount = grid.classPage.options.pageRowCount;

    grid.classPage.pageTotalRowCount = grid.data_page.length;
    grid.classPage.pageCount = Math.ceil(grid.data_page.length / grid.classPage.pageRowCount);

    if (grid.classPage.pageIndex == 0) grid.classPage.pageIndex = 1;

    if (grid.classPage.pageIndex < 1) grid.classPage.pageIndex = 1;
    else if (grid.classPage.pageIndex > grid.classPage.pageCount) grid.classPage.pageIndex = grid.classPage.pageCount;

    grid.classPage.startRowIndex = (grid.classPage.pageIndex - 1) * grid.classPage.pageRowCount;
    grid.classPage.lastRowIndex =  grid.classPage.startRowIndex + grid.classPage.pageRowCount - 1;

    if (grid.classPage.lastRowIndex > grid.data_page.length - 1) grid.classPage.lastRowIndex = grid.data_page.length - 1;
    grid.data_view = [];
    for (let i = grid.classPage.startRowIndex; i <= grid.classPage.lastRowIndex; i++) {
        let row = grid.data_page[i];
        grid.data_view.push(grid.tbs_copyJson(row));
    }

    document.querySelector(selector + ' .tbs-grid-panel10-page-select').textContent = grid.classPage.pageIndex;
}
