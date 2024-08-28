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
TbsGrid.prototype.tbs_setPageData = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.grid_mode != grid.module_paging) return;
    if (grid.data_view.length == 0) return;

    if (grid.paging.pageRowCount == 0) grid.paging.pageRowCount = grid.options.paging.pageRowCount;

    grid.paging.pageTotalRowCount = grid.data_page.length;
    grid.paging.pageCount = Math.ceil(grid.data_page.length / grid.paging.pageRowCount);

    if (grid.paging.pageIndex == 0) grid.paging.pageIndex = 1;

    if (grid.paging.pageIndex < 1) grid.paging.pageIndex = 1;
    else if (grid.paging.pageIndex > grid.paging.pageCount) grid.paging.pageIndex = grid.paging.pageCount;

    grid.paging.startRowIndex = (grid.paging.pageIndex - 1) * grid.paging.pageRowCount;
    grid.paging.lastRowIndex =  grid.paging.startRowIndex + grid.paging.pageRowCount - 1;

    if (grid.paging.lastRowIndex > grid.data_page.length - 1) grid.paging.lastRowIndex = grid.data_page.length - 1;
    grid.data_view = [];
    for (let i = grid.paging.startRowIndex; i <= grid.paging.lastRowIndex; i++) {
        let row = grid.data_page[i];
        grid.data_view.push(grid.tbs_copyJson(row));
    }

    document.querySelector(selector + ' .tbs-grid-panel10-page-select').textContent = grid.paging.pageIndex;
}
