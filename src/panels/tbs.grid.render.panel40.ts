import {TbsGrid} from "../tbs.grid";
import {columnAlias} from "../tbs.grid.types";
import {TbsGridRenderString} from "../renderer/tbs.grid.render.string";


export class TbsGridRenderPanel40 {
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

        this.columnName = column[columnAlias.name];
        this.columnType = column[columnAlias.type];

        this.visible    = column[columnAlias.visible];
        this.width      = column[columnAlias.width];

        let columnTable = null;
        let dataTable = null;

        if (['panel40', 'panel42'].indexOf(this.panelName) != -1) {
            columnTable = grid.top_column_table;
            dataTable = grid.top_table;
        }
        else if (['panel50', 'panel52'].indexOf(this.panelName) != -1) {
            columnTable = grid.footer_column_table;
            dataTable = grid.footer_table;
        }

        const summaryColumn = columnTable.selectRow(columnAlias.name, this.columnName);
        if (grid.notNull(summaryColumn)) {
            this.align = grid.notNull(summaryColumn[columnAlias.align]) ?
                summaryColumn[columnAlias.align] : column[columnAlias.align];

            this.className = grid.notNull(summaryColumn[columnAlias.className]) ?
                summaryColumn[columnAlias.className] : column[columnAlias.className];

            this.cellValue = grid.getValue(this.rowIndex, this.columnName, dataTable);
            this.cellText = grid.getText(this.rowIndex, this.columnName, dataTable);
        }
        else {
            this.align = column[columnAlias.align];
            this.className = column[columnAlias.className];
        }


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
        const render = new TbsGridRenderString();
        render.addElement(this);

        this.setBounding();
    }

    setBounding() {
        const render = new TbsGridRenderString();
        render.setBounding(this);

    }
}


