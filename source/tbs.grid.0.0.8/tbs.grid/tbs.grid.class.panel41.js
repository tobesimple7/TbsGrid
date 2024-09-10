/**
 * tbs.grid.panel30.js
 *
 */
TbsGrid.prototype.panel41_select = function(eventPanelName) {
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

        startRowIndex  = grid.tbs_getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
        lastRowIndex   = startRowIndex;

        let panelName = eventPanelName;
        if (panelName == 'panel41') {
            grid.classRange40.class_removeRange(0, -1);
            grid.classRange40.class_selectRange(0, 0);
        }
        else if (panelName == 'panel51') {
            grid.classRange50.class_removeRange(0, -1);
            grid.classRange50.class_selectRange(0, 0);
        }
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
    const selectCellShift = function(e) {}
    const selectCellShiftMove = function(e) {}
    const select = function(moveX, moveY) {
        let panelName = eventPanelName;
        if (panelName == 'panel41') {
            grid.classRange40.class_removeRange(0, -1);
            grid.classRange40.class_selectRange(0, 0);
        }
        else if (panelName == 'panel51') {
            grid.classRange50.class_removeRange(0, -1);
            grid.classRange50.class_selectRange(0, 0);
        }

    }

    eventPanel.addEventListener('mousedown', mouseDownEvent);
}
