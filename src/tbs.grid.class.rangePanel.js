/**
 * Select Range functions : panel40, 41, 42
 * Select Range functions : panel50, 51, 52
 */
class TbsGridRangePanel {
    constructor(grid, panelName) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
        this.panelName  = panelName;

        this.startRowIndex  = -1;
        this.startCellIndex = -1;
        this.lastRowIndex   = -1;
        this.lastCellIndex  = -1;

        this._startRowIndex = -1;
        this._startCellIndex = -1;
        this._lastRowIndex = -1;
        this._lastCellIndex = -1;

        this.selectRangeArray = [];

        this.data_select_panel31 = [];
        this.data_select_panel30 = [];
        this.data_summary = [];

        if (this.panelName == 'panel40') {
            this.data_summary = grid.data_top;
        }
        else if (this.panelName == 'panel50') {
            this.data_summary = grid.data_footer;
        }
    }

    selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;

        if (arguments.length == 2) {
            startCellIndex = 0;
            lastCellIndex = -1;
        }
        if (lastRowIndex  == -1) { lastRowIndex  = grid.data_summary.length - 1; }
        if (lastCellIndex == -1) { lastCellIndex = grid.columns.length - 1; }

        if (panelName == 'panel40') grid.classRange50.removeRange(0, -1, 0, -1);
        else if (panelName == 'panel50') grid.classRange40.removeRange(0, -1, 0, -1);

        classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
    }

    setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;

        classRange.startRowIndex  = startRowIndex;
        classRange.startCellIndex = startCellIndex;
        classRange.lastRowIndex   = lastRowIndex;
        classRange.lastCellIndex  = lastCellIndex;

        let _startRowIndex  = startRowIndex  > lastRowIndex  ? lastRowIndex   : startRowIndex;
        let _lastRowIndex   = startRowIndex  > lastRowIndex  ? startRowIndex  : lastRowIndex;
        let _startCellIndex = startCellIndex > lastCellIndex ? lastCellIndex  : startCellIndex;
        let _lastCellIndex  = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;

        classRange._startRowIndex  = _startRowIndex;
        classRange._startCellIndex = _startCellIndex;
        classRange._lastRowIndex   = _lastRowIndex;
        classRange._lastCellIndex  = _lastCellIndex;

        if (type == 'add' || classRange.selectRangeArray == 0) {
            let selectRange = {};
            classRange.startRowIndex   = startRowIndex;
            classRange.startCellIndex  = startCellIndex;
            classRange.lastRowIndex    = lastRowIndex;
            classRange.lastCellIndex   = lastCellIndex;
            classRange._startRowIndex  = _startRowIndex;
            classRange._startCellIndex = _startCellIndex;
            classRange._lastRowIndex   = _lastRowIndex;
            classRange._lastCellIndex  = _lastCellIndex;
            classRange.selectRangeArray.push(selectRange);
        }
        else {
            let selectRange = classRange.selectRangeArray[0];
            classRange.startRowIndex   = startRowIndex;
            classRange.startCellIndex  = startCellIndex;
            classRange.lastRowIndex    = lastRowIndex;
            classRange.lastCellIndex   = lastCellIndex;
            classRange._startRowIndex  = _startRowIndex;
            classRange._startCellIndex = _startCellIndex;
            classRange._lastRowIndex   = _lastRowIndex;
            classRange._lastCellIndex  = _lastCellIndex;
        }
        classRange.setRangeValue(_startRowIndex, _lastRowIndex, _startCellIndex, _lastCellIndex);
        if (grid.fixedRowIndex == -1) {
            topRowIndex = (topRowIndex == undefined) ? grid.tbs_getFirstRowIndex() : classRange.fixedRowIndex + 1;
        }
        else {
            topRowIndex = (topRowIndex == undefined) ? grid.tbs_getFirstRowIndex() : topRowIndex;
        }
        grid.classPanel30.setDataPanel(topRowIndex);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    }

    setRangeValue(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        // fcuntion : set selected value
        //console.log(`startRowIndex, lastRowIndex, startCellIndex, lastCellIndex`);
        //console.log(`${startRowIndex}, ${lastRowIndex}, ${startCellIndex}, ${lastCellIndex}`);
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;

        if (grid.options[grid.option_selectMode] == 'cell') {
            startRowIndex = startRowIndex;
            lastRowIndex  = startRowIndex;
        }
        //=============================================================	panel31 select
        let data = classRange.data_select_panel31;
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
        let column = grid.columns;
        let columnLen = column.length;
        data = classRange.data_select_panel30;

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
        /*
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
            let tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
            for (let i = startCellIndex; i <= lastCellIndex; i++) {
                tableCells[i].classList.add('tbs-grid-cell-select');
            }
            // panel22
            if (grid.fixedColumnIndex != -1){
                tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr:last-child td');
                for (let i = startCellIndex; i <= lastCellIndex; i++) {

                    tableCells[i].classList.add('tbs-grid-cell-select');
                }
            }
        }
        */
    }

    removeRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;

        if (classRange.startRowIndex != -1) classRange.startRowIndex = -1;
        if (classRange.startCellIndex != -1) classRange.startCellIndex = -1;
        if (classRange.lastRowIndex != -1) classRange.lastRowIndex = -1;
        if (classRange.lastCellIndex != -1) classRange.lastCellIndex = -1;

        if (classRange._startRowIndex != -1) classRange._startRowIndex = -1;
        if (classRange._startCellIndex != -1) classRange._startCellIndex = -1;
        if (classRange._lastRowIndex != -1) classRange._lastRowIndex = -1;
        if (classRange._lastCellIndex != -1) classRange._lastCellIndex = -1;

        // if (grid.topLineDiv.style.width != '0px') grid.topLineDiv.style.width = '0px';
        // if (grid.leftLineDiv.style.height != '0px') grid.leftLineDiv.style.height = '0px';
        // if (grid.bottomLineDiv.style.width != '0px') grid.bottomLineDiv.style.width = '0px';
        // if (grid.rightLineDiv.style.height != '0px') grid.rightLineDiv.style.height = '0px';

        classRange.data_select_panel30 = [];
        classRange.data_select_panel31 = [];
        classRange.selectRangeArray = [];

        document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td').forEach(function(td) {
            td.classList.remove('tbs-grid-cell-select');
        });
        if (this.fixedColumnIndex != -1){
            document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table td').forEach(function(td) {
                td.classList.remove('tbs-grid-cell-select');
            });
        }
    }

    addRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;

        if (arguments.length == 2) {
            startCellIndex = 0;
            lastCellIndex = -1;
        }
        if (lastRowIndex  == -1) { lastRowIndex  = classRange.data_summary.length - 1; }
        if (lastCellIndex == -1) { lastCellIndex = grid.columns.length - 1;   }
        classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, 'add');
    }

    getMaxCellIndexByMouseMove() {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;
        let panelName2;
        let panelName0;
        if (panelName == 'panel40') {
            panelName2 = 'panel42';
            panelName0 = 'panel40';
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }
        let maxCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = classRange.getMaxCellIndexByMouseMove2(panelName2); if (num != undefined) rowIndexArray.push(num);
            num = classRange.getMaxCellIndexByMouseMove2(panelName0); if (num != undefined) rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        } else {
            maxCellIndex = classRange.getMaxCellIndexByMouseMove2(panelName0);
        }
        return maxCellIndex;
    }

    getMinCellIndexByMouseMove() {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;
        let panelName2;
        let panelName0;
        if (panelName == 'panel40') {
            panelName2 = 'panel42';
            panelName0 = 'panel40';
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }

        let minCellIndex;
        const rowIndexArray = [];
        if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
            num = classRange.getMinCellIndexByMouseMove2(panelName2); if (num != undefined) rowIndexArray.push(num);
            num = classRange.getMinCellIndexByMouseMove2(panelName0); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedRowIndex != -1) {
            num = classRange.getMinCellIndexByMouseMove2(panelName0); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedColumnIndex != -1) {
            num = classRange.getMinCellIndexByMouseMove2(panelName2); if (num != undefined) rowIndexArray.push(num);
            num = classRange.getMinCellIndexByMouseMove2(panelName0); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        } else {
            minCellIndex = classRange.getMinCellIndexByMouseMove2(panelName0);
        }
        return minCellIndex;
    }

    getMaxCellIndexByMouseMove2(panelName) {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;

        let lastX = grid.lastX;
        let maxCellIndex;
        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRow = tableRows[0];
        let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;

        let startColumnIndex, lastColumnIndex;
        if (grid.fixedColumnIndex != -1) {
            if (panelName == 'panel42' || panelName == 'panel52') {
                startColumnIndex = 0;
                lastColumnIndex = grid.fixedColumnIndex + 1;
            }
            else if (panelName == 'panel40' || panelName == 'panel50') {
                startColumnIndex = grid.fixedColumnIndex + 1;
                lastColumnIndex = len;
            }
        }
        else {
            startColumnIndex = 0;
            lastColumnIndex = len;
        }
        for (let x = startColumnIndex; x < lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x];
            let column = grid.columns[x];
            if (column[grid.column_visible] == false) continue;
            let rect = grid.tbs_getOffset(tableCell);
            let rectLeft = rect.left;
            //console.log(`rect2.left ${rect2.left} rectLeft ${rectLeft} lastX ${lastX} `);
            if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex
    }

    getMinCellIndexByMouseMove2(panelName) {
        let selector = this.selector;
        let grid = this.grid;
        let classRange = this;

        let lastX = grid.lastX;
        let minCellIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRow = tableRows[0];
        let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        let startColumnIndex, lastColumnIndex;
        if (grid.fixedColumnIndex != -1) {
            if (panelName == 'panel42' || panelName == 'panel52') {
                startColumnIndex = 0;
                lastColumnIndex = grid.fixedColumnIndex;
            }
            else if (panelName == 'panel40' || panelName == 'panel50') {
                startColumnIndex = grid.fixedColumnIndex + 1;
                lastColumnIndex = len - 1;
            }
        }
        else {
            startColumnIndex = 0;
            lastColumnIndex = len - 1;
        }
        for (let x = lastColumnIndex; x >= startColumnIndex; x--) {
            let tableCell = tableRow.childNodes[x];
            let column = grid.columns[x];
            if (column[grid.column_visible] == false) continue;
            let rect = grid.tbs_getOffset(tableCell);
            let rectRight= rect.left + tableCell.getBoundingClientRect().width;
            if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    }
}

