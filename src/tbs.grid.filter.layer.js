import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridFilterLayer {

    constructor (grid, icon, input, column) {
        this.grid = grid;
        this.gridId = grid.gridId;
        this.selector = '#' + grid.gridId;
        this.column = column;
        this.iconElement = icon;
        this.inputElement = input;

        this.createFilter();
        this.showFilterLayer();
        this.AddEvent();
        this.setData();
    }

    getComboData() {
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;

        let combo = document.createElement('select');
        combo.classList.add('tbs-grid-layer-filter-combo');
        //combo.multiple = 'multiple';
        if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.string) {
            let option;
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Equal         , grid.getCofnigLabel('filter_equal'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Include 	  , grid.getCofnigLabel('filter_include'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.StartCharacter, grid.getCofnigLabel('filter_startCharacter'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.EndCharacter  , grid.getCofnigLabel('filter_endCharacter'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Blank         , grid.getCofnigLabel('filter_blank'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.NotEqual      , grid.getCofnigLabel('filter_notEqual'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.NotInclude 	  , grid.getCofnigLabel('filter_notInclude'));
        }
        else if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) {
            let option;
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Select      , grid.getCofnigLabel('filter_select'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Equal       , grid.getCofnigLabel('filter_equal'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.GreaterEqual, grid.getCofnigLabel('filter_greaterEqual'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.LessEqual   , grid.getCofnigLabel('filter_lessEqual'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Greater     , grid.getCofnigLabel('filter_greater'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Less        , grid.getCofnigLabel('filter_less'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Between     , grid.getCofnigLabel('filter_between'));
            gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Blank       , grid.getCofnigLabel('filter_blank'));
        }
        return combo;
    }

    addComboOption(combo, value, text) {
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;

        let option = document.createElement('option');
        option.value = value;
        option.text = text;
        combo.add(option);
    }

    createFilter(){
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;
        let combo = gridFilter.getComboData();
        let s = '';
        s += '<div class="tbs-grid-layer-filter">';
        s += '  <div class="tbs-grid-layer-filter-main">';
        s += '      <div class="tbs-grid-layer-filter-content">';
        s += combo.outerHTML;
        s += '      </div>';
        s += '      <div class="tbs-grid-layer-filter-content">';
        s += '          <input class="tbs-grid-layer-filter-content-input" placeholder="Words to filter">';
        s += '      </div>';
        // s += '      <div class="tbs-grid-layer-filter-content">';
        // s += '          <input class="tbs-grid-layer-filter-content-input-to" style="display:none;" placeholder="Words to filter">';
        // s += '      </div>';
        s += '      <div class="tbs-grid-layer-filter-content">';
        s += '              <button class="tbs-grid-layer-filter-content-button-save">save</button>';
        s += '              <button class="tbs-grid-layer-filter-content-button-reset">reset</button>';
        s += '      </div>';
        s += '  </div>';
        s += '</div>';
        document.querySelector(selector + ' .tbs-grid-layer').innerHTML = s;
    }

    showFilterLayer() {
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;

        let rectIcon = this.iconElement.getBoundingClientRect();

        let top = rectIcon.top;
        let left = rectIcon.left;
        let right = rectIcon.right;
        let height = rectIcon.height;

        let layer = document.querySelector(selector + ' .tbs-grid-layer');
        layer.style.width  = '192px';
        layer.style.height = '102px';

        let rectDocument = document.documentElement.getBoundingClientRect();
        let documentRight = rectDocument.right;
        let documentBottom = rectDocument.bottom;

        if (left + 150 > documentRight) {
            layer.style.left   = `${right - 150}px`;
        }
        else {
            layer.style.left  = `${left}px`;
        }
        if (top + height + 180 > documentBottom) {
            layer.style.top   = `${top - 180}px`;
        }
        else {
            layer.style.top   = `${top + height}px`;
        }
        //this.setData();
        //this.tbs_AddEvent();
    }

    AddEvent() {
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;
        let iconElement = this.iconElement
        let inputElement =this.inputElement

        const changeEvent = function (e) {
            let combo = e.target;
            let columnType = column[tbsGridNames.column.type];
            // if (columnType == tbsGridTypes.CellType.number) {
            //     let toInput = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to');
            //     if (combo.selectedOptions[0].value == grid.const_filterBetween) toInput.style.display = '';
            //     else toInput.style.display = 'none';
            // }
        };
        const saveEvent = function (e) {
            let combo  = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');
            let filterType = combo.selectedOptions[0].value;

            let word   = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value;
            //let toWord = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value;

            grid.classFilter.setFilterColumn(column, filterType, word);
            grid.classFilter.filters();
            grid.apply();

            inputElement.value = word;

            document.querySelector(selector + ' .tbs-grid-layer').innerHTML = '';
            document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
            document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
        };
        const resetEvent = function (e) {
            document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = '';
            //document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value = '';
        };
        document.querySelector(selector + ' .tbs-grid-layer-filter-combo').addEventListener('change', changeEvent);
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-save').addEventListener('mousedown', saveEvent);
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-reset').addEventListener('mousedown', resetEvent);
    }

    setData() {
        let selector = this.selector;
        const grid = this.grid;

        let column = this.column;
        let gridFilter = this;
        let iconElement = this.iconElement
        let inputElement =this.inputElement

        let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);

        if (grid.notNull(filterColumn)) {
            let combo = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');

            for (let i = 0, len = combo.options.length; i < len; i++) {
                if (filterColumn.type == combo.options[i].value) {
                    combo.selectedIndex = i;
                    break;
                }
            }
            document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = filterColumn.value;
        }
    }
};



