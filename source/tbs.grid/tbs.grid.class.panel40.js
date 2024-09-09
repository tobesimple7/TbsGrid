/** @Rule
 * - summary top, footer rowCount = 1.
 * - allow left, right movement.
 * - deny up, down movement.
 *
 */
TbsGrid.prototype.panel40_select = function(eventPanelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let classRange = (eventPanelName == 'panel40' || eventPanelName == 'panel42') ? grid.classRange40 : grid.classRange50;

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
        startX = grid.startX = window.pageXOffset + e.clientX;
        startY = grid.startY = window.pageYOffset + e.clientY;

        lastX = grid.lastX = window.pageXOffset + e.clientX;
        lastY = grid.lastY = window.pageYOffset + e.clientY;

        let tableCell;
        if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-text')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;

        mouseButton = window.event.button;

        startRowIndex = grid.tbs_getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
        lastRowIndex  = -1;

        startCellIndex = tableCell.cellIndex;
        lastCellIndex  = tableCell.cellIndex;

        if (window.event.ctrlKey) selectCellCtrl(e);
        else if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                if (targetName == 'icon') {
                    if (grid.grid_mode == grid.code_tree) {
                        grid.tbs_setTreeFolding(tableCell);
                        selectCell(e);
                    }
                    else if (grid.grid_mode == grid.code_group) {
                        grid.classGroup.setGroupFolding(tableCell);
                        selectCell(e);
                    }

                }
                else selectCell(e);
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

                if (e.detail == 1) {
                    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
                    if (panelInput.style.left != '30000px') {
                        grid.tbs_editEnd();
                        grid.input_focus();
                    }
                    else grid.tbs_executeEvent(true, 'click', param);
                }
                else if (e.detail == 2) {
                    let isEditable = grid.columns[startCellIndex][grid.column_editable];
                    if (isEditable) {
                        if (grid.notNull(grid.user_edit)) {
                            grid.tbs_editStart(e, 'mouse')
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
        //if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
        //console.log(`e.target.className ${e.target.className}`);
        if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-text')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;

        startCellIndex = tableCell.cellIndex;
        lastCellIndex  = startCellIndex;
        startRowIndex  = 0;
        lastRowIndex   = 0;

        classRange.class_removeRange(0, -1);
        classRange.class_selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
    }
    const selectCellMove = function(e) {
        flagLeft    = false;
        flagRight   = false;

        let moveY = grid.lastY - grid.startY;
        let moveX = grid.lastX - grid.startX;
        let lastX = grid.lastX;
        let lastY = grid.lastY;

        if (grid.fixedColumnIndex != -1) {
            let panel  = document.querySelector(selector + ' .tbs-grid-panel32');
            let panel30= document.querySelector(selector + ' .tbs-grid-panel30');

            let rect = panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let rect30= panel30.getBoundingClientRect();
            let absRect30 = grid.tbs_getOffset(panel30);

            let panelLeft  = absRect.left;
            let panelRight = absRect30.left + rect30.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                else if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
            }
            select(moveX, moveY);
        }
        else {
            let panel = document.querySelector(selector + ' .tbs-grid-panel30'); // + eventPanelName);
            let rect = panel.getBoundingClientRect();
            let absRect = grid.tbs_getOffset(panel);

            let panelLeft  = absRect.left;
            let panelRight = absRect.left + rect.width;

            // Outside the area
            if (lastX < panelLeft || lastX > panelRight) {
                if (lastX < panelLeft  ) { flagLeft  = true; doInterval(grid.code_left);  }
                else if (lastX > panelRight ) { flagRight = true; doInterval(grid.code_right); }
            }
            select(moveX, moveY);
        }
    }
    const selectCellCtrl = function(e) {}
    const selectCellCtrlMove = function(e) {}
    const selectCellShift = function(e) {
        let tableCell;
        if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div-text')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
        else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
        else return;

        classRange.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : classRange.startCellIndex;
        classRange.lastCellIndex  = lastCellIndex  = tableCell.cellIndex;
        classRange.startRowIndex  = startRowIndex  = 0;
        classRange.lastRowIndex   = lastRowIndex   = 0;

        classRange.class_removeRange(0, -1);
        classRange.class_selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
    }
    const selectCellShiftMove = function(e) {
        flagLeft    = false;
        flagRight   = false;

        let moveY = grid.lastY - grid.startY;
        let moveX = grid.lastX - grid.startX;
        let lastX = grid.lastX;
        let lastY = grid.lastY;
        if (grid.fixedColumnIndex != -1) {
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
        if (moveX > 0) { // right
            let maxRowIndex, maxCellIndex;
            maxRowIndex  = 0;
            maxCellIndex = classRange.class_getMaxCellIndexByMouseMove();
//console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
            classRange.class_removeRange(0, -1);
            classRange.class_selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
        }
        else if (moveX < 0) { // left
            let maxRowIndex, minCellIndex;
            maxRowIndex  = 0;
            minCellIndex = classRange.class_getMinCellIndexByMouseMove();

            classRange.class_removeRange(0, -1);
            classRange.class_selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
        }
    }
    const setPanelMove = function(type) {
        // panel outside area
        let startRowIndex  = 0;
        let lastRowIndex   = 0;
        let startCellIndex = grid.startCellIndex;
        let lastCellIndex  = grid.lastCellIndex;

        let maxCellIndex, minCellIndex;

        let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;

        if (type == 'right') {
            if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                flagRight = false;

                classRange.class_removeRange(0, -1);
                classRange.class_selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
            }
            else {
                grid.tbs_setBarPositionByDirection('right');
                maxCellIndex = classRange.class_getMaxCellIndexByMouseMove();

                classRange.class_removeRange(0, -1);
                classRange.class_selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        } 
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;

                classRange.class_removeRange(0, -1);
                classRange.class_selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            }
            else {
                grid.tbs_setBarPositionByDirection('left');
                minCellIndex = classRange.class_getMinCellIndexByMouseMove();

                classRange.class_removeRange(0, -1);
                classRange.class_selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
    }
    const doInterval = function(type) {
        if (flagLeft) {
            //flagLeft  = false;
            flagRight   = false;
            setTimeout(() => doInterval('left'), 15);
            setPanelMove('left');
        }
        if (flagRight) {
            flagLeft    = false;
            //flagRight = false;
            setTimeout(() => doInterval('right'), 15);
            setPanelMove('right');
        }
    }

    eventPanel.addEventListener('mousedown', mouseDownEvent);
}

