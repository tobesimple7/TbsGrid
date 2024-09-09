/**
 * @Rule
 *  - yyyy MM dd (8 digits) : allow
 *  - yy MM dd (6 digits) : allow
 */
TbsGridDate = function (grid, column, input) {
    this.colType = 'date';
    this.grid = grid;
    this.gridId = grid.gridId;
    this.column = column;
    this.input = input;
    this.tbs_create();
};
TbsGridDate.prototype.tbs_create = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;

    if (this.grid.null(this.grid)) return;

    /* culture */
    let months = grid.getConfigCalendar('months');
    let dayShortNames = grid.getConfigCalendar('dayShortNames');
    let prevLinkName = grid.getConfigCalendar('prevLinkName');
    let todayLinkName = grid.getConfigCalendar('todayLinkName');
    let nextLinkName = grid.getConfigCalendar('nextLinkName');

    let s = '';
    s += '<div class="tbs-grid-input-date">';
    s += '  <div class="tbs-grid-input-date-header">';
    s += '      <table class="tbs-grid-input-date-header-table" style="width:100%;">';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-prev"  onclick="' + this.grid.gridId + '.tbsGridDate.tbs_prev();" style="width:40px;">' + prevLinkName + '</td>';
    s += '      <td class="tbs-grid-input-date-month" style="width:100px;">';
    s += '          <select class="tbs-grid-input-date-select-month" style="width:100px;" onchange="' + this.grid.gridId + '.tbsGridDate.tbs_selectMonth(this.value);">';
    s += '          <option value="01">' + months[0] + '</option>';
    s += '          <option value="02">' + months[1] + '</option>';
    s += '          <option value="03">' + months[2] + '</option>';
    s += '          <option value="04">' + months[3] + '</option>';
    s += '          <option value="05">' + months[4] + '</option>';
    s += '          <option value="06">' + months[5] + '</option>';
    s += '          <option value="07">' + months[6] + '</option>';
    s += '          <option value="08">' + months[7] + '</option>';
    s += '          <option value="09">' + months[8] + '</option>';
    s += '          <option value="10">' + months[9] + '</option>';
    s += '          <option value="11">' + months[10] + '</option>';
    s += '          <option value="12">' + months[11] + '</option>';
    s += '          </select></td>';
    s += '      <td class="tbs-grid-input-date-year"  style="width:50px;"></td>';
    s += '      <td class="tbs-grid-input-date-today" onclick="' + this.grid.gridId + '.tbsGridDate.tbs_today();" style="width:40px;">' + todayLinkName + '</td>';
    s += '      <td class="tbs-grid-input-date-next"  onclick="' + this.grid.gridId + '.tbsGridDate.tbs_next();" style="width:40px;">' + nextLinkName + '</td>';
    s += '      </tr>';
    s += '      </table>';
    s += '  </div>';
    s += '  <div class="tbs-grid-input-date-content">';
    s += '      <table class="tbs-grid-input-date-content-table" style="width:100%;">';
    s += '      <thead>';
    s += '      <tr>';
    s += '      <th class="tbs-grid-input-date-cell" style="color:red;">' + dayShortNames[0] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[1] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[2] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[3] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[4] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[5] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="color:blue">' + dayShortNames[6] + '</td>';
    s += '      </tr>';
    s += '      </thead>';
    s += '      <tbody>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';                     
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';                  
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';                 
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>'; 
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      </tbody>';
    s += '      </table>';
    s += '  </div>';
    s += '</div>';
    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = s;

    let gridRect  = document.querySelector(selector).getBoundingClientRect();
    let inputRect = this.input.getBoundingClientRect();

    let top = inputRect.top;
    let left = inputRect.left;
    let right = inputRect.right;
    let height = window.pageXOffset + inputRect.height;

    let documentRect =document.documentElement.getBoundingClientRect();
    let documentRight = documentRect.right;
    let documentBottom = documentRect.bottom;

    if (left + 231 > documentRight) {
        document.querySelector(selector + ' .tbs-grid-input-panel').style.left   = `${right - 231}px`;
    }
    else {
        document.querySelector(selector + ' .tbs-grid-input-panel').style.left  = `${left}px`;
    }
    if (top + height + 187 > documentBottom) {
        document.querySelector(selector + ' .tbs-grid-input-panel').style.top   = `${top - 187}px`;
    }
    else {
        document.querySelector(selector + ' .tbs-grid-input-panel').style.top   = `${top + height}px`;
    }
    this.tbs_setData();
    this.tbs_addEvent();
}
TbsGridDate.prototype.tbs_clear = function() {
    let cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    let count = cells.length;
    for (let i = 0; i < count; i++) {
        let cell = cells[i];
        cell.childNodes[0].innerHTML = '';
    }
    document.querySelector('.tbs-grid-input-date').style.display = '';
}
TbsGridDate.prototype.tbs_getDisplay = function() {
    return document.querySelector('.tbs-grid-input-date') ? document.querySelector('.tbs-grid-input-date').style.display : 'none';    
}
TbsGridDate.prototype.tbs_setData = function(data) {
    this.tbs_clear();
    let prevCell  = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-prev');
    let yearCell  = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year');
    let monthCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-month');
    let todayCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-today');
    let nextCell  = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-next');
                                                                                                                         
    if (this.grid.null(data)) data = new Date();
    else {
        data = new Date(data);
    }
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let curDay = data.getDate();

    let d           = new Date(year, month, 0);
    let curYear     = d.getFullYear();
    let curMonth    = d.getMonth() + 1;
    let curLastDay  = d.getDate();
    let curLastYoil = d.getDay();

    yearCell.innerHTML = curYear; 
    document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value = this.tbs_addZero(curMonth);

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
        let cell = trList[1].children[i];
        if (prevLastYoil == i) {
            cell.childNodes[0].innerHTML = prevLastDay;
            cell.dataset.value = prevYear + '-' + this.tbs_addZero(prevMonth) + '-' + this.tbs_addZero(prevLastDay);
            break; 
        }
    }
    for (let i = prevLastYoil; i >= 0; i--) {
        let cell = trList[1].children[i];
        let day = (cell.childNodes[0].innerHTML == '') ? prevLastDay - (prevLastYoil - i) : cell.childNodes[0].innerHTML;
        cell.childNodes[0].innerHTML = day;
        cell.childNodes[0].style.color = 'grey';
        cell.dataset.value = prevYear + '-' + this.tbs_addZero(prevMonth) + '-' + this.tbs_addZero(day);
    }

    let cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    count = cells.length;
    let k = 1;
    let nextMonth = 0;
    for (let i = prevLastYoil + 1; i < cells.length; i++) {
        let cell = cells[i];
        if (k > curLastDay) { k = 1; nextMonth = 1; }
        cell.childNodes[0].innerHTML = k;
        cell.childNodes[0].style.background = 'white'; 
        if (nextMonth == 1) {
            cell.childNodes[0].style.color = 'grey';
            if (curMonth == 12) {
                cell.dataset.value = curYear + 1 + '-' + this.tbs_addZero(1) + '-' + this.tbs_addZero(k);
            }
            else {
                cell.dataset.value = curYear + '-' + this.tbs_addZero(curMonth + 1) + '-' + this.tbs_addZero(k);
            }
        }
        else {
            cell.childNodes[0].style.color = 'black';
            cell.dataset.value = curYear + '-' + this.tbs_addZero(curMonth) + '-' + this.tbs_addZero(k);
            if (cell.dataset.value == this.tbs_getToday()) { cell.childNodes[0].style.background = 'yellow'; }
        }
        k += 1;
    }
	//==========================================================================
    cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-start');
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (cell.style.color == 'black')  cell.style.color = 'red';
    }

    cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-end');
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (cell.style.color == 'black')  cell.style.color = 'blue';
    }
}
TbsGridDate.prototype.tbs_getToday = function() {
    let d           = new Date();
    let curYear     = d.getFullYear();
    let curMonth    = d.getMonth() + 1;
    let curDay      = d.getDate();
    return curYear + '-' + this.tbs_addZero(curMonth) + '-' + this.tbs_addZero(curDay);
}
TbsGridDate.prototype.tbs_today = function() {
    let d           = new Date();
    let curYear  = d.getFullYear();
    let curMonth = d.getMonth() + 1;
    let curDay   = d.getDate();
    let selector = '#' + this.grid;
    let grid = this.grid;

    let format = this.column[grid.column_format];
    format = format.replace('yyyy', curYear);
    format = format.replace('MM', this.tbs_addZero(curMonth));
    format = format.replace('dd', this.tbs_addZero(curDay));
    this.input.value = format;
    this.input.focus();
    this.input.select();
    this.tbs_destroy();
}
TbsGridDate.prototype.tbs_prev = function() {
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
    let year, month;
    year =  currentYear;
    month = currentMonth - 1;
    if (month < 1) { year -= 1; month = 12; }
    this.tbs_setData(year + '-' + month + '-01');
}
TbsGridDate.prototype.tbs_next = function() {   
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
    let year, month;
    year =  currentYear;
    month = currentMonth + 1;
    if (month > 12) { year += 1; month = 1; }
    this.tbs_setData(year + '-' + month + '-01');
}
TbsGridDate.prototype.tbs_selectMonth = function(value) {
    
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(value);
    let year, month;
    year =  currentYear;
    month = currentMonth;
    this.tbs_setData(year + '-' + month + '-01');
}
TbsGridDate.prototype.tbs_addEvent = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let input = this.input;
    let gridDate = this;
    let column = this.column;
    const mouseDownEvent = function (e) {
        e.stopPropagation();

        let dateText = e.currentTarget.dataset.value;
        let yyyy = grid.tbs_substr(dateText,0, 4);
        let MM = grid.tbs_substr(dateText, 5, 2);
        let dd = grid.tbs_substr(dateText,8, 2);

        let format = column[grid.column_format];
        format = format.replace('yyyy', yyyy);
        format = format.replace('MM', MM);
        format = format.replace('dd', dd);

        gridDate.tbs_destroy();
        input.value = format;
        input.focus();
        input.select();
    };
    const cols = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    [].forEach.call(cols, function (cell) {
        cell.addEventListener('mousedown', mouseDownEvent);
    });

    const changeEvent = function (e) {
        let combo = document.querySelector('.tbs-grid-datecombo-select');
        document.querySelector(selector + ' .tbs-grid-input').focus();
        document.querySelector(selector + ' .tbs-grid-input').select();
        gridDate.tbs_destroy();
    };
    //document.querySelector('.tbs-grid-input-date').addEventListener('mousedown', mousedownEvent);
}
TbsGridDate.prototype.tbs_addZero = function(value) {
    value = parseInt(value);
    return (value < 10 ? '0' + value.toString() : value.toString());
}
TbsGridDate.prototype.tbs_destroy = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let input = this.input;
    let gridDate = this;

    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.width = '0px';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.left = '30000px';
}
