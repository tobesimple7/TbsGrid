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
        for (let key in item.data){
            let column = grid.tbs_getColumn(key);
            if (column[grid.column_visible] === false) continue;
            else columnArray.push(item.data[key]);
        }
        //columnArray = Object.values(item.data);

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
        if (this.merge) this.setGroup(this.sortColumns, this.summaryColumns, this.mergeType);
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

    grid.options.filtering[grid.option_filterVisible] = true;
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel70('panel70');
    grid.tbs_displayPanel30(0);
}
TbsGrid.prototype.tbs_hideFilterPanel = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.options.filtering[grid.option_filterVisible] = false;
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel30(0);
}
TbsGrid.prototype.tbs_filters = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    //let filterColumns = grid.tbs_getFilterColumns();
    let filterColumns = grid.filterColumns;
    let data = grid.tbs_copyJson(grid.data_table);

    for (let i = 0, len = filterColumns.length; i < len; i++) {
        let result = grid.tbs_filter(data, filterColumns[i]);
        data = grid.tbs_copyJson(result);
    }
    grid.data_view = data;

    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_setBarPosition(grid.code_vertical, 0);
    grid.tbs_refreshRefData();
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
    let toValue = filterColumn.toValue;

    return result = data.filter(function(dataRow) {
        let bool = true;
        //let isExist = columnText.toString().toLowerCase().includes(word);
        if (columnType == grid.code_number) {
            let columnText = dataRow.data[columnName];
            let isExist = grid.tbs_filterNumberByType(filterType, value, columnText, toValue);
            return isExist;
        }
        else if (columnType == grid.code_string) {
            let columnText = dataRow.layout[columnName][grid.layout_text];
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
        item.toValue = null;
        item.excludedValue = [];
        result.push(item);
    }
    return grid.filterColumns = result;
}
TbsGrid.prototype.tbs_filterNumberByType = function(filterType, n, targetNumber, toNumber) {
    let selector = '#' + this.gridId;
    let grid = this;

    // @Rule : when number is null, number is zero
    if (grid.null(n)) n = 0;
    if (grid.null(targetNumber)) targetNumber = 0;

    n = parseFloat(n);
    targetNumber = parseFloat(targetNumber);

    if      (filterType == grid.const_filterEqual) {
        return (n == targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterNotEqual) {
        return (n != targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterGreater) {
        return (n > targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterGreaterEqual) {
        return (n >= targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterLess) {
        return (n < targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterLessEqual) {
        return (n <= targetNumber) ? true : false;
    }
    else if (filterType == grid.const_filterBetween) {
        return (targetNumber >= n && targetNumber <= toNumber) ? true : false;
    }
    else if (filterType == grid.const_filterBlank) {
        return targetNumber == null;
    }
}
TbsGrid.prototype.tbs_filterStringByType = function(filterType, s, targetString) {
    let regExp;

    // String comparisons are case-insensitive.
    s = s.toLowerCase();
    targetString = targetString.toLowerCase();

    if      (filterType == grid.const_filterEqual) {
        regExp = new RegExp(`^${s}$`);
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
TbsGrid.prototype.tbs_setFilterColumn = function(column, filterType, word, toWord) {
    let selector = '#' + this.gridId;
    let grid = this;

    // grid.filterColumns [{ name : 'columnName', value : , toValue, type : , excludedValues : []}]
    let filterColumns = grid.filterColumns;
    let json = grid.tbs_getJsonRow(filterColumns, grid.column_name, column[grid.column_name]);
    if (grid.null(json)) {
        let item = {};
        item.name = column[grid.column_name];
        item.type = filterType;
        item.value = word;
        item.toValue = toWord;
        item.excludedValue = [];
        filterColumns.push(item);
    }
    else {
        let item = json;
        item.name = column[grid.column_name];
        item.type = filterType;
        item.value = word;
        item.toValue = toWord;
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
    else if (column[grid.column_type] == grid.code_number) {
        let option;
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
