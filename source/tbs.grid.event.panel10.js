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
    if (document.querySelector(selector + ' .tbs-grid-panel10-filter'))
        document.querySelector(selector + ' .tbs-grid-panel10-filter').addEventListener('keyup', setTotalFilterEvent);
}
