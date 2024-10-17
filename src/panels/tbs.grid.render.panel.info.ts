
import { TbsGridRenderString } from "../renderer/tbs.grid.render.string";
import { TbsGridRenderCheckbox } from "../renderer/tbs.grid.render.checkbox";
import {TbsGrid} from "../tbs.grid";
import {CellType, ColumnAlias, GridMode} from "../tbs.grid.types";

export class TbsGridRenderPanelInfo {

    /**
     * num, mode, checkbox
     */
    grid: TbsGrid;
    selector: string;

    column: any;
    columnIndex: number;
    columnName: string;
    columnType: string;

    valueName: string;
    textName: string;

    rowIndex: number;

    cellValue: any;
    cellText: any;

    align: string;
    className: string;

    width: number;
    visible: boolean;
    editable: boolean;
    tableCell: any
    panelName: string;

    constructor(grid: TbsGrid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.column = null;
        this.columnIndex = null;
        this.columnName = null;
        this.columnType = null;

        this.valueName = null;
        this.textName = null;

        this.rowIndex = null;

        this.cellValue = null;
        this.cellText = null; //user

        this.align = null; //user
        this.className = null; //user

        this.width = null;
        this.visible = null;
        this.editable = false;
        this.tableCell = null;
        this.panelName = null;
    }

    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        let render = this;

        render.panelName  = panelName;
        render.tableCell  = tableCell;
        render.column     = grid.info_column_table.selectRowByRowIndex(columnIndex);
        render.rowIndex   = rowIndex;
        render.columnIndex= columnIndex;

        render.columnName = grid.getProperty(column, ColumnAlias.name);
        render.columnType = grid.getProperty(column, ColumnAlias.type);

        render.visible    = grid.getProperty(column, ColumnAlias.visible);
        render.width      = grid.getProperty(column, ColumnAlias.width);
        render.editable   = grid.getProperty(column, ColumnAlias.editable);
        render.align      = grid.getProperty(column, ColumnAlias.align);
        render.className  = grid.getProperty(column, ColumnAlias.className);

        if (panelName == 'panel41' || panelName == 'panle51' || panelName == 'panle71') this.columnType = CellType.string;

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
                    if (grid.grid_mode == GridMode.page) {
                        render.cellValue  = (grid.classPage.pageIndex - 1) * grid.options.pageRowCount + render.rowIndex + 1;
                        render.cellText   = render.cellValue;
                    }
                    else if (grid.grid_mode == GridMode.page) {
                        render.cellValue  = (grid.classPagination.pageIndex - 1) * grid.options.pageRowCount + render.rowIndex + 1;
                        render.cellText   = render.cellValue;
                    }
                    else {
                        render.cellValue  = render.rowIndex + 1;
                        render.cellText   = render.rowIndex + 1;
                    }
                }
                else if (render.columnName == 'mode') {
                    let mode = dataRow[ColumnAlias.rowMode];
                    mode = (mode != '' && mode != 'S') ? mode : '';

                    render.cellValue = mode;
                    render.cellText  = mode;
                }
                else if (render.columnName == 'checkbox') {
                    let check = grid.isNull(dataRow[ColumnAlias.isChecked], false);
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
        if (this.columnType == CellType.checkbox) {
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
        const grid = this.grid;
        if (grid.infoRenderer &&  grid.infoRenderer[this.columnName]
            && grid.infoRenderer[this.columnName].callback
            && ['panel31'].indexOf(this.panelName) != -1) {

            const dataRow = grid.view_table.selectRowByRowIndex(this.rowIndex);
            const eventRow: any = {}
            eventRow.rowIndex    = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName  = this.columnName;
            eventRow.value       = grid.isNull(dataRow[ColumnAlias.isChecked], false);
            eventRow.text        = grid.isNull(dataRow[ColumnAlias.isChecked], false);
            eventRow.data        = dataRow;
            const result= grid.infoRenderer[this.columnName].callback(grid, eventRow);

            if (grid.notNull(result) && Object.keys(result).length > 0 ) {
                // className, align, editable, cellValue
                if (grid.notNull(result.className)) this.className = result.className;
                if (grid.notNull(result.editable )) this.editable = result.editable;
                if (grid.notNull(result.value    )) this.cellValue = result.value;
                if (grid.notNull(result.align    )) this.align = result.align;
            }
        }
        const param = {
            className: this.className,
            visible: this.visible,
            align: this.align,
            width: this.width,
        }

        if (this.columnType == CellType.checkbox) {
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





