/**
 * @rule :
 *
 * @description
 *  - CRUD base
 *  - tbs_selectRange = create
 *  - tbs_setRange = upadte
 *  - tbs_setRangeValue = update
 *  - tbs_removeRange = remove
 *
 *  - tbs_addRange = update feel
 */
//======================================================================================================================

/* Util functions */
TbsGrid.prototype.tbs_removePanelRange = function (panelName = '') {
    let selector = '#' + this.gridId;
    let grid = this;
    if (panelName == 'panel30') {
        document.querySelectorAll(selector + ' .tbs-grid-cell-start' ).forEach(cell => cell.classList.remove('tbs-grid-cell-start'));
        document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    }
    else if (panelName == 'panel60') {
        document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel62 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    }
    else if (panelName == 'panel40') {
        document.querySelectorAll(selector + ' .tbs-grid-panel41 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    }
    else if (panelName == 'panel50') {
        document.querySelectorAll(selector + ' .tbs-grid-panel51 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
        document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    }
}

//======================================================================================================================

/* Select Range functions : panel30, 31, 32 */

TbsGrid.prototype.tbs_selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (arguments.length == 2) {
        startCellIndex = 0;
        lastCellIndex = -1;
    }
    if (lastRowIndex  == -1) { lastRowIndex  = this.data_view.length - 1; }
    if (lastCellIndex == -1) { lastCellIndex = this.columns.length - 1;   }
    this.tbs_removePanelRange('panel40');
    this.tbs_removePanelRange('panel50');
    if (grid.topColumns.length > 0) grid.classRange40.class_removeRange(0, -1, 0, -1);
    if (grid.footerColumns.length > 0) grid.classRange50.class_removeRange(0, -1, 0, -1);
    return this.tbs_setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
}
TbsGrid.prototype.tbs_setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
    let selector = '#' + this.gridId;
    let grid = this;

    this.startRowIndex  = startRowIndex;
    this.startCellIndex = startCellIndex;
    this.lastRowIndex   = lastRowIndex;
    this.lastCellIndex  = lastCellIndex;

    let _startRowIndex= startRowIndex  > lastRowIndex  ? lastRowIndex   : startRowIndex;
    let _lastRowIndex = startRowIndex  > lastRowIndex  ? startRowIndex  : lastRowIndex;
    let _startCellIndex    = startCellIndex > lastCellIndex ? lastCellIndex  : startCellIndex;
    let _lastCellIndex     = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;

    this._startRowIndex  = _startRowIndex;
    this._startCellIndex = _startCellIndex;
    this._lastRowIndex   = _lastRowIndex;
    this._lastCellIndex  = _lastCellIndex;

    if (type == 'add' || this.selectRangeArray == 0) {
        let selectRange = {};
        selectRange.startRowIndex   = startRowIndex;
        selectRange.startCellIndex  = startCellIndex;
        selectRange.lastRowIndex    = lastRowIndex;
        selectRange.lastCellIndex   = lastCellIndex;
        selectRange._startRowIndex  = _startRowIndex;
        selectRange._startCellIndex = _startCellIndex;
        selectRange._lastRowIndex   = _lastRowIndex;
        selectRange._lastCellIndex  = _lastCellIndex;
        this.selectRangeArray.push(selectRange);
    }
    else {
        let selectRange = this.selectRangeArray[0];
        selectRange.startRowIndex   = startRowIndex;
        selectRange.startCellIndex  = startCellIndex;
        selectRange.lastRowIndex    = lastRowIndex;
        selectRange.lastCellIndex   = lastCellIndex;
        selectRange._startRowIndex  = _startRowIndex;
        selectRange._startCellIndex = _startCellIndex;
        selectRange._lastRowIndex   = _lastRowIndex;
        selectRange._lastCellIndex  = _lastCellIndex;
    }
    this.tbs_setRangeValue(_startRowIndex, _lastRowIndex, _startCellIndex, _lastCellIndex);
    if (this.fixedRowIndex == -1) {
        topRowIndex = (topRowIndex == undefined) ? this.tbs_getFirstRowIndex() : this.fixedRowIndex + 1;
    }
    else {
        topRowIndex = (topRowIndex == undefined) ? this.tbs_getFirstRowIndex() : topRowIndex;
    }
    return topRowIndex;
    // this.tbs_displayPanel30(topRowIndex);
}
TbsGrid.prototype.tbs_setRangeValue = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    // fcuntion : set selected value
    //console.log(`startRowIndex, lastRowIndex, startCellIndex, lastCellIndex`);
    //console.log(`${startRowIndex}, ${lastRowIndex}, ${startCellIndex}, ${lastCellIndex}`);
    let selector = '#' + this.gridId;
    let grid = this;

    if (this.options[grid.option_selectMode] == 'cell') {
        startRowIndex = startRowIndex;
        lastRowIndex  = startRowIndex;
    }
    //=============================================================	panel31 select
    let data = this.data_select_panel31;
    if (lastRowIndex == -1) lastRowIndex = data.length - 1;
    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
        let len = data.length;
        let bCount = false;
        for (let n = 0; n < len; n++) {
            if (rowIndex == data[n][0][0]) {
                bCount = true;
                data[n][1][0] = 1;
                break;
            }
        }
        if (bCount == false) {
            data.push([new Int32Array([rowIndex]), new Int8Array([1, 0, 0])]);
        }
    }
    //=============================================================	panel30 select
    let column = this.columns;
    let columnLen = column.length;
    data = this.data_select_panel30;

    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
        if (lastCellIndex == -1) lastCellIndex = column.length - 1;
        let len = data.length;
        let bCount = false;
        for (let n = 0; n < len; n++) {
            if (rowIndex == data[n][0][0]) {
                bCount = true;
                for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                    if (colIndex >= startCellIndex && colIndex <= lastCellIndex) {
                        data[n][1][colIndex] = 1;
                    }
                    else {
                        data[n][1][colIndex] = 0;
                    }
                }
                break;
            }
        }
        if (bCount == false) {
            let array = [];
            for (let colIndex = 0; colIndex < columnLen; colIndex++) array.push(0);
            let row = [new Int32Array([rowIndex]), new Int8Array(array)];
            for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                if (colIndex >= startCellIndex && colIndex <= lastCellIndex) row[1][colIndex] = 1;
                else row[1][colIndex] = 0;
            }
            data.push(row);
        }
    }

    if (this.headerRowCount > 1) {
        function selectCell(trList, colIndex){
            for (let i = trList.length - 1; i >=0; i--) {
                let cell = trList[i].childNodes[colIndex];
                if (cell.style.display == 'none') continue;
                else cell.classList.add('tbs-grid-cell-select');
            }
        }
        // panel20
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
        for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
        // panel22
        if (this.fixedColumnIndex != -1){
            trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
            for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
        }
    }
    else {
        // panel20
        let tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
        for (let i = startCellIndex; i <= lastCellIndex; i++) {
            tableCells[i].classList.add('tbs-grid-cell-select');
        }
        // panel22
        // if (this.fixedColumnIndex != -1){
        //     tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr:last-child td');
        //     for (let i = startCellIndex; i <= lastCellIndex; i++) {
        //
        //         tableCells[i].classList.add('tbs-grid-cell-select');
        //     }
        // }
    }
}
TbsGrid.prototype.tbs_removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (this.startRowIndex != -1) this.startRowIndex = -1;
    if (this.startCellIndex != -1) this.startCellIndex = -1;
    if (this.lastRowIndex != -1) this.lastRowIndex = -1;
    if (this.lastCellIndex != -1) this.lastCellIndex = -1;

    if (this._startRowIndex != -1) this._startRowIndex = -1;
    if (this._startCellIndex != -1) this._startCellIndex = -1;
    if (this._lastRowIndex != -1) this._lastRowIndex = -1;
    if (this._lastCellIndex != -1) this._lastCellIndex = -1;

    if (this.topLineDiv.style.width != '0px') this.topLineDiv.style.width = '0px';
    if (this.leftLineDiv.style.height != '0px') this.leftLineDiv.style.height = '0px';
    if (this.bottomLineDiv.style.width != '0px') this.bottomLineDiv.style.width = '0px';
    if (this.rightLineDiv.style.height != '0px') this.rightLineDiv.style.height = '0px';

    this.data_select_panel30 = [];
    this.data_select_panel31 = [];
    this.selectRangeArray = [];

    document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td').forEach(function(td) {
        td.classList.remove('tbs-grid-cell-select');
    });
    if (this.fixedColumnIndex != -1){
        document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table td').forEach(function(td) {
            td.classList.remove('tbs-grid-cell-select');
        });
    }

}
TbsGrid.prototype.tbs_addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (arguments.length == 2) {
        startCellIndex = 0;
        lastCellIndex = -1;
    }
    if (lastRowIndex  == -1) { lastRowIndex  = this.data_view.length - 1; }
    if (lastCellIndex == -1) { lastCellIndex = this.columns.length - 1;   }
    this.tbs_setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, 'add');
}
//======================================================================================================================