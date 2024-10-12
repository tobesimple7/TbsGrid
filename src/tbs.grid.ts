import { TbsGridDom } from "./tbs.grid.dom";
import { TbsGridExcel } from "./export/tbs.grid.excel";
import {TbsGridScrollBase} from "./tbs.grid.scroll.base";
import {TbsGridScroll} from "./tbs.grid.scroll";
import {TbsGridHeaders} from "./columns/tbs.grid.headers";
import {TbsGridColumns} from "./columns/tbs.grid.columns";
import {TbsGridControl} from "./tbs.grid.control";
import {TbsGridRange} from "./tbs.grid.range";
import {TbsGridRangePanel} from "./tbs.grid.range.panel";
import {TbsGridFilter} from "./tbs.grid.filter";
import {TbsGridGroup} from "./tbs.grid.group";
import {TbsGridPage} from "./tbs.grid.page";
import {TbsGridSort} from "./tbs.grid.sort";
import {TbsGridTree} from "./tbs.grid.tree";
import {TbsGridPanelBase} from "./panels/tbs.grid.panel.base";
import {TbsGridPanel10} from "./panels/tbs.grid.panel10";
import {TbsGridPanel20} from "./panels/tbs.grid.panel20";
import {TbsGridPanel30} from "./panels/tbs.grid.panel30";
import {TbsGridPanel40} from "./panels/tbs.grid.panel40";
import {TbsGridPanel50} from "./panels/tbs.grid.panel50";
import {TbsGridPanel70} from "./panels/tbs.grid.panel70";
import {TbsGridPanel80} from "./panels/tbs.grid.panel80";
import {TbsGridPanel90} from "./panels/tbs.grid.panel90";
import {TbsGridTop} from "./summary/tbs.grid.top";
import {TbsGridFooter} from "./summary/tbs.grid.footer";
import {TbsGridDate} from "./tbs.grid.date";
import {TbsGridCombo} from "./tbs.grid.combo";
import {TbsGridRow} from "./tbs.grid.row";
import {TbsGridCell} from "./tbs.grid.cell";
import {TbsGridBase} from "./tbs.grid.base";
import {CellType, columnAlias, GridMode, optionAlias, rowAlias} from "./tbs.grid.types";

export class TbsGrid extends TbsGridBase {

    classScroll: TbsGridScrollBase;
    verticalScroll: TbsGridScroll;
    horizontalScroll: TbsGridScroll;

    classHeader: TbsGridHeaders;
    classColumn: TbsGridColumns;
    classControl: TbsGridControl;
    classRange: TbsGridRange;
    classRange40: TbsGridRangePanel;
    classRange50: TbsGridRangePanel;
    classFilter: TbsGridFilter;
    classGroup: TbsGridGroup;
    classPage: TbsGridPage;
    classSort: TbsGridSort
    classTree: TbsGridTree;

    classPanelBase: TbsGridPanelBase;
    classPanel10: TbsGridPanel10;
    classPanel20: TbsGridPanel20;
    classPanel30: TbsGridPanel30;
    classPanel40: TbsGridPanel40;
    classPanel50: TbsGridPanel50;
    classPanel70: TbsGridPanel70;
    classPanel80: TbsGridPanel80;
    classPanel90: TbsGridPanel90;

    classTop: TbsGridTop;
    classFooter: TbsGridFooter;

    tbsGridDate: TbsGridDate;
    tbsGridCombo: TbsGridCombo;

    classRow: TbsGridRow;
    classCell: TbsGridCell;

    topLineDiv    : any;
    bottomLineDiv : any;
    leftLineDiv   : any;
    rightLineDiv  : any;

    constructor(gridId: string, gridConfigs: object) {
        super(gridId, gridConfigs);
        /**
         * @description class
         *
         */

        this.classScroll    = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classHeader    = new TbsGridHeaders(this);
        this.classColumn    = new TbsGridColumns(this);
        this.classControl   = new TbsGridControl(this); // memory
        this.classRange     = new TbsGridRange(this);// memory
        this.classRange40   = new TbsGridRangePanel(this, 'panel40');// memory
        this.classRange50   = new TbsGridRangePanel(this, 'panel50');// memory
        this.classFilter    = new TbsGridFilter(this);// memory
        this.classGroup     = new TbsGridGroup(this);// memory
        this.classPage      = new TbsGridPage(this);// memory
        this.classSort      = new TbsGridSort(this);// memory
        this.classTree      = new TbsGridTree(this);// memory

        this.classPanelBase = new TbsGridPanelBase(this);
        this.classPanel10 = new TbsGridPanel10(this);
        this.classPanel20 = new TbsGridPanel20(this);
        this.classPanel30 = new TbsGridPanel30(this);
        this.classPanel40 = new TbsGridPanel40(this);
        this.classPanel50 = new TbsGridPanel50(this);
        this.classPanel70 = new TbsGridPanel70(this);
        this.classPanel80 = new TbsGridPanel80(this);
        this.classPanel90 = new TbsGridPanel90(this);

        //this.classRender = new TbsGridRender(this);

        this.classTop    = new TbsGridTop(this);// memory
        this.classFooter = new TbsGridFooter(this);// memory

        this.tbsGridDate;// memory
        this.tbsGridCombo;// memory

        this.classRow = new TbsGridRow(this);
        this.classCell = new TbsGridCell(this, null);

        this.topLineDiv    = null;
        this.bottomLineDiv = null;
        this.leftLineDiv   = null;
        this.rightLineDiv  = null;
    }

    /**
     * Is Functions
     *
     */

    isEditableColumn(columnName: string): boolean {
        let result: any = this.column_table.selectRow(columnAlias.name, columnName);
        return result.editable ? result.editable : false;
    }

    isSortableColumn(columnName?: string): boolean {
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[columnAlias.sortable] == true)  result = true;
        // else if (column[columnAlias.sortable] == false) result = false;
        // else {
        result = grid.options[columnAlias.sortable];
        //}
        return result;
    }

    isResizableColumn(columnName: string): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[columnAlias.resizable] == true)  result = true;
        // else if (column[columnAlias.resizable] == false) result = false;
        // else {
        result = grid.options[columnAlias.resizable];
        // }
        return result;
    }

    isMovableColumn(columnName?: string): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[columnAlias.movable] == true)  result = true;
        // else if (column[columnAlias.movable] == false) result = false;
        // else {
        result = grid.options[columnAlias.movable];
        // }
        return result;
    }

    isAutoResizableColumn(columnName: boolean) {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[columnAlias.autoResizable];
        //}
        return result;
    }

    isAutoWidthColumn(columnName): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[columnAlias.autoWidth];
        //}
        return result;
    }

    isClassName(element, className): boolean {
        let selector = '#' + this.gridId;
        const grid = this;

        let result = element.classList.contains(className);
        return result;
    }

    isNotValidColumnType(columnType): boolean {
        let arr = ['string', 'number', 'combo', 'date'];
        return arr.indexOf(columnType) == -1 ? true : false;
    }

    isInPanel(e, panelName, startX, startY): boolean {  //tbs-grid-panel30
        /**
         * @function  isInPanel
         *
         * @Description is existed in panel
         * @param e
         * @param panelName
         * @deprecated startX
         * @deprecated startY
         * @returns {boolean}
         */
        let selector = '#' + this.gridId;
        const grid = this;

        //let lastX = window.pageXOffset + e.clientX;
        //let lastY = window.pageYOffset + e.clientY;

        let lastX = this.lastX;
        let lastY = this.lastY;

        let moveX = lastX - startX;
        let moveY = lastY - startY;

        let panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        let absRect = grid.getOffset(panel);

        let rect= panel.getBoundingClientRect();
        let groupTop    = absRect.top;
        let groupBottom = absRect.top + rect.height;
        let groupLeft   = absRect.left;
        let groupRight  = absRect.left + rect.width;
        //outside area
        if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;
        else return true;
    }

    isSelectedCell(panelName: string, rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = [];
        if      (panelName == 'panel31') rows = this.data_select_panel31;
        else if (panelName == 'panel32') rows = this.data_select_panel30;
        else if (panelName == 'panel30') rows = this.data_select_panel30;

        else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;
        else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;
        else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;

        else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;
        else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;
        else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;

        else rows = this.data_select_panel30;

        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedHeaderCell(panelName: string, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel30;

        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (row[1][cellIndex] == 1) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedCell31(rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel31;
        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isSelectedCell30(rowIndex: number, cellIndex: number): number {
        //selected 1, 0
        let result = 0;
        let rows = this.data_select_panel30;
        for (let i = 0, len= rows.length; i < len; i++) {
            let row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    }

    isColumnName(columnName: string): boolean {
        const grid = this;

        let result = false;
        for (let i = 0, len = this.column_table.count(); i < len; i++) {
            let column = this.column_table.data[i];
            if (columnName == column[columnAlias.name]) {
                result = true;
                break;
            }
        }
        return result;
    }

    isColumnTypeNumber(columnName: string): boolean {
        const grid = this;

        let result = false;
        let column = grid.getColumn(columnName)
        if (column[columnAlias.type] == CellType.number) result = true;
        return result;
    }

    isFilterColumnName(columnName: string): boolean {
        const grid = this;
        return grid.filter_column_table.isRow(columnAlias.name, columnName);
    }

    isLastTopRowIndex(rowIndex: number): boolean {
        const grid = this;

        let result = false;
        let rowCount = grid.getRowCount() - 1;
        if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
            return true;
        }
        return result;
    }


    /**
     * Select Line Functions
     *
     */

    getFirstSelectedTableCell(panelName: string) {
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

    getLastSelectedTableCell(panelName: string) {
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

    clearSelectedLine() {
        this.topLineDiv.style    = 'width :0px;top:0px;left:0px;';
        this.leftLineDiv.style   = 'height:0px;top:0px;left:0px;';
        this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.rightLineDiv.style  = 'height:0px;top:0px;left:0px;';
    }

    setSelectedLine(lineWidth: number, lineHeight: number, rectTop: number, rectBottom: number, rectLeft: number, rectRight: number) {

        if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight)) this.clearSelectedLine();
        else {
            this.topLineDiv.style    = 'width:'  + lineWidth        + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.leftLineDiv.style   = 'height:' + lineHeight       + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.rightLineDiv.style  = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop     + 'px;left:' + rectRight + 'px;';
            this.bottomLineDiv.style = 'width:'  + lineWidth        + 'px;top:' + rectBottom  + 'px;left:' + rectLeft  + 'px;';
        }
    }

    displaySelectedLine() {
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

    displayOneSelection(startRowIndex: number, startCellIndex: number) {
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

    getFirstDisplayRowIndex(panelName = '') {
        let selector = '#' + this.gridId;
        const grid = this;

        if (this.view_table.count() == 0) return -1;

        const trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');

        // @ts-ignore
        let displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);

        if (isNaN(displayRowIndex)) displayRowIndex = 0;
        return displayRowIndex;
    }

    getFirstRowIndex(panelName = '') {
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

    getLastRowIndex() {
        let selector = '#' + this.gridId;
        const grid = this;

        if (this.view_table.count() == 0) return -1;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let topRowIndex = this.getFirstRowIndex();
        return topRowIndex + trList.length - 1;
    }

    getLastTableRowIndex() {
        let selector = '#' + this.gridId;
        const grid = this;

        const trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        return trList.length - 1;
    }

    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////

    event_input() {
        let selector = '#' + this.gridId;
        const grid = this;

        let panelInputt: any = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input: any = document.querySelector(selector + ' .tbs-grid-input');
        let colType = input.dataset.type;

        const keydownEvent = function (e) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            let input: any = document.querySelector(selector + ' .tbs-grid-input');
            let mode = input.dataset.mode;
            if (mode == undefined) mode = '';
            if (e.ctrlKey) {
                if      (e.keyCode == 37 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.addRow('up');   grid.input_focus();}   //left arrow //type : first, last, up, down
                else if (e.keyCode == 39 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.addRow('down'); grid.input_focus();}   //right arrow
                else if (e.keyCode == 38 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.addRow('first');grid.input_focus();}   //up arrow
                else if (e.keyCode == 40 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.addRow('last'); grid.input_focus();}   //down arrow
                //else if (e.keyCode == 46 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
                else if ((e.keyCode == 65 || e.keyCode == 97) && mode == '') { //ctrl + a, A
                    if (!(grid.options[rowAlias.addRow])) {
                        grid.classRange.selectRange(0, -1, 0, -1);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                        grid.input_focus();
                    }
                }
            }
            else {
                if      (e.keyCode == 37  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('left' ); grid.input_focus();}
                else if (e.keyCode == 39  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();}
                else if (e.keyCode == 38  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter
                else if (e.keyCode == 9   && (mode == ''))  { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab

                else if (e.keyCode == 37  && (mode == 'key')) {}
                else if (e.keyCode == 39  && (mode == 'key')) {}
                else if (e.keyCode == 38  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
                else if (e.keyCode == 9   && (mode == 'key')) { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

                else if (e.keyCode == 37  && (mode == 'mouse')) {}
                else if (e.keyCode == 39  && (mode == 'mouse')) {}
                else if (e.keyCode == 38  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
                else if (e.keyCode == 9   && (mode == 'mouse')) { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

                else if (e.keyCode >= 0   && e.keyCode <= 7)  {} //function ctrlkey shifkey tabkey(9)등등
                else if (e.keyCode >= 9   && e.keyCode <= 32) {}
                else if (e.keyCode == 8)    {} //backspace key
                else if (e.keyCode == 127)  {}
                else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {}
                else if (e.keyCode >= 112 && e.keyCode <= 123) {}
                else {
                    //console.log('input');
                    let cellIndex = grid.startCellIndex;
                    let column = grid.getColumnByIndex(cellIndex);
                    if (grid.isNull(column[columnAlias.editable], false)) {
                        if (grid.notNull(grid.edit)) { // state
                            //console.log(`panelInput.style.left : ${panelInput.style.left}`);
                            if (panelInputt.style.left == '30000px') {
                                grid.editStart(e, 'key');
                            }
                            else {
                                grid.editing(e, 'key');
                            }
                        }
                        else {
                            grid.input_show(e, 'key');
                        }
                    }
                }
            }
        };
        const keyupEvent = function (e: any) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            const input: any = document.querySelector(selector + ' .tbs-grid-input');
            let colType = input.dataset.type;
        };
        const clickEvent = function(e) {
            let column = grid.column_table.data;
            let input = document.querySelector(selector + ' .tbs-grid-input');
            let colType = grid.column_table.data[grid.startCellIndex][columnAlias.type];
        }
        const blurEvent = function(e) {
            // inputLayerPanel 일 살아 있을 경우.
            // focus가 사라진다 해도..input은 남아 있어야 해.
            const inputLayerPanel: any = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            if (inputLayerPanel.style.left != '30000px') return;

            const input: any = document.querySelector(selector + ' .tbs-grid-input');
            const input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');
            const input_icon: any = document.querySelector(selector + ' .tbs-grid-input-panel-icon');

            let mode = input.dataset.mode;
            let rowIndex  = input.dataset.rowIndex;
            let cellIndex = input.dataset.columnIndex;

            let column = grid.column_table.data[cellIndex];

            /* user blur event stop */
            if (rowIndex == undefined || cellIndex == undefined) { grid.input_hide(); return }
            if (input.dataset.mode == undefined || input.dataset.mode == '') return; //{ e.stopImmediatePropagation(); }
            if (rowIndex == -1 || cellIndex == -1) return;

            if (grid.notNull(grid.edit)) {
                grid.editEnd(e, 'key');
            }
            else {
                if (isNaN(cellIndex)) return;
                let s = input.value;
                if (column[columnAlias.type] == CellType.combo) s = input_code.value;
                else if (column[columnAlias.type] == 'number' && grid.trim(s) == grid.options[optionAlias.zeroChar]) s = '0';
                grid.setValueByColumnIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
                grid.input_hide();
            }
            grid.apply();
        }
        const wheelEvent = function(e) {}
        const copyEvent = function(e) {
            const ta = document.createElement('textarea');
            let s = '';
            if (grid.classRange40.data_select_panel30.length > 0) {
                let startRowIndex  = 0;
                let startCellIndex = grid.classRange40._startCellIndex;
                let lastRowIndex  = 0;
                let lastCellIndex = grid.classRange40._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let columnName = grid.column_table.selectValue(colIndex, columnAlias.name);
                        let val = grid.getValue(rowIndex, columnName, grid.top_table);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else if (grid.classRange50.data_select_panel30.length > 0) {
                let startRowIndex  = 0;
                let startCellIndex = grid.classRange50._startCellIndex;
                let lastRowIndex  = 0;
                let lastCellIndex = grid.classRange50._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.getValueByColumnIndex(rowIndex, colIndex, this.footer_table);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else {
                let startRowIndex  = grid._startRowIndex;
                let startCellIndex = grid._startCellIndex;
                let lastRowIndex  = grid._lastRowIndex;
                let lastCellIndex = grid._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.getValueByColumnIndex(rowIndex, colIndex);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
        }
        const pasteEvent = function(e){
            let data = e.clipboardData.getData('text/plain')
            let startRowIndex = grid.startRowIndex;
            let startCellIndex = grid.startCellIndex;
            //-------------------------------------------------------------
            let td = grid.classColumn.getSelectedTableCell();
            if (td == 'undefined' || td == null) return;
            //-------------------------------------------------------------
            let rowArray = data.split('\r\n');
            let i = 0;
            for (let rowIndex = startRowIndex; rowIndex < startRowIndex + rowArray.length; rowIndex++) {
                if (rowIndex >= grid.view_table.count()) break;
                let colArray = rowArray[i].split('\t');
                let j = 0;

                for (let colIndex = startCellIndex; colIndex < startCellIndex + colArray.length; colIndex++) {
                    //if (grid.column_table.data[colIndex].column_readonly == true) continue;
                    if (grid.column_table.data[colIndex][columnAlias.editable] == false) continue;
                    grid.setValueByColumnIndex(rowIndex, colIndex, colArray[j]);
                    j += 1;
                }
                i += 1;
            }
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        }
        const cutEvent = function(e){}

        input.addEventListener('keydown', keydownEvent, true);
        input.addEventListener('keyup', keyupEvent, true);
        input.addEventListener('click', clickEvent, true);
        input.addEventListener('blur', blurEvent, true);
        input.addEventListener('wheel', wheelEvent, true);
        input.addEventListener('copy', copyEvent, true);
        input.addEventListener('paste', pasteEvent, true);
        input.addEventListener('cut', cutEvent, true);
    }

    event_input_icon() {
        let selector = '#' + this.gridId;
        const grid = this;

        let input_icon: any = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        let colType = input_icon.dataset.type;
        const mousedownEvent = function(e) {
            //console.dir(e)
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            const input: any = document.querySelector(selector + ' .tbs-grid-input');
            const input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');
            const input_panel: any = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            const column: any = grid.column_table.data[grid.startCellIndex];
            const colType: any = grid.column_table.data[grid.startCellIndex][columnAlias.type];

            //tbs-grid-input-layer-panel : calendar, combo
            if (colType == 'date') {
                grid.tbsGridDate = new TbsGridDate(grid, column, input);
            }
            else if (colType == CellType.combo) {
                grid.tbsGridCombo = new TbsGridCombo(grid, column, input, input_code);
            }
        }
        input_icon.addEventListener('mousedown', mousedownEvent);
    }

    input_show(e, mode) { //type : header, content, left, top
        let selector = '#' + this.gridId;
        const grid = this;

        let lineWeight = 3;
        let rowIndex  = grid.startRowIndex;
        let cellIndex = grid.startCellIndex;

        let columns = grid.column_table.data;
        let column = columns[cellIndex];
        let colType  = column[columnAlias.type];

        let panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input: any = document.querySelector(selector + ' .tbs-grid-input');
        let input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');
        let input_icon: any = document.querySelector(selector + ' .tbs-grid-input-panel-icon');

        let panelMain: any =  document.querySelector(selector + ' .tbs-grid-main');
        let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
        if (td == null) return;

        let value  = this.getValue(rowIndex, column[columnAlias.name]);
        const result: any = this.getFormat(column, value); //result.value, result.text

        if (column[columnAlias.editable] == false) return;

        grid.tbs_moveCellLine(td, rowIndex, cellIndex);

        let left = td.getBoundingClientRect().left;
        let top  = td.getBoundingClientRect().top;

        let leftMain = panelMain.getBoundingClientRect().left;
        let topMain = panelMain.getBoundingClientRect().top;

        if (mode == 'mouse') {
            if (colType == 'number' && grid.trim(result.text) == grid.options[optionAlias.zeroChar]) input.value = '0';
            else input.value = result.text;
            input_code.value = result.value;
        }

        panelInput.style.top  = (top - topMain + lineWeight) + 'px';
        panelInput.style.left = (left - leftMain + lineWeight) + 'px';
        panelInput.style.height = (grid.rowHeight - lineWeight) + 'px';
        input.dataset.mode = mode;
        input.dataset.type = colType;
        input.dataset.rowIndex = grid.startRowIndex;
        input.dataset.columnIndex = grid.startCellIndex;
        input.dataset.click = '';

        if (colType == 'date') {
            let width = parseInt(column[columnAlias.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';

            input_icon.style.display = '';
            input_icon.style.top  = top  + 'px';
            input_icon.style.left = `${left + width - 15}px`;
            input_icon.dataset.type = colType;

            input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
        }
        else if (colType == CellType.combo) {
            let width = parseInt(column[columnAlias.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';

            input_icon.style.display = '';
            input_icon.style.top  = top  + 'px';
            input_icon.style.left = `${left + width - 15}px`;
            input_icon.dataset.type = colType;

            input_icon.src = grid.getConfigOption('imageRoot') + 'down-arrow.png';
        }
        else {
            input_icon.style.diplay = 'none';
            input.style.backgroundRepeat = '';
            input.style.backgroundImage = '';
            input.style.backgroundPosition = '';
            input.style.backgroundSize = '';
            panelInput.style.width = (parseInt(column[columnAlias.width]) - lineWeight) + 'px';
        }
        if (mode == 'mouse') input.select();
    }

    input_hide() {
        let selector = '#' + this.gridId;
        const grid = this;

        const panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
        const input: any      = document.querySelector(selector + ' .tbs-grid-input');
        const input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');

        // date, combo layer
        const input_icon: any = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        //let inputLayerPanel= document.querySelector(selector + ' .tbs-grid-input-layer-panel');

        panelInput.style.left = '30000px';
        panelInput.style.width = '0px';
        input.value = '';
        input_code.value = '';

        input.dataset.rowIndex = -1;
        input.dataset.columnIndex = -1;
        input.dataset.mode = '';
        input.dataset.type = '';

        input_icon.style.display = 'none';
        input_icon.dataset.rowIndex = -1;
        input_icon.dataset.columnIndex = -1;
        input_icon.dataset.mode = '';
        input_icon.dataset.type = '';

        // date, combo layer
        //console.log('input_hide');
        // inputLayerPanel.innerHTML = '';
        // inputLayerPanel.style.width = '0px';
        // inputLayerPanel.style.left = '30000px';
        // inputLayerPanel.dataset.rowIndex = -1;
        // inputLayerPanel.dataset.columnIndex = -1;
        // inputLayerPanel.dataset.mode = '';
        // inputLayerPanel.dataset.type = '';

        if (this.tbsGridDate ) { this.tbsGridDate.destroy();  this.tbsGridDate = null; }
        if (this.tbsGridCombo) { this.tbsGridCombo.destroy(); this.tbsGridCombo = null; }
    }

    input_focus() { if (this.isMobile == false) (document.querySelector('#' + this.gridId + ' .tbs-grid-input') as any).focus(); }

    editStart(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;

        let state = 0;
        let panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input: any      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');

        let result = true;
        let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;

        const eventRow = grid.getRow(rowIndex);

        if (grid.group_column_table.count() > 0) {
            if (eventRow[columnAlias.depth] <= grid.group_column_table.count()) return;
        }

        const column: any = grid.getColumnByIndex(cellIndex);
        let columnName = grid.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text  = grid.getText(rowIndex, columnName);

        let eventData = {};

        eventRow.rowIndex    = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName  = columnName;
        eventRow.value       = value;
        eventRow.text        = text;
        eventRow.state       = state;
        eventRow.newValue    = input.value;
        eventRow.data        = eventRow;

        if (mode == 'key') {
            if (column[columnAlias.editable] == true && grid.notNull(grid.edit)) {
                let result =  grid.edit(grid, state, eventRow);
                if (grid.isNull(result, true)) {
                    grid.input_show(e, mode);
                    grid.editing(e, mode);
                }
                else {
                    // blur is certain
                    (document.querySelector(selector + ' .tbs-grid-input') as any).blur();
                }
            }
        }
        else {
            if (column[columnAlias.editable] == true && grid.notNull(grid.edit)) {
                let result = true;
                result = grid.edit(grid, state, eventRow);
                if (grid.null(result) || result == true) {
                    grid.input_show(e, mode);
                }
                else {
                    //grid.input_hide(); grid.apply(); // not certain
                    (document.querySelector(selector + ' .tbs-grid-input') as any).blur(); // blur is certain
                }
            }
        }
    }

    editing(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;

        let state = 1;
        let panelInput: any  = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input: any      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');

        if (input.dataset.columnIndex == -1) { grid.input_hide(); return; }

        let result = true;
        let rowIndex  = (state == 0) ? grid.startRowIndex  : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;

        let column = grid.getColumnByIndex(cellIndex);
        let columnName = grid.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text  = grid.getText(rowIndex, columnName);

        const eventRow = grid.getRow(rowIndex);
        let eventData: any = {};
        eventData.rowIndex    = rowIndex;
        eventData.columnIndex = cellIndex;
        eventData.columnName  = columnName;
        eventData.value       = value;
        eventData.text        = text;
        eventData.state       = state;
        eventData.newValue    = input.value;
        eventData.data        = eventRow;
        if (column[columnAlias.editable] == true && grid.notNull(grid.edit)) {
            let result = true;
            if (state == 1 && panelInput.style.left != '30000px') {
                result = grid.edit(grid, state, eventRow);
                if (grid.null(result) || result == true) {

                }
                else {
                    grid.input_hide();
                    grid.apply();
                }
            }
        }
    }

    editEnd(e?, mode?) {
        let selector = '#' + this.gridId;
        const grid = this;

        let state = 2;
        let panelInput: any = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input: any      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code: any = document.querySelector(selector + ' .tbs-grid-input-code');

        if (grid.null(input.dataset.columnIndex) || input.dataset.columnIndex == -1) {
            grid.input_hide();
        }
        else {
            let result = true;
            let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
            let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;

            let column = grid.getColumnByIndex(cellIndex);
            //let column = grid.column_table.selectRowByRowIndex(cellInex);
            let columnName = grid.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text  = grid.getText(rowIndex, columnName);

            let eventRow: any = grid.getRow(rowIndex);
            const eventData: any = {};
            eventData.rowIndex    = rowIndex;
            eventData.columnIndex = cellIndex;
            eventData.columnName  = columnName;
            eventData.value       = value;
            eventData.text        = text;
            eventData.state       = state;
            eventData.newValue    = input.value;
            eventData.data        = eventRow;
            if (column[columnAlias.editable] == true && grid.notNull(grid.edit)) {
                let result = true;
                if (state == 2 && panelInput.style.left != '30000px') {
                    result = grid.edit(grid, state, eventRow);
                    if (grid.null(result) || result == true) {
                        //console.log(2);
                        let s = input.value;
                        if (column[columnAlias.type] == CellType.combo) s = input_code.value;
                        grid.setValueByColumnIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
                        grid.input_hide();
                        grid.apply();
                    }
                    else {
                        grid.input_hide();
                        grid.apply();
                    }
                }
            }
        }
        (document.querySelector(selector + ' .tbs-grid-input') as any).blur();
    }

    /**
     * Event Functions
     *
     */

    tbs_addEventAll() {
        let selector = '#' + this.gridId;
        const grid = this;

        this.classPanel20.panel21_select();
        this.classPanel20.panel20_select('panel20');
        this.classPanel20.panel20_select('panel22');

        this.classPanel30.panel30_select('panel30');
        this.classPanel30.panel31_select('panel31');
        this.classPanel30.panel30_select('panel32');

        this.classPanel40.panel40_select('panel40');
        this.classPanel40.panel41_select('panel41');
        this.classPanel40.panel40_select('panel42');

        this.classPanel40.panel40_select('panel50');
        this.classPanel40.panel41_select('panel51');
        this.classPanel40.panel40_select('panel52');

        this.classPanel70.panel70_select('panel70');
        this.classPanel70.panel70_select('panel72');
        // this.classPanel80.panel80_select();
        // this.classPanel90.panel90_select();

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
        //this.event_checkBox();

        this.event_mobileTouchDrag();

        document.addEventListener('scroll', function(e) {
            let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');
            let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
            let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-input-panel-icon');
            let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-layer-panel');

            for (let i = 0; i < inputList.length; i++) {
                let panelInput: any = panelInputList[i];
                let input: any      = inputList[i];
                let input_icon: any = inputIconList[i];
                let input_panel: any= inputPanelList[i];
                input.value = '';

                panelInput.style.left = '30000px';
                panelInput.style.width= '0px';

                input.dataset.rowIndex = -1;
                input.dataset.columnIndex = -1;
                input.dataset.mode = '';
                input.dataset.type = '';

                input_icon.style.display = 'none';
                input_icon.dataset.rowIndex = -1;
                input_icon.dataset.columnIndex = -1;
                input_icon.dataset.mode = '';
                input_icon.dataset.type = '';

                input_panel.innerHTML = '';
                input_panel.style.width = '0px';
                input_panel.style.left = '30000px';
                input_panel.dataset.rowIndex = -1;
                input_panel.dataset.columnIndex = -1;
                input_panel.dataset.mode = '';
                input_panel.dataset.type = '';

            }
        });

        const bodyMouseDownEvent = function(e) {
            let name = e.target.className;

            const inputPanel: any = document.querySelector(selector + ' .tbs-grid-input-panel');
            const inputLayerPanel: any = document.querySelector(selector + ' .tbs-grid-input-layer-panel');

            if (   name.indexOf('tbs-grid-panel10-filter-input') != -1
                || inputPanel.contains(e.target)
                || inputLayerPanel.contains(e.target)
                || name.indexOf('tbs-grid-cell-filter-input' ) != -1
                || name.indexOf('tbs-grid-cell-filter-combo' ) != -1) {
            }
            else {
                inputLayerPanel.style.left = '30000px';
                grid.input_focus();
            }
        };
        document.body.addEventListener('mousedown', bodyMouseDownEvent);

        const mouseDownGridEvent = function(e) {
            let name = e.target.className;

            const inputPanel: any = document.querySelector(selector + ' .tbs-grid-input-panel');
            const inputLayerPanel: any = document.querySelector(selector + ' .tbs-grid-input-layer-panel');

            if (   name.indexOf('tbs-grid-panel10-filter-input') != -1
                || inputPanel.contains(e.target)
                || inputLayerPanel.contains(e.target)
                || name.indexOf('tbs-grid-cell-filter-input' ) != -1
                || name.indexOf('tbs-grid-cell-filter-combo' ) != -1) {
            }
            else {
                inputLayerPanel.style.left = '30000px';
                grid.input_focus();
            }
        }
        document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);

        const windowResizeEvent = function(e) {
            setTimeout(() => { grid.apply(); }, 200);
        }
        window.addEventListener('resize', windowResizeEvent, true);
    }

    event_columnSort(cell) {
        let selector = '#' + this.gridId;
        const grid = this;

        let column = grid.getColumn(cell.dataset.name);
        let columnName = cell.dataset.name;
        // * sort(▼), (▲), (■) order
        if (cell == undefined) return false;

        let isSortable = grid.isSortableColumn(cell.dataset.name);
        if (!isSortable) return false;

        //let sortDiv = cell.querySelector('.tbs-grid-html-sort');
        let curSortKind = '';
        let sortKind = '';

        if (grid.sort_column_table.isRow(columnAlias.name, columnName)) {
            let dataRow = grid.sort_column_table.selectRow(columnAlias.name, columnName);
            curSortKind = dataRow[columnAlias.order];
        }
        else {
            curSortKind = '';
        }

        if (curSortKind == 'desc') sortKind = '';
        else if (curSortKind == 'asc') sortKind = 'desc';
        else sortKind = 'asc';

        if (grid.sort_column_table.isRow(columnAlias.name, columnName)) {
            let dataRow = grid.sort_column_table.selectRow(columnAlias.name, columnName);
            let rowId = dataRow[columnAlias.rowId];
            grid.sort_column_table.updateByRowId(rowId, columnAlias.order, sortKind);
        }
        else {
            let dataRow = {};
            dataRow[columnAlias.name] = columnName;
            dataRow[columnAlias.order] = sortKind;
            grid.sort_column_table.insert(dataRow);
        }

        let count = grid.sort_column_table.count();
        let emptyCount = grid.sort_column_table.count('order', '');

        if (count == emptyCount) { grid.classSort.initSortData(); }

        if (grid.options.showFilterPanel) grid.classFilter.filters();

        grid.classSort.getSortButtonList();

        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, grid.classGroup.openDepth, false);
        }
        else if (grid.grid_mode == GridMode.tree) {
            grid.setData(grid.view_table.data, grid.classTree.openDepth, false);
        }
        else {
            if (grid.isSortableColumn()) {
                grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
                grid.classRange.removeRange(0, -1);
                grid.apply();
            }
        }
    }

    event_mobileTouchDrag() { //type : header, content
        let selector = '#' + this.gridId;
        const grid = this;

        let startRowIndex, startCellIndex;
        let lastRowIndex , lastCellIndex;

        let xWrap: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos: any = { left: 0, x : 0 }
        let yBar: any = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        let yPos: any = { top: 0, y : 0 }
        let actveTopRowIndex = -1;
        const touchStartEvent = function(e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            actveTopRowIndex = -1;

            let col;
            if (e.target.tagName == 'DIV')  { col = e.target.parentNode; }
            else if (e.target.tagName == 'SPAN')  { col = e.target.parentNode.parentNode; }
            else { col = e.target; }
            let rowIndex = grid.classColumn.getRowIndexInTable(col.parentNode.rowIndex)
            //grid.classRange.removeRange(0, -1);
            //let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
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

                const header: any  = document.querySelector(selector + ' .tbs-grid-panel20');
                let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
                let nLeft = (left * -1 * ratio).toString();
                grid.classScroll.setContentPanelLeft(nLeft);
                //grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                grid.apply();
            }
            else if (Math.abs(xMove) < Math.abs(yMove)) {
                let yBarTop = yPos.top - yMove;
                if (yBarTop < 0) yBarTop = 0;
                if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

                let displayTopRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
                actveTopRowIndex = displayTopRowIndex;

                let topRowIndex = displayTopRowIndex;

                //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
                setTimeout(function(){ grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
                setTimeout(function(){ grid.classPanel30.setDataPanel(topRowIndex);}, 5);
            }
        }
        const touchEndEvent = function(e) {
            //e.stopPropagation();
            let xMove = e.changedTouches[0].clientX - xPos.x;
            let yMove = e.changedTouches[0].clientY - yPos.y;

            let tableCell, targetName;

            if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            let eventPanelName  = 'panel30';
            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = startCellIndex;
            startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex   = startRowIndex;

            if  (Math.abs(xMove) < 5 && Math.abs(yMove) < 5)  {
                grid.classRange.removeRange(0, -1, 0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
                grid.apply();
            }

            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
            document.body.style.overflow = 'auto';
        }
        document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
    }

    event_columnResize(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

        let startX     = 0; // mouse start x position
        let movedWidth = 0; // moved width
        let cellWidth  = 0; // header cell width
        let tableWidth = 0;

        let initWidth = [];
        let childList = [];
        let tableCell, resizer;
        let eventDetail = 0; // 1 : click (resize), 2 : dblclick(auto resize)
        const mouseDownEvent = function (e) {
            e.stopPropagation();
            if (e.target.classList.contains('tbs-grid-html-resize')) {
                tableCell = e.target.parentNode;
                resizer = e.target;
            }
            else return;

            eventDetail = e.detail;
            if (eventDetail == 1) {
                e.stopPropagation();
                // if (grid.options[columnAlias.resizable] == false) return;

                let isResizable = grid.isResizableColumn(tableCell.dataset.name);
                if (!isResizable) return;

                startX =  window.pageXOffset + e.clientX;

                const style = window.getComputedStyle(tableCell);
                cellWidth = parseInt(style.width, 10);

                // @ts-ignore
                tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);

                resizer.classList.add('.tbs-grid-html-resizing');

                if (tableCell.dataset.name == '') {
                    let cellIndex = tableCell.cellIndex;
                    let lastCellIndex = cellIndex + tableCell.colSpan;

                    childList = [];
                    initWidth = [];

                    let thCells = document.querySelectorAll(selector  + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
                    for (let i = cellIndex; i < lastCellIndex; i++) {
                        let thCell: any= thCells[i];
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
                if (grid.isClassName(e.target, 'tbs-grid-html-resize') != true) return;

                let cell = e.target.parentElement;
                let columnName = grid.getColumnName(cell.cellIndex);

                let isAutoResizable = grid.isAutoResizableColumn(columnName);
                if (isAutoResizable != true) return;

                let colIndex   = cell.cellIndex + parseInt(cell.colSpan) - 1;
                let column     = grid.getColumn(columnName);
                let firstWidth = parseInt(column[columnAlias.width]);
                let maxWidth  = 0;

                let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];

                let fontSize = grid.getConfigFont('fontSize');
                let fontFamilty = grid.getConfigFont('fontFamily');

                for (let i = 0, len = grid.header_column_table.count(); i < len; i++){
                    let headerColumns = grid.header_column_table.data[i];

                    if (headerColumns[colIndex][columnAlias.kind] == 'column') {
                        let width = parseInt(grid.getTextWidth(canvas, headerColumns[colIndex][columnAlias.text], fontSize, fontFamilty));
                        if (width >= maxWidth) maxWidth = width;
                    }
                }
                for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                    let val = grid.getText(i, columnName);
                    let width = parseInt(grid.getTextWidth(canvas, val, fontSize, fontFamilty));
                    if (width >= maxWidth) maxWidth = width;
                }
                grid.classScroll.setColumnWidth(panelName, colIndex, maxWidth + 20); // 20 is Correction value
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }
        };
        //eventColumnResize
        const mouseMoveEvent = function (e) {
            if (eventDetail == 1) {
                e.stopPropagation();
                if (panelName == 'panel22') {
                    movedWidth = e.clientX - startX;

                    if (tableCell.dataset.name == '') {
                        let count = childList.length;
                        // @ts-ignore
                        let moveWidth = parseInt(movedWidth/count);
                        for (let i = 0, len = childList.length; i < len; i++) {
                            let cellIndex = childList[i];
                            let nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';

                            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        }
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                    else {
                        let cellIndex = tableCell.cellIndex;
                        let nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';

                        grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                }
                else if (panelName == 'panel20') {
                    movedWidth = e.clientX - startX;

                    if (tableCell.dataset.name == '') {
                        let count = childList.length;
                        // @ts-ignore
                        let moveWidth = parseInt(movedWidth/count);
                        for (let i = 0, len = childList.length; i < len; i++) {
                            let cellIndex = childList[i];
                            let nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';

                            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        }
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                    else {
                        let cellIndex = tableCell.cellIndex;
                        let nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';

                        grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                }
            }
        };
        //eventColumnResize
        const mouseUpEvent = function (e) {
            if (eventDetail == 1){
                e.stopPropagation();
                resizer.classList.remove('.tbs-grid-html-resizing');
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
        };

        const panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        panel.addEventListener('mousedown', mouseDownEvent, false);
    }

    // event_checkBox() { //type : header, content
    //     let selector = '#' + this.gridId;
    //     const grid = this;
    //     const checkDowntEvent = function(e) {
    //         if (e.target.tagName == 'INPUT') {
    //             let tr = e.target.parentNode.parentNode.parentNode;
    //             let rowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
    //
    //             if (e.target.checked) grid.view_table.updateByRowIndex(rowIndex, columnAlias.isChecked, false);
    //             else grid.view_table.updateByRowIndex(rowIndex, columnAlias.isChecked, true);
    //         }
    //     }
    //     document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').addEventListener('mousedown', checkDowntEvent, false);
    // }

    event_wheel() { //mouse wheel event
        let selector = '#' + this.gridId;
        const grid = this;
        let xScroll: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll: any = document.querySelector(selector + ' .tbs-grid-vertical-scroll');

        const mouseWheelEvent = function (e) {
            grid.editEnd();
            if (yScroll.style.display == '') {
                if (e.deltaY > 0) {
                    e.preventDefault();
                    e.returnValue = false;
                    grid.classScroll.setBarPositionByDirection('down');
                }
                else if (e.deltaY < 0) {
                    e.preventDefault();
                    e.returnValue = false;
                    grid.classScroll.setBarPositionByDirection('up');
                }
            }
            else if (xScroll.style.display == '') {
                if (e.deltaY > 0) {
                    e.preventDefault();
                    e.returnValue = false;
                    //grid.classScroll.setBarPositionByDirection('right');
                }
                if (e.deltaY < 0) {
                    e.preventDefault();
                    e.returnValue = false;
                    //this.classScroll.setBarPositionByDirection('left');
                }
            }
        };
        document.querySelector(selector).addEventListener('wheel', mouseWheelEvent);
    }

    event_scrollButton() {
        //mouse wheel event
        //onmousedown -> onmouseup -> click
        let selector = '#' + this.gridId;
        const grid = this;

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
                grid.classScroll.setBarPositionByDirection(type);
            }
        }
    }

    event_railClick() {
        let selector = '#' + this.gridId;
        const grid = this;
        const xWrapClickEvent = function (e) {
            let bar: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
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

                let movedLeft = grid.classScroll.getContentPanelLeft(bar.style.left);
                grid.classScroll.setContentPanelLeft(movedLeft);

                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }
        };
        const yWrapClickEvent = function (e) {
            let bar: any = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
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
                // let topRowIndex = grid.getFirstRowIndex('panel30');
                // if (grid.isLastRowIndex(topRowIndex)) bar.style.top = grid.verticalScroll.railSize + 'px';
                e = null;

                let moveCount = grid.verticalScroll.moveCount;
                /*
                @issue : parseInt(bar.style.top, 10) * moveCount < 0, topRowIndex always is 0.
                7 * 0.063 = 0.48  ceil => yMovecount.
            */
                let trTopIndex = Math.ceil(parseInt(bar.style.top, 10) * moveCount);
                bar = null;
                grid.classPanel30.setDataPanel(trTopIndex);
            }
        };
        //-----------------------------------------------------------------
        document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-wrap').addEventListener('click', xWrapClickEvent);
        document.querySelector(selector + ' .tbs-grid-vertical-scroll   .tbs-grid-vertical-scroll-wrap').addEventListener('click', yWrapClickEvent);
    }

    event_dragScrollBar() {
        // function : drag scroll bar
        let selector = '#' + this.gridId;
        const grid = this;

        let xWrap: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos: any = { left: 0, x : 0 }
        //== x scroll
        const xMouseDownEvent = function(e) {
            grid.editEnd();
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

            let header: any  = document.querySelector(selector + ' .tbs-grid-panel20');
            let content: any = document.querySelector(selector + ' .tbs-grid-panel30');
            let sum: any     = document.querySelector(selector + ' .tbs-grid-panel40');
            let footer: any  = document.querySelector(selector + ' .tbs-grid-panel50');

            let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
            grid.classScroll.setContentPanelLeft((left * -1 * ratio).toString());
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        }
        const xMouseUpEvent = function(e) {
            document.removeEventListener('mousemove', xMouseMoveEvent);
            document.removeEventListener('mouseup', xMouseUpEvent);
        }
        xBar.addEventListener('mousedown', xMouseDownEvent, false);

        //== y scroll
        const yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        const yPos = { top: 0, y : 0 }
        let actveTopRowIndex = -1;
        const yMouseDownEvent = function(e) {
            grid.editEnd();
            e.stopPropagation();

            actveTopRowIndex = -1;
            if (e.target.className != 'tbs-grid-vertical-scroll-bar') return;

            const yBar: any = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            if (grid.empty(yBar.style.top)) yPos.top = 0;
            else yPos.top = parseInt(yBar.style.top, 10);

            yPos.y = e.clientY;

            document.addEventListener('mousemove', yMouseMoveEvent);
            document.addEventListener('mouseup', yMouseUpEvent);
        }
        const yMouseMoveEvent = function(e) {
            let yBarTop = yPos.top + e.clientY - yPos.y;

            if (yBarTop < 0) yBarTop = 0;
            else if (yBarTop >= grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

            let topRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);

            if (yBarTop >= grid.verticalScroll.railSize) topRowIndex = grid.view_table.count() - grid.pageIntRowCount;
            //console.log(`topRowIndex ${topRowIndex} / yBarTop ${yBarTop} / railSize ${grid.verticalScroll.railSize} `);
            setTimeout(()=> { grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex); }, 10);
            setTimeout(()=> { grid.classPanel30.setDataPanel(topRowIndex); }, 50);
        }
        const yMouseUpEvent = function(e) {
            e.stopPropagation();
            document.removeEventListener('mousemove', yMouseMoveEvent);
            document.removeEventListener('mouseup', yMouseUpEvent);
        }
        yBar.addEventListener('mousedown', yMouseDownEvent, false);
    }

    tbs_moveCellLine(cell, rowIndex, cellIndex) {
        let selector = '#' + this.gridId;
        const grid = this;

        let input = document.querySelector(selector + ' .tbs-grid-input');
        let cellRect = cell.getBoundingClientRect();
        let content = document.querySelector(selector + ' .tbs-grid-panel30');
        let contentRect = content.getBoundingClientRect();
        let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        //let tableRect = table.getBoundingClientRect();

        if (cellRect.left < contentRect.left) {
            let value = contentRect.left - cellRect.left;
            grid.classScroll.setContentPanelLeftMove(value);
            grid.classScroll.setBarPosition(grid.code_horizontal);
        }
        else if (cellRect.right > contentRect.right) {
            let value = contentRect.right - cellRect.right;
            grid.classScroll.setContentPanelLeftMove(value);
            grid.classScroll.setBarPosition(grid.code_horizontal);
        }
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, cellIndex, cellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }

    isMovedPositionInConstRange(startX, startY, lastX, lastY) {
        let movedX = Math.abs(startX - lastX);
        let movedY = Math.abs(startY - lastY);
        return (movedX < this.mousePointRange && movedY < this.mousePointRange);
    }

    tbs_executeEvent(isUserFunction, eventType, param) {
        let selector = '#' + this.gridId;
        const grid = this;

        let e = null;
        let mode = null;
        let rowIndex = null;
        let cellIndex = null;
        let element = null;

        if (eventType == 'rowBounding') {
            element = param.element;
            rowIndex = param.rowIndex;

            const eventRow: any = {};
            eventRow.rowIndex    = rowIndex;
            eventRow.data        = grid.getRow(rowIndex);

            if (grid.notNull(grid.rowBounding)) { let flag = grid.rowBounding(grid, element, eventRow); } //user function call
        }
        else if (eventType == 'click' || eventType == 'dblclick') {
            e = param.e;
            mode = param.mode; //mouse, key
            rowIndex = param.rowIndex;
            cellIndex = param.cellIndex;

            let column = grid.getColumnByIndex(cellIndex);
            let columnName = grid.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text  = grid.getText(rowIndex, columnName);

            const eventRow: any = {};
            eventRow.rowIndex    = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName  = columnName;
            eventRow.value       = value;
            eventRow.text        = text;
            eventRow.data        = grid.getRow(rowIndex);
            if (eventType == 'click') {
                if (grid.notNull(grid.click)) { let flag = grid.click(grid, eventRow); } //user function call
            }
            else if (eventType == 'dblclick') {
                if (grid.notNull(grid.dblclick)) { let flag = grid.dblclick(grid, eventRow); } //user function call
            }
        }
    }

    tbs_getMaxRowIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        const grid = this;

        let maxRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxRowIndex = Math.max(...rowIndexArray);
        } else {
            maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
        }
        return maxRowIndex;
    }

    tbs_getMinRowIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        const grid = this;

        let minRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            minRowIndex = Math.min(...rowIndexArray);
        }
        else {
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
        }
        return minRowIndex;
    }

    tbs_getMaxCellIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        const grid = this;

        let maxCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        } else {
            maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
        }
        return maxCellIndex;
    }

    tbs_getMinCellIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        const grid = this;

        let minCellIndex, num;
        const rowIndexArray = [];

        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        } else {
            minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
        }
        return minCellIndex;
    }

    tbs_getMaxRowIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

        let lastY = this.lastY;
        let maxRowIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let len = (tableRows) ? tableRows.length : 0;

        let startRowIndex, lastRowIndex;
        startRowIndex = 0;
        lastRowIndex = len - 1;

        for (let i= startRowIndex; i < lastRowIndex + 1; i++) {
            let tableRow = tableRows[i];
            let tableRowIndex = i + 1;
            let rect = grid.getOffset(tableRow);
            let top = rect.top;
            if (lastY > top) maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return maxRowIndex;
    }

    tbs_getMinRowIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

        let lastY = this.lastY;
        let minRowIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let len = (tableRows) ? tableRows.length : 0;

        let startRowIndex, lastRowIndex;
        startRowIndex = 0;
        lastRowIndex = len - 1;

        for (let i = lastRowIndex; i >= startRowIndex; i--) {
            let tableRow = tableRows[i];
            let tableRowIndex = i + 1;
            let rect = grid.getOffset(tableRow);
            //console.log(`${panelName} i ${i} : rect.top ${rect.top} lastRowIndex ${lastRowIndex} : minRowIndex ${minRowIndex}  : lastY  ${this.lastY}`);
            let bottom = rect.top + tableRow.getBoundingClientRect().height;
            if (lastY < bottom) minRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);

        }
        return minRowIndex;
    }

    tbs_getMaxCellIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

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
            const tableCell: any = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[columnAlias.visible] == false) continue;
            let rect = grid.getOffset(tableCell);
            let rectLeft = rect.left;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
            if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex
    }

    tbs_getMinCellIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

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
            const tableCell: any = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[columnAlias.visible] == false) continue;
            let rect = grid.getOffset(tableCell);
            let rectRight= rect.left + tableCell.getBoundingClientRect().width;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
            if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    }

    getOffset(el) {
        let _x = 0;
        let _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

    tbs_moveNextRowCell(type) {
        //tbs_moveNextRowCell: none use => need to improve
        //type : left, right, up, down
        let selector = '#' + this.gridId;
        const grid = this;

        let rowIndex = -1;
        let cellIndex = -1;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
        let td: any = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (td == null) return;
        let tableRowIndex = td.parentNode.rowIndex;
        let dataRowIndex = this.classColumn.getRowIndexInTable(tableRowIndex);

        cellIndex = td.cellIndex;
        if (cellIndex == this.column_table.count() - 1 && dataRowIndex < this.view_table.count() - 1) {
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex + 1, dataRowIndex + 1, 0, 0);
            this.classPanel30.setDataPanel(_topRowIndex);

            let topRowIndex = this.getFirstRowIndex();
            let lastRowIndex = this.getLastRowIndex();

            let movedLeft = grid.classScroll.getContentPanelLeft(0);
            grid.classScroll.setContentPanelLeft(movedLeft);

            if (dataRowIndex == lastRowIndex - 1) this.classPanel30.setDataPanel(topRowIndex + 1);

            let input = document.querySelector(selector + ' .tbs-grid-input');
            this.input_focus();
        }
        else {
            this.tbs_moveCell(type);
            let topRowIndex = this.getFirstRowIndex();

            let movedLeft = grid.classScroll.getContentPanelLeft(0);
            grid.classScroll.setContentPanelLeft(movedLeft);

            grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex);

            let input = document.querySelector(selector + ' .tbs-grid-input');
            this.input_focus();
        }
    }

    tbs_moveCell(type) { //type : left, right, up, down
        let selector = '#' + this.gridId;
        const grid = this;

        let cellIndex = -1;

        let tableRows     = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRowIndex, dataRowIndex;

        let tableCell: any = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (grid.null(tableCell)) return;

        tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
        dataRowIndex =  parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
        cellIndex = tableCell.cellIndex;

        if (type == 'left') {
            let startCellIndex = cellIndex;
            cellIndex = cellIndex - 1;
            for (let i = cellIndex; i >= 0; i--) {
                let column = this.column_table.data[i];
                if (column[columnAlias.visible] == false) cellIndex -= 1;
                else break;
            }
            if (cellIndex < 0 || this.column_table.data[cellIndex][columnAlias.visible] == false) {
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, startCellIndex, startCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
                return;
            }

            let tableRow: any = tableRows[tableRowIndex - 1];
            let left1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().left;

            let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
            let left2 = window.pageYOffset + divContent.getBoundingClientRect().left;

            if (left1 < left2) {
                let moveWidth= left2 - left1;
                let table20: any  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                let table30: any  = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

                let hiddenSize = this.horizontalScroll.hiddenSize;
                let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                let sLeft;
                if (curLeft - moveWidth < 0) sLeft = 0 + 'px';
                else sLeft = -1 * curLeft + moveWidth + 'px';

                grid.classScroll.setContentPanelLeft(sLeft);
                grid.classScroll.setBarPosition(grid.code_horizontal);
            }
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (type == 'right') {
            let startCellIndex = cellIndex;
            cellIndex = cellIndex + 1;
            for (let i = cellIndex, len = this.column_table.count(); i < len; i++){
                let column = this.column_table.data[i]
                if (column[columnAlias.visible] == false) cellIndex += 1;
                else break;
            }
            if (cellIndex >= this.column_table.count()) cellIndex = startCellIndex;

            let tableRow: any = tableRows[tableRowIndex - 1];
            let right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;

            let panel30= document.querySelector(selector + ' .tbs-grid-panel30');
            let right2 = window.pageYOffset + panel30.getBoundingClientRect().right;

            if (right1 > right2) {
                let moveWidth = right1 - right2;
                let table20: any = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                let hiddenSize = this.horizontalScroll.hiddenSize;
                let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                let sLeft;
                if (curLeft + moveWidth > hiddenSize) sLeft = -1 * hiddenSize + 'px';
                else sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';

                grid.classScroll.setContentPanelLeft(sLeft);
                grid.classScroll.setBarPosition(grid.code_horizontal);
            }
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (type == 'up') {
            dataRowIndex -= 1;
            let topRowIndex = this.getFirstRowIndex();

            if (topRowIndex  < 0) topRowIndex = 0;
            if (dataRowIndex < 0) dataRowIndex = 0;

            if (topRowIndex <= dataRowIndex) {
                this.classRange.removeRange(0, -1);
                let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                this.classPanel30.setDataPanel(_topRowIndex);
            }
            else {
                this.classRange.removeRange(0, -1);
                let rowIndex: number = this.classScroll.setBarPositionByDirection('up');
                this.displayOneSelection(rowIndex, cellIndex);
            }
        }
        else if (type == 'down') {
            let topRowIndex = this.getFirstRowIndex();
            let lastRowIndex = this.getLastRowIndex();
            if (this.pageRowCount > this.pageIntRowCount) {
                if (tableRows.length == this.pageRowCount) {
                    if (dataRowIndex == lastRowIndex) {
                        if (dataRowIndex == this.view_table.count() - 1) {
                            this.classRange.removeRange(0, -1);
                            this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
                            this.displayOneSelection(dataRowIndex, cellIndex);
                        }
                        else {
                            dataRowIndex += 1;
                            this.classRange.removeRange(0, -1);
                            this.classScroll.setBarPositionByDirection('down', topRowIndex + 2);
                            this.displayOneSelection(dataRowIndex, cellIndex);
                        }
                    }
                    else if (dataRowIndex == lastRowIndex - 1) {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
                        this.displayOneSelection(dataRowIndex, cellIndex);

                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
                else {
                    if (dataRowIndex == lastRowIndex) {
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
            }
            else {
                if (tableRows.length == this.pageRowCount) {
                    if (dataRowIndex == lastRowIndex) {
                        if (dataRowIndex == this.view_table.count() - 1) {
                            this.classRange.removeRange(0, -1);
                            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                            this.classPanel30.setDataPanel(_topRowIndex);
                        }
                        else {
                            dataRowIndex += 1;
                            this.classRange.removeRange(0, -1);
                            this.classScroll.setBarPositionByDirection('down');
                            this.displayOneSelection(dataRowIndex, cellIndex);
                        }
                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
                else {
                    if (dataRowIndex == lastRowIndex) {
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
            }
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    getUserImageRoot(columnName: string) {
        let result = this.gridConfigOptions['userImageRoot'];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer.userImageRoot) result = renderer.userImageRoot;
        }
        return result;
    }

    getRenderer(columnName: string, property: string) {
        let result = null;
        if (arguments.length == 2) {
            if (this.renderer && this.renderer[columnName] && this.renderer[columnName][property])
                result = this.renderer[columnName][property];
        }
        else if (arguments.length == 1) {
            if (this.renderer && this.renderer[columnName]) result = this.renderer[columnName];
        }
        else {
            if (this.renderer) result = this.renderer;
        }
        return result;
    }

    setRenderer(renderer: any) {
        this.renderer = renderer;
    }

    getInfoRenderer(columnName, property) {
        let result = null;
        const renderer = this.infoRenderer;
        if (arguments.length == 2) {
            if (renderer && renderer[columnName] && renderer[columnName][property])
                result = renderer[columnName][property];
        }
        else if (arguments.length == 1) {
            if (renderer && renderer[columnName]) result = renderer[columnName];
        }
        else {
            if (renderer) result = renderer;
        }
        return result;
    }

    setInfoRenderer(renderer) { this.infoRenderer = renderer; }

    /**
     * Check Box Options
     */

    getTrueValue(columnName: string) { return this.getBooleanValue(columnName, 'trueValue' ); }

    getFalseValue(columnName: string){ return this.getBooleanValue(columnName, 'falseValue'); }

    getElseValue(columnName: string) { return this.getBooleanValue(columnName, 'elseValue' ); }

    getBooleanValue(columnName: string, valueType) {
        let result = this.gridConfigOptions[valueType];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer[valueType]) result = renderer[valueType];
        }
        return result;
    }

    reverseBoolean(value) {
        if      (value == 1)   return 0;
        else if (value == 0)   return 1;
        else if (value == '1') return '0';
        else if (value == '0') return '1';
        else if (value == 'y') return 'n';
        else if (value == 'n') return 'y';
        else if (value == 'Y') return 'N';
        else if (value == 'N') return 'Y';
        else if (value == true)  return false;
        else if (value == false) return true;
        else return null;
    }

    /**
     * Format Functions
     *
     */

    getFormatValue(col, value){
        let result: any = this.getFormat(col, value);
        return result.value;
    }

    getFormatText(col, value){
        let result: any = this.getFormat(col, value);
        return result.text;
    }

    getFormat(column, value) {
        const grid = this;

        let result: any = {};
        result.value = value;
        result.text = value;

        let colType = column[columnAlias.type];
        let format  = column[columnAlias.format];

        if (colType == CellType.number) {
            result = this.getFormatNumber(column, value);
            if (column[columnAlias.visible] == false
                || (column[columnAlias.showZero] == false && Number(result.value) == 0 )) {
                result.text = this.options[optionAlias.zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == CellType.combo) {
                const data = grid.renderer[column[columnAlias.name]].data;

                let key = data.valueName;
                let val = data.textName;

                for (let i = 0, len = data.rows.length; i < len; i++) {
                    const row = data.rows[i];
                    if (row[key] == value) {
                        result.text = row[val];
                        break;
                    }
                }
                return result;
            }
            else if (colType == 'date') {
                return this.getFormatDate(column, value);
            }
            else {
                result.text = value;
                return result;
            }
        }
    }

    getFormatNumber(column, value) {
        const grid = this;
        const formatWon = function (n) {
            //return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); safari error
            //return val.toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','); int type error
            let parts = n.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };

        // result = { value: , text: }
        let result: any = {};
        if      (grid.null(value))        result.value = null;
        else if (grid.trim(value) == '')  result.value = null;
        else if (grid.substr2(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
        else {
            if (column[columnAlias.currencyChar])  value = value.toString().replace(column[columnAlias.currencyChar], '');
            result.value = value.toString().replace(/,/gi, '')
        }

        if (grid.null(result.value)) {
            result.text = grid.options[optionAlias.zeroChar];
            return result;
        }
        result.text = result.value;

        let type = column[columnAlias.type];
        let scale = column[columnAlias.scale];

        let arr = scale.split(',');
        let decimalPoint = (arr.length > 1) ? this.trim(arr[1]) : '0';
        if (decimalPoint == '') decimalPoint = '0';

        let roundType = column[columnAlias.roundType];
        let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        let dpLen = 0; //decimal length

        if (decimalPoint == '0') {
            dpLen = 0;
            if      (roundType == 'round') { // @ts-ignore
                n = parseFloat(this.round(n, dpLen));
            }
            else if (roundType == 'ceil' ) { // @ts-ignore
                n = parseFloat(this.ceil(n, dpLen));
            }
            else if (roundType == 'floor') { // @ts-ignore
                n = parseFloat(this.floor(n, dpLen));
            }
            else { // @ts-ignore
                parseFloat(this.round(n, dpLen));
            }
            result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[columnAlias.fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? this.ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.floor(n, dpLen).toFixed(dpLen)
                        : this.round(n, dpLen).toFixed(dpLen);
                result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
            }
            else {
                dpLen = parseInt(decimalPoint);
                if (roundType == 'ceil') { // @ts-ignore
                    n = parseFloat(this.ceil(n, dpLen));
                }
                else if (roundType == 'floor') { // @ts-ignore
                    n = parseFloat(this.floor(n, dpLen))
                }
                else { // @ts-ignore
                    n = parseFloat(this.round(n, dpLen));
                }
                // n =   (roundType == 'ceil')  ? parseFloat(this.ceil(n, dpLen))
                //     : (roundType == 'floor') ? parseFloat(this.floor(n, dpLen))
                //         : parseFloat(this.round(n, dpLen));
                result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[optionAlias.zeroChar] != '') result.text = optionAlias.zeroChar;
        }
        let regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',',  column[columnAlias.thousandChar]);
        result.text = result.text.replaceAll('.',  column[columnAlias.decimalChar]);
        if (column[columnAlias.currencyChar]) result.text = column[columnAlias.currencyChar] + result.text
        return result;
    }

    getFormatDate(column, value) {
        const grid = this;
        let result: any = {};
        value = value.replace(/\./gi, '');
        value = value.replace(/\-/gi, '');
        value = value.replace(/\//gi, '');

        result.value = this.trim(value);
        result.text = result.value;

        //date : 8 char
        if (result.value == '' || result.value.length != 8) {
            result.value = '';
            result.text = '';
            return result;
        }
        let format = column[columnAlias.format];

        // date char : . - /
        let formatText = format.replace(/\./gi, '');
        formatText = formatText.replace(/\-/gi, '');
        formatText = formatText.replace(/\//gi, '');

        let dateText = result.text;
        let yyyy = '';
        let MM = '';
        let dd = '';

        if (formatText == 'yyyyMMdd') {
            yyyy = grid.substr2(result.text,0, 4);
            MM = grid.substr2(result.text,4, 2);
            dd = grid.substr2(result.text,6, 2);
        }
        else if (formatText == 'ddMMyyyy') {
            yyyy = grid.substr2(result.text, 4, 4);
            MM = grid.substr2(result.text, 2, 2);
            dd = grid.substr2(result.text, 0, 2);
        }
        else if (formatText == 'MMddyyyy') {
            yyyy = grid.substr2(result.text, 4, 4);
            MM = grid.substr2(result.text, 0, 2);
            dd = grid.substr2(result.text, 2, 2);
        }

        if (new Date(yyyy + '-' + MM + '-' + dd).toString() == "Invalid Date") {
            result.value = '';
            result.text = '';
            return result;
        }

        format = format.replace('yyyy', yyyy);
        format = format.replace('MM', MM);
        format = format.replace('dd', dd);

        result.value = format;
        result.text = format;
        return result;
    }

    /**
     *  Group Functions
     */

    showGroupPanel() { this.classGroup.showGroupPanel(); }
    hideGroupPanel() { this.classGroup.hideGroupPanel(); }
    setGroupColumns(groupColumns){
        this.group_column_table.remove();
        groupColumns.map(column => this.group_column_table.insert(this.copyJson(column)))
    }
    setSortColumns(sortColumns){
        this.sort_column_table.remove();
        sortColumns.map(column => this.sort_column_table.insert(this.copyJson(column)))
    }
    /**
     * Tree Functions
     */

    //setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
    setTreeSortColumn(sortColumn) { this.classTree.setTreeSortColumns(sortColumn); }

    /**
     *  Panel10 Functions
     */

    showToolbarPanel() { this.classPanel10.showToolbarPanel(); }
    hideToolbarPanel() { this.classPanel10.hideToolbarPanel(); }

    showToolbarButtons(buttonType) { this.classPanel10.showToolbarButtons(buttonType); }
    hideToolbarButtons(buttonType) { this.classPanel10.hideToolbarButtons(buttonType); }

    showFilterPanel() { this.classFilter.showFilterPanel(); }
    hideFilterPanel() { this.classFilter.hideFilterPanel(); }

    showSortPanel() { this.classSort.showSortPanel(); }
    hideSortPanel() { this.classSort.hideSortPanel(); }

    /**
     *  TbsGrid Config
     */

    setGridConfig(tbsGridConfig) { this.gridConfig = tbsGridConfig;	}

    /**
     * Column Functions
     */

    setFixedColumn(fixedColumnIndex) { this.classColumn.setFixedColumn(fixedColumnIndex); }
    removeFixedColumn() { this.classColumn.removeFixedColumn(); }

    /**
     * Display grid
     */

    apply() {
        let selector = '#' + this.gridId;
        const grid = this;

        let topRowIndex = grid.getFirstRowIndex();
        grid.classPanel20.setDataPanel(topRowIndex);
        grid.classPanel30.setDataPanel(topRowIndex);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    }

    /**
     * Main Functions
     */

    createHtml() {
        let selector = '#' + this.gridId;
        const grid = this;

        let elementRoot = document.querySelector(selector);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid" tabindex="1" style=""></div>');

        let elementGrid = elementRoot.querySelector('.tbs-grid');
        grid.classPanel10.createHtml(elementGrid);
        grid.classPanel80.createHtml(elementGrid);
        grid.classPanel90.createHtml(elementGrid);

        elementGrid.insertAdjacentHTML('beforeend', '<div class="tbs-grid-main"><div class="tbs-grid-wrap" /></div>');
        let elementMain = document.querySelector(selector + ' .tbs-grid-main');
        let elementWrap = document.querySelector(selector + ' .tbs-grid-wrap');

        grid.classPanel20.createHtml(elementWrap);
        grid.classPanel70.createHtml(elementWrap);
        grid.classPanel40.createHtml(elementWrap);
        grid.classPanel30.createHtml(elementWrap);
        grid.classPanel50.createHtml(elementWrap);

        grid.classPanelBase.createEtcHtml(elementMain);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid-layer" style="left:30000px;display: none;"></div>');
        this.topLineDiv    = document.querySelector(selector + ' .tbs-grid-top-line');
        this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
        this.leftLineDiv   = document.querySelector(selector + ' .tbs-grid-left-line');
        this.rightLineDiv  = document.querySelector(selector + ' .tbs-grid-right-line');
    }

    setToolbar(toolbar) {
        const grid = this;

        if (toolbar == undefined) return;
        //grid.showToolbarPanel = (toolbar.visible != undefined) ? grid.options.showToolbarPanel = toolbar.visible : grid.options.showToolbarPanel;
    }

    setDataColumns(columns) {
        columns.map(column => {
            const dataRow = {}
            dataRow[columnAlias.name] = column[columnAlias.name];
            dataRow[columnAlias.dataType] = column[columnAlias.dataType];
            this.field_table.insert(dataRow);
        });
    }

    setGrid(columns, options = {}) {
        const grid = this;

        grid.createOption(options);

        grid.columns = grid.copyJson(columns);

        grid.classColumn.createColumns(grid.columns); // add columns(first) or add column

        grid.classColumn.createColumnTable();

        grid.classHeader.createHeaderColumns();

        grid.classHeader.createHeaderColumnTable();

        grid.createGrid(grid.column_table.data);

        grid.classPanel70.setDataPanel();
    }

    createGrid(column) {
        const grid = this;

        this.createHtml();
        this.classPanel10.createTable();
        this.classPanel80.createTable();
        this.classPanel90.createTable();

        this.classPanel20.createTable();
        this.classPanel70.createTable();
        this.classPanel40.createTable();
        this.classPanel50.createTable();

        this.classScroll.setPanelSize();
        this.classPanel30.createTable();

        this.horizontalScroll.setScroll(grid.code_horizontal);
        this.tbs_addEventAll();
    }

    updateGrid(column) {
        let selector = '#' + this.gridId;
        const grid = this;

        this.classPanel20.createTable();
        this.classPanel70.createTable();
        this.classPanel40.createTable();
        this.classPanel50.createTable();

        this.classScroll.setPanelSize();
        this.classPanel30.createTable();

        this.horizontalScroll.setScroll(grid.code_horizontal);;
        //this.tbs_addEventAll();
    }

    getTextWidth(canvas, text, fontSize, fontFamily) {
        let selector = '#' + this.gridId;
        const grid = this;

        let context = canvas.getContext("2d");
        context.fontSize = fontSize;
        context.fontFamily = fontFamily;
        let metrics = context.measureText(text);
        return metrics.width;
    };
    getTextWidth2(context, text) {
        let selector = '#' + this.gridId;
        const grid = this;

        let metrics = context.measureText(text);
        return metrics.width;
    };
    setColumnAutoWidth(){
        let selector = '#' + this.gridId;
        const grid = this;

        let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        let arr = [];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) arr[x] = 0;

        let fontSize = grid.getConfigFont('fontSize');
        let fontFamilty = grid.getConfigFont('fontFamily');

        for (let i = 0, len = grid.header_column_table.data.length; i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                if (grid.header_column_table.data[i][x][columnAlias.kind] == 'column') {
                    let width = parseInt(grid.getTextWidth(canvas, grid.header_column_table.data[i][x][columnAlias.text], fontSize, fontFamilty));
                    if (width >= arr[x]) {
                        arr[x] = width;
                    }
                }
            }
        }
        for (let i = 0, len = grid.view_table.count(); i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                let columnName = grid.getColumnName(x);
                let column = grid.getColumn(columnName);
                let val = grid.getValueByColumnIndex(i, x);
                let width = parseInt(grid.getTextWidth(canvas, grid.getFormatText(column, val), fontSize, fontFamilty));

                if (width >= arr[x]) arr[x] = width;
            }
        }
        for (let x = 0, len = grid.column_table.count(); x < len; x++) arr[x] += 20;
        grid.classScroll.setAllColumnWidth(arr);
        grid.classPanel20.setDataPanel();
    }
    setRowHeight(type, rowHeight) {
        let selector = '#' + this.gridId;
        const grid = this;

        if (type == undefined) {
            this.setRowHeight('header' , rowHeight);
            this.setRowHeight('content', rowHeight);
            this.setRowHeight('top'    , rowHeight);
            this.setRowHeight('footer' , rowHeight);
        }
        else {
            if (type == 'header') {
                this.headerRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'content') {
                this.rowHeight = rowHeight;
                (document.querySelector(selector + ' .tbs-grid-input') as any).style.height = rowHeight + 'px';
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'top') {
                this.topRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'footer') {
                this.footerRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }

        }
    }
    setGridModePage() {
        let selector = '#' + this.gridId;
        const grid = this;

        let page: any = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';

        grid.classPage.pageRowCount = grid.classPage.options['pageRowCount'];
    }
    setGridModePagenation() {
        let selector = '#' + this.gridId;
        const grid = this;

        const page: any = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';
    }
    setData(data: any, openDepth: number = 0, isFirst: boolean = true) {
        const grid = this;

        if (grid.group_column_table.count() > 0) grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == GridMode.tree) grid.classTree.setTreeData(data, openDepth, isFirst);
        else grid.setGridData(data, isFirst);
    }
    setGridMode(gridMode) {
        let selector = '#' + this.gridId;
        const grid = this;

        grid.grid_mode = grid.trim(gridMode);

        if (grid.grid_mode == GridMode.page) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePage();
        }
        else if (grid.grid_mode == GridMode.pagination) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePagenation();
        }
        else if (grid.grid_mode == GridMode.tree) {}
    }
    setGridData(data, isFirst) {
        let selector = '#' + this.gridId;
        const grid = this;

        if (data == undefined) return;

        // this.data_insert = [];
        // this.data_update = [];
        // this.data_delete = [];
        if (isFirst) {
            this.source_table.remove();
            this.view_table.remove();
            this.data_select_panel30 = [];
            this.data_select_panel31 = [];
        }

        for (let i = 0, len = data.length; i < len; i++) {
            const dataRow = data[i];

            const source = {};
            const columns: any[] = grid.column_table.selectRows();
            for (let x = 0, len = columns.length; x < len; x++) {
                const column = columns[x];
                let columnName  = column[columnAlias.name];
                source[columnName] = this.null(dataRow[columnName]) ? null : this.getFormatValue(column, dataRow[columnName]);
            }

            const dataColumns: any[] = grid.field_table.selectRows();
            for (let x = 0, len = dataColumns.length; x < len; x++) {
                const column = dataColumns[x];
                let columnName  = column[columnAlias.name];
                source[columnName] = dataRow[columnName];
            }

            this.source_table.insert(source);
            this.view_table.insert(grid.copyJson(source));
            if (grid.grid_mode == GridMode.page) this.page_table.insert(grid.copyJson(source));
        }

        /* create top_data */
        grid.classTop.setTopData();

        /* create footer_data */
        grid.classFooter.setFooterData();

        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();

        (document.querySelector(selector + ' .tbs-grid-panel10-filter-input') as any).value = '';
        this.classRange.removeRange(0, -1);
        let _topRowIndex = this.classRange.selectRange(0, 0, 0, 0);

        if (data.length == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
        }
        else {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = data.length;
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
    }
    refreshRefData() {
        // Data Init
        let selector = '#' + this.gridId;
        const grid = this;

        let data = this.view_table.data;
        this.data_select_panel30 = [];  // select color : value 0, 1
        this.data_select_panel31 = [];	// view - filter

        for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
            let itemSelect = {};
            let itemLeftSelect = {};
            let itemLeftView = {};

            itemSelect[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];
            itemSelect = new Uint8ClampedArray([]); //new

            itemLeftView[columnAlias.rowMode] = ''; //insert, update, delete
            itemLeftView[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];

            itemLeftSelect[columnAlias.rowMode] = 0; //insert, update, delete
            itemLeftSelect[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];

            this.data_select_panel30.push(itemSelect);
            this.data_select_panel31.push(itemLeftSelect);
        }
        this.classRange.removeRange(0, -1);
        this.classPanel30.setDataPanel(0);
    }

    /**
     * Columns API.
     */
    getColumn(name, table?) { return this.isNull(table, this.column_table).selectRow(columnAlias.name, name); }
    getColumns(table?) { return this.isNull(table, this.column_table).select();  }
    getColumnByIndex(columnIndex, table?) { return this.isNull(table, this.column_table).selectRowByRowIndex(columnIndex); }
    getColumnName(columnIndex, table?) { return this.isNull(table, this.column_table).selectValue(columnIndex, columnAlias.name); }
    getColumnIndex(columnName, table?) { return this.isNull(table, this.column_table).selectRowIndex(columnAlias.name, columnName); }
    setColumn(columnName, property, value, table?) { this.isNull(table, this.column_table).updateRow(columnName, property, value); }

    /**
     * Filter Columns
     */
    getFilterColumn(columnName) { return this.getColumn(columnName, this.filter_column_table); }
    getFilterColumnName(columnIndex) { return this.getColumnName(columnIndex, this.filter_column_table); }
    getFilterColumnIndex(columnName) { return this.getColumnIndex(columnName, this.filter_column_table); }

    /**
     * Columns API
     */
    setTopColumns(topColumns) { this.classTop.setTopColumns(topColumns); }
    setFooterColumns(footerColumns) { this.classFooter.setFooterColumns(footerColumns); }

    /**
     * Header Columns API.
     */
    getHeaderColumn(rowIndex, columnIndex) { return this.classHeader.getHeaderColumn(rowIndex, columnIndex); }
    getHeaderColumnByNumber(num) { return this.classHeader.getHeaderColumnByNumber(num); }

    addColumn(addColumn, targetColumnIndex, orderType) { this.classColumn.addColumn(addColumn, targetColumnIndex, orderType);}
    removeColumn(targetColumnIndex) { this.classColumn.removeColumn(targetColumnIndex); }
    setHeaderProperty(rowIndex, colIndex, property, value) { this.classHeader.setHeaderProperty(rowIndex, colIndex, property, value); }

    /**
     * Row functions
     */

    getPageRowCount(panelName) { return this.pageRowCount; }

    getTopRowIndex(panelName, topRowIndex) {
        // function : Validate Top rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : topRowIndex
        let selector = '#' + this.gridId;
        const grid = this;

        if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
            let rowCount = this.getRowCount();
            if (this.pageRowCount > this.pageIntRowCount) {
                if (topRowIndex > (rowCount - this.pageRowCount + 1)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            else {
                if (topRowIndex > (rowCount - this.pageRowCount)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            if (topRowIndex < 0) topRowIndex = 0;
        }
        return topRowIndex;
    }

    getBottomRowIndex(panelName, topRowIndex) {
        // function : Validate Bottom rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : bottomRowIndex
        let selector = '#' + this.gridId;
        const grid = this;
        let bottomRowIndex = 0;

        bottomRowIndex = topRowIndex + this.pageRowCount - 1;
        if (bottomRowIndex > this.getRowCount() - 1) bottomRowIndex = this.getRowCount() - 1;

        return bottomRowIndex;
    }

    createRow(row) {
        // let selector = '#' + this.gridId;
        // const grid = this;
        //
        // let columns = this.column_table.data;
        // this.maxRowId = this.maxRowId + 1;
        // let rowId = this.maxRowId;
        //
        // const source: any = {};
        // source[columnAlias.rowId] = rowId;
        // source[columnAlias.rowMode] = 'I';
        //
        // const view: any = {};
        // view[columnAlias.rowId] = rowId;
        // view[columnAlias.rowMode] = 'I';
        //
        // for (let i = 0, len = columns.length; i < len; i++) {
        //     let column = columns[i];
        //     let columnName = column[columnAlias.name];
        //     source[columnName] = this.null(row[columnName]) ? null : row[columnName];
        //     view[columnName]   = this.null(row[columnName]) ? null : row[columnName];
        // }
        // return { source : source, view : view };
    }

    /**
     * view table rows
     */
    getRowCount(table?) { return this.isNull(table, this.view_table).count(); }
    getRow(rowIndex, table?) { return this.isNull(table, this.view_table).selectRowByRowIndex(rowIndex); }
    getRows(startRowIndex?, endRowIndex?, table?) { return this.isNull(table, this.view_table).selectRowRange(startRowIndex, endRowIndex); }
    getRowByRowId(rowId, table?) { return this.isNull(table, this.view_table).selectRowByRowId(rowId); }
    getRowIndexByRowId(rowId, table?) { return this.isNull(table, this.view_table).selectRowIndexByRowId(rowId); }

    getCheckedRows() { return this.view_table.selectRows(columnAlias.isChecked, true); }
    getSelectedRows() {
        const result = [];
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.isSelectedCell31(i, 0) == 1) result.push(this.view_table.selectRowByRowIndex(i));
        }
        return result;
    }
    getSelectedRowsIndexArray() {
        let result = [];
        for (let rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
        }
        return result;
    }

    getChangedRowsData() {
        let result = [];
        let rows = this.getDeletedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getUpdatedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getInsertedRowsData();
        for (let i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        return result;
    }
    getDeletedRowsData() {
        let rows = this.data_delete;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            let item = JSON.parse(JSON.stringify(row));
            item[columnAlias.rowId] = row[columnAlias.rowId];
            item[columnAlias.rowMode]  = row[columnAlias.rowMode];
            result.push(item);
        }
        return result;
    }
    getUpdatedRowsData() {
        let rows = this.source_table.data;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            if (row.mode == 'U') {
                let item = JSON.parse(JSON.stringify(row));
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode] = row[columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    }
    getInsertedRowsData() {
        let rows = this.source_table.data;
        let result = [];
        for (let i = 0, len = rows.length; i < len; i++) {
            let row = rows[i];
            if (row[columnAlias.rowMode] == 'I') {
                let item = JSON.parse(JSON.stringify(row));
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode ] = row[columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    }

    addRow(row, type = 'bottom') {
        // //type : top, bottom, up, down
        // let selector = '#' + this.gridId;
        // const grid = this;
        //
        // let columns = this.column_table.data;
        // let rowId = this.maxRowId + 1;
        // this.maxRowId = rowId;
        //
        // let json = this.createRow(row);
        // let source = json.source;
        // let data30 = json.data30;
        //
        // let rowIndexList = this.getSelectedRowsIndexArray();
        // if (rowIndexList.length == 0) type = 'bottom';
        //
        // if (type == 'top') {
        //     this.source_table.data.unshift(source);
        //     this.view_table.data.unshift(data30);
        //
        //     let topRowIndex = 0;
        //
        //     this.verticalScroll.setScroll(grid.code_vertical);
        //     this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
        //     this.classRange.removeRange(0, -1);
        //     let _topRowIndex = this.classRange.selectRange(topRowIndex, topRowIndex);
        //     this.classPanel30.setDataPanel(topRowIndex);
        //     return;
        // }
        // if (type == 'bottom') {
        //     this.source_table.insert(source);
        //     this.view_table.insert(data30);
        //
        //     let dataLength = this.view_table.count();
        //     let topRowIndex = this.getFirstRowIndex();
        //
        //     topRowIndex = dataLength - this.pageRowCount;
        //     if (topRowIndex < 0) topRowIndex = 0;
        //     if (this.pageRowCount > this.pageIntRowCount) {
        //         topRowIndex = topRowIndex + 1;
        //     }
        //     this.verticalScroll.setScroll(grid.code_vertical);
        //     this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
        //     this.classRange.removeRange(0, -1);
        //     let _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
        //     this.classPanel30.setDataPanel(topRowIndex);
        //     return;
        // }
        // if (type == 'up') {
        //     let minRowIndex = rowIndexList[0];
        //     this.source_table.insertBefore(source, minRowIndex);
        //     this.view_table.insertBefore(data30, minRowIndex);
        //
        //     let lastRowIndex = this.view_table.count() - 1;
        //     let topRowIndex = this.getFirstRowIndex();
        //
        //     this.verticalScroll.setScroll(grid.code_vertical);
        //     this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
        //     this.classRange.removeRange(0, -1);
        //     let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
        //     this.classPanel30.setDataPanel(_topRowIndex);
        //     return;
        // }
        // if (type == 'down') {
        //     let minRowIndex = rowIndexList[0];
        //     let addRowIndex = minRowIndex + 1;
        //     if (minRowIndex == this.view_table.count() - 1) {
        //         this.source_table.insert(source);
        //         this.view_table.insert(data30);
        //         addRowIndex = minRowIndex + 1;
        //     }
        //     else {
        //         this.source_table.insertBefore(source, addRowIndex);
        //         this.view_table.insertBefore(data30, addRowIndex);
        //     }
        //
        //     this.classRange.removeRange(0, -1);
        //     let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
        //     this.classPanel30.setDataPanel(_topRowIndex);
        //
        //     if (this.pageRowCount > this.pageIntRowCount) {
        //         if (addRowIndex == this.getLastRowIndex()) {
        //             this.tbs_moveCell('down');
        //
        //             this.classRange.removeRange(0, -1);
        //             let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
        //             this.classPanel30.setDataPanel(_topRowIndex);
        //
        //             this.verticalScroll.setScroll(grid.code_vertical);
        //             this.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        //         }
        //     }
        // }
    }
    removeRows(rows) {
        // // let rows = this.getSelectedRows();
        // let selector = '#' + this.gridId;
        // const grid = this;
        //
        // if (this.null(rows) || rows.length == 0) return;
        //
        // let data = this.view_table.select();
        //
        // // before delete, find next, prev rowid (default. next rowid)
        // let prevRowId = -1;
        // let nextRowId = -1;
        // let nextRowIndex = -1;
        //
        // for (let i = 0; i < data.length; i++) { 	// find next rowIndex
        //     if (data[i][columnAlias.rowId] == rows[rows.length - 1][columnAlias.rowId]) { nextRowIndex = i + 1; break; }
        // }
        //
        // nextRowIndex = (nextRowIndex > data.length - 1) ? nextRowIndex - 1 : nextRowIndex;
        // nextRowId = data[nextRowIndex][columnAlias.rowId];
        //
        // //Data 삭제
        // data = this.source_table.data;
        // for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][columnAlias.rowId] == rows[x][columnAlias.rowId]) { data.splice(i, 1); break; } } }
        //
        // data = this.view_table.select();
        // for (let i = data.length - 1; i >= 0; i--) {
        //     for (let x = rows.length - 1; x >= 0; x--) {
        //         if (data[i][columnAlias.rowId] == rows[x][columnAlias.rowId]) { data.splice(i, 1); break; }
        //     }
        // }
        // data = this.data_delete;
        // for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][columnAlias.rowId] == rows[x][columnAlias.rowId]) { data.splice(i, 1); break; } } }
        // for (let i = 0; i < rows.length; i++) {
        //     if (rows[i][columnAlias.rowMode] == '' || rows[i][columnAlias.rowMode] == 'U') { rows[i][columnAlias.rowMode] = 'D'; data.push(rows[i]); }
        // }
        // //==============================================
        // let deleteFirstRowIndex = rows[0].rowIndex;
        // let topRowIndex = this.getFirstRowIndex();
        // //==============================================
        // this.refreshRefData();
        // //==============================================
        // data = this.view_table.select();
        // let realStartRowIndex = deleteFirstRowIndex;
        // if (realStartRowIndex < 0) realStartRowIndex = 0;
        // if (realStartRowIndex > this.view_table.count() - 1) {
        //     realStartRowIndex = this.view_table.count() - 1;
        // }
        // grid.verticalScroll.setScroll(grid.code_vertical);
        // grid.classRange.removeRange(0, -1);
        // let _topRowIndex = grid.classRange.selectRange(realStartRowIndex, realStartRowIndex, 0, 0);
        // grid.classPanel30.setDataPanel(_topRowIndex);
        //
        // grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        //
        // if (grid.pageRowCount > grid.pageIntRowCount) {
        //     let lastRowIndex = grid.getLastRowIndex();
        //     if (realStartRowIndex == lastRowIndex) {
        //         grid.classScroll.setBarPositionByDirection('down');
        //         grid.verticalScroll.setScroll(grid.code_vertical);
        //         grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        //
        //     }
        // }
    }

    /**
     * source table rows
     */
    getSourceRowCount() { return this.getRowCount(this.source_table); }
    getSourceRow(rowIndex) { return this.getRow(rowIndex, this.source_table); }
    getSourceRows(startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.source_table); }
    getSourceRowByRowId(rowId) { return this.getRowByRowId(rowId, this.source_table); }
    getSourceRowIndexByRowId(rowId) { return this.getRowIndexByRowId(rowId, this.source_table); }

    /**
     * top table rows
     */
    getTopRowCount() { return this.getRowCount(this.top_table); }
    getTopRow(rowIndex) { return this.getRow(rowIndex, this.top_table); }
    getTopRows(startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.top_table); }
    getTopRowByRowId(rowId) { return this.getRowByRowId(rowId, this.top_table); }
    getTopRowIndexByRowId(rowId) { return this.getRowIndexByRowId(rowId, this.top_table); }

    /**
     * footer table rows
     */
    getFooterRowCount() { return this.getRowCount(this.footer_table); }
    getFooterRow(rowIndex) { return this.getRow(rowIndex, this.footer_table); }
    getFooterRows(startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.footer_table); }
    getFooterRowByRowId(rowId) { return this.getRowByRowId(rowId, this.footer_table); }
    getFooterRowIndexByRowId(rowId) { return this.getRowIndexByRowId(rowId, this.footer_table); }

    /**
     * tree table rows
     */
    getTreeRowCount() { return this.getRowCount(this.tree_table); }
    getTreeRow(rowIndex) { return this.getRow(rowIndex, this.tree_table); }
    getTreeRows(startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.tree_table); }
    getTreeRowByRowId(rowId) { return this.getRowByRowId(rowId, this.tree_table); }
    getTreeRowIndexByRowId(rowId) { return this.getRowIndexByRowId(rowId, this.tree_table); }

    /**
     * Data Value, Text
     */

    getValue(rowIndex, columnName, table?: any) { return this.isNull(table, this.view_table).selectValue(rowIndex, columnName); }
    getValueByColumnIndex(rowIndex, columnIndex, table?: any) {
        let columnName = this.getColumnName(columnIndex, table);
        return this.getValue(rowIndex, columnName, table);
    }

    getText(rowIndex, columnName, table?) {
        const column = this.getColumn(columnName); // column_table
        let val = this.getValue(rowIndex, columnName, table);
        return this.getFormatText(column, val);
    }
    getTextByIndex(rowIndex, columnIndex, table) {
        let columnName = this.getColumnName(columnIndex); // column_table
        return this.getText(rowIndex, columnName, table);
    }

    setValue(rowIndex, columnName, value) {
        const grid = this;

        let cellIndex = this.getColumnIndex(columnName);
        let oldValue = this.view_table.data[rowIndex][columnName];
        let mode = this.view_table.data[rowIndex][columnAlias.rowMode];

        let result = this.getFormat(this.column_table.selectRowByRowIndex(cellIndex), value);
        if (mode == 'I') {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, columnAlias.rowMode, 'I');

                let rowId = grid.view_table.selectValue(rowIndex, columnAlias.rowId);

                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, columnAlias.rowMode, 'I');
            }
        }
        else {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, columnAlias.rowMode, 'U');

                let rowId = grid.view_table.selectValue(rowIndex, columnAlias.rowId);

                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, columnAlias.rowMode, 'U');
            }
        }
    }
    setValueByColumnIndex(rowIndex, cellIndex, value) {
        rowIndex = parseInt(rowIndex);
        cellIndex = parseInt(cellIndex);
        let columnName = this.getColumnName(cellIndex);
        this.setValue(rowIndex, columnName, value);
    }

    /** info_column_table */
    getInfoValue(columnName, property) {
        const dataRow = this.info_column_table.selectRow(columnAlias.name, columnName);
        return dataRow[property];
    }
    setInfoValue(columName, property, value) { this.info_column_table.update(columName, property, value); }

    /**
     * Range Functiopns
     */
    setRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }
    selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        if (this.view_table.count() == 0 || this.column_table.count() == 0) return;
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * Options
     */

    createOption(options) { this.setOptions(options); }
    setOption(optionName, optionValue) { this.options[optionName] = optionValue; }
    setOptions(options) { for (let key in options) this.setOption(key, options[key]); }

    /**
     * Page
     */

    setPageOption(optionName: string, optionValue) { this.classPage.setPageOption(optionName, optionValue); }

    /**
     * Dom Lib
     */

    addUserClass(element: any, className: string) { TbsGridDom.addUserClass(element, className); }
    removeUserClass(element: any) { TbsGridDom.removeUserClass(element); }

    /**
     * Export Excel
     */

    exportExcel(options: any) {
        const excel = new TbsGridExcel(this);
        excel.exportExcel(options);
    }
}



