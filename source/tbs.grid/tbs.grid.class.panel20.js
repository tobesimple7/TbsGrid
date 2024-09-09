/**
 * @Rule
 *
 *  header group sorting : deny
 *
 */
TbsGrid.prototype.panel20_select = function(panelName) { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;
    
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex , lastCellIndex , lastX , lastY;
    
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

    let table = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table');
    //moveDiv(table), moveCell, targetCell, direction => moveDiv(copy object), tbs_moveCell(source object) is different
    const mouseDownEvent = function(e) {
        let col = e.target.closest('.tbs-grid-cell');

        grid.startX = startX = window.pageXOffset + e.clientX;
        grid.startY = startY = window.pageYOffset + e.clientY;

        grid.lastX = lastX = window.pageXOffset + e.clientX;
        grid.lastY = lastY = window.pageYOffset + e.clientY;

        startCellIndex = col.cellIndex;
        lastCellIndex = col.cellIndex;

        if (window.event.button === 0) {
            if (!window.event.ctrlKey && !window.event.shiftKey) {
                selectCell(e, table);  
            }
            else if (window.event.shiftKey) {
                selectCellShift(e, table);
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
                selectCellMove(e, table);
            }
        }
    };
    
    const mouseUpEvent = function(e) {
        grid.lastX = lastX = window.pageXOffset + e.clientX;
        grid.lastY = lastY = window.pageYOffset + e.clientY;

        let isInPanel80 = grid.tbs_isInPanel(e, 'panel80', lastX, lastY);
        let isInPanel90 = grid.tbs_isInPanel(e, 'panel90', lastX, lastY);

        if (isInPanel80) {
            // grouping panel
            if (grid.options[grid.option_groupVisible] == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                let moveElement = document.querySelector('.tbs-grid-move');
                let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                let rectMoveCell= moveElement.getBoundingClientRect();

                let columnIndex = moveElement.dataset.columnIndex;
                let rowIndex = moveElement.dataset.rowIndex;

                let column = grid.tbs_getColumnByIndex(columnIndex);
                let name  = column[grid.column_name];
                let text  = column[grid.column_text];
                let order = 'asc';

                // Find the one that is smaller to the button left than then move element left
                let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                let targetButton;
                let targetIndex;

                for (let i = 0, len = buttons.length; i < len; i++) {
                    let button = buttons[i];
                    let buttonLeft = button.getBoundingClientRect().left;
                    if (e.clientX < buttonLeft) {
                        targetButton = button;
                        targetIndex = i;
                        break;
                    }
                }

                // Add 1th postion
                if (grid.null(targetIndex)) {
                    targetButton = null;
                    targetIndex = null;
                }

                if (name != 'group_column') grid.classGroup.addGroupButton(name, text, order, targetIndex);

                flagLeft = false;
                flagRight = false;
                flagUp = false;
                flagDown = false;
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
                if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            }
            flagLeft = false;
            flagRight = false;
            flagUp = false;
            flagDown = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
        }
        else if (isInPanel90) {
            // sorting panel
            if (grid.options[grid.option_sortVisible] == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                let moveElement = document.querySelector('.tbs-grid-move');
                let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                let rectMoveCell= moveElement.getBoundingClientRect();

                let columnIndex = moveElement.dataset.columnIndex;
                let rowIndex = moveElement.dataset.rowIndex;

                let column = grid.tbs_getColumnByIndex(columnIndex);
                let name  = column[grid.column_name];
                let text  = column[grid.column_text];
                let order = 'asc';

                // Find the one that is smaller to the button left than then move element left
                let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                let targetButton;
                let targetIndex;
                let moveLeft = grid.tbs_getOffset(moveElement).left;

                for (let i = buttons.length + 1; i >= 0; i--) {
                    let button = buttons[i];
                    let buttonLeft= grid.tbs_getOffset(button).left
                    if (moveLeft < buttonLeft) {
                        targetButton = button;
                        targetIndex = i;
                    }
                }
                // Add 1th postion
                if (grid.null(targetIndex)) {
                    targetButton = null;
                    targetIndex = null;
                }
                if (name != 'group_column') grid.classSort.addSortButton(name, text, order, targetIndex);

                flagLeft = false;
                flagRight = false;
                flagUp = false;
                flagDown = false;
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
                if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            }
            flagLeft = false;
            flagRight = false;
            flagUp = false;
            flagDown = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
        }
        else {
            if (mouseButton == 0
                && startX > lastX - grid.grid_mousePointRange
                && startX < lastX + grid.grid_mousePointRange
                && startY > lastY - grid.grid_mousePointRange
                && startY < lastY + grid.grid_mousePointRange) {
                let element = e.target.closest('.tbs-grid-cell');
                let name = element.dataset.name;
                if (e.detail == 1) {
                    if (grid.tbs_isColumnName(name)) grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
                    if (grid.options[grid.option_sortVisible] == true) grid.classSort.getSortButtonList();
                }
            }
            else {
                if (grid.fixedColumnIndex != -1) {
                    if (document.querySelectorAll('.tbs-grid-move').length == 0) return;

                    /* Find panel area */
                    let isInPanel21 = grid.tbs_isInPanel(e, 'panel21', lastX, lastY);
                    let isInPanel22 = grid.tbs_isInPanel(e, 'panel22', lastX, lastY);

                    /* Set panel */
                    let tdList20 = null;
                    if (isInPanel21 || isInPanel22) tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel22 tbody td:not([style*="display :none"]');
                    else tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');

                    let headerColumns = grid.headerColumnTable;
                    let movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
                    let targetColumn;

                    let fixedWidth = 50;

                    for (let x = 0, len = tdList20.length; x < len; x++) {
                        let cell = tdList20[x];
                        targetColumn = grid.headerColumnTable[cell.parentNode.rowIndex - 1][cell.cellIndex];

                        if (lastX - startX > 0) { // right direction move.
                            if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                    && movingColumn[grid.column_rowIndex] == targetColumn[grid.column_rowIndex]
                                    && movingColumn[grid.column_parentNum] == targetColumn[grid.column_parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                grid.tbs_changeColumnOrder(movingColumn, targetColumn, 'after');
                                break;
                            }
                        }
                        else {
                            if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                    && movingColumn[grid.column_rowIndex] == targetColumn[grid.column_rowIndex]
                                    && movingColumn[grid.column_parentNum] == targetColumn[grid.column_parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                grid.tbs_changeColumnOrder(movingColumn, targetColumn, 'before');
                                break;
                            }
                        }
                    }
                    if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
                    flagLeft = false;
                    flagRight = false;
                }
                else {
                    if (document.querySelectorAll('.tbs-grid-move').length > 0) {
                        let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();

                        let movingColumn = grid.headerColumnTable[moveCellRowIndex - 1][moveCellIndex];
                        let tdList20 = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody td:not([style*="display :none"]');
                        let fixedWidth = 50;

                        let targetColumn;
                        for (let x = 0, len = tdList20.length; x < len; x++) {
                            let cell = tdList20[x];
                            targetColumn = grid.headerColumnTable[cell.parentNode.rowIndex - 1][cell.cellIndex];

                            if (lastX - startX > 0) { // right direction move.
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                        && movingColumn[grid.column_rowIndex] == targetColumn[grid.column_rowIndex]
                                        && movingColumn[grid.column_parentNum] == targetColumn[grid.column_parentNum]
                                        && moveCell.cellIndex != cell.cellIndex) {
                                    grid.tbs_changeColumnOrder(movingColumn, targetColumn, 'after');
                                    break;
                                }
                            }
                            else {
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                        && movingColumn[grid.column_rowIndex] == targetColumn[grid.column_rowIndex]
                                        && movingColumn[grid.column_parentNum] == targetColumn[grid.column_parentNum]  //column_parentNum
                                        && moveCell.cellIndex != cell.cellIndex) {
                                    grid.tbs_changeColumnOrder(movingColumn, targetColumn, 'before');
                                    break;
                                }
                            }
                        }
                    }
                    if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
                    flagLeft = false;
                    flagRight = false;
                }
            }
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
            grid.input_focus();
        }
    };
    
    const selectCell = function(e, table) {
        let col = e.target.closest('.tbs-grid-cell');

        let column = grid.tbs_getColumnByIndex(col.cellIndex);
        let columnName = column[grid.column_name];

        let isMovable = grid.tbs_isMovableColumn(columnName);
        if (isMovable) {
            let moveDiv;
            if (document.querySelectorAll('.tbs-grid-move').length == 0) {
                moveDiv = document.createElement('div');
                moveDiv.classList.add('tbs-grid-move');

                let table = document.createElement('table');
                table.classList.add('tbs-grid-table');

                let tr = document.createElement('tr');
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');

                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');

                let span = document.createElement('span');
                span.classList.add('tbs-grid-cell-span');

                div.appendChild(span);
                td.appendChild(div);
                tr.appendChild(td);
                table.appendChild(tr);
                moveDiv.appendChild(table);
                document.body.appendChild(moveDiv);
            }
            moveDiv = document.querySelector('.tbs-grid-move');
            moveDiv.style.display = 'none';

            moveDiv.querySelector('.tbs-grid-cell-span').textContent = col.querySelector('.tbs-grid-cell-span').innerText;
            moveDiv = document.querySelector('.tbs-grid-move');

            let colRect = col.getBoundingClientRect();

            moveCell = col;
            moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
            moveCellTop  = window.pageYOffset + e.clientY - colRect.top;

            moveCellIndex = col.cellIndex;
            moveCellRowIndex = col.parentNode.rowIndex;

            let nWidth = (colRect.width + 2) + 'px';
            let nHeight = colRect.height + 'px';

            moveDiv.style.width = nWidth;
            moveDiv.style.height = nHeight;
            moveDiv.childNodes[0].style.width = nWidth;
            moveDiv.childNodes[0].style.height = nHeight;
            moveDiv.style.left = '30000px';
            moveDiv.style.top = '0px';

            moveDiv.dataset.columnIndex = col.cellIndex;
            moveDiv.dataset.rowIndex = col.parentNode.rowIndex;
        }
        grid.tbs_removeRange(0, -1);
    }
    
    const selectCellMove = function(e, table) {
        let col = e.target.closest('.tbs-grid-cell');

        flagLeft    = false;
        flagRight   = false;

        startX = grid.startX;
        startY = grid.startY;

        grid.lastX = lastX = window.pageXOffset + e.clientX;
        grid.lastY = lastY = window.pageYOffset + e.clientY;

        //console.log(col);
        //console.log(`selectCellMove ${startX} == ${lastX} ${startY} == ${lastY}`);

        let moveY = lastY - startY;
        let moveX = lastX - startX;

        // let column = grid.tbs_getColumnByIndex(col.cellIndex);
        // let columnName = column[grid.column_name];
        let isMovable = grid.tbs_isMovableColumn();
        if (isMovable) {
            let moveDiv = document.querySelector('.tbs-grid-move');
            if (moveDiv){
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top  = (lastY - moveCellTop)  + 'px';
                if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20) moveDiv.style.display = '';
            }
            //console.log(`111 ${startX} == ${lastX} ${startY} == ${lastY}`);
        }
        else {
            select(startCellIndex, moveX, moveY, lastX, lastY);
            //console.log(`222 ${startX} == ${lastX} ${startY} == ${lastY}`);
        }
        let rect = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        let rectLeft = window.pageXOffset + rect.left;
        let rectRight = window.pageXOffset + rect.right;
        let rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
        rectRight = window.pageXOffset + rect30.right;

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
        let tableRect = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect();
        let top    = window.pageYOffset + tableRect.top;
        let bottom = window.pageYOffset + tableRect.bottom;

        let sumRect = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        let right = window.pageXOffset + sumRect.right;
        let left  = window.pageXOffset + sumRect.left;

        //if (lastX > right) grid.tbs_setBarPositionByDirection('right');
        //if (lastX < left) grid.tbs_setBarPositionByDirection('left');
        //==================================================================
        let arr = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table td:not([data-name=""])');
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
            let _topRowIndex = grid.tbs_selectRange(0, -1, startCellIndex, maxCellIndex);
            grid.tbs_displayPanel30(_topRowIndex);
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
			let _topRowIndex = grid.tbs_selectRange(0, -1, startCellIndex, minCellIndex);
            grid.tbs_displayPanel30(_topRowIndex);
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
                //grid.tbs_removeRange(0, -1);
				//let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
            }
            else {
                grid.tbs_setBarPositionByDirection('right');
                //for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                //    for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                //        if (grid.columns[cellIndex][grid.column_visible] == false) continue;
                //        let left = window.pageXOffset + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                //        if (lastX > left) maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
                //    }
                //}
                //grid.tbs_removeRange(0, -1);
				//let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        } 
        /* left */
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;
                //grid.tbs_removeRange(0, -1);
				//let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
            }
            else {
                grid.tbs_setBarPositionByDirection('left');
                //for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
                //    for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                //        if (grid.columns[cellIndex][grid.column_visible] == false) continue;
                //        let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                //        if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                //    }
                //}
                //console.log(`minCellIndex ${minCellIndex}`);
                //grid.tbs_removeRange(0, -1);
				//let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
        /* down */
        else if (type == 'down') {
            //grid.tbs_setBarPositionByDirection('down');
            //if (lastRowIndex < (grid.data_view.length - 1)) {
            //    lastRowIndex += 1;
            //    grid.tbs_removeRange(0, -1);
            //    let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex,lastCellIndex);
            //}
            //else flagDown = false;

        }
        /* up */
        else if (type == 'up') {
            //grid.tbs_setBarPositionByDirection('up');
            //if (lastRowIndex != 0) {
            //    lastRowIndex -= 1;
            //    grid.tbs_removeRange(0, -1);
			//	let _topRowIndex = grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            //}
            //else flagUp = false;
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
    
    table.addEventListener('mousedown', mouseDownEvent);      
}

