
import {TbsGridDom} from "./tbs.grid.dom";
import {TbsGrid} from "./tbs.grid";
import {ColumnAlias} from "./tbs.grid.types";

export class TbsGridCell {
    grid: TbsGrid;
    column: any;

    constructor(grid: TbsGrid, column: any) {
        this.grid = grid;
        this.column = column;
    }

    createHtml() {
        // const grid = this.grid;
        //
        // let type = this.column[ColumnAlias.type];
        // let cellTemplate = this.column[ColumnAlias.cellTemplate];
        //
        // if (grid.null(cellTemplate)) {
        //     this.createCell(type);
        // }
        // else {
        //     this.createTemplate();
        // }
    }

    createCell() {

    }

    createTemplate() {

    }

    hideTableCells(grid, panelName, tableRow, lastColumnIndex) {
        if (grid.fixedColumnIndex != -1) {
            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let tableCell = tableRow.childNodes[x];

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
    }

    showSelectedCells(grid, panelName, tableCell, rowIndex, cellIndex) {
        let value = grid.isSelectedCell(panelName, rowIndex, cellIndex);
        if (value == 1) {
            if (grid.startRowIndex == rowIndex && grid.startCellIndex == cellIndex) tableCell.classList.add('tbs-grid-cell-start');
            else tableCell.classList.add('tbs-grid-cell-select');
        }
    }
}
/*
export class TbsGridCellGroup extends TbsGridCell {}

export class TbsGridCellTree extends TbsGridCell {}

export class TbsGridCellCheckbox extends TbsGridCell {}

export class TbsGridCellImage extends TbsGridCell {}

export class TbsGridCellButton extends TbsGridCell {}

*/