import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridCombo {
    constructor(grid, column, input, input_code) {
        this.colType = tbsGridTypes.CellType.combo;
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.input_code = input_code;
        
        this.tbs_create();
    }

    tbs_create() {
        let selector = '#' + this.grid.gridId;

        let div = document.createElement('div');
        div.className = 'tbs-grid-input-combo';
        div.style.display = 'none';
        let s = '';
        s += '<div class="tbs-grid-input-combo">';
        s += '  <div class="tbs-grid-input-combo-content">';
        s += '      <table class="tbs-grid-input-combo-content-table">';
        s += '      <tr>';
        s += '          <td>';
        s += '              <select class="tbs-grid-input-combo-select" multiple>';
        s += '                  <option class="tbs-grid-input-combo-option" value="1">1월</option>';
        s += '              </select>';
        s += '          <td>';
        s += '      </tr>';
        s += '      </table>';
        s += '  </div>';
        s += '</div>';
        document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = s;

        let inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
        inputPanel.style.width = '140px';
        inputPanel.style.height = '130px';

        let gridRect  = document.querySelector(selector).getBoundingClientRect();
        let inputRect = this.input.getBoundingClientRect();

        let top = inputRect.top;
        let left = inputRect.left;
        let right = inputRect.right;
        let height = inputRect.height;

        let documentRect =document.documentElement.getBoundingClientRect();
        let documentRight = documentRect.right;
        let documentBottom = documentRect.bottom;

        if (left + 140 > documentRight) {
            document.querySelector(selector + ' .tbs-grid-input-panel').style.left   = `${right - 140}px`;
        }
        else {
            document.querySelector(selector + ' .tbs-grid-input-panel').style.left  = `${left}px`;
        }
        if (top + height + 130 > documentBottom) {
            document.querySelector(selector + ' .tbs-grid-input-panel').style.top   = `${top - 130}px`;
        }
        else {
            document.querySelector(selector + ' .tbs-grid-input-panel').style.top   = `${top + height}px`;
        }
        this.setData();
        this.tbs_AddEvent();
    }

    tbs_clear() {
        let selector = '#' + this.grid.gridId;
        let grid = this.grid;

        if (document.querySelector(selector + ' .tbs-grid-input-combo-select')) {
            document.querySelector(selector + ' .tbs-grid-input-combo-select').options.length = 0;
        }
    }

    tbs_getDisplay() {
        return document.querySelectorAll('.tbs-grid-input-combo').length > 0 ? document.querySelector('.tbs-grid-input-combo').style.display : 'none';
    }

    setData() {
        let selector = '#' + this.grid.gridId;
        let grid = this.grid;
        this.tbs_clear();

        let input_combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');

        let rowIndex  = this.input.dataset.rowIndex;
        let cellIndex = this.input.dataset.cellIndex;

        let column = grid.column_table.data[cellIndex];
        let data = column.renderer.data;
        let key = column.renderer.valueName;
        let val = column.renderer.textName;

        let value = this.input.value;
        let eCount = 0;

        if (value != '') {
            input_combo.options.length = 0;

            for (let i = 0, len = data.length; i < len; i++) {
                let row = data[i];
                let option = document.createElement('option');
                option.value = row[key];
                option.text = row[val];
                option.classList.add('tbs-grid-input-combo-option');
                input_combo.append(option);
                eCount = 1;
            }
        }
        if (value == '' || eCount == 0) {
            input_combo.options.length = 0;
            let option = document.createElement('option');
            if (name != '') {
                option.value = '';
                option.text = '==selected==';
                option.classList.add('tbs-grid-input-combo-option');
                input_combo.append(option);
            }
            for (let i = 0, len = data.length; i < len; i++) {
                let row = data[i];
                let option = document.createElement('option');
                option.value = row[key];
                option.text = row[val];
                option.classList.add('tbs-grid-input-combo-option');
                input_combo.append(option);
            }
        }
    }

    tbs_AddEvent() {
        let selector = '#' + this.grid.gridId;
        let grid = this.grid;
        let input = this.input;
        let input_code = this.input_code;
        let gridCombo = this;
        const changeEvent = function (e) {
            let combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');

            input.value = combo.selectedOptions[0].text;
            input_code.value = combo.selectedOptions[0].value;
            grid.input_focus();
            // document.querySelector(selector + ' .tbs-grid-input').focus();
            // document.querySelector(selector + ' .tbs-grid-input').select();
            gridCombo.tbs_destroy();
        };
        document.querySelector(selector + ' .tbs-grid-input-combo-select').addEventListener('change', changeEvent);
    }

    tbs_destroy() {
        let selector = '#' + this.grid.gridId;
        let grid = this.grid;
        let input = this.input;
        let input_code = this.input_code;
        let gridDate = this;

        document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-input-panel').style.width = '0px';
        document.querySelector(selector + ' .tbs-grid-input-panel').style.left = '30000px';
    }
};


