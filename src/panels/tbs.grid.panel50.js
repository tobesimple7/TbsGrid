import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridPanelBase } from "./tbs.grid.panel.base";
import { TbsGridRender } from "../tbs.grid.render";
import { TbsGridRenderInfo } from "../tbs.grid.render.info";
export class TbsGridPanel50 extends TbsGridPanelBase {
    constructor(grid) {
        super(grid);
        this.panelName  = 'panel50';

        this.panelName1 = 'panel51';
        this.panelName2 = 'panel52';
        this.panelName0 = 'panel50';
    }
    createHtml(parentElement) {
        let grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group51">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel51"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel52"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group50">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel50"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }
    setDataPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classRange.removePanelRange('panel50');
        this.setDataPanel2({panelName: 'panel51', summaryColumns: grid.footer_table.data });
        this.setDataPanel1({panelName: 'panel50', summaryColumns: grid.footer_table.data });
        this.setDataPanel0({panelName: 'panel52', summaryColumns: grid.footer_table.data });
    }
    setDataPanel1() {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName1;

        if (grid.footer_table.count() == 0) return;

        let topRowIndex = 0;
        let bottomRowIndex = 0;

        let pageRowCount = 1;
        let rowHeight = grid.rowHeight;

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classColumn.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        let tableRowIndex = 0;

        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];

            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            let tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;

            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
        }
    }
    setDataPanel2() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.fixedColumnIndex == -1) return;

        let panelName = this.panelName2;

        if (grid.footer_table.count() == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classColumn.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];

            if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;

            let tbsGridRender = new TbsGridRender(grid);
            tbsGridRender.start(panelName, tableCell, column, 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, column, 0, x);

            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        const tbsGridCell = new
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    }
    setDataPanel0() {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName0;

        if (grid.footer_table.count() == 0) return;
        //startColumnIndex, lastColumIndex
        let result = grid.classColumn.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
            let column = grid.column_table.data[x];
            let columnName = column[tbsGridNames.column.name];
            let tableCell = tableRow.childNodes[x];

            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            }
            else { if (x < startColumnIndex) continue; }

            let tbsGridRender = new TbsGridRender(grid);
            tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);

            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    }

}



