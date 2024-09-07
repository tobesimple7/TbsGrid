class TbsGridFilter {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;

        this.options = {};

    }
}

TbsGrid.prototype.totalFilterSearch = function (s) {
    let grid = this;
    let filterArray = [];
    //=============================================================  set filterArray
    let arr = this.tbs_trim(s).split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (this.tbs_trim(arr[i]) !== '') {
            filterArray.push(arr[i].toLowerCase());
        }
    }
    //=============================================================
    const data = this.data_table.filter(function(item) {
        let bool = true;
        let count = [];
        for (let i = 0; i < filterArray.length; i++) {
            count[i] = 0;
        }
        let columnArray = [];
        for (let key in item){
            let column = grid.tbs_getColumn(key);
            if (column[grid.column_visible] === false) continue;
            else columnArray.push(item[key]);
        }
        //columnArray = Object.values(item);

        if (filterArray.length === 0) {
            return true;
        }
        else {
            filterArray.forEach(function(cond, i) {
                for (let colIndex = 0, len = columnArray.length; colIndex < len; colIndex++) {
                    if (columnArray[colIndex] == null) count[i] = count[i];
                    else {
                        count[i] = columnArray[colIndex].toString().toLowerCase().includes(cond) === true ? count[i] + 1 : count[i];
                    }
                }
            })
            for (let i = 0; i < filterArray.length; i++) {
                if (count[i] == 0) { bool = false; break; }
            }
            return bool;
        }
    });
    if (data.length > 0) {
        this.data_view = JSON.parse(JSON.stringify(data));
        if (this.merge) this.setGroup(this.classSort.sortColumns, this.summaryColumns, this.mergeType);
    }
    else {
        this.data_view = [];
    }
    this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    this.verticalScroll.tbs_setScroll(grid.code_vertical);
    this.tbs_setBarPosition(grid.code_vertical, 0);
    this.tbs_refreshRefData();
}
//================================================================
TbsGrid.prototype.tbs_showFilterPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.options[grid.option_filterVisible] = true;
    grid.classControl.after_showFilterPanel()
}
TbsGrid.prototype.tbs_hideFilterPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.options[grid.option_filterVisible] = false;
    grid.tbs_initFilterData();

    grid.classControl.after_hideFilterPanel()
}
TbsGrid.prototype.tbs_filters = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    //let filterColumns = grid.tbs_getFilterColumns();
    let filterColumns = grid.filterColumns;
    let result = grid.tbs_copyJson(grid.data_table);

    for (let i = 0, len = filterColumns.length; i < len; i++) {
        result = grid.tbs_filter(result, filterColumns[i]);
    }
    grid.data_view = result;

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_setBarPosition(grid.code_vertical, 0);

    //if (grid.grid_mode == grid.code_group) grid.tbs_setData(grid.data_view, null, false);
    //else
    //grid.tbs_apply();
}
TbsGrid.prototype.tbs_filter = function (data, filterColumn) {
    // data, columnName, word
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(filterColumn.name);
    let columnType = column[grid.column_type];
    let columnName = filterColumn.name;
    let filterType = filterColumn.type;
    let value = filterColumn.value;

    return result = data.filter(function(dataRow) {
        let bool = true;
        //let isExist = columnText.toString().toLowerCase().includes(word);
        if (columnType == grid.code_number || columnType == grid.code_currency) {
            let columnText = dataRow[columnName];
            let isExist = grid.tbs_filterNumberByType(filterType, value, columnText);
            return isExist;
        }
        else if (columnType == grid.code_string) {
            //let columnText = dataRow.layout[columnName][grid.layout_text];
            let val = dataRow[columnName];
            let columnText = grid.tbs_getFormatText(column, val);

            let isExist = grid.tbs_filterStringByType(filterType, value, columnText);
            return isExist;
        }
        else return true;
    });
}
TbsGrid.prototype.tbs_getFilterColumns = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    // grid.filterColumns [{ name : 'columnName', value : , toValue, type : , excludedValues : []}]
    let result = [];
    let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
    for (let i = 0, len = inputs.length; i < len; i++) {
        let input = inputs[i];
        let columnName = input.dataset.name;
        let word = input.value;
        if (word == '') continue;

        let item = {};
        item.name = columnName;
        item.value = word;
        item.type = "";
        item.excludedValue = [];
        result.push(item);
    }
    return grid.filterColumns = result;
}
TbsGrid.prototype.tbs_filterNumberByType = function(filterType, n, targetNumber) {
    let selector = '#' + this.gridId;
    let grid = this;

    // @Rule : when number is null, number is zero
    if (grid.null(n)) n = 0;
    if (grid.null(targetNumber)) targetNumber = 0;

    let toNumber = null;
    if (filterType == grid.const_filterBetween) {
        let arr = n.split('-');
        n = parseFloat(arr[0]);
        if (arr.length > 1) {
            toNumber = parseFloat(arr[1]);
        }
        else {
            toNumber = 99999999999999;
        }
    }
    else {
        n = parseFloat(n);
        toNumber = null;
    }

    targetNumber = parseFloat(targetNumber);

    if      (filterType == grid.const_filterEqual) {
        return (n == targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterNotEqual) {
        return (n != targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterGreater) {
        return (n < targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterGreaterEqual) {
        return (n <= targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterLess) {
        return (n > targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterLessEqual) {
        return (n >= targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterBetween) {
        return (targetNumber >= n && targetNumber <= toNumber) ? true : false;
    }
    else if (filterType == grid.const_filterBlank) {
        return targetNumber == null;
    }
}
TbsGrid.prototype.tbs_filterStringByType = function(filterType, s, targetString) {
    let grid = this;
    let regExp;

    // String comparisons are case-insensitive.
    s = s.toLowerCase();
    targetString = targetString.toLowerCase();
    if      (filterType == grid.const_filterEqual) {
        regExp =new RegExp(`^${s}$`)
        return regExp.test(targetString);
    }
    else if (filterType == grid.const_filterNotEqual) {
        regExp = new RegExp(`^${s}$`);
        return regExp.test(targetString) == false ? true : false;
    }
    else if (filterType == grid.const_filterInclude) {
        regExp = new RegExp(`${s}`);
        return regExp.test(targetString);
    }
    else if (filterType == grid.const_filterNotInclude) {
        regExp = new RegExp(`${s}`);
        return regExp.test(targetString) == false ? true : false;
    }
    else if (filterType == grid.const_filterStartCharacter) {
        regExp = new RegExp(`^${s}`);
        return regExp.test(targetString);
    }
    else if (filterType == grid.const_filterEndCharacter) {
        regExp = new RegExp(`${s}$`);
        return regExp.test(targetString);
    }
    else if (filterType == grid.const_filterBlank) {
        regExp = new RegExp(`^$`);
        return regExp.test(targetString);
    }
}
TbsGrid.prototype.tbs_setFilterColumn = function(column, filterType, word) {
    let selector = '#' + this.gridId;
    let grid = this;

    // grid.filterColumns [{ name : 'columnName', value : , excludedValues : []}]
    let filterColumns = grid.filterColumns;
    let json = grid.tbs_getJsonRow(filterColumns, grid.column_name, column[grid.column_name]);
    if (grid.null(json)) {
        let item = {};
        item.name = column[grid.column_name];
        item.type = filterType;
        item.value = word;
        item.excludedValue = [];
        filterColumns.push(item);
    }
    else {
        let item = json;
        item.name = column[grid.column_name];
        item.type = filterType;
        item.value = word;
        item.excludedValue = [];
    }
}
TbsGrid.prototype.tbs_removeFilterColumn = function(column) {
    let selector = '#' + this.gridId;
    let grid = this;

    let columnName = column[grid.column_name];
    let filterColumns = grid.filterColumns;
    for (let i = 0, len = filterColumns.length; i < len; i++) {
        let filterColumn = filterColumns[0]
        if (filterColumn.name == columnName) {
            filterColumns.splice(i, 1);
            break;
        }
    }
}
TbsGrid.prototype.tbs_createFilterCombo = function(column) {
    let selector = '#' + this.gridId;
    let grid = this;
    let combo = document.createElement('select');
    if (column[grid.column_type] == grid.code_string) {
        let option;
        grid.tbs_addFilterComboOption(combo, grid.const_filterInclude 	    , 'Include'         );
        grid.tbs_addFilterComboOption(combo, grid.const_filterEqual         , 'Equal'           );
        grid.tbs_addFilterComboOption(combo, grid.const_filterStartCharacter, 'Start Characters');
        grid.tbs_addFilterComboOption(combo, grid.const_filterEndCharacter  , 'End Characters'  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterBlank         , 'Blank'           );
        grid.tbs_addFilterComboOption(combo, grid.const_filterNotEqual      , 'Does not equal'  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterNotInclude 	, 'Not Include'     );
    }
    else if (column[grid.column_type] == grid.code_number || column[grid.column_type] == grid.code_currency) {
        let option;
        grid.tbs_addFilterComboOption(combo, grid.const_filterSelect      , '[Select]'				  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterEqual       , 'Equal'					  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterGreaterEqual, 'Greater than or Equal to');
        grid.tbs_addFilterComboOption(combo, grid.const_filterLessEqual   , 'Less than or Equal to'	  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterGreater     , 'Greater than'			  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterLess        , 'Less than'				  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterBetween     , 'Between'				  );
        grid.tbs_addFilterComboOption(combo, grid.const_filterBlank       , 'Blank'					  );
    }
    return combo;
}
TbsGrid.prototype.tbs_addFilterComboOption = function(combo, value, text) {
    let selector = '#' + this.gridId;
    let grid = this;

    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    combo.add(option);
}
TbsGrid.prototype.tbs_initFilterData = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.filterColumns = [];
    let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
    let combos = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        combos[i].selectedIndex = 0
    }
    grid.data_view = grid.tbs_copyJson(grid.data_table);
    grid.tbs_removeRange(0, -1);
    grid.tbs_apply();
}
TbsGrid.prototype.tbs_getFilterColumn = function (columnName) {
    let index = this.tbs_getFilterColumnIndex(columnName);
    return this.filterColumns[index];
}
TbsGrid.prototype.tbs_getFilterColumnIndex = function (columnName) {
    let grid = this;
    let result = -1;

    for (let i = 0, len = this.filterColumns.length; i < len; i++) {
        let filterColumn = this.filterColumns[i];
        if (columnName == filterColumn[grid.column_name]) {
            result = i;
            break;
        }
    }
    return result;
}
TbsGrid.prototype.tbs_getFilterColumnName = function (colIndex) {
    return this.filterColumn[colIndex][this.column_name];
}