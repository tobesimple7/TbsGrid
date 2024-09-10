class TbsGridPanel10 {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }
}
TbsGrid.prototype.panel10_init = function(){
    let selector = '#' + this.gridId;
    let grid = this;

    /* Filter Panel */
    const showFilterPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.options[grid.option_showFilterPanel] == false) {
            grid.classFilter.showFilterPanel();
        }
        else {
            grid.classFilter.hideFilterPanel();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter').addEventListener('mousedown', showFilterPanelEvent);

    const resetFilterPanelEvent = function(e) {
        e.stopPropagation();
        grid.classFilter.initFilterData();
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset').addEventListener('mousedown', resetFilterPanelEvent);

    /* Sort Panel */
    const showSortPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.options[grid.option_showSortPanel] == false) {
            grid.classSort.showSortPanel();
        }
        else {
            grid.classSort.hideSortPanel();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort').addEventListener('mousedown', showSortPanelEvent);

    const resetSortPanelEvent = function(e) {
        e.stopPropagation();
        grid.classSort.initSortData();
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset').addEventListener('mousedown', resetSortPanelEvent);

    /* Group Panel */
    const showGroupPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.grid_mode != grid.code_group) {
            grid.classGroup.allowGroupMode();
        }
        else {
            if (grid.options[grid.option_showGroupPanel] == true) grid.classGroup.denyGroupMode();
            else grid.classGroup.allowGroupMode();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-group').addEventListener('mousedown', showGroupPanelEvent);

    const expandGroupPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.grid_mode == grid.code_group) {
            grid.classGroup.expandGroup();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand').addEventListener('mousedown', expandGroupPanelEvent);

    const collapseGroupPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.grid_mode == grid.code_group) {
            grid.classGroup.collapseGroup();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse').addEventListener('mousedown', collapseGroupPanelEvent);

    const resetGroupPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.grid_mode == grid.code_group) {
            grid.classGroup.initGroupData();
        }
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset').addEventListener('mousedown', resetGroupPanelEvent);

    /* Fixled Column Panel */
    const showFixedColumnPanelEvent = function(e) {
        e.stopPropagation();
        if (grid.fixedColumnIndex == -1 && grid._startCellIndex >= 0) grid.tbs_setFixedColumn(grid._startCellIndex);
        else  grid.tbs_removeFixedColumn();
    }
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column'))
        document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column').addEventListener('mousedown', showFixedColumnPanelEvent);

    /* Total Filter */
    const setTotalFilterEvent = function(e) {
        e.stopPropagation();
        grid.classFilter.totalFilterSearch(this.value);
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

TbsGrid.prototype.tbs_showToolbarPanel = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let panel = document.querySelector(selector + ' .tbs-grid-panel10');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    //grid.tbs_displayPanel70('panel70');
    grid.tbs_apply();
}
TbsGrid.prototype.tbs_hideToolbarPanel = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let panel = document.querySelector(selector + ' .tbs-grid-panel10');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    //grid.tbs_displayPanel70('panel70');
    grid.tbs_apply();
}

TbsGrid.prototype.tbs_showToolbarButtons = function(buttonType) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (buttonType == 'filter') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');   button.style.display = '';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset'); button.style.display = '';
    }
    else if (buttonType == 'sort') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');  button.style.display = '';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');button.style.display = '';
    }
    else if (buttonType == 'group') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');  button.style.display = '';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');button.style.display = '';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');button.style.display = '';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');button.style.display = '';
    }
    else if (buttonType == 'fixedColumn') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column'); button.style.display = '';
    }
}
TbsGrid.prototype.tbs_hideToolbarButtons = function(buttonType) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (buttonType == 'filter') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');  button.style.display = 'none';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');button.style.display = 'none';
    }
    else if (buttonType == 'sort') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');  button.style.display = 'none';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');button.style.display = 'none';
    }
    else if (buttonType == 'group') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');  button.style.display = 'none';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');button.style.display = 'none';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');button.style.display = 'none';
        button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');button.style.display = 'none';
    }
    else if (buttonType == 'fixedColumn') {
        let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');button.style.display = 'none';
    }
}


/* User Functions */
TbsGrid.prototype.showToolbarPanel = function() { this.tbs_showToolbarPanel(); }
TbsGrid.prototype.hideToolbarPanel = function() { this.tbs_hideToolbarPanel(); }

TbsGrid.prototype.showToolbarButtons = function(buttonType) { this.tbs_showToolbarButtons(buttonType); }
TbsGrid.prototype.hideToolbarButtons = function(buttonType) { this.tbs_hideToolbarButtons(buttonType); }
