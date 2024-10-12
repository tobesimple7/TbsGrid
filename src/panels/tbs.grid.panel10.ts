import { TbsGridPanelBase } from './tbs.grid.panel.base';
import {TbsGrid} from "../tbs.grid";

export class TbsGridPanel10 extends TbsGridPanelBase {
    grid: TbsGrid;
    panelName: string;
    constructor(grid: TbsGrid) {
        super(grid);
        this.grid = grid;
        this.panelName  = 'panel10';
    }

    createHtml(parentElement) {
        const grid = this.grid;
        //super.createHtml(parentElement);
        let isShowToolbar = (grid.options['showToolbarPanel']) ? 'tbs-grid-show' : 'tbs-grid-hide';
        let s = '';
        s += '<div class="tbs-grid-panel10 ' + isShowToolbar + '">';
            s += '<div class="tbs-grid-panel10-wrap">';
            s += '<div class="tbs-grid-panel10-filter" style="display:none;">';
                s += '<input class="tbs-grid-panel10-filter-input" placeholder="Search">';
            s += '</div>';
            s += '<div class="tbs-grid-panel10-page" style="display:none;">';
                s += '<span class="tbs-grid-panel10-page-first">◁◁</span>';
                s += '<span class="tbs-grid-panel10-page-prev">◀</span>';
                s += '<span class="tbs-grid-panel10-page-select">1</span>';
                s += '<span class="tbs-grid-panel10-page-next">▶</span>';
                s += '<span class="tbs-grid-panel10-page-last">▷▷</span>';
            s += '</div>';
                s += '<div class="tbs-grid-panel10-buttons" style="display:;">';
                    s += '<div class="tbs-grid-panel10-buttons-wrap">';
                        s += '<span class="tbs-grid-panel10-buttons-filter">'+grid.getConfigLabel('toolbar_button_filter')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-filter-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-sort">'+grid.getConfigLabel('toolbar_button_sorting')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-sort-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-group">'+grid.getConfigLabel('toolbar_button_grouping')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-group-expand">'+grid.getConfigLabel('toolbar_button_expand')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-group-collapse">'+grid.getConfigLabel('toolbar_button_collapse')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-group-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                        s += '<span class="tbs-grid-panel10-buttons-fixed-column">'+grid.getConfigLabel('toolbar_button_fixedColumn')+'</span>';
                    s += '</div>';
                s += '</div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);

        grid.classPanel10.panel10_select();
    }

    createTable() {
        let selector = '#' + this.grid.gridId;

        const panel = document.querySelector(selector + ' .tbs-grid-panel10');
        panel.classList.add('tbs-grid-show');
    }

    panel10_select(){
        let selector = this.selector;
        const grid = this.grid;

        /* Filter Panel */
        const showFilterPanelEvent = function(e) {
            e.stopPropagation();
            if (grid.options.showFilterPanel == false) {
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
            if (grid.options.showSortPanel == false) {
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
            if (grid.options.showGroupPanel) grid.classGroup.hideGroupPanel();
            else grid.classGroup.showGroupPanel();
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group').addEventListener('mousedown', showGroupPanelEvent);

        const expandGroupPanelEvent = function(e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) grid.classGroup.expandGroup();
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand').addEventListener('mousedown', expandGroupPanelEvent);

        const collapseGroupPanelEvent = function(e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.collapseGroup();
            }
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse').addEventListener('mousedown', collapseGroupPanelEvent);

        const resetGroupPanelEvent = function(e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.initGroupData();
            }
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset').addEventListener('mousedown', resetGroupPanelEvent);

        /* Fixled Column Panel */
        const showFixedColumnPanelEvent = function(e) {
            e.stopPropagation();
            if (grid.fixedColumnIndex == -1 && grid._startCellIndex >= 0) grid.classColumn.setFixedColumn(grid._startCellIndex);
            else  grid.classColumn.removeFixedColumn();
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column').addEventListener('mousedown', showFixedColumnPanelEvent);

        /* Total Filter */
        // const setTotalFilterEvent = function(e) {
        //     e.stopPropagation();
        //     grid.classFilter.totalFilterSearch(grid.value);
        // }
        // if (document.querySelector(selector + ' .tbs-grid-panel10-filter-input'))
        //     document.querySelector(selector + ' .tbs-grid-panel10-filter-input').addEventListener('keyup', setTotalFilterEvent);

        const firstEvent = function(e) {
            e.stopPropagation();
            grid.classPage.pageIndex = 1;
            grid.classPanel30.setDataPanel(0);
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-first'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-first').addEventListener('mousedown', firstEvent);
        const prevEvent = function(e) {
            e.stopPropagation();
            grid.classPage.pageIndex -= 1 ;
            grid.classPanel30.setDataPanel(0);
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-prev'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-prev').addEventListener('mousedown', prevEvent);
        const curEvent = function(e) {
            e.stopPropagation();
            grid.classPanel30.setDataPanel(0);
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-select'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-select').addEventListener('mousedown', curEvent);
        const nextEvent = function(e) {
            e.stopPropagation();
            grid.classPage.pageIndex += 1 ;
            grid.classPanel30.setDataPanel(0);
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-next'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-next').addEventListener('mousedown', nextEvent);
        const lastEvent = function(e) {
            e.stopPropagation();
            grid.classPage.pageIndex = grid.classPage.pageCount;
            grid.classPanel30.setDataPanel(0);
        }
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-last'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-last').addEventListener('mousedown', lastEvent);
    }

    showToolbarPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.options.showToolbarPanel = true;
        const panel = document.querySelector(selector + ' .tbs-grid-panel10');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    }

    hideToolbarPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.options.showToolbarPanel = false;
        const panel = document.querySelector(selector + ' .tbs-grid-panel10');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    }

    showToolbarButtons(buttonType) {
        let selector = this.selector;
        const grid = this.grid;

        if (buttonType == 'filter') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');
            button.style.display = '';
        }
        else if (buttonType == 'sort') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
            button.style.display = '';
        }
        else if (buttonType == 'group') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');  button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');button.style.display = '';
        }
        else if (buttonType == 'fixedColumn') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column'); button.style.display = '';
        }
    }

    hideToolbarButtons(buttonType) {
        let selector = this.selector;
        const grid = this.grid;

        if (buttonType == 'filter') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');  button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');button.style.display = 'none';
        }
        else if (buttonType == 'sort') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');  button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');button.style.display = 'none';
        }
        else if (buttonType == 'group') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');  button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');button.style.display = 'none';
        }
        else if (buttonType == 'fixedColumn') {
            let button: any = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');button.style.display = 'none';
        }
    }

}


