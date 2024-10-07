import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridColumns {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    getUserColumns() {
        const grid = this.grid;

        const userColumns = [];

        const getChildren = function(node, rowIndex, startColumnIndex, lastColumnIndex) {
            node[tbsGridNames.column.children] = [];

            for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
                const column = grid.header_column_table.selectRowByRowIndex(rowIndex + 1, x);
                if (grid.null(column)) break;

                if (column[tbsGridNames.column.kind] == 'column') {
                    let columnName = column[tbsGridNames.column.name];
                    node[tbsGridNames.column.children].push(grid.getColumn(columnName));
                }
                else if (column[tbsGridNames.column.kind] == 'header') {
                    node[tbsGridNames.column.children].push(column);

                    let sIndex = x;
                    let eIndex = x + column[tbsGridNames.column.colSpan] - 1;
                    getChildren(column, rowIndex + 1, sIndex, eIndex);
                }
            }
        }

        //  header 정보와 컬럼 정보를 가져온다.
        for (let x = 0; x < grid.column_table.count(); x++) {
            const column = grid.header_column_table.selectRowByRowIndex(0, x);
            if (grid.notNull(column[tbsGridNames.column.num])) delete column[tbsGridNames.column.num];
            if (grid.notNull(column[tbsGridNames.column.parentNum])) delete column[tbsGridNames.column.parentNum];

            if (column[tbsGridNames.column.kind] == 'column') {
                let columnName = column[tbsGridNames.column.name];
                userColumns.push(grid.getColumn(columnName));
            }
            else if (column[tbsGridNames.column.kind] == 'header') {
                userColumns.push(column);

                let startColumnIndex = x;
                let lastColumnIndex = x + column[tbsGridNames.column.colSpan] - 1;
                getChildren(column, 0, startColumnIndex, lastColumnIndex);
            }
        }

        return userColumns;
    }

    setColumnDefaultValue(column) {
        const grid = this.grid;

        let columnType = column[tbsGridNames.column.type];
        if (grid.null(column[tbsGridNames.column.dataType])) {
            if (columnType == tbsGridTypes.CellType.number)      column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.number;
            else if (columnType == tbsGridTypes.CellType.date)   column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;
            else if (columnType == tbsGridTypes.CellType.combo)  column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;
            else column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;
        }

        if (grid.null(column[tbsGridNames.column.width]))    column[tbsGridNames.column.width]    = 100;
        if (grid.null(column[tbsGridNames.column.editable])) column[tbsGridNames.column.editable] = false;
        if (grid.null(column[tbsGridNames.column.visible ])) column[tbsGridNames.column.visible ] = true;

        if (columnType == tbsGridTypes.CellType.string) {
            if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'left';
        }
        else if (columnType == tbsGridTypes.CellType.number) {
            if (grid.null(column[tbsGridNames.column.align]))        column[tbsGridNames.column.align]        = 'right';
            if (grid.null(column[tbsGridNames.column.scale]))        column[tbsGridNames.column.scale]        = '18,0';
            if (grid.null(column[tbsGridNames.column.roundType]))    column[tbsGridNames.column.roundType]    = 'round';
            if (grid.null(column[tbsGridNames.column.fixedScale]))   column[tbsGridNames.column.fixedScale]   = true;
            if (grid.null(column[tbsGridNames.column.showZero]))     column[tbsGridNames.column.showZero]     = false;
            if (grid.null(column[tbsGridNames.column.commaUnit]))    column[tbsGridNames.column.commaUnit]    = 3; // Fixed value.
            if (grid.null(column[tbsGridNames.column.thousandChar])) column[tbsGridNames.column.thousandChar] = grid.getConfigCulture('thousandChar');
            if (grid.null(column[tbsGridNames.column.decimalChar]))  column[tbsGridNames.column.decimalChar]  = grid.getConfigCulture('decimalChar');
            //if (grid.null(column[tbsGridNames.column.currencyChar])) column[tbsGridNames.column.currencyChar] = grid.getConfigCulture('currencyChar');
        }
        else if (columnType == tbsGridTypes.CellType.date)   {
            if (grid.null(column[tbsGridNames.column.align]))  column[tbsGridNames.column.align]  = 'center';
            if (grid.null(column[tbsGridNames.column.format])) column[tbsGridNames.column.format] = grid.getConfigCalendar('dayPattern');
        }
        else if (columnType == tbsGridTypes.CellType.combo)  {
            if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'left';
        }
        return column;
    }

    createColumns(columns) {
        const grid = this.grid;

        const searchColumn = function (column) {
            if (!column[tbsGridNames.column.children]) {
                let columnType = column[tbsGridNames.column.type];

                column[tbsGridNames.column.type] = grid.null(columnType) ? tbsGridTypes.CellType.string : columnType;
                grid.classColumn.setColumnDefaultValue(column);
            }
            else column[tbsGridNames.column.children].map(n => searchColumn(n));
        }
        columns.map(column => searchColumn(column, null));
    }

    createColumnTable() {
        const grid = this.grid;

        let dataRows = [];
        const searchColumn = function (column) {
            if (!column[tbsGridNames.column.children]) dataRows.push(column);
            else column[tbsGridNames.column.children].map(n => searchColumn(n));
        }
        grid.columns.map(column => searchColumn(column, null));

        /**
         * columns order changed or add column
         */
        grid.column_table.remove();
        dataRows.map(dataRow => grid.column_table.insert(grid.copyJson(dataRow)));
    }

    addColumn(addColumn, columnIndex, orderType) {
        const grid = this.grid;

        grid.columns = this.getUserColumns();
        if (grid.column_table.count() == 0) {
            grid.columns.push(addColumn);
        }
        else if (orderType == tbsGridTypes.BeforeAfter.before) {
            grid.columns.splice(columnIndex, 0, addColumn);
        }
        else if (orderType == tbsGridTypes.BeforeAfter.after) {
            if (columnIndex + 1 >= grid.columns.length) grid.columns.push(addColumn);
            else grid.columns.splice(columnIndex + 1, 0, addColumn);
        }

        this.createColumns(grid.columns); // add columns(first) or add column

        this.createColumnTable();

        grid.classHeader.createHeaderColumns();

        grid.classHeader.createHeaderColumnTable();

        grid.updateGrid(grid.column_table.data);

        grid.apply();
    }

    removeColumn(targetColumnIndex) {
        const grid = this.grid;

        if (grid.column_table.count() == 0) return;

        const rootColumn = grid.header_column_table.selectRowByRowIndex(0, targetColumnIndex);

        if (grid.null(rootColumn)) return;

        let startRowIndex = 0;
        let lastRowIndex = grid.headerRowCount;

        let startColIndex = targetColumnIndex;
        let lastColIndex = targetColumnIndex + rootColumn[tbsGridNames.column.colSpan] - 1;

        grid.header_column_table.data.map(columns => {
            columns.splice(targetColumnIndex, rootColumn[tbsGridNames.column.colSpan]);
        });

        grid.column_table.data.splice(targetColumnIndex, rootColumn[tbsGridNames.column.colSpan]);

        grid.updateGrid(grid.column_table.data);

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);

        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    }

    getParentTableCell(column) {
        const grid = this.grid;

        let result = null;
        let rowIndex = column.rowIndex;
        let colIndex = column.colIndex;

        if (rowIndex == 0) return null;
        else {
            let rootRowIndex = rowIndex - 1;

            for (let i = colIndex; i >= 0; i--) {
                const dataRow = grid.header_column_table.data[rootRowIndex][i];
                let kind = dataRow[tbsGridNames.column.kind];
                if (kind != 'empty') {
                    result = dataRow;
                    break;
                }
            }
            return result;
        }
    }

    changeColumnOrder(moveColumn, targetColumn, orderType) {
        const grid = this.grid;

        moveColumn = grid.copyJson(moveColumn);
        targetColumn = grid.copyJson(targetColumn)

        /**
         * Same rowIndex
         */
        if (moveColumn.rowIndex != targetColumn.rowIndex) return;

        /**
         * Same rowId
         */
        const moveRootColumn   = this.getParentTableCell(moveColumn);
        const targetRootColumn = this.getParentTableCell(targetColumn);

        let moveRootRowId   = grid.null(moveRootColumn)  ? -1 : moveRootColumn[tbsGridNames.column.rowId];
        let targetRootRowId = grid.null(targetRootColumn) ? -1 : targetRootColumn[tbsGridNames.column.rowId];

        if (moveRootRowId != targetRootRowId) return;

        let moveRowIndex = moveColumn.rowIndex;
        let moveColIndex = moveColumn.colIndex;

        let targetRowIndex = targetColumn.rowIndex;
        let targetColIndex = targetColumn.colIndex;

        let rangeStartRowIndex = moveRowIndex;
        let rangeLastRowIndex = grid.headerRowCount -1;

        let rangeStartColIndex = moveColIndex;
        let rangeLastColIndex = moveColIndex + moveColumn.colSpan - 1;

        // 1. moveColumns copy
        // 2. moveColumns name : __changed__
        const temp = [];
        grid.header_column_table.data.map((row, index) => temp[index] = []);

        for (let i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            const columns = grid.header_column_table.data[i];
            temp[i]
            for (let x = rangeStartColIndex; x <= rangeLastColIndex; x++) {
                const column = columns[x];
                temp[i].push(grid.copyJson(column));
                column[tbsGridNames.column.name] = '__$$changed$$__';
            }
        }

        // 3. targetColum insert
        for (let i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            const columns = temp[i];
            if (orderType == 'before') {
                grid.header_column_table.insertRowsBefore(i, columns, targetColIndex);
            }
            else if (orderType == 'after') {
                let index = targetColIndex + targetColumn[tbsGridNames.column.colSpan] - 1;
                grid.header_column_table.insertRowsAfter(i, columns, index);
            }
        }
        grid.temp_table.remove();

        // 4. delete  '__changed__';
        for (let i = 0; i < grid.header_column_table.count(); i++) {
            const columns = grid.header_column_table.data[i];
            for (let x = columns.length - 1; x >= 0; x--) {
                const column = columns[x];
                if (column[tbsGridNames.column.name] == '__$$changed$$__') columns.splice(x, 1);
            }
        }
        
        // colIndex
        grid.header_column_table.makeColIndex();

        // 헤더를 밀어넣은 후에 컬럼을 밀어 넣자.
        const copyColumns = [];
        for (let x = 0; x < grid.column_table.count(); x++) {
            for (let i = 0; i < grid.header_column_table.count(); i++) {
                const column = grid.header_column_table.data[i][x];
                if (column[tbsGridNames.column.kind] == 'column') copyColumns.push(grid.copyJson(column));
            }
        }

        grid.temp_table.remove();
        grid.column_table.data.map(row => grid.temp_table.insert(grid.copyJson(row)));
        grid.column_table.remove();
        copyColumns.map(copyColumn => {
            for (let i = 0; i < grid.temp_table.count(); i++) {
                const column = grid.temp_table.selectRowByRowIndex(i);
                if (copyColumn.name == column.name) grid.column_table.insert(grid.copyJson(column));
            }
        });
        grid.temp_table.remove();

        /* Change Fixed Column Index */
        if (grid.fixedColumnIndex != -1) {
            if (moveColumn.colIndex <= grid.fixedColumnIndex && targetColumn.colIndex > grid.fixedColumnIndex) {
                let childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex - childCount;
                if (grid.fixedColumnIndex < 0) grid.classColumn.removeFixedColumn();
                else grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
            else if (moveColumn.colIndex > grid.fixedColumnIndex && targetColumn.colIndex <= grid.fixedColumnIndex) {
                let childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex + childCount;
                grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
        }
        grid.classPanel70.setDataPanel();
        grid.apply();
    }

    getSelectedTableCell(rowIndex, cellIndex) {
        let selector = this.selector;
        const grid = this.grid;

        let td = null;
        let startRowIndex;
        let startCellIndex;
        if (arguments.length == 0) {
            startRowIndex  = grid.startRowIndex;
            startCellIndex = grid.startCellIndex;
        }
        else {
            startRowIndex = rowIndex;
            startCellIndex = cellIndex;
        }
        if (startRowIndex == -1 || startCellIndex == -1) return;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 table tbody tr');
        let trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30 table tbody tr');
        for (let i = 0; i < trList.length; i++) {
            let tr = trList[i];
            let dataRowIndex = parseInt(tr.childNodes[0].childNodes[0].innerText) - 1;
            if (dataRowIndex == startRowIndex) {
                let td = trContentList[i].childNodes[startCellIndex];
                break;
            }
        }
        return td;
    };

    getRowIndexInTable(tableRowIndex, panelName = 'panel31') {
        let selector = this.selector;
        const grid = this.grid;

        let leftPanelName = panelName;
        leftPanelName = 'panel31';

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
        return parseInt(tableRows[tableRowIndex].childNodes[0].dataset.rowIndex);
    }

    getLeftTableCell(rowIndex, panel = 'panel31') {1
        let selector = this.selector;
        const grid = this.grid;

        let result = null;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display:"])');
        for (let i = 0, len = tableRows.length; i <len; i++) {
            let tableRow= tableRows[i];
            let index= parseInt(tableRow.childNodes[0].childNodes[0].innerText) - 1;
            if (index == rowIndex) { result = tableRow.childNodes[0]; break; }
        }
        return result;
    }

    getJsonRow(jsonArray, name, value) {
        let result;
        for (let i = 0, len = jsonArray.length; i < len; i++) {
            let json = jsonArray[i];
            if (json[name] == value) {
                result = json;
                break;
            }
        }
        return result;
    }

    setFixedColumn(fixedColumnIndex) {
        let selector = this.selector;
        const grid = this.grid;

        if (fixedColumnIndex >= grid.column_table.count()) { grid.fixedColumnIndex = -1; return; }

        grid.fixedColumnIndex = fixedColumnIndex
        grid.classHeader.updateHeaderFixedColumns();

        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.apply();
    }

    removeFixedColumn() {
        let selector = this.selector;
        const grid = this.grid;

        grid.fixedColumnIndex = -1;
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.apply();
    }

    getFirstVisibleColumnIndex() {
        const grid = this.grid;

        let result = null;
        for (let i = 0; i < grid.column_table.count(); i++ ) {
            let column = grid.column_table.data[i];
            if (column[tbsGridNames.column.visible]) { result = i; break; }
        }
        return result;
    }

    getLastVisibleColumnIndex() {
        const grid = this.grid;

        let result = null;
        for (let i = grid.column_table.count() - 1; i >= 0; i-- ) {
            let column = grid.column_table.data[i];
            if (column[tbsGridNames.column.visible]) { result = i; break; }
        }
        return result;
    }
 }


