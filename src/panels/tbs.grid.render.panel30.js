import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';
import { TbsGridRenderCheckbox } from "../renderer/tbs.grid.render.checkbox.js";
import { TbsGridRenderString } from "../renderer/tbs.grid.render.string.js";
import { TbsGridRenderGroup } from "../renderer/tbs.grid.render.group.js";
import { TbsGridRenderTree } from "../renderer/tbs.grid.render.tree.js";
import { TbsGridRenderButton } from "../renderer/tbs.grid.render.button.js";
import { TbsGridDom } from "../tbs.grid.dom.js";
import {TbsGridRenderLink} from "../renderer/tbs.grid.render.link.js";
import {TbsGridRenderImg} from "../renderer/tbs.grid.render.img.js";

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRenderPanel30 {

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
        this.depth = null;
    }

    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        let render = this;

        render.panelName  = panelName;
        render.tableCell  = tableCell;
        render.column     = column;
        render.rowIndex   = rowIndex;
        render.columnIndex= columnIndex;

        render.columnName = column[tbsGridNames.column.name];
        render.columnType = column[tbsGridNames.column.type];

        render.visible    = column[tbsGridNames.column.visible];
        render.width      = column[tbsGridNames.column.width];
        render.editable   = column[tbsGridNames.column.editable];

        render.align      = column[tbsGridNames.column.align];
        render.className  = column[tbsGridNames.column.className];
        render.cellValue  = grid.getValue(render.rowIndex, render.columnName);
        render.cellText   = grid.getText(render.rowIndex, render.columnName);

        if (grid.group_column_table.count() > 0) render.depth = grid.getValue(render.rowIndex, tbsGridNames.column.depth);
        render.updateData();
    }

    updateData() {
        const grid = this.grid;
        let render = this;

        if (grid.group_column_table.count() > 0) {
            if (render.columnIndex == 0) {
                const row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                let rowDepth = row[tbsGridNames.column.depth];
                if (rowDepth <= grid.group_column_table.count()) {
                    render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][tbsGridNames.column.name]) + '(' + row[tbsGridNames.column.childRowIds].length + ')';
                    this.align = 'left';
                }
                else {
                    render.cellText = grid.getText(render.rowIndex, render.columnName);
                }
            }
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
            if (render.columnIndex == 0) {
                const row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                let rowDepth = row[tbsGridNames.column.depth];
                const children = row[tbsGridNames.column.children];

                if (children.length > 0) {
                    render.cellText = grid.getText(render.rowIndex, render.columnName) + '(' + row[tbsGridNames.column.children].length + ')';
                }
                else {
                    render.cellText = grid.getText(render.rowIndex, render.columnName);
                }
            }
        }
        if (grid.fixedColumnIndex != -1) {
            if (render.panelName == 'panel32') {
                if (render.columnIndex > grid.fixedColumnIndex) render.visible = false;
            }
            else if (render.panelName == 'panel30') {
                if (render.columnIndex <= grid.fixedColumnIndex) render.visible = false;
            }
        }
        if (this.columnType == tbsGridTypes.CellType.number) {
            if (this.cellText != '') this.cellValue = this.cellText;
        }
        render.createHtml();
    }

    createHtml() {
        const grid = this.grid;

        if (grid.group_column_table.count() > 0 && this.depth <= grid.group_column_table.count()) {
            const render = new TbsGridRenderGroup();
            render.addElement(this);
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree && this.columnIndex == 0) {
            const render = new TbsGridRenderTree();
            render.addElement(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.checkbox) {
            const render = new TbsGridRenderCheckbox();
            render.addElement(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.button) {
            const render = new TbsGridRenderButton();
            render.addElement(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.link) {
            const render = new TbsGridRenderLink();
            render.addElement(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.img) {
            const render = new TbsGridRenderImg();
            render.addElement(this);
        }
        else {
            const render = new TbsGridRenderString();
            render.addElement(this);
        }
        this.setBounding();
    }

    setBounding() {
        const grid = this.grid;
        if (grid.renderer && grid.renderer[this.columnName] && grid.renderer[this.columnName].callback && ['panel30', 'panel32'].indexOf(this.panelName) != -1) {
            const dataRows = grid.view_table.selectRowByRowIndex(this.rowIndex);
            const eventRow = {}
            eventRow.rowIndex    = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName  = this.columnName;
            eventRow.value       = this.cellValue;
            eventRow.text        = this.cellText;
            eventRow.data        = dataRows;
            const result= grid.renderer[this.columnName].callback(grid, eventRow);

            if (grid.notNull(result) && Object.keys(result).length > 0 ) {
                // className, align, editable, cellValue
                if (grid.notNull(result.className)) this.className = result.className;
                if (grid.notNull(result.editable )) this.editable = result.editable;
                if (grid.notNull(result.value    )) this.cellValue = result.value;
                if (grid.notNull(result.align    )) this.align = result.align;
            }
        }

        if (grid.group_column_table.count() > 0 && this.depth <= grid.group_column_table.count()) {
            const render = new TbsGridRenderGroup();
            render.setBounding(this);
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree && this.columnIndex == 0) {
            const render = new TbsGridRenderTree();
            render.setBounding(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.checkbox) {
            if (this.cellValue == this.grid.getTrueValue(this.columnName)) this.cellValue = true;
            else this.cellValue = false;

            const render = new TbsGridRenderCheckbox();
            render.setBounding(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.button) {
            const render = new TbsGridRenderButton();
            render.setBounding(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.link) {
            const render = new TbsGridRenderLink();
            render.setBounding(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.img) {
            const render = new TbsGridRenderImg();
            render.setBounding(this);
        }
        else {
            const render = new TbsGridRenderString();
            render.setBounding(this);
        }

    }
}


