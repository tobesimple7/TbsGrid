(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 18:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ TbsGridPanelBase; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(618);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(543);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();



class TbsGridPanelBase extends _tbs_base_js__WEBPACK_IMPORTED_MODULE_3__/* .TbsBase */ .H {
  constructor(grid) {
    super();
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.panelName = null;
    this.panelName1 = null;
    this.panelName2 = null;
    this.panelName0 = null;
  }

  /**
   *  Panel Interface
   */
  createHtml(parentElement) {}
  createEtcHtml(parentElement) {
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
    // s += '<div class="tbs-grid-vertical-scroll60" style="display:none;">';
    // s += '<div class="tbs-grid-vertical-scroll60-wrap">';
    // s += '<div class="tbs-grid-vertical-scroll6-bar"></div>';
    // s += '</div>';
    // s += '<div class="tbs-grid-vertical-scroll60-up">▲</div>';
    // s += '<div class="tbs-grid-vertical-scroll60-down">▼</div>';
    // s += '</div>';
    //frozen horizontal scroll
    // s += '<div class="tbs-grid-horizontal-scroll32" style="display:none;">';
    // s += '<div class="tbs-grid-horizontal-scroll32-wrap">';
    // s += '<div class="tbs-grid-horizontal-scroll2-bar"></div>';
    // s += '</div>';
    // s += '<div class="tbs-grid-horizontal-scroll32-left"><div>◀</div></div>';
    // s += '<div class="tbs-grid-horizontal-scroll32-right"><div>▶</div></div>';
    // s += '</div>';
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
  createTable(parentElement) {
    this.createTable1();
    this.createTable2();
    this.createTable0();
  }
  createTable1(parentElement) {}
  createTable2(parentElement) {}
  createTable0(parentElement) {}
  setDataPanel() {
    this.setDataPanel1();
    this.setDataPanel2();
    this.setDataPanel0();
  }
  setDataPanel1() {}
  setDataPanel2() {}
  setDataPanel0() {}
}

/***/ }),

/***/ 360:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ TbsGridPanel10; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel10 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel10';
  }
  createHtml(parentElement) {
    const grid = this.grid;
    //super.createHtml(parentElement);
    let isShowToolbar = grid.options.showToolbarPanel ? 'tbs-grid-show' : 'tbs-grid-hide';
    let s = '';
    s += '<div class="tbs-grid-panel10 ' + isShowToolbar + '">';
    s += '<div class="tbs-grid-panel10-wrap">';
    s += '<div class="tbs-grid-panel10-filter" style="display:none;">';
    s += '<input class="tbs-grid-panel10-filter-input" placeholder="Search">';
    s += '</div>';
    s += '<div class="tbs-grid-panel10-page" style="display:none;">';
    s += '<span class="tbs-grid-panel10-page-first">◁◁</span>';
    s += '<span class="tbs-grid-panel10-page-prev">◀</span>';
    s += '<span class="tbs-grid-panel10-page-select">1</span>';
    s += '<span class="tbs-grid-panel10-page-next">▶</span>';
    s += '<span class="tbs-grid-panel10-page-last">▷▷</span>';
    s += '</div>';
    s += '<div class="tbs-grid-panel10-buttons" style="display:;">';
    s += '<div class="tbs-grid-panel10-buttons-wrap">';
    s += '<span class="tbs-grid-panel10-buttons-filter">' + grid.getConfigLabel('toolbar_button_filter') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-filter-reset">' + grid.getConfigLabel('toolbar_button_reset') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-sort">' + grid.getConfigLabel('toolbar_button_sorting') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-sort-reset">' + grid.getConfigLabel('toolbar_button_reset') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-group">' + grid.getConfigLabel('toolbar_button_grouping') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-group-expand">' + grid.getConfigLabel('toolbar_button_expand') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-group-collapse">' + grid.getConfigLabel('toolbar_button_collapse') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-group-reset">' + grid.getConfigLabel('toolbar_button_reset') + '</span>';
    s += '<span class="tbs-grid-panel10-buttons-fixed-column">' + grid.getConfigLabel('toolbar_button_fixedColumn') + '</span>';
    s += '</div>';
    s += '</div>';
    s += '</div>';
    s += '</div>';
    parentElement.insertAdjacentHTML('beforeend', s);
    grid.classPanel10.panel10_select();
  }
  createTable() {
    let selector = '#' + this.grid.gridId;
    const panel = document.querySelector(selector + ' .tbs-grid-panel10');
    panel.classList.add('tbs-grid-show');
  }
  panel10_select() {
    let selector = this.selector;
    const grid = this.grid;

    /* Filter Panel */
    const showFilterPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.options.showFilterPanel == false) {
        grid.classFilter.showFilterPanel();
      } else {
        grid.classFilter.hideFilterPanel();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter').addEventListener('mousedown', showFilterPanelEvent);
    const resetFilterPanelEvent = function (e) {
      e.stopPropagation();
      grid.classFilter.initFilterData();
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset').addEventListener('mousedown', resetFilterPanelEvent);

    /* Sort Panel */
    const showSortPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.options.showSortPanel == false) {
        grid.classSort.showSortPanel();
      } else {
        grid.classSort.hideSortPanel();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort').addEventListener('mousedown', showSortPanelEvent);
    const resetSortPanelEvent = function (e) {
      e.stopPropagation();
      grid.classSort.initSortData();
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset').addEventListener('mousedown', resetSortPanelEvent);

    /* Group Panel */
    const showGroupPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.grid_mode != tbsGridTypes.GridMode.group) {
        grid.classGroup.allowGroupMode();
      } else {
        if (grid.options.showGroupPanel) grid.classGroup.denyGroupMode();else grid.classGroup.allowGroupMode();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-group').addEventListener('mousedown', showGroupPanelEvent);
    const expandGroupPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.grid_mode == tbsGridTypes.GridMode.group) {
        grid.classGroup.expandGroup();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand').addEventListener('mousedown', expandGroupPanelEvent);
    const collapseGroupPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.grid_mode == tbsGridTypes.GridMode.group) {
        grid.classGroup.collapseGroup();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse').addEventListener('mousedown', collapseGroupPanelEvent);
    const resetGroupPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.grid_mode == tbsGridTypes.GridMode.group) {
        grid.classGroup.initGroupData();
      }
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset').addEventListener('mousedown', resetGroupPanelEvent);

    /* Fixled Column Panel */
    const showFixedColumnPanelEvent = function (e) {
      e.stopPropagation();
      if (grid.fixedColumnIndex == -1 && grid._startCellIndex >= 0) grid.classColumn.setFixedColumn(grid._startCellIndex);else grid.classColumn.removeFixedColumn();
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column')) document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column').addEventListener('mousedown', showFixedColumnPanelEvent);

    /* Total Filter */
    const setTotalFilterEvent = function (e) {
      e.stopPropagation();
      grid.classFilter.totalFilterSearch(grid.value);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-filter-input')) document.querySelector(selector + ' .tbs-grid-panel10-filter-input').addEventListener('keyup', setTotalFilterEvent);
    const firstEvent = function (e) {
      e.stopPropagation();
      grid.classPage.pageIndex = 1;
      grid.classPanel30.setDataPanel(0);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-first')) document.querySelector(selector + ' .tbs-grid-panel10-page-first').addEventListener('mousedown', firstEvent);
    const prevEvent = function (e) {
      e.stopPropagation();
      grid.classPage.pageIndex -= 1;
      grid.classPanel30.setDataPanel(0);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-prev')) document.querySelector(selector + ' .tbs-grid-panel10-page-prev').addEventListener('mousedown', prevEvent);
    const curEvent = function (e) {
      e.stopPropagation();
      grid.classPanel30.setDataPanel(0);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-select')) document.querySelector(selector + ' .tbs-grid-panel10-page-select').addEventListener('mousedown', curEvent);
    const nextEvent = function (e) {
      e.stopPropagation();
      grid.classPage.pageIndex += 1;
      grid.classPanel30.setDataPanel(0);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-next')) document.querySelector(selector + ' .tbs-grid-panel10-page-next').addEventListener('mousedown', nextEvent);
    const lastEvent = function (e) {
      e.stopPropagation();
      grid.classPage.pageIndex = grid.classPage.pageCount;
      grid.classPanel30.setDataPanel(0);
    };
    if (document.querySelector(selector + ' .tbs-grid-panel10-page-last')) document.querySelector(selector + ' .tbs-grid-panel10-page-last').addEventListener('mousedown', lastEvent);
  }
  showToolbarPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let panel = document.querySelector(selector + ' .tbs-grid-panel10');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.apply();
  }
  hideToolbarPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let panel = document.querySelector(selector + ' .tbs-grid-panel10');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.apply();
  }
  showToolbarButtons(buttonType) {
    let selector = this.selector;
    const grid = this.grid;
    if (buttonType == 'filter') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');
      button.style.display = '';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');
      button.style.display = '';
    } else if (buttonType == 'sort') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
      button.style.display = '';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
      button.style.display = '';
    } else if (buttonType == 'group') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');
      button.style.display = '';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');
      button.style.display = '';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');
      button.style.display = '';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');
      button.style.display = '';
    } else if (buttonType == 'fixedColumn') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');
      button.style.display = '';
    }
  }
  hideToolbarButtons(buttonType) {
    let selector = this.selector;
    const grid = this.grid;
    if (buttonType == 'filter') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');
      button.style.display = 'none';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');
      button.style.display = 'none';
    } else if (buttonType == 'sort') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
      button.style.display = 'none';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
      button.style.display = 'none';
    } else if (buttonType == 'group') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');
      button.style.display = 'none';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');
      button.style.display = 'none';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');
      button.style.display = 'none';
      button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');
      button.style.display = 'none';
    } else if (buttonType == 'fixedColumn') {
      let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');
      button.style.display = 'none';
    }
  }
}

/***/ }),

/***/ 719:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ TbsGridPanel20; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel20 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.isChecked = false;
    this.panelName = 'panel20';
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
  createTable() {
    const grid = this.grid;
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.createTable('panel21', 0, grid.headerRowCount);
    classTable.createTable('panel22', 0, grid.headerRowCount);
    classTable.createTable('panel20', 0, grid.headerRowCount);
    this.setDataPanel();
  }
  setDataPanel(topRowIndex) {
    const grid = this.grid;
    this.setDataPanel1({
      panelName: 'panel21'
    });
    this.setDataPanel2({
      panelName: 'panel22'
    });
    this.setDataPanel0({
      panelName: 'panel20'
    });
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
      for (let x = 0; x < grid.info_table.count(); x++) {
        let tableCell = tableRow.childNodes[x];
        tableCell.dataset.rowIndex = i;
        tableCell.dataset.displayRowIndex = i;
        tableCell.dataset.cellType = grid.info_table.selectValue(x, tbsGridNames.column.type);

        /**
         * Render: Start
         */
        let tbsGridRenderInfo = new _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridRenderInfo */ .w(grid);
        tbsGridRenderInfo.start(panelName, tableCell, grid.info_table.data[x], i, x);
        tbsGridRenderInfo = null;
        if (i == 0) tableCell.rowSpan = grid.headerRowCount;else tableCell.style.display = 'none';

        /**
         * Render: Show Selected Cells
         */
        grid.classCell.showSelectedCells(grid, panelName, tableCell, i, 0);
      }

      // on fixed columns
      grid.classCell.hideTableCells(grid, panelName, tableRow, grid.info_table.count() - 1);
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
    let panelName = this.panelName2;
    if (grid.fixedColumnIndex == -1) return;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tablesRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    for (let i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
      let tableRow = tablesRows[i];
      tableRow.style.height = grid.headerRowHeight + 'px';
      for (let x = 0; x <= grid.fixedColumnIndex; x++) {
        let column = grid.column_table.data[x];
        let header = grid.headerColumnTable[i][x];
        let tableCell = tableRow.childNodes[x];
        let selectedValue = grid.isSelectedHeaderCell(panelName, x);
        if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');
        let columnName = header[tbsGridNames.column.name];
        tableCell.style.textAlign = 'center'; // header[tbsGridNames.column.align];

        tableCell.dataset.name = header[tbsGridNames.column.kind] == 'column' ? columnName : '';
        tableCell.dataset.kind = header[tbsGridNames.column.kind];
        tableCell.colSpan = header[tbsGridNames.column.colSpan];
        tableCell.rowSpan = header[tbsGridNames.column.rowSpan];
        tableCell.style.display = header[tbsGridNames.column.visible] == true ? '' : 'none';
        if (header[tbsGridNames.column.kind] == 'column') {
          let className = grid.classColumn.getHeaderProperty(columnName, tbsGridNames.column.className);
          if (grid.notNull(className)) tableCell.classList.add(className);
          tableCell.style.display = column[tbsGridNames.column.visible] == true ? '' : 'none';
        }
        tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = '';
        if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName) && header[tbsGridNames.column.kind] == 'column') {
          let sortColumn = grid.classSort.getSortRow(columnName);
          let sortSymbol = '';
          if (sortColumn['order'] == 'desc') sortSymbol = '▼';else if (sortColumn['order'] == 'asc') sortSymbol = '▲';
          tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = sortSymbol;
        }
        tableCell.childNodes[0].childNodes[0].textContent = header[tbsGridNames.column.text];
        if (header[tbsGridNames.column.kind] == 'empty') {}
        ;
      }
    }
  }
  setDataPanel0(param) {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName0;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tablesRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let startColumnIndex = 0;
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
    for (let i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
      let tableRow = tablesRows[i];
      tableRow.style.height = grid.headerRowHeight + 'px';
      for (let x = startColumnIndex, colLen = grid.column_table.count(); x < colLen; x++) {
        let column = grid.column_table.data[x];
        let header = grid.headerColumnTable[i][x];
        let tableCell = tableRow.childNodes[x];
        let selectedValue = grid.isSelectedHeaderCell(panelName, x);
        if (selectedValue == 1) tableCell.classList.add('tbs-grid-cell-select');
        let columnName = header[tbsGridNames.column.name];
        tableCell.style.display = '';
        tableCell.style.display = header[tbsGridNames.column.visible] == true ? '' : 'none';
        tableCell.style.textAlign = header[tbsGridNames.column.align];
        tableCell.dataset.name = header[tbsGridNames.column.kind] == 'column' ? columnName : '';
        tableCell.dataset.kind = header[tbsGridNames.column.kind];
        tableCell.colSpan = header[tbsGridNames.column.colSpan];
        tableCell.rowSpan = header[tbsGridNames.column.rowSpan];
        if (header[tbsGridNames.column.kind] == 'column') {
          let className = grid.classColumn.getHeaderProperty(columnName, tbsGridNames.column.className);
          if (grid.notNull(className)) tableCell.classList.add(className);
          tableCell.style.display = column[tbsGridNames.column.visible] == true ? '' : 'none';
        }
        tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = '';
        if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName) && header[tbsGridNames.column.kind] == 'column') {
          let sortColumn = grid.classSort.getSortRow(columnName);
          let sortSymbol = '';
          if (sortColumn['order'] == 'desc') sortSymbol = '▼';else if (sortColumn['order'] == 'asc') sortSymbol = '▲';
          tableCell.querySelector('.tbs-grid-cell-span-sort').textContent = sortSymbol;
        }
        tableCell.childNodes[0].childNodes[0].textContent = header[tbsGridNames.column.text];
      }
    }
  }
  panel21_select() {
    //type : header, content, left, top
    let selector = this.selector;
    const grid = this.grid;
    let clsPanel = this;
    let table = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table');
    const cickEvent = function (e) {
      if (e.target.classList.contains('tbs-grid-cell-checkbox')) {} else return;
      if (clsPanel.isChecked) clsPanel.isChecked = false;else clsPanel.isChecked = true;
      for (let i = 0, len = grid.view_table.count(); i < len; i++) {
        grid.view_table.data[i].check = clsPanel.isChecked;
      }
      grid.classPanel20.setDataPanel();
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
    const mouseDownEvent = function (e) {
      document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseUpEvent = function (e) {
      let targetName;
      if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
      } else return;
      if (targetName == 'cell') {
        let col = e.target.closest('.tbs-grid-cell');
        if (col.cellIndex == 0) {
          let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
          let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(0, -1, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      }
      document.removeEventListener('mouseup', mouseUpEvent);
      grid.input_focus();
    };
    let eventPanel = document.querySelector(selector + ' .tbs-grid-panel21');
    eventPanel.addEventListener('mousedown', mouseDownEvent);
    eventPanel.addEventListener('click', cickEvent);
  }
  panel20_select(panelName) {
    //type : header, content, left, top
    let selector = this.selector;
    const grid = this.grid;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
    let moveCell;
    let moveCellLeft;
    let moveCellTop;
    let moveCellIndex;
    let moveCellRowIndex;
    let table = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table');
    let eventPanel = document.querySelector(selector + ' .tbs-grid-' + panelName);
    const mouseDownEvent = function (e) {
      let col = e.target.closest('.tbs-grid-cell');
      if (e.target.classList.contains('tbs-grid-cell-resize')) return;
      grid.startX = startX = window.pageXOffset + e.clientX;
      grid.startY = startY = window.pageYOffset + e.clientY;
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      startCellIndex = col.cellIndex;
      lastCellIndex = col.cellIndex;
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCell(e, table);
        } else if (window.event.shiftKey) {
          selectCellShift(e, table);
        }
      }
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseMoveEvent = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCellMove(e, table);
        }
      }
    };
    const mouseUpEvent = function (e) {
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      let isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
      let isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);
      if (isInPanel80) {
        // grouping panel
        if (grid.options.showGroupPanel == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
          let moveElement = document.querySelector('.tbs-grid-move');
          let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
          let rectMoveCell = moveElement.getBoundingClientRect();
          let columnIndex = moveElement.dataset.columnIndex;
          let rowIndex = moveElement.dataset.rowIndex;
          let column = grid.classColumn.getColumnByIndex(columnIndex);
          let name = column[tbsGridNames.column.name];
          let text = column[tbsGridNames.column.text];
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
          if (name != 'group_column') grid.classGroup.addGroupButton(name, text, order, targetIndex);
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
      } else if (isInPanel90) {
        // sorting panel
        if (grid.options.showSortPanel == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
          let moveElement = document.querySelector('.tbs-grid-move');
          let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
          let rectMoveCell = moveElement.getBoundingClientRect();
          let columnIndex = moveElement.dataset.columnIndex;
          let rowIndex = moveElement.dataset.rowIndex;
          let column = grid.classColumn.getColumnByIndex(columnIndex);
          let name = column[tbsGridNames.column.name];
          let text = column[tbsGridNames.column.text];
          let order = 'asc';

          // Find the one that is smaller to the button left than then move element left
          let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
          let targetButton;
          let targetIndex;
          let moveLeft = grid.getOffset(moveElement).left;
          for (let i = buttons.length + 1; i >= 0; i--) {
            let button = buttons[i];
            let buttonLeft = grid.getOffset(button).left;
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
      } else {
        if (mouseButton == 0 && startX > lastX - grid.mousePointRange && startX < lastX + grid.mousePointRange && startY > lastY - grid.mousePointRange && startY < lastY + grid.mousePointRange) {
          let element = e.target.closest('.tbs-grid-cell');
          let name = element.dataset.name;
          if (e.detail == 1) {
            if (grid.isColumnName(name)) grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
            if (grid.options.showSortPanel) grid.classSort.getSortButtonList();
          }
        } else {
          if (grid.fixedColumnIndex != -1) {
            if (document.querySelectorAll('.tbs-grid-move').length == 0) return;

            /* Find panel area */
            let isInPanel21 = grid.isInPanel(e, 'panel21', lastX, lastY);
            let isInPanel22 = grid.isInPanel(e, 'panel22', lastX, lastY);

            /* Set panel */
            let tdList20 = null;
            if (isInPanel21 || isInPanel22) tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel22 tbody td:not([style*="display :none"]');else tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');
            let headerColumns = grid.headerColumnTable;
            let movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
            let targetColumn;
            let fixedWidth = 50;
            for (let x = 0, len = tdList20.length; x < len; x++) {
              let cell = tdList20[x];
              targetColumn = grid.headerColumnTable[cell.parentNode.rowIndex - 1][cell.cellIndex];
              if (lastX - startX > 0) {
                // right direction move.
                if (lastX - fixedWidth <= cell.getBoundingClientRect().right && lastX + fixedWidth >= cell.getBoundingClientRect().right && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex] && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum] && moveCell.cellIndex != cell.cellIndex) {
                  grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                  break;
                }
              } else {
                if (lastX - fixedWidth <= cell.getBoundingClientRect().left && lastX + fixedWidth >= cell.getBoundingClientRect().left && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex] && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum] && moveCell.cellIndex != cell.cellIndex) {
                  grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'before');
                  break;
                }
              }
            }
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
            flagLeft = false;
            flagRight = false;
          } else {
            if (document.querySelectorAll('.tbs-grid-move').length > 0) {
              let rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();
              let movingColumn = grid.headerColumnTable[moveCellRowIndex - 1][moveCellIndex];
              let tdList20 = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody td:not([style*="display :none"]');
              let fixedWidth = 50;
              let targetColumn;
              for (let x = 0, len = tdList20.length; x < len; x++) {
                let cell = tdList20[x];
                targetColumn = grid.headerColumnTable[cell.parentNode.rowIndex - 1][cell.cellIndex];
                if (lastX - startX > 0) {
                  // right direction move.
                  if (lastX - fixedWidth <= cell.getBoundingClientRect().right && lastX + fixedWidth >= cell.getBoundingClientRect().right && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex] && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum] && moveCell.cellIndex != cell.cellIndex) {
                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                    break;
                  }
                } else {
                  if (lastX - fixedWidth <= cell.getBoundingClientRect().left && lastX + fixedWidth >= cell.getBoundingClientRect().left && movingColumn[tbsGridNames.column.rowIndex] == targetColumn[tbsGridNames.column.rowIndex] && movingColumn[tbsGridNames.column.parentNum] == targetColumn[tbsGridNames.column.parentNum] //column_parentNum
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
    const selectCell = function (e, table) {
      let col = e.target.closest('.tbs-grid-cell');
      let column = grid.classColumn.getColumnByIndex(col.cellIndex);
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
          span.classList.add('tbs-grid-cell-span');
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
          table.appendChild(tr);
          moveDiv.appendChild(table);
          document.body.appendChild(moveDiv);
        }
        moveDiv = document.querySelector('.tbs-grid-move');
        moveDiv.style.display = 'none';
        moveDiv.querySelector('.tbs-grid-cell-span').textContent = col.querySelector('.tbs-grid-cell-span').innerText;
        moveDiv = document.querySelector('.tbs-grid-move');
        let colRect = col.getBoundingClientRect();
        moveCell = col;
        moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
        moveCellTop = window.pageYOffset + e.clientY - colRect.top;
        moveCellIndex = col.cellIndex;
        moveCellRowIndex = col.parentNode.rowIndex;
        let nWidth = colRect.width + 2 + 'px';
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
    };
    const selectCellMove = function (e, table) {
      let col = e.target.closest('.tbs-grid-cell');
      flagLeft = false;
      flagRight = false;
      startX = grid.startX;
      startY = grid.startY;
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;

      //console.log(col);
      //console.log(`selectCellMove ${startX} == ${lastX} ${startY} == ${lastY}`);

      let moveY = lastY - startY;
      let moveX = lastX - startX;

      // let column = grid.classColumn.getColumnByIndex(col.cellIndex);
      // let columnName = column[tbsGridNames.column.name];
      let isMovable = grid.isMovableColumn();
      if (isMovable) {
        let moveDiv = document.querySelector('.tbs-grid-move');
        if (moveDiv) {
          moveDiv.style.left = lastX - moveCellLeft + 'px';
          moveDiv.style.top = lastY - moveCellTop + 'px';
          if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20) moveDiv.style.display = '';
        }
        //console.log(`111 ${startX} == ${lastX} ${startY} == ${lastY}`);
      } else {
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
        flagLeft = true;
        type = 'left';
        doInterval(type, lastX, lastY);
      }
      if (lastX > rectRight) {
        flagRight = true;
        type = 'right';
        doInterval(type, lastX, lastY);
      }
    };
    const selectCellShift = function (e, table) {};
    const select = function (startCellIndex, moveX, moveY, lastX, lastY) {
      let tableRect = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect();
      let top = window.pageYOffset + tableRect.top;
      let bottom = window.pageYOffset + tableRect.bottom;
      let sumRect = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
      let right = window.pageXOffset + sumRect.right;
      let left = window.pageXOffset + sumRect.left;

      //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
      //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
      //==================================================================
      let arr = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table td:not([data-name=""])');
      let tdList = Array.from(arr).sort(function (a, b) {
        a = a.cellIndex;
        b = b.cellIndex;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      if (moveX > 0) {
        let maxCellIndex;
        for (let x = 0, len = tdList.length; x < len; x++) {
          let cell = tdList[x];
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
          let cell = tdList[x];
          if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;
          let right = window.pageXOffset + cell.getBoundingClientRect().right;
          if (lastX < right) minCellIndex = cell.cellIndex;
        }
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      //==================================================================
    };
    const selectRefresh = function (type, lastX, lastY) {
      let content = document.querySelector(selector + ' .tbs-grid-panel30');
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
      let startRowIndex = grid.startRowIndex;
      let lastRowIndex = grid.lastRowIndex;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let trCount = trContent.length;
      let tdCount = trContent.length > 0 ? trContent[0].childNodes.length : 0;
      let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
        } else {
          grid.classScroll.setBarPositionByDirection('right');
        }
      }
      /* left */else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
        } else {
          grid.classScroll.setBarPositionByDirection('left');
        }
      }
      /* down */else if (type == 'down') {}
      /* up */else if (type == 'up') {}
    };
    const doInterval = function (type, lastX, lastY) {
      if (flagLeft) {
        //flagLeft  = false;
        flagRight = false;
        setTimeout(function () {
          doInterval('left', lastX, lastY);
        }, 5);
        selectRefresh('left', lastX, lastY);
      }
      if (flagRight) {
        flagLeft = false;
        //flagRight = false;
        setTimeout(function () {
          doInterval('right', lastX, lastY);
        }, 5);
        selectRefresh('right', lastX, lastY);
      }
    };
    eventPanel.addEventListener('mousedown', mouseDownEvent);
  }
}

/***/ }),

/***/ 730:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ TbsGridPanel30; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel30 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel30';
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
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.createTable('panel31', 0, grid.pageRowCount);
    classTable.createTable('panel32', 0, grid.pageRowCount);
    classTable.createTable('panel30', 0, grid.pageRowCount);
  }
  updateTableRows() {
    let selector = this.selector;
    const grid = this.grid;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
    let addRowCount = grid.pageRowCount - tableRows.length;
    if (addRowCount == 0) return;
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.updateTableRows('panel31', addRowCount);
    classTable.updateTableRows('panel32', addRowCount);
    classTable.updateTableRows('panel30', addRowCount);
  }
  setDataPanel(topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
    if (tableRows.length == 0) {
      grid.classPanel30.createTable();
    } else {
      if (tableRows.length < grid.pageRowCount) grid.classPanel30.updateTableRows();
    }
    grid.classRange.removePanelRange('panel30');
    grid.classPage.setPageData();
    this.setDataPanel1({
      panelName: 'panel31',
      topRowIndex: topRowIndex
    });
    this.setDataPanel2({
      panelName: 'panel30',
      topRowIndex: topRowIndex
    });
    this.setDataPanel0({
      panelName: 'panel32',
      topRowIndex: topRowIndex
    });
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.displaySelectedLine();
  }
  setDataPanel1(param) {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName1;
    let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = 0;
    let lastColumnIndex = grid.info_table.count() - 1;

    /* create table thead */
    //grid.classRow.setTableHead(grid, panelName);

    /* create table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
      let tableRow = tableRows[tableRowIndex];

      /* create table tr */
      grid.classRow.setTableRow(grid, tableRow, i, panelName);
      for (let x = 0; x < grid.info_table.count(); x++) {
        let tableCell = tableRow.childNodes[x];
        tableCell.dataset.rowIndex = i;
        tableCell.dataset.displayRowIndex = i;
        tableCell.dataset.cellType = grid.info_table.selectValue(x, tbsGridNames.column.type);
        /* Render: Start */
        let tbsGridRenderInfo = new _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridRenderInfo */ .w(grid);
        tbsGridRenderInfo.start(panelName, tableCell, grid.info_table.data[x], i, x);
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
    let result = grid.classColumn.getDisplayedHeaderColumn(panelName);
    let startColumnIndex = result.startColumnIndex;
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
        let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
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

    // panel32 : display rowCount
    if (param.panelName == 'panel32') {
      let rowCount = grid.getRowCount();
      if (grid.grid_mode == tbsGridTypes.GridMode.page) rowCount = grid.page_table.count();
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
    }
  }
  setDataPanel0(param) {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName0;
    let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
    let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
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
        let tableCell = tableRow.childNodes[x];
        if (grid.fixedColumnIndex != -1 && x <= grid.fixedColumnIndex) continue;

        /* Render: Start */
        let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
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
      let rowCount;
      if (grid.grid_mode == tbsGridTypes.GridMode.page || grid.grid_mode == tbsGridTypes.GridMode.pagination) rowCount = grid.page_table.count();else if (grid.grid_mode == tbsGridTypes.GridMode.page || grid.grid_mode == tbsGridTypes.GridMode.pagination) rowCount = '';else rowCount = grid.getRowCount();
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
    }
  }
  getSum(columnName) {
    const grid = this.grid;
    let result = 0;
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      let dataRow = grid.view_table.data[i];
      if (grid.isColumnTypeNumber(columnName)) {
        result += grid.null(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
      }
    }
    return result;
  }
  getAvg(columnName) {
    const grid = this.grid;
    let rowCount = grid.getRowCount();
    let result = rowCount == 0 ? 0 : this.getSum(columnName) / rowCount;
    return result;
  }
  getMax(columnIndex) {}
  getMin(columnIndex) {}
  panel30_select(eventPanelName) {
    let selector = this.selector;
    const grid = this.grid;
    let targetName;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
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
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      mouseButton = window.event.button;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = -1;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = tableCell.cellIndex;
      if (window.event.ctrlKey) selectCellCtrl(e);else if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          if (targetName == 'icon') {
            if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
              grid.classTree.setTreeFolding(tableCell);
              selectCell(e);
            } else if (grid.grid_mode == tbsGridTypes.GridMode.group) {
              grid.classGroup.setGroupFolding(tableCell);
              e.preventDefault();
              e.stopPropagation();
              //selectCell(e);
            }
          } else selectCell(e);
        } else if (window.event.shiftKey) selectCellShift(e);
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
      if (grid.options[tbsGridNames.row.selectMode] == 'cell') return;
      if (window.event.ctrlKey) selectCellCtrlMove(e);else if (window.event.shiftKey) {
        selectCellShiftMove(e);
      } else if (window.event.button === 0) {
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
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);

      // console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
      // input editing, input EditStart, input Editing, input EditEnd
      grid.input_focus();
      let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
      if (isInArea) {
        if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
          let param = {
            e: e,
            rowIndex: startRowIndex,
            cellIndex: startCellIndex,
            mode: 'mouse'
          };
          if (e.detail == 1) {
            let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
            if (panelInput.style.left != '30000px') {
              grid.editEnd();
              grid.input_focus();
            } else grid.tbs_executeEvent(true, 'click', param);
          } else if (e.detail == 2) {
            let isEditable = grid.column_table.data[startCellIndex][tbsGridNames.column.editable];
            if (isEditable) {
              if (grid.notNull(grid.user_edit)) {
                grid.editStart(e, 'mouse');
              } else {
                grid.input_show(e, 'mouse');
              }
            } else grid.tbs_executeEvent(true, 'dblclick', param);
          }
        }
      }
    };
    const selectCell = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = startCellIndex;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = startRowIndex;
      if (eventPanelName == 'panel60') {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      } else {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
        //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
      }
      grid.classRange.removeRange(0, -1);
      let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
      grid.classPanel30.setDataPanel(_topRowIndex);
    };
    const selectCellMove = function (e) {
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;

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
      if (grid.fixedRowIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        if (eventPanelName == 'panel60') {
          panel = document.querySelector(selector + ' .tbs-grid-group30');
        }
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect30.top + rect30.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else if (grid.fixedColumnIndex != -1) {
        if (eventPanelName == 'panel32') {
          let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
          let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
          let rect32 = panel32.getBoundingClientRect();
          let rect30 = panel30.getBoundingClientRect(); //absolute > relative position.

          let panelTop = rect32.top;
          let panelBottom = rect32.top + rect32.height;
          let panelLeft = rect32.left;
          let panelRight32 = rect30.left;
          let panelRight = rect30.left + rect30.width;

          // Outside the area
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          // if (lastX < panelRight32 && document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left != '0px') {
          //     flagLeft = true;
          //     doInterval(tbsGridTypes.Direction.left);
          // }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
          select(moveX, moveY);
        } else {
          let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
          let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
          let rect32 = panel32.getBoundingClientRect();
          let rect30 = panel30.getBoundingClientRect();
          let panelTop = rect30.top;
          let panelBottom = rect30.top + rect30.height;
          let panelLeft = rect30.left;
          let panelRight = rect30.left + rect30.width;

          // Outside the area
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
          select(moveX, moveY);
        }
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const selectCellCtrl = function (e) {};
    const selectCellCtrlMove = function (e) {};
    const selectCellShift = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      grid.startCellIndex = startCellIndex = startCellIndex == -1 ? tableCell.cellIndex : grid.startCellIndex;
      grid.lastCellIndex = lastCellIndex = tableCell.cellIndex;
      grid.startRowIndex = startRowIndex = startRowIndex == -1 ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
      grid.lastRowIndex = lastRowIndex = tableCell.parentNode.dataset.rowIndex;

      //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

      if (eventPanelName == 'panel60') {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      } else {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      }
      grid.classRange.removeRange(0, -1);
      let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
      grid.classPanel30.setDataPanel(_topRowIndex);
    };
    const selectCellShiftMove = function (e) {
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;

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
      if (grid.fixedRowIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        if (eventPanelName == 'panel60') {
          panel = document.querySelector(selector + ' .tbs-grid-group30');
        }
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect30.top + rect30.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const select = function (moveX, moveY) {
      if (moveY > 0 && moveX > 0) {
        //down, right
        let maxRowIndex, maxCellIndex;
        maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
        maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
        //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY > 0 && moveX < 0) {
        //down, left
        let maxRowIndex, minCellIndex;
        maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
        minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
        //console.log(`eventPanelName ${eventPanelName} 2) $maxRowIndex  ${maxRowIndex} minCellIndex ${minCellIndex}`);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY < 0 && moveX > 0) {
        //up, right
        let minRowIndex, maxCellIndex;
        minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
        maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
        //console.log(`eventPanelName ${eventPanelName}  3) minRowIndex ${minRowIndex} maxCellIndex ${maxCellIndex}`);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, maxCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY < 0 && moveX < 0) {
        //up, left
        let minRowIndex, minCellIndex;
        minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
        minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
        //console.log(`eventPanelName ${eventPanelName} 4)  minRowIndex ${minRowIndex} minCellIndex ${minCellIndex}`);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, minCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
    };
    const setPanelMove = function (type) {
      // panel outside area
      let startRowIndex = grid.startRowIndex;
      let lastRowIndex = grid.lastRowIndex;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableCellCount = tableRows.length > 0 ? tableRows[0].childNodes.length : 0;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('right');
          maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      } else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('left');
          minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      } else if (type == 'down') {
        grid.classScroll.setBarPositionByDirection('down');
        if (lastRowIndex < grid.view_table.count() - 1) {
          lastRowIndex += 1;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else flagDown = false;
      } else if (type == 'up') {
        grid.classScroll.setBarPositionByDirection('up');
        if (grid.fixedRowIndex != -1) {
          if (lastRowIndex != 0) {
            let minRowIndex = lastRowIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
          } else flagUp = false;
        } else {
          if (lastRowIndex != 0) {
            let minRowIndex = lastRowIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
          } else flagUp = false;
        }
      }
    };
    const doInterval = function (type) {
      if (type == tbsGridTypes.Direction.left || type == tbsGridTypes.Direction.right) {
        if (flagLeft) {
          //flagLeft  = false;
          flagRight = false;
          setTimeout(() => doInterval('left'), 15);
          setPanelMove('left');
        }
        if (flagRight) {
          flagLeft = false;
          //flagRight = false;
          setTimeout(() => doInterval('right'), 15);
          setPanelMove('right');
        }
      } else {
        if (flagUp) {
          //flagUp    = false;
          flagDown = false;
          setTimeout(() => doInterval('up'), 15);
          setPanelMove('up');
        }
        if (flagDown) {
          flagUp = false;
          //flagDown  = false;
          setTimeout(() => doInterval('down'), 15);
          setPanelMove('down');
        }
      }
    };
    eventPanel.addEventListener('mousedown', mouseDownEvent);
  }
  panel31_select(eventPanelName) {
    let selector = this.selector;
    const grid = this.grid;
    let targetName;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
    let eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
    const clickEvent = function (e) {
      if (e.target.classList.contains('tbs-grid-cell-checkbox')) {} else return;
      let rowIndex = e.target.parentNode.parentNode.dataset.rowIndex;
      grid.view_table.data[rowIndex].check = e.target.checked;
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
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
      if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      if (tableCell.dataset.cellType != 'number') return;
      mouseButton = window.event.button;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = -1;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = tableCell.cellIndex;
      if (window.event.ctrlKey) selectCellCtrl(e);else if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCell(e);
        } else if (window.event.shiftKey) selectCellShift(e);
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
      if (grid.options[tbsGridNames.row.selectMode] == 'cell') return;
      if (window.event.ctrlKey) selectCellCtrlMove(e);else if (window.event.shiftKey) {
        selectCellShiftMove(e);
      } else if (window.event.button === 0) {
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
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);

      // console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
      // input editing, input EditStart, input Editing, input EditEnd
      grid.input_focus();
      let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
      if (isInArea) {
        if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
          let param = {
            e: e,
            rowIndex: startRowIndex,
            cellIndex: startCellIndex,
            mode: 'mouse'
          };
          if (e.detail == 1) grid.tbs_executeEvent(true, 'click', param);else if (e.detail == 2) {
            let isEditable = grid.isEditable().column_table.data[startCellIndex][tbsGridNames.column.editable];
            if (isEditable) {
              if (grid.notNull(grid.user_edit)) {
                //grid.input_edit(e, 0, 'mouse');
                grid.editStart(e, 'mouse');
              } else {
                grid.input_show(e, 'mouse');
              }
            } else grid.tbs_executeEvent(true, 'dblclick', param);
          }
        }
      }
    };
    const selectCell = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      if (tableCell.dataset.cellType != 'number') return;

      // startCellIndex = tableCell.cellIndex;
      // lastCellIndex  = startCellIndex;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = startRowIndex;
      if (eventPanelName == 'panel61') {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      } else {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
        //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
      }
      let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
      let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
      grid.classRange.removeRange(0, -1);
      let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, fromCellIndex, toCellIndex);
      grid.classPanel30.setDataPanel(_topRowIndex);
    };
    const selectCellMove = function (e) {
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      let moveY = grid.lastY - grid.startY;
      let moveX = grid.lastX - grid.startX;
      let lastX = grid.lastX;
      let lastY = grid.lastY;
      if (grid.fixedRowIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        if (eventPanelName == 'panel60') {
          panel = document.querySelector(selector + ' .tbs-grid-group30');
        }
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect30.top + rect30.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const selectCellCtrl = function (e) {};
    const selectCellCtrlMove = function (e) {};
    const selectCellShift = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      if (tableCell.dataset.cellType != 'number') return;
      grid.startCellIndex = startCellIndex = startCellIndex == -1 ? tableCell.cellIndex : grid.startCellIndex;
      grid.lastCellIndex = lastCellIndex = tableCell.cellIndex;
      grid.startRowIndex = startRowIndex = startRowIndex == -1 ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
      grid.lastRowIndex = lastRowIndex = tableCell.parentNode.dataset.rowIndex;

      //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)

      if (eventPanelName == 'panel60') {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel61 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      } else {
        if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
          let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
          for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let rect = tableRow.childNodes[0].getBoundingClientRect();
            if (window.pageYOffset + rect.top < startY && startY < window.pageYOffset + rect.bottom) {
              startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
              break;
            }
          }
        }
      }
      let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
      let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
      grid.classRange.removeRange(0, -1);
      let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
      grid.classPanel30.setDataPanel(_topRowIndex);
    };
    const selectCellShiftMove = function (e) {
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;

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
      if (grid.fixedRowIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        if (eventPanelName == 'panel60') {
          panel = document.querySelector(selector + ' .tbs-grid-group30');
        }
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect30.top + rect30.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const select = function (moveX, moveY) {
      let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
      let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
      if (moveY > 0 && moveX > 0) {
        //down, right
        let maxRowIndex, maxCellIndex;
        maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY > 0 && moveX < 0) {
        //down, left
        let maxRowIndex, minCellIndex;
        maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY < 0 && moveX > 0) {
        //up, right
        let minRowIndex, maxCellIndex;
        minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      if (moveY < 0 && moveX < 0) {
        //up, left
        let minRowIndex, minCellIndex;
        minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
    };
    const setPanelMove = function (type) {
      // panel outside area
      let startRowIndex = grid.startRowIndex;
      let lastRowIndex = grid.lastRowIndex;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
      let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
      let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableCellCount = tableRows.length > 0 ? tableRows[0].childNodes.length : 0;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('right');
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      } else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('left');
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      } else if (type == 'down') {
        grid.classScroll.setBarPositionByDirection('down');
        if (lastRowIndex < grid.view_table.count() - 1) {
          lastRowIndex += 1;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else flagDown = false;
      } else if (type == 'up') {
        grid.classScroll.setBarPositionByDirection('up');
        if (grid.fixedRowIndex != -1) {
          if (lastRowIndex != 0) {
            let minRowIndex = lastRowIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
          } else flagUp = false;
        } else {
          if (lastRowIndex != 0) {
            let minRowIndex = lastRowIndex;
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
            grid.classRange.removeRange(0, -1);
            let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
          } else flagUp = false;
        }
      }
    };
    const doInterval = function (type) {
      if (flagLeft) {
        flagUp = false;
        flagDown = false;
        //flagLeft  = false;
        flagRight = false;
        setTimeout(() => doInterval('left'), 15);
        setPanelMove('left');
      }
      if (flagRight) {
        flagUp = false;
        flagDown = false;
        flagLeft = false;
        //flagRight = false;
        setTimeout(() => doInterval('right'), 15);
        setPanelMove('right');
      }
      if (flagUp) {
        //flagUp    = false;
        flagDown = false;
        flagLeft = false;
        flagRight = false;
        setTimeout(() => doInterval('up'), 5);
        setPanelMove('up');
      }
      if (flagDown) {
        flagUp = false;
        //flagDown  = false;
        flagLeft = false;
        flagRight = false;
        setTimeout(() => doInterval('down'), 5);
        setPanelMove('down');
      }
    };
    eventPanel.addEventListener('mousedown', mouseDownEvent);
    eventPanel.addEventListener('click', clickEvent);
  }
}

/***/ }),

/***/ 105:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ TbsGridPanel40; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel40 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel40';
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
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.createTable('panel41', 0, 1);
    classTable.createTable('panel42', 0, 1);
    classTable.createTable('panel40', 0, 1);
  }
  setDataPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.classRange.removePanelRange('panel40');
    this.setDataPanel2({
      panelName: 'panel41',
      summaryColumns: grid.top_column_table.data
    });
    this.setDataPanel1({
      panelName: 'panel40',
      summaryColumns: grid.top_column_table.data
    });
    this.setDataPanel0({
      panelName: 'panel42',
      summaryColumns: grid.top_column_table.data
    });
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
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
      let tableRow = tableRows[tableRowIndex];

      /* Render: TableRow */
      grid.classRow.setTableRow(grid, tableRow, i, panelName);
      let tableCell = tableRow.childNodes[0];
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
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRow = tableRows[0];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
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
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRow = tableRows[0];
    for (let x = 0, len = grid.column_table.count(); x < len; x++) {
      let column = grid.column_table.data[x];
      let columnName = column[tbsGridNames.column.name];
      let tableCell = tableRow.childNodes[x];
      if (grid.fixedColumnIndex != -1) {
        if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
      } else {
        if (x < startColumnIndex) continue;
      }
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
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
    let classRange = eventPanelName == 'panel40' || eventPanelName == 'panel42' ? grid.classRange40 : grid.classRange50;
    let targetName;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
    let eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
    const mouseDownEvent = function (e) {
      startX = grid.startX = window.pageXOffset + e.clientX;
      startY = grid.startY = window.pageYOffset + e.clientY;
      lastX = grid.lastX = window.pageXOffset + e.clientX;
      lastY = grid.lastY = window.pageYOffset + e.clientY;
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      mouseButton = window.event.button;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = -1;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = tableCell.cellIndex;
      if (window.event.ctrlKey) selectCellCtrl(e);else if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          if (targetName == 'icon') {
            if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
              grid.classTree.setTreeFolding(tableCell);
              selectCell(e);
            } else if (grid.grid_mode == tbsGridTypes.GridMode.group) {
              grid.classGroup.setGroupFolding(tableCell);
              selectCell(e);
            }
          } else selectCell(e);
        } else if (window.event.shiftKey) selectCellShift(e);
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
      if (grid.options[tbsGridNames.row.selectMode] == 'cell') return;
      if (window.event.ctrlKey) selectCellCtrlMove(e);else if (window.event.shiftKey) {
        selectCellShiftMove(e);
      } else if (window.event.button === 0) {
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
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);

      // console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
      // input editing, input EditStart, input Editing, input EditEnd
      grid.input_focus();
      let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
      if (isInArea) {
        if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
          let param = {
            e: e,
            rowIndex: startRowIndex,
            cellIndex: startCellIndex,
            mode: 'mouse'
          };
          if (e.detail == 1) {
            let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
            if (panelInput.style.left != '30000px') {
              grid.editEnd();
              grid.input_focus();
            } else grid.tbs_executeEvent(true, 'click', param);
          } else if (e.detail == 2) {
            let isEditable = grid.column_table.data[startCellIndex][tbsGridNames.column.editable];
            if (isEditable) {
              if (grid.notNull(grid.user_edit)) {
                grid.editStart(e, 'mouse');
              } else {
                grid.input_show(e, 'mouse');
              }
            } else grid.tbs_executeEvent(true, 'dblclick', param);
          }
        }
      }
    };
    const selectCell = function (e) {
      let tableCell;
      //if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
      //console.log(`e.target.className ${e.target.className}`);
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = startCellIndex;
      startRowIndex = 0;
      lastRowIndex = 0;
      classRange.removeRange(0, -1);
      classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
    };
    const selectCellMove = function (e) {
      flagLeft = false;
      flagRight = false;
      let moveY = grid.lastY - grid.startY;
      let moveX = grid.lastX - grid.startX;
      let lastX = grid.lastX;
      let lastY = grid.lastY;
      if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-panel32');
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          } else if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-panel30'); // + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          } else if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
        }
        select(moveX, moveY);
      }
    };
    const selectCellCtrl = function (e) {};
    const selectCellCtrlMove = function (e) {};
    const selectCellShift = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      classRange.startCellIndex = startCellIndex = startCellIndex == -1 ? tableCell.cellIndex : classRange.startCellIndex;
      classRange.lastCellIndex = lastCellIndex = tableCell.cellIndex;
      classRange.startRowIndex = startRowIndex = 0;
      classRange.lastRowIndex = lastRowIndex = 0;
      classRange.removeRange(0, -1);
      classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
    };
    const selectCellShiftMove = function (e) {
      flagLeft = false;
      flagRight = false;
      let moveY = grid.lastY - grid.startY;
      let moveX = grid.lastX - grid.startX;
      let lastX = grid.lastX;
      let lastY = grid.lastY;
      if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const select = function (moveX, moveY) {
      if (moveX > 0) {
        // right
        let maxRowIndex, maxCellIndex;
        maxRowIndex = 0;
        maxCellIndex = classRange.getMaxCellIndexByMouseMove();
        //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
        classRange.removeRange(0, -1);
        classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
      } else if (moveX < 0) {
        // left
        let maxRowIndex, minCellIndex;
        maxRowIndex = 0;
        minCellIndex = classRange.getMinCellIndexByMouseMove();
        classRange.removeRange(0, -1);
        classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
      }
    };
    const setPanelMove = function (type) {
      // panel outside area
      let startRowIndex = 0;
      let lastRowIndex = 0;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let maxCellIndex, minCellIndex;
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableCellCount = tableRows.length > 0 ? tableRows[0].childNodes.length : 0;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
          classRange.removeRange(0, -1);
          classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
        } else {
          grid.classScroll.setBarPositionByDirection('right');
          maxCellIndex = classRange.getMaxCellIndexByMouseMove();
          classRange.removeRange(0, -1);
          classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
        }
      } else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
          classRange.removeRange(0, -1);
          classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('left');
          minCellIndex = classRange.getMinCellIndexByMouseMove();
          classRange.removeRange(0, -1);
          classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
        }
      }
    };
    const doInterval = function (type) {
      if (flagLeft) {
        //flagLeft  = false;
        flagRight = false;
        setTimeout(() => doInterval('left'), 15);
        setPanelMove('left');
      }
      if (flagRight) {
        flagLeft = false;
        //flagRight = false;
        setTimeout(() => doInterval('right'), 15);
        setPanelMove('right');
      }
    };
    eventPanel.addEventListener('mousedown', mouseDownEvent);
  }
  panel41_select(eventPanelName) {
    let selector = this.selector;
    const grid = this.grid;
    let targetName;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
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
      if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      if (tableCell.dataset.cellType != 'number') return;
      mouseButton = window.event.button;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = -1;
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = tableCell.cellIndex;
      if (window.event.ctrlKey) selectCellCtrl(e);else if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCell(e);
        } else if (window.event.shiftKey) selectCellShift(e);
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
      if (grid.options[tbsGridNames.row.selectMode] == 'cell') return;
      if (window.event.ctrlKey) selectCellCtrlMove(e);else if (window.event.shiftKey) {
        selectCellShiftMove(e);
      } else if (window.event.button === 0) {
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
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);

      // console.log(`${mouseButton} ${startX} == ${lastX} ${startY} == ${lastY}`);
      // input editing, input EditStart, input Editing, input EditEnd
      grid.input_focus();
      let isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
      if (isInArea) {
        if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
          let param = {
            e: e,
            rowIndex: startRowIndex,
            cellIndex: startCellIndex,
            mode: 'mouse'
          };
          if (e.detail == 1) grid.tbs_executeEvent(true, 'click', param);else if (e.detail == 2) {
            let isEditable = grid.column_table.data[startCellIndex][tbsGridNames.column.editable];
            if (isEditable) {
              if (grid.notNull(grid.user_edit)) {
                //grid.input_edit(e, 0, 'mouse');
                grid.editStart(e, 'mouse');
              } else {
                grid.input_show(e, 'mouse');
              }
            } else grid.tbs_executeEvent(true, 'dblclick', param);
          }
        }
      }
    };
    const selectCell = function (e) {
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      } else return;
      if (tableCell.dataset.cellType != 'number') return;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = startRowIndex;
      let panelName = eventPanelName;
      if (panelName == 'panel41') {
        grid.classRange40.removeRange(0, -1);
        grid.classRange40.selectRange(0, 0);
      } else if (panelName == 'panel51') {
        grid.classRange50.removeRange(0, -1);
        grid.classRange50.selectRange(0, 0);
      }
    };
    const selectCellMove = function (e) {
      flagUp = false;
      flagDown = false;
      flagLeft = false;
      flagRight = false;
      let moveY = grid.lastY - grid.startY;
      let moveX = grid.lastX - grid.startX;
      let lastX = grid.lastX;
      let lastY = grid.lastY;
      if (grid.fixedRowIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        if (eventPanelName == 'panel60') {
          panel = document.querySelector(selector + ' .tbs-grid-group30');
        }
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect30.top + rect30.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        //console.log(`selectCellMove : lastX ${lastX} < panelLeft : ${panelLeft} > panelRight ${panelRight}`);

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else if (grid.fixedColumnIndex != -1) {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let rect30 = panel30.getBoundingClientRect();
        let absRect30 = grid.getOffset(panel30);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect30.left + rect30.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      } else {
        let panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        let rect = panel.getBoundingClientRect();
        let absRect = grid.getOffset(panel);
        let panelTop = absRect.top;
        let panelBottom = absRect.top + rect.height;
        let panelLeft = absRect.left;
        let panelRight = absRect.left + rect.width;

        // Outside the area
        if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
          if (lastX < panelLeft) {
            flagLeft = true;
            doInterval(tbsGridTypes.Direction.left);
          }
          if (lastX > panelRight) {
            flagRight = true;
            doInterval(tbsGridTypes.Direction.right);
          }
          if (lastY < panelTop) {
            flagUp = true;
            doInterval(tbsGridTypes.Direction.up);
          }
          if (lastY > panelBottom) {
            flagDown = true;
            doInterval(tbsGridTypes.Direction.down);
          }
        }
        select(moveX, moveY);
      }
    };
    const selectCellCtrl = function (e) {};
    const selectCellCtrlMove = function (e) {};
    const selectCellShift = function (e) {};
    const selectCellShiftMove = function (e) {};
    const select = function (moveX, moveY) {
      let panelName = eventPanelName;
      if (panelName == 'panel41') {
        grid.classRange40.removeRange(0, -1);
        grid.classRange40.selectRange(0, 0);
      } else if (panelName == 'panel51') {
        grid.classRange50.removeRange(0, -1);
        grid.classRange50.selectRange(0, 0);
      }
    };
    eventPanel.addEventListener('mousedown', mouseDownEvent);
  }
}

/***/ }),

/***/ 708:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ TbsGridPanel50; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel50 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel50';
    this.panelName1 = 'panel51';
    this.panelName2 = 'panel52';
    this.panelName0 = 'panel50';
  }
  createHtml(parentElement) {
    const grid = this.grid;
    let s = '';
    s += '<div class="tbs-grid-group51">';
    s += '<div class="tbs-grid-panel">';
    s += '<div class="tbs-grid-panel51"><table class="tbs-grid-table"></table></div>';
    s += '<div class="tbs-grid-panel52"><table class="tbs-grid-table"></table></div>';
    s += '</div>';
    s += '</div>';
    s += '<div class="tbs-grid-group50">';
    s += '<div class="tbs-grid-panel">';
    s += '<div class="tbs-grid-panel50"><table class="tbs-grid-table"></table></div>';
    s += '</div>';
    s += '</div>';
    parentElement.insertAdjacentHTML('beforeend', s);
  }
  createTable() {
    const grid = this.grid;
    if (grid.footer_column_table.count() == 0) return;
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.createTable('panel51', 0, 1);
    classTable.createTable('panel52', 0, 1);
    classTable.createTable('panel50', 0, 1);
  }
  setDataPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.classRange.removePanelRange('panel50');
    this.setDataPanel2({
      panelName: 'panel51',
      summaryColumns: grid.footer_table.data
    });
    this.setDataPanel1({
      panelName: 'panel50',
      summaryColumns: grid.footer_table.data
    });
    this.setDataPanel0({
      panelName: 'panel52',
      summaryColumns: grid.footer_table.data
    });
  }
  setDataPanel1() {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName1;
    if (grid.footer_table.count() == 0) return;
    let topRowIndex = 0;
    let bottomRowIndex = 0;
    let pageRowCount = 1;
    let rowHeight = grid.rowHeight;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    if (tableRows.length == 0) return;

    //startColumnIndex, lastColumIndex
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;
    let tableRowIndex = 0;
    for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
      let tableRow = tableRows[tableRowIndex];

      /* Render: TableRow */
      grid.classRow.setTableRow(grid, tableRow, i, panelName);
      let tableCell = tableRow.childNodes[0];
      tableCell.dataset.rowIndex = i;
      tableCell.dataset.displayRowIndex = i;
      tableRow.childNodes[0].dataset.cellType = 'number';
      grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
    }
  }
  setDataPanel2() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.fixedColumnIndex == -1) return;
    let panelName = this.panelName2;
    if (grid.footer_table.count() == 0) return;

    //startColumnIndex, lastColumIndex
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRow = tableRows[0];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, column, 0, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, column, 0, x);

      grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
    }
    // on fixed columns
    const tbsGridCell = grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
  }
  setDataPanel0() {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName0;
    if (grid.footer_table.count() == 0) return;
    //startColumnIndex, lastColumIndex
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
    let tableRow = tableRows[0];
    for (let x = 0, len = grid.column_table.count(); x < len; x++) {
      let column = grid.column_table.data[x];
      let columnName = column[tbsGridNames.column.name];
      let tableCell = tableRow.childNodes[x];
      if (grid.fixedColumnIndex != -1) {
        if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
      } else {
        if (x < startColumnIndex) continue;
      }
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);

      grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
    }
    // on fixed columns
    grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
  }
}

/***/ }),

/***/ 222:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ TbsGridPanel70; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();




class TbsGridPanel70 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel70';
    this.panelName1 = 'panel71';
    this.panelName2 = 'panel72';
    this.panelName0 = 'panel70';
  }
  createHtml(parentElement) {
    const grid = this.grid;
    let s = '';
    s += '<div class="tbs-grid-group71">';
    s += '<div class="tbs-grid-panel">';
    s += '<div class="tbs-grid-panel71"><table class="tbs-grid-table"></table></div>';
    s += '<div class="tbs-grid-panel72"><table class="tbs-grid-table"></table></div>';
    s += '</div>';
    s += '</div>';
    s += '<div class="tbs-grid-group70">';
    s += '<div class="tbs-grid-panel">';
    s += '<div class="tbs-grid-panel70"><table class="tbs-grid-table"></table></div>';
    s += '</div>';
    s += '</div>';
    parentElement.insertAdjacentHTML('beforeend', s);
  }
  createTable() {
    const grid = this.grid;
    const classTable = new _tbs_grid_table_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridTable */ .u(grid);
    classTable.createTable('panel71', 0, 2);
    classTable.createTable('panel72', 0, 2);
    classTable.createTable('panel70', 0, 2);
  }
  setDataPanel() {
    let selector = this.selector;
    const grid = this.grid;
    this.setDataPanel2({
      panelName: 'panel72'
    });
    this.setDataPanel0({
      panelName: 'panel70'
    });
  }
  setDataPanel2(param) {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName2;
    if (grid.options.showFilterPanel != true) return;
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
    let tableRow = tableRows[0];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      let columnName = column[tbsGridNames.column.name];

      /* Render: Start */
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);

      let combo = grid.classFilter.createFilterCombo(column);
      combo.classList.add('tbs-grid-cell-filter-combo');
      combo.dataset.name = columnName;
      combo.style.width = '100%';
      if (grid.isFilterColumnName(columnName)) {
        let filterColumn = grid.getFilterColumn(columnName);
        combo.value = filterColumn[grid.const_filterType];
      }
      ;
      tableCell.childNodes[0].innerHTML = '';
      tableCell.childNodes[0].append(combo);
    }
    // on fixed columns
    grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    tableRow = tableRows[1];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      let columnName = column[tbsGridNames.column.name];

      /* Render: Start */
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);

      // Set input
      let input = document.createElement('input');
      input.classList.add('tbs-grid-cell-filter-input');
      input.dataset.name = columnName;
      input.style.width = '100%';
      if (grid.isFilterColumnName(columnName)) {
        let filterColumn = grid.getFilterColumn(columnName);
        input.value = filterColumn[grid.const_filterValue];
      }
      ;
      tableCell.childNodes[0].innerHTML = '';
      tableCell.childNodes[0].append(input);
    }

    /* on fixed columns */
    grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
  }
  setDataPanel0(param) {
    let selector = this.selector;
    const grid = this.grid;
    let panelName = this.panelName0;
    if (grid.options.showFilterPanel != true) return;
    let result = grid.classColumn.getDisplayedHeaderColumn();
    let startColumnIndex = result.startColumnIndex;
    let lastColumnIndex = result.lastColumnIndex;

    /* table thead */
    grid.classRow.setTableHead(grid, panelName);

    /* table tbody */
    let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
    let tableRow = tableRows[0];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      let columnName = column[tbsGridNames.column.name];

      /* Render: Start */
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);

      let combo = grid.classFilter.createFilterCombo(column);
      combo.classList.add('tbs-grid-cell-filter-combo');
      combo.dataset.name = columnName;
      combo.style.width = '100%';
      if (grid.isFilterColumnName(columnName)) {
        let filterColumn = grid.getFilterColumn(columnName);
        combo.value = filterColumn[grid.const_filterType];
      }
      ;
      tableCell.childNodes[0].innerHTML = '';
      tableCell.childNodes[0].append(combo);
    }

    // on fixed columns
    grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    tableRow = tableRows[1];
    for (let x = 0; x <= lastColumnIndex; x++) {
      let column = grid.column_table.data[x];
      let tableCell = tableRow.childNodes[x];
      let columnName = column[tbsGridNames.column.name];

      /* Render: Start */
      let tbsGridRender = new _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRender */ .s(grid);
      tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);
      tbsGridRender = null;
      //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 1, x);

      // Set input
      let input = document.createElement('input');
      input.classList.add('tbs-grid-cell-filter-input');
      input.dataset.name = columnName;
      input.style.width = '100%';
      if (grid.isFilterColumnName(columnName)) {
        let filterColumn = grid.getFilterColumn(columnName);
        input.value = filterColumn[grid.const_filterValue];
      }
      ;
      tableCell.childNodes[0].innerHTML = '';
      tableCell.childNodes[0].append(input);
    }

    /* on fixed columns */
    grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    grid.classPanel70.panel70_select('panel70');
    grid.classPanel70.panel70_select('panel72');
  }
  panel70_select(panelName) {
    let selector = this.selector;
    const grid = this.grid;
    let element;
    let targetName;
    const changeEvent = function (e) {
      e.preventDefault();
      e.stopPropagation();
      let combo = e.target;
      let columnName = combo.dataset.name;
      let column = grid.classColumn.getColumn(columnName);
      let columnIndex = grid.classColumn.getColumnIndex(columnName);
      let columnType = column[tbsGridNames.column.type];
      let filterType = combo.selectedOptions[0].value;
      let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
      let input = inputs[columnIndex];
      let word = input.value;
      if (filterType == '8') {
        input.value = '';
        grid.classFilter.setFilterColumn(column, filterType, word);
        grid.classFilter.filters();
        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);else grid.apply();
      } else if (filterType != '0' && word != '') {
        let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
        grid.classFilter.setFilterColumn(column, filterType, word);
        grid.classFilter.filters();
        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);else grid.apply();
      } else {
        // delete filterColumn.
        grid.classFilter.removeFilterColumn(column);
        grid.filter_column_table.removeByRowId(column);
        grid.classFilter.filters();
        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);else grid.apply();
      }
    };
    const keyupEvent = function (e) {
      let input = e.target;

      //if (e.keyCode == 13 || e.keyCode == 9) {
      grid.FocusControl = 'filterInput';
      let columnName = input.dataset.name;
      let column = grid.classColumn.getColumn(columnName);
      let columnIndex = grid.classColumn.getColumnIndex(columnName);
      let columnType = column[tbsGridNames.column.type];
      let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
      let combo = combos[columnIndex];
      let filterType = combo.selectedOptions[0].value;
      let word = input.value;
      if (filterType != '0') {
        let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
        grid.classFilter.setFilterColumn(column, filterType, word);
        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);else {
          grid.classFilter.filters();
          grid.apply();
        }
      } else {
        // delete filterColumn.
        grid.classFilter.removeFilterColumn(column);
        grid.classFilter.filters();
        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) grid.setData(grid.view_table.data, null, false);else grid.apply();
      }
      if (e.keyCode == 13 || e.keyCode == 9) {
        grid.FocusControl = '';
      }
    };
    const blurEvent = function (e) {
      grid.FocusControl = '';
    };
    // let panel70 = document.querySelectorAll(selector + ' .tbs-grid-panel70');
    //
    // panel70.addEventListener('keyup', keyupEvent);
    // panel70.addEventListener('change', changeEvent);

    let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
    let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
    for (let i = 0, len = inputs.length; i < len; i++) {
      inputs[i].addEventListener('keyup', keyupEvent);
      inputs[i].addEventListener('blur', blurEvent);
      combos[i].addEventListener('change', changeEvent);
    }
  }
}

/***/ }),

/***/ 661:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ TbsGridPanel80; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();



class TbsGridPanel80 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel80';
  }
  createHtml(parentElement) {
    const grid = this.grid;
    let className = grid.options.showGroupPanel ? 'tbs-grid-show' : 'tbs-grid-hide';
    let s = '<div class="tbs-grid-panel80 ' + className + '"></div>';
    parentElement.insertAdjacentHTML('beforeend', s);
    grid.classPanel80.panel80_select();
  }
  createTable() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    const div = document.createElement('div');
    div.className = 'tbs-grid-panel-bar';
    const span = document.createElement('span');
    span.className = 'tbs-grid-panel-bar-span';
    span.textContent = grid.getConfigLabel('group_placeholder');
    div.appendChild(span);
    document.querySelector(selector + ' .tbs-grid-panel80').appendChild(div);
  }
  panel80_select() {
    //type : header, content, left, top
    let selector = this.selector;
    const grid = this.grid;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let targetName;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
    let moveCell;
    let moveCellLeft;
    let moveCellTop;
    let moveCellIndex;
    let moveCellRowIndex;
    let panel80 = document.querySelector(selector + ' .tbs-grid-panel80');
    const mouseDownEvent = function (e) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      } else return;
      grid.startX = startX = window.scrollX + e.clientX;
      grid.startY = startY = window.scrollY + e.clientY;
      grid.lastX = lastX = window.scrollX + e.clientX;
      grid.lastY = lastY = window.scrollY + e.clientY;
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCell(e, panel80);
        } else if (window.event.shiftKey) {
          selectCellShift(e, panel80);
        }
      }
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseMoveEvent = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCellMove(e, panel80);
        }
      }
    };
    const mouseUpEvent = function (e) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      }
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      let isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
      if (isInPanel80) {
        if (mouseButton == 0 && startX > lastX - grid.mousePointRange && startX < lastX + grid.mousePointRange && startY > lastY - grid.mousePointRange && startY < lastY + grid.mousePointRange) {
          let element = e.target;
          let name = element.dataset.name;
          if (e.detail == 1 && targetName == 'icon') {
            grid.classGroup.removeGroupButton(element);
          }
        } else {
          if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
            let moveElement = document.querySelector('.tbs-grid-move');
            let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
            let rectMoveCell = moveElement.getBoundingClientRect();
            let name = moveElement.dataset.name;
            let column = grid.classColumn.getColumn(name);
            let text = column[tbsGridNames.column.text];
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
            grid.classGroup.changeGroupButtonOrder(name, text, order, targetIndex);
            flagLeft = false;
            flagRight = false;
            flagUp = false;
            flagDown = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
          }
        }
        flagLeft = false;
        flagRight = false;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
      } else {
        if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
        flagLeft = false;
        flagRight = false;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
      }
    };
    const selectCell = function (e, table) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      } else return;
      if (targetName == 'button' || targetName == 'text') {
        let col = null;
        if (targetName == 'text') col = element.parentNode;else col = element;
        let columnName = col.dataset.name;
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
          span.classList.add('tbs-grid-cell-span');
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
          table.appendChild(tr);
          moveDiv.appendChild(table);
          document.body.appendChild(moveDiv);
        }
        moveDiv = document.querySelector('.tbs-grid-move');
        moveDiv.style.display = 'none';
        moveDiv.querySelector('.tbs-grid-cell-span').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
        moveDiv = document.querySelector('.tbs-grid-move');
        let colRect = col.getBoundingClientRect();
        moveCell = col;
        moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
        moveCellTop = window.pageYOffset + e.clientY - colRect.top;
        moveCellIndex = col.cellIndex;
        moveCellRowIndex = col.parentNode.rowIndex;
        let nWidth = colRect.width + 2 + 'px';
        let nHeight = colRect.height + 'px';
        moveDiv.style.width = nWidth;
        moveDiv.style.height = nHeight;
        moveDiv.childNodes[0].style.width = nWidth;
        moveDiv.childNodes[0].style.height = nHeight;
        moveDiv.style.left = '30000px';
        moveDiv.style.top = '0px';
        moveDiv.dataset.columnIndex = null;
        moveDiv.dataset.rowIndex = null;
        moveDiv.dataset.name = columnName;
        grid.classRange.removeRange(0, -1);
      }
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);
    };
    const selectCellMove = function (e, table) {
      let col = e.target.closest('.tbs-grid-cell');
      flagLeft = false;
      flagRight = false;
      startX = grid.startX;
      startY = grid.startY;
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      let moveY = lastY - startY;
      let moveX = lastX - startX;
      let moveDiv = document.querySelector('.tbs-grid-move');
      if (moveDiv) {
        moveDiv.style.left = lastX - moveCellLeft + 'px';
        moveDiv.style.top = lastY - moveCellTop + 'px';
        if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20) moveDiv.style.display = '';
      }
      let rect = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
      let rectLeft = window.pageXOffset + rect.left;
      let rectRight = window.pageXOffset + rect.right;
      let rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
      rectRight = window.pageXOffset + rect30.right;
      let type = '';
      if (lastX < rectLeft) {
        flagLeft = true;
        type = 'left';
        doInterval(type, lastX, lastY);
      }
      if (lastX > rectRight) {
        flagRight = true;
        type = 'right';
        doInterval(type, lastX, lastY);
      }
    };
    const selectCellShift = function (e, table) {};
    const select = function (startCellIndex, moveX, moveY, lastX, lastY) {
      let tableRect = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
      let top = window.pageYOffset + tableRect.top;
      let bottom = window.pageYOffset + tableRect.bottom;
      let sumRect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
      let right = window.pageXOffset + sumRect.right;
      let left = window.pageXOffset + sumRect.left;

      //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
      //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
      //==================================================================
      let arr = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td:not([data-name=""])');
      let tdList = Array.from(arr).sort(function (a, b) {
        a = a.cellIndex;
        b = b.cellIndex;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      if (moveX > 0) {
        let maxCellIndex;
        for (let x = 0, len = tdList.length; x < len; x++) {
          let cell = tdList[x];
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
          let cell = tdList[x];
          if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;
          let right = window.pageXOffset + cell.getBoundingClientRect().right;
          if (lastX < right) minCellIndex = cell.cellIndex;
        }
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
      }
      //==================================================================
    };
    const selectRefresh = function (type, lastX, lastY) {
      let content = document.querySelector(selector + ' .tbs-grid-panel30');
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
      let startRowIndex = grid.startRowIndex;
      let lastRowIndex = grid.lastRowIndex;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let trCount = trContent.length;
      let tdCount = trContent.length > 0 ? trContent[0].childNodes.length : 0;
      let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('right');
          for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
            for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
              if (grid.column_table.data[cellIndex][tbsGridNames.column.visible] == false) continue;
              let left = window.pageXOffset + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
              if (lastX > left) maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
            }
          }
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      }
      //==================================================================
      else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('left');
          for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
            for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
              if (grid.column_table.data[cellIndex][tbsGridNames.column.visible] == false) continue;
              let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
              if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
            }
          }
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      }
    };
    const doInterval = function (type, lastX, lastY) {
      if (flagLeft) {
        //flagLeft  = false;
        flagRight = false;
        setTimeout(function () {
          doInterval('left', lastX, lastY);
        }, 5);
        selectRefresh('left', lastX, lastY);
      } else if (flagRight) {
        flagLeft = false;
        //flagRight = false;
        setTimeout(function () {
          doInterval('right', lastX, lastY);
        }, 5);
        selectRefresh('right', lastX, lastY);
      }
    };
    panel80.addEventListener('mousedown', mouseDownEvent);
  }
}

/***/ }),

/***/ 472:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ TbsGridPanel90; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(543);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();



class TbsGridPanel90 extends _tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridPanelBase */ .B {
  constructor(grid) {
    super(grid);
    this.panelName = 'panel90';
  }
  createHtml(parentElement) {
    const grid = this.grid;
    let s = '';
    if (grid.options.showSortPanel) s += '<div class="tbs-grid-panel90 tbs-grid-show"></div>';else s += '<div class="tbs-grid-panel90 tbs-grid-hide"></div>';
    parentElement.insertAdjacentHTML('beforeend', s);
    grid.classPanel90.panel90_select();
  }
  createTable() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;

    //if (grid.options.showSortPanel != true) return;

    const div = document.createElement('div');
    div.className = 'tbs-grid-panel-bar';
    const span = document.createElement('span');
    span.className = 'tbs-grid-panel-bar-span';
    span.textContent = grid.getConfigLabel('sort_placeholder');
    div.appendChild(span);
    document.querySelector(selector + ' .tbs-grid-panel90').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel90').appendChild(div);
  }
  panel90_select() {
    let selector = this.selector;
    const grid = this.grid;
    let startRowIndex, startCellIndex, startX, startY;
    let lastRowIndex, lastCellIndex, lastX, lastY;
    let targetName;
    let mouseButton = 0;
    let flagUp = false;
    let flagDown = false;
    let flagLeft = false;
    let flagRight = false;
    let moveCell;
    let moveCellLeft;
    let moveCellTop;
    let moveCellIndex;
    let moveCellRowIndex;
    let panel90 = document.querySelector(selector + ' .tbs-grid-panel90');
    const mouseDownEvent = function (e) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      } else return;
      grid.startX = startX = window.scrollX + e.clientX;
      grid.startY = startY = window.scrollY + e.clientY;
      grid.lastX = lastX = window.scrollX + e.clientX;
      grid.lastY = lastY = window.scrollY + e.clientY;
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCell(e, panel90);
        } else if (window.event.shiftKey) {
          selectCellShift(e, panel90);
        }
      }
      document.addEventListener('mousemove', mouseMoveEvent);
      document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseMoveEvent = function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (window.event.button === 0) {
        if (!window.event.ctrlKey && !window.event.shiftKey) {
          selectCellMove(e, panel90);
        }
      }
    };
    const mouseUpEvent = function (e) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      }
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      let isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);
      if (isInPanel90) {
        if (mouseButton == 0 && startX > lastX - grid.mousePointRange && startX < lastX + grid.mousePointRange && startY > lastY - grid.mousePointRange && startY < lastY + grid.mousePointRange) {
          let element = e.target;
          let name = element.dataset.name;
          if (e.detail == 1 && targetName == 'icon') {
            grid.classSort.removeSortButton(element);
          } else if (e.detail == 1) {
            grid.event_columnSort(e.target);
          }
        } else {
          if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
            let moveElement = document.querySelector('.tbs-grid-move');
            let rectMoveCell = moveElement.getBoundingClientRect();
            let name = moveElement.dataset.name;
            let column = grid.classColumn.getColumn(name);
            let text = column.header[tbsGridNames.column.text];
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
            grid.classSort.changeSortButtonOrder(name, text, order, targetIndex);
            flagLeft = false;
            flagRight = false;
            flagUp = false;
            flagDown = false;
            document.removeEventListener('mousemove', mouseMoveEvent);
            document.removeEventListener('mouseup', mouseUpEvent);
            if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
          }
        }
        flagLeft = false;
        flagRight = false;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
      } else {
        if (document.querySelectorAll('.tbs-grid-move').length > 0) document.querySelector('.tbs-grid-move').remove();
        flagLeft = false;
        flagRight = false;
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
      }
    };
    const selectCell = function (e, table) {
      let element;
      if (e.target.classList.contains('tbs-grid-panel-button-icon')) {
        targetName = 'icon';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
        targetName = 'text';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-button')) {
        targetName = 'button';
        element = e.target;
      } else if (e.target.classList.contains('tbs-grid-panel-bar')) {
        targetName = 'bar';
        element = e.target;
      } else return;
      if (targetName == 'button' || targetName == 'text') {
        let col = null;
        if (targetName == 'text') col = element.parentNode;else col = element;
        let columnName = col.dataset.name;
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
          span.classList.add('tbs-grid-cell-span');
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
          table.appendChild(tr);
          moveDiv.appendChild(table);
          document.body.appendChild(moveDiv);
        }
        moveDiv = document.querySelector('.tbs-grid-move');
        moveDiv.style.display = 'none';
        moveDiv.querySelector('.tbs-grid-cell-span').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
        moveDiv = document.querySelector('.tbs-grid-move');
        let colRect = col.getBoundingClientRect();
        moveCell = col;
        moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
        moveCellTop = window.pageYOffset + e.clientY - colRect.top;
        moveCellIndex = col.cellIndex;
        moveCellRowIndex = col.parentNode.rowIndex;
        let nWidth = colRect.width + 2 + 'px';
        let nHeight = colRect.height + 'px';
        moveDiv.style.width = nWidth;
        moveDiv.style.height = nHeight;
        moveDiv.childNodes[0].style.width = nWidth;
        moveDiv.childNodes[0].style.height = nHeight;
        moveDiv.style.left = '30000px';
        moveDiv.style.top = '0px';
        moveDiv.dataset.columnIndex = null;
        moveDiv.dataset.rowIndex = null;
        moveDiv.dataset.name = columnName;
        grid.classRange.removeRange(0, -1);
      }
      flagLeft = false;
      flagRight = false;
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseup', mouseUpEvent);
    };
    const selectCellMove = function (e, table) {
      let col = e.target.closest('.tbs-grid-cell');
      flagLeft = false;
      flagRight = false;
      startX = grid.startX;
      startY = grid.startY;
      grid.lastX = lastX = window.pageXOffset + e.clientX;
      grid.lastY = lastY = window.pageYOffset + e.clientY;
      let moveY = lastY - startY;
      let moveX = lastX - startX;
      let moveDiv = document.querySelector('.tbs-grid-move');
      if (moveDiv) {
        moveDiv.style.left = lastX - moveCellLeft + 'px';
        moveDiv.style.top = lastY - moveCellTop + 'px';
        if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20) moveDiv.style.display = '';
      }
      let rect = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
      let rectLeft = window.pageXOffset + rect.left;
      let rectRight = window.pageXOffset + rect.right;
      let rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
      rectRight = window.pageXOffset + rect30.right;
      let type = '';
      if (lastX < rectLeft) {
        flagLeft = true;
        type = 'left';
        doInterval(type, lastX, lastY);
      }
      if (lastX > rectRight) {
        flagRight = true;
        type = 'right';
        doInterval(type, lastX, lastY);
      }
    };
    const selectCellShift = function (e, table) {};
    const select = function (startCellIndex, moveX, moveY, lastX, lastY) {
      let tableRect = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
      let top = window.pageYOffset + tableRect.top;
      let bottom = window.pageYOffset + tableRect.bottom;
      let sumRect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
      let right = window.pageXOffset + sumRect.right;
      let left = window.pageXOffset + sumRect.left;

      //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
      //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
      //==================================================================
      let arr = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td:not([data-name=""])');
      let tdList = Array.from(arr).sort(function (a, b) {
        a = a.cellIndex;
        b = b.cellIndex;
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      if (moveX > 0) {
        let maxCellIndex;
        for (let x = 0, len = tdList.length; x < len; x++) {
          let cell = tdList[x];
          if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;
          let left = window.pageXOffset + cell.getBoundingClientRect().left;
          if (lastX > left) maxCellIndex = cell.cellIndex;
        }
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
      }
      //==================================================================
      if (moveX < 0) {
        let minCellIndex;
        for (let x = tdList.length - 1; x >= 0; x--) {
          let cell = tdList[x];
          if (grid.column_table.data[x][tbsGridNames.column.visible] == false) continue;
          let right = window.pageXOffset + cell.getBoundingClientRect().right;
          if (lastX < right) minCellIndex = cell.cellIndex;
        }
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
      }
      //==================================================================
    };
    const selectRefresh = function (type, lastX, lastY) {
      let content = document.querySelector(selector + ' .tbs-grid-panel30');
      let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
      let startRowIndex = grid.startRowIndex;
      let lastRowIndex = grid.lastRowIndex;
      let startCellIndex = grid.startCellIndex;
      let lastCellIndex = grid.lastCellIndex;
      let trCount = trContent.length;
      let tdCount = trContent.length > 0 ? trContent[0].childNodes.length : 0;
      let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
      if (type == 'right') {
        if (table.style.left == -1 * grid.horizontalScroll.hiddenSize + 'px') {
          flagRight = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('right');
          for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
            for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
              if (grid.column_table.data[cellIndex][tbsGridNames.column.visible] == false) continue;
              let left = window.pageXOffset + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
              if (lastX > left) maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
            }
          }
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      }
      //==================================================================
      else if (type == 'left') {
        if (table.style.left == '0px') {
          flagLeft = false;
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
          grid.classPanel30.setDataPanel(_topRowIndex);
        } else {
          grid.classScroll.setBarPositionByDirection('left');
          for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
            for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
              if (grid.column_table.data[cellIndex][tbsGridNames.column.visible] == false) continue;
              let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
              if (lastX < right) minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
            }
          }
          grid.classRange.removeRange(0, -1);
          let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
          grid.classPanel30.setDataPanel(_topRowIndex);
        }
      }
    };
    const doInterval = function (type, lastX, lastY) {
      if (flagLeft) {
        //flagLeft  = false;
        flagRight = false;
        setTimeout(function () {
          doInterval('left', lastX, lastY);
        }, 5);
        selectRefresh('left', lastX, lastY);
      }
      if (flagRight) {
        flagLeft = false;
        //flagRight = false;
        setTimeout(function () {
          doInterval('right', lastX, lastY);
        }, 5);
        selectRefresh('right', lastX, lastY);
      }
    };
    panel90.addEventListener('mousedown', mouseDownEvent);
  }
}

/***/ }),

/***/ 618:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ TbsBase; }
/* harmony export */ });
class TbsBase {
  constructor() {
    this.debug_mode = false;
  }
  null(p) {
    return p == null || p == undefined;
  }
  notNull(p) {
    return !(p == null || p == undefined);
  }
  empty(p) {
    return p == null || p == undefined || this.trim(p) == '';
  }
  notEmpty(p) {
    return this.notNull(p) && p != '';
  }
  isNull(a, b) {
    return this.null(a) ? b : a;
  }
  error(p) {
    if (this.debug_mode) {
      console.log('[TbsGrid error] ' + p);
    }
  }
  caution(p) {
    if (this.debug_mode) {
      console.log('[TbsGrid caution] ' + p);
    }
  }
  copyJson(p) {
    return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
  }
  substr2(s, index, len) {
    let result = '';
    try {
      s = s.toString();
      if (arguments.length == 2) result = s.substring(index);else if (arguments.length == 3) result = s.substring(index).substring(0, len);
      return result;
    } catch (e) {
      return result;
    }
  }
  trim(s) {
    if (this.null(s)) return '';else return s.toString().replace(/^\s+|\s+$/gi, "");
  }
  round(num, dpLen) {
    if (num > 0) return +(Math.round(num.toString() + 'e+' + dpLen.toString()) + 'e-' + dpLen.toString());else return -(Math.round(Math.abs(num).toString() + 'e+' + dpLen.toString()) + 'e-' + dpLen.toString());
  }
  ceil(num, dpLen) {
    let s = '1';
    for (let i = 0; i < dpLen; i++) {
      s += '0';
    }
    let n = parseInt(s);
    return Math.ceil(num * n) / n;
  }
  floor(num, dpLen) {
    let s = '1';
    for (let i = 0; i < dpLen; i++) {
      s += '0';
    }
    let n = parseInt(s);
    return Math.floor(num * n) / n;
  }
  getProperty(jsonObject, property) {
    if (this.empty(jsonObject[property])) return null;else return jsonObject[property];
  }
}

/***/ }),

/***/ 765:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QF: function() { return /* binding */ TbsDataTable; }
/* harmony export */ });
/* unused harmony exports TbsDataRow, TbsDataCell */
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();

class TbsDataTable extends _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsBase */ .H {
  constructor(tableName) {
    super();
    this.tableName = tableName;
    this.data = [];
    this.currentRowId = -1;
    this.type = 'table';
  }

  /**
   * select functions
   */

  select(field, value, topIndex) {
    let result = [];
    if (arguments.length == 0) {
      result = this.data;
    } else {
      for (let i = 0, len = this.data.length; i < len; i++) {
        let dataRow = this.data[i];
        if (dataRow[field] == value) {
          result.push(dataRow);
          if (topIndex != undefined) {
            if (result.length == topIndex) break;
          }
        }
      }
    }
    return result;
  }
  selectRow(field, value) {
    let dataRows = this.select(field, value, 1);
    return dataRows.length > 0 ? dataRows[0] : null;
  }
  selectRowByRowIndex(rowIndex) {
    return this.data[rowIndex];
  }
  selectRowByRowId(rowId) {
    let dataRows = this.select(tbsGridNames.column.rowId, rowId, 1);
    return dataRows.length > 0 ? dataRows[0] : null;
  }
  selectRowIndex(field, value) {
    let result = null;
    for (let i = 0, len = this.data.length; i < len; i++) {
      let dataRow = this.data[i];
      if (dataRow[field] == value) {
        result = i;
        break;
      }
    }
    return result;
  }
  selectValue(rowIndex, field) {
    return this.data[rowIndex][field];
  }
  isRow(field, value) {
    let dataRows = this.select(field, value, 1);
    return dataRows.length > 0;
  }

  /**
   * Insert
   */
  insert(dataRow) {
    if (this.type == 'table') {
      this.currentRowId += 1;
      dataRow[tbsGridNames.column.rowId] = this.currentRowId;
      dataRow[tbsGridNames.column.rowMode] = '';
    }
    this.data.push(dataRow);
  }
  insertBefore(dataRow, rowIndex) {
    if (this.type == 'table') {
      this.currentRowId += 1;
      dataRow[tbsGridNames.column.rowId] = this.currentRowId;
      dataRow[tbsGridNames.column.rowMode] = '';
    }
    if (rowIndex < this.data.length) this.data.splice(rowIndex, 0, dataRow);else this.data.push(dataRow);
  }
  insertAfter(dataRow, rowIndex) {
    if (this.type == 'table') {
      this.currentRowId += 1;
      dataRow[tbsGridNames.column.rowId] = this.currentRowId;
      dataRow[tbsGridNames.column.rowMode] = '';
    }
    if (rowIndex + 1 < this.data.length) this.data.splice(rowIndex + 1, 0, dataRow);else this.data.push(dataRow);
  }

  /**
   * Remove
   */
  remove(rowIndex) {
    if (arguments.length == 1) this.data.splice(rowIndex, 1);else this.data = [];
  }
  removeByRowId(rowId) {
    let rowIndex = this.selectRowIndex(tbsGridNames.column.rowId, rowId);
    if (this.notNull(rowIndex)) this.remove(rowIndex);
  }

  /**
   * Update
   */

  update(columnName, field, value) {
    let dataRows = this.select(tbsGridNames.column.name, columnName);
    dataRows.map(dataRow => dataRow[field] = value);
  }
  updateByRowIndex(rowIndex, name, value) {
    let dataRow = this.data[rowIndex];
    dataRow[name] = value;
  }
  updateByRowId(rowId, name, value) {
    let dataRow = this.selectRowByRowId(rowId);
    dataRow[name] = value;
  }
  count() {
    return this.data.length;
  }

  /**
   * Column type Functions
   */

  setTypeString() {}
  setTypeNumber() {}
  setTypeCombo() {}
  setTypeDate() {}
}
class TbsDataRow extends (/* unused pure expression or super */ null && (TbsBase)) {}
class TbsDataCell extends (/* unused pure expression or super */ null && (TbsBase)) {}

/***/ }),

/***/ 634:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ TbsDatabase; }
/* harmony export */ });
/* harmony import */ var _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618);
/* harmony import */ var _tbs_data_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(765);


class TbsDatabase extends _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsBase */ .H {
  constructor() {
    super();
    this.tables = [];
  }
  createTable(tableName) {
    let table = new _tbs_data_table_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsDataTable */ .QF(tableName);
    table.type = 'table';
    this.tables.push(table);
  }
  createView(tableName) {
    let table = new _tbs_data_table_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsDataTable */ .QF(tableName);
    table.type = 'view';
    this.tables.push(table);
  }
  removeTable(tableName) {
    for (let i = 0, len = this.tables.length; i < len; i++) {
      let table = this.tables[i];
      if (table.tableName === tableName) {
        this.tables.splice(i, 1);
        break;
      }
    }
  }
  getTable(tableName) {
    let result = null;
    for (let i = 0, len = this.tables.length; i < len; i++) {
      let table = this.tables[i];
      if (table.tableName === tableName) {
        result = table;
        break;
      }
    }
    return result;
  }
}

/***/ }),

/***/ 160:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ TbsGridBase; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(420);
/* harmony import */ var _tbs_base_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(618);
/* harmony import */ var _tbs_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634);
/* harmony import */ var _tbs_data_table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(765);
/* harmony import */ var _tbs_grid_cell_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(937);
/* harmony import */ var _tbs_grid_columns_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(550);
/* harmony import */ var _tbs_grid_combo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(663);
/* harmony import */ var _tbs_grid_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48);
/* harmony import */ var _tbs_grid_date_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(341);
/* harmony import */ var _tbs_grid_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(221);
/* harmony import */ var _tbs_grid_row_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(613);
/* harmony import */ var _tbs_grid_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(191);
/* harmony import */ var _tbs_grid_filter_layer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(356);
/* harmony import */ var _tbs_grid_footer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(186);
/* harmony import */ var _tbs_grid_group_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42);
/* harmony import */ var _tbs_grid_page_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(654);
/* harmony import */ var _panels_tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _panels_tbs_grid_panel10_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(360);
/* harmony import */ var _panels_tbs_grid_panel20_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(719);
/* harmony import */ var _panels_tbs_grid_panel30_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(730);
/* harmony import */ var _panels_tbs_grid_panel40_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(105);
/* harmony import */ var _panels_tbs_grid_panel50_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(708);
/* harmony import */ var _panels_tbs_grid_panel70_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(222);
/* harmony import */ var _panels_tbs_grid_panel80_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(661);
/* harmony import */ var _panels_tbs_grid_panel90_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(472);
/* harmony import */ var _tbs_grid_range_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(32);
/* harmony import */ var _tbs_grid_range_panel_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(868);
/* harmony import */ var _tbs_grid_render_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(541);
/* harmony import */ var _tbs_grid_render_info_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(543);
/* harmony import */ var _tbs_grid_scroll_base_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(505);
/* harmony import */ var _tbs_grid_scroll_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(660);
/* harmony import */ var _tbs_grid_sort_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(633);
/* harmony import */ var _tbs_grid_top_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(378);
/* harmony import */ var _tbs_grid_tree_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(909);


































const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_32__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_32__/* .TbsGridNames */ .G();
class TbsGridBase extends _tbs_base_js__WEBPACK_IMPORTED_MODULE_33__/* .TbsBase */ .H {
  constructor(gridId, gridConfigs) {
    super();
    this.gridId = gridId;
    this.gridConfig = gridConfigs ? gridConfigs[Object.keys(gridConfigs)[0]] : tbsGridConfigs[Object.keys(tbsGridConfigs)[0]];
    this.gridConfigOptions = gridConfigs ? gridConfigs.options : tbsGridConfigs.options;
    this.grid_mode = '';
    this.mousePointRange = 15;

    /**
     * @description mobile, user agent
     *
     */
    this.isMobile = this.gridConfigOptions.isMobile;
    this.userAgent = this.gridConfigOptions.userAgent;

    /**
     * columns, headerColumnTable
     */
    this.columns = [];
    this.headerColumnTable = [];

    /**
     * create database
     */
    this.db = new _tbs_database_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsDatabase */ .$();

    /**
     * create columns table
     */
    this.db.createTable('column'); // columns table
    this.column_table = this.db.getTable('column');

    /**
     * create field table name, dataType
     */
    this.db.createTable('field'); // columns table
    this.data_column_table = this.db.getTable('data_column');

    /**
     * create source table
     */
    this.db.createTable('source'); // source_table
    this.source_table = this.db.getTable('source');

    /**
     * create view table
     */
    this.db.createView('view'); // view_table
    this.view_table = this.db.getTable('view');

    /**
     *  create sort column table
     */
    this.db.createTable('sort_column');
    this.sort_column_table = this.db.getTable('sort_column');

    /**
     *  create filter column table
     */
    this.db.createTable('filter_column');
    this.filter_column_table = this.db.getTable('filter_column');

    /**
     * create group table
     */
    this.db.createTable('group_column');
    this.group_column_table = this.db.getTable('group_column');

    /**
     * create temp table
     */
    this.db.createView('tree');
    this.tree_table = this.db.getTable('tree');

    /**
     * create page table
     */
    this.db.createView('page');
    this.page_table = this.db.getTable('page');

    /**
     * create top column table
     */
    this.db.createTable('top_column');
    this.top_column_table = this.db.getTable('top_column');

    /**
     * create top table
     */
    this.db.createTable('top');
    this.top_table = this.db.getTable('top');

    /**
     * create footer table
     */
    this.db.createTable('footer_column');
    this.footer_column_table = this.db.getTable('footer_column');

    /**
     * create footer table
     */
    this.db.createTable('footer');
    this.footer_table = this.db.getTable('footer');
    this.data_update = [];
    this.data_insert = [];
    this.data_delete = [];

    /**
     * create info table
     */
    this.db.createTable('info'); // info table
    this.info_table = this.db.getTable('info');
    this.info_table.insert({
      name: 'num',
      type: 'number',
      align: 'center',
      width: 50,
      visible: true
    });
    this.info_table.insert({
      name: 'mode',
      type: 'string',
      align: 'center',
      width: 20,
      visible: false
    });
    this.info_table.insert({
      name: 'checkbox',
      type: 'checkbox',
      align: 'center',
      width: 25,
      visible: false
    });

    /**
     * @description selection data
     *
     */

    this.data_select_panel30 = [];
    this.data_select_panel31 = [];

    /**
     * @description Row Count / Select Range
     *
     */
    this.pageRowCount = 0;
    this.pageIntRowCount = 0;
    this.startRowIndex = -1;
    this.startCellIndex = -1;
    this.lastRowIndex = -1;
    this.lastCellIndex = -1;
    this._startRowIndex = -1;
    this._startCellIndex = -1;
    this._lastRowIndex = -1;
    this._lastCellIndex = -1;
    this.selectRangeArray = [];
    this.startX = 0;
    this.startY = 0;
    this.lastX = 0;
    this.lastY = 0;
    this.const_filterValue = 'value';
    this.const_filterType = 'type';
    this.const_filterReset = 'Reset';
    this.const_filterSave = 'Save';
    this.headerRowCount = 0;

    /* Options */
    this.options = {};

    /* toolbar, filter, sort, group panel optons */
    this.options.showToolbarPanel = true;
    this.options.showFilterPanel = false;
    this.options.showSortPanel = false;
    this.options.showGroupPanel = false;

    /* Columns Options */
    this.options[tbsGridNames.column.sortable] = true;
    this.options[tbsGridNames.column.resizable] = true;
    this.options[tbsGridNames.column.movable] = true;
    this.options[tbsGridNames.column.autoResizable] = true;
    this.options[tbsGridNames.column.autoWidth] = false;

    // Rows Options
    this.options[tbsGridNames.row.selectMode] = 'cells'; //@value : cell, cells(default) // row, rows : @deprecated
    this.options[tbsGridNames.row.addRow] = false; //== row option
    this.options[tbsGridNames.row.delRow] = false;
    this.options[tbsGridNames.option.insertRow] = false;
    this.options[tbsGridNames.option.updateRow] = false;
    this.options[tbsGridNames.option.deleteRow] = false;
    this.options[tbsGridNames.option.zeroChar] = this.getConfigCulture('zeroChar');
    this.options[tbsGridNames.option.useToolbar] = true;
    this.options[tbsGridNames.option.imageRoot] = this.getConfigOption('imageRoot');
    this.options.treeItemName = null;
    this.options.treeParentName = null;
    this.options.treeRootValue = null;

    /**
     * @description layout
     *
     */
    this.fixedColumnIndex = -1;
    this.fixedRowCount = 0; // required
    this.fixedRowIndex = -1;
    /**
     * @description constant value
     *
     */
    this.headerRowHeight = 25;
    this.rowHeight = 25;
    this.topRowHeight = 25;
    this.footerRowHeight = 25;

    /**
     * @description user event
     *
     */
    this.user_click = null;
    this.user_dblclick = null;
    this.user_edit = null;
    this.user_cellBounding = null;
    this.user_rowBounding = null;

    /**
     * @description code
     *
     */
    this.debug_mode = true;
    this.code_horizontal = 'horizontal';
    this.code_vertical = 'vertical';

    /**
     * @description class
     *
     */
    this.classScroll = new _tbs_grid_scroll_base_js__WEBPACK_IMPORTED_MODULE_27__/* .TbsGridScrollBase */ .a(this);
    this.verticalScroll = new _tbs_grid_scroll_js__WEBPACK_IMPORTED_MODULE_28__/* .TbsGridScroll */ .F(this, 'verticalScroll');
    this.horizontalScroll = new _tbs_grid_scroll_js__WEBPACK_IMPORTED_MODULE_28__/* .TbsGridScroll */ .F(this, 'horizontalScroll');
    this.classColumn = new _tbs_grid_columns_js__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridColumns */ .L(this);
    this.classControl = new _tbs_grid_control_js__WEBPACK_IMPORTED_MODULE_5__/* .TbsGridControl */ .v(this); // memory
    this.classRange = new _tbs_grid_range_js__WEBPACK_IMPORTED_MODULE_23__/* .TbsGridRange */ .P(this); // memory
    this.classRange40 = new _tbs_grid_range_panel_js__WEBPACK_IMPORTED_MODULE_24__/* .TbsGridRangePanel */ .z(this, 'panel40'); // memory
    this.classRange50 = new _tbs_grid_range_panel_js__WEBPACK_IMPORTED_MODULE_24__/* .TbsGridRangePanel */ .z(this, 'panel50'); // memory
    this.classFilter = new _tbs_grid_filter_js__WEBPACK_IMPORTED_MODULE_9__/* .TbsGridFilter */ .e(this); // memory
    this.classGroup = new _tbs_grid_group_js__WEBPACK_IMPORTED_MODULE_12__/* .TbsGridGroup */ .l(this); // memory
    this.classPage = new _tbs_grid_page_js__WEBPACK_IMPORTED_MODULE_13__/* .TbsGridPage */ .X(this); // memory
    this.classSort = new _tbs_grid_sort_js__WEBPACK_IMPORTED_MODULE_29__/* .TbsGridSort */ .m(this); // memory
    this.classTree = new _tbs_grid_tree_js__WEBPACK_IMPORTED_MODULE_31__/* .TbsGridTree */ .O(this); // memory

    this.classPanelBase = new _panels_tbs_grid_panel_base_js__WEBPACK_IMPORTED_MODULE_14__/* .TbsGridPanelBase */ .B(this);
    this.classPanel10 = new _panels_tbs_grid_panel10_js__WEBPACK_IMPORTED_MODULE_15__/* .TbsGridPanel10 */ .T(this);
    this.classPanel20 = new _panels_tbs_grid_panel20_js__WEBPACK_IMPORTED_MODULE_16__/* .TbsGridPanel20 */ .i(this);
    this.classPanel30 = new _panels_tbs_grid_panel30_js__WEBPACK_IMPORTED_MODULE_17__/* .TbsGridPanel30 */ .z(this);
    this.classPanel40 = new _panels_tbs_grid_panel40_js__WEBPACK_IMPORTED_MODULE_18__/* .TbsGridPanel40 */ .s(this);
    this.classPanel50 = new _panels_tbs_grid_panel50_js__WEBPACK_IMPORTED_MODULE_19__/* .TbsGridPanel50 */ .H(this);
    this.classPanel70 = new _panels_tbs_grid_panel70_js__WEBPACK_IMPORTED_MODULE_20__/* .TbsGridPanel70 */ .p(this);
    this.classPanel80 = new _panels_tbs_grid_panel80_js__WEBPACK_IMPORTED_MODULE_21__/* .TbsGridPanel80 */ .g(this);
    this.classPanel90 = new _panels_tbs_grid_panel90_js__WEBPACK_IMPORTED_MODULE_22__/* .TbsGridPanel90 */ .j(this);

    //this.classRender = new TbsGridRender(this);

    this.classTop = new _tbs_grid_top_js__WEBPACK_IMPORTED_MODULE_30__/* .TbsGridTop */ .B(this); // memory
    this.classFooter = new _tbs_grid_footer_js__WEBPACK_IMPORTED_MODULE_11__/* .TbsGridFooter */ .h(this); // memory

    this.tbsGridDate; // memory
    this.tbsGridCombo; // memory

    this.classDom = new _tbs_grid_dom_js__WEBPACK_IMPORTED_MODULE_7__/* .TbsGridDom */ .E();
    this.classRow = new _tbs_grid_row_js__WEBPACK_IMPORTED_MODULE_8__/* .TbsGridRow */ .g(this);
    this.classCell = new _tbs_grid_cell_js__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridCell */ .u(this, null);
  }

  /**
   * Select Line Functions
   *
   */

  getFirstSelectedTableCell(panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let startCell;
    let startRowIndex = grid._startRowIndex;
    if (grid.fixedRowIndex != -1) {
      let panel;
      if (startRowIndex <= grid.fixedRowIndex) panel = 'panel61';else {
        panel = 'panel31';
        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();
        if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;
      }
      let tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
      Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
        let tableRow31 = tableRows31[i];
        let tableRow = tableRows[i];
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
    } else {
      let rowIndex1 = grid.getFirstRowIndex();
      let rowIndex2 = grid.getLastRowIndex();
      if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;
      let tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
      Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
        let tableRow31 = tableRows31[i];
        let tableRow = tableRows[i];
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
    }
    return startCell;
  }
  getLastSelectedTableCell(panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let lastCell;
    let lastRowIndex = this._lastRowIndex;
    if (grid.fixedRowIndex != -1) {
      let panel;
      if (lastRowIndex <= grid.fixedRowIndex) panel = 'panel61';else {
        panel = 'panel31';
        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();
        if (lastRowIndex > rowIndex2) lastRowIndex = rowIndex2;
      }
      let tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
      for (let i = tableRows31.length - 1; i >= 0; i--) {
        if (lastCell != undefined) break;
        let tableRow31 = tableRows31[i];
        let tableRow30 = tableRows[i];
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
    } else {
      let rowIndex1 = grid.getFirstRowIndex();
      let rowIndex2 = grid.getLastRowIndex();
      if (lastRowIndex > rowIndex2) lastRowIndex = rowIndex2;
      let tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
      for (let i = tableRows31.length - 1; i >= 0; i--) {
        if (lastCell != undefined) break;
        let tableRow31 = tableRows31[i];
        let tableRow30 = tableRows[i];
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
  }
  clearSelectedLine() {
    this.topLineDiv.style = 'width :0px;top:0px;left:0px;';
    this.leftLineDiv.style = 'height:0px;top:0px;left:0px;';
    this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
    this.rightLineDiv.style = 'height:0px;top:0px;left:0px;';
  }
  setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {
    if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight)) this.clearSelectedLine();else {
      this.topLineDiv.style = 'width:' + lineWidth + 'px;top:' + rectTop + 'px;left:' + rectLeft + 'px;';
      this.leftLineDiv.style = 'height:' + lineHeight + 'px;top:' + rectTop + 'px;left:' + rectLeft + 'px;';
      this.rightLineDiv.style = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop + 'px;left:' + rectRight + 'px;';
      this.bottomLineDiv.style = 'width:' + lineWidth + 'px;top:' + rectBottom + 'px;left:' + rectLeft + 'px;';
    }
  }
  displaySelectedLine() {
    let selector = '#' + this.gridId;
    const grid = this;
    if (grid.view_table.count() == 0) {
      grid.classRange.removeRange(0, -1);
      return;
    }
    if (grid.fixedRowIndex != -1) {
      let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      if (grid.getRowCount() == 0) return;
      let fixedColumnIndex = this.fixedColumnIndex;

      /* Get startCell, lastCell */
      let startCell, lastCell;
      if (grid._startRowIndex <= grid.fixedRowIndex) startCell = grid.getFirstSelectedTableCell('panel60');else startCell = grid.getFirstSelectedTableCell('panel30');
      if (grid._lastRowIndex <= grid.fixedRowIndex) lastCell = grid.getLastSelectedTableCell('panel60');else lastCell = grid.getLastSelectedTableCell('panel30');
      if (startCell == undefined || lastCell == undefined) {
        grid.clearSelectedLine();
        return;
      }
      //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);

      let startCellIndex = grid._startCellIndex;
      let lastCellIndex = grid._lastCellIndex;
      let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
      let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
      let rectWrap = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
      let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
      let startRect = startCell.getBoundingClientRect();
      let lastRect = lastCell.getBoundingClientRect();
      let beforeLeft = rectTable31.left;
      let rectTop = startRect.top - rectMain.top;
      let rectBottom = lastRect.top - rectMain.top + lastRect.height;
      let rectLeft = startRect.left - beforeLeft;
      let rectRight = lastRect.left - beforeLeft + lastRect.width;
      let rectPanelLeft = startCellIndex <= fixedColumnIndex ? rectLeft : rectPanel30.left - rectTable31.left;
      let rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
      let rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;

      // case outside line
      if (rectLeft <= rectPanelLeft) rectLeft = rectPanelLeft;
      if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
      if (rectRight >= rectPanelRight) rectRight = rectPanelRight;
      let lineHeight = rectBottom - rectTop;
      let lineWidth = rectRight - rectLeft;
      grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    } else if (grid.fixedColumnIndex != -1) {
      let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      if (grid.getRowCount() == 0) return;
      let fixedColumnIndex = this.fixedColumnIndex;

      /* Get startCell, lastCell */
      let startCell, lastCell;
      //console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
      if (grid._startCellIndex <= grid.fixedColumnIndex) startCell = grid.getFirstSelectedTableCell('panel32');else startCell = grid.getFirstSelectedTableCell('panel30');
      if (grid._lastCellIndex <= grid.fixedColumnIndex) lastCell = grid.getLastSelectedTableCell('panel32');else lastCell = grid.getLastSelectedTableCell('panel30');
      if (startCell == undefined || lastCell == undefined) {
        grid.clearSelectedLine();
        return;
      }

      //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);
      let startCellIndex = startCell.cellIndex;
      let lastCellIndex = lastCell.cellIndex;
      let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
      let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
      let rectWrap = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
      let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
      let startRect = startCell.getBoundingClientRect();
      let lastRect = lastCell.getBoundingClientRect();
      let beforeLeft = rectTable31.left;
      let rectTop = startRect.top - rectMain.top;
      let rectBottom = lastRect.top - rectMain.top + lastRect.height;
      let rectLeft = startRect.left - beforeLeft;
      let rectRight = lastRect.left - beforeLeft + lastRect.width;
      let rectPanelLeft = startCellIndex <= fixedColumnIndex ? rectLeft : rectPanel30.left - rectTable31.left;
      let rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
      let rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;

      // case outside line
      if (rectLeft <= rectPanelLeft) rectLeft = rectPanelLeft;
      if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
      if (rectRight >= rectPanelRight) rectRight = rectPanelRight;
      let lineHeight = rectBottom - rectTop;
      let lineWidth = rectRight - rectLeft;
      grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    } else {
      let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
      if (grid.getRowCount() == 0) return;
      let startCell = grid.getFirstSelectedTableCell('panel30');
      let lastCell = grid.getLastSelectedTableCell('panel30');
      if (startCell == undefined || lastCell == undefined) {
        grid.clearSelectedLine();
        return;
      }
      let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
      let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
      let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
      let startRect = startCell.getBoundingClientRect();
      let lastRect = lastCell.getBoundingClientRect();
      let rectTop = startRect.top - rectMain.top;
      let rectLeft = startRect.left - rectTable31.left;
      let rectBottom = lastRect.top - rectMain.top + lastRect.height;
      let rectRight = lastRect.left - rectTable31.left + lastRect.width;
      let rectPanelLeft = rectPanel30.left - rectTable31.left;
      let rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
      let rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;

      // case outside line
      if (rectLeft <= rectPanelLeft) rectLeft = rectPanelLeft;
      if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
      if (rectRight >= rectPanelRight) rectRight = rectPanelRight;
      let lineHeight = rectBottom - rectTop;
      let lineWidth = rectRight - rectLeft;
      grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
    }
  }
  displayOneSelection(startRowIndex, startCellIndex) {
    let selector = '#' + this.gridId;
    const grid = this;
    let column = this.column_table.data;
    this.startRowIndex = startRowIndex;
    this.lastRowIndex = startRowIndex;
    this.startCellIndex = startCellIndex;
    this.lastCellIndex = startCellIndex;
    this._startRowIndex = startRowIndex;
    this._lastRowIndex = startRowIndex;
    this._startCellIndex = startCellIndex;
    this._lastCellIndex = startCellIndex;
    this.classRange.setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);
    let count = this.view_table.count();
    let topRowIndex = this.getFirstRowIndex();
    //============================================================= table display
    let trLeftList = document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
    let trFixLeftList = document.querySelectorAll(selector + ' .tbs-grid-panel61   .tbs-grid-table tbody tr');
    let trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
    let trFixBottomtList = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');
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
      if (accWidth + contentTableLeft > 0) {
        startColumnIndex = i;
        break;
      }
    }
    accWidth = contentTableRect.width;
    for (let i = column.length - 1; i >= 0; i--) {
      accWidth -= parseInt(column[i].width);
      if (accWidth + contentTableLeft < contentRect.width) {
        lastColumnIndex = i;
        break;
      }
    }
    //============================================================= left, content, fixBottom
    let viewCount = grid.view_table.count();
    let i = 0;
    for (let ri = topRowIndex; ri < count; ri++) {
      if (ri > viewCount - 1) break;
      let trLeft = trLeftList[i];
      let trContent = trContentList[i];
      let trFixBottom = trFixBottomtList[i];
      let row = grid.view_table.data[ri];
      //============================================================= left
      let leftTd = trLeft.childNodes[0];
      let selectedValue = this.isSelectedCell31(ri, 0);
      if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
      //============================================================= content
      for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
        let td = trContent.childNodes[x];
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
          let td = trFixBottom.childNodes[x];
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
    if (this.fixedRowIndex != -1) {
      let i = 0;
      for (let ri = 0; ri <= this.fixedRowIndex; ri++) {
        if (ri > viewCount - 1) break;
        let trLeft = trFixLeftList[i];
        let trContent = trFixRightList[i];
        let row = grid.view_table.data[ri];
        //============================================================= left
        leftTd = trLeft.childNodes[0];
        leftTd.dataset.rowIndex = ri;
        let selectedValue = this.isSelectedCell31(ri, 0);
        if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
        //============================================================= content
        for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
          let td = trContent.childNodes[x];
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
    this.displaySelectedLine();
  }

  /**
   * Input Functions
   */

  event_input() {
    let selector = '#' + this.gridId;
    const grid = this;
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let colType = input.dataset.type;
    const keydownEvent = function (e) {
      //e.preventDefault();
      //e.stopPropagation();
      //e.stopImmediatePropagation();
      let input = document.querySelector(selector + ' .tbs-grid-input');
      let mode = input.dataset.mode;
      if (mode == undefined) mode = '';
      if (e.ctrlKey) {
        if (e.keyCode == 37 && mode == '') {
          if (!grid.options[tbsGridNames.row.addRow]) return;
          grid.editEnd();
          grid.addRow('up');
          grid.input_focus();
        } //left arrow //type : first, last, up, down
        else if (e.keyCode == 39 && mode == '') {
          if (!grid.options[tbsGridNames.row.addRow]) return;
          grid.editEnd();
          grid.addRow('down');
          grid.input_focus();
        } //right arrow
        else if (e.keyCode == 38 && mode == '') {
          if (!grid.options[tbsGridNames.row.addRow]) return;
          grid.editEnd();
          grid.addRow('first');
          grid.input_focus();
        } //up arrow
        else if (e.keyCode == 40 && mode == '') {
          if (!grid.options[tbsGridNames.row.addRow]) return;
          grid.editEnd();
          grid.addRow('last');
          grid.input_focus();
        } //down arrow
        //else if (e.keyCode == 46 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
      } else {
        if (e.keyCode == 37 && mode == '') {
          grid.editEnd();
          grid.tbs_moveCell('left');
          grid.input_focus();
        } else if (e.keyCode == 39 && mode == '') {
          grid.editEnd();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } else if (e.keyCode == 38 && mode == '') {
          grid.editEnd();
          grid.tbs_moveCell('up');
          grid.input_focus();
        } else if (e.keyCode == 40 && mode == '') {
          grid.editEnd();
          grid.tbs_moveCell('down');
          grid.input_focus();
        } else if (e.keyCode == 13 && mode == '') {
          grid.editEnd();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //enter
        else if (e.keyCode == 9 && mode == '') {
          grid.editEnd();
          e.preventDefault();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //tab
        else if (e.keyCode == 37 && mode == 'key') {} else if (e.keyCode == 39 && mode == 'key') {} else if (e.keyCode == 38 && mode == 'key') {
          grid.editEnd();
          grid.tbs_moveCell('up');
          grid.input_focus();
        } else if (e.keyCode == 40 && mode == 'key') {
          grid.editEnd();
          grid.tbs_moveCell('down');
          grid.input_focus();
        } else if (e.keyCode == 13 && mode == 'key') {
          grid.editEnd();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //enter key
        else if (e.keyCode == 9 && mode == 'key') {
          grid.editEnd();
          e.preventDefault();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //tab key
        else if (e.keyCode == 37 && mode == 'mouse') {} else if (e.keyCode == 39 && mode == 'mouse') {} else if (e.keyCode == 38 && mode == 'mouse') {
          grid.editEnd();
          grid.tbs_moveCell('up');
          grid.input_focus();
        } else if (e.keyCode == 40 && mode == 'mouse') {
          grid.editEnd();
          grid.tbs_moveCell('down');
          grid.input_focus();
        } else if (e.keyCode == 13 && mode == 'mouse') {
          grid.editEnd();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //enter key
        else if (e.keyCode == 9 && mode == 'mouse') {
          grid.editEnd();
          e.preventDefault();
          grid.tbs_moveCell('right');
          grid.input_focus();
        } //tab key
        else if (e.keyCode >= 0 && e.keyCode <= 7) {} //function ctrlkey shifkey tabkey(9)등등
        else if (e.keyCode >= 9 && e.keyCode <= 32) {} else if (e.keyCode == 8) {} //backspace key
        else if (e.keyCode == 127) {} else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {} else if (e.keyCode >= 112 && e.keyCode <= 123) {} else {
          //console.log('input');
          let cellIndex = grid.startCellIndex;
          let column = grid.classColumn.getColumnByIndex(cellIndex);
          if (grid.notNull(column[tbsGridNames.column.editable]) && column[tbsGridNames.column.editable]) {
            if (grid.notNull(grid.user_edit)) {
              // state
              //console.log(`panelInput.style.left : ${panelInput.style.left}`);
              if (panelInput.style.left == '30000px') {
                grid.editStart(e, 'key');
              } else {
                grid.editing(e, 'key');
              }
            } else {
              grid.input_show(e, 'key');
            }
          }
        }
      }
    };
    const keyupEvent = function (e) {
      //e.preventDefault();
      //e.stopPropagation();
      //e.stopImmediatePropagation();
      let input = document.querySelector(selector + ' .tbs-grid-input');
      let colType = input.dataset.type;
    };
    const clickEvent = function (e) {
      let column = grid.column_table.data;
      let input = document.querySelector(selector + ' .tbs-grid-input');
      let colType = grid.column_table.data[grid.startCellIndex][tbsGridNames.column.type];
    };
    const blurEvent = function (e) {
      //console.dir(e);
      //console.log(`SCROLL : blur event`);

      let input = document.querySelector(selector + ' .tbs-grid-input');
      let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
      let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
      let mode = input.dataset.mode;
      let rowIndex = input.dataset.rowIndex;
      let cellIndex = input.dataset.cellIndex;
      let column = grid.column_table.data[cellIndex];
      if (rowIndex == undefined || cellIndex == undefined) {
        grid.input_hide();
        return;
      }
      /* user blur event stop */
      if (input.dataset.mode == undefined || input.dataset.mode == '') {
        e.stopImmediatePropagation();
      }
      if (rowIndex == -1 || cellIndex == -1) return;
      if (grid.notNull(grid.user_edit)) {
        grid.editEnd(e, 'key');
      } else {
        if (isNaN(cellIndex)) return;
        let s = input.value;
        if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.combo) s = input_code.value;else if (column[tbsGridNames.column.type] == 'number' && grid.trim(s) == grid.options[tbsGridNames.option.zeroChar]) s = '0';
        grid.setValueByIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
        grid.input_hide();
      }
      grid.apply();
    };
    const wheelEvent = function (e) {};
    const copyEvent = function (e) {
      let ta = document.createElement('textarea');
      let s = '';
      if (grid.classRange40.data_select_panel30.length > 0) {
        let startRowIndex = 0;
        let startCellIndex = grid.classRange40._startCellIndex;
        let lastRowIndex = 0;
        let lastCellIndex = grid.classRange40._lastCellIndex;
        for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
          for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
            let columnName = grid.column_table.selectValue(colIndex, tbsGridNames.column.name);
            let val = grid.getValue(rowIndex, columnName, grid.top_table);
            if (grid.null(val)) val = '';
            s += val;
            if (colIndex < lastCellIndex) s += '\t';
          }
          if (rowIndex < lastRowIndex) s += '\r\n';
        }
        ta.textContent = s;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } else if (grid.classRange50.data_select_panel30.length > 0) {
        let startRowIndex = 0;
        let startCellIndex = grid.classRange50._startCellIndex;
        let lastRowIndex = 0;
        let lastCellIndex = grid.classRange50._lastCellIndex;
        for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
          for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
            let val = grid.classFooter.getFooterValueByIndex(rowIndex, colIndex);
            if (grid.null(val)) val = '';
            s += val;
            if (colIndex < lastCellIndex) s += '\t';
          }
          if (rowIndex < lastRowIndex) s += '\r\n';
        }
        ta.textContent = s;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      } else {
        let startRowIndex = grid._startRowIndex;
        let startCellIndex = grid._startCellIndex;
        let lastRowIndex = grid._lastRowIndex;
        let lastCellIndex = grid._lastCellIndex;
        for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
          for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
            let val = grid.getValueByIndex(rowIndex, colIndex);
            if (grid.null(val)) val = '';
            s += val;
            if (colIndex < lastCellIndex) s += '\t';
          }
          if (rowIndex < lastRowIndex) s += '\r\n';
        }
        ta.textContent = s;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    };
    const pasteEvent = function (e) {
      let data = e.clipboardData.getData('text/plain');
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
          if (grid.column_table.data[colIndex][tbsGridNames.column.editable] == false) continue;
          grid.setValueByIndex(rowIndex, colIndex, colArray[j]);
          j += 1;
        }
        i += 1;
      }
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
    const cutEvent = function (e) {};
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
    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
    let colType = input_icon.dataset.type;
    const mousedownEvent = function (e) {
      //console.dir(e)
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      let input = document.querySelector(selector + ' .tbs-grid-input');
      let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
      let input_panel = document.querySelector(selector + ' .tbs-grid-input-panel');
      let column = grid.column_table.data[grid.startCellIndex];
      let colType = grid.column_table.data[grid.startCellIndex][tbsGridNames.column.type];

      //tbs-grid-input-panel : calendar, combo
      if (colType == 'date') {
        grid.tbsGridDate = new _tbs_grid_date_js__WEBPACK_IMPORTED_MODULE_6__/* .TbsGridDate */ .I(grid, column, input);
        // input_panel.style.width = '250px';
        // input_panel.style.height = '146px';
      } else if (colType == tbsGridTypes.CellType.combo) {
        grid.tbsGridCombo = new _tbs_grid_combo_js__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridCombo */ .q(grid, column, input, input_code);
        // input_panel.style.width = '200px';
        // input_panel.style.height = '146px';
      }
    };
    input_icon.addEventListener('mousedown', mousedownEvent);
  }
  input_show(e, mode) {
    //type : header, content, left, top
    let selector = '#' + this.gridId;
    const grid = this;
    let lineWeight = 3;
    let rowIndex = grid.startRowIndex;
    let cellIndex = grid.startCellIndex;
    let columns = grid.column_table.data;
    let column = columns[cellIndex];
    let colType = column[tbsGridNames.column.type];
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
    let panelMain = document.querySelector(selector + ' .tbs-grid-main');
    let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
    if (td == null) return;
    let value = this.getValue(rowIndex, column[tbsGridNames.column.name]);
    let result = this.getFormat(column, value); //result.value, result.text

    if (column[tbsGridNames.column.editable] == false) return;
    grid.tbs_moveCellLine(td, rowIndex, cellIndex);
    let left = td.getBoundingClientRect().left;
    let top = td.getBoundingClientRect().top;
    let leftMain = panelMain.getBoundingClientRect().left;
    let topMain = panelMain.getBoundingClientRect().top;
    if (mode == 'mouse') {
      if (colType == 'number' && grid.trim(result.text) == grid.options[tbsGridNames.option.zeroChar]) input.value = '0';else input.value = result.text;
      input_code.value = result.value;
    }
    panelInput.style.top = top - topMain + lineWeight + 'px';
    panelInput.style.left = left - leftMain + lineWeight + 'px';
    panelInput.style.height = grid.rowHeight - lineWeight + 'px';
    input.dataset.mode = mode;
    input.dataset.type = colType;
    input.dataset.rowIndex = grid.startRowIndex;
    input.dataset.cellIndex = grid.startCellIndex;
    input.dataset.click = '';
    if (colType == 'date') {
      let width = parseInt(column[[tbsGridNames.column.width]]);
      panelInput.style.width = width - 15 - 3 + 'px';
      input_icon.style.display = '';
      input_icon.style.top = top + 'px';
      input_icon.style.left = `${left + width - 15}px`;
      input_icon.dataset.type = colType;
      input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
    } else if (colType == tbsGridTypes.CellType.combo) {
      let width = parseInt(column[[tbsGridNames.column.width]]);
      panelInput.style.width = width - 15 - 3 + 'px';
      input_icon.style.display = '';
      input_icon.style.top = top + 'px';
      input_icon.style.left = `${left + width - 15}px`;
      input_icon.dataset.type = colType;
      input_icon.src = grid.getConfigOption('imageRoot') + 'down-arrow.png';
    } else {
      input_icon.style.diplay = 'none';
      input.style.backgroundRepeat = '';
      input.style.backgroundImage = '';
      input.style.backgroundPosition = '';
      input.style.backgroundSize = '';
      panelInput.style.width = parseInt(column[[tbsGridNames.column.width]]) - lineWeight + 'px';
    }
    if (mode == 'mouse') input.select();
  }
  input_hide() {
    let selector = '#' + this.gridId;
    const grid = this;
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

    // date, combo layer
    let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
    let input_panel = document.querySelector(selector + ' .tbs-grid-input-panel');
    panelInput.style.left = '30000px';
    panelInput.style.width = '0px';
    input.value = '';
    input_code.value = '';
    input.dataset.rowIndex = -1;
    input.dataset.cellIndex = -1;
    input.dataset.mode = '';
    input.dataset.type = '';
    input_icon.style.display = 'none';
    input_icon.dataset.rowIndex = -1;
    input_icon.dataset.cellIndex = -1;
    input_icon.dataset.mode = '';
    input_icon.dataset.type = '';

    // date, combo layer
    input_panel.innerHTML = '';
    input_panel.style.width = '0px';
    input_panel.style.left = '30000px';
    input_panel.dataset.rowIndex = -1;
    input_panel.dataset.cellIndex = -1;
    input_panel.dataset.mode = '';
    input_panel.dataset.type = '';
    if (this.tbsGridDate) {
      this.tbsGridDate.destroy();
      this.tbsGridDate = null;
    }
    if (this.tbsGridCombo) {
      this.tbsGridCombo.tbs_destroy();
      this.tbsGridCombo = null;
    }
  }
  input_focus() {
    let selector = '#' + this.gridId;
    const grid = this;
    if (this.null(this.isMobile)) {
      document.querySelector(selector + ' .tbs-grid-input').focus();
    }
  }
  editStart(e, mode) {
    let selector = '#' + this.gridId;
    const grid = this;
    let state = 0;
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    let result = true;
    let rowIndex = state == 0 ? grid.startRowIndex : input.dataset.rowIndex;
    let cellIndex = state == 0 ? grid.startCellIndex : input.dataset.cellIndex;
    let column = grid.classColumn.getColumnByIndex(cellIndex);
    let columnName = grid.classColumn.getColumnName(cellIndex);
    let value = grid.getValue(rowIndex, columnName);
    let text = grid.getText(rowIndex, columnName);
    let eventData = {};
    let eventRow = grid.getRow(rowIndex);
    eventRow.rowIndex = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName = columnName;
    eventRow.value = value;
    eventRow.text = text;
    eventRow.state = state;
    eventRow.newValue = input.value;
    eventRow.data = eventRow;
    if (column[tbsGridNames.column.editable] == true && grid.notNull(grid.user_edit)) {
      let result = true;
      result = grid.tbs_edit(grid, state, eventRow, grid.user_edit);
      if (grid.null(result) || result == true) {
        grid.input_show(e, mode);
        //console.log(0);
      } else {
        //grid.input_hide(); grid.apply(); // not certain
        document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
      }
    }
  }
  editing(e, mode) {
    let selector = '#' + this.gridId;
    const grid = this;
    let state = 1;
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    if (input.dataset.cellIndex == -1) {
      grid.input_hide();
      return;
    }
    let result = true;
    let rowIndex = state == 0 ? grid.startRowIndex : input.dataset.rowIndex;
    let cellIndex = state == 0 ? grid.startCellIndex : input.dataset.cellIndex;
    let column = grid.classColumn.getColumnByIndex(cellIndex);
    let columnName = grid.classColumn.getColumnName(cellIndex);
    let value = grid.getValue(rowIndex, columnName);
    let text = grid.getText(rowIndex, columnName);
    let eventData = {};
    let eventRow = grid.getRow(rowIndex);
    eventRow.rowIndex = rowIndex;
    eventRow.columnIndex = cellIndex;
    eventRow.columnName = columnName;
    eventRow.value = value;
    eventRow.text = text;
    eventRow.state = state;
    eventRow.newValue = input.value;
    eventRow.data = eventRow;
    if (column[tbsGridNames.column.editable] == true && grid.notNull(grid.user_edit)) {
      let result = true;
      if (state == 1 && panelInput.style.left != '30000px') {
        result = grid.tbs_edit(grid, state, eventRow, grid.user_edit);
        if (grid.null(result) || result == true) {} else {
          grid.input_hide();
          grid.apply();
        }
      }
    }
  }
  editEnd(e, mode) {
    let selector = '#' + this.gridId;
    const grid = this;
    let state = 2;
    let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
    let input = document.querySelector(selector + ' .tbs-grid-input');
    let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
    if (grid.null(input.dataset.cellIndex) || input.dataset.cellIndex == -1) {
      grid.input_hide();
    } else {
      let result = true;
      let rowIndex = state == 0 ? grid.startRowIndex : input.dataset.rowIndex;
      let cellIndex = state == 0 ? grid.startCellIndex : input.dataset.cellIndex;
      let column = grid.classColumn.getColumnByIndex(cellIndex);
      //let column = grid.column_table.selectRowByRowIndex(cellInex);
      let columnName = grid.classColumn.getColumnName(cellIndex);
      let value = grid.getValue(rowIndex, columnName);
      let text = grid.getText(rowIndex, columnName);
      let eventData = {};
      let eventRow = grid.getRow(rowIndex);
      eventRow.rowIndex = rowIndex;
      eventRow.columnIndex = cellIndex;
      eventRow.columnName = columnName;
      eventRow.value = value;
      eventRow.text = text;
      eventRow.state = state;
      eventRow.newValue = input.value;
      eventRow.data = eventRow;
      if (column[tbsGridNames.column.editable] == true && grid.notNull(grid.user_edit)) {
        let result = true;
        if (state == 2 && panelInput.style.left != '30000px') {
          result = grid.tbs_edit(grid, state, eventRow, grid.user_edit);
          if (grid.null(result) || result == true) {
            //console.log(2);
            let s = input.value;
            if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.combo) s = input_code.value;
            grid.setValueByIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
            grid.input_hide();
            grid.apply();
          } else {
            grid.input_hide();
            grid.apply();
          }
        }
      }
    }
    document.querySelector(selector + ' .tbs-grid-input').blur();
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
    this.event_checkBox();
    this.event_mobileTouchDrag();
    document.addEventListener('scroll', function (e) {
      let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-panel-input');
      let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
      let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-panel-input-icon');
      let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');
      for (let i = 0; i < inputList.length; i++) {
        let panelInput = panelInputList[i];
        let input = inputList[i];
        let input_icon = inputIconList[i];
        let input_panel = inputPanelList[i];
        input.value = '';
        panelInput.style.left = '30000px';
        panelInput.style.width = '0px';
        input.dataset.rowIndex = -1;
        input.dataset.cellIndex = -1;
        input.dataset.mode = '';
        input.dataset.type = '';
        input_icon.style.display = 'none';
        input_icon.dataset.rowIndex = -1;
        input_icon.dataset.cellIndex = -1;
        input_icon.dataset.mode = '';
        input_icon.dataset.type = '';
        input_panel.innerHTML = '';
        input_panel.style.width = '0px';
        input_panel.style.left = '30000px';
        input_panel.dataset.rowIndex = -1;
        input_panel.dataset.cellIndex = -1;
        input_panel.dataset.mode = '';
        input_panel.dataset.type = '';
      }
    });
    const mouseDownGridEvent = function (e) {
      let name = e.target.className;
      //console.log('gird: ' + name)
      e.stopPropagation();
      if (name.indexOf('tbs-grid-panel10-filter-input') != -1 || name.indexOf('tbs-grid-cell-filter-input') != -1 || name.indexOf('tbs-grid-layer') != -1 || name.indexOf('tbs-grid-cell-filter-input') != -1 || name.indexOf('tbs-grid-cell-filter-combo') != -1) {} else {
        document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
        document.querySelector(selector + ' .tbs-grid-layer').style.height = '0px';
        document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
        document.querySelector(selector + ' .tbs-grid-layer').style.display = 'none';
        // document.querySelector(selector + ' .tbs-grid-input').focus();
        grid.input_focus();
      }
    };
    document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);
    const windowResizeEvent = function (e) {
      setTimeout(() => {
        grid.apply();
      }, 200);
    };
    window.addEventListener('resize', windowResizeEvent, true);
  }
  event_columnSort(cell) {
    let selector = '#' + this.gridId;
    const grid = this;
    let column = grid.classColumn.getColumn(cell.dataset.name);
    let columnName = cell.dataset.name;
    // * sort(▼), (▲), (■) order
    if (cell == undefined) return false;
    let isSortable = grid.isSortableColumn(cell.dataset.name);
    if (!isSortable) return false;

    //let sortDiv = cell.querySelector('.tbs-grid-cell-span-sort');
    let curSortKind = '';
    let sortKind = '';
    if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName)) {
      let dataRow = grid.sort_column_table.selectRow(tbsGridNames.column.name, columnName);
      curSortKind = dataRow[tbsGridNames.column.order];
    } else {
      curSortKind = '';
    }
    if (curSortKind == 'desc') sortKind = '';else if (curSortKind == 'asc') sortKind = 'desc';else sortKind = 'asc';
    if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName)) {
      let dataRow = grid.sort_column_table.selectRow(tbsGridNames.column.name, columnName);
      let rowId = dataRow[tbsGridNames.column.rowId];
      grid.sort_column_table.updateByRowId(rowId, tbsGridNames.column.order, sortKind);
    } else {
      let dataRow = {};
      dataRow[tbsGridNames.column.name] = columnName;
      dataRow[tbsGridNames.column.order] = sortKind;
      grid.sort_column_table.insert(dataRow);
    }
    if (grid.sort_column_table.count() == 0) {
      grid.classSort.initSortData();
    }
    if (grid.options.showFilterPanel) grid.classFilter.filters();
    grid.classSort.getSortButtonList();
    if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) {
      grid.setData(grid.view_table.data, null, false);
    } else {
      if (grid.isSortableColumn()) {
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        grid.classRange.removeRange(0, -1);
        grid.apply();
      }
    }
  }
  event_mobileTouchDrag() {
    //type : header, content
    let selector = '#' + this.gridId;
    const grid = this;
    let startRowIndex, startCellIndex;
    let lastRowIndex, lastCellIndex;
    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
    let xPos = {
      left: 0,
      x: 0
    };
    let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
    let yPos = {
      top: 0,
      y: 0
    };
    let actveTopRowIndex = -1;
    const touchStartEvent = function (e) {
      e.preventDefault();
      document.body.style.overflow = 'hidden';
      actveTopRowIndex = -1;
      let col;
      if (e.target.tagName == 'DIV') {
        col = e.target.parentNode;
      } else if (e.target.tagName == 'SPAN') {
        col = e.target.parentNode.parentNode;
      } else {
        col = e.target;
      }
      let rowIndex = grid.classColumn.getRowIndexInTable(col.parentNode.rowIndex);
      //grid.classRange.removeRange(0, -1);
      //let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
      yPos.top = Number(yBar.style.top.replace('px', ''));
      yPos.y = e.changedTouches[0].clientY;
      xPos.left = Number(xBar.style.left.replace('px', ''));
      xPos.x = e.changedTouches[0].clientX;
      document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchmove', touchMoveEvent);
      document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchend', touchEndEvent);
    };
    const touchMoveEvent = function (e) {
      //e.stopPropagation();
      let xMove = e.changedTouches[0].clientX - xPos.x;
      let yMove = e.changedTouches[0].clientY - yPos.y;
      ;
      if (Math.abs(xMove) > Math.abs(yMove)) {
        let left = xPos.left - xMove;
        let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
        if (left < 0) left = 0;
        if (left > xRailWidth) left = xRailWidth;
        xBar.style.left = left.toString() + 'px';
        let header = document.querySelector(selector + ' .tbs-grid-panel20');
        let ratio = (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
        let nLeft = (left * -1 * ratio).toString();
        grid.classScroll.setContentPanelLeft(nLeft);
        //grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        grid.apply();
      } else if (Math.abs(xMove) < Math.abs(yMove)) {
        let yBarTop = yPos.top - yMove;
        if (yBarTop < 0) yBarTop = 0;
        if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;
        let displayTopRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
        actveTopRowIndex = displayTopRowIndex;
        let topRowIndex = displayTopRowIndex;
        if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

        //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
        setTimeout(function () {
          grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);
        }, 1);
        setTimeout(function () {
          grid.classPanel30.setDataPanel(topRowIndex);
        }, 5);
      }
    };
    const touchEndEvent = function (e) {
      //e.stopPropagation();
      let xMove = e.changedTouches[0].clientX - xPos.x;
      let yMove = e.changedTouches[0].clientY - yPos.y;
      let tableCell;
      if (e.target.classList.contains('tbs-grid-cell-div-icon')) {
        targetName = 'icon';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-img')) {
        targetName = 'img';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div-text')) {
        targetName = 'text';
        tableCell = e.target.parentNode.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell-div')) {
        targetName = 'div';
        tableCell = e.target.parentNode;
      } else if (e.target.classList.contains('tbs-grid-cell')) {
        targetName = 'cell';
        tableCell = e.target;
      }
      let eventPanelName = 'panel30';
      startCellIndex = tableCell.cellIndex;
      lastCellIndex = startCellIndex;
      startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
      lastRowIndex = startRowIndex;
      if (Math.abs(xMove) < 5 && Math.abs(yMove) < 5) {
        grid.classRange.removeRange(0, -1, 0, -1);
        let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
        grid.apply();
      }
      document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
      document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
      document.body.style.overflow = 'auto';
    };
    document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
  }
  event_columnResize(panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let startX = 0; // mouse start x position
    let movedWidth = 0; // moved width
    let cellWidth = 0; // header cell width
    let tableWidth = 0;
    let initWidth = [];
    let childList = [];
    let tableCell, resizer;
    let eventDetail = 0; // 1 : click (resize), 2 : dblclick(auto resize)
    const mouseDownEvent = function (e) {
      e.stopPropagation();
      if (e.target.classList.contains('tbs-grid-cell-resize')) {
        tableCell = e.target.parentNode;
        resizer = e.target;
      } else return;
      eventDetail = e.detail;
      if (eventDetail == 1) {
        e.stopPropagation();
        // if (grid.options[tbsGridNames.column.resizable] == false) return;

        let isResizable = grid.isResizableColumn(tableCell.dataset.name);
        if (!isResizable) return;
        startX = window.pageXOffset + e.clientX;
        const style = window.getComputedStyle(tableCell);
        cellWidth = parseInt(style.width, 10);
        tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);
        resizer.classList.add('.tbs-grid-cell-resizing');
        if (tableCell.dataset.name == '') {
          let cellIndex = tableCell.cellIndex;
          let lastCellIndex = cellIndex + tableCell.colSpan;
          childList = [];
          initWidth = [];
          let thCells = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
          for (let i = cellIndex; i < lastCellIndex; i++) {
            let thCell = thCells[i];
            let width = parseInt(thCell.style.width, 10);
            childList.push(i); // cell index
            initWidth.push(width); // cell width
          }
        }
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseup', mouseUpEvent);
      } else if (eventDetail == 2) {
        e.stopPropagation();
        if (grid.isClassName(e.target, 'tbs-grid-cell-resize') != true) return;
        let cell = e.target.parentElement;
        let columnName = grid.classColumn.getColumnName(cell.cellIndex);
        let isAutoResizable = grid.isAutoResizableColumn(columnName);
        if (isAutoResizable != true) return;
        let colIndex = cell.cellIndex + parseInt(cell.colSpan) - 1;
        let column = grid.classColumn.getColumn(columnName);
        let firstWidth = parseInt(column[tbsGridNames.column.width]);
        let maxWidth = 0;
        let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        let fontSize = grid.getConfigFont('fontSize');
        let fontFamilty = grid.getConfigFont('fontFamily');
        for (let i = 0, len = grid.headerColumnTable.length; i < len; i++) {
          let headerColumn = grid.headerColumnTable[i];
          if (headerColumn[colIndex][tbsGridNames.column.kind] == 'column') {
            let width = parseInt(grid.getTextWidth(canvas, headerColumn[colIndex][tbsGridNames.column.text], fontSize, fontFamilty));
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
            let moveWidth = parseInt(movedWidth / count);
            for (let i = 0, len = childList.length; i < len; i++) {
              let cellIndex = childList[i];
              let nWidth = initWidth[i] + moveWidth < 10 ? 10 : initWidth[i] + moveWidth + 'px';
              grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
            }
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
          } else {
            let cellIndex = tableCell.cellIndex;
            let nWidth = (cellWidth + movedWidth < 10 ? 10 : cellWidth + movedWidth) + 'px';
            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
          }
        } else if (panelName == 'panel20') {
          movedWidth = e.clientX - startX;
          if (tableCell.dataset.name == '') {
            let count = childList.length;
            let moveWidth = parseInt(movedWidth / count);
            for (let i = 0, len = childList.length; i < len; i++) {
              let cellIndex = childList[i];
              let nWidth = initWidth[i] + moveWidth < 10 ? 10 : initWidth[i] + moveWidth + 'px';
              grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
            }
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
          } else {
            let cellIndex = tableCell.cellIndex;
            let nWidth = (cellWidth + movedWidth < 10 ? 10 : cellWidth + movedWidth) + 'px';
            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
          }
        }
      }
    };
    //eventColumnResize
    const mouseUpEvent = function (e) {
      if (eventDetail == 1) {
        e.stopPropagation();
        resizer.classList.remove('.tbs-grid-cell-resizing');
        document.removeEventListener('mousemove', mouseMoveEvent);
        document.removeEventListener('mouseup', mouseUpEvent);
      }
    };
    const panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
    panel.addEventListener('mousedown', mouseDownEvent, false);
  }
  event_checkBox() {
    //type : header, content
    let selector = '#' + this.gridId;
    const grid = this;
    const checkDowntEvent = function (e) {
      if (e.target.tagName == 'INPUT') {
        let tr = e.target.parentNode.parentNode.parentNode;
        let rowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
        if (e.target.checked) grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.isChecked, false);else grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.isChecked, true);
        // if (e.target.checked) grid.view_table.data[rowIndex].check = false;
        // else grid.view_table.data[rowIndex].check = true;
      }
    };
    document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').addEventListener('mousedown', checkDowntEvent, false);
  }
  event_wheel() {
    //mouse wheel event
    let selector = '#' + this.gridId;
    const grid = this;
    let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
    let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
    const mouseWheelEvent = function (e) {
      grid.editEnd();
      if (yScroll.style.display == '') {
        if (e.deltaY > 0) {
          e.preventDefault();
          e.returnValue = false;
          grid.classScroll.setBarPositionByDirection('down');
        }
        if (e.deltaY < 0) {
          e.preventDefault();
          e.returnValue = false;
          grid.classScroll.setBarPositionByDirection('up');
        }
      } else if (xScroll.style.display == '') {
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
    let leftButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-left');
    let rightButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-right');
    let upButton = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-up');
    let downButton = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-down');
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
        setTimeout(function () {
          doInterval(type);
        }, 500);
        grid.classScroll.setBarPositionByDirection(type);
      }
    }
  }
  event_railClick() {
    let selector = '#' + this.gridId;
    const grid = this;
    const xWrapClickEvent = function (e) {
      let bar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
      let left = parseInt(bar.style.left.replace('px', ''));
      if (isNaN(left)) left = 0;
      let barSize = grid.horizontalScroll.barSize;
      if (e.offsetX >= left && e.offsetX <= left + barSize) return;
      if (e.target.className != 'tbs-grid-horizontal-scroll-bar') {
        if (e.offsetX > left) {
          let move = e.offsetX - (left + barSize);
          bar.style.left = left + move + 'px';
        }
        if (e.offsetX < left) {
          let move = e.offsetX;
          bar.style.left = e.offsetX + 'px';
        }
        let movedLeft = grid.classScroll.getContentPanelLeft(bar.style.left);
        grid.classScroll.setContentPanelLeft(movedLeft);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
      }
    };
    const yWrapClickEvent = function (e) {
      let bar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
      let top = bar.style.top != '' ? parseInt(bar.style.top, 10) : 0;
      let barSize = grid.verticalScroll.barSize;
      if (e.offsetY >= top && e.offsetY <= top + barSize) return;
      if (e.target.className != 'tbs-grid-vertical-scroll-bar') {
        if (e.offsetY > top) {
          let move = e.offsetY - (top + barSize);
          bar.style.top = top + move + 'px';
        } else if (e.offsetY < top) {
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
    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
    let xPos = {
      left: 0,
      x: 0
    };
    //== x scroll
    const xMouseDownEvent = function (e) {
      grid.editEnd();
      e.stopPropagation();
      if (e.target.className != 'tbs-grid-horizontal-scroll-bar') return;
      xPos.left = Number(xBar.style.left.replace('px', ''));
      xPos.x = e.clientX;
      document.addEventListener('mousemove', xMouseMoveEvent);
      document.addEventListener('mouseup', xMouseUpEvent);
    };
    const xMouseMoveEvent = function (e) {
      //e.preventDefault();	// next stop
      //e.stopPropagation();	// up stop
      let xMove = e.clientX - xPos.x;
      let left = xPos.left + xMove;
      let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
      if (left < 0) left = 0;
      if (left > xRailWidth) left = xRailWidth;
      xBar.style.left = left.toString() + 'px';
      let header = document.querySelector(selector + ' .tbs-grid-panel20');
      let content = document.querySelector(selector + ' .tbs-grid-panel30');
      let sum = document.querySelector(selector + ' .tbs-grid-panel40');
      let footer = document.querySelector(selector + ' .tbs-grid-panel50');
      let ratio = (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
      grid.classScroll.setContentPanelLeft((left * -1 * ratio).toString());
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
    const xMouseUpEvent = function (e) {
      document.removeEventListener('mousemove', xMouseMoveEvent);
      document.removeEventListener('mouseup', xMouseUpEvent);
    };
    xBar.addEventListener('mousedown', xMouseDownEvent, false);

    //== y scroll
    let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
    let yPos = {
      top: 0,
      y: 0
    };
    let actveTopRowIndex = -1;
    const yMouseDownEvent = function (e) {
      grid.editEnd();
      e.stopPropagation();
      actveTopRowIndex = -1;
      if (e.target.className != 'tbs-grid-vertical-scroll-bar') return;
      yPos.top = Number(yBar.style.top.replace('px', ''));
      yPos.y = e.clientY;
      document.addEventListener('mousemove', yMouseMoveEvent);
      document.addEventListener('mouseup', yMouseUpEvent);
    };
    const yMouseMoveEvent = function (e) {
      let yBarTop = yPos.top + e.clientY - yPos.y;
      if (yBarTop < 0) yBarTop = 0;else if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;
      let topRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);

      //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
      setTimeout(function () {
        grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
      }, 1);
      setTimeout(function () {
        grid.classPanel30.setDataPanel(topRowIndex);
      }, 5);
    };
    const yMouseUpEvent = function (e) {
      e.stopPropagation();
      document.removeEventListener('mousemove', yMouseMoveEvent);
      document.removeEventListener('mouseup', yMouseUpEvent);
    };
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
      grid.value = contentRect.left - cellRect.left;
      grid.classScroll.setContentPanelLeftMove(value);
      grid.classScroll.setBarPosition(grid.code_horizontal);
    } else if (cellRect.right > contentRect.right) {
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
    return movedX < this.mousePointRange && movedY < this.mousePointRange;
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
      let eventRow = {};
      eventRow.rowIndex = rowIndex;
      eventRow.data = grid.getRow(rowIndex);
      if (grid.notNull(grid.user_rowBounding)) {
        let flag = grid.tbs_rowBounding(grid, element, eventRow, grid.user_rowBounding);
      } //user function call
    } else if (eventType == 'cellBounding') {
      element = param.element;
      rowIndex = param.rowIndex;
      cellIndex = param.cellIndex;
      let column = grid.classColumn.getColumnByIndex(cellIndex);
      let columnName = grid.classColumn.getColumnName(cellIndex);
      let value = grid.getValue(rowIndex, columnName);
      let text = grid.getText(rowIndex, columnName);
      let eventRow = {};
      eventRow.rowIndex = rowIndex;
      eventRow.columnIndex = cellIndex;
      eventRow.columnName = columnName;
      eventRow.value = value;
      eventRow.text = text;
      eventRow.data = grid.getRow(rowIndex);
      if (grid.notNull(grid.user_cellBounding)) {
        let flag = grid.tbs_cellBounding(grid, element, eventRow, grid.user_cellBounding);
      } //user function call
    } else if (eventType == 'click' || eventType == 'dblclick') {
      e = param.e;
      mode = param.mode; //mouse, key
      rowIndex = param.rowIndex;
      cellIndex = param.cellIndex;
      let column = grid.classColumn.getColumnByIndex(cellIndex);
      let columnName = grid.classColumn.getColumnName(cellIndex);
      let value = grid.getValue(rowIndex, columnName);
      let text = grid.getText(rowIndex, columnName);
      let eventRow = {};
      eventRow.rowIndex = rowIndex;
      eventRow.columnIndex = cellIndex;
      eventRow.columnName = columnName;
      eventRow.value = value;
      eventRow.text = text;
      eventRow.data = grid.getRow(rowIndex);
      if (eventType == 'click') {
        if (grid.notNull(grid.user_click)) {
          let flag = grid.tbs_click(grid, eventRow, grid.user_click);
        } //user function call
      } else if (eventType == 'dblclick') {
        if (grid.notNull(grid.user_dblclick)) {
          let flag = grid.tbs_dblclick(grid, eventRow, grid.user_dblclick);
        } //user function call
      }
    }
  }
  tbs_getMaxRowIndexByMouseMove = function () {
    let selector = '#' + this.gridId;
    const grid = this;
    let maxRowIndex;
    const rowIndexArray = [];
    let num;
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel62');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxRowIndex = Math.max(...rowIndexArray);
    } else if (grid.fixedRowIndex != -1) {
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxRowIndex = Math.max(...rowIndexArray);
    } else if (grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxRowIndex = Math.max(...rowIndexArray);
    } else {
      maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
    }
    return maxRowIndex;
  };
  tbs_getMinRowIndexByMouseMove = function () {
    let selector = '#' + this.gridId;
    const grid = this;
    let minRowIndex;
    const rowIndexArray = [];
    let num;
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMinRowIndexByMouseMove2('panel62');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinRowIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinRowIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      minRowIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedRowIndex != -1) {
      num = grid.tbs_getMinRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinRowIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      minRowIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMinRowIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinRowIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      minRowIndex = Math.min(...rowIndexArray);
    } else {
      minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
    }
    return minRowIndex;
  };
  tbs_getMaxCellIndexByMouseMove = function () {
    let selector = '#' + this.gridId;
    const grid = this;
    let maxCellIndex, num;
    const rowIndexArray = [];
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel62');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxCellIndex = Math.max(...rowIndexArray);
    } else if (grid.fixedRowIndex != -1) {
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxCellIndex = Math.max(...rowIndexArray);
    } else if (grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      maxCellIndex = Math.max(...rowIndexArray);
    } else {
      maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
    }
    return maxCellIndex;
  };
  tbs_getMinCellIndexByMouseMove = function () {
    let selector = '#' + this.gridId;
    const grid = this;
    let minCellIndex, num;
    const rowIndexArray = [];
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMinCellIndexByMouseMove2('panel62');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinCellIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinCellIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedRowIndex != -1) {
      num = grid.tbs_getMinCellIndexByMouseMove2('panel60');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedColumnIndex != -1) {
      num = grid.tbs_getMinCellIndexByMouseMove2('panel30');
      if (num != undefined) rowIndexArray.push(num);
      num = grid.tbs_getMinCellIndexByMouseMove2('panel32');
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else {
      minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
    }
    return minCellIndex;
  };
  tbs_getMaxRowIndexByMouseMove2 = function (panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let lastY = this.lastY;
    let maxRowIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let len = tableRows ? tableRows.length : 0;
    let startRowIndex, lastRowIndex;
    if (grid.fixedRowIndex != -1) {
      if (panelName == 'panel60') {
        startRowIndex = 0;
        lastRowIndex = this.fixedRowIndex;
      } else if (panelName == 'panel30') {
        startRowIndex = 0;
        lastRowIndex = len - 1;
      }
    } else {
      startRowIndex = 0;
      lastRowIndex = len - 1;
    }
    for (let i = startRowIndex; i < lastRowIndex + 1; i++) {
      let tableRow = tableRows[i];
      let tableRowIndex = i + 1;
      let rect = grid.getOffset(tableRow);
      let top = rect.top;
      if (lastY > top) maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
    }
    return maxRowIndex;
  };
  tbs_getMinRowIndexByMouseMove2 = function (panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let lastY = this.lastY;
    let minRowIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let len = tableRows ? tableRows.length : 0;
    let startRowIndex, lastRowIndex;
    if (grid.fixedRowIndex != -1) {
      if (panelName == 'panel60') {
        startRowIndex = 0;
        lastRowIndex = this.fixedRowIndex;
      } else if (panelName == 'panel30') {
        startRowIndex = 0;
        lastRowIndex = len - 1;
      }
    } else {
      startRowIndex = 0;
      lastRowIndex = len - 1;
    }
    for (let i = lastRowIndex; i >= startRowIndex; i--) {
      let tableRow = tableRows[i];
      let tableRowIndex = i + 1;
      let rect = grid.getOffset(tableRow);
      //console.log(`${panelName} i ${i} : rect.top ${rect.top} lastRowIndex ${lastRowIndex} : minRowIndex ${minRowIndex}  : lastY  ${this.lastY}`);
      let bottom = rect.top + tableRow.getBoundingClientRect().height;
      if (lastY < bottom) minRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
    }
    return minRowIndex;
  };
  tbs_getMaxCellIndexByMouseMove2 = function (panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let lastX = this.lastX;
    let maxCellIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = tableRow && tableRow.childNodes ? tableRow.childNodes.length : 0;
    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
      if (panelName == 'panel32') {
        startColumnIndex = 0;
        lastColumnIndex = this.fixedColumnIndex + 1;
      } else if (panelName == 'panel30') {
        startColumnIndex = this.fixedColumnIndex + 1;
        lastColumnIndex = len;
      }
    } else {
      startColumnIndex = 0;
      lastColumnIndex = len;
    }
    for (let x = startColumnIndex; x < lastColumnIndex; x++) {
      let tableCell = tableRow.childNodes[x];
      let column = grid.column_table.data[x];
      if (column[tbsGridNames.column.visible] == false) continue;
      let rect = grid.getOffset(tableCell);
      let rectLeft = rect.left;
      //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
      if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
    }
    return maxCellIndex;
  };
  tbs_getMinCellIndexByMouseMove2 = function (panelName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let lastX = this.lastX;
    let minCellIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = tableRow && tableRow.childNodes ? tableRow.childNodes.length : 0;
    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
      if (panelName == 'panel32') {
        startColumnIndex = 0;
        lastColumnIndex = this.fixedColumnIndex;
      } else if (panelName == 'panel30') {
        startColumnIndex = this.fixedColumnIndex + 1;
        lastColumnIndex = len - 1;
      }
    } else {
      startColumnIndex = 0;
      lastColumnIndex = len - 1;
    }
    for (let x = lastColumnIndex; x >= startColumnIndex; x--) {
      let tableCell = tableRow.childNodes[x];
      let column = grid.column_table.data[x];
      if (column[tbsGridNames.column.visible] == false) continue;
      let rect = grid.getOffset(tableCell);
      let rectRight = rect.left + tableCell.getBoundingClientRect().width;
      //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
      if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
    }
    return minCellIndex;
  };
  getOffset(el) {
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return {
      top: _y,
      left: _x
    };
  }
  tbs_moveNextRowCell(type) {
    //tbs_moveNextRowCell: none use => need to improve
    //type : left, right, up, down
    let selector = '#' + this.gridId;
    const grid = this;
    let rowIndex = -1;
    let cellIndex = -1;
    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
    let td = document.querySelector(selector + ' .tbs-grid-cell-start');
    if (td == null) return;
    let tableRowIndex = parseInt(td.parentNode.rowIndex);
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
    } else {
      this.tbs_moveCell(type);
      let topRowIndex = this.getFirstRowIndex();
      let movedLeft = grid.classScroll.getContentPanelLeft(0);
      grid.classScroll.setContentPanelLeft(movedLeft);
      grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
      let input = document.querySelector(selector + ' .tbs-grid-input');
      this.input_focus();
    }
  }
  tbs_moveCell(type) {
    //type : left, right, up, down
    let selector = '#' + this.gridId;
    const grid = this;
    let cellIndex = -1;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRowIndex, dataRowIndex;
    let tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
    if (grid.null(tableCell)) return;
    tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
    dataRowIndex = parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
    cellIndex = tableCell.cellIndex;
    if (type == 'left') {
      let startCellIndex = cellIndex;
      cellIndex = cellIndex - 1;
      for (let i = cellIndex; i >= 0; i--) {
        let column = this.column_table.data[i];
        if (column[tbsGridNames.column.visible] == false) cellIndex -= 1;else break;
      }
      if (cellIndex < 0 || this.column_table.data[cellIndex][tbsGridNames.column.visible] == false) {
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, startCellIndex, startCellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
        return;
      }
      let tableRow = tableRows[tableRowIndex - 1];
      let left1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().left;
      let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
      let left2 = window.pageYOffset + divContent.getBoundingClientRect().left;
      if (left1 < left2) {
        let moveWidth = left2 - left1;
        let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        let table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        let hiddenSize = this.horizontalScroll.hiddenSize;
        let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
        let sLeft;
        if (curLeft - moveWidth < 0) sLeft = 0 + 'px';else sLeft = -1 * curLeft + moveWidth + 'px';
        grid.classScroll.setContentPanelLeft(sLeft);
        grid.classScroll.setBarPosition(grid.code_horizontal);
      }
      grid.classRange.removeRange(0, -1);
      let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
      grid.classPanel30.setDataPanel(_topRowIndex);
    } else if (type == 'right') {
      let startCellIndex = cellIndex;
      cellIndex = cellIndex + 1;
      for (let i = cellIndex, len = this.column_table.count(); i < len; i++) {
        let column = this.column_table.data[i];
        if (column[tbsGridNames.column.visible] == false) cellIndex += 1;else break;
      }
      if (cellIndex >= this.column_table.count()) cellIndex = startCellIndex;
      let tableRow = tableRows[tableRowIndex - 1];
      let right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;
      let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
      let right2 = window.pageYOffset + panel30.getBoundingClientRect().right;
      if (right1 > right2) {
        let moveWidth = right1 - right2;
        let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        let hiddenSize = this.horizontalScroll.hiddenSize;
        let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
        let sLeft;
        if (curLeft + moveWidth > hiddenSize) sLeft = -1 * hiddenSize + 'px';else sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';
        grid.classScroll.setContentPanelLeft(sLeft);
        grid.classScroll.setBarPosition(grid.code_horizontal);
      }
      this.classRange.removeRange(0, -1);
      let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
      this.classPanel30.setDataPanel(_topRowIndex);
    } else if (type == 'up') {
      if (this.fixedRowIndex != -1) {
        dataRowIndex -= 1;
        let topRowIndex = this.getFirstRowIndex();
        if (dataRowIndex <= this.fixedRowIndex) topRowIndex = this.fixedRowIndex + 1;
        if (topRowIndex < 0) topRowIndex = 0;
        if (dataRowIndex < 0) dataRowIndex = 0;
        if (dataRowIndex >= topRowIndex) {
          //OK
          this.classRange.removeRange(0, -1);
          let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
          this.classPanel30.setDataPanel(_topRowIndex);
        } else if (dataRowIndex < topRowIndex && dataRowIndex == topRowIndex - 1) {
          this.classRange.removeRange(0, -1);
          let rowIndex = this.classScroll.setBarPositionByDirection('up');
          this.displayOneSelection(rowIndex, cellIndex);
        } else {
          this.classRange.removeRange(0, -1);
          let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
          this.classPanel30.setDataPanel(_topRowIndex);
        }
      } else {
        dataRowIndex -= 1;
        let topRowIndex = this.getFirstRowIndex();
        if (topRowIndex < 0) topRowIndex = 0;
        if (dataRowIndex < 0) dataRowIndex = 0;
        if (topRowIndex <= dataRowIndex) {
          this.classRange.removeRange(0, -1);
          let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
          this.classPanel30.setDataPanel(_topRowIndex);
        } else {
          this.classRange.removeRange(0, -1);
          let rowIndex = this.classScroll.setBarPositionByDirection('up');
          this.displayOneSelection(rowIndex, cellIndex);
        }
      }
    } else if (type == 'down') {
      let topRowIndex = this.getFirstRowIndex();
      let lastRowIndex = this.getLastRowIndex();
      if (grid.fixedRowIndex != -1 && dataRowIndex == grid.fixedRowIndex) {
        dataRowIndex += 1;
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex, dataRowIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classScroll.setBarPosition(grid.code_vertical, dataRowIndex);
        return;
      }
      if (this.pageRowCount > this.pageIntRowCount) {
        if (tableRows.length == this.pageRowCount) {
          if (dataRowIndex == lastRowIndex) {
            if (dataRowIndex == this.view_table.count() - 1) {
              this.classRange.removeRange(0, -1);
              this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
              this.displayOneSelection(dataRowIndex, cellIndex);
            } else {
              dataRowIndex += 1;
              this.classRange.removeRange(0, -1);
              this.classScroll.setBarPositionByDirection('down', topRowIndex + 2);
              this.displayOneSelection(dataRowIndex, cellIndex);
            }
          } else if (dataRowIndex == lastRowIndex - 1) {
            dataRowIndex += 1;
            this.classRange.removeRange(0, -1);
            this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
            this.displayOneSelection(dataRowIndex, cellIndex);
          } else {
            dataRowIndex += 1;
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          }
        } else {
          if (dataRowIndex == lastRowIndex) {
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          } else {
            dataRowIndex += 1;
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          }
        }
      } else {
        if (tableRows.length == this.pageRowCount) {
          if (dataRowIndex == lastRowIndex) {
            if (dataRowIndex == this.view_table.count() - 1) {
              this.classRange.removeRange(0, -1);
              let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
              this.classPanel30.setDataPanel(_topRowIndex);
            } else {
              dataRowIndex += 1;
              this.classRange.removeRange(0, -1);
              this.classScroll.setBarPositionByDirection('down');
              this.displayOneSelection(dataRowIndex, cellIndex);
            }
          } else {
            dataRowIndex += 1;
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          }
        } else {
          if (dataRowIndex == lastRowIndex) {
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          } else {
            dataRowIndex += 1;
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
          }
        }
      }
    }
  }

  /**
   * Excel Functions
   *
   */

  excelExport(options) {
    let selector = '#' + this.gridId;
    const grid = this;
    let headerRowCount = this.headerRowCount;
    let headerColumns = this.headerColumnTable;
    let columns = this.column_table.data;
    let rows = this.getRows();
    let table, thead, tbody, tr, th, td, input;
    table = document.createElement('table');
    table.style = 'border:1px solid #ccc;';
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    let sumWidth = 0;
    columns.map(column => {
      th = document.createElement('th');
      th.style.width = column[tbsGridNames.column.visible] == true ? parseInt(column.width) + 'px' : '0px';
      th.style.display = column[tbsGridNames.column.visible] == true ? '' : 'none';
      sumWidth += column[tbsGridNames.column.visible] == true ? parseInt(column.width) : 0;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    tbody = document.createElement('tbody');
    for (let i = 0; i < headerColumns.length; i++) {
      tr = document.createElement('tr');
      tr.style = 'height:' + this.rowHeight + 'px';
      sumWidth = 0;
      headerColumns[i].map(headerColumn => {
        if (headerColumn[tbsGridNames.column.name]) {
          let td = document.createElement('td');
          if (i == 0) td.rowSpan = headerRowCount;else if (i < len - 1) td.rowSpan = headerRowCount - i; // 3 - 1

          td.style = 'border:1px solid #ccc;background: #fcf1f4;';
          td.style.textAlign = 'center';
          let width = headerColumn['width'] != '' ? headerColumn['width'] : '100';
          td.style.width = width + 'px';
          sumWidth += Number(width);
          //------------------------------------------------------
          let div = document.createElement('div');
          div.classList.add('tbs-grid-cell-div');
          td.appendChild(div);
          let span = document.createElement('span');
          span.classList.add('tbs-grid-cell-span');
          span.textContent = headerColumn[tbsGridNames.column.text];
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
        } else if (headerColumn[tbsGridNames.column.text] != undefined) {
          let td = document.createElement('td');
          td.colSpan = headerColumn[tbsGridNames.column.colSpan];
          td.style = 'border:1px solid #ccc;background: #fcf1f4;';
          td.style.textAlign = 'center';
          let div = document.createElement('div');
          div.classList.add('tbs-grid-cell-div');
          let span = document.createElement('span');
          span.classList.add('tbs-grid-cell-span');
          span.textContent = headerColumn[tbsGridNames.column.text];
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
        } else {
          let td = document.createElement('td');
          td.style.display = 'none';
          td.classList.add('tbs-grid-cell');
          td.style.textAlign = 'center';
          let div = document.createElement('div');
          div.classList.add('tbs-grid-cell-div');
          let span = document.createElement('span');
          span.classList.add('tbs-grid-cell-span');
          span.textContent = headerColumn[tbsGridNames.column.text];
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
        }
      });
      tbody.appendChild(tr);
      rows.map(row => {
        tr = document.createElement('tr');
        tr.style = 'height:' + this.rowHeight + 'px';
        for (let x = 0, len = columns.length; x < len; x++) {
          let column = columns[x];
          let td = document.createElement('td');
          td.style = 'border:1px solid #ccc;';
          let width = column[tbsGridNames.column.width] != '' ? column[tbsGridNames.column.width] : '100';
          td.style.width = width + 'px';
          sumWidth += Number(width);
          let div = document.createElement('div');
          div.classList.add('tbs-grid-cell-div');
          td.appendChild(div);
          let span = document.createElement('span');
          span.classList.add('tbs-grid-cell-span');
          span.textContent = row[column[tbsGridNames.column.name]];
          div.appendChild(span);
          td.appendChild(div);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      });
    }
    table.appendChild(tbody);
    let type = options.type;
    let fileName = options.fileName;
    let blob = new Blob([table.outerHTML], {
      type: 'application/vnd.ms-excel;charset=utf-8'
    });
    saveAs(blob, fileName);

    // const myJsonString = '<table><tr><td>1</td><td>1</td><td>1</td></tr></table><table><tr><td>1</td><td>1</td><td>1</td></tr></table>';
    // const blob = new Blob([myJsonString], {
    // 	type: "application/vnd.ms-excel;charset=utf-8"
    // });
    // saveAs(blob, "table.xls");
    //      , {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=" + document.characterSet})
  }
}

/***/ }),

/***/ 937:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ TbsGridCell; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridCell {
  constructor(grid, column) {
    this.grid = grid;
    this.column = column;
  }
  createHtml() {
    let type = this.column[tbsGridNames.column.type];
    let cellTemplate = this.column[tbsGridNames.column.cellTemplate];
    if (grid.null(cellTemplate)) {
      this.createCell(type);
    } else {
      this.createTemplate();
    }
  }
  createCell() {}
  createTemplate() {}
  hideTableCells(grid, panelName, tableRow, lastColumnIndex) {
    if (grid.fixedColumnIndex != -1) {
      for (let x = 0, len = grid.column_table.count(); x < len; x++) {
        let tableCell = tableRow.childNodes[x];
        if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
          grid.classDom.setCellStyle(tableCell, 'width', '0px');
          grid.classDom.setCellStyle(tableCell, 'display', 'none');
        } else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
          grid.classDom.setCellStyle(tableCell, 'width', '0px');
          grid.classDom.setCellStyle(tableCell, 'display', 'none');
        }
      }
    }
  }
  showSelectedCells(grid, panelName, tableCell, rowIndex, cellIndex) {
    let value = grid.isSelectedCell(panelName, rowIndex, cellIndex);
    if (value == 1) {
      if (grid.startRowIndex == rowIndex && grid.startCellIndex == cellIndex) tableCell.classList.add('tbs-grid-cell-start');else tableCell.classList.add('tbs-grid-cell-select');
    }
  }
}
/*
export class TbsGridCellGroup extends TbsGridCell {}

export class TbsGridCellTree extends TbsGridCell {}

export class TbsGridCellCheckbox extends TbsGridCell {}

export class TbsGridCellImage extends TbsGridCell {}

export class TbsGridCellButton extends TbsGridCell {}

*/

/***/ }),

/***/ 550:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ TbsGridColumns; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridColumns {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }

  /**
   * Columns
   */

  setColumnDefaultValue(column) {
    const grid = this.grid;
    let columnType = column[tbsGridNames.column.type];
    if (grid.null(column[tbsGridNames.column.dataType])) {
      if (columnType == tbsGridTypes.CellType.number) column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.number;else if (columnType == tbsGridTypes.CellType.date) column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;else if (columnType == tbsGridTypes.CellType.combo) column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;else column[tbsGridNames.column.dataType] = tbsGridTypes.CellType.string;
    }
    if (grid.null(column[tbsGridNames.column.width])) column[tbsGridNames.column.width] = 100;
    if (grid.null(column[tbsGridNames.column.editable])) column[tbsGridNames.column.editable] = false;
    if (grid.null(column[tbsGridNames.column.visible])) column[tbsGridNames.column.visible] = true;
    if (columnType == tbsGridTypes.CellType.string) {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'left';
    } else if (columnType == tbsGridTypes.CellType.number) {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'right';
      if (grid.null(column[tbsGridNames.column.scale])) column[tbsGridNames.column.scale] = '18,0';
      if (grid.null(column[tbsGridNames.column.roundType])) column[tbsGridNames.column.roundType] = 'round';
      if (grid.null(column[tbsGridNames.column.fixedScale])) column[tbsGridNames.column.fixedScale] = true;
      if (grid.null(column[tbsGridNames.column.showZero])) column[tbsGridNames.column.showZero] = false;
      if (grid.null(column[tbsGridNames.column.commaUnit])) column[tbsGridNames.column.commaUnit] = 3; // Fixed value.
      if (grid.null(column[tbsGridNames.column.thousandChar])) column[tbsGridNames.column.thousandChar] = grid.getConfigCulture('thousandChar');
      if (grid.null(column[tbsGridNames.column.decimalChar])) column[tbsGridNames.column.decimalChar] = grid.getConfigCulture('decimalChar');
      //if (grid.null(column[tbsGridNames.column.currencyChar])) column[tbsGridNames.column.currencyChar] = grid.getConfigCulture('currencyChar');
    } else if (columnType == tbsGridTypes.CellType.date) {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'center';
      if (grid.null(column[tbsGridNames.column.format])) column[tbsGridNames.column.format] = grid.getConfigCalendar('dayPattern');
    } else if (columnType == tbsGridTypes.CellType.combo) {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'left';
    }
    return column;
  }

  /**
   * Add Columns Or All Columns
   */
  updateColumns(columns) {
    const grid = this.grid;
    let dataRows = [];
    const searchColumn = function (column) {
      if (!column[tbsGridNames.column.children]) {
        let columnType = column[tbsGridNames.column.type];
        column[tbsGridNames.column.type] = grid.null(columnType) ? tbsGridTypes.CellType.string : columnType;
        grid.classColumn.setColumnDefaultValue(column);
      } else column[tbsGridNames.column.children].map(n => searchColumn(n));
    };
    columns.map(column => searchColumn(column, null));
  }

  /**
   * All Columns
   */
  updateColumnTable() {
    const grid = this.grid;

    /* update TbsGrid.columns */
    this.copyColumnData();
    this.copyHeaderColumnData();
    let dataRows = [];
    const searchColumn = function (column) {
      if (!column[tbsGridNames.column.children]) dataRows.push(column);else column[tbsGridNames.column.children].map(n => searchColumn(n));
    };
    grid.columns.map(column => searchColumn(column, null));

    /* columns order changed or add column */
    grid.column_table.remove();
    dataRows.map(dataRow => grid.column_table.insert(grid.copyJson(dataRow)));
  }
  copyColumnData() {
    const grid = this.grid;
    const searchColumn = function (column) {
      if (!column[tbsGridNames.column.children]) {
        let columnName = column[tbsGridNames.column.name];
        let dataRow = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
        if (grid.notNull(dataRow)) for (let key in dataRow) column[key] = dataRow[key];
      } else column[tbsGridNames.column.children].map(n => searchColumn(n));
    };
    grid.columns.map(column => searchColumn(column));
  }
  copyHeaderColumnData() {
    const grid = this.grid;
    const searchColumn = function (column) {
      if (column[tbsGridNames.column.children]) {
        let num = column[tbsGridNames.column.num];
        Loop1: for (let i = 0, len = grid.headerColumnTable.length; i < len; i++) {
          let dataRows = grid.headerColumnTable[i];
          for (let x = 0, len2 = dataRows.length; x < len2; x++) {
            let dataRow = dataRows[x];
            if (num == dataRow[tbsGridNames.column.num]) {
              for (let key in dataRow) column[key] = dataRow[key];
              break Loop1;
            }
          }
        }
        column[tbsGridNames.column.children].map(n => searchColumn(n));
      }
    };
    grid.columns.map(column => searchColumn(column, null));
  }
  addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) {
    const grid = this.grid;
    grid.classColumn.updateColumns([addColumn]);

    // Validate duplication column name
    if (grid.isColumnName(addColumn[tbsGridNames.column.name])) {
      alert('Duplication column name.');
      return;
    }

    // Add column in grid.header_table.data
    let result = [];
    let headerColumn = grid.classColumn.getHeaderColumn(targetRowIndex, targetColumnIndex);
    if (grid.null(headerColumn)) {
      alert('Header column not found.');
      return;
    }

    // Find parent Column. if not, find column
    let targetColumn;
    let parentColumn;
    let num = headerColumn[tbsGridNames.column.num];
    let parentNum = headerColumn[tbsGridNames.column.parentNum];
    targetColumn = grid.classColumn.getHeaderColumnByNumber(num);
    if (parentNum != 0) {
      parentColumn = grid.classColumn.getHeaderColumnByNumber(parentNum);
      parentColumn = parentColumn.childNodes; // array
    } else parentColumn = grid.columns; // array

    // Find targetColumnIndex
    let targetIndex;
    for (let i = 0; i < parentColumn.length; i++) {
      let node = parentColumn[i];
      if (num == node[tbsGridNames.column.num]) targetIndex = i;
    }
    if (orderType == tbsGridTypes.BeforeAfter.before) {
      parentColumn.splice(targetIndex, 0, addColumn);
    } else if (orderType == tbsGridTypes.BeforeAfter.after) {
      targetIndex += 1;
      if (targetIndex >= parentColumn.length) parentColumn.push(addColumn);else parentColumn.splice(targetIndex, 0, addColumn);
    }
    grid.classControl.after_addColumn();
  }
  removeColumn(targetRowIndex, targetColumnIndex) {
    const grid = this.grid;

    // Add column in grid.columns
    let result = [];
    let headerColumn = grid.classColumn.getHeaderColumn(targetRowIndex, targetColumnIndex);
    if (grid.null(headerColumn)) {
      alert('Header column not found.');
      return;
    }

    // Find parent Column. if not, find column
    let targetColumn;
    let parentColumn;
    let num = headerColumn[tbsGridNames.column.num];
    let parentNum = headerColumn[tbsGridNames.column.parentNum];
    targetColumn = grid.classColumn.getHeaderColumnByNumber(num);
    if (parentNum != 0) {
      parentColumn = grid.classColumn.getHeaderColumnByNumber(parentNum);
      parentColumn = parentColumn.childNodes; // array
    } else parentColumn = grid.columns; // array

    // Find targetColumnIndex
    let targetIndex;
    for (let i = 0; i < parentColumn.length; i++) {
      let node = parentColumn[i];
      if (num == node[tbsGridNames.column.num]) targetIndex = i;
    }
    parentColumn.splice(targetIndex, 1);
    grid.classControl.after_removeColumn();
  }
  changeColumnOrder(movingColumn, targetColumn, orderType) {
    const grid = this.grid;
    movingColumn = grid.copyJson(movingColumn);
    targetColumn = grid.copyJson(targetColumn);

    /* find parentNode : movingColumnName */
    const findParentNode = function (node, pNode, columnNumber) {
      if (parentNode) return;else if (node[tbsGridNames.column.num] == columnNumber) {
        parentNode = pNode;
      } else if (node[tbsGridNames.column.children]) {
        for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
          findParentNode(node[tbsGridNames.column.children][i], node, columnNumber);
        }
      }
    };
    let prevColumns = grid.copyJson(grid.column_table.data);
    let parentNode = null;
    let parentArray = null;
    let movingColumnNumber = movingColumn[tbsGridNames.column.num];
    let targetColumnNumber = targetColumn[tbsGridNames.column.num];
    for (let i = 0, len = grid.columns.length; i < len; i++) {
      let node = grid.columns[i];
      if (node[tbsGridNames.column.num] == movingColumnNumber) {
        parentArray = grid.columns;
        break;
      }
      findParentNode(node, grid.columns, movingColumnNumber);
      if (parentNode) {
        parentArray = parentNode[tbsGridNames.column.children];
        break;
      }
    }
    if (grid.null(parentArray)) return;

    /* Delete movingColumnName node */
    let newNode = null;
    for (let i = parentArray.length - 1; i >= 0; i--) {
      let item = parentArray[i];
      if (item[tbsGridNames.column.num] == movingColumnNumber) {
        newNode = grid.copyJson(item);
        parentArray.splice(i, 1);
        break;
      }
    }

    /* Add node before, after targetColumn */
    let targetIndex = null;
    for (let i = 0, len = parentArray.length; i < len; i++) {
      let item = parentArray[i];
      if (item[tbsGridNames.column.num] == targetColumnNumber) {
        targetIndex = i;
        break;
      }
    }
    if (orderType == 'before') parentArray.splice(targetIndex, 0, newNode);else if (orderType == 'after') {
      if (targetIndex + 1 <= parentArray.length - 1) parentArray.splice(targetIndex + 1, 0, newNode);else parentArray.push(newNode);
    }

    /* Change Fixed Column Index */
    if (grid.fixedColumnIndex != -1) {
      if (movingColumn.colIndex <= grid.fixedColumnIndex && targetColumn.colIndex > grid.fixedColumnIndex) {
        grid.classControl.after_changeColumnOrder();
        let childCount = Number(movingColumn.colSpan);
        grid.fixedColumnIndex = grid.fixedColumnIndex - childCount;
        if (grid.fixedColumnIndex < 0) grid.classColumn.removeFixedColumn();else grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
      } else if (movingColumn.colIndex > grid.fixedColumnIndex && targetColumn.colIndex <= grid.fixedColumnIndex) {
        grid.classControl.after_changeColumnOrder();
        let childCount = Number(movingColumn.colSpan);
        grid.fixedColumnIndex = grid.fixedColumnIndex + childCount;
        grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
      } else grid.classControl.after_changeColumnOrder();
    } else {
      grid.classControl.after_changeColumnOrder();
    }
  }
  getColumn(name, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    return table.selectRow(tbsGridNames.column.name, name);
  }
  getColumnByIndex(colIndex, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    return table.data[colIndex];
  }
  getColumnName(colIndex, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    return table.selectValue(colIndex, tbsGridNames.column.name);
  }
  getColumnIndex(name, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    return table.selectRowIndex(tbsGridNames.column.name, name);
  }
  getColumns(table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    return table.select();
  }
  getColumnPropertyByIndex(columnIndex, property, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    let column = table.data[columnIndex];
    let result = grid.null(column[property]) ? null : column[property];
    return result;
  }
  getColumnProperty(columnName, property, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    let columnIndex = table.selectRowIndex(tbsGridNames.column.name, columnName);
    return grid.null(columnIndex) ? null : grid.classColumn.getColumnPropertyByIndex(columnIndex, property);
  }
  getFirstVisibleColumnIndex() {
    const grid = this.grid;
    let result = null;
    for (let i = 0; i < grid.column_table.count(); i++) {
      let column = grid.column_table.data[i];
      if (column[tbsGridNames.column.visible]) {
        result = i;
        break;
      }
    }
    return result;
  }
  getLastVisibleColumnIndex() {
    const grid = this.grid;
    let result = null;
    for (let i = grid.column_table.count() - 1; i >= 0; i--) {
      let column = grid.column_table.data[i];
      if (column[tbsGridNames.column.visible]) {
        result = i;
        break;
      }
    }
    return result;
  }
  setColumn(columnName, property, value, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    let column = table.selectRow(tbsGridNames.column.name, columnName);
    column[property] = value;
  }
  setColumnByType(columnType, property, value, table) {
    const grid = this.grid;
    if (grid.null(table)) table = grid.column_table;
    let dataRows = table.selectRow(tbsGridNames.column.type, columnType);
    dataRows.map(dataRow => {
      let rowId = dataRow[tbsGridNames.column.rowId];
      table.updateByRowId(rowId, property, value);
    });
  }
  getSelectedTableCell(rowIndex, cellIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let td = null;
    let startRowIndex;
    let startCellIndex;
    if (arguments.length == 0) {
      startRowIndex = grid.startRowIndex;
      startCellIndex = grid.startCellIndex;
    } else {
      startRowIndex = rowIndex;
      startCellIndex = cellIndex;
    }
    if (startRowIndex == -1 || startCellIndex == -1) return;
    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 table tbody tr');
    let trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30 table tbody tr');
    for (let i = 0; i < trList.length; i++) {
      let tr = trList[i];
      let dataRowIndex = parseInt(tr.childNodes[0].childNodes[0].innerText) - 1;
      if (dataRowIndex == startRowIndex) {
        let td = trContentList[i].childNodes[startCellIndex];
        break;
      }
    }
    return td;
  }
  getRowIndexInTable(tableRowIndex, panelName = 'panel31') {
    let selector = this.selector;
    const grid = this.grid;
    let leftPanelName = panelName;
    if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') leftPanelName = 'panel61';else leftPanelName = 'panel31';
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
    return parseInt(tableRows[tableRowIndex].childNodes[0].dataset.rowIndex);
  }
  getLeftTableCell(rowIndex, panel = 'panel31') {
    1;
    let selector = this.selector;
    const grid = this.grid;
    let result = null;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display:"])');
    for (let i = 0, len = tableRows.length; i < len; i++) {
      let tableRow = tableRows[i];
      let index = parseInt(tableRow.childNodes[0].childNodes[0].innerText) - 1;
      if (index == rowIndex) {
        result = tableRow.childNodes[0];
        break;
      }
    }
    return result;
  }
  getJsonRow(jsonArray, name, value) {
    let result;
    for (let i = 0, len = jsonArray.length; i < len; i++) {
      let json = jsonArray[i];
      if (json[name] == value) {
        result = json;
        break;
      }
    }
    return result;
  }
  setFixedColumn(fixedColumnIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (fixedColumnIndex >= grid.column_table.count()) {
      grid.fixedColumnIndex = -1;
      return;
    }
    grid.fixedColumnIndex = fixedColumnIndex;
    grid.classColumn.updateHeaderFixedColumns();
    grid.classScroll.setPanelSize();
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    grid.classPanel70.setDataPanel();
    grid.apply();
  }
  removeFixedColumn() {
    let selector = this.selector;
    const grid = this.grid;
    grid.fixedColumnIndex = -1;
    grid.classScroll.setPanelSize();
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    grid.classPanel70.setDataPanel();
    grid.apply();
  }

  /**
   * Header Columns
   */

  createHeaderColumns() {
    let selector = this.selector;
    const grid = this.grid;
    const getChildrenColumnCount = function (userColumn) {
      let columnCount = 0;
      const getCount = function (userColumn) {
        if (userColumn[tbsGridNames.column.children]) {
          for (let i = 0, len = userColumn[tbsGridNames.column.children].length; i < len; i++) {
            getCount(userColumn[tbsGridNames.column.children][i]);
          }
        } else columnCount += 1;
      };
      getCount(userColumn);
      return columnCount;
    };
    const getTreeDepth = function (userColumns, depth = 0) {
      let maxDepth = 1;
      const getDepth = (userColumn, depth = 1) => {
        if (depth > maxDepth) maxDepth = depth;
        if (userColumn[tbsGridNames.column.children]) {
          for (let i = 0, len = userColumn[tbsGridNames.column.children].length; i < len; i++) {
            getDepth(userColumn[tbsGridNames.column.children][i], depth + 1);
          }
        }
      };
      for (let i = 0, len = userColumns.length; i < len; i++) getDepth(userColumns[i]);
      return maxDepth;
    };
    const setNumber = function (userColumns, rowIndex, parentNum = 0) {
      userColumns.map(userColumn => {
        num = num + 1;
        userColumn[tbsGridNames.column.num] = num;
        userColumn[tbsGridNames.column.parentNum] = parentNum;
        userColumn[tbsGridNames.column.rowIndex] = rowIndex;
        userColumn[tbsGridNames.column.rowSpan] = userColumn[tbsGridNames.column.children] ? 1 : headerRowCount - rowIndex;
        userColumn[tbsGridNames.column.colSpan] = getChildrenColumnCount(userColumn);
        if (userColumn[tbsGridNames.column.children]) {
          setNumber(userColumn[tbsGridNames.column.children], rowIndex + 1, num);
        }
      });
    };
    let num = 0;
    let parentNum = 0;
    let headerRowCount = getTreeDepth(grid.columns);
    grid.headerRowCount = headerRowCount;
    setNumber(grid.columns, 0);
  }
  createHeaderColumnTable() {
    let selector = this.selector;
    const grid = this.grid;
    const createHeaderColumns = function (userColumns) {
      userColumns.map(userColumn => {
        let headerColumn = {};
        let kind = userColumn[tbsGridNames.column.children] ? 'header' : 'column';
        if (kind == 'column') {
          let columnName = userColumn[tbsGridNames.column.name];
          let column = grid.classColumn.getColumn(columnName);
          headerColumn[tbsGridNames.column.name] = column[tbsGridNames.column.name];
          headerColumn[tbsGridNames.column.text] = column.header[tbsGridNames.column.text];
          headerColumn[tbsGridNames.column.align] = column.header[tbsGridNames.column.align] ? column.header[tbsGridNames.column.align] : 'center';
          headerColumn[tbsGridNames.column.kind] = kind;
          headerColumn[tbsGridNames.column.rowSpan] = userColumn[tbsGridNames.column.rowSpan];
          headerColumn[tbsGridNames.column.colSpan] = userColumn[tbsGridNames.column.colSpan];
          headerColumn[tbsGridNames.column.rowIndex] = userColumn[tbsGridNames.column.rowIndex];
          headerColumn[tbsGridNames.column.colIndex] = userColumn[tbsGridNames.column.colIndex];
          headerColumn[tbsGridNames.column.visible] = column[tbsGridNames.column.visible];
        } else {
          headerColumn[tbsGridNames.column.name] = userColumn[tbsGridNames.column.name] ? userColumn[tbsGridNames.column.name] : '';
          headerColumn[tbsGridNames.column.align] = userColumn[tbsGridNames.column.align] ? userColumn[tbsGridNames.column.align] : 'center';
          headerColumn[tbsGridNames.column.children] = userColumn[tbsGridNames.column.children];
          headerColumn[tbsGridNames.column.text] = userColumn[tbsGridNames.column.text];
          headerColumn[tbsGridNames.column.kind] = kind;
          headerColumn[tbsGridNames.column.rowSpan] = userColumn[tbsGridNames.column.rowSpan];
          headerColumn[tbsGridNames.column.colSpan] = userColumn[tbsGridNames.column.colSpan];
          headerColumn[tbsGridNames.column.rowIndex] = userColumn[tbsGridNames.column.rowIndex];
          headerColumn[tbsGridNames.column.colIndex] = userColumn[tbsGridNames.column.colIndex];
          headerColumn[tbsGridNames.column.visible] = userColumn[tbsGridNames.column.visible];
          headerColumn[tbsGridNames.column.subRowSpan] = 1;
          headerColumn[tbsGridNames.column.subColSpan] = 1;
          headerColumn[tbsGridNames.column.className] = userColumn[tbsGridNames.column.className];
          if (grid.null(headerColumn[tbsGridNames.column.visible])) headerColumn[tbsGridNames.column.visible] = true;
        }
        headerColumn[tbsGridNames.column.num] = userColumn[tbsGridNames.column.num];
        headerColumn[tbsGridNames.column.parentNum] = userColumn[tbsGridNames.column.parentNum];
        let rowIndex = headerColumn[tbsGridNames.column.rowIndex];
        let childrenCount = headerColumn[tbsGridNames.column.children] ? headerColumn[tbsGridNames.column.children].length : 0;
        let columnCount = headerColumn[tbsGridNames.column.colSpan];
        headerColumnRows[rowIndex].push(headerColumn);
        let blankColumn = {};
        blankColumn[tbsGridNames.column.text] = headerColumn[tbsGridNames.column.text];
        blankColumn[tbsGridNames.column.kind] = 'empty';
        blankColumn[tbsGridNames.column.rowSpan] = 1;
        blankColumn[tbsGridNames.column.colSpan] = 1;
        blankColumn[tbsGridNames.column.rowIndex] = 0;
        blankColumn[tbsGridNames.column.colIndex] = 0;
        blankColumn[tbsGridNames.column.visible] = false;
        blankColumn[tbsGridNames.column.align] = '';
        blankColumn[tbsGridNames.column.subRowSpan] = 1;
        blankColumn[tbsGridNames.column.subColSpan] = 1;

        //make blank column(row)
        if (childrenCount == 0) {
          for (let i = rowIndex + 1; i < headerRowCount; i++) headerColumnRows[i].push(blankColumn);
        }
        //make blank column(colums)
        if (columnCount > 1) {
          for (let i = 1; i < columnCount; i++) headerColumnRows[rowIndex].push(blankColumn);
        }
        if (userColumn[tbsGridNames.column.children]) {
          createHeaderColumns(userColumn[tbsGridNames.column.children]);
        }
      });
    };
    let headerColumnRows = [];
    let headerRowCount = grid.headerRowCount;
    for (let i = 0; i < headerRowCount; i++) headerColumnRows[i] = [];
    createHeaderColumns(grid.columns);
    headerColumnRows.map((columns, rowIndex) => {
      columns.map((column, colIndex) => {
        column[tbsGridNames.column.rowIndex] = rowIndex;
        column[tbsGridNames.column.colIndex] = colIndex;
        delete column[tbsGridNames.column.children];
      });
    });
    grid.headerColumnTable = headerColumnRows;
  }
  updateHeaderFixedColumns() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.headerColumnTable.length == 1) return;
    if (grid.fixedColumnIndex >= grid.column_table.count() - 1) return;
    let fixedColumnIndex = grid.fixedColumnIndex;
    let columnName = grid.classColumn.getColumnName(fixedColumnIndex);
    let columnCount = 0;
    const getChildCount = function (node) {
      if (node[tbsGridNames.column.children]) {
        for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
          getChildCount(node[tbsGridNames.column.children][i]);
        }
      } else childCount += 1;
    };
    const findColumnNode = function (node, columnName) {
      if (rootNode) return;
      if (node[tbsGridNames.column.children]) {
        for (let i = 0, len = node[tbsGridNames.column.children].length; i < len; i++) {
          if (grid.notNull(node[tbsGridNames.column.children][i][tbsGridNames.column.name])) {
            if (node[tbsGridNames.column.children][i][tbsGridNames.column.name] == columnName) {
              rootNode = node;
              return;
            }
          }
          findColumnNode(node[tbsGridNames.column.children][i], columnName);
        }
      }
    };
    const removeColumnNodes = function (node) {
      if (node[tbsGridNames.column.children]) {
        let parentArray = node[tbsGridNames.column.children];
        for (let i = parentArray.length - 1; i >= 0; i--) {
          let childNode = parentArray[i];
          if (childNode[tbsGridNames.column.children]) removeColumnNodes(childNode);else {
            let columnName = childNode[tbsGridNames.column.name];
            let columnIndex = grid.classColumn.getColumnIndex(columnName);
            if (columnIndex > fixedColumnIndex) parentArray.splice(i, 1);
          }
        }
      }
    };
    const removeBlankNodes = function (node) {
      if (node[tbsGridNames.column.children] && node[tbsGridNames.column.children].length != 0) {
        let parentArray = node[tbsGridNames.column.children];
        for (let i = parentArray.length - 1; i >= 0; i--) {
          let childNode = parentArray[i];
          if (childNode[tbsGridNames.column.children] && childNode[tbsGridNames.column.children].length > 0) removeBlankNodes(childNode, null);else if (childNode[tbsGridNames.column.children] && childNode[tbsGridNames.column.children].length == 0) parentArray.splice(i, 1);
        }
      }
    };
    const removePreColumnNodes = function (node) {
      if (node[tbsGridNames.column.children]) {
        let parentArray = node[tbsGridNames.column.children];
        for (let i = parentArray.length - 1; i >= 0; i--) {
          let childNode = parentArray[i];
          if (childNode[tbsGridNames.column.children]) removePreColumnNodes(childNode);else {
            let columnName = childNode[tbsGridNames.column.name];
            let columnIndex = grid.classColumn.getColumnIndex(columnName);
            if (columnIndex <= fixedColumnIndex) parentArray.splice(i, 1);
          }
        }
      }
    };

    /* find parent node */
    let rootNode = null;
    let childCount = 0;
    let arrayIndex = null;
    for (let i = 0, len = grid.columns.length; i < len; i++) {
      let node = grid.columns[i];
      findColumnNode(node, columnName);
      if (rootNode) {
        rootNode = node;
        arrayIndex = i;
        break;
      }
    }

    /* Exception */
    if (grid.null(rootNode)) return;
    getChildCount(rootNode);
    if (childCount == 1) return;

    /* copy parent node */
    let newNode = grid.copyJson(rootNode);

    /* delete node */
    removeColumnNodes(rootNode);
    removeBlankNodes(rootNode);

    /* add new node */
    if (arrayIndex + 1 < grid.columns.length) grid.columns.splice(arrayIndex + 1, 0, newNode);else grid.columns.push(newNode);

    /* delete node, blank node */
    for (let i = newNode[tbsGridNames.column.children].length - 1; i >= 0; i--) {
      let node = newNode[tbsGridNames.column.children][i];

      /* Delete column node */
      if (grid.null(node[tbsGridNames.column.children])) {
        let columnName = node[tbsGridNames.column.name];
        let columnIndex = grid.classColumn.getColumnIndex(columnName);
        if (columnIndex <= grid.fixedColumnIndex) newNode[tbsGridNames.column.children].splice(i, 1);
        continue;
      } else removePreColumnNodes(node);
    }
    for (let i = grid.columns.length - 1; i >= 0; i--) {
      let node = grid.columns[i];
      if (node[tbsGridNames.column.children] && node[tbsGridNames.column.children].length == 0) {
        grid.columns.splice(i, 1);
        continue;
      }
      removeBlankNodes(node);
    }

    /* create header columns */
    grid.classColumn.createHeaderColumns();
    grid.classColumn.createHeaderColumnTable();
  }
  getDisplayedHeaderColumn(panelName = 'panel30') {
    let selector = this.selector;
    const grid = this.grid;

    // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
    // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
    // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
    // styleLeft = parseInt(styleLeft, 10);

    let columns = grid.column_table.data;
    if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62') {
      let startColumnIndex = 0;
      let lastColumnIndex = grid.fixedColumnIndex;
      return {
        startColumnIndex: startColumnIndex,
        lastColumnIndex: lastColumnIndex
      };

      // let sumWidth = 0;
      // // get startColumnIndex
      // for (let i = 0; i < this.fixedColumnIndex; i++) {
      //     let column = columns[i];
      //     if (column[tbsGridNames.column.visible] == false) continue;
      //     sumWidth += parseInt(column[tbsGridNames.column.width]);
      //     if (sumWidth + styleLeft > 0) {
      //         startColumnIndex = i;
      //         break;
      //     }
      // }
      // sumWidth = rectTable.width;
      // // get lastColumnIndex
      // for (let i = this.fixedColumnIndex; i >= 0; i--) {
      //     let column = columns[i];
      //     if (column[tbsGridNames.column.visible] == false) continue;
      //     sumWidth -= parseInt(column[tbsGridNames.column.width]);
      //     if (sumWidth + styleLeft < rectPanel.width) {
      //         lastColumnIndex = i;
      //         break;
      //     }
      // }
      // return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
    } else {
      let startColumnIndex = 0;
      let lastColumnIndex = columns.length - 1;
      if (grid.fixedColumnIndex != -1) startColumnIndex = grid.fixedColumnIndex + 1;
      return {
        startColumnIndex: startColumnIndex,
        lastColumnIndex: lastColumnIndex
      };

      // let sumWidth = 0;
      // for (let i = 0, len = columns.length; i < len; i++) {
      //     let column = columns[i];
      //
      //     if (column[tbsGridNames.column.visible] == false) sumWidth += 0;
      //     else sumWidth += parseInt(column[tbsGridNames.column.width]);
      //
      //     if (sumWidth + styleLeft > 0) {
      //         startColumnIndex = i;
      //         break;
      //     }
      // }
      // sumWidth = rectTable.width;
      // for (let i = columns.length - 1; i >= 0; i--) {
      //     let column = columns[i];
      //     if (column[tbsGridNames.column.visible] == false) sumWidth -= 0;
      //     else sumWidth -= parseInt(column[tbsGridNames.column.width]);
      //     if (sumWidth + styleLeft < rectPanel.width) {
      //         lastColumnIndex = i;
      //         break;
      //     }
      // }
      // return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
    }
  }
  getHeaderColumn(rowIndex, columnIndex) {
    let selector = this.selector;
    const grid = this.grid;
    return grid.headerColumnTable[rowIndex][columnIndex] == undefined ? null : grid.headerColumnTable[rowIndex][columnIndex];
  }
  getHeaderColumnByNumber(num) {
    let selector = this.selector;
    const grid = this.grid;
    let result;
    const getParentColumn = function (headerColumn) {
      if (headerColumn[tbsGridNames.column.num] == num) {
        result = headerColumn;
        return;
      }
      if (headerColumn[tbsGridNames.column.children]) {
        for (let i = 0, len = headerColumn[tbsGridNames.column.children].length; i < len; i++) {
          getParentColumn(headerColumn[tbsGridNames.column.children][i]);
        }
      }
    };
    for (let i = 0; i < grid.columns.length; i++) getParentColumn(grid.columns[i]);
    return result;
  }
  getHeaderPropertyByIndex(columnIndex, property) {
    let selector = this.selector;
    const grid = this.grid;
    let column = grid.column_table.data[columnIndex];
    let result = grid.null(column.header[property]) ? null : column.header[property];
    return result;
  }
  getHeaderProperty(columnName, property) {
    let selector = this.selector;
    const grid = this.grid;
    let columnIndex = grid.classColumn.getColumnIndex(columnName);
    return grid.classColumn.getHeaderPropertyByIndex(columnIndex, property);
  }
  setHeaderProperty(rowIndex, colIndex, property, value) {
    const grid = this.grid;
    let column = grid.headerColumnTable[rowIndex][colIndex];
    let kind = column[tbsGridNames.column.kind];
    column[property] = value;
    if (kind == tbsGridTypes.ColumnKind.column) {
      let name = column[tbsGridNames.column.name];
      let dataRow = grid.column_table.selectRow(tbsGridNames.column.name, name);
      if (property == tbsGridNames.column.text) {
        dataRow.header[tbsGridNames.column.text] = value;
      } else if (property == tbsGridNames.column.className) {
        dataRow.header[tbsGridNames.column.className] = value;
      } else {
        dataRow.header[property] = value;
      }
    }
  }
  createHeaderFxiedColumnTable() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.fixedColumnIndex != -1) return;
    if (grid.fixedColumnIndex >= grid.column_table.count() - 1) return;

    /* panel32 */
    let headerRows = grid.headerColumnTable;
    for (let i = 0, rowLen = headerRows.length; i < rowLen; i++) {
      let headerRow = headerRows[i];
      let sourceHeader = headerRow[grid.fixedColumnIndex];
      let nextSourceHeader = headerRow[grid.fixedColumnIndex + 1];
      let kind = header[tbsGridNames.column.kind];
      if (sourceHeader[tbsGridNames.column.kind] == 'column') continue;else if (sourceHeader[tbsGridNames.column.kind] == 'header') {
        sourceHeader[tbsGridNames.column.colSpan] = 1;
        continue;
      }

      /* find MasterHeader */
      let masterHeader = null;
      for (let x = grid.fixedColumnIndex; x >= 0; x--) {
        let header = headerRow[x];
        if (header[tbsGridNames.column.kind] == 'header') {
          masterHeader = header;
          break;
        }
      }

      /* Update colSpan : colIndex  (0), 1, 2, 3, (4), span 5 fixed 2 */
      let colIndex = masterHeader[tbsGridNames.column.colIndex]; // 0
      let colSpan = masterHeader[tbsGridNames.column.colSpan]; // 5
      let lastColIndex = colIndex + colSpan - 1; // 4

      masterHeader[tbsGridNames.column.colSpan] = lastColIndex - grid.fixedColumnIndex + 1; // 3
      if (nextSourceHeader[tbsGridNames.column.kind] == 'empty') {
        nextSourceHeader[tbsGridNames.column.colSpan] = lastColIndex - grid.fixedColumnIndex; // 2
        nextSourceHeader[tbsGridNames.column.kind] = 'header'; // 2
      }
    }
  }
}

/***/ }),

/***/ 663:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ TbsGridCombo; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridCombo {
  constructor(grid, column, input, input_code) {
    this.colType = tbsGridTypes.CellType.combo;
    this.grid = grid;
    this.gridId = grid.gridId;
    this.column = column;
    this.input = input;
    this.input_code = input_code;
    this.tbs_create();
  }
  tbs_create() {
    let selector = '#' + this.grid.gridId;
    let div = document.createElement('div');
    div.className = 'tbs-grid-input-combo';
    div.style.display = 'none';
    let s = '';
    s += '<div class="tbs-grid-input-combo">';
    s += '  <div class="tbs-grid-input-combo-content">';
    s += '      <table class="tbs-grid-input-combo-content-table">';
    s += '      <tr>';
    s += '          <td>';
    s += '              <select class="tbs-grid-input-combo-select" multiple>';
    s += '                  <option class="tbs-grid-input-combo-option" value="1">1월</option>';
    s += '              </select>';
    s += '          <td>';
    s += '      </tr>';
    s += '      </table>';
    s += '  </div>';
    s += '</div>';
    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = s;
    let inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
    inputPanel.style.width = '140px';
    inputPanel.style.height = '130px';
    let gridRect = document.querySelector(selector).getBoundingClientRect();
    let inputRect = this.input.getBoundingClientRect();
    let top = inputRect.top;
    let left = inputRect.left;
    let right = inputRect.right;
    let height = inputRect.height;
    let documentRect = document.documentElement.getBoundingClientRect();
    let documentRight = documentRect.right;
    let documentBottom = documentRect.bottom;
    if (left + 140 > documentRight) {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.left = `${right - 140}px`;
    } else {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.left = `${left}px`;
    }
    if (top + height + 130 > documentBottom) {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.top = `${top - 130}px`;
    } else {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.top = `${top + height}px`;
    }
    this.setData();
    this.tbs_AddEvent();
  }
  tbs_clear() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    if (document.querySelector(selector + ' .tbs-grid-input-combo-select')) {
      document.querySelector(selector + ' .tbs-grid-input-combo-select').options.length = 0;
    }
  }
  tbs_getDisplay() {
    return document.querySelectorAll('.tbs-grid-input-combo').length > 0 ? document.querySelector('.tbs-grid-input-combo').style.display : 'none';
  }
  setData() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    this.tbs_clear();
    let input_combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');
    let rowIndex = this.input.dataset.rowIndex;
    let cellIndex = this.input.dataset.cellIndex;
    let column = grid.column_table.data[cellIndex];
    let data = column.renderer.data;
    let key = column.renderer.valueName;
    let val = column.renderer.textName;
    let value = this.input.value;
    let eCount = 0;
    if (value != '') {
      input_combo.options.length = 0;
      for (let i = 0, len = data.length; i < len; i++) {
        let row = data[i];
        let option = document.createElement('option');
        option.value = row[key];
        option.text = row[val];
        option.classList.add('tbs-grid-input-combo-option');
        input_combo.append(option);
        eCount = 1;
      }
    }
    if (value == '' || eCount == 0) {
      input_combo.options.length = 0;
      let option = document.createElement('option');
      if (name != '') {
        option.value = '';
        option.text = '==selected==';
        option.classList.add('tbs-grid-input-combo-option');
        input_combo.append(option);
      }
      for (let i = 0, len = data.length; i < len; i++) {
        let row = data[i];
        let option = document.createElement('option');
        option.value = row[key];
        option.text = row[val];
        option.classList.add('tbs-grid-input-combo-option');
        input_combo.append(option);
      }
    }
  }
  tbs_AddEvent() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    let input = this.input;
    let input_code = this.input_code;
    let gridCombo = this;
    const changeEvent = function (e) {
      let combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');
      input.value = combo.selectedOptions[0].text;
      input_code.value = combo.selectedOptions[0].value;
      grid.input_focus();
      // document.querySelector(selector + ' .tbs-grid-input').focus();
      // document.querySelector(selector + ' .tbs-grid-input').select();
      gridCombo.tbs_destroy();
    };
    document.querySelector(selector + ' .tbs-grid-input-combo-select').addEventListener('change', changeEvent);
  }
  tbs_destroy() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    let input = this.input;
    let input_code = this.input_code;
    let gridDate = this;
    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.width = '0px';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.left = '30000px';
  }
}
;

/***/ }),

/***/ 48:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ TbsGridControl; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridControl {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  after_changeColumnOrder() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classColumn.updateColumnTable();
    grid.classColumn.createHeaderColumns();
    grid.classColumn.createHeaderColumnTable();
    grid.updateGrid(grid.column_table.data);
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
    grid.classPanel20.setDataPanel();
    grid.classPanel40.setDataPanel();
    grid.classPanel50.setDataPanel();
    grid.classPanel70.setDataPanel();
  }
  after_addColumn() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classColumn.updateColumnTable();
    grid.classColumn.createHeaderColumns();
    grid.classColumn.createHeaderColumnTable();
    grid.updateGrid(grid.column_table.data);
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
    grid.classPanel20.setDataPanel();
  }
  after_removeColumn(headerColumns, columns) {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classColumn.updateColumnTable();
    grid.classColumn.createHeaderColumns();
    grid.classColumn.createHeaderColumnTable();
    grid.updateGrid(grid.column_table.data);
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
    grid.classPanel20.setDataPanel();
  }
  after_showFilterPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.classPanel70.setDataPanel();
    grid.classPanel30.setDataPanel(0);
  }
  after_hideFilterPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.classPanel70.setDataPanel();
    grid.classPanel30.setDataPanel(0);
  }
  after_showSortrPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.classPanel30.setDataPanel(0);
  }
  after_hideSortPanel() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.classPanel30.setDataPanel(0);
  }
  after_setColumnVisible() {
    let selector = this.selector;
    const grid = this.grid;
    let classControl = this;
    grid.classRange.removeRange(0, -1);
    grid.apply();
  }
}

/***/ }),

/***/ 341:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ TbsGridDate; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridDate {
  constructor(grid, column, input) {
    this.colType = 'date';
    this.grid = grid;
    this.gridId = grid.gridId;
    this.column = column;
    this.input = input;
    this.create();
  }
  create() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    if (this.grid.null(this.grid)) return;

    /* culture */
    let months = grid.getConfigCalendar('months');
    let dayShortNames = grid.getConfigCalendar('dayShortNames');
    let prevLinkName = grid.getConfigCalendar('prevLinkName');
    let todayLinkName = grid.getConfigCalendar('todayLinkName');
    let nextLinkName = grid.getConfigCalendar('nextLinkName');
    let s = '';
    s += '<div class="tbs-grid-input-date">';
    s += '  <div class="tbs-grid-input-date-header">';
    s += '      <table class="tbs-grid-input-date-header-table" style="width:100%;">';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-prev"  onclick="' + this.grid.gridId + '.tbsGridDate.prev();" style="width:40px;">' + prevLinkName + '</td>';
    s += '      <td class="tbs-grid-input-date-month" style="width:100px;">';
    s += '          <select class="tbs-grid-input-date-select-month" style="width:100px;" onchange="' + this.grid.gridId + '.tbsGridDate.selectMonth(this.value);">';
    s += '          <option value="01">' + months[0] + '</option>';
    s += '          <option value="02">' + months[1] + '</option>';
    s += '          <option value="03">' + months[2] + '</option>';
    s += '          <option value="04">' + months[3] + '</option>';
    s += '          <option value="05">' + months[4] + '</option>';
    s += '          <option value="06">' + months[5] + '</option>';
    s += '          <option value="07">' + months[6] + '</option>';
    s += '          <option value="08">' + months[7] + '</option>';
    s += '          <option value="09">' + months[8] + '</option>';
    s += '          <option value="10">' + months[9] + '</option>';
    s += '          <option value="11">' + months[10] + '</option>';
    s += '          <option value="12">' + months[11] + '</option>';
    s += '          </select></td>';
    s += '      <td class="tbs-grid-input-date-year"  style="width:50px;"></td>';
    s += '      <td class="tbs-grid-input-date-today" onclick="' + this.grid.gridId + '.tbsGridDate.today();" style="width:40px;">' + todayLinkName + '</td>';
    s += '      <td class="tbs-grid-input-date-next"  onclick="' + this.grid.gridId + '.tbsGridDate.next();" style="width:40px;">' + nextLinkName + '</td>';
    s += '      </tr>';
    s += '      </table>';
    s += '  </div>';
    s += '  <div class="tbs-grid-input-date-content">';
    s += '      <table class="tbs-grid-input-date-content-table" style="width:100%;">';
    s += '      <thead>';
    s += '      <tr>';
    s += '      <th class="tbs-grid-input-date-cell" style="color:red;">' + dayShortNames[0] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[1] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[2] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[3] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[4] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="">' + dayShortNames[5] + '</td>';
    s += '      <th class="tbs-grid-input-date-cell" style="color:blue">' + dayShortNames[6] + '</td>';
    s += '      </tr>';
    s += '      </thead>';
    s += '      <tbody>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      <tr>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
    s += '      <td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
    s += '      </tr>';
    s += '      </tbody>';
    s += '      </table>';
    s += '  </div>';
    s += '</div>';
    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = s;
    let gridRect = document.querySelector(selector).getBoundingClientRect();
    let inputRect = this.input.getBoundingClientRect();
    let top = inputRect.top;
    let left = inputRect.left;
    let right = inputRect.right;
    let height = window.pageXOffset + inputRect.height;
    let documentRect = document.documentElement.getBoundingClientRect();
    let documentRight = documentRect.right;
    let documentBottom = documentRect.bottom;
    if (left + 231 > documentRight) {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.left = `${right - 231}px`;
    } else {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.left = `${left}px`;
    }
    if (top + height + 187 > documentBottom) {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.top = `${top - 187}px`;
    } else {
      document.querySelector(selector + ' .tbs-grid-input-panel').style.top = `${top + height}px`;
    }
    this.setData();
    this.addEvent();
  }
  clear() {
    let cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    let count = cells.length;
    for (let i = 0; i < count; i++) {
      let cell = cells[i];
      cell.childNodes[0].innerHTML = '';
    }
    document.querySelector('.tbs-grid-input-date').style.display = '';
  }
  getDisplay() {
    return document.querySelector('.tbs-grid-input-date') ? document.querySelector('.tbs-grid-input-date').style.display : 'none';
  }
  setData(data) {
    this.clear();
    let prevCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-prev');
    let yearCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year');
    let monthCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-month');
    let todayCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-today');
    let nextCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-next');
    if (this.grid.null(data)) data = new Date();else {
      data = new Date(data);
    }
    let year = data.getFullYear();
    let month = data.getMonth() + 1;
    let curDay = data.getDate();
    let d = new Date(year, month, 0);
    let curYear = d.getFullYear();
    let curMonth = d.getMonth() + 1;
    let curLastDay = d.getDate();
    let curLastYoil = d.getDay();
    yearCell.innerHTML = curYear;
    document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value = this.addZero(curMonth);
    d = new Date(curYear, curMonth - 1, 0);
    let prevYear = curMonth - 1 == 0 ? curYear - 1 : curYear;
    let prevMonth = curMonth - 1 == 0 ? 12 : curMonth - 1;
    let prevLastDay = d.getDate();
    let prevLastYoil = d.getDay();

    //========================================================================== prev month, prev day
    let trList = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table tr');
    let tr = trList[0];
    let count = 7;
    for (let i = 0; i < count; i++) {
      let cell = trList[1].children[i];
      if (prevLastYoil == i) {
        cell.childNodes[0].innerHTML = prevLastDay;
        cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(prevLastDay);
        break;
      }
    }
    for (let i = prevLastYoil; i >= 0; i--) {
      let cell = trList[1].children[i];
      let day = cell.childNodes[0].innerHTML == '' ? prevLastDay - (prevLastYoil - i) : cell.childNodes[0].innerHTML;
      cell.childNodes[0].innerHTML = day;
      cell.childNodes[0].style.color = 'grey';
      cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(day);
    }
    let cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    count = cells.length;
    let k = 1;
    let nextMonth = 0;
    for (let i = prevLastYoil + 1; i < cells.length; i++) {
      let cell = cells[i];
      if (k > curLastDay) {
        k = 1;
        nextMonth = 1;
      }
      cell.childNodes[0].innerHTML = k;
      cell.childNodes[0].style.background = 'white';
      if (nextMonth == 1) {
        cell.childNodes[0].style.color = 'grey';
        if (curMonth == 12) {
          cell.dataset.value = curYear + 1 + '-' + this.addZero(1) + '-' + this.addZero(k);
        } else {
          cell.dataset.value = curYear + '-' + this.addZero(curMonth + 1) + '-' + this.addZero(k);
        }
      } else {
        cell.childNodes[0].style.color = 'black';
        cell.dataset.value = curYear + '-' + this.addZero(curMonth) + '-' + this.addZero(k);
        if (cell.dataset.value == this.getToday()) {
          cell.childNodes[0].style.background = 'yellow';
        }
      }
      k += 1;
    }
    //==========================================================================
    cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-start');
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (cell.style.color == 'black') cell.style.color = 'red';
    }
    cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-end');
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (cell.style.color == 'black') cell.style.color = 'blue';
    }
  }
  getToday() {
    let d = new Date();
    let curYear = d.getFullYear();
    let curMonth = d.getMonth() + 1;
    let curDay = d.getDate();
    return curYear + '-' + this.addZero(curMonth) + '-' + this.addZero(curDay);
  }
  today() {
    let d = new Date();
    let curYear = d.getFullYear();
    let curMonth = d.getMonth() + 1;
    let curDay = d.getDate();
    let selector = '#' + this.grid;
    const grid = this.grid;
    let format = this.column[tbsGridNames.column.format];
    format = format.replace('yyyy', curYear);
    format = format.replace('MM', this.addZero(curMonth));
    format = format.replace('dd', this.addZero(curDay));
    this.input.value = format;
    this.input.focus();
    this.input.select();
    this.destroy();
  }
  prev() {
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
    let year, month;
    year = currentYear;
    month = currentMonth - 1;
    if (month < 1) {
      year -= 1;
      month = 12;
    }
    this.setData(year + '-' + month + '-01');
  }
  next() {
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
    let year, month;
    year = currentYear;
    month = currentMonth + 1;
    if (month > 12) {
      year += 1;
      month = 1;
    }
    this.setData(year + '-' + month + '-01');
  }
  selectMonth(value) {
    let currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
    let currentMonth = parseInt(value);
    let year, month;
    year = currentYear;
    month = currentMonth;
    this.setData(year + '-' + month + '-01');
  }
  addEvent() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    let input = this.input;
    let gridDate = this;
    let column = this.column;
    const mouseDownEvent = function (e) {
      e.stopPropagation();
      let dateText = e.currentTarget.dataset.value;
      let yyyy = grid.substr2(dateText, 0, 4);
      let MM = grid.substr2(dateText, 5, 2);
      let dd = grid.substr2(dateText, 8, 2);
      let format = column[tbsGridNames.column.format];
      format = format.replace('yyyy', yyyy);
      format = format.replace('MM', MM);
      format = format.replace('dd', dd);
      gridDate.destroy();
      input.value = format;
      input.focus();
      input.select();
    };
    const cols = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
    [].forEach.call(cols, function (cell) {
      cell.addEventListener('mousedown', mouseDownEvent);
    });
    const changeEvent = function (e) {
      let combo = document.querySelector('.tbs-grid-datecombo-select');
      document.querySelector(selector + ' .tbs-grid-input').focus();
      document.querySelector(selector + ' .tbs-grid-input').select();
      gridDate.destroy();
    };
    //document.querySelector('.tbs-grid-input-date').addEventListener('mousedown', mousedownEvent);
  }
  addZero(value) {
    value = parseInt(value);
    return value < 10 ? '0' + value.toString() : value.toString();
  }
  destroy() {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    let input = this.input;
    let gridDate = this;
    document.querySelector(selector + ' .tbs-grid-input-panel').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.width = '0px';
    document.querySelector(selector + ' .tbs-grid-input-panel').style.left = '30000px';
  }
}

/***/ }),

/***/ 221:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ TbsGridDom; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(618);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();

class TbsGridDom extends _tbs_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsBase */ .H {
  /**
   * Base Functions
   *
   */

  null(p) {
    return p == null || p == undefined;
  }
  notNull(p) {
    return !(p == null || p == undefined);
  }
  empty(p) {
    return p == '';
  }
  notEmpty(p) {
    return this.notNull(p) && p != '';
  }

  /**
   * Dom Functions
   *
   */

  setCell(tableCell, property, value) {
    if (tableCell[property] != value) tableCell[property] = value;
  }
  setCellStyle(tableCell, property, value) {
    if (tableCell.style[property] != value) tableCell.style[property] = value;
  }
  addUserClass(tableCell, className) {
    this.removeUserClass(tableCell);
    if (this.notNull(className) && this.notEmpty(className)) tableCell.classList.add(className);
  }
  removeUserClass(tableCell, className) {
    // Create classNameArray : for remove except tbs-* className
    let classNameArray = [];
    for (let i = 0, len = tableCell.classList.length; i < len; i++) {
      if (tableCell.classList[i].startsWith('tbs-grid-')) continue;else classNameArray.push(tableCell.classList[i]);
    }
    // Remove classNameArray
    for (let i = 0, len = classNameArray.length; i < len; i++) tableCell.classList.remove(classNameArray[i]);
  }
  createElementCheckbox() {
    let element = document.createElement('input');
    element.type = 'checkbox';
    element.classList.add('tbs-grid-cell-checkbox');
    return element;
  }
  createElementCellDiv() {
    let element = document.createElement('div');
    element.classList.add('tbs-grid-cell-div');
    return element;
  }
  createElementCellIcon() {
    let element = document.createElement('span');
    element.classList.add('tbs-grid-cell-div-icon');
    return element;
  }
  createElementCellText() {
    let element = document.createElement('span');
    element.classList.add('tbs-grid-cell-div-text');
    element.textContent = '';
    return element;
  }
  prependCheckbox(element, childElement) {
    let el = element.querySelector('.tbs-grid-cell-div-icon');
    if (el == undefined) element.prepend(childElement);
  }
  prependIcon(element, childElement) {
    let el = element.querySelector('.tbs-grid-cell-div-icon');
    if (el == undefined) element.prepend(childElement);
  }

  /**
   * Table Functions
   */

  createTable() {
    let table = document.createElement('table');
    table.className = 'tbs-grid-table';
    return table;
  }
}

/***/ }),

/***/ 191:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ TbsGridFilter; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridFilter {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  totalFilterSearch(s) {
    let selector = this.selector;
    const grid = this.grid;
    let filterArray = [];
    let arr = grid.trim(s).split(' ');
    for (let i = 0; i < arr.length; i++) {
      if (grid.trim(arr[i]) !== '') {
        filterArray.push(arr[i].toLowerCase());
      }
    }
    const data = grid.source_table.data.filter(function (item) {
      let bool = true;
      let count = [];
      for (let i = 0; i < filterArray.length; i++) {
        count[i] = 0;
      }
      let columnArray = [];
      for (let key in item) {
        let column = grid.classColumn.getColumn(key);
        if (column[tbsGridNames.column.visible] === false) continue;else columnArray.push(item[key]);
      }
      if (filterArray.length === 0) {
        return true;
      } else {
        filterArray.forEach(function (cond, i) {
          for (let colIndex = 0, len = columnArray.length; colIndex < len; colIndex++) {
            if (columnArray[colIndex] == null) count[i] = count[i];else {
              count[i] = columnArray[colIndex].toString().toLowerCase().includes(cond) === true ? count[i] + 1 : count[i];
            }
          }
        });
        for (let i = 0; i < filterArray.length; i++) {
          if (count[i] == 0) {
            bool = false;
            break;
          }
        }
        return bool;
      }
    });
    if (data.length > 0) {
      grid.view_table.data = [];
      data.map(daraRow => grid.view_table.insert(grid.copyJson(dataRow)));
    } else {
      grid.view_table.data = [];
    }
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.classScroll.setBarPosition(grid.code_vertical, 0);
    grid.refreshRefData();
  }
  showFilterPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.options.showFilterPanel = true;
    grid.classControl.after_showFilterPanel();
  }
  hideFilterPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.options.showFilterPanel = false;
    grid.classFilter.initFilterData();
    grid.classControl.after_hideFilterPanel();
  }
  filters() {
    const grid = this.grid;
    let result = grid.copyJson(grid.source_table.data);
    for (let i = 0, len = grid.filter_column_table.count(); i < len; i++) {
      let filterColumn = grid.filter_column_table.data[i];
      result = grid.classFilter.filter(result, filterColumn);
    }
    grid.view_table.remove();
    result.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.classScroll.setBarPosition(grid.code_vertical, 0);
  }
  filter(data, filterColumn) {
    const grid = this.grid;
    let column = grid.classColumn.getColumn(filterColumn.name);
    let columnType = column[tbsGridNames.column.type];
    let columnName = filterColumn.name;
    let filterType = filterColumn.type;
    let value = filterColumn.value;
    return data.filter(function (dataRow) {
      let bool = true;
      if (columnType == tbsGridTypes.CellType.number) {
        let columnText = dataRow[columnName];
        let isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
        return isExist;
      } else if (columnType == tbsGridTypes.CellType.string || columnType == tbsGridTypes.CellType.date || columnType || tbsGridTypes.CellType.combo) {
        let val = dataRow[columnName];
        let columnText = grid.getFormatText(column, val);
        let isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
        return isExist;
      } else return true;
    });
  }
  filterNumberByType(filterType, n, targetNumber) {
    let selector = this.selector;
    const grid = this.grid;

    // @Rule : when number is null, number is zero
    if (grid.null(n)) n = 0;
    if (grid.null(targetNumber)) targetNumber = 0;
    let toNumber = null;
    if (filterType == grid.const_filterBetween) {
      let arr = n.split('-');
      n = parseFloat(arr[0]);
      if (arr.length > 1) {
        toNumber = parseFloat(arr[1]);
      } else {
        toNumber = 99999999999999;
      }
    } else {
      n = parseFloat(n);
      toNumber = null;
    }
    targetNumber = parseFloat(targetNumber);
    if (filterType == tbsGridTypes.FilterType.Equal) {
      return n == targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.NotEqual) {
      return n != targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.Greater) {
      return n < targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.GreaterEqual) {
      return n <= targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.Less) {
      return n > targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.LessEqual) {
      return n >= targetNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.Between) {
      return targetNumber >= n && targetNumber <= toNumber ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.Blank) {
      return grid.null(targetNumber) || targetNumber == 0;
    }
  }
  filterStringByType(filterType, s, targetString) {
    let selector = this.selector;
    const grid = this.grid;
    let regExp;

    // String comparisons are case-insensitive.
    s = s.toLowerCase();
    targetString = targetString.toLowerCase();
    if (filterType == tbsGridTypes.FilterType.Equal) {
      regExp = new RegExp(`^${s}$`);
      return regExp.test(targetString);
    } else if (filterType == tbsGridTypes.FilterType.NotEqual) {
      regExp = new RegExp(`^${s}$`);
      return regExp.test(targetString) == false ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.Include) {
      regExp = new RegExp(`${s}`);
      return regExp.test(targetString);
    } else if (filterType == tbsGridTypes.FilterType.NotInclude) {
      regExp = new RegExp(`${s}`);
      return regExp.test(targetString) == false ? true : false;
    } else if (filterType == tbsGridTypes.FilterType.StartCharacter) {
      regExp = new RegExp(`^${s}`);
      return regExp.test(targetString);
    } else if (filterType == tbsGridTypes.FilterType.EndCharacter) {
      regExp = new RegExp(`${s}$`);
      return regExp.test(targetString);
    } else if (filterType == tbsGridTypes.FilterType.Blank) {
      regExp = new RegExp(`^$`);
      return regExp.test(targetString);
    }
  }
  setFilterColumn(column, filterType, word) {
    const grid = this.grid;
    let dataRow = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
    if (grid.null(dataRow)) {
      let item = {};
      item.name = column[tbsGridNames.column.name];
      item.type = filterType;
      item.value = word;
      grid.filter_column_table.insert(item);
    } else {
      let rowId = dataRow[tbsGridNames.column.rowId];
      grid.filter_column_table.updateByRowId(rowId, tbsGridNames.column.type, filterType);
      grid.filter_column_table.updateByRowId(rowId, tbsGridNames.column.value, word);
    }
  }
  removeFilterColumn(column) {
    const grid = this.grid;
    let rowId = column[tbsGridNames.column.rowId];
    grid.filter_column_table.removeByRowId(rowId);
  }
  createFilterCombo(column) {
    const grid = this.grid;
    let combo = document.createElement('select');
    if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) {
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Select, grid.getConfigLabel('filter_select'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Equal, grid.getConfigLabel('filter_equal'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.GreaterEqual, grid.getConfigLabel('filter_greaterEqual'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.LessEqual, grid.getConfigLabel('filter_lessEqual'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Greater, grid.getConfigLabel('filter_greater'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Less, grid.getConfigLabel('filter_less'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Between, grid.getConfigLabel('filter_between'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Blank, grid.getConfigLabel('filter_blank'));
    } else {
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Include, grid.getConfigLabel('filter_include'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Equal, grid.getConfigLabel('filter_equal'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.StartCharacter, grid.getConfigLabel('filter_startCharacter'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.EndCharacter, grid.getConfigLabel('filter_endCharacter'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.Blank, grid.getConfigLabel('filter_blank'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.NotEqual, grid.getConfigLabel('filter_notEqual'));
      grid.classFilter.addFilterComboOption(combo, tbsGridTypes.FilterType.NotInclude, grid.getConfigLabel('filter_notInclude'));
    }
    return combo;
  }
  addFilterComboOption(combo, value, text) {
    const grid = this.grid;
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    combo.add(option);
  }
  initFilterData() {
    let selector = this.selector;
    const grid = this.grid;
    grid.filter_column_table.remove();
    let inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
    let combos = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
      combos[i].selectedIndex = 0;
    }
    grid.view_table.remove();
    grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));
    grid.classRange.removeRange(0, -1);
    if (grid.grid_mode == tbsGridTypes.GridMode.group) {
      grid.setData(grid.view_table.data, null, false);
    } else {
      grid.classRange.removeRange(0, -1);
      grid.apply();
    }
  }
}

/***/ }),

/***/ 356:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony export TbsGridFilterLayer */
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridFilterLayer {
  constructor(grid, icon, input, column) {
    this.grid = grid;
    this.gridId = grid.gridId;
    this.selector = '#' + grid.gridId;
    this.column = column;
    this.iconElement = icon;
    this.inputElement = input;
    this.createFilter();
    this.showFilterLayer();
    this.AddEvent();
    this.setData();
  }
  getComboData() {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let combo = document.createElement('select');
    combo.classList.add('tbs-grid-layer-filter-combo');
    //combo.multiple = 'multiple';
    if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.string) {
      let option;
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Equal, grid.getCofnigLabel('filter_equal'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Include, grid.getCofnigLabel('filter_include'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.StartCharacter, grid.getCofnigLabel('filter_startCharacter'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.EndCharacter, grid.getCofnigLabel('filter_endCharacter'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Blank, grid.getCofnigLabel('filter_blank'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.NotEqual, grid.getCofnigLabel('filter_notEqual'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.NotInclude, grid.getCofnigLabel('filter_notInclude'));
    } else if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) {
      let option;
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Select, grid.getCofnigLabel('filter_select'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Equal, grid.getCofnigLabel('filter_equal'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.GreaterEqual, grid.getCofnigLabel('filter_greaterEqual'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.LessEqual, grid.getCofnigLabel('filter_lessEqual'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Greater, grid.getCofnigLabel('filter_greater'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Less, grid.getCofnigLabel('filter_less'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Between, grid.getCofnigLabel('filter_between'));
      gridFilter.addComboOption(combo, tbsGridTypes.FilterType.Blank, grid.getCofnigLabel('filter_blank'));
    }
    return combo;
  }
  addComboOption(combo, value, text) {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    combo.add(option);
  }
  createFilter() {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let combo = gridFilter.getComboData();
    let s = '';
    s += '<div class="tbs-grid-layer-filter">';
    s += '  <div class="tbs-grid-layer-filter-main">';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += combo.outerHTML;
    s += '      </div>';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += '          <input class="tbs-grid-layer-filter-content-input" placeholder="Words to filter">';
    s += '      </div>';
    // s += '      <div class="tbs-grid-layer-filter-content">';
    // s += '          <input class="tbs-grid-layer-filter-content-input-to" style="display:none;" placeholder="Words to filter">';
    // s += '      </div>';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += '              <button class="tbs-grid-layer-filter-content-button-save">save</button>';
    s += '              <button class="tbs-grid-layer-filter-content-button-reset">reset</button>';
    s += '      </div>';
    s += '  </div>';
    s += '</div>';
    document.querySelector(selector + ' .tbs-grid-layer').innerHTML = s;
  }
  showFilterLayer() {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let rectIcon = this.iconElement.getBoundingClientRect();
    let top = rectIcon.top;
    let left = rectIcon.left;
    let right = rectIcon.right;
    let height = rectIcon.height;
    let layer = document.querySelector(selector + ' .tbs-grid-layer');
    layer.style.width = '192px';
    layer.style.height = '102px';
    let rectDocument = document.documentElement.getBoundingClientRect();
    let documentRight = rectDocument.right;
    let documentBottom = rectDocument.bottom;
    if (left + 150 > documentRight) {
      layer.style.left = `${right - 150}px`;
    } else {
      layer.style.left = `${left}px`;
    }
    if (top + height + 180 > documentBottom) {
      layer.style.top = `${top - 180}px`;
    } else {
      layer.style.top = `${top + height}px`;
    }
    //this.setData();
    //this.tbs_AddEvent();
  }
  AddEvent() {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let iconElement = this.iconElement;
    let inputElement = this.inputElement;
    const changeEvent = function (e) {
      let combo = e.target;
      let columnType = column[tbsGridNames.column.type];
      // if (columnType == tbsGridTypes.CellType.number) {
      //     let toInput = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to');
      //     if (combo.selectedOptions[0].value == grid.const_filterBetween) toInput.style.display = '';
      //     else toInput.style.display = 'none';
      // }
    };
    const saveEvent = function (e) {
      let combo = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');
      let filterType = combo.selectedOptions[0].value;
      let word = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value;
      //let toWord = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value;

      grid.classFilter.setFilterColumn(column, filterType, word);
      grid.classFilter.filters();
      grid.apply();
      inputElement.value = word;
      document.querySelector(selector + ' .tbs-grid-layer').innerHTML = '';
      document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
      document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
    };
    const resetEvent = function (e) {
      document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = '';
      //document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value = '';
    };
    document.querySelector(selector + ' .tbs-grid-layer-filter-combo').addEventListener('change', changeEvent);
    document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-save').addEventListener('mousedown', saveEvent);
    document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-reset').addEventListener('mousedown', resetEvent);
  }
  setData() {
    let selector = this.selector;
    const grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let iconElement = this.iconElement;
    let inputElement = this.inputElement;
    let filterColumn = grid.filter_column_table.selectRow(tbsGridNames.column.name, column[tbsGridNames.column.name]);
    if (grid.notNull(filterColumn)) {
      let combo = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');
      for (let i = 0, len = combo.options.length; i < len; i++) {
        if (filterColumn.type == combo.options[i].value) {
          combo.selectedIndex = i;
          break;
        }
      }
      document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = filterColumn.value;
    }
  }
}
;

/***/ }),

/***/ 186:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ TbsGridFooter; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridFooter {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  setFooterColumns(columns) {
    const grid = this.grid;
    columns.map(column => {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'center';
      grid.footer_column_table.insert(column);
    });
  }
  setFooterData() {
    const grid = this.grid;
    if (grid.footer_column_table.count() == 0) return;
    let footerColumns = grid.footer_column_table.data;
    let dataRow = {};
    let columns = grid.column_table.data;
    for (let x = 0, len = columns.length; x < len; x++) {
      let column = columns[x];
      let columnName = column[tbsGridNames.column.name];
      dataRow[columnName] = null;
    }
    grid.footer_table.insert(dataRow);

    /* get sum, avg */
    for (let x = 0, len2 = grid.footer_column_table.count(); x < len2; x++) {
      let footerColumn = grid.footer_column_table.data[x];
      let columnName = footerColumn[tbsGridNames.column.name];
      if (grid.isColumnTypeNumber(columnName)) {
        let sumType = footerColumn[tbsGridNames.column.summaryType];
        let result = null;
        if (sumType == 'sum') result = grid.classPanel30.getSum(columnName);else if (sumType == 'avg') result = grid.classPanel30.getAvg(columnName);
        grid.footer_table.updateByRowIndex(0, columnName, grid.classPanel30.getSum(columnName));
      }
    }
  }
  setFooterValue(rowIndex, columnName, value) {
    const grid = this.grid;
    let column = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
    let result = grid.getFormat(column, value);
    grid.footer_table.updateByRowIndex(rowIndex, columnName, result.value);
  }
}

/***/ }),

/***/ 42:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ TbsGridGroup; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridGroup {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.openDepth = null;
  }
  createGroupData() {
    const grid = this.grid;
    grid.tree_table.remove();

    /* get parent number */
    const fn_setRelation = function (row, depth, parentNum) {
      row[tbsGridNames.column.parentNum] = parentNum;
      grid.tree_table.insert(grid.copyJson(row));
      if (depth > grid.group_column_table.count()) return;
      let key = grid.classGroup.getGroupKeyByDepth(row, depth);
      for (let i = 0, len = grid.view_table.count(); i < len; i++) {
        let dataRow = grid.view_table.data[i];
        let childKey = grid.classGroup.getGroupKeyByDepth(dataRow, depth);
        let childDepth = dataRow[tbsGridNames.column.depth];
        if (key == childKey && childDepth == depth + 1) {
          fn_setRelation(dataRow, depth + 1, row[tbsGridNames.column.num]);
        }
      }
    };

    /* get children rowId */
    const fn_getChildrenRowIds = function (row) {
      row[tbsGridNames.column.children] = [];
      for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
        let resultRow = grid.tree_table.data[i];
        if (row[tbsGridNames.column.num] == resultRow[tbsGridNames.column.parentNum]) {
          row[tbsGridNames.column.children].push(resultRow[tbsGridNames.column.rowId]);
        }
      }
    };

    // Init
    let maxDepth = grid.group_column_table.count() + 1;
    grid.view_table.data.map(dataRow => {
      if (grid.notNull([tbsGridNames.column.mode])) delete dataRow[tbsGridNames.column.mode];
      if (grid.notNull([tbsGridNames.column.num])) delete dataRow[tbsGridNames.column.num];
      if (grid.notNull([tbsGridNames.column.parentNum])) delete dataRow[tbsGridNames.column.parentNum];
      dataRow[tbsGridNames.column.depth] = maxDepth;
    });

    // create group data
    let groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
    groupData.map(row => {
      grid.source_table.currentRowId += 1;
      row[tbsGridNames.column.rowId] = grid.source_table.currentRowId;
      row['group_column'] = null;
      grid.view_table.insert(grid.copyJson(row));
    });

    // set number
    let num = 1;
    grid.view_table.data.map(row => {
      num += 1;
      row[tbsGridNames.column.num] = num;
    });

    // get Number, Parent Number
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      let row = grid.view_table.data[i];
      if (row[tbsGridNames.column.depth] == 1) fn_setRelation(row, 1, 0);
    }

    // get children
    grid.tree_table.data.map(row => fn_getChildrenRowIds(row));
  }
  createGroupKeyData(dataRows, depth = 1) {
    const grid = this.grid;
    let resultRows = [];
    for (let i = depth, len = grid.group_column_table.count() + 1; i < len; i++) {
      let rows = dataRows.reduce((acc, row) => {
        let key = grid.classGroup.getGroupKeyByDepth(row, i);
        let tempRow = grid.classGroup.getGroupKeyRowByDepth(row, i);
        if (acc.hasOwnProperty(key) == false) acc[key] = tempRow;
        return acc;
      }, {});
      rows = Object.values(rows);
      rows.map(row => resultRows.push(row));
    }
    return resultRows;
  }
  getGroupKeyByDepth(row, depth) {
    const grid = this.grid;
    let key = '';
    for (let i = 0; i < depth; i++) {
      let groupColumn = grid.group_column_table.data[i];
      let name = groupColumn[tbsGridNames.column.name];
      key += '-' + row[name];
    }
    return key;
  }
  getGroupKeyRowByDepth(row, depth) {
    const grid = this.grid;
    let tempRow = {};
    for (let i = 0; i < depth; i++) {
      let groupColumn = grid.group_column_table.data[i];
      let name = groupColumn[tbsGridNames.column.name];
      tempRow[name] = row[name];
      tempRow[tbsGridNames.column.depth] = depth;
    }
    return tempRow;
  }
  setGroupColumns(groupColumns) {
    const grid = this.grid;
    grid.group_column_table.remove();
    groupColumns.map(column => grid.group_column_table.insert(grid.copyJson(column)));
  }

  /**
   * Group Sum, Avg
   */

  getGroupSummary() {
    let selector = this.selector;
    const grid = this.grid;
    const getGroupSummary = function (array, columnName, isLastDepth) {
      let result = {};
      result.rowCount = 0;
      result.sum = 0;
      for (let i = 0, len = grid.view_table.count(); i < len; i++) {
        let row = grid.view_table.data[i];
        let rowId = row[tbsGridNames.column.rowId];
        array.map(item => {
          if (rowId == item) {
            result.sum += grid.null(row[columnName]) ? 0 : Number(row[columnName]);
            result.rowCount += grid.null(row[tbsGridNames.column.rowCount]) ? 1 : row[tbsGridNames.column.rowCount];
          }
        });
      }
      return result;
    };
    /* Create Sum By Depth Unit */
    let depth = grid.group_column_table.count();
    for (let depthIndex = depth; depthIndex >= 1; depthIndex--) {
      for (let i = 0, len = grid.view_table.count(); i < len; i++) {
        let row = grid.view_table.data[i];
        let rowId = row[tbsGridNames.column.rowId];
        let depth = row[tbsGridNames.column.depth];
        if (depthIndex == depth) {
          for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
            let column = grid.column_table.data[x];
            let columnName = column[tbsGridNames.column.name];
            let columnType = column[tbsGridNames.column.type];
            if (columnType == tbsGridTypes.CellType.number) {
              let result = null;
              result = getGroupSummary(row[tbsGridNames.column.children], columnName);
              row[columnName] = result.sum.toString();
              row[tbsGridNames.column.rowCount] = result.rowCount;
            }
          }
        }
      }
    }
    /* Create Avg By Depth Unit */
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      let row = grid.view_table.data[i];
      let rowId = row[tbsGridNames.column.rowId];
      let rowCount = row[tbsGridNames.column.children].length;
      for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
        let column = grid.column_table.data[x];
        let columnName = column[tbsGridNames.column.name];
        let groupColumn = grid.classGroup.getGroupRow(columnName);
        let summaryType = grid.null(column[tbsGridNames.column.summaryType]) ? null : column[tbsGridNames.column.summaryType];
        let columnType = column[tbsGridNames.column.type];
        if (rowCount > 0 && columnType == tbsGridTypes.CellType.number) {
          // summaryType = 'sum';
          if (grid.null(summaryType)) row[columnName] = null;else if (summaryType == 'avg') row[columnName] = row[columnName] / row[tbsGridNames.column.rowCount];
        }
      }
    }
  }
  setGroupData(data, openDepth = 0, isFirst = true) {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.null(data) || data.length == 0) return;
    grid.classGroup.openDepth = openDepth;

    // create group column : group_column
    if (grid.isColumnName('group_column') == false) {
      let userColumn = {
        name: 'group_column',
        header: {
          text: 'Group'
        },
        width: 150,
        type: 'string'
      };
      if (grid.fixedColumnIndex != -1) grid.fixedColumnIndex += 1;
      grid.classColumn.addColumn(userColumn, 0, 0, tbsGridTypes.BeforeAfter.before);
    }

    // create source_data, view_table.data
    if (isFirst == true) {
      grid.source_table.remove();
      for (let i = 0, len = data.length; i < len; i++) {
        let dataRow = data[i];
        let item = {};
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
          let column = grid.column_table.data[x];
          let columnName = column[tbsGridNames.column.name];
          let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
          item[columnName] = val;
        }
        grid.source_table.insert(item);
      }
    }

    // grid.view_table.remove();
    grid.view_table.remove();
    grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

    /* Filter */
    grid.classFilter.filters();

    /* Soring */
    grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

    /* insert into tree_table */
    grid.tree_table.remove();
    grid.view_table.data.map(dataRow => grid.tree_table.insert(grid.copyJson(dataRow)));

    /* create group data */
    grid.classGroup.createGroupData();

    /* insert into view_table from tree_table */
    grid.view_table.remove();
    for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
      let dataRow = grid.tree_table.data[i];
      dataRow[tbsGridNames.column.mode] = ''; // S, U, I, D, blank
      dataRow[tbsGridNames.column.isOpen] = false; // keep open, closed state

      for (let x = 0, len = grid.column_table.count(); x < len; x++) {
        let column = grid.column_table.data[x];
        let columnName = column[tbsGridNames.column.name];
        let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
        dataRow[columnName] = val;
      }
      grid.view_table.insert(grid.copyJson(dataRow));
    }

    /* Summary */
    grid.classGroup.getGroupSummary();

    /* create tree_table */
    grid.tree_table.remove();
    grid.view_table.data.map(dataRow => {
      let item = grid.copyJson(dataRow);
      item[tbsGridNames.column.isOpen] = false;
      grid.tree_table.insert(item);
    });

    // open depth
    if (grid.notNull(openDepth) && openDepth != 0) {
      for (let i = grid.view_table.count() - 1; i >= 0; i--) {
        let row = grid.view_table.data[i];
        let depth = row[tbsGridNames.column.depth];
        if (depth > openDepth) grid.view_table.remove(i);
      }
    }
    document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
    if (grid.view_table.count() == 0) {
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
      grid.verticalScroll.setScroll(grid.code_vertical);
      grid.classPanel30.setDataPanel(0);
    } else {
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.view_table.count();
      grid.verticalScroll.setScroll(grid.code_vertical);
      grid.classPanel30.setDataPanel(0);
      grid.classPanel40.setDataPanel();
      grid.classPanel50.setDataPanel();
    }
    if (grid.options[tbsGridNames.column.autoWidth] == true) grid.setColumnAutoWidth();
    grid.classGroup.getGroupButtonList();
    grid.classScroll.setPanelSize();
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
  }

  /**
   * spanIcon, spanImg, spanText
   */

  setGroupIcon(tableCell, rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let row = grid.getRow(rowIndex);
    let arr = row[tbsGridNames.column.children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(arr)) return;
    if (arr.length > 0) {
      let nextRow = grid.getRow(rowIndex + 1);
      if (grid.null(nextRow)) grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');else {
        if (nextRow[tbsGridNames.column.parentNum] == row[tbsGridNames.column.num]) grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');else grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
      }
    } else grid.classGroup.toggleGroupIcon(rowIndex, element);
  }
  toggleGroupIcon(rowIndex, element, type) {
    let selector = this.selector;
    const grid = this.grid;
    if (type == tbsGridNames.column.open) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_open.png)';else if (type == tbsGridNames.column.closed) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';else element.style['backgroundImage'] = '';
  }
  isGroupChildrenRow(rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let result = false;
    let row = grid.getRow(rowIndex);
    let childRow = grid.getRow(rowIndex + 1);
    if (grid.null(childRow)) result = false;else {
      if (row[tbsGridNames.column.num] == childRow[tbsGridNames.column.parentNum]) result = true;
    }
    return result;
  }
  getGroupChildrenRows(folding, rowIndex, isAll = true) {
    const grid = this.grid;
    let resultRows = [];
    const fn_getChildrenRows = function (row) {
      resultRows.push(grid.copyJson(row));
      let arr = row[tbsGridNames.column.children];
      if (folding == tbsGridNames.column.open) {
        if (row[tbsGridNames.column.isOpen]) {
          for (let i = 0, len = arr.length; i < len; i++) {
            let dataRow = grid.tree_table.selectRow(tbsGridNames.column.rowId, arr[i]);
            fn_getChildrenRows(dataRow);
          }
        }
      } else {
        for (let i = 0, len = arr.length; i < len; i++) {
          let dataRow = grid.tree_table.selectRow(tbsGridNames.column.rowId, arr[i]);
          fn_getChildrenRows(dataRow);
        }
      }
    };
    let row = grid.getRow(rowIndex);
    fn_getChildrenRows(row);
    resultRows.splice(0, 1);
    return resultRows;
  }
  setGroupFolding(tableCell) {
    let selector = this.selector;
    const grid = this.grid;
    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;
    let folding = grid.classGroup.getGroupFlodingStatus(tableCell);
    if (folding == tbsGridNames.column.open) grid.classGroup.closeGroupRow(rowIndex);else if (folding == tbsGridNames.column.closed) grid.classGroup.openGroupRow(rowIndex, false);
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
  }
  getGroupFlodingStatus(tableCell) {
    const grid = this.grid;
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;
    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return tbsGridNames.column.open;else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return tbsGridNames.column.closed;else return null;
  }
  openGroupRow(rowIndex) {
    const grid = this.grid;
    let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);
    grid.tree_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);
    grid.view_table.updateByRowId(rowId, tbsGridNames.column.isOpen, true);
    let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.open, rowIndex, false);
    for (let i = 0, len = rows.length; i < len; i++) {
      grid.view_table.insertAfter(rows[i], rowIndex + i);
    }
  }
  closeGroupRow(rowIndex) {
    const grid = this.grid;
    let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      if (rowId == grid.view_table.selectValue(i, tbsGridNames.column.rowId)) grid.view_table.updateByRowIndex(i, tbsGridNames.column.isOpen, true); // keep folding status
    }
    let rows = grid.classGroup.getGroupChildrenRows(tbsGridNames.column.closed, rowIndex, true);
    rows.map(row => {
      grid.view_table.removeByRowId(row[tbsGridNames.column.rowId]);
    });
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
  }

  /**
   * Group Button
   */

  changeGroupButtonOrder(name, text, order, targetIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let groupColumns = grid.group_column_table.data;

    /* targetIndex != name Index */
    let sourceIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, name);
    if (sourceIndex == targetIndex) return;

    /* create column */
    let dataRow = {};
    dataRow[tbsGridNames.column.name] = name;
    dataRow[tbsGridNames.column.text] = text;

    /* update source column */
    grid.group_column_table.updateByRowIndex(sourceIndex, tbsGridNames.column.name, '_temp_group');

    /* add dataRow */
    if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);else grid.group_column_table.insertBefore(dataRow, targetIndex);

    /* remove source */
    sourceIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, '_temp_group');
    grid.group_column_table.remove(sourceIndex);

    /* add button in group panel */
    let button = grid.classGroup.createGroupButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);else bar.append(button);
    grid.classGroup.toggleGroupPlaceHolder();
    let data = grid.view_table.data;
    grid.classGroup.setGroupData(data, null, false);
  }
  addGroupButton(name, text, order, targetIndex) {
    let selector = this.selector;
    const grid = this.grid;

    /* Check Existing */
    if (grid.group_column_table.select(tbsGridNames.column.name, name, 1).length > 0) return;

    /* create dataRow */
    let dataRow = {};
    dataRow[tbsGridNames.column.name] = name;
    dataRow[tbsGridNames.column.text] = text;

    /* add dataRow */
    if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);else grid.group_column_table.insertBefore(dataRow, targetIndex);

    /* add button in group panel */
    let button = grid.classGroup.createGroupButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);else bar.append(button);
    grid.classGroup.toggleGroupPlaceHolder();
    let data = grid.view_table.data;
    grid.classGroup.setGroupData(data, null, false);
    if (grid.options.showFilterPanel) grid.classFilter.showFilterPanel();
  }
  removeGroupButton(element) {
    let selector = this.selector;
    const grid = this.grid;

    /* get column name */
    let name = element.dataset.name;

    /* remove group data */
    let rowIndex = grid.group_column_table.selectRowIndex(tbsGridNames.column.name, name);
    grid.group_column_table.remove(rowIndex);

    // remove button in group panel
    let button = element.parentNode;
    button.remove();
    grid.classGroup.toggleGroupPlaceHolder();
    let data = grid.view_table.data;
    grid.classGroup.setGroupData(data, null, false);
    if (grid.options.showFilterPanel) grid.classFilter.showFilterPanel();
  }
  removeGroupButtonList() {
    let selector = this.selector;
    const grid = this.grid;
    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
    for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
  }
  getGroupButtonList() {
    let selector = this.selector;
    const grid = this.grid;
    grid.classGroup.removeGroupButtonList();
    let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
    let groupColumns = grid.group_column_table.data;
    for (let i = 0, len = groupColumns.length; i < len; i++) {
      let groupColumn = groupColumns[i];
      let button = grid.classGroup.createGroupButton(groupColumn[tbsGridNames.column.name]);
      let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
      if (grid.null(bar)) return;
      bar.append(button);
    }
    grid.classGroup.toggleGroupPlaceHolder();
  }
  createGroupButton(columnName) {
    let selector = this.selector;
    const grid = this.grid;
    let column = grid.classColumn.getColumn(columnName);
    let text = document.createElement('span');
    text.classList.add('tbs-grid-panel-button-text');
    text.textContent = column.header[tbsGridNames.column.text];
    text.dataset.name = columnName;
    let icon = document.createElement('span');
    icon.classList.add('tbs-grid-panel-button-icon');
    icon.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
    icon.dataset.name = columnName;
    let button = document.createElement('div');
    button.classList.add('tbs-grid-panel-button');
    button.dataset.name = columnName;
    button.append(text);
    button.append(icon);
    return button;
  }
  toggleGroupPlaceHolder() {
    let selector = this.selector;
    const grid = this.grid;
    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
    let span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
    if (buttons.length > 0) span.style.display = 'none';else span.style.display = '';
    if (buttons.length == 0) {
      grid.classColumn.setColumn('group_column', 'visible', false);
      // grid.apply();
    } else {
      grid.classColumn.setColumn('group_column', 'visible', true);
      // grid.apply();
    }
    grid.classControl.after_setColumnVisible();
  }
  allowGroupMode() {
    let selector = this.selector;
    const grid = this.grid;
    grid.setGridMode(tbsGridTypes.GridMode.group);
    grid.classGroup.showGroupPanel();
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data);else grid.apply();
    if (grid.options.showFilterPanel) grid.classFilter.showFilterPanel();
    grid.apply();
  }
  denyGroupMode() {
    let selector = this.selector;
    const grid = this.grid;
    for (let i = grid.view_table.count() - 1; i >= 0; i--) {
      let row = grid.view_table.data[i];
      if (grid.notNull(row[tbsGridNames.column.children]) && row[tbsGridNames.column.children].length != 0) grid.view_table.remove(i);
    }
    grid.classGroup.setGroupColumns([]);
    grid.classGroup.getGroupButtonList();
    grid.classGroup.hideGroupPanel();
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.apply();
    if (grid.options.showFilterPanel) grid.classFilter.showFilterPanel();
  }
  showGroupPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.options.showGroupPanel = true;
    let panel = document.querySelector(selector + ' .tbs-grid-panel80');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');
  }
  hideGroupPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.options.showGroupPanel = false;
    let panel = document.querySelector(selector + ' .tbs-grid-panel80');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');
  }
  initGroupData() {
    let selector = this.selector;
    const grid = this.grid;
    grid.classGroup.setGroupColumns([]);
    grid.classRange.removeRange(0, -1);
    grid.classScroll.setPanelSize();
    grid.verticalScroll.setScroll(grid.code_vertical);
    if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data, null, false);
  }
  getGroupRow(columnName) {
    return this.grid.group_column_table.selectRow(tbsGridNames.column.name, columnName);
  }
  expandGroup() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.group_column_table.count() == 0) return;
    let openDepth = grid.classGroup.openDepth;
    if (grid.null(grid.classGroup.openDepth)) openDepth = 1;else openDepth += 1;
    if (openDepth > grid.group_column_table.count() + 1) openDepth = grid.group_column_table.count();
    grid.classGroup.openDepth = openDepth;
    grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
  }
  collapseGroup() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.group_column_table.count() == 0) return;
    let openDepth = grid.classGroup.openDepth;
    if (grid.null(grid.classGroup.openDepth)) openDepth = grid.group_column_table.count();else openDepth -= 1;
    if (openDepth <= 0) openDepth = 1;
    grid.classGroup.openDepth = openDepth;
    grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
  }
}

/***/ }),

/***/ 654:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ TbsGridPage; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridPage {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.pageIndex = 0;
    this.pageCount = 0;
    this.pageRowCount = 0;
    this.pageTotalRowCount = 0;
    this.options = {};
    this.options.pageRowCount = 10;
    this.options.pageRowCountList = [10, 20, 30, 50, 100];

    // user event
    this.user_clickPageFirst = null;
    this.user_clickPagePrev = null;
    this.user_clickPageIndex = null;
    this.user_clickPageNext = null;
    this.user_clickPageLast = null;
  }
  setPageOption(optionName, optionValue) {
    let selector = this.selector;
    const grid = this.grid;
    let classPage = this;
    classPage.options[optionName] = optionValue;
  }
  setPageData() {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.grid_mode != tbsGridTypes.GridMode.page) return;
    if (grid.view_table.count() == 0) return;
    if (grid.classPage.pageRowCount == 0) grid.classPage.pageRowCount = grid.classPage.options.pageRowCount;
    grid.classPage.pageTotalRowCount = grid.page_table.count();
    grid.classPage.pageCount = Math.ceil(grid.page_table.count() / grid.classPage.pageRowCount);
    if (grid.classPage.pageIndex == 0) grid.classPage.pageIndex = 1;
    if (grid.classPage.pageIndex < 1) grid.classPage.pageIndex = 1;else if (grid.classPage.pageIndex > grid.classPage.pageCount) grid.classPage.pageIndex = grid.classPage.pageCount;
    grid.classPage.startRowIndex = (grid.classPage.pageIndex - 1) * grid.classPage.pageRowCount;
    grid.classPage.lastRowIndex = grid.classPage.startRowIndex + grid.classPage.pageRowCount - 1;
    if (grid.classPage.lastRowIndex > grid.page_table.count() - 1) grid.classPage.lastRowIndex = grid.page_table.count() - 1;
    grid.view_table.remove();
    for (let i = grid.classPage.startRowIndex; i <= grid.classPage.lastRowIndex; i++) {
      let row = grid.page_table.data[i];
      grid.view_table.insert(grid.copyJson(row));
    }
    document.querySelector(selector + ' .tbs-grid-panel10-page-select').textContent = grid.classPage.pageIndex;
  }
}

/***/ }),

/***/ 32:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ TbsGridRange; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridRange {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  removePanelRange = function (panelName = '') {
    let selector = this.selector;
    const grid = this.grid;
    if (panelName == 'panel30') {
      document.querySelectorAll(selector + ' .tbs-grid-cell-start').forEach(cell => cell.classList.remove('tbs-grid-cell-start'));
      document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    } else if (panelName == 'panel40') {
      document.querySelectorAll(selector + ' .tbs-grid-panel41 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    } else if (panelName == 'panel50') {
      document.querySelectorAll(selector + ' .tbs-grid-panel51 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
      document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
    }
  };
  selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (arguments.length == 2) {
      startCellIndex = 0;
      lastCellIndex = -1;
    }
    if (lastRowIndex == -1) {
      lastRowIndex = grid.view_table.count() - 1;
    }
    if (lastCellIndex == -1) {
      lastCellIndex = grid.column_table.count() - 1;
    }
    grid.classRange.removePanelRange('panel40');
    grid.classRange.removePanelRange('panel50');
    if (grid.top_table.count() > 0) grid.classRange40.removeRange(0, -1, 0, -1);
    if (grid.footer_table.count() > 0) grid.classRange50.removeRange(0, -1, 0, -1);
    return grid.classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
  };
  setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
    let selector = this.selector;
    const grid = this.grid;
    grid.startRowIndex = startRowIndex;
    grid.startCellIndex = startCellIndex;
    grid.lastRowIndex = lastRowIndex;
    grid.lastCellIndex = lastCellIndex;
    let _startRowIndex = startRowIndex > lastRowIndex ? lastRowIndex : startRowIndex;
    let _lastRowIndex = startRowIndex > lastRowIndex ? startRowIndex : lastRowIndex;
    let _startCellIndex = startCellIndex > lastCellIndex ? lastCellIndex : startCellIndex;
    let _lastCellIndex = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;
    grid._startRowIndex = _startRowIndex;
    grid._startCellIndex = _startCellIndex;
    grid._lastRowIndex = _lastRowIndex;
    grid._lastCellIndex = _lastCellIndex;
    if (type == 'add' || grid.selectRangeArray == 0) {
      let selectRange = {};
      selectRange.startRowIndex = startRowIndex;
      selectRange.startCellIndex = startCellIndex;
      selectRange.lastRowIndex = lastRowIndex;
      selectRange.lastCellIndex = lastCellIndex;
      selectRange._startRowIndex = _startRowIndex;
      selectRange._startCellIndex = _startCellIndex;
      selectRange._lastRowIndex = _lastRowIndex;
      selectRange._lastCellIndex = _lastCellIndex;
      grid.selectRangeArray.push(selectRange);
    } else {
      let selectRange = grid.selectRangeArray[0];
      selectRange.startRowIndex = startRowIndex;
      selectRange.startCellIndex = startCellIndex;
      selectRange.lastRowIndex = lastRowIndex;
      selectRange.lastCellIndex = lastCellIndex;
      selectRange._startRowIndex = _startRowIndex;
      selectRange._startCellIndex = _startCellIndex;
      selectRange._lastRowIndex = _lastRowIndex;
      selectRange._lastCellIndex = _lastCellIndex;
    }
    grid.classRange.setRangeValue(_startRowIndex, _lastRowIndex, _startCellIndex, _lastCellIndex);
    if (grid.fixedRowIndex == -1) {
      topRowIndex = topRowIndex == undefined ? grid.getFirstRowIndex() : grid.fixedRowIndex + 1;
    } else {
      topRowIndex = topRowIndex == undefined ? grid.getFirstRowIndex() : topRowIndex;
    }
    return topRowIndex;
  };
  setRangeValue = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.options[tbsGridNames.row.selectMode] == 'cell') {
      startRowIndex = startRowIndex;
      lastRowIndex = startRowIndex;
    }
    //=============================================================	panel31 select
    let data = grid.data_select_panel31;
    if (lastRowIndex == -1) lastRowIndex = data.length - 1;
    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
      let len = data.length;
      let bCount = false;
      for (let n = 0; n < len; n++) {
        if (rowIndex == data[n][0][0]) {
          bCount = true;
          data[n][1][0] = 1;
          break;
        }
      }
      if (bCount == false) {
        data.push([new Int32Array([rowIndex]), new Int8Array([1, 0, 0])]);
      }
    }
    //=============================================================	panel30 select
    let column = grid.column_table.data;
    let columnLen = column.length;
    data = grid.data_select_panel30;
    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
      if (lastCellIndex == -1) lastCellIndex = column.length - 1;
      let len = data.length;
      let bCount = false;
      for (let n = 0; n < len; n++) {
        if (rowIndex == data[n][0][0]) {
          bCount = true;
          for (let colIndex = 0; colIndex < columnLen; colIndex++) {
            if (colIndex >= startCellIndex && colIndex <= lastCellIndex) {
              data[n][1][colIndex] = 1;
            } else {
              data[n][1][colIndex] = 0;
            }
          }
          break;
        }
      }
      if (bCount == false) {
        let array = [];
        for (let colIndex = 0; colIndex < columnLen; colIndex++) array.push(0);
        let row = [new Int32Array([rowIndex]), new Int8Array(array)];
        for (let colIndex = 0; colIndex < columnLen; colIndex++) {
          if (colIndex >= startCellIndex && colIndex <= lastCellIndex) row[1][colIndex] = 1;else row[1][colIndex] = 0;
        }
        data.push(row);
      }
    }
    if (grid.headerRowCount > 1) {
      function selectCell(trList, colIndex) {
        for (let i = trList.length - 1; i >= 0; i--) {
          let cell = trList[i].childNodes[colIndex];
          if (cell.style.display == 'none') continue;else cell.classList.add('tbs-grid-cell-select');
        }
      }
      // panel20
      let trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
      for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
      // panel22
      if (grid.fixedColumnIndex != -1) {
        trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
        for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
      }
    } else {
      // panel20
      let tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
      for (let i = startCellIndex; i <= lastCellIndex; i++) {
        tableCells[i].classList.add('tbs-grid-cell-select');
      }
    }
  };
  removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.startRowIndex != -1) grid.startRowIndex = -1;
    if (grid.startCellIndex != -1) grid.startCellIndex = -1;
    if (grid.lastRowIndex != -1) grid.lastRowIndex = -1;
    if (grid.lastCellIndex != -1) grid.lastCellIndex = -1;
    if (grid._startRowIndex != -1) grid._startRowIndex = -1;
    if (grid._startCellIndex != -1) grid._startCellIndex = -1;
    if (grid._lastRowIndex != -1) grid._lastRowIndex = -1;
    if (grid._lastCellIndex != -1) grid._lastCellIndex = -1;
    if (grid.topLineDiv.style.width != '0px') grid.topLineDiv.style.width = '0px';
    if (grid.leftLineDiv.style.height != '0px') grid.leftLineDiv.style.height = '0px';
    if (grid.bottomLineDiv.style.width != '0px') grid.bottomLineDiv.style.width = '0px';
    if (grid.rightLineDiv.style.height != '0px') grid.rightLineDiv.style.height = '0px';
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
    grid.selectRangeArray = [];
    document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td').forEach(function (td) {
      td.classList.remove('tbs-grid-cell-select');
    });
    if (grid.fixedColumnIndex != -1) {
      document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table td').forEach(function (td) {
        td.classList.remove('tbs-grid-cell-select');
      });
    }
  };
  addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (arguments.length == 2) {
      startCellIndex = 0;
      lastCellIndex = -1;
    }
    if (lastRowIndex == -1) {
      lastRowIndex = grid.view_table.count() - 1;
    }
    if (lastCellIndex == -1) {
      lastCellIndex = grid.column_table.count() - 1;
    }
    grid.classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, 'add');
  };
}

/***/ }),

/***/ 868:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ TbsGridRangePanel; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridRangePanel {
  constructor(grid, panelName) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.panelName = panelName;
    this.startRowIndex = -1;
    this.startCellIndex = -1;
    this.lastRowIndex = -1;
    this.lastCellIndex = -1;
    this._startRowIndex = -1;
    this._startCellIndex = -1;
    this._lastRowIndex = -1;
    this._lastCellIndex = -1;
    this.selectRangeArray = [];
    this.data_select_panel31 = [];
    this.data_select_panel30 = [];
    this.data_summary = [];
    if (this.panelName == 'panel40') {
      this.data_summary = grid.top_data;
    } else if (this.panelName == 'panel50') {
      this.data_summary = grid.footer_data;
    }
  }
  selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    if (arguments.length == 2) {
      startCellIndex = 0;
      lastCellIndex = -1;
    }
    if (lastRowIndex == -1) {
      lastRowIndex = grid.data_summary.length - 1;
    }
    if (lastCellIndex == -1) {
      lastCellIndex = grid.column_table.count() - 1;
    }
    if (panelName == 'panel40') grid.classRange50.removeRange(0, -1, 0, -1);else if (panelName == 'panel50') grid.classRange40.removeRange(0, -1, 0, -1);
    classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
  }
  setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    classRange.startRowIndex = startRowIndex;
    classRange.startCellIndex = startCellIndex;
    classRange.lastRowIndex = lastRowIndex;
    classRange.lastCellIndex = lastCellIndex;
    let _startRowIndex = startRowIndex > lastRowIndex ? lastRowIndex : startRowIndex;
    let _lastRowIndex = startRowIndex > lastRowIndex ? startRowIndex : lastRowIndex;
    let _startCellIndex = startCellIndex > lastCellIndex ? lastCellIndex : startCellIndex;
    let _lastCellIndex = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;
    classRange._startRowIndex = _startRowIndex;
    classRange._startCellIndex = _startCellIndex;
    classRange._lastRowIndex = _lastRowIndex;
    classRange._lastCellIndex = _lastCellIndex;
    if (type == 'add' || classRange.selectRangeArray == 0) {
      let selectRange = {};
      classRange.startRowIndex = startRowIndex;
      classRange.startCellIndex = startCellIndex;
      classRange.lastRowIndex = lastRowIndex;
      classRange.lastCellIndex = lastCellIndex;
      classRange._startRowIndex = _startRowIndex;
      classRange._startCellIndex = _startCellIndex;
      classRange._lastRowIndex = _lastRowIndex;
      classRange._lastCellIndex = _lastCellIndex;
      classRange.selectRangeArray.push(selectRange);
    } else {
      let selectRange = classRange.selectRangeArray[0];
      classRange.startRowIndex = startRowIndex;
      classRange.startCellIndex = startCellIndex;
      classRange.lastRowIndex = lastRowIndex;
      classRange.lastCellIndex = lastCellIndex;
      classRange._startRowIndex = _startRowIndex;
      classRange._startCellIndex = _startCellIndex;
      classRange._lastRowIndex = _lastRowIndex;
      classRange._lastCellIndex = _lastCellIndex;
    }
    classRange.setRangeValue(_startRowIndex, _lastRowIndex, _startCellIndex, _lastCellIndex);
    if (grid.fixedRowIndex == -1) {
      topRowIndex = topRowIndex == undefined ? grid.getFirstRowIndex() : classRange.fixedRowIndex + 1;
    } else {
      topRowIndex = topRowIndex == undefined ? grid.getFirstRowIndex() : topRowIndex;
    }
    grid.classPanel30.setDataPanel(topRowIndex);
    grid.classPanel40.setDataPanel();
    grid.classPanel50.setDataPanel();
  }
  setRangeValue(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    // fcuntion : set selected value
    //console.log(`startRowIndex, lastRowIndex, startCellIndex, lastCellIndex`);
    //console.log(`${startRowIndex}, ${lastRowIndex}, ${startCellIndex}, ${lastCellIndex}`);
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    if (grid.options[tbsGridNames.row.selectMode] == 'cell') {
      startRowIndex = startRowIndex;
      lastRowIndex = startRowIndex;
    }
    //=============================================================	panel31 select
    let data = classRange.data_select_panel31;
    if (lastRowIndex == -1) lastRowIndex = data.length - 1;
    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
      let len = data.length;
      let bCount = false;
      for (let n = 0; n < len; n++) {
        if (rowIndex == data[n][0][0]) {
          bCount = true;
          data[n][1][0] = 1;
          break;
        }
      }
      if (bCount == false) {
        data.push([new Int32Array([rowIndex]), new Int8Array([1, 0, 0])]);
      }
    }
    //=============================================================	panel30 select
    let column = grid.column_table.data;
    let columnLen = column.length;
    data = classRange.data_select_panel30;
    for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
      if (lastCellIndex == -1) lastCellIndex = column.length - 1;
      let len = data.length;
      let bCount = false;
      for (let n = 0; n < len; n++) {
        if (rowIndex == data[n][0][0]) {
          bCount = true;
          for (let colIndex = 0; colIndex < columnLen; colIndex++) {
            if (colIndex >= startCellIndex && colIndex <= lastCellIndex) {
              data[n][1][colIndex] = 1;
            } else {
              data[n][1][colIndex] = 0;
            }
          }
          break;
        }
      }
      if (bCount == false) {
        let array = [];
        for (let colIndex = 0; colIndex < columnLen; colIndex++) array.push(0);
        let row = [new Int32Array([rowIndex]), new Int8Array(array)];
        for (let colIndex = 0; colIndex < columnLen; colIndex++) {
          if (colIndex >= startCellIndex && colIndex <= lastCellIndex) row[1][colIndex] = 1;else row[1][colIndex] = 0;
        }
        data.push(row);
      }
    }
    /*
    if (grid.headerRowCount > 1) {
        function selectCell(trList, colIndex){
            for (let i = trList.length - 1; i >=0; i--) {
                let cell = trList[i].childNodes[colIndex];
                if (cell.style.display == 'none') continue;
                else cell.classList.add('tbs-grid-cell-select');
            }
        }
        // panel20
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
        for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
        // panel22
        if (grid.fixedColumnIndex != -1){
            trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
            for (let x = startCellIndex; x <= lastCellIndex; x++) selectCell(trList, x);
        }
    }
    else {
        // panel20
        let tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
        for (let i = startCellIndex; i <= lastCellIndex; i++) {
            tableCells[i].classList.add('tbs-grid-cell-select');
        }
        // panel22
        if (grid.fixedColumnIndex != -1){
            tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr:last-child td');
            for (let i = startCellIndex; i <= lastCellIndex; i++) {
                  tableCells[i].classList.add('tbs-grid-cell-select');
            }
        }
    }
    */
  }
  removeRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    if (classRange.startRowIndex != -1) classRange.startRowIndex = -1;
    if (classRange.startCellIndex != -1) classRange.startCellIndex = -1;
    if (classRange.lastRowIndex != -1) classRange.lastRowIndex = -1;
    if (classRange.lastCellIndex != -1) classRange.lastCellIndex = -1;
    if (classRange._startRowIndex != -1) classRange._startRowIndex = -1;
    if (classRange._startCellIndex != -1) classRange._startCellIndex = -1;
    if (classRange._lastRowIndex != -1) classRange._lastRowIndex = -1;
    if (classRange._lastCellIndex != -1) classRange._lastCellIndex = -1;

    // if (grid.topLineDiv.style.width != '0px') grid.topLineDiv.style.width = '0px';
    // if (grid.leftLineDiv.style.height != '0px') grid.leftLineDiv.style.height = '0px';
    // if (grid.bottomLineDiv.style.width != '0px') grid.bottomLineDiv.style.width = '0px';
    // if (grid.rightLineDiv.style.height != '0px') grid.rightLineDiv.style.height = '0px';

    classRange.data_select_panel30 = [];
    classRange.data_select_panel31 = [];
    classRange.selectRangeArray = [];
    document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td').forEach(function (td) {
      td.classList.remove('tbs-grid-cell-select');
    });
    if (this.fixedColumnIndex != -1) {
      document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table td').forEach(function (td) {
        td.classList.remove('tbs-grid-cell-select');
      });
    }
  }
  addRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    if (arguments.length == 2) {
      startCellIndex = 0;
      lastCellIndex = -1;
    }
    if (lastRowIndex == -1) {
      lastRowIndex = classRange.data_summary.length - 1;
    }
    if (lastCellIndex == -1) {
      lastCellIndex = grid.column_table.count() - 1;
    }
    classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, 'add');
  }
  getMaxCellIndexByMouseMove() {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    let panelName2;
    let panelName0;
    if (panelName == 'panel40') {
      panelName2 = 'panel42';
      panelName0 = 'panel40';
    } else {
      panelName2 = 'panel52';
      panelName0 = 'panel50';
    }
    let maxCellIndex, num;
    const rowIndexArray = [];
    if (grid.fixedColumnIndex != -1) {
      num = classRange.getMaxCellIndexByMouseMove2(panelName2);
      if (num != undefined) rowIndexArray.push(num);
      num = classRange.getMaxCellIndexByMouseMove2(panelName0);
      if (num != undefined) rowIndexArray.push(num);
      maxCellIndex = Math.max(...rowIndexArray);
    } else {
      maxCellIndex = classRange.getMaxCellIndexByMouseMove2(panelName0);
    }
    return maxCellIndex;
  }
  getMinCellIndexByMouseMove() {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let panelName = this.panelName;
    let panelName2;
    let panelName0;
    if (panelName == 'panel40') {
      panelName2 = 'panel42';
      panelName0 = 'panel40';
    } else {
      panelName2 = 'panel52';
      panelName0 = 'panel50';
    }
    let minCellIndex;
    const rowIndexArray = [];
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      num = classRange.getMinCellIndexByMouseMove2(panelName2);
      if (num != undefined) rowIndexArray.push(num);
      num = classRange.getMinCellIndexByMouseMove2(panelName0);
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedRowIndex != -1) {
      num = classRange.getMinCellIndexByMouseMove2(panelName0);
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else if (grid.fixedColumnIndex != -1) {
      num = classRange.getMinCellIndexByMouseMove2(panelName2);
      if (num != undefined) rowIndexArray.push(num);
      num = classRange.getMinCellIndexByMouseMove2(panelName0);
      if (num != undefined) rowIndexArray.push(num);
      minCellIndex = Math.min(...rowIndexArray);
    } else {
      minCellIndex = classRange.getMinCellIndexByMouseMove2(panelName0);
    }
    return minCellIndex;
  }
  getMaxCellIndexByMouseMove2(panelName) {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let lastX = grid.lastX;
    let maxCellIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = tableRow && tableRow.childNodes ? tableRow.childNodes.length : 0;
    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
      if (panelName == 'panel42' || panelName == 'panel52') {
        startColumnIndex = 0;
        lastColumnIndex = grid.fixedColumnIndex + 1;
      } else if (panelName == 'panel40' || panelName == 'panel50') {
        startColumnIndex = grid.fixedColumnIndex + 1;
        lastColumnIndex = len;
      }
    } else {
      startColumnIndex = 0;
      lastColumnIndex = len;
    }
    for (let x = startColumnIndex; x < lastColumnIndex; x++) {
      let tableCell = tableRow.childNodes[x];
      let column = grid.column_table.data[x];
      if (column[tbsGridNames.column.visible] == false) continue;
      let rect = grid.getOffset(tableCell);
      let rectLeft = rect.left;
      //console.log(`rect2.left ${rect2.left} rectLeft ${rectLeft} lastX ${lastX} `);
      if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
    }
    return maxCellIndex;
  }
  getMinCellIndexByMouseMove2(panelName) {
    let selector = this.selector;
    const grid = this.grid;
    let classRange = this;
    let lastX = grid.lastX;
    let minCellIndex;
    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
    let tableRow = tableRows[0];
    let len = tableRow && tableRow.childNodes ? tableRow.childNodes.length : 0;
    let startColumnIndex, lastColumnIndex;
    if (grid.fixedColumnIndex != -1) {
      if (panelName == 'panel42' || panelName == 'panel52') {
        startColumnIndex = 0;
        lastColumnIndex = grid.fixedColumnIndex;
      } else if (panelName == 'panel40' || panelName == 'panel50') {
        startColumnIndex = grid.fixedColumnIndex + 1;
        lastColumnIndex = len - 1;
      }
    } else {
      startColumnIndex = 0;
      lastColumnIndex = len - 1;
    }
    for (let x = lastColumnIndex; x >= startColumnIndex; x--) {
      let tableCell = tableRow.childNodes[x];
      let column = grid.column_table.data[x];
      if (column[tbsGridNames.column.visible] == false) continue;
      let rect = grid.getOffset(tableCell);
      let rectRight = rect.left + tableCell.getBoundingClientRect().width;
      if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
    }
    return minCellIndex;
  }
}

/***/ }),

/***/ 543:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ TbsGridRenderInfo; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridRenderInfo {
  /**
   * num, mode, checkbox
   */

  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.column = null;
    this.columnIndex = null;
    this.columnName = null;
    this.columnType = null;
    this.valueName = null;
    this.textName = null;
    this.rowIndex = null;
    this.columnIndex = null;
    this.cellValue = null;
    this.cellText = null; //user

    this.align = null; //user
    this.className = null; //user

    this.width = null;
    this.visible = null;
    this.tableCell = null;
    this.panelName = null;
  }
  start(panelName, tableCell, column, rowIndex, columnIndex) {
    const grid = this.grid;
    let render = this;
    render.panelName = panelName;
    render.tableCell = tableCell;
    render.column = grid.info_table.selectRowByRowIndex(columnIndex);
    render.rowIndex = rowIndex;
    render.columnIndex = columnIndex;
    render.columnName = grid.getProperty(column, tbsGridNames.column.name);
    render.columnType = grid.getProperty(column, tbsGridNames.column.type);
    render.visible = grid.getProperty(column, tbsGridNames.column.visible);
    render.width = grid.getProperty(column, tbsGridNames.column.width);
    render.align = grid.getProperty(column, tbsGridNames.column.align);
    render.className = grid.getProperty(column, tbsGridNames.column.className);
    if (panelName == 'panel41' || panelName == 'panle51' || panelName == 'panle71') columnType = tbsGridTypes.CellType.string;
    if (panelName == 'panel21') {
      if (render.columnName == 'num') {
        render.cellValue = '';
        render.cellText = '';
      } else if (render.columnName == 'mode') {
        render.cellValue = '';
        render.cellText = '';
      } else if (render.columnName == 'checkbox') {
        render.cellValue = grid.classPanel20.isChecked;
        render.cellText = '';
      }
    } else if (panelName == 'panel31') {
      let dataRow = grid.getRow(render.rowIndex);
      if (render.visible) {
        if (render.columnName == 'num') {
          if (grid.grid_mode == tbsGridTypes.GridMode.page) {
            render.cellValue = grid.classPage.startRowIndex + render.rowIndex + 1;
            render.cellText = grid.classPage.startRowIndex + render.rowIndex + 1;
          } else {
            render.cellValue = render.rowIndex + 1;
            render.cellText = render.rowIndex + 1;
          }
          render.cellValue = render.rowIndex + 1;
          render.cellText = render.rowIndex + 1;
        } else if (render.columnName == 'mode') {
          let mode = dataRow[tbsGridNames.column.mode];
          mode = mode != '' && mode != 'S' ? mode : '';
          render.cellValue = mode;
          render.cellText = mode;
        } else if (render.columnName == 'checkbox') {
          let check = grid.null(dataRow['check']) ? false : dataRow['check'];
          render.cellValue = check;
          render.cellText = check;
        }
      }
    } else if (panelName == 'panel41') {
      if (render.columnName == 'num') {
        render.cellValue = '∑';
        render.cellText = '∑';
      } else if (render.columnName == 'mode') {
        render.cellValue = '';
        render.cellText = '';
      } else if (render.columnName == 'checkbox') {
        render.cellValue = '';
        render.cellText = '';
      }
    } else if (panelName == 'panel51') {
      if (render.columnName == 'num') {
        render.cellValue = '∑';
        render.cellText = '∑';
      } else if (render.columnName == 'mode') {
        render.cellValue = '';
        render.cellText = '';
      } else if (render.columnName == 'checkbox') {
        render.cellValue = '';
        render.cellText = '';
      }
    } else if (panelName == 'panel71') {
      if (render.columnName == 'num') {
        render.cellValue = 'R';
        render.cellText = 'R';
      } else if (render.columnName == 'mode') {
        render.cellValue = '';
        render.cellText = '';
      } else if (render.columnName == 'checkbox') {
        render.cellValue = '';
        render.cellText = '';
      }
    }
    render.createHtml();
  }
  createHtml() {
    const grid = this.grid;
    if (this.columnType == tbsGridTypes.CellType.checkbox) {
      if (this.panelName == 'panel21' || this.panelName == 'panel31') {
        if (this.visible) {
          let element = grid.classDom.createElementCheckbox();
          if (this.tableCell.querySelectorAll('.tbs-grid-cell-checkbox').length == 0) this.tableCell.childNodes[0].append(element);
        }
      }
    } else {
      let element = grid.classDom.createElementCellText();
      if (this.tableCell.querySelectorAll('.tbs-grid-cell-div-text').length == 0) this.tableCell.childNodes[0].append(element);
    }
    this.setBounding();
  }
  setBounding() {
    const grid = this.grid;
    grid.classDom.setCellStyle(this.tableCell, 'display', this.visible == true ? '' : 'none');
    grid.classDom.addUserClass(this.tableCell, this.className); // user event
    grid.classDom.setCellStyle(this.tableCell, 'textAlign', this.align); // user event
    grid.classDom.setCellStyle(this.tableCell, 'width', this.width + 'px');
    if (this.columnName == 'num' || this.columnName == 'mode') {
      let element = this.tableCell.querySelector('.tbs-grid-cell-div-text');
      grid.classDom.setCell(element, 'textContent', this.cellText);
    } else if (this.columnName == 'checkbox') {
      if (this.visible) {
        let element = this.tableCell.querySelector('.tbs-grid-cell-checkbox');
        element.checked = this.cellValue;
      }
    }
  }
}

/***/ }),

/***/ 541:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ TbsGridRender; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridRender {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.column = null;
    this.columnIndex = null;
    this.columnName = null;
    this.columnType = null;
    this.valueName = null;
    this.textName = null;
    this.rowIndex = null;
    this.columnIndex = null;
    this.cellValue = null;
    this.cellText = null; //user

    this.align = null; //user
    this.className = null; //user

    this.width = null;
    this.visible = null;
    this.tableCell = null;
    this.panelName = null;
  }
  start(panelName, tableCell, column, rowIndex, columnIndex) {
    const grid = this.grid;
    let render = this;
    render.panelName = panelName;
    render.tableCell = tableCell;
    render.column = column;
    render.rowIndex = rowIndex;
    render.columnIndex = columnIndex;
    render.columnName = column[tbsGridNames.column.name];
    render.columnType = column[tbsGridNames.column.type];
    render.visible = column[tbsGridNames.column.visible];
    render.width = column[tbsGridNames.column.width];
    if (render.panelName == 'panel40' || render.panelName == 'panel42') {
      let topColumn = grid.getColumn(render.columnName, grid.top_column_table);
      if (grid.notNull(topColumn)) {
        render.align = grid.notNull(topColumn[tbsGridNames.column.align]) ? topColumn[tbsGridNames.column.align] : column[tbsGridNames.column.align];
        render.className = grid.notNull(topColumn[tbsGridNames.column.className]) ? topColumn[tbsGridNames.column.className] : grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
      } else {
        render.align = column[tbsGridNames.column.align];
        render.className = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
      }
      render.cellValue = grid.getValue(render.rowIndex, render.columnName, grid.top_table);
      render.cellText = grid.getText(render.rowIndex, render.columnName, grid.top_table);
    } else if (this.panelName == 'panel50' || this.panelName == 'panel52') {
      let footerColumn = grid.getColumn(this.columnName, grid.footer_column_table);
      if (grid.notNull(footerColumn)) {
        render.align = grid.notNull(footerColumn[tbsGridNames.column.align]) ? footerColumn[tbsGridNames.column.align] : column[tbsGridNames.column.align];
        render.className = grid.notNull(footerColumn[tbsGridNames.column.className]) ? footerColumn[tbsGridNames.column.className] : grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
      } else {
        render.align = column[tbsGridNames.column.align];
        render.className = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
      }
      render.cellValue = grid.getValue(render.rowIndex, render.columnName, grid.footer_table);
      render.cellText = grid.getText(render.rowIndex, render.columnName, grid.footer_table);
    } else {
      render.align = column[tbsGridNames.column.align];
      render.className = grid.classColumn.getColumnProperty(render.columnName, tbsGridNames.column.className);
      render.cellValue = grid.getValue(render.rowIndex, render.columnName);
      render.cellText = grid.getText(render.rowIndex, render.columnName);
    }
    render.updateData();
  }
  updateData() {
    const grid = this.grid;
    let render = this;
    if (grid.grid_mode == tbsGridTypes.GridMode.group) {
      if (render.panelName == 'panel30' || render.panelName == 'panel32') {
        if (render.columnName == 'group_column') {
          let row = grid.getRow(render.rowIndex);
          let rowDepth = row[tbsGridNames.column.depth];
          if (rowDepth <= grid.group_column_table.count()) {
            render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][tbsGridNames.column.name]) + '(' + row[tbsGridNames.column.children].length + ')';
          }
        }
      }
    } else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
      if (render.panelName == 'panel30' || render.panelName == 'panel32') {
        if (render.columnIndex == 0) {
          let row = grid.getRow(render.rowIndex);
          let rowDepth = row[tbsGridNames.column.depth];
          if (row[tbsGridNames.column.children] && row[tbsGridNames.column.children].length > 0) {
            render.cellText = grid.getText(render.rowIndex, render.columnName) + '(' + row[tbsGridNames.column.children].length + ')';
          } else {
            render.cellText = grid.getText(render.rowIndex, render.columnName);
          }
        }
      }
    }
    if (grid.fixedColumnIndex != -1) {
      if (render.panelName.substring(6) == '2') {
        if (render.columnIndex > grid.fixedColumnIndex) render.visible = false;
      } else if (render.panelName.substring(6) == '0') {
        if (render.columnIndex <= grid.fixedColumnIndex) render.visible = false;
      }
    }
    render.createHtml();
  }
  createHtml() {
    const grid = this.grid;
    let render = this;
    if (render.panelName == 'panel30' || render.panelName == 'panel32') {
      if (grid.grid_mode == tbsGridTypes.GridMode.group) {
        if (render.columnName == 'group_column') {
          let row = grid.getRow(render.rowIndex);
          let rowDepth = row[tbsGridNames.column.depth];
          let icon = grid.classDom.createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
          grid.classDom.prependIcon(render.tableCell.childNodes[0], icon);
          grid.classGroup.setGroupIcon(render.tableCell, render.rowIndex);
          grid.classDom.setCellStyle(render.tableCell.childNodes[0], 'paddingLeft', rowDepth * 15 + 'px');
        } else {
          let icons = render.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
          if (icons.length > 0) icons[0].remove();
        }
      } else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {
        if (render.columnIndex == 0) {
          let row = grid.getRow(render.rowIndex);
          let rowDepth = row[tbsGridNames.column.depth];
          let icon = grid.classDom.createElementCellIcon(); // .tbs-grid-cell-div-icon .open-icon / .closed-icon
          grid.classDom.prependIcon(render.tableCell.childNodes[0], icon);
          grid.classTree.setTreeIcon(render.tableCell, render.rowIndex);
          grid.classDom.setCellStyle(render.tableCell.childNodes[0], 'paddingLeft', rowDepth * 15 + 'px');
        } else {
          let icons = render.tableCell.querySelectorAll('.tbs-grid-cell-div-icon');
          if (icons.length > 0) icons[0].remove();
        }
      }
    }
    render.setBounding();
  }
  setBounding() {
    const grid = this.grid;
    grid.classDom.setCellStyle(this.tableCell, 'display', this.visible == true ? '' : 'none');
    grid.classDom.addUserClass(this.tableCell, this.className); // user event
    grid.classDom.setCellStyle(this.tableCell, 'textAlign', this.align); // user event
    grid.classDom.setCellStyle(this.tableCell, 'width', this.width + 'px');
    if (this.panelName == 'panel72' || this.panelName == 'panel70') {} else {
      let spanText = this.tableCell.querySelector('.tbs-grid-cell-div-text');
      grid.classDom.setCell(spanText, 'textContent', this.cellText); // user event
    }
    if (grid.user_cellBounding) {
      if (this.panelName.substring(6) == '0' || this.panelName.substring(6) == '2') {
        let param = {
          element: this.tableCell,
          rowIndex: this.rowIndex,
          cellIndex: this.columnIndex
        };
        grid.tbs_executeEvent(grid.cellBounding, 'cellBounding', param);
      }
    }
  }
}

/***/ }),

/***/ 613:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ TbsGridRow; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridRow {
  constructor(grid) {
    this.grid = grid;
  }
  setTableHead(grid, panelName) {
    let selector = '#' + grid.gridId;
    if (grid.fixedColumnIndex != -1) {
      let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');
      for (let x = 0, len = grid.column_table.count(); x < len; x++) {
        let column = grid.column_table.data[x];
        let tableCell = tableRow.childNodes[x];
        grid.classDom.setCellStyle(tableCell, 'width', column[tbsGridNames.column.width] + 'px');
        grid.classDom.setCellStyle(tableCell, 'display', '');
        if (column[tbsGridNames.column.visible] == false) {
          grid.classDom.setCellStyle(tableCell, 'width', '0px');
          grid.classDom.setCellStyle(tableCell, 'display', 'none');
        }
        if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
          grid.classDom.setCellStyle(tableCell, 'width', '0px');
          grid.classDom.setCellStyle(tableCell, 'display', 'none');
        } else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
          grid.classDom.setCellStyle(tableCell, 'width', '0px');
          grid.classDom.setCellStyle(tableCell, 'display', 'none');
        }
      }
    } else {
      let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');
      for (let x = 0, len = grid.column_table.count(); x < len; x++) {
        let column = grid.column_table.data[x];
        let tableCell = tableRow.childNodes[x];
        if (panelName.substring(6) == '0') {
          grid.classDom.setCellStyle(tableCell, 'display', column[tbsGridNames.column.visible] ? '' : 'none');
          grid.classDom.setCellStyle(tableCell, 'width', column[tbsGridNames.column.width] + 'px');
        }
      }
    }
  }
  setTableRow(grid, tableRow, rowIndex, panelName = 'panel30') {
    let selector = '#' + grid.gridId;
    tableRow.dataset.rowIndex = rowIndex;
    if (tableRow.style.height != grid.rowHeight + 'px') tableRow.style.height = grid.rowHeight + 'px';
    if (tableRow.style.display == 'none') tableRow.style.display = '';
    if (grid.grid_mode == tbsGridTypes.GridMode.group) {
      if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
        let rowData = grid.getRow(rowIndex);
        let depth = rowData[tbsGridNames.column.depth];
        let count = grid.null(rowData[tbsGridNames.column.children]) ? 0 : rowData[tbsGridNames.column.children].length;
        if (count > 0) {
          if (depth == '1') grid.classDom.addUserClass(tableRow, 'tbs-row-color1');else if (depth == '2') grid.classDom.addUserClass(tableRow, 'tbs-row-color2');else if (depth == '3') grid.classDom.addUserClass(tableRow, 'tbs-row-color3');else if (depth == '4') grid.classDom.addUserClass(tableRow, 'tbs-row-color4');else if (depth == '5') grid.classDom.addUserClass(tableRow, 'tbs-row-color5');else grid.classDom.addUserClass(tableRow, 'tbs-row-color5');
        } else {
          if (depth == '1') grid.classDom.removeUserClass(tableRow, 'tbs-row-color1');else if (depth == '2') grid.classDom.removeUserClass(tableRow, 'tbs-row-color2');else if (depth == '3') grid.classDom.removeUserClass(tableRow, 'tbs-row-color3');else if (depth == '4') grid.classDom.removeUserClass(tableRow, 'tbs-row-color4');else if (depth == '5') grid.classDom.removeUserClass(tableRow, 'tbs-row-color5');else {
            grid.classDom.addUserClass(tableRow, 'tbs-row-color5');
          }
        }
      }
      if (grid.user_rowBounding) {
        if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
          let param = {
            element: tableRow,
            rowIndex: rowIndex,
            data: grid.getRow(rowIndex)
          };
          grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
        }
      }
    } else {
      if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
        let param = {
          element: tableRow,
          rowIndex: rowIndex,
          data: grid.getRow(rowIndex)
        };
        grid.tbs_executeEvent(grid.user_rowBounding, 'rowBounding', param);
      }
    }
    /* row alternative background color */
    grid.classRow.showAlternativeRowColor(grid, panelName, tableRow, rowIndex);
  }
  showAlternativeRowColor(grid, panelName, tableRow, rowIndex) {
    return;
    tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
    if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');else tableRow.classList.add('tbs-grid-tr-bg');
  }
  hideTableRows(grid, panelName, tableRows, fromRowIndex, toRowIndex) {
    for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
      let tableRow = tableRows[i];
      if (tableRow) {
        if (tableRow.style.display != 'none') tableRow.style.display = 'none';
      }
    }
  }
}

/***/ }),

/***/ 505:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ TbsGridScrollBase; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridScrollBase {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  setPanelSize() {
    let selector = this.selector;
    const grid = this.grid;
    let rectGrid = document.querySelector(selector).getBoundingClientRect();
    let main = document.querySelector(selector + ' .tbs-grid-main');
    let panel10 = document.querySelector(selector + ' .tbs-grid-panel10'); // toolbar
    let panel80 = document.querySelector(selector + ' .tbs-grid-panel80'); // groupping
    let panel90 = document.querySelector(selector + ' .tbs-grid-panel90'); // sort

    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
    let panel21 = document.querySelector(selector + ' .tbs-grid-panel21');
    let panel22 = document.querySelector(selector + ' .tbs-grid-panel22');
    let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
    let panel31 = document.querySelector(selector + ' .tbs-grid-panel31');
    let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
    let panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
    let panel41 = document.querySelector(selector + ' .tbs-grid-panel41');
    let panel42 = document.querySelector(selector + ' .tbs-grid-panel42');
    let panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
    let panel51 = document.querySelector(selector + ' .tbs-grid-panel51');
    let panel52 = document.querySelector(selector + ' .tbs-grid-panel52');

    // let panel60 = document.querySelector(selector + ' .tbs-grid-panel60');
    // let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
    // let panel62 = document.querySelector(selector + ' .tbs-grid-panel62');

    let panel70 = document.querySelector(selector + ' .tbs-grid-panel70');
    let panel71 = document.querySelector(selector + ' .tbs-grid-panel71');
    let panel72 = document.querySelector(selector + ' .tbs-grid-panel72');
    let group20 = document.querySelector(selector + ' .tbs-grid-group20');
    let group21 = document.querySelector(selector + ' .tbs-grid-group21');
    let group30 = document.querySelector(selector + ' .tbs-grid-group30');
    let group31 = document.querySelector(selector + ' .tbs-grid-group31');
    let group40 = document.querySelector(selector + ' .tbs-grid-group40');
    let group41 = document.querySelector(selector + ' .tbs-grid-group41');
    let group50 = document.querySelector(selector + ' .tbs-grid-group50');
    let group51 = document.querySelector(selector + ' .tbs-grid-group51');
    let group60 = document.querySelector(selector + ' .tbs-grid-group60');
    let group61 = document.querySelector(selector + ' .tbs-grid-group61');
    let group70 = document.querySelector(selector + ' .tbs-grid-group70');
    let group71 = document.querySelector(selector + ' .tbs-grid-group71');
    let mainHeight = rectGrid.height;
    if (grid.options.showToolbarPanel) mainHeight -= 25;
    if (grid.options.showGroupPanel) mainHeight -= 33; // panel80
    if (grid.options.showSortPanel) mainHeight -= 33; // panel90
    //if (grid.options.showFilterPanel) mainHeight -= grid.rowHeight * 2; // panel70

    main.style.height = `${mainHeight}px`;

    // header : group21, group22 group20
    let rectTable21 = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table').getBoundingClientRect();
    let rectTable22 = document.querySelector(selector + ' .tbs-grid-panel22 .tbs-grid-table').getBoundingClientRect();

    // Consider hidden columns
    let rectTable20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
    let height = parseInt(rectTable20.height);
    let fixedColumnsWidth = grid.classScroll.getFixedColumnsWidth();
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      group21.style.left = '0px';
      group21.style.top = '0px';
      group21.style.bottom = height + 'px';
      group21.style.width = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
      group21.style.height = height + 'px';
      group20.style.left = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
      group20.style.height = height + 'px';
      panel22.style.left = parseInt(rectTable21.width) + 'px';
    } else if (grid.fixedColumnIndex != -1) {
      group21.style.left = '0px';
      group21.style.top = '0px';
      group21.style.bottom = height + 'px';
      group21.style.width = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
      group21.style.height = height + 'px';
      group20.style.left = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
      group20.style.height = height + 'px';
      panel22.style.left = parseInt(rectTable21.width) + 'px';
      panel22.style.width = parseInt(fixedColumnsWidth) + 'px';
      panel22.style.height = height + 'px';
    } else {
      group21.style.left = '0px';
      group21.style.top = '0px';
      group21.style.bottom = height + 'px';
      group21.style.width = parseInt(rectTable21.width) + 'px';
      group21.style.height = height + 'px';
      group20.style.left = parseInt(rectTable21.width) + 'px';
      group20.style.height = height + 'px';
      panel22.style.width = '0px';
      panel22.style.height = '0px';
    }
    // Filter panel
    if (grid.options.showFilterPanel) {
      let rectTable71 = document.querySelector(selector + ' .tbs-grid-panel71 .tbs-grid-table').getBoundingClientRect();
      let rectTable72 = document.querySelector(selector + ' .tbs-grid-panel72 .tbs-grid-table').getBoundingClientRect();
      let rectTable70 = document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').getBoundingClientRect();
      if (grid.fixedColumnIndex != -1) {
        group71.style.top = height + 'px';
        group71.style.width = group21.style.width;
        group71.style.height = parseInt(rectTable70.height) + 'px';
        group70.style.top = height + 'px';
        group70.style.left = group21.style.width;
        group70.style.height = parseInt(rectTable70.height) + 'px';
        panel72.style.left = panel22.style.left;
        panel72.style.width = panel22.style.width;
        panel72.style.height = parseInt(rectTable70.height) + 'px';
      } else {
        group71.style.top = height + 'px';
        group71.style.width = group21.style.width;
        group71.style.height = parseInt(rectTable70.height) + 'px';
        group70.style.top = height + 'px';
        group70.style.left = group21.style.width;
        group70.style.height = parseInt(rectTable70.height) + 'px';
        panel72.style.width = '0px';
        panel72.style.left = '0px';
        panel72.style.height = '0px';
      }
      height += parseInt(group70.style.height);
    }
    // summary top : group41, group42, group40
    if (grid.top_column_table.count() > 0) {
      let rectTable41 = document.querySelector(selector + ' .tbs-grid-panel41 .tbs-grid-table').getBoundingClientRect();
      let rectTable42 = document.querySelector(selector + ' .tbs-grid-panel42 .tbs-grid-table').getBoundingClientRect();
      let rectTable40 = document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').getBoundingClientRect();
      if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
        group41.style.top = height + 'px';
        group41.style.width = group21.style.width;
        group41.style.height = parseInt(rectTable40.height) + 'px';
        group40.style.top = height + 'px';
        group40.style.left = group21.style.width;
        group40.style.height = parseInt(rectTable40.height) + 'px';
        panel42.style.left = panel22.style.left;
        panel42.style.width = panel22.style.width;
        panel42.style.height = parseInt(rectTable40.height) + 'px';
        panel40.style.left = panel20.style.left;
      } else if (grid.fixedColumnIndex != -1) {
        group41.style.top = height + 'px';
        group41.style.width = group21.style.width;
        group41.style.height = parseInt(rectTable40.height) + 'px';
        group40.style.top = height + 'px';
        group40.style.left = group21.style.width;
        group40.style.height = parseInt(rectTable40.height) + 'px';
        panel42.style.left = panel22.style.left;
        panel42.style.width = panel22.style.width;
        panel42.style.height = parseInt(rectTable40.height) + 'px';
        panel40.style.left = panel20.style.left;
      } else {
        group41.style.top = height + 'px';
        group41.style.width = group21.style.width;
        group41.style.height = parseInt(rectTable40.height) + 'px';
        group40.style.top = height + 'px';
        group40.style.left = group21.style.width;
        group40.style.height = parseInt(rectTable40.height) + 'px';
        panel42.style.width = '0px';
        panel40.style.left = '0px';
        panel42.style.height = '0px';
      }
      height += parseInt(rectTable40.height);
    }
    // frozen row : group61, group62, group60
    if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
      group61.style.top = height + 'px';
      group61.style.left = group21.style.left;
      group61.style.width = group21.style.width;
      group61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      group60.style.top = height + 'px';
      group60.style.left = group20.style.left;
      group60.style.width = group20.style.width;
      group60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel61.style.width = panel21.style.width;
      panel62.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel62.style.width = panel22.style.width;
      panel62.style.left = panel22.style.left;
      panel60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel60.style.width = group20.style.width;
      height += grid.fixedRowCount * grid.rowHeight;
    } else if (grid.fixedRowIndex != -1) {
      let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
      let rectTable61 = document.querySelector(selector + ' .tbs-grid-panel61 .tbs-grid-table').getBoundingClientRect();
      group61.style.top = height + 'px';
      group61.style.left = group21.style.left;
      group61.style.width = group21.style.width;
      group61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      group60.style.top = height + 'px';
      group60.style.left = group20.style.left;
      group60.style.width = group20.style.width;
      group60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
      panel60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

      //panel60.style.width  = group20.style.width;

      height += grid.fixedRowCount * grid.rowHeight;
    }
    // content : group31, group32, group30
    if (grid.fixedRowIndex != -1) {
      let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
      let rectTable32 = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table').getBoundingClientRect();
      let rectTable30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').getBoundingClientRect();
      group31.style.top = height + 'px';
      group30.style.top = height + 'px';
      group31.style.width = group21.style.width;
      group31.style.height = parseInt(rectTable30.height) + 'px';
      group30.style.left = group21.style.width;
      //group30.style.height = parseInt(rectTable30.height) + 'px';

      panel32.style.left = panel22.style.left;
      panel32.style.width = panel22.style.width;
      panel40.style.left = panel20.style.left;

      // let scroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
      // scroll.style.top = group31.style.top;
      // let scroll6 = document.querySelector(selector + ' .tbs-grid-vertical-scroll6');
      // scroll6.style.height = height + 'px';
      // scroll6.style.display = '';
    } else if (grid.fixedColumnIndex != -1) {
      let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
      let rectTable32 = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table').getBoundingClientRect();
      let rectTable30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').getBoundingClientRect();
      group31.style.top = height + 'px';
      group31.style.width = group21.style.width;
      group30.style.top = height + 'px';
      group30.style.left = group21.style.width;
      panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
      panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
      panel32.style.width = '0px';
      panel30.style.left = '0px';
      panel32.style.left = panel22.style.left;
      panel32.style.width = panel22.style.width;
    } else {
      group31.style.top = height + 'px';
      group31.style.width = group21.style.width;
      group30.style.top = height + 'px';
      group30.style.left = group21.style.width;
      panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
      panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
      panel32.style.width = '0px';
      panel30.style.left = '0px';
    }
    // summary footer : group51, group52, group50
    if (grid.footer_column_table.count() > 0) {
      if (grid.fixedColumnIndex != -1 && grid.fixedRowIndex != -1) {
        let rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
        group31.style.bottom = parseInt(rectTable50.height) + 'px';
        group30.style.bottom = parseInt(rectTable50.height) + 'px';
        group51.style.width = group21.style.width;
        group51.style.height = parseInt(rectTable50.height) + 'px';
        group50.style.left = group21.style.width;
        group50.style.height = parseInt(rectTable50.height) + 'px';
        panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
        panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
        panel52.style.left = panel22.style.left;
      } else if (grid.fixedColumnIndex != -1) {
        let rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
        group31.style.bottom = parseInt(rectTable50.height) + 'px';
        group30.style.bottom = parseInt(rectTable50.height) + 'px';
        group51.style.width = group21.style.width;
        group51.style.height = parseInt(rectTable50.height) + 'px';
        group50.style.left = group21.style.width;
        group50.style.height = parseInt(rectTable50.height) + 'px';
        panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
        panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
        panel52.style.left = parseInt(rectTable21.width) + 'px';
        panel52.style.width = parseInt(fixedColumnsWidth) + 'px';
        panel52.style.height = parseInt(rectTable50.height) + 'px';
      } else {
        let rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
        group51.style.width = group21.style.width;
        group51.style.height = parseInt(rectTable50.height) + 'px';
        group50.style.left = group21.style.width;
        group50.style.height = parseInt(rectTable50.height) + 'px';
        group31.style.bottom = parseInt(rectTable50.height) + 'px';
        group30.style.bottom = parseInt(rectTable50.height) + 'px';
        panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
        panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
        panel52.style.width = '0px';
        panel50.style.left = '0px';
        panel52.style.height = '0px';
      }
    }
    grid.classScroll.setPageRowCount();
  }
  setBarPosition(type, topRowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (type == grid.code_horizontal) {
      let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
      let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
      let railSize = grid.horizontalScroll.railSize;
      let hiddenSize = grid.horizontalScroll.hiddenSize;
      let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
      xBar.style.left = curLeft / hiddenSize * railSize + 'px';
    } else if (type == grid.code_vertical) {
      topRowIndex = grid.null(topRowIndex) ? 0 : topRowIndex;
      if (topRowIndex == 0) document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = '0px';else if (grid.isLastTopRowIndex(topRowIndex)) {
        document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = grid.verticalScroll.railSize + 'px';
      } else {
        let styleTop = parseInt(Math.ceil(topRowIndex / grid.verticalScroll.moveCount));
        //console.log(`styleTop ${styleTop} topRowIndex ${topRowIndex}`);
        document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = styleTop + 'px';
      }
    }
  }
  setBarPositionByDirection(type, rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    if (type == 'up') {
      let displayTopRowIndex = grid.getFirstDisplayRowIndex();
      let trTopIndex = grid.getFirstRowIndex() - 1;
      if (trTopIndex < 0) return false;
      //-------------------------------------------------------------
      grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
      grid.classPanel30.setDataPanel(trTopIndex);
      //---------------------------------------------------------------
      return trTopIndex;
    }
    if (type == 'down') {
      let displayTopRowIndex = grid.getFirstDisplayRowIndex();
      let trTopIndex = 0;
      if (rowIndex == undefined) trTopIndex = grid.getFirstRowIndex() + 1;else trTopIndex = rowIndex;
      if (grid.pageRowCount > grid.pageIntRowCount) {
        if (trTopIndex > grid.view_table.count() - grid.pageRowCount + 1) return null;
      } else {
        if (trTopIndex > grid.view_table.count() - grid.pageRowCount) return null;
      }
      //-------------------------------------------------------------
      grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
      grid.classPanel30.setDataPanel(trTopIndex);
      //-------------------------------------------------------------
      return trTopIndex;
    }
    if (type == 'right') {
      let hiddenSize = grid.horizontalScroll.hiddenSize;
      let moveWidth = 15;
      let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
      let divHeaderMove = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
      let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      let sum = document.querySelector(selector + ' .tbs-grid-panel40');
      let footer = document.querySelector(selector + ' .tbs-grid-panel50');
      if (divHeaderMove.style.left == -1 * hiddenSize + 'px') return;
      let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
      let railSize = grid.horizontalScroll.railSize;
      let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
      if (divContentMove.getBoundingClientRect().width <= divContent.getBoundingClientRect().width) return;
      let sLeft;
      if (curLeft + moveWidth >= hiddenSize) sLeft = -1 * hiddenSize + 'px';else sLeft = divHeaderMove.style.left.replace('px', '') - moveWidth + 'px';
      grid.classScroll.setContentPanelLeft(sLeft);
      grid.classScroll.setBarPosition(grid.code_horizontal);
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }
    if (type == 'left') {
      let moveWidth = 15;
      let divHeaderMove = document.querySelector(selector + ' .tbs-grid-panel20  .tbs-grid-table');
      let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
      let sum = document.querySelector(selector + ' .tbs-grid-panel40');
      let footer = document.querySelector(selector + ' .tbs-grid-panel50');
      if (divHeaderMove.style.left == '0px') return false;
      let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
      let railSize = grid.horizontalScroll.railSize;
      let hiddenSize = grid.horizontalScroll.hiddenSize;
      let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
      let sLeft;
      if (curLeft - moveWidth <= 0) sLeft = '0px';else sLeft = -1 * curLeft + moveWidth + 'px';
      grid.classScroll.setContentPanelLeft(sLeft);
      grid.classScroll.setBarPosition(grid.code_horizontal);
      grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }
  }
  getContentPanelLeft(value) {
    let selector = this.selector;
    const grid = this.grid;
    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
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
    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
    let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
    let panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
    let panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
    // let panel60= document.querySelector(selector + ' .tbs-grid-panel60');
    let panel70 = document.querySelector(selector + ' .tbs-grid-panel70');
    if (grid.notNull(panel20.childNodes[0])) panel20.childNodes[0].style.left = value;
    if (grid.notNull(panel30.childNodes[0])) panel30.childNodes[0].style.left = value;
    if (grid.notNull(panel40.childNodes[0])) panel40.childNodes[0].style.left = value;
    if (grid.notNull(panel50.childNodes[0])) panel50.childNodes[0].style.left = value;
    // if(grid.notNull(panel60.childNodes[0])) panel60.childNodes[0].style.left = value;
    if (grid.notNull(panel70.childNodes[0])) panel70.childNodes[0].style.left = value;
  }
  setContentPanelLeftMove(value) {
    let selector = this.selector;
    const grid = this.grid;
    let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
    let left = parseInt(table20.style.left, 10) + value + 'px';
    grid.classScroll.setContentPanelLeft(left);
  }
  setColumnWidth(panelName, colIndex, value) {
    let selector = this.selector;
    const grid = this.grid;
    if (panelName == 'panel22') grid.classScroll.setColumnWidth22(panelName, colIndex, value);else grid.classScroll.setColumnWidth20(panelName, colIndex, value);
  }
  setColumnWidth20(panelName, colIndex, value) {
    let selector = this.selector;
    const grid = this.grid;
    let colList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
    let colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
    // let colList5 = document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-table thead th');
    let colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
    let colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
    let colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
    let nWidth = parseInt(value) + 'px';
    grid.column_table.data[colIndex][tbsGridNames.column.width] = parseInt(value, 10);
    colList[colIndex].style.width = nWidth;
    colList2[colIndex].style.width = nWidth;
    if (grid.fixedRowIndex != -1) colList5[colIndex].style.width = nWidth;
    if (grid.top_table.count() > 0) colList3[colIndex].style.width = nWidth;
    if (grid.footer_table.count() > 0) colList4[colIndex].style.width = nWidth;
    if (grid.options.showFilterPanel) colList7[colIndex].style.width = nWidth;
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
  }
  setColumnWidth22(panelName, colIndex, value) {
    let selector = this.selector;
    const grid = this.grid;
    let colList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
    let colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
    let colList5 = document.querySelectorAll(selector + ' .tbs-grid-panel62 .tbs-grid-table thead th');
    let colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
    let colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');
    let colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel72 .tbs-grid-table thead th');
    let nWidth = parseInt(value) + 'px';
    grid.column_table.data[colIndex][tbsGridNames.column.width] = parseInt(value, 10);
    colList[colIndex].style.width = nWidth;
    colList2[colIndex].style.width = nWidth;
    if (grid.fixedRowIndex != -1) colList5[colIndex].style.width = nWidth;
    if (grid.top_column_table.count() > 0) colList3[colIndex].style.width = nWidth;
    if (grid.footer_column_table.count() > 0) colList4[colIndex].style.width = nWidth;
    if (grid.options.showFilterPanel) colList7[colIndex].style.width = nWidth;
    grid.classScroll.setPanelSize();
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
  }
  getFixedColumnsWidth() {
    let selector = this.selector;
    const grid = this.grid;
    let result = 0;
    for (let x = 0; x <= grid.fixedColumnIndex; x++) {
      let column = grid.column_table.data[x];
      if (column[tbsGridNames.column.visible]) result += Number(column[tbsGridNames.column.width]);
    }
    //console.log(result);
    return result;
  }
  setAllColumnWidth(arr) {
    let selector = this.selector;
    const grid = this.grid;
    let thList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
    let thList30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
    let thList40 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
    let thList50 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
    // let thList60 = document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-table thead th');
    let thList70 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
    for (let x = 0, len = grid.column_table.count(); x < len; x++) {
      grid.column_table.data[x].width = arr[x];
      let nWidth = arr[x] + 'px';
      thList20[x].style.width = nWidth;
      thList30[x].style.width = nWidth;
      if (grid.top_column_table.count() > 0) thList40[x].style.width = nWidth;
      if (grid.footer_columntable.data.length > 0) thList50[x].style.width = nWidth;
      if (grid.fixedRowIndex != -1) thList60[x].style.width = nWidth;
      if (grid.options.showFilterPanel) thList70[x].style.width = nWidth;
    }
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
  }
  setPageRowCount(panelName = '') {
    let selector = this.selector;
    const grid = this.grid;
    let rowHeight = grid.rowHeight;
    let contentHeight = parseInt(document.querySelector(selector + ' .tbs-grid-group30').getBoundingClientRect().height);
    let pageRowCount = contentHeight / rowHeight > parseInt(contentHeight / rowHeight) ? parseInt(contentHeight / rowHeight) + 1 : parseInt(contentHeight / rowHeight);
    let pageIntRowCount = Math.floor(contentHeight / rowHeight);
    grid.pageRowCount = pageRowCount;
    grid.pageIntRowCount = pageIntRowCount;
  }
}

/***/ }),

/***/ 660:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ TbsGridScroll; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridScroll {
  /**
   * ScrollName : verticalScroll, horizontalScroll, verticalScroll60, horizontalScroll32
   *
   */
  constructor(grid, scrollName) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.scrollName = scrollName;
    this.barSize = 0;
    this.railSize = 0;

    // vertical option
    this.moveCount = 0; // table Rows Count per 1px
    this.margin = '14px';

    // horizontal option
    this.hiddenSize = 0;
    this.panelName;
    this.type; //vertical, horizontal
  }

  /* Set Scroll */
  setScroll(type) {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    if (type == grid.code_horizontal) scroll.setHorizontalScroll();else if (type == grid.code_vertical) scroll.setVerticalScroll();
  }
  setHorizontalScroll() {
    let selector = this.selector;
    const grid = this.grid;
    let classScroll = this;
    let type = grid.code_horizontal;
    let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
    let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
    let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
    let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
    let rectPanel20 = panel20.getBoundingClientRect();
    let rectTable20 = table20.getBoundingClientRect();
    if (rectTable20.width > rectPanel20.width) classScroll.showScroll(type);else classScroll.hideScroll(type);
    xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll'); // non-live
    if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
  }
  setVerticalScroll() {
    let selector = this.selector;
    const grid = this.grid;
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
      } else if (grid.pageRowCount > grid.pageIntRowCount) {
        if (dataLength >= pageRowCount) {
          yScroll.style.display = '';
          scrollBox.style.display = '';
          wrap.style.marginRight = grid.verticalScroll.margin;
          scroll.setScrollSize(type);
        } else {
          scroll.hideScroll(type);
        }
      } else {
        if (dataLength > pageRowCount) {
          yScroll.style.display = '';
          scrollBox.style.display = '';
          wrap.style.marginRight = grid.verticalScroll.margin;
          scroll.setScrollSize(type);
        } else {
          scroll.hideScroll(type);
        }
      }
    } else {
      if (dataLength <= grid.pageIntRowCount) {
        scroll.hideScroll(type);
      } else if (grid.pageRowCount > grid.pageIntRowCount) {
        if (dataLength >= pageRowCount) {
          yScroll.style.display = '';
          scrollBox.style.display = '';
          wrap.style.marginRight = grid.verticalScroll.margin;
          scroll.setScrollSize(type);
        } else {
          scroll.hideScroll(type);
        }
      } else {
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
    const grid = this.grid;
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
    } else if (type == grid.code_vertical) {}
  }
  hideScroll(type) {
    let selector = this.selector;
    const grid = this.grid;
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
    } else if (type == grid.code_vertical) {
      let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
      let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
      let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
      yScroll.style.display = 'none';
      if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
    }
  }
  setScrollSize(type) {
    let selector = this.selector;
    const grid = this.grid;
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
    } else if (type == grid.code_vertical) {
      let barSize = scroll.getBarSize(type);
      let railSize = scroll.getRailSize(type, barSize);
      let moveCount = scroll.getMoveCount(type, railSize);
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
    const grid = this.grid;
    let scroll = this;
    if (type == grid.code_horizontal) return scroll.getHorizontalBarSize();else if (type == grid.code_vertical) return scroll.getVerticalBarSize();
  }
  getHorizontalBarSize() {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    let barSize = parseInt(panel20.clientWidth / panel20.childNodes[0].childNodes[0].clientWidth * xWrap.clientWidth);
    if (barSize > xWrap.clientWidth) barSize = xWrap.clientWidth;else if (barSize < 35) barSize = 35;
    if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) barSize = xWrap.clientWidth;
    return barSize;
  }
  getVerticalBarSize() {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    if (grid.fixedRowIndex != -1) {
      let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
      let rowCount = grid.getRowCount() - (grid.fixedRowIndex + 1);
      let barSize = yWrap.clientHeight - rowCount * 6.3;
      if (barSize < 50) barSize = 50;
      return barSize;
    } else {
      let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
      let rowCount = grid.getRowCount();
      let barSize = yWrap.clientHeight - rowCount * 6.3;
      if (barSize < 50) barSize = 50;
      return barSize;
    }
  }

  /* railSize */
  getRailSize(type, barSize) {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    if (type == grid.code_horizontal) return scroll.getHorizontalRailSize(barSize);else if (type == grid.code_vertical) return scroll.getVerticalRailSize(barSize);
  }
  getHorizontalRailSize(barSize) {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
    return xWrap.clientWidth - barSize;
  }
  getVerticalRailSize(barSize) {
    let selector = this.selector;
    const grid = this.grid;
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
    const grid = this.grid;
    let scroll = this;
    let moveCount = 0;
    let pageIntRowCount = grid.pageIntRowCount;
    let pageRowCount = grid.pageRowCount;
    if (grid.fixedRowIndex != -1) {
      let rowCount = grid.getRowCount() - (grid.fixedRowIndex + 1);
      if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);else moveCount = Number((rowCount - pageRowCount) / railSize); // 50 , 10 / 1000 px
    } else {
      let rowCount = grid.getRowCount();
      if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);else moveCount = Number((rowCount - pageRowCount) / railSize);
    }
    return moveCount;
  }

  /* hiddenSize */
  getHiddenSize(type) {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
    let hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16; // add size( default 14px / add 2px)
    if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) hiddenSize = 0;
    return hiddenSize;
  }

  /* barWidth */
  getBarWidth(type, barSize) {
    let selector = this.selector;
    const grid = this.grid;
    let scroll = this;
    let wrapRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap').getBoundingClientRect();
    let xBarRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').getBoundingClientRect();
    let barWidth = barSize;
    if (xBarRect.right > wrapRect.right) barWidth = barSize - (xBarRect.right - wrapRect.right);
    if (xBarRect.width >= wrapRect.width) barWidth = barSize; // - (xBarRect.right - wrapRect.right);
    return barWidth + 'px';
  }
}

/***/ }),

/***/ 633:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ TbsGridSort; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridSort {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
    this.sortColumns = [];
    this.options = {};
  }
  setSortData(data, sortColumns) {
    /**
     * @function tbs_setSortData
     *
     * @param sortColumns : [{ name : , order : }, ...]
     */
    let selector = this.selector;
    const grid = this.grid;
    let len = sortColumns.length;
    data.sort((a, b) => {
      // a : The first element
      // b : The second element
      for (let i = 0; i < len; i++) {
        let sortColumn = sortColumns[i];
        let name = sortColumn[tbsGridNames.column.name];
        let column = grid.classColumn.getColumn(name);
        let type = column[tbsGridNames.column.type];
        if (sortColumn['order'] == 'asc') {
          if (type == tbsGridTypes.CellType.number) {
            let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
            let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
            if (x < y) return -1;else if (x > y) return 1;
          } else {
            if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
          }
        } else if (sortColumn['order'] == 'desc') {
          if (type == tbsGridTypes.CellType.number) {
            let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
            let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
            if (x < y) return 1;else if (x > y) return -1;
          } else {
            if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
          }
        }
      }
    });
  }
  getSortRow(columnName) {
    return this.grid.sort_column_table.selectRow(tbsGridNames.column.name, columnName);
  }
  changeSortButtonOrder(name, text, order, targetIndex) {
    let selector = this.selector;
    const grid = this.grid;

    /* targetIndex <> name Index */
    let sourceIndex = null;
    for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
      let dataRow = grid.sort_column_table.data[i];
      if (name == dataRow[tbsGridNames.column.name] && i == targetIndex) return;else if (name == dataRow[tbsGridNames.column.name]) {
        sourceIndex = i;
        break;
      }
    }

    /* new sort data */
    let dataRow = {};
    dataRow[tbsGridNames.column.name] = name;
    dataRow[tbsGridNames.column.order] = grid.sort_column_table.selectValue(sourceIndex, tbsGridNames.column.order);

    /* update source column */
    grid.sort_column_table.updateByRowIndex(sourceIndex, tbsGridNames.column.name, '_temp_sort');

    /* create sort data */
    if (grid.null(targetIndex)) grid.sort_column_table.insert(dataRow);else grid.sort_column_table.insertBefore(dataRow, targetIndex);

    /* remove source */
    sourceIndex = grid.sort_column_table.selectRowIndex(tbsGridNames.column.name, '_temp_sort');
    grid.sort_column_table.remove(sourceIndex);
    let button = grid.classSort.createSortButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);else bar.append(button);
    grid.classSort.getSortButtonList();
    grid.classSort.toggleSortPlaceHolder();
    grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
  }
  addSortButton(name, text, order, targetIndex) {
    let selector = this.selector;
    const grid = this.grid;

    // add sortColumn in grid.sort_data
    // already existing column
    let dataRows = grid.sort_column_table.select(tbsGridNames.column.name, name, 1);
    if (dataRows.length > 0) return;
    let dataRow = {};
    dataRow[tbsGridNames.column.name] = name;
    dataRow[tbsGridNames.column.order] = order;

    /* create sort data */
    console.log(name);
    if (grid.null(targetIndex)) grid.sort_column_table.insert(dataRow);else grid.sort_column_table.insertBefore(dataRow, targetIndex);

    // add button in group panel
    let button = grid.classSort.createSortButton(name);
    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);else bar.append(button);
    grid.classSort.toggleSortPlaceHolder();
    grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
  }
  removeSortButton(element) {
    let selector = this.selector;
    const grid = this.grid;

    // remove sortColumn in grid.sort_column_table.data
    let name = element.dataset.name;
    console.log('name :' + name);
    let rowIndex = grid.sort_column_table.selectRowIndex(tbsGridNames.column.name, name);
    console.log('rowIndex :' + rowIndex);
    grid.sort_column_table.remove(rowIndex);

    // remove button in group panel
    let button = element.parentNode;
    button.remove();
    grid.classSort.toggleSortPlaceHolder();
    if (grid.grid_mode == tbsGridTypes.GridMode.group) {
      grid.setData(grid.view_table.data, null, false);
    } else {
      if (grid.isSortableColumn()) {
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        grid.classRange.removeRange(0, -1);
        grid.classPanel30.setDataPanel(0);
      }
    }
  }
  removeSortButtonList() {
    let selector = this.selector;
    const grid = this.grid;
    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
    for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
  }
  getSortButtonList() {
    let selector = this.selector;
    const grid = this.grid;
    grid.classSort.removeSortButtonList();
    let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
    for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
      let dataRow = grid.sort_column_table.data[i];
      let columnName = dataRow[tbsGridNames.column.name];
      let button = grid.classSort.createSortButton(columnName);
      let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
      if (grid.null(bar)) return;
      bar.append(button);
    }
    grid.classSort.toggleSortPlaceHolder();
  }
  createSortButton(columnName) {
    let selector = this.selector;
    const grid = this.grid;
    let column = grid.classColumn.getColumn(columnName);
    let sortColumn = grid.classSort.getSortRow(columnName);
    let order = sortColumn[tbsGridNames.column.order];
    let orderChar = '';
    if (order == 'asc') orderChar = '▲';else if (order == 'desc') orderChar = '▼';else orderChar = '';
    let text = document.createElement('span');
    text.classList.add('tbs-grid-panel-button-text');
    text.textContent = column.header[tbsGridNames.column.text] + orderChar;
    text.dataset.name = columnName;
    let icon = document.createElement('span');
    icon.classList.add('tbs-grid-panel-button-icon');
    icon.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';
    icon.dataset.name = columnName;
    let button = document.createElement('div');
    button.classList.add('tbs-grid-panel-button');
    button.dataset.name = columnName;
    button.append(text);
    button.append(icon);
    return button;
  }
  toggleSortPlaceHolder() {
    let selector = this.selector;
    const grid = this.grid;
    let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
    let span = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
    if (buttons.length > 0) span.style.display = 'none';else span.style.display = '';
    if (buttons.length == 0) {
      //grid.classColumn.setColumn('group_column', 'visible', false);
      // grid.apply();
    } else {
      //grid.classColumn.setColumn('group_column', 'visible', true);
      // grid.apply();
    }
    grid.classControl.after_setColumnVisible();
  }
  showSortPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.setOption('showSortPanel', true);
    let panel = document.querySelector(selector + ' .tbs-grid-panel90');
    panel.classList.remove('tbs-grid-hide');
    panel.classList.add('tbs-grid-show');
    grid.classScroll.setPanelSize();
    //grid.classSort.initSortData();
    //grid.classControl.after_showSortrPanel();
    grid.classSort.getSortButtonList();
    grid.apply();
  }
  hideSortPanel() {
    let selector = this.selector;
    const grid = this.grid;
    grid.sort_column_table.remove();
    grid.setOption('showSortPanel', false);
    let panel = document.querySelector(selector + ' .tbs-grid-panel90');
    panel.classList.remove('tbs-grid-show');
    panel.classList.add('tbs-grid-hide');
    grid.classScroll.setPanelSize();
    grid.apply();
    //grid.classSort.initSortData();
    //grid.classControl.after_hideSortPanel();
  }
  initSortData() {
    let selector = this.selector;
    const grid = this.grid;
    grid.sort_column_table.remove();
    grid.classSort.getSortButtonList();
    grid.view_table.remove();
    grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));
    if (grid.options.showFilterPanel) {
      grid.classFilter.filters();
      grid.apply();
    }
    if (grid.grid_mode == tbsGridTypes.GridMode.group) {
      grid.setData(grid.view_table.data, null, false);
    } else {
      grid.classRange.removeRange(0, -1);
      grid.apply();
    }
  }
}

/***/ }),

/***/ 149:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ TbsGridTable; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridTable {
  constructor(grid) {
    this.grid = grid;
  }
  createTable(panelName, startRowIndex, rowCount) {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    const table = grid.classDom.createTable();

    /**
     * table head
     */

    this.createTableHead(panelName, table);

    /**
     * table body
     */

    let tbody = document.createElement('tbody');
    for (let rowIndex = startRowIndex; rowIndex < rowCount; rowIndex++) this.createTableRow(panelName, tbody);
    table.appendChild(tbody);
    document.querySelector(selector + ' .tbs-grid-' + panelName).innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-' + panelName).appendChild(table);
  }
  createTableHead(panelName, table) {
    const grid = this.grid;
    let s = panelName.substring(6);
    if (s == '1') this.createTableHead1(panelName, table);else if (s == '2') this.createTableHead2(panelName, table);else this.createTableHead0(panelName, table);
  }
  createTableHead1(panelName, table) {
    const grid = this.grid;
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for (let i = 0, len = grid.info_table.count(); i < len; i++) {
      let dataRow = grid.info_table.data[i];
      let th = document.createElement('th');
      th.style.width = dataRow[tbsGridNames.column.width] + 'px';
      th.style.display = dataRow[tbsGridNames.column.visible] ? '' : 'none';
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
  }
  createTableHead2(panelName, table) {
    return this.createTableHead0(panelName, table);
  }
  createTableHead0(panelName, table) {
    let selector = '#' + this.grid.gridId;
    const grid = this.grid;
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let sumWidth = 0;
    for (let i = 0, len = grid.column_table.count(); i < len; i++) {
      let column = grid.column_table.data[i];
      let th = document.createElement('th');
      th.style.width = column[tbsGridNames.column.visible] == true ? parseInt(column[tbsGridNames.column.width]) + 'px' : '0px';
      th.style.display = column[tbsGridNames.column.visible] == true ? '' : 'none';
      sumWidth += grid.column_table.data[i][tbsGridNames.column.visible] == true ? parseInt(column[tbsGridNames.column.width]) : 0;
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    return sumWidth;
  }
  createTableRow(panelName, tbody) {
    let selector = '#' + this.gridId;
    const grid = this.grid;
    let tr = document.createElement('tr');
    if (panelName == 'panel20' || panelName == 'panel22') {
      tr.style = 'height:' + grid.headerRowHeight + 'px';
      for (let i = 0, len = grid.headerColumnTable[0].length; i < len; i++) {
        let td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.display = 'none';
        let div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        td.appendChild(div);
        let span = document.createElement('span');
        span.classList.add('tbs-grid-cell-span');
        div.appendChild(span);
        let spanSort = document.createElement('span');
        spanSort.classList.add('tbs-grid-cell-span-sort');
        div.appendChild(spanSort);
        let reSizeDiv = document.createElement('div');
        reSizeDiv.classList.add('tbs-grid-cell-resize');
        let sortDiv = document.createElement('div');
        sortDiv.classList.add('tbs-grid-cell-sort');
        td.appendChild(div);
        td.appendChild(reSizeDiv);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    } else if (panelName.substring(6) == '1') {
      tr.style = 'display:;height:' + grid.rowHeight + 'px';
      for (let i = 0; i < grid.info_table.count(); i++) {
        let column = grid.info_table.data[i];
        let td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.width = column[tbsGridNames.column.width] + 'px';
        td.dataset.name = column[tbsGridNames.column.name];
        td.dataset.cellIndex = i;
        let div = grid.classDom.createElementCellDiv();
        td.appendChild(div);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    } else {
      if (panelName == 'panel40' || panelName == 'panel50' || panelName == 'panel70') {
        tr.style = 'display:;height:' + grid.rowHeight + 'px';
      } else if (panelName == 'panel22' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
        tr.style = 'display:;height:' + grid.rowHeight + 'px';
      } else {
        tr.style = 'display:none;height:' + grid.rowHeight + 'px';
      }
      for (let i = 0; i < grid.column_table.count(); i++) {
        let column = grid.column_table.data[i];
        let td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.width = column[tbsGridNames.column.width] + 'px';
        if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62' || panelName == 'panel72') {
          td.style.display = 'none';
        }
        td.dataset.name = column[tbsGridNames.column.name];
        td.dataset.cellIndex = i;
        let div = grid.classDom.createElementCellDiv();
        let spanText = grid.classDom.createElementCellText();
        div.appendChild(spanText);
        td.appendChild(div);
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }
  updateTableRows(panelName, rowCount) {
    let selector = '#' + this.grid.gridId;

    /**
     * table row add
     */

    const tbody = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' table tbody');
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) this.createTableRow(panelName, tbody);
  }
}

/***/ }),

/***/ 378:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ TbsGridTop; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridTop {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  setTopColumns(columns) {
    const grid = this.grid;
    columns.map(column => {
      if (grid.null(column[tbsGridNames.column.align])) column[tbsGridNames.column.align] = 'center';
      grid.top_column_table.insert(column);
    });
  }
  setTopData() {
    const grid = this.grid;
    if (grid.top_column_table.count() == 0) return;
    let topColumns = grid.top_column_table.data;
    let dataRow = {};
    let columns = grid.column_table.data;
    for (let x = 0, len = columns.length; x < len; x++) {
      let column = columns[x];
      let columnName = column[tbsGridNames.column.name];
      dataRow[columnName] = null;
    }
    grid.top_table.insert(dataRow);

    /* get sum, avg */
    for (let x = 0, len2 = grid.top_column_table.count(); x < len2; x++) {
      let topColumn = grid.top_column_table.data[x];
      let columnName = topColumn[tbsGridNames.column.name];
      if (grid.isColumnTypeNumber(columnName)) {
        let sumType = topColumn[tbsGridNames.column.summaryType];
        let result = null;
        if (sumType == 'sum') result = grid.classPanel30.getSum(columnName);else if (sumType == 'avg') result = grid.classPanel30.getAvg(columnName);
        grid.top_table.updateByRowIndex(0, columnName, grid.classPanel30.getSum(columnName));
      }
    }
  }
  setTopValue(rowIndex, columnName, value) {
    const grid = this.grid;
    let column = grid.column_table.selectRow(tbsGridNames.column.name, columnName);
    let result = grid.getFormat(column, value);
    grid.top_table.updateByRowIndex(rowIndex, columnName, result.value);
  }
}

/***/ }),

/***/ 909:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ TbsGridTree; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
class TbsGridTree {
  constructor(grid) {
    this.grid = grid;
    this.selector = '#' + grid.gridId;
  }
  createTreeData() {
    const grid = this.grid;
    grid.tree_table.remove();
    const fn_getChildrenRowIds = function (row) {
      row[tbsGridNames.column.children] = [];
      for (let i = 0, len = grid.view_table.count(); i < len; i++) {
        let dataRow = grid.view_table.data[i];
        if (row[grid.options.treeItemName] == dataRow[grid.options.treeParentName]) {
          row[tbsGridNames.column.children].push(dataRow[tbsGridNames.column.rowId]);
        }
      }
    };
    const fn_setRelation = function (row, depth = 1) {
      fn_getChildrenRowIds(row);
      row[tbsGridNames.column.depth] = depth;
      grid.tree_table.insert(grid.copyJson(row));
      let arr = row[tbsGridNames.column.children];
      if (arr.length > 0) {
        for (let i = 0, len = grid.view_table.count(); i < len; i++) {
          let dataRow = grid.view_table.data[i];
          if (arr.indexOf(dataRow[tbsGridNames.column.rowId]) != -1) fn_setRelation(dataRow, depth + 1);
        }
      }
    };
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      let dataRow = grid.view_table.data[i];
      if (grid.options.treeRootValue == dataRow[grid.options.treeParentName]) {
        fn_setRelation(dataRow);
      }
    }
  }
  setTreeSortColumns(sortColumns) {
    const grid = this.grid;
    sortColumns.map(column => grid.sort_column_table.insert(grid.copyJson(column)));
  }
  setTreeData(data, openDepth = 0, isFirst = true) {
    let selector = this.selector;
    const grid = this.grid;
    if (grid.null(data) || data.length == 0) return;

    /* create source_data */
    if (isFirst == true) {
      grid.source_table.remove();
      for (let i = 0, len = data.length; i < len; i++) {
        let dataRow = data[i];
        let item = {};
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
          let column = grid.column_table.data[x];
          let columnName = column[tbsGridNames.column.name];
          let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
          item[columnName] = val;
        }
        grid.source_table.insert(item);
      }
    }
    grid.view_table.remove();
    grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

    /* Filter */
    grid.classFilter.filters();

    /* Soring */
    grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

    /* insert into tree_table */
    grid.tree_table.remove();
    grid.view_table.data.map(dataRow => grid.tree_table.insert(grid.copyJson(dataRow)));

    /* create tree data */
    grid.classTree.createTreeData();

    /* insert into view_table from tree_table */
    grid.view_table.remove();
    for (let i = 0, len = grid.tree_table.count(); i < len; i++) {
      let dataRow = grid.tree_table.data[i];
      dataRow[tbsGridNames.column.mode] = '';
      dataRow[tbsGridNames.column.isOpen] = false;
      for (let x = 0, len = grid.column_table.count(); x < len; x++) {
        let column = grid.column_table.data[x];
        let columnName = column[tbsGridNames.column.name];
        let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
        dataRow[columnName] = val;
      }
      grid.view_table.insert(grid.copyJson(dataRow));
    }

    /* Summary */
    // grid.classTree.getGroupSummary();

    /* create tree_table */
    grid.tree_table.remove();
    grid.view_table.data.map(dataRow => {
      let item = grid.copyJson(dataRow);
      item[tbsGridNames.column.isOpen] = false;
      grid.tree_table.insert(item);
    });

    // open depth
    if (grid.notNull(openDepth)) {
      for (let i = grid.view_table.count() - 1; i >= 0; i--) {
        let row = grid.view_table.data[i];
        let depth = row[tbsGridNames.column.depth];
        if (openDepth != 0 && depth > openDepth) grid.view_table.remove(i);
      }
    }
    document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
    if (grid.view_table.count() == 0) {
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
      grid.verticalScroll.setScroll(grid.code_vertical);
      grid.classPanel30.setDataPanel(0);
    } else {
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = grid.view_table.count();
      grid.verticalScroll.setScroll(grid.code_vertical);
      grid.classPanel30.setDataPanel(0);
      grid.classPanel40.setDataPanel();
      grid.classPanel50.setDataPanel();
    }
    if (grid.options[tbsGridNames.column.autoWidth] == true) grid.setColumnAutoWidth();
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
  }
  setTreeIcon(tableCell, rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let row = grid.getRow(rowIndex);
    let arrayChildren = row[tbsGridNames.column.children];
    let element = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (arrayChildren.length > 0) {
      let nextRow = grid.getRow(rowIndex + 1);
      if (grid.null(nextRow)) grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');else {
        if (nextRow[grid.options.treeParentName] == row[grid.options.treeItemName]) grid.classTree.toggleTreeIcon(rowIndex, element, 'open');else grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
      }
    } else grid.classTree.toggleTreeIcon(rowIndex, element);
  }
  toggleTreeIcon(rowIndex, element, type) {
    let selector = this.selector;
    const grid = this.grid;
    if (type == tbsGridNames.column.open) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_open.png)';else if (type == tbsGridNames.column.closed) element.style['backgroundImage'] = 'url(' + grid.options[tbsGridNames.option.imageRoot] + 'tree_closed.png)';else element.style['backgroundImage'] = '';
  }
  getTreeFlodingStatus(tableCell) {
    let selector = this.selector;
    const grid = this.grid;
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return null;
    if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return tbsGridNames.column.open;else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return tbsGridNames.column.closed;else return null;
  }
  setTreeFolding(tableCell) {
    let selector = this.selector;
    const grid = this.grid;
    let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
    let row = grid.getRow(rowIndex);
    let spanIcon = tableCell.querySelector('.tbs-grid-cell-div-icon');
    if (grid.null(spanIcon)) return;
    let folding = grid.classTree.getTreeFlodingStatus(tableCell);
    if (folding == tbsGridNames.column.open) grid.classTree.closeTreeRow(rowIndex);else if (folding == tbsGridNames.column.closed) grid.classTree.openTreeRow(rowIndex, false);
    grid.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
  }
  getTreeChildrenRows(folding, rowIndex, isAll = true) {
    // folding : open, closed
    let selector = this.selector;
    const grid = this.grid;
    let dataRows = grid.view_table.data;
    let resultRows = [];
    const fn_getChildrenRows = function (row, count) {
      if (Object.keys(row).length == 0) return;
      if (count > 1) resultRows.push(grid.copyJson(row));
      let arr = row[tbsGridNames.column.children];
      if (arr.length > 0) {
        //default : get first lower rows
        if (count == 1) {
          for (let i = 0, len = arr.length; i < len; i++) {
            let dataRow = grid.getTreeRowByRowId(arr[i]);
            fn_getChildrenRows(dataRow, count + 1);
          }
        } else {
          if (folding == tbsGridNames.column.open) {
            if (row[tbsGridNames.column.isOpen]) {
              for (let i = 0, len = arr.length; i < len; i++) {
                let dataRow = grid.getTreeRowByRowId(arr[i]);
                fn_getChildrenRows(dataRow, count + 1);
              }
            }
          } else {
            for (let i = 0, len = arr.length; i < len; i++) {
              let dataRow = grid.getTreeRowByRowId(arr[i]);
              fn_getChildrenRows(dataRow, count + 1);
            }
          }
        }
      }
    };
    let row = grid.getRow(rowIndex);
    fn_getChildrenRows(row, 1);
    return resultRows;
  }
  openTreeRow(rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let row = grid.getRow(rowIndex);
    let rowId = row[tbsGridNames.column.rowId];
    for (let i = 0, len = grid.source_table.count(); i < len; i++) {
      if (rowId == grid.source_table.data[i][tbsGridNames.column.rowId]) grid.source_table.data[i][tbsGridNames.column.isOpen] = true; // keep folding status
    }
    let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.open, rowIndex, false);
    grid.classTree.addTreeRows(rowIndex);
  }
  closeTreeRow(rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let row = grid.getRow(rowIndex);
    let rowId = row[tbsGridNames.column.rowId];
    for (let i = 0, len = grid.source_table.count(); i < len; i++) {
      if (rowId == grid.source_table.data[i][tbsGridNames.column.rowId]) grid.source_table.data[i][tbsGridNames.column.isOpen] = false; // keep folding status
    }
    let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.closed, rowIndex, true);
    rows.map(row => grid.classTree.removeTreeRow(row));
  }
  addTreeRows(rowIndex) {
    let selector = this.selector;
    const grid = this.grid;
    let rows = grid.classTree.getTreeChildrenRows(tbsGridNames.column.open, rowIndex, false);
    for (let i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
      grid.classTree.addTreeRow(startRowIndex, rows[i]);
    }
  }
  addTreeRow(startRowIndex, row) {
    let selector = this.selector;
    const grid = this.grid;
    startRowIndex = parseInt(startRowIndex);
    if (startRowIndex == grid.view_table.count()) {
      grid.view_table.insert(row);
    } else {
      grid.view_table.insertBefore(row, startRowIndex);
    }
  }
  removeTreeRow(row) {
    const grid = this.grid;
    grid.view_table.removeByRowId(row[tbsGridNames.column.rowId]);
    grid.data_select_panel30 = [];
    grid.data_select_panel31 = [];
  }
}

/***/ }),

/***/ 420:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: function() { return /* binding */ TbsGridNames; },
/* harmony export */   h: function() { return /* binding */ TbsGridTypes; }
/* harmony export */ });
class TbsGridTypes {
  constructor() {
    this.FilterType = {
      Select: 0,
      Equal: 1,
      NotEqual: 2,
      Greater: 3,
      GreaterEqual: 4,
      Less: 5,
      LessEqual: 6,
      Between: 7,
      Blank: 8,
      Include: 9,
      NotInclude: 10,
      StartCharacter: 11,
      EndCharacter: 12
    };
    this.ColumnKind = {
      column: 'column',
      header: 'header',
      empty: 'empty'
    };
    this.GridMode = {
      tree: 'tree',
      group: 'group',
      page: 'page',
      pagination: 'pagination'
    };
    this.CellType = {
      string: 'string',
      number: 'number',
      date: 'date',
      combo: 'combo',
      checkbox: 'checkbox',
      image: 'image',
      button: 'button',
      link: 'link'
    };
    this.Direction = {
      up: 'up',
      down: 'down',
      left: 'left',
      right: 'right'
    };
    this.BeforeAfter = {
      before: 'before',
      after: 'after'
    };
  }
}
class TbsGridNames {
  constructor() {
    /**
     * column property name
     */
    this.column = {
      /**
       * System Property
       */
      rowId: '_rowId',
      rowMode: '_mode',
      isChecked: '_isChecked',
      num: '_number',
      mode: '_mode',
      checkbox: '_checkbox',
      parentNum: '_parentNumber',
      depth: '_depth',
      children: 'children',
      open: 'open',
      closed: 'closed',
      rowCount: '_rowCount',
      isOpen: '_isOpen',
      /**
       * User Property
       */
      name: 'name',
      text: 'text',
      type: 'type',
      dataType: 'dataType',
      width: 'width',
      editable: 'editable',
      visible: 'visible',
      align: 'align',
      scale: 'scale',
      roundType: 'roundType',
      fixedScale: 'fixedScale',
      scaleMax: 'scaleMax',
      scaleMin: 'scalemin',
      showZero: 'showZero',
      commaUnit: 'commaUnit',
      // to be deprecated, Fixed 3
      thousandChar: 'thousandChar',
      decimalChar: 'decimalChar',
      currencyChar: 'currencyChar',
      className: 'className',
      // className
      resizable: 'resizable',
      sortable: 'sortable',
      movable: 'movable',
      autoResizable: 'autoResizable',
      autoWidth: 'autoWidth',
      summaryType: 'summaryType',
      required: 'required',
      combo: 'combo',
      format: 'format',
      kind: 'kind',
      //header, column, empty
      rowSpan: 'rowSpan',
      colSpan: 'colSpan',
      rowIndex: 'rowIndex',
      colIndex: 'colIndex',
      fromcol: 'fromcol',
      tocol: 'tocol',
      subRowSpan: 'subRowSpan',
      subColSpan: 'subColSpan',
      order: 'order',
      value: 'value'
    };

    /**
     * row property name
     */
    this.row = {
      selectMode: 'selectMode',
      addRow: 'addRow',
      delRow: 'delRow'
    };

    /**
     * tree property name
     */
    this.tree = {
      itemName: 'itemName',
      parentName: 'parentName',
      rootValue: 'rootValue'
    };
    this.option = {
      rowMode: 'rowMode',
      checkbox: 'checkbox',
      numWidth: 'numWidth',
      rowModeWidth: 'rowModeWidth',
      checkBoxWidth: 'checkBoxWidth',
      insertRow: 'insertRow',
      updateRow: 'updateRow',
      deleteRow: 'deleteRow',
      zeroChar: 'zeroChar',
      useToolbar: 'useToolbar',
      imageRoot: 'imageRoot'
    };
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TbsGrid: function() { return /* binding */ TbsGrid; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(420);
/* harmony import */ var _tbs_grid_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);

const tbsGridTypes = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types_js__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();

class TbsGrid extends _tbs_grid_base_js__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridBase */ .R {
  /**
   * Format Functions
   *
   */

  getFormatValue(col, value) {
    let result = this.getFormat(col, value);
    return result.value;
  }
  getFormatText(col, value) {
    let result = this.getFormat(col, value);
    return result.text;
  }
  getFormat(column, value) {
    const grid = this;
    let result = {};
    result.value = value;
    result.text = value;
    let colType = column[tbsGridNames.column.type];
    let format = column[tbsGridNames.column.format];
    if (colType == tbsGridTypes.CellType.number) {
      result = this.getFormatNumber(column, value);
      if (column[tbsGridNames.column.visible] == false || column[tbsGridNames.column.showZero] == false && Number(result.value) == 0) {
        result.text = this.options[tbsGridNames.option.zeroChar];
      }
      return result;
    } else {
      if (this.null(value)) {
        result.value = '';
        result.text = '';
        return result;
      }
      if (colType == tbsGridTypes.CellType.combo) {
        let data = column.renderer.data;
        let key = column.renderer.valueName;
        let val = column.renderer.textName;
        for (let i = 0, len = data.length; i < len; i++) {
          if (data[i][key] == value) {
            result.text = data[i][val];
            break;
          }
        }
        return result;
      } else if (colType == 'date') {
        return this.getFormatDate(column, value);
      } else {
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
    let result = {};
    if (grid.null(value)) result.value = null;else if (grid.trim(value) == '') result.value = null;else if (grid.substr2(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
    else {
      if (column[tbsGridNames.column.currencyChar]) value = value.toString().replace(column[tbsGridNames.column.currencyChar], '');
      result.value = value.toString().replace(/,/gi, '');
    }
    if (grid.null(result.value)) {
      result.text = grid.options[tbsGridNames.option.zeroChar];
      return result;
    }
    result.text = result.value;
    let type = column[tbsGridNames.column.type];
    let scale = column[tbsGridNames.column.scale];
    let arr = scale.split(',');
    let decimalPoint = arr.length > 1 ? this.trim(arr[1]) : '0';
    if (decimalPoint == '') decimalPoint = '0';
    let roundType = column[tbsGridNames.column.roundType];
    let n = result.value == undefined || result.value == '' ? '0' : result.value.toString(); //전체값
    let dpLen = 0; //decimal length

    if (decimalPoint == '0') {
      dpLen = 0;
      if (roundType == 'round') n = parseFloat(this.round(n, dpLen));else if (roundType == 'ceil') n = parseFloat(this.ceil(n, dpLen));else if (roundType == 'floor') n = parseFloat(this.floor(n, dpLen));else parseFloat(this.round(n, dpLen));
      result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
    } else if (decimalPoint != '0') {
      result.text = formatWon(parseFloat(n));
      if (column[tbsGridNames.column.fixedScale]) {
        dpLen = parseInt(decimalPoint);
        n = roundType == 'ceil' ? this.ceil(n, dpLen).toFixed(dpLen) : roundType == 'floor' ? this.floor(n, dpLen).toFixed(dpLen) : this.round(n, dpLen).toFixed(dpLen);
        result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
      } else {
        dpLen = parseInt(decimalPoint);
        n = roundType == 'ceil' ? parseFloat(this.ceil(n, dpLen)) : roundType == 'floor' ? parseFloat(this.floor(n, dpLen)) : parseFloat(this.round(n, dpLen));
        result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
      }
    }
    if (result.text == '0') {
      if (grid.options[tbsGridNames.option.zeroChar] == false) result.text = tbsGridNames.option.zeroChar;
    }
    let regExp = new RegExp('', 'gi');
    result.text = result.text.replaceAll(',', column[tbsGridNames.column.thousandChar]);
    result.text = result.text.replaceAll('.', column[tbsGridNames.column.decimalChar]);
    if (column[tbsGridNames.column.currencyChar]) result.text = column[tbsGridNames.column.currencyChar] + result.text;
    return result;
  }
  getFormatDate(column, value) {
    const grid = this;
    let result = {};
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
    let format = column[tbsGridNames.column.format];

    // date char : . - /
    let formatText = format.replace(/\./gi, '');
    formatText = formatText.replace(/\-/gi, '');
    formatText = formatText.replace(/\//gi, '');
    let dateText = result.text;
    let yyyy = '';
    let MM = '';
    let dd = '';
    if (formatText == 'yyyyMMdd') {
      yyyy = grid.substr2(result.text, 0, 4);
      MM = grid.substr2(result.text, 4, 2);
      dd = grid.substr2(result.text, 6, 2);
    } else if (formatText == 'ddMMyyyy') {
      yyyy = grid.substr2(result.text, 4, 4);
      MM = grid.substr2(result.text, 2, 2);
      dd = grid.substr2(result.text, 0, 2);
    } else if (formatText == 'MMddyyyy') {
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
   * User Event Functions
   */

  tbs_click(grid, row, userFunction) {
    let val = userFunction(grid, row);
    return val;
  }
  tbs_dblclick(grid, row, userFunction) {
    let val = userFunction(grid, row);
    return val;
  }
  tbs_edit(grid, row, state, userFunction) {
    let val = userFunction(grid, row, state);
    return val;
  }
  tbs_rowBounding(grid, element, row, userFunction) {
    let val = userFunction(grid, element, row);
    return val;
  }
  tbs_cellBounding(grid, element, row, userFunction) {
    let val = userFunction(grid, element, row);
    return val;
  }
  click(userFunction) {
    this.user_click = userFunction;
  }
  dblclick(userFunction) {
    this.user_dblclick = userFunction;
  }
  edit(userFunction) {
    this.user_edit = userFunction;
  }
  rowBounding(userFunction) {
    this.user_rowBounding = userFunction;
  }
  cellBounding(userFunction) {
    this.user_cellBounding = userFunction;
  }

  /**
   * User Event : Paging
   */

  tbs_clickPageFirst(grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(grid, pageIndex, selectedPageCount);
    return val;
  }
  tbs_clickPagePrev(grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(grid, pageIndex, selectedPageCount);
    return val;
  }
  tbs_clickPageIndex(grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(grid, pageIndex, selectedPageCount);
    return val;
  }
  tbs_clickPageNext(grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(grid, pageIndex, selectedPageCount);
    return val;
  }
  tbs_clickPageLast(grid, pageIndex, selectedPageCount, userFunction) {
    let val = userFunction(grid, pageIndex, selectedPageCount);
    return val;
  }
  clickPageFirst(userFunction) {
    this.user_clickPageFirst = userFunction;
  }
  clickPagePrev(userFunction) {
    this.user_clickPagePrev = userFunction;
  }
  clickPageIndex(userFunction) {
    this.user_clickPageIndex = userFunction;
  }
  clickPageNext(userFunction) {
    this.user_clickPageNext = userFunction;
  }
  clickPageLast(userFunction) {
    this.user_clickPageLast = userFunction;
  }

  /**
   *  Group Functions
   */

  showGroupPanel() {
    this.classGroup.showGroupPanel();
  }
  hideGroupPanel() {
    this.classGroup.hideGroupPanel();
  }
  setGroupColumns(groupColumns) {
    this.classGroup.setGroupColumns(groupColumns);
  }

  /**
   * Tree Functions
   */

  //setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
  setTreeSortColumn(sortColumn) {
    this.classTree.setTreeSortColumns(sortColumn);
  }

  /**
   *  Panel10 Functions
   */

  showToolbarPanel() {
    this.classPanel10.showToolbarPanel();
  }
  hideToolbarPanel() {
    this.classPanel10.hideToolbarPanel();
  }
  showToolbarButtons(buttonType) {
    this.classPanel10.showToolbarButtons(buttonType);
  }
  hideToolbarButtons(buttonType) {
    this.classPanel10.hideToolbarButtons(buttonType);
  }
  showFilterPanel() {
    this.classFilter.showFilterPanel();
  }
  hideFilterPanel() {
    this.classFilter.hideFilterPanel();
  }
  showSortPanel() {
    this.classSort.showSortPanel();
  }
  hideSortPanel() {
    this.classSort.hideSortPanel();
  }

  /**
   *  TbsGrid Config
   */

  setGridConfig(tbsGridConfig) {
    this.gridConfig = tbsGridConfig;
  }

  /**
   * Column Functions
   */

  setFixedColumn(fixedColumnIndex) {
    this.classColumn.setFixedColumn(fixedColumnIndex);
  }
  removeFixedColumn() {
    this.classColumn.removeFixedColumn();
  }

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
   * Header Columns API.
   */

  getHeaderColumn(rowIndex, columnIndex) {
    return grid.classColumn.getHeaderColumn(rowIndex, columnIndex);
  }
  getHeaderColumnByNumber(num) {
    return grid.classColumn.getHeaderColumnByNumber(num);
  }

  /**
   * Columns API.
   */

  getColumn(columnName) {
    return this.copyJson(this.classColumn.getColumn(columnName));
  }
  getColumnName(columnIndex) {
    return this.classColumn.getColumnName(columnIndex);
  }
  getColumnIndex(columnName) {
    return this.classColumn.getColumnIndex(columnName);
  }
  getColumnByIndex(columnIndex) {
    return this.copyJson(this.classColumn.getColumnByIndex(columnIndex));
  }
  getColumns() {
    return this.copyJson(this.classColumn.getColumns());
  }
  setColumn(columnName, property, value) {
    this.classColumn.setColumn(columnName, property, value);
  }
  setColumnByType(columnType, property, value) {
    this.classColumn.setColumnByType(columnType, property, value);
  }
  addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) {
    this.classColumn.addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType);
  }
  removeColumn(targetRowIndex, targetColumnIndex) {
    this.classColumn.removeColumn(targetRowIndex, targetColumnIndex);
  }
  setHeaderProperty(rowIndex, colIndex, property, value) {
    this.classColumn.setHeaderProperty(rowIndex, colIndex, property, value);
  }

  /**
   * Filter Columns
   */
  getFilterColumn(columnName) {
    const grid = this.grid;
    return grid.filter_column_table.selectRow(tbsGridNames.column.name, columnName);
  }
  getFilterColumnName(colIndex) {
    const grid = this.grid;
    return grid.filter_column_table.selectValue(colIndex, tbsGridNames.column.name);
  }
  getFilterColumnIndex(columnName) {
    const grid = this.grid;
    return grid.filter_column_table.selectRowIndex(tbsGridNames.column.name, columnName);
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
    this.topLineDiv = document.querySelector(selector + ' .tbs-grid-top-line');
    this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
    this.leftLineDiv = document.querySelector(selector + ' .tbs-grid-left-line');
    this.rightLineDiv = document.querySelector(selector + ' .tbs-grid-right-line');
  }
  setToolbar(toolbar) {
    const grid = this;
    if (toolbar == undefined) return;
    //grid.showToolbarPanel = (toolbar.visible != undefined) ? grid.options.showToolbarPanel = toolbar.visible : grid.options.showToolbarPanel;
  }
  setGrid(columns, options = {}) {
    const grid = this;
    grid.createOption(options);
    grid.columns = grid.copyJson(columns); //important

    grid.classColumn.updateColumns(grid.columns); // add columns(first) or add column

    grid.classColumn.updateColumnTable();
    grid.classColumn.createHeaderColumns();
    grid.classColumn.createHeaderColumnTable();
    grid.createGrid(grid.column_table.data);
  }
  createGrid(column) {
    let selector = '#' + this.gridId;
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
    this.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    //this.tbs_addEventAll();
  }
  tbs_setFrozenRow(fixedRowIndex, fixedRowCount) {
    // role : Exist rowIndex in Html Table
    let selector = '#' + this.gridId;
    const grid = this;

    //if (fixedRowIndex >= this.pageRowCount) { this.fixedRowIndex = -1; return; }
    const fn_getTableRowIndex = function (rowIndex) {
      let result = 0;
      let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display:"])');
      for (let i = 0, len = tableRows.length; i < tableRows.length; i++) {
        let tableRow = tableRows[i];
        let index = parseInt(tableRow.childNodes[0].dataset.rowIndex);
        if (index == rowIndex) {
          result = tablesRow.rowIndex;
          break;
        }
      }
      return result;
    };
    if (grid.null(fixedRowCount)) {
      fixedRowCount = fn_getTableRowIndex(rowIndex);
    }
    if (fixedRowIndex + 1 > this.getRowCount() && fixedRowCount > grid.pageRowCount) {
      this.fixedRowIndex = -1;
      this.fixedRowCount = 0;
      return;
    }
    this.fixedRowIndex = fixedRowIndex;
    this.fixedRowCount = fixedRowCount;
    let table31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
    let table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

    //table31 clone
    let copyTable = table31.cloneNode(true);
    let trList = copyTable.querySelectorAll('tbody tr');
    for (let i = trList.length - 1; i >= 0; i--) {
      if (i > fixedRowIndex) copytable.removeRow(-1);
    }
    panel61.innerHTML = '';
    panel61.appendChild(copyTable);

    //table30 clone
    copyTable = table30.cloneNode(true);
    trList = copyTable.querySelectorAll('tbody tr');
    for (let i = trList.length - 1; i >= 0; i--) {
      if (i > fixedRowIndex) copytable.removeRow(-1);
    }
    panel60.innerHTML = '';
    panel60.appendChild(copyTable);
    if (this.fixedColumnIndex != -1) {
      grid.tbs_createFrozenColumnTable(table30, panel62, fixedColumnIndex, 'panel62');
    }

    //this.event_select('fixRight');
    //this.event_select('fixLeft');

    this.classScroll.setPanelSize();
    this.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    this.verticalScroll.setScroll(grid.code_vertical);
    this.classPanel30.setDataPanel(grid.fixedRowIndex);
  }
  tbs_removeFrozenRow() {
    let selector = '#' + this.gridId;
    const grid = this;
    this.fixedRowIndex = -1;
    this.fixedRowCount = 0;
    let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
    let panel60 = document.querySelector(selector + ' .tbs-grid-panel60');
    panel61.childNodes[0].innerHTML = '';
    panel60.childNodes[0].innerHTML = '';
    this.classScroll.setPanelSize();
    this.horizontalScroll.setScroll(grid.code_horizontal);
    ;
    this.verticalScroll.setScroll(grid.code_vertical);
    this.classPanel30.setDataPanel(0);
  }
  getTextWidth(canvas, text, fontSize, fontFamily) {
    let selector = '#' + this.gridId;
    const grid = this;
    let context = canvas.getContext("2d");
    context.fontSize = fontSize;
    context.fontFamily = fontFamily;
    let metrics = context.measureText(text);
    return metrics.width;
  }
  getTextWidth2(context, text) {
    let selector = '#' + this.gridId;
    const grid = this;
    let metrics = context.measureText(text);
    return metrics.width;
  }
  setColumnAutoWidth() {
    let selector = '#' + this.gridId;
    const grid = this;
    let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
    let arr = [];
    for (let x = 0, len = grid.column_table.count(); x < len; x++) arr[x] = 0;
    let fontSize = grid.getConfigFont('fontSize');
    let fontFamilty = grid.getConfigFont('fontFamily');
    for (let i = 0, len = grid.headerColumnTable.length; i < len; i++) {
      for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
        if (grid.headerColumnTable[i][x][tbsGridNames.column.kind] == 'column') {
          let width = parseInt(grid.getTextWidth(canvas, grid.headerColumnTable[i][x][tbsGridNames.column.text], fontSize, fontFamilty));
          if (width >= arr[x]) {
            arr[x] = width;
          }
        }
      }
    }
    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
      for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
        let columnName = grid.classColumn.getColumnName(x);
        let column = grid.classColumn.getColumn(columnName);
        let val = grid.getValueByIndex(i, x);
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
      this.setRowHeight('header', rowHeight);
      this.setRowHeight('content', rowHeight);
      this.setRowHeight('top', rowHeight);
      this.setRowHeight('footer', rowHeight);
    } else {
      if (type == 'header') {
        this.headerRowHeight = rowHeight;
        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(0);
      }
      if (type == 'content') {
        this.rowHeight = rowHeight;
        document.querySelector(selector + ' .tbs-grid-input').style.height = rowHeight + 'px';
        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(0);
      }
      if (type == 'top') {
        this.topRowHeight = rowHeight;
        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(0);
      }
      if (type == 'footer') {
        this.footerRowHeight = rowHeight;
        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(0);
      }
    }
  }
  setGridModePage() {
    let selector = '#' + this.gridId;
    const grid = this;
    let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
    page.style.display = '';
    grid.classPage.pageRowcount = grid.classPage.options.pageRowCount;
  }
  setGridModePagenation() {
    let selector = '#' + this.gridId;
    const grid = this;
    let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
    page.style.display = '';
  }
  setData(data, openDepth = 0, isFirst = true) {
    let selector = '#' + this.gridId;
    const grid = this;
    if (grid.grid_mode == tbsGridTypes.GridMode.group) grid.classGroup.setGroupData(data, openDepth, isFirst);else if (grid.grid_mode == tbsGridTypes.GridMode.tree) grid.classTree.setTreeData(data, openDepth, isFirst);else grid.setGridData(data);
  }
  setGridMode(gridMode) {
    let selector = '#' + this.gridId;
    const grid = this;
    grid.grid_mode = grid.trim(gridMode);
    if (grid.grid_mode == tbsGridTypes.GridMode.page) {
      grid.classPanel10.hideToolbarButtons('group');
      grid.setGridModePage();
    } else if (grid.grid_mode == tbsGridTypes.GridMode.pagination) {
      grid.classPanel10.hideToolbarButtons('group');
      grid.setGridModePagenation();
    } else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {}
  }
  setGridData(data) {
    let selector = '#' + this.gridId;
    const grid = this;
    if (data == undefined) return;
    this.data_insert = [];
    this.data_update = [];
    this.data_delete = [];
    this.data_select_panel30 = [];
    this.data_select_panel31 = [];
    for (let i = 0, len = data.length; i < len; i++) {
      let dataRow = data[i];
      let source = {};
      let columns = grid.column_table.select();
      for (let x = 0, len = columns.length; x < len; x++) {
        let column = columns[x];
        let columnName = column[tbsGridNames.column.name];
        let val = this.null(dataRow[columnName]) ? null : this.getFormatValue(column, dataRow[columnName]);
        source[columnName] = val;
      }
      this.source_table.insert(source);
      this.view_table.insert(grid.copyJson(source));
      if (grid.grid_mode == tbsGridTypes.GridMode.page) this.page_table.insert(grid.copyJson(source));
    }

    /* create top_data */
    grid.classTop.setTopData();

    /* create footer_data */
    grid.classFooter.setFooterData();
    if (this.isAutoWidthColumn()) this.setColumnAutoWidth();
    document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
    this.classRange.removeRange(0, -1);
    let _topRowIndex = this.classRange.selectRange(0, 0, 0, 0);
    if (data.length == 0) {
      document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
      grid.classPanel30.setDataPanel(0);
      grid.verticalScroll.setScroll(grid.code_vertical);
    } else {
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
    this.data_select_panel30 = []; // select color : value 0, 1
    this.data_select_panel31 = []; // view - filter

    for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
      let itemSelect = {};
      let itemLeftSelect = {};
      let itemLeftView = {};
      itemSelect[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];
      itemSelect = new Uint8ClampedArray([]); //new

      itemLeftView[tbsGridNames.column.mode] = ''; //insert, update, delete
      itemLeftView[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];
      itemLeftSelect[tbsGridNames.column.mode] = 0; //insert, update, delete
      itemLeftSelect[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];
      this.data_select_panel30.push(itemSelect);
      this.data_select_panel31.push(itemLeftSelect);
    }
    this.classRange.removeRange(0, -1);
    this.classPanel30.setDataPanel(0);
  }

  /**
   * Data Value, Text
   */

  getValue(rowIndex, columnName, table) {
    const grid = this;
    if (grid.null(table)) table = grid.view_table;
    let column = this.classColumn.getColumn(columnName);
    let columnType = column[this.column_type];
    let val = table.data[rowIndex][columnName];
    if (columnType == tbsGridTypes.CellType.number) return Number(val);else return val;
  }
  getValueByIndex(rowIndex, colIndex, table) {
    let columnName = this.classColumn.getColumnName(colIndex);
    return this.getValue(rowIndex, columnName, table);
  }
  getText(rowIndex, columnName, table) {
    const grid = this;
    let column = this.classColumn.getColumn(columnName);
    let val = this.getValue(rowIndex, columnName, table);
    return this.getFormatText(column, val);
  }
  getTextByIndex(rowIndex, colIndex, table) {
    let columnName = this.classColumn.getColumnName(colIndex, table);
    return this.getText(rowIndex, columnName, table);
  }
  setValue(rowIndex, columnName, value) {
    const grid = this;
    let cellIndex = this.classColumn.getColumnIndex(columnName);
    let oldValue = this.view_table.data[rowIndex][columnName];
    let mode = this.view_table.data[rowIndex][tbsGridNames.column.mode];
    let result = this.getFormat(this.column_table.selectRowIndex(cellIndex), value);
    if (mode == 'I') {
      if (oldValue != result.value) {
        grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);
        grid.source_table.updateByRowId(tbsGridNames.column.rowId, columnName, result.value);
        grid.source_table.updateByRowId(tbsGridNames.column.rowId, tbsGridNames.column.mode, 'I');
      }
    } else {
      if (oldValue != result.value) {
        grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
        grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.mode, 'U');
        let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);
        grid.source_table.updateByRowId(tbsGridNames.column.rowId, columnName, result.value);
        grid.source_table.updateByRowId(tbsGridNames.column.rowId, tbsGridNames.column.mode, 'I');
      }
    }
  }
  setValueByIndex(rowIndex, cellIndex, value) {
    rowIndex = parseInt(rowIndex);
    cellIndex = parseInt(cellIndex);
    let columnName = this.classColumn.getColumnName(cellIndex);
    this.setValue(rowIndex, columnName, value);
  }
  setComboData(keyName, valueName, comboData) {
    const grid = this;
    let item = {};
    item['key'] = keyName;
    item['val'] = valueName;
    item['data'] = comboData;
    return item;
  }

  /** info_table */

  getInfoValue(columnName, property) {
    let dataRow = this.info_table.selectRow(tbsGridNames.column.name, columnName);
    return dataRow[property];
  }
  setInfoValue(columName, property, value) {
    this.info_table.update(columName, property, value);
  }

  /**
   * Row functions
   */

  getPageRowCount(panelName) {
    const grid = this;
    if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') return grid.fixedRowCount;else return grid.pageRowCount;
  }
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
      if (this.fixedRowIndex != -1) {
        let topRowIndex2 = topRowIndex - (this.fixedRowIndex + 1);
        let rowCount = this.getRowCount() - (this.fixedRowIndex + 1);
        if (this.pageRowCount > this.pageIntRowCount) {
          if (topRowIndex2 > rowCount - this.pageRowCount + 1) {
            topRowIndex2 = rowCount - this.pageRowCount;
            if (topRowIndex2 < 0) topRowIndex2 = 0;
          }
        } else {
          if (topRowIndex2 > rowCount - this.pageRowCount) {
            topRowIndex2 = rowCount - this.pageRowCount;
            if (topRowIndex2 < 0) topRowIndex2 = 0;
          }
        }
        if (topRowIndex2 < 0) topRowIndex2 = 0;
        topRowIndex = topRowIndex2 + (this.fixedRowIndex + 1);
      } else {
        let rowCount = this.getRowCount();
        if (this.pageRowCount > this.pageIntRowCount) {
          if (topRowIndex > rowCount - this.pageRowCount + 1) {
            topRowIndex = rowCount - this.pageRowCount;
            if (topRowIndex < 0) topRowIndex = 0;
          }
        } else {
          if (topRowIndex > rowCount - this.pageRowCount) {
            topRowIndex = rowCount - this.pageRowCount;
            if (topRowIndex < 0) topRowIndex = 0;
          }
        }
        if (topRowIndex < 0) topRowIndex = 0;
      }
    } else if (panelName == 'panel60') {
      let rowCount = this.fixedRowCount;
      if (topRowIndex > rowCount - this.fixedRowCount) {
        topRowIndex = rowCount - this.fixedRowCount;
        if (topRowIndex < 0) topRowIndex = 0;
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
    if (this.fixedRowIndex != -1) {
      if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
        let rowCount = this.getRowCount() - (this.fixedRowIndex + 1);
        let displayTopRowIndex = topRowIndex - (this.fixedRowIndex + 1);
        bottomRowIndex = displayTopRowIndex + this.getPageRowCount(panelName) - 1;
        if (bottomRowIndex > rowCount - 1) bottomRowIndex = rowCount - 1;
        bottomRowIndex = bottomRowIndex + (this.fixedRowIndex + 1);
        //console.log(`getBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
      } else if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') {
        bottomRowIndex = topRowIndex + this.fixedRowCount - 1;
        if (bottomRowIndex > this.fixedRowCount - 1) bottomRowIndex = this.fixedRowCount - 1;
        //console.log(`getBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
      }
    } else {
      bottomRowIndex = topRowIndex + this.pageRowCount - 1;
      if (bottomRowIndex > this.getRowCount() - 1) bottomRowIndex = this.getRowCount() - 1;
    }
    return bottomRowIndex;
  }
  createRow(row) {
    let selector = '#' + this.gridId;
    const grid = this;
    let columns = this.column_table.data;
    this.maxRowId = this.maxRowId + 1;
    let rowId = this.maxRowId;
    let source = {};
    source[tbsGridNames.column.rowId] = rowId;
    source[tbsGridNames.column.mode] = 'I';
    let data30 = {};
    view[tbsGridNames.column.rowId] = rowId;
    view[tbsGridNames.column.mode] = 'I';
    for (let i = 0, len = columns.length; i < len; i++) {
      let column = columns[i];
      let columnName = column[tbsGridNames.column.name];
      source[columnName] = this.null(row[columnName]) ? null : row[columnName];
      view[columnName] = this.null(row[columnName]) ? null : row[columnName];
    }
    return {
      source: source,
      view: view
    };
  }
  getRowCount() {
    return this.view_table.count();
  }
  getRow(rowIndex) {
    const grid = this;
    if (rowIndex < 0 || rowIndex >= grid.view_table.count()) return null;
    return grid.copyJson(grid.view_table.data[rowIndex]);
  }
  getRows(startRowIndex = 0, endRowIndex = -1) {
    const grid = this;
    let result = [];
    let rows = this.view_table.data;
    if (arguments.length == 0) {
      rows.map(row => result.push(grid.copyJson(row)));
    } else {
      if (endRowIndex == -1) endRowIndex = rows.length - 1;
      for (let i = startRowIndex; i <= endRowIndex; i++) {
        let row = rows[i];
        result.push(grid.copyJson(row));
      }
    }
    return result;
  }
  getTreeRowByRowId(rowId) {
    const grid = this;
    return grid.getRowByRowId(rowId, grid.tree_table);
  }
  getSourceRowByRowId(rowId) {
    const grid = this;
    return grid.getRowByRowId(rowId, grid.source_table);
  }
  getRowByRowId(rowId, table) {
    const grid = this;
    if (grid.null(table)) table = grid.view_table;
    return table.selectRow(tbsGridNames.column.rowId, rowId);
  }
  getRowIndexByRowId(rowId) {
    let result = {};
    const grid = this;
    for (let i = 0, len = this.view_table.count(); i < len; i++) {
      if (this.view_table.data[i][tbsGridNames.column.rowId] == rowId) {
        result = i;
        break;
      }
    }
    return result;
  }
  getSelectedRow() {
    let data = this.getSelectedRows();
    return data.length > 0 ? data[0] : null;
  }
  getSelectedRows() {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = [];
    let len = grid.view_table.count();
    for (rowIndex = 0; rowIndex < len; rowIndex++) {
      let item = {};
      item[tbsGridNames.column.rowId] = grid.view_table.data[rowIndex][tbsGridNames.column.rowId];
      item[tbsGridNames.column.mode] = grid.view_table.data[rowIndex][tbsGridNames.column.mode];
      item.rowIndex = rowIndex;
      item = grid.copyJson(grid.view_table.data[rowIndex]);
      if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(item);
    }
    return result;
  }
  getCheckedRows() {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = [];
    for (let i = 0, len = this.view_table.count(); i < len; i++) {
      let row = this.view_table.data[i];
      if (row.check) {
        result.push(JSON.parse(JSON.stringify(row)));
      }
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
      item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
      item[tbsGridNames.column.mode] = row[tbsGridNames.column.mode];
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
        item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
        item[tbsGridNames.column.mode] = row[tbsGridNames.column.mode];
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
      if (row[tbsGridNames.column.mode] == 'I') {
        let item = JSON.parse(JSON.stringify(row));
        item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
        item[tbsGridNames.column.mode] = row[tbsGridNames.column.mode];
        result.push(item);
      }
    }
    return result;
  }
  getFirstDisplayRowIndex(panelName = '') {
    let selector = '#' + this.gridId;
    const grid = this;
    if (this.view_table.count() == 0) return -1;
    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
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
    let topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);
    if (panelName == '') {
      if (grid.fixedRowIndex != -1) {
        if (isNaN(topRowIndex)) topRowIndex = grid.fixedRowIndex + 1;
        return topRowIndex;
      } else {
        if (isNaN(topRowIndex)) topRowIndex = 0;
        return topRowIndex;
      }
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
    let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
    return parseInt(trList.length) - 1;
  }
  getSelectedRowIndex() {
    let result = [];
    for (rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
      if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
    }
    return result;
  }
  addRow(row, type = 'bottom') {
    //type : top, bottom, up, down
    let selector = '#' + this.gridId;
    const grid = this;
    let columns = this.column_table.data;
    let rowId = this.maxRowId + 1;
    this.maxRowId = rowId;
    let json = this.createRow(row);
    let source = json.source;
    let data30 = json.data30;
    let rowIndexList = this.getSelectedRowIndex();
    if (rowIndexList.length == 0) type = 'bottom';
    if (type == 'top') {
      this.source_table.data.unshift(source);
      this.view_table.data.unshift(data30);
      let topRowIndex = 0;
      this.verticalScroll.setScroll(grid.code_vertical);
      this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
      this.classRange.removeRange(0, -1);
      let _topRowIndex = this.classRange.selectRange(topRowIndex, topRowIndex);
      this.classPanel30.setDataPanel(topRowIndex);
      return;
    }
    if (type == 'bottom') {
      this.source_table.insert(source);
      this.view_table.insert(data30);
      let dataLength = this.view_table.count();
      let topRowIndex = this.getFirstRowIndex();
      topRowIndex = dataLength - this.pageRowCount;
      if (topRowIndex < 0) topRowIndex = 0;
      if (this.pageRowCount > this.pageIntRowCount) {
        topRowIndex = topRowIndex + 1;
      }
      this.verticalScroll.setScroll(grid.code_vertical);
      this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
      this.classRange.removeRange(0, -1);
      let _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
      this.classPanel30.setDataPanel(topRowIndex);
      return;
    }
    if (type == 'up') {
      let minRowIndex = rowIndexList[0];
      this.source_table.insertBefore(source, minRowIndex);
      this.view_table.insertBefore(data30, minRowIndex);
      let lastRowIndex = this.view_table.count() - 1;
      let topRowIndex = this.getFirstRowIndex();
      this.verticalScroll.setScroll(grid.code_vertical);
      this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
      this.classRange.removeRange(0, -1);
      let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
      this.classPanel30.setDataPanel(_topRowIndex);
      return;
    }
    if (type == 'down') {
      let minRowIndex = rowIndexList[0];
      let addRowIndex = minRowIndex + 1;
      if (minRowIndex == this.view_table.count() - 1) {
        this.source_table.insert(source);
        this.view_table.insert(data30);
        addRowIndex = minRowIndex + 1;
      } else {
        this.source_table.insertBefore(source, addRowIndex);
        this.view_table.insertBefore(data30, addRowIndex);
      }
      this.classRange.removeRange(0, -1);
      let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
      this.classPanel30.setDataPanel(_topRowIndex);
      if (this.pageRowCount > this.pageIntRowCount) {
        if (addRowIndex == this.getLastRowIndex()) {
          this.tbs_moveCell('down');
          this.classRange.removeRange(0, -1);
          let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
          this.classPanel30.setDataPanel(_topRowIndex);
          this.verticalScroll.setScroll(grid.code_vertical);
          this.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        }
      }
    }
  }
  removeRows(rows) {
    // let rows = this.getSelectedRows();
    let selector = '#' + this.gridId;
    const grid = this;
    if (this.null(rows) || rows.length == 0) return;
    let data = this.view_table.select();

    // before delete, find next, prev rowid (default. next rowid)
    let prevRowId = -1;
    let nextRowId = -1;
    let nextRowIndex = -1;
    for (let i = 0; i < data.length; i++) {
      // find next rowIndex
      if (data[i][tbsGridNames.column.rowId] == rows[rows.length - 1][tbsGridNames.column.rowId]) {
        nextRowIndex = i + 1;
        break;
      }
    }
    nextRowIndex = nextRowIndex > data.length - 1 ? nextRowIndex - 1 : nextRowIndex;
    nextRowId = data[nextRowIndex][tbsGridNames.column.rowId];

    //Data 삭제
    data = this.source_table.data;
    for (let i = data.length - 1; i >= 0; i--) {
      for (let x = rows.length - 1; x >= 0; x--) {
        if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) {
          data.splice(i, 1);
          break;
        }
      }
    }
    data = this.view_table.select();
    for (let i = data.length - 1; i >= 0; i--) {
      for (let x = rows.length - 1; x >= 0; x--) {
        if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) {
          data.splice(i, 1);
          break;
        }
      }
    }
    data = this.data_delete;
    for (let i = data.length - 1; i >= 0; i--) {
      for (let x = rows.length - 1; x >= 0; x--) {
        if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) {
          data.splice(i, 1);
          break;
        }
      }
    }
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][tbsGridNames.column.mode] == '' || rows[i][tbsGridNames.column.mode] == 'U') {
        rows[i][tbsGridNames.column.mode] = 'D';
        data.push(rows[i]);
      }
    }
    //==============================================
    let deleteFirstRowIndex = rows[0].rowIndex;
    let topRowIndex = this.getFirstRowIndex();
    //==============================================
    this.refreshRefData();
    //==============================================
    data = this.view_table.select();
    let realStartRowIndex = deleteFirstRowIndex;
    if (realStartRowIndex < 0) realStartRowIndex = 0;
    if (realStartRowIndex > this.view_table.count() - 1) {
      realStartRowIndex = this.view_table.count() - 1;
    }
    grid.verticalScroll.setScroll(grid.code_vertical);
    grid.classRange.removeRange(0, -1);
    let _topRowIndex = grid.classRange.selectRange(realStartRowIndex, realStartRowIndex, 0, 0);
    grid.classPanel30.setDataPanel(_topRowIndex);
    grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
    if (grid.pageRowCount > grid.pageIntRowCount) {
      let lastRowIndex = grid.getLastRowIndex();
      if (realStartRowIndex == lastRowIndex) {
        grid.classScroll.setBarPositionByDirection('down');
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
      }
    }
  }

  /**
   * Range Functiopns
   */

  setRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
    let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
    this.classPanel30.setDataPanel(_topRowIndex);
  }
  selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
    let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
    this.classPanel30.setDataPanel(_topRowIndex);
  }

  /**
   * Columns
   */

  setColumn(columnName, columnProperty, value) {
    this.classColumn.setColumn(columnName, columnProperty, value);
  }
  setColumnByType(columnType, columnProperty, value) {
    this.classColumn.setColumnByType(columnType, columnProperty, value);
  }
  setTopColumns(topColumns) {
    this.classTop.setTopColumns(topColumns);
  }
  setFooterColumns(footerColumns) {
    this.classFooter.setFooterColumns(footerColumns);
  }

  /**
   * Options
   */

  createOption(options) {
    const grid = this;
    grid.setOptions(options);
  }
  setOption(optionName, optionValue) {
    const grid = this;
    grid.options[optionName] = optionValue;
  }
  setOptions(options) {
    const grid = this;
    for (let key in options) grid.setOption(optionMenu, key);
  }

  /**
   * Page
   */

  setPageOption(optionName, optionValue) {
    this.classPage.setPageOption(optionName, optionValue);
  }

  /**
   * Is Functions
   *
   */

  isSortableColumn(columnName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = false;
    //let column = grid.classColumn.getColumn(columnName);

    // if (column[tbsGridNames.column.sortable] == true)  result = true;
    // else if (column[tbsGridNames.column.sortable] == false) result = false;
    // else {
    result = grid.options[tbsGridNames.column.sortable];
    //}
    return result;
  }
  isResizableColumn(columnName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = false;
    //let column = grid.classColumn.getColumn(columnName);

    // if (column[tbsGridNames.column.resizable] == true)  result = true;
    // else if (column[tbsGridNames.column.resizable] == false) result = false;
    // else {
    result = grid.options[tbsGridNames.column.resizable];
    // }
    return result;
  }
  isMovableColumn(columnName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = false;
    //let column = grid.classColumn.getColumn(columnName);

    // if (column[tbsGridNames.column.movable] == true)  result = true;
    // else if (column[tbsGridNames.column.movable] == false) result = false;
    // else {
    result = grid.options[tbsGridNames.column.movable];
    // }
    return result;
  }
  isAutoResizableColumn(columnName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = false;
    //let column = grid.classColumn.getColumn(columnName);

    // if (column[tbsGridNames.column.autoResizable] == true)  result = true;
    // else if (column[tbsGridNames.column.autoResizable] == false) result = false;
    // else {
    result = grid.options[tbsGridNames.column.autoResizable];
    //}
    return result;
  }
  isAutoWidthColumn(columnName) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = false;
    //let column = grid.classColumn.getColumn(columnName);

    // if (column[tbsGridNames.column.autoResizable] == true)  result = true;
    // else if (column[tbsGridNames.column.autoResizable] == false) result = false;
    // else {
    result = grid.options[tbsGridNames.column.autoWidth];
    //}
    return result;
  }
  isClassName(element, className) {
    let selector = '#' + this.gridId;
    const grid = this;
    let result = element.classList.contains(className);
    return result;
  }
  isNotValidColumnType(columnType) {
    let arr = ['string', 'number', 'combo', 'date'];
    return arr.indexOf(columnType) == -1 ? true : false;
  }
  isInPanel(e, panelName, startX, startY) {
    //tbs-grid-panel30
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
    let rect = panel.getBoundingClientRect();
    let groupTop = absRect.top;
    let groupBottom = absRect.top + rect.height;
    let groupLeft = absRect.left;
    let groupRight = absRect.left + rect.width;
    //outside area
    if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;else return true;
  }
  isSelectedCell(panelName, rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = [];
    if (panelName == 'panel31') rows = this.data_select_panel31;else if (panelName == 'panel32') rows = this.data_select_panel30;else if (panelName == 'panel30') rows = this.data_select_panel30;else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;else if (panelName == 'panel61') rows = this.data_select_panel31;else if (panelName == 'panel62') rows = this.data_select_panel30;else if (panelName == 'panel60') rows = this.data_select_panel30;else rows = this.data_select_panel30;
    for (let i = 0, len = rows.length; i < len; i++) {
      let row = rows[i];
      if (rowIndex == row[0][0]) {
        result = row[1][cellIndex];
        break;
      }
    }
    return result;
  }
  isSelectedHeaderCell(panelName, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel30;
    for (let i = 0, len = rows.length; i < len; i++) {
      let row = rows[i];
      if (row[1][cellIndex] == 1) {
        result = row[1][cellIndex];
        break;
      }
    }
    return result;
  }
  isSelectedCell31(rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel31;
    for (let i = 0, len = rows.length; i < len; i++) {
      let row = rows[i];
      if (rowIndex == row[0][0]) {
        result = row[1][cellIndex];
        break;
      }
    }
    return result;
  }
  isSelectedCell30(rowIndex, cellIndex) {
    //selected 1, 0
    let result = 0;
    let rows = this.data_select_panel30;
    for (let i = 0, len = rows.length; i < len; i++) {
      let row = rows[i];
      if (rowIndex == row[0][0]) {
        result = row[1][cellIndex];
        break;
      }
    }
    return result;
  }
  isColumnName(columnName) {
    const grid = this;
    let result = false;
    for (let i = 0, len = this.column_table.count(); i < len; i++) {
      let column = this.column_table.data[i];
      if (columnName == column[tbsGridNames.column.name]) {
        result = true;
        break;
      }
    }
    return result;
  }
  isColumnTypeNumber(columnName) {
    const grid = this;
    let result = false;
    let column = grid.getColumn(columnName);
    if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) result = true;
    return result;
  }
  isFilterColumnName(columnName) {
    const grid = this;
    return grid.filter_column_table.isRow(tbsGridNames.column.name, columnName);
  }
  isLastTopRowIndex(rowIndex) {
    const grid = this;
    let result = false;
    let rowCount = grid.getRowCount() - 1;
    if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
      return true;
    }
    return result;
  }

  /**
   * get configs value
   */

  getConfigCulture(label) {
    return this.null(this.gridConfig.culture[label]) ? 'No Label' : this.gridConfig.culture[label];
  }
  getConfigCalendar(label) {
    return this.null(this.gridConfig.calendar[label]) ? 'No Label' : this.gridConfig.calendar[label];
  }
  getConfigFont(label) {
    return this.null(this.gridConfig.font[label]) ? 'No Label' : this.gridConfig.font[label];
  }
  getConfigOption(label) {
    return this.null(this.gridConfigOptions[label]) ? 'No Label' : this.gridConfigOptions[label];
  }
  getConfigLabel(label) {
    return this.null(this.gridConfig.labels[label]) ? 'No Label' : this.gridConfig.labels[label];
  }

  /**
   * Dom Lib
   */

  addUserClass(element, className) {
    grid.classDom.addUserClass(element, className);
  }
  removeUserClass(tableCell, className) {
    grid.classDom.removeUserClass(element, className);
  }
}
/******/ 	return __webpack_exports__;
/******/ })()
;
});