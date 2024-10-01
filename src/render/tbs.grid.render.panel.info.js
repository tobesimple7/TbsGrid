import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridRenderString } from "./tbs.grid.render.string.js";
import { TbsGridRenderCheckbox } from "./tbs.grid.render.checkbox.js";

export class TbsGridRenderPanelInfo {

    /**
     * num, mode, checkbox
     */

    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.column = null;
        this.columnIndex = null;
        this.columnName = null;
        this.columnType = null;

        this.valueName = null;
        this.textName = null;

        this.rowIndex = null;
        this.columnIndex = null;

        this.cellValue = null;
        this.cellText = null; //user

        this.align = null; //user
        this.className = null; //user

        this.width = null;
        this.visible = null;

        this.tableCell = null;
        this.panelName = null;
    }

    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        let render = this;

        render.panelName  = panelName;
        render.tableCell  = tableCell;
        render.column     = grid.info_table.selectRowByRowIndex(columnIndex);
        render.rowIndex   = rowIndex;
        render.columnIndex= columnIndex;

        render.columnName = grid.getProperty(column, tbsGridNames.column.name);
        render.columnType = grid.getProperty(column, tbsGridNames.column.type);

        render.visible    = grid.getProperty(column, tbsGridNames.column.visible);
        render.width      = grid.getProperty(column, tbsGridNames.column.width);

        render.align      = grid.getProperty(column, tbsGridNames.column.align);
        render.className  = grid.getProperty(column, tbsGridNames.column.className);

        if (panelName == 'panel41' || panelName == 'panle51' || panelName == 'panle71') columnType = tbsGridTypes.CellType.string;

        if (panelName == 'panel21') {
            if (render.columnName == 'num') {
                render.cellValue  = '';
                render.cellText   = '';
            }
            else if (render.columnName == 'mode') {
                render.cellValue  = '';
                render.cellText   = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue  = grid.classPanel20.isChecked;
                render.cellText   = grid.classPanel20.isChecked;
            }
        }
        else if (panelName == 'panel31') {
            let dataRow = grid.getRow(render.rowIndex);
            if (render.visible) {
                if (render.columnName == 'num') {
                    if (grid.grid_mode == tbsGridTypes.GridMode.page) {
                        render.cellValue  = grid.classPage.startRowIndex + render.rowIndex + 1;
                        render.cellText   = grid.classPage.startRowIndex + render.rowIndex + 1;
                    }
                    else {
                        render.cellValue  = render.rowIndex + 1;
                        render.cellText   = render.rowIndex + 1;
                    }

                    render.cellValue  = render.rowIndex + 1;
                    render.cellText   = render.rowIndex + 1;
                }
                else if (render.columnName == 'mode') {
                    let mode = dataRow[tbsGridNames.column.mode];
                    mode = (mode != '' && mode != 'S') ? mode : '';

                    render.cellValue = mode;
                    render.cellText  = mode;
                }
                else if (render.columnName == 'checkbox') {
                    let check = grid.isNull(dataRow[tbsGridNames.column.isChecked], false);
                    render.cellValue  = check;
                    render.cellText   = check;
                }
            }
        }
        else if (panelName == 'panel41') {
            if (render.columnName == 'num') {
                render.cellValue  = '∑';
                render.cellText   = '∑';
            }
            else if (render.columnName == 'mode') {
                render.cellValue  = '';
                render.cellText   = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue  = '';
                render.cellText   = '';
            }
        }
        else if (panelName == 'panel51') {
            if (render.columnName == 'num') {
                render.cellValue  = '∑';
                render.cellText   = '∑';
            }
            else if (render.columnName == 'mode') {
                render.cellValue  = '';
                render.cellText   = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue  = '';
                render.cellText   = '';
            }
        }
        else if (panelName == 'panel71') {
            if (render.columnName == 'num') {
                render.cellValue  = 'R';
                render.cellText   = 'R';
            }
            else if (render.columnName == 'mode') {
                render.cellValue  = '';
                render.cellText   = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue  = '';
                render.cellText   = '';
            }
        }
        render.createHtml();
    }

    createHtml() {
        const grid = this.grid;
        if (this.columnType == tbsGridTypes.CellType.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                const render = new TbsGridRenderCheckbox();
                render.addElement(this);
            }
        }
        else {
            const render = new TbsGridRenderString();
            render.addElement(this);
        }
        this.setBounding();
    }

    setBounding() {
        const param = {
            className: this.className,
            visible: this.visible,
            align: this.align,
            width: this.width,
        }

        if (this.columnType == tbsGridTypes.CellType.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                const render = new TbsGridRenderCheckbox();
                render.setBounding(this);
            }
        }
        else {
            const render = new TbsGridRenderString();
            render.setBounding(this);
        }
    }
}





