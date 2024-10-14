import {AddRowDirection, columnAlias} from "../tbs.grid.types";
import {TbsGrid} from "../tbs.grid";

export class TbsGridBaseRows {

    constructor() {
    }

    /**
     * view table rows
     */

    getRowCount(this: TbsGrid, table?: any) { return this.isNull(table, this.view_table).count(); }

    getRow(this: TbsGrid,rowIndex: number, table?: any) { return this.isNull(table, this.view_table).selectRowByRowIndex(rowIndex); }

    getRows(this: TbsGrid,startRowIndex?: number, endRowIndex?: number, table?: any) { return this.isNull(table, this.view_table).selectRowRange(startRowIndex, endRowIndex); }

    getRowByRowId(this: TbsGrid,rowId: number, table?: any) { return this.isNull(table, this.view_table).selectRowByRowId(rowId); }

    getRowIndexByRowId(this: TbsGrid,rowId: number, table?: any) { return this.isNull(table, this.view_table).selectRowIndexByRowId(rowId); }

    getCheckedRows(this: TbsGrid) { return this.view_table.selectRows(columnAlias.isChecked, true); }

    getSelectedRows(this: TbsGrid) {
        const result = [];
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.isSelectedCell31(i, 0) == 1) result.push(this.view_table.selectRowByRowIndex(i));
        }
        return result;
    }

    getSelectedRowsIndexArray(this: TbsGrid) {
        const result: number[] = [];
        for (let rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
        }
        return result;
    }

    getChangedRowsData(this: TbsGrid) {
        let result = [];
        let rows = this.getDeletedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getUpdatedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getInsertedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        return result;
    }

    getDeletedRowsData(this: TbsGrid) {
        let rows = this.data_delete;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            let item = JSON.parse(JSON.stringify(row));
            item[columnAlias.rowId] = row[columnAlias.rowId];
            item[columnAlias.rowMode]  = row[columnAlias.rowMode];
            result.push(item);
        }
        return result;
    }

    getUpdatedRowsData(this: TbsGrid) {
        let rows = this.source_table.data;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            if (row.mode == 'U') {
                let item = JSON.parse(JSON.stringify(row));
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode] = row[columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    }

    getInsertedRowsData(this: TbsGrid) {
        let rows = this.source_table.data;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            if (row[columnAlias.rowMode] == 'I') {
                let item = JSON.parse(JSON.stringify(row));
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode ] = row[columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    }

    createRow(this: TbsGrid,row: any): any {
        if (this.null(row)) row = {};

        const columns = this.column_table.data;
        const item: any = {};

        for (let i = 0, len = columns.length; i < len; i++) {
            const column: any = columns[i];
            let columnName: string = column[columnAlias.name];
            item[columnName] = this.null(row[columnName]) ? null : row[columnName];
        }
        return item;
    }

    addRow(this: TbsGrid,row?: any, direction?: AddRowDirection) {
        //type : top, bottom, up, down
        const grid = this;

        const dataRow = this.createRow(row);

        const rowIndexList = this.getSelectedRowsIndexArray();

        if (rowIndexList.length == 0) direction = AddRowDirection.bottom;

        if (direction == AddRowDirection.top) {
            this.source_table.insertBefore(dataRow, 0)
            this.view_table.insertBefore(dataRow, 0)

            let topRowIndex = 0;

            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            this.classRange.selectRange(topRowIndex, topRowIndex);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == AddRowDirection.bottom) {
            this.source_table.insert(dataRow)
            this.view_table.insert(dataRow)

            let dataLength = this.view_table.count();
            let topRowIndex = this.getFirstRowIndex();

            topRowIndex = dataLength - this.pageRowCount;
            if (topRowIndex < 0) topRowIndex = 0;
            if (this.pageRowCount > this.pageIntRowCount) {
                topRowIndex = topRowIndex + 1;
            }
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == AddRowDirection.before) {
            let minRowIndex = rowIndexList[0];
            this.source_table.insertBefore(dataRow, minRowIndex);
            this.view_table.insertBefore(dataRow, minRowIndex);

            let lastRowIndex = this.view_table.count() - 1;
            let topRowIndex = this.getFirstRowIndex();

            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (direction == AddRowDirection.after) {
            let minRowIndex = rowIndexList[0];
            let addRowIndex = minRowIndex + 1;
            this.source_table.insertAfter(dataRow, minRowIndex);
            this.view_table.insertAfter(dataRow, minRowIndex);

            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);

            if (this.pageRowCount > this.pageIntRowCount) {
                if (addRowIndex == this.getLastRowIndex()) {
                    this.tbs_moveCell('down');

                    this.classRange.removeRange(0, -1);
                    let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
                    this.classPanel30.setDataPanel(_topRowIndex);

                    this.verticalScroll.setScroll(grid.code_vertical);
                    this.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
                }
            }
        }
    }

    removeRows(this: TbsGrid,rows: any[]) {
        const grid = this;

        if (this.null(rows) || rows.length == 0) return;

        let topRowIndex = this.getFirstRowIndex();

        for (let i = 0, len = rows.length; i < len; i++) {
            const row = rows[i];
            let rowId = row[columnAlias.rowId];
            this.source_table.removeByRowId(rowId);
            this.view_table.removeByRowId(rowId);
        }

        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(topRowIndex, topRowIndex, 0, 0);
        grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        grid.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * source table rows
     */

    getSourceRowCount(this: TbsGrid): number { return this.getRowCount(this.source_table); }

    getSourceRow(this: TbsGrid, rowIndex: number): any { return this.getRow(rowIndex, this.source_table); }

    getSourceRows(this: TbsGrid, startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.source_table); }

    getSourceRowByRowId(this: TbsGrid, rowId: number): any { return this.getRowByRowId(rowId, this.source_table); }

    getSourceRowIndexByRowId(this: TbsGrid, rowId: number): number { return this.getRowIndexByRowId(rowId, this.source_table); }

    /**
     * top table rows
     */

    getTopRowCount(this: TbsGrid): number { return this.getRowCount(this.top_table); }

    getTopRow(this: TbsGrid,rowIndex: number): any { return this.getRow(rowIndex, this.top_table); }

    getTopRows(this: TbsGrid,startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.top_table); }

    getTopRowByRowId(this: TbsGrid,rowId: number): any { return this.getRowByRowId(rowId, this.top_table); }

    getTopRowIndexByRowId(this: TbsGrid,rowId: number): number { return this.getRowIndexByRowId(rowId, this.top_table); }

    /**
     * footer table rows
     */

    getFooterRowCount(this: TbsGrid): number { return this.getRowCount(this.footer_table); }

    getFooterRow(this: TbsGrid,rowIndex: number): any { return this.getRow(rowIndex, this.footer_table); }

    getFooterRows(this: TbsGrid,startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.footer_table); }

    getFooterRowByRowId(this: TbsGrid,rowId: number): any { return this.getRowByRowId(rowId, this.footer_table); }

    getFooterRowIndexByRowId(this: TbsGrid,rowId: number): number { return this.getRowIndexByRowId(rowId, this.footer_table); }

    /**
     * tree table rows
     */

    getTreeRowCount(this: TbsGrid): number { return this.getRowCount(this.tree_table); }

    getTreeRow(this: TbsGrid,rowIndex: number): any { return this.getRow(rowIndex, this.tree_table); }

    getTreeRows(this: TbsGrid, startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.tree_table); }

    getTreeRowByRowId(this: TbsGrid,rowId: number): any { return this.getRowByRowId(rowId, this.tree_table); }

    getTreeRowIndexByRowId(this: TbsGrid,rowId: number): number { return this.getRowIndexByRowId(rowId, this.tree_table); }

    /**
     * Row functions
     */

    getPageRowCount(this: TbsGrid, panelName?: string) { return this.pageRowCount; }

    getTopRowIndex(this: TbsGrid, panelName: string, topRowIndex: number) {
        // function : Validate Top rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : topRowIndex
        let selector = '#' + this.gridId;
        const grid = this;

        if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
            let rowCount = this.getRowCount();
            if (this.pageRowCount > this.pageIntRowCount) {
                if (topRowIndex > (rowCount - this.pageRowCount + 1)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            else {
                if (topRowIndex > (rowCount - this.pageRowCount)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            if (topRowIndex < 0) topRowIndex = 0;
        }
        return topRowIndex;
    }

    getBottomRowIndex(this: TbsGrid, panelName: string, topRowIndex: number) {
        // function : Validate Bottom rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : bottomRowIndex
        let selector = '#' + this.gridId;
        const grid = this;
        let bottomRowIndex = 0;

        bottomRowIndex = topRowIndex + this.pageRowCount - 1;
        if (bottomRowIndex > this.getRowCount() - 1) bottomRowIndex = this.getRowCount() - 1;

        return bottomRowIndex;
    }


}