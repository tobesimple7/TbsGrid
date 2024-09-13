 class TbsGridColumn {

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }

    setColumnDefaultValue(column) {
        let selector = this.selector;
        let grid = this.grid;

        let columnType = column[grid.column_type];
        /*
        column[grid.column_width        ] = null;
        column[grid.column_editable     ] = null;
        column[grid.column_visible      ] = null;
        column[grid.column_align        ] = null;
        column[grid.column_scale        ] = null;
        column[grid.column_roundType    ] = null;
        column[grid.column_fixedScale   ] = null;
        column[grid.column_scaleMax     ] = null;
        column[grid.column_scaleMin     ] = null;
        column[grid.column_commaUnit        ] = null;
        column[grid.column_zero         ] = null;
        column[grid.column_sortable     ] = null;
        column[grid.column_resizable    ] = null;
        column[grid.column_movable      ] = null;
        column[grid.column_autoResizable] = null;
        column[grid.column_autoWidth    ] = null;
        column[grid.column_combo        ] = null;
        column[grid.column_format       ] = null;
        */
        column[grid.column_width        ] = 100;
        column[grid.column_editable     ] = null;
        column[grid.column_visible      ] = true;
        // column[grid.column_sortable     ] = null;
        // column[grid.column_resizable    ] = null;
        // column[grid.column_movable      ] = null;
        // column[grid.column_autoResizable] = null;
        // column[grid.column_autoWidth    ] = null;

        if (columnType == grid.code_string) {
         column[grid.column_align        ] = 'left';
        }
        else if (columnType == grid.code_number) {
         column[grid.column_align         ] = 'right';
         column[grid.column_scale         ] = '18,0';
         column[grid.column_roundType     ] = 'round';
         column[grid.column_fixedScale    ] = true;
         column[grid.column_showZero      ] = false;
         column[grid.column_commaUnit     ] = 3; // Fixed value.
         column[grid.column_thousandChar  ] = grid.getConfigCulture('thousandChar');
         column[grid.column_decimalChar   ] = grid.getConfigCulture('decimalChar');
         //column[grid.column_summaryType   ] = '';
         //column[grid.column_currencyChar] = grid.gridConfig.culture.currencyChar;

         // column[grid.column_scaleMax   ] = null;
         // column[grid.column_scaleMin   ] = null;
        }
        else if (columnType == grid.code_currency) {
         column[grid.column_align         ] = 'right';
         column[grid.column_scale         ] = '18,0';
         column[grid.column_roundType     ] = 'round';
         column[grid.column_fixedScale    ] = true;
         column[grid.column_showZero      ] = false;
         column[grid.column_commaUnit     ] = 3; // Fixed value.
         column[grid.column_thousandChar  ] = grid.getConfigCulture('thousandChar');
         column[grid.column_decimalChar   ] = grid.getConfigCulture('decimalChar');
         column[grid.column_currencyChar  ] = grid.getConfigCulture('currencyChar');
         //column[grid.column_summaryType   ] = '';

         // column[grid.column_scaleMax   ] = null;
         // column[grid.column_scaleMin   ] = null;
        }
        else if (columnType == grid.code_date)   {
         column[grid.column_align        ] = 'center';
         column[grid.column_format       ] = grid.getConfigCalendar('dayPattern');
        }
        else if (columnType == grid.code_combo)  {
         column[grid.column_align        ] = 'left';
         //column[grid.column_combo        ] = {};
        }
        // else {
        //     column[grid.column_type         ] = null;
        //     column[grid.column_width        ] = null;
        //     column[grid.column_editable     ] = null;
        //     column[grid.column_visible      ] = null;
        //     column[grid.column_align        ] = null;
        //     column[grid.column_scale        ] = null;
        //     column[grid.column_roundType    ] = null;
        //     column[grid.column_fixedScale   ] = null;
        //     column[grid.column_scaleMax     ] = null;
        //     column[grid.column_scaleMin     ] = null;
        //     column[grid.column_commaUnit        ] = null;
        //     column[grid.column_zero         ] = null;
        //     column[grid.column_combo        ] = null;
        //     column[grid.column_format       ] = null;
        // }
        return column;
    }

    createColumn(userColumns) {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.columns.length > 0) {
            // existing grid.colums keep
            let prevColumns = grid.tbs_copyJson(grid.columns);

            grid.userColumns = grid.tbs_copyJson(userColumns);
            userColumns = grid.userColumns;

            let columns = [];
            const getColumnList = function (userColumns) {
             const searchColumn = function (node) {
                 if (grid.null(node)) return;
                 if (grid.null(node[grid.column_children])) {
                     let columnType = node[grid.column_type];

                     let column = {};
                     column[grid.column_type] = grid.null(columnType) ? grid.code_string : columnType;
                     column = grid.classColumn.setColumnDefaultValue(column); // Setting default values based on column type.

                     for (let key in node) {
                         if (grid.null(key)) continue
                         column[key] = node[key];
                     }
                     columns.push(column);
                 }
                 else node[grid.column_children].map(n => searchColumn(n));
             }
             userColumns.map(userColumn => searchColumn(userColumn, null));
            }
            getColumnList(grid.userColumns);

            columns.map(column => {
             if (grid.tbs_empty(column[grid.column_name])) grid.tbs_error(`column's id is not exist`);
             if (grid.tbs_empty(column.header[grid.column_text])) grid.tbs_error(`column's text is not exist`);
             //if (grid.tbs_isNotValidColumnType(column[grid.column_type])) grid.tbs_error(`column's type [${column[grid.column_type]}] is not valid`);
            });

            let result = [];
            for (let i = 0; i < columns.length; i++) {
                let column = columns[i];
                let addColumn = column;
                for (let x = 0; x < prevColumns.length; x++) {
                    let prevColumn = prevColumns[x];
                    if (column[grid.column_name] == prevColumn[grid.column_name]) addColumn = prevColumn;
                }
                result.push(grid.tbs_copyJson(addColumn));
            }
            grid.columns = result;
            grid.classHeader.createHeader(grid.headerColumns);
        }
        else {
            grid.userColumns = grid.tbs_copyJson(userColumns);
            userColumns = grid.userColumns;

            let columns = [];
            const getColumnList = function (userColumns) {
                const searchColumn = function (node) {
                    if (!node[grid.column_children]) {
                        let columnType = node[grid.column_type];

                        let column = {};
                        column[grid.column_type] = grid.null(columnType) ? grid.code_string : columnType;
                        column = grid.classColumn.setColumnDefaultValue(column); // Setting default values based on column type.

                        for (let key in node) {
                            if (grid.null(key)) continue
                            column[key] = node[key];
                        }
                        columns.push(column);
                    }
                    else node[grid.column_children].map(n => searchColumn(n));
                }
                userColumns.map(userColumn => searchColumn(userColumn, null));
            }
            getColumnList(grid.userColumns);

            columns.map(column => {
                if (grid.tbs_empty(column[grid.column_name])) grid.tbs_error(`column's id is not exist`);
                if (grid.tbs_empty(column.header[grid.column_text])) grid.tbs_error(`column's text is not exist`);
                if (grid.tbs_isNotValidColumnType(column[grid.column_type])) grid.tbs_error(`column's type [${column[grid.column_type]}] is not valid`);
            });
            grid.columns = columns;
            grid.classHeader.createHeader(grid.userColumns);
        }
    }

    addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) {
        let selector = this.selector;
        let grid = this.grid;

        // Validate duplication column name
        if (grid.tbs_isColumnName(addColumn[grid.column_name])) { alert('Duplication column name.'); return; }
        // Add column in grid.headerColumns
        let result = [];
        let headerColumn = grid.classHeader.getHeaderColumn(targetRowIndex, targetColumnIndex);
        if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

        // Find parent Column. if not, find column
        let targetColumn;
        let parentColumn;

        let num = headerColumn[grid.column_num];
        let parentNum = headerColumn[grid.column_parentNum];

        targetColumn = grid.classHeader.getHeaderColumnByNumber(num);
        if (parentNum != 0) {
            parentColumn = grid.classHeader.getHeaderColumnByNumber(parentNum);
            parentColumn = parentColumn.childNodes; // array
        }
        else parentColumn = grid.headerColumns; // array

        // Find targetColumnIndex
        let targetIndex;
        for (let i = 0; i < parentColumn.length; i++) {
            let node = parentColumn[i];
            if (num == node[grid.column_num]) targetIndex = i;
        }
        if (orderType == grid.code_before) {
            parentColumn.splice(targetIndex, 0, addColumn);
        }
        else if (orderType == grid.code_after) {
            targetIndex += 1;
            if (targetIndex >= parentColumn.length) parentColumn.push(addColumn);
            else parentColumn.splice(targetIndex, 0, addColumn);
        }
        grid.classControl.after_addColumn();
    }

    removeColumn(targetRowIndex, targetColumnIndex) {
        let selector = this.selector;
        let grid = this.grid;

        // Add column in grid.headerColumns
        let result = [];
        let headerColumn = grid.classHeader.getHeaderColumn(targetRowIndex, targetColumnIndex);
        if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

        // Find parent Column. if not, find column
        let targetColumn;
        let parentColumn;

        let num = headerColumn[grid.column_num];
        let parentNum = headerColumn[grid.column_parentNum];

        targetColumn = grid.classHeader.getHeaderColumnByNumber(num);
        if (parentNum != 0) {
            parentColumn = grid.classHeader.getHeaderColumnByNumber(parentNum);
            parentColumn = parentColumn.childNodes; // array
        }
        else parentColumn = grid.headerColumns; // array

        // Find targetColumnIndex
        let targetIndex;
        for (let i = 0; i < parentColumn.length; i++) {
            let node = parentColumn[i];
            if (num == node[grid.column_num]) targetIndex = i;
        }
        parentColumn.splice(targetIndex, 1);
        grid.classControl.after_removeColumn();
    }

    changeColumnOrder(movingColumn, targetColumn, orderType) {
        let selector = this.selector;
        let grid = this.grid;

        movingColumn = grid.tbs_copyJson(movingColumn);
        targetColumn = grid.tbs_copyJson(targetColumn);

        /* find parentNode : movingColumnName */
        const findParentNode = function (node, pNode, columnNumber) {
            if (parentNode) return;
            else if (node[grid.column_num] == columnNumber) {
                parentNode = pNode;
            }
            else if (node[grid.column_children]) {
                for (let i = 0, len = node[grid.column_children].length; i < len; i++) {
                    findParentNode(node[grid.column_children][i], node, columnNumber);
                }
            }
        }
        let prevColumns = grid.tbs_copyJson(grid.columns);

        let parentNode = null;
        let parentArray = null;
        let movingColumnNumber = movingColumn[grid.column_num];
        let targetColumnNumber = targetColumn[grid.column_num];

        for (let i = 0, len = grid.headerColumns.length; i < len; i++) {
            let node = grid.headerColumns[i];

            if (node[grid.column_num] == movingColumnNumber) {
                parentArray = grid.headerColumns;
                break;
            }

            findParentNode(node, grid.headerColumns, movingColumnNumber);
            if (parentNode) {
                parentArray = parentNode[grid.column_children];
                break;
            }
        }

        if (grid.null(parentArray)) return;

        /* Delete movingColumnName node */
        let newNode = null;
        for (let i = parentArray.length - 1; i >= 0; i--) {
            let item = parentArray[i];
            if (item[grid.column_num] == movingColumnNumber) {
                newNode = grid.tbs_copyJson(item);
                parentArray.splice(i, 1);
                break;
            }
        }

        /* Add node before, after targetColumn */
        let targetIndex = null;
        for (let i = 0, len = parentArray.length; i < len; i++) {
            let item = parentArray[i];
            if (item[grid.column_num] == targetColumnNumber) {
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

    getColumn(name) {
        let grid = this.grid;

        let cellIndex = grid.classColumn.getColumnIndex(name);
        return grid.columns[cellIndex];
    }

    getColumnByIndex(colIndex) {
        let grid = this.grid;

        return grid.columns[colIndex];
    }

    getColumnName(colIndex) {
        let grid = this.grid;
        //console.log(`colIndex ${colIndex}`)
        return grid.columns[colIndex][grid.column_name];
    }

    getColumnIndex(name) {
        let selector = this.selector;
        let grid = this.grid;

        let result = null;
        if (grid.columns.length == 0) return result;

        for (let i = 0, len = grid.columns.length; i < len; i++) {
            let column = grid.columns[i];
            if (name == column[grid.column_name]) {
                result = i;
                break;
            }
        }
        return result;
    }

    getColumns() {
        let grid = this.grid;
        return grid.columns;
    }

    getColumnPropertyByIndex(columnIndex, property) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.columns[columnIndex];
        let result = grid.null(column[property]) ? null : column[property];
        return result;
    }

    getColumnProperty(columnName, property) {
        let selector = this.selector;
        let grid = this.grid;
        let columnIndex = grid.classColumn.getColumnIndex(columnName);
        return grid.null(columnIndex) ? null : grid.classColumn.getColumnPropertyByIndex(columnIndex, property);
    }

    getFirstVisibleColumnIndex() {
        let grid = this.grid;

        let result = null;
        for (let i = 0; i < grid.columns.length; i++ ) {
            let column = grid.columns[i];
            if (column[grid.column_visible]) { result = i; break; }
        }
        return result;
    }

    getLastVisibleColumnIndex() {
        let grid = this.grid;

        let result = null;
        for (let i = grid.columns.length - 1; i >= 0; i-- ) {
            let column = grid.columns[i];
            if (column[grid.column_visible]) { result = i; break; }
        }
        return result;
    }

    setColumn(columnName, property, value) {
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        column[property] = value;
        if (property == grid.column_visible) {}
    }
    
    setColumnByType(columnType, property, value) {
        let selector = this.selector;
        let grid = this.grid;

        let columns = grid.columns;
        for (let i = 0, len = columns.length; i < len; i++) {
            let column = columns[i];
            if (column[grid.column_type] == columnType) column[property] = value;
        }
    }
    
    setSortColumn(sortColumn) {
        let grid = this.grid;
        grid.classSort.sortColumns = Object.keys(sortColumn).length == 0 ? [] : sortColumn;
    }

    setGroupColumn(groupColumn) {
        let grid = this.grid;

        grid.classGroup.groupColumns = Object.keys(groupColumn).length == 0 ? [] : groupColumn;
        if (Object.keys(grid.sortColumn).length == 0) grid.sortColumn = Object.keys[sortColumn].length == 0 ? [] : groupColumn;
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
        //console.log(`classColumn.getRowIndexInTable :: ${panelName} : rowIndex ${tableRows[tableRowIndex].childNodes[0].dataset.rowIndex} `);
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

        if (fixedColumnIndex >= grid.columns.length) { grid.fixedColumnIndex = -1; return; }

        grid.fixedColumnIndex = fixedColumnIndex
        grid.classHeader.updateHeaderFixedColumns();
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.tbs_apply();
    }

    removeFixedColumn() {
        let selector = this.selector;
        let grid = this.grid;

        grid.fixedColumnIndex = -1;

        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.tbs_apply();
    }
 }
