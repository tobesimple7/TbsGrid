class TbsGridPanel70 extends TbsGridPanelBase {

    constructor(grid) {
        super(grid);
        this.panelName  = 'panel70';

        this.panelName1 = 'panel71';
        this.panelName2 = 'panel72';
        this.panelName0 = 'panel70';
    }

    createHtml(parentElement) {
        let grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group71">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel71"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel72"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group70">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel70"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }

    setDataPanel() {
        let selector = this.selector;
        let grid = this.grid;

        this.setDataPanel2({panelName: 'panel72'});
        this.setDataPanel0({panelName: 'panel70'});
    }

    setDataPanel2(param) {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName2;

        if (grid.options[grid.option_showFilterPanel] != true) return;

        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;


        /* table thead */
        grid.classRender.setTableHead(panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
        let tableRow  = tableRows[0];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[grid.column_name];

            grid.classRender.start(panelName, tableCell, grid.columns[x], 0, x);

            let combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';

            if(grid.tbs_isFilterColumnName(columnName)) {
                let filterColumn = grid.classFilter.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }
        // on fixed columns
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);

        tableRow = tableRows[1];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[grid.column_name];

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, grid.columns[x], 1, x);

            // Set input
            let input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if(grid.tbs_isFilterColumnName(columnName)) {
                let filterColumn = grid.classFilter.getFilterColumn(columnName);
                input.value = filterColumn[grid.const_filterValue];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(input);
        }

        /* on fixed columns */
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);
    }

    setDataPanel0(param) {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName0;

        if (grid.options[grid.option_showFilterPanel] != true) return;

        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRender.setTableHead(panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
        let tableRow  = tableRows[0];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[grid.column_name];

            grid.classRender.start(panelName, tableCell, grid.columns[x], 0, x);

            let combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';

            if(grid.tbs_isFilterColumnName(columnName)) {
                let filterColumn = grid.classFilter.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }

        // on fixed columns
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);

        tableRow = tableRows[1];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[grid.column_name];

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, grid.columns[x], 1, x);

            // Set input
            let input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if(grid.tbs_isFilterColumnName(columnName)) {
                let filterColumn = grid.classFilter.getFilterColumn(columnName);
                input.value = filterColumn[grid.const_filterValue];
            };
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(input);
        }

        /* on fixed columns */
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);

        grid.classPanel70.panel70_select('panel70');
        grid.classPanel70.panel70_select('panel72');
    }

    panel70_select(panelName) {
        let selector = this.selector;
        let grid = this.grid;

        let element;
        let targetName;
        const changeEvent = function(e) {
            e.preventDefault();
            e.stopPropagation();

            let combo = e.target;

            let columnName = combo.dataset.name;
            let column = grid.classColumn.getColumn(columnName);
            let columnIndex = grid.classColumn.getColumnIndex(columnName);
            let columnType = column[grid.column_type];

            let filterType = combo.selectedOptions[0].value;

            let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
            let input = inputs[columnIndex];
            let word = input.value;

            if (filterType == '8') {
                input.value = '';
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) grid.tbs_setData(grid.data_view, null, false);
                else grid.tbs_apply();
            }
            else if (filterType != '0' && word != '') {
                let filterColumn = grid.classColumn.getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) grid.tbs_setData(grid.data_view, null, false);
                else grid.tbs_apply();
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.classFilter.filters();
                if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) grid.tbs_setData(grid.data_view, null, false);
                else grid.tbs_apply();
            }
        };
        const keyupEvent = function(e) {
            let input = e.target;

            //if (e.keyCode == 13 || e.keyCode == 9) {
            grid.FocusControl = 'filterInput';
            let columnName = input.dataset.name;
            let column = grid.classColumn.getColumn(columnName);
            let columnIndex = grid.classColumn.getColumnIndex(columnName);
            let columnType = column[grid.column_type];

            let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
            let combo = combos[columnIndex];
            let filterType = combo.selectedOptions[0].value;

            let word = input.value;

            if (filterType != '0') {
                let filterColumn = grid.classColumn.getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
                grid.classFilter.setFilterColumn(column, filterType, word);

                if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) grid.tbs_setData(grid.data_view, null, false);
                else {
                    grid.classFilter.filters();
                    grid.tbs_apply();
                }
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.classFilter.filters();
                if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) grid.tbs_setData(grid.data_view, null, false);
                else grid.tbs_apply();
            }
            if (e.keyCode == 13 || e.keyCode == 9) { grid.FocusControl = ''; }
        };
        const blurEvent = function(e) {
            grid.FocusControl = '';
        };
        // let panel70 = document.querySelectorAll(selector + ' .tbs-grid-panel70');
        //
        // panel70.addEventListener('keyup', keyupEvent);
        // panel70.addEventListener('change', changeEvent);

        let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
        let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');

        for (let i = 0, len = inputs.length; i < len; i++) {
            inputs[i].addEventListener('keyup', keyupEvent);
            inputs[i].addEventListener('blur', blurEvent);
            combos[i].addEventListener('change', changeEvent);
        }
    }
}
