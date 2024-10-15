import {TbsGridPanelBase} from './tbs.grid.panel.base';
import {TbsGrid} from "../tbs.grid";
import {ClickPageOrder, GridMode} from "../tbs.grid.types";

export class TbsGridPanel99 extends TbsGridPanelBase {

    grid: TbsGrid;
    selector: string;
    panelName: string;

    constructor(grid: TbsGrid) {
        super(grid);
        this.grid = grid;
        this.selector = `#${grid.gridId}`;
        this.panelName  = 'panel99';
    }

    createHtml(parentElement: any) {
        const grid = this.grid;
        const isShowToolbar: string =
            grid.grid_mode == GridMode.page || grid.grid_mode == GridMode.pagination ? 'tbs-grid-show' : 'tbs-grid-hide';

        let s = '';
        s += `<div class="tbs-grid-panel99 ${isShowToolbar}">`;
            s += '<div class="tbs-grid-panel99-wrap">';
                s += '<div class="tbs-grid-panel99-page">';
                    s += '<span class="tbs-grid-panel99-page-first">◁◁</span>';
                    s += '<span class="tbs-grid-panel99-page-prev">◀</span>';
                    s += '<span class="tbs-grid-panel99-page-select">1</span>';
                    s += '<span class="tbs-grid-panel99-page-next">▶</span>';
                    s += '<span class="tbs-grid-panel99-page-last">▷▷</span>';
                    s += '<select class="tbs-grid-panel99-page-combo"></select>';
                s += '</div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);

        grid.classPanel99.panel99_select();
    }

    createTable() {
        const panel = document.querySelector(`${this.selector} .tbs-grid-panel99`);
        panel.classList.add('tbs-grid-show');
    }

    panel99_select(){
        const selector = this.selector;
        const grid = this.grid;

        const firstEvent = e => {
            e.stopPropagation();

            if (grid.grid_mode == GridMode.pagination) {
                grid.classPagination.pageIndex = 1;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.first);
                }
            }
            else {
                grid.classPage.pageIndex = 1;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        }

        if (document.querySelector(`${selector} .tbs-grid-panel99-page-first`))
            document.querySelector(`${selector} .tbs-grid-panel99-page-first`).addEventListener('mousedown', firstEvent);

        const prevEvent = e => {
            e.stopPropagation();

            if (grid.grid_mode == GridMode.pagination) {
                grid.classPagination.pageIndex -= 1 ;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.prev);
                }
            }
            else {
                grid.classPage.pageIndex -= 1 ;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        }

        if (document.querySelector(`${selector} .tbs-grid-panel99-page-prev`))
            document.querySelector(`${selector} .tbs-grid-panel99-page-prev`).addEventListener('mousedown', prevEvent);

        // const curEvent = e => {
        //     e.stopPropagation();
        //     if (grid.grid_mode == GridMode.pagination) {
        //         if (grid.notNull(grid.onClickPage)) {
        //             grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.last);
        //         }
        //     }
        //     else grid.classPanel30.setDataPanel(0);
        // }
        //
        // if (document.querySelector(`${selector} .tbs-grid-panel99-page-select`))
        //     document.querySelector(`${selector} .tbs-grid-panel99-page-select`).addEventListener('mousedown', curEvent);

        const nextEvent = e => {
            e.stopPropagation();

            if (grid.grid_mode == GridMode.pagination) {
                grid.classPagination.pageIndex += 1 ;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.next);
                }
            }
            else {
                grid.classPage.pageIndex += 1 ;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        }

        if (document.querySelector(`${selector} .tbs-grid-panel99-page-next`))
            document.querySelector(`${selector} .tbs-grid-panel99-page-next`).addEventListener('mousedown', nextEvent);

        const lastEvent = e => {
            e.stopPropagation();

            if (grid.grid_mode == GridMode.pagination) {
                grid.classPagination.pageIndex = grid.classPage.pageCount;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.last);
                }
            }
            else {
                grid.classPage.pageIndex = grid.classPage.pageCount;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        }

        if (document.querySelector(`${selector} .tbs-grid-panel99-page-last`))
            document.querySelector(`${selector} .tbs-grid-panel99-page-last`).addEventListener('mousedown', lastEvent);

        const changeEvent = e => {
            e.stopPropagation();
            if (grid.grid_mode == GridMode.pagination) {
                grid.classPagination.pageIndex = 1;
                grid.options.pageRowCount = Number(e.target.value);

                if (grid.notNull(grid.onChangePageRowCount)) {
                    grid.onChangePageRowCount(grid, 1, grid.options.pageRowCount);
                }
            }
            else {
                grid.classPage.pageIndex = 1;
                grid.options.pageRowCount = Number(e.target.value);
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        }

        if (document.querySelector(`${selector} .tbs-grid-panel99-page-combo`))
            document.querySelector(`${selector} .tbs-grid-panel99-page-combo`).addEventListener('change', changeEvent);
    }

    setPageRowCountList(data?: any[]) {
        const grid = this.grid;
        const selector = this.selector;

        if (grid.null(data)) {
            data = grid.options.pageRowCountList;
        }
        const pageRowcount = grid.options.pageRowCount;

        const combo = document.querySelector(`${selector} .tbs-grid-panel99-page-combo`);
        for (let i = 0, len = data.length; i < len; i++) {
            const row: number = data[i];
            const option = document.createElement('option');
            option.value = String(row);
            option.text = String(row);
            if (pageRowcount == Number(row)) option.selected = true;
            combo.append(option);
        }
    }

    showPagePanel() {
        const selector = this.selector;
        const grid = this.grid;

        grid.options.showToolbarPanel = true;
        const panel = document.querySelector(`${selector} .tbs-grid-panel99`);
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');

        this.setPageRowCountList();

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    }

    hidePagePanel() {
        const selector = this.selector;
        const grid = this.grid;

        grid.options.showToolbarPanel = false;
        const panel = document.querySelector(`${selector} .tbs-grid-panel99`);
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    }
}


