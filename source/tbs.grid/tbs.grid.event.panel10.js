/**
 * tbs.grid.panel10.js
 *
 */
TbsGrid.prototype.panel10_init = function(){
    let selector = '#' + this.gridId;
    let grid = this;
    const setTotalFilterEvent = function(e) {
        e.stopPropagation();
        grid.totalFilterSearch(this.value);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-filter-input'))
        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').addEventListener('keyup', setTotalFilterEvent);

    const firstEvent = function(e) {
        e.stopPropagation();
        grid.classPage.pageIndex = 1;
        grid.tbs_displayPanel30(0);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-first'))
        document.querySelector(selector + ' .tbs-grid-panel10-page-first').addEventListener('mousedown', firstEvent);
    const prevEvent = function(e) {
        e.stopPropagation();
        grid.classPage.pageIndex -= 1 ;
        grid.tbs_displayPanel30(0);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-prev'))
        document.querySelector(selector + ' .tbs-grid-panel10-page-prev').addEventListener('mousedown', prevEvent);
    const curEvent = function(e) {
        e.stopPropagation();
        grid.tbs_displayPanel30(0);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-select'))
        document.querySelector(selector + ' .tbs-grid-panel10-page-select').addEventListener('mousedown', curEvent);
    const nextEvent = function(e) {
        e.stopPropagation();
        grid.classPage.pageIndex += 1 ;
        grid.tbs_displayPanel30(0);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-next'))
        document.querySelector(selector + ' .tbs-grid-panel10-page-next').addEventListener('mousedown', nextEvent);
    const lastEvent = function(e) {
        e.stopPropagation();
        grid.classPage.pageIndex = grid.classPage.pageCount;
        grid.tbs_displayPanel30(0);
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-last'))
        document.querySelector(selector + ' .tbs-grid-panel10-page-last').addEventListener('mousedown', lastEvent);
}

