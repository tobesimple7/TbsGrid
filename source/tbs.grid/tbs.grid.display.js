
TbsGrid.prototype.tbs_applyData = function () {
    this.tbs_displayPanel30(this.tbs_getFirstRowIndex());
}
TbsGrid.prototype.tbs_displayPanel10 = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    // toolbar reload

}
TbsGrid.prototype.tbs_displayPanel20 = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    //this.tbs_setDataTable({panelName: 'panel21'});
    //this.tbs_setDataTable({panelName: 'panel22'});
    this.tbs_setDataTable({panelName: 'panel20'});

    //this.tbs_displayHeaderDataFixCol();
}
TbsGrid.prototype.tbs_displayPanel30 = function (topRowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.tbs_removePanelRange('panel30');

    grid.tbs_setPageData();

    grid.tbs_setDataTable({ panelName: 'panel31', topRowIndex : topRowIndex });
    grid.tbs_setDataTable({ panelName: 'panel30', topRowIndex : topRowIndex });
    grid.tbs_setDataTable({ panelName: 'panel32', topRowIndex : topRowIndex });

    grid.tbs_displayPanel60(0);
    grid.tbs_displaySelectedLine();
}
TbsGrid.prototype.tbs_displayPanel40 = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_removePanelRange('panel40');
    this.tbs_setDataTable({panelName: 'panel41', summaryColumns: grid.topColumns });
    this.tbs_setDataTable({panelName: 'panel40', summaryColumns: grid.topColumns });
    this.tbs_setDataTable({panelName: 'panel42', summaryColumns: grid.topColumns });
}
TbsGrid.prototype.tbs_displayPanel50 = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_removePanelRange('panel50');
    this.tbs_setDataTable({panelName: 'panel51', summaryColumns: grid.footerColumns });
    this.tbs_setDataTable({panelName: 'panel50', summaryColumns: grid.footerColumns });
    this.tbs_setDataTable({panelName: 'panel52', summaryColumns: grid.footerColumns });
}
TbsGrid.prototype.tbs_displayPanel60 = function (topRowIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    this.tbs_removePanelRange('panel60');

    this.tbs_setDataTable({ panelName: 'panel61', topRowIndex : topRowIndex });
    this.tbs_setDataTable({ panelName: 'panel60', topRowIndex : topRowIndex });
    this.tbs_setDataTable({ panelName: 'panel62', topRowIndex : topRowIndex });
}
TbsGrid.prototype.tbs_displayPanel70 = function (panel) {
    let selector = '#' + this.gridId;
    let grid = this;
    this.tbs_setDataTable({panelName: 'panel70'});
}
TbsGrid.prototype.tbs_getFirstSelectedTableCell = function (panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let startCell;
    let startRowIndex = grid._startRowIndex;
    if (grid.fixedRowIndex != -1) {
        let panel;
        if (startRowIndex <= grid.fixedRowIndex) panel = 'panel61';
        else {
            panel = 'panel31';
            let rowIndex1 = grid.tbs_getFirstRowIndex();
            let rowIndex2 = grid.tbs_getLastRowIndex();
            if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;
        }
        let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

        Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
            let tableRow31 = tableRows31[i];
            let tableRow = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == startRowIndex) {
                for (let x = 0; x < this.columns.length; x++) {
                    let tableCell = tableRow.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        startCell = tableCell;
                        break Loop1;
                    }
                }
            }
        }
    }
    else {
        let rowIndex1 = grid.tbs_getFirstRowIndex();
        let rowIndex2 = grid.tbs_getLastRowIndex();

        if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;

        let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

        Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
            let tableRow31 = tableRows31[i];
            let tableRow = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == startRowIndex) {
                for (let x = 0; x < this.columns.length; x++) {
                    let tableCell = tableRow.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        startCell = tableCell;
                        break Loop1;
                    }
                }
            }
        }
    }
    return startCell;
}
TbsGrid.prototype.tbs_getLastSelectedTableCell = function (panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    let lastCell;
    let lastRowIndex = this._lastRowIndex;

    if (grid.fixedRowIndex != -1) {
        let panel;
        if (lastRowIndex <= grid.fixedRowIndex) panel = 'panel61';
        else {
            panel = 'panel31';
            let rowIndex1 = grid.tbs_getFirstRowIndex();
            let rowIndex2 = grid.tbs_getLastRowIndex();
            if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;
        }

        let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

        for (let i = tableRows31.length - 1; i >= 0; i--) {
            if (lastCell != undefined) break;
            let tableRow31 = tableRows31[i];
            let tableRow30 = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == lastRowIndex) {
                for (let x = this.columns.length - 1; x >= 0; x--) {
                    let tableCell = tableRow30.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        lastCell = tableCell;
                        break;
                    }
                }
            }
        }
        return lastCell;
    }
    else {
        let rowIndex1 = grid.tbs_getFirstRowIndex();
        let rowIndex2 = grid.tbs_getLastRowIndex();

        if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;

        let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

        for (let i = tableRows31.length - 1; i >= 0; i--) {
            if (lastCell != undefined) break;
            let tableRow31 = tableRows31[i];
            let tableRow30 = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == lastRowIndex) {
                for (let x = this.columns.length - 1; x >= 0; x--) {
                    let tableCell = tableRow30.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        lastCell = tableCell;
                        break;
                    }
                }
            }
        }
        return lastCell;
    }
}
TbsGrid.prototype.tbs_clearSelectedLine = function () {
    this.topLineDiv.style    = 'width :0px;top:0px;left:0px;';
    this.leftLineDiv.style   = 'height:0px;top:0px;left:0px;';
    this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
    this.rightLineDiv.style  = 'height:0px;top:0px;left:0px;';
}
TbsGrid.prototype.tbs_setSelectedLine = function (lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {
    this.topLineDiv.style    = 'width:'  + lineWidth        + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
    this.leftLineDiv.style   = 'height:' + lineHeight       + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
    this.rightLineDiv.style  = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop     + 'px;left:' + rectRight + 'px;';
    this.bottomLineDiv.style = 'width:'  + lineWidth        + 'px;top:' + rectBottom  + 'px;left:' + rectLeft  + 'px;';
}
TbsGrid.prototype.tbs_displaySelectedLine = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.fixedRowIndex != -1) {
        let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        if (grid.tbs_getRowCount() == 0) return;

        let fixedColumnIndex = this.fixedColumnIndex;

        /* Get startCell, lastCell */
        let startCell, lastCell;
        if (grid._startRowIndex <= grid.fixedRowIndex) startCell = grid.tbs_getFirstSelectedTableCell('panel60');
        else startCell = grid.tbs_getFirstSelectedTableCell('panel30');

        if (grid._lastRowIndex <= grid.fixedRowIndex) lastCell = grid.tbs_getLastSelectedTableCell('panel60');
        else lastCell = grid.tbs_getLastSelectedTableCell('panel30');

        if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }
        //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);

        let startCellIndex = grid._startCellIndex;
        let lastCellIndex  = grid._lastCellIndex;

        let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
        let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
        let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
        let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

        let startRect= startCell.getBoundingClientRect();
        let lastRect = lastCell.getBoundingClientRect();

        let beforeLeft   = rectTable31.left;

        let rectTop    = startRect.top - rectMain.top;
        let rectBottom = lastRect.top  - rectMain.top + lastRect.height;  // Check point

        let rectLeft   = startRect.left - beforeLeft;
        let rectRight  = lastRect.left  - beforeLeft + lastRect.width;

        let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
        let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
        let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

        // case outside line
        if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
        if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
        if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

        let lineHeight= rectBottom - rectTop;
        let lineWidth = rectRight - rectLeft;
        grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    }
    else if (grid.fixedColumnIndex != -1) {
        let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        if (grid.tbs_getRowCount() == 0) return;

        let fixedColumnIndex = this.fixedColumnIndex;

        /* Get startCell, lastCell */
        let startCell, lastCell;
        console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
        if (grid._startCellIndex <= grid.fixedColumnIndex) startCell = grid.tbs_getFirstSelectedTableCell('panel32');
        else startCell = grid.tbs_getFirstSelectedTableCell('panel30');

        if (grid._lastCellIndex <= grid.fixedColumnIndex) lastCell = grid.tbs_getLastSelectedTableCell('panel32');
        else lastCell = grid.tbs_getLastSelectedTableCell('panel30');
        if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }

        //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);
        let startCellIndex = startCell.cellIndex;
        let lastCellIndex  = lastCell.cellIndex;

        let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
        let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
        let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
        let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

        let startRect= startCell.getBoundingClientRect();
        let lastRect = lastCell.getBoundingClientRect();

        let beforeLeft = rectTable31.left;

        let rectTop   = startRect.top  - rectMain.top;
        let rectBottom= lastRect.top  - rectMain.top + lastRect.height;

        let rectLeft  = startRect.left - beforeLeft;
        let rectRight = lastRect.left  - beforeLeft + lastRect.width;

        let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
        let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
        let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

        // case outside line
        if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
        if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
        if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

        let lineHeight= rectBottom - rectTop;
        let lineWidth = rectRight - rectLeft;
        grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    }
    else {
        let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        if (grid.tbs_getRowCount() == 0) return;

        let startCell = grid.tbs_getFirstSelectedTableCell('panel30');
        let lastCell = grid.tbs_getLastSelectedTableCell('panel30');

        if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }

        let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
        let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
        let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

        let startRect = startCell.getBoundingClientRect();
        let lastRect = lastCell.getBoundingClientRect();

        let rectTop   = startRect.top  - rectMain.top;
        let rectLeft  = startRect.left - rectTable31.left;
        let rectBottom= lastRect.top  - rectMain.top     + lastRect.height;
        let rectRight = lastRect.left - rectTable31.left + lastRect.width;

        let rectPanelLeft  = rectPanel30.left  - rectTable31.left;
        let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
        let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

        // case outside line
        if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
        if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
        if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

        let lineHeight= rectBottom - rectTop;
        let lineWidth = rectRight - rectLeft;

        grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    }
}
TbsGrid.prototype.tbs_displayOneSelection = function (startRowIndex, startRowIndex, startCellIndex, startCellIndex) {
    let selector = '#' + this.gridId;
    let grid = this;

    let column = this.columns;

    this.startRowIndex  = startRowIndex;
    this.lastRowIndex   = startRowIndex;

    this.startCellIndex = startCellIndex;
    this.lastCellIndex  = startCellIndex;

    this._startRowIndex = startRowIndex;
    this._lastRowIndex  = startRowIndex;

    this._startCellIndex= startCellIndex;
    this._lastCellIndex = startCellIndex;

    this.tbs_setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);


    let count = this.data_view.length;
    let topRowIndex = this.tbs_getFirstRowIndex();
    //============================================================= table display
    let trLeftList    	= document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
    let trFixLeftList   = document.querySelectorAll(selector + ' .tbs-grid-panel61   .tbs-grid-table tbody tr');
    let trContentList 	= document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
    let trFixBottomtList= document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');
    let trFixRightList 	= document.querySelectorAll(selector + ' .tbs-grid-panel60  .tbs-grid-table tbody tr');

    count = topRowIndex + this.pageRowCount;
    //=============================================================
    let contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
    let contentTableRect = document.querySelector(selector + ' .tbs-grid-panel30 > table').getBoundingClientRect();
    let contentTableLeft = parseInt(document.querySelector(selector + ' .tbs-grid-panel30 > table').style.left, 10);

    let startColumnIndex = 0;
    let lastColumnIndex = column.length - 1;

    let accWidth = 0;
    for (let i = 0, len = column.length; i < len; i++) {
        accWidth += parseInt(column[i].width);
        if (accWidth + contentTableLeft > 0) { startColumnIndex = i; break; }
    }
    accWidth = contentTableRect.width;
    for (let i = column.length - 1; i >= 0; i--) {
        accWidth -= parseInt(column[i].width);
        if (accWidth + contentTableLeft < contentRect.width) { lastColumnIndex = i; break; }
    }
    //============================================================= left, content, fixBottom
    let viewCount = this.data_view.length;
    let i = 0;
    for (let ri = topRowIndex; ri < count; ri++) {
        if (ri > viewCount - 1) break;
        let trLeft = trLeftList[i];
        let trContent = trContentList[i];
        let trFixBottom = trFixBottomtList[i]
        let row = this.data_view[ri];
        //============================================================= left
        leftTd = trLeft.childNodes[0];
        let selectedValue = this.tbs_isSelectedCell31(ri, 0);
        if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
        //============================================================= content
        for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
            let td = trContent.childNodes[x];
            let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
            if (selectedValue == 1) {
                if (this.startRowIndex == ri && this.startCellIndex == x) {
                    td.classList.add('tbs-grid-cell-start');
                }
            }
        }
        //============================================================= fixBottom
        if (this.fixedColumnIndex != -1) {
            for (let x = 0; x <= this.fixedColumnIndex; x++) {
                let td = trFixBottom.childNodes[x];
                let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
                if (selectedValue == 1) {
                    if (this.startRowIndex == ri && this.startCellIndex == x) {
                        td.classList.add('tbs-grid-cell-start');
                    }
                }
            }
        }
        i += 1;
    }
    //=============================================================
    if (this.fixedRowIndex != -1){
        let i = 0;
        for (let ri = 0; ri <= this.fixedRowIndex; ri++) {
            if (ri > viewCount - 1) break;
            let trLeft      = trFixLeftList[i];
            let trContent   = trFixRightList[i];
            let row         = this.data_view[ri];
            //============================================================= left
            leftTd = trLeft.childNodes[0];
            leftTd.dataset.rowIndex = ri;
            let selectedValue = this.tbs_isSelectedCell31(ri, 0);
            if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
            //============================================================= content
            for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
                let td = trContent.childNodes[x];
                let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
                if (selectedValue == 1) {
                    if (this.startRowIndex == ri && this.startCellIndex == x) {
                        td.classList.add('tbs-grid-cell-start');
                    }
                }
            }
        }
        i += 1;
    }
    this.tbs_displaySelectedLine();
}

/**
 *
 * setDataTable Functions : for Panel30, panel60
 *
 */
/**
 * @function tbs_setDataTable
 *
 * @description be branched off by grid_mode
 * @param {panel: panel, topRowIndex: topRowIndex}
 */
//================================================================

TbsGrid.prototype.tbs_setDataTable1 = function (param) {
    //console.log('tbs_setDataTable1');
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (panelName == 'panel61') { if (grid.fixedRowIndex == -1) return; }

    if (grid.fixedRowIndex != -1) {
        let topRowIndex = this.tbs_validateTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = this.tbs_validateBottomRowIndex(panelName, topRowIndex);

        let pageRowCount = this.tbs_getPageRowCount(panelName);
        let rowHeight = this.rowHeight;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        //console.log(`tbs_setDataTable1 ${panelName} pageRowCount ${pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
        //startColumnIndex, lastColumIndex
        let result = this.tbs_getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            if (i > this.tbs_getRowCount() - 1) break;

            let tableRow = tableRows[tableRowIndex];
            tableRow.dataset.rowIndex = i;

            let row = this.tbs_getRow(i);
            if (tableRow.style.display == 'none') tableRow.style.display = '';
            if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';

            // row alternative background color
            this.tbs_setAlternativeRowColor(panelName, tableRow, i);

            let tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i - (grid.fixedRowIndex + 1);

            let selectedValue = this.tbs_isSelectedCell(panelName, i, 0);
            if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');

            if (tableCell.childNodes[0].textContent != (i + 1).toString()) tableCell.childNodes[0].textContent = (i + 1).toString();
            if (this.options[grid.option_rowMode] ) tableRow.childNodes[1].childNodes[0].textContent = (row[grid.code_mode] != '' && row[grid.code_mode] != 'S') ? row[grid.code_mode] : '';
            if (this.options[grid.option_checkbox]) tableRow.childNodes[2].childNodes[0].childNodes[0].checked = (row['check'] == undefined) ? false : row['check'];

            tableRowIndex += 1;
        }
        // hidden : Unnecessary tableRows
        this.tbs_hiddenTableRows(panelName, tableRows, tableRowIndex, this.pageRowCount);
    }
    else {
        let topRowIndex = this.tbs_validateTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = this.tbs_validateBottomRowIndex(panelName, topRowIndex);

        let pageRowCount = this.tbs_getPageRowCount(panelName);
        let rowHeight = this.rowHeight;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');

        //startColumnIndex, lastColumIndex
        let result = this.tbs_getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            if (i > this.tbs_getRowCount() - 1) break;

            let tableRow = tableRows[tableRowIndex];
            tableRow.dataset.rowIndex = i;

            let row = this.tbs_getRow(i);

            if (tableRow.style.display == 'none') tableRow.style.display = '';
            if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';

            // row alternative background color
            this.tbs_setAlternativeRowColor(panelName, tableRow, i);

            let tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;

            tableRow.childNodes[0].dataset.cellType = 'number';

            let selectedValue = this.tbs_isSelectedCell(panelName, i, 0);
            if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');
            if (grid.grid_mode == grid.module_paging) {
                tableCell.childNodes[0].textContent = grid.classPage.startRowIndex + i + 1;
            }
            else {
                if (tableCell.childNodes[0].textContent != (i + 1).toString()) tableCell.childNodes[0].textContent = (i + 1).toString();
            }

            if (this.options[grid.option_rowMode] ) {
                tableRow.childNodes[1].childNodes[0].textContent = (row[grid.code_mode] != '' && row[grid.code_mode] != 'S') ? row[grid.code_mode] : '';
                tableRow.childNodes[1].dataset.cellType = 'mode';
            }
            if (this.options[grid.option_checkbox]) {
                tableRow.childNodes[2].childNodes[0].childNodes[0].checked = (row['check'] == undefined) ? false : row['check'];
                tableRow.childNodes[2].dataset.cellType = 'checkbox';
            }

            tableRowIndex += 1;
        }
        // hidden : Unnecessary tableRows
        this.tbs_hiddenTableRows(panelName, tableRows, tableRowIndex, this.pageRowCount);
    }

}
TbsGrid.prototype.tbs_setDataTable2 = function (param) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (this.fixedColumnIndex == -1) return;

    let panelName = param.panelName;
    let topRowIndex = this.tbs_validateTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = this.tbs_validateBottomRowIndex(panelName, topRowIndex);

    let pageRowCount = this.tbs_getPageRowCount(panelName);
    let rowHeight = this.rowHeight;

    let columns= this.columns;
    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');

    //startColumnIndex, lastColumIndex
    let result = this.tbs_getDisplayedHeaderColumn(panelName);
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.tbs_setTableHead(panelName);

    // hidden for Unnecessary datas
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        if (i > this.tbs_getRowCount() - 1) break;

        let tableRow = tableRows[tableRowIndex];
        tableRow.dataset.rowIndex = i;

        // row alternative background color
        this.tbs_setAlternativeRowColor(panelName, tableRow, i);

        if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height  = rowHeight + 'px';

        let selectedValue = this.tbs_isSelectedCell(panelName, i, 0);
        if (tableRow.style.display == 'none') tableRow.style.display = '';
        tableRow.dataset.rowIndex = i;

        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x]; //content tr > td

            if (x > this.fixedColumnIndex && x < startColumnIndex) continue;
            if (x <= this.fixedColumnIndex) tableCell = tableRow.childNodes[x];

            let column = this.columns[x];

            let layout = this.data_view[i].layout[column[grid.column_name]];
            let colValue = this.tbs_getLayoutValue(i, column[grid.column_name], this.layout_text);

            if (tableCell.style.textAlign       != column[grid.column_align])          tableCell.style.textAlign = column[grid.column_align];
            if (tableCell.style.width           != column[grid.column_width] + 'px')   tableCell.style.width = column[grid.column_width] + 'px';
            if (tableCell.style.backgroundImage != '')                                 tableCell.style.backgroundImage = '';
            if (tableCell.style.display         != '')                                 tableCell.style.display = '';
            if (tableCell.rowSpan != '1') tableCell.rowSpan = '1';
            tableCell.style.display = column[grid.column_visible] == true ? '' : 'none';
            tableCell.rowSpan       = layout[grid.layout_rowSpan];

            let selectedValue = this.tbs_isSelectedCell(panelName, i, x);
            if (selectedValue == 1) {
                if (this.startRowIndex == i && this.startCellIndex == x)
                    tableCell.classList.add('tbs-grid-cell-start');
                else
                    tableCell.classList.add('tbs-grid-cell-select');
            }
            if (tableCell.childNodes[0].textContent != colValue) tableCell.childNodes[0].textContent = colValue;
        }
        tableRowIndex += 1;
    }
    // hidden : Unnecessary tableRows
    this.tbs_hiddenTableRows(panelName, tableRows, tableRowIndex, this.pageRowCount);
}
TbsGrid.prototype.tbs_setDataTable3 = function (param) {
    //console.log('tbs_setDataTable3');
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; }

    let topRowIndex = this.tbs_validateTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = this.tbs_validateBottomRowIndex(panelName, topRowIndex);

    let pageRowCount = this.tbs_getPageRowCount(panelName);
    let rowHeight = this.rowHeight;
    //console.log(`tbs_setDataTable3 ${panelName} pageRowCount ${pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);

    let columns= this.columns;

    /* table thead */
    grid.tbs_setTableHead(panelName);

    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    //startColumnIndex, lastColumIndex
    let result = this.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.tbs_setTableHead(panelName);

    /* table tbody */
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        //if (i > this.tbs_getRowCount() - 1) break;
        let tableRow = tableRows[tableRowIndex];
        tableRow.dataset.rowIndex = i;
        if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';
        // row alternative background color
        this.tbs_setAlternativeRowColor(panelName, tableRow, i);
        if (tableRow.style.display == 'none') tableRow.style.display = '';

        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x]; //content tr > tableCell
            if (this.fixedColumnIndex != -1) {
                if (x > this.fixedColumnIndex && x < startColumnIndex) continue;
            }
            else { if (x < startColumnIndex) continue; }

            let column = grid.columns[x];
            let columnName = column[grid.column_name];
            let layout = grid.tbs_getLayout(i, column[grid.column_name]);
            let colValue = layout[grid.layout_text];

            let className = grid.tbs_getColumnProperty(columnName, grid.column_className);
            if (grid.notNull(className)) tableCell.classList.add(className);

            grid.tbs_setCellStyle(tableCell, 'textAlign'      , column[grid.column_align]);
            grid.tbs_setCellStyle(tableCell, 'width'          , column[grid.column_width] + 'px');
            grid.tbs_setCellStyle(tableCell, 'backgroundImage', '');
            grid.tbs_setCellStyle(tableCell, 'display'        , column[grid.column_visible] == true ? '' : 'none');
            grid.tbs_setCell(tableCell, 'rowSpan', '1');
            grid.tbs_setCell(tableCell, 'rowSpan', layout[grid.layout_rowSpan]);
            grid.tbs_setSelectedCell(panelName, tableCell, i, x);
            let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
            grid.tbs_setCell(spanText, 'textContent', colValue);
        }
        for (let x = 0; x <= lastColumnIndex; x++) {
            let tableCell= tableRow.childNodes[x];
            if (this.fixedColumnIndex != -1 && x <= this.fixedColumnIndex)
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
        }
        tableRowIndex += 1;
    }
    // hide Unnecessary tableRows
    this.tbs_hiddenTableRows(panelName, tableRows, tableRowIndex, this.pageRowCount);

    // panel21 : display rowCount
    if (param.panelName == 'panel30') {
        let rowCount = this.tbs_getRowCount();
        if (grid.grid_mode == grid.module_paging) rowCount = grid.data_page.length;
        document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
    }
}
TbsGrid.prototype.tbs_setDataHeaderTable1 = function(param) {}
TbsGrid.prototype.tbs_setDataHeaderTable2 = function(param) {}
TbsGrid.prototype.tbs_setDataHeaderTable3 = function(param) {
    //param : { panelName }
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    /* table thead */
    grid.tbs_setTableHead(panelName);

    let tablesRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    if (grid.fixedColumnIndex != -1){
        for (let i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
            let tableRow = tablesRows[i];
            tableRow.style.height = grid.headerRowHeight + 'px';
            for (let x = 0, colLen = grid.columns.length; x < colLen; x++) {
                let header = grid.headerColumnTable[i][x];
                let cell = tableRow.childNodes[x];
                cell.style.textAlign = header[grid.column_align];
                cell.dataset.name = (header[grid.column_kind] == 'column') ? header[grid.column_name] : '';
                cell.childNodes[0].childNodes[0].textContent = header[grid.column_text];
                if (x <= grid.fixedColumnIndex){
                    cell.colSpan = header[grid.column_colSpan];
                    cell.rowSpan = header[grid.column_rowSpan];
                    cell.style.display = 'none';
                }
                else if (x == grid.fixedColumnIndex + 1) {
                    cell.colSpan = header[grid.column_subColSpan];
                    cell.rowSpan = header[grid.column_subRowSpan];
                    cell.style.display = '';
                }
                else {
                    cell.colSpan = header[grid.column_colSpan];
                    cell.rowSpan = header[grid.column_rowSpan];
                    cell.style.display = (header[grid.column_visible] == true) ? '' : 'none';
                }
            }
        }
    }
    else {
        for (let i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
            let tableRow = tablesRows[i];
            tableRow.style.height = grid.headerRowHeight + 'px';
            for (let x = 0, colLen = grid.columns.length; x < colLen; x++) {
                let column = grid.columns[x];
                let header = grid.headerColumnTable[i][x];
                let tableCell = tableRow.childNodes[x];

                let selectedValue = grid.tbs_isSelectedHeaderCell(panelName, x);
                if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');
                let columnName = header[grid.column_name];

                tableCell.style.textAlign = header[grid.column_align];
                tableCell.dataset.name = (header[grid.column_kind] == 'column') ? columnName : '';
                tableCell.colSpan = header[grid.column_colSpan];
                tableCell.rowSpan = header[grid.column_rowSpan];
                tableCell.style.display = (header[grid.column_visible] == true) ? '' : 'none';

                if (header[grid.column_kind] == 'column') {
                    let className = grid.tbs_getHeaderProperty(columnName, grid.column_className);
                    if (grid.notNull(className)) tableCell.classList.add(className);
                    tableCell.style.display = (column[grid.column_visible] == true) ? '' : 'none';
                }
                tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = '';
                if (grid.tbs_isSortColumnName(columnName) && header[grid.column_kind] == 'column') {
                    let sortColumn = grid.tbs_getSortColumn(columnName);
                    let sortSymbol = '';
                    if (sortColumn['order'] == 'desc') sortSymbol = '▼';
                    else if (sortColumn['order'] == 'asc') sortSymbol = '▲';
                    tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = sortSymbol;
                }
                tableCell.childNodes[0].childNodes[0].textContent = header[grid.column_text];
            }
        }
    }
}
//================================================================
TbsGrid.prototype.tbs_setDataTopTable1 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = 'panel41';
    if (grid.topColumns.length == 0) return;

    let topRowIndex = 0;
    let bottomRowIndex = 0;

    let pageRowCount = 1;
    let rowHeight = this.rowHeight;

    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    if (tableRows.length == 0) return;

    //startColumnIndex, lastColumIndex
    let result = this.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableRowIndex = 0;

    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        let tableRow = tableRows[tableRowIndex];
        tableRow.dataset.rowIndex = i;

        if (tableRow.style.display == 'none') tableRow.style.display = '';
        if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';

        // row alternative background color
        //this.tbs_setAlternativeRowColor(panelName, tableRow, i);

        let tableCell = tableRow.childNodes[0];
        tableCell.dataset.rowIndex = i;
        tableCell.dataset.displayRowIndex = i;

        tableRow.childNodes[0].dataset.cellType = 'number';
        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);
    }
}
TbsGrid.prototype.tbs_setDataTopTable2 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.topColumns.length == 0) return;

    let panelName = 'panel42';
    let topColumns = grid.topColumns;
    let topRow = grid.data_top[0];

    //startColumnIndex, lastColumIndex
    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableCells  = document.querySelectorAll(selector + ` .tbs-grid-panel42 .tbs-grid-cell`);
    let colList= document.querySelectorAll(selector + ` .tbs-grid-panel42 thead th`);
    if (tableCells.length == 0) return;

    for (let i = 0; i <= lastColumnIndex; i++) {
        let column = grid.columns[i];
        let columnName = column[grid.column_name];
        let tableCell = tableCells[i];

        colList[i].style.width = column[grid.column_width] + 'px';
        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);

        for (let x = 0, len2 = topColumns.length; x < len2; x++){
            let topColumn = topColumns[x];
            if (columnName == topColumn[grid.column_name]) {
                grid.tbs_addUserClass(tableCell, topColumn[grid.column_className]);
                grid.tbs_setCellStyle(tableCell, 'textAlign', topColumn[grid.column_align]);
                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                grid.tbs_setCell(spanText, 'textContent', grid.tbs_getTopText(0, columnName));
            }
        }
    }
}
TbsGrid.prototype.tbs_setDataTopTable3 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.topColumns.length == 0) return;

    let panelName = 'panel40';
    let topColumns = grid.topColumns;
    let topRow = grid.data_top[0];

    //startColumnIndex, lastColumIndex
    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableCells  = document.querySelectorAll(selector + ` .tbs-grid-panel40 .tbs-grid-cell`);

    /* table thead */
    grid.tbs_setTableHead(panelName);

    for (let i = 0, len = grid.columns.length; i < len; i++) {
        let column = grid.columns[i];
        let columnName = column[grid.column_name];
        let tableCell = tableCells[i];
        if (grid.fixedColumnIndex != -1) {
            if (i > grid.fixedColumnIndex && i < startColumnIndex) continue;
        }
        else { if (i < startColumnIndex) continue; }

        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);

        let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
        grid.tbs_setCell(spanText, 'textContent', '');
        grid.tbs_setCellStyle(tableCell, 'display', column[grid.column_visible] == true ? '' : 'none');
        for (let x = 0, len2 = topColumns.length; x < len2; x++){
            let topColumn = topColumns[x];
            if (columnName == topColumn[grid.column_name]) {
                grid.tbs_addUserClass(tableCell, topColumn[grid.column_className]);
                grid.tbs_setCellStyle(tableCell, 'textAlign', topColumn[grid.column_align]);

                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                grid.tbs_setCell(spanText, 'textContent', grid.tbs_getTopText(0, columnName));
                console.log(`${x} ${grid.tbs_getTopText(0, columnName)}`);
            }
        }
    }
}
TbsGrid.prototype.tbs_setDataFooterTable1 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = 'panel51';
    if (grid.topColumns.length == 0) return;

    let topRowIndex = 0;
    let bottomRowIndex = 0;

    let pageRowCount = 1;
    let rowHeight = this.rowHeight;

    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    if (tableRows.length == 0) return;

    //startColumnIndex, lastColumIndex
    let result = this.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableRowIndex = 0;

    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
        let tableRow = tableRows[tableRowIndex];
        tableRow.dataset.rowIndex = i;

        if (tableRow.style.display == 'none') tableRow.style.display = '';
        if (tableRow.style.height != this.rowHeight + 'px') tableRow.style.height = rowHeight + 'px';

        // row alternative background color
        //this.tbs_setAlternativeRowColor(panelName, tableRow, i);

        let tableCell = tableRow.childNodes[0];
        tableCell.dataset.rowIndex = i;
        tableCell.dataset.displayRowIndex = i;

        tableRow.childNodes[0].dataset.cellType = 'number';
        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);
    }
}
TbsGrid.prototype.tbs_setDataFooterTable2 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.topColumns.length == 0) return;

    let panelName = 'panel52';
    let topColumns = grid.footerColumns;
    let topRow = grid.data_footer[0];

    //startColumnIndex, lastColumIndex
    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableCells  = document.querySelectorAll(selector + ` .tbs-grid-panel52 .tbs-grid-cell`);
    let colList= document.querySelectorAll(selector + ` .tbs-grid-panel52 thead th`);
    if (tableCells.length == 0) return;

    for (let i = 0; i <= lastColumnIndex; i++) {
        let column = grid.columns[i];
        let columnName = column[grid.column_name];
        let tableCell = tableCells[i];

        colList[i].style.width = column[grid.column_width] + 'px';
        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);

        for (let x = 0, len2 = topColumns.length; x < len2; x++){
            let topColumn = topColumns[x];
            if (columnName == topColumn[grid.column_name]) {
                grid.tbs_addUserClass(tableCell, topColumn[grid.column_className]);
                grid.tbs_setCellStyle(tableCell, 'textAlign', topColumn[grid.column_align]);
                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                grid.tbs_setCell(spanText, 'textContent', grid.tbs_getTopText(0, columnName));
            }
        }
    }
}
TbsGrid.prototype.tbs_setDataFooterTable3 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.footerColumns.length == 0) return;

    let panelName = 'panel50';
    let footerColumns = grid.footerColumns;
    let footerRow = grid.data_footer[0];

    /* table thead */
    grid.tbs_setTableHead(panelName);

    //startColumnIndex, lastColumIndex
    let result = grid.tbs_getDisplayedHeaderColumn();
    let startColumnIndex= result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    let tableCells  = document.querySelectorAll(selector + ` .tbs-grid-panel50 .tbs-grid-cell`);

    /* table thead */
    grid.tbs_setTableHead(panelName);

    for (let i = 0, len = grid.columns.length; i < len; i++) {
        let column = grid.columns[i];
        let columnName = column[grid.column_name];
        let tableCell = tableCells[i];
        if (grid.fixedColumnIndex != -1) {
            if (i > grid.fixedColumnIndex && i < startColumnIndex) continue;
        }
        else { if (i < startColumnIndex) continue; }

        grid.tbs_setSelectedCell(panelName, tableCell, 0, i);

        let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
        grid.tbs_setCell(spanText, 'textContent', '');
        grid.tbs_setCellStyle(tableCell, 'display', column[grid.column_visible] == true ? '' : 'none');

        for (let x = 0, len2 = footerColumns.length; x < len2; x++){
            let footerColumn = footerColumns[x];
            if (columnName == footerColumn[grid.column_name]) {
                grid.tbs_addUserClass(tableCell, footerColumn[grid.column_className]);
                grid.tbs_setCellStyle(tableCell, 'textAlign', footerColumn[grid.column_align]);

                let spanText = tableCell.querySelector('.tbs-grid-cell-div-text');
                grid.tbs_setCell(spanText, 'textContent', grid.tbs_getFooterText(0, columnName));
            }
        }
    }
}
//================================================================
TbsGrid.prototype.tbs_setDataFilterTable = function (param) {
    // param : { panelName, summaryColumns }
    let selector = '#' + this.gridId;
    let grid = this;
    grid.tbs_setDataFilterTableRow2(param);
}
TbsGrid.prototype.tbs_setDataFilterTableRow1 = function (param) {
    // param : { panelName, summaryColumns }
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (grid.options[grid.option_filterVisible] != true) return;

    let tableCells = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-cell`);
    let tableHeaders= document.querySelectorAll(selector + ` .tbs-grid-${panelName} thead th`);

    for (let i = 0, len = grid.columns.length; i < len; i++) {
        let column = grid.columns[i];
        let columnName = column[grid.column_name];
        let columnWidth = column[grid.column_width];
        tableHeaders[i].style.width = columnWidth + 'px';

        let tableCell = tableCells[i];
        tableCell.childNodes[0].innerHTML = '';
        // Set input
        let text = document.createElement('div');
        text.classList.add('tbs-grid-cell-filter-text');
        text.dataset.name = columnName;

        let input = document.createElement('input');
        input.classList.add('tbs-grid-cell-filter-input');
        input.dataset.name = columnName;
        input.style.width = '100%';
        text.append(input);

        // Set icon
        let icon= document.createElement('div');
        icon.classList.add('tbs-grid-cell-filter-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[grid.option_imageRoot] + 'filter_find.png)';
        icon.dataset.name = columnName;

        // Append children
        let cellDiv = tableCell.childNodes[0];
        cellDiv.append(text);
        cellDiv.append(icon);
    }
    grid.panel70_select();
}
TbsGrid.prototype.tbs_setDataFilterTableRow2 = function (param) {
    // param : { panelName, summaryColumns }
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (grid.options[grid.option_filterVisible] != true) return;

    let tableRows    = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
    let tableHeaders = document.querySelectorAll(selector + ` .tbs-grid-${panelName} thead th`);

    /* table thead */
    grid.tbs_setTableHead(panelName);

    let tableCells   = tableRows[0].querySelectorAll('.tbs-grid-cell');
    for (let x = 0, len = grid.columns.length; x < len; x++) {
        let column = grid.columns[x];

        let columnName = column[grid.column_name];
        let columnWidth = column[grid.column_width];
        tableHeaders[x].style.width = columnWidth + 'px';

        let tableCell = tableCells[x];
        tableCell.childNodes[0].innerHTML = '';
        grid.tbs_setCellStyle(tableCell, 'display', column[grid.column_visible] == true ? '' : 'none');

        let combo = grid.tbs_createFilterCombo(column);
        combo.classList.add('tbs-grid-cell-filter-combo');
        combo.dataset.name = columnName;
        combo.style.width = '100%';

        tableCell.childNodes[0].append(combo);
    }
    tableCells   = tableRows[1].querySelectorAll('.tbs-grid-cell');
    for (let x = 0, len = grid.columns.length; x < len; x++) {
        let column = grid.columns[x];

        let columnName = column[grid.column_name];
        let columnWidth = column[grid.column_width];
        tableHeaders[x].style.width = columnWidth + 'px';

        let tableCell = tableCells[x];
        tableCell.childNodes[0].innerHTML = '';
        grid.tbs_setCellStyle(tableCell, 'display', column[grid.column_visible] == true ? '' : 'none');

        // Set input
        let input = document.createElement('input');
        input.classList.add('tbs-grid-cell-filter-input');
        input.dataset.name = columnName;
        input.style.width = '100%';

        let cellDiv = tableCell.childNodes[0].append(input);
    }
    grid.panel70_select();
}
//================================================================
TbsGrid.prototype.tbs_setTableHead = function(panelName) {
    let selector = '#' + this.gridId;
    let grid = this;

    var tableHeads = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
    for (var i = 0, len = grid.columns.length; i < len; i++) {
        let column = grid.columns[i];
        if (grid.fixedColumnIndex != -1) {
            if (i <= grid.fixColIndex) {
                grid.tbs_setCellStyle(tableCell, 'width', '0px');
                grid.tbs_setCellStyle(tableCell, 'display', 'none');
            }
        }
        else {
            let tableHead = tableHeads[i];
            grid.tbs_setCellStyle(tableHead, 'width'  , (column[grid.column_visible] == true) ? parseInt(column[grid.column_width]) + 'px' : '0px');
            grid.tbs_setCellStyle(tableHead, 'display', (column[grid.column_visible] == true) ? '' : 'none');
        }
    }
}
//================================================================
TbsGrid.prototype.tbs_setAlternativeRowColor = function (panelName, tableRow, rowIndex) {
    return;
    tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
    if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
    else tableRow.classList.add('tbs-grid-tr-bg');
}
TbsGrid.prototype.tbs_hiddenTableRows = function (panelName, tableRows, fromRowIndex, toRowIndex) {
    for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
        let tableRow = tableRows[i];
        if (tableRow) {
            if (tableRow.style.display != 'none') tableRow.style.display = 'none';
        }
    }
}
TbsGrid.prototype.tbs_setDataTableCellLine = function(panelName, tableCell, param, rowIndex, cellIndex) {
    // function : display selected lines
    let selector = '#' + this.gridId;
    let grid = this;
    let tableCellDiv = tableCell.childNodes[0];

    tableCellDiv.classList.remove('.tbs-grid-cell-line-top');
    tableCellDiv.classList.remove('.tbs-grid-cell-line-bottom');
    tableCellDiv.classList.remove('.tbs-grid-cell-line-left');
    tableCellDiv.classList.remove('.tbs-grid-cell-line-right');

    let selectedValueBefore = this.tbs_isSelectedCell(panelName, i, x);
    let selectedValue = this.tbs_isSelectedCell(panelName, i, x);
    let selectedValueAfter = this.tbs_isSelectedCell(panelName, i, x);

    if (selectedValue == 1) {
        if (rowIndex == this.startRowIndex && cellIndex == this.startCellIndex) tableCell.classList.add('tbs-grid-cell-start');
        // top : previos rowIndex check
        grid.tbs_isSelectedCell(panelName, i, x);

        tableCellDiv.classList.add('.tbs-grid-cell-line-top');
        tableCellDiv.classList.add('.tbs-grid-cell-line-bottom');
        tableCellDiv.classList.add('.tbs-grid-cell-line-left');
        tableCellDiv.classList.add('.tbs-grid-cell-line-right');
    }
}
TbsGrid.prototype.tbs_setSelectedCell = function(panelName, tableCell, rowIndex, cellIndex) {
    let value = this.tbs_isSelectedCell(panelName, rowIndex, cellIndex);
    if (value == 1) {
        if (this.startRowIndex == rowIndex && this.startCellIndex == cellIndex) tableCell.classList.add('tbs-grid-cell-start');
        else tableCell.classList.add('tbs-grid-cell-select');
    }
}
