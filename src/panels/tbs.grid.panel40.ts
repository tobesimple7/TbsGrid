
import { TbsGridPanelBase } from './tbs.grid.panel.base';
import { TbsGridRenderPanel40 } from './tbs.grid.render.panel40';
import { TbsGridRenderPanelInfo } from './tbs.grid.render.panel.info';
import { TbsGridTable } from "../tbs.grid.table";
import {columnAlias, Direction, GridMode, rowAlias} from "../tbs.grid.types";

export class TbsGridPanel40 extends TbsGridPanelBase {

    constructor(grid) {
        super(grid);
        this.panelName  = 'panel40';

        this.panelName1 = 'panel41';
        this.panelName2 = 'panel42';
        this.panelName0 = 'panel40';
    }

    createHtml(parentElement) {
        const grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group41">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel41"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel42"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group40">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel40"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }

    createTable() {
        const grid = this.grid;

        if (grid.top_column_table.count() == 0) return;

        const classTable = new TbsGridTable(grid);
        classTable.createTable('panel41', 0, 1);
        classTable.createTable('panel42', 0, 1);
        classTable.createTable('panel40', 0, 1);

    }

    setDataPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classRange.removePanelRange('panel40');
        this.setDataPanel2();
        this.setDataPanel1();
        this.setDataPanel0();
    }

    setDataPanel1() {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName1;

        if (grid.top_table.count() == 0) return;

        let topRowIndex = 0;
        let bottomRowIndex = 0;

        let pageRowCount = 1;
        let rowHeight = grid.rowHeight;

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        let tableRowIndex = 0;

        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow: any = tableRows[tableRowIndex];

            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            let tableCell: any = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;

            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
        }
    }

    setDataPanel2() {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.top_table.count() == 0) return;
        if (grid.fixedColumnIndex == -1) return;

        let panelName = this.panelName2;

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];

            if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;

            let tbsGridRender = new TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, column, 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, column, 0, x);

            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    }

    setDataPanel0() {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName0;

        if (grid.top_table.count() == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
            let column = grid.column_table.data[x];
            let columnName = column[columnAlias.name];
            let tableCell = tableRow.childNodes[x];

            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            }
            else { if (x < startColumnIndex) continue; }

            let tbsGridRender = new TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);

            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    }

    panel40_select(eventPanelName) {
        let selector = this.selector;
        const grid = this.grid;

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
            if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            else return;


            // @ts-ignore
            mouseButton = window.event.button;

            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex  = -1;

            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = tableCell.cellIndex;
            // @ts-ignore
            if (window.event.ctrlKey) selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    if (targetName == 'icon') {
                        if (grid.grid_mode == GridMode.tree) {
                            grid.classTree.setTreeFolding(tableCell);
                            selectCell(e);
                        }
                        else if (grid.group_column_table.count() > 0) {
                            grid.classGroup.setGroupFolding(tableCell);
                            selectCell(e);
                        }

                    }
                    else selectCell(e);
                }
                // @ts-ignore
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
            if (grid.options[rowAlias.selectMode] == 'cell') return;

            // @ts-ignore
            if (window.event.ctrlKey) selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) { selectCellShiftMove(e); }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
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

            let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };

                    if (e.detail == 1) {
                        let panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
                        if (panelInput.style.left != '30000px') {
                            grid.editEnd();
                            grid.input_focus();
                        }
                        else grid.tbs_executeEvent(true, 'click', param);
                    }
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                grid.editStart(e, 'mouse')
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
            //if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            //console.log(`e.target.className ${e.target.className}`);
            if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            else return;

            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = startCellIndex;
            startRowIndex  = 0;
            lastRowIndex   = 0;

            classRange.removeRange(0, -1);
            classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
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
                let absRect = grid.getOffset(panel);

                let rect30= panel30.getBoundingClientRect();
                let absRect30 = grid.getOffset(panel30);

                let panelLeft  = absRect.left;
                let panelRight = absRect30.left + rect30.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight) {
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    else if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                }
                select(moveX, moveY);
            }
            else {
                let panel = document.querySelector(selector + ' .tbs-grid-panel30'); // + eventPanelName);
                let rect = panel.getBoundingClientRect();
                let absRect = grid.getOffset(panel);

                let panelLeft  = absRect.left;
                let panelRight = absRect.left + rect.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight) {
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    else if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                }
                select(moveX, moveY);
            }
        }
        const selectCellCtrl = function(e) {}
        const selectCellCtrlMove = function(e) {}
        const selectCellShift = function(e) {
            let tableCell;
            if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            else return;

            classRange.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : classRange.startCellIndex;
            classRange.lastCellIndex  = lastCellIndex  = tableCell.cellIndex;
            classRange.startRowIndex  = startRowIndex  = 0;
            classRange.lastRowIndex   = lastRowIndex   = 0;

            classRange.removeRange(0, -1);
            classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
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
                let absRect = grid.getOffset(panel);

                let rect30= panel30.getBoundingClientRect();
                let absRect30 = grid.getOffset(panel30);

                let panelTop   = absRect.top;
                let panelBottom= absRect.top + rect.height;
                let panelLeft  = absRect.left;
                let panelRight = absRect30.left + rect30.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; doInterval(Direction.down);  }
                }
                select(moveX, moveY);
            }
            else {
                let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                let rect= panel.getBoundingClientRect();
                let absRect = grid.getOffset(panel);

                let panelTop   = absRect.top;
                let panelBottom= absRect.top + rect.height;
                let panelLeft  = absRect.left;
                let panelRight = absRect.left + rect.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; doInterval(Direction.down);  }
                }
                select(moveX, moveY);
            }
        }
        const select = function(moveX, moveY) {
            if (moveX > 0) { // right
                let maxRowIndex, maxCellIndex;
                maxRowIndex  = 0;
                maxCellIndex = classRange.getMaxCellIndexByMouseMove();
//console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                classRange.removeRange(0, -1);
                classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
            }
            else if (moveX < 0) { // left
                let maxRowIndex, minCellIndex;
                maxRowIndex  = 0;
                minCellIndex = classRange.getMinCellIndexByMouseMove();

                classRange.removeRange(0, -1);
                classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
            }
        }
        const setPanelMove = function(type) {
            // panel outside area
            let startRowIndex  = 0;
            let lastRowIndex   = 0;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex  = grid.lastCellIndex;

            let maxCellIndex, minCellIndex;

            let table: any = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;

            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;

                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    maxCellIndex = classRange.getMaxCellIndexByMouseMove();

                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;

                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    minCellIndex = classRange.getMinCellIndexByMouseMove();

                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
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

    panel41_select(eventPanelName) {
        let selector = this.selector;
        const grid = this.grid;

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

            // @ts-ignore
            mouseButton = window.event.button;

            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex  = -1;

            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = tableCell.cellIndex;

            // @ts-ignore
            if (window.event.ctrlKey) selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e);
                }
                // @ts-ignore
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
            if (grid.options[rowAlias.selectMode] == 'cell') return;

            // @ts-ignore
            if (window.event.ctrlKey) selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) { selectCellShiftMove(e); }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
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

            let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };

                    if (e.detail == 1) grid.tbs_executeEvent(true, 'click', param);
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
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

            startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex   = startRowIndex;

            let panelName = eventPanelName;
            if (panelName == 'panel41') {
                grid.classRange40.removeRange(0, -1);
                grid.classRange40.selectRange(0, 0);
            }
            else if (panelName == 'panel51') {
                grid.classRange50.removeRange(0, -1);
                grid.classRange50.selectRange(0, 0);
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
            if (grid.fixedColumnIndex != -1) {
                let panel  = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                let panel30= document.querySelector(selector + ' .tbs-grid-panel30');

                let rect= panel.getBoundingClientRect();
                let absRect = grid.getOffset(panel);

                let rect30= panel30.getBoundingClientRect();
                let absRect30 = grid.getOffset(panel30);

                let panelTop   = absRect.top;
                let panelBottom= absRect.top + rect.height;
                let panelLeft  = absRect.left;
                let panelRight = absRect30.left + rect30.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft  ) { flagLeft  = true; this.doInterval(Direction.left);  }
                    if (lastX > panelRight ) { flagRight = true; this.doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; this.doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; this.doInterval(Direction.down);  }
                }
                select(moveX, moveY);
            }
            else {
                let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                let rect= panel.getBoundingClientRect();
                let absRect = grid.getOffset(panel);

                let panelTop   = absRect.top;
                let panelBottom= absRect.top + rect.height;
                let panelLeft  = absRect.left;
                let panelRight = absRect.left + rect.width;

                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft  ) { flagLeft  = true; this.doInterval(Direction.left);  }
                    if (lastX > panelRight ) { flagRight = true; this.doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; this.doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; this.doInterval(Direction.down);  }
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
                grid.classRange40.removeRange(0, -1);
                grid.classRange40.selectRange(0, 0);
            }
            else if (panelName == 'panel51') {
                grid.classRange50.removeRange(0, -1);
                grid.classRange50.selectRange(0, 0);
            }

        }

        eventPanel.addEventListener('mousedown', mouseDownEvent);
    }
}



