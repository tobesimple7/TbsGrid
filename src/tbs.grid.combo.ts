
import {TbsGrid} from "./tbs.grid";
import {CellType, columnAlias} from "./tbs.grid.types";


export class TbsGridCombo {
    colType: any;
    grid: TbsGrid;
    gridId: string;
    column: object;
    input: HTMLInputElement;
    input_code: HTMLInputElement;

    constructor(grid: TbsGrid, column: any, input: any, input_code: any) {
        this.colType = CellType.combo;
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.input_code = input_code;
        
        this.create();
    }

    create() {
        let selector = `#${this.grid.gridId}`;

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
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).innerHTML = s;

        const inputPanel: HTMLElement = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
        inputPanel.style.width = '140px';
        inputPanel.style.height = '130px';

        const inputRect = this.input.getBoundingClientRect();

        let top = inputRect.top;
        let left = inputRect.left;
        let right = inputRect.right;
        let height = inputRect.height;

        let documentRect =document.documentElement.getBoundingClientRect();
        let documentRight = documentRect.right;
        let documentBottom = documentRect.bottom;

        if (left + 140 > documentRight) {
            const el: HTMLElement = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.left = `${right - 140}px`;
        }
        else {
            const el: HTMLElement = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.left = `${left}px`;
        }
        if (top + height + 130 > documentBottom) {
            const el: HTMLElement = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.top = `${top - 130}px`;
        }
        else {
            const el: HTMLElement = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.top = `${top + height}px`;
        }
        this.setData();
        this.AddEvent();
    }

    clear() {
        let selector = `#${this.grid.gridId}`;

        if (document.querySelector(`${selector} .tbs-grid-input-combo-select`)) {
            const el: HTMLSelectElement = document.querySelector(`${selector} .tbs-grid-input-combo-select`);
            el.options.length = 0;
        }
    }

    setData() {
        let selector = `#${this.grid.gridId}`;
        const grid = this.grid;
        this.clear();

        const input_combo: HTMLSelectElement = document.querySelector(selector + ' .tbs-grid-input-combo-select');

        let cellIndex = this.input.dataset.columnIndex;

        const column = grid.column_table.data[cellIndex];
        let columnName = column[columnAlias.name];
        const data = grid.renderer[columnName].data;
        let key = data.valueName;
        let val = data.textName;

        let value = this.input.value;
        let eCount = 0;

        if (value != '') {
            input_combo.options.length = 0;

            for (let i = 0, len = data.rows.length; i < len; i++) {
                let row = data.rows[i];
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
            if (columnName != '') {
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

    AddEvent() {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;
        let input = this.input;
        let input_code = this.input_code;
        const changeEvent= e => {
            const combo: HTMLSelectElement = document.querySelector(`${selector} .tbs-grid-input-combo-select`);
            input.value = combo.selectedOptions[0].text;
            input_code.value = combo.selectedOptions[0].value;
            grid.input_focus();
            this.destroy();
        }
        document.querySelector(`${selector} .tbs-grid-input-combo-select`).addEventListener('change', changeEvent);
    }

    destroy() {
        let selector = `#${this.grid.gridId}`;

        (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLInputElement).innerHTML = '';
        (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLInputElement).style.width = '0px';
        (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLInputElement).style.left = '30000px';
    }
};


