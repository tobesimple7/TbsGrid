import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';
import { TbsGridRenderCheckbox } from "../render/tbs.grid.render.checkbox.js";
import { TbsGridRenderString } from "../render/tbs.grid.render.string.js";
import { TbsGridRenderGroup } from "../render/tbs.grid.render.group.js";
import { TbsGridRenderTree } from "../render/tbs.grid.render.tree.js";
import { TbsGridDom } from "../tbs.grid.dom.js";

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRenderPanel70 {

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
        this.editable = null;

        this.tableCell = null;
        this.panelName = null;

        this.cellTemplate = null;
    }

    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        const render = this;

        this.panelName  = panelName;
        this.tableCell  = tableCell;
        this.column     = column;
        this.rowIndex   = rowIndex;
        this.columnIndex= columnIndex;

        this.columnName = column[tbsGridNames.column.name];
        this.columnType = column[tbsGridNames.column.type];

        this.visible    = column[tbsGridNames.column.visible];
        this.width      = column[tbsGridNames.column.width];

        this.align = column[tbsGridNames.column.align];
        this.className = column[tbsGridNames.column.className];

        render.updateData();
    }

    updateData() {
        const grid = this.grid;

        if (grid.fixedColumnIndex != -1) {
            if (this.panelName.substring(6) == '2') {
                if (this.columnIndex > grid.fixedColumnIndex) this.visible = false;
            }
            else if (this.panelName.substring(6) == '0') {
                if (this.columnIndex <= grid.fixedColumnIndex) this.visible = false;
            }
        }
        this.createHtml();
    }

    createHtml() {
        // const render = new TbsGridRenderString();
        // render.addElement(this);
        //
        // this.setBounding();
    }

    setBounding() {
        // const render = new TbsGridRenderString();
        // render.setBounding(this);

    }
}


