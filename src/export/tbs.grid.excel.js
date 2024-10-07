import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { saveAs } from 'file-saver';

export class TbsGridExcel {

    constructor(grid) {
        this.grid = grid;
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
        if (grid.isNull(options.showHeader, true)) {
            tableRows = this.createPanel20();
            tableRows.map(row => tbody.appendChild(row));
        }

        /**
         * create panel40
         */
        if (grid.isNull(options.showTop, true)) {
            tableRows = this.createPanel40();
            tableRows.map(row => tbody.appendChild(row));
        }

        /**
         * create panel30
         */
        tableRows = this.createPanel30();
        tableRows.map(row => tbody.appendChild(row));


        /**
         * create panel50
         */
        if (grid.isNull(options.showFooter, true)) {
            tableRows = this.createPanel50();
            tableRows.map(row => tbody.appendChild(row));
        }

        table.appendChild(thead);
        table.appendChild(tbody);

        let extensionType = options.extensionType;
        let fileName = options.fileName;

        // if (extensionType == 'csv') {
        //     const blob = new Blob([table.outerHTML], { type: 'application/vnd.ms-excel;charset=utf-8' });
        //     saveAs(blob, fileName + '.xls');
        // }
        // else
        if (extensionType == 'xls')       {
            const wb = XLSX.utils.book_new();

            const worksheet = XLSX.utils.table_to_sheet(table);

            XLSX.utils.book_append_sheet(wb, worksheet, fileName);

            const wbout = XLSX.write(wb, { bookType: 'xls',  type: 'binary'});

            saveAs(new Blob([this.s2ab(wbout)],{type: 'application/octet-stream' }), fileName + '.xls');
        }
        else if (extensionType == 'xlsx') {
            const wb = XLSX.utils.book_new();

            const worksheet = XLSX.utils.table_to_sheet(table);

            XLSX.utils.book_append_sheet(wb, worksheet, fileName);

            const wbout = XLSX.write(wb, { bookType: 'xlsx',  type: 'binary'});

            saveAs(new Blob([this.s2ab(wbout)],{type: 'application/octet-stream' }), fileName + '.xlsx');

        }
    }

    s2ab(s) {
        let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf);  //create uint8array as viewer
        for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
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
}