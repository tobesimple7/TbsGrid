/**
 * tbs.grid.header.js
 *
 */
TbsGrid.prototype.tbs_createHeader = function (userColumns, userHeaders = []) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setHeaderByTree(userColumns);
}
TbsGrid.prototype.tbs_setHeaderByTree = function (userColumns) {
    let selector = '#' + this.gridId;
    let grid = this;

    let userHeaderColumns = JSON.parse(JSON.stringify(userColumns))
    let colIndex = -1;
    const fn_getTreeDepth = function(columns) {
        let column_children = grid.column_children;
        const getDepth = (column) => {
            return 1 + (column[column_children] ? Math.max(...column[column_children].map(getDepth)) : 0);
        }
        let depthList = [];
        for (let i = 0, len = columns.length; i < len; i++) {
            depthList.push(getDepth(columns[i]));
        }
        return Math.max(0, ...depthList);
    }
    const fn_setNumber = function(columns, rowIndex, parentNum = 0) {
        columns.map(column => {
            column[grid.column_num] = num = num + 1;
            column[grid.column_parentNum] = parentNum;

            column[grid.column_rowIndex] = rowIndex;
            column[grid.column_rowSpan] = column[grid.column_children] ? 1 : headerRowCount - rowIndex;
            column[grid.column_colSpan] = column[grid.column_children] ? column[grid.column_children].length : 1;
            if (column[grid.column_children]) {
                //column[grid.column_children].map(column => column[grid.column_parentNum] = num);
                fn_setNumber(column[grid.column_children], rowIndex + 1, num);
            }
        });
    }
    const fn_createHeaderColumns = function (columns) {
        columns.map(column => {
            let headerColumn = {};
            let kind = column[grid.column_name] ? 'column' : 'header';
            if (kind == 'column') {
                column2 = grid.tbs_getColumn(column[grid.column_name]);
                headerColumn[grid.column_name         ] = column2[grid.column_name         ];
                headerColumn[grid.column_text       ] = column2[grid.column_text       ];
                headerColumn[grid.column_type       ] = column2[grid.column_type       ];
                headerColumn[grid.column_width      ] = column2[grid.column_width      ];
                headerColumn[grid.column_editable   ] = column2[grid.column_editable   ];
                headerColumn[grid.column_visible    ] = column2[grid.column_visible    ];
                headerColumn[grid.column_align      ] = column2[grid.column_align      ];
                headerColumn[grid.column_scale      ] = column2[grid.column_scale      ];
                headerColumn[grid.column_roundType  ] = column2[grid.column_roundType  ];
                headerColumn[grid.column_fixedScale ] = column2[grid.column_fixedScale ];
                headerColumn[grid.column_scaleMax   ] = column2[grid.column_scaleMax   ];
                headerColumn[grid.column_scaleMin   ] = column2[grid.column_scaleMin   ];
                headerColumn[grid.column_commaUnit      ] = column2[grid.column_commaUnit      ];
                headerColumn[grid.column_showZero       ] = column2[grid.column_showZero       ];
                headerColumn[grid.column_resizable  ] = column2[grid.column_resizable  ];
                headerColumn[grid.column_sortable   	] = column2[grid.column_sortable   	   ];
                headerColumn[grid.column_summaryType    ] = column2[grid.column_summaryType    ];
                headerColumn[grid.column_required   ] = column2[grid.column_required   ];
                headerColumn[grid.column_autoWidth   ] = column2[grid.column_autoWidth   ];
                headerColumn[grid.column_combo      ] = column2[grid.column_combo      ];
                headerColumn[grid.column_format     ] = column2[grid.column_format     ];

                headerColumn[grid.column_kind       ] = kind;
                headerColumn[grid.column_rowSpan    ] = column[grid.column_rowSpan    ];
                headerColumn[grid.column_colSpan    ] = column[grid.column_colSpan    ];
                headerColumn[grid.column_rowIndex   ] = column[grid.column_rowIndex   ];
                headerColumn[grid.column_colIndex   ] = column[grid.column_colIndex   ];
                headerColumn[grid.header_name         ] = '';
                headerColumn[grid.header_align      ] = column[grid.header_align] ? column[grid.header_align] : 'center';
            }
            else {
                headerColumn[grid.header_name        ] = column[grid.header_name]    ? column[grid.header_name]    : '';
                headerColumn[grid.header_align     ] = column[grid.header_align] ? column[grid.header_align] : 'center';

                headerColumn[grid.column_children  ] = column[grid.column_children  ];
                headerColumn[grid.column_text      ] = column[grid.column_text      ];
                headerColumn[grid.column_kind      ] = kind;
                headerColumn[grid.column_rowSpan   ] = column[grid.column_rowSpan   ];
                headerColumn[grid.column_colSpan   ] = column[grid.column_colSpan   ];
                headerColumn[grid.column_rowIndex  ] = column[grid.column_rowIndex  ];
                headerColumn[grid.column_colIndex  ] = column[grid.column_colIndex  ];
                headerColumn[grid.column_fromcol   ] = column[grid.column_fromcol   ];
                headerColumn[grid.column_tocol     ] = column[grid.column_tocol     ];
                headerColumn[grid.column_visible   ] = column[grid.column_visible   ];
                headerColumn[grid.column_type      ] = column[grid.column_type      ];
                headerColumn[grid.column_width     ] = column[grid.column_width     ];
                headerColumn[grid.column_subRowSpan] = 1;
                headerColumn[grid.column_subColSpan] = 1;

                if (grid.null(headerColumn[grid.column_visible])) headerColumn[grid.column_visible] = true;
            }
            headerColumn[grid.column_num       ] = column[grid.column_num       ];
            headerColumn[grid.column_parentNum ] = column[grid.column_parentNum ];

            let rowIndex      = headerColumn[grid.column_rowIndex];
            let childrenCount = (headerColumn[grid.column_children]) ? headerColumn[grid.column_children].length : 0;
            headerColumns[rowIndex].push(headerColumn);

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
                for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumns[i].push(blankColumn);
            }
            //make blank column(colums)
            if (childrenCount > 1) {
                for (let i =  1; i < childrenCount; i++) headerColumns[rowIndex].push(blankColumn);
            }
            if (column['children']) {
                fn_createHeaderColumns(column[grid.column_children]);
            }
        });
    }

    let num = 0;
    let parentNum = 0;
    let headerColumns= [];  //flatNodes
    let headerRowCount = this.headerRowCount = fn_getTreeDepth(userHeaderColumns);

    fn_setNumber(userHeaderColumns, 0); //num, parentNum
    for (let i = 0; i < headerRowCount; i++) headerColumns[i] = [];
    fn_createHeaderColumns(userHeaderColumns); //headerColumns

    headerColumns.map((columns, rowIndex) => {
        columns.map((column, colIndex) => {
            column[grid.column_rowIndex] = rowIndex;
            column[grid.column_colIndex] = colIndex;
            delete column[grid.column_children];
        })
    })
    this.headerColumns = headerColumns;
}
TbsGrid.prototype.tbs_getDisplayedHeaderColumn = function(panelName = 'panel30') {
    // panel visible columns : true  / startRowIndex, lastRowIndex
    let selector = '#' + this.gridId;
    let grid = this;

    let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
    let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
    let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
    styleLeft = parseInt(styleLeft, 10);

    let columns = this.columns;
    if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62') {
        let startColumnIndex = 0;
        let lastColumnIndex = this.fixedColumnIndex;

        let sumWidth = 0;
        // get startColumnIndex
        for (let i = 0; i < this.fixedColumnIndex; i++) {
            let column = columns[i];
            if (column[grid.column_visible] == false) continue;
            sumWidth += parseInt(column[grid.column_width]);
            if (sumWidth + styleLeft > 0) {
                startColumnIndex = i;
                break;
            }
        }
        sumWidth = rectTable.width;
        // get lastColumnIndex
        for (let i = this.fixedColumnIndex; i >= 0; i--) {
            let column = columns[i];
            if (column[grid.column_visible] == false) continue;
            sumWidth -= parseInt(column[grid.column_width]);
            if (sumWidth + styleLeft < rectPanel.width) {
                lastColumnIndex = i;
                break;
            }
        }
        return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
    }
    else {
        let startColumnIndex = 0;
        let lastColumnIndex = columns.length - 1;

        let sumWidth = 0;
        for (let i = 0, len = columns.length; i < len; i++) {
            let column = columns[i];
            if (column[grid.column_visible] == false) continue;
            sumWidth += parseInt(column[grid.column_width]);
            if (sumWidth + styleLeft > 0) {
                startColumnIndex = i;
                break;
            }
        }
        sumWidth = rectTable.width;
        for (let i = columns.length - 1; i >= 0; i--) {
            let column = columns[i];
            if (column[grid.column_visible] == false) continue;
            sumWidth -= parseInt(column[grid.column_width]);
            if (sumWidth + styleLeft < rectPanel.width) {
                lastColumnIndex = i;
                break;
            }
        }
        return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
    }
}