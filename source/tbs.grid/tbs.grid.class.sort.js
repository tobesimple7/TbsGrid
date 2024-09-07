class TbsGridSort {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

        this.sortColumns = []; //[{ name : 'layout', order : 'asc'}, { name : 'layout', order : 'asc'}]
        this.options = {}
        this.infoText = grid.gridConfig.options.sortInfoText;
    }
}

TbsGrid.prototype.tbs_setSortData = function (data, sortColumns) {
    /**
     * @function tbs_setSortData
     *
     * @param sortColumns : [{ name : , order : }, ...]
     */
    let grid = this;
    let len = sortColumns.length;

    data.sort((a, b) => {
        // a : The first element
        // b : The second element
        for (let i = 0; i < len; i++) {
            let sortColumn = sortColumns[i];
            let name = sortColumn[grid.column_name];

            let column = grid.tbs_getColumn(name);
            let type = column[grid.column_type];

            if (sortColumn['order'] == 'asc') {
                if (type == grid.code_number || type == grid.code_currency) {
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')): 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    else if (x > y) return 1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                    else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                }
            }
            else if (sortColumn['order'] == 'desc') {
                if (type == grid.code_number || type == grid.code_currency){
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    else if (x > y) return -1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                    else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
}

// @Deprecated
TbsGrid.prototype.tbs_sortJsonData = function (data, sortColumns) {
    let grid = this;
    let len = sortColumns.length;
    data.sort((a, b) => {
        // a : The first element
        // b : The second element
        for (let i = 0; i < len; i++) {
            let sortColumn = sortColumns[i];
            let name = sortColumn[grid.column_name];

            let column = grid.tbs_getColumn(name);
            let type = column[grid.column_type];

            if (sortColumn['order'] == 'asc') {
                if (type == 'number'){
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')): 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    if (x > y) return 1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                }
            }
            else if (sortColumn['order'] == 'desc') {
                if (type == 'number'){
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    if (x > y) return -1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
}

/* Sort Column API */
TbsGrid.prototype.tbs_getSortColumn = function (columnName) {
    let index = this.tbs_getSortColumnIndex(columnName);
    return this.classSort.sortColumns[index];
}
TbsGrid.prototype.tbs_getSortColumnIndex = function (columnName) {
    let grid = this;
    let result = -1;

    for (let i = 0, len = this.classSort.sortColumns.length; i < len; i++) {
        let sortColumn = this.classSort.sortColumns[i];
        if (columnName == sortColumn[grid.column_name]) {
            result = i;
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_getSortColumnName = function (colIndex) {
    return this.classSort.sortColumns[colIndex][this.column_name];
}
TbsGrid.prototype.setSort = function (sortColumns, display) {
    let grid = this;
    let view = this.data_view;
    //=============================================================
    //for (let i = data_view.length - 1; i >= 0; i--) { if (data_view[i].mode == 'S') { data_view.splice(i, 1); }}
    //=============================================================
    // for (let i = 0, len = data_view.length; i < len; i++) {
    // 	let row = data_view[i];
    // 	if (row.mode != 'S') continue;
    // 	if (!!row.layout) row.layout = {};
    // 	for (let x = 0, len = column.length; x < len; x++) {
    // 		row.layout[column[i][grid.column_name]] = {};
    // 		row.layout[column[i][grid.column_name]][grid.column_visible] = true;
    // 		row.layout[column[i][grid.column_name]].rowSpan = 1;
    // 	}
    // }
    this.classSort.sortColumns = sortColumns;
    let len = sortColumns.length;
    if (len == 0) return;
    this.data_view.sort(function (a, b) {
        for (let i = 0; i < len; i++) {
            let row = sortColumns[i];
            let type = (grid.tbs_getColumn(row.name))[grid.column_type];
            // null value check
            if (row['order'] == 'asc') {
                if (type == 'number'){
                    let x = a[row.name] != null && isNaN(a[row.name]) == false ? Number(a[row.name].toString().replace(/\,/g, '')): 0;
                    let y = b[row.name] != null && isNaN(b[row.name]) == false ? Number(b[row.name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    if (x > y) return 1;
                }
                else {
                    if ((a[row.name] == null ? '' : a[row.name]).toString().toLowerCase() < (b[row.name] == null ? '' : b[row.name]).toString().toLowerCase()) return -1;
                    if ((a[row.name] == null ? '' : a[row.name]).toString().toLowerCase() > (b[row.name] == null ? '' : b[row.name]).toString().toLowerCase()) return 1;
                }
            }
            else if (row['order'] == 'desc') {
                if (type == 'number'){
                    let x = a[row.name] != null && isNaN(a[row.name]) == false ? Number(a[row.name].toString().replace(/\,/g, '')) : 0;
                    let y = b[row.name] != null && isNaN(b[row.name]) == false ? Number(b[row.name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    if (x > y) return -1;
                }
                else {
                    if ((a[row.name] == null ? '' : a[row.name]).toString().toLowerCase() < (b[row.name] == null ? '' : b[row.name]).toString().toLowerCase()) return 1;
                    if ((a[row.name] == null ? '' : a[row.name]).toString().toLowerCase() > (b[row.name] == null ? '' : b[row.name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
    //if (grid.grid_mode == grid.code_page) { grid.data_page = grid.tbs_copyJson(grid.data_view); }
    if (display == undefined || display) this.tbs_displayPanel30(0);
}

TbsGrid.prototype.tbs_changeSortButtonOrder = function (name, text, order, targetIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let sortColumns = grid.classSort.sortColumns;

    /* targetIndex <> name Index */
    let sourceIndex = null;
    for (let i = 0, len = sortColumns.length; i < len; i ++) {
        let sortColumn = sortColumns[i];
        if (name == sortColumn[grid.column_name] && i == targetIndex) return;
        else if (name == sortColumn[grid.column_name]) { sourceIndex = i;  break; }
    }

    /* create column */
    let column = {};
    column[grid.column_name]  = name;
    column[grid.column_text]  = text;
    column[grid.column_order] = sortColumns[sourceIndex][grid.column_order];

    /* update source column */
    sortColumns[sourceIndex][grid.column_name] = '_temp_sort';

    /* add button in sort panel */
    if (grid.notNull(targetIndex)) grid.classSort.sortColumns.splice(targetIndex, 0, column);
    else grid.classSort.sortColumns.push(column);

    /* remove source */
    for (let i = 0, len = sortColumns.length; i < len; i ++) {
        let sortColumn = sortColumns[i];
        if (sortColumn[grid.column_name] == '_temp_sort') {
            grid.classSort.sortColumns.splice(i, 1);
            break;
        }
    }

    let button = grid.tbs_createSortButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
    else bar.append(button);

    grid.tbs_getSortButtonList();

    grid.tbs_toggleSortPlaceHolder();
    grid.tbs_setSortData(grid.data_user, grid.classSort.sortColumns);
}
/* Add Button */
TbsGrid.prototype.tbs_addSortButton = function (name, text, order, targetIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    // add sortColumn in grid.classSort.sortColumns
    // already existing column
    let sortColumns = grid.classSort.sortColumns;
    for (let i = 0, len= sortColumns.length; i < len; i ++) {
        let sortColumn = sortColumns[i];
        if (name == sortColumn[grid.column_name]) {
            return;
        }
    }
    let column = {};
    column[grid.column_name]  = name;
    column[grid.column_text]  = text;
    column[grid.column_order] = order;
    if (grid.notNull(targetIndex)) grid.classSort.sortColumns.splice(targetIndex, 0, column);
    else grid.classSort.sortColumns.push(column);

    // add button in group panel
    let button = grid.tbs_createSortButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
    else bar.append(button);

    grid.tbs_toggleSortPlaceHolder();
    grid.tbs_setSortData(grid.data_user, grid.classSort.sortColumns);
}
TbsGrid.prototype.tbs_removeSortButton = function (element) {
    let selector = '#' + this.gridId;
    let grid = this;

    // remove sortColumn in grid.classSort.sortColumns
    let name = element.dataset.name;
    let columnIndex;
    let sortColumns= grid.classSort.sortColumns;
    for (let i = 0, len= sortColumns.length; i < len; i ++) {
        let sortColumn = sortColumns[i];
        if (name == sortColumn[grid.column_name]) {
            columnIndex = i;
            break;
        }
    }
    sortColumns.splice(columnIndex, 1);

    // remove button in group panel
    let button = element.parentNode;
    button.remove();

    grid.tbs_toggleSortPlaceHolder();

    if (grid.grid_mode == grid.code_group) {
        grid.tbs_setData(grid.data_view, null, false);
    }
    else {
        if (grid.tbs_isSortableColumn()) {
            grid.tbs_setSortData(grid.data_view, grid.classSort.sortColumns);
            grid.tbs_removeRange(0, -1);
            grid.tbs_displayPanel30(0);
        }
    }
}
TbsGrid.prototype.tbs_removeSortButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
    for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
}
TbsGrid.prototype.tbs_getSortButtonList = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_removeSortButtonList();

    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    let sortColumns= grid.classSort.sortColumns;

    for (let i = 0, len = sortColumns.length; i < len; i++) {
        let sortColumn = sortColumns[i];
        let button = grid.tbs_createSortButton(sortColumn[grid.column_name]);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.null(bar)) return;
        bar.append(button);
    }
    grid.tbs_toggleSortPlaceHolder();
}
TbsGrid.prototype.tbs_createSortButton = function (columnName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(columnName);
    let sortColumn = grid.tbs_getSortColumn(columnName);
    let order = sortColumn[grid.column_order];
    let orderChar = '';
    if (order == 'asc') orderChar = '▲';
    else if (order == 'desc') orderChar = '▼';
    else orderChar = '';

    let text= document.createElement('span');
    text.classList.add('tbs-grid-panel-button-text');
    text.textContent  = column.header[grid.column_text] + orderChar;
    text.dataset.name = columnName;

    let icon= document.createElement('span');
    icon.classList.add('tbs-grid-panel-button-icon');
    icon.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'tree_closed.png)';
    icon.dataset.name = columnName;

    let button = document.createElement('div');
    button.classList.add('tbs-grid-panel-button');
    button.dataset.name = columnName;

    button.append(text);
    button.append(icon);

    return button;
}
TbsGrid.prototype.tbs_toggleSortPlaceHolder = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
    let span = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
    if (buttons.length > 0) span.style.display = 'none';
    else span.style.display = '';

    if (buttons.length == 0) {
        //grid.tbs_setColumn('group_column', 'visible', false);
        // grid.tbs_apply();
    }
    else {
        //grid.tbs_setColumn('group_column', 'visible', true);
        // grid.tbs_apply();
    }
    grid.classControl.after_setColumnVisible();
}

TbsGrid.prototype.tbs_showSortPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_setOption(grid.option_sortVisible, true);

    let panel = document.querySelector(selector + ' .tbs-grid-panel90');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');
    grid.tbs_setPanelSize();
    //grid.tbs_initSortData();
    //grid.classControl.after_showSortrPanel();
    grid.tbs_getSortButtonList();
    grid.tbs_apply();
}
TbsGrid.prototype.tbs_hideSortPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.classSort.sortColumns = [];
    grid.tbs_setOption(grid.option_sortVisible, false);

    let panel = document.querySelector(selector + ' .tbs-grid-panel90');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');
    grid.tbs_setPanelSize();
    grid.tbs_apply();
    //grid.tbs_initSortData();
    //grid.classControl.after_hideSortPanel();
}

TbsGrid.prototype.tbs_initSortData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.classSort.sortColumns = [];
    grid.tbs_getSortButtonList();

    grid.data_view = grid.tbs_copyJson(grid.data_table);

    if (grid.options[grid.option_filterVisible]) {
        grid.tbs_filters();
        grid.apply();
    }
    if (grid.grid_mode == grid.code_group) {
        grid.tbs_setData(grid.data_view, null, false);
    }
    else {
        grid.tbs_removeRange(0, -1);
        grid.tbs_apply();
    }
}