class TbsGridHeader {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    createHeader(userColumns) {
        let selector = this.selector;
        let grid = this.grid;

        grid.classHeader.setHeader(userColumns);
    }

    setHeader(userColumns) {
        let selector = this.selector;
        let grid = this.grid;

        grid.classHeader.createHeaderColumns(userColumns);
        grid.classHeader.createHeaderColumnTable();
    }

    createHeaderColumns(userColumns) {
        let selector = this.selector;
        let grid = this.grid;

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
        grid.classHeader.createHeaderColumnTable();
    }

    createHeaderColumnTable() {
        let selector = this.selector;
        let grid = this.grid;

        const createHeaderColumns = function (userColumns) {
            userColumns.map(userColumn => {
                let headerColumn = {};
                let kind = userColumn[grid.column_children] ? 'header' : 'column';
                if (kind == 'column') {
                    let columnName = userColumn[grid.column_name];
                    let column = grid.classColumn.getColumn(columnName);
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

    updateHeaderFixedColumns() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.headerColumnTable.length == 1) return;
        if (grid.fixedColumnIndex >= grid.columns.length - 1) return;

        let fixedColumnIndex = grid.fixedColumnIndex;
        let columnName = grid.classColumn.getColumnName(fixedColumnIndex);

        let columnCount = 0;

        const getChildCount = function (node) {
            if (node[grid.column_children]) {
                for (let i = 0, len = node[grid.column_children].length; i < len; i++) {
                    getChildCount(node[grid.column_children][i]);
                }
            }
            else childCount += 1;
        }

        const findColumnNode = function (node, columnName) {
            if (rootNode) return;

            if (node[grid.column_children]) {
                for (let i = 0, len = node[grid.column_children].length; i < len; i++) {
                    if (grid.notNull(node[grid.column_children][i][grid.column_name])) {
                        if (node[grid.column_children][i][grid.column_name] == columnName) {
                            rootNode = node;
                            return;
                        }
                    }
                    findColumnNode(node[grid.column_children][i], columnName);
                }
            }
        }

        const removeColumnNodes = function (node) {
            if (node[grid.column_children]) {
                let parentArray = node[grid.column_children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[grid.column_children]) removeColumnNodes(childNode);
                    else {
                        let columnName = childNode[grid.column_name];
                        let columnIndex = grid.classColumn.getColumnIndex(columnName);
                        if (columnIndex > fixedColumnIndex) parentArray.splice(i, 1);
                    }
                }
            }
        }

        const removeBlankNodes = function (node) {
            if (node[grid.column_children] && node[grid.column_children].length != 0) {
                let parentArray = node[grid.column_children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[grid.column_children] && childNode[grid.column_children].length >  0) removeBlankNodes(childNode, null);
                    else if (childNode[grid.column_children] && childNode[grid.column_children].length == 0) parentArray.splice(i, 1);
                }
            }
        }

        const removePreColumnNodes = function (node) {
            if (node[grid.column_children]) {
                let parentArray = node[grid.column_children];
                for (let i = parentArray.length - 1; i >= 0; i--) {
                    let childNode = parentArray[i];

                    if (childNode[grid.column_children]) removePreColumnNodes(childNode);
                    else {
                        let columnName = childNode[grid.column_name];
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
        for (let i = 0, len = grid.headerColumns.length; i < len; i++) {
            let node = grid.headerColumns[i];
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

        //if (grid.null(rootNode[grid.column_children]) return;

        /* copy parent node */
        let newNode = grid.tbs_copyJson(rootNode);

        /* delete node */
        removeColumnNodes(rootNode);
        removeBlankNodes(rootNode);

        /* add new node */
        if (grid.headerColumns.length - 1 == arrayIndex) grid.headerColumns.push(newNode);
        else grid.headerColumns.splice(arrayIndex + 1, 0, newNode);

        /* delete node, blank node */
        for (let i = newNode[grid.column_children].length - 1; i >= 0; i--) {
            let node = newNode[grid.column_children][i];

            /* Delete column node */
            if (grid.null(node[grid.column_children])) {
                let columnName = node[grid.column_name];
                let columnIndex = grid.classColumn.getColumnIndex(columnName);
                if (columnIndex <= grid.fixedColumnIndex) newNode[grid.column_children].splice(i, 1);
                continue;
            }
            else removePreColumnNodes(node);
        }
        //removePreColumnNodes(newNode);
        //removeBlankNodes(newNode);

        for (let i = grid.headerColumns.length - 1; i >= 0; i--) {
            let node = grid.headerColumns[i];

            if (node[grid.column_children] && node[grid.column_children].length == 0) {
                grid.headerColumns.splice(i, 1);
                continue;
            }
            removeBlankNodes(node);
        }

        /* create header columns */
        grid.classHeader.createHeaderColumns(grid.headerColumns);
    }

    getDisplayedHeaderColumn(panelName = 'panel30') {
        let selector = this.selector;
        let grid = this.grid;

        // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
        // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
        // styleLeft = parseInt(styleLeft, 10);

        let columns = grid.columns;
        if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62') {
            let startColumnIndex = 0;
            let lastColumnIndex = grid.fixedColumnIndex;
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
            if (grid.fixedColumnIndex != -1)  startColumnIndex = grid.fixedColumnIndex + 1;
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

    getHeaderPropertyByIndex(columnIndex, property) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.columns[columnIndex];
        let result = grid.null(column.header[property]) ? null : column.header[property];
        return result;
    }

    getHeaderProperty(columnName, property) {
        let selector = this.selector;
        let grid = this.grid;

        let columnIndex = grid.classColumn.getColumnIndex(columnName);
        return grid.classHeader.getHeaderPropertyByIndex(columnIndex, property);
    }

    createHeaderFxiedColumnTable() {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.fixedColumnIndex != -1) return;
        if (grid.fixedColumnIndex >= grid.columns.length - 1) return;

        /* panel32 */
        let headerRows = grid.headerColumnTable;
        for (let i = 0, rowLen = headerRows.length; i < rowLen; i++) {
            let headerRow = headerRows[i];

            let sourceHeader = headerRow[grid.fixedColumnIndex];
            let nextSourceHeader = headerRow[grid.fixedColumnIndex + 1];
            let kind = header[grid.column_kind];

            if (sourceHeader[grid.column_kind] == 'column') continue;
            else if (sourceHeader[grid.column_kind] == 'header') {
                sourceHeader[grid.column_colSpan] = 1;
                continue;
            }

            /* find MasterHeader */
            let masterHeader = null;
            for (let x = grid.fixedColumnIndex; x >= 0; x--) {
                let header = headerRow[x];
                if (header[grid.column_kind] == 'header') {
                    masterHeader = header;
                    break;
                }
            }

            /* Update colSpan : colIndex  (0), 1, 2, 3, (4), span 5 fixed 2 */
            let colIndex = masterHeader[grid.column_colIndex];  // 0
            let colSpan  = masterHeader[grid.column_colSpan];   // 5
            let lastColIndex = colIndex + colSpan - 1;          // 4

            masterHeader[grid.column_colSpan] = lastColIndex - grid.fixedColumnIndex + 1;  // 3
            if (nextSourceHeader[grid.column_kind] == 'empty') {
                nextSourceHeader[grid.column_colSpan] = lastColIndex - grid.fixedColumnIndex;  // 2
                nextSourceHeader[grid.column_kind] = 'header';  // 2

            }
        }
    }
}

