/**
 * tbs.grid.panel31.js
 *
 */
TbsGrid.prototype.panel31_select = function() { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;

    let clearRowIndex = -1; 
    let clearRowIndex2 = -1;
    let clearCellIndex = -1;
    let clearCellIndex2 = -1;

    let flagUp      = false;
    let flagDown    = false;
    let flagLeft    = false;
    let flagRight   = false;

    let table = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');

    const mouseDownEvent = function (e) {
        if  (e.target.tagName == 'INPUT') return;
        let col = (e.target.tagName == 'TD') ? e.target : e.target.parentNode;
		let tableRowIndex = col.parentNode.rowIndex;
		startRowIndex = grid.tbs_getRowIndexInTable(col.parentNode.rowIndex);
        let startTrRowIndex = col.parentNode.rowIndex;
        lastRowIndex = -1;

        startCellIndex = col.cellIndex;
        lastCellIndex = -1;

        startX = window.pageXOffset + e.clientX;
        startY = window.pageYOffset + e.clientY;
        //================================================================
        if (window.event.ctrlKey) {
            //grid.selectStartCell(startRowIndex, tableRowIndex, startCellIndex);
            selectCellCtrl(e, table);
        }
        if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                //grid.selectStartCell(startRowIndex, tableRowIndex, startCellIndex);
                selectCell(e, table);  
            }
            if (window.event.shiftKey) {
                selectCellShift(e, table);
            }
        }
        //================================================================
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseMoveEvent = function (e) {
        e.preventDefault();
        e.stopPropagation(); 
        //if (grid.option_selectOne == true) return;
        if (grid.options[grid.option_selectMode] == 'cell') return;
        if (window.event.ctrlKey) {
            selectCellCtrlMove(e, table);
        }
        if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                selectCellMove(e, table);
            }
        }
    };
    const mouseUpEvent = function (e) {
        flagUp      = false;
        flagDown    = false;
        flagLeft    = false;
        flagRight   = false;
        clearRowIndex = -1; 
        clearRowIndex2 = -1;
        clearCellIndex = -1;
        clearCellIndex2 = -1;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
        grid.input_focus();
    };
    const selectCell = function(e, table) { //clearType : '', clear
        let col = (e.target.tagName == 'TD') ? e.target : e.target.parentNode;
		let rowIndex = grid.tbs_getRowIndexInTable(col.parentNode.rowIndex);
        //-----------------------------------------------------------
        grid.tbs_clearRange(0, -1);
        grid.tbs_selectedRange(rowIndex, rowIndex);
        //-----------------------------------------------------------
    }
    const selectCellMove = function(e, table) {
        flagUp      = false;
        flagDown    = false;
        flagLeft    = false;
        flagRight   = false;

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display:"])');
        lastX =  window.pageXOffset + e.clientX;
        lastY = window.pageYOffset + e.clientY;

        let moveY = lastY - startY; 
        let moveX = lastX - startX;

        select(tableRows, startRowIndex, startCellIndex, moveX, moveY, lastX, lastY);

        let leftRect = document.querySelector(selector + ' .tbs-grid-panel31').getBoundingClientRect();
        let leftRectTop = window.pageYOffset + leftRect.top;
        let leftRectBottom = window.pageYOffset + leftRect.bottom;
        let leftRectLeft = window.pageXOffset + leftRect.left;
        let leftRectRight = window.pageXOffset + leftRect.right;

        let contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
        let contentRectTop = window.pageYOffset + contentRect.top;
        let contentRectBottom = window.pageYOffset + contentRect.bottom;
        let contentRectLeft = window.pageXOffset + contentRect.left;
        let contentRectRight = window.pageXOffset + contentRect.right;

        let type = '';
        if (lastY < leftRectTop || lastY > leftRectBottom) { 
            if (lastY < leftRectTop) {
                flagUp = true
                type = 'up';
                doInterval(type, lastX, lastY);
            }
            if (lastY > leftRectBottom) {
                flagDown = true
                type = 'down';
                doInterval(type, lastX, lastY);
            }
        }
        else {
            if (lastX < leftRectLeft) {
                flagLeft = true
                type = 'left';
                doInterval(type, lastX, lastY);
            }
            if (lastX > contentRectRight) {
                flagRight = true
                type = 'right';
                doInterval(type, lastX, lastY);
            }
        }
    }
    const selectCellCtrl = function(e, table) {
        let col = (e.target.tagName == 'TD') ? e.target : e.target.parentNode;
        let cellIndex = col.cellIndex; //e.cellIndex
        let rowIndex = grid.tbs_getRowIndexInTable(col.parentNode.rowIndex);
        //-----------------------------------------------------------
        grid.tbs_selectedRange(rowIndex, rowIndex, cellIndex, cellIndex);
        //-----------------------------------------------------------
    }
    const selectCellCtrlMove = function(e, table) {
        let trLeft = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display:"])');
        let trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
        lastX = e.clientX;
        lastY = e.clientY;

        let moveY = e.clientY - startY;
        let moveX = e.clientX - startX;
        //==================================================================
        if (moveY > 0 && moveX > 0) { //down, right
        //==================================================================
            let maxRowIndex, maxCellIndex, minCellIndex;
            for (let trRowIndex = 0; trRowIndex < trContent.length; trRowIndex++) {
                let top = window.pageYOffset + trContent[trRowIndex].getBoundingClientRect().top;
                if (lastY > top) maxRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
            }
            for (let rowIndex = 0; rowIndex < trContent.length; rowIndex++) {
                for (let cellIndex = 0; cellIndex < trContent[rowIndex].childNodes.length; cellIndex++) {
                    let left = window.pageYOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                    if (lastX > left) maxCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                }                        
            }
            //grid.tbs_selectedRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
			grid.tbs_selectedRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
            clearRowIndex = startRowIndex;
            clearRowIndex2 = maxRowIndex;
            clearCellIndex = startCellIndex;
            clearCellIndex2 = maxCellIndex;
        }
        //==================================================================
        if (moveY > 0 && moveX < 0) { //up, left
        //==================================================================
            let maxRowIndex, maxCellIndex, minCellIndex;
            for (let trRowIndex = 0; trRowIndex < trContent.length; trRowIndex++) {
                let top = window.pageYOffset + trContent[trRowIndex].getBoundingClientRect().top;
                if (lastY > top) maxRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
            }
            for (let rowIndex = 0; rowIndex < trContent.length; rowIndex++) {
                for (let cellIndex = trContent[rowIndex].childNodes.length - 1; cellIndex >= 0; cellIndex--) {
                    let right = window.pageYOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                    if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                }                        
            }                        
            //grid.tbs_clearRange(clearRowIndex, clearRowIndex2, clearCellIndex, clearCellIndex2);
            //grid.tbs_selectedRange(startRowIndex, maxRowIndex, minCellIndex, startCellIndex);
			grid.tbs_selectedRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
            clearRowIndex = startRowIndex;
            clearRowIndex2 = maxRowIndex;
            clearCellIndex = minCellIndex;
            clearCellIndex2 = startCellIndex;
        } 
        //==================================================================
        if (moveY < 0 && moveX > 0) { //up, right
        //==================================================================
            let minRowIndex, maxCellIndex, minCellIndex;
            for (let trRowIndex = trContent.length - 1; trRowIndex >= 0; trRowIndex--) {
                let bottom = window.pageYOffset + trContent[trRowIndex].getBoundingClientRect().bottom;
                if (lastY < bottom) minRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
            }
            for (let rowIndex = trContent.length - 1; rowIndex >= 0; rowIndex--) {
                for (let cellIndex = 0; cellIndex < trContent[rowIndex].childNodes.length; cellIndex++) {
                    let left = window.pageYOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                    if (lastX > left) maxCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                }                        
            }
            //grid.tbs_clearRange(clearRowIndex, clearRowIndex2, clearCellIndex, clearCellIndex2);
            //grid.tbs_selectedRange(minRowIndex, startRowIndex, startCellIndex, maxCellIndex);
			grid.tbs_selectedRange(startRowIndex, minRowIndex, startCellIndex, maxCellIndex);
            clearRowIndex = minRowIndex;
            clearRowIndex2 = startRowIndex;
            clearCellIndex = startCellIndex;
            clearCellIndex2 = maxCellIndex;
        }
        //==================================================================
        if (moveY < 0 && moveX < 0) { //up, left
        //==================================================================
            let minRowIndex, maxCellIndex, minCellIndex;
            for (let trRowIndex = trContent.length - 1; trRowIndex >= 0; trRowIndex--) {
                let bottom = window.pageYOffset + trContent[trRowIndex].getBoundingClientRect().bottom;
                if (lastY < bottom) minRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
            }

            for (let rowIndex = trContent.length - 1; rowIndex >= 0; rowIndex--) {
                for (let cellIndex = trContent[rowIndex].childNodes.length - 1; cellIndex >= 0; cellIndex--) {
                    let right = window.pageYOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                    if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                }                        
            }
            //grid.tbs_clearRange(clearRowIndex, clearRowIndex2, clearCellIndex, clearCellIndex2);
            //grid.tbs_selectedRange(minRowIndex, startRowIndex, minCellIndex, startCellIndex);
			grid.tbs_selectedRange(startRowIndex, minRowIndex, startCellIndex, minCellIndex);
            clearRowIndex = minRowIndex;
            clearRowIndex2 = startRowIndex;
            clearCellIndex = minCellIndex;
            clearCellIndex2 = startCellIndex;
        }
    }
    const selectCellShift = function(e, table) {
        let trLeft = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        let trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr');
        let col = (e.target.tagName == 'TD') ? e.target : e.target.parentNode;

        let selectedRowIndex = col.parentNode.rowIndex; //tbs_getRowIndexInTable(col.parentNode.rowIndex);
        let selectedCellIndex = col.cellIndex;

        let startRowIndex = -1;
        let lastRowIndex = -1;
        let startCellIndex = -1;
        let lastCellIndex = -1;
                
        //let trContent = this.length.content.tbody[grid].childNodes;
        if (grid.data_view.length == 0) return;
        for (let trRowIndex = selectedRowIndex; trRowIndex < trContent.length; trRowIndex++) {
            if (selectedRowIndex < trRowIndex && trContent[trRowIndex].childNodes[selectedCellIndex].className == 'tbs-grid-cell-select') {
                lastRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
                break;
            }
        }
        if (lastRowIndex != -1) {
            //grid.tbs_selectedRange(tbs_getRowIndexInTable(selectedRowIndex), lastRowIndex, selectedCellIndex, selectedCellIndex);
			grid.tbs_selectedRange(tbs_getRowIndexInTable(selectedRowIndex), lastRowIndex, selectedCellIndex, selectedCellIndex);
            return;
        }
        //---------------------------------------------------------------------------
        for (let trRowIndex = selectedRowIndex; trRowIndex >= 0; trRowIndex--) {
            if (selectedRowIndex > trRowIndex	&& trContent[trRowIndex].childNodes[selectedCellIndex].className == 'tbs-grid-cell-select') {
                startRowIndex = grid.tbs_getRowIndexInTable(trRowIndex);
                break;
            }
        }
        if (startRowIndex != -1) {
            //grid.tbs_selectedRange(startRowIndex, tbs_getRowIndexInTable(selectedRowIndex), selectedCellIndex, selectedCellIndex);
			grid.tbs_selectedRange(tbs_getRowIndexInTable(selectedRowIndex), startRowIndex, selectedCellIndex, selectedCellIndex);
        }
        //---------------------------------------------------------------------------
    }
    const select = function(trContent, startRowIndex, startCellIndex, moveX, moveY, lastX, lastY) {
        let minRowIndex, maxRowIndex;

        let table31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

        let top   = window.pageYOffset + table31.getBoundingClientRect().top;
        let bottom= window.pageYOffset + table31.getBoundingClientRect().bottom;
        let right = window.pageXOffset + panel30.getBoundingClientRect().right;
        let left  = window.pageXOffset + panel30.getBoundingClientRect().left;

        if (lastY > bottom) grid.tbs_setBarPositionByDirection('down');
        if (lastY < top   ) grid.tbs_setBarPositionByDirection('up');
        if (lastX > right ) grid.tbs_setBarPositionByDirection('right');
        if (lastX < left  ) grid.tbs_setBarPositionByDirection('left');

        if (moveY > 0) { // down direction
            maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove('panel30', lastY);
            grid.tbs_clearRange(0, -1);
            grid.tbs_selectedRange(startRowIndex, maxRowIndex, 0, -1);
        }
        else if (moveY < 0) { // up direction
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove('panel30', lastY);
            grid.tbs_clearRange(0, -1);
			grid.tbs_selectedRange(startRowIndex, minRowIndex, 0, -1);
        }
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
				grid.tbs_selectedRange(startRowIndex, lastRowIndex);
            }
            else {
                grid.tbs_setBarPositionByDirection('right');
                for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                    for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                        let left = window.pageXOffset + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                        if (lastX > left) maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
                    }                        
                }
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex);
            }
        } 
        //==================================================================
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex);
            }
            else {
                grid.tbs_setBarPositionByDirection('left');
                for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
                    for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                        let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                        if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex; 
                    }                        
                }   
                grid.tbs_clearRange(0, -1);
				grid.tbs_selectedRange(startRowIndex, lastRowIndex);
            }
        }
        //==================================================================
        else if (type == 'down') {
        //==================================================================
            grid.tbs_setBarPositionByDirection('down');
            if (lastRowIndex < (grid.data_view.length - 1)) {
                lastRowIndex += 1;
                grid.tbs_clearRange(0, -1);
                grid.tbs_selectedRange(startRowIndex, lastRowIndex);
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
				grid.tbs_selectedRange(startRowIndex, lastRowIndex);
            }
            else flagUp = false;
        }
        //==================================================================
    }
    const doInterval = function(type, lastX, lastY) {
        if (flagLeft) {
            flagUp      = false;
            flagDown    = false;
            //flagLeft  = false;
            flagRight   = false;
			setTimeout(function() {doInterval('left', lastX, lastY);}, 100);
            selectRefresh('left', lastX, lastY);
        }
        if (flagRight) {
            flagUp      = false;
            flagDown    = false;
            flagLeft    = false;
            //flagRight = false;
			setTimeout(function() {doInterval('right', lastX, lastY);}, 100);
            selectRefresh('right', lastX, lastY);
        }
        if (flagUp) {
            //flagUp    = false;
            flagDown    = false;
            flagLeft    = false;
            flagRight   = false;
			setTimeout(function() {doInterval('up', lastX, lastY);}, 100);
            selectRefresh('up', lastX, lastY);
        }
        if (flagDown) {
            flagUp      = false;
            //flagDown  = false;
            flagLeft    = false;
            flagRight   = false;
			setTimeout(function() {doInterval('down', lastX, lastY);}, 100);
            selectRefresh('down', lastX, lastY);
        }
    }

    table.addEventListener('mousedown', mouseDownEvent);
}
