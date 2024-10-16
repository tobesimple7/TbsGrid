﻿import {TbsGrid} from "../tbs.grid";
import {ColumnAlias} from "../tbs.grid.types";

export class TbsGridDate{
    colType: any;
    grid: TbsGrid;
    gridId: string;
    column: object;
    input: HTMLInputElement;

    constructor(grid: TbsGrid, column: object, input: HTMLInputElement) {
        this.colType = 'date';
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.create();
    }

    create() {
        let selector = `#${this.grid.gridId}`;
        const grid = this.grid;

        if (this.grid.null(this.grid)) return;

        /* culture */
        let months = grid.getConfigCalendar('months');
        let dayShortNames = grid.getConfigCalendar('dayShortNames');
        let prevLinkName = grid.getConfigCalendar('prevLinkName');
        let todayLinkName = grid.getConfigCalendar('todayLinkName');
        let nextLinkName = grid.getConfigCalendar('nextLinkName');

        let s = '';
        s += '<div class="tbs-grid-input-date">';
            s += '<div class="tbs-grid-input-date-header">';
                s += '<table class="tbs-grid-input-date-header-table" style="width:100%;">';
                s += '<tr>';
                s += '<td class="tbs-grid-input-date-prev"  onclick="' + this.grid.gridId + '.tbsGridDate.prev();" style="width:40px;">' + prevLinkName + '</td>';
                s += '<td class="tbs-grid-input-date-month" style="width:100px;">';
                    s += '<select class="tbs-grid-input-date-select-month" style="width:100px;" onchange="' + this.grid.gridId + '.tbsGridDate.selectMonth(this.value);">';
        const array = ['01', '02', '03', '04', '05', '06','07', '08', '09', '10', '11', '12'];
        for (let i = 0; i < 12; i++) {
            s += '          <option value="' + array[i] + '">' + months[i] + '</option>';
        }
                    s += '</select></td>';
                s += '<td class="tbs-grid-input-date-year"  style="width:50px;"></td>';
                s += '<td class="tbs-grid-input-date-today" onclick="' + this.grid.gridId + '.tbsGridDate.today();" style="width:40px;">' + todayLinkName + '</td>';
                s += '<td class="tbs-grid-input-date-next"  onclick="' + this.grid.gridId + '.tbsGridDate.next();" style="width:40px;">' + nextLinkName + '</td>';
                s += '</tr>';
                s += '</table>';
        s += '</div>';
        s += '<div class="tbs-grid-input-date-content">';
            s += '<table class="tbs-grid-input-date-content-table" style="width:100%;">';
            s += '<thead>';
            s += '<tr>';
            s += '<th class="tbs-grid-input-date-cell" style="color:red;">' + dayShortNames[0] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[1] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[2] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[3] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[4] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[5] + '</td>';
            s += '<th class="tbs-grid-input-date-cell" style="color:blue">' + dayShortNames[6] + '</td>';
            s += '</tr>';
            s += '</thead>';
            s += '<tbody>';
        for (let i = 0; i < 6; i++) {
            s += '<tr>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
            s += '</tr>';
        }
                s += '</tbody>';
                s += '</table>';
            s += '</div>';
        s += '</div>';
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).innerHTML = s;

        const inputRect = this.input.getBoundingClientRect();

        let top = inputRect.top;
        let left = inputRect.left;
        let right = inputRect.right;
        let height = window.scrollX + inputRect.height;

        const documentRect = document.documentElement.getBoundingClientRect();
        let documentRight = documentRect.right;
        let documentBottom = documentRect.bottom;

        if (left + 231 > documentRight) {
            (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLElement).style.left   = `${right - 231}px`;
        }
        else {
            (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLElement).style.left  = `${left}px`;
        }
        if (top + height + 187 > documentBottom) {
            (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLElement).style.top   = `${top - 187}px`;
        }
        else {
            (document.querySelector(`${selector} .tbs-grid-input-layer-panel`) as HTMLElement).style.top   = `${top + height}px`;
        }
        this.setData();
        this.addEvent();
    }

    clear() {
        const cells: NodeList = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        let count = cells.length;
        for (let i = 0; i < count; i++) {
            const cell: Node = cells[i];
            (cell.childNodes[0] as HTMLTableCellElement).innerHTML = '';
        }
        (document.querySelector('.tbs-grid-input-date') as HTMLDivElement).style.display = '';
    }

    setData(data?: any) {
        this.clear();

        const yearCell: any  = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year');

        if (this.grid.null(data)) data = new Date();
        else {
            data = new Date(data);
        }
        let year = data.getFullYear();
        let month = data.getMonth() + 1;

        let d           = new Date(year, month, 0);
        let curYear     = d.getFullYear();
        let curMonth    = d.getMonth() + 1;
        let curLastDay  = d.getDate();

        yearCell.innerHTML = curYear;
        (document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month') as any).value = this.addZero(curMonth);

        d = new Date(curYear, curMonth - 1, 0);
        let prevYear     = curMonth - 1 == 0 ? curYear - 1 : curYear;
        let prevMonth    = curMonth - 1 == 0 ? 12 : curMonth - 1;
        let prevLastDay  = d.getDate();
        let prevLastYoil = d.getDay();

        //========================================================================== prev month, prev day
        let trList = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table tr');
        let tr = trList[0];
        let count = 7;
        for (let i = 0; i < count; i++) {
            let cell: any = trList[1].children[i];
            if (prevLastYoil == i) {
                cell.childNodes[0].innerHTML = prevLastDay;
                cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(prevLastDay);
                break;
            }
        }
        for (let i = prevLastYoil; i >= 0; i--) {
            let cell: any = trList[1].children[i];
            let day: any = (cell.childNodes[0].innerHTML == '') ? prevLastDay - (prevLastYoil - i) : cell.childNodes[0].innerHTML;
            cell.childNodes[0].innerHTML = day;
            cell.childNodes[0].style.color = 'grey';
            cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(day);
        }

        let cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        count = cells.length;
        let k = 1;
        let nextMonth = 0;
        for (let i = prevLastYoil + 1; i < cells.length; i++) {
            let cell: any = cells[i];
            if (k > curLastDay) { k = 1; nextMonth = 1; }
            cell.childNodes[0].innerHTML = k;
            cell.childNodes[0].style.background = 'white';
            if (nextMonth == 1) {
                cell.childNodes[0].style.color = 'grey';
                if (curMonth == 12) {
                    cell.dataset.value = curYear + 1 + '-' + this.addZero(1) + '-' + this.addZero(k);
                }
                else {
                    cell.dataset.value = curYear + '-' + this.addZero(curMonth + 1) + '-' + this.addZero(k);
                }
            }
            else {
                cell.childNodes[0].style.color = 'black';
                cell.dataset.value = curYear + '-' + this.addZero(curMonth) + '-' + this.addZero(k);
                if (cell.dataset.value == this.getToday()) { cell.childNodes[0].style.background = 'yellow'; }
            }
            k += 1;
        }
        //==========================================================================
        cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-start');
        for (let i = 0; i < cells.length; i++) {
            let cell: any = cells[i];
            if (cell.style.color == 'black')  cell.style.color = 'red';
        }

        cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-end');
        for (let i = 0; i < cells.length; i++) {
            let cell: any = cells[i];
            if (cell.style.color == 'black')  cell.style.color = 'blue';
        }
    }

    getToday() {
        let d           = new Date();
        let curYear     = d.getFullYear();
        let curMonth    = d.getMonth() + 1;
        let curDay      = d.getDate();
        return curYear + '-' + this.addZero(curMonth) + '-' + this.addZero(curDay);
    }

    today() {
        let d           = new Date();
        let curYear  = d.getFullYear();
        let curMonth = d.getMonth() + 1;
        let curDay   = d.getDate();
        let selector = '#' + this.grid;
        const grid = this.grid;

        let format = this.column[ColumnAlias.format];
        format = format.replace('yyyy', curYear);
        format = format.replace('MM', this.addZero(curMonth));
        format = format.replace('dd', this.addZero(curDay));
        this.input.value = format;
        this.input.focus();
        this.input.select();
        this.destroy();
    }

    prev() {
        let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        let currentMonth = parseInt((document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month') as any).value);
        let year, month;
        year =  currentYear;
        month = currentMonth - 1;
        if (month < 1) { year -= 1; month = 12; }
        this.setData(year + '-' + month + '-01');
    }

    next() {
        let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        let currentMonth = parseInt((document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month') as any).value);
        let year, month;
        year =  currentYear;
        month = currentMonth + 1;
        if (month > 12) { year += 1; month = 1; }
        this.setData(year + '-' + month + '-01');
    }

    selectMonth(value) {

        let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        let currentMonth = parseInt(value);
        let year, month;
        year =  currentYear;
        month = currentMonth;
        this.setData(year + '-' + month + '-01');
    }

    addEvent() {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;
        let input = this.input;
        let gridDate = this;
        let column = this.column;
        const mouseDownEvent = function (e) {
            e.stopPropagation();

            let dateText = e.currentTarget.dataset.value;
            let yyyy = grid.substr2(dateText,0, 4);
            let MM = grid.substr2(dateText, 5, 2);
            let dd = grid.substr2(dateText,8, 2);

            let format = column[ColumnAlias.format];
            format = format.replace('yyyy', yyyy);
            format = format.replace('MM', MM);
            format = format.replace('dd', dd);

            gridDate.destroy();
            input.value = format;
            input.focus();
            input.select();
        };
        const cols = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        [].forEach.call(cols, function (cell) {
            cell.addEventListener('mousedown', mouseDownEvent);
        });

        const changeEvent = function (e) {
            let combo: any = document.querySelector('.tbs-grid-datecombo-select');
            (document.querySelector(selector + ' .tbs-grid-input') as any).focus();
            (document.querySelector(selector + ' .tbs-grid-input') as any).select();
            gridDate.destroy();
        };
        //document.querySelector('.tbs-grid-input-date').addEventListener('mousedown', mousedownEvent);
    }

    addZero(value) {
        value = parseInt(value);
        return (value < 10 ? '0' + value.toString() : value.toString());
    }

    destroy() {
        let selector = '#' + this.grid.gridId;

        (document.querySelector(selector + ' .tbs-grid-input-layer-panel') as any).innerHTML = '';
        (document.querySelector(selector + ' .tbs-grid-input-layer-panel') as any).style.width = '0px';
        (document.querySelector(selector + ' .tbs-grid-input-layer-panel') as any).style.left = '70000px';
    }
}



