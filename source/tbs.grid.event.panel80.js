/**
 * tbs.grid.panel20.js
 *
 */
TbsGrid.prototype.panel80_select = function() { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;
    
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex , lastCellIndex , lastX , lastY;

    let targetName;

    let mouseButton = 0; 

    let flagUp      = false;
    let flagDown    = false;
    let flagLeft    = false;
    let flagRight   = false;

    let moveCell;
    let moveCellLeft;
    let moveCellTop;
    let moveCellIndex;
    let moveCellRowIndex;

    let panel80= document.querySelector(selector + ' .tbs-grid-panel80');
    const mouseDownEvent = function(e) {
        let element;

        if      (e.target.classList.contains('tbs-grid-panel-button-icon')) { targetName = 'icon'   ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-button-text')) { targetName = 'text'   ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-button'))      { targetName = 'button' ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-bar'))         { targetName = 'bar'    ; element = e.target; }
        else return;

        grid.startX = startX = window.scrollX + e.clientX;
        grid.startY = startY = window.scrollY + e.clientY;

        grid.lastX = lastX = window.scrollX + e.clientX;
        grid.lastY = lastY = window.scrollY + e.clientY;

        if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                selectCell(e, panel80);
            }
            else if (window.event.shiftKey) {
                selectCellShift(e, panel80);
            }
        }
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseup', mouseUpEvent);
    };

    const mouseMoveEvent = function(e) {
        e.preventDefault();
        e.stopPropagation(); 
        if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                selectCellMove(e, panel80);
            }
        }
    };
    
    const mouseUpEvent = function(e) {
        grid.lastX = lastX = window.pageXOffset + e.clientX;
        grid.lastY = lastY = window.pageYOffset + e.clientY;
        let isInPanel80 = grid.tbs_isInPanel(e, 'panel80', lastX, lastY);
        let isInPanel20 = grid.tbs_isInPanel(e, 'panel20', lastX, lastY);
        //console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
        //console.log(`isInPanel11 ${isInPanel80} isInPanel20 ${isInPanel20}`);
//=============================================================================================
        if (isInPanel80) {
            if (grid.options.grouping[grid.option_groupVisible] == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
                let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();
                // moveCell 의 정보가 없다.
            }
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            flagLeft = false;
            flagRight = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
        }
//=============================================================================================
        else if (isInPanel20) {
            //let isInArea = grid.tbs_isInPanel(e, 'panel20', lastX, lastY);
            //if (isInArea) {
            if (mouseButton == 0 && startX > lastX - grid.grid_mousePointRange && startX < lastX + grid.grid_mousePointRange
                && startY > lastY - grid.grid_mousePointRange && startY < lastY + grid.grid_mousePointRange) {
                grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
            } else {
                const changeColumnOrder = function () {
                    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
                    let columns = grid.columns;
                    let rowLen = trList.length;
                    let colLen = columns.length;
                    let arr = [];
                    for (let x = 0; x < colLen; x++) {
                        for (let i = 0; i < rowLen; i++) {
                            let cell = trList[i].childNodes[x];
                            if (cell.dataset.name == '') continue;
                            arr.push(cell.dataset.name);
                        }
                    }
                    let colList = [];
                    for (let i = 0, len = arr.length; i < len; i++) {
                        for (let x = 0; x < colLen; x++) {
                            if (arr[i] == columns[x][grid.column_name]) {
                                colList.push(JSON.parse(JSON.stringify(columns[x])));
                                break;
                            }
                        }
                    }
                    grid.columns = JSON.parse(JSON.stringify(colList));
                }
                const changeHeaderColumnOrder = function (moveCell, targetCell, direction) { //2022.05.11
                    const splice = function (arr, copyArr, selectIndex, targetIndex, direction) {
                        if (direction == 'after') targetIndex += 1;
                        arr.splice(targetIndex, 0, JSON.parse(JSON.stringify(copyArr[selectIndex]))); //splice  before function
                        for (let x = 0, colLen = arr.length; x < colLen; x++) {
                            arr[x].colIndex = x;
                        }
                    }
                    let headerColumns = grid.headerColumns;
                    let movingHeaderColumn = headerColumns[moveCell.parentNode.rowIndex - 1][moveCell.cellIndex];

                    let startRowIndex = movingHeaderColumn[grid.column_rowIndex];
                    let lastRowIndex = grid.headerColumns.length - 1;

                    let startColIndex = movingHeaderColumn[grid.column_colIndex];
                    let lastColIndex = startColIndex + moveCell.colSpan - 1;

                    let targetColIndex = (direction == 'after') ? targetCell.cellIndex + targetCell.colSpan - 1 : targetCell.cellIndex;
                    let copyHeaderColumns = JSON.parse(JSON.stringify(grid.headerColumns));
                    for (let i = startRowIndex; i <= lastRowIndex; i++) {
                        for (let x = lastColIndex; x >= startColIndex; x--) {
                            splice(headerColumns[i], copyHeaderColumns[i], x, targetColIndex, direction);
                        }
                    }
                    for (let i = startRowIndex; i <= lastRowIndex; i++) {
                        let delIndex = (targetColIndex < startColIndex) ? startColIndex + moveCell.colSpan : startColIndex;
                        headerColumns[i].splice(delIndex, moveCell.colSpan);
                        for (let x = 0, colLen = grid.columns.length; x < colLen; x++) {
                            //console.log(`i ${i} x ${x}`);
                            grid.headerColumns[i][x][grid.column_colIndex] = x;
                        }
                    }
                }
                if (grid.options.column[grid.option_movable] && document.querySelectorAll('.tbs-grid-move').length > 0) {
                    let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
                    let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();

                    let headerColumns = grid.headerColumns;
                    let xPos = window.pageXOffset + e.clientX;
                    let movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
                    let targetCol;
                    let tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');
                    let posWidth = 50;

                    for (let x = 0, len = tdList20.length; x < len; x++) {
                        let cell = tdList20[x];
                        targetCol = headerColumns[cell.parentNode.rowIndex - 1][cell.cellIndex];
                        if (rectMoveCell.right < rectPanel30.left || rectPanel30.right < rectMoveCell.left) {
                        } else {
                            //let direction;
                            let b = false;
                            if ((xPos - posWidth <= cell.getBoundingClientRect().left && cell.getBoundingClientRect().left <= xPos + posWidth)
                                && movingColumn[grid.column_rowIndex] == targetCol[grid.column_rowIndex]
                                && movingColumn[grid.column_parentNum] == targetCol[grid.column_parentNum]  //column_parentNum
                                && moveCell.cellIndex != cell.cellIndex) {
                                changeHeaderColumnOrder(moveCell, cell, 'before');
                                direction = 'before';
                                b = true;
                                break;
                            }
                            if (!b) {
                                if ((xPos - posWidth <= cell.getBoundingClientRect().right && cell.getBoundingClientRect().right <= xPos + posWidth)
                                    && movingColumn[grid.column_rowIndex] == targetCol[grid.column_rowIndex]
                                    && movingColumn[grid.column_parentNum] == targetCol[grid.column_parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    changeHeaderColumnOrder(moveCell, cell, 'after');
                                    direction = 'after';
                                    break;
                                }
                            }
                        }
                    }
                    grid.tbs_displayPanel20();
                    changeColumnOrder();

                    if (grid.topColumns.length > 0) grid.tbs_displayPanel40('panel40', grid.topColumns);
                    if (grid.footerColumns.length > 0) grid.tbs_displayPanel50('panel50', grid.footerColumns);

                    let columns = grid.columns;
                    let tableRows20 = document.querySelectorAll(selector + ' .tbs-grid-panel20  thead th');
                    let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30  thead th');

                    for (let i = 0, len = columns.length; i < len; i++) {
                        let column = columns[i];
                        let styleWidth = column[grid.column_width] + 'px';
                        tableRows20[i].style.width = styleWidth;
                        tableRows30[i].style.width = styleWidth;
                    }
                    grid.tbs_clearRange(0, -1);
                    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
                }
                if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
                flagLeft = false;
                flagRight = false;
            }
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
            grid.input_focus();
        }
        else {
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            flagLeft = false;
            flagRight = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
        }
    };
    
    const selectCell = function(e, table) {
        let element;
        if      (e.target.classList.contains('tbs-grid-panel-button-icon')) { targetName = 'icon'   ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-button-text')) { targetName = 'text'   ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-button'))      { targetName = 'button' ; element = e.target; }
        else if (e.target.classList.contains('tbs-grid-panel-bar'))         { targetName = 'bar'    ; element = e.target; }
        else return;

        if (targetName == 'icon') {
            grid.tbs_removeGroupButton(element);
        }
        else {

        }
    }
    
    const selectCellMove = function(e, table) {
        let col = e.target.closest('.tbs-grid-cell');

        flagLeft    = false;
        flagRight   = false;

        startX = grid.startX;
        startY = grid.startY;

        grid.lastX = lastX = window.pageXOffset + e.clientX;
        grid.lastY = lastY = window.pageYOffset + e.clientY;
        //console.log(`selectCellMove ${startX} == ${lastX} ${startY} == ${lastY}`);

        let moveY = lastY - startY;
        let moveX = lastX - startX;

        if (grid.options.column[grid.option_movable]){
            let moveDiv = document.querySelector('.tbs-grid-move');
            if (moveDiv){
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top  = (lastY - moveCellTop) + 'px';

                if (   Math.abs(moveX) > grid.grid_mousePointRange
                    || Math.abs(moveY) > grid.grid_mousePointRange) {
                    moveDiv.style.display = '';
                }
            }
            //console.log(`111 ${startX} == ${lastX} ${startY} == ${lastY}`);
        }
        else {
            select(startCellIndex, moveX, moveY, lastX, lastY);
            //console.log(`222 ${startX} == ${lastX} ${startY} == ${lastY}`);
        }
        let rect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
        let rectLeft = window.pageXOffset + rect.left;
        let rectRight = window.pageXOffset + rect.right;
        let type = '';
        if (lastX < rectLeft) {
            flagLeft = true
            type = 'left';
            doInterval(type, lastX, lastY);
        }
        if (lastX > rectRight) {
            flagRight = true
            type = 'right';
            doInterval(type, lastX, lastY);
        }
    }
    
    const selectCellShift = function(e, table) {}
    
    const select = function(startCellIndex, moveX, moveY, lastX, lastY) {
        let tableRect = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
        let top    = window.pageYOffset + tableRect.top;
        let bottom = window.pageYOffset + tableRect.bottom;

        let sumRect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
        let right = window.pageXOffset + sumRect.right;
        let left  = window.pageXOffset + sumRect.left;

        //if (lastX > right) grid.tbs_setBarPositionByDirection('right');
        //if (lastX < left) grid.tbs_setBarPositionByDirection('left');
        //==================================================================
        let arr = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td:not([data-name=""])');
        let tdList = Array.from(arr).sort(function(a, b) { 
            a = a.cellIndex; 
            b = b.cellIndex; 
            if (a > b) return 1; 
            if (a < b) return -1; 
            return 0; 
        });
        if (moveX > 0) { 
            let maxCellIndex;
            for (let x = 0, len = tdList.length; x < len; x++) {
                let cell =  tdList[x];
                if (grid.columns[x][grid.column_visible] == false) continue;
                let left = window.pageXOffset + cell.getBoundingClientRect().left;
                if (lastX > left) maxCellIndex = cell.cellIndex;
            }
            grid.tbs_clearRange(0, -1);
            grid.tbs_selectedRange(0, -1, startCellIndex, maxCellIndex);
        }
        //==================================================================
        if (moveX < 0) {
            let minCellIndex;
            for (let x = tdList.length - 1; x >= 0; x--) {
                let cell =  tdList[x];
                if (grid.columns[x][grid.column_visible] == false) continue;
                let right = window.pageXOffset + cell.getBoundingClientRect().right;
                if (lastX < right) minCellIndex = cell.cellIndex;
            }                        
            grid.tbs_clearRange(0, -1);
			grid.tbs_selectedRange(0, -1, startCellIndex, minCellIndex);
        } 
        //==================================================================
    }
    
    const selectRefresh = function(type, lastX, lastY) {
        let content = document.querySelector(selector + ' .tbs-grid-panel30');
        let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');

	    let startRowIndex  = grid.startRowIndex;
	    let lastRowIndex   = grid.lastRowIndex;
	    let startCellIndex = grid.startCellIndex;
	    let lastCellIndex  = grid.lastCellIndex;

        let trCount = trContent.length;
        let tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
        let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
        if (type == 'right') {
            if (table.style.left == (-1 * grid.scroll.xHiddenSize) + 'px') {
                flagRight = false;
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
            }
            else {
                grid.tbs_setBarPositionByDirection('right');
                for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                    for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                        if (grid.columns[cellIndex][grid.column_visible] == false) continue;
                        let left = window.pageXOffset + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                        if (lastX > left) maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
                    }                        
                }
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        } 
        //==================================================================
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex, 0);
            }
            else {
                grid.tbs_setBarPositionByDirection('left');
                for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
                    for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                        if (grid.columns[cellIndex][grid.column_visible] == false) continue;
                        let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                        if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex; 
                    }                        
                }   
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
        //==================================================================
        else if (type == 'down') {
        //==================================================================
            grid.tbs_setBarPositionByDirection('down');
            if (lastRowIndex < (grid.data_view.length - 1)) {
                lastRowIndex += 1;
                grid.tbs_clearRange(0, -1);
                grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex,lastCellIndex);
            }
            else flagDown = false;

        }
        //==================================================================
        else if (type == 'up') {
        //==================================================================
            grid.tbs_setBarPositionByDirection('up');
            if (lastRowIndex != 0) {
                lastRowIndex -= 1;
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            }
            else flagUp = false;
        }
        //==================================================================
    }
    
    const doInterval = function(type, lastX, lastY) {
        if (flagLeft) {
                //flagLeft  = false;
            flagRight   = false;
			setTimeout(function() {doInterval('left', lastX, lastY);}, 5);
            selectRefresh('left', lastX, lastY);
        }
        if (flagRight) {
            flagLeft    = false;
            //flagRight = false;
			setTimeout(function() {doInterval('right', lastX, lastY);}, 5);
            selectRefresh('right', lastX, lastY);
        }
    }

    panel80.addEventListener('mousedown', mouseDownEvent);
}
