TbsGrid.prototype.panel70_select = function() {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.panel70_select2();
}
TbsGrid.prototype.panel70_select1 = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let element;
    let targetName;
    const mouseDownEvent = function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        let icon = e.target;
        let name = icon.dataset.name;
        let column = grid.tbs_getColumn(name);

        let input = icon.parentNode.querySelector('.tbs-grid-cell-filter-input');
        grid.tbsGridFilter = new TbsGridFilter(grid, icon, input, column);
    };
    const mouseUpEvent = function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
    };
    const keyupEvent = function(e) {
        // filter
        let input = e.target;
        let name = input.dataset.name;
        let column = grid.tbs_getColumn(name);
        let columnType = column[grid.column_type];

        let word = input.value;
        let toWord = null;

        if (word != '') {
            let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
            let filterType = grid.null(filterColumn) ? grid.const_filterEqual : filterColumn.type;

            if (columnType == grid.code_number && filterType == grid.const_filterBetween) {
                let arr = word.split('-');
                word = arr[0];
                if (arr.length > 1) toWord = arr[1];
            }

            grid.tbs_setFilterColumn(column, filterType, word, toWord);
            grid.tbs_filters();
        }
        else {
            // delete filterColumn.
            grid.tbs_removeFilterColumn(column);
            grid.tbs_filters();
        }
    };
    const blurEvent = function(e) {

    };
    let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
    let icons = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-icon');
    for (let i = 0, len = inputs.length; i < len; i++) {
        inputs[i].addEventListener('keyup', keyupEvent);
        inputs[i].addEventListener('blur', blurEvent);
        icons[i].addEventListener('mousedown', mouseDownEvent);
        icons[i].addEventListener('mouseup', mouseUpEvent);
    }
}
TbsGrid.prototype.panel70_select2 = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let element;
    let targetName;
    const changeEvent = function(e) {
        let combo = e.target;

        let columnName = combo.dataset.name;
        let column = grid.tbs_getColumn(columnName);
        let columnIndex = grid.tbs_getColumnIndex(columnName);
        let columnType = column[grid.column_type];

        let filterType = combo.selectedOptions[0].value;

        let inputs = document.querySelectorAll(selector + ' .tbs-grid-cell-filter-input');
        let input = inputs[columnIndex];
        let word = input.value;
        let toWord = null;

        if (word != '') {
            let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
            if (columnType == grid.code_number && filterType == grid.const_filterBetween) {
                let arr = word.split('-');
                word = arr[0];
                if (arr.length > 1) toWord = arr[1];
            }

            grid.tbs_setFilterColumn(column, filterType, word, toWord);
            grid.tbs_filters();
        }
        else {
            // delete filterColumn.
            grid.tbs_removeFilterColumn(column);
            grid.tbs_filters();
        }
    };
    const keyupEvent = function(e) {
        let input = e.target;

        let columnName = input.dataset.name;
        let column = grid.tbs_getColumn(columnName);
        let columnIndex = grid.tbs_getColumnIndex(columnName);
        let columnType = column[grid.column_type];

        let combos = document.querySelectorAll(selector + ' .tbs-grid-cell-filter-combo');
        let combo = combos[columnIndex];
        let filterType = combo.selectedOptions[0].value;

        let word = input.value;
        let toWord = null;

        if (word != '') {
            let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
            if (columnType == grid.code_number && filterType == grid.const_filterBetween) {
                let arr = word.split('-');
                word = arr[0];
                if (arr.length > 1) toWord = arr[1];
            }

            grid.tbs_setFilterColumn(column, filterType, word, toWord);
            grid.tbs_filters();
        }
        else {
            // delete filterColumn.
            grid.tbs_removeFilterColumn(column);
            grid.tbs_filters();
        }
    };
    const blurEvent = function(e) {

    };
    let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
    let combos = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');
    for (let i = 0, len = inputs.length; i < len; i++) {
        inputs[i].addEventListener('keyup', keyupEvent);
        combos[i].addEventListener('change', changeEvent);
    }
}
