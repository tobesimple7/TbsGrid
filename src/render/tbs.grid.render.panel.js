import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';
import { TbsGridRenderCheckbox } from "./tbs.grid.render.checkbox.js";
import { TbsGridRenderString } from "./tbs.grid.render.string.js";
import { TbsGridRenderGroup } from "./tbs.grid.render.group.js";
import { TbsGridRenderTree } from "./tbs.grid.render.tree.js";
import { TbsGridDom } from "../tbs.grid.dom.js";

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRenderPanel {

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

       if (['panel40', 'panel42', 'panel50', 'panel52'].indexOf(this.panelName) != -1) {
           let dataTable = null;
           if (['panel40', 'panel42'].indexOf(this.panelName) != -1) dataTable = grid.top_column_table;
           else if (['panel50', 'panel52'].indexOf(this.panelName) != -1) dataTable = grid.footer_column_table;

           const summaryColumn = dataTable.selectRow(tbsGridNames.column.name, this.columnName);
           if (grid.notNull(summaryColumn)) {
               render.align      = grid.notNull(summaryColumn[tbsGridNames.column.align]) ?
                   summaryColumn[tbsGridNames.column.align] : column[tbsGridNames.column.align];

               render.className  = grid.notNull(summaryColumn[tbsGridNames.column.className]) ?
                   summaryColumn[tbsGridNames.column.className] : column[tbsGridNames.column.align];
           }
           else {
               render.align      = column[tbsGridNames.column.align];
               render.className  = column[tbsGridNames.column.className];
           }
           render.cellValue  = grid.getValue(render.rowIndex, render.columnName, grid.top_table);
           render.cellText   = grid.getText(render.rowIndex, render.columnName, grid.top_table);
       }
       else {
            render.align      = column[tbsGridNames.column.align];
            render.className  = column[tbsGridNames.column.className];
            render.cellValue  = grid.getValue(render.rowIndex, render.columnName);
            render.cellText   = grid.getText(render.rowIndex, render.columnName);
       }
        render.updateData();
    }

    updateData() {
        const grid = this.grid;
        let render = this;

        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            if (render.panelName == 'panel30' || render.panelName == 'panel32') {
                if (render.columnName == 'group_column') {
                    let row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                    let rowDepth = row[tbsGridNames.column.depth];
                    if (rowDepth <= grid.group_column_table.count()) {
                        render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][tbsGridNames.column.name]) + '(' + row[tbsGridNames.column.children].length + ')';
                    }
                    else {
                        render.cellText = grid.getText(render.rowIndex, render.columnName);
                    }
                }
            }
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
            if (render.panelName == 'panel30' || render.panelName == 'panel32') {
                if (render.columnIndex == 0) {
                    let row = grid.view_table.selectRowByRowIndex(render.rowIndex);
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
        }
        if (grid.fixedColumnIndex != -1) {
            if (render.panelName.substring(6) == '2') {
                if (render.columnIndex > grid.fixedColumnIndex) render.visible = false;
            }
            else if (render.panelName.substring(6) == '0') {
                if (render.columnIndex <= grid.fixedColumnIndex) render.visible = false;
            }
        }
        render.createHtml();
    }

    createHtml() {
        const grid = this.grid;
        const render = this;

        if (render.panelName == 'panel30' || render.panelName == 'panel32') {
            if (this.columnType == tbsGridTypes.CellType.group) {
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
            else {
                const render = new TbsGridRenderString();
                render.addElement(this);
            }
        }
        render.setBounding();
    }

    setBounding() {
        const grid = this.grid;

        if (this.panelName == 'panel72' || this.panelName == 'panel70') this.cellText = null;

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

        if (this.columnType == tbsGridTypes.CellType.group) {
            const render = new TbsGridRenderGroup();
            render.setBounding(this);
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree && this.columnIndex == 0) {
            const render = new TbsGridRenderTree();
            render.setBounding(this);
        }
        else if (this.columnType == tbsGridTypes.CellType.checkbox) {
            const render = new TbsGridRenderCheckbox();
            render.setBounding(this);
        }
        else {
            const render = new TbsGridRenderString();
            render.setBounding(this);
        }

    }
}


