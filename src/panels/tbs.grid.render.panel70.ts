import {TbsGrid} from "../tbs.grid";
import {ColumnAlias} from "../tbs.grid.types";



export class TbsGridRenderPanel70 {
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

    tableCell: any;
    panelName: string;

    cellTemplate: any;
    depth: number;
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

        this.columnName = column[ColumnAlias.name];
        this.columnType = column[ColumnAlias.type];

        this.visible    = column[ColumnAlias.visible];
        this.width      = column[ColumnAlias.width];

        this.align = column[ColumnAlias.align];
        this.className = column[ColumnAlias.className];

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


