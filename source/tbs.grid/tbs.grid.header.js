/*
@Rule :
    1. before, after : allow
 */
TbsGrid.prototype.tbs_createHeader = function (userColumns) {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_setHeader(userColumns);
}
TbsGrid.prototype.tbs_setHeader = function (userColumns) {
    /**
     * @param this.userColumns
     */
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_createHeaderColumns(userColumns);
    grid.tbs_createHeaderColumnTable();
}
/* create headerColumns, headerColumnTable */
TbsGrid.prototype.tbs_createHeaderColumns = function (userColumns) {
    /**
     * @param this.userColumns
     */
    let selector = '#' + this.gridId;
    let grid = this;

    userColumns = grid.tbs_copyJson(userColumns);
    const getChildrenColumnCount = function (userColumn) {
        let columnCount = 0;
        const getCount = function (userColumn) {
            if (userColumn[grid.column_children]) {
                for (let i = 0, len = userColumn[grid.column_children].length; i < len; i++) {
                    getCount(userColumn[grid.column_children][i]);
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
            if (userColumn[grid.column_children]) {
                for (let i = 0, len = userColumn[grid.column_children].length; i < len; i++) {
                    getDepth(userColumn[grid.column_children][i], depth + 1);
                }
            }
        }
        for (let i = 0, len = userColumns.length; i < len; i++) getDepth(userColumns[i]);
        return maxDepth;
    }
    const setNumber = function(userColumns, rowIndex, parentNum = 0) {
        userColumns.map(userColumn => {
            userColumn[grid.column_num] = num = num + 1;
            userColumn[grid.column_parentNum] = parentNum;

            userColumn[grid.column_rowIndex] = rowIndex;
            userColumn[grid.column_rowSpan] = userColumn[grid.column_children] ? 1 : headerRowCount - rowIndex;
            userColumn[grid.column_colSpan] = getChildrenColumnCount(userColumn);
            if (userColumn[grid.column_children]) {
                setNumber(userColumn[grid.column_children], rowIndex + 1, num);
            }
        });
    }

    let num = 0;
    let parentNum = 0;

    let headerRowCount = grid.headerRowCount = getTreeDepth(userColumns);
    setNumber(userColumns, 0); //num, parentNum

    grid.headerColumns = userColumns;
    grid.tbs_createHeaderColumnTable();
}
TbsGrid.prototype.tbs_createHeaderColumnTable = function () {
    /**
     * @param this.headerColumns
     * @result Table metirics.
     */
    let selector = '#' + this.gridId;
    let grid = this;

    const createHeaderColumns = function (userColumns) {
        userColumns.map(userColumn => {
            let headerColumn = {};
            let kind = userColumn[grid.column_children] ? 'header' : 'column';
            if (kind == 'column') {
                let columnName = userColumn[grid.column_name];
                let column = grid.tbs_getColumn(columnName);
                headerColumn[grid.column_name       ] = column[grid.column_name];
                headerColumn[grid.column_text       ] = column.header[grid.column_text];
                headerColumn[grid.column_align      ] = userColumn.header[grid.column_align] ? userColumn.header[grid.column_align] : 'center';
                headerColumn[grid.column_kind       ] = kind;
                headerColumn[grid.column_rowSpan    ] = userColumn[grid.column_rowSpan ];
                headerColumn[grid.column_colSpan    ] = userColumn[grid.column_colSpan ];
                headerColumn[grid.column_rowIndex   ] = userColumn[grid.column_rowIndex];
                headerColumn[grid.column_colIndex   ] = userColumn[grid.column_colIndex];
                headerColumn[grid.column_visible    ] = column[grid.column_visible ];
            }
            else {
                headerColumn[grid.column_name      ] = userColumn[grid.column_name]  ? userColumn[grid.column_name]  : '';
                headerColumn[grid.column_align     ] = userColumn[grid.column_align] ? userColumn[grid.column_align] : 'center';
                headerColumn[grid.column_children  ] = userColumn[grid.column_children  ];
                headerColumn[grid.column_text      ] = userColumn[grid.column_text      ];
                headerColumn[grid.column_kind      ] = kind;
                headerColumn[grid.column_rowSpan   ] = userColumn[grid.column_rowSpan   ];
                headerColumn[grid.column_colSpan   ] = userColumn[grid.column_colSpan   ];
                headerColumn[grid.column_rowIndex  ] = userColumn[grid.column_rowIndex  ];
                headerColumn[grid.column_colIndex  ] = userColumn[grid.column_colIndex  ];
                headerColumn[grid.column_fromcol   ] = userColumn[grid.column_fromcol   ];
                headerColumn[grid.column_tocol     ] = userColumn[grid.column_tocol     ];
                headerColumn[grid.column_visible   ] = userColumn[grid.column_visible   ];
                headerColumn[grid.column_subRowSpan] = 1;
                headerColumn[grid.column_subColSpan] = 1;
                headerColumn[grid.column_className ] = userColumn[grid.column_className ];

                if (grid.null(headerColumn[grid.column_visible])) headerColumn[grid.column_visible] = true;
            }
            headerColumn[grid.column_num       ] = userColumn[grid.column_num       ];
            headerColumn[grid.column_parentNum ] = userColumn[grid.column_parentNum ];

            let rowIndex      = headerColumn[grid.column_rowIndex];
            let childrenCount = (headerColumn[grid.column_children]) ? headerColumn[grid.column_children].length : 0;
            let columnCount   = headerColumn[grid.column_colSpan];
            headerColumnRows[rowIndex].push(headerColumn);

            let blankColumn = {};
            blankColumn[grid.column_text       ] = headerColumn[grid.column_text];
            blankColumn[grid.column_kind       ] = 'empty';
            blankColumn[grid.column_rowSpan    ] = 1;
            blankColumn[grid.column_colSpan    ] = 1;
            blankColumn[grid.column_rowIndex   ] = 0;
            blankColumn[grid.column_colIndex   ] = 0;
            blankColumn[grid.column_visible    ] = false;
            blankColumn[grid.column_align      ] = '';
            blankColumn[grid.column_subRowSpan ] = 1;
            blankColumn[grid.column_subColSpan ] = 1;

            //make blank column(row)
            if (childrenCount == 0) {
                for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumnRows[i].push(blankColumn);
            }
            //make blank column(colums)
            if (columnCount > 1) {
                for (let i =  1; i < columnCount; i++) headerColumnRows[rowIndex].push(blankColumn);
            }
            if (userColumn[grid.column_children]) {
                createHeaderColumns(userColumn[grid.column_children]);
            }
        });
    }

    let headerColumnRows = [];
    let headerRowCount = grid.headerRowCount;
    for (let i = 0; i < headerRowCount; i++) headerColumnRows[i] = [];

    createHeaderColumns(grid.headerColumns); //headerColumnRows
    headerColumnRows.map((columns, rowIndex) => {
        columns.map((column, colIndex) => {
            column[grid.column_rowIndex] = rowIndex;
            column[grid.column_colIndex] = colIndex;
            delete column[grid.column_children];
        })
    })
    grid.headerColumnTable = headerColumnRows;
}
TbsGrid.prototype.tbs_getDisplayedHeaderColumn = function(panelName = 'panel30') {
    // panel visible columns : true  / startRowIndex, lastRowIndex

    let selector = '#' + this.gridId;
    let grid = this;

    // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
    // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
    // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
    // styleLeft = parseInt(styleLeft, 10);

    let columns = this.columns;
    if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62') {
        let startColumnIndex = 0;
        let lastColumnIndex = this.fixedColumnIndex;
        return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };

        // let sumWidth = 0;
        // // get startColumnIndex
        // for (let i = 0; i < this.fixedColumnIndex; i++) {
        //     let column = columns[i];
        //     if (column[grid.column_visible] == false) continue;
        //     sumWidth += parseInt(column[grid.column_width]);
        //     if (sumWidth + styleLeft > 0) {
        //         startColumnIndex = i;
        //         break;
        //     }
        // }
        // sumWidth = rectTable.width;
        // // get lastColumnIndex
        // for (let i = this.fixedColumnIndex; i >= 0; i--) {
        //     let column = columns[i];
        //     if (column[grid.column_visible] == false) continue;
        //     sumWidth -= parseInt(column[grid.column_width]);
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
        if (this.fixedColumnIndex != -1)  startColumnIndex = this.fixedColumnIndex + 1;
        return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };

        // let sumWidth = 0;
        // for (let i = 0, len = columns.length; i < len; i++) {
        //     let column = columns[i];
        //
        //     if (column[grid.column_visible] == false) sumWidth += 0;
        //     else sumWidth += parseInt(column[grid.column_width]);
        //
        //     if (sumWidth + styleLeft > 0) {
        //         startColumnIndex = i;
        //         break;
        //     }
        // }
        // sumWidth = rectTable.width;
        // for (let i = columns.length - 1; i >= 0; i--) {
        //     let column = columns[i];
        //     if (column[grid.column_visible] == false) sumWidth -= 0;
        //     else sumWidth -= parseInt(column[grid.column_width]);
        //     if (sumWidth + styleLeft < rectPanel.width) {
        //         lastColumnIndex = i;
        //         break;
        //     }
        // }
        // return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
    }
}
/* get HeaderColumn */
TbsGrid.prototype.tbs_getHeaderColumn = function (rowIndex, columnIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    return (grid.headerColumnTable[rowIndex][columnIndex] == undefined) ? null : grid.headerColumnTable[rowIndex][columnIndex];
}
TbsGrid.prototype.tbs_getHeaderColumnByNumber = function (num) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result;
    const getParentColumn = function (headerColumn) {
        if (headerColumn[grid.column_num] == num) { result = headerColumn; return; }
        if (headerColumn[grid.column_children]) {
            for (let i = 0, len = headerColumn[grid.column_children].length; i < len; i++) {
                getParentColumn(headerColumn[grid.column_children][i]);
            }
        }
    }
    for (let i = 0; i < grid.headerColumns.length; i++) getParentColumn(grid.headerColumns[i]);
    return result;
}
TbsGrid.prototype.tbs_getHeaderPropertyByIndex = function (columnIndex, property) {
    let grid = this;

    let column = grid.columns[columnIndex];
    let result = grid.null(column.header[property]) ? null : column.header[property];
    return result;
}
TbsGrid.prototype.tbs_getHeaderProperty = function (columnName, property) {
    let grid = this;
    let columnIndex = grid.tbs_getColumnIndex(columnName);
    return grid.tbs_getHeaderPropertyByIndex(columnIndex, property);
}