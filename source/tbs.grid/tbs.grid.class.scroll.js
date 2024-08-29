class TbsGridScroll {
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
}

/* Set Scroll */
TbsGridScroll.prototype.tbs_setScroll = function(type) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    if (type == grid.code_vertical) scroll.tbs_setVerticalScroll();
    else if (type == grid.code_horizontal) scroll.tbs_setHorizontalScroll();
}
TbsGridScroll.prototype.tbs_setVerticalScroll = function() {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let type = grid.code_vertical;

    let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
    let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
    let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
    let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

    let pageRowCount = grid.pageRowCount;
    let dataLength = grid.data_view.length;

    if (grid.fixedRowIndex != -1) {
        dataLength = dataLength - (grid.fixedRowIndex + 1);
        if (dataLength <= grid.pageIntRowCount) {
            scroll.tbs_hideScroll(type);
        }
        else if (grid.pageRowCount > grid.pageIntRowCount) {
            if (dataLength >= pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;
                scroll.tbs_setScrollSize(type);
            } else {
                scroll.tbs_hideScroll(type);
            }
        }
        else {
            if (dataLength > pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;
                scroll.tbs_setScrollSize(type);
            } else {
                scroll.tbs_hideScroll(type);
            }
        }
    }
    else {
        if (dataLength <= grid.pageIntRowCount) {
            scroll.tbs_hideScroll(type);
        }
        else if (grid.pageRowCount > grid.pageIntRowCount) {
            if (dataLength >= pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;

                scroll.tbs_setScrollSize(type);
            } else {
                scroll.tbs_hideScroll(type);
            }
        }
        else {
            if (dataLength > pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;

                scroll.tbs_setScrollSize(type);
            } else {
                scroll.tbs_hideScroll(type);
            }
        }
    }
    yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll'); // non-live
    if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
}
TbsGridScroll.prototype.tbs_setHorizontalScroll = function() {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let type = grid.code_horizontal;

    let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
    let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
    let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');

    let header = document.querySelector(selector + ' .tbs-grid-panel20');
    let headerTable = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');

    let headerRect = header.getBoundingClientRect();
    let headerTableRect = headerTable.getBoundingClientRect();

    // 1) table area > panel area : scroll setting
    if (headerTableRect.width > headerRect.width) scroll.tbs_showScroll(type);
    else scroll.tbs_hideScroll(type);

    xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll'); // non-live
    if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';

    // table tr count control
    grid.tbs_setPageRowCount();
    let pageRowCount = grid.pageRowCount;
    let pageIntRowCount = grid.pageIntRowCount;

    let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
    let leftTrList    = document.querySelectorAll(selector + ' .tbs-grid-panel31 tbody tr');
    let contentTrList = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
    let len = leftTrList.length;
    if (len == 0) return;

    let leftTable = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
    let contentTable = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
    let leftCount = leftTrList.length;
    let contentCount = contentTrList.length;

    for (let i = 0; i < pageRowCount; i++) {
        let leftTr = leftTrList[0].cloneNode(true);
        let contentTr = contentTrList[0].cloneNode(true);

        leftTable.childNodes[1].append(leftTr);
        contentTable.childNodes[1].append(contentTr);
    }
    for (let i = 0; i < leftCount   ; i++) leftTable.deleteRow(-1);
    for (let i = 0; i < contentCount; i++) contentTable.deleteRow(-1);
}
TbsGridScroll.prototype.tbs_showScroll = function(type) {
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
        scroll.tbs_setScrollSize(type);
    }
    else if (type == grid.code_vertical) {

    }
}
TbsGridScroll.prototype.tbs_hideScroll = function(type) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    if (type == grid.code_horizontal) {
        //console.log(`tbs_hideScroll ${type}`);
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
        document.querySelector(selector + ' .tbs-grid-panel60 .tbs-grid-table').style.left = '0px';
    }
    else if (type == grid.code_vertical) {
        let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');

        yScroll.style.display = 'none';
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
    }
}
TbsGridScroll.prototype.tbs_setScrollSize = function(type) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;
    if (type == grid.code_horizontal) {
        let barSize = scroll.tbs_getBarSize(type);
        let hiddenSize = scroll.tbs_getHiddenSize(type);
        let railSize = scroll.tbs_getRailSize(type, barSize);

        scroll.barSize = barSize;
        scroll.railSize = railSize;
        scroll.hiddenSize = hiddenSize;

        let xBar  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        xBar.style.width = scroll.tbs_getBarWidth(type, barSize);
    }
    else if (type == grid.code_vertical) {
        let barSize  = scroll.tbs_getBarSize(type);
        let railSize = scroll.tbs_getRailSize(type, barSize);
        let moveCount= scroll.tbs_getMoveCount(type, railSize);

        scroll.barSize = barSize; //data
        scroll.railSize = railSize; //data
        scroll.moveCount = moveCount; //data	1px당 trCount

        let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        yBar.style.height = barSize + 'px';
    }
}

/* BarSize */
TbsGridScroll.prototype.tbs_getBarSize = function(type) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;
    if (type == grid.code_horizontal) return scroll.tbs_getHorizontalBarSize();
    else if (type == grid.code_vertical) return scroll.tbs_getVerticalBarSize();
}
TbsGridScroll.prototype.tbs_getHorizontalBarSize = function() {
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
    // let barSize = parseInt((header.clientWidth / header.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth);
    // if (barSize > xWrap.clientWidth) barSize = xWrap.clientWidth;
    // else if (barSize < 35) barSize = 35;
}
TbsGridScroll.prototype.tbs_getVerticalBarSize = function() {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    if (grid.fixedRowIndex != -1) {
        let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        let rowCount = grid.tbs_getRowCount() - (grid.fixedRowIndex + 1);
        let barSize = yWrap.clientHeight - (rowCount * 6.3);
        if (barSize < 50) barSize = 50;
        return barSize
    }
    else {
        let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        let rowCount = grid.tbs_getRowCount();
        let barSize = yWrap.clientHeight - (rowCount * 6.3);
        if (barSize < 50) barSize = 50;
        return barSize
    }
}

/* railSize */
TbsGridScroll.prototype.tbs_getRailSize = function(type, barSize) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    if (type == grid.code_horizontal) return scroll.tbs_getHorizontalRailSize(barSize);
    else if (type == grid.code_vertical) return scroll.tbs_getVerticalRailSize(barSize);
}
TbsGridScroll.prototype.tbs_getHorizontalRailSize = function(barSize) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    return xWrap.clientWidth - barSize;
}
TbsGridScroll.prototype.tbs_getVerticalRailSize = function(barSize) {
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
TbsGridScroll.prototype.tbs_getMoveCount = function(type, railSize) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let moveCount = 0;
    let pageIntRowCount = grid.pageIntRowCount;
    let pageRowCount = grid.pageRowCount;
    if (grid.fixedRowIndex != -1) {
        let rowCount = grid.tbs_getRowCount() - (grid.fixedRowIndex + 1);
        if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
        else moveCount = Number((rowCount - pageRowCount) / railSize);  // 50 , 10 / 1000 px
    }
    else {
        let rowCount = grid.tbs_getRowCount();
        if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
        else moveCount = Number((rowCount - pageRowCount) / railSize);
    }
    return moveCount;
}

/* hiddenSize */
TbsGridScroll.prototype.tbs_getHiddenSize = function(type) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
    let hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16;	// add size( default 14px / add 2px)
    if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) hiddenSize = 0;
    return hiddenSize;
}

/* barWidth */
TbsGridScroll.prototype.tbs_getBarWidth = function(type, barSize) {
    let selector = this.selector;
    let grid = this.grid;
    let scroll = this;

    let wrapRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap').getBoundingClientRect();
    let xBarRect  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').getBoundingClientRect();
    let barWidth = barSize;
    if (xBarRect.right > wrapRect.right) barWidth = barSize - (xBarRect.right - wrapRect.right);
    return barWidth + 'px';
}
