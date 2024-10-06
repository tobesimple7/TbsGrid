import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridRange {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    removePanelRange = function (panelName = '') {
        let selector = this.selector;
        const grid = this.grid;

        if (panelName == 'panel30') {
            document.querySelectorAll(selector + ' .tbs-grid-cell-start' ).forEach(cell => cell.classList.remove('tbs-grid-cell-start'));
            document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
            document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
            document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
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

    selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.column_table.count() == 0) {
            return;
        }

        if (arguments.length == 2) {
            startCellIndex = 0;
            lastCellIndex = -1;
        }
        if (lastRowIndex  == -1) { lastRowIndex  = grid.view_table.count() - 1; }
        if (lastCellIndex == -1) { lastCellIndex = grid.column_table.count() - 1;   }
        grid.classRange.removePanelRange('panel40');
        grid.classRange.removePanelRange('panel50');
        if (grid.top_table.count() > 0) grid.classRange40.removeRange(0, -1, 0, -1);
        if (grid.footer_table.count() > 0) grid.classRange50.removeRange(0, -1, 0, -1);
        return grid.classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
    }

    setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
        let selector = this.selector;
        const grid = this.grid;

        grid.startRowIndex  = startRowIndex;
        grid.startCellIndex = startCellIndex;
        grid.lastRowIndex   = lastRowIndex;
        grid.lastCellIndex  = lastCellIndex;

        let _startRowIndex= startRowIndex  > lastRowIndex  ? lastRowIndex   : startRowIndex;
        let _lastRowIndex = startRowIndex  > lastRowIndex  ? startRowIndex  : lastRowIndex;
        let _startCellIndex    = startCellIndex > lastCellIndex ? lastCellIndex  : startCellIndex;
        let _lastCellIndex     = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;

        grid._startRowIndex  = _startRowIndex;
        grid._startCellIndex = _startCellIndex;
        grid._lastRowIndex   = _lastRowIndex;
        grid._lastCellIndex  = _lastCellIndex;

        if (type == 'add' || grid.selectRangeArray == 0) {
            let selectRange = {};
            selectRange.startRowIndex   = startRowIndex;
            selectRange.startCellIndex  = startCellIndex;
            selectRange.lastRowIndex    = lastRowIndex;
            selectRange.lastCellIndex   = lastCellIndex;
            selectRange._startRowIndex  = _startRowIndex;
            selectRange._startCellIndex = _startCellIndex;
            selectRange._lastRowIndex   = _lastRowIndex;
            selectRange._lastCellIndex  = _lastCellIndex;
            grid.selectRangeArray.push(selectRange);
        }
        else {
            let selectRange = grid.selectRangeArray[0];
            selectRange.startRowIndex   = startRowIndex;
            selectRange.startCellIndex  = startCellIndex;
            selectRange.lastRowIndex    = lastRowIndex;
            selectRange.lastCellIndex   = lastCellIndex;
            selectRange._startRowIndex  = _startRowIndex;
            selectRange._startCellIndex = _startCellIndex;
            selectRange._lastRowIndex   = _lastRowIndex;
            selectRange._lastCellIndex  = _lastCellIndex;
        }
        grid.classRange.setRangeValue(_startRowIndex, _lastRowIndex, _startCellIndex, _lastCellIndex);

        topRowIndex = (topRowIndex == undefined) ? grid.getFirstRowIndex() : topRowIndex;

        return topRowIndex;
    }

    setRangeValue = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.options[tbsGridNames.row.selectMode] == 'cell') {
            startRowIndex = startRowIndex;
            lastRowIndex  = startRowIndex;
        }
        //=============================================================	panel31 select
        let data = grid.data_select_panel31;
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
        let column = grid.column_table.data;
        let columnLen = column.length;
        data = grid.data_select_panel30;

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

        if (grid.headerRowCount > 1) {
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
            if (grid.fixedColumnIndex != -1){
                trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
                for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
            }
        }
        else {
            // panel20
            const tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
            if (tableCells.length == 0) return;
            for (let i = startCellIndex; i <= lastCellIndex; i++) {
                tableCells[i].classList.add('tbs-grid-cell-select');
            }
        }
    }

    removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.startRowIndex != -1) grid.startRowIndex = -1;
        if (grid.startCellIndex != -1) grid.startCellIndex = -1;
        if (grid.lastRowIndex != -1) grid.lastRowIndex = -1;
        if (grid.lastCellIndex != -1) grid.lastCellIndex = -1;

        if (grid._startRowIndex != -1) grid._startRowIndex = -1;
        if (grid._startCellIndex != -1) grid._startCellIndex = -1;
        if (grid._lastRowIndex != -1) grid._lastRowIndex = -1;
        if (grid._lastCellIndex != -1) grid._lastCellIndex = -1;

        if (grid.topLineDiv.style.width != '0px') grid.topLineDiv.style.width = '0px';
        if (grid.leftLineDiv.style.height != '0px') grid.leftLineDiv.style.height = '0px';
        if (grid.bottomLineDiv.style.width != '0px') grid.bottomLineDiv.style.width = '0px';
        if (grid.rightLineDiv.style.height != '0px') grid.rightLineDiv.style.height = '0px';

        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
        grid.selectRangeArray = [];

        document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td').forEach(function(td) {
            td.classList.remove('tbs-grid-cell-select');
        });
        if (grid.fixedColumnIndex != -1){
            document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table td').forEach(function(td) {
                td.classList.remove('tbs-grid-cell-select');
            });
        }

    }

    addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        let selector = this.selector;
        const grid = this.grid;

        if (arguments.length == 2) {
            startCellIndex = 0;
            lastCellIndex = -1;
        }
        if (lastRowIndex  == -1) { lastRowIndex  = grid.view_table.count() - 1; }
        if (lastCellIndex == -1) { lastCellIndex = grid.column_table.count() - 1;   }
        grid.classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, 'add');
    }
}


