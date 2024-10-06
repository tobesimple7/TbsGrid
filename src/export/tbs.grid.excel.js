import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { saveAs } from 'file-saver';

export class TbsGridExcel {

    constructor(grid) {
        this.grid = grid;
        this.options = {}
        //this.options.type = '';
        this.options.fileName = '';
    }

    exportExcel(options) {
        const grid = this.grid;

        let headerRowCount = grid.headerRowCount;
        const headerColumns = grid.header_column_table.data;

        let columns = grid.column_table.data;
        let rows = grid.getRows();


        const table = document.createElement('table');
       // table.style.border = 'solid 1px #9b9b9b';
        table.style.borderSpacing = '0px';
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        /**
         * create thead
         */

        let tableRows = this.createTableHead();
        tableRows.map(row => thead.appendChild(row));

        /**
         * create panel20
         */

        tableRows = this.createPanel20();
        tableRows.map(row => tbody.appendChild(row));

        /**
         * create panel40
         */

        tableRows = this.createPanel40();
        tableRows.map(row => tbody.appendChild(row));

        /**
         * create panel30
         */

        tableRows = this.createPanel30();
        tableRows.map(row => tbody.appendChild(row));

        /**
         * create panel50
         */
        tableRows = this.createPanel50();
        tableRows.map(row => tbody.appendChild(row));

        table.appendChild(thead);
        table.appendChild(tbody);

        let type = 'application/vnd.ms-excel;charset=utf-8';
        let fileName = options.fileName + '.xls';
        let blob = new Blob([table.outerHTML], { type: type });
        saveAs(blob, fileName);
    }

    createTableHead() {
        const grid = this.grid;
        const result = [];

        const tr = document.createElement('tr');
        grid.column_table.data.map(column => {
            const th = document.createElement('th');
            th.style.width = (column[tbsGridNames.column.visible] == true) ? column.width + 'px' : '0px';
            tr.appendChild(th);
        });
        result.push(tr);
        return result;
    }

    createPanel20() {
        const grid = this.grid;
        const result = [];

        grid.header_column_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style.height = grid.rowHeight + 'px';
            for (let i = 0, len = row.length; i < len; i++) {
                const column = row[i];
                let kind = column[tbsGridNames.column.kind];

                if (kind == 'empty') continue;

                const td = document.createElement('td');
                td.rowSpan = column[tbsGridNames.column.rowSpan];
                td.colSpan = column[tbsGridNames.column.colSpan];

                td.style.textAlign = column[tbsGridNames.column.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#fcf1f4';

                td.textContent = column[tbsGridNames.column.text];

                tr.appendChild(td);
            }
            result.push(tr);
        })
        return result;
    }

    createPanel30() {
        const grid = this.grid;
        const result = [];

        grid.view_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {

                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[tbsGridNames.column.name];
                let visible = column[tbsGridNames.column.visible];

                if (visible == false) continue;

                let formatValue = grid.getFormat(column, row[columnName]);
                let value = formatValue.value;
                let text = formatValue.text;

                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;

                td.style.textAlign = column[tbsGridNames.column.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';

                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        })
        return result;
    }

    createPanel40() {
        const grid = this.grid;
        const result = [];

        grid.top_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {

                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[tbsGridNames.column.name];
                let visible = column[tbsGridNames.column.visible];

                if (visible == false) continue;

                let formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                let value = formatValue.value;
                let text = formatValue.text;

                if (grid.null(row[columnName])) {
                    value = '';
                    text  = '';
                }

                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;

                td.style.textAlign = column[tbsGridNames.column.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#dbffe3';

                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        })
        return result;
    }

    createPanel50() {
        const grid = this.grid;
        const result = [];

        grid.footer_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {

                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[tbsGridNames.column.name];
                let visible = column[tbsGridNames.column.visible];

                if (visible == false) continue;

                let formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                let value = formatValue.value;
                let text = formatValue.text;

                if (grid.null(row[columnName])) {
                    value = '';
                    text  = '';
                }
                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;

                td.style.textAlign = column[tbsGridNames.column.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#dbffe3';
                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        })
        return result;
    }

    createTableFooter() {

    }

    excelExport_old(options) {
        let selector = '#' + this.gridId;
        const grid = this;

        let headerRowCount = this.headerRowCount;
        const headerColumns = grid.header_column_table.data;
        const columns = this.column_table.data;
        const rows = this.getRows();

        let table, thead, tbody, tr, th, td, input;

        table = document.createElement('table');
        //table.style = 'border:1px solid #ccc;';

        thead = document.createElement('thead');
        tr = document.createElement('tr');
        let sumWidth = 0;
        columns.map(column => {
            th = document.createElement('th');
            th.style.width = (column[tbsGridNames.column.visible] == true) ? parseInt(column.width) + 'px' : '0px';
            th.style.display = (column[tbsGridNames.column.visible]== true) ? '' : 'none';
            sumWidth += (column[tbsGridNames.column.visible] == true) ? parseInt(column.width) : 0;
            tr.appendChild(th);
        });
        thead.appendChild(tr);
        table.appendChild(thead);
        tbody = document.createElement('tbody');

        for (let i = 0; i < headerColumns.length; i++) {
            tr = document.createElement('tr');
            tr.style = 'height:' + this.rowHeight + 'px';
            sumWidth = 0;
            headerColumns[i].map(headerColumn => {
                if (headerColumn[tbsGridNames.column.name]) {
                    let td = document.createElement('td');
                    if (i == 0) td.rowSpan = headerRowCount;
                    else if (i < len - 1) td.rowSpan = headerRowCount - i; // 3 - 1

                    td.style = 'border:1px solid #ccc;background: #fcf1f4;';
                    td.style.textAlign = 'center';

                    let width = (headerColumn['width'] != '') ? headerColumn['width'] : '100';
                    td.style.width = width + 'px';
                    sumWidth += Number(width);
                    //------------------------------------------------------
                    let div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');
                    td.appendChild(div);

                    let span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    span.textContent = headerColumn[tbsGridNames.column.text];
                    div.appendChild(span);

                    td.appendChild(div);
                    tr.appendChild(td);
                }
                else if (headerColumn[tbsGridNames.column.text] != undefined) {
                    let td = document.createElement('td');
                    td.colSpan = headerColumn[tbsGridNames.column.colSpan];
                    td.style = 'border:1px solid #ccc;background: #fcf1f4;';
                    td.style.textAlign = 'center';

                    let div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');

                    let span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    span.textContent = headerColumn[tbsGridNames.column.text];
                    div.appendChild(span);

                    td.appendChild(div);
                    tr.appendChild(td);
                }
                else {
                    let td = document.createElement('td');
                    td.style.display = 'none';
                    td.classList.add('tbs-grid-cell');
                    td.style.textAlign = 'center';

                    let div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');

                    let span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    span.textContent = headerColumn[tbsGridNames.column.text];
                    div.appendChild(span);

                    td.appendChild(div);
                    tr.appendChild(td);
                }
            });
            tbody.appendChild(tr);
            rows.map(row => {
                tr = document.createElement('tr');
                tr.style = 'height:' + this.rowHeight + 'px';
                for (let x = 0, len = columns.length; x < len; x++) {
                    let column = columns[x];
                    let td = document.createElement('td');
                    td.style = 'border:1px solid #ccc;';
                    let width = (column[tbsGridNames.column.width] != '') ? column[tbsGridNames.column.width] : '100';
                    td.style.width = width + 'px';
                    sumWidth += Number(width);

                    let div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');
                    td.appendChild(div);

                    let span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    span.textContent = row[column[tbsGridNames.column.name]];
                    div.appendChild(span);

                    td.appendChild(div);
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);
            });
        }
        table.appendChild(tbody);

        let type = options.type;
        let fileName = options.fileName;

        let blob = new Blob([table.outerHTML], {
            type: 'application/vnd.ms-excel;charset=utf-8'
        });
        saveAs(blob, fileName);

        // const myJsonString = '<table><tr><td>1</td><td>1</td><td>1</td></tr></table><table><tr><td>1</td><td>1</td><td>1</td></tr></table>';
        // const blob = new Blob([myJsonString], {
        // 	type: "application/vnd.ms-excel;charset=utf-8"
        // });
        // saveAs(blob, "table.xls");
        //      , {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=" + document.characterSet})
    }
}