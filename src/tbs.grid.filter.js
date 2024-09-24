import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridFilter {
    constructor(grid) {
        this.grid     = grid;
        this.selector = '#' + grid.gridId;
    }

    totalFilterSearch(s) {
        let selector = this.selector;
        let grid = this.grid;
        let filterArray = [];

        let arr = grid.trim(s).split(' ');
        for (let i = 0; i < arr.length; i++) {
            if (grid.trim(arr[i]) !== '') {
                filterArray.push(arr[i].toLowerCase());
            }
        }

        const data = grid.source_table.data.filter(function(item) {
            let bool = true;
            let count = [];
            for (let i = 0; i < filterArray.length; i++) {
                count[i] = 0;
            }
            let columnArray = [];
            for (let key in item){
                let column = grid.classColumn.getColumn(key);
                if (column[tbsGridNames.column.visible] === false) continue;
                else columnArray.push(item[key]);
            }

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
            grid.view_table.data = [];
            data.map(daraRow => grid.view_table.insert(grid.copyJson(dataRow)));
        }
        else {
            grid.view_table.data = [];
        }
        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, 0);
        grid.refreshRefData();
    }

    showFilterPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.options[grid.option_showFilterPanel] = true;
        grid.classControl.after_showFilterPanel()
    }

    hideFilterPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.options[grid.option_showFilterPanel] = false;
        grid.classFilter.initFilterData();

        grid.classControl.after_hideFilterPanel()
    }

    filters() {
        let grid = this.grid;

        let result = grid.copyJson(grid.source_table.data);

        for (let i = 0, len = grid.filter_column_table.count(); i < len; i++) {
            let filterColumn = grid.filter_column_table.data[i];
            result = grid.classFilter.filter(result, filterColumn);
        }
        grid.view_table.remove();
        result.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, 0);
    }

    filter(data, filterColumn) {
        let grid = this.grid;

        let column = grid.classColumn.getColumn(filterColumn.name);
        let columnType = column[tbsGridNames.column.type];
        let columnName = filterColumn.name;
        let filterType = filterColumn.type;
        let value = filterColumn.value;

        return data.filter(function(dataRow) {
            let bool = true;
            if (columnType == tbsGridTypes.CellType.number) {
                let columnText = dataRow[columnName];
                let isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
                return isExist;
            }
            else if (columnType == tbsGridTypes.CellType.string || columnType == tbsGridTypes.CellType.date || columnType || tbsGridTypes.CellType.combo) {
                let val = dataRow[columnName];
                let columnText = grid.getFormatText(column, val);

                let isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
                return isExist;
            }
            else return true;
        });
    }

    filterNumberByType(filterType, n, targetNumber) {
        let selector = this.selector;
        let grid = this.grid;

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

        if      (filterType == tbsGridTypes.FilterType.Equal) {
            return (n == targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.NotEqual) {
            return (n != targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.Greater) {
            return (n < targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.GreaterEqual) {
            return (n <= targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.Less) {
            return (n > targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.LessEqual) {
            return (n >= targetNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.Between) {
            return (targetNumber >= n && targetNumber <= toNumber) ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.Blank) {
            return grid.null(targetNumber) || targetNumber == 0;
        }
    }

    filterStringByType(filterType, s, targetString) {
        let selector = this.selector;
        let grid = this.grid;
        let regExp;

        // String comparisons are case-insensitive.
        s = s.toLowerCase();
        targetString = targetString.toLowerCase();
        if      (filterType == tbsGridTypes.FilterType.Equal) {
            regExp =new RegExp(`^${s}$`)
            return regExp.test(targetString);
        }
        else if (filterType == tbsGridTypes.FilterType.NotEqual) {
            regExp = new RegExp(`^${s}$`);
            return regExp.test(targetString) == false ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.Include) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == tbsGridTypes.FilterType.NotInclude) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString) == false ? true : false;
        }
        else if (filterType == tbsGridTypes.FilterType.StartCharacter) {
            regExp = new RegExp(`^${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == tbsGridTypes.FilterType.EndCharacter) {
            regExp = new RegExp(`${s}$`);
            return regExp.test(targetString);
        }
        else if (filterType == tbsGridTypes.FilterType.Blank) {
            regExp = new RegExp(`^$`);
            return regExp.test(targetString);
        }
    }

    setFilterColumn(column, filterType, word) {
        let grid = this.grid;

        let dataRow = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
        if (grid.null(dataRow)) {
            let item = {}
            item.name = column[tbsGridNames.column.name];
            item.type = filterType;
            item.value = word;
            grid.filter_column_table.insert(item);
        }
        else {
            let rowId = dataRow[tbsGridNames.column.rowId];
            grid.filter_column_table.updateByRowId(rowId, tbsGridNames.column.type, filterType);
            grid.filter_column_table.updateByRowId(rowId, tbsGridNames.column.value, word);
        }
    }

    removeFilterColumn(column) {
        let grid = this.grid;
        let rowId = column[tbsGridNames.column.rowId];
        grid.filter_column_table.removeByRowId(rowId);
    }

    createFilterCombo(column) {
        let grid = this.grid;

        let combo = document.createElement('select');
        if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) {
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Select      , grid.getConfigLabel('filter_select'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Equal       , grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.GreaterEqual, grid.getConfigLabel('filter_greaterEqual'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.LessEqual   , grid.getConfigLabel('filter_lessEqual'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Greater     , grid.getConfigLabel('filter_greater'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Less        , grid.getConfigLabel('filter_less'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Between     , grid.getConfigLabel('filter_between'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Blank       , grid.getConfigLabel('filter_blank'));
        }
        else {
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Include 	  , grid.getConfigLabel('filter_include'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Equal         , grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.StartCharacter, grid.getConfigLabel('filter_startCharacter'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.EndCharacter  , grid.getConfigLabel('filter_endCharacter'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Blank         , grid.getConfigLabel('filter_blank'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.NotEqual      , grid.getConfigLabel('filter_notEqual'));
            grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.NotInclude 	  , grid.getConfigLabel('filter_notInclude'));
        }
        return combo;
    }

    addFilterComboOption(combo, value, text) {
        let grid = this.grid;

        let option = document.createElement('option');
        option.value = value;
        option.text = text;
        combo.add(option);
    }

    initFilterData() {
        let selector = this.selector;
        let grid = this.grid;

        grid.filter_column_table.remove();
        let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
        let combos = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            combos[i].selectedIndex = 0
        }

        grid.view_table.remove();

        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        grid.classRange.removeRange(0, -1);

        if (grid.grid_mode == tbsGridTypes.GridMode.group) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }
}

