/**
 * @Rule Group Event
 *
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
        //console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
        //console.log(`isInPanel11 ${isInPanel80} isInPanel20 ${isInPanel20}`);
        if (isInPanel80) {
            if (grid.options[grid.option_groupVisible] == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
                let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();
            }
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();

            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
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
        flagLeft = false;
        flagRight = false;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
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

        if (grid.options[grid.option_movable]){
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
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(0, -1, startCellIndex, maxCellIndex);
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
            grid.tbs_removeRange(0, -1);
			grid.tbs_selectRange(0, -1, startCellIndex, minCellIndex);
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
            if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                flagRight = false;
                grid.tbs_removeRange(0, -1);
				grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
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
                grid.tbs_removeRange(0, -1);
				grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        } 
        //==================================================================
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;
                grid.tbs_removeRange(0, -1);
				grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
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
                grid.tbs_removeRange(0, -1);
				grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
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
