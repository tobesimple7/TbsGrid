import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridTree {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.options = {};
        this.options[tbsGridNames.tree.itemName] = null;
        this.options[tbsGridNames.tree.parentName] = null;
        this.options[tbsGridNames.tree.rootValue] = null;
    }

    setTreeOption(optionName, optionValue) {
        this.options[optionName] = optionValue;
    }

    createTreeData() {
        let grid = this.grid;

        grid.tree_table.remove();

        const fn_getChildrenRowIds = function(row) {
            row[tbsGridNames.column.children] = [];

            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                let dataRow = grid.view_table.data[i];
                if (row[grid.classTree.options[tbsGridNames.tree.itemName]] == dataRow[grid.classTree.options[tbsGridNames.tree.parentName]]) {
                    row[tbsGridNames.column.children].push(dataRow[tbsGridNames.column.rowId]);
                }
            }
        }

        const fn_setRelation = function(row, depth = 1) {
            fn_getChildrenRowIds(row);

            row[tbsGridNames.column.depth] = depth;
            grid.tree_table.insert(grid.copyJson(row));

            let arr = row[tbsGridNames.column.children];
            if (arr.length > 0) {
                for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                    let dataRow = grid.view_table.data[i];
                    if (arr.indexOf(dataRow[tbsGridNames.column.rowId]) != -1) fn_setRelation(dataRow, depth + 1);
                }
            }
        }

        for (let i = 0, len =grid.view_table.count(); i < len; i++) {
            let dataRow = grid.view_table.data[i];
            if (grid.classTree.options[tbsGridNames.tree.rootValue] == dataRow[grid.classTree.options[tbsGridNames.tree.parentName]]) {
                fn_setRelation(dataRow);
            }
        }
    }

    setTreeSortColumns(sortColumns) {
        let grid = this.grid;

        sortColumns.map(column => grid.sort_column_table.insert(grid.copyJson(column)))
    }

    setTreeData(data, openDepth  = 0, isFirst = true) {
        let selector = this.selector;
        let grid = this.grid;

        if (grid.null(data) || data.length == 0) return;

        /* create source_data */
        if (isFirst == true) {
            grid.source_table.remove();
            for (let i = 0, len = data.length; i < len; i++) {
                let dataRow = data[i];

                let item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    let column = grid.column_table.data[x];
                    let columnName = column[tbsGridNames.column.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }
                grid.source_table.insert(item);
            }
        }

        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        /* Filter */
        grid.classFilter.filters();

        /* Soring */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

        /* insert into tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(dataRow => grid.tree_table.insert(grid.copyJson(dataRow)));

        /* create tree data */
        grid.classTree.createTreeData();

        /* insert into view_table from tree_table */
        grid.view_table.remove();
        for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
            let dataRow = grid.tree_table.data[i];

            dataRow[tbsGridNames.column.mode]      = '';
            dataRow[tbsGridNames.column.isOpen]    = false;

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let columnName  = column[tbsGridNames.column.name];
                let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];

                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }

        /* Summary */
        // grid.classTree.getGroupSummary();

        /* create tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(dataRow => {
            let item = grid.copyJson(dataRow);
            item[tbsGridNames.column.isOpen] = false;
            grid.tree_table.insert(item);
        });

        // open depth
        if (grid.notNull(openDepth)) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                let row = grid.view_table.data[i];
                let depth = row[tbsGridNames.column.depth];
                if (openDepth != 0 && depth > openDepth) grid.view_table.remove(i);
            }
        }

        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
        if (grid.view_table.count() == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
        }
        else {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.view_table.count();
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        if (grid.options[tbsGridNames.column.autoWidth] == true)  grid.setColumnAutoWidth();

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }

    setTreeIcon(tableCell, rowIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let row = grid.getRow(rowIndex);
        let arrayChildren = row[tbsGridNames.column.children];
        let element = tableCell.querySelector('.tbs-grid-cell-div-icon');

        if (arrayChildren.length > 0) {
            let nextRow = grid.getRow(rowIndex + 1);
            if (grid.null(nextRow)) grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
            else {
                if (nextRow[grid.classTree.options[tbsGridNames.tree.parentName]] == row[grid.classTree.options['itemName']])
                    grid.classTree.toggleTreeIcon(rowIndex, element, 'open');
                else
                    grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
            }
        }
        else grid.classTree.toggleTreeIcon(rowIndex, element);
    }

    toggleTreeIcon(rowIndex, element, type) {
        let selector = this.selector;
        let grid = this.grid;

        if      (type == tbsGridNames.column.open)   element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_open.png)';
        else if (type == tbsGridNames.column.closed) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
        else element.style['backgroundImage'] = '';
    }

    getTreeFlodingStatus(tableCell) {
        let selector = this.selector;
        let grid = this.grid;

        let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
        if (grid.null(spanIcon)) return null;

        if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return tbsGridNames.column.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return tbsGridNames.column.closed;
        else return null;
    }

    setTreeFolding(tableCell) {
        let selector = this.selector;
        let grid = this.grid;

        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
        if (grid.null(spanIcon)) return;

        let folding = grid.classTree.getTreeFlodingStatus(tableCell);
        if      (folding == tbsGridNames.column.open)   grid.classTree.closeTreeRow(rowIndex);
        else if (folding == tbsGridNames.column.closed) grid.classTree.openTreeRow(rowIndex, false);

        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }

    getTreeChildrenRows(folding, rowIndex, isAll = true) {
        // folding : open, closed
        let selector = this.selector;
        let grid = this.grid;

        let dataRows= grid.view_table.data;
        let resultRows= [];
        const fn_getChildrenRows = function(row, count) {
            if (Object.keys(row).length == 0) return;

            if (count > 1) resultRows.push(grid.copyJson(row));

            let arr = row[tbsGridNames.column.children];
            if (arr.length > 0) {
                //default : get first lower rows
                if (count == 1) {
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let dataRow = grid.getTreeRowByRowId(arr[i]);
                        fn_getChildrenRows(dataRow, count + 1);
                    }
                }
                else {
                    if (folding == tbsGridNames.column.open) {
                        if (row[tbsGridNames.column.isOpen]) {
                            for (let i = 0, len = arr.length; i < len; i++) {
                                let dataRow = grid.getTreeRowByRowId(arr[i]);
                                fn_getChildrenRows(dataRow, count + 1);
                            }
                        }
                    }
                    else {
                        for (let i = 0, len = arr.length; i < len; i++) {
                            let dataRow = grid.getTreeRowByRowId(arr[i]);
                            fn_getChildrenRows(dataRow, count + 1);
                        }
                    }
                }
            }
        }
        let row = grid.getRow(rowIndex);
        fn_getChildrenRows(row, 1);
        return resultRows;
    }

    openTreeRow(rowIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let row = grid.getRow(rowIndex);
        let rowId = row[tbsGridNames.column.rowId];
        for (let i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][tbsGridNames.column.rowId])
                grid.source_table.data[i][tbsGridNames.column.isOpen] = true; // keep folding status
        }

        let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.open, rowIndex, false);
        grid.classTree.addTreeRows(rowIndex);

    }

    closeTreeRow(rowIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let row = grid.getRow(rowIndex);
        let rowId = row[tbsGridNames.column.rowId];
        for (let i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][tbsGridNames.column.rowId])
                grid.source_table.data[i][tbsGridNames.column.isOpen] = false; // keep folding status
        }

        let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.closed, rowIndex, true);
        rows.map(row => grid.classTree.removeTreeRow(row));

    }

    addTreeRows(rowIndex) {
        let selector = this.selector;
        let grid = this.grid;

        let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.open, rowIndex, false);
        for (let i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
            grid.classTree.addTreeRow(startRowIndex, rows[i]);
        }
    }

    addTreeRow(startRowIndex, row) {
        let selector = this.selector;
        let grid = this.grid;

        startRowIndex = parseInt(startRowIndex);
        if (startRowIndex == grid.view_table.count()) {
            grid.view_table.insert(row);
        }
        else {
            grid.view_table.insertBefore(row, startRowIndex);
        }
    }

    removeTreeRow(row) {
        let grid = this.grid;

        grid.view_table.removeByRowId(row[tbsGridNames.column.rowId]);

        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }
}




