import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridHeaders {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    createHeaderColumns() {
        const grid = this.grid;

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
        const grid = this.grid;

        const createHeaderColumns = function (userColumns) {
            userColumns.map(userColumn => {
                let headerColumn = {};

                let kind     = userColumn[tbsGridNames.column.children] ? 'header' : 'column';
                let name     = null;
                let text     = null;
                let align    = null;
                let className= null;
                let rowSpan  = userColumn[tbsGridNames.column.rowSpan ];
                let colSpan  = userColumn[tbsGridNames.column.colSpan ];
                let rowIndex = userColumn[tbsGridNames.column.rowIndex];
                let colIndex = userColumn[tbsGridNames.column.colIndex];
                let visible  = null;

                let children = grid.isNull(userColumn[tbsGridNames.column.children], null);
                let num      = userColumn[tbsGridNames.column.num];
                let parentNum= userColumn[tbsGridNames.column.parentNum];

                let type = 'string';

                if (kind == 'column') {
                    let columnName = userColumn[tbsGridNames.column.name];
                    let column = grid.getColumn(columnName);

                    name       = column[tbsGridNames.column.name];
                    text       = grid.isNull(column.header[tbsGridNames.column.text]   , null);
                    align      = grid.isNull(column.header[tbsGridNames.column.align]  , 'center');
                    className  = grid.isNull(column[tbsGridNames.column.className]     , null);
                    visible    = grid.isNull(column[tbsGridNames.column.visible]       , true);
                }
                else {
                    name      = grid.isNull(userColumn[tbsGridNames.column.name]     , null);
                    align     = grid.isNull(userColumn[tbsGridNames.column.align]    , 'center');
                    text      = grid.isNull(userColumn[tbsGridNames.column.text]     , null);
                    className = grid.isNull(userColumn[tbsGridNames.column.className], null);
                    visible   = grid.isNull(userColumn[tbsGridNames.column.visible]  , true);
                }

                headerColumn[tbsGridNames.column.kind     ] = kind;
                headerColumn[tbsGridNames.column.name     ] = name;
                headerColumn[tbsGridNames.column.align    ] = align;
                headerColumn[tbsGridNames.column.text     ] = text;
                headerColumn[tbsGridNames.column.className] = className;
                headerColumn[tbsGridNames.column.visible  ] = visible;

                headerColumn[tbsGridNames.column.rowSpan  ] = rowSpan;
                headerColumn[tbsGridNames.column.colSpan  ] = colSpan;
                headerColumn[tbsGridNames.column.rowIndex ] = rowIndex;
                headerColumn[tbsGridNames.column.colIndex ] = colIndex;

                headerColumn[tbsGridNames.column.children ] = children

                headerColumn[tbsGridNames.column.num      ] = num;
                headerColumn[tbsGridNames.column.parentNum] = parentNum;

                headerColumn[tbsGridNames.column.type     ] = type;

                let childrenCount = headerColumn[tbsGridNames.column.children] ? headerColumn[tbsGridNames.column.children].length : 0;
                let columnCount   = headerColumn[tbsGridNames.column.colSpan];

                headerColumnRows[rowIndex].push(headerColumn);

                let blankColumn = {};
                blankColumn[tbsGridNames.column.kind      ] = 'empty';
                blankColumn[tbsGridNames.column.name      ] = name;
                blankColumn[tbsGridNames.column.align     ] = align;
                blankColumn[tbsGridNames.column.text      ] = text;
                blankColumn[tbsGridNames.column.className ] = className
                blankColumn[tbsGridNames.column.visible   ] = false;

                blankColumn[tbsGridNames.column.rowSpan   ] = rowSpan;
                blankColumn[tbsGridNames.column.colSpan   ] = colSpan;
                blankColumn[tbsGridNames.column.rowIndex  ] = rowIndex;
                blankColumn[tbsGridNames.column.colIndex  ] = colIndex;

                blankColumn[tbsGridNames.column.children  ] = children

                blankColumn[tbsGridNames.column.num       ] = num;
                blankColumn[tbsGridNames.column.parentNum ] = parentNum;

                headerColumn[tbsGridNames.column.type     ] = type;

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

        /* insert headerColumnTable */
        grid.header_column_table.remove();
        headerColumnRows.map((headerColumns, rowIndex) => {
            for (let i = 0, len = headerColumns.length; i < len; i++) {
                const headerColumn = headerColumns[i];
                const item = {};
                item.kind	   = grid.isNull(headerColumn['kind'], null);
                item.name      = grid.isNull(headerColumn['name'], null);
                item.align	   = grid.isNull(headerColumn['align'], null);
                item.text	   = grid.isNull(headerColumn['text'], null);
                item.className = grid.isNull(headerColumn['className'], null);
                item.visible   = grid.isNull(headerColumn['visible'], false);
                item.rowSpan   = grid.isNull(headerColumn['rowSpan'], null);
                item.colSpan   = grid.isNull(headerColumn['colSpan'], null);
                item.rowIndex  = rowIndex;
                item.colIndex  = grid.isNull(headerColumn['colIndex'], null);
                item.type	   = grid.isNull(headerColumn['type'], 'string');

                item.children  = grid.isNull(headerColumn['children'], null);

                grid.header_column_table.insert(rowIndex, item);
            }
        });
    }





    updateHeaderFixedColumns() {
        const grid = this.grid;

        if (grid.header_column_table.count() > 1) {
            let rootColumn;
            let rootColumnIndex;
            let rootColumnColSpan;

            for (let x = grid.fixedColumnIndex; x >= 0; x--) {
                const column = grid.header_column_table.selectRowByRowIndex(0, x);
                if (column[tbsGridNames.column.kind] != 'empty') {
                    rootColumnIndex = x;
                    rootColumnColSpan = column[tbsGridNames.column.colSpan];
                    break;
                }
            }

            grid.fixedColumnIndex = rootColumnIndex + rootColumnColSpan - 1;
        }

        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) {
            grid.fixedColumnIndex = -1 ;
            return;
        }
    }

    getDisplayedHeaderColumn(panelName = 'panel30') {
        let selector = this.selector;
        const grid = this.grid;

        // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
        // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
        // styleLeft = parseInt(styleLeft, 10);

        let columns = grid.column_table.data;
        if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
            let startColumnIndex = 0;
            let lastColumnIndex = grid.fixedColumnIndex;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
        else {
            let startColumnIndex = 0;
            let lastColumnIndex = columns.length - 1;
            if (grid.fixedColumnIndex != -1)  startColumnIndex = grid.fixedColumnIndex + 1;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
    }

    getHeaderRootColumn(rowId) {

    }
    getHeaderParentColumn(rowId) {

    }
    getHeaderColumnByRowId(rowId) {

    }
    getHeaderChildColumns(rowId, depth = 1) {
        if (arguments.length == 2) {}
        else {}
    }
    setHeaderValue(rowIndex, columnIndex, value) {

    }

    getHeaderColumn(rowIndex, columnIndex) {
        const grid = this.grid;
        return grid.header_column_table.data[rowIndex][columnIndex];
    }

    getHeaderColumnByNumber(num) {
        let selector = this.selector;
        const grid = this.grid;

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
        const grid = this.grid;

        let column = grid.column_table.data[columnIndex];
        let result = grid.null(column.header[property]) ? null : column.header[property];
        return result;
    }

    getHeaderProperty(columnName, property) {
        let selector = this.selector;
        const grid = this.grid;

        let columnIndex = grid.getColumnIndex(columnName);
        return grid.classHeader.getHeaderPropertyByIndex(columnIndex, property);
    }

    setHeaderProperty(rowIndex, colIndex, property, value) {
        const grid = this.grid;

        const column = grid.header_column_table.data[rowIndex][colIndex];
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
        const grid = this.grid;

        if (grid.fixedColumnIndex != -1) return;
        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) return;

        /* panel32 */
        for (let i = 0, rowLen = grid.header_column_table.count(); i < rowLen; i++) {
            let headerRow = grid.header_column_table.data[i];

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


