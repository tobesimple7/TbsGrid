import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridPanelBase } from './tbs.grid.panel.base.js';
import { TbsGridRenderPanel70 } from './tbs.grid.render.panel70.js';
import { TbsGridRenderPanelInfo } from '../render/tbs.grid.render.panel.info.js';
import { TbsGridTable } from "../tbs.grid.table.js";

export class TbsGridPanel70 extends TbsGridPanelBase {

    constructor(grid) {
        super(grid);
        this.panelName  = 'panel70';

        this.panelName1 = 'panel71';
        this.panelName2 = 'panel72';
        this.panelName0 = 'panel70';
    }

    createHtml(parentElement) {
        const grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group71">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel71"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel72"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group70">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel70"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }

    createTable() {
        const grid = this.grid;

        const classTable = new TbsGridTable(grid);
        classTable.createTable('panel71', 0, 2);
        classTable.createTable('panel72', 0, 2);
        classTable.createTable('panel70', 0, 2);
    }

    setDataPanel() {
        let selector = this.selector;
        const grid = this.grid;

        this.setDataPanel2({panelName: 'panel72'});
        this.setDataPanel0({panelName: 'panel70'});
    }

    setDataPanel2(param) {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName2;

        if (grid.options.showFilterPanel != true) return;

        let result = grid.classColumn.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
        let tableRow  = tableRows[0];
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[tbsGridNames.column.name];

            /* Render: Start */
            // let tbsGridRender = new TbsGridRenderPanel70(grid);
            // tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            // tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            let visible = column[tbsGridNames.column.visible];
            tableCell.style.display = (visible) ? '' : 'none';

            let combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';

            if(grid.isFilterColumnName(columnName)) {
                let filterColumn = grid.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);

        tableRow = tableRows[1];
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[tbsGridNames.column.name];

            /* Render: Start */
            // let tbsGridRender = new TbsGridRenderPanel70(grid);
            // tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);
            // tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);
            let visible = column[tbsGridNames.column.visible];
            tableCell.style.display = (visible) ? '' : 'none';

            // Set input
            let input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if(grid.isFilterColumnName(columnName)) {
                let filterColumn = grid.getFilterColumn(columnName);
                input.value = filterColumn[grid.const_filterValue];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(input);
        }

        /* on fixed columns */
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    }

    setDataPanel0(param) {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName0;

        if (grid.options.showFilterPanel != true) return;

        let result = grid.classColumn.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
        let tableRow  = tableRows[0];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[tbsGridNames.column.name];

            /* Render: Start */
            // let tbsGridRender = new TbsGridRenderPanel70(grid);
            // tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            // tbsGridRender = null;

            let visible = column[tbsGridNames.column.visible];
            tableCell.style.display = (visible) ? '' : 'none';

            let combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';

            if(grid.isFilterColumnName(columnName)) {
                let filterColumn = grid.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }

        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);

        tableRow = tableRows[1];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[tbsGridNames.column.name];

            /* Render: Start */
            // let tbsGridRender = new TbsGridRenderPanel70(grid);
            // tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);
            // tbsGridRender = null;

            let visible = column[tbsGridNames.column.visible];
            tableCell.style.display = (visible) ? '' : 'none';

            // Set input
            let input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if(grid.isFilterColumnName(columnName)) {
                let filterColumn = grid.getFilterColumn(columnName);
                input.value = filterColumn[grid.const_filterValue];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(input);
        }

        /* on fixed columns */
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);

        grid.classPanel70.panel70_select('panel70');
        grid.classPanel70.panel70_select('panel72');
    }

    panel70_select(panelName) {
        let selector = this.selector;
        const grid = this.grid;

        let element;
        let targetName;
        const changeEvent = function(e) {
            e.preventDefault();
            e.stopPropagation();

            let combo = e.target;

            let columnName = combo.dataset.name;
            let column = grid.getColumn(columnName);
            let columnIndex = grid.getColumnIndex(columnName);
            let columnType = column[tbsGridNames.column.type];

            let filterType = combo.selectedOptions[0].value;

            let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
            let input = inputs[columnIndex];
            let word = input.value;

            if (filterType == '8') {
                input.value = '';
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);
                else grid.apply();
            }
            else if (filterType != '0' && word != '') {
                let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);
                else grid.apply();
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.filter_column_table.removeByRowId(column)
                grid.classFilter.filters();
                if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);
                else grid.apply();
            }
        };
        const keyupEvent = function(e) {
            let input = e.target;

            //if (e.keyCode == 13 || e.keyCode == 9) {
            grid.FocusControl = 'filterInput';
            let columnName = input.dataset.name;
            let column = grid.getColumn(columnName);
            let columnIndex = grid.getColumnIndex(columnName);
            let columnType = column[tbsGridNames.column.type];

            let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
            let combo = combos[columnIndex];
            let filterType = combo.selectedOptions[0].value;

            let word = input.value;

            if (filterType != '0') {
                let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);

                if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);
                else {
                    grid.classFilter.filters();
                    grid.apply();
                }
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.classFilter.filters();
                if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);
                else grid.apply();
            }
            if (e.keyCode == 13 || e.keyCode == 9) { grid.FocusControl = ''; }
        };
        const blurEvent = function(e) {
            grid.FocusControl = '';
        };
        // let panel70 = document.querySelectorAll(selector + ' .tbs-grid-panel70');
        //
        // panel70.addEventListener('keyup', keyupEvent);
        // panel70.addEventListener('change', changeEvent);

        let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
        let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');

        for (let i = 0, len = inputs.length; i < len; i++) {
            inputs[i].addEventListener('keyup', keyupEvent);
            inputs[i].addEventListener('blur', blurEvent);
            combos[i].addEventListener('change', changeEvent);
        }
    }
}


