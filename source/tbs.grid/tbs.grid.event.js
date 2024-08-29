/**
 * tbs.grid.event.js
 *
 */
TbsGrid.prototype.event_columnSort = function(cell) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = grid.tbs_getColumn(cell.dataset.name);
    let columnName = cell.dataset.name;
    // * sort(▼), (▲), (■) order
    if (cell == undefined) return false;

    let isSortable = grid.tbs_isSortableColumn(cell.dataset.name);
    if (!isSortable) return false;

    let sortDiv = cell.querySelector('.tbs-grid-cell-span-sort');
    let sortKind = '';

    if      (sortDiv.textContent == '▼') { sortKind = ''; }
    else if (sortDiv.textContent == '▲') { sortKind = 'desc'; }
    else                                 { sortKind = 'asc'; }

    let divList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table .tbs-grid-cell-span-sort');
    for (let i = 0; i < divList.length; i++) {
            divList[i].textContent = '';
    }

    if      (sortKind == 'asc' ) { sortDiv.textContent = '▲'; }
    else if (sortKind == 'desc') { sortDiv.textContent = '▼'; }
    else                         { sortDiv.textContent = '' ; }


    if (grid.merge){
        for (let i = 0, len = grid.summaryColumns.length; i < len; i++ ){
            if (grid.summaryColumns[i][grid.column_name] == columnName && sortKind == ''){
                sortKind = 'asc';
                sortDiv.textContent = '' ;
                break;
            }
        }
    }
    //let bExist = false;
    //for (let i = 0, len = grid.sortColumns.length; i < len; i++){
    //    if (grid.sortColumns[i].id == id){
    //        bExist = true; 
    //        grid.sortColumns[i].order = sortKind;
    //        break; 
    //    }
    //}
    //if (bExist == false && sortKind != ''){
    //    grid.sortColumns = [];
    //    let item = {};
    //    item.id = id;
    //    item.order = sortKind;
    //    grid.sortColumns.push(item);
    //}
    grid.sortColumns = [];
    if (sortKind != ''){
        let item = {};
        item[grid.column_name] = columnName;
        item.order = sortKind;
        grid.sortColumns.push(item);
    }
    for (let i = grid.sortColumns.length - 1; i >= 0; i--){
        if (grid.sortColumns[i]['order'] == '') {
            grid.sortColumns.splice(i, 1);
        }
    }
    if (grid.sortColumns.length == 0){
        grid.data_view = JSON.parse(JSON.stringify(grid.data_table));
        if (grid.options.filtering[grid.option_filterVisible]) grid.tbs_filters();
        grid.tbs_removeRange(0, -1);
        grid.tbs_displayPanel30(0);
        return;
    }
    //================================================================
    // merge  sort
    //================================================================
    if (grid.merge) {
        grid.setGroup(grid.sortColumns, grid.summaryColumns, grid.mergeType);
    }
    //================================================================
    // not merge
    //================================================================
    else {
        if (grid.tbs_isSortableColumn()) grid.setSort(grid.sortColumns, true);
        if (grid.options.filtering[grid.option_filterVisible]) grid.tbs_filters();
        grid.tbs_removeRange(0, -1);
        grid.tbs_displayPanel30(0);
    }
}
TbsGrid.prototype.event_mobileTouchDrag = function() { //type : header, content
    let selector = '#' + this.gridId;
    let grid = this;
    //---------------------------------------------------------------------
	let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
	let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
    let xPos = { left: 0, x : 0 }
	let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
    let yPos = { top: 0, y : 0 }
    let actveTopRowIndex = -1;
	const touchStartEvent = function(e) {
        e.preventDefault();
        document.body.style.overflow = 'hidden';
        actveTopRowIndex = -1;

        let col;
        if (e.target.tagName == 'DIV')  { col = e.target.parentNode; }
        else if (e.target.tagName == 'SPAN')  { col = e.target.parentNode.parentNode; }
        else { col = e.target; }
        let rowIndex = grid.tbs_getRowIndexInTable(col.parentNode.rowIndex)
        //grid.tbs_removeRange(0, -1);
        //grid.tbs_selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
		yPos.top = Number(yBar.style.top.replace('px', ''));
		yPos.y = e.changedTouches[0].clientY;

        xPos.left = Number(xBar.style.left.replace('px', ''));
		xPos.x = e.changedTouches[0].clientX;

        document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchmove', touchMoveEvent);
		document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchend', touchEndEvent);
	}
	const touchMoveEvent = function(e) {	
		//e.stopPropagation();
		let xMove = e.changedTouches[0].clientX - xPos.x;
        let yMove = e.changedTouches[0].clientY - yPos.y;;

        if (Math.abs(xMove) > Math.abs(yMove)) {
            let left = xPos.left - xMove;
            let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
            if (left < 0) left = 0;
            if (left > xRailWidth) left = xRailWidth;
            xBar.style.left = left.toString() + 'px';

            let header  = document.querySelector(selector + ' .tbs-grid-panel20');
            let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
            let nLeft = (left * -1 * ratio).toString();
            grid.tbs_setContentPanelLeft(nLeft);
            grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
        }
        else if (Math.abs(xMove) < Math.abs(yMove)) {
            let yBarTop = yPos.top - yMove;
            if (yBarTop < 0) yBarTop = 0;
            if (yBarTop > this.verticalScroll.railSize) yBarTop = this.verticalScroll.railSize;
            let trTopIndex = Math.floor(yBarTop * this.verticalScroll.moveCount);
            actveTopRowIndex = trTopIndex;

            setTimeout(function(){if (actveTopRowIndex == trTopIndex) grid.tbs_setBarPosition(grid.code_vertical, trTopIndex);}, 1);
            setTimeout(function(){if (actveTopRowIndex == trTopIndex) grid.tbs_displayPanel30(trTopIndex);}, 5);
        }
	}
	const touchEndEvent = function(e) {
		//e.stopPropagation();
        document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
		document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
        document.body.style.overflow = 'auto';
    }
	//--------------------------------------------------------------
	//document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
}
/**
 * function : event_columnResize
 * @description column resize
 *
 * @param panelName
 */
TbsGrid.prototype.event_columnResize = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;
    const createResizableColumn = function (tableCell, resizer) {
        let startX     = 0; // mouse start x position
        let movedWidth = 0; // moved width
        let cellWidth  = 0; // header cell width
        let tableWidth = 0;

        let initWidth = [];
        let childList = [];

        let eventDetail = 0; // 1 : click (resize), 2 : dblclick(auto resize)
        const mouseDownEvent = function (e) {
            eventDetail = e.detail;
            if (eventDetail == 1) {
                e.stopPropagation();
                // if (grid.options[grid.option_resizable] == false) return;

                let isResizable = grid.tbs_isResizableColumn(tableCell.dataset.name);
                if (!isResizable) return;

                startX =  window.pageXOffset + e.clientX;

                const style = window.getComputedStyle(tableCell);
                cellWidth = parseInt(style.width, 10);
                tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);

                resizer.classList.add('.tbs-grid-cell-resizing');

                if (tableCell.dataset.name == '') {
                    let cellIndex = tableCell.cellIndex;
                    let lastCellIndex = cellIndex + tableCell.colSpan;

                    childList = [];
                    initWidth = [];

                    let thCells = document.querySelectorAll(selector  + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
                    for (let i = cellIndex; i < lastCellIndex; i++) {
                        let thCell= thCells[i];
                        let width = parseInt(thCell.style.width, 10);
                        childList.push(i);     // cell index
                        initWidth.push(width); // cell width
                    }
                }
                document.addEventListener('mousemove', mouseMoveEvent);
                document.addEventListener('mouseup', mouseUpEvent);
            }
            else if (eventDetail == 2){
                e.stopPropagation();
                if (grid.tbs_isClassName(e.target, 'tbs-grid-cell-resize') != true) return;

                let cell = e.target.parentElement;
                let columnName = grid.tbs_getColumnName(cell.cellIndex);

                let isAutoResizable = grid.tbs_isAutoResizableColumn(columnName);
                if (isAutoResizable != true) return;

                let colIndex   = cell.cellIndex + parseInt(cell.colSpan) - 1;
                let column     = grid.tbs_getColumn(columnName);
                let firstWidth = parseInt(column[grid.column_width]);
                let maxWidth  = 0;

                let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];

                let fontSize = tbsConfig.font.fontSize;
                let fontFamilty = tbsConfig.font.fontFamily;

                for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
                    let headerColumn = grid.headerColumnTable[i];
                    if (headerColumn[colIndex][grid.column_kind] == 'column') {
                        let width = parseInt(grid.getTextWidth(canvas, headerColumn[colIndex][grid.column_text], fontSize, fontFamilty));
                        if (width >= maxWidth) maxWidth = width;
                    }
                }
                for (let i = 0, len = grid.data_view.length; i < len; i++) {
                    let width = parseInt(grid.getTextWidth(canvas, grid.data_view[i].layout[columnName][grid.layout_text], fontSize, fontFamilty));
                    if (width >= maxWidth) maxWidth = width;
                }
                grid.tbs_setColumnWidth(colIndex, maxWidth + 20); // 20 is Correction value
                grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
                //grid.tbs_displayPanel20();
                //grid.tbs_selectRange(grid.startRowIndex, grid.lastRowIndex, grid.startCellIndex, grid.lastCellIndex, grid.tbs_getFirstRowIndex());
            }
        };
        //eventColumnResize
        const mouseMoveEvent = function (e) {
            if (eventDetail == 1){
                e.stopPropagation();
                movedWidth = e.clientX - startX;
                //content
                //let thList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
                //let thList30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
                //let thList60 = document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-table thead th');
                //let thList40 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
                //let thList50 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
                //frozen column content
                //let thList22 = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
                //let thList32 = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
                //let thList62 = document.querySelectorAll(selector + ' .tbs-grid-panel62 .tbs-grid-table thead th');
                //let thList42 = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
                //let thList52 = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');

                if (tableCell.dataset.name == '') {
                    // blank header cell
                    let count = childList.length;
                    let moveWidth = parseInt(movedWidth/count);
                    for (let i = 0, len = childList.length; i < len; i++) {
                        let cellIndex = childList[i];
                        let nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';

                        // let column = grid.columns[tableCell.cellIndex];
                        // column[grid.column_width] = parseInt(nWidth, 10);
                        ////
                        // thList20[cellIndex].style.width = nWidth;
                        // thList30[cellIndex].style.width = nWidth;
                        // if (grid.fixedRowIndex        != -1) thList60[cellIndex].style.width = nWidth;
                        // if (grid.topColumns.length    >   0) thList40[cellIndex].style.width = nWidth;
                        // if (grid.footerColumns.length >   0) thList50[cellIndex].style.width = nWidth;
                        grid.tbs_setColumnWidth(cellIndex, nWidth);
                    }
                    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
                }
                else {
                    let cellIndex = tableCell.cellIndex;
                    let nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';
                    // let column = grid.columns[tableCell.cellIndex];
                    // column[grid.column_width] = parseInt(nWidth, 10);
                    //
                    // thList20[cellIndex].style.width = nWidth;
                    // thList30[cellIndex].style.width = nWidth;
                    // if (grid.fixedRowIndex        != -1) thList60[cellIndex].style.width = nWidth;
                    // if (grid.topColumns.length    >   0) thList40[cellIndex].style.width = nWidth;
                    // if (grid.footerColumns.length >   0) thList50[cellIndex].style.width = nWidth;
                    grid.tbs_setColumnWidth(cellIndex, nWidth);
                    grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
                }
                //grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
                //grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
            }
        };
        //eventColumnResize
        const mouseUpEvent = function (e) {
            if (eventDetail == 1){
                e.stopPropagation();
                resizer.classList.remove('.tbs-grid-cell-resizing');
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
        };
        resizer.addEventListener('mousedown', mouseDownEvent, false);
    };
    const tablesCells = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table td');
    [].forEach.call(tablesCells, function (tableCell) {
        let resizer = tableCell.querySelector('.tbs-grid-cell-resize');
        if (resizer) createResizableColumn(tableCell, resizer);
    });
}

TbsGrid.prototype.event_checkBox = function() { //type : header, content
    let selector = '#' + this.gridId;
    let grid = this;
	const checkDowntEvent = function(e) {
        if (e.target.tagName == 'INPUT') {
            let tr = e.target.parentNode.parentNode.parentNode;
            let rowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
            if (e.target.checked) grid.data_view[rowIndex].check = false;
            else grid.data_view[rowIndex].check = true;
        }
    }
	document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').addEventListener('mousedown', checkDowntEvent, false);
}
TbsGrid.prototype.tbs_addEventAll = function() {
    let selector = '#' + this.gridId;
    let grid = this;
    //================================================================== mobile event
    this.event_mobileTouchDrag();
    //================================================================== select event
    this.panel20_select();
    this.panel21_select();

    this.panel30_select('panel30');
    this.panel31_select('panel31');
    this.panel30_select('panel32');

    this.panel30_select('panel60');
    this.panel31_select('panel61');

    this.panel40_select('panel40');
    this.panel41_select('panel41');
    this.panel40_select('panel42');

    this.panel40_select('panel50');
    this.panel41_select('panel51');
    this.panel40_select('panel52');

    this.panel70_select();
    this.panel80_select();

    //================================================================== select event
    this.event_wheel();

    this.event_scrollButton();
    this.event_railClick();
    this.event_dragScrollBar();

    this.event_columnResize('panel20');
    this.event_columnResize('panel22');
    //================================================================== select event
    this.event_input();
    this.event_input_icon();
    this.event_checkBox();

    this.panel10_init(); //2024-07-02

    document.addEventListener('scroll', function(e) {
        let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-panel-input');
        let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
        let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-panel-input-icon');
        let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');

        for (let i = 0; i < inputList.length; i++) {
            let panelInput = panelInputList[i];
            let input      = inputList[i];
            let input_icon = inputIconList[i];
            let input_panel= inputPanelList[i];
            input.value = '';

            panelInput.style.left = '30000px';
            panelInput.style.width= '0px';

            input.dataset.rowIndex = -1;
            input.dataset.cellIndex = -1;
            input.dataset.mode = '';
            input.dataset.type = '';

            input_icon.style.display = 'none';
            input_icon.dataset.rowIndex = -1;
            input_icon.dataset.cellIndex = -1;
            input_icon.dataset.mode = '';
            input_icon.dataset.type = '';

            input_panel.innerHTML = '';
            input_panel.style.width = '0px';
            input_panel.style.left = '30000px';
            input_panel.dataset.rowIndex = -1;
            input_panel.dataset.cellIndex = -1;
            input_panel.dataset.mode = '';
            input_panel.dataset.type = '';

        }
    });

    // @deprecated
    const bodyMouseDownEvent = function(e) {
        let name = e.target.className;
        if (name.indexOf('tbs-grid-panel10-filter-input') == -1
            && name.indexOf('tbs-grid-cell-filter-input') == -1
            && name.indexOf('tbs-grid-input') == -1
            && (name.indexOf('tbs-grid-date') == -1 && name.indexOf('tbs-grid-combo') == -1)) {
            let input = document.querySelector(selector + ' .tbs-grid-input');
            grid.popupActive = 0;
        }
    };
    document.body.addEventListener('mousedown', bodyMouseDownEvent);
    //==================================================================
    const mouseDownGridEvent = function(e) {
        let name = e.target.className;
        e.stopPropagation();
        if (   name.indexOf('tbs-grid-panel10-filter-input') != -1
            || name.indexOf('tbs-grid-cell-filter-input' ) != -1
            || name.indexOf('tbs-grid-layer'             ) != -1) {}
        else {
            document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
            document.querySelector(selector + ' .tbs-grid-layer').style.height = '0px';
            document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
            document.querySelector(selector + ' .tbs-grid-layer').style.display = 'none';
            // document.querySelector(selector + ' .tbs-grid-input').focus();
            grid.input_focus();
        }
    }
    document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);

    const windowResizeEvent = function(e) {
        e.stopPropagation();
        grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
        grid.verticalScroll.tbs_setScroll(grid.code_vertical);
        document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').style.left = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').style.left;

        let topRowIndex = grid.tbs_getFirstRowIndex();
        grid.tbs_displayPanel30(topRowIndex);
    }
    window.addEventListener('resize', windowResizeEvent);
}
TbsGrid.prototype.tbs_moveCellLine = function(cell, rowIndex, cellIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let input = document.querySelector(selector + ' .tbs-grid-input');
    let cellRect = cell.getBoundingClientRect();
    let content = document.querySelector(selector + ' .tbs-grid-panel30');
    let contentRect = content.getBoundingClientRect();
    let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
    //let tableRect = table.getBoundingClientRect();

    if (cellRect.left < contentRect.left) {
        grid.value = contentRect.left - cellRect.left;
        grid.tbs_setContentPanelLeftMove(value);
        grid.tbs_setBarPosition(grid.code_horizontal);
    }
    else if (cellRect.right > contentRect.right) {
        let value = contentRect.right - cellRect.right;
        grid.tbs_setContentPanelLeftMove(value);
        grid.tbs_setBarPosition(grid.code_horizontal);
    }
    grid.tbs_removeRange(0, -1);
    grid.tbs_selectRange(rowIndex, rowIndex, cellIndex, cellIndex);
}
TbsGrid.prototype.tbs_clickPageFirst = function (e, grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(e, grid, pageIndex, selectedPageCount);
    return val;
}
TbsGrid.prototype.tbs_clickPagePrev = function (e, grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(e, grid, pageIndex, selectedPageCount);
    return val;
}
TbsGrid.prototype.tbs_clickPageIndex = function (e, grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(e, grid, pageIndex, selectedPageCount);
    return val;
}
TbsGrid.prototype.tbs_clickPageNext = function (e, grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(e, grid, pageIndex, selectedPageCount);
    return val;
}
TbsGrid.prototype.tbs_clickPageLast = function (e, grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(e, grid, pageIndex, selectedPageCount);
    return val;
}

/* Functions for select event */
TbsGrid.prototype.tbs_isMovedPositionInConstRange = function(startX, startY, lastX, lastY) {
    let movedX = Math.abs(startX - lastX);
    let movedY = Math.abs(startY - lastY);
    return (movedX < this.grid_mousePointRange && movedY < this.grid_mousePointRange);
}
TbsGrid.prototype.tbs_executeEvent = function(isUserFunction, eventType, param) {
    let selector = '#' + this.gridId;
    let grid = this;

    //isUserFunction : true, false
    //eventType : click, dblclick, edit
    let e = param.e;
    let mode = param.mode; //mouse, key
    let rowIndex = param.rowIndex;
    let cellIndex = param.cellIndex;

    let column = grid.tbs_getColumnByIndex(cellIndex);
    let columnName = grid.tbs_getColumnName(cellIndex);
    let value = grid.tbs_getValue(rowIndex, columnName);
    let text  = grid.tbs_getText(rowIndex, columnName);

    let eventData = {};
    let eventRow = grid.tbs_getRow(rowIndex);
    eventRow.rowIndex    = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName  = columnName;
    eventRow.value       = value;
    eventRow.text        = text;

    if (isUserFunction) {
        if (eventType == 'click') {
            if (grid.notNull(grid.user_click)) { let flag = grid.tbs_click(e, grid, eventRow, grid.user_click); } //user function call
        }
        else if (eventType == 'dblclick') {
            if (grid.notNull(grid.user_dblclick)) { let flag = grid.tbs_dblclick(e, grid, eventRow, grid.user_dblclick); } //user function call
        }
    }
}

/* get Max, Min value */
TbsGrid.prototype.tbs_getMaxRowIndexByMouseMove = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let maxRowIndex;
    const rowIndexArray = [];
    let num;
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxRowIndex = Math.max(...rowIndexArray);
    }
    else if (grid.fixedRowIndex != -1) {
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxRowIndex = Math.max(...rowIndexArray);
    }
    else if (grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxRowIndex = Math.max(...rowIndexArray);
    } else {
        maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
    }
    return maxRowIndex;
}
TbsGrid.prototype.tbs_getMinRowIndexByMouseMove = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let minRowIndex;
    const rowIndexArray = [];
    let num;
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMinRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

        minRowIndex = Math.min(...rowIndexArray);
    }
    else if (grid.fixedRowIndex != -1) {
        num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        minRowIndex = Math.min(...rowIndexArray);
    }
    else if (grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        minRowIndex = Math.min(...rowIndexArray);
    } else {
        minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
    }
    return minRowIndex;
}
TbsGrid.prototype.tbs_getMaxCellIndexByMouseMove = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let maxCellIndex, num;
    const rowIndexArray = [];
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxCellIndex = Math.max(...rowIndexArray);
    }
    else if (grid.fixedRowIndex != -1) {
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxCellIndex = Math.max(...rowIndexArray);
    }
    else if (grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        maxCellIndex = Math.max(...rowIndexArray);
    } else {
        maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
    }
    return maxCellIndex;
}
TbsGrid.prototype.tbs_getMinCellIndexByMouseMove = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    let minCellIndex;
    const rowIndexArray = [];
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMinCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

        minCellIndex = Math.min(...rowIndexArray);
    }
    else if (grid.fixedRowIndex != -1) {
        num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        minCellIndex = Math.min(...rowIndexArray);
    }
    else if (grid.fixedColumnIndex != -1) {
        num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
        num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
        minCellIndex = Math.min(...rowIndexArray);
    } else {
        minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
    }
    return minCellIndex;
}
TbsGrid.prototype.tbs_getMaxRowIndexByMouseMove2 = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let lastY = this.lastY;
    let maxRowIndex;

    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let len = (tableRows) ? tableRows.length : 0;

    let startRowIndex, lastRowIndex;
    if (grid.fixedRowIndex != -1) {
        if (panelName == 'panel60') {
            startRowIndex = 0;
            lastRowIndex = this.fixedRowIndex;
        }
        else if (panelName == 'panel30') {
            startRowIndex = 0;
            lastRowIndex = len - 1;
        }
    }
    else {
        startRowIndex = 0;
        lastRowIndex = len - 1;
    }

    for (let i= startRowIndex; i < lastRowIndex + 1; i++) {
        let tableRow = tableRows[i];
        let tableRowIndex = i + 1;
        let rect = grid.tbs_getOffset(tableRow);
        let top = rect.top;
        if (lastY > top) maxRowIndex = grid.tbs_getRowIndexInTable(tableRowIndex, panelName);
    }
    return maxRowIndex;
}
TbsGrid.prototype.tbs_getMinRowIndexByMouseMove2 = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let lastY = this.lastY;
    let minRowIndex;

    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let len = (tableRows) ? tableRows.length : 0;

    let startRowIndex, lastRowIndex;
    if (grid.fixedRowIndex != -1) {
        if (panelName == 'panel60') {
            startRowIndex = 0;
            lastRowIndex = this.fixedRowIndex;
        }
        else if (panelName == 'panel30') {
            startRowIndex = 0;
            lastRowIndex = len - 1;
        }
    }
    else {
        startRowIndex = 0;
        lastRowIndex = len - 1;
    }
    for (let i = lastRowIndex; i >= startRowIndex; i--) {
        let tableRow = tableRows[i];
        let tableRowIndex = i + 1;
        let rect = grid.tbs_getOffset(tableRow);
        let bottom = rect.top + tableRow.getBoundingClientRect().height;
        if (lastY < bottom) minRowIndex = grid.tbs_getRowIndexInTable(tableRowIndex, panelName);
        //console.log(`${panelName} i ${i} : startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} : minRowIndex ${minRowIndex}  bottom ${bottom} : lastY  ${this.lastY}`);
    }
    return minRowIndex;
}
TbsGrid.prototype.tbs_getMaxCellIndexByMouseMove2 = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let lastX = this.lastX;
    let maxCellIndex;
    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;

    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
        if (panelName == 'panel32') {
            startColumnIndex = 0;
            lastColumnIndex = this.fixedColumnIndex + 1;
        }
        else if (panelName == 'panel30') {
            startColumnIndex = this.fixedColumnIndex + 1;
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
        //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
        if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
    }
    return maxCellIndex
}
TbsGrid.prototype.tbs_getMinCellIndexByMouseMove2 = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let lastX = this.lastX;
    let minCellIndex;

    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
        if (panelName == 'panel32') {
            startColumnIndex = 0;
            lastColumnIndex = this.fixedColumnIndex;
        }
        else if (panelName == 'panel30') {
            startColumnIndex = this.fixedColumnIndex + 1;
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
        //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
        if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
    }
    return minCellIndex;
}
TbsGrid.prototype.tbs_getOffset = function(el) {
    let _x = 0;
    let _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

/* Move Cell */
TbsGrid.prototype.tbs_moveNextRowCell = function (type) {
    //tbs_moveNextRowCell: none use => need to improve
    //type : left, right, up, down
    let selector = '#' + this.gridId;
    let grid = this;

    let rowIndex = -1;
    let cellIndex = -1;
    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
    let td = document.querySelector(selector + ' .tbs-grid-cell-start');
    if (td == null) return;
    let tableRowIndex = parseInt(td.parentNode.rowIndex);
    let dataRowIndex = this.tbs_getRowIndexInTable(tableRowIndex);

    cellIndex = td.cellIndex;
    if (cellIndex == this.columns.length - 1 && dataRowIndex < this.data_view.length - 1) {
        this.tbs_removeRange(0, -1);
        this.tbs_selectRange(dataRowIndex + 1, dataRowIndex + 1, 0, 0);
        let topRowIndex = this.tbs_getFirstRowIndex();
        let lastRowIndex = this.tbs_getLastRowIndex();

        let movedLeft = grid.tbs_getContentPanelLeft(0);
        grid.tbs_setContentPanelLeft(movedLeft);

        if (dataRowIndex == lastRowIndex - 1) this.tbs_displayPanel30(topRowIndex + 1);

        let input = document.querySelector(selector + ' .tbs-grid-input');
        this.input_focus();
    }
    else {
        this.tbs_moveCell(type);
        let topRowIndex = this.tbs_getFirstRowIndex();

        let movedLeft = grid.tbs_getContentPanelLeft(0);
        grid.tbs_setContentPanelLeft(movedLeft);

        grid.tbs_setBarPosition(grid.code_vertical, topRowIndex);

        let input = document.querySelector(selector + ' .tbs-grid-input');
        this.input_focus();
    }
}
TbsGrid.prototype.tbs_moveCell = function (type) { //type : left, right, up, down
    let selector = '#' + this.gridId;
    let grid = this;

    let cellIndex = -1;

    let tableRows     = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRowIndex, dataRowIndex;

    let tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
    if (grid.null(tableCell)) return;

    tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
    dataRowIndex =  parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
    cellIndex = tableCell.cellIndex;

    if (type == 'left') {
        let startCellIndex = cellIndex;
        cellIndex = cellIndex - 1;
        for (let i = cellIndex; i >= 0; i--) {
            let column = this.columns[i];
            if (column[grid.column_visible] == false) cellIndex -= 1;
            else break;
        }
        if (cellIndex < 0 || this.columns[cellIndex][grid.column_visible] == false) {
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(dataRowIndex, dataRowIndex, startCellIndex, startCellIndex);
            return;
        }

        let tableRow = tableRows[tableRowIndex - 1];
        let left1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().left;

        let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
        let left2 = window.pageYOffset + divContent.getBoundingClientRect().left;

        if (left1 < left2) {
            let moveWidth= left2 - left1;
            let table20  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
            let table30  = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

            let hiddenSize = this.horizontalScroll.hiddenSize;
            let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
            let sLeft;
            if (curLeft - moveWidth < 0) sLeft = 0 + 'px';
            else sLeft = -1 * curLeft + moveWidth + 'px';

            grid.tbs_setContentPanelLeft(sLeft);
            grid.tbs_setBarPosition(grid.code_horizontal);
        }
        grid.tbs_removeRange(0, -1);
        grid.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
    }
    else if (type == 'right') {
        let startCellIndex = cellIndex;
        cellIndex = cellIndex + 1;
        for (let i = cellIndex, len = this.columns.length; i < len; i++){
            let column = this.columns[i]
            if (column[grid.column_visible] == false) cellIndex += 1;
            else break;
        }
        if (cellIndex >= this.columns.length) cellIndex = startCellIndex;

        let tableRow = tableRows[tableRowIndex - 1];
        let right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;

        let panel30= document.querySelector(selector + ' .tbs-grid-panel30');
        let right2 = window.pageYOffset + panel30.getBoundingClientRect().right;

        if (right1 > right2) {
            let moveWidth = right1 - right2;
            let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
            let hiddenSize = this.horizontalScroll.hiddenSize;
            let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
            let sLeft;
            if (curLeft + moveWidth > hiddenSize) sLeft = -1 * hiddenSize + 'px';
            else sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';

            grid.tbs_setContentPanelLeft(sLeft);
            grid.tbs_setBarPosition(grid.code_horizontal);
        }
        this.tbs_removeRange(0, -1);
        this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
    }
    else if (type == 'up') {
        if (this.fixedRowIndex != -1) {
            dataRowIndex -= 1;
            let topRowIndex = this.tbs_getFirstRowIndex();
            if (dataRowIndex <= this.fixedRowIndex) topRowIndex = this.fixedRowIndex + 1;

            if (topRowIndex  < 0) topRowIndex = 0;
            if (dataRowIndex < 0) dataRowIndex = 0;

            if (dataRowIndex >= topRowIndex) { //OK
                this.tbs_removeRange(0, -1);
                this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            }
            else if (dataRowIndex < topRowIndex && dataRowIndex == topRowIndex - 1) {
                this.tbs_removeRange(0, -1);
                let rowIndex = this.tbs_setBarPositionByDirection('up');
                this.tbs_displayOneSelection(rowIndex, rowIndex, cellIndex, cellIndex);
            }
            else {
                this.tbs_removeRange(0, -1);
                this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            }
        }
        else {
            dataRowIndex -= 1;
            let topRowIndex = this.tbs_getFirstRowIndex();

            if (topRowIndex  < 0) topRowIndex = 0;
            if (dataRowIndex < 0) dataRowIndex = 0;

            if (topRowIndex <= dataRowIndex) {
                this.tbs_removeRange(0, -1);
                this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            }
            else {
                this.tbs_removeRange(0, -1);
                let rowIndex = this.tbs_setBarPositionByDirection('up');
                this.tbs_displayOneSelection(rowIndex, rowIndex, cellIndex, cellIndex);
            }
        }
    }
    else if (type == 'down') {
        let topRowIndex = this.tbs_getFirstRowIndex();
        let lastRowIndex = this.tbs_getLastRowIndex();
        if (grid.fixedRowIndex != -1 && dataRowIndex == grid.fixedRowIndex){
            dataRowIndex += 1;
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex, dataRowIndex);
            grid.tbs_setBarPosition(grid.code_vertical, dataRowIndex);
            return;
        }
        if (this.pageRowCount > this.pageIntRowCount) {
            if (tableRows.length == this.pageRowCount) {
                if (dataRowIndex == lastRowIndex) {
                    if (dataRowIndex == this.data_view.length - 1) {
                        this.tbs_removeRange(0, -1);
                        this.tbs_setBarPositionByDirection('down', topRowIndex + 1);
                        this.tbs_displayOneSelection(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.tbs_removeRange(0, -1);
                        this.tbs_setBarPositionByDirection('down', topRowIndex + 2);
                        this.tbs_displayOneSelection(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    }
                }
                else if (dataRowIndex == lastRowIndex - 1) {
                    dataRowIndex += 1;
                    this.tbs_removeRange(0, -1);
                    this.tbs_setBarPositionByDirection('down', topRowIndex + 1);
                    this.tbs_displayOneSelection(dataRowIndex, dataRowIndex, cellIndex, cellIndex);

                }
                else {
                    dataRowIndex += 1;
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
            }
            else {
                if (dataRowIndex == lastRowIndex) {
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
                else {
                    dataRowIndex += 1;
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
            }
        }
        else {
            if (tableRows.length == this.pageRowCount) {
                if (dataRowIndex == lastRowIndex) {
                    if (dataRowIndex == this.data_view.length - 1) {
                        this.tbs_removeRange(0, -1);
                        this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.tbs_removeRange(0, -1);
                        this.tbs_setBarPositionByDirection('down');
                        this.tbs_displayOneSelection(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    }
                }
                else {
                    dataRowIndex += 1;
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
            }
            else {
                if (dataRowIndex == lastRowIndex) {
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
                else {
                    dataRowIndex += 1;
                    this.tbs_removeRange(0, -1);
                    this.tbs_selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                }
            }
        }
    }
}

/* scroll class role : event */
TbsGrid.prototype.event_wheel = function() { //mouse wheel event
    let selector = '#' + this.gridId;
    let grid = this;
    let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
    let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');

    const mouseWheelEvent = function (e) {
        grid.tbs_editEnd();
        if (yScroll.style.display == '') {
            if (e.deltaY > 0) {
                e.preventDefault();
                e.returnValue = false;
                grid.tbs_setBarPositionByDirection('down');
            }
            if (e.deltaY < 0) {
                e.preventDefault();
                e.returnValue = false;
                grid.tbs_setBarPositionByDirection('up');
            }
        }
        else if (xScroll.style.display == '') {
            if (e.deltaY > 0) {
                e.preventDefault();
                e.returnValue = false;
                //grid.tbs_setBarPositionByDirection('right');
            }
            if (e.deltaY < 0) {
                e.preventDefault();
                e.returnValue = false;
                //this.tbs_setBarPositionByDirection('left');
            }
        }
    };
    document.querySelector(selector).addEventListener('wheel', mouseWheelEvent);
}
TbsGrid.prototype.event_scrollButton = function() {
    //mouse wheel event
    //onmousedown -> onmouseup -> click
    let selector = '#' + this.gridId;
    let grid = this;

    let leftButton  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-left');
    let rightButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-right');

    let upButton    = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-up');
    let downButton  = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-down');
    let flag = false;
    //-----------------------------------------------------------------
    const leftButtonMouseDownEvent = function (e) {
        document.addEventListener('mouseup', leftButtonMouseUpEvent);
        flag = true;
        doInterval('left');
    };
    const leftButtonMouseUpEvent = function (e) {
        flag = false;
        document.removeEventListener('mouseup', leftButtonMouseUpEvent);
    };
    //-----------------------------------------------------------------
    const rightButtonMouseDownEvent = function (e) {
        document.addEventListener('mouseup', rightButtonMouseUpEvent);
        flag = true;
        doInterval('right');
    };
    const rightButtonMouseUpEvent = function (e) {
        flag = false;
        document.removeEventListener('mouseup', rightButtonMouseUpEvent);
    };
    //-----------------------------------------------------------------
    const upButtonMouseDownEvent = function (e) {
        document.addEventListener('mouseup', upButtonMouseUpEvent);
        flag = true;
        doInterval('up');
    };
    const upButtonMouseUpEvent = function (e) {
        flag = false;
        document.removeEventListener('mouseup', upButtonMouseUpEvent);
    };
    //-----------------------------------------------------------------
    const downButtonMouseDownEvent = function (e) {
        document.addEventListener('mouseup', downButtonMouseUpEvent);
        flag = true;
        doInterval('down');
    };
    const downButtonMouseUpEvent = function (e) {
        flag = false;
        document.removeEventListener('mouseup', downButtonMouseUpEvent);
    };
    //-----------------------------------------------------------------
    leftButton.addEventListener('mousedown', leftButtonMouseDownEvent);
    rightButton.addEventListener('mousedown', rightButtonMouseDownEvent);
    upButton.addEventListener('mousedown', upButtonMouseDownEvent);
    downButton.addEventListener('mousedown', downButtonMouseDownEvent);
    function doInterval(type) {
        if (flag) {
            setTimeout(function() {doInterval(type);}, 500);
            grid.tbs_setBarPositionByDirection(type);
        }
    }
}
TbsGrid.prototype.event_railClick = function() {
    let selector = '#' + this.gridId;
    let grid = this;
    const xWrapClickEvent = function (e) {
        let bar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let left = parseInt(bar.style.left.replace('px', ''));
        if (isNaN(left)) left = 0;
        let barSize  = grid.horizontalScroll.barSize;
        if (e.offsetX >= left && e.offsetX <= (left + barSize)) return;

        if (e.target.className != 'tbs-grid-horizontal-scroll-bar') {
            if (e.offsetX > left) {
                let move = e.offsetX - (left + barSize);
                bar.style.left = (left + move) + 'px';
            }
            if (e.offsetX < left) {
                let move = e.offsetX;
                bar.style.left = (e.offsetX) + 'px';
            }

            let movedLeft = grid.tbs_getContentPanelLeft(bar.style.left);
            grid.tbs_setContentPanelLeft(movedLeft);

            grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
        }
    };
    const yWrapClickEvent = function (e) {
        let bar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        let top = bar.style.top != '' ? parseInt(bar.style.top, 10) : 0;
        let barSize = grid.verticalScroll.barSize;
        if (e.offsetY >= top && e.offsetY <= (top + barSize)) return;

        if (e.target.className != 'tbs-grid-vertical-scroll-bar') {
            if (e.offsetY > top) {
                let move = e.offsetY - (top + barSize);
                bar.style.top = (top + move) + 'px';
            }
            else if (e.offsetY < top) {
                let move = e.offsetY;
                bar.style.top = e.offsetY + 'px';
            }
            // let topRowIndex = grid.tbs_getFirstRowIndex('panel30');
            // if (grid.isLastRowIndex(topRowIndex)) bar.style.top = grid.verticalScroll.railSize + 'px';
            e = null;

            let moveCount = grid.verticalScroll.moveCount;
            /*
                @issue : parseInt(bar.style.top, 10) * moveCount < 0, topRowIndex always is 0.
                7 * 0.063 = 0.48  ceil => yMovecount.
            */
            let trTopIndex = Math.ceil(parseInt(bar.style.top, 10) * moveCount);
            bar = null;
            grid.tbs_displayPanel30(trTopIndex);
        }
    };
    //-----------------------------------------------------------------
    document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-wrap').addEventListener('click', xWrapClickEvent);
    document.querySelector(selector + ' .tbs-grid-vertical-scroll   .tbs-grid-vertical-scroll-wrap').addEventListener('click', yWrapClickEvent);
}
TbsGrid.prototype.event_dragScrollBar = function() {
    // function : drag scroll bar
    let selector = '#' + this.gridId;
    let grid = this;

    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
    let xPos = { left: 0, x : 0 }
    //== x scroll
    const xMouseDownEvent = function(e) {
        grid.tbs_editEnd();
        e.stopPropagation();

        if (e.target.className != 'tbs-grid-horizontal-scroll-bar') return;
        xPos.left = Number(xBar.style.left.replace('px', ''));
        xPos.x = e.clientX;
        document.addEventListener('mousemove', xMouseMoveEvent);
        document.addEventListener('mouseup', xMouseUpEvent);
    }
    const xMouseMoveEvent = function(e) {
        //e.preventDefault();	// next stop
        //e.stopPropagation();	// up stop
        let xMove = e.clientX - xPos.x;
        let left = xPos.left + xMove;
        let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
        if (left < 0) left = 0;
        if (left > xRailWidth) left = xRailWidth;
        xBar.style.left = left.toString() + 'px';

        let header  = document.querySelector(selector + ' .tbs-grid-panel20');
        let content = document.querySelector(selector + ' .tbs-grid-panel30');
        let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
        let footer  = document.querySelector(selector + ' .tbs-grid-panel50');

        let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
        grid.tbs_setContentPanelLeft((left * -1 * ratio).toString());
        grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
    }
    const xMouseUpEvent = function(e) {
        document.removeEventListener('mousemove', xMouseMoveEvent);
        document.removeEventListener('mouseup', xMouseUpEvent);
    }
    xBar.addEventListener('mousedown', xMouseDownEvent, false);

    //== y scroll
    let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
    let yPos = { top: 0, y : 0 }
    let actveTopRowIndex = -1;
    const yMouseDownEvent = function(e) {
        grid.tbs_editEnd();
        e.stopPropagation();

        actveTopRowIndex = -1;
        if (e.target.className != 'tbs-grid-vertical-scroll-bar') return;
        yPos.top = Number(yBar.style.top.replace('px', ''));
        yPos.y = e.clientY;

        document.addEventListener('mousemove', yMouseMoveEvent);
        document.addEventListener('mouseup', yMouseUpEvent);
    }
    const yMouseMoveEvent = function(e) {
        //e.stopPropagation();
        let yBarTop = yPos.top + e.clientY - yPos.y;
        if (yBarTop < 0) yBarTop = 0;
        if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

        let displayTopRowIndex = Math.floor(yBarTop * grid.verticalScroll.moveCount);
        actveTopRowIndex = displayTopRowIndex;

        let topRowIndex = displayTopRowIndex;
        if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

        //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
        setTimeout(function(){ grid.tbs_setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
        setTimeout(function(){ grid.tbs_displayPanel30(topRowIndex);}, 5);
    }
    const yMouseUpEvent = function(e) {
        e.stopPropagation();
        document.removeEventListener('mousemove', yMouseMoveEvent);
        document.removeEventListener('mouseup', yMouseUpEvent);
    }
    yBar.addEventListener('mousedown', yMouseDownEvent, false);
}

