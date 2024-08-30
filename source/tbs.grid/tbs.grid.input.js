/**
 * @Rule
 *  - After alert window, layer window, Edit Cell is closed.
 *  - Instaed of setDataValue function, use variables. and use setDataValue(variables)
 *  - Current Data : row data.
 *  - tbs_editStart : System function.
 *  - tbs_editEnd : System function.
 *  - Keep edit state
 */
TbsGrid.prototype.event_input = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
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
            if      (e.keyCode == 37 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('up');   grid.input_focus();}   //left arrow //type : first, last, up, down
            else if (e.keyCode == 39 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('down'); grid.input_focus();}   //right arrow
            else if (e.keyCode == 38 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('first');grid.input_focus();}   //up arrow
            else if (e.keyCode == 40 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('last'); grid.input_focus();}   //down arrow
            else if (e.keyCode == 46 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
        }
        else {
            if      (e.keyCode == 37  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('left' ); grid.input_focus();}
            else if (e.keyCode == 39  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();}
            else if (e.keyCode == 38  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter
            else if (e.keyCode == 9   && (mode == ''))  { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab

            else if (e.keyCode == 37  && (mode == 'key')) {}
            else if (e.keyCode == 39  && (mode == 'key')) {}
            else if (e.keyCode == 38  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
            else if (e.keyCode == 9   && (mode == 'key')) { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

            else if (e.keyCode == 37  && (mode == 'mouse')) {}
            else if (e.keyCode == 39  && (mode == 'mouse')) {}
            else if (e.keyCode == 38  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
            else if (e.keyCode == 40  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
            else if (e.keyCode == 13  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
            else if (e.keyCode == 9   && (mode == 'mouse')) { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

            else if (e.keyCode >= 0   && e.keyCode <= 7)  {} //function ctrlkey shifkey tabkey(9)등등
            else if (e.keyCode >= 9   && e.keyCode <= 32) {}
            else if (e.keyCode == 8)    {} //backspace key
            else if (e.keyCode == 127)  {}
            else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {}
            else if (e.keyCode >= 112 && e.keyCode <= 123) {}
            else {
                let cellIndex = grid.startCellIndex;
                let column = grid.tbs_getColumnByIndex(cellIndex);
                if (grid.notNull(column[grid.column_editable]) && column[grid.column_editable]) {
                    if (grid.notNull(grid.user_edit)) { // state
                        //console.log(`panelInput.style.left : ${panelInput.style.left}`);
                        if (panelInput.style.left == '30000px') {
                            grid.tbs_editStart(e, 'key');
                        }
                        else {
                            grid.tbs_editing(e, 'key');
                        }
                    }
                else {
                        grid.input_show(e, 'key');
                    }
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
        let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

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
            grid.tbs_editEnd(e, 'key');
        }
        else {
            if (isNaN(cellIndex)) return;
            let s = input.value;
            if (column[grid.column_type] == grid.code_combo) s = input_code.value;
            else if (column[grid.column_type] == 'number' && grid.tbs_trim(s) == grid.options[grid.option_zeroChar]) s = '0';
            else if (column[grid.column_type] == 'currency' && grid.tbs_trim(s) == grid.options[grid.option_zeroChar]) s = '0';
            //console.log(s);
            grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_getFormatValue(column, s));
            grid.input_hide();
        }
        grid.tbs_apply();
    }
    const wheelEvent = function(e) {}
    const copyEvent = function(e) {
        let ta = document.createElement('textarea');
        let s = '';
        if (grid.classRange40.data_select_panel30.length > 0) {
            let startRowIndex  = 0;
            let startCellIndex = grid.classRange40._startCellIndex;
            let lastRowIndex  = 0;
            let lastCellIndex = grid.classRange40._lastCellIndex;

            for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                    let val = grid.tbs_getTopValueByIndex(rowIndex, colIndex);
                    if (grid.null(val)) val = '';
                    s += val;
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
        else if (grid.classRange50.data_select_panel30.length > 0) {
            let startRowIndex  = 0;
            let startCellIndex = grid.classRange50._startCellIndex;
            let lastRowIndex  = 0;
            let lastCellIndex = grid.classRange50._lastCellIndex;

            for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                    let val = grid.tbs_getFooterValueByIndex(rowIndex, colIndex);
                    if (grid.null(val)) val = '';
                    s += val;
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
        else {
            let startRowIndex  = grid._startRowIndex;
            let startCellIndex = grid._startCellIndex;
            let lastRowIndex  = grid._lastRowIndex;
            let lastCellIndex = grid._lastCellIndex;

            for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                    let val = grid.tbs_getValueByIndex(rowIndex, colIndex);
                    if (grid.null(val)) val = '';
                    s += val;
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
TbsGrid.prototype.event_input_icon = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
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
            // input_panel.style.width = '250px';
            // input_panel.style.height = '146px';
        }
        else if (colType == grid.code_combo) {
            grid.tbsGridCombo = new TbsGridCombo(grid, column, input, input_code);
            // input_panel.style.width = '200px';
            // input_panel.style.height = '146px';
        }
    }
    input_icon.addEventListener('mousedown', mousedownEvent);
}
TbsGrid.prototype.input_show = function(e, mode) { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;

    let lineWeight = 3;
    let rowIndex  = grid.startRowIndex;
    let cellIndex = grid.startCellIndex;

    let columns = grid.columns;
    let column = columns[cellIndex];
    let colType  = column[grid.column_type];

    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

    let panelMain =  document.querySelector(selector + ' .tbs-grid-main');
    let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
    if (td == null) return;

    let value  = this.tbs_getValue(rowIndex, column[grid.column_name]);
    let result = this.tbs_getFormat(column, value); //result.value, result.text

    if (column[grid.column_editable] == false) return;
    //if (columns[cellIndex].column_autoWidth == true) return;
    //if (grid.data_view[rowIndex].mode != 'I') return;

    grid.tbs_moveCellLine(td, rowIndex, cellIndex);

    let left = td.getBoundingClientRect().left;
    let top  = td.getBoundingClientRect().top;

    let leftMain = panelMain.getBoundingClientRect().left;
    let topMain = panelMain.getBoundingClientRect().top;

    if (mode == 'mouse') {
        if (colType == 'number' && grid.tbs_trim(result.text) == grid.options[grid.option_zeroChar]) input.value = '0';
        else input.value = result.text;
        input_code.value = result.value;
    }

    panelInput.style.top  = (top - topMain + lineWeight) + 'px';
    panelInput.style.left = (left - leftMain + lineWeight) + 'px';
    panelInput.style.height = (grid.rowHeight - lineWeight) + 'px';
    input.dataset.mode = mode;
    input.dataset.type = colType;
    input.dataset.rowIndex = grid.startRowIndex;
    input.dataset.cellIndex = grid.startCellIndex;
    input.dataset.click = '';

    if (colType == 'date') {
        let width = parseInt(column[[grid.column_width]]);
        panelInput.style.width = (width - 15 - 3) + 'px';

        input_icon.style.display = '';
        input_icon.style.top  = top  + 'px';
        input_icon.style.left = `${left + width - 15}px`;
        input_icon.dataset.type = colType;

        input_icon.src = grid.gridConfig.options.imageRoot + 'calendar.png';
    }
    else if (colType == grid.code_combo) {
        let width = parseInt(column[[grid.column_width]]);
        panelInput.style.width = (width - 15 - 3) + 'px';

        input_icon.style.display = '';
        input_icon.style.top  = top  + 'px';
        input_icon.style.left = `${left + width - 15}px`;
        input_icon.dataset.type = colType;

        input_icon.src = grid.gridConfig.options.imageRoot + 'down-arrow.png';
    }
    else {
        input_icon.style.diplay = 'none';
        input.style.backgroundRepeat = '';
        input.style.backgroundImage = '';
        input.style.backgroundPosition = '';
        input.style.backgroundSize = '';
        panelInput.style.width = (parseInt(column[[grid.column_width]]) - lineWeight) + 'px';
    }
    if (mode == 'mouse') input.select();
}
TbsGrid.prototype.input_hide = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    // date, combo layer
    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
    let input_panel= document.querySelector(selector + ' .tbs-grid-input-panel');

    panelInput.style.left = '30000px';
    panelInput.style.width = '0px';
    input.value = '';
    input_code.value = '';

    input.dataset.rowIndex = -1;
    input.dataset.cellIndex = -1;
    input.dataset.mode = '';
    input.dataset.type = '';

    input_icon.style.display = 'none';
    input_icon.dataset.rowIndex = -1;
    input_icon.dataset.cellIndex = -1;
    input_icon.dataset.mode = '';
    input_icon.dataset.type = '';

    // date, combo layer
    input_panel.innerHTML = '';
    input_panel.style.width = '0px';
    input_panel.style.left = '30000px';
    input_panel.dataset.rowIndex = -1;
    input_panel.dataset.cellIndex = -1;
    input_panel.dataset.mode = '';
    input_panel.dataset.type = '';


    if (this.tbsGridDate ) { this.tbsGridDate.tbs_destroy();  this.tbsGridDate = null; }
    if (this.tbsGridCombo) { this.tbsGridCombo.tbs_destroy(); this.tbsGridCombo = null; }
}
TbsGrid.prototype.input_focus = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    if (this.null(this.mobile)) document.querySelector(selector + ' .tbs-grid-input').focus();
}
/* Edit Start. */
TbsGrid.prototype.tbs_editStart = function(e, mode) {
    let selector = '#' + this.gridId;
    let grid = this;

    let state = 0;
    let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    let result = true;
    let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
    let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

    let column = grid.tbs_getColumnByIndex(cellIndex);
    let columnName = grid.tbs_getColumnName(cellIndex);
    let value = grid.tbs_getValue(rowIndex, columnName);
    let text  = grid.tbs_getText(rowIndex, columnName);

    let eventData = {};
    let eventRow = grid.tbs_getRow(rowIndex);
    eventRow.rowIndex    = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName  = columnName;
    eventRow.value       = value;
    eventRow.text        = text;
    eventRow.state       = state;
    eventRow.newValue    = input.value;
    if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
        let result = true;
        result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
        if (grid.null(result) || result == true) {
            grid.input_show(e, mode);
            //console.log(0);
        }
        else {
            //grid.input_hide(); grid.tbs_apply(); // not certain
            document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
        }
    }
}
/* Editing */
TbsGrid.prototype.tbs_editing = function(e, mode) {
    let selector = '#' + this.gridId;
    let grid = this;

    let state = 1;
    let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    if (input.dataset.cellIndex == -1) { grid.input_hide(); return; }

    let result = true;
    let rowIndex  = (state == 0) ? grid.startRowIndex  : input.dataset.rowIndex;
    let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

    let column = grid.tbs_getColumnByIndex(cellIndex);
    let columnName = grid.tbs_getColumnName(cellIndex);
    let value = grid.tbs_getValue(rowIndex, columnName);
    let text  = grid.tbs_getText(rowIndex, columnName);

    let eventData = {};
    let eventRow = grid.tbs_getRow(rowIndex);
    eventRow.rowIndex    = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName  = columnName;
    eventRow.value       = value;
    eventRow.text        = text;
    eventRow.state       = state;
    eventRow.newValue    = input.value;

    if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
        let result = true;
        if (state == 1 && panelInput.style.left != '30000px') {
            result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
            if (grid.null(result) || result == true) {

            }
            else {
                 grid.input_hide();
                 grid.tbs_apply();
            }
        }
    }
}
/* Edit End. */
TbsGrid.prototype.tbs_editEnd = function(e, mode) {
    let selector = '#' + this.gridId;
    let grid = this;

    let state = 2;
    let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input      = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    if (grid.null(input.dataset.cellIndex) || input.dataset.cellIndex == -1) {
        grid.input_hide();
    }
    else {
        let result = true;
        let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

        let column = grid.tbs_getColumnByIndex(cellIndex);
        let columnName = grid.tbs_getColumnName(cellIndex);
        let value = grid.tbs_getValue(rowIndex, columnName);
        let text  = grid.tbs_getText(rowIndex, columnName);

        let eventData = {};
        let eventRow = grid.tbs_getRow(rowIndex);
        eventRow.rowIndex    = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName  = columnName;
        eventRow.value       = value;
        eventRow.text        = text;
        eventRow.state       = state;
        eventRow.newValue    = input.value;

        if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
            let result = true;
            if (state == 2 && panelInput.style.left != '30000px') {
                result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
                if (grid.null(result) || result == true) {
                    //console.log(2);
                    let s = input.value;
                    if (column[grid.column_type] == grid.code_combo) s = input_code.value;
                    grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_getFormatValue(column, s));
                    grid.input_hide();
                    grid.tbs_apply();
                }
                else {
                    grid.input_hide();
                    grid.tbs_apply();
                }
            }
        }
    }
    document.querySelector(selector + ' .tbs-grid-input').blur();
}