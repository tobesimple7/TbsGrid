import {CellType, ColumnAlias} from "../tbs.grid.types";
import {TbsGrid} from "../tbs.grid";

export class TbsGridBaseIs {

    constructor() {
    }

    /**
     * Is Functions
     *
     */

    isEditableColumn(this:TbsGrid, columnName: string): boolean {
        let result: any = this.column_table.selectRow(ColumnAlias.name, columnName);
        return result.editable ? result.editable : false;
    }

    isSortableColumn(this:TbsGrid, columnName?: string): boolean {
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[ColumnAlias.sortable] == true)  result = true;
        // else if (column[ColumnAlias.sortable] == false) result = false;
        // else {
        result = grid.options[ColumnAlias.sortable];
        //}
        return result;
    }

    isResizableColumn(this:TbsGrid, columnName: string): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[ColumnAlias.resizable] == true)  result = true;
        // else if (column[ColumnAlias.resizable] == false) result = false;
        // else {
        result = grid.options[ColumnAlias.resizable];
        // }
        return result;
    }

    isMovableColumn(this:TbsGrid, columnName?: string): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[ColumnAlias.movable] == true)  result = true;
        // else if (column[ColumnAlias.movable] == false) result = false;
        // else {
        result = grid.options[ColumnAlias.movable];
        // }
        return result;
    }

    isAutoResizableColumn(this:TbsGrid, columnName: boolean) {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[ColumnAlias.autoResizable] == true)  result = true;
        // else if (column[ColumnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[ColumnAlias.autoResizable];
        //}
        return result;
    }

    isAutoWidthColumn(this:TbsGrid, columnName): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[ColumnAlias.autoResizable] == true)  result = true;
        // else if (column[ColumnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[ColumnAlias.autoWidth];
        //}
        return result;
    }

    isClassName(this:TbsGrid, element, className): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = element.classList.contains(className);
        return result;
    }

    isNotValidColumnType(this:TbsGrid, columnType: string): boolean {
        let arr = ['string', 'number', 'combo', 'date'];
        return arr.indexOf(columnType) == -1 ? true : false;
    }

    isInPanel(this:TbsGrid, e, panelName, startX, startY): boolean {  //tbs-grid-panel30
        /**
         * @function  isInPanel
         *
         * @Description is existed in panel
         * @param e
         * @param panelName
         * @deprecated startX
         * @deprecated startY
         * @returns {boolean}
         */
        let selector = '#' + this.gridId;
        const grid = this;

        //let lastX = window.pageXOffset + e.clientX;
        //let lastY = window.pageYOffset + e.clientY;

        let lastX = this.lastX;
        let lastY = this.lastY;

        let moveX = lastX - startX;
        let moveY = lastY - startY;

        let panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        let absRect = grid.getOffset(panel);

        let rect= panel.getBoundingClientRect();
        let groupTop    = absRect.top;
        let groupBottom = absRect.top + rect.height;
        let groupLeft   = absRect.left;
        let groupRight  = absRect.left + rect.width;
        //outside area
        if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;
        else return true;
    }

    isSelectedCell(this:TbsGrid, panelName: string, rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = [];
        if      (panelName == 'panel31') rows = this.data_select_panel31;
        else if (panelName == 'panel32') rows = this.data_select_panel30;
        else if (panelName == 'panel30') rows = this.data_select_panel30;

        else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;
        else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;
        else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;

        else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;
        else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;
        else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;

        else rows = this.data_select_panel30;

        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedHeaderCell(this:TbsGrid, panelName: string, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel30;

        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (row[1][cellIndex] == 1) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedCell31(this:TbsGrid, rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel31;
        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedCell30(this:TbsGrid, rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel30;
        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isColumnName(this:TbsGrid, columnName: string): boolean {
        const grid = this;

        let result = false;
        for (let i = 0, len = this.column_table.count(); i < len; i++) {
            let column = this.column_table.data[i];
            if (columnName == column[ColumnAlias.name]) {
                result = true;
                break;
            }
        }
        return result;
    }

    isColumnTypeNumber(this:TbsGrid, columnName: string): boolean {
        const grid = this;

        let result = false;
        let column = grid.getColumn(columnName)
        if (column[ColumnAlias.type] == CellType.number) result = true;
        return result;
    }

    isFilterColumnName(this:TbsGrid, columnName: string): boolean {
        const grid = this;
        return grid.filter_column_table.isRow(ColumnAlias.name, columnName);
    }

    isLastTopRowIndex(this:TbsGrid, rowIndex: number): boolean {
        const grid = this;

        let result = false;
        let rowCount = grid.getRowCount() - 1;
        if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
            return true;
        }
        return result;
    }
}