/**
 * tbs.grid.excel.js
 *
 *
 */
TbsGrid.prototype.excelExport = function(options) {
    let selector = '#' + this.gridId;
    let grid = this;

    let headerRowCount = this.headerRowCount;
    let headerColumns = this.headerColumnTable;
    let columns = this.columns;
    let rows = this.tbs_getRows();
    let table, thead, tbody, tr, th, td, input;

    table = document.createElement('table');
    table.style = 'border:1px solid #ccc;';

    thead = document.createElement('thead');
    tr = document.createElement('tr');
    let sumWidth = 0;
    columns.map(column => {
        th = document.createElement('th');
        th.style.width = (column[grid.column_visible] == true) ? parseInt(column.width) + 'px' : '0px';
        th.style.display = (column[grid.column_visible]== true) ? '' : 'none';
        sumWidth += (column[grid.column_visible] == true) ? parseInt(column.width) : 0;
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
            if (headerColumn[grid.column_name]) {
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
                span.classList.add('tbs-grid-cell-span');
                span.textContent = headerColumn[grid.column_text];
                div.appendChild(span);

                td.appendChild(div);
                tr.appendChild(td);
            }
            else if (headerColumn[grid.column_text] != undefined) {
                let td = document.createElement('td');
                td.colSpan = headerColumn[grid.column_colSpan];
                td.style = 'border:1px solid #ccc;background: #fcf1f4;';
                td.style.textAlign = 'center';

                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');

                let span = document.createElement('span');
                span.classList.add('tbs-grid-cell-span');
                span.textContent = headerColumn[grid.column_text];
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
                span.classList.add('tbs-grid-cell-span');
                span.textContent = headerColumn[grid.column_text];
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
                let width = (column[grid.column_width] != '') ? column[grid.column_width] : '100';
                td.style.width = width + 'px';
                sumWidth += Number(width);

                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');
                td.appendChild(div);

                let span = document.createElement('span');
                span.classList.add('tbs-grid-cell-span');
                span.textContent = row[column[grid.column_name]];
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