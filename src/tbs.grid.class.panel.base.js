class TbsGridPanelBase {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.panelName  = null;
        this.panelName1 = null;
        this.panelName2 = null;
        this.panelName0 = null;
    }

    /**
     *  Panel Interface
     */
    createHtml(parentElement)  {}

    createHtml1(parentElement) {}

    createHtml2(parentElement) {}

    createHtml0(parentElement) {}

    createEtcHtml(parentElement)  {
        let s = '';
        //content vertical scroll
        s += '<div class="tbs-grid-vertical-scroll" style="display:none;">';
        s += '<div class="tbs-grid-vertical-scroll-wrap">';
        s += '<div class="tbs-grid-vertical-scroll-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-vertical-scroll-up"><div>▲</div></div>';
        s += '<div class="tbs-grid-vertical-scroll-down"><div>▼</div></div>';
        s += '</div>';
        //content horizontal scroll
        s += '<div class="tbs-grid-horizontal-scroll" style="display:none;">';
        s += '<div class="tbs-grid-horizontal-scroll-wrap">';
        s += '<div class="tbs-grid-horizontal-scroll-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-horizontal-scroll-left"><div>◀</div></div>';
        s += '<div class="tbs-grid-horizontal-scroll-right"><div>▶</div></div>';
        s += '</div>';
        //frozen vertical scroll
        s += '<div class="tbs-grid-vertical-scroll60" style="display:none;">';
        s += '<div class="tbs-grid-vertical-scroll60-wrap">';
        s += '<div class="tbs-grid-vertical-scroll6-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-vertical-scroll60-up">▲</div>';
        s += '<div class="tbs-grid-vertical-scroll60-down">▼</div>';
        s += '</div>';
        //frozen horizontal scroll
        s += '<div class="tbs-grid-horizontal-scroll32" style="display:none;">';
        s += '<div class="tbs-grid-horizontal-scroll32-wrap">';
        s += '<div class="tbs-grid-horizontal-scroll2-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-horizontal-scroll32-left"><div>◀</div></div>';
        s += '<div class="tbs-grid-horizontal-scroll32-right"><div>▶</div></div>';
        s += '</div>';
        /* ETC */
        s += '<div class="tbs-grid-scroll-box" style="display:none;"></div>';
        s += '<div class="tbs-grid-top-line" style="left:30000px;"></div>';
        s += '<div class="tbs-grid-bottom-line"	style="left:30000px;"></div>';
        s += '<div class="tbs-grid-left-line" style="left:30000px;"></div>';
        s += '<div class="tbs-grid-right-line" style="left:30000px;"></div>';
        s += '<div class="tbs-grid-input-panel" style="left:30000px;"></div>';
        s += '<div class="tbs-grid-canvas"></div>';
        s += '<div class="tbs-grid-panel-input">';
        s += '<input type="text" class="tbs-grid-input"  data-type="" data-click=""/>';
        s += '<img class="tbs-grid-panel-input-icon" data-type="" data-click="" />';
        s += '</div>';
        s += '<input type="text" class="tbs-grid-input-code" data-type="" data-click="" style="left:30000px;"/>';

        parentElement.insertAdjacentHTML('beforeend', s);
        parentElement.querySelector(' .tbs-grid-canvas').appendChild(document.createElement('canvas'));
    }

    createPanel(parentElement)  {}

    createPanel1(parentElement) {}

    createPanel2(parentElement) {}

    createPanel0(parentElement) {}

    setDataPanel()  {
        setDataPanel1();
        setDataPanel2();
        setDataPanel0();
    }

    setDataPanel1() {}

    setDataPanel2() {}

    setDataPanel0() {}
}