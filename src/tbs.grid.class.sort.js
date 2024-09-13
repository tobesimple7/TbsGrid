class TbsGridSort {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

        this.sortColumns = [];
        this.options = {}
    }

    setSortData(data, sortColumns) {
        /**
         * @function tbs_setSortData
         *
         * @param sortColumns : [{ name : , order : }, ...]
         */
        let selector = this.selector;
        let grid = this.grid;
        let len = sortColumns.length;

        data.sort((a, b) => {
            // a : The first element
            // b : The second element
            for (let i = 0; i < len; i++) {
                let sortColumn = sortColumns[i];
                let name = sortColumn[grid.column_name];

                let column = grid.classColumn.getColumn(name);
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
    sortJsonData(data, sortColumns) {
        let selector = this.selector;
        let grid = this.grid;
        let len = sortColumns.length;
        data.sort((a, b) => {
            // a : The first element
            // b : The second element
            for (let i = 0; i < len; i++) {
                let sortColumn = sortColumns[i];
                let name = sortColumn[grid.column_name];

                let column = grid.classColumn.getColumn(name);
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

    getSortColumn(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let index = grid.classSort.getSortColumnIndex(columnName);
        return grid.classSort.sortColumns[index];
    }

    getSortColumnIndex(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let result = -1;

        for (let i = 0, len = grid.classSort.sortColumns.length; i < len; i++) {
            let sortColumn = grid.classSort.sortColumns[i];
            if (columnName == sortColumn[grid.column_name]) {
                result = i;
                break;
            }
        }
        return result;
    }

    getSortColumnName(colIndex) {
        let selector = this.selector;
        let grid = this.grid;

        return grid.classSort.sortColumns[colIndex][grid.column_name];
    }

    changeSortButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

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

        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classSort.getSortButtonList();

        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.data_user, grid.classSort.sortColumns);
    }

    addSortButton(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

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
        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.data_user, grid.classSort.sortColumns);
    }

    removeSortButton(element) {
        let selector = this.selector;
        let grid = this.grid;

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

        grid.classSort.toggleSortPlaceHolder();

        if (grid.grid_mode == grid.code_group) {
            grid.tbs_setData(grid.data_view, null, false);
        }
        else {
            if (grid.tbs_isSortableColumn()) {
                grid.classSort.setSortData(grid.data_view, grid.classSort.sortColumns);
                grid.classRange.removeRange(0, -1);
                grid.classPanel30.setDataPanel(0);
            }
        }
    }

    removeSortButtonList() {
        let selector = this.selector;
        let grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
    }

    getSortButtonList() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classSort.removeSortButtonList();

        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        let sortColumns= grid.classSort.sortColumns;

        for (let i = 0, len = sortColumns.length; i < len; i++) {
            let sortColumn = sortColumns[i];
            let button = grid.classSort.createSortButton(sortColumn[grid.column_name]);
            let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
            if (grid.null(bar)) return;
            bar.append(button);
        }
        grid.classSort.toggleSortPlaceHolder();
    }

    createSortButton(columnName) {
        let selector = this.selector;
        let grid = this.grid;

        let column = grid.classColumn.getColumn(columnName);
        let sortColumn = grid.classSort.getSortColumn(columnName);
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

    toggleSortPlaceHolder() {
        let selector = this.selector;
        let grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        let span = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
        if (buttons.length > 0) span.style.display = 'none';
        else span.style.display = '';

        if (buttons.length == 0) {
            //grid.classColumn.setColumn('group_column', 'visible', false);
            // grid.tbs_apply();
        }
        else {
            //grid.classColumn.setColumn('group_column', 'visible', true);
            // grid.tbs_apply();
        }
        grid.classControl.after_setColumnVisible();
    }

    showSortPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.tbs_setOption(grid.option_showSortPanel, true);

        let panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.classScroll.setPanelSize();
        //grid.classSort.initSortData();
        //grid.classControl.after_showSortrPanel();
        grid.classSort.getSortButtonList();
        grid.tbs_apply();
    }

    hideSortPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classSort.sortColumns = [];
        grid.tbs_setOption(grid.option_showSortPanel, false);

        let panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.classScroll.setPanelSize();
        grid.tbs_apply();
        //grid.classSort.initSortData();
        //grid.classControl.after_hideSortPanel();
    }

    initSortData() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classSort.sortColumns = [];
        grid.classSort.getSortButtonList();

        grid.data_view = grid.tbs_copyJson(grid.data_table);

        if (grid.options[grid.option_showFilterPanel]) {
            grid.classFilter.filters();
            grid.apply();
        }
        if (grid.grid_mode == grid.code_group) {
            grid.tbs_setData(grid.data_view, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.tbs_apply();
        }
    }
}