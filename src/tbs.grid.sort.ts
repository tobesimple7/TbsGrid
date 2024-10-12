import {TbsGrid} from "./tbs.grid";
import {CellType, columnAlias, optionAlias } from "./tbs.grid.types";

export class TbsGridSort {
    grid: TbsGrid;
    selector: string;

    sortColumns: any[];
    options: any;

    constructor(grid: TbsGrid) {
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
        const grid = this.grid;
        let len = sortColumns.length;

        data.sort((a, b) => {
            // a : The first element
            // b : The second element
            for (let i = 0; i < len; i++) {
                let sortColumn = sortColumns[i];
                let name = sortColumn[columnAlias.name];

                let column = grid.getColumn(name);
                let type = column[columnAlias.type];

                if (sortColumn['order'] == 'asc') {
                    if (type == CellType.number) {
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
                    if (type == CellType.number){
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

    getSortRow(columnName) { return this.grid.sort_column_table.selectRow(columnAlias.name, columnName); }

    changeSortButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;

        /* targetIndex <> name Index */
        let sourceIndex = null;
        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            if (name == dataRow[columnAlias.name] && i == targetIndex) return;
            else if (name == dataRow[columnAlias.name]) { sourceIndex = i;  break; }
        }

        /* new sort data */
        let dataRow = {};
        dataRow[columnAlias.name]  = name;
        dataRow[columnAlias.order] = grid.sort_column_table.selectValue(sourceIndex, columnAlias.order);

        /* update source column */
        grid.sort_column_table.updateByRowIndex(sourceIndex, columnAlias.name, '_temp_sort');

        /* create sort data */
        if (grid.null(targetIndex)) grid.sort_column_table.insert(dataRow);
        else grid.sort_column_table.insertBefore(dataRow, targetIndex);

        /* remove source */
        sourceIndex = grid.sort_column_table.selectRowIndex(columnAlias.name, '_temp_sort');
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
        const grid = this.grid;

        // add sortColumn in grid.sort_data
        // already existing column
        let dataRows = grid.sort_column_table.selectRows(columnAlias.name, name, 1);
        if (dataRows.length > 0) return;

        let dataRow = {};
        dataRow[columnAlias.name]  = name;
        dataRow[columnAlias.order] = order;

        /* create sort data */
        //console.log(name);
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
        const grid = this.grid;

        // remove sortColumn in grid.sort_column_table.data
        let name = element.dataset.name;
        //console.log('name :' + name);

        let rowIndex = grid.sort_column_table.selectRowIndex(columnAlias.name, name);

        //console.log('rowIndex :' + rowIndex);

        grid.sort_column_table.remove(rowIndex);

        // remove button in group panel
        let button = element.parentNode;
        button.remove();

        grid.classSort.toggleSortPlaceHolder();

        if (grid.group_column_table.count() > 0) {
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
        const grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
    }

    getSortButtonList() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classSort.removeSortButtonList();

        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');

        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            let columnName = dataRow[columnAlias.name];
            let button = grid.classSort.createSortButton(columnName);
            let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
            if (grid.null(bar)) return;
            bar.append(button);
        }
        grid.classSort.toggleSortPlaceHolder();
    }

    createSortButton(columnName) {
        let selector = this.selector;
        const grid = this.grid;

        let column = grid.getColumn(columnName);
        let sortColumn = grid.classSort.getSortRow(columnName);

        let order = sortColumn[columnAlias.order];
        let orderChar = '';
        if (order == 'asc') orderChar = '▲';
        else if (order == 'desc') orderChar = '▼';
        else orderChar = '';

        let text= document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent  = column.header[columnAlias.text] + orderChar;
        text.dataset.name = columnName;

        let icon= document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[optionAlias.imageRoot] + 'remove.png)';
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
        const grid = this.grid;

        const buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        const span: any = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
        if (buttons.length > 0) span.style.display = 'none';
        else span.style.display = '';

        grid.classControl.after_setColumnVisible();
    }

    showSortPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.setOption('showSortPanel', true);

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
        const grid = this.grid;

        grid.sort_column_table.remove();
        grid.setOption('showSortPanel', false);

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
        const grid = this.grid;

        grid.sort_column_table.remove();
        grid.classSort.getSortButtonList();

        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        if (grid.options.showFilterPanel) {
            grid.classFilter.filters();
            grid.apply();
        }
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }


}

