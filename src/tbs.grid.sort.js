import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridSort {
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
                let name = sortColumn[tbsGridNames.column.name];

                let column = grid.classColumn.getColumn(name);
                let type = column[tbsGridNames.column.type];

                if (sortColumn['order'] == 'asc') {
                    if (type == tbsGridTypes.CellType.number) {
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
                    if (type == tbsGridTypes.CellType.number){
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

    getSortRow(columnName) { return this.grid.sort_column_table.selectRow(tbsGridNames.column.name, columnName); }

    changeSortButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

        /* targetIndex <> name Index */
        let sourceIndex = null;
        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            if (name == dataRow[tbsGridNames.column.name] && i == targetIndex) return;
            else if (name == dataRow[tbsGridNames.column.name]) { sourceIndex = i;  break; }
        }

        /* new sort data */
        let dataRow = {};
        dataRow[tbsGridNames.column.name]  = name;
        dataRow[tbsGridNames.column.order] = grid.sort_column_table.selectValue(sourceIndex, tbsGridNames.column.order);

        /* update source column */
        grid.sort_column_table.updateByRowIndex(sourceIndex, tbsGridNames.column.name, '_temp_sort');

        /* create sort data */
        if (grid.null(targetIndex)) grid.sort_column_table.insert(dataRow);
        else grid.sort_column_table.insertBefore(dataRow, targetIndex);

        /* remove source */
        sourceIndex = grid.sort_column_table.selectRowIndex(tbsGridNames.column.name, '_temp_sort');
        grid.sort_column_table.remove(sourceIndex);

        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classSort.getSortButtonList();

        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    }

    addSortButton(name, text, order, targetIndex) {
        let selector = this.selector;
        let grid = this.grid;

        // add sortColumn in grid.sort_data
        // already existing column
        let dataRows = grid.sort_column_table.select(tbsGridNames.column.name, name, 1);
        if (dataRows.length > 0) return;

        let dataRow = {};
        dataRow[tbsGridNames.column.name]  = name;
        dataRow[tbsGridNames.column.order] = order;

        /* create sort data */
        console.log(name);
        if (grid.null(targetIndex)) grid.sort_column_table.insert(dataRow);
        else grid.sort_column_table.insertBefore(dataRow, targetIndex);

        // add button in group panel
        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    }

    removeSortButton(element) {
        let selector = this.selector;
        let grid = this.grid;

        // remove sortColumn in grid.sort_column_table.data
        let name = element.dataset.name;
        console.log('name :' + name);

        let rowIndex = grid.sort_column_table.selectRowIndex(tbsGridNames.column.name, name);

        console.log('rowIndex :' + rowIndex);

        grid.sort_column_table.remove(rowIndex);

        // remove button in group panel
        let button = element.parentNode;
        button.remove();

        grid.classSort.toggleSortPlaceHolder();

        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            if (grid.isSortableColumn()) {
                grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
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

        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            let columnName = dataRow[tbsGridNames.column.name];
            let button = grid.classSort.createSortButton(columnName);
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
        let sortColumn = grid.classSort.getSortRow(columnName);

        let order = sortColumn[tbsGridNames.column.order];
        let orderChar = '';
        if (order == 'asc') orderChar = '▲';
        else if (order == 'desc') orderChar = '▼';
        else orderChar = '';

        let text= document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent  = column.header[tbsGridNames.column.text] + orderChar;
        text.dataset.name = columnName;

        let icon= document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
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
            // grid.apply();
        }
        else {
            //grid.classColumn.setColumn('group_column', 'visible', true);
            // grid.apply();
        }
        grid.classControl.after_setColumnVisible();
    }

    showSortPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.setOption(grid.option_showSortPanel, true);

        let panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.classScroll.setPanelSize();
        //grid.classSort.initSortData();
        //grid.classControl.after_showSortrPanel();
        grid.classSort.getSortButtonList();
        grid.apply();
    }

    hideSortPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.sort_column_table.remove();
        grid.setOption(grid.option_showSortPanel, false);

        let panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.classScroll.setPanelSize();
        grid.apply();
        //grid.classSort.initSortData();
        //grid.classControl.after_hideSortPanel();
    }

    initSortData() {
        let selector = this.selector;
        let grid = this.grid;

        grid.sort_column_table.remove();
        grid.classSort.getSortButtonList();

        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        if (grid.options[grid.option_showFilterPanel]) {
            grid.classFilter.filters();
            grid.apply();
        }
        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }
}

