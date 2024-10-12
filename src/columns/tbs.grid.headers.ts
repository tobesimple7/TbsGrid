
import {TbsGrid} from "../tbs.grid";
import {ColumnKind, columnAlias} from "../tbs.grid.types";



export class TbsGridHeaders {
    grid: TbsGrid;
    selector: string;

    constructor(grid: TbsGrid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    createHeaderColumns() {
        const grid = this.grid;

        const getChildrenColumnCount = function (userColumn) {
            let columnCount = 0;
            const getCount = function (userColumn) {
                if (userColumn[columnAlias.children]) {
                    for (let i = 0, len = userColumn[columnAlias.children].length; i < len; i++) {
                        getCount(userColumn[columnAlias.children][i]);
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
                if (userColumn[columnAlias.children]) {
                    for (let i = 0, len = userColumn[columnAlias.children].length; i < len; i++) {
                        getDepth(userColumn[columnAlias.children][i], depth + 1);
                    }
                }
            }
            for (let i = 0, len = userColumns.length; i < len; i++) getDepth(userColumns[i]);
            return maxDepth;
        }

        const setNumber = function(userColumns, rowIndex, parentNum = 0) {
            userColumns.map(userColumn => {
                num = num + 1;
                userColumn[columnAlias.num] = num;
                userColumn[columnAlias.parentNum] = parentNum;

                userColumn[columnAlias.rowIndex] = rowIndex;
                userColumn[columnAlias.rowSpan] = userColumn[columnAlias.children] ? 1 : headerRowCount - rowIndex;
                userColumn[columnAlias.colSpan] = getChildrenColumnCount(userColumn);
                if (userColumn[columnAlias.children]) {
                    setNumber(userColumn[columnAlias.children], rowIndex + 1, num);
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

                let kind     = userColumn[columnAlias.children] ? 'header' : 'column';
                let name     = null;
                let text     = null;
                let align    = null;
                let className= null;
                let rowSpan  = userColumn[columnAlias.rowSpan ];
                let colSpan  = userColumn[columnAlias.colSpan ];
                let rowIndex = userColumn[columnAlias.rowIndex];
                let colIndex = userColumn[columnAlias.colIndex];
                let visible  = null;

                let children = grid.isNull(userColumn[columnAlias.children], null);
                let num      = userColumn[columnAlias.num];
                let parentNum= userColumn[columnAlias.parentNum];

                let type = 'string';

                if (kind == 'column') {
                    let columnName = userColumn[columnAlias.name];
                    let column = grid.getColumn(columnName);

                    name       = column[columnAlias.name];
                    text       = grid.isNull(column.header[columnAlias.text]   , null);
                    align      = grid.isNull(column.header[columnAlias.align]  , 'center');
                    className  = grid.isNull(column[columnAlias.className]     , null);
                    visible    = grid.isNull(column[columnAlias.visible]       , true);
                }
                else {
                    name      = grid.isNull(userColumn[columnAlias.name]     , null);
                    align     = grid.isNull(userColumn[columnAlias.align]    , 'center');
                    text      = grid.isNull(userColumn[columnAlias.text]     , null);
                    className = grid.isNull(userColumn[columnAlias.className], null);
                    visible   = grid.isNull(userColumn[columnAlias.visible]  , true);
                }

                headerColumn[columnAlias.kind     ] = kind;
                headerColumn[columnAlias.name     ] = name;
                headerColumn[columnAlias.align    ] = align;
                headerColumn[columnAlias.text     ] = text;
                headerColumn[columnAlias.className] = className;
                headerColumn[columnAlias.visible  ] = visible;

                headerColumn[columnAlias.rowSpan  ] = rowSpan;
                headerColumn[columnAlias.colSpan  ] = colSpan;
                headerColumn[columnAlias.rowIndex ] = rowIndex;
                headerColumn[columnAlias.colIndex ] = colIndex;

                headerColumn[columnAlias.children ] = children

                headerColumn[columnAlias.num      ] = num;
                headerColumn[columnAlias.parentNum] = parentNum;

                headerColumn[columnAlias.type     ] = type;

                let childrenCount = headerColumn[columnAlias.children] ? headerColumn[columnAlias.children].length : 0;
                let columnCount   = headerColumn[columnAlias.colSpan];

                headerColumnRows[rowIndex].push(headerColumn);

                let blankColumn = {};
                blankColumn[columnAlias.kind      ] = 'empty';
                blankColumn[columnAlias.name      ] = name;
                blankColumn[columnAlias.align     ] = align;
                blankColumn[columnAlias.text      ] = text;
                blankColumn[columnAlias.className ] = className
                blankColumn[columnAlias.visible   ] = false;

                blankColumn[columnAlias.rowSpan   ] = rowSpan;
                blankColumn[columnAlias.colSpan   ] = colSpan;
                blankColumn[columnAlias.rowIndex  ] = rowIndex;
                blankColumn[columnAlias.colIndex  ] = colIndex;

                blankColumn[columnAlias.children  ] = children

                blankColumn[columnAlias.num       ] = num;
                blankColumn[columnAlias.parentNum ] = parentNum;

                headerColumn[columnAlias.type     ] = type;

                //make blank column(row)
                if (childrenCount == 0) {
                    for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumnRows[i].push(blankColumn);
                }

                //make blank column(colums)
                if (columnCount > 1) {
                    for (let i =  1; i < columnCount; i++) headerColumnRows[rowIndex].push(blankColumn);
                }

                if (userColumn[columnAlias.children]) {
                    createHeaderColumns(userColumn[columnAlias.children]);
                }
            });
        }

        let headerColumnRows = [];
        let headerRowCount = grid.headerRowCount;
        for (let i = 0; i < headerRowCount; i++) headerColumnRows[i] = [];

        createHeaderColumns(grid.columns);

        headerColumnRows.map((columns, rowIndex) => {
            columns.map((column, colIndex) => {
                column[columnAlias.rowIndex] = rowIndex;
                column[columnAlias.colIndex] = colIndex;
                delete column[columnAlias.children];
            })
        })

        /* insert headerColumnTable */
        grid.header_column_table.remove();
        headerColumnRows.map((headerColumns, rowIndex) => {
            for (let i = 0, len = headerColumns.length; i < len; i++) {
                const headerColumn = headerColumns[i];
                const item: any = {};
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
                if (column[columnAlias.kind] != 'empty') {
                    rootColumnIndex = x;
                    rootColumnColSpan = column[columnAlias.colSpan];
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
            if (headerColumn[columnAlias.num] == num) { result = headerColumn; return; }
            if (headerColumn[columnAlias.children]) {
                for (let i = 0, len = headerColumn[columnAlias.children].length; i < len; i++) {
                    getParentColumn(headerColumn[columnAlias.children][i]);
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
        let kind = column[columnAlias.kind];
        column[property] = value;

        if (kind == ColumnKind.column) {
            let name = column[columnAlias.name];
            let dataRow: any = grid.column_table.selectRow(columnAlias.name, name);
            if (property == columnAlias.text) {
                dataRow.header[columnAlias.text] = value;
            }
            else if (property == columnAlias.className) {
                dataRow.header[columnAlias.className] = value;
            }
            else {
                dataRow.header[property] = value;
            }
        }
    }
 }


