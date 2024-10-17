import {TbsGrid} from "./tbs.grid";
import {ColumnAlias} from "./tbs.grid.types";

export class TbsGridScrollBase {

    grid: TbsGrid;
    selector: string;

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }

    setPanelSize() {
        let selector = this.selector;
        const grid = this.grid;

        const rectGrid: any= document.querySelector(selector).getBoundingClientRect();
        const main: any    = document.querySelector(selector + ' .tbs-grid-main');

        const panel20: any = document.querySelector(selector + ' .tbs-grid-panel20');
        const panel22: any = document.querySelector(selector + ' .tbs-grid-panel22');

        const panel40: any = document.querySelector(selector + ' .tbs-grid-panel40');
        const panel42: any = document.querySelector(selector + ' .tbs-grid-panel42');

        const panel72: any = document.querySelector(selector + ' .tbs-grid-panel72');

        const group20: any = document.querySelector(selector + ' .tbs-grid-group20');
        const group21: any = document.querySelector(selector + ' .tbs-grid-group21');

        const group30: any = document.querySelector(selector + ' .tbs-grid-group30');
        const group31: any = document.querySelector(selector + ' .tbs-grid-group31');

        const group40: any = document.querySelector(selector + ' .tbs-grid-group40');
        const group41: any = document.querySelector(selector + ' .tbs-grid-group41');

        const group50: any = document.querySelector(selector + ' .tbs-grid-group50');
        const group51: any = document.querySelector(selector + ' .tbs-grid-group51');

        const group70: any = document.querySelector(selector + ' .tbs-grid-group70');
        const group71: any = document.querySelector(selector + ' .tbs-grid-group71');

        let mainHeight = rectGrid.height;

        if (grid.options.showToolbarPanel) mainHeight -= 25;
        if (grid.options.showGroupPanel)   mainHeight -= 33; // panel80
        if (grid.options.showSortPanel)    mainHeight -= 33; // panel90
        //if (grid.options.showFilterPanel) mainHeight -= grid.rowHeight * 2; // panel70

        main.style.height = `${mainHeight}px`;

        // header : group21, group22 group20
        const rectTable21: any= document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table').getBoundingClientRect();

        // Consider hidden columns
        const rectTable20: any= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();

        let height = parseInt(rectTable20.height);

        let fixedColumnsWidth = grid.classScroll.getFixedColumnsWidth();

        if (grid.fixedColumnIndex != -1) {
            group21.style.left = '0px';
            group21.style.top  = '0px';
            group21.style.bottom = height + 'px';

            group21.style.width  = parseInt(rectTable21.width) + parseInt(String(fixedColumnsWidth)) + 'px';
            group21.style.height = height + 'px';

            group20.style.left   = parseInt(rectTable21.width) + parseInt(String(fixedColumnsWidth))  + 'px';
            group20.style.height = height + 'px';

            panel22.style.left   = parseInt(rectTable21.width)  + 'px';
            panel22.style.width  = parseInt(String(fixedColumnsWidth)) + 'px';
            panel22.style.height = height + 'px';
        }
        else {
            group21.style.left = '0px';
            group21.style.top  = '0px';
            group21.style.bottom = height + 'px';

            group21.style.width  = parseInt(rectTable21.width)  + 'px';
            group21.style.height = height + 'px';

            group20.style.left   = parseInt(rectTable21.width)  + 'px';
            group20.style.height = height + 'px';

            panel22.style.width  = '0px';
            panel22.style.height = '0px';
        }
        // Filter panel
        if (grid.options.showFilterPanel) {
            const rectTable70 = document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').getBoundingClientRect();
            if (grid.fixedColumnIndex != -1) {
                group71.style.top    = height + 'px';
                group71.style.width  = group21.style.width;
                group71.style.height = parseInt(String(rectTable70.height)) + 'px';

                group70.style.top    = height + 'px';
                group70.style.left   = group21.style.width;
                group70.style.height = parseInt(String(rectTable70.height)) + 'px';

                panel72.style.left   = panel22.style.left;
                panel72.style.width  = panel22.style.width;
                panel72.style.height = parseInt(String(rectTable70.height)) + 'px';
            }
            else {
                group71.style.top    = height + 'px';
                group71.style.width  = group21.style.width;
                group71.style.height = parseInt(String(rectTable70.height)) + 'px';

                group70.style.top    = height + 'px';
                group70.style.left   = group21.style.width;
                group70.style.height = parseInt(String(rectTable70.height)) + 'px';

                panel72.style.width  = '0px';
                panel72.style.left   = '0px';
                panel72.style.height = '0px';
            }
            height += parseInt(group70.style.height);
        }
        // summary top : group41, group42, group40
        if (grid.top_column_table.count() > 0){
            const rectTable40 = document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').getBoundingClientRect();
            if (grid.fixedColumnIndex != -1) {
                group41.style.top    = height + 'px';
                group41.style.width  = group21.style.width;
                group41.style.height = parseInt(String(rectTable40.height)) + 'px';

                group40.style.top    = height + 'px';
                group40.style.left   = group21.style.width;
                group40.style.height = parseInt(String(rectTable40.height)) + 'px';

                panel42.style.left   = panel22.style.left;
                panel42.style.width  = panel22.style.width;
                panel42.style.height = parseInt(String(rectTable40.height)) + 'px';
                panel40.style.left   = panel20.style.left;
            }
            else {
                group41.style.top    = height + 'px';
                group41.style.width  = group21.style.width;
                group41.style.height = parseInt(String(rectTable40.height)) + 'px';

                group40.style.top    = height + 'px';
                group40.style.left   = group21.style.width;
                group40.style.height = parseInt(String(rectTable40.height)) + 'px';

                panel42.style.width  = '0px';
                panel40.style.left   = '0px';
                panel42.style.height = '0px';
            }
            height += parseInt(String(rectTable40.height));
        }
        // content : group31, group32, group30
        const panel30: any = document.querySelector(selector + ' .tbs-grid-panel30');
        const panel32: any = document.querySelector(selector + ' .tbs-grid-panel32');
        if (grid.fixedColumnIndex != -1) {

            group31.style.top    = height + 'px';
            group31.style.width  = group21.style.width;

            group30.style.top    = height + 'px';
            group30.style.left   = group21.style.width;

            panel32.style.width  = '0px';
            panel30.style.left   = '0px';

            panel32.style.left   = panel22.style.left;
            panel32.style.width  = panel22.style.width;
        }
        else {
            group31.style.top    = height + 'px';
            group31.style.width  = group21.style.width;

            group30.style.top    = height + 'px';
            group30.style.left   = group21.style.width;

            panel32.style.width  = '0px';
            panel30.style.left   = '0px';
        }
        // summary footer : group51, group52, group50
        if (grid.footer_column_table.count() > 0) {
            const panel50: any = document.querySelector(selector + ' .tbs-grid-panel50');
            const panel52: any = document.querySelector(selector + ' .tbs-grid-panel52');

            if (grid.fixedColumnIndex != -1) {
                const rectTable50  = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
                group31.style.bottom = parseInt(String(rectTable50.height)) + 'px';
                group30.style.bottom = parseInt(String(rectTable50.height)) + 'px';

                group51.style.width  = group21.style.width;
                group51.style.height = parseInt(String(rectTable50.height)) + 'px';

                group50.style.left   = group21.style.width;
                group50.style.height = parseInt(String(rectTable50.height)) + 'px';

                panel52.style.left   = parseInt(rectTable21.width)  + 'px';
                panel52.style.width  = parseInt(String(fixedColumnsWidth)) + 'px';
                panel52.style.height = parseInt(String(rectTable50.height)) + 'px';
            }
            else {
                const rectTable50  = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
                group51.style.width  = group21.style.width;
                group51.style.height = parseInt(String(rectTable50.height)) + 'px';

                group50.style.left   = group21.style.width;
                group50.style.height = parseInt(String(rectTable50.height)) + 'px';

                group31.style.bottom = parseInt(String(rectTable50.height)) + 'px';
                group30.style.bottom = parseInt(String(rectTable50.height)) + 'px';

                panel52.style.width = '0px';
                panel50.style.left  = '0px';
                panel52.style.height = '0px';

            }
        }

        grid.classScroll.setPageRowCount();
    }

    setBarPosition(type: string, topRowIndex?: number) {
        let selector = this.selector;
        const grid = this.grid;

        if (type == grid.code_horizontal) {
            const table20: any = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
            const xBar: any = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');

            let railSize = grid.horizontalScroll.railSize;
            let hiddenSize = grid.horizontalScroll.hiddenSize;

            let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
            xBar.style.left = ((curLeft / hiddenSize) * railSize) + 'px';
        }
        else if (type == grid.code_vertical) {
            topRowIndex = grid.null(topRowIndex) ? 0 : topRowIndex;
            if (topRowIndex == 0) {
                (document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar') as any).style.top = '0px';
            }
            else if (grid.isLastTopRowIndex(topRowIndex)) {
                const yBar: any = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
                yBar.style.top = grid.verticalScroll.railSize + 'px';
            }
            else {
                let styleTop = parseInt(String(Math.ceil(topRowIndex / grid.verticalScroll.moveCount)));
                (document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar') as any).style.top = styleTop + 'px';
                //console.log(`styleTop ${styleTop} topRowIndex ${topRowIndex}`);
            }
        }
    }

    setBarPositionByDirection(type: string, rowIndex?: number): number {
        let selector = this.selector;
        const grid = this.grid;

        if (type == 'up') {
            let trTopIndex = grid.getFirstRowIndex() - 1;

            if (trTopIndex < 0) return null;
            //-------------------------------------------------------------
            grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
            grid.classPanel30.setDataPanel(trTopIndex)
            //---------------------------------------------------------------
            return trTopIndex;
        }
        if (type == 'down') {
            let trTopIndex = 0;
            if (rowIndex == undefined) trTopIndex = grid.getFirstRowIndex() + 1;
            else trTopIndex = rowIndex;

            if (grid.pageRowCount > grid.pageIntRowCount) {
                if (trTopIndex > (grid.view_table.count() - grid.pageRowCount + 1)) return null;
            }
            else {
                if (trTopIndex > (grid.view_table.count() - grid.pageRowCount)) return null;
            }
            //-------------------------------------------------------------
            grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
            grid.classPanel30.setDataPanel(trTopIndex)
            //-------------------------------------------------------------
            return trTopIndex;
        }
        if (type == 'right') {
            let hiddenSize = grid.horizontalScroll.hiddenSize;
            let moveWidth = 15;
            const divContent: any = document.querySelector(`${selector} .tbs-grid-panel30`);
            const divHeaderMove: any = document.querySelector(`${selector} .tbs-grid-panel20 .tbs-grid-table`);
            const divContentMove: any = document.querySelector(`${selector} .tbs-grid-panel30 .tbs-grid-table`);
            if (divHeaderMove.style.left == (-1 * hiddenSize) + 'px') return null;

            let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            if (divContentMove.getBoundingClientRect().width <=	divContent.getBoundingClientRect().width) return null;

            let sLeft;
            if (curLeft + moveWidth >= hiddenSize) sLeft = (-1 * hiddenSize) + 'px';
            else sLeft = (divHeaderMove.style.left.replace('px', '') - moveWidth) + 'px';
            grid.classScroll.setContentPanelLeft(sLeft);
            grid.classScroll.setBarPosition(grid.code_horizontal);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());

            return grid.getFirstRowIndex() + 1;
        }
        if (type == 'left') {
            let moveWidth = 15;
            const divHeaderMove: any  = document.querySelector(`${selector} .tbs-grid-panel20  .tbs-grid-table`);
            if (divHeaderMove.style.left == '0px') return null;
            let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            let sLeft;
            if (curLeft - moveWidth <= 0) sLeft = '0px';
            else sLeft = (-1 * curLeft + moveWidth) + 'px';

            grid.classScroll.setContentPanelLeft(sLeft);
            grid.classScroll.setBarPosition(grid.code_horizontal);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());

            return grid.getFirstRowIndex() + 1;
        }
    }

    getContentPanelLeft(value) {
        let selector = this.selector;
        const grid = this.grid;

        const panel20: any= document.querySelector(selector + ' .tbs-grid-panel20');
        value = parseInt(value, 10);

        let railSize = grid.horizontalScroll.railSize;
        let ratio = (panel20.childNodes[0].clientWidth - panel20.clientWidth) / railSize;
        let sLeft = (value * -1 * ratio).toString() + 'px';
        return sLeft;
    }

    setContentPanelLeft(value) {
        let selector = this.selector;
        const grid = this.grid;

        value = parseInt(value, 10) + 'px';

        const panel20: any= document.querySelector(selector + ' .tbs-grid-panel20');
        const panel30: any= document.querySelector(selector + ' .tbs-grid-panel30');
        const panel40: any= document.querySelector(selector + ' .tbs-grid-panel40');
        const panel50: any= document.querySelector(selector + ' .tbs-grid-panel50');
        const panel70: any= document.querySelector(selector + ' .tbs-grid-panel70');

        if(grid.notNull(panel20.childNodes[0])) panel20.childNodes[0].style.left = value;
        if(grid.notNull(panel30.childNodes[0])) panel30.childNodes[0].style.left = value;
        if(grid.notNull(panel40.childNodes[0])) panel40.childNodes[0].style.left = value;
        if(grid.notNull(panel50.childNodes[0])) panel50.childNodes[0].style.left = value;
        if(grid.notNull(panel70.childNodes[0])) panel70.childNodes[0].style.left = value;
    }

    setContentPanelLeftMove(value) {
        let selector = this.selector;
        const grid = this.grid;

        const table20: any= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        let left = (parseInt(table20.style.left, 10) + value) + 'px';
        grid.classScroll.setContentPanelLeft(left);
    }

    setColumnWidth(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;

        if (panelName == 'panel22') grid.classScroll.setColumnWidth22(panelName, colIndex, value);
        else grid.classScroll.setColumnWidth20(panelName, colIndex, value);

    }

    setColumnWidth20(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;

        const colList : any = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        const colList2: any = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        const colList3: any = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        const colList4: any = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        const colList7: any = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');

        let nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][ColumnAlias.width] = parseInt(value, 10);

        colList[colIndex].style.width  = nWidth;
        colList2[colIndex].style.width = nWidth;

        if (grid.top_table.count()    > 0) colList3[colIndex].style.width = nWidth;
        if (grid.footer_table.count() > 0) colList4[colIndex].style.width = nWidth;
        if (grid.options.showFilterPanel) colList7[colIndex].style.width = nWidth;
        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
    }

    setColumnWidth22(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;

        const colList : any = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
        const colList2: any = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
        const colList3: any = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
        const colList4: any = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');
        const colList7: any = document.querySelectorAll(selector + ' .tbs-grid-panel72 .tbs-grid-table thead th');

        let nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][ColumnAlias.width] = parseInt(value, 10);

        colList[colIndex].style.width  = nWidth;
        colList2[colIndex].style.width = nWidth;

        if (grid.top_column_table.count() > 0)      colList3[colIndex].style.width = nWidth;
        if (grid.footer_column_table.count() > 0)   colList4[colIndex].style.width = nWidth;
        if (grid.options.showFilterPanel) colList7[colIndex].style.width = nWidth;

        grid.classScroll.setPanelSize();
        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
    }

    getFixedColumnsWidth() {
        const grid = this.grid;

        let result = 0;
        for (let x = 0; x <= grid.fixedColumnIndex; x++){
            let column = grid.column_table.data[x];
            if (column[ColumnAlias.visible]) result += Number(column[ColumnAlias.width]);
        }
        return result;
    }

    setAllColumnWidth(arr) {
        let selector = this.selector;
        const grid = this.grid;

        const thList20: any = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        const thList30: any = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        const thList40: any = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        const thList50: any = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        const thList70: any = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
        for (let x = 0, len = grid.column_table.count(); x < len; x++){
            grid.column_table.data[x].width = arr[x];
            let nWidth = arr[x] + 'px';
            thList20[x].style.width = nWidth;
            thList30[x].style.width = nWidth;
            if (grid.top_column_table.count() > 0)      thList40[x].style.width = nWidth;
            if (grid.footer_column_table.data.length > 0)    thList50[x].style.width = nWidth;
            if (grid.options.showFilterPanel)  thList70[x].style.width = nWidth;
        }
        grid.horizontalScroll.setScroll(grid.code_horizontal);;
    }

    setPageRowCount(panelName = '') {
        let selector = this.selector;
        const grid = this.grid;

        let rowHeight = grid.rowHeight;
        let contentHeight = parseInt(String(document.querySelector(selector + ' .tbs-grid-group30').getBoundingClientRect().height));
        let pageRowCount = contentHeight/rowHeight > parseInt(String(contentHeight / rowHeight)) ?  parseInt(String(contentHeight / rowHeight)) + 1 : parseInt(String(contentHeight / rowHeight));
        let pageIntRowCount = Math.floor(contentHeight/rowHeight);

        grid.pageRowCount    = pageRowCount;
        grid.pageIntRowCount = pageIntRowCount;
    }
}
