import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRender {

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
        let grid = this.grid;
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

        if (render.panelName == 'panel40' || render.panelName == 'panel42') {
            let topColumn   = grid.getColumn(render.columnName, grid.top_column_table);
            if (grid.notNull(topColumn)) {
                render.align      = grid.notNull(topColumn[tbsGridNames.column.align])     ? topColumn[tbsGridNames.column.align]     : column[tbsGridNames.column.align];
                render.className  = grid.notNull(topColumn[tbsGridNames.column.className]) ? topColumn[tbsGridNames.column.className] : grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
            }
            else {
                render.align      = column[tbsGridNames.column.align];
                render.className  = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
            }
            render.cellValue  = grid.getValue(render.rowIndex, render.columnName, grid.top_table);
            render.cellText   = grid.getText(render.rowIndex, render.columnName, grid.top_table);
        }
        else if (this.panelName == 'panel50' || this.panelName == 'panel52') {
            let footerColumn   = grid.getColumn(this.columnName, grid.footer_column_table);
            if (grid.notNull(footerColumn)) {
                render.align      = grid.notNull(footerColumn[tbsGridNames.column.align])     ? footerColumn[tbsGridNames.column.align]     : column[tbsGridNames.column.align];
                render.className  = grid.notNull(footerColumn[tbsGridNames.column.className]) ? footerColumn[tbsGridNames.column.className] : grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
            }
            else {
                render.align      = column[tbsGridNames.column.align];
                render.className  = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
            }
            render.cellValue  = grid.getValue(render.rowIndex, render.columnName, grid.footer_table);
            render.cellText   = grid.getText(render.rowIndex, render.columnName, grid.footer_table);
        }
        else {
            render.align      = column[tbsGridNames.column.align];
            render.className  = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
            render.cellValue  = grid.getValue(render.rowIndex, render.columnName);
            render.cellText   = grid.getText(render.rowIndex, render.columnName);
        }

        render.updateData();
    }

    updateData() {
        let grid = this.grid;
        let render = this;

        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            if (render.panelName == 'panel30' || render.panelName == 'panel32') {
                if (render.columnName == 'group_column') {
                    let row = grid.getRow(render.rowIndex);
                    let rowDepth = row[tbsGridNames.column.depth];
                    if (rowDepth <= grid.group_column_table.count()) {
                        render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][tbsGridNames.column.name]) + '(' + row[tbsGridNames.column.children].length + ')';
                    }
                }
            }
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
            if (render.panelName == 'panel30' || render.panelName == 'panel32') {
                if (render.columnIndex == 0) {
                    let row = grid.getRow(render.rowIndex);
                    let rowDepth = row[tbsGridNames.column.depth];
                    if (row[tbsGridNames.column.children] && row[tbsGridNames.column.children].length > 0) {
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
        let grid = this.grid;
        let render = this;
        if (render.panelName == 'panel30' || render.panelName == 'panel32') {
            if (grid.grid_mode == tbsGridTypes.GridMode.group) {
                if (render.columnName == 'group_column') {
                    let row = grid.getRow(render.rowIndex);
                    let rowDepth = row[tbsGridNames.column.depth];

                    let icon = grid.classDom.createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                    grid.classDom.prependIcon(render.tableCell.childNodes[0], icon);
                    grid.classGroup.setGroupIcon(render.tableCell, render.rowIndex);
                    grid.classDom.setCellStyle(render.tableCell.childNodes[0]  , 'paddingLeft', (rowDepth * 15) + 'px');
                }
                else {
                    let icons = render.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
                    if (icons.length > 0) icons[0].remove();
                }
            }
            else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
                if (render.columnIndex == 0) {
                    let row = grid.getRow(render.rowIndex);
                    let rowDepth = row[tbsGridNames.column.depth];

                    let icon = grid.classDom.createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
                    grid.classDom.prependIcon(render.tableCell.childNodes[0], icon);
                    grid.classTree.setTreeIcon(render.tableCell, render.rowIndex);
                    grid.classDom.setCellStyle(render.tableCell.childNodes[0]  , 'paddingLeft', (rowDepth * 15) + 'px');
                }
                else {
                    let icons = render.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
                    if (icons.length > 0) icons[0].remove();
                }
            }
        }
        render.setBounding();
    }

    setBounding() {
        let grid = this.grid;
        let render = this;

        grid.classDom.setCellStyle(render.tableCell, 'display'  , render.visible == true ? '' : 'none');

        grid.classDom.addUserClass(render.tableCell, render.className); // user event
        grid.classDom.setCellStyle(render.tableCell, 'textAlign', render.align); // user event
        grid.classDom.setCellStyle(render.tableCell, 'width'    , render.width + 'px');

        if (render.panelName == 'panel72' || render.panelName == 'panel70') {}
        else {
            let spanText = render.tableCell.querySelector('.tbs-grid-cell-div-text');
            grid.classDom.setCell(spanText, 'textContent', render.cellText); // user event
        }

        if (grid.user_cellBounding) {
            if (render.panelName.substring(6) == '0' || render.panelName.substring(6) == '2') {
                let param = { element:render.tableCell, rowIndex: render.rowIndex, cellIndex: render.columnIndex };
                grid.tbs_executeEvent(grid.cellBounding, 'cellBounding', param);
            }
        }
    }
}


