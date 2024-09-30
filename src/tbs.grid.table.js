import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridDom } from "./tbs.grid.dom.js";

export class TbsGridTable {
    constructor(grid) {
        this.grid = grid;
    }

    createTable(panelName, startRowIndex, rowCount) {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;

        const table = TbsGridDom.createTable();

        /**
         * table head
         */

        this.createTableHead(panelName, table);

        /**
         * table body
         */

        let tbody = document.createElement('tbody');
        for (let rowIndex= startRowIndex; rowIndex < rowCount; rowIndex++) this.createTableRow(panelName, tbody);
        table.appendChild(tbody);

        document.querySelector(selector + ' .tbs-grid-' + panelName).innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-' + panelName).appendChild(table);
    }

    createTableHead(panelName, table) {
        const grid = this.grid;

        let s = panelName.substring(6);
        if (s == '1') this.createTableHead1(panelName, table);
        else if (s == '2') this.createTableHead2(panelName, table);
        else this.createTableHead0(panelName, table);
    }

    createTableHead1(panelName, table) {
        const grid = this.grid;

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        for (let i = 0, len = grid.info_table.count(); i < len; i++) {
            let dataRow = grid.info_table.data[i];

            let th = document.createElement('th');
            th.style.width = dataRow[tbsGridNames.column.width] + 'px';
            th.style.display = dataRow[tbsGridNames.column.visible] ? '' : 'none';
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
    }

    createTableHead2(panelName, table) {
        return this.createTableHead0(panelName, table);
    }

    createTableHead0(panelName, table) {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let sumWidth = 0;
        for (let i = 0, len = grid.column_table.count(); i < len; i++) {
            let column = grid.column_table.data[i];
            let th = document.createElement('th');
            th.style.width = (column[tbsGridNames.column.visible] == true) ? parseInt(column[tbsGridNames.column.width]) + 'px' : '0px';
            th.style.display = (column[tbsGridNames.column.visible] == true) ? '' : 'none';
            sumWidth += (grid.column_table.data[i][tbsGridNames.column.visible] == true) ? parseInt(column[tbsGridNames.column.width]) : 0;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        return sumWidth;
    }

    createTableRow(panelName, tbody) {
        let selector = '#' + this.gridId;
        const grid = this.grid;

        let tr = document.createElement('tr');
        if (panelName == 'panel20' || panelName == 'panel22') {
            tr.style = 'height:' + grid.headerRowHeight + 'px';
            for (let i = 0, len = grid.headerColumnTable[0].length; i < len; i++) {
                let td = document.createElement('td');

                td.classList.add('tbs-grid-cell');
                td.style.display = 'none';

                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');
                td.appendChild(div);

                let input = document.createElement('input');
                input.type = 'checkbox';
                input.classList.add('tbs-grid-html-checkbox');
                input.style.display = 'none';
                div.appendChild(input);

                let span = document.createElement('span');
                span.classList.add('tbs-grid-html-string');
                div.appendChild(span);

                let spanSort = document.createElement('span');
                spanSort.classList.add('tbs-grid-html-sort');
                div.appendChild(spanSort);

                let reSizeDiv = document.createElement('div');
                reSizeDiv.classList.add('tbs-grid-html-resize');

                let sortDiv = document.createElement('div');
                sortDiv.classList.add('tbs-grid-html-sort');

                td.appendChild(div);
                td.appendChild(reSizeDiv);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else if (panelName.substring(6) == '1') {
            tr.style = 'display:;height:' + grid.rowHeight + 'px';

            for (let i = 0; i < grid.info_table.count(); i++) {
                let column = grid.info_table.data[i];
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbsGridNames.column.width] + 'px';
                td.dataset.name = column[tbsGridNames.column.name];
                td.dataset.columnIndex = i;

                let div = TbsGridDom.createElementCellDiv();
                td.appendChild(div);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else {
            if (panelName == 'panel40' || panelName == 'panel50' || panelName == 'panel70') {
                tr.style = 'display:;height:' + grid.rowHeight + 'px';
            }
            else if (panelName == 'panel22' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
                tr.style = 'display:;height:' + grid.rowHeight + 'px';
            }
            else {
                tr.style = 'display:none;height:' + grid.rowHeight + 'px';
            }

            for (let i = 0; i < grid.column_table.count(); i++) {
                let column = grid.column_table.data[i];
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbsGridNames.column.width] + 'px';

                if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
                    td.style.display = 'none';
                }

                td.dataset.name = column[tbsGridNames.column.name];
                td.dataset.columnIndex = i;

                let div = TbsGridDom.createElementCellDiv();
                let spanText = TbsGridDom.createElementCellText();
                div.appendChild(spanText);
                td.appendChild(div);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

    updateTableRows(panelName, rowCount) {
        let selector = '#' + this.grid.gridId;

        /**
         * table row add
         */

        const tbody = document.querySelector(selector + ' .tbs-grid-' + panelName + ' table tbody');
        for (let rowIndex= 0; rowIndex < rowCount; rowIndex++) this.createTableRow(panelName, tbody);
    }
}