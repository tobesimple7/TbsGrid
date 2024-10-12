
import { TbsGridDom } from "./tbs.grid.dom";
import {TbsGrid} from "./tbs.grid";
import {columnAlias} from "./tbs.grid.types";

export class TbsGridRow {
    grid: TbsGrid;

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

                TbsGridDom.setCellStyle(tableCell, 'width', column[columnAlias.width] + 'px');
                TbsGridDom.setCellStyle(tableCell, 'display', '');
                if (column[columnAlias.visible] == false) {
                    TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
        else {
            let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '0') {
                    TbsGridDom.setCellStyle(tableCell, 'display', column[columnAlias.visible] ? '' : 'none');
                    TbsGridDom.setCellStyle(tableCell, 'width', column[columnAlias.width] + 'px');
                }
            }
        }
    }

    setTableRow(grid, tableRow, rowIndex, panelName = 'panel30') {
        let selector = '#' + grid.gridId;

        tableRow.dataset.rowIndex = rowIndex;

        if (tableRow.style.height != grid.rowHeight + 'px') tableRow.style.height = grid.rowHeight + 'px';

        if (tableRow.style.display == 'none') tableRow.style.display = '';

        if (grid.group_column_table.count() > 0) {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let rowData = grid.getRow(rowIndex);
                let depth = rowData[columnAlias.depth];

                if (depth == grid.group_column_table.count() + 1) TbsGridDom.addUserClass(tableRow, '.tbs-row-color-white');
                else if (depth <= 5) TbsGridDom.addUserClass(tableRow, 'tbs-row-color' + depth);
                else TbsGridDom.addUserClass(tableRow, '.tbs-row-color-white');
            }
            if (grid.rowBounding) {
                if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                    let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
                    grid.tbs_executeEvent(grid.rowBounding, 'rowBounding', param);
                }
            }
        }
        else {
            TbsGridDom.removeUserClass(tableRow);
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let param = {element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex)};
                grid.tbs_executeEvent(grid.rowBounding, 'rowBounding', param);
            }
        }
        /* row alternative background color */
        grid.classRow.showAlternativeRowColor(grid, panelName, tableRow, rowIndex);
    }

    showAlternativeRowColor(grid, panelName, tableRow, rowIndex) {
        return;
        // tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
        // if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
        // else tableRow.classList.add('tbs-grid-tr-bg');
    }

    hideTableRows(grid, panelName, tableRows, fromRowIndex, toRowIndex) {
        if (grid.column_table.count() == 0) {
            fromRowIndex = 0;
        }
        for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
            const tableRow = tableRows[i];
            if (tableRow) {
                if (tableRow.style.display != 'none') tableRow.style.display = 'none';
            }
        }
    }
}


