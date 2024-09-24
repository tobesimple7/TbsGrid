import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridScroll {
    /**
     * ScrollName : verticalScroll, horizontalScroll, verticalScroll60, horizontalScroll32
     *
     */
    constructor(grid, scrollName) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;

        this.scrollName = scrollName;
        this.barSize 	= 0;
        this.railSize 	= 0;

        // vertical option
        this.moveCount 	= 0; // table Rows Count per 1px
        this.margin     = '14px';

        // horizontal option
        this.hiddenSize = 0;

        this.panelName;
        this.type;      //vertical, horizontal
    }

    /* Set Scroll */
    setScroll(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        if (type == grid.code_horizontal) scroll.setHorizontalScroll();
        else if (type == grid.code_vertical) scroll.setVerticalScroll();
    }

    setHorizontalScroll() {
        let selector = this.selector;
        let grid = this.grid;
        let classScroll = this;

        let type = grid.code_horizontal;

        let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');

        let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');

        let rectPanel20 = panel20.getBoundingClientRect();
        let rectTable20 = table20.getBoundingClientRect();

        if (rectTable20.width > rectPanel20.width) classScroll.showScroll(type);
        else classScroll.hideScroll(type);

        xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll'); // non-live
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
    }

    setVerticalScroll() {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let type = grid.code_vertical;

        let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
        let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

        let pageRowCount = grid.pageRowCount;
        let dataLength = grid.view_table.count();

        if (grid.fixedRowIndex != -1) {
            dataLength = dataLength - (grid.fixedRowIndex + 1);
            if (dataLength <= grid.pageIntRowCount) {
                scroll.hideScroll(type);
            }
            else if (grid.pageRowCount > grid.pageIntRowCount) {
                if (dataLength >= pageRowCount) {
                    yScroll.style.display = '';
                    scrollBox.style.display = '';
                    wrap.style.marginRight = grid.verticalScroll.margin;
                    scroll.setScrollSize(type);
                } else {
                    scroll.hideScroll(type);
                }
            }
            else {
                if (dataLength > pageRowCount) {
                    yScroll.style.display = '';
                    scrollBox.style.display = '';
                    wrap.style.marginRight = grid.verticalScroll.margin;
                    scroll.setScrollSize(type);
                } else {
                    scroll.hideScroll(type);
                }
            }
        }
        else {
            if (dataLength <= grid.pageIntRowCount) {
                scroll.hideScroll(type);
            }
            else if (grid.pageRowCount > grid.pageIntRowCount) {
                if (dataLength >= pageRowCount) {
                    yScroll.style.display = '';
                    scrollBox.style.display = '';
                    wrap.style.marginRight = grid.verticalScroll.margin;

                    scroll.setScrollSize(type);
                } else {
                    scroll.hideScroll(type);
                }
            }
            else {
                if (dataLength > pageRowCount) {
                    yScroll.style.display = '';
                    scrollBox.style.display = '';
                    wrap.style.marginRight = grid.verticalScroll.margin;

                    scroll.setScrollSize(type);
                } else {
                    scroll.hideScroll(type);
                }
            }
        }
        yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll'); // non-live
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
    }

    showScroll(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        if (type == grid.code_horizontal) {
            let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

            xScroll.style.display = '';
            scrollBox.style.display = '';
            wrap.style.marginBottom = scroll.margin;
            scroll.setScrollSize(type);
        }
        else if (type == grid.code_vertical) {

        }
    }

    hideScroll(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        if (type == grid.code_horizontal) {
            let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

            let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');

            xScroll.style.display = 'none';
            wrap.style.marginBottom = '0px';
            if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';

            document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left = '0px';
            document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').style.left = '0px';
            document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').style.left = '0px';
            document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').style.left = '0px';
            document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').style.left = '0px';
            document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').style.left = '0px';
        }
        else if (type == grid.code_vertical) {
            let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');

            yScroll.style.display = 'none';
            if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
        }
    }

    setScrollSize(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;
        if (type == grid.code_horizontal) {
            let barSize = scroll.getBarSize(type);
            let hiddenSize = scroll.getHiddenSize(type);
            let railSize = scroll.getRailSize(type, barSize);

            scroll.barSize = barSize;
            scroll.railSize = railSize;
            scroll.hiddenSize = hiddenSize;

            let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            xBar.style.width = scroll.getBarWidth(type, barSize);
        }
        else if (type == grid.code_vertical) {
            let barSize  = scroll.getBarSize(type);
            let railSize = scroll.getRailSize(type, barSize);
            let moveCount= scroll.getMoveCount(type, railSize);

            scroll.barSize = barSize; //data
            scroll.railSize = railSize; //data
            scroll.moveCount = moveCount; //data	1px당 trCount

            let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            yBar.style.height = barSize + 'px';
        }
    }

    /* BarSize */
    getBarSize(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;
        if (type == grid.code_horizontal) return scroll.getHorizontalBarSize();
        else if (type == grid.code_vertical) return scroll.getVerticalBarSize();
    }

    getHorizontalBarSize() {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
        let xWrap  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let barSize = parseInt((panel20.clientWidth / panel20.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth);
        if (barSize > xWrap.clientWidth) barSize = xWrap.clientWidth;
        else if (barSize < 35) barSize = 35;

        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) barSize = xWrap.clientWidth;
        return barSize;
    }

    getVerticalBarSize() {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        if (grid.fixedRowIndex != -1) {
            let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
            let rowCount = grid.getRowCount() - (grid.fixedRowIndex + 1);
            let barSize = yWrap.clientHeight - (rowCount * 6.3);
            if (barSize < 50) barSize = 50;
            return barSize
        }
        else {
            let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
            let rowCount = grid.getRowCount();
            let barSize = yWrap.clientHeight - (rowCount * 6.3);
            if (barSize < 50) barSize = 50;
            return barSize
        }
    }

    /* railSize */
    getRailSize(type, barSize) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        if (type == grid.code_horizontal) return scroll.getHorizontalRailSize(barSize);
        else if (type == grid.code_vertical) return scroll.getVerticalRailSize(barSize);
    }

    getHorizontalRailSize(barSize) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        return xWrap.clientWidth - barSize;
    }

    getVerticalRailSize(barSize) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        let railSize = yWrap.clientHeight - barSize;
        // if (railSize <= grid.rowHeight) {
        //     railSize = grid.rowHeight + 5;
        //     scroll.barSize = yWrap.clientHeight - railSize;
        // }
        return railSize;
    }

    /* moveCount */
    getMoveCount(type, railSize) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let moveCount = 0;
        let pageIntRowCount = grid.pageIntRowCount;
        let pageRowCount = grid.pageRowCount;
        if (grid.fixedRowIndex != -1) {
            let rowCount = grid.getRowCount() - (grid.fixedRowIndex + 1);
            if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
            else moveCount = Number((rowCount - pageRowCount) / railSize);  // 50 , 10 / 1000 px
        }
        else {
            let rowCount = grid.getRowCount();
            if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
            else moveCount = Number((rowCount - pageRowCount) / railSize);
        }
        return moveCount;
    }

    /* hiddenSize */
    getHiddenSize(type) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;

        let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
        let hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16;	// add size( default 14px / add 2px)
        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) hiddenSize = 0;
        return hiddenSize;
    }

    /* barWidth */
    getBarWidth(type, barSize) {
        let selector = this.selector;
        let grid = this.grid;
        let scroll = this;
        let wrapRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap').getBoundingClientRect();
        let xBarRect  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').getBoundingClientRect();
        let barWidth = barSize;
        if (xBarRect.right > wrapRect.right)  barWidth = barSize - (xBarRect.right - wrapRect.right);
        if (xBarRect.width >= wrapRect.width) barWidth = barSize; // - (xBarRect.right - wrapRect.right);
        return barWidth + 'px';
    }
}

