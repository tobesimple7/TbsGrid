import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridColumns {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    /**
     * Columns
     */

    setColumnDefaultValue(column) {
        let grid = this.grid;

        let columnType = column[tbsGridNames.column.type];
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

    /**
     * Add Columns Or All Columns
     */
    updateColumns(columns) {
        let grid = this.grid;
        let dataRows = [];
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

    /**
     * All Columns
     */
    updateColumnTable() {
        let grid = this.grid;

        /* update TbsGrid.columns */
        this.copyColumnData();
        this.copyHeaderColumnData();

        let dataRows = [];
        const searchColumn = function (column) {
            if (!column[tbsGridNames.column.children]) dataRows.push(column);
            else column[tbsGridNames.column.children].map(n => searchColumn(n));
        }
        grid.columns.map(column => searchColumn(column, null));

        /* columns order changed or add column */
        grid.column_table.remove();
        dataRows.map(dataRow => grid.column_table.insert(grid.copyJson(dataRow)));
    }

    copyColumnData() {
        let grid = this.grid;

        const searchColumn = function (column) {
            if (!column[tbsGridNames.column.children]) {
                let columnName = column[tbsGridNames.column.name];
                let dataRow = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
                if (grid.notNull(dataRow)) for (let key in dataRow) column[key] = dataRow[key];
            }
            else column[tbsGridNames.column.children].map(n => searchColumn(n));
        }
        grid.columns.map(column => searchColumn(column));
    }

    copyHeaderColumnData() {
        let grid = this.grid;

        const searchColumn = function (column) {
            if (column[tbsGridNames.column.children]) {
                let num = column[tbsGridNames.column.num];

                Loop1: for (let i = 0, len = grid.headerColumnTable.length; i < len; i++) {
                    let dataRows = grid.headerColumnTable[i];
                    for (let x = 0, len2 = dataRows.length; x < len2; x++) {
                        let dataRow = dataRows[x];
                        if (num == dataRow[tbsGridNames.column.num]) {
                            for (let key in dataRow) column[key] = dataRow[key];
                            break Loop1;
                        }
                    }
                }
                column[tbsGridNames.column.children].map(n => searchColumn(n));
            }

        }
        grid.columns.map(column => searchColumn(column, null));
    }

    addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) {
        let grid = this.grid;

        grid.classColumn.updateColumns([addColumn]);

        // Validate duplication column name
        if (grid.isColumnName(addColumn[tbsGridNames.column.name])) { alert('Duplication column name.'); return; }

        // Add column in grid.header_table.data
        let result = [];
        let headerColumn = grid.classColumn.getHeaderColumn(targetRowIndex, targetColumnIndex);
        if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

        // Find parent Column. if not, find column
        let targetColumn;
        let parentColumn;

        let num = headerColumn[tbsGridNames.column.num];
        let parentNum = headerColumn[tbsGridNames.column.parentNum];

        targetColumn = grid.classColumn.getHeaderColumnByNumber(num);
        if (parentNum != 0) {
            parentColumn = grid.classColumn.getHeaderColumnByNumber(parentNum);
            parentColumn = parentColumn.childNodes; // array
        }
        else parentColumn = grid.columns; // array

        // Find targetColumnIndex
        let targetIndex;
        for (let i = 0; i < parentColumn.length; i++) {
            let node = parentColumn[i];
            if (num == node[tbsGridNames.column.num]) targetIndex = i;
        }
        if (orderType == tbsGridTypes.BeforeAfter.before) {
            parentColumn.splice(targetIndex, 0, addColumn);
        }
        else if (orderType == tbsGridTypes.BeforeAfter.after) {
            targetIndex += 1;
            if (targetIndex >= parentColumn.length) parentColumn.push(addColumn);
            else parentColumn.splice(targetIndex, 0, addColumn);
        }
        grid.classControl.after_addColumn();
    }

    removeColumn(targetRowIndex, targetColumnIndex) {
        let grid = this.grid;

        // Add column in grid.columns
        let result = [];
        let headerColumn = grid.classColumn.getHeaderColumn(targetRowIndex, targetColumnIndex);
        if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

        // Find parent Column. if not, find column
        let targetColumn;
        let parentColumn;

        let num = headerColumn[tbsGridNames.column.num];
        let parentNum = headerColumn[tbsGridNames.column.parentNum];

        targetColumn = grid.classColumn.getHeaderColumnByNumber(num);
        if (parentNum != 0) {
            parentColumn = grid.classColumn.getHeaderColumnByNumber(parentNum);
            parentColumn = parentColumn.childNodes; // array
        }
        else parentColumn = grid.columns; // array

        // Find targetColumnIndex
        let targetIndex;
        for (let i = 0; i < parentColumn.length; i++) {
            let node = parentColumn[i];
            if (num == node[tbsGridNames.column.num]) targetIndex = i;
        }
        parentColumn.splice(targetIndex, 1);
        grid.classControl.after_removeColumn();
    }

    changeColumnOrder(movingColumn, targetColumn, orderType) {
        let grid = this.grid;

        movingColumn = grid.copyJson(movingColumn);
        targetColumn = grid.copyJson(targetColumn);

        /* find parentNode : movingColumnName */
        const findParentNode = function (node, pNode, columnNumber) {
            if (parentNode) return;
            else if (node[tbsGridNames.column.num] == columnNumber) {
                parentNode = pNode;
            }
            else if (node[tbsGridNames.column.children]) {
                for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
                    findParentNode(node[tbsGridNames.column.children][i], node, columnNumber);
                }
            }
        }
        let prevColumns = grid.copyJson(grid.column_table.data);

        let parentNode = null;
        let parentArray = null;
        let movingColumnNumber = movingColumn[tbsGridNames.column.num];
        let targetColumnNumber = targetColumn[tbsGridNames.column.num];

        for (let i = 0, len = grid.columns.length; i < len; i++) {
            let node = grid.columns[i];

            if (node[tbsGridNames.column.num] == movingColumnNumber) {
                parentArray = grid.columns;
                break;
            }

            findParentNode(node, grid.columns, movingColumnNumber);
            if (parentNode) {
                parentArray = parentNode[tbsGridNames.column.children];
                break;
            }
        }

        if (grid.null(parentArray)) return;

        /* Delete movingColumnName node */
        let newNode = null;
        for (let i = parentArray.length - 1; i >= 0; i--) {
            let item = parentArray[i];
            if (item[tbsGridNames.column.num] == movingColumnNumber) {
                newNode = grid.copyJson(item);
                parentArray.splice(i, 1);
                break;
            }
        }

        /* Add node before, after targetColumn */
        let targetIndex = null;
        for (let i = 0, len = parentArray.length; i < len; i++) {
            let item = parentArray[i];
            if (item[tbsGridNames.column.num] == targetColumnNumber) {
                targetIndex = i;
                break;
            }
        }
        if (orderType == 'before') parentArray.splice(targetIndex, 0, newNode);
        else if (orderType == 'after') {
            if (targetIndex + 1 <= parentArray.length - 1) parentArray.splice(targetIndex + 1, 0, newNode);
            else parentArray.push(newNode);
        }

        /* Change Fixed Column Index */
        if (grid.fixedColumnIndex != -1) {
            if (movingColumn.colIndex <= grid.fixedColumnIndex && targetColumn.colIndex > grid.fixedColumnIndex) {
                grid.classControl.after_changeColumnOrder();

                let childCount = Number(movingColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex - childCount;

                if (grid.fixedColumnIndex < 0) grid.classColumn.removeFixedColumn();
                else grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
            else if (movingColumn.colIndex > grid.fixedColumnIndex && targetColumn.colIndex <= grid.fixedColumnIndex) {
                grid.classControl.after_changeColumnOrder();

                let childCount = Number(movingColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex + childCount;
                grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
            else grid.classControl.after_changeColumnOrder();
        }
        else {
            grid.classControl.after_changeColumnOrder();
        }
    }

    getColumn(name, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        return table.selectRow(tbsGridNames.column.name, name);
    }

    getColumnByIndex(colIndex, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        return table.data[colIndex];
    }

    getColumnName(colIndex, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        return table.selectValue(colIndex, tbsGridNames.column.name);
    }

    getColumnIndex(name, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        return table.selectRowIndex(tbsGridNames.column.name, name);
    }

    getColumns(table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        return table.select();
    }

    getColumnPropertyByIndex(columnIndex, property, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;
        let column = table.data[columnIndex];
        let result = grid.null(column[property]) ? null : column[property];
        return result;
    }

    getColumnProperty(columnName, property, table) {
        let grid = this.grid;
        if (grid.null(table)) table = grid.column_table;

        let columnIndex = table.selectRowIndex(tbsGridNames.column.name, columnName);
        return grid.null(columnIndex) ? null : grid.classColumn.getColumnPropertyByIndex(columnIndex, property);
    }

    getFirstVisibleColumnIndex() {
        let grid = this.grid;

        let result = null;
        for (let i = 0; i < grid.column_table.count(); i++ ) {
            let column = grid.column_table.data[i];
            if (column[tbsGridNames.column.visible]) { result = i; break; }
        }
        return result;
    }

    getLastVisibleColumnIndex() {
        let grid = this.grid;

        let result = null;
        for (let i = grid.column_table.count() - 1; i >= 0; i-- ) {
            let column = grid.column_table.data[i];
            if (column[tbsGridNames.column.visible]) { result = i; break; }
        }
        return result;
    }

    setColumn(columnName, property, value, table) {
        let grid = this.grid;

        if (grid.null(table)) table = grid.column_table;
        let column = table.selectRow(tbsGridNames.column.name, columnName);
        column[property] = value;
    }
    
    setColumnByType(columnType, property, value, table) {
        let grid = this.grid;

        if (grid.null(table)) table = grid.column_table;

        let dataRows = table.selectRow(tbsGridNames.column.type, columnType);
        dataRows.map(dataRow => {
            let rowId = dataRow[tbsGridNames.column.rowId];
            table.updateByRowId(rowId, property, value);
        });
    }

    getSelectedTableCell(rowIndex, cellIndex) {
        let selector = this.selector;
        let grid = this.grid;

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
        let grid = this.grid;

        let leftPanelName = panelName;
        if (panelName == 'panel61' || panelName == 'panel62'  || panelName == 'panel60') leftPanelName = 'panel61';
        else leftPanelName = 'panel31';

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
        return parseInt(tableRows[tableRowIndex].childNodes[0].dataset.rowIndex);
    }

    getLeftTableCell(rowIndex, panel = 'panel31') {1
        let selector = this.selector;
        let grid = this.grid;

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
        let grid = this.grid;

        if (fixedColumnIndex >= grid.column_table.count()) { grid.fixedColumnIndex = -1; return; }

        grid.fixedColumnIndex = fixedColumnIndex
        grid.classColumn.updateHeaderFixedColumns();
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.apply();
    }

    removeFixedColumn() {
        let selector = this.selector;
        let grid = this.grid;

        grid.fixedColumnIndex = -1;

        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.apply();
    }

    /**
     * Header Columns
     */

    createHeaderColumns() {
        let selector = this.selector;
        let grid = this.grid;

        const getChildrenColumnCount = function (userColumn) {
            let columnCount = 0;
            const getCount = function (userColumn) {
                if (userColumn[tbsGridNames.column.children]) {
                    for (let i = 0, len = userColumn[tbsGridNames.column.children].length; i < len; i++) {
                        getCount(userColumn[tbsGridNames.column.children][i]);
                    }
                }
                else columnCount += 1;
            }
            getCount(userColumn);
            return columnCount;
        }

        const getTreeDepth = function(userColumns, depth = 0) {
            let maxDepth = 1;
            const getDepth = (userColumn, depth = 1) => {
                if (depth > maxDepth)
                    maxDepth = depth;
                if (userColumn[tbsGridNames.column.children]) {
                    for (let i = 0, len = userColumn[tbsGridNames.column.children].length; i < len; i++) {
                        getDepth(userColumn[tbsGridNames.column.children][i], depth + 1);
                    }
                }
            }
            for (let i = 0, len = userColumns.length; i < len; i++) getDepth(userColumns[i]);
            return maxDepth;
        }

        const setNumber = function(userColumns, rowIndex, parentNum = 0) {
            userColumns.map(userColumn => {
                num = num + 1;
                userColumn[tbsGridNames.column.num] = num;
                userColumn[tbsGridNames.column.parentNum] = parentNum;

                userColumn[tbsGridNames.column.rowIndex] = rowIndex;
                userColumn[tbsGridNames.column.rowSpan] = userColumn[tbsGridNames.column.children] ? 1 : headerRowCount - rowIndex;
                userColumn[tbsGridNames.column.colSpan] = getChildrenColumnCount(userColumn);
                if (userColumn[tbsGridNames.column.children]) {
                    setNumber(userColumn[tbsGridNames.column.children], rowIndex + 1, num);
                }
            });
        }

        let num = 0;
        let parentNum = 0;

        let headerRowCount = getTreeDepth(grid.columns);
        grid.headerRowCount = headerRowCount;

        setNumber(grid.columns, 0);
    }

    createHeaderColumnTable() {
        let selector = this.selector;
        let grid = this.grid;

        const createHeaderColumns = function (userColumns) {
            userColumns.map(userColumn => {
                let headerColumn = {};
                let kind = userColumn[tbsGridNames.column.children] ? 'header' : 'column';
                if (kind == 'column') {
                    let columnName = userColumn[tbsGridNames.column.name];
                    let column = grid.classColumn.getColumn(columnName);
                    headerColumn[tbsGridNames.column.name       ] = column[tbsGridNames.column.name];
                    headerColumn[tbsGridNames.column.text       ] = column.header[tbsGridNames.column.text];
                    headerColumn[tbsGridNames.column.align      ] = column.header[tbsGridNames.column.align] ? column.header[tbsGridNames.column.align] : 'center';
                    headerColumn[tbsGridNames.column.kind       ] = kind;
                    headerColumn[tbsGridNames.column.rowSpan    ] = userColumn[tbsGridNames.column.rowSpan ];
                    headerColumn[tbsGridNames.column.colSpan    ] = userColumn[tbsGridNames.column.colSpan ];
                    headerColumn[tbsGridNames.column.rowIndex   ] = userColumn[tbsGridNames.column.rowIndex];
                    headerColumn[tbsGridNames.column.colIndex   ] = userColumn[tbsGridNames.column.colIndex];
                    headerColumn[tbsGridNames.column.visible    ] = column[tbsGridNames.column.visible ];
                }
                else {
                    headerColumn[tbsGridNames.column.name      ] = userColumn[tbsGridNames.column.name]  ? userColumn[tbsGridNames.column.name]  : '';
                    headerColumn[tbsGridNames.column.align     ] = userColumn[tbsGridNames.column.align] ? userColumn[tbsGridNames.column.align] : 'center';
                    headerColumn[tbsGridNames.column.children  ] = userColumn[tbsGridNames.column.children  ];
                    headerColumn[tbsGridNames.column.text      ] = userColumn[tbsGridNames.column.text      ];
                    headerColumn[tbsGridNames.column.kind      ] = kind;
                    headerColumn[tbsGridNames.column.rowSpan   ] = userColumn[tbsGridNames.column.rowSpan   ];
                    headerColumn[tbsGridNames.column.colSpan   ] = userColumn[tbsGridNames.column.colSpan   ];
                    headerColumn[tbsGridNames.column.rowIndex  ] = userColumn[tbsGridNames.column.rowIndex  ];
                    headerColumn[tbsGridNames.column.colIndex  ] = userColumn[tbsGridNames.column.colIndex  ];
                    headerColumn[tbsGridNames.column.visible   ] = userColumn[tbsGridNames.column.visible   ];
                    headerColumn[tbsGridNames.column.subRowSpan] = 1;
                    headerColumn[tbsGridNames.column.subColSpan] = 1;
                    headerColumn[tbsGridNames.column.className ] = userColumn[tbsGridNames.column.className ];

                    if (grid.null(headerColumn[tbsGridNames.column.visible])) headerColumn[tbsGridNames.column.visible] = true;
                }
                headerColumn[tbsGridNames.column.num       ] = userColumn[tbsGridNames.column.num       ];
                headerColumn[tbsGridNames.column.parentNum ] = userColumn[tbsGridNames.column.parentNum ];

                let rowIndex      = headerColumn[tbsGridNames.column.rowIndex];
                let childrenCount = headerColumn[tbsGridNames.column.children] ? headerColumn[tbsGridNames.column.children].length : 0;
                let columnCount   = headerColumn[tbsGridNames.column.colSpan];
                headerColumnRows[rowIndex].push(headerColumn);

                let blankColumn = {};
                blankColumn[tbsGridNames.column.text       ] = headerColumn[tbsGridNames.column.text];
                blankColumn[tbsGridNames.column.kind       ] = 'empty';
                blankColumn[tbsGridNames.column.rowSpan    ] = 1;
                blankColumn[tbsGridNames.column.colSpan    ] = 1;
                blankColumn[tbsGridNames.column.rowIndex   ] = 0;
                blankColumn[tbsGridNames.column.colIndex   ] = 0;
                blankColumn[tbsGridNames.column.visible    ] = false;
                blankColumn[tbsGridNames.column.align      ] = '';
                blankColumn[tbsGridNames.column.subRowSpan ] = 1;
                blankColumn[tbsGridNames.column.subColSpan ] = 1;

                //make blank column(row)
                if (childrenCount == 0) {
                    for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumnRows[i].push(blankColumn);
                }
                //make blank column(colums)
                if (columnCount > 1) {
                    for (let i =  1; i < columnCount; i++) headerColumnRows[rowIndex].push(blankColumn);
                }
                if (userColumn[tbsGridNames.column.children]) {
                    createHeaderColumns(userColumn[tbsGridNames.column.children]);
                }
            });
        }

        let headerColumnRows = [];
        let headerRowCount = grid.headerRowCount;
        for (let i = 0; i < headerRowCount; i++) headerColumnRows[i] = [];

        createHeaderColumns(grid.columns);

        headerColumnRows.map((columns, rowIndex) => {
            columns.map((column, colIndex) => {
                column[tbsGridNames.column.rowIndex] = rowIndex;
                column[tbsGridNames.column.colIndex] = colIndex;
                delete column[tbsGridNames.column.children];
            })
        })
        grid.headerColumnTable = headerColumnRows;
    }

    updateHeaderFixedColumns() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.headerColumnTable.length == 1) return;
        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) return;

        let fixedColumnIndex = grid.fixedColumnIndex;
        let columnName = grid.classColumn.getColumnName(fixedColumnIndex);

        let columnCount = 0;

        const getChildCount = function (node) {
            if (node[tbsGridNames.column.children]) {
                for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
                    getChildCount(node[tbsGridNames.column.children][i]);
                }
            }
            else childCount += 1;
        }

        const findColumnNode = function (node, columnName) {
            if (rootNode) return;

            if (node[tbsGridNames.column.children]) {
                for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
                    if (grid.notNull(node[tbsGridNames.column.children][i][tbsGridNames.column.name])) {
                        if (node[tbsGridNames.column.children][i][tbsGridNames.column.name] == columnName) {
                            rootNode = node;
                            return;
                        }
                    }
                    findColumnNode(node[tbsGridNames.column.children][i], columnName);
                }
            }
        }

        const removeColumnNodes = function (node) {
            if (node[tbsGridNames.column.children]) {
                let parentArray = node[tbsGridNames.column.children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[tbsGridNames.column.children]) removeColumnNodes(childNode);
                    else {
                        let columnName = childNode[tbsGridNames.column.name];
                        let columnIndex = grid.classColumn.getColumnIndex(columnName);
                        if (columnIndex > fixedColumnIndex) parentArray.splice(i, 1);
                    }
                }
            }
        }

        const removeBlankNodes = function (node) {
            if (node[tbsGridNames.column.children] && node[tbsGridNames.column.children].length != 0) {
                let parentArray = node[tbsGridNames.column.children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[tbsGridNames.column.children] && childNode[tbsGridNames.column.children].length >  0) removeBlankNodes(childNode, null);
                    else if (childNode[tbsGridNames.column.children] && childNode[tbsGridNames.column.children].length == 0) parentArray.splice(i, 1);
                }
            }
        }

        const removePreColumnNodes = function (node) {
            if (node[tbsGridNames.column.children]) {
                let parentArray = node[tbsGridNames.column.children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[tbsGridNames.column.children]) removePreColumnNodes(childNode);
                    else {
                        let columnName = childNode[tbsGridNames.column.name];
                        let columnIndex = grid.classColumn.getColumnIndex(columnName);
                        if (columnIndex <= fixedColumnIndex) parentArray.splice(i, 1);
                    }
                }
            }
        }

        /* find parent node */
        let rootNode = null;
        let childCount = 0;

        let arrayIndex = null;
        for (let i = 0, len = grid.columns.length; i < len; i++) {
            let node = grid.columns[i];
            findColumnNode(node, columnName);
            if (rootNode) {
                rootNode = node;
                arrayIndex = i; break;
            }
        }

        /* Exception */
        if (grid.null(rootNode)) return;

        getChildCount(rootNode);
        if (childCount == 1) return;

        /* copy parent node */
        let newNode = grid.copyJson(rootNode);

        /* delete node */
        removeColumnNodes(rootNode);
        removeBlankNodes(rootNode);

        /* add new node */
        if (arrayIndex + 1 < grid.columns.length) grid.columns.splice(arrayIndex + 1, 0, newNode);
        else grid.columns.push(newNode);

        /* delete node, blank node */
        for (let i = newNode[tbsGridNames.column.children].length - 1; i >= 0; i--) {
            let node = newNode[tbsGridNames.column.children][i];

            /* Delete column node */
            if (grid.null(node[tbsGridNames.column.children])) {
                let columnName = node[tbsGridNames.column.name];
                let columnIndex = grid.classColumn.getColumnIndex(columnName);
                if (columnIndex <= grid.fixedColumnIndex) newNode[tbsGridNames.column.children].splice(i, 1);
                continue;
            }
            else removePreColumnNodes(node);
        }

        for (let i = grid.columns.length - 1; i >= 0; i--) {
            let node = grid.columns[i];

            if (node[tbsGridNames.column.children] && node[tbsGridNames.column.children].length == 0) {
                grid.columns.splice(i, 1);
                continue;
            }
            removeBlankNodes(node);
        }

        /* create header columns */
        grid.classColumn.createHeaderColumns();
        grid.classColumn.createHeaderColumnTable();
    }

    getDisplayedHeaderColumn(panelName = 'panel30') {
        let selector = this.selector;
        let grid = this.grid;

        // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
        // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
        // styleLeft = parseInt(styleLeft, 10);

        let columns = grid.column_table.data;
        if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62') {
            let startColumnIndex = 0;
            let lastColumnIndex = grid.fixedColumnIndex;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };

            // let sumWidth = 0;
            // // get startColumnIndex
            // for (let i = 0; i < this.fixedColumnIndex; i++) {
            //     let column = columns[i];
            //     if (column[tbsGridNames.column.visible] == false) continue;
            //     sumWidth += parseInt(column[tbsGridNames.column.width]);
            //     if (sumWidth + styleLeft > 0) {
            //         startColumnIndex = i;
            //         break;
            //     }
            // }
            // sumWidth = rectTable.width;
            // // get lastColumnIndex
            // for (let i = this.fixedColumnIndex; i >= 0; i--) {
            //     let column = columns[i];
            //     if (column[tbsGridNames.column.visible] == false) continue;
            //     sumWidth -= parseInt(column[tbsGridNames.column.width]);
            //     if (sumWidth + styleLeft < rectPanel.width) {
            //         lastColumnIndex = i;
            //         break;
            //     }
            // }
            // return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
        else {
            let startColumnIndex = 0;
            let lastColumnIndex = columns.length - 1;
            if (grid.fixedColumnIndex != -1)  startColumnIndex = grid.fixedColumnIndex + 1;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };

            // let sumWidth = 0;
            // for (let i = 0, len = columns.length; i < len; i++) {
            //     let column = columns[i];
            //
            //     if (column[tbsGridNames.column.visible] == false) sumWidth += 0;
            //     else sumWidth += parseInt(column[tbsGridNames.column.width]);
            //
            //     if (sumWidth + styleLeft > 0) {
            //         startColumnIndex = i;
            //         break;
            //     }
            // }
            // sumWidth = rectTable.width;
            // for (let i = columns.length - 1; i >= 0; i--) {
            //     let column = columns[i];
            //     if (column[tbsGridNames.column.visible] == false) sumWidth -= 0;
            //     else sumWidth -= parseInt(column[tbsGridNames.column.width]);
            //     if (sumWidth + styleLeft < rectPanel.width) {
            //         lastColumnIndex = i;
            //         break;
            //     }
            // }
            // return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
    }

    getHeaderColumn(rowIndex, columnIndex) {
        let selector = this.selector;
        let grid = this.grid;

        return (grid.headerColumnTable[rowIndex][columnIndex] == undefined) ? null : grid.headerColumnTable[rowIndex][columnIndex];
    }

    getHeaderColumnByNumber(num) {
        let selector = this.selector;
        let grid = this.grid;

        let result;
        const getParentColumn = function (headerColumn) {
            if (headerColumn[tbsGridNames.column.num] == num) { result = headerColumn; return; }
            if (headerColumn[tbsGridNames.column.children]) {
                for (let i = 0, len = headerColumn[tbsGridNames.column.children].length; i < len; i++) {
                    getParentColumn(headerColumn[tbsGridNames.column.children][i]);
                }
            }
        }
        for (let i = 0; i < grid.columns.length; i++) getParentColumn(grid.columns[i]);
        return result;
    }

    getHeaderPropertyByIndex(columnIndex, property) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.column_table.data[columnIndex];
        let result = grid.null(column.header[property]) ? null : column.header[property];
        return result;
    }

    getHeaderProperty(columnName, property) {
        let selector = this.selector;
        let grid = this.grid;

        let columnIndex = grid.classColumn.getColumnIndex(columnName);
        return grid.classColumn.getHeaderPropertyByIndex(columnIndex, property);
    }

    setHeaderProperty(rowIndex, colIndex, property, value) {
        let grid = this.grid;

        let column = grid.headerColumnTable[rowIndex][colIndex];
        let kind = column[tbsGridNames.column.kind];
        column[property] = value;

        if (kind == tbsGridTypes.ColumnKind.column) {
            let name = column[tbsGridNames.column.name];
            let dataRow = grid.column_table.selectRow(tbsGridNames.column.name, name);
            if (property == tbsGridNames.column.text) {
                dataRow.header[tbsGridNames.column.text] = value;
            }
            else if (property == tbsGridNames.column.className) {
                dataRow.header[tbsGridNames.column.className] = value;
            }
            else {
                dataRow.header[property] = value;
            }
        }
    }

    createHeaderFxiedColumnTable() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.fixedColumnIndex != -1) return;
        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) return;

        /* panel32 */
        let headerRows = grid.headerColumnTable;
        for (let i = 0, rowLen = headerRows.length; i < rowLen; i++) {
            let headerRow = headerRows[i];

            let sourceHeader = headerRow[grid.fixedColumnIndex];
            let nextSourceHeader = headerRow[grid.fixedColumnIndex + 1];
            let kind = header[tbsGridNames.column.kind];

            if (sourceHeader[tbsGridNames.column.kind] == 'column') continue;
            else if (sourceHeader[tbsGridNames.column.kind] == 'header') {
                sourceHeader[tbsGridNames.column.colSpan] = 1;
                continue;
            }

            /* find MasterHeader */
            let masterHeader = null;
            for (let x = grid.fixedColumnIndex; x >= 0; x--) {
                let header = headerRow[x];
                if (header[tbsGridNames.column.kind] == 'header') {
                    masterHeader = header;
                    break;
                }
            }

            /* Update colSpan : colIndex  (0), 1, 2, 3, (4), span 5 fixed 2 */
            let colIndex = masterHeader[tbsGridNames.column.colIndex];  // 0
            let colSpan  = masterHeader[tbsGridNames.column.colSpan];   // 5
            let lastColIndex = colIndex + colSpan - 1;          // 4

            masterHeader[tbsGridNames.column.colSpan] = lastColIndex - grid.fixedColumnIndex + 1;  // 3
            if (nextSourceHeader[tbsGridNames.column.kind] == 'empty') {
                nextSourceHeader[tbsGridNames.column.colSpan] = lastColIndex - grid.fixedColumnIndex;  // 2
                nextSourceHeader[tbsGridNames.column.kind] = 'header';  // 2

            }
        }
    }
 }


