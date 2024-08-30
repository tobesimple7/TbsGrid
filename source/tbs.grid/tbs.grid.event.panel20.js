/**
 * @Rule
 *
 *  header group sorting : deny
 *
 */
TbsGrid.prototype.panel20_select = function() { //type : header, content, left, top
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

    let table = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
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
        //console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
        //console.log(`isInPanel11 ${isInPanel80} isInPanel20 ${isInPanel20}`);

        // Mouse position is in panel80.
        if (isInPanel80) {
            // grouping panel
            if (grid.options.grouping[grid.option_groupVisible] == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
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
                let bar = document.querySelector(selector + ' .tbs-grid-panel-bar');
                let targetButton;
                let targetIndex;
                let moveLeft = grid.tbs_getOffset(moveElement).left;
                for (let i = bar.childNodes.length + 1; i >= 0; i--) {
                    let button=  bar.childNodes[i];
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
                grid.tbs_addGroupButton(name, text, order, targetIndex);
            }
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            flagLeft = false;
            flagRight = false;
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
                if(grid.tbs_isColumnName(name)) grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
            }
            else {
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
                    let headerColumns = grid.headerColumnTable;
                    let movingHeaderColumn = headerColumns[moveCell.parentNode.rowIndex - 1][moveCell.cellIndex];

                    let startRowIndex = movingHeaderColumn[grid.column_rowIndex];
                    let lastRowIndex = grid.headerColumnTable.length - 1;

                    let startColIndex = movingHeaderColumn[grid.column_colIndex];
                    let lastColIndex = startColIndex + moveCell.colSpan - 1;

                    let targetColIndex = (direction == 'after') ? targetCell.cellIndex + targetCell.colSpan - 1 : targetCell.cellIndex;
                    let copyHeaderColumns = JSON.parse(JSON.stringify(grid.headerColumnTable));
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
                            grid.headerColumnTable[i][x][grid.column_colIndex] = x;
                        }
                    }
                }
                //if (grid.options.column[grid.option_movable] && document.querySelectorAll('.tbs-grid-move').length > 0) {
                if (document.querySelectorAll('.tbs-grid-move').length > 0) {
                    let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
                    let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();

                    let headerColumns = grid.headerColumnTable;
                    let movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
                    let targetCol;
                    let tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');
                    let fixedWidth = 50;

                    for (let x = 0, len = tdList20.length; x < len; x++) {
                        let cell = tdList20[x];
                        targetCol = headerColumns[cell.parentNode.rowIndex - 1][cell.cellIndex];

                        if (lastX - startX > 0) { // right direction move.
                            if ( ( lastX - fixedWidth <= cell.getBoundingClientRect().right
                                && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                && movingColumn[grid.column_rowIndex] == targetCol[grid.column_rowIndex]
                                && movingColumn[grid.column_parentNum] == targetCol[grid.column_parentNum]
                                && moveCell.cellIndex != cell.cellIndex) {
                                changeHeaderColumnOrder(moveCell, cell, 'after');
                                direction = 'after';
                                break;
                            }
                        }
                        else {
                            if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                && movingColumn[grid.column_rowIndex] == targetCol[grid.column_rowIndex]
                                && movingColumn[grid.column_parentNum] == targetCol[grid.column_parentNum]  //column_parentNum
                                && moveCell.cellIndex != cell.cellIndex) {
                                changeHeaderColumnOrder(moveCell, cell, 'before');
                                direction = 'before';
                                break;
                            }
                        }
                    }
                    grid.tbs_displayPanel20();
                    changeColumnOrder();

                    if (grid.topColumns.length    > 0) grid.tbs_displayPanel40('panel40', grid.topColumns);
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
                    grid.tbs_removeRange(0, -1);
                    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
                }
                document.querySelector('.tbs-grid-move').remove();
                flagLeft = false;
                flagRight = false;
            }
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
            grid.input_focus();
        }
        //else {
        //    if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
        //    flagLeft = false;
        //    flagRight = false;
        //    document.removeEventListener('mousemove', mouseMoveEvent);
        //    document.removeEventListener('mouseup', mouseUpEvent);
        //}
    };
    
    const selectCell = function(e, table) {
        let col = e.target.closest('.tbs-grid-cell');

        let column = grid.tbs_getColumnByIndex(col.cellIndex);
        let columnName = column[grid.column_name];

        let isMovable = grid.tbs_isMovableColumn(columnName);
        if (isMovable){
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
            moveCellLeft = (window.pageXOffset + e.clientX) - colRect.left;
            moveCellTop  = (window.pageYOffset + e.clientY) - colRect.top;
            moveCellIndex = col.cellIndex;
            moveCellRowIndex = col.parentNode.rowIndex;
            let nWidth  = (colRect.width  + 2) + 'px';
            let nHeight = (colRect.height + 2) + 'px';
            moveDiv.style.width = nWidth;
            moveDiv.style.height = nHeight;
            moveDiv.childNodes[0].style.width = nWidth;
            moveDiv.childNodes[0].style.height = nHeight;                    
            moveDiv.style.left = '30000px';
            moveDiv.style.top  = '0px';

            moveDiv.dataset.columnIndex = col.cellIndex;
            moveDiv.dataset.rowIndex = col.parentNode.rowIndex;
        }
        grid.tbs_removeRange(0, -1);
        //grid.tbs_selectRange(0, -1, col.cellIndex, col.cellIndex);
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
                moveDiv.style.top  = (lastY - moveCellTop) + 'px';
                if (   Math.abs(moveX) > 20
                    || Math.abs(moveY) > 20) {
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
                //grid.tbs_removeRange(0, -1);
				//grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
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
				//grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
            }
        } 
        /* left */
        else if (type == 'left') {
            if (table.style.left == '0px') {
                flagLeft = false;
                //grid.tbs_removeRange(0, -1);
				//grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
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
				//grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
            }
        }
        /* down */
        else if (type == 'down') {
            //grid.tbs_setBarPositionByDirection('down');
            //if (lastRowIndex < (grid.data_view.length - 1)) {
            //    lastRowIndex += 1;
            //    grid.tbs_removeRange(0, -1);
            //    grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex,lastCellIndex);
            //}
            //else flagDown = false;

        }
        /* up */
        else if (type == 'up') {
            //grid.tbs_setBarPositionByDirection('up');
            //if (lastRowIndex != 0) {
            //    lastRowIndex -= 1;
            //    grid.tbs_removeRange(0, -1);
			//	grid.tbs_selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
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

