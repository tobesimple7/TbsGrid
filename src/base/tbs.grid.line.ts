import {TbsGrid} from "../tbs.grid";

export class TbsGridLine {

    constructor() {
    }

    /**
     * Select Line Functions
     *
     */

    getFirstSelectedTableCell(this: TbsGrid, panelName: string) {
        let selector = '#' + this.gridId;
        const grid = this;

        let startCell;
        let startRowIndex = grid._startRowIndex;

        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();

        if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;

        const tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        const tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

        Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
            const tableRow31: any = tableRows31[i];
            const tableRow: any = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == startRowIndex) {
                for (let x = 0; x < this.column_table.count(); x++) {
                    let tableCell = tableRow.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        startCell = tableCell;
                        break Loop1;
                    }
                }
            }
        }

        return startCell;
    }

    getLastSelectedTableCell(this: TbsGrid, panelName: string) {
        let selector = '#' + this.gridId;
        const grid = this;

        let lastCell;
        let lastRowIndex = this._lastRowIndex;

        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();

        if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;

        let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

        for (let i = tableRows31.length - 1; i >= 0; i--) {
            if (lastCell != undefined) break;
            let tableRow31: any = tableRows31[i];
            let tableRow30: any = tableRows[i];

            let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == lastRowIndex) {
                for (let x = this.column_table.count() - 1; x >= 0; x--) {
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

    clearSelectedLine(this: TbsGrid) {
        this.topLineDiv.style    = 'width :0px;top:0px;left:0px;';
        this.leftLineDiv.style   = 'height:0px;top:0px;left:0px;';
        this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.rightLineDiv.style  = 'height:0px;top:0px;left:0px;';
    }

    setSelectedLine(this: TbsGrid, lineWidth: number, lineHeight: number, rectTop: number, rectBottom: number, rectLeft: number, rectRight: number) {

        if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight)) this.clearSelectedLine();
        else {
            this.topLineDiv.style    = 'width:'  + lineWidth        + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.leftLineDiv.style   = 'height:' + lineHeight       + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.rightLineDiv.style  = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop     + 'px;left:' + rectRight + 'px;';
            this.bottomLineDiv.style = 'width:'  + lineWidth        + 'px;top:' + rectBottom  + 'px;left:' + rectLeft  + 'px;';
        }
    }

    displaySelectedLine(this: TbsGrid) {
        let selector = '#' + this.gridId;
        const grid = this;

        if (grid.view_table.count() == 0) {
            grid.classRange.removeRange(0, -1);
            return;
        }
        if (grid.fixedColumnIndex != -1) {
            let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0) return;

            let fixedColumnIndex = this.fixedColumnIndex;

            /* Get startCell, lastCell */
            let startCell, lastCell;
            //console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
            if (grid._startCellIndex <= grid.fixedColumnIndex) startCell = grid.getFirstSelectedTableCell('panel32');
            else startCell = grid.getFirstSelectedTableCell('panel30');

            if (grid._lastCellIndex <= grid.fixedColumnIndex) lastCell = grid.getLastSelectedTableCell('panel32');
            else lastCell = grid.getLastSelectedTableCell('panel30');
            if (startCell == undefined || lastCell == undefined) { grid.clearSelectedLine(); return; }

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
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
        else {
            let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0) return;

            let startCell = grid.getFirstSelectedTableCell('panel30');
            let lastCell = grid.getLastSelectedTableCell('panel30');

            if (startCell == undefined || lastCell == undefined) { grid.clearSelectedLine(); return; }

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

            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
    }

    displayOneSelection(this: TbsGrid, startRowIndex: number, startCellIndex: number) {
        let selector = '#' + this.gridId;
        const grid = this;

        let column = this.column_table.data;

        this.startRowIndex  = startRowIndex;
        this.lastRowIndex   = startRowIndex;

        this.startCellIndex = startCellIndex;
        this.lastCellIndex  = startCellIndex;

        this._startRowIndex = startRowIndex;
        this._lastRowIndex  = startRowIndex;

        this._startCellIndex= startCellIndex;
        this._lastCellIndex = startCellIndex;

        this.classRange.setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);


        let count = this.view_table.count();
        let topRowIndex = this.getFirstRowIndex();
        //============================================================= table display
        const trLeftList    	= document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
        const trContentList 	= document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
        const trFixBottomtList= document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');

        count = topRowIndex + this.pageRowCount;
        //=============================================================
        const contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
        const contentTableRect = document.querySelector(selector + ' .tbs-grid-panel30 > table').getBoundingClientRect();
        // @ts-ignore
        const contentTableLeft = parseInt(document.querySelector(selector + ' .tbs-grid-panel30 > table').style.left, 10);

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
        let viewCount = grid.view_table.count();
        let i = 0;
        for (let ri = topRowIndex; ri < count; ri++) {
            if (ri > viewCount - 1) break;
            let trLeft = trLeftList[i];
            let trContent = trContentList[i];
            let trFixBottom = trFixBottomtList[i]
            let row = grid.view_table.data[ri];
            //============================================================= left
            let leftTd: any = trLeft.childNodes[0];
            let selectedValue = this.isSelectedCell31(ri, 0);
            if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
            //============================================================= content
            for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
                let td: any = trContent.childNodes[x];
                let selectedValue = this.isSelectedCell30(ri, x); //new
                if (selectedValue == 1) {
                    if (this.startRowIndex == ri && this.startCellIndex == x) {
                        td.classList.add('tbs-grid-cell-start');
                    }
                }
            }
            //============================================================= fixBottom
            if (this.fixedColumnIndex != -1) {
                for (let x = 0; x <= this.fixedColumnIndex; x++) {
                    let td: any = trFixBottom.childNodes[x];
                    let selectedValue = this.isSelectedCell30(ri, x); //new
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
        this.displaySelectedLine();
    }

    getFirstDisplayRowIndex(this: TbsGrid, panelName = '') {
        let selector = '#' + this.gridId;
        const grid = this;

        if (this.view_table.count() == 0) return -1;

        const trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');

        // @ts-ignore
        let displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);

        if (isNaN(displayRowIndex)) displayRowIndex = 0;
        return displayRowIndex;
    }

    getFirstRowIndex(this: TbsGrid, panelName = '') {
        // return : topRowIndex
        let selector = '#' + this.gridId;
        const grid = this;

        if (this.view_table.count() == 0) return -1;

        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        // @ts-ignore
        let topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);

        if (panelName == '') {
            if (isNaN(topRowIndex)) topRowIndex = 0;
            return topRowIndex;
        }
    }

    getLastRowIndex(this: TbsGrid) {
        let selector = '#' + this.gridId;
        const grid = this;

        if (this.view_table.count() == 0) return -1;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let topRowIndex = this.getFirstRowIndex();
        return topRowIndex + trList.length - 1;
    }

    getLastTableRowIndex(this: TbsGrid) {
        let selector = '#' + this.gridId;
        const grid = this;

        const trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        return trList.length - 1;
    }
}