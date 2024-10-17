
import {TbsGrid} from "../tbs.grid";
import {ColumnKind, ColumnAlias} from "../tbs.grid.types";



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
                if (userColumn[ColumnAlias.children]) {
                    for (let i = 0, len = userColumn[ColumnAlias.children].length; i < len; i++) {
                        getCount(userColumn[ColumnAlias.children][i]);
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
                if (userColumn[ColumnAlias.children]) {
                    for (let i = 0, len = userColumn[ColumnAlias.children].length; i < len; i++) {
                        getDepth(userColumn[ColumnAlias.children][i], depth + 1);
                    }
                }
            }
            for (let i = 0, len = userColumns.length; i < len; i++) getDepth(userColumns[i]);
            return maxDepth;
        }

        const setNumber = function(userColumns, rowIndex, parentNum = 0) {
            userColumns.map(userColumn => {
                num = num + 1;
                userColumn[ColumnAlias.num] = num;
                userColumn[ColumnAlias.parentNum] = parentNum;

                userColumn[ColumnAlias.rowIndex] = rowIndex;
                userColumn[ColumnAlias.rowSpan] = userColumn[ColumnAlias.children] ? 1 : headerRowCount - rowIndex;
                userColumn[ColumnAlias.colSpan] = getChildrenColumnCount(userColumn);
                if (userColumn[ColumnAlias.children]) {
                    setNumber(userColumn[ColumnAlias.children], rowIndex + 1, num);
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

                let kind     = userColumn[ColumnAlias.children] ? 'header' : 'column';
                let name     = null;
                let text     = null;
                let align    = null;
                let className= null;
                let rowSpan  = userColumn[ColumnAlias.rowSpan ];
                let colSpan  = userColumn[ColumnAlias.colSpan ];
                let rowIndex = userColumn[ColumnAlias.rowIndex];
                let colIndex = userColumn[ColumnAlias.colIndex];
                let visible  = null;

                let children = grid.isNull(userColumn[ColumnAlias.children], null);
                let num      = userColumn[ColumnAlias.num];
                let parentNum= userColumn[ColumnAlias.parentNum];

                let type = 'string';

                if (kind == 'column') {
                    let columnName = userColumn[ColumnAlias.name];
                    let column = grid.getColumn(columnName);

                    name       = column[ColumnAlias.name];
                    text       = grid.isNull(column.header[ColumnAlias.text]   , null);
                    align      = grid.isNull(column.header[ColumnAlias.align]  , 'center');
                    className  = grid.isNull(column[ColumnAlias.className]     , null);
                    visible    = grid.isNull(column[ColumnAlias.visible]       , true);
                }
                else {
                    name      = grid.isNull(userColumn[ColumnAlias.name]     , null);
                    align     = grid.isNull(userColumn[ColumnAlias.align]    , 'center');
                    text      = grid.isNull(userColumn[ColumnAlias.text]     , null);
                    className = grid.isNull(userColumn[ColumnAlias.className], null);
                    visible   = grid.isNull(userColumn[ColumnAlias.visible]  , true);
                }

                headerColumn[ColumnAlias.kind     ] = kind;
                headerColumn[ColumnAlias.name     ] = name;
                headerColumn[ColumnAlias.align    ] = align;
                headerColumn[ColumnAlias.text     ] = text;
                headerColumn[ColumnAlias.className] = className;
                headerColumn[ColumnAlias.visible  ] = visible;

                headerColumn[ColumnAlias.rowSpan  ] = rowSpan;
                headerColumn[ColumnAlias.colSpan  ] = colSpan;
                headerColumn[ColumnAlias.rowIndex ] = rowIndex;
                headerColumn[ColumnAlias.colIndex ] = colIndex;

                headerColumn[ColumnAlias.children ] = children

                headerColumn[ColumnAlias.num      ] = num;
                headerColumn[ColumnAlias.parentNum] = parentNum;

                headerColumn[ColumnAlias.type     ] = type;

                let childrenCount = headerColumn[ColumnAlias.children] ? headerColumn[ColumnAlias.children].length : 0;
                let columnCount   = headerColumn[ColumnAlias.colSpan];

                headerColumnRows[rowIndex].push(headerColumn);

                let blankColumn = {};
                blankColumn[ColumnAlias.kind      ] = 'empty';
                blankColumn[ColumnAlias.name      ] = name;
                blankColumn[ColumnAlias.align     ] = align;
                blankColumn[ColumnAlias.text      ] = text;
                blankColumn[ColumnAlias.className ] = className
                blankColumn[ColumnAlias.visible   ] = false;

                blankColumn[ColumnAlias.rowSpan   ] = rowSpan;
                blankColumn[ColumnAlias.colSpan   ] = colSpan;
                blankColumn[ColumnAlias.rowIndex  ] = rowIndex;
                blankColumn[ColumnAlias.colIndex  ] = colIndex;

                blankColumn[ColumnAlias.children  ] = children

                blankColumn[ColumnAlias.num       ] = num;
                blankColumn[ColumnAlias.parentNum ] = parentNum;

                headerColumn[ColumnAlias.type     ] = type;

                //make blank column(row)
                if (childrenCount == 0) {
                    for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumnRows[i].push(blankColumn);
                }

                //make blank column(colums)
                if (columnCount > 1) {
                    for (let i =  1; i < columnCount; i++) headerColumnRows[rowIndex].push(blankColumn);
                }

                if (userColumn[ColumnAlias.children]) {
                    createHeaderColumns(userColumn[ColumnAlias.children]);
                }
            });
        }

        let headerColumnRows = [];
        let headerRowCount = grid.headerRowCount;
        for (let i = 0; i < headerRowCount; i++) headerColumnRows[i] = [];

        createHeaderColumns(grid.columns);

        headerColumnRows.map((columns, rowIndex) => {
            columns.map((column, colIndex) => {
                column[ColumnAlias.rowIndex] = rowIndex;
                column[ColumnAlias.colIndex] = colIndex;
                delete column[ColumnAlias.children];
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
                if (column[ColumnAlias.kind] != 'empty') {
                    rootColumnIndex = x;
                    rootColumnColSpan = column[ColumnAlias.colSpan];
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
    getHeaderColumn(rowIndex: number, columnIndex: number) {
        const grid = this.grid;
        return grid.header_column_table.data[rowIndex][columnIndex];
    }

    getHeaderColumnByNumber(num) {
        let selector = this.selector;
        const grid = this.grid;

        let result;
        const getParentColumn = function (headerColumn) {
            if (headerColumn[ColumnAlias.num] == num) { result = headerColumn; return; }
            if (headerColumn[ColumnAlias.children]) {
                for (let i = 0, len = headerColumn[ColumnAlias.children].length; i < len; i++) {
                    getParentColumn(headerColumn[ColumnAlias.children][i]);
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
        let kind = column[ColumnAlias.kind];
        column[property] = value;

        if (kind == ColumnKind.column) {
            let name = column[ColumnAlias.name];
            let dataRow: any = grid.column_table.selectRow(ColumnAlias.name, name);
            if (property == ColumnAlias.text) {
                dataRow.header[ColumnAlias.text] = value;
            }
            else if (property == ColumnAlias.className) {
                dataRow.header[ColumnAlias.className] = value;
            }
            else {
                dataRow.header[property] = value;
            }
        }
    }
 }


