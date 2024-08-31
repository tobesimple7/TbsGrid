/**
 * @Rule
 *  -
 *  -
 */
TbsGrid.prototype.tbs_setColumnDefaultValue = function (column) {
    let selector = '#' + this.gridId;
    let grid = this;

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
        column[grid.column_thousandChar  ] = grid.gridConfig.culture.thousandChar;
        column[grid.column_decimalChar   ] = grid.gridConfig.culture.decimalChar;
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
        column[grid.column_thousandChar  ] = grid.gridConfig.culture.thousandChar;
        column[grid.column_decimalChar   ] = grid.gridConfig.culture.decimalChar;
        column[grid.column_currencyChar  ] = grid.gridConfig.culture.currencyChar;

        // column[grid.column_scaleMax   ] = null;
        // column[grid.column_scaleMin   ] = null;
    }
    else if (columnType == grid.code_date)   {
        column[grid.column_align        ] = 'center';
        column[grid.column_format       ] = grid.gridConfig.calendar.dayPattern;
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
TbsGrid.prototype.tbs_createColumn = function (userColumns) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.columns.length > 0) {
        // existing grid.colums keep
        let prevColumns = grid.tbs_copyJson(grid.columns);

        grid.userColumns = grid.tbs_copyJson(userColumns);
        userColumns = grid.userColumns;

        let columns = [];
        const getColumnList = function (userColumns) {
            const searchColumn = function (node) {
                if (!node[grid.column_children]) {
                    let columnType = node[grid.column_type];

                    let column = {};
                    column[grid.column_type] = grid.null(columnType) ? grid.code_string : columnType;
                    column = grid.tbs_setColumnDefaultValue(column); // Setting default values based on column type.

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
        grid.tbs_createHeader(grid.headerColumns);
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
                    column = grid.tbs_setColumnDefaultValue(column); // Setting default values based on column type.

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
        grid.tbs_createHeader(grid.userColumns);
    }

}
TbsGrid.prototype.tbs_addColumn = function (addColumn, targetRowIndex, targetColumnIndex, orderType) {
    /**
     * @param sourceColumn
     * @param targetColumnIndex
     * @param orderType before, after
     */
    let selector = '#' + this.gridId;
    let grid = this;

    // Validate duplication column name
    if (grid.tbs_isColumnName(addColumn[grid.column_name])) { alert('Duplication column name.'); return; }
    // Add column in grid.headerColumns
    let result = [];
    let headerColumn = grid.tbs_getHeaderColumn(targetRowIndex, targetColumnIndex);
    if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

    // Find parent Column. if not, find column
    let targetColumn;
    let parentColumn;

    let num = headerColumn[grid.column_num];
    let parentNum = headerColumn[grid.column_parentNum];

    targetColumn = grid.tbs_getHeaderColumnByNumber(num);
    if (parentNum != 0) {
        parentColumn = grid.tbs_getHeaderColumnByNumber(parentNum);
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
    grid.classControl.act_addColumn();
}
TbsGrid.prototype.tbs_removeColumn = function (targetRowIndex, targetColumnIndex) {
    /**
     * @param targetRowIndex
     * @param targetColumnIndex
     */
    let selector = '#' + this.gridId;
    let grid = this;

    // Add column in grid.headerColumns
    let result = [];
    let headerColumn = grid.tbs_getHeaderColumn(targetRowIndex, targetColumnIndex);
    if (grid.null(headerColumn)) { alert('Header column not found.'); return; }

    // Find parent Column. if not, find column
    let targetColumn;
    let parentColumn;

    let num = headerColumn[grid.column_num];
    let parentNum = headerColumn[grid.column_parentNum];

    targetColumn = grid.tbs_getHeaderColumnByNumber(num);
    if (parentNum != 0) {
        parentColumn = grid.tbs_getHeaderColumnByNumber(parentNum);
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
    grid.classControl.act_removeColumn();
}
//================================================================
TbsGrid.prototype.tbs_getColumn = function (name) {
    let cellIndex = this.tbs_getColumnIndex(name);
    return this.columns[cellIndex];
}
TbsGrid.prototype.tbs_getColumnByIndex = function (colIndex) {
    return this.columns[colIndex];
}
TbsGrid.prototype.tbs_getColumnName = function (colIndex) {
    //console.log(`colIndex ${colIndex}`)
    return this.columns[colIndex][this.column_name];
}
TbsGrid.prototype.tbs_getColumnIndex = function (name) {
    let grid = this;
    let result = null;
    if (this.columns.length == 0) return result;

    for (let i = 0, len = this.columns.length; i < len; i++) {
        let column = this.columns[i];
        if (name == column[grid.column_name]) {
            result = i;
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_getColumns = function () {
    return this.columns;
}
TbsGrid.prototype.tbs_getColumnPropertyByIndex = function (columnIndex, property) {
    let grid = this;

    let column = grid.columns[columnIndex];
    let result = grid.null(column[property]) ? null : column[property];
    return result;
}
TbsGrid.prototype.tbs_getColumnProperty = function (columnName, property) {
    let grid = this;
    let columnIndex = grid.tbs_getColumnIndex(columnName);
    return grid.null(columnIndex) ? null : grid.tbs_getColumnPropertyByIndex(columnIndex, property);
}
TbsGrid.prototype.tbs_getFirstVisibleColumnIndex = function () {
    let result = null;
    for (let i = 0; i < this.columns.length; i++ ) {
        let column = this.columns[i];
        if (column[this.column_visible]) { result = i; break; }
    }
    return result;
}
TbsGrid.prototype.tbs_getLastVisibleColumnIndex = function () {
    let result = null;
    for (let i = this.columns.length - 1; i >= 0; i-- ) {
        let column = this.columns[i];
        if (column[this.column_visible]) { result = i; break; }
    }
    return result;
}
//================================================================
TbsGrid.prototype.tbs_setColumn = function (columnName, property, value) {
    let column = this.tbs_getColumn(columnName);
    column[property] = value;
}
TbsGrid.prototype.tbs_setColumnByType = function (columnType, property, value) {
    let grid = this;
    let columns = this.columns;
    for (let i = 0, len = columns.length; i < len; i++) {
        let column = columns[i];
        if (column[grid.column_type] == columnType) column[property] = value;
    }
}
//================================================================
TbsGrid.prototype.tbs_setSortColumn = function (sortColumn) {
    this.sortColumns = Object.keys(sortColumn).length == 0 ? [] : sortColumn;
}
TbsGrid.prototype.tbs_setGroupColumn = function (groupColumn) {
    this.classGroup.groupColumns = Object.keys(groupColumn).length == 0 ? [] : groupColumn;
    if (Object.keys(this.sortColumn).length == 0) this.sortColumn = Object.keys[sortColumn].length == 0 ? [] : groupColumn;
}
//================================================================
TbsGrid.prototype.tbs_getSelectedTableCell = function (rowIndex, cellIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let td = null;
    let startRowIndex;
    let startCellIndex;
    if (arguments.length == 0) {
        startRowIndex  = this.startRowIndex;
        startCellIndex = this.startCellIndex;
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
TbsGrid.prototype.tbs_getRowIndexInTable = function (tableRowIndex, panelName = 'panel31') {
    // return : data rowIndex in existing table
    let selector = '#' + this.gridId;
    let grid = this;

    let leftPanelName = panelName;
    if (panelName == 'panel61' || panelName == 'panel62'  || panelName == 'panel60') leftPanelName = 'panel61';
    else leftPanelName = 'panel31';

    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
    //console.log(`tbs_getRowIndexInTable :: ${panelName} : rowIndex ${tableRows[tableRowIndex].childNodes[0].dataset.rowIndex} `);
    return parseInt(tableRows[tableRowIndex].childNodes[0].dataset.rowIndex);

}
TbsGrid.prototype.tbs_getLeftTableCell = function (rowIndex, panel = 'panel31') {1
    // return : find table cell by rowIndex
    let selector = '#' + this.gridId;
    let grid = this;

    let result = null;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display:"])');
    for (let i = 0, len = tableRows.length; i <len; i++) {
        let tableRow= tableRows[i];
        let index= parseInt(tableRow.childNodes[0].childNodes[0].innerText) - 1;
        if (index == rowIndex) { result = tableRow.childNodes[0]; break; }
    }
    return result;
}
TbsGrid.prototype.tbs_getJsonRow = function (jsonArray, name, value) {
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

