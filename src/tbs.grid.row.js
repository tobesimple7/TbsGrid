import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRow {
    constructor(grid) {
        this.grid = grid;
    }

    setTableHead(grid, panelName) {
        let selector = '#' + grid.gridId;

        if (grid.fixedColumnIndex != -1) {
            let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let tableCell = tableRow.childNodes[x];

                grid.classDom.setCellStyle(tableCell, 'width', column[tbsGridNames.column.width] + 'px');
                grid.classDom.setCellStyle(tableCell, 'display', '');
                if (column[tbsGridNames.column.visible] == false) {
                    grid.classDom.setCellStyle(tableCell, 'width', '0px');
                    grid.classDom.setCellStyle(tableCell, 'display', 'none');
                }
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    grid.classDom.setCellStyle(tableCell, 'width', '0px');
                    grid.classDom.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    grid.classDom.setCellStyle(tableCell, 'width', '0px');
                    grid.classDom.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
        else {
            let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '0') {
                    grid.classDom.setCellStyle(tableCell, 'display', column[tbsGridNames.column.visible] ? '' : 'none');
                    grid.classDom.setCellStyle(tableCell, 'width', column[tbsGridNames.column.width] + 'px');
                }
            }
        }
    }

    setTableRow(grid, tableRow, rowIndex, panelName = 'panel30') {
        let selector = '#' + grid.gridId;

        tableRow.dataset.rowIndex = rowIndex;

        if (tableRow.style.height != grid.rowHeight + 'px') tableRow.style.height = grid.rowHeight + 'px';

        if (tableRow.style.display == 'none') tableRow.style.display = '';

        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let rowData = grid.getRow(rowIndex);
                let depth = rowData[tbsGridNames.column.depth];
                let count = grid.null(rowData[tbsGridNames.column.children]) ? 0 : rowData[tbsGridNames.column.children].length;
                if (count > 0) {
                    if      (depth == '1') grid.classDom.addUserClass(tableRow, 'tbs-row-color1');
                    else if (depth == '2') grid.classDom.addUserClass(tableRow, 'tbs-row-color2');
                    else if (depth == '3') grid.classDom.addUserClass(tableRow, 'tbs-row-color3');
                    else if (depth == '4') grid.classDom.addUserClass(tableRow, 'tbs-row-color4');
                    else if (depth == '5') grid.classDom.addUserClass(tableRow, 'tbs-row-color5');
                    else grid.classDom.addUserClass(tableRow, 'tbs-row-color5');
                }
                else {
                    if      (depth == '1') grid.classDom.removeUserClass(tableRow, 'tbs-row-color1');
                    else if (depth == '2') grid.classDom.removeUserClass(tableRow, 'tbs-row-color2');
                    else if (depth == '3') grid.classDom.removeUserClass(tableRow, 'tbs-row-color3');
                    else if (depth == '4') grid.classDom.removeUserClass(tableRow, 'tbs-row-color4');
                    else if (depth == '5') grid.classDom.removeUserClass(tableRow, 'tbs-row-color5');
                    else {
                        grid.classDom.addUserClass(tableRow, 'tbs-row-color5');
                    }
                }
            }
            if (grid.user_rowBounding) {
                if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                    let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
                    grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
                }
            }
        }
        else {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
                grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
            }
        }
        /* row alternative background color */
        grid.classRow.showAlternativeRowColor(grid, panelName, tableRow, rowIndex);
    }

    showAlternativeRowColor(grid, panelName, tableRow, rowIndex) {
        return;
        tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
        if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
        else tableRow.classList.add('tbs-grid-tr-bg');
    }

    hideTableRows(grid, panelName, tableRows, fromRowIndex, toRowIndex) {
        for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            if (tableRow) {
                if (tableRow.style.display != 'none') tableRow.style.display = 'none';
            }
        }
    }
}


