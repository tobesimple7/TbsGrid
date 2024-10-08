import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridPanelBase } from './tbs.grid.panel.base.js';
import { TbsGridRenderPanel30 } from './tbs.grid.render.panel30.js';
import { TbsGridRenderPanelInfo } from './tbs.grid.render.panel.info.js';
import { TbsGridTable } from "../tbs.grid.table.js";

export class TbsGridPanel20 extends TbsGridPanelBase {

    constructor(grid) {
        super(grid);
        this.isChecked = false;
        this.panelName  = 'panel20';

        this.panelName1 = 'panel21';
        this.panelName2 = 'panel22';
        this.panelName0 = 'panel20';
    }

    createHtml(parentElement) {
        const grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group21">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel21"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel22"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group20">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel20"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }

    createTable()  {
        const grid = this.grid;

        const classTable = new TbsGridTable(grid);
        classTable.createTable('panel21', 0, grid.headerRowCount);
        classTable.createTable('panel22', 0, grid.headerRowCount);
        classTable.createTable('panel20', 0, grid.headerRowCount);

        this.setDataPanel();
    }

    setDataPanel(topRowIndex) {
        const grid = this.grid;

        this.setDataPanel1({panelName: 'panel21'});
        this.setDataPanel2({panelName: 'panel22'});
        this.setDataPanel0({panelName: 'panel20'});

        grid.horizontalScroll.setScroll(grid.code_horizontal); // Necessary
    }

    setDataPanel1(param) {
        let selector = this.selector;
        const grid = this.grid;

        let panelName = this.panelName1;

        /* create table thead */
        //grid.classRow.setTableHead(grid, panelName);

        /**
         * create table tbody
         */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRowIndex = 0;
        for (let i = 0; i < grid.headerRowCount; i++) {
            let tableRow = tableRows[tableRowIndex];

            // create table tr
            grid.classRow.setTableRow(grid, tableRow, i, panelName);

            for (let x = 0; x < grid.info_column_table.count(); x++) {
                let tableCell = tableRow.childNodes[x];

                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, tbsGridNames.column.type);


                /**
                 * Render: Start
                 */
                let tbsGridRenderInfo = new TbsGridRenderPanelInfo(grid);
                tbsGridRenderInfo.start(panelName, tableCell, grid.info_column_table.data[x], i, x);
                tbsGridRenderInfo = null;

                if (i == 0) tableCell.rowSpan = grid.headerRowCount;
                else tableCell.style.display = 'none';

                /**
                 * Render: Show Selected Cells
                 */
                grid.classCell.showSelectedCells(grid, panelName, tableCell, i, 0);
            }

            // on fixed columns
            grid.classCell.hideTableCells(grid, panelName, tableRow, grid.info_column_table.count() - 1);

            tableRowIndex += 1;
        }
        // hide Unnecessary tableRows
        let pageRowCount = grid.getPageRowCount(panelName);

        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);
    }

    setDataPanel2(param) {
        this.setDataPanelSub(this.panelName2, param);
    }

    setDataPanel0(param) {
        this.setDataPanelSub(this.panelName0, param);
    }

    setDataPanelSub(panelName, param) {
        let selector = this.selector;
        const grid = this.grid;

        /* table thead */
        grid.classRow.setTableHead(grid, panelName);

        /* table tbody */
        let tablesRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');

        let startColumnIndex = 0;
        let lastColumnIndex = grid.column_table.count();

        if (panelName == 'panel22') {
            lastColumnIndex = grid.fixedColumnIndex + 1;
        }
        else {
            if (grid.fixedColumnIndex != -1) {
                startColumnIndex = grid.fixedColumnIndex + 1;
                for (let i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
                    let tableRow = tablesRows[i];
                    tableRow.style.height = grid.headerRowHeight + 'px';
                    for (let x = 0; x <= grid.fixedColumnIndex; x++) {
                        let tableCell = tableRow.childNodes[x];
                        tableCell.style.display = 'none';
                    }
                }
            }
        }
        for (let i = 0, rowLen = grid.header_column_table.count(); i < rowLen; i++) {
            let tableRow = tablesRows[i];
            tableRow.style.height = grid.headerRowHeight + 'px';
            for (let x = startColumnIndex, colLen = lastColumnIndex; x < colLen; x++) {
                const column = grid.column_table.data[x];
                const header = grid.header_column_table.data[i][x];
                const tableCell = tableRow.childNodes[x];

                let selectedValue = grid.isSelectedHeaderCell(panelName, x);
                if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');

                let columnName = header[tbsGridNames.column.name];

                tableCell.style.display = (header[tbsGridNames.column.visible] == true) ? '' : 'none';
                tableCell.style.textAlign = header[tbsGridNames.column.align];

                tableCell.colSpan = header[tbsGridNames.column.colSpan];
                tableCell.rowSpan = header[tbsGridNames.column.rowSpan];

                tableCell.dataset.name = (header[tbsGridNames.column.kind] == 'column') ? columnName : '';
                tableCell.dataset.kind = header[tbsGridNames.column.kind];

                if (header[tbsGridNames.column.kind] == 'column') {
                    let className = grid.classHeader.getHeaderProperty(columnName, tbsGridNames.column.className);
                    if (grid.notNull(className)) tableCell.classList.add(className);
                    tableCell.style.display = (column[tbsGridNames.column.visible] == true) ? '' : 'none';
                    let columnType = column[tbsGridNames.column.type];
                    if (columnType == tbsGridTypes.CellType.checkbox) {
                        const checkbox = tableCell.querySelector('.tbs-grid-html-checkbox');
                        checkbox.style.display = '';
                    }
                }

                tableCell.querySelector('.tbs-grid-html-sort').textContent = '';
                if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName) && header[tbsGridNames.column.kind] == 'column') {
                    let sortColumn = grid.classSort.getSortRow(columnName);
                    let sortSymbol = '';
                    let orderNumber = grid.sort_column_table.selectRowIndex(tbsGridNames.column.name, columnName) + 1;
                    if (sortColumn['order'] == 'desc') sortSymbol = '▼' + orderNumber;
                    else if (sortColumn['order'] == 'asc') sortSymbol = '▲' + orderNumber;
                    tableCell.querySelector('.tbs-grid-html-sort').textContent = sortSymbol;
                }

                const textSpan = tableCell.querySelector('.tbs-grid-html-string');
                textSpan.textContent = header[tbsGridNames.column.text];
            }
        }
    }

    panel21_select() { //type : header, content, left, top
        let selector = this.selector;
        const grid = this.grid;
        let clsPanel = this;

        let table = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table');

        const cickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else return;

            const tableCell = e.target.parentNode.parentNode;
            const column = grid.info_column_table.selectRowByRowIndex(tableCell.cellIndex);
            const columnName = column[tbsGridNames.column.name];

            if (clsPanel.isChecked) clsPanel.isChecked = false;
            else clsPanel.isChecked = true;

            const callback = grid.getInfoRenderer(columnName, 'callback');

            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                const dataRow = grid.view_table.selectRowByRowIndex(i);
                if (callback) {
                    const eventRow = {}
                    eventRow.rowIndex    = i;
                    eventRow.columnIndex = tableCell.cellIndex;
                    eventRow.columnName  = columnName;
                    eventRow.value       = dataRow[tbsGridNames.column.isChecked];
                    eventRow.text        = dataRow[tbsGridNames.column.isChecked];
                    eventRow.data        = dataRow;
                    const result = callback(grid, eventRow);
                    if (result.editable == false) continue;
                    else grid.view_table.data[i][tbsGridNames.column.isChecked] = clsPanel.isChecked;
                }
                else {
                    grid.view_table.data[i][tbsGridNames.column.isChecked] = clsPanel.isChecked;
                }
            }
            setTimeout(function() {
                grid.classPanel20.setDataPanel();
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }, 20);
        }

        const mouseDownEvent = function (e) {
            document.addEventListener('mouseup', mouseUpEvent);
        };
        const mouseUpEvent = function (e) {
            let targetName;
            if (e.target.classList.contains('tbs-grid-cell')) { targetName = 'cell'; }
            else if (e.target.classList.contains('tbs-grid-cell-div')) { targetName = 'cell'; }
            else return;
            if (targetName == 'cell') {
                let col = e.target.closest('.tbs-grid-cell')
                if (col.cellIndex == 0) {
                    // let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
                    // let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
                    //
                    // grid.classRange.removeRange(0, -1);
                    // let _topRowIndex = grid.classRange.selectRange(0, -1, fromCellIndex, toCellIndex);
                    // grid.classPanel30.setDataPanel(_topRowIndex);
                    grid.classSort.initSortData()
                }
            }
            document.removeEventListener('mouseup', mouseUpEvent);
            grid.input_focus();
        };
        let eventPanel = document.querySelector(selector + ' .tbs-grid-panel21');
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', cickEvent);
    }

    panel20_select(panelName) { //type : header, content, left, top
        let selector = this.selector;
        const grid = this.grid;

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
        let eventPanel = document.querySelector(selector + ' .tbs-grid-' + panelName);

        const mouseDownEvent = function(e) {
            let col = e.target.closest('.tbs-grid-cell');
            if (e.target.classList.contains('tbs-grid-html-resize')) return;

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

            let isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
            let isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);

            if (isInPanel80) {
                // grouping panel
                if (grid.options.showGroupPanel == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                    let moveElement = document.querySelector('.tbs-grid-move');
                    let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                    let rectMoveCell= moveElement.getBoundingClientRect();

                    let columnIndex = moveElement.dataset.columnIndex;
                    let rowIndex = moveElement.dataset.rowIndex;

                    let column = grid.getColumnByIndex(columnIndex);
                    let name  = column[tbsGridNames.column.name];
                    let text  = column[tbsGridNames.column.text];
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

                    //if (name != 'group_column') grid.classGroup.addGroupButton(name, text, order, targetIndex);
                    grid.classGroup.addGroupButton(name, text, order, targetIndex);

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
                if (grid.options.showSortPanel == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                    let moveElement = document.querySelector('.tbs-grid-move');
                    let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                    let rectMoveCell= moveElement.getBoundingClientRect();

                    let columnIndex = moveElement.dataset.columnIndex;
                    let rowIndex = moveElement.dataset.rowIndex;

                    let column = grid.getColumnByIndex(columnIndex);
                    let name  = column[tbsGridNames.column.name];
                    let text  = column[tbsGridNames.column.text];
                    let order = 'asc';

                    // Find the one that is smaller to the button left than then move element left
                    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                    let targetButton;
                    let targetIndex;
                    let moveLeft = grid.getOffset(moveElement).left;

                    for (let i = buttons.length + 1; i >= 0; i--) {
                        let button = buttons[i];
                        let buttonLeft= grid.getOffset(button).left
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
                let tableCell;
                if (e.target.classList.contains('tbs-grid-html-checkbox')) {
                    tableCell = e.target.parentNode.parentNode;
                    const column = grid.column_table.selectRowByRowIndex(tableCell.cellIndex);
                    const columnName = column[tbsGridNames.column.name];

                    // let isChecked = column[tbsGridNames.column.isChecked] ? true : false;
                    // if (isChecked) grid.column_table.update(columnName, tbsGridNames.column.isChecked, false);
                    // else grid.column_table.update(columnName, tbsGridNames.column.isChecked, true);
                    let isChecked = false;
                    if (e.target.checked) isChecked = false;
                    else isChecked = true;

                    let newValue = isChecked ? grid.getTrueValue(columnName) : grid.getFalseValue(columnName);

                    // exclude : disabled checkbox
                    const callback = grid.getRenderer(columnName, 'callback');
                    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                        const dataRow = grid.view_table.selectRowByRowIndex(i);
                        if (callback) {
                            const eventRow = {}
                            eventRow.rowIndex    = i;
                            eventRow.columnIndex = tableCell.cellIndex;
                            eventRow.columnName  = columnName;
                            eventRow.value       = dataRow[tbsGridNames.column.name];
                            eventRow.text        = dataRow[tbsGridNames.column.name];
                            eventRow.data        = dataRow;
                            const result = callback(grid, eventRow);
                            if (result.editable == false) continue;
                            else grid.setValue(i, columnName, newValue);
                        }
                        else {
                            grid.setValue(i, columnName, newValue);
                        }
                    }
                    grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                }
                else if (mouseButton == 0
                    && startX > lastX - grid.mousePointRange
                    && startX < lastX + grid.mousePointRange
                    && startY > lastY - grid.mousePointRange
                    && startY < lastY + grid.mousePointRange) {
                    let element = e.target.closest('.tbs-grid-cell');
                    let name = element.dataset.name;
                    if (e.detail == 1) {
                        if (grid.isColumnName(name)) grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
                        if (grid.options.showSortPanel) grid.classSort.getSortButtonList();
                    }
                }
                else {
                    if (grid.fixedColumnIndex != -1) {
                        if (document.querySelectorAll('.tbs-grid-move').length == 0) return;

                        /* Find panel area */
                        let isInPanel21 = grid.isInPanel(e, 'panel21', lastX, lastY);
                        let isInPanel22 = grid.isInPanel(e, 'panel22', lastX, lastY);

                        /* Set panel */
                        let tdList20 = null;
                        if (isInPanel21 || isInPanel22) tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel22 tbody td:not([style*="display :none"]');
                        else tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');

                        let headerColumns = grid.header_column_table.data;
                        let movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
                        let targetColumn;

                        let fixedWidth = 50;

                        for (let x = 0, len = tdList20.length; x < len; x++) {
                            let cell = tdList20[x];
                            targetColumn = grid.header_column_table.data[cell.parentNode.rowIndex - 1][cell.cellIndex];

                            if (lastX - startX > 0) { // right direction move.
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                    && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex]
                                    && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                    break;
                                }
                            }
                            else {
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                    && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex]
                                    && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'before');
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

                            const movingColumn = grid.header_column_table.data[moveCellRowIndex - 1][moveCellIndex];
                            let tdList20 = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody td:not([style*="display :none"]');
                            let fixedWidth = 50;

                            let targetColumn;
                            for (let x = 0, len = tdList20.length; x < len; x++) {
                                let cell = tdList20[x];
                                targetColumn = grid.header_column_table.data[cell.parentNode.rowIndex - 1][cell.cellIndex];

                                if (lastX - startX > 0) { // right direction move.
                                    if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                            && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                        && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex]
                                        && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum]
                                        && moveCell.cellIndex != cell.cellIndex) {
                                        grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                        break;
                                    }
                                }
                                else {
                                    if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                            && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                        && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex]
                                        && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum]  //column_parentNum
                                        && moveCell.cellIndex != cell.cellIndex) {
                                        grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'before');
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
            if (e.target.classList.contains('tbs-grid-html-checkbox'))  return;
            let col = e.target.closest('.tbs-grid-cell');

            let column = grid.getColumnByIndex(col.cellIndex);
            let columnName = column[tbsGridNames.column.name];

            let isMovable = grid.isMovableColumn(columnName);
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
                    span.classList.add('tbs-grid-html-string');

                    div.appendChild(span);
                    td.appendChild(div);
                    tr.appendChild(td);
                    table.appendChild(tr);
                    moveDiv.appendChild(table);
                    document.body.appendChild(moveDiv);
                }
                moveDiv = document.querySelector('.tbs-grid-move');
                moveDiv.style.display = 'none';

                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-html-string').innerText;
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
                moveDiv.dataset.name = columnName;
            }
            grid.classRange.removeRange(0, -1);
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

            // let column = grid.getColumnByIndex(col.cellIndex);
            // let columnName = column[tbsGridNames.column.name];
            let isMovable = grid.isMovableColumn();
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

            //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
            //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
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
                    if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;

                    let left = window.pageXOffset + cell.getBoundingClientRect().left;
                    if (lastX > left) maxCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
            if (moveX < 0) {
                let minCellIndex;
                for (let x = tdList.length - 1; x >= 0; x--) {
                    let cell =  tdList[x];
                    if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;
                    let right = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right) minCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
        }

        const selectRefresh = function(type, lastX, lastY) {
            let content = document.querySelector(selector + ' .tbs-grid-panel30');
            let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            const trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');

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
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                }
            }
            /* left */
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                }
            }
            /* down */
            else if (type == 'down') {}
            /* up */
            else if (type == 'up') {}
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

        eventPanel.addEventListener('mousedown', mouseDownEvent);
    }

}





