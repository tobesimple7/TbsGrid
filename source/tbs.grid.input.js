/**
 * tbs.grid.input.js
 *
 */
TbsGrid.prototype.event_input = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let input = document.querySelector(selector + ' .tbs-grid-input');
    let colType = input.dataset.type;

    const keydownEvent = function (e) {
        //e.preventDefault();
        //e.stopPropagation();
        //e.stopImmediatePropagation();
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let mode = input.dataset.mode;
        if (mode == undefined) mode = '';
        if (e.ctrlKey) {
            if      (e.keyCode == 37 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.input_blur(); grid.tbs_addRow('up');   grid.input_focus();}   //left arrow //type : first, last, up, down
            else if (e.keyCode == 39 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.input_blur(); grid.tbs_addRow('down'); grid.input_focus();}   //right arrow
            else if (e.keyCode == 38 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.input_blur(); grid.tbs_addRow('first');grid.input_focus();}   //up arrow
            else if (e.keyCode == 40 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.input_blur(); grid.tbs_addRow('last'); grid.input_focus();}   //down arrow
            else if (e.keyCode == 46 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.input_blur(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
        }
        else {
            if      (e.keyCode == 37  && (mode == ''))  { grid.input_blur(); grid.tbs_moveCell('left' ); grid.input_focus();}
            else if (e.keyCode == 39  && (mode == ''))  { grid.input_blur(); grid.tbs_moveCell('right'); grid.input_focus();}
            else if (e.keyCode == 38  && (mode == ''))  { grid.input_blur(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == ''))  { grid.input_blur(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == ''))  { grid.input_blur(); grid.tbs_moveCell('right'); grid.input_focus();} //enter
            else if (e.keyCode == 9   && (mode == ''))  { grid.input_blur(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab

            else if (e.keyCode == 37  && (mode == 'key')) {}
            else if (e.keyCode == 39  && (mode == 'key')) {}
            else if (e.keyCode == 38  && (mode == 'key')) { grid.input_blur(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == 'key')) { grid.input_blur(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == 'key')) { grid.input_blur(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
            else if (e.keyCode == 9   && (mode == 'key')) { grid.input_blur(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

            else if (e.keyCode == 37  && (mode == 'mouse')) {}
            else if (e.keyCode == 39  && (mode == 'mouse')) {}
            else if (e.keyCode == 38  && (mode == 'mouse')) { grid.input_blur(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == 'mouse')) { grid.input_blur(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == 'mouse')) { grid.input_blur(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
            else if (e.keyCode == 9   && (mode == 'mouse')) { grid.input_blur(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

            else if (e.keyCode >= 0   && e.keyCode <= 7)  {} //function ctrlkey shifkey tabkey(9)등등
            else if (e.keyCode >= 9   && e.keyCode <= 32) {}
            else if (e.keyCode == 8)    {} //backspace key
            else if (e.keyCode == 127)  {}
            else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {}
            else if (e.keyCode >= 112 && e.keyCode <= 123) {}
            else {
                //console.log(`input.style.left : ${input.style.left}`);
                if (grid.notNull(grid.user_edit)) {
                    if (input.style.left == '30000px') {
                        grid.input_edit(e,0, 'key');
                    }
                    grid.input_edit(e,1, 'key');
                }
                else {
                    grid.input_show(e, 'key');
                }
            }
        }
    };
    const keyupEvent = function (e) {
        //e.preventDefault();
        //e.stopPropagation();
        //e.stopImmediatePropagation();
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let colType = input.dataset.type;
    };
    const clickEvent = function(e) {
        let column = grid.columns;
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let colType = grid.columns[grid.startCellIndex][grid.column_type];
    }
    const blurEvent = function(e) {

        //console.dir(e);
        //console.log(`SCROLL : blur event`);

        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        let input_icon = document.querySelector(selector + ' .tbs-grid-input-icon');

        let mode = input.dataset.mode;
        let rowIndex  = input.dataset.rowIndex;
        let cellIndex = input.dataset.cellIndex;

        let column = grid.columns[cellIndex];

        if (rowIndex == undefined || cellIndex == undefined) {
            grid.input_hide();
            return
        }
        //============================================================= popup active
        if (grid.popupActive == 1) { grid.input_focus(); return;}
        //============================================================= user blur event stop
        if (input.dataset.mode == undefined || input.dataset.mode == '') { e.stopImmediatePropagation(); }
        //=============================================================
        if (rowIndex == -1 || cellIndex == -1) return;

        if (grid.notNull(grid.user_edit)) {
            grid.input_edit(e, 2, 'key'); //blur event
        }
        else {
            if (isNaN(cellIndex)) return;
            let s = input.value;
            if (column[grid.column_type] == 'combo') s = input_code.value;
            else if (column[grid.column_type] == 'number' && grid.tbs_trim(s) == grid.options[grid.option_zeroChar]) s = '0';
            //console.log(s);
            grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_renderCode(column, s));
            grid.input_hide();
        }
        grid.tbs_applyData();
    }
    const wheelEvent = function(e) {}
    const copyEvent = function(e){
        let ta = document.createElement('textarea');
        let s = '';
        let startRowIndex  = grid.startRowIndex;
        let startCellIndex = grid.startCellIndex;
        let lastRowIndex  = grid.lastRowIndex;
        let lastCellIndex = grid.lastCellIndex;

        for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                s += grid.tbs_getValueByIndex(rowIndex, colIndex);
                if (colIndex < lastCellIndex) s += '\t';
            }
            if (rowIndex < lastRowIndex) s += '\r\n'
        }
        ta.textContent = s;
        document.body.appendChild(ta);
        ta.select();

        document.execCommand('copy');
        document.body.removeChild(ta);

    }
    const pasteEvent = function(e){
        let data = e.clipboardData.getData('text/plain')
        let startRowIndex = grid.startRowIndex;
        let startCellIndex = grid.startCellIndex;
        //-------------------------------------------------------------
        let td = grid.tbs_getSelectedTableCell();
        if (td == 'undefined' || td == null) return;
        //-------------------------------------------------------------
        let rowArray = data.split('\r\n');
        let i = 0;
        for (let rowIndex = startRowIndex; rowIndex < startRowIndex + rowArray.length; rowIndex++) {
            if (rowIndex >= grid.data_view.length) break;
            let colArray = rowArray[i].split('\t');
            let j = 0;

            for (let colIndex = startCellIndex; colIndex < startCellIndex + colArray.length; colIndex++) {
                //if (grid.columns[colIndex].column_readonly == true) continue;
                if (grid.columns[colIndex][grid.column_editable] == false) continue;
                grid.tbs_setValueByIndex(rowIndex, colIndex, colArray[j]);
                j += 1;
            }
            i += 1;
        }
        grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
    }
    const cutEvent = function(e){}

    input.addEventListener('keydown', keydownEvent, true);
    input.addEventListener('keyup', keyupEvent, true);
    input.addEventListener('click', clickEvent, true);
    input.addEventListener('blur', blurEvent, true);
    input.addEventListener('wheel', wheelEvent, true);
    input.addEventListener('copy', copyEvent, true);
    input.addEventListener('paste', pasteEvent, true);
    input.addEventListener('cut', cutEvent, true);
}
/**
 *
 * input icon click :
 *
 */
TbsGrid.prototype.event_input_icon = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let input_icon = document.querySelector(selector + ' .tbs-grid-input-icon');
    let colType = input_icon.dataset.type;
    const mousedownEvent = function(e) {
        //console.dir(e)
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        let input_panel = document.querySelector(selector + ' .tbs-grid-input-panel');
        let column = grid.columns[grid.startCellIndex];
        let colType = grid.columns[grid.startCellIndex][grid.column_type];

        //tbs-grid-input-panel : calendar, combo
        if (colType == 'date') {
            grid.tbsGridDate = new TbsGridDate(grid, column, input);
            input_panel.style.width = '250px';
            input_panel.style.height = '146px';
        }
        else if (colType == 'combo') {
            grid.tbsGridCombo = new TbsGridCombo(grid, column, input, input_code);
            input_panel.style.width = '200px';
            input_panel.style.height = '146px';
        }
    }
    input_icon.addEventListener('mousedown', mousedownEvent);
}
/**
 *
 * input_show : dblclick, keyup
 *
 * @param e : event
 * @param eventData: row data
 */
TbsGrid.prototype.input_show = function(e, mode) { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;

    let rowIndex  = grid.startRowIndex;
    let cellIndex = grid.startCellIndex;

    let columns = grid.columns;
    let column = columns[cellIndex];
    let colType  = column[grid.column_type];

    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    let input_icon = document.querySelector(selector + ' .tbs-grid-input-icon');

    let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
    if (td == null) return;

    let value  = this.tbs_getValue(rowIndex, column[grid.column_name]);
    let result = this.tbs_render(column, value); //result.value, result.text

    if (column[grid.column_editable] == false) return;
    //if (columns[cellIndex].column_autoWidth == true) return;
    //if (grid.data_view[rowIndex].mode != 'I') return;

    grid.tbs_moveCellLine(td, rowIndex, cellIndex);

    let left = td.getBoundingClientRect().left;
    let top  = td.getBoundingClientRect().top;

    if (mode == 'mouse') {
        if (colType == 'number' && grid.tbs_trim(result.text) == grid.options[grid.option_zeroChar]) input.value = '0';
        else input.value = result.text;
        input_code.value = result.value;
    }

    input.style.top  = top  + 'px';
    input.style.left = left + 'px';
    input.style.height = `${grid.rowHeight}px`;
    input.dataset.mode = mode;
    input.dataset.type = colType;
    input.dataset.rowIndex = grid.startRowIndex;
    input.dataset.cellIndex = grid.startCellIndex;
    input.dataset.click = '';

    if (colType == 'date') {
        let width = parseInt(column[[grid.column_width]]);
        input.style.width = (width - 15) + 'px';

        input_icon.style.top  = top  + 'px';
        input_icon.style.left = `${left + width - 15}px`;
        input_icon.dataset.type = colType;

        input_icon.src = '/tbs.grid.2.0.0/img/calendar.png';
    }
    else if (colType == 'combo') {
        let width = parseInt(column[[grid.column_width]]);
        input.style.width = (width - 15) + 'px';

        input_icon.style.top  = top  + 'px';
        input_icon.style.left = `${left + width - 15}px`;
        input_icon.dataset.type = colType;

        input_icon.src = '/tbs.grid.2.0.0/img/down-arrow.png';
    }
    else {
        //string
        //input.classList.remove('tbs-grid-input-day');
        input.style.backgroundRepeat = '';
        input.style.backgroundImage = '';
        input.style.backgroundPosition = '';
        input.style.backgroundSize = '';
        input.style.width = (parseInt(column[[grid.column_width]]) - 0) + 'px';
    }
    if (mode == 'mouse') input.select();
}
/**
 *
 * input_hide : enter, tab focus out
 *
 */
TbsGrid.prototype.input_hide = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code      = document.querySelector(selector + ' .tbs-grid-input-code');

    let input_icon = document.querySelector(selector + ' .tbs-grid-input-icon');
    let input_panel= document.querySelector(selector + ' .tbs-grid-input-panel');

    input.value = '';
    input_code.value = '';

    input.style.left = '30000px';
    input.dataset.rowIndex = -1;
    input.dataset.cellIndex = -1;
    input.dataset.mode = '';
    input.dataset.type = '';

    input_icon.style.left = '30000px';
    input_icon.dataset.rowIndex = -1;
    input_icon.dataset.cellIndex = -1;
    input_icon.dataset.mode = '';
    input_icon.dataset.type = '';

    input_panel.style.left = '30000px';
    input_panel.dataset.rowIndex = -1;
    input_panel.dataset.cellIndex = -1;
    input_panel.dataset.mode = '';
    input_panel.dataset.type = '';
    input_panel.innerHTML = '';

    if (this.tbsGridDate ) { this.tbsGridDate.tbs_destroy();  this.tbsGridDate = null; }
    if (this.tbsGridCombo) { this.tbsGridCombo.tbs_destroy(); this.tbsGridCombo = null; }

    //console.log(`SCROLL : blur event`);
}

TbsGrid.prototype.input_focus = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    // Close Layer
    //const layer = document.querySelector(selector + ' .tbs-grid-layer');
    //if (layer.style.left == '30000px') { }
    if (this.null(this.mobile)) document.querySelector(selector + ' .tbs-grid-input').focus();
}

TbsGrid.prototype.input_blur = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    this.popupActive = 0;
    document.querySelector(selector + ' .tbs-grid-input').blur();
}
TbsGrid.prototype.input_edit = function(e, state, mode) {
    let selector = '#' + this.gridId;
    let grid = this;

    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    let result = true;
    let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
    let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;
    let column = grid.columns[cellIndex];

    let eventData = {};
    let eventRow = grid.tbs_getRow(rowIndex);
    eventRow.rowIndex = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName = grid.tbs_getColumnName(cellIndex);
    eventRow.state = state;

    if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
        let result = true;
        if (state == 0) {
            result = grid.tbs_edit(e, grid, eventRow, state, grid.user_edit);
            if (result != false || result == true) {
                grid.input_show(e, mode);
                //console.log(0);
            }
            else {
                grid.input_hide();
                grid.tbs_applyData();
            }
        }
        else if (state == 1 && input.style.left != '30000px') {
            result = grid.tbs_edit(e, grid, eventRow, state, grid.user_edit);
            if (result != false || result == true) {
                //console.log(1);
            }
            else {
                grid.input_hide();
                grid.tbs_applyData();
            }
        }
        else if (state == 2 && input.style.left != '30000px') {
            result = grid.tbs_edit(e, grid, eventRow, state, grid.user_edit);
            if (result != false || result == true) {
                //console.log(2);
                let s = input.value;
                if (column[grid.column_type] == 'combo') s = input_code.value;
                grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_renderCode(column, s));
                grid.input_hide();
                grid.tbs_applyData();
            }
            else {
                grid.input_hide();
                grid.tbs_applyData();
            }
        }
    }
}
