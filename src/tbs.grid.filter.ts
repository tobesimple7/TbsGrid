import {TbsGrid} from "./tbs.grid";
import {CellType, columnAlias, FilterType} from "./tbs.grid.types";

export class TbsGridFilter {
    grid: TbsGrid;
    selector: string;

    constructor(grid: TbsGrid) {
        this.grid     = grid;
        this.selector = `#${grid.gridId}`;
    }

    // totalFilterSearch(s) {
    //     const grid = this.grid;
    //     let filterArray = [];
    //
    //     let arr = grid.trim(s).split(' ');
    //     for (let i = 0; i < arr.length; i++) {
    //         if (grid.trim(arr[i]) !== '') {
    //             filterArray.push(arr[i].toLowerCase());
    //         }
    //     }
    //
    //     const data = grid.source_table.data.filter(function(item) {
    //         let bool = true;
    //         let count = [];
    //         for (let i = 0; i < filterArray.length; i++) {
    //             count[i] = 0;
    //         }
    //         let columnArray = [];
    //         for (let key in item){
    //             let column = grid.getColumn(key);
    //             if (column[columnAlias.visible] === false) continue;
    //             else columnArray.push(item[key]);
    //         }
    //
    //         if (filterArray.length === 0) {
    //             return true;
    //         }
    //         else {
    //             filterArray.forEach(function(cond, i) {
    //                 for (let colIndex = 0, len = columnArray.length; colIndex < len; colIndex++) {
    //                     if (columnArray[colIndex] == null) count[i] = count[i];
    //                     else {
    //                         count[i] = columnArray[colIndex].toString().toLowerCase().includes(cond) === true ? count[i] + 1 : count[i];
    //                     }
    //                 }
    //             })
    //             for (let i = 0; i < filterArray.length; i++) {
    //                 if (count[i] == 0) { bool = false; break; }
    //             }
    //             return bool;
    //         }
    //     });
    //     if (data.length > 0) {
    //         grid.view_table.data = [];
    //         data.map(daraRow => grid.view_table.insert(grid.copyJson(dataRow)));
    //     }
    //     else {
    //         grid.view_table.data = [];
    //     }
    //     grid.horizontalScroll.setScroll(grid.code_horizontal);;
    //     grid.verticalScroll.setScroll(grid.code_vertical);
    //     grid.classScroll.setBarPosition(grid.code_vertical, 0);
    //     grid.refreshRefData();
    // }

    showFilterPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.options.showFilterPanel = true;
        grid.classControl.after_showFilterPanel()
    }

    hideFilterPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.options.showFilterPanel = false;
        grid.classFilter.initFilterData();

        grid.classControl.after_hideFilterPanel()
    }

    filters() {
        const grid = this.grid;
        let result = [];

        grid.source_table.data.map(row => result.push(grid.copyJson(row)));
        for (let i = 0, len = grid.filter_column_table.count(); i < len; i++) {
            let filterColumn = grid.filter_column_table.data[i];
            result = grid.classFilter.filter(result, filterColumn);
        }
        grid.view_table.remove();
        result.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, 0);
    }

    filter(data, filterColumn) {
        const grid = this.grid;

        let column = grid.getColumn(filterColumn.name);
        let columnType = column[columnAlias.type];
        let columnName = filterColumn.name;
        let filterType = filterColumn.type;
        let value = filterColumn.value;

        return data.filter(function(dataRow) {
            let bool = true;
            if (columnType == CellType.number) {
                let columnText = dataRow[columnName];
                let isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
                return isExist;
            }
            else if (columnType == CellType.string || columnType == CellType.date || columnType || CellType.combo) {
                let val = dataRow[columnName];
                let columnText = grid.getFormatText(column, val);

                let isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
                return isExist;
            }
            else return true;
        });
    }

    filterNumberByType(filterType: FilterType, n: any, targetNumber: any) {
        const grid = this.grid;

        // @Rule : when number is null, number is zero
        if (grid.null(n)) n = 0;
        if (grid.null(targetNumber)) targetNumber = 0;

        let toNumber = null;
        if (filterType == FilterType.Between) {
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

        if      (filterType == FilterType.Equal) {
            return n == targetNumber;
        }
        else if (filterType == FilterType.NotEqual) {
            return n != targetNumber;
        }
        else if (filterType == FilterType.Greater) {
            return n < targetNumber;
        }
        else if (filterType == FilterType.GreaterEqual) {
            return n <= targetNumber;
        }
        else if (filterType == FilterType.Less) {
            return n > targetNumber;
        }
        else if (filterType == FilterType.LessEqual) {
            return n >= targetNumber;
        }
        else if (filterType == FilterType.Between) {
            return targetNumber >= n && targetNumber <= toNumber;
        }
        else if (filterType == FilterType.Blank) {
            return grid.null(targetNumber) || targetNumber == 0;
        }
    }

    filterStringByType(filterType: FilterType, s: any, targetString: any) {
        let regExp: RegExp;

        // String comparisons are case-insensitive.
        s = s.toLowerCase();
        targetString = targetString.toLowerCase();
        if      (filterType == FilterType.Equal) {
            regExp =new RegExp(`^${s}$`)
            return regExp.test(targetString);
        }
        else if (filterType == FilterType.NotEqual) {
            regExp = new RegExp(`^${s}$`);
            return regExp.test(targetString) == false;
        }
        else if (filterType == FilterType.Include) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == FilterType.NotInclude) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString) == false;
        }
        else if (filterType == FilterType.StartCharacter) {
            regExp = new RegExp(`^${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == FilterType.EndCharacter) {
            regExp = new RegExp(`${s}$`);
            return regExp.test(targetString);
        }
        else if (filterType == FilterType.Blank) {
            regExp = new RegExp(`^$`);
            return regExp.test(targetString);
        }
    }

    setFilterColumn(column, filterType, word) {
        const grid = this.grid;

        let dataRow = grid.filter_column_table.selectRow(columnAlias.name, column[columnAlias.name]);
        if (grid.null(dataRow)) {
            const item: any = {}
            item.name = column[columnAlias.name];
            item.type = filterType;
            item.value = word;
            grid.filter_column_table.insert(item);
        }
        else {
            let rowId = dataRow[columnAlias.rowId];
            grid.filter_column_table.updateByRowId(rowId, columnAlias.type, filterType);
            grid.filter_column_table.updateByRowId(rowId, columnAlias.value, word);
        }
    }

    removeFilterColumn(column) {
        const grid = this.grid;
        let rowId = column[columnAlias.rowId];
        grid.filter_column_table.removeByRowId(rowId);
    }

    createFilterCombo(column) {
        const grid = this.grid;

        let combo = document.createElement('select');
        if (column[columnAlias.type] == CellType.number) {
            grid.classFilter.addFilterComboOption(combo, FilterType.Select      , grid.getConfigLabel('filter_select'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Equal       , grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, FilterType.GreaterEqual, grid.getConfigLabel('filter_greaterEqual'));
            grid.classFilter.addFilterComboOption(combo, FilterType.LessEqual   , grid.getConfigLabel('filter_lessEqual'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Greater     , grid.getConfigLabel('filter_greater'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Less        , grid.getConfigLabel('filter_less'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Between     , grid.getConfigLabel('filter_between'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Blank       , grid.getConfigLabel('filter_blank'));
        }
        else {
            grid.classFilter.addFilterComboOption(combo, FilterType.Include 	  , grid.getConfigLabel('filter_include'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Equal         , grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, FilterType.StartCharacter, grid.getConfigLabel('filter_startCharacter'));
            grid.classFilter.addFilterComboOption(combo, FilterType.EndCharacter  , grid.getConfigLabel('filter_endCharacter'));
            grid.classFilter.addFilterComboOption(combo, FilterType.Blank         , grid.getConfigLabel('filter_blank'));
            grid.classFilter.addFilterComboOption(combo, FilterType.NotEqual      , grid.getConfigLabel('filter_notEqual'));
            grid.classFilter.addFilterComboOption(combo, FilterType.NotInclude 	  , grid.getConfigLabel('filter_notInclude'));
        }
        return combo;
    }

    addFilterComboOption(combo, value, text) {
        const grid = this.grid;

        let option = document.createElement('option');
        option.value = value;
        option.text = text;
        combo.add(option);
    }

    initFilterData() {
        let selector = this.selector;
        const grid = this.grid;

        grid.filter_column_table.remove();
        let inputs: any = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
        let combos: any = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            combos[i].selectedIndex = 0
        }

        grid.view_table.remove();

        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        grid.classRange.removeRange(0, -1);

        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }
}

