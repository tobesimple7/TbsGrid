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
        column[grid.column_thousandChar  ] = tbsConfig.culture.thousandChar;
        column[grid.column_decimalChar   ] = tbsConfig.culture.decimalChar;
        //column[grid.column_currencyChar] = tbsConfig.culture.currencyChar;

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
        column[grid.column_thousandChar  ] = tbsConfig.culture.thousandChar;
        column[grid.column_decimalChar   ] = tbsConfig.culture.decimalChar;
        column[grid.column_currencyChar  ] = tbsConfig.culture.currencyChar;

        // column[grid.column_scaleMax   ] = null;
        // column[grid.column_scaleMin   ] = null;
    }
    else if (columnType == grid.code_date)   {
        column[grid.column_align        ] = 'center';
        column[grid.column_format       ] = tbsConfig.calendar.dayPattern;
    }
    else if (columnType == grid.code_combo)  {
        column[grid.column_align        ] = 'left';
        column[grid.column_combo        ] = {};
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

    let columns = [];
    const getColumnList = function (userColumns) {
        const searchColumn = function (node) {
            if (grid.notNull(node[grid.column_name])) {
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
    getColumnList(userColumns);
    //===================================================
    //columns validation => type = number, string, combo, date
    //===================================================
    columns.map(column => {
        if (grid.tbs_empty(column[grid.column_name])) grid.tbs_error(`column's id is not exist`);
        if (grid.tbs_empty(column[grid.column_text])) grid.tbs_error(`column's text is not exist`);
        if (grid.tbs_isNotValidColumnType(column[grid.column_type])) grid.tbs_error(`column's type [${column[grid.column_type]}] is not valid`);
        // if (column[grid.column_type] == 'number' && grid.null(column[grid.column_align])) column[grid.column_align] = 'right';
        // else if (grid.null(column[grid.column_align])) =
        // else
    });
    this.columns = columns;
}
TbsGrid.prototype.tbs_getColumn = function (name) {
    let cellIndex = this.tbs_getColumnIndex(name);
    return this.columns[cellIndex];
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
TbsGrid.prototype.tbs_getColumnByIndex = function (colIndex) {
    return this.columns[colIndex];
}
TbsGrid.prototype.tbs_getColumnName = function (colIndex) {
    return this.columns[colIndex][this.column_name];
}
TbsGrid.prototype.tbs_getColumnIndex = function (name) {
    let grid = this;

    let column= this.columns;
    for (let i = 0, len = column.length; i < len; i++) {
        if (name == column[i][grid.column_name]) {
            return i;
        }
    }
    return -1;
}
TbsGrid.prototype.tbs_getHeaderColumn = function (id) {
    let gird = this;
    let result;
    let columns = this.columns;
    for (let i = 0; i < column.length; i++) {
        if (columns[i][grid.column_name] == id) { result = columns[i]; break; }
    }
    return result;
}
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
TbsGrid.prototype.tbs_isNotValidColumnType = function (columnType) {
    let arr = ['string', 'number', 'combo', 'date'];
    return arr.indexOf(columnType) == -1 ? true : false;
}
//================================================================
//
// set column : sort, group, summary top, summary bottom
//
//================================================================
TbsGrid.prototype.tbs_setSortColumn = function (sortColumn) {
    this.sortColumn = Object.keys(sortColumn).length == 0 ? [] : sortColumn;
}
TbsGrid.prototype.tbs_setGroupColumn = function (groupColumn) {
    this.groupColumn = Object.keys(groupColumn).length == 0 ? [] : groupColumn;
    if (Object.keys(this.sortColumn).length == 0) this.sortColumn = Object.keys[sortColumn].length == 0 ? [] : groupColumn;
}
TbsGrid.prototype.tbs_setTopColumns = function (topColumns) {
    let selector = '#' + this.id;
    let grid = this;

    this.topColumns = topColumns;
}
TbsGrid.prototype.tbs_setFooterColumns = function (footerColumns) {
    let selector = '#' + this.id;
    let grid = this;

    this.footerColumns = footerColumns;
}
//================================================================
//
// Table Cell
//
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
