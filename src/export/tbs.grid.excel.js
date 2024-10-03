import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridExcel {
    constructor(grid) {
        this.grid = grid;
        this.options = {};
    }

    excelExport(options) {
        let selector = '#' + this.gridId;
        const grid = this;

        let headerRowCount = this.headerRowCount;
        let headerColumns = this.headerColumnTable;
        let columns = this.column_table.data;
        let rows = this.getRows();
        let table, thead, tbody, tr, th, td, input;

        table = document.createElement('table');
        table.style = 'border:1px solid #ccc;';

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