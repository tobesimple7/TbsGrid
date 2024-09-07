TbsGrid.prototype.panel70_select = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let element;
    let targetName;
    const changeEvent = function(e) {
        e.preventDefault();
        e.stopPropagation();

        let combo = e.target;

        let columnName = combo.dataset.name;
        let column = grid.tbs_getColumn(columnName);
        let columnIndex = grid.tbs_getColumnIndex(columnName);
        let columnType = column[grid.column_type];

        let filterType = combo.selectedOptions[0].value;

        let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
        let input = inputs[columnIndex];
        let word = input.value;

        if (filterType != '0' && word != '') {
            let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
            // if (columnType == grid.code_number && filterType == grid.const_filterBetween) {
            //     let arr = word.split('-');
            //     word = arr[0];
            //     if (arr.length > 1) toWord = arr[1];
            // }

            grid.tbs_setFilterColumn(column, filterType, word);
            grid.tbs_filters();
            if (grid.grid_mode == grid.code_group) grid.tbs_setData(grid.data_view, null, false);
            else grid.tbs_apply();
        }
        else {
            // delete filterColumn.
            grid.tbs_removeFilterColumn(column);
            grid.tbs_filters();
            if (grid.grid_mode == grid.code_group) grid.tbs_setData(grid.data_view, null, false);
            else grid.tbs_apply();
        }
    };
    const keyupEvent = function(e) {
        let input = e.target;

        //if (e.keyCode == 13 || e.keyCode == 9) {
        grid.FocusControl = 'filterInput';
        let columnName = input.dataset.name;
        let column = grid.tbs_getColumn(columnName);
        let columnIndex = grid.tbs_getColumnIndex(columnName);
        let columnType = column[grid.column_type];

        let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
        let combo = combos[columnIndex];
        let filterType = combo.selectedOptions[0].value;

        let word = input.value;

        if (filterType != '0') {
            let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
            grid.tbs_setFilterColumn(column, filterType, word);

            if (grid.grid_mode == grid.code_group) {
                grid.tbs_setData(grid.data_view, null, false);
            }
            else {
                grid.tbs_filters();
                grid.tbs_apply();
            }
        }
        else {
            // delete filterColumn.
            grid.tbs_removeFilterColumn(column);
            grid.tbs_filters();
            if (grid.grid_mode == grid.code_group) grid.tbs_setData(grid.data_view, null, false);
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

