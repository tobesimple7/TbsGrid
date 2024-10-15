
import { TbsGridPanelBase } from './tbs.grid.panel.base';
import { TbsGridRenderPanel30 } from './tbs.grid.render.panel30';
import { TbsGridRenderPanelInfo } from './tbs.grid.render.panel.info';
import {TbsGridTable} from "../tbs.grid.table";
import {CellType, columnAlias, Direction, GridMode, rowAlias} from "../tbs.grid.types";
/*
1. td, div, checkbox 에 다음과 같은 정보를 준다.
    => data-row-index,      data-name,      data-column-index
    => data-cell-row-index, data-cell-name, data-cell-column-index (template 일 경우)
2. valueName, textName 이렇게 가져간다.
3. 1개 일 경우 이름 필요없음
   2개 일 경우 이름 필요 함  checkbox1, checkbox2, checkbox3 에 checkbox name을 준다.
4. 이벤트에 정보를 넘겨줄때, rowIndex, columnIndex,
                         cellRowIndex, cellColumnIndex
*/
export class TbsGridPanel30 extends TbsGridPanelBase {

    constructor(grid) {
        super(grid);
        this.panelName  = 'panel30';

        this.panelName1 = 'panel31';
        this.panelName2 = 'panel32';
        this.panelName0 = 'panel30';

    }

    createHtml(parentElement) {
        const grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group31">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel31"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel32"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group30">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel30"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }

    createTable() {
        const grid = this.grid;

        const classTable = new TbsGridTable(grid);
        classTable.createTable('panel31', 0, grid.pageRowCount);
        classTable.createTable('panel32', 0, grid.pageRowCount);
        classTable.createTable('panel30', 0, grid.pageRowCount);
    }

    updateTableRows() {
        let selector = this.selector;
        const grid = this.grid;

        let tableRows =  document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
        let addRowCount=  grid.pageRowCount - tableRows.length;
        if (addRowCount == 0) return;

        const classTable = new TbsGridTable(grid);
        classTable.updateTableRows('panel31', addRowCount);
        classTable.updateTableRows('panel32', addRowCount);
        classTable.updateTableRows('panel30', addRowCount);
    }

    setDataPanel(topRowIndex) {
        const selector = this.selector;
        const grid = this.grid;

        const tableRows =  document.querySelectorAll(`${selector} .tbs-grid-panel30 tbody tr`);
        if (tableRows.length == 0) {
            grid.classPanel30.createTable();
        }
        else {
            if (tableRows.length < grid.pageRowCount) grid.classPanel30.updateTableRows();
        }

        grid.classRange.removePanelRange('panel30');

        this.setDataPanel1({ panelName: 'panel31', topRowIndex : topRowIndex });
        this.setDataPanel2({ panelName: 'panel30', topRowIndex : topRowIndex });
        this.setDataPanel0({ panelName: 'panel32', topRowIndex : topRowIndex });

        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.displaySelectedLine();
    }

    setDataPanel1(param) {
        let selector = this.selector;
        const grid = this.grid;

        let panelName = this.panelName1;

        let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);

        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= 0;
        let lastColumnIndex = grid.info_column_table.count() - 1;

        /* create table thead */
        //grid.classRow.setTableHead(grid, panelName);

        /* create table tbody */
        const tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];

            /* create table tr */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            for (let x = 0; x < grid.info_column_table.count(); x++) {
                let tableCell: any = tableRow.childNodes[x];

                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, columnAlias.type);

                /* Render: Start */
                let tbsGridRenderInfo = new TbsGridRenderPanelInfo(grid);
                tbsGridRenderInfo.start(panelName, tableCell, grid.info_column_table.data[x], i, x);
                tbsGridRenderInfo = null;

                /* Render: Show Selected Cells */
                grid.classCell.showSelectedCells(grid, panelName, tableCell, i, 0);
            }

            // on fixed columns
            grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);

            tableRowIndex += 1;
        }
        // hide Unnecessary tableRows
        let pageRowCount = grid.getPageRowCount(panelName);

        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);
    }

    setDataPanel2(param) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.fixedColumnIndex == -1) return;

        let panelName = this.panelName2;

        let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn(panelName);
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];

            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            for (let x = 0; x <= lastColumnIndex; x++) {
                let tableCell = tableRow.childNodes[x];

                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
                if (x <= grid.fixedColumnIndex) tableCell = tableRow.childNodes[x];

                /* Render: Start */
                let tbsGridRender = new TbsGridRenderPanel30(grid);
                tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], i, x);
                tbsGridRender = null;
                //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], i, x);

                /* Render: Show Selected Cells */
                grid.classCell.showSelectedCells(grid, panelName, tableCell, i, x);
            }
            tableRowIndex += 1;
        }
        // hidden : Unnecessary tableRows
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, grid.pageRowCount);

        // // panel32 : display rowCount
        // if (param.panelName == 'panel32') {
        //     let rowCount = grid.getRowCount();
        //     if (grid.grid_mode == GridMode.page) rowCount = grid.page_table.count();
        //     document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
        // }
    }

    setDataPanel0(param) {
        let selector = this.selector;
        const grid = this.grid;

        let panelName = this.panelName0;

        let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);

        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* create table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* create table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];

            /* create table tr */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            for (let x = 0; x <= lastColumnIndex; x++) {
                let tableCell: any = tableRow.childNodes[x];

                tableCell.dataset.rowIndex = i;
                tableCell.dataset.columnIndex = x;
                tableCell.dataset.name = grid.column_table.data[x].name;

                tableCell.childNodes[0].dataset.rowIndex = i;
                tableCell.childNodes[0].dataset.columnIndex = x;
                tableCell.childNodes[0].dataset.name = grid.column_table.data[x].name;

                if (grid.fixedColumnIndex != -1 && x <= grid.fixedColumnIndex) continue;

                /* Render: Start */
                let tbsGridRender = new TbsGridRenderPanel30(grid);
                tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], i, x);
                tbsGridRender = null;

                /* Render: Show Selected Cells */
                grid.classCell.showSelectedCells(grid, panelName, tableCell, i, x);
            }

            // on fixed columns
            grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);

            tableRowIndex += 1;
        }
        // hide Unnecessary tableRows
        let pageRowCount = grid.getPageRowCount(panelName);

        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);

        // panel30 : display rowCount
        if (panelName == 'panel30') {
            let rowCount: number;

            if (grid.grid_mode == GridMode.page) rowCount = grid.page_table.count();
            else if (grid.grid_mode == GridMode.pagination) rowCount = grid.classPagination.pageTotalRowCount;
            else rowCount = grid.getRowCount();

            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = String(rowCount);
        }
    }

    panel30_select(eventPanelName) {
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

        const mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) {}
            else if (e.target.classList.contains('tbs-grid-html-button')) {}
            else if (e.target.classList.contains('tbs-grid-html-link')) {}
            else return;

            let rowIndex = e.target.parentNode.dataset.rowIndex;
            let columnIndex = e.target.parentNode.dataset.columnIndex;
            let columnName = e.target.parentNode.dataset.name;
            let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
            let value = grid.view_table.selectValue(rowIndex, columnName);
            if (columnType == CellType.checkbox) {
                if (grid.notEmpty(grid.onClickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                    const eventRow: any = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex    = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName  = columnName;
                    eventRow.value       = value;
                    eventRow.text        = value;
                    eventRow.data        = dataRows;
                    let result = grid.onClickCheckbox(grid, eventRow);
                    if (result) {
                        let newValue = grid.reverseBoolean(value);
                        grid.setValue(rowIndex, columnName, newValue);
                    }
                }
                else {
                    let newValue = grid.reverseBoolean(value);
                    grid.setValue(rowIndex, columnName, newValue);
                }
                setTimeout(() => grid.classPanel30.setDataPanel(grid.getFirstRowIndex()), 20);
            }
            else if (columnType == CellType.button) {
                e.preventDefault();
                if (grid.notEmpty(grid.onClickButton) && e.target.disabled != 'disabled') {
                    const eventRow: any = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex    = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName  = columnName;
                    eventRow.value       = value;
                    eventRow.text        = value;
                    eventRow.data        = dataRows;
                    grid.onClickButton(grid, eventRow);
                }
            }
            else if (columnType == CellType.link) {
                if (grid.notEmpty(grid.onClickLink)) {
                    const eventRow: any = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex    = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName  = columnName;
                    eventRow.value       = value;
                    eventRow.text        = value;
                    eventRow.data        = dataRows;
                    const result = grid.onClickLink(grid, eventRow);
                    if (!result) {
                        e.preventDefault();
                    }
                }
            }
        }

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
            if      (e.target.classList.contains('tbs-grid-html-icon'))    { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-checkbox')) { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            else if (e.target.classList.contains('tbs-grid-html-button'))   { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            else if (e.target.classList.contains('tbs-grid-html-link'))     { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            else if (e.target.classList.contains('tbs-grid-html-img'))      { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))    { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))        { targetName = 'cell'; tableCell = e.target; }
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
                            //selectCell(e);
                        }
                        else if (grid.group_column_table.count() > 0) {
                            grid.classGroup.setGroupFolding(tableCell);

                            e.preventDefault();
                            e.stopPropagation();
                            //selectCell(e);
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
            // e.stopPropagation();
            // console.log('0' + e.target.checked)
            e.preventDefault();
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;

            //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
            flagUp      = false;
            flagDown    = false;
            flagLeft    = false;
            flagRight   = false;

            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);

            grid.input_focus();

            let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                //======================================================================================================
                // if (e.target.classList.contains('tbs-grid-html-checkbox')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.onClickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.onClickCheckbox(grid, eventRow);
                //         if (result) {
                //             let newValue = grid.reverseBoolean(value);
                //             grid.setValue(rowIndex, columnName, newValue);
                //         }
                //     }
                //     else {
                //         let newValue = grid.reverseBoolean(value);
                //         grid.setValue(rowIndex, columnName, newValue);
                //     }
                //     setTimeout(() => grid.classPanel30.setDataPanel(grid.getFirstRowIndex()), 50);
                // }
                // else if (e.target.classList.contains('tbs-grid-html-button')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.onClickButton) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         grid.onClickButton(grid, eventRow);
                //     }
                // }
                // else if (e.target.classList.contains('tbs-grid-html-link')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.onClickLink)) {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.onClickLink(grid, eventRow);
                //         if (result == false) {
                //             e.preventDefault();
                //             e.stopPropagation();
                //             e.cancell = true;
                //         }
                //     }
                // }
                // //======================================================================================================
                // else {
                    if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                        let param = {e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse'};

                        if (e.detail == 1) {
                            let panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
                            if (panelInput.style.left != '30000px') {
                                grid.editEnd();
                                grid.input_focus();
                            } else grid.tbs_executeEvent(true, 'onClick', param);
                        } else if (e.detail == 2) {
                            let isEditable = grid.column_table.data[startCellIndex][columnAlias.editable];
                            if (isEditable) {
                                if (grid.notNull(grid.onEdit)) {
                                    grid.editStart(e, 'mouse')
                                } else {
                                    grid.input_show(e, 'mouse');
                                }
                            } else grid.tbs_executeEvent(true, 'onDblclick', param);
                        }
                    }
                //}
            }
        };

        const selectCell = function(e) {
            let tableCell;
            if      (e.target.classList.contains('tbs-grid-html-icon'))     { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-checkbox')) { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-button'))   { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-link'))     { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-img'))      { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string'))   { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            else return;

            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = startCellIndex;
            startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex   = startRowIndex;

            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow: any = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        }

        const selectCellMove = function(e) {
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
            if (grid.fixedColumnIndex != -1) {
                if (eventPanelName == 'panel32') {
                    let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
                    let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

                    let rect32 = panel32.getBoundingClientRect();
                    let rect30 = panel30.getBoundingClientRect(); //absolute > relative position.

                    let panelTop   = rect32.top;
                    let panelBottom= rect32.top + rect32.height;
                    let panelLeft  = rect32.left;
                    let panelRight32= rect30.left;
                    let panelRight = rect30.left + rect30.width;

                    // Outside the area
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    // if (lastX < panelRight32 && document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left != '0px') {
                    //     flagLeft = true;
                    //     doInterval(Direction.left);
                    // }
                    if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; doInterval(Direction.down);  }

                    select(moveX, moveY);
                }
                else {
                    let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
                    let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

                    let rect32 = panel32.getBoundingClientRect();
                    let rect30 = panel30.getBoundingClientRect();

                    let panelTop   = rect30.top;
                    let panelBottom= rect30.top + rect30.height;
                    let panelLeft  = rect30.left;
                    let panelRight = rect30.left + rect30.width;

                    // Outside the area
                    if (lastX < panelLeft  ) { flagLeft  = true; doInterval(Direction.left);  }
                    if (lastX > panelRight ) { flagRight = true; doInterval(Direction.right); }
                    if (lastY < panelTop   ) { flagUp    = true; doInterval(Direction.up);    }
                    if (lastY > panelBottom) { flagDown  = true; doInterval(Direction.down);  }

                    select(moveX, moveY);
                }
            }
            else {
                let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                let rect = panel.getBoundingClientRect();
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

            grid.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : grid.startCellIndex;
            grid.lastCellIndex  = lastCellIndex  = tableCell.cellIndex;
            grid.startRowIndex  = startRowIndex  = (startRowIndex == -1) ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
            grid.lastRowIndex   = lastRowIndex   = tableCell.parentNode.dataset.rowIndex;

            //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow: any = tableRows[i];
                    let rect: any = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }

            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
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
            if (moveY > 0 && moveX > 0) { //down, right
                let maxRowIndex, maxCellIndex;
                maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                let maxRowIndex, minCellIndex;
                maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
                minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 2) $maxRowIndex  ${maxRowIndex} minCellIndex ${minCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX > 0) { //up, right
                let minRowIndex, maxCellIndex;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                maxCellIndex= grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName}  3) minRowIndex ${minRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX < 0) { //up, left
                let minRowIndex, minCellIndex;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                minCellIndex= grid.tbs_getMinCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 4)  minRowIndex ${minRowIndex} minCellIndex ${minCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
        }

        const setPanelMove = function(type) {
            // panel outside area
            let startRowIndex  = grid.startRowIndex;
            let lastRowIndex   = grid.lastRowIndex;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex  = grid.lastCellIndex;

            let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;

            let table: any = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;

            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    minCellIndex = grid.tbs_getMinCellIndexByMouseMove();

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'down') {
                grid.classScroll.setBarPositionByDirection('down');
                if (lastRowIndex < (grid.view_table.count() - 1)) {
                    lastRowIndex += 1;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex,lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');

                if (lastRowIndex != 0) {
                    let minRowIndex= lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else flagUp = false;
            }
        }

        const doInterval = function(type) {
            if (type == Direction.left || type == Direction.right) {
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
            else {
                if (flagUp) {
                    //flagUp    = false;
                    flagDown    = false;
                    setTimeout(() => doInterval('up'), 15);
                    setPanelMove('up');
                }
                if (flagDown) {
                    flagUp      = false;
                    //flagDown  = false;
                    setTimeout(() => doInterval('down'), 15);
                    setPanelMove('down');
                }
            }
        }

        const eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', mouseClickEvent);
    }

    panel31_select(eventPanelName) {
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

        const mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) {} else return;
            const tableCell = e.target.parentNode.parentNode;
            let rowIndex = tableCell.dataset.rowIndex;
            let columnIndex = tableCell.cellIndex;
            let columnName = e.target.parentNode.dataset.name;
            let value = grid.view_table.data[rowIndex][columnAlias.isChecked];

            // @ts-ignore
            if (grid.notEmpty(grid.onClickInfoCheckBox) && e.target.disabled != 'disabled') {
                const eventRow: any = {};
                const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                eventRow.rowIndex    = rowIndex;
                eventRow.columnIndex = columnIndex;
                eventRow.columnName  = columnName;
                eventRow.value       = grid.isNull(value, false);
                eventRow.text        = grid.isNull(value, false);
                eventRow.data        = dataRows;

                // @ts-ignore
                let result = grid.onClickInfoCheckBox(grid, eventRow);
                if (result) {
                    grid.view_table.data[rowIndex][columnAlias.isChecked] = grid.isNull(value, false) ? false : true;
                }
            }
            else {
                grid.view_table.data[rowIndex][columnAlias.isChecked] = grid.isNull(value, false) ? false : true;
            }
            setTimeout(() => grid.classPanel30.setDataPanel(grid.getFirstRowIndex()), 20);
        }

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
            if      (e.target.classList.contains('tbs-grid-cell-div'))    { tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))        { tableCell = e.target; }
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

                    if (e.detail == 1) grid.tbs_executeEvent(true, 'onClick', param);
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.onEdit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else grid.tbs_executeEvent(true, 'onDblclick', param);
                    }
                }
            }
        };
        const selectCell = function(e) {
            let tableCell;
            if      (e.target.classList.contains('tbs-grid-cell-div'))      { tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string'))   { tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { tableCell = e.target; }
            else return;
            if (tableCell.dataset.cellType != 'number') return;

            // startCellIndex = tableCell.cellIndex;
            // lastCellIndex  = startCellIndex;
            startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex   = startRowIndex;

            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow: any = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

            let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();

            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
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
        const selectCellCtrl = function(e) {}
        const selectCellCtrlMove = function(e) {}
        const selectCellShift = function(e) {
            let tableCell;
            if      (e.target.classList.contains('tbs-grid-cell-div'))    { tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))        { tableCell = e.target; }
            else return;
            if (tableCell.dataset.cellType != 'number') return;

            grid.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : grid.startCellIndex;
            grid.lastCellIndex  = lastCellIndex  = tableCell.cellIndex;
            grid.startRowIndex  = startRowIndex  = (startRowIndex == -1) ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
            grid.lastRowIndex   = lastRowIndex   = tableCell.parentNode.dataset.rowIndex;

            //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow: any = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex  = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }

            let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
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
            let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();

            if (moveY > 0 && moveX > 0) { //down, right
                let maxRowIndex, maxCellIndex;
                maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                let maxRowIndex, minCellIndex;
                maxRowIndex  = grid.tbs_getMaxRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX > 0) { //up, right
                let minRowIndex, maxCellIndex;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX < 0) { //up, left
                let minRowIndex, minCellIndex;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
        }
        const setPanelMove = function(type) {
            // panel outside area
            let startRowIndex  = grid.startRowIndex;
            let lastRowIndex   = grid.lastRowIndex;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex  = grid.lastCellIndex;

            let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();

            let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;

            let table: any = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;

            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'down') {
                grid.classScroll.setBarPositionByDirection('down');
                if (lastRowIndex < (grid.view_table.count() - 1)) {
                    lastRowIndex += 1;

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');
                if (lastRowIndex != 0) {
                    let minRowIndex= lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();

                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else flagUp = false;
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
        eventPanel.addEventListener('click', mouseClickEvent);
    }
}


