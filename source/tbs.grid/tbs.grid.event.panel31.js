﻿/**
 * tbs.grid.panel30.js
 *
 */
TbsGrid.prototype.panel31_select = function(eventPanelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let targetName;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex , lastCellIndex , lastX , lastY;

    let mouseButton = 0;

    let flagUp      = false;
    let flagDown    = false;
    let flagLeft    = false;
    let flagRight   = false;

    let eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);

    const mouseDownEvent = function (e) {
        //if (e.detail == 1) console.log(`click ${e.detail}`);
        //if (e.detail == 2) console.log(`doubleclick ${e.detail}`);

        startX = grid.startX = window.pageXOffset + e.clientX;
        startY = grid.startY = window.pageYOffset + e.clientY;

        lastX = grid.lastX = window.pageXOffset + e.clientX;
        lastY = grid.lastY = window.pageYOffset + e.clientY;
        //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
        //console.log(`e.target.className ${e.target.className}`);
        let tableCell;
        if      (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;
        if (tableCell.dataset.cellType != 'number') return;

        mouseButton = window.event.button;

        startRowIndex = grid.tbs_getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
        lastRowIndex  = -1;

        startCellIndex = tableCell.cellIndex;
        lastCellIndex  = tableCell.cellIndex;

        if (window.event.ctrlKey) selectCellCtrl(e);
        else if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                selectCell(e);
            }
            else if (window.event.shiftKey) selectCellShift(e);
        }
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseup', mouseUpEvent);

    };
    const mouseMoveEvent = function (e) {
        lastX = grid.lastX = window.pageXOffset + e.clientX;
        lastY = grid.lastY = window.pageYOffset + e.clientY;
        //console.log(`mouseMoveEvent : lastX ${lastX} : lastY ${lastY}`)
        e.preventDefault();
        e.stopPropagation();

        //if (grid.option_selectOne == true) return;
        if (grid.options[grid.option_selectMode] == 'cell') return;

        if (window.event.ctrlKey) selectCellCtrlMove(e);
        else if (window.event.shiftKey) { selectCellShiftMove(e); }
        else if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) selectCellMove(e);
        }
        return false;
    };
    const mouseUpEvent = function (e) {
        e.preventDefault();
        e.stopPropagation();

        lastX = grid.lastX = window.pageXOffset + e.clientX;
        lastY = grid.lastY = window.pageYOffset + e.clientY;

        //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
        flagUp      = false;
        flagDown    = false;
        flagLeft    = false;
        flagRight   = false;

        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);

        // console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
        // input editing, input EditStart, input Editing, input EditEnd
        grid.input_focus();

        let isInArea = grid.tbs_isInPanel(e, eventPanelName, lastX, lastY);
        if (isInArea) {
            if (mouseButton == 0 && grid.tbs_isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };

                if (e.detail == 1) grid.tbs_executeEvent(true, 'click', param);
                else if (e.detail == 2) {
                    let isEditable = grid.columns[startCellIndex][grid.column_editable];
                    if (isEditable) {
                        if (grid.notNull(grid.user_edit)) {
                            //grid.input_edit(e, 0, 'mouse');
                            grid.tbs_editStart(e, 'mouse');
                        }
                        else {
                            grid.input_show(e, 'mouse');
                        }
                    }
                    else grid.tbs_executeEvent(true, 'dblclick', param);
                }
            }
        }
    };
    const selectCell = function(e) {
        let tableCell;
        if      (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;
        if (tableCell.dataset.cellType != 'number') return;

        // startCellIndex = tableCell.cellIndex;
        // lastCellIndex  = startCellIndex;
        startRowIndex  = grid.tbs_getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
        lastRowIndex   = startRowIndex;

        if (eventPanelName == 'panel61') {
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
        }
        else {
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
        }
        grid.tbs_removeRange(0, -1);
        grid.tbs_selectRange(startRowIndex, startRowIndex);
    }
    const selectCellMove = function(e) {
        flagUp      = false;
        flagDown    = false;
        flagLeft    = false;
        flagRight   = false;

        let moveY = grid.lastY - grid.startY;
        let moveX = grid.lastX - grid.startX;
        let lastX = grid.lastX;
        let lastY = grid.lastY;
        if (grid.fixedRowIndex != -1) {
            let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            if (eventPanelName == 'panel60') {
                panel = document.querySelector(selector + ' .tbs-grid-group30');
            }
            let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let rect30= panel30.getBoundingClientRect();
            let absRect30 = grid.tbs_getOffset(panel30);

            let panelTop   = absRect.top;
            let panelBottom= absRect30.top + rect30.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect.left + rect.width;

            //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
        else if (grid.fixedColumnIndex != -1) {
            let panel  = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            let panel30= document.querySelector(selector + ' .tbs-grid-panel30');

            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let rect30= panel30.getBoundingClientRect();
            let absRect30 = grid.tbs_getOffset(panel30);

            let panelTop   = absRect.top;
            let panelBottom= absRect.top + rect.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect30.left + rect30.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
        else {
            let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let panelTop   = absRect.top;
            let panelBottom= absRect.top + rect.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect.left + rect.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
    }
    const selectCellCtrl = function(e) {}
    const selectCellCtrlMove = function(e) {}
    const selectCellShift = function(e) {
        let tableCell;
        if      (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;
        if (tableCell.dataset.cellType != 'number') return;

        grid.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : grid.startCellIndex;
        grid.lastCellIndex  = lastCellIndex  = tableCell.cellIndex;
        grid.startRowIndex  = startRowIndex  = (startRowIndex == -1) ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
        grid.lastRowIndex   = lastRowIndex   = tableCell.parentNode.dataset.rowIndex;

        //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

        if (eventPanelName == 'panel60') {
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
        }
        else {
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
        }
        grid.tbs_removeRange(0, -1);
        grid.tbs_selectRange(startRowIndex, lastRowIndex);
    }
    const selectCellShiftMove = function(e) {
        flagUp      = false;
        flagDown    = false;
        flagLeft    = false;
        flagRight   = false;

        // clientY : viewport Criteria
        // pageXOffset : scroll amonunt in viewport
        // getBoundingClientRect() : relative parent Criteria

        // lastX = grid.lastX = window.pageXOffset + e.clientX;
        // lastY = grid.lastY = window.pageYOffset + e.clientY;
        //console.log(`selectCellMove : lastX ${lastX} / lastY : ${lastY}`);

        let moveY = grid.lastY - grid.startY;
        let moveX = grid.lastX - grid.startX;
        let lastX = grid.lastX;
        let lastY = grid.lastY;
        if (grid.fixedRowIndex != -1) {
            let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            if (eventPanelName == 'panel60') {
                panel = document.querySelector(selector + ' .tbs-grid-group30');
            }
            let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let rect30= panel30.getBoundingClientRect();
            let absRect30 = grid.tbs_getOffset(panel30);

            let panelTop   = absRect.top;
            let panelBottom= absRect30.top + rect30.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect.left + rect.width;

            //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
        else if (grid.fixedColumnIndex != -1) {
            let panel  = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            let panel30= document.querySelector(selector + ' .tbs-grid-panel30');

            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let rect30= panel30.getBoundingClientRect();
            let absRect30 = grid.tbs_getOffset(panel30);

            let panelTop   = absRect.top;
            let panelBottom= absRect.top + rect.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect30.left + rect30.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
        else {
            let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
            let rect= panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let panelTop   = absRect.top;
            let panelBottom= absRect.top + rect.height;
            let panelLeft  = absRect.left;
            let panelRight = absRect.left + rect.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
                if (lastY < panelTop   ) { flagUp    = true; doInterval(grid.code_up);    }
                if (lastY > panelBottom) { flagDown  = true; doInterval(grid.code_down);  }
            }
            select(moveX, moveY);
        }
    }
    const select = function(moveX, moveY) {
        if (moveY > 0 && moveX > 0) { //down, right
            let maxRowIndex, maxCellIndex;
            maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(startRowIndex, maxRowIndex);
        }
        if (moveY > 0 && moveX < 0) { //down, left
            let maxRowIndex, minCellIndex;
            maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(startRowIndex, maxRowIndex);
        }
        if (moveY < 0 && moveX > 0) { //up, right
            let minRowIndex, maxCellIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(startRowIndex, minRowIndex);
        }
        if (moveY < 0 && moveX < 0) { //up, left
            let minRowIndex, minCellIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(startRowIndex, minRowIndex);
        }
    }
    const setPanelMove = function(type) {
        // panel outside area
        let startRowIndex  = grid.startRowIndex;
        let lastRowIndex   = grid.lastRowIndex;
        let startCellIndex = grid.startCellIndex;
        let lastCellIndex  = grid.lastCellIndex;

        let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;

        let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;

        if (type == 'right') {
            if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                flagRight = false;

                grid.tbs_removeRange(0, -1);
                grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
            }
            else {
                grid.tbs_setBarPositionByDirection('right');
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();

                grid.tbs_removeRange(0, -1);
                grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        }
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;

                grid.tbs_removeRange(0, -1);
                grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            }
            else {
                grid.tbs_setBarPositionByDirection('left');
                minCellIndex = grid.tbs_getMinCellIndexByMouseMove();

                grid.tbs_removeRange(0, -1);
                grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
        else if (type == 'down') {
            grid.tbs_setBarPositionByDirection('down');
            if (lastRowIndex < (grid.data_view.length - 1)) {
                lastRowIndex += 1;

                grid.tbs_removeRange(0, -1);
                grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex,lastCellIndex);
            }
            else flagDown = false;
        }
        else if (type == 'up') {
            grid.tbs_setBarPositionByDirection('up');
            if (grid.fixedRowIndex != -1) {
                if (lastRowIndex != 0) {
                    let minRowIndex= lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();

                    grid.tbs_removeRange(0, -1);
                    grid.tbs_selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
                }
                else flagUp = false;
            }
            else {
                if (lastRowIndex != 0) {
                    let minRowIndex= lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();

                    grid.tbs_removeRange(0, -1);
                    grid.tbs_selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
                }
                else flagUp = false;
            }
        }
    }
    const doInterval = function(type) {
        if (flagLeft) {
            flagUp      = false;
            flagDown    = false;
            //flagLeft  = false;
            flagRight   = false;
            setTimeout(() => doInterval('left'), 15);
            setPanelMove('left');
        }
        if (flagRight) {
            flagUp      = false;
            flagDown    = false;
            flagLeft    = false;
            //flagRight = false;
            setTimeout(() => doInterval('right'), 15);
            setPanelMove('right');
        }
        if (flagUp) {
            //flagUp    = false;
            flagDown    = false;
            flagLeft    = false;
            flagRight   = false;
            setTimeout(() => doInterval('up'), 5);
            setPanelMove('up');
        }
        if (flagDown) {
            flagUp      = false;
            //flagDown  = false;
            flagLeft    = false;
            flagRight   = false;
            setTimeout(() => doInterval('down'), 5);
            setPanelMove('down');
        }
    }

    eventPanel.addEventListener('mousedown', mouseDownEvent);
}
