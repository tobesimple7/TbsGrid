(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xlsx"));
	else if(typeof define === 'function' && define.amd)
		define(["xlsx"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("xlsx")) : factory(root["xlsx"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__347__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4213:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ 294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ TbsGridBase; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5052);
/* harmony import */ var _database_tbs_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _tbs_grid_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4476);



class TbsGridBase extends _tbs_base__WEBPACK_IMPORTED_MODULE_2__/* .TbsBase */ .H {
    constructor(gridId, gridConfigs) {
        super();
        this.renderer = null;
        this.infoRenderer = null;
        this.gridId = gridId;
        this.gridConfig = gridConfigs ?
            gridConfigs[Object.keys(gridConfigs)[0]] : _tbs_grid_configs__WEBPACK_IMPORTED_MODULE_1__.tbsGridConfigs[Object.keys(_tbs_grid_configs__WEBPACK_IMPORTED_MODULE_1__.tbsGridConfigs)[0]];
        this.gridConfigOptions = gridConfigs ? gridConfigs['options'] : _tbs_grid_configs__WEBPACK_IMPORTED_MODULE_1__.tbsGridConfigs['options'];
        this.grid_mode = '';
        this.mousePointRange = 15;
        /**
         * @description mobile, user agent
         *
         */
        this.isMobile = this.gridConfigOptions['isMobile'];
        this.userAgent = this.gridConfigOptions['userAgent'];
        /**
         * columns, headerColumnTable
         */
        this.columns = [];
        this.headerColumnTable = [];
        this.renderer = null;
        this.infoRenderer = null;
        /**
         * create database
         */
        this.db = new _database_tbs_database__WEBPACK_IMPORTED_MODULE_0__/* .TbsDatabase */ .$();
        // this.field_table        = this.db.createTable('field');
        this.header_column_table = this.db.createArrayTable('header_column');
        this.column_table = this.db.createTable('column');
        this.top_column_table = this.db.createTable('top_column');
        this.footer_column_table = this.db.createTable('footer_column');
        this.sort_column_table = this.db.createTable('sort_column');
        this.filter_column_table = this.db.createTable('filter_column');
        this.group_column_table = this.db.createTable('group_column');
        this.source_table = this.db.createTable('source');
        this.view_table = this.db.createView('view');
        this.group_table = this.db.createView('group');
        this.group_header_table = this.db.createView('group_header');
        this.tree_table = this.db.createView('tree');
        this.page_table = this.db.createView('page');
        this.top_table = this.db.createTable('top');
        this.footer_table = this.db.createTable('footer');
        this.temp_table = this.db.createTable('temp');
        this.data_update = [];
        this.data_insert = [];
        this.data_delete = [];
        /**
         * create info table
         */
        this.info_column_table = this.db.createTable('info_column');
        this.info_column_table.insert({ name: 'num', type: 'number', align: 'center', width: 50, visible: true });
        this.info_column_table.insert({ name: 'mode', type: 'string', align: 'center', width: 20, visible: false });
        this.info_column_table.insert({ name: 'checkbox', type: 'checkbox', align: 'center', width: 25, visible: false, editable: true });
        this.panel21_table = this.db.createView('panel21');
        this.panel20_table = this.db.createView('panel20');
        this.panel31_table = this.db.createView('panel31');
        /**
         * cell template table
         */
        this.cell_template_table = this.db.createTable('cellTemplate');
        this.cell_template_table.insert({ type: 'checkbox', cellTemplate: 1, children: ['checkbox', 'string'] }); //default
        this.cell_template_table.insert({ type: 'checkbox', cellTemplate: 2, children: ['string', 'checkbox'] });
        this.cell_template_table.insert({ type: 'group', cellTemplate: 1, children: ['icon', 'string'] });
        this.cell_template_table.insert({ type: 'group', cellTemplate: 2, children: ['icon', 'img', 'string'] });
        this.cell_template_table.insert({ type: 'tree', cellTemplate: 1, children: ['icon', 'string'] });
        this.cell_template_table.insert({ type: 'tree', cellTemplate: 2, children: ['icon', 'img', 'string'] });
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
        this.options.showToolbarPanel = false;
        this.options.showFilterPanel = false;
        this.options.showSortPanel = false;
        this.options.showGroupPanel = false;
        /* Columns Options */
        this.options.sortable = true;
        this.options.resizable = true;
        this.options.movable = true;
        this.options.autoResizable = true;
        this.options.autoWidth = false;
        // Rows Options
        this.options.selectMode = 'cells'; //@value : cell, cells(default) // row, rows : @deprecated
        this.options.addRow = false; //== row option
        this.options.delRow = false;
        this.options.insertRow = false;
        this.options.updateRow = false;
        this.options.deleteRow = false;
        this.options.zeroChar = '-';
        this.options.useToolbar = true;
        this.options.imageRoot = this.getConfigOption('imageRoot');
        this.options.treeItemName = null;
        this.options.treeParentName = null;
        this.options.treeRootValue = null;
        /**
         * @description layout
         *
         */
        this.fixedColumnIndex = -1;
        /**
         * @description constant value
         *
         */
        this.headerRowHeight = 25;
        this.rowHeight = 25;
        this.topRowHeight = 25;
        this.footerRowHeight = 25;
        /**
         * @description code
         *
         */
        this.debug_mode = true;
        this.code_horizontal = 'horizontal';
        this.code_vertical = 'vertical';
    }
    /**
     * get configs value
     */
    getConfigCulture(label) { return this.null(this.gridConfig['culture'][label]) ? 'No Label' : this.gridConfig['culture'][label]; }
    getConfigCalendar(label) { return this.null(this.gridConfig['calendar'][label]) ? 'No Label' : this.gridConfig['calendar'][label]; }
    getConfigFont(label) { return this.null(this.gridConfig['font'][label]) ? 'No Label' : this.gridConfig['font'][label]; }
    getConfigOption(label) { return this.null(this.gridConfigOptions[label]) ? 'No Label' : this.gridConfigOptions[label]; }
    getConfigLabel(label) { return this.null(this.gridConfig['labels'][label]) ? 'No Label' : this.gridConfig['labels'][label]; }
}


/***/ }),

/***/ 6359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ TbsGridEvent; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);
/* harmony import */ var _tbs_grid_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1495);
/* harmony import */ var _tbs_grid_combo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7941);



class TbsGridEvent {
    constructor() {
    }
    event_input() {
        let selector = '#' + this.gridId;
        const grid = this;
        let panelInputt = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let colType = input.dataset.type;
        const keydownEvent = function (e) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            let input = document.querySelector(selector + ' .tbs-grid-input');
            let mode = input.dataset.mode;
            if (mode == undefined)
                mode = '';
            if (e.ctrlKey) {
                if (e.keyCode == 37 && mode == '') {
                    if (!(grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .AddRowDirection */ .hI.before);
                    grid.input_focus();
                } //left arrow //type : first, last, up, down
                else if (e.keyCode == 39 && mode == '') {
                    if (!(grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .AddRowDirection */ .hI.after);
                    grid.input_focus();
                } //right arrow
                else if (e.keyCode == 38 && mode == '') {
                    if (!(grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .AddRowDirection */ .hI.top);
                    grid.input_focus();
                } //up arrow
                else if (e.keyCode == 40 && mode == '') {
                    if (!(grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .AddRowDirection */ .hI.bottom);
                    grid.input_focus();
                } //down arrow
                //else if (e.keyCode == 46 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
                else if ((e.keyCode == 65 || e.keyCode == 97) && mode == '') { //ctrl + a, A
                    if (!(grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.addRow])) {
                        grid.classRange.selectRange(0, -1, 0, -1);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                        grid.input_focus();
                    }
                }
            }
            else {
                if (e.keyCode == 37 && (mode == '')) {
                    grid.editEnd();
                    grid.tbs_moveCell('left');
                    grid.input_focus();
                }
                else if (e.keyCode == 39 && (mode == '')) {
                    grid.editEnd();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                }
                else if (e.keyCode == 38 && (mode == '')) {
                    grid.editEnd();
                    grid.tbs_moveCell('up');
                    grid.input_focus();
                }
                else if (e.keyCode == 40 && (mode == '')) {
                    grid.editEnd();
                    grid.tbs_moveCell('down');
                    grid.input_focus();
                }
                else if (e.keyCode == 13 && (mode == '')) {
                    grid.editEnd();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //enter
                else if (e.keyCode == 9 && (mode == '')) {
                    grid.editEnd();
                    e.preventDefault();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //tab
                else if (e.keyCode == 37 && (mode == 'key')) { }
                else if (e.keyCode == 39 && (mode == 'key')) { }
                else if (e.keyCode == 38 && (mode == 'key')) {
                    grid.editEnd();
                    grid.tbs_moveCell('up');
                    grid.input_focus();
                }
                else if (e.keyCode == 40 && (mode == 'key')) {
                    grid.editEnd();
                    grid.tbs_moveCell('down');
                    grid.input_focus();
                }
                else if (e.keyCode == 13 && (mode == 'key')) {
                    grid.editEnd();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //enter key
                else if (e.keyCode == 9 && (mode == 'key')) {
                    grid.editEnd();
                    e.preventDefault();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //tab key
                else if (e.keyCode == 37 && (mode == 'mouse')) { }
                else if (e.keyCode == 39 && (mode == 'mouse')) { }
                else if (e.keyCode == 38 && (mode == 'mouse')) {
                    grid.editEnd();
                    grid.tbs_moveCell('up');
                    grid.input_focus();
                }
                else if (e.keyCode == 40 && (mode == 'mouse')) {
                    grid.editEnd();
                    grid.tbs_moveCell('down');
                    grid.input_focus();
                }
                else if (e.keyCode == 13 && (mode == 'mouse')) {
                    grid.editEnd();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //enter key
                else if (e.keyCode == 9 && (mode == 'mouse')) {
                    grid.editEnd();
                    e.preventDefault();
                    grid.tbs_moveCell('right');
                    grid.input_focus();
                } //tab key
                else if (e.keyCode >= 0 && e.keyCode <= 7) { } //function ctrlkey shifkey tabkey(9)등등
                else if (e.keyCode >= 9 && e.keyCode <= 32) { }
                else if (e.keyCode == 8) { } //backspace key
                else if (e.keyCode == 127) { }
                else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) { }
                else if (e.keyCode >= 112 && e.keyCode <= 123) { }
                else {
                    //console.log('input');
                    let cellIndex = grid.startCellIndex;
                    let column = grid.getColumnByIndex(cellIndex);
                    if (grid.isNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable], false)) {
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
        const keyupEvent = function (e) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            const input = document.querySelector(selector + ' .tbs-grid-input');
            let colType = input.dataset.type;
        };
        const clickEvent = function (e) {
            let column = grid.column_table.data;
            let input = document.querySelector(selector + ' .tbs-grid-input');
            let colType = grid.column_table.data[grid.startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        };
        const blurEvent = function (e) {
            // inputLayerPanel 일 살아 있을 경우.
            // focus가 사라진다 해도..input은 남아 있어야 해.
            const inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            if (inputLayerPanel.style.left != '30000px')
                return;
            const input = document.querySelector(selector + ' .tbs-grid-input');
            const input_code = document.querySelector(selector + ' .tbs-grid-input-code');
            const input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
            let mode = input.dataset.mode;
            let rowIndex = input.dataset.rowIndex;
            let cellIndex = input.dataset.columnIndex;
            let column = grid.column_table.data[cellIndex];
            /* user blur event stop */
            if (rowIndex == undefined || cellIndex == undefined) {
                grid.input_hide();
                return;
            }
            if (input.dataset.mode == undefined || input.dataset.mode == '')
                return; //{ e.stopImmediatePropagation(); }
            if (rowIndex == -1 || cellIndex == -1)
                return;
            if (grid.notNull(grid.edit)) {
                grid.editEnd(e, 'key');
            }
            else {
                if (isNaN(cellIndex))
                    return;
                let s = input.value;
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo)
                    s = input_code.value;
                else if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] == 'number' && grid.trim(s) == grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.zeroChar])
                    s = '0';
                grid.setValueByColumnIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
                grid.input_hide();
            }
            grid.apply();
        };
        const wheelEvent = function (e) { };
        const copyEvent = function (e) {
            const ta = document.createElement('textarea');
            let s = '';
            if (grid.classRange40.data_select_panel30.length > 0) {
                let startRowIndex = 0;
                let startCellIndex = grid.classRange40._startCellIndex;
                let lastRowIndex = 0;
                let lastCellIndex = grid.classRange40._lastCellIndex;
                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let columnName = grid.column_table.selectValue(colIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name);
                        let val = grid.getValue(rowIndex, columnName, grid.top_table);
                        if (grid.null(val))
                            val = '';
                        s += val;
                        if (colIndex < lastCellIndex)
                            s += '\t';
                    }
                    if (rowIndex < lastRowIndex)
                        s += '\r\n';
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else if (grid.classRange50.data_select_panel30.length > 0) {
                let startRowIndex = 0;
                let startCellIndex = grid.classRange50._startCellIndex;
                let lastRowIndex = 0;
                let lastCellIndex = grid.classRange50._lastCellIndex;
                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.getValueByColumnIndex(rowIndex, colIndex, this.footer_table);
                        if (grid.null(val))
                            val = '';
                        s += val;
                        if (colIndex < lastCellIndex)
                            s += '\t';
                    }
                    if (rowIndex < lastRowIndex)
                        s += '\r\n';
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else {
                let startRowIndex = grid._startRowIndex;
                let startCellIndex = grid._startCellIndex;
                let lastRowIndex = grid._lastRowIndex;
                let lastCellIndex = grid._lastCellIndex;
                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.getValueByColumnIndex(rowIndex, colIndex);
                        if (grid.null(val))
                            val = '';
                        s += val;
                        if (colIndex < lastCellIndex)
                            s += '\t';
                    }
                    if (rowIndex < lastRowIndex)
                        s += '\r\n';
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
            if (td == 'undefined' || td == null)
                return;
            //-------------------------------------------------------------
            let rowArray = data.split('\r\n');
            let i = 0;
            for (let rowIndex = startRowIndex; rowIndex < startRowIndex + rowArray.length; rowIndex++) {
                if (rowIndex >= grid.view_table.count())
                    break;
                let colArray = rowArray[i].split('\t');
                let j = 0;
                for (let colIndex = startCellIndex; colIndex < startCellIndex + colArray.length; colIndex++) {
                    //if (grid.column_table.data[colIndex].column_readonly == true) continue;
                    if (grid.column_table.data[colIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == false)
                        continue;
                    grid.setValueByColumnIndex(rowIndex, colIndex, colArray[j]);
                    j += 1;
                }
                i += 1;
            }
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        };
        const cutEvent = function (e) { };
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
        let input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        let colType = input_icon.dataset.type;
        const mousedownEvent = function (e) {
            //console.dir(e)
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const input = document.querySelector(selector + ' .tbs-grid-input');
            const input_code = document.querySelector(selector + ' .tbs-grid-input-code');
            const input_panel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            const column = grid.column_table.data[grid.startCellIndex];
            const colType = grid.column_table.data[grid.startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
            //tbs-grid-input-layer-panel : calendar, combo
            if (colType == 'date') {
                grid.tbsGridDate = new _tbs_grid_date__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDate */ .I(grid, column, input);
            }
            else if (colType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo) {
                grid.tbsGridCombo = new _tbs_grid_combo__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridCombo */ .q(grid, column, input, input_code);
            }
        };
        input_icon.addEventListener('mousedown', mousedownEvent);
    }
    input_show(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lineWeight = 3;
        let rowIndex = grid.startRowIndex;
        let cellIndex = grid.startCellIndex;
        let columns = grid.column_table.data;
        let column = columns[cellIndex];
        let colType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        let input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        let panelMain = document.querySelector(selector + ' .tbs-grid-main');
        let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
        if (td == null)
            return;
        let value = this.getValue(rowIndex, column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]);
        const result = this.getFormat(column, value); //result.value, result.text
        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == false)
            return;
        grid.tbs_moveCellLine(td, rowIndex, cellIndex);
        let left = td.getBoundingClientRect().left;
        let top = td.getBoundingClientRect().top;
        let leftMain = panelMain.getBoundingClientRect().left;
        let topMain = panelMain.getBoundingClientRect().top;
        if (mode == 'mouse') {
            if (colType == 'number' && grid.trim(result.text) == grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.zeroChar])
                input.value = '0';
            else
                input.value = result.text;
            input_code.value = result.value;
        }
        panelInput.style.top = (top - topMain + lineWeight) + 'px';
        panelInput.style.left = (left - leftMain + lineWeight) + 'px';
        panelInput.style.height = (grid.rowHeight - lineWeight) + 'px';
        input.dataset.mode = mode;
        input.dataset.type = colType;
        input.dataset.rowIndex = grid.startRowIndex;
        input.dataset.columnIndex = grid.startCellIndex;
        input.dataset.click = '';
        if (colType == 'date') {
            let width = parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';
            input_icon.style.display = '';
            input_icon.style.top = top + 'px';
            input_icon.style.left = `${left + width - 15}px`;
            input_icon.dataset.type = colType;
            input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
        }
        else if (colType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo) {
            let width = parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';
            input_icon.style.display = '';
            input_icon.style.top = top + 'px';
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
            panelInput.style.width = (parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]) - lineWeight) + 'px';
        }
        if (mode == 'mouse')
            input.select();
    }
    input_hide() {
        let selector = '#' + this.gridId;
        const grid = this;
        const panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        const input = document.querySelector(selector + ' .tbs-grid-input');
        const input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        // date, combo layer
        const input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
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
        if (this.tbsGridDate) {
            this.tbsGridDate.destroy();
            this.tbsGridDate = null;
        }
        if (this.tbsGridCombo) {
            this.tbsGridCombo.destroy();
            this.tbsGridCombo = null;
        }
    }
    input_focus() { if (this.isMobile == false)
        document.querySelector('#' + this.gridId + ' .tbs-grid-input').focus(); }
    editStart(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;
        let state = 0;
        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        let result = true;
        let rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
        const eventRow = grid.getRow(rowIndex);
        if (grid.group_column_table.count() > 0) {
            if (eventRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth] <= grid.group_column_table.count())
                return;
        }
        const column = grid.getColumnByIndex(cellIndex);
        let columnName = grid.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text = grid.getText(rowIndex, columnName);
        let eventData = {};
        eventRow.rowIndex = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName = columnName;
        eventRow.value = value;
        eventRow.text = text;
        eventRow.state = state;
        eventRow.newValue = input.value;
        eventRow.data = eventRow;
        if (mode == 'key') {
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == true && grid.notNull(grid.edit)) {
                let result = grid.edit(grid, state, eventRow);
                if (grid.isNull(result, true)) {
                    grid.input_show(e, mode);
                    grid.editing(e, mode);
                }
                else {
                    // blur is certain
                    document.querySelector(selector + ' .tbs-grid-input').blur();
                }
            }
        }
        else {
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == true && grid.notNull(grid.edit)) {
                let result = true;
                result = grid.edit(grid, state, eventRow);
                if (grid.null(result) || result == true) {
                    grid.input_show(e, mode);
                }
                else {
                    //grid.input_hide(); grid.apply(); // not certain
                    document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
                }
            }
        }
    }
    editing(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;
        let state = 1;
        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        if (input.dataset.columnIndex == -1) {
            grid.input_hide();
            return;
        }
        let result = true;
        let rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
        let column = grid.getColumnByIndex(cellIndex);
        let columnName = grid.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text = grid.getText(rowIndex, columnName);
        const eventRow = grid.getRow(rowIndex);
        let eventData = {};
        eventData.rowIndex = rowIndex;
        eventData.columnIndex = cellIndex;
        eventData.columnName = columnName;
        eventData.value = value;
        eventData.text = text;
        eventData.state = state;
        eventData.newValue = input.value;
        eventData.data = eventRow;
        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == true && grid.notNull(grid.edit)) {
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
    editEnd(e, mode) {
        let selector = '#' + this.gridId;
        const grid = this;
        let state = 2;
        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        if (grid.null(input.dataset.columnIndex) || input.dataset.columnIndex == -1) {
            grid.input_hide();
        }
        else {
            let result = true;
            let rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
            let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
            let column = grid.getColumnByIndex(cellIndex);
            //let column = grid.column_table.selectRowByRowIndex(cellInex);
            let columnName = grid.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text = grid.getText(rowIndex, columnName);
            let eventRow = grid.getRow(rowIndex);
            const eventData = {};
            eventData.rowIndex = rowIndex;
            eventData.columnIndex = cellIndex;
            eventData.columnName = columnName;
            eventData.value = value;
            eventData.text = text;
            eventData.state = state;
            eventData.newValue = input.value;
            eventData.data = eventRow;
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] == true && grid.notNull(grid.edit)) {
                let result = true;
                if (state == 2 && panelInput.style.left != '30000px') {
                    result = grid.edit(grid, state, eventRow);
                    if (grid.null(result) || result == true) {
                        //console.log(2);
                        let s = input.value;
                        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo)
                            s = input_code.value;
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
        //this.event_checkBox();
        this.event_mobileTouchDrag();
        document.addEventListener('scroll', function (e) {
            let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');
            let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
            let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-input-panel-icon');
            let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-layer-panel');
            for (let i = 0; i < inputList.length; i++) {
                let panelInput = panelInputList[i];
                let input = inputList[i];
                let input_icon = inputIconList[i];
                let input_panel = inputPanelList[i];
                input.value = '';
                panelInput.style.left = '30000px';
                panelInput.style.width = '0px';
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
        const bodyMouseDownEvent = function (e) {
            let name = e.target.className;
            const inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
            const inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            if (name.indexOf('tbs-grid-panel10-filter-input') != -1
                || inputPanel.contains(e.target)
                || inputLayerPanel.contains(e.target)
                || name.indexOf('tbs-grid-cell-filter-input') != -1
                || name.indexOf('tbs-grid-cell-filter-combo') != -1) {
            }
            else {
                inputLayerPanel.style.left = '30000px';
                grid.input_focus();
            }
        };
        document.body.addEventListener('mousedown', bodyMouseDownEvent);
        const mouseDownGridEvent = function (e) {
            let name = e.target.className;
            const inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
            const inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            if (name.indexOf('tbs-grid-panel10-filter-input') != -1
                || inputPanel.contains(e.target)
                || inputLayerPanel.contains(e.target)
                || name.indexOf('tbs-grid-cell-filter-input') != -1
                || name.indexOf('tbs-grid-cell-filter-combo') != -1) {
            }
            else {
                inputLayerPanel.style.left = '30000px';
                grid.input_focus();
            }
        };
        document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);
        const windowResizeEvent = function (e) {
            setTimeout(() => { grid.apply(); }, 200);
        };
        window.addEventListener('resize', windowResizeEvent, true);
    }
    event_columnSort(cell) {
        let selector = '#' + this.gridId;
        const grid = this;
        let column = grid.getColumn(cell.dataset.name);
        let columnName = cell.dataset.name;
        // * sort(▼), (▲), (■) order
        if (cell == undefined)
            return false;
        let isSortable = grid.isSortableColumn(cell.dataset.name);
        if (!isSortable)
            return false;
        //let sortDiv = cell.querySelector('.tbs-grid-html-sort');
        let curSortKind = '';
        let sortKind = '';
        if (grid.sort_column_table.isRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName)) {
            let dataRow = grid.sort_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
            curSortKind = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order];
        }
        else {
            curSortKind = '';
        }
        if (curSortKind == 'desc')
            sortKind = '';
        else if (curSortKind == 'asc')
            sortKind = 'desc';
        else
            sortKind = 'asc';
        if (grid.sort_column_table.isRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName)) {
            let dataRow = grid.sort_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
            let rowId = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
            grid.sort_column_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order, sortKind);
        }
        else {
            let dataRow = {};
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = columnName;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order] = sortKind;
            grid.sort_column_table.insert(dataRow);
        }
        let count = grid.sort_column_table.count();
        let emptyCount = grid.sort_column_table.count('order', '');
        if (count == emptyCount) {
            grid.classSort.initSortData();
        }
        if (grid.options.showFilterPanel)
            grid.classFilter.filters();
        grid.classSort.getSortButtonList();
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, grid.classGroup.openDepth, false);
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.tree) {
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
    event_mobileTouchDrag() {
        let selector = '#' + this.gridId;
        const grid = this;
        let startRowIndex, startCellIndex;
        let lastRowIndex, lastCellIndex;
        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos = { left: 0, x: 0 };
        let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        let yPos = { top: 0, y: 0 };
        let actveTopRowIndex = -1;
        const touchStartEvent = function (e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            actveTopRowIndex = -1;
            let col;
            if (e.target.tagName == 'DIV') {
                col = e.target.parentNode;
            }
            else if (e.target.tagName == 'SPAN') {
                col = e.target.parentNode.parentNode;
            }
            else {
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
                if (left < 0)
                    left = 0;
                if (left > xRailWidth)
                    left = xRailWidth;
                xBar.style.left = left.toString() + 'px';
                const header = document.querySelector(selector + ' .tbs-grid-panel20');
                let ratio = (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
                let nLeft = (left * -1 * ratio).toString();
                grid.classScroll.setContentPanelLeft(nLeft);
                //grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                grid.apply();
            }
            else if (Math.abs(xMove) < Math.abs(yMove)) {
                let yBarTop = yPos.top - yMove;
                if (yBarTop < 0)
                    yBarTop = 0;
                if (yBarTop > grid.verticalScroll.railSize)
                    yBarTop = grid.verticalScroll.railSize;
                let displayTopRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
                actveTopRowIndex = displayTopRowIndex;
                let topRowIndex = displayTopRowIndex;
                //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
                setTimeout(function () { grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex); }, 1);
                setTimeout(function () { grid.classPanel30.setDataPanel(topRowIndex); }, 5);
            }
        };
        const touchEndEvent = function (e) {
            //e.stopPropagation();
            let xMove = e.changedTouches[0].clientX - xPos.x;
            let yMove = e.changedTouches[0].clientY - yPos.y;
            let tableCell, targetName;
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
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
            if (e.target.classList.contains('tbs-grid-html-resize')) {
                tableCell = e.target.parentNode;
                resizer = e.target;
            }
            else
                return;
            eventDetail = e.detail;
            if (eventDetail == 1) {
                e.stopPropagation();
                // if (grid.options[columnAlias.resizable] == false) return;
                let isResizable = grid.isResizableColumn(tableCell.dataset.name);
                if (!isResizable)
                    return;
                startX = window.pageXOffset + e.clientX;
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
            }
            else if (eventDetail == 2) {
                e.stopPropagation();
                if (grid.isClassName(e.target, 'tbs-grid-html-resize') != true)
                    return;
                let cell = e.target.parentElement;
                let columnName = grid.getColumnName(cell.cellIndex);
                let isAutoResizable = grid.isAutoResizableColumn(columnName);
                if (isAutoResizable != true)
                    return;
                let colIndex = cell.cellIndex + parseInt(cell.colSpan) - 1;
                let column = grid.getColumn(columnName);
                let firstWidth = parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]);
                let maxWidth = 0;
                let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
                let fontSize = grid.getConfigFont('fontSize');
                let fontFamilty = grid.getConfigFont('fontFamily');
                for (let i = 0, len = grid.header_column_table.count(); i < len; i++) {
                    let headerColumns = grid.header_column_table.data[i];
                    if (headerColumns[colIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'column') {
                        let width = parseInt(grid.getTextWidth(canvas, headerColumns[colIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text], fontSize, fontFamilty));
                        if (width >= maxWidth)
                            maxWidth = width;
                    }
                }
                for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                    let val = grid.getText(i, columnName);
                    let width = parseInt(grid.getTextWidth(canvas, val, fontSize, fontFamilty));
                    if (width >= maxWidth)
                        maxWidth = width;
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
                        let moveWidth = parseInt(movedWidth / count);
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
                        let moveWidth = parseInt(movedWidth / count);
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
            if (eventDetail == 1) {
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
    event_wheel() {
        let selector = '#' + this.gridId;
        const grid = this;
        let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        const mouseWheelEvent = function (e) {
            let name = e.target.className;
            if (name.indexOf('tbs-grid-input-combo') != -1) {
            }
            else {
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
                setTimeout(function () { doInterval(type); }, 500);
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
            if (isNaN(left))
                left = 0;
            let barSize = grid.horizontalScroll.barSize;
            if (e.offsetX >= left && e.offsetX <= (left + barSize))
                return;
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
            let bar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            let top = bar.style.top != '' ? parseInt(bar.style.top, 10) : 0;
            let barSize = grid.verticalScroll.barSize;
            if (e.offsetY >= top && e.offsetY <= (top + barSize))
                return;
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
        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos = { left: 0, x: 0 };
        //== x scroll
        const xMouseDownEvent = function (e) {
            grid.editEnd();
            e.stopPropagation();
            if (e.target.className != 'tbs-grid-horizontal-scroll-bar')
                return;
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
            if (left < 0)
                left = 0;
            if (left > xRailWidth)
                left = xRailWidth;
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
        const yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        const yPos = { top: 0, y: 0 };
        let actveTopRowIndex = -1;
        const yMouseDownEvent = function (e) {
            grid.editEnd();
            e.stopPropagation();
            actveTopRowIndex = -1;
            if (e.target.className != 'tbs-grid-vertical-scroll-bar')
                return;
            const yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            if (grid.empty(yBar.style.top))
                yPos.top = 0;
            else
                yPos.top = parseInt(yBar.style.top, 10);
            yPos.y = e.clientY;
            document.addEventListener('mousemove', yMouseMoveEvent);
            document.addEventListener('mouseup', yMouseUpEvent);
        };
        const yMouseMoveEvent = function (e) {
            let yBarTop = yPos.top + e.clientY - yPos.y;
            if (yBarTop < 0)
                yBarTop = 0;
            else if (yBarTop >= grid.verticalScroll.railSize)
                yBarTop = grid.verticalScroll.railSize;
            let topRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
            if (yBarTop >= grid.verticalScroll.railSize)
                topRowIndex = grid.view_table.count() - grid.pageIntRowCount;
            //console.log(`topRowIndex ${topRowIndex} / yBarTop ${yBarTop} / railSize ${grid.verticalScroll.railSize} `);
            setTimeout(() => { grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex); }, 10);
            setTimeout(() => { grid.classPanel30.setDataPanel(topRowIndex); }, 50);
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
            const eventRow = {};
            eventRow.rowIndex = rowIndex;
            eventRow.data = grid.getRow(rowIndex);
            if (grid.notNull(grid.rowBounding)) {
                let flag = grid.rowBounding(grid, element, eventRow);
            } //user function call
        }
        else if (eventType == 'click' || eventType == 'dblclick') {
            e = param.e;
            mode = param.mode; //mouse, key
            rowIndex = param.rowIndex;
            cellIndex = param.cellIndex;
            let column = grid.getColumnByIndex(cellIndex);
            let columnName = grid.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text = grid.getText(rowIndex, columnName);
            const eventRow = {};
            eventRow.rowIndex = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName = columnName;
            eventRow.value = value;
            eventRow.text = text;
            eventRow.data = grid.getRow(rowIndex);
            if (eventType == 'click') {
                if (grid.notNull(grid.click)) {
                    let flag = grid.click(grid, eventRow);
                } //user function call
            }
            else if (eventType == 'dblclick') {
                if (grid.notNull(grid.dblclick)) {
                    let flag = grid.dblclick(grid, eventRow);
                } //user function call
            }
        }
    }
    tbs_getMaxRowIndexByMouseMove() {
        let selector = '#' + this.gridId;
        const grid = this;
        let maxRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            maxRowIndex = Math.max(...rowIndexArray);
        }
        else {
            maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
        }
        return maxRowIndex;
    }
    tbs_getMinRowIndexByMouseMove() {
        let selector = '#' + this.gridId;
        const grid = this;
        let minRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            minRowIndex = Math.min(...rowIndexArray);
        }
        else {
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
        }
        return minRowIndex;
    }
    tbs_getMaxCellIndexByMouseMove() {
        let selector = '#' + this.gridId;
        const grid = this;
        let maxCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        }
        else {
            maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
        }
        return maxCellIndex;
    }
    tbs_getMinCellIndexByMouseMove() {
        let selector = '#' + this.gridId;
        const grid = this;
        let minCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        }
        else {
            minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
        }
        return minCellIndex;
    }
    tbs_getMaxRowIndexByMouseMove2(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lastY = this.lastY;
        let maxRowIndex;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let len = (tableRows) ? tableRows.length : 0;
        let startRowIndex, lastRowIndex;
        startRowIndex = 0;
        lastRowIndex = len - 1;
        for (let i = startRowIndex; i < lastRowIndex + 1; i++) {
            let tableRow = tableRows[i];
            let tableRowIndex = i + 1;
            let rect = grid.getOffset(tableRow);
            let top = rect.top;
            if (lastY > top)
                maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return maxRowIndex;
    }
    tbs_getMinRowIndexByMouseMove2(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lastY = this.lastY;
        let minRowIndex;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
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
            if (lastY < bottom)
                minRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return minRowIndex;
    }
    tbs_getMaxCellIndexByMouseMove2(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lastX = this.lastX;
        let maxCellIndex;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
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
            const tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                continue;
            let rect = grid.getOffset(tableCell);
            let rectLeft = rect.left;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
            if (lastX > rectLeft)
                maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex;
    }
    tbs_getMinCellIndexByMouseMove2(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lastX = this.lastX;
        let minCellIndex;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
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
            const tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                continue;
            let rect = grid.getOffset(tableCell);
            let rectRight = rect.left + tableCell.getBoundingClientRect().width;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
            if (lastX < rectRight)
                minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    }
    getOffset(el) {
        let _x = 0;
        let _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
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
        let td = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (td == null)
            return;
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
            if (dataRowIndex == lastRowIndex - 1)
                this.classPanel30.setDataPanel(topRowIndex + 1);
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
    tbs_moveCell(type) {
        let selector = '#' + this.gridId;
        const grid = this;
        let cellIndex = -1;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRowIndex, dataRowIndex;
        let tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (grid.null(tableCell))
            return;
        tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
        dataRowIndex = parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
        cellIndex = tableCell.cellIndex;
        if (type == 'left') {
            let startCellIndex = cellIndex;
            cellIndex = cellIndex - 1;
            for (let i = cellIndex; i >= 0; i--) {
                let column = this.column_table.data[i];
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                    cellIndex -= 1;
                else
                    break;
            }
            if (cellIndex < 0 || this.column_table.data[cellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false) {
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
                if (curLeft - moveWidth < 0)
                    sLeft = 0 + 'px';
                else
                    sLeft = -1 * curLeft + moveWidth + 'px';
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
            for (let i = cellIndex, len = this.column_table.count(); i < len; i++) {
                let column = this.column_table.data[i];
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                    cellIndex += 1;
                else
                    break;
            }
            if (cellIndex >= this.column_table.count())
                cellIndex = startCellIndex;
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
                if (curLeft + moveWidth > hiddenSize)
                    sLeft = -1 * hiddenSize + 'px';
                else
                    sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';
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
            if (topRowIndex < 0)
                topRowIndex = 0;
            if (dataRowIndex < 0)
                dataRowIndex = 0;
            if (topRowIndex <= dataRowIndex) {
                this.classRange.removeRange(0, -1);
                let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                this.classPanel30.setDataPanel(_topRowIndex);
            }
            else {
                this.classRange.removeRange(0, -1);
                let rowIndex = this.classScroll.setBarPositionByDirection('up');
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
}


/***/ }),

/***/ 9599:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ TbsGridIs; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridIs {
    constructor() {
    }
    /**
     * Is Functions
     *
     */
    isEditableColumn(columnName) {
        let result = this.column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        return result.editable ? result.editable : false;
    }
    isSortableColumn(columnName) {
        const grid = this;
        let result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.sortable] == true)  result = true;
        // else if (column[columnAlias.sortable] == false) result = false;
        // else {
        result = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.sortable];
        //}
        return result;
    }
    isResizableColumn(columnName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.resizable] == true)  result = true;
        // else if (column[columnAlias.resizable] == false) result = false;
        // else {
        result = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.resizable];
        // }
        return result;
    }
    isMovableColumn(columnName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.movable] == true)  result = true;
        // else if (column[columnAlias.movable] == false) result = false;
        // else {
        result = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.movable];
        // }
        return result;
    }
    isAutoResizableColumn(columnName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.autoResizable];
        //}
        return result;
    }
    isAutoWidthColumn(columnName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.autoWidth];
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
        if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom)
            return false;
        else
            return true;
    }
    isSelectedCell(panelName, rowIndex, cellIndex) {
        //selected 1, 0
        let result = 0;
        let rows = [];
        if (panelName == 'panel31')
            rows = this.data_select_panel31;
        else if (panelName == 'panel32')
            rows = this.data_select_panel30;
        else if (panelName == 'panel30')
            rows = this.data_select_panel30;
        else if (panelName == 'panel41')
            rows = this.classRange40.data_select_panel31;
        else if (panelName == 'panel42')
            rows = this.classRange40.data_select_panel30;
        else if (panelName == 'panel40')
            rows = this.classRange40.data_select_panel30;
        else if (panelName == 'panel51')
            rows = this.classRange50.data_select_panel31;
        else if (panelName == 'panel52')
            rows = this.classRange50.data_select_panel30;
        else if (panelName == 'panel50')
            rows = this.classRange50.data_select_panel30;
        else
            rows = this.data_select_panel30;
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
            if (columnName == column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]) {
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
        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number)
            result = true;
        return result;
    }
    isFilterColumnName(columnName) {
        const grid = this;
        return grid.filter_column_table.isRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
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
}


/***/ }),

/***/ 1425:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ TbsGridLine; }
/* harmony export */ });
class TbsGridLine {
    constructor() {
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
        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();
        if (startRowIndex < rowIndex1)
            startRowIndex = rowIndex1;
        const tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        const tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
        Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
            const tableRow31 = tableRows31[i];
            const tableRow = tableRows[i];
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
    getLastSelectedTableCell(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;
        let lastCell;
        let lastRowIndex = this._lastRowIndex;
        let rowIndex1 = grid.getFirstRowIndex();
        let rowIndex2 = grid.getLastRowIndex();
        if (lastRowIndex > rowIndex2)
            lastRowIndex = rowIndex2;
        let tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
        for (let i = tableRows31.length - 1; i >= 0; i--) {
            if (lastCell != undefined)
                break;
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
    clearSelectedLine() {
        this.topLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.leftLineDiv.style = 'height:0px;top:0px;left:0px;';
        this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.rightLineDiv.style = 'height:0px;top:0px;left:0px;';
    }
    setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {
        if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight))
            this.clearSelectedLine();
        else {
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
        if (grid.fixedColumnIndex != -1) {
            let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0)
                return;
            let fixedColumnIndex = this.fixedColumnIndex;
            /* Get startCell, lastCell */
            let startCell, lastCell;
            //console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
            if (grid._startCellIndex <= grid.fixedColumnIndex)
                startCell = grid.getFirstSelectedTableCell('panel32');
            else
                startCell = grid.getFirstSelectedTableCell('panel30');
            if (grid._lastCellIndex <= grid.fixedColumnIndex)
                lastCell = grid.getLastSelectedTableCell('panel32');
            else
                lastCell = grid.getLastSelectedTableCell('panel30');
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
            let rectPanelLeft = (startCellIndex <= fixedColumnIndex) ? rectLeft : rectPanel30.left - rectTable31.left;
            let rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
            let rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;
            // case outside line
            if (rectLeft <= rectPanelLeft)
                rectLeft = rectPanelLeft;
            if (rectBottom >= rectPanelBottom)
                rectBottom = rectPanelBottom - 2;
            if (rectRight >= rectPanelRight)
                rectRight = rectPanelRight;
            let lineHeight = rectBottom - rectTop;
            let lineWidth = rectRight - rectLeft;
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
        else {
            let tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0)
                return;
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
            if (rectLeft <= rectPanelLeft)
                rectLeft = rectPanelLeft;
            if (rectBottom >= rectPanelBottom)
                rectBottom = rectPanelBottom - 2;
            if (rectRight >= rectPanelRight)
                rectRight = rectPanelRight;
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
        const trLeftList = document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
        const trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
        const trFixBottomtList = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');
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
            if (ri > viewCount - 1)
                break;
            let trLeft = trLeftList[i];
            let trContent = trContentList[i];
            let trFixBottom = trFixBottomtList[i];
            let row = grid.view_table.data[ri];
            //============================================================= left
            let leftTd = trLeft.childNodes[0];
            let selectedValue = this.isSelectedCell31(ri, 0);
            if (selectedValue == 1)
                leftTd.classList.add('tbs-grid-cell-select');
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
        this.displaySelectedLine();
    }
    getFirstDisplayRowIndex(panelName = '') {
        let selector = '#' + this.gridId;
        const grid = this;
        if (this.view_table.count() == 0)
            return -1;
        const trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        // @ts-ignore
        let displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);
        if (isNaN(displayRowIndex))
            displayRowIndex = 0;
        return displayRowIndex;
    }
    getFirstRowIndex(panelName = '') {
        // return : topRowIndex
        let selector = '#' + this.gridId;
        const grid = this;
        if (this.view_table.count() == 0)
            return -1;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        // @ts-ignore
        let topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);
        if (panelName == '') {
            if (isNaN(topRowIndex))
                topRowIndex = 0;
            return topRowIndex;
        }
    }
    getLastRowIndex() {
        let selector = '#' + this.gridId;
        const grid = this;
        if (this.view_table.count() == 0)
            return -1;
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
}


/***/ }),

/***/ 7154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: function() { return /* binding */ TbsGridUserEvent; }
/* harmony export */ });
class TbsGridUserEvent {
    constructor() {
        /**
         * user event
         */
        this.click = null; // (grid, row)
        this.dblclick = null; // (grid, row)
        this.edit = null; // (grid, state, row)
        this.clickCheckbox = null; // (grid, row)
        this.clickInfoCheckBox = null; // (grid, row)
        this.clickButton = null; // (grid, row)
        this.clickLink = null; // (grid, row)
        this.rowBounding = null; // grid, element, row
        this.clickPageFirst = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.clickPagePrev = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.clickPageIndex = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.clickPageNext = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.clickPageLast = null; // (grid, pageIndex, selectedPageCount, userFunction)
    }
}


/***/ }),

/***/ 8760:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: function() { return /* binding */ TbsGridColumns; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridColumns {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    getUserColumns() {
        const grid = this.grid;
        const userColumns = [];
        const getChildren = function (node, rowIndex, startColumnIndex, lastColumnIndex) {
            node[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] = [];
            for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
                const column = grid.header_column_table.selectRowByRowIndex(rowIndex + 1, x);
                if (grid.null(column))
                    break;
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'column') {
                    let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    node[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].push(grid.getColumn(columnName));
                }
                else if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'header') {
                    node[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].push(column);
                    let sIndex = x;
                    let eIndex = x + column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] - 1;
                    getChildren(column, rowIndex + 1, sIndex, eIndex);
                }
            }
        };
        //  header 정보와 컬럼 정보를 가져온다.
        for (let x = 0; x < grid.column_table.count(); x++) {
            const column = grid.header_column_table.selectRowByRowIndex(0, x);
            if (grid.notNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num]))
                delete column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num];
            if (grid.notNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum]))
                delete column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'column') {
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                userColumns.push(grid.getColumn(columnName));
            }
            else if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'header') {
                userColumns.push(column);
                let startColumnIndex = x;
                let lastColumnIndex = x + column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] - 1;
                getChildren(column, 0, startColumnIndex, lastColumnIndex);
            }
        }
        return userColumns;
    }
    setColumnDefaultValue(column) {
        const grid = this.grid;
        let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.dataType])) {
            if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number)
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.dataType] = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number;
            else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.date)
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.dataType] = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string;
            else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo)
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.dataType] = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string;
            else
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.dataType] = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string;
        }
        if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]))
            column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] = 100;
        if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable]))
            column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable] = false;
        if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible]))
            column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] = true;
        if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string) {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'left';
        }
        else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'right';
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.scale]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.scale] = '18,0';
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.roundType]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.roundType] = 'round';
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.fixedScale]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.fixedScale] = true;
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.showZero]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.showZero] = false;
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.commaUnit]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.commaUnit] = 3; // Fixed value.
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.thousandChar]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.thousandChar] = grid.getConfigCulture('thousandChar');
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.decimalChar]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.decimalChar] = grid.getConfigCulture('decimalChar');
            //if (grid.null(column[columnAlias.currencyChar])) column[columnAlias.currencyChar] = grid.getConfigCulture('currencyChar');
        }
        else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.date) {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'center';
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.format]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.format] = grid.getConfigCalendar('dayPattern');
        }
        else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo) {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'left';
        }
        return column;
    }
    createColumns(columns) {
        const grid = this.grid;
        const searchColumn = function (column) {
            if (!column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] = grid.null(columnType) ? _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string : columnType;
                grid.classColumn.setColumnDefaultValue(column);
            }
            else
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].map(n => searchColumn(n));
        };
        columns.map(column => searchColumn(column));
    }
    createColumnTable() {
        const grid = this.grid;
        let dataRows = [];
        const searchColumn = function (column) {
            if (!column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children])
                dataRows.push(column);
            else
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].map(n => searchColumn(n));
        };
        grid.columns.map(column => searchColumn(column));
        /**
         * columns order changed or add column
         */
        grid.column_table.remove();
        dataRows.map(dataRow => grid.column_table.insert(grid.copyJson(dataRow)));
    }
    addColumn(addColumn, columnIndex, orderType) {
        const grid = this.grid;
        grid.columns = this.getUserColumns();
        if (grid.column_table.count() == 0) {
            grid.columns.push(addColumn);
        }
        else if (orderType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .BeforeAfter */ .uu.before) {
            grid.columns.splice(columnIndex, 0, addColumn);
        }
        else if (orderType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .BeforeAfter */ .uu.after) {
            if (columnIndex + 1 >= grid.columns.length)
                grid.columns.push(addColumn);
            else
                grid.columns.splice(columnIndex + 1, 0, addColumn);
        }
        this.createColumns(grid.columns); // add columns(first) or add column
        this.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.updateGrid(grid.column_table.data);
        grid.apply();
    }
    removeColumn(targetColumnIndex) {
        const grid = this.grid;
        if (grid.column_table.count() == 0)
            return;
        const rootColumn = grid.header_column_table.selectRowByRowIndex(0, targetColumnIndex);
        if (grid.null(rootColumn))
            return;
        let startRowIndex = 0;
        let lastRowIndex = grid.headerRowCount;
        let startColIndex = targetColumnIndex;
        let lastColIndex = targetColumnIndex + rootColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] - 1;
        grid.header_column_table.data.map(columns => {
            columns.splice(targetColumnIndex, rootColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan]);
        });
        grid.column_table.data.splice(targetColumnIndex, rootColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan]);
        grid.updateGrid(grid.column_table.data);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    }
    getParentTableCell(column) {
        const grid = this.grid;
        let result = null;
        let rowIndex = column.rowIndex;
        let colIndex = column.colIndex;
        if (rowIndex == 0)
            return null;
        else {
            let rootRowIndex = rowIndex - 1;
            for (let i = colIndex; i >= 0; i--) {
                const dataRow = grid.header_column_table.data[rootRowIndex][i];
                let kind = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind];
                if (kind != 'empty') {
                    result = dataRow;
                    break;
                }
            }
            return result;
        }
    }
    changeColumnOrder(moveColumn, targetColumn, orderType) {
        const grid = this.grid;
        moveColumn = grid.copyJson(moveColumn);
        targetColumn = grid.copyJson(targetColumn);
        /**
         * Same rowIndex
         */
        if (moveColumn.rowIndex != targetColumn.rowIndex)
            return;
        /**
         * Same rowId
         */
        const moveRootColumn = this.getParentTableCell(moveColumn);
        const targetRootColumn = this.getParentTableCell(targetColumn);
        let moveRootRowId = grid.null(moveRootColumn) ? -1 : moveRootColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
        let targetRootRowId = grid.null(targetRootColumn) ? -1 : targetRootColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
        if (moveRootRowId != targetRootRowId)
            return;
        let moveRowIndex = moveColumn.rowIndex;
        let moveColIndex = moveColumn.colIndex;
        let targetRowIndex = targetColumn.rowIndex;
        let targetColIndex = targetColumn.colIndex;
        let rangeStartRowIndex = moveRowIndex;
        let rangeLastRowIndex = grid.headerRowCount - 1;
        let rangeStartColIndex = moveColIndex;
        let rangeLastColIndex = moveColIndex + moveColumn.colSpan - 1;
        // 1. moveColumns copy
        // 2. moveColumns name : __changed__
        const temp = [];
        grid.header_column_table.data.map((row, index) => temp[index] = []);
        for (let i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            const columns = grid.header_column_table.data[i];
            temp[i];
            for (let x = rangeStartColIndex; x <= rangeLastColIndex; x++) {
                const column = columns[x];
                temp[i].push(grid.copyJson(column));
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = '__$$changed$$__';
            }
        }
        // 3. targetColum insert
        for (let i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            const columns = temp[i];
            if (orderType == 'before') {
                grid.header_column_table.insertRowsBefore(i, columns, targetColIndex);
            }
            else if (orderType == 'after') {
                let index = targetColIndex + targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] - 1;
                grid.header_column_table.insertRowsAfter(i, columns, index);
            }
        }
        grid.temp_table.remove();
        // 4. delete  '__changed__';
        for (let i = 0; i < grid.header_column_table.count(); i++) {
            const columns = grid.header_column_table.data[i];
            for (let x = columns.length - 1; x >= 0; x--) {
                const column = columns[x];
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] == '__$$changed$$__')
                    columns.splice(x, 1);
            }
        }
        // colIndex
        grid.header_column_table.makeColIndex();
        // 헤더를 밀어넣은 후에 컬럼을 밀어 넣자.
        const copyColumns = [];
        for (let x = 0; x < grid.column_table.count(); x++) {
            for (let i = 0; i < grid.header_column_table.count(); i++) {
                const column = grid.header_column_table.data[i][x];
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] == 'column')
                    copyColumns.push(grid.copyJson(column));
            }
        }
        grid.temp_table.remove();
        grid.column_table.data.map(row => grid.temp_table.insert(grid.copyJson(row)));
        grid.column_table.remove();
        copyColumns.map(copyColumn => {
            for (let i = 0; i < grid.temp_table.count(); i++) {
                const column = grid.temp_table.selectRowByRowIndex(i);
                if (copyColumn.name == column.name)
                    grid.column_table.insert(grid.copyJson(column));
            }
        });
        grid.temp_table.remove();
        /* Change Fixed Column Index */
        if (grid.fixedColumnIndex != -1) {
            if (moveColumn.colIndex <= grid.fixedColumnIndex && targetColumn.colIndex > grid.fixedColumnIndex) {
                let childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex - childCount;
                if (grid.fixedColumnIndex < 0)
                    grid.classColumn.removeFixedColumn();
                else
                    grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
            else if (moveColumn.colIndex > grid.fixedColumnIndex && targetColumn.colIndex <= grid.fixedColumnIndex) {
                let childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex + childCount;
                grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
        }
        grid.classPanel70.setDataPanel();
        grid.apply();
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
        }
        else {
            startRowIndex = rowIndex;
            startCellIndex = cellIndex;
        }
        if (startRowIndex == -1 || startCellIndex == -1)
            return;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 table tbody tr');
        let trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30 table tbody tr');
        for (let i = 0; i < trList.length; i++) {
            let tr = trList[i];
            let dataRowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
            if (dataRowIndex == startRowIndex) {
                let td = trContentList[i].childNodes[startCellIndex];
                break;
            }
        }
        return td;
    }
    ;
    getRowIndexInTable(tableRowIndex, panelName = 'panel31') {
        let selector = this.selector;
        const grid = this.grid;
        let leftPanelName = panelName;
        leftPanelName = 'panel31';
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
        return parseInt(tableRows[tableRowIndex].childNodes[0]['dataset'].rowIndex);
    }
    getLeftTableCell(rowIndex, panel = 'panel31') {
        1;
        let selector = this.selector;
        const grid = this.grid;
        let result = null;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display:"])');
        for (let i = 0, len = tableRows.length; i < len; i++) {
            let tableRow = tableRows[i];
            let index = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
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
        grid.classHeader.updateHeaderFixedColumns();
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
    getFirstVisibleColumnIndex() {
        const grid = this.grid;
        let result = null;
        for (let i = 0; i < grid.column_table.count(); i++) {
            let column = grid.column_table.data[i];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible]) {
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
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible]) {
                result = i;
                break;
            }
        }
        return result;
    }
}


/***/ }),

/***/ 2609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ TbsGridHeaders; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridHeaders {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    createHeaderColumns() {
        const grid = this.grid;
        const getChildrenColumnCount = function (userColumn) {
            let columnCount = 0;
            const getCount = function (userColumn) {
                if (userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                    for (let i = 0, len = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].length; i < len; i++) {
                        getCount(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children][i]);
                    }
                }
                else
                    columnCount += 1;
            };
            getCount(userColumn);
            return columnCount;
        };
        const getTreeDepth = function (userColumns, depth = 0) {
            let maxDepth = 1;
            const getDepth = (userColumn, depth = 1) => {
                if (depth > maxDepth)
                    maxDepth = depth;
                if (userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                    for (let i = 0, len = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].length; i < len; i++) {
                        getDepth(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children][i], depth + 1);
                    }
                }
            };
            for (let i = 0, len = userColumns.length; i < len; i++)
                getDepth(userColumns[i]);
            return maxDepth;
        };
        const setNumber = function (userColumns, rowIndex, parentNum = 0) {
            userColumns.map(userColumn => {
                num = num + 1;
                userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num] = num;
                userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum] = parentNum;
                userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowIndex] = rowIndex;
                userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowSpan] = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] ? 1 : headerRowCount - rowIndex;
                userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] = getChildrenColumnCount(userColumn);
                if (userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                    setNumber(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children], rowIndex + 1, num);
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
        const grid = this.grid;
        const createHeaderColumns = function (userColumns) {
            userColumns.map(userColumn => {
                let headerColumn = {};
                let kind = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] ? 'header' : 'column';
                let name = null;
                let text = null;
                let align = null;
                let className = null;
                let rowSpan = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowSpan];
                let colSpan = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan];
                let rowIndex = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowIndex];
                let colIndex = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colIndex];
                let visible = null;
                let children = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children], null);
                let num = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num];
                let parentNum = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum];
                let type = 'string';
                if (kind == 'column') {
                    let columnName = userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    let column = grid.getColumn(columnName);
                    name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    text = grid.isNull(column.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text], null);
                    align = grid.isNull(column.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align], 'center');
                    className = grid.isNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className], null);
                    visible = grid.isNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible], true);
                }
                else {
                    name = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name], null);
                    align = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align], 'center');
                    text = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text], null);
                    className = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className], null);
                    visible = grid.isNull(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible], true);
                }
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] = kind;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = align;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] = text;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className] = className;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] = visible;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowSpan] = rowSpan;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] = colSpan;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowIndex] = rowIndex;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colIndex] = colIndex;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] = children;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num] = num;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum] = parentNum;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] = type;
                let childrenCount = headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] ? headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].length : 0;
                let columnCount = headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan];
                headerColumnRows[rowIndex].push(headerColumn);
                let blankColumn = {};
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] = 'empty';
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = align;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] = text;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className] = className;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] = false;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowSpan] = rowSpan;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan] = colSpan;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowIndex] = rowIndex;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colIndex] = colIndex;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] = children;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num] = num;
                blankColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum] = parentNum;
                headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] = type;
                //make blank column(row)
                if (childrenCount == 0) {
                    for (let i = rowIndex + 1; i < headerRowCount; i++)
                        headerColumnRows[i].push(blankColumn);
                }
                //make blank column(colums)
                if (columnCount > 1) {
                    for (let i = 1; i < columnCount; i++)
                        headerColumnRows[rowIndex].push(blankColumn);
                }
                if (userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                    createHeaderColumns(userColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]);
                }
            });
        };
        let headerColumnRows = [];
        let headerRowCount = grid.headerRowCount;
        for (let i = 0; i < headerRowCount; i++)
            headerColumnRows[i] = [];
        createHeaderColumns(grid.columns);
        headerColumnRows.map((columns, rowIndex) => {
            columns.map((column, colIndex) => {
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowIndex] = rowIndex;
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colIndex] = colIndex;
                delete column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
            });
        });
        /* insert headerColumnTable */
        grid.header_column_table.remove();
        headerColumnRows.map((headerColumns, rowIndex) => {
            for (let i = 0, len = headerColumns.length; i < len; i++) {
                const headerColumn = headerColumns[i];
                const item = {};
                item.kind = grid.isNull(headerColumn['kind'], null);
                item.name = grid.isNull(headerColumn['name'], null);
                item.align = grid.isNull(headerColumn['align'], null);
                item.text = grid.isNull(headerColumn['text'], null);
                item.className = grid.isNull(headerColumn['className'], null);
                item.visible = grid.isNull(headerColumn['visible'], false);
                item.rowSpan = grid.isNull(headerColumn['rowSpan'], null);
                item.colSpan = grid.isNull(headerColumn['colSpan'], null);
                item.rowIndex = rowIndex;
                item.colIndex = grid.isNull(headerColumn['colIndex'], null);
                item.type = grid.isNull(headerColumn['type'], 'string');
                item.children = grid.isNull(headerColumn['children'], null);
                grid.header_column_table.insert(rowIndex, item);
            }
        });
    }
    updateHeaderFixedColumns() {
        const grid = this.grid;
        if (grid.header_column_table.count() > 1) {
            let rootColumn;
            let rootColumnIndex;
            let rootColumnColSpan;
            for (let x = grid.fixedColumnIndex; x >= 0; x--) {
                const column = grid.header_column_table.selectRowByRowIndex(0, x);
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind] != 'empty') {
                    rootColumnIndex = x;
                    rootColumnColSpan = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colSpan];
                    break;
                }
            }
            grid.fixedColumnIndex = rootColumnIndex + rootColumnColSpan - 1;
        }
        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) {
            grid.fixedColumnIndex = -1;
            return;
        }
    }
    getDisplayedHeaderColumn(panelName = 'panel30') {
        let selector = this.selector;
        const grid = this.grid;
        // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
        // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
        // styleLeft = parseInt(styleLeft, 10);
        let columns = grid.column_table.data;
        if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
            let startColumnIndex = 0;
            let lastColumnIndex = grid.fixedColumnIndex;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
        else {
            let startColumnIndex = 0;
            let lastColumnIndex = columns.length - 1;
            if (grid.fixedColumnIndex != -1)
                startColumnIndex = grid.fixedColumnIndex + 1;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
    }
    getHeaderColumn(rowIndex, columnIndex) {
        const grid = this.grid;
        return grid.header_column_table.data[rowIndex][columnIndex];
    }
    getHeaderColumnByNumber(num) {
        let selector = this.selector;
        const grid = this.grid;
        let result;
        const getParentColumn = function (headerColumn) {
            if (headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num] == num) {
                result = headerColumn;
                return;
            }
            if (headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children]) {
                for (let i = 0, len = headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].length; i < len; i++) {
                    getParentColumn(headerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children][i]);
                }
            }
        };
        for (let i = 0; i < grid.columns.length; i++)
            getParentColumn(grid.columns[i]);
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
        let columnIndex = grid.getColumnIndex(columnName);
        return grid.classHeader.getHeaderPropertyByIndex(columnIndex, property);
    }
    setHeaderProperty(rowIndex, colIndex, property, value) {
        const grid = this.grid;
        const column = grid.header_column_table.data[rowIndex][colIndex];
        let kind = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.kind];
        column[property] = value;
        if (kind == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .ColumnKind */ .zf.column) {
            let name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            let dataRow = grid.column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name);
            if (property == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text) {
                dataRow.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] = value;
            }
            else if (property == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className) {
                dataRow.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className] = value;
            }
            else {
                dataRow.header[property] = value;
            }
        }
    }
}


/***/ }),

/***/ 176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ TbsDataArrayTable; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5052);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


class TbsDataArrayTable extends _tbs_base__WEBPACK_IMPORTED_MODULE_1__/* .TbsBase */ .H {
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
    selectRows(arrayIndex, field, value, topIndex) {
        let result = [];
        for (let i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            let dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) {
                result.push(dataRow);
                if (topIndex != undefined) {
                    if (result.length == topIndex)
                        break;
                }
            }
        }
        return result;
    }
    selectRow(arrayIndex, field, value) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }
    selectRowByRowIndex(arrayIndex, rowIndex) { return this.data[arrayIndex][rowIndex]; }
    selectRowByRowId(arrayIndex, rowId) {
        let dataRows = this.selectRows(arrayIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }
    selectRowIndexByRowId(arrayIndex, rowId) { return this.selectRowIndex(arrayIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId); }
    selectRowIndex(arrayIndex, field, value) {
        let result = null;
        for (let i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            let dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) {
                result = i;
                break;
            }
        }
        return result;
    }
    selectRowIdByRowIndex(arrayIndex, rowIndex) {
        const dataRow = this.selectRowByRowIndex(arrayIndex, rowIndex);
        return dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
    }
    selectRowRange(arrayIndex, startRowIndex, endRowIndex) {
        if (endRowIndex == undefined)
            endRowIndex = this.count() - 1;
        const result = [];
        for (let i = startRowIndex; i <= endRowIndex; i++)
            result.push(this.data[i]);
        return result;
    }
    selectValue(arrayIndex, rowIndex, field) {
        return this.data[arrayIndex][rowIndex][field];
    }
    isRow(arrayIndex, field, value) {
        let dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0;
    }
    /**
     * Insert
     */
    insertRows(arrayIndex, dataRows) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        this.data[arrayIndex].push(...dataRows);
    }
    insertRowsBefore(arrayIndex, dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex, 0, ...dataRows);
        else
            this.data[arrayIndex].push(...dataRows);
    }
    insertRowsAfter(arrayIndex, dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex + 1, 0, ...dataRows);
        else
            this.data[arrayIndex].push(...dataRows);
    }
    insert(arrayIndex, dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        this.data[arrayIndex].push(dataRow);
    }
    insertBefore(arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex, 0, dataRow);
        else
            this.data[arrayIndex].push(dataRow);
    }
    insertAfter(arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex + 1, 0, dataRow);
        else
            this.data[arrayIndex].push(dataRow);
    }
    /**
     * Remove
     */
    remove(arrayIndex, rowIndex) {
        if (arguments.length == 2)
            this.data[arrayIndex].splice(rowIndex, 1);
        else if (arguments.length == 1)
            this.data[arrayIndex] = [];
        else
            this.data = [];
    }
    removeByRowId(arryIndex, rowId) {
        let rowIndex = this.selectRowIndex(arryIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId);
        if (this.notNull(rowIndex))
            this.remove(rowIndex);
    }
    /**
     * Update
     */
    update(arrayIndex, columnName, field, value) {
        let dataRows = this.selectRows(arrayIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(arrayIndex, columnName, field, value) {
        let dataRows = this.selectRows(arrayIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateByRowIndex(arrayIndex, rowIndex, name, value) {
        let dataRow = this.data[arrayIndex][rowIndex];
        dataRow[name] = value;
    }
    updateByRowId(arrayIndex, rowId, name, value) {
        let dataRow = this.selectRowByRowId(arrayIndex, rowId);
        dataRow[name] = value;
    }
    count(arrayIndex, field, value) {
        if (arguments.length == 3) {
            return this.selectRows(arrayIndex, field, value).length;
        }
        else if (arguments.length == 1) {
            return this.data[arrayIndex].length;
        }
        else {
            return this.data.length;
        }
    }
    makeColIndex() {
        for (let i = 0; i < this.count(); i++) {
            const columns = this.data[i];
            columns.map((column, index) => column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.colIndex] = index);
        }
    }
}


/***/ }),

/***/ 8303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ TbsDataTable; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5052);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


class TbsDataTable extends _tbs_base__WEBPACK_IMPORTED_MODULE_1__/* .TbsBase */ .H {
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
    select() {
        /**
         * whereColumns = [*{name: 'userName', type: include | startWith | lastWith }, count: 10}]
         * orderColumns = [*{name: 'userName', order: asc | desc }]
         * return : [{}, {}];
         */
    }
    selectRows(field, value, topIndex) {
        let result = [];
        if (arguments.length == 0) {
            result = this.data;
        }
        else {
            for (let i = 0, len = this.data.length; i < len; i++) {
                let dataRow = this.data[i];
                if (dataRow[field] == value) {
                    result.push(dataRow);
                    if (topIndex != undefined) {
                        if (result.length == topIndex)
                            break;
                    }
                }
            }
        }
        return result;
    }
    selectRow(field, value) {
        const dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }
    selectRowByRowIndex(rowIndex) { return this.data[rowIndex]; }
    selectRowByRowId(rowId) {
        const dataRows = this.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    }
    selectRowIndexByRowId(rowId) { return this.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId); }
    selectRowIndex(field, value) {
        let result = null;
        for (let i = 0, len = this.data.length; i < len; i++) {
            const dataRow = this.data[i];
            if (dataRow[field] == value) {
                result = i;
                break;
            }
        }
        return result;
    }
    selectRowIdByRowIndex(rowIndex) {
        const dataRow = this.selectRowByRowIndex(rowIndex);
        return dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
    }
    selectRowRange(startRowIndex, endRowIndex) {
        if (endRowIndex == undefined)
            endRowIndex = this.count() - 1;
        const result = [];
        for (let i = startRowIndex; i <= endRowIndex; i++)
            result.push(this.data[i]);
        return result;
    }
    selectValue(rowIndex, field) {
        return this.data[rowIndex][field];
    }
    isRow(field, value) {
        const dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0;
    }
    /**
     * Insert
     */
    insertRows(dataRows) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
            });
        }
        this.data.push(...dataRows);
    }
    insertRowsBefore(dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
            });
        }
        if (rowIndex < this.data.length)
            this.data.splice(rowIndex, 0, ...dataRows);
        else
            this.data.push(...dataRows);
    }
    insertRowsAfter(dataRows, rowIndex) {
        if (this.type == 'table') {
            dataRows.map(dataRow => {
                this.currentRowId += 1;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
                dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
            });
        }
        if (rowIndex + 1 < this.data.length)
            this.data.splice(rowIndex + 1, 0, ...dataRows);
        else
            this.data.push(...dataRows);
    }
    insert(dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
        }
        this.data.push(dataRow);
    }
    insertBefore(dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
        }
        if (rowIndex < this.data.length)
            this.data.splice(rowIndex, 0, dataRow);
        else
            this.data.push(dataRow);
    }
    insertAfter(dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = this.currentRowId;
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = 'I';
        }
        if (rowIndex + 1 < this.data.length)
            this.data.splice(rowIndex + 1, 0, dataRow);
        else
            this.data.push(dataRow);
    }
    /**
     * Remove
     */
    remove(rowIndex) {
        if (arguments.length == 1)
            this.data.splice(rowIndex, 1);
        else
            this.data = [];
    }
    removeByRowId(rowId) {
        let rowIndex = this.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId, rowId);
        if (this.notNull(rowIndex))
            this.remove(rowIndex);
    }
    /**
     * Update
     */
    update(columnName, field, value) {
        let dataRows = this.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateRow(columnName, field, value) {
        let dataRows = this.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        dataRows.map(dataRow => dataRow[field] = value);
    }
    updateByRowIndex(rowIndex, name, value) {
        let dataRow = this.data[rowIndex];
        dataRow[name] = value;
    }
    updateByRowId(rowId, name, value) {
        const dataRow = this.selectRowByRowId(rowId);
        dataRow[name] = value;
    }
    count(field, value) {
        if (arguments.length > 0) {
            return this.selectRows(field, value).length;
        }
        else {
            return this.data.length;
        }
    }
    // /**
    //  * orderBy
    //  * @param sortColumns : [{ name : , order :, dataType: string | number }, ...]
    //  */
    // orderBy(sortColumns: any) {
    //     return this.data.toSorted((a, b) => {
    //         // a : The first element
    //         // b : The second element
    //         for (let i = 0, len = sortColumns.length; i < len; i++) {
    //             let sortColumn = sortColumns[i];
    //             let name = sortColumn[columnAlias.name];
    //             let type = (sortColumn[columnAlias.dataType]) ? sortColumn[columnAlias.dataType] : 'string';
    //             let order = (sortColumn[columnAlias.order]) ? sortColumn[columnAlias.order] : 'asc';
    //             if (order == 'asc') {
    //                 if (type == CellType.number) {
    //                     let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')): 0;
    //                     let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')): 0;
    //                     if (x < y) return -1;
    //                     else if (x > y) return 1;
    //                 }
    //                 else {
    //                     if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
    //                     else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
    //                 }
    //             }
    //             else if (order == 'desc') {
    //                 if (type == CellType.number){
    //                     let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
    //                     let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
    //                     if (x < y) return 1;
    //                     else if (x > y) return -1;
    //                 }
    //                 else {
    //                     if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
    //                     else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
    //                 }
    //             }
    //         }
    //     });
    // }
    getSum(columnName) {
        let result = 0;
        for (let i = 0, len = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result += isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
        }
        return result;
    }
    getAvg(columnName) {
        let rowCount = this.count();
        let result = rowCount == 0 ? 0 : this.getSum(columnName) / rowCount;
        return result;
    }
    getMax(columnName) {
        const arrayItem = [];
        let result = 0;
        for (let i = 0, len = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.max.apply(null, arrayItem);
    }
    getMin(columnName) {
        const arrayItem = [];
        let result = 0;
        for (let i = 0, len = this.count(); i < len; i++) {
            const dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.min.apply(null, arrayItem);
    }
}


/***/ }),

/***/ 132:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: function() { return /* binding */ TbsDatabase; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5052);
/* harmony import */ var _tbs_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8303);
/* harmony import */ var _tbs_data_array_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);



class TbsDatabase extends _tbs_base__WEBPACK_IMPORTED_MODULE_2__/* .TbsBase */ .H {
    constructor() {
        super();
        this.tables = [];
    }
    createTable(tableName) {
        const table = new _tbs_data_table__WEBPACK_IMPORTED_MODULE_0__/* .TbsDataTable */ .Q(tableName);
        table.type = 'table';
        this.tables.push(table);
        return this.getTable(tableName);
    }
    createView(tableName) {
        const table = new _tbs_data_table__WEBPACK_IMPORTED_MODULE_0__/* .TbsDataTable */ .Q(tableName);
        table.type = 'view';
        this.tables.push(table);
        return this.getTable(tableName);
    }
    createArrayTable(tableName) {
        const table = new _tbs_data_array_table__WEBPACK_IMPORTED_MODULE_1__/* .TbsDataArrayTable */ .r(tableName);
        table.type = 'table';
        this.tables.push(table);
        return this.getTable(tableName);
    }
    removeTable(tableName) {
        for (let i = 0, len = this.tables.length; i < len; i++) {
            const table = this.tables[i];
            if (table.tableName === tableName) {
                this.tables.splice(i, 1);
                break;
            }
        }
    }
    getTable(tableName) {
        let result = null;
        for (let i = 0, len = this.tables.length; i < len; i++) {
            const table = this.tables[i];
            if (table.tableName == tableName) {
                result = table;
                break;
            }
        }
        return result;
    }
}


/***/ }),

/***/ 7277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ TbsGridExcel; }
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(347);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4213);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2978);



class TbsGridExcel {
    constructor(grid) {
        this.grid = grid;
    }
    exportExcel(options) {
        const grid = this.grid;
        let headerRowCount = grid.headerRowCount;
        const headerColumns = grid.header_column_table.data;
        let columns = grid.column_table.data;
        let rows = grid.getRows();
        const table = document.createElement('table');
        // table.style.border = 'solid 1px #9b9b9b';
        table.style.borderSpacing = '0px';
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        /**
         * create thead
         */
        let tableRows = this.createTableHead();
        tableRows.map(row => thead.appendChild(row));
        /**
         * create panel20
         */
        if (grid.isNull(options.showHeader, true)) {
            tableRows = this.createPanel20();
            tableRows.map(row => tbody.appendChild(row));
        }
        /**
         * create panel40
         */
        if (grid.isNull(options.showTop, true)) {
            tableRows = this.createPanel40();
            tableRows.map(row => tbody.appendChild(row));
        }
        /**
         * create panel30
         */
        tableRows = this.createPanel30();
        tableRows.map(row => tbody.appendChild(row));
        /**
         * create panel50
         */
        if (grid.isNull(options.showFooter, true)) {
            tableRows = this.createPanel50();
            tableRows.map(row => tbody.appendChild(row));
        }
        table.appendChild(thead);
        table.appendChild(tbody);
        let extensionType = options.extensionType;
        let fileName = options.fileName;
        // if (extensionType == 'csv') {
        //     const blob = new Blob([table.outerHTML], { type: 'application/vnd.ms-excel;charset=utf-8' });
        //     saveAs(blob, fileName + '.xls');
        // }
        // else
        if (extensionType == 'xls') {
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_new();
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.table_to_sheet(table);
            xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_append_sheet(wb, worksheet, fileName);
            const wbout = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(wb, { bookType: 'xls', type: 'binary' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xls');
        }
        else if (extensionType == 'xlsx') {
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_new();
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.table_to_sheet(table);
            xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.book_append_sheet(wb, worksheet, fileName);
            const wbout = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(wb, { bookType: 'xlsx', type: 'binary' });
            (0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xlsx');
        }
    }
    s2ab(s) {
        let buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf); //create uint8array as viewer
        for (var i = 0; i < s.length; i++)
            view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
    }
    createTableHead() {
        const grid = this.grid;
        const result = [];
        const tr = document.createElement('tr');
        grid.column_table.data.map(column => {
            const th = document.createElement('th');
            th.style.width = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible] == true) ? column.width + 'px' : '0px';
            tr.appendChild(th);
        });
        result.push(tr);
        return result;
    }
    createPanel20() {
        const grid = this.grid;
        const result = [];
        grid.header_column_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style.height = grid.rowHeight + 'px';
            for (let i = 0, len = row.length; i < len; i++) {
                const column = row[i];
                let kind = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.kind];
                if (kind == 'empty')
                    continue;
                const td = document.createElement('td');
                td.rowSpan = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.rowSpan];
                td.colSpan = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.colSpan];
                td.style.textAlign = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#fcf1f4';
                td.textContent = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.text];
                tr.appendChild(td);
            }
            result.push(tr);
        });
        return result;
    }
    createPanel30() {
        const grid = this.grid;
        const result = [];
        grid.view_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {
                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
                let visible = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible];
                if (visible == false)
                    continue;
                const formatValue = grid.getFormat(column, row[columnName]);
                let value = formatValue['value'];
                let text = formatValue['text'];
                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        });
        return result;
    }
    createPanel40() {
        const grid = this.grid;
        const result = [];
        grid.top_table.data.map(row => {
            const tr = document.createElement('tr');
            // @ts-ignore
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {
                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
                let visible = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible];
                if (visible == false)
                    continue;
                const formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                let value = formatValue['value'];
                let text = formatValue['text'];
                if (grid.null(row[columnName])) {
                    value = '';
                    text = '';
                }
                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#dbffe3';
                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        });
        return result;
    }
    createPanel50() {
        const grid = this.grid;
        const result = [];
        grid.footer_table.data.map(row => {
            const tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (let i = 0, len = grid.column_table.count(); i < len; i++) {
                const column = grid.column_table.selectRowByRowIndex(i);
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
                let visible = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible];
                if (visible == false)
                    continue;
                let formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                let value = formatValue['value'];
                let text = formatValue['text'];
                if (grid.null(row[columnName])) {
                    value = '';
                    text = '';
                }
                const td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#dbffe3';
                td.textContent = text;
                tr.appendChild(td);
            }
            result.push(tr);
        });
        return result;
    }
}


/***/ }),

/***/ 6324:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ TbsGridPanelBase; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5052);

class TbsGridPanelBase extends _tbs_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsBase */ .H {
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
    createHtml(parentElement) { }
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
        s += '<div class="tbs-grid-input-layer-panel" style="left:30000px;"></div>'; // confuse
        s += '<div class="tbs-grid-canvas"></div>';
        s += '<div class="tbs-grid-input-panel">'; // confuse
        s += '<input type="text" class="tbs-grid-input"  data-type="" data-click=""/>';
        s += '<img class="tbs-grid-input-panel-icon" data-type="" data-click="" />';
        s += '</div>';
        s += '<input type="text" class="tbs-grid-input-code" data-type="" data-click="" style="left:30000px;"/>';
        parentElement.insertAdjacentHTML('beforeend', s);
        parentElement.querySelector(' .tbs-grid-canvas').appendChild(document.createElement('canvas'));
    }
}


/***/ }),

/***/ 486:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: function() { return /* binding */ TbsGridPanel10; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);

class TbsGridPanel10 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
    constructor(grid) {
        super(grid);
        this.grid = grid;
        this.panelName = 'panel10';
    }
    createHtml(parentElement) {
        const grid = this.grid;
        //super.createHtml(parentElement);
        let isShowToolbar = (grid.options['showToolbarPanel']) ? 'tbs-grid-show' : 'tbs-grid-hide';
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
            }
            else {
                grid.classFilter.hideFilterPanel();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter').addEventListener('mousedown', showFilterPanelEvent);
        const resetFilterPanelEvent = function (e) {
            e.stopPropagation();
            grid.classFilter.initFilterData();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset').addEventListener('mousedown', resetFilterPanelEvent);
        /* Sort Panel */
        const showSortPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.options.showSortPanel == false) {
                grid.classSort.showSortPanel();
            }
            else {
                grid.classSort.hideSortPanel();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort').addEventListener('mousedown', showSortPanelEvent);
        const resetSortPanelEvent = function (e) {
            e.stopPropagation();
            grid.classSort.initSortData();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset').addEventListener('mousedown', resetSortPanelEvent);
        /* Group Panel */
        const showGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.options.showGroupPanel)
                grid.classGroup.hideGroupPanel();
            else
                grid.classGroup.showGroupPanel();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group').addEventListener('mousedown', showGroupPanelEvent);
        const expandGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0)
                grid.classGroup.expandGroup();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand').addEventListener('mousedown', expandGroupPanelEvent);
        const collapseGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.collapseGroup();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse').addEventListener('mousedown', collapseGroupPanelEvent);
        const resetGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.initGroupData();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset').addEventListener('mousedown', resetGroupPanelEvent);
        /* Fixled Column Panel */
        const showFixedColumnPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.fixedColumnIndex == -1 && grid._startCellIndex >= 0)
                grid.classColumn.setFixedColumn(grid._startCellIndex);
            else
                grid.classColumn.removeFixedColumn();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column').addEventListener('mousedown', showFixedColumnPanelEvent);
        /* Total Filter */
        // const setTotalFilterEvent = function(e) {
        //     e.stopPropagation();
        //     grid.classFilter.totalFilterSearch(grid.value);
        // }
        // if (document.querySelector(selector + ' .tbs-grid-panel10-filter-input'))
        //     document.querySelector(selector + ' .tbs-grid-panel10-filter-input').addEventListener('keyup', setTotalFilterEvent);
        const firstEvent = function (e) {
            e.stopPropagation();
            grid.classPage.pageIndex = 1;
            grid.classPanel30.setDataPanel(0);
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-first'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-first').addEventListener('mousedown', firstEvent);
        const prevEvent = function (e) {
            e.stopPropagation();
            grid.classPage.pageIndex -= 1;
            grid.classPanel30.setDataPanel(0);
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-prev'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-prev').addEventListener('mousedown', prevEvent);
        const curEvent = function (e) {
            e.stopPropagation();
            grid.classPanel30.setDataPanel(0);
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-select'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-select').addEventListener('mousedown', curEvent);
        const nextEvent = function (e) {
            e.stopPropagation();
            grid.classPage.pageIndex += 1;
            grid.classPanel30.setDataPanel(0);
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-next'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-next').addEventListener('mousedown', nextEvent);
        const lastEvent = function (e) {
            e.stopPropagation();
            grid.classPage.pageIndex = grid.classPage.pageCount;
            grid.classPanel30.setDataPanel(0);
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-page-last'))
            document.querySelector(selector + ' .tbs-grid-panel10-page-last').addEventListener('mousedown', lastEvent);
    }
    showToolbarPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.options.showToolbarPanel = true;
        const panel = document.querySelector(selector + ' .tbs-grid-panel10');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    }
    hideToolbarPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.options.showToolbarPanel = false;
        const panel = document.querySelector(selector + ' .tbs-grid-panel10');
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
        }
        else if (buttonType == 'sort') {
            let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
            button.style.display = '';
        }
        else if (buttonType == 'group') {
            let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');
            button.style.display = '';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');
            button.style.display = '';
        }
        else if (buttonType == 'fixedColumn') {
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
        }
        else if (buttonType == 'sort') {
            let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
            button.style.display = 'none';
        }
        else if (buttonType == 'group') {
            let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');
            button.style.display = 'none';
        }
        else if (buttonType == 'fixedColumn') {
            let button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');
            button.style.display = 'none';
        }
    }
}


/***/ }),

/***/ 4597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: function() { return /* binding */ TbsGridPanel20; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_render_panel_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3787);
/* harmony import */ var _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2978);




class TbsGridPanel20 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridTable */ .u(grid);
        classTable.createTable('panel21', 0, grid.headerRowCount);
        classTable.createTable('panel22', 0, grid.headerRowCount);
        classTable.createTable('panel20', 0, grid.headerRowCount);
        this.setDataPanel();
    }
    setDataPanel(topRowIndex) {
        const grid = this.grid;
        this.setDataPanel1({ panelName: 'panel21' });
        this.setDataPanel2({ panelName: 'panel22' });
        this.setDataPanel0({ panelName: 'panel20' });
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
                const tableCell = tableRow.childNodes[x];
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.type);
                /**
                 * Render: Start
                 */
                let tbsGridRenderInfo = new _tbs_grid_render_panel_info__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanelInfo */ .I(grid);
                tbsGridRenderInfo.start(panelName, tableCell, grid.info_column_table.data[x], i, x);
                tbsGridRenderInfo = null;
                if (i == 0)
                    tableCell.rowSpan = grid.headerRowCount;
                else
                    tableCell.style.display = 'none';
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
                    const tableRow = tablesRows[i];
                    tableRow.style.height = grid.headerRowHeight + 'px';
                    for (let x = 0; x <= grid.fixedColumnIndex; x++) {
                        let tableCell = tableRow.childNodes[x];
                        tableCell.style.display = 'none';
                    }
                }
            }
        }
        for (let i = 0, rowLen = grid.header_column_table.count(); i < rowLen; i++) {
            const tableRow = tablesRows[i];
            tableRow.style.height = grid.headerRowHeight + 'px';
            for (let x = startColumnIndex, colLen = lastColumnIndex; x < colLen; x++) {
                const column = grid.column_table.data[x];
                const header = grid.header_column_table.data[i][x];
                const tableCell = tableRow.childNodes[x];
                let selectedValue = grid.isSelectedHeaderCell(panelName, x);
                if (selectedValue == 1)
                    tableCell.classList.add('tbs-grid-cell-select');
                let columnName = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                tableCell.style.display = (header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.visible] == true) ? '' : 'none';
                tableCell.style.textAlign = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.align];
                tableCell.colSpan = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.colSpan];
                tableCell.rowSpan = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowSpan];
                tableCell.dataset.name = (header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.kind] == 'column') ? columnName : '';
                tableCell.dataset.kind = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.kind];
                if (header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.kind] == 'column') {
                    let className = grid.classHeader.getHeaderProperty(columnName, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.className);
                    if (grid.notNull(className))
                        tableCell.classList.add(className);
                    tableCell.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.visible] == true) ? '' : 'none';
                    let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.type];
                    if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .CellType */ .vZ.checkbox) {
                        const checkbox = tableCell.querySelector('.tbs-grid-html-checkbox');
                        checkbox.style.display = '';
                    }
                }
                tableCell.querySelector('.tbs-grid-html-sort').textContent = '';
                if (grid.sort_column_table.isRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name, columnName) && header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.kind] == 'column') {
                    let sortColumn = grid.classSort.getSortRow(columnName);
                    let sortSymbol = '';
                    let orderNumber = grid.sort_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name, columnName) + 1;
                    if (sortColumn['order'] == 'desc')
                        sortSymbol = '▼' + orderNumber;
                    else if (sortColumn['order'] == 'asc')
                        sortSymbol = '▲' + orderNumber;
                    tableCell.querySelector('.tbs-grid-html-sort').textContent = sortSymbol;
                }
                const textSpan = tableCell.querySelector('.tbs-grid-html-string');
                textSpan.textContent = header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.text];
            }
        }
    }
    panel21_select() {
        let selector = this.selector;
        const grid = this.grid;
        let clsPanel = this;
        let table = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table');
        const cickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else
                return;
            const tableCell = e.target.parentNode.parentNode;
            const column = grid.info_column_table.selectRowByRowIndex(tableCell.cellIndex);
            const columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
            if (clsPanel.isChecked)
                clsPanel.isChecked = false;
            else
                clsPanel.isChecked = true;
            const callback = grid.getInfoRenderer(columnName, 'callback');
            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                const dataRow = grid.view_table.selectRowByRowIndex(i);
                if (callback) {
                    const eventRow = {};
                    eventRow.rowIndex = i;
                    eventRow.columnIndex = tableCell.cellIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.isChecked];
                    eventRow.text = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.isChecked];
                    eventRow.data = dataRow;
                    const result = callback(grid, eventRow);
                    if (result.editable == false)
                        continue;
                    else
                        grid.view_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.isChecked] = clsPanel.isChecked;
                }
                else {
                    grid.view_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.isChecked] = clsPanel.isChecked;
                }
            }
            setTimeout(function () {
                grid.classPanel20.setDataPanel();
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }, 20);
        };
        const mouseDownEvent = function (e) {
            document.addEventListener('mouseup', mouseUpEvent);
        };
        const mouseUpEvent = function (e) {
            let targetName;
            if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'cell';
            }
            else
                return;
            if (targetName == 'cell') {
                let col = e.target.closest('.tbs-grid-cell');
                if (col.cellIndex == 0) {
                    // let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
                    // let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
                    //
                    // grid.classRange.removeRange(0, -1);
                    // let _topRowIndex = grid.classRange.selectRange(0, -1, fromCellIndex, toCellIndex);
                    // grid.classPanel30.setDataPanel(_topRowIndex);
                    grid.classSort.initSortData();
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
            if (e.target.classList.contains('tbs-grid-html-resize'))
                return;
            grid.startX = startX = window.pageXOffset + e.clientX;
            grid.startY = startY = window.pageYOffset + e.clientY;
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            startCellIndex = col.cellIndex;
            lastCellIndex = col.cellIndex;
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e, table);
                }
                else {
                    // @ts-ignore
                    if (window.event.shiftKey) {
                        selectCellShift(e, table);
                    }
                }
            }
            document.addEventListener('mousemove', mouseMoveEvent);
            document.addEventListener('mouseup', mouseUpEvent);
        };
        const mouseMoveEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
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
                    let column = grid.getColumnByIndex(columnIndex);
                    let name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                    let text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.text];
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
                    if (document.querySelectorAll('.tbs-grid-move').length > 0)
                        document.querySelector('.tbs-grid-move').remove();
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
                    let rectMoveCell = moveElement.getBoundingClientRect();
                    let columnIndex = moveElement.dataset.columnIndex;
                    let rowIndex = moveElement.dataset.rowIndex;
                    let column = grid.getColumnByIndex(columnIndex);
                    let name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                    let text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.text];
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
                    if (name != 'group_column')
                        grid.classSort.addSortButton(name, text, order, targetIndex);
                    flagLeft = false;
                    flagRight = false;
                    flagUp = false;
                    flagDown = false;
                    document.removeEventListener('mousemove', mouseMoveEvent);
                    document.removeEventListener('mouseup', mouseUpEvent);
                    if (document.querySelectorAll('.tbs-grid-move').length > 0)
                        document.querySelector('.tbs-grid-move').remove();
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
                    const columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                    // let isChecked = column[columnAlias.isChecked] ? true : false;
                    // if (isChecked) grid.column_table.update(columnName, columnAlias.isChecked, false);
                    // else grid.column_table.update(columnName, columnAlias.isChecked, true);
                    let isChecked = false;
                    if (e.target.checked)
                        isChecked = false;
                    else
                        isChecked = true;
                    let newValue = isChecked ? grid.getTrueValue(columnName) : grid.getFalseValue(columnName);
                    // exclude : disabled checkbox
                    const callback = grid.getRenderer(columnName, 'callback');
                    for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                        const dataRow = grid.view_table.selectRowByRowIndex(i);
                        if (callback) {
                            const eventRow = {};
                            eventRow.rowIndex = i;
                            eventRow.columnIndex = tableCell.cellIndex;
                            eventRow.columnName = columnName;
                            eventRow.value = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                            eventRow.text = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
                            eventRow.data = dataRow;
                            const result = callback(grid, eventRow);
                            if (result.editable == false)
                                continue;
                            else
                                grid.setValue(i, columnName, newValue);
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
                        if (grid.isColumnName(name))
                            grid.event_columnSort(e.target.closest('.tbs-grid-cell'));
                        if (grid.options.showSortPanel)
                            grid.classSort.getSortButtonList();
                    }
                }
                else {
                    if (grid.fixedColumnIndex != -1) {
                        if (document.querySelectorAll('.tbs-grid-move').length == 0)
                            return;
                        /* Find panel area */
                        let isInPanel21 = grid.isInPanel(e, 'panel21', lastX, lastY);
                        let isInPanel22 = grid.isInPanel(e, 'panel22', lastX, lastY);
                        /* Set panel */
                        let tdList20 = null;
                        if (isInPanel21 || isInPanel22)
                            tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel22 tbody td:not([style*="display :none"]');
                        else
                            tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');
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
                                    && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex]
                                    && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                    break;
                                }
                            }
                            else {
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                    && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex]
                                    && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'before');
                                    break;
                                }
                            }
                        }
                        if (document.querySelectorAll('.tbs-grid-move').length > 0)
                            document.querySelector('.tbs-grid-move').remove();
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
                                        && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex]
                                        && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum]
                                        && moveCell.cellIndex != cell.cellIndex) {
                                        grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                        break;
                                    }
                                }
                                else {
                                    if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                        && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.rowIndex]
                                        && movingColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum] == targetColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.parentNum] //column_parentNum
                                        && moveCell.cellIndex != cell.cellIndex) {
                                        grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'before');
                                        break;
                                    }
                                }
                            }
                        }
                        if (document.querySelectorAll('.tbs-grid-move').length > 0)
                            document.querySelector('.tbs-grid-move').remove();
                        flagLeft = false;
                        flagRight = false;
                    }
                }
                if (document.querySelectorAll('.tbs-grid-move').length > 0)
                    document.querySelector('.tbs-grid-move').remove();
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
                grid.input_focus();
            }
        };
        const selectCell = function (e, table) {
            if (e.target.classList.contains('tbs-grid-html-checkbox'))
                return;
            let col = e.target.closest('.tbs-grid-cell');
            let column = grid.getColumnByIndex(col.cellIndex);
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
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
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
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
            // let column = grid.getColumnByIndex(col.cellIndex);
            // let columnName = column[columnAlias.name];
            let isMovable = grid.isMovableColumn();
            if (isMovable) {
                let moveDiv = document.querySelector('.tbs-grid-move');
                if (moveDiv) {
                    moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                    moveDiv.style.top = (lastY - moveCellTop) + 'px';
                    if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20)
                        moveDiv.style.display = '';
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
        const selectCellShift = function (e, table) { };
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
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                let maxCellIndex;
                for (let x = 0, len = tdList.length; x < len; x++) {
                    let cell = tdList[x];
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let left = window.pageXOffset + cell.getBoundingClientRect().left;
                    if (lastX > left)
                        maxCellIndex = cell.cellIndex;
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
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let right = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right)
                        minCellIndex = cell.cellIndex;
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
            const trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            let startRowIndex = grid.startRowIndex;
            let lastRowIndex = grid.lastRowIndex;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex = grid.lastCellIndex;
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
            else if (type == 'down') { }
            /* up */
            else if (type == 'up') { }
        };
        const doInterval = function (type, lastX, lastY) {
            if (flagLeft) {
                //flagLeft  = false;
                flagRight = false;
                setTimeout(function () { doInterval('left', lastX, lastY); }, 5);
                selectRefresh('left', lastX, lastY);
            }
            if (flagRight) {
                flagLeft = false;
                //flagRight = false;
                setTimeout(function () { doInterval('right', lastX, lastY); }, 5);
                selectRefresh('right', lastX, lastY);
            }
        };
        eventPanel.addEventListener('mousedown', mouseDownEvent);
    }
}


/***/ }),

/***/ 6612:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ TbsGridPanel30; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_render_panel30__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7858);
/* harmony import */ var _tbs_grid_render_panel_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3787);
/* harmony import */ var _tbs_grid_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2978);





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
class TbsGridPanel30 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridTable */ .u(grid);
        classTable.createTable('panel31', 0, grid.pageRowCount);
        classTable.createTable('panel32', 0, grid.pageRowCount);
        classTable.createTable('panel30', 0, grid.pageRowCount);
    }
    updateTableRows() {
        let selector = this.selector;
        const grid = this.grid;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
        let addRowCount = grid.pageRowCount - tableRows.length;
        if (addRowCount == 0)
            return;
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridTable */ .u(grid);
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
        }
        else {
            if (tableRows.length < grid.pageRowCount)
                grid.classPanel30.updateTableRows();
        }
        grid.classRange.removePanelRange('panel30');
        grid.classPage.setPageData();
        this.setDataPanel1({ panelName: 'panel31', topRowIndex: topRowIndex });
        this.setDataPanel2({ panelName: 'panel30', topRowIndex: topRowIndex });
        this.setDataPanel0({ panelName: 'panel32', topRowIndex: topRowIndex });
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
        let startColumnIndex = 0;
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
                let tableCell = tableRow.childNodes[x];
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.type);
                /* Render: Start */
                let tbsGridRenderInfo = new _tbs_grid_render_panel_info__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRenderPanelInfo */ .I(grid);
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
        if (grid.fixedColumnIndex == -1)
            return;
        let panelName = this.panelName2;
        let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn(panelName);
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
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
                if (x <= grid.fixedColumnIndex)
                    tableCell = tableRow.childNodes[x];
                /* Render: Start */
                let tbsGridRender = new _tbs_grid_render_panel30__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel30 */ .X(grid);
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
            if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.page)
                rowCount = grid.page_table.count();
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
        }
    }
    setDataPanel0(param) {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName0;
        let topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        let bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
        let result = grid.classHeader.getDisplayedHeaderColumn();
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
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.columnIndex = x;
                tableCell.dataset.name = grid.column_table.data[x].name;
                tableCell.childNodes[0].dataset.rowIndex = i;
                tableCell.childNodes[0].dataset.columnIndex = x;
                tableCell.childNodes[0].dataset.name = grid.column_table.data[x].name;
                if (grid.fixedColumnIndex != -1 && x <= grid.fixedColumnIndex)
                    continue;
                /* Render: Start */
                let tbsGridRender = new _tbs_grid_render_panel30__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel30 */ .X(grid);
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
            if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.page || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.pagination)
                rowCount = grid.page_table.count();
            else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.page || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.pagination)
                rowCount = '';
            else
                rowCount = grid.getRowCount();
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
        }
    }
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
        const mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else if (e.target.classList.contains('tbs-grid-html-button')) { }
            else if (e.target.classList.contains('tbs-grid-html-link')) { }
            else
                return;
            let rowIndex = e.target.parentNode.dataset.rowIndex;
            let columnIndex = e.target.parentNode.dataset.columnIndex;
            let columnName = e.target.parentNode.dataset.name;
            let columnType = grid.column_table.selectValue(columnIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.type);
            let value = grid.view_table.selectValue(rowIndex, columnName);
            if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .CellType */ .vZ.checkbox) {
                if (grid.notEmpty(grid.clickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                    const eventRow = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    let result = grid.clickCheckbox(grid, eventRow);
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
            else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .CellType */ .vZ.button) {
                e.preventDefault();
                if (grid.notEmpty(grid.clickButton) && e.target.disabled != 'disabled') {
                    const eventRow = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    grid.clickButton(grid, eventRow);
                }
            }
            else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .CellType */ .vZ.link) {
                if (grid.notEmpty(grid.clickLink)) {
                    const eventRow = {};
                    const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    const result = grid.clickLink(grid, eventRow);
                    if (!result) {
                        e.preventDefault();
                    }
                }
            }
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
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-checkbox')) {
                targetName = 'icon';
                tableCell = e.target.closest('.tbs-grid-cell');
            }
            else if (e.target.classList.contains('tbs-grid-html-button')) {
                targetName = 'icon';
                tableCell = e.target.closest('.tbs-grid-cell');
            }
            else if (e.target.classList.contains('tbs-grid-html-link')) {
                targetName = 'icon';
                tableCell = e.target.closest('.tbs-grid-cell');
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            // @ts-ignore
            mouseButton = window.event.button;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = -1;
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = tableCell.cellIndex;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    if (targetName == 'icon') {
                        if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .GridMode */ .G3.tree) {
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
                    else
                        selectCell(e);
                }
                // @ts-ignore
                else if (window.event.shiftKey)
                    selectCellShift(e);
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
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .rowAlias */ .lg.selectMode] == 'cell')
                return;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) {
                selectCellShiftMove(e);
            }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey)
                    selectCellMove(e);
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
            flagUp = false;
            flagDown = false;
            flagLeft = false;
            flagRight = false;
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
                //     if (grid.notEmpty(grid.clickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.clickCheckbox(grid, eventRow);
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
                //     if (grid.notEmpty(grid.clickButton) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         grid.clickButton(grid, eventRow);
                //     }
                // }
                // else if (e.target.classList.contains('tbs-grid-html-link')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.clickLink)) {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.clickLink(grid, eventRow);
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
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1) {
                        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
                        if (panelInput.style.left != '30000px') {
                            grid.editEnd();
                            grid.input_focus();
                        }
                        else
                            grid.tbs_executeEvent(true, 'click', param);
                    }
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'dblclick', param);
                    }
                }
                //}
            }
        };
        const selectCell = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.closest('.tbs-grid-cell');
            }
            // else if (e.target.classList.contains('tbs-grid-html-checkbox')) { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-button'))   { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-link'))     { targetName = 'icon'; tableCell = e.target.closest('.tbs-grid-cell'); }
            // else if (e.target.classList.contains('tbs-grid-html-img'))      { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = startCellIndex;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = startRowIndex;
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
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
            if (grid.fixedColumnIndex != -1) {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    // if (lastX < panelRight32 && document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left != '0px') {
                    //     flagLeft = true;
                    //     doInterval(Direction.left);
                    // }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                    select(moveX, moveY);
                }
                else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                    select(moveX, moveY);
                }
            }
            else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const selectCellCtrl = function (e) { };
        const selectCellCtrlMove = function (e) { };
        const selectCellShift = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            grid.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : grid.startCellIndex;
            grid.lastCellIndex = lastCellIndex = tableCell.cellIndex;
            grid.startRowIndex = startRowIndex = (startRowIndex == -1) ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
            grid.lastRowIndex = lastRowIndex = tableCell.parentNode.dataset.rowIndex;
            //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const select = function (moveX, moveY) {
            if (moveY > 0 && moveX > 0) { //down, right
                let maxRowIndex, maxCellIndex;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                let maxRowIndex, minCellIndex;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 2) $maxRowIndex  ${maxRowIndex} minCellIndex ${minCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX > 0) { //up, right
                let minRowIndex, maxCellIndex;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName}  3) minRowIndex ${minRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX < 0) { //up, left
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
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');
                if (lastRowIndex != 0) {
                    let minRowIndex = lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagUp = false;
            }
        };
        const doInterval = function (type) {
            if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left || type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right) {
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
            }
            else {
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
        const eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', mouseClickEvent);
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
        const mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else
                return;
            const tableCell = e.target.parentNode.parentNode;
            let rowIndex = tableCell.dataset.rowIndex;
            let columnIndex = tableCell.cellIndex;
            let columnName = e.target.parentNode.dataset.name;
            let value = grid.view_table.data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.isChecked];
            // @ts-ignore
            if (grid.notEmpty(grid.clickInfoCheckbox) && e.target.disabled != 'disabled') {
                const eventRow = {};
                const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                eventRow.rowIndex = rowIndex;
                eventRow.columnIndex = columnIndex;
                eventRow.columnName = columnName;
                eventRow.value = grid.isNull(value, false);
                eventRow.text = grid.isNull(value, false);
                eventRow.data = dataRows;
                // @ts-ignore
                let result = grid.clickInfoCheckbox(grid, eventRow);
                if (result) {
                    grid.view_table.data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.isChecked] = grid.isNull(value, false) ? false : true;
                }
            }
            else {
                grid.view_table.data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.isChecked] = grid.isNull(value, false) ? false : true;
            }
            setTimeout(() => grid.classPanel30.setDataPanel(grid.getFirstRowIndex()), 20);
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
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                tableCell = e.target;
            }
            else
                return;
            if (tableCell.dataset.cellType != 'number')
                return;
            // @ts-ignore
            mouseButton = window.event.button;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = -1;
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = tableCell.cellIndex;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e);
                }
                // @ts-ignore
                else if (window.event.shiftKey)
                    selectCellShift(e);
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
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .rowAlias */ .lg.selectMode] == 'cell')
                return;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) {
                selectCellShiftMove(e);
            }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey)
                    selectCellMove(e);
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
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1)
                        grid.tbs_executeEvent(true, 'click', param);
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .columnAlias */ .VM.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'dblclick', param);
                    }
                }
            }
        };
        const selectCell = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-cell-div')) {
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                tableCell = e.target;
            }
            else
                return;
            if (tableCell.dataset.cellType != 'number')
                return;
            // startCellIndex = tableCell.cellIndex;
            // lastCellIndex  = startCellIndex;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = startRowIndex;
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const selectCellCtrl = function (e) { };
        const selectCellCtrlMove = function (e) { };
        const selectCellShift = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-cell-div')) {
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                tableCell = e.target;
            }
            else
                return;
            if (tableCell.dataset.cellType != 'number')
                return;
            grid.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : grid.startCellIndex;
            grid.lastCellIndex = lastCellIndex = tableCell.cellIndex;
            grid.startRowIndex = startRowIndex = (startRowIndex == -1) ? tableCell.parentNode.dataset.rowIndex : grid.startRowIndex;
            grid.lastRowIndex = lastRowIndex = tableCell.parentNode.dataset.rowIndex;
            //console.log(`startRowIndex ${startRowIndex} lastRowIndex ${lastRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
            if (tableCell.rowSpan != undefined && tableCell.rowSpan > 1) {
                let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (let i = 0, len = tableRows.length; i < len; i++) {
                    let tableRow = tableRows[i];
                    let rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_4__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const select = function (moveX, moveY) {
            let fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            let toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            if (moveY > 0 && moveX > 0) { //down, right
                let maxRowIndex, maxCellIndex;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                let maxRowIndex, minCellIndex;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
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
                else
                    flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');
                if (lastRowIndex != 0) {
                    let minRowIndex = lastRowIndex;
                    minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagUp = false;
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
        eventPanel.addEventListener('click', mouseClickEvent);
    }
}


/***/ }),

/***/ 7947:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: function() { return /* binding */ TbsGridPanel40; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2693);
/* harmony import */ var _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2978);




class TbsGridPanel40 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
        if (grid.top_column_table.count() == 0)
            return;
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridTable */ .u(grid);
        classTable.createTable('panel41', 0, 1);
        classTable.createTable('panel42', 0, 1);
        classTable.createTable('panel40', 0, 1);
    }
    setDataPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classRange.removePanelRange('panel40');
        this.setDataPanel2();
        this.setDataPanel1();
        this.setDataPanel0();
    }
    setDataPanel1() {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName1;
        if (grid.top_table.count() == 0)
            return;
        let topRowIndex = 0;
        let bottomRowIndex = 0;
        let pageRowCount = 1;
        let rowHeight = grid.rowHeight;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0)
            return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
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
        if (grid.top_table.count() == 0)
            return;
        if (grid.fixedColumnIndex == -1)
            return;
        let panelName = this.panelName2;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex = result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            if (x > grid.fixedColumnIndex && x < startColumnIndex)
                continue;
            let tbsGridRender = new _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel40 */ .Q(grid);
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
        if (grid.top_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex = result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
            let column = grid.column_table.data[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
            let tableCell = tableRow.childNodes[x];
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
            }
            else {
                if (x < startColumnIndex)
                    continue;
            }
            let tbsGridRender = new _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel40 */ .Q(grid);
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
        let classRange = (eventPanelName == 'panel40' || eventPanelName == 'panel42') ? grid.classRange40 : grid.classRange50;
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
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            // @ts-ignore
            mouseButton = window.event.button;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = -1;
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = tableCell.cellIndex;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    if (targetName == 'icon') {
                        if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .GridMode */ .G3.tree) {
                            grid.classTree.setTreeFolding(tableCell);
                            selectCell(e);
                        }
                        else if (grid.group_column_table.count() > 0) {
                            grid.classGroup.setGroupFolding(tableCell);
                            selectCell(e);
                        }
                    }
                    else
                        selectCell(e);
                }
                // @ts-ignore
                else if (window.event.shiftKey)
                    selectCellShift(e);
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
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .rowAlias */ .lg.selectMode] == 'cell')
                return;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) {
                selectCellShiftMove(e);
            }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey)
                    selectCellMove(e);
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
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1) {
                        let panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
                        if (panelInput.style.left != '30000px') {
                            grid.editEnd();
                            grid.input_focus();
                        }
                        else
                            grid.tbs_executeEvent(true, 'click', param);
                    }
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'dblclick', param);
                    }
                }
            }
        };
        const selectCell = function (e) {
            let tableCell;
            //if      (e.target.classList.contains('tbs-grid-html-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            //console.log(`e.target.className ${e.target.className}`);
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    else if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                }
                select(moveX, moveY);
            }
            else {
                let panel = document.querySelector(selector + ' .tbs-grid-panel30'); // + eventPanelName);
                let rect = panel.getBoundingClientRect();
                let absRect = grid.getOffset(panel);
                let panelLeft = absRect.left;
                let panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    else if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                }
                select(moveX, moveY);
            }
        };
        const selectCellCtrl = function (e) { };
        const selectCellCtrlMove = function (e) { };
        const selectCellShift = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-html-icon')) {
                targetName = 'icon';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-img')) {
                targetName = 'img';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-html-string')) {
                targetName = 'text';
                tableCell = e.target.parentNode.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            classRange.startCellIndex = startCellIndex = (startCellIndex == -1) ? tableCell.cellIndex : classRange.startCellIndex;
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
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
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const select = function (moveX, moveY) {
            if (moveX > 0) { // right
                let maxRowIndex, maxCellIndex;
                maxRowIndex = 0;
                maxCellIndex = classRange.getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                classRange.removeRange(0, -1);
                classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
            }
            else if (moveX < 0) { // left
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
            let tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    maxCellIndex = classRange.getMaxCellIndexByMouseMove();
                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                    classRange.removeRange(0, -1);
                    classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                }
                else {
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
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            if (tableCell.dataset.cellType != 'number')
                return;
            // @ts-ignore
            mouseButton = window.event.button;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = -1;
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = tableCell.cellIndex;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrl(e);
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e);
                }
                // @ts-ignore
                else if (window.event.shiftKey)
                    selectCellShift(e);
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
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .rowAlias */ .lg.selectMode] == 'cell')
                return;
            // @ts-ignore
            if (window.event.ctrlKey)
                selectCellCtrlMove(e);
            // @ts-ignore
            else if (window.event.shiftKey) {
                selectCellShiftMove(e);
            }
            // @ts-ignore
            else if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey)
                    selectCellMove(e);
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
                    let param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1)
                        grid.tbs_executeEvent(true, 'click', param);
                    else if (e.detail == 2) {
                        let isEditable = grid.column_table.data[startCellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.edit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'dblclick', param);
                    }
                }
            }
        };
        const selectCell = function (e) {
            let tableCell;
            if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'div';
                tableCell = e.target.parentNode;
            }
            else if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
                tableCell = e.target;
            }
            else
                return;
            if (tableCell.dataset.cellType != 'number')
                return;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = startRowIndex;
            let panelName = eventPanelName;
            if (panelName == 'panel41') {
                grid.classRange40.removeRange(0, -1);
                grid.classRange40.selectRange(0, 0);
            }
            else if (panelName == 'panel51') {
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
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
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
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        this.doInterval(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .Direction */ .OP.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        const selectCellCtrl = function (e) { };
        const selectCellCtrlMove = function (e) { };
        const selectCellShift = function (e) { };
        const selectCellShiftMove = function (e) { };
        const select = function (moveX, moveY) {
            let panelName = eventPanelName;
            if (panelName == 'panel41') {
                grid.classRange40.removeRange(0, -1);
                grid.classRange40.selectRange(0, 0);
            }
            else if (panelName == 'panel51') {
                grid.classRange50.removeRange(0, -1);
                grid.classRange50.selectRange(0, 0);
            }
        };
        eventPanel.addEventListener('mousedown', mouseDownEvent);
    }
}


/***/ }),

/***/ 9506:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: function() { return /* binding */ TbsGridPanel50; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2693);
/* harmony import */ var _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(983);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2978);




class TbsGridPanel50 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
        if (grid.footer_column_table.count() == 0)
            return;
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridTable */ .u(grid);
        classTable.createTable('panel51', 0, 1);
        classTable.createTable('panel52', 0, 1);
        classTable.createTable('panel50', 0, 1);
    }
    setDataPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classRange.removePanelRange('panel50');
        this.setDataPanel2();
        this.setDataPanel1();
        this.setDataPanel0();
    }
    setDataPanel1() {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName1;
        if (grid.footer_table.count() == 0)
            return;
        let topRowIndex = 0;
        let bottomRowIndex = 0;
        let pageRowCount = 1;
        let rowHeight = grid.rowHeight;
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0)
            return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex = result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;
        let tableRowIndex = 0;
        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];
            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            const tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;
            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
        }
    }
    setDataPanel2() {
        let selector = this.selector;
        const grid = this.grid;
        if (grid.fixedColumnIndex == -1)
            return;
        let panelName = this.panelName2;
        if (grid.footer_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
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
            if (x > grid.fixedColumnIndex && x < startColumnIndex)
                continue;
            let tbsGridRender = new _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel40 */ .Q(grid);
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
        if (grid.footer_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex = result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
            let column = grid.column_table.data[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_3__/* .columnAlias */ .VM.name];
            let tableCell = tableRow.childNodes[x];
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
            }
            else {
                if (x < startColumnIndex)
                    continue;
            }
            let tbsGridRender = new _tbs_grid_render_panel40__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderPanel40 */ .Q(grid);
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

/***/ 4672:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ TbsGridPanel70; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(983);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2978);



class TbsGridPanel70 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
        const classTable = new _tbs_grid_table__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridTable */ .u(grid);
        classTable.createTable('panel71', 0, 2);
        classTable.createTable('panel72', 0, 2);
        classTable.createTable('panel70', 0, 2);
    }
    setDataPanel() {
        const grid = this.grid;
        if (grid.column_table.count() == 0)
            return;
        this.setDataPanel2({ panelName: 'panel72' });
        this.setDataPanel0({ panelName: 'panel70' });
    }
    setDataPanel2(param) {
        let selector = this.selector;
        const grid = this.grid;
        let panelName = this.panelName2;
        if (grid.options.showFilterPanel != true)
            return;
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex = result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ` .tbs-grid-${panelName} .tbs-grid-table tbody tr`);
        let tableRow = tableRows[0];
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
            tableCell.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible]) ? '' : 'none';
            tableCell.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.width] + 'px';
            tableCell.dataset.name = columnName;
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
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            let tableCell = tableRow.childNodes[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
            tableCell.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible]) ? '' : 'none';
            tableCell.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.width] + 'px';
            tableCell.dataset.name = columnName;
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
        if (grid.options.showFilterPanel != true)
            return;
        let result = grid.classHeader.getDisplayedHeaderColumn();
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
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
            tableCell.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible]) ? '' : 'none';
            tableCell.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.width] + 'px';
            tableCell.dataset.name = columnName;
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
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name];
            tableCell.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.visible]) ? '' : 'none';
            tableCell.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.width] + 'px';
            tableCell.dataset.name = columnName;
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
            let column = grid.getColumn(columnName);
            let columnIndex = grid.getColumnIndex(columnName);
            let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.type];
            let filterType = combo.selectedOptions[0].value;
            let inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
            let input = inputs[columnIndex];
            let word = input.value;
            if (filterType == '8') {
                input.value = '';
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0 || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .GridMode */ .G3.tree)
                    grid.setData(grid.view_table.data, null, false);
                else
                    grid.apply();
            }
            else if (filterType != '0' && word != '') {
                let filterColumn = grid.filter_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name, column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0 || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .GridMode */ .G3.tree)
                    grid.setData(grid.view_table.data, null, false);
                else
                    grid.apply();
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.filter_column_table.removeByRowId(column);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0 || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .GridMode */ .G3.tree)
                    grid.setData(grid.view_table.data, null, false);
                else
                    grid.apply();
            }
        };
        const keyupEvent = function (e) {
            let input = e.target;
            //if (e.keyCode == 13 || e.keyCode == 9) {
            let columnName = input.dataset.name;
            let column = grid.getColumn(columnName);
            let columnIndex = grid.getColumnIndex(columnName);
            let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.type];
            let combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
            let combo = combos[columnIndex];
            let filterType = combo.selectedOptions[0].value;
            let word = input.value;
            if (filterType != '0') {
                let filterColumn = grid.filter_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name, column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .columnAlias */ .VM.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                if (grid.group_column_table.count() > 0 || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .GridMode */ .G3.tree)
                    grid.setData(grid.view_table.data, null, false);
                else {
                    grid.classFilter.filters();
                    grid.apply();
                }
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0 || grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_2__/* .GridMode */ .G3.tree)
                    grid.setData(grid.view_table.data, null, false);
                else
                    grid.apply();
            }
        };
        const blurEvent = function (e) {
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

/***/ 8327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ TbsGridPanel80; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2978);


class TbsGridPanel80 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            else
                return;
            grid.startX = startX = window.scrollX + e.clientX;
            grid.startY = startY = window.scrollY + e.clientY;
            grid.lastX = lastX = window.scrollX + e.clientX;
            grid.lastY = lastY = window.scrollY + e.clientY;
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e, panel80);
                }
                // @ts-ignore
                else if (window.event.shiftKey) {
                    selectCellShift(e, panel80);
                }
            }
            document.addEventListener('mousemove', mouseMoveEvent);
            document.addEventListener('mouseup', mouseUpEvent);
        };
        const mouseMoveEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            let isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
            if (isInPanel80) {
                if (mouseButton == 0
                    && startX > lastX - grid.mousePointRange
                    && startX < lastX + grid.mousePointRange
                    && startY > lastY - grid.mousePointRange
                    && startY < lastY + grid.mousePointRange) {
                    let element = e.target;
                    let name = element.dataset.name;
                    if (e.detail == 1 && targetName == 'icon') {
                        grid.classGroup.removeGroupButton(element);
                    }
                }
                else {
                    if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
                        let moveElement = document.querySelector('.tbs-grid-move');
                        let rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                        let rectMoveCell = moveElement.getBoundingClientRect();
                        let name = moveElement.dataset.name;
                        let column = grid.getColumn(name);
                        let text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.text];
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
                        if (document.querySelectorAll('.tbs-grid-move').length > 0)
                            document.querySelector('.tbs-grid-move').remove();
                    }
                }
                flagLeft = false;
                flagRight = false;
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
            else {
                if (document.querySelectorAll('.tbs-grid-move').length > 0)
                    document.querySelector('.tbs-grid-move').remove();
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            else
                return;
            if (targetName == 'button' || targetName == 'text') {
                let col = null;
                if (targetName == 'text')
                    col = element.parentNode;
                else
                    col = element;
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
                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
                moveDiv = document.querySelector('.tbs-grid-move');
                let colRect = col.getBoundingClientRect();
                moveCell = col;
                moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
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
            grid.lastX = lastX = window.scrollX + e.clientX;
            grid.lastY = lastY = window.scrollY + e.clientY;
            let moveY = lastY - startY;
            let moveX = lastX - startX;
            let moveDiv = document.querySelector('.tbs-grid-move');
            if (moveDiv) {
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top = (lastY - moveCellTop) + 'px';
                if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20)
                    moveDiv.style.display = '';
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
        const selectCellShift = function (e, table) { };
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
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                let maxCellIndex;
                for (let x = 0, len = tdList.length; x < len; x++) {
                    let cell = tdList[x];
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let left = window.scrollX + cell.getBoundingClientRect().left;
                    if (lastX > left)
                        maxCellIndex = cell.cellIndex;
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
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let right = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right)
                        minCellIndex = cell.cellIndex;
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
            const trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            let startRowIndex = grid.startRowIndex;
            let lastRowIndex = grid.lastRowIndex;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex = grid.lastCellIndex;
            let trCount = trContent.length;
            let tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
            let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                        for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                            if (grid.column_table.data[cellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                                continue;
                            let left = window.scrollX + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                            if (lastX > left)
                                maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
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
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
                        for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                            if (grid.column_table.data[cellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                                continue;
                            let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                            if (lastX < right)
                                minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
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
                setTimeout(function () { doInterval('left', lastX, lastY); }, 5);
                selectRefresh('left', lastX, lastY);
            }
            else if (flagRight) {
                flagLeft = false;
                //flagRight = false;
                setTimeout(function () { doInterval('right', lastX, lastY); }, 5);
                selectRefresh('right', lastX, lastY);
            }
        };
        panel80.addEventListener('mousedown', mouseDownEvent);
    }
}


/***/ }),

/***/ 7582:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: function() { return /* binding */ TbsGridPanel90; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6324);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2978);


class TbsGridPanel90 extends _tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridPanelBase */ .B {
    constructor(grid) {
        super(grid);
        this.panelName = 'panel90';
    }
    createHtml(parentElement) {
        const grid = this.grid;
        let s = '';
        if (grid.options.showSortPanel)
            s += '<div class="tbs-grid-panel90 tbs-grid-show"></div>';
        else
            s += '<div class="tbs-grid-panel90 tbs-grid-hide"></div>';
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            else
                return;
            grid.startX = startX = window.scrollX + e.clientX;
            grid.startY = startY = window.scrollY + e.clientY;
            grid.lastX = lastX = window.scrollX + e.clientX;
            grid.lastY = lastY = window.scrollY + e.clientY;
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
                if (!window.event.ctrlKey && !window.event.shiftKey) {
                    selectCell(e, panel90);
                }
                // @ts-ignore
                else if (window.event.shiftKey) {
                    selectCellShift(e, panel90);
                }
            }
            document.addEventListener('mousemove', mouseMoveEvent);
            document.addEventListener('mouseup', mouseUpEvent);
        };
        const mouseMoveEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            // @ts-ignore
            if (window.event.button === 0) {
                // @ts-ignore
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            let isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);
            if (isInPanel90) {
                if (mouseButton == 0
                    && startX > lastX - grid.mousePointRange
                    && startX < lastX + grid.mousePointRange
                    && startY > lastY - grid.mousePointRange
                    && startY < lastY + grid.mousePointRange) {
                    let element = e.target;
                    let name = element.dataset.name;
                    if (e.detail == 1 && targetName == 'icon') {
                        grid.classSort.removeSortButton(element);
                    }
                    else if (e.detail == 1) {
                        grid.event_columnSort(e.target);
                    }
                }
                else {
                    if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
                        let moveElement = document.querySelector('.tbs-grid-move');
                        let rectMoveCell = moveElement.getBoundingClientRect();
                        let name = moveElement.dataset.name;
                        let column = grid.getColumn(name);
                        let text = column.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.text];
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
                        if (document.querySelectorAll('.tbs-grid-move').length > 0)
                            document.querySelector('.tbs-grid-move').remove();
                    }
                }
                flagLeft = false;
                flagRight = false;
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
            else {
                if (document.querySelectorAll('.tbs-grid-move').length > 0)
                    document.querySelector('.tbs-grid-move').remove();
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
            }
            else if (e.target.classList.contains('tbs-grid-panel-button-text')) {
                targetName = 'text';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-button')) {
                targetName = 'button';
                element = e.target;
            }
            else if (e.target.classList.contains('tbs-grid-panel-bar')) {
                targetName = 'bar';
                element = e.target;
            }
            else
                return;
            if (targetName == 'button' || targetName == 'text') {
                let col = null;
                if (targetName == 'text')
                    col = element.parentNode;
                else
                    col = element;
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
                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
                moveDiv = document.querySelector('.tbs-grid-move');
                let colRect = col.getBoundingClientRect();
                moveCell = col;
                moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
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
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top = (lastY - moveCellTop) + 'px';
                if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20)
                    moveDiv.style.display = '';
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
        const selectCellShift = function (e, table) { };
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
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                let maxCellIndex;
                for (let x = 0, len = tdList.length; x < len; x++) {
                    let cell = tdList[x];
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let left = window.pageXOffset + cell.getBoundingClientRect().left;
                    if (lastX > left)
                        maxCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
            }
            //==================================================================
            if (moveX < 0) {
                let minCellIndex;
                for (let x = tdList.length - 1; x >= 0; x--) {
                    let cell = tdList[x];
                    if (grid.column_table.data[x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                        continue;
                    let right = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right)
                        minCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                let _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
            }
            //==================================================================
        };
        const selectRefresh = function (type, lastX, lastY) {
            let content = document.querySelector(selector + ' .tbs-grid-panel30');
            let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            const trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            let startRowIndex = grid.startRowIndex;
            let lastRowIndex = grid.lastRowIndex;
            let startCellIndex = grid.startCellIndex;
            let lastCellIndex = grid.lastCellIndex;
            let trCount = trContent.length;
            let tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
            let minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    let _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    for (let trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                        for (let cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                            if (grid.column_table.data[cellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                                continue;
                            let left = window.scrollX + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                            if (lastX > left)
                                maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
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
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    for (let rowIndex = 0; rowIndex < trCount; rowIndex++) {
                        for (let cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                            if (grid.column_table.data[cellIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_1__/* .columnAlias */ .VM.visible] == false)
                                continue;
                            let right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                            if (lastX < right)
                                minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
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
                setTimeout(function () { doInterval('left', lastX, lastY); }, 5);
                selectRefresh('left', lastX, lastY);
            }
            if (flagRight) {
                flagLeft = false;
                //flagRight = false;
                setTimeout(function () { doInterval('right', lastX, lastY); }, 5);
                selectRefresh('right', lastX, lastY);
            }
        };
        panel90.addEventListener('mousedown', mouseDownEvent);
    }
}


/***/ }),

/***/ 3787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ TbsGridRenderPanelInfo; }
/* harmony export */ });
/* harmony import */ var _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7390);
/* harmony import */ var _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2090);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);



class TbsGridRenderPanelInfo {
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
        this.cellValue = null;
        this.cellText = null; //user
        this.align = null; //user
        this.className = null; //user
        this.width = null;
        this.visible = null;
        this.editable = false;
        this.tableCell = null;
        this.panelName = null;
    }
    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        let render = this;
        render.panelName = panelName;
        render.tableCell = tableCell;
        render.column = grid.info_column_table.selectRowByRowIndex(columnIndex);
        render.rowIndex = rowIndex;
        render.columnIndex = columnIndex;
        render.columnName = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name);
        render.columnType = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type);
        render.visible = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible);
        render.width = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width);
        render.editable = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable);
        render.align = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align);
        render.className = grid.getProperty(column, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className);
        if (panelName == 'panel41' || panelName == 'panle51' || panelName == 'panle71')
            this.columnType = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string;
        if (panelName == 'panel21') {
            if (render.columnName == 'num') {
                render.cellValue = '';
                render.cellText = '';
            }
            else if (render.columnName == 'mode') {
                render.cellValue = '';
                render.cellText = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue = grid.classPanel20.isChecked;
                render.cellText = grid.classPanel20.isChecked;
            }
        }
        else if (panelName == 'panel31') {
            let dataRow = grid.getRow(render.rowIndex);
            if (render.visible) {
                if (render.columnName == 'num') {
                    if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.page) {
                        render.cellValue = grid.startRowIndex + render.rowIndex + 1;
                        render.cellText = grid.startRowIndex + render.rowIndex + 1;
                    }
                    else {
                        render.cellValue = render.rowIndex + 1;
                        render.cellText = render.rowIndex + 1;
                    }
                    render.cellValue = render.rowIndex + 1;
                    render.cellText = render.rowIndex + 1;
                }
                else if (render.columnName == 'mode') {
                    let mode = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode];
                    mode = (mode != '' && mode != 'S') ? mode : '';
                    render.cellValue = mode;
                    render.cellText = mode;
                }
                else if (render.columnName == 'checkbox') {
                    let check = grid.isNull(dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isChecked], false);
                    render.cellValue = check;
                    render.cellText = check;
                }
            }
        }
        else if (panelName == 'panel41') {
            if (render.columnName == 'num') {
                render.cellValue = '∑';
                render.cellText = '∑';
            }
            else if (render.columnName == 'mode') {
                render.cellValue = '';
                render.cellText = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue = '';
                render.cellText = '';
            }
        }
        else if (panelName == 'panel51') {
            if (render.columnName == 'num') {
                render.cellValue = '∑';
                render.cellText = '∑';
            }
            else if (render.columnName == 'mode') {
                render.cellValue = '';
                render.cellText = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue = '';
                render.cellText = '';
            }
        }
        else if (panelName == 'panel71') {
            if (render.columnName == 'num') {
                render.cellValue = 'R';
                render.cellText = 'R';
            }
            else if (render.columnName == 'mode') {
                render.cellValue = '';
                render.cellText = '';
            }
            else if (render.columnName == 'checkbox') {
                render.cellValue = '';
                render.cellText = '';
            }
        }
        render.createHtml();
    }
    createHtml() {
        const grid = this.grid;
        if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                const render = new _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderCheckbox */ .V();
                render.addElement(this);
            }
        }
        else {
            const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRenderString */ .h();
            render.addElement(this);
        }
        this.setBounding();
    }
    setBounding() {
        const grid = this.grid;
        if (grid.infoRenderer && grid.infoRenderer[this.columnName]
            && grid.infoRenderer[this.columnName].callback
            && ['panel31'].indexOf(this.panelName) != -1) {
            const dataRow = grid.view_table.selectRowByRowIndex(this.rowIndex);
            const eventRow = {};
            eventRow.rowIndex = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName = this.columnName;
            eventRow.value = grid.isNull(dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isChecked], false);
            eventRow.text = grid.isNull(dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isChecked], false);
            eventRow.data = dataRow;
            const result = grid.infoRenderer[this.columnName].callback(grid, eventRow);
            if (grid.notNull(result) && Object.keys(result).length > 0) {
                // className, align, editable, cellValue
                if (grid.notNull(result.className))
                    this.className = result.className;
                if (grid.notNull(result.editable))
                    this.editable = result.editable;
                if (grid.notNull(result.value))
                    this.cellValue = result.value;
                if (grid.notNull(result.align))
                    this.align = result.align;
            }
        }
        const param = {
            className: this.className,
            visible: this.visible,
            align: this.align,
            width: this.width,
        };
        if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                const render = new _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderCheckbox */ .V();
                render.setBounding(this);
            }
        }
        else {
            const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRenderString */ .h();
            render.setBounding(this);
        }
    }
}


/***/ }),

/***/ 7858:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ TbsGridRenderPanel30; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);
/* harmony import */ var _renderer_tbs_grid_render_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3328);
/* harmony import */ var _renderer_tbs_grid_render_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9091);
/* harmony import */ var _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2090);
/* harmony import */ var _renderer_tbs_grid_render_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4911);
/* harmony import */ var _renderer_tbs_grid_render_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7927);
/* harmony import */ var _renderer_tbs_grid_render_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5948);
/* harmony import */ var _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7390);








class TbsGridRenderPanel30 {
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
        this.cellValue = null;
        this.cellText = null; //user
        this.align = null; //user
        this.className = null; //user
        this.width = null;
        this.visible = null;
        this.editable = null;
        this.tableCell = null;
        this.panelName = null;
        this.cellTemplate = null;
        this.depth = null;
    }
    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        let render = this;
        render.panelName = panelName;
        render.tableCell = tableCell;
        render.column = column;
        render.rowIndex = rowIndex;
        render.columnIndex = columnIndex;
        render.columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
        render.columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        render.visible = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible];
        render.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width];
        render.editable = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.editable];
        render.align = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align];
        render.className = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className];
        render.cellValue = grid.getValue(render.rowIndex, render.columnName);
        render.cellText = grid.getText(render.rowIndex, render.columnName);
        if (grid.group_column_table.count() > 0)
            render.depth = grid.getValue(render.rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth);
        render.updateData();
    }
    updateData() {
        const grid = this.grid;
        let render = this;
        if (grid.group_column_table.count() > 0) {
            if (render.columnIndex == 0) {
                const row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                let rowDepth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (rowDepth <= grid.group_column_table.count()) {
                    render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]) + '(' + row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRowIds].length + ')';
                    this.align = 'left';
                }
                else {
                    render.cellText = grid.getText(render.rowIndex, render.columnName);
                }
            }
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.tree) {
            if (render.columnIndex == 0) {
                const row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                let rowDepth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                const children = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
                if (children.length > 0) {
                    render.cellText = grid.getText(render.rowIndex, render.columnName) + '(' + row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].length + ')';
                }
                else {
                    render.cellText = grid.getText(render.rowIndex, render.columnName);
                }
            }
        }
        if (grid.fixedColumnIndex != -1) {
            if (render.panelName == 'panel32') {
                if (render.columnIndex > grid.fixedColumnIndex)
                    render.visible = false;
            }
            else if (render.panelName == 'panel30') {
                if (render.columnIndex <= grid.fixedColumnIndex)
                    render.visible = false;
            }
        }
        if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
            if (this.cellText != '')
                this.cellValue = this.cellText;
        }
        render.createHtml();
    }
    createHtml() {
        const grid = this.grid;
        if (grid.group_column_table.count() > 0 && this.depth <= grid.group_column_table.count()) {
            const render = new _renderer_tbs_grid_render_group__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridRenderGroup */ .Z();
            render.addElement(this);
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.tree && this.columnIndex == 0) {
            const render = new _renderer_tbs_grid_render_tree__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderTree */ ._();
            render.addElement(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.checkbox) {
            const render = new _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridRenderCheckbox */ .V();
            render.addElement(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.button) {
            const render = new _renderer_tbs_grid_render_button__WEBPACK_IMPORTED_MODULE_5__/* .TbsGridRenderButton */ ._();
            render.addElement(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.link) {
            const render = new _renderer_tbs_grid_render_link__WEBPACK_IMPORTED_MODULE_6__/* .TbsGridRenderLink */ ._();
            render.addElement(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.img) {
            const render = new _renderer_tbs_grid_render_img__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRenderImg */ .Z();
            render.addElement(this);
        }
        else {
            const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_7__/* .TbsGridRenderString */ .h();
            render.addElement(this);
        }
        this.setBounding();
    }
    setBounding() {
        const grid = this.grid;
        if (grid.renderer && grid.renderer[this.columnName] && grid.renderer[this.columnName].callback && ['panel30', 'panel32'].indexOf(this.panelName) != -1) {
            const dataRows = grid.view_table.selectRowByRowIndex(this.rowIndex);
            const eventRow = {};
            eventRow.rowIndex = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName = this.columnName;
            eventRow.value = this.cellValue;
            eventRow.text = this.cellText;
            eventRow.data = dataRows;
            const result = grid.renderer[this.columnName].callback(grid, eventRow);
            if (grid.notNull(result) && Object.keys(result).length > 0) {
                // className, align, editable, cellValue
                if (grid.notNull(result.className))
                    this.className = result.className;
                if (grid.notNull(result.editable))
                    this.editable = result.editable;
                if (grid.notNull(result.value))
                    this.cellValue = result.value;
                if (grid.notNull(result.align))
                    this.align = result.align;
            }
        }
        if (grid.group_column_table.count() > 0 && this.depth <= grid.group_column_table.count()) {
            const render = new _renderer_tbs_grid_render_group__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridRenderGroup */ .Z();
            render.setBounding(this);
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.tree && this.columnIndex == 0) {
            const render = new _renderer_tbs_grid_render_tree__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderTree */ ._();
            render.setBounding(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.checkbox) {
            if (this.cellValue == this.grid.getTrueValue(this.columnName))
                this.cellValue = true;
            else
                this.cellValue = false;
            const render = new _renderer_tbs_grid_render_checkbox__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridRenderCheckbox */ .V();
            render.setBounding(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.button) {
            const render = new _renderer_tbs_grid_render_button__WEBPACK_IMPORTED_MODULE_5__/* .TbsGridRenderButton */ ._();
            render.setBounding(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.link) {
            const render = new _renderer_tbs_grid_render_link__WEBPACK_IMPORTED_MODULE_6__/* .TbsGridRenderLink */ ._();
            render.setBounding(this);
        }
        else if (this.columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.img) {
            const render = new _renderer_tbs_grid_render_img__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridRenderImg */ .Z();
            render.setBounding(this);
        }
        else {
            const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_7__/* .TbsGridRenderString */ .h();
            render.setBounding(this);
        }
    }
}


/***/ }),

/***/ 2693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: function() { return /* binding */ TbsGridRenderPanel40; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);
/* harmony import */ var _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7390);


class TbsGridRenderPanel40 {
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
        this.editable = null;
        this.tableCell = null;
        this.panelName = null;
        this.cellTemplate = null;
    }
    start(panelName, tableCell, column, rowIndex, columnIndex) {
        const grid = this.grid;
        const render = this;
        this.panelName = panelName;
        this.tableCell = tableCell;
        this.column = column;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
        this.columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        this.visible = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible];
        this.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width];
        let columnTable = null;
        let dataTable = null;
        if (['panel40', 'panel42'].indexOf(this.panelName) != -1) {
            columnTable = grid.top_column_table;
            dataTable = grid.top_table;
        }
        else if (['panel50', 'panel52'].indexOf(this.panelName) != -1) {
            columnTable = grid.footer_column_table;
            dataTable = grid.footer_table;
        }
        const summaryColumn = columnTable.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, this.columnName);
        if (grid.notNull(summaryColumn)) {
            this.align = grid.notNull(summaryColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]) ?
                summaryColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] : column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align];
            this.className = grid.notNull(summaryColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className]) ?
                summaryColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className] : column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className];
            this.cellValue = grid.getValue(this.rowIndex, this.columnName, dataTable);
            this.cellText = grid.getText(this.rowIndex, this.columnName, dataTable);
        }
        else {
            this.align = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align];
            this.className = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.className];
        }
        render.updateData();
    }
    updateData() {
        const grid = this.grid;
        if (grid.fixedColumnIndex != -1) {
            if (this.panelName.substring(6) == '2') {
                if (this.columnIndex > grid.fixedColumnIndex)
                    this.visible = false;
            }
            else if (this.panelName.substring(6) == '0') {
                if (this.columnIndex <= grid.fixedColumnIndex)
                    this.visible = false;
            }
        }
        this.createHtml();
    }
    createHtml() {
        const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderString */ .h();
        render.addElement(this);
        this.setBounding();
    }
    setBounding() {
        const render = new _renderer_tbs_grid_render_string__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridRenderString */ .h();
        render.setBounding(this);
    }
}


/***/ }),

/***/ 4911:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ TbsGridRenderButton; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridRenderButton {
    addElement(param) {
        const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('button');
        const tableCell = param.tableCell;
        const count = tableCell.querySelectorAll('.tbs-grid-html-button').length;
        const rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    }
    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-button');
        if (!element)
            return;
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param); // editable, align, className,
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.innerHTML = param.cellText;
    }
}


/***/ }),

/***/ 2090:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ TbsGridRenderCheckbox; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridRenderCheckbox {
    addElement(param) {
        const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('checkbox');
        const tableCell = param.tableCell;
        let count = tableCell.querySelectorAll('.tbs-grid-html-checkbox').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    }
    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-checkbox');
        if (!element)
            return;
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param); // editable, align, className,
        if (['panel30', 'panel31', 'panel32'].indexOf(param.panelName) != -1) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        }
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.checked = param.cellValue;
    }
}


/***/ }),

/***/ 3328:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ TbsGridRenderGroup; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridRenderGroup {
    addElement(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            const icon = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('icon');
            const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(icon);
            param.tableCell.childNodes[0].append(element);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
        else {
            const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
    }
    setBounding(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param);
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
            param.grid.classGroup.setGroupIcon(param.tableCell, param.rowIndex);
            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'textContent', param.cellText);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param);
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'textContent', param.cellText);
        }
        else {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param);
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'textContent', param.cellText);
        }
    }
}


/***/ }),

/***/ 5948:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ TbsGridRenderImg; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5359);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


class TbsGridRenderImg {
    addElement(param) {
        const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElement('img');
        const tableCell = param.tableCell;
        let count = tableCell.querySelectorAll('.tbs-grid-html-img').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    }
    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-img');
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.src = param.grid.getUserImageRoot(param.columnName) + param.cellValue;
        element.width = param.grid.getRenderer(param.columnName, 'width') ?
            param.grid.getRenderer(param.columnName, 'width') : param.column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width];
        element.height = param.grid.getRenderer(param.columnName, 'height') ?
            param.grid.getRenderer(param.columnName, 'height') : param.grid.rowHeight;
    }
}


/***/ }),

/***/ 7927:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ TbsGridRenderLink; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridRenderLink {
    addElement(param) {
        const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('link');
        const tableCell = param.tableCell;
        let count = tableCell.querySelectorAll('.tbs-grid-html-link').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    }
    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-link');
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.href = param.cellValue;
        element.innerHTML = param.cellText;
        element.target = '_blank';
    }
}


/***/ }),

/***/ 7390:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ TbsGridRenderString; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridRenderString {
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    addElement(param) {
        const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.createElement('string');
        const tableCell = param.tableCell;
        let count = tableCell.querySelectorAll('.tbs-grid-html-string').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    }
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    setBounding(param) {
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setStyle(param.tableCell, param);
        if (param.depth && param.columnIndex == 0) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
        }
        else {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        }
        const element = param.tableCell.querySelector('.tbs-grid-html-string');
        if (param.cellValue) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'textContent', param.cellText);
        }
        else {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCell(element, 'textContent', '');
        }
    }
}


/***/ }),

/***/ 9091:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ TbsGridRenderTree; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5359);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


class TbsGridRenderTree {
    addElement(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        const children = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
        for (let i = param.tableCell.childNodes[0].childNodes.length - 1; i >= 0; i--) {
            param.tableCell.childNodes[0].childNodes[i].remove();
        }
        if (children.length > 0) {
            const icon = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElement('icon');
            const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElement('string');
            param.tableCell.childNodes[0].appendChild(icon);
            param.tableCell.childNodes[0].appendChild(element);
        }
        else {
            const element = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElement('string');
            param.tableCell.childNodes[0].appendChild(element);
        }
    }
    setBounding(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        const children = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
        let rowDepth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setStyle(param.tableCell, param);
        if (children.length > 0) {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (rowDepth * 15) + 'px');
            param.grid.classTree.setTreeIcon(param.tableCell, param.rowIndex);
        }
        else {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', ((rowDepth * 15) + 15) + 'px');
        }
        const element = param.tableCell.querySelector('.tbs-grid-html-string');
        _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCell(element, 'textContent', param.cellText);
    }
}


/***/ }),

/***/ 3187:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: function() { return /* binding */ TbsGridFooter; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridFooter {
    constructor(grid) {
        this.grid = grid;
        this.selector = `#${grid.gridId}`;
    }
    setFooterColumns(columns) {
        const grid = this.grid;
        columns.map(column => {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'center';
            grid.footer_column_table.insert(column);
        });
    }
    setFooterData() {
        const grid = this.grid;
        if (grid.footer_column_table.count() == 0)
            return;
        let dataRow = {};
        let columns = grid.column_table.data;
        for (let x = 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            dataRow[columnName] = null;
        }
        grid.footer_table.insert(dataRow);
        /* get sum, avg */
        for (let x = 0, len2 = grid.footer_column_table.count(); x < len2; x++) {
            const footerColumn = grid.footer_column_table.data[x];
            let columnName = footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            let summaryType = footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.summaryType];
            let result = null;
            if (summaryType == 'avg') {
                result = grid.view_table.getAvg(columnName);
                grid.footer_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'sum') {
                result = grid.view_table.getSum(columnName);
                grid.footer_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'max') {
                result = grid.view_table.getMax(columnName);
                grid.footer_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'min') {
                result = grid.view_table.getMin(columnName);
                grid.footer_table.updateByRowIndex(0, columnName, result);
            }
            else
                grid.footer_table.updateByRowIndex(0, columnName, footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text]);
        }
    }
    setFooterValue(rowIndex, columnName, value) {
        const grid = this.grid;
        let column = grid.column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        const result = grid.getFormat(column, value);
        grid.footer_table.updateByRowIndex(rowIndex, columnName, result.value);
    }
}


/***/ }),

/***/ 6869:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: function() { return /* binding */ TbsGridTop; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridTop {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    setTopColumns(columns) {
        const grid = this.grid;
        columns.map(column => {
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align]))
                column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.align] = 'center';
            grid.top_column_table.insert(column);
        });
    }
    setTopData() {
        const grid = this.grid;
        if (grid.top_column_table.count() == 0)
            return;
        let topColumns = grid.top_column_table.data;
        let dataRow = {};
        let columns = grid.column_table.data;
        for (let x = 0, len = columns.length; x < len; x++) {
            let column = columns[x];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            dataRow[columnName] = null;
        }
        grid.top_table.insert(dataRow);
        /* get sum, avg */
        for (let x = 0, len2 = grid.top_column_table.count(); x < len2; x++) {
            let footerColumn = grid.top_column_table.data[x];
            let columnName = footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            let summaryType = footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.summaryType];
            let result = null;
            if (summaryType == 'avg') {
                result = grid.view_table.getAvg(columnName);
                grid.top_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'sum') {
                result = grid.view_table.getSum(columnName);
                grid.top_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'max') {
                result = grid.view_table.getMax(columnName);
                grid.top_table.updateByRowIndex(0, columnName, result);
            }
            else if (summaryType == 'min') {
                result = grid.view_table.getMin(columnName);
                grid.top_table.updateByRowIndex(0, columnName, result);
            }
            else
                grid.top_table.updateByRowIndex(0, columnName, footerColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text]);
        }
    }
    setTopValue(rowIndex, columnName, value) {
        const grid = this.grid;
        let column = grid.column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
        const result = grid.getFormat(column, value);
        grid.top_table.updateByRowIndex(rowIndex, columnName, result.value);
    }
}


/***/ }),

/***/ 5052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        return !(this.null(p));
    }
    empty(p) {
        return p == null || p == undefined || this.trim(p) == '';
    }
    notEmpty(p) {
        return !(this.empty(p));
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
            if (arguments.length == 2)
                result = s.substring(index);
            else if (arguments.length == 3)
                result = s.substring(index).substring(0, len);
            return result;
        }
        catch (e) {
            return result;
        }
    }
    trim(s) {
        if (this.null(s))
            return '';
        else
            return s.toString().replace(/^\s+|\s+$/gi, "");
    }
    round(num, dpLen) {
        if (num > 0)
            return +(Math.round(Number(num.toString() + 'e+' + dpLen.toString())) + 'e-' + dpLen.toString());
        else
            return -(Math.round(Number(Math.abs(num).toString() + 'e+' + dpLen.toString())) + 'e-' + dpLen.toString());
    }
    ceil(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) {
            s += '0';
        }
        let n = parseInt(s);
        return (Math.ceil(num * n) / n);
    }
    floor(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) {
            s += '0';
        }
        let n = parseInt(s);
        return (Math.floor(num * n) / n);
    }
    getProperty(jsonObject, property) {
        if (this.empty(jsonObject[property]))
            return null;
        else
            return jsonObject[property];
    }
    printMe() {
    }
}


/***/ }),

/***/ 5043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ TbsGridCell; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5359);

class TbsGridCell {
    constructor(grid, column) {
        this.grid = grid;
        this.column = column;
    }
    createHtml() {
        // const grid = this.grid;
        //
        // let type = this.column[columnAlias.type];
        // let cellTemplate = this.column[columnAlias.cellTemplate];
        //
        // if (grid.null(cellTemplate)) {
        //     this.createCell(type);
        // }
        // else {
        //     this.createTemplate();
        // }
    }
    createCell() {
    }
    createTemplate() {
    }
    hideTableCells(grid, panelName, tableRow, lastColumnIndex) {
        if (grid.fixedColumnIndex != -1) {
            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', '0px');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', '0px');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
    }
    showSelectedCells(grid, panelName, tableCell, rowIndex, cellIndex) {
        let value = grid.isSelectedCell(panelName, rowIndex, cellIndex);
        if (value == 1) {
            if (grid.startRowIndex == rowIndex && grid.startCellIndex == cellIndex)
                tableCell.classList.add('tbs-grid-cell-start');
            else
                tableCell.classList.add('tbs-grid-cell-select');
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

/***/ 7941:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: function() { return /* binding */ TbsGridCombo; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridCombo {
    constructor(grid, column, input, input_code) {
        this.colType = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo;
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.input_code = input_code;
        this.create();
    }
    create() {
        let selector = `#${this.grid.gridId}`;
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
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).innerHTML = s;
        const inputPanel = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
        inputPanel.style.width = '140px';
        inputPanel.style.height = '130px';
        const inputRect = this.input.getBoundingClientRect();
        let top = inputRect.top;
        let left = inputRect.left;
        let right = inputRect.right;
        let height = inputRect.height;
        let documentRect = document.documentElement.getBoundingClientRect();
        let documentRight = documentRect.right;
        let documentBottom = documentRect.bottom;
        if (left + 140 > documentRight) {
            const el = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.left = `${right - 140}px`;
        }
        else {
            const el = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.left = `${left}px`;
        }
        if (top + height + 130 > documentBottom) {
            const el = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.top = `${top - 130}px`;
        }
        else {
            const el = document.querySelector(`${selector} .tbs-grid-input-layer-panel`);
            el.style.top = `${top + height}px`;
        }
        this.setData();
        this.AddEvent();
    }
    clear() {
        let selector = `#${this.grid.gridId}`;
        if (document.querySelector(`${selector} .tbs-grid-input-combo-select`)) {
            const el = document.querySelector(`${selector} .tbs-grid-input-combo-select`);
            el.options.length = 0;
        }
    }
    setData() {
        let selector = `#${this.grid.gridId}`;
        const grid = this.grid;
        this.clear();
        const input_combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');
        let cellIndex = this.input.dataset.columnIndex;
        const column = grid.column_table.data[cellIndex];
        let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
        const data = grid.renderer[columnName].data;
        let key = data.valueName;
        let val = data.textName;
        let value = this.input.value;
        let eCount = 0;
        if (value != '') {
            input_combo.options.length = 0;
            for (let i = 0, len = data.rows.length; i < len; i++) {
                let row = data.rows[i];
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
            if (columnName != '') {
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
    AddEvent() {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;
        let input = this.input;
        let input_code = this.input_code;
        const changeEvent = e => {
            const combo = document.querySelector(`${selector} .tbs-grid-input-combo-select`);
            input.value = combo.selectedOptions[0].text;
            input_code.value = combo.selectedOptions[0].value;
            grid.input_focus();
            this.destroy();
        };
        document.querySelector(`${selector} .tbs-grid-input-combo-select`).addEventListener('change', changeEvent);
    }
    destroy() {
        let selector = `#${this.grid.gridId}`;
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).innerHTML = '';
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.width = '0px';
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.left = '30000px';
    }
}
;


/***/ }),

/***/ 4476:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tbsGridConfigs: function() { return /* binding */ tbsGridConfigs; }
/* harmony export */ });
const tbsGridConfigs = {};
/**
 * Basically, the language with the fastest order is applied.
 */
tbsGridConfigs['en'] = {
    culture: {
        name: 'us',
        language: 'us',
        currencyChar: '$',
        decimalChar: '.',
        thousandChar: ',',
    },
    calendar: {
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayShortNames: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        dayPattern: 'MM-dd-yyyy',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        prevLinkName: 'prev',
        nextLinkName: 'next',
        todayLinkName: 'today'
    },
    font: {
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    labels: {
        /* placeholder */
        sort_placeholder: 'Drag columns to sort',
        group_placeholder: 'Drag columns to group',
        /* Filter Label */
        filter_select: 'Select',
        filter_equal: 'Equal',
        filter_notEqual: 'Does not equal',
        filter_greater: 'Greater than',
        filter_greaterEqual: 'Greater than or Equal to',
        filter_less: 'Less than',
        filter_lessEqual: 'Less than or Equal to',
        filter_between: 'Between',
        filter_blank: 'Blank',
        filter_include: 'Include',
        filter_notInclude: 'Not Include',
        filter_startCharacter: 'Start Characters',
        filter_endCharacter: 'End Characters',
        /* Toolbar Label */
        toolbar_button_filter: 'Filter',
        toolbar_button_sorting: 'Sorting',
        toolbar_button_grouping: 'Grouping',
        toolbar_button_expand: 'Expand',
        toolbar_button_collapse: 'Collapse',
        toolbar_button_fixedColumn: 'Fixed Column',
        toolbar_button_reset: 'Reset',
    }
};
tbsGridConfigs['ko'] = {
    culture: {
        name: 'ko',
        language: 'ko',
        currencyChar: '₩',
        decimalChar: '.',
        thousandChar: ',',
    },
    calendar: {
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        dayShortNames: ['일', '월', '화', '수', '목', '금.', '토'],
        dayPattern: 'yyyy-MM-dd',
        months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        prevLinkName: '이전',
        nextLinkName: '다음',
        todayLinkName: '오늘'
    },
    font: {
        fontSize: '12px',
        fontFamily: 'Nanum Gothic, Arial, Helvetica, sans-serif',
    },
    labels: {
        /* placeholder */
        sort_placeholder: '소팅 컬럼을 드래그 하세요',
        group_placeholder: '그룹 컬럼을 드래그 하세요.',
        /* Filter Lables */
        filter_select: '[선택]',
        filter_equal: '같음',
        filter_notEqual: '같지 않음',
        filter_greater: '보다 큼',
        filter_greaterEqual: '크거나 같음',
        filter_less: '보다 작음',
        filter_lessEqual: '작거나 같음',
        filter_between: '범위',
        filter_blank: '공백',
        filter_include: '포함',
        filter_notInclude: '포함 안함',
        filter_startCharacter: '시작 문자',
        filter_endCharacter: '끝 문자',
        filter_placeholder: '',
        /* Toolbar Label */
        toolbar_button_filter: '필터',
        toolbar_button_sorting: '소팅',
        toolbar_button_grouping: '그룹핑',
        toolbar_button_expand: '펼치기',
        toolbar_button_collapse: '접기',
        toolbar_button_fixedColumn: '고정컬럼',
        toolbar_button_reset: '초기화',
    }
};
/**
 * Write options at the end
 */
tbsGridConfigs['options'] = {
    imageRoot: 'https://cdn.jsdelivr.net/npm/tbsgrid@0.2.23/dist-js/img/',
    userImageRoot: '/src/img/',
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), // true, false
    userAgent: navigator.userAgent, // 'safari' etc
    trueValue: 'Y', // checkbox value
    falseValue: 'N',
    elseValue: 'N',
};


/***/ }),

/***/ 4678:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: function() { return /* binding */ TbsGridControl; }
/* harmony export */ });
class TbsGridControl {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    after_changeColumnOrder() {
        const grid = this.grid;
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
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
        const grid = this.grid;
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
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
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
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

/***/ 1495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ TbsGridDate; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

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
        let selector = `#${this.grid.gridId}`;
        const grid = this.grid;
        if (this.grid.null(this.grid))
            return;
        /* culture */
        let months = grid.getConfigCalendar('months');
        let dayShortNames = grid.getConfigCalendar('dayShortNames');
        let prevLinkName = grid.getConfigCalendar('prevLinkName');
        let todayLinkName = grid.getConfigCalendar('todayLinkName');
        let nextLinkName = grid.getConfigCalendar('nextLinkName');
        let s = '';
        s += '<div class="tbs-grid-input-date">';
        s += '<div class="tbs-grid-input-date-header">';
        s += '<table class="tbs-grid-input-date-header-table" style="width:100%;">';
        s += '<tr>';
        s += '<td class="tbs-grid-input-date-prev"  onclick="' + this.grid.gridId + '.tbsGridDate.prev();" style="width:40px;">' + prevLinkName + '</td>';
        s += '<td class="tbs-grid-input-date-month" style="width:100px;">';
        s += '<select class="tbs-grid-input-date-select-month" style="width:100px;" onchange="' + this.grid.gridId + '.tbsGridDate.selectMonth(this.value);">';
        const array = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        for (let i = 0; i < 12; i++) {
            s += '          <option value="' + array[i] + '">' + months[i] + '</option>';
        }
        s += '</select></td>';
        s += '<td class="tbs-grid-input-date-year"  style="width:50px;"></td>';
        s += '<td class="tbs-grid-input-date-today" onclick="' + this.grid.gridId + '.tbsGridDate.today();" style="width:40px;">' + todayLinkName + '</td>';
        s += '<td class="tbs-grid-input-date-next"  onclick="' + this.grid.gridId + '.tbsGridDate.next();" style="width:40px;">' + nextLinkName + '</td>';
        s += '</tr>';
        s += '</table>';
        s += '</div>';
        s += '<div class="tbs-grid-input-date-content">';
        s += '<table class="tbs-grid-input-date-content-table" style="width:100%;">';
        s += '<thead>';
        s += '<tr>';
        s += '<th class="tbs-grid-input-date-cell" style="color:red;">' + dayShortNames[0] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[1] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[2] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[3] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[4] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="">' + dayShortNames[5] + '</td>';
        s += '<th class="tbs-grid-input-date-cell" style="color:blue">' + dayShortNames[6] + '</td>';
        s += '</tr>';
        s += '</thead>';
        s += '<tbody>';
        for (let i = 0; i < 6; i++) {
            s += '<tr>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-start"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div"></div></td>';
            s += '<td class="tbs-grid-input-date-cell"><div class="tbs-grid-input-date-div-end"></div></td>';
            s += '</tr>';
        }
        s += '</tbody>';
        s += '</table>';
        s += '</div>';
        s += '</div>';
        document.querySelector(`${selector} .tbs-grid-input-layer-panel`).innerHTML = s;
        const inputRect = this.input.getBoundingClientRect();
        let top = inputRect.top;
        let left = inputRect.left;
        let right = inputRect.right;
        let height = window.scrollX + inputRect.height;
        const documentRect = document.documentElement.getBoundingClientRect();
        let documentRight = documentRect.right;
        let documentBottom = documentRect.bottom;
        if (left + 231 > documentRight) {
            document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.left = `${right - 231}px`;
        }
        else {
            document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.left = `${left}px`;
        }
        if (top + height + 187 > documentBottom) {
            document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.top = `${top - 187}px`;
        }
        else {
            document.querySelector(`${selector} .tbs-grid-input-layer-panel`).style.top = `${top + height}px`;
        }
        this.setData();
        this.addEvent();
    }
    clear() {
        const cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        let count = cells.length;
        for (let i = 0; i < count; i++) {
            const cell = cells[i];
            cell.childNodes[0].innerHTML = '';
        }
        document.querySelector('.tbs-grid-input-date').style.display = '';
    }
    setData(data) {
        this.clear();
        const yearCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year');
        if (this.grid.null(data))
            data = new Date();
        else {
            data = new Date(data);
        }
        let year = data.getFullYear();
        let month = data.getMonth() + 1;
        let d = new Date(year, month, 0);
        let curYear = d.getFullYear();
        let curMonth = d.getMonth() + 1;
        let curLastDay = d.getDate();
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
            let day = (cell.childNodes[0].innerHTML == '') ? prevLastDay - (prevLastYoil - i) : cell.childNodes[0].innerHTML;
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
                }
                else {
                    cell.dataset.value = curYear + '-' + this.addZero(curMonth + 1) + '-' + this.addZero(k);
                }
            }
            else {
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
            if (cell.style.color == 'black')
                cell.style.color = 'red';
        }
        cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-end');
        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            if (cell.style.color == 'black')
                cell.style.color = 'blue';
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
        let format = this.column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.format];
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
            let format = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.format];
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
        return (value < 10 ? '0' + value.toString() : value.toString());
    }
    destroy() {
        let selector = '#' + this.grid.gridId;
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').style.width = '0px';
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').style.left = '30000px';
    }
}


/***/ }),

/***/ 5359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: function() { return /* binding */ TbsGridDom; }
/* harmony export */ });
/* harmony import */ var _tbs_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5052);

class TbsGridDom extends _tbs_base__WEBPACK_IMPORTED_MODULE_0__/* .TbsBase */ .H {
    static createElement(type) {
        let tag = 'span';
        let tagType = '';
        let className = 'tbs-grid-html-string';
        if (type == 'string') { }
        else if (type == 'icon') {
            tag = 'span';
            className = 'tbs-grid-html-icon';
        }
        else if (type == 'checkbox') {
            tag = 'input';
            tagType = 'checkbox';
            className = 'tbs-grid-html-checkbox';
        }
        else if (type == 'button') {
            tag = 'button';
            tagType = 'button';
            className = 'tbs-grid-html-button';
        }
        else if (type == 'link') {
            tag = 'a';
            //tagType = 'button';
            className = 'tbs-grid-html-link';
        }
        else if (type == 'img') {
            tag = 'img';
            //tagType = 'button';
            className = 'tbs-grid-html-img';
        }
        return TbsGridDom.createHtml(tag, tagType, className);
    }
    static createHtml(tag, tagType, className) {
        const element = document.createElement(tag);
        element.classList.add(className);
        if (tag == 'input')
            element.type = tagType;
        return element;
    }
    static addElement() {
    }
    static setBounding() {
    }
    static setStyle(tableCell, param) {
        let className = param.className;
        let display = param.visible == true ? '' : 'none';
        let textAlign = param.align;
        let width = param.width;
        TbsGridDom.addUserClass(tableCell, className); // user event
        TbsGridDom.setCellStyle(tableCell, 'display', display);
        TbsGridDom.setCellStyle(tableCell, 'textAlign', textAlign); // user event
        TbsGridDom.setCellStyle(tableCell, 'width', width);
    }
    static setCell(element, property, value) {
        if (element[property] != value)
            element[property] = value;
    }
    static setCellStyle(tableCell, property, value) {
        if (tableCell.style[property] != value)
            tableCell.style[property] = value;
    }
    static addUserClass(tableCell, className) {
        TbsGridDom.removeUserClass(tableCell);
        if (className && className != '')
            tableCell.classList.add(className);
    }
    static removeUserClass(tableCell) {
        // Create classNameArray : for remove except tbs-* className
        const classNameArray = [];
        for (let i = 0, len = tableCell.classList.length; i < len; i++) {
            if (tableCell.classList[i].startsWith('tbs-grid-'))
                continue;
            else
                classNameArray.push(tableCell.classList[i]);
        }
        // Remove classNameArray
        for (let i = 0, len = classNameArray.length; i < len; i++)
            tableCell.classList.remove(classNameArray[i]);
    }
    /**
     * Base Functions
     *
     */
    // null(p) { return p == null || p == undefined; }
    //
    // notNull(p) { return !(p == null || p == undefined); }
    //
    // empty(p) { return p == '';  }
    //
    // notEmpty(p) { return this.notNull(p) && p != ''; }
    /**
     * Dom Functions
     *
     */
    static createElementCheckbox() {
        const element = document.createElement('input');
        element.type = 'checkbox';
        element.classList.add('tbs-grid-html-checkbox');
        return element;
    }
    static createElementCellDiv() {
        const element = document.createElement('div');
        element.classList.add('tbs-grid-cell-div');
        return element;
    }
    static createElementCellIcon() {
        const element = document.createElement('span');
        element.classList.add('tbs-grid-html-icon');
        return element;
    }
    static createElementCellText() {
        const element = document.createElement('span');
        element.classList.add('tbs-grid-html-string');
        element.textContent = '';
        return element;
    }
    static prependCheckbox(element, childElement) {
        const el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined)
            element.prepend(childElement);
    }
    static prependIcon(element, childElement) {
        const el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined)
            element.prepend(childElement);
    }
    /**
     * Table Functions
     */
    static createTable() {
        const table = document.createElement('table');
        table.className = 'tbs-grid-table';
        return table;
    }
}


/***/ }),

/***/ 4533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ TbsGridFilter; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridFilter {
    constructor(grid) {
        this.grid = grid;
        this.selector = `#${grid.gridId}`;
    }
    // totalFilterSearch(s) {
    //     const grid = this.grid;
    //     let filterArray = [];
    //
    //     let arr = grid.trim(s).split(' ');
    //     for (let i = 0; i < arr.length; i++) {
    //         if (grid.trim(arr[i]) !== '') {
    //             filterArray.push(arr[i].toLowerCase());
    //         }
    //     }
    //
    //     const data = grid.source_table.data.filter(function(item) {
    //         let bool = true;
    //         let count = [];
    //         for (let i = 0; i < filterArray.length; i++) {
    //             count[i] = 0;
    //         }
    //         let columnArray = [];
    //         for (let key in item){
    //             let column = grid.getColumn(key);
    //             if (column[columnAlias.visible] === false) continue;
    //             else columnArray.push(item[key]);
    //         }
    //
    //         if (filterArray.length === 0) {
    //             return true;
    //         }
    //         else {
    //             filterArray.forEach(function(cond, i) {
    //                 for (let colIndex = 0, len = columnArray.length; colIndex < len; colIndex++) {
    //                     if (columnArray[colIndex] == null) count[i] = count[i];
    //                     else {
    //                         count[i] = columnArray[colIndex].toString().toLowerCase().includes(cond) === true ? count[i] + 1 : count[i];
    //                     }
    //                 }
    //             })
    //             for (let i = 0; i < filterArray.length; i++) {
    //                 if (count[i] == 0) { bool = false; break; }
    //             }
    //             return bool;
    //         }
    //     });
    //     if (data.length > 0) {
    //         grid.view_table.data = [];
    //         data.map(daraRow => grid.view_table.insert(grid.copyJson(dataRow)));
    //     }
    //     else {
    //         grid.view_table.data = [];
    //     }
    //     grid.horizontalScroll.setScroll(grid.code_horizontal);;
    //     grid.verticalScroll.setScroll(grid.code_vertical);
    //     grid.classScroll.setBarPosition(grid.code_vertical, 0);
    //     grid.refreshRefData();
    // }
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
        let result = [];
        grid.source_table.data.map(row => result.push(grid.copyJson(row)));
        for (let i = 0, len = grid.filter_column_table.count(); i < len; i++) {
            let filterColumn = grid.filter_column_table.data[i];
            result = grid.classFilter.filter(result, filterColumn);
        }
        grid.view_table.remove();
        result.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, 0);
    }
    filter(data, filterColumn) {
        const grid = this.grid;
        let column = grid.getColumn(filterColumn.name);
        let columnType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
        let columnName = filterColumn.name;
        let filterType = filterColumn.type;
        let value = filterColumn.value;
        return data.filter(function (dataRow) {
            let bool = true;
            if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
                let columnText = dataRow[columnName];
                let isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
                return isExist;
            }
            else if (columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.string || columnType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.date || columnType || _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.combo) {
                let val = dataRow[columnName];
                let columnText = grid.getFormatText(column, val);
                let isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
                return isExist;
            }
            else
                return true;
        });
    }
    filterNumberByType(filterType, n, targetNumber) {
        let selector = this.selector;
        const grid = this.grid;
        // @Rule : when number is null, number is zero
        if (grid.null(n))
            n = 0;
        if (grid.null(targetNumber))
            targetNumber = 0;
        let toNumber = null;
        if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Between) {
            let arr = n.split('-');
            n = parseFloat(arr[0]);
            if (arr.length > 1) {
                toNumber = parseFloat(arr[1]);
            }
            else {
                toNumber = 99999999999999;
            }
        }
        else {
            n = parseFloat(n);
            toNumber = null;
        }
        targetNumber = parseFloat(targetNumber);
        if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Equal) {
            return (n == targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.NotEqual) {
            return (n != targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Greater) {
            return (n < targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.GreaterEqual) {
            return (n <= targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Less) {
            return (n > targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.LessEqual) {
            return (n >= targetNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Between) {
            return (targetNumber >= n && targetNumber <= toNumber) ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Blank) {
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
        if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Equal) {
            regExp = new RegExp(`^${s}$`);
            return regExp.test(targetString);
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.NotEqual) {
            regExp = new RegExp(`^${s}$`);
            return regExp.test(targetString) == false ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Include) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.NotInclude) {
            regExp = new RegExp(`${s}`);
            return regExp.test(targetString) == false ? true : false;
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.StartCharacter) {
            regExp = new RegExp(`^${s}`);
            return regExp.test(targetString);
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.EndCharacter) {
            regExp = new RegExp(`${s}$`);
            return regExp.test(targetString);
        }
        else if (filterType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Blank) {
            regExp = new RegExp(`^$`);
            return regExp.test(targetString);
        }
    }
    setFilterColumn(column, filterType, word) {
        const grid = this.grid;
        let dataRow = grid.filter_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]);
        if (grid.null(dataRow)) {
            const item = {};
            item.name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            item.type = filterType;
            item.value = word;
            grid.filter_column_table.insert(item);
        }
        else {
            let rowId = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
            grid.filter_column_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type, filterType);
            grid.filter_column_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.value, word);
        }
    }
    removeFilterColumn(column) {
        const grid = this.grid;
        let rowId = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
        grid.filter_column_table.removeByRowId(rowId);
    }
    createFilterCombo(column) {
        const grid = this.grid;
        let combo = document.createElement('select');
        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type] == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Select, grid.getConfigLabel('filter_select'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Equal, grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.GreaterEqual, grid.getConfigLabel('filter_greaterEqual'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.LessEqual, grid.getConfigLabel('filter_lessEqual'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Greater, grid.getConfigLabel('filter_greater'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Less, grid.getConfigLabel('filter_less'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Between, grid.getConfigLabel('filter_between'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Blank, grid.getConfigLabel('filter_blank'));
        }
        else {
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Include, grid.getConfigLabel('filter_include'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Equal, grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.StartCharacter, grid.getConfigLabel('filter_startCharacter'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.EndCharacter, grid.getConfigLabel('filter_endCharacter'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.Blank, grid.getConfigLabel('filter_blank'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.NotEqual, grid.getConfigLabel('filter_notEqual'));
            grid.classFilter.addFilterComboOption(combo, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .FilterType */ .RJ.NotInclude, grid.getConfigLabel('filter_notInclude'));
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
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }
}


/***/ }),

/***/ 8980:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: function() { return /* binding */ TbsGridGroup; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridGroup {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.openDepth = null;
        this.splitChar = '__$__';
    }
    setGroupData(data, openDepth = 1, isFirst = true) {
        let selector = this.selector;
        const grid = this.grid;
        if (isFirst) {
            if (grid.null(data) || data.length == 0)
                return;
        }
        /**
         * set openDepth
         */
        openDepth = grid.isNull(openDepth, grid.group_column_table.count() + 1);
        if (openDepth == 0)
            openDepth = grid.group_column_table.count() + 1;
        else if (openDepth > grid.group_column_table.count() + 1)
            openDepth = grid.group_column_table.count() + 1;
        this.openDepth = openDepth;
        // create source_data, view_table.data
        if (isFirst) {
            grid.source_table.remove();
            for (let i = 0, len = data.length; i < len; i++) {
                const dataRow = data[i];
                const item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }
                // const dataColumns: any[] = grid.field_table.selectRows();
                // for (let x = 0, len = dataColumns.length; x < len; x++) {
                //     const column = dataColumns[x];
                //     let columnName  = column[columnAlias.name];
                //     item[columnName] = dataRow[columnName];
                // }
                grid.source_table.insert(item);
            }
        }
        grid.group_header_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();
        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));
        /* Filter */
        grid.classFilter.filters();
        /* Add Group Column */
        grid.sort_column_table.data.map(dataRow => grid.temp_table.insert(grid.copyJson(dataRow)));
        grid.sort_column_table.remove();
        grid.group_column_table.data.map(dataRow => {
            let columnName = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            //let groupOrder = grid.isNull(dataRow[columnAlias.order], '');
            const row = grid.temp_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
            if (row) {
                let order = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order];
                if (order == '')
                    order = 'asc';
                row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order] = order;
                grid.sort_column_table.insert(row);
                // grid.group_column_table.update(columnName, columnAlias.order, order);
            }
            else {
                const item = {};
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = columnName;
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order] = 'asc';
                grid.sort_column_table.insert(item);
                // grid.group_column_table.update(columnName, columnAlias.order, 'asc');
            }
            let rowIndex = grid.temp_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName);
            if (grid.notNull(rowIndex))
                grid.temp_table.remove(rowIndex);
        });
        grid.temp_table.data.map(dataRow => grid.sort_column_table.insert(grid.copyJson(dataRow)));
        grid.temp_table.remove();
        /* Sorting */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        /* create group data */
        grid.classGroup.createGroupData();
        /* insert into view_table from group_table */
        grid.view_table.remove();
        for (let i = 0, len = grid.group_table.count(); i < len; i++) {
            let dataRow = grid.group_table.data[i];
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = ''; // S, U, I, D, blank
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }
        grid.group_table.remove();
        /* Summary */
        grid.classGroup.getGroupSummary();
        // open depth
        grid.view_table.data.map(row => {
            let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = (depth < openDepth) ? true : false;
            row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows] = [];
        });
        if (openDepth <= grid.group_column_table.count()) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                const rootRow = grid.view_table.selectRowByRowIndex(i);
                let rootDepth = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (rootDepth == openDepth && rootDepth <= grid.group_column_table.count()) {
                    this.closeGroupRow(i);
                }
            }
        }
        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
        if (grid.view_table.count() == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
        }
        else {
            // @ts-ignore
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = toString(grid.view_table.count());
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.autoWidth] == true)
            grid.setColumnAutoWidth();
        grid.classGroup.getGroupButtonList();
        grid.classScroll.setPanelSize();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }
    createGroupData() {
        const grid = this.grid;
        // create group data
        const groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
        groupData.map(row => {
            grid.source_table.currentRowId += 1;
            row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId] = grid.source_table.currentRowId;
            grid.group_header_table.insert(grid.copyJson(row));
        });
        // insert group table  select * from view_table, group_header_table
        for (let i = 0, len = grid.group_header_table.count(); i < len; i++) {
            const rootRow = grid.group_header_table.selectRowByRowIndex(i);
            const children = [];
            const item = {};
            let rootDepth = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            let rootString = this.getGroupKeyByDepth(rootRow, rootDepth);
            // get children group
            let isChild = false;
            for (let x = 0, len2 = grid.group_header_table.count(); x < len2; x++) {
                const row = grid.group_header_table.selectRowByRowIndex(x);
                let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                let childString = this.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootString == childString) {
                    isChild = true;
                    children.push(row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId]);
                }
                else {
                    if (isChild)
                        break;
                }
            }
            // insert group_header_table
            rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRowIds] = children;
            rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
            grid.group_table.insert(rootRow);
            // insert view_table
            const arr = [];
            isChild = false;
            if (rootDepth == grid.group_column_table.count()) {
                for (let x = 0, len2 = grid.view_table.count(); x < len2; x++) {
                    const row = grid.view_table.selectRowByRowIndex(x);
                    let depth = grid.group_column_table.count() + 1;
                    let childString = this.getGroupKeyByDepth(row, rootDepth);
                    if (rootString == childString) {
                        isChild = true;
                        children.push(row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId]);
                        arr.push(x);
                        row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
                        row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth] = grid.group_column_table.count() + 1;
                        grid.group_table.insert(grid.copyJson(row));
                    }
                    else {
                        if (isChild)
                            break;
                    }
                }
                rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRowIds] = children;
                //delete row
                if (arr.length > 0) {
                    let startRowIndex = arr[0];
                    let lastRowIndex = arr[arr.length - 1];
                    for (let x = lastRowIndex; x >= startRowIndex; x--) {
                        if (arr.indexOf(x) != -1)
                            grid.view_table.remove(x);
                    }
                }
            }
        }
    }
    createGroupKeyData(dataRows, depth = 1) {
        const grid = this.grid;
        const resultRows = [];
        const result = [];
        for (let i = depth, len = grid.group_column_table.count() + 1; i < len; i++) {
            let rows = dataRows.reduce((acc, row) => {
                let key = grid.classGroup.getGroupKeyByDepth(row, i);
                let tempRow = grid.classGroup.getGroupKeyRowByDepth(row, i);
                if (acc.hasOwnProperty(key) == false)
                    acc[key] = tempRow;
                return acc;
            }, {});
            rows = Object.values(rows);
            rows.map(row => resultRows.push(row));
        }
        const addRow = function (dataRow) {
            let rootDepth = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            let rootStr = grid.classGroup.getGroupKeyByDepth(dataRow, rootDepth);
            result.push(dataRow);
            for (let i = depth, len = resultRows.length; i < len; i++) {
                const row = resultRows[i];
                let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                let str = grid.classGroup.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootStr == str) {
                    addRow(row);
                }
            }
        };
        for (let i = 0, len = resultRows.length; i < len; i++) {
            let depth = resultRows[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            if (depth == 1)
                addRow(resultRows[i]);
        }
        return result;
    }
    getGroupKeyByDepth(row, depth) {
        const grid = this.grid;
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            key += this.splitChar + grid.isNull(row[name], '');
        }
        return key;
    }
    getGroupKeyRowByDepth(row, depth) {
        const grid = this.grid;
        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            tempRow[name] = row[name];
            tempRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth] = depth;
        }
        return tempRow;
    }
    /**
     * Group Sum, Avg
     */
    getGroupDepthSummary(rowIndex) {
        // 최 하위 depth
        const grid = this.grid;
        const rootRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        // if (rootDepth <= grid.group_column_table.count()) return;
        const resultRows = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.data[i];
            if (grid.null(row))
                break;
            let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            if (rootDepth + 1 == depth)
                resultRows.push(row);
            else if (rootDepth == depth)
                break;
        }
        for (let i = 0, len = grid.column_table.count(); i < len; i++) {
            const column = grid.column_table.data[i];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            if (grid.null(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.summaryType]))
                continue;
            let summaryType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.summaryType];
            const arrayItem = [];
            resultRows.map(row => {
                let item = grid.isNull(row[columnName], 0);
                item = item == '' ? 0 : item;
                arrayItem.push(Number(item));
            });
            let result;
            if (summaryType == 'sum') {
                result = arrayItem.reduce((a, b) => a + b, 0);
            }
            else if (summaryType == 'avg') {
                result = arrayItem.reduce((a, b) => a + b, 0);
            }
            else if (summaryType == 'max') {
                result = Math.max.apply(null, arrayItem);
            }
            else if (summaryType == 'min') {
                result = Math.min.apply(null, arrayItem);
            }
            rootRow[columnName] = result;
        }
        let childCount = 0;
        if (rootDepth < grid.group_column_table.count()) {
            resultRows.map(row => childCount += row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childCount]);
        }
        else {
            childCount = resultRows.length;
        }
        rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childCount] = childCount;
    }
    getGroupSummary() {
        const grid = this.grid;
        for (let depthIndex = grid.group_column_table.count(); depthIndex >= 1; depthIndex--) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                const row = grid.view_table.data[i];
                let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (depth == depthIndex)
                    this.getGroupDepthSummary(i);
            }
        }
        // agv 만 나중에...
        for (let i = grid.view_table.count() - 1; i >= 0; i--) {
            const row = grid.view_table.data[i];
            let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            if (depth <= grid.group_column_table.count()) {
                for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    let summaryType = grid.isNull(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.summaryType], '');
                    if (summaryType == 'avg') {
                        row[columnName] = row[columnName] / row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childCount];
                    }
                }
            }
        }
    }
    // getGroupSummary2() {
    //     let selector = this.selector;
    //     const grid = this.grid;
    //
    //     const getGroupSummary = function (array, columnName, isLastDepth) {
    //         let result = {};
    //         result.rowCount = 0;
    //         result.sum = 0;
    //
    //         for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //             let row = grid.view_table.data[i];
    //             let rowId = row[columnAlias.rowId];
    //             array.map(item => {
    //                 if (rowId == item) {
    //                     result.sum      += grid.null(row[columnName]) ? 0 : Number(row[columnName]);
    //                     result.rowCount += grid.null(row[columnAlias.rowCount]) ? 1 : row[columnAlias.rowCount];
    //                 }
    //             });
    //         }
    //         return result;
    //     }
    //     /* Create Sum By Depth Unit */
    //     let depth = grid.group_column_table.count();
    //     for (let depthIndex = depth; depthIndex >= 1; depthIndex--) {
    //         for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //             let row = grid.view_table.data[i];
    //             let rowId = row[columnAlias.rowId];
    //             let depth = row[columnAlias.depth];
    //
    //             if (depthIndex == depth) {
    //                 for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
    //                     let column = grid.column_table.data[x];
    //                     let columnName = column[columnAlias.name];
    //                     let columnType = column[columnAlias.type];
    //                     if (columnType == CellType.number) {
    //                         let result = null;
    //                         result = getGroupSummary(row[columnAlias.childRowIds], columnName);
    //                         row[columnName] = result.sum.toString();
    //                         row[columnAlias.rowCount] = result.rowCount;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     /* Create Avg By Depth Unit */
    //     for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //         let row = grid.view_table.data[i];
    //         let rowId = row[columnAlias.rowId];
    //         let rowCount = row[columnAlias.childRowIds].length;
    //
    //         for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
    //             let column = grid.column_table.data[x];
    //             let columnName = column[columnAlias.name];
    //             let groupColumn = grid.classGroup.getGroupRow(columnName);
    //             let summaryType = grid.null(column[columnAlias.summaryType]) ? null : column[columnAlias.summaryType];
    //             let columnType = column[columnAlias.type];
    //
    //             if (rowCount > 0 && columnType == CellType.number) {
    //                 // summaryType = 'sum';
    //                 if (grid.null(summaryType)) row[columnName] = null;
    //                 else if (summaryType == 'avg') row[columnName] = (row[columnName] / row[columnAlias.rowCount]);
    //             }
    //         }
    //     }
    // }
    /**
     * spanIcon, spanImg, spanText
     */
    setGroupIcon(tableCell, rowIndex) {
        const grid = this.grid;
        let row = grid.getRow(rowIndex);
        const childRows = grid.isNull(row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows], []);
        let element = tableCell.querySelector('.tbs-grid-html-icon');
        if (childRows.length > 0)
            grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
        else
            grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');
    }
    toggleGroupIcon(rowIndex, element, type) {
        let selector = this.selector;
        const grid = this.grid;
        if (grid.null(element))
            return;
        if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open) {
            element.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'tree_open.png)';
        }
        else if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed) {
            element.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'tree_closed.png)';
        }
        else
            element.style['backgroundImage'] = '';
    }
    isGroupChildrenRow(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let result = false;
        let row = grid.getRow(rowIndex);
        let childRow = grid.getRow(rowIndex + 1);
        if (grid.null(childRow))
            result = false;
        else {
            if (row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.num] == childRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.parentNum])
                result = true;
        }
        return result;
    }
    getGroupchildRows(folding, rowIndex) {
        const grid = this.grid;
        const result = [];
        let rowId = grid.view_table.selectRowIdByRowIndex(rowIndex);
        let startRowIndex = grid.group_table.selectRowIndexByRowId(rowId);
        const rootRow = grid.group_table.selectRowByRowIndex(startRowIndex);
        let rootDepth = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        let isChild = false;
        if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open) {
            grid.group_table.updateByRowIndex(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen, true);
            grid.group_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen, true);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                let isOpen = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen];
                if (depth == rootDepth + 1) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth)
                        break;
                }
            }
        }
        else if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed) {
            grid.group_table.updateByRowIndex(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen, false);
            grid.group_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen, false);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (depth > rootDepth) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth)
                        break;
                }
            }
        }
        return result;
    }
    setGroupFolding(tableCell) {
        let selector = this.selector;
        const grid = this.grid;
        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return;
        let folding = grid.classGroup.getGroupFlodingStatus(tableCell);
        if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open)
            grid.classGroup.closeGroupRow(rowIndex);
        else if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed)
            grid.classGroup.openGroupRow(rowIndex);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }
    getGroupFlodingStatus(tableCell) {
        const grid = this.grid;
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return null;
        if (spanIcon.style['backgroundImage'].includes('tree_open.png'))
            return _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png'))
            return _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed;
        else
            return null;
    }
    openChildRow(arrayRows, rootRow) {
        const rootDepth = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        const rootChildRows = [...rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows]];
        let isOpen = rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen];
        if (isOpen && rootChildRows.length > 0) {
            rootRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows] = [];
            arrayRows.push(rootRow);
            for (let i = 0; i < rootChildRows.length; i++) {
                const row = rootChildRows[i];
                this.openChildRow(arrayRows, row);
            }
        }
        else {
            arrayRows.push(rootRow);
        }
    }
    openGroupRow(rowIndex) {
        const grid = this.grid;
        const arrayRows = [];
        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        const rootChildRows = [...rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows]];
        rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows] = [];
        rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = true;
        if (rootChildRows.length == 0)
            return;
        for (let i = 0; i < rootChildRows.length; i++) {
            this.openChildRow(arrayRows, rootChildRows[i]);
        }
        grid.view_table.insertRowsAfter(arrayRows, rowIndex);
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }
    closeChildRow(rowIndex) {
        const grid = this.grid;
        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        const rootChildRows = grid.isNull(rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows], []);
        if (rootChildRows.length > 0)
            return;
        const arrayRowIndex = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row))
                break;
            let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            if (depth == rootDepth + 1) {
                rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.childRows].push(row);
                arrayRowIndex.push(i);
            }
            else
                break;
        }
        for (let i = arrayRowIndex.length - 1; i >= 0; i--)
            grid.view_table.remove(arrayRowIndex[i]);
    }
    closeGroupRow(rowIndex) {
        const grid = this.grid;
        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
        rootDataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
        const arrayRowIndex = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row))
                break;
            let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
            if (depth > rootDepth && depth <= grid.group_column_table.count())
                arrayRowIndex.push(i);
            else if (depth == rootDepth)
                break;
        }
        for (let i = arrayRowIndex.length - 1; i >= 0; i--)
            this.closeChildRow(arrayRowIndex[i]);
        this.closeChildRow(rowIndex);
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
        let sourceIndex = grid.group_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name);
        if (sourceIndex == targetIndex)
            return;
        /* create column */
        let dataRow = {};
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] = text;
        /* update source column */
        grid.group_column_table.updateByRowIndex(sourceIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, '_temp_group');
        /* add dataRow */
        if (grid.null(targetIndex))
            grid.group_column_table.insert(dataRow);
        else
            grid.group_column_table.insertBefore(dataRow, targetIndex);
        /* remove source */
        sourceIndex = grid.group_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, '_temp_group');
        grid.group_column_table.remove(sourceIndex);
        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classGroup.toggleGroupPlaceHolder();
        grid.classGroup.setGroupData(grid.view_table.data, null, false);
    }
    addGroupButton(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;
        /* Check Existing */
        if (grid.group_column_table.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name, 1).length > 0)
            return;
        /* create dataRow */
        let dataRow = {};
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] = text;
        /* add dataRow */
        if (grid.null(targetIndex))
            grid.group_column_table.insert(dataRow);
        else
            grid.group_column_table.insertBefore(dataRow, targetIndex);
        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        //grid.classGroup.toggleGroupPlaceHolder();
        let data = grid.view_table.data;
        grid.classGroup.setGroupData(data, this.openDepth, false);
    }
    removeGroupButton(element) {
        let selector = this.selector;
        const grid = this.grid;
        /* get column name */
        let name = element.dataset.name;
        /* remove group data */
        let rowIndex = grid.group_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name);
        grid.group_column_table.remove(rowIndex);
        // remove button in group panel
        let button = element.parentNode;
        button.remove();
        grid.classGroup.toggleGroupPlaceHolder();
        if (grid.group_column_table.count() > 0) {
            let data = grid.view_table.data;
            grid.classGroup.setGroupData(data, null, false);
        }
        else {
            this.initGroupData();
        }
    }
    removeGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;
        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--)
            buttons[i].remove();
    }
    getGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classGroup.removeGroupButtonList();
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        let groupColumns = grid.group_column_table.data;
        for (let i = 0, len = groupColumns.length; i < len; i++) {
            let groupColumn = groupColumns[i];
            let button = grid.classGroup.createGroupButton(groupColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]);
            let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
            if (grid.null(bar))
                return;
            bar.append(button);
        }
        grid.classGroup.toggleGroupPlaceHolder();
    }
    createGroupButton(columnName) {
        let selector = this.selector;
        const grid = this.grid;
        let column = grid.getColumn(columnName);
        let text = document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent = column.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text];
        text.dataset.name = columnName;
        let icon = document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'remove.png)';
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
        const buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        const span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
        if (buttons.length > 0)
            span.style.display = 'none';
        else
            span.style.display = '';
        grid.classControl.after_setColumnVisible();
    }
    destroy() {
        const grid = this.grid;
        grid.setGridMode('');
        grid.group_column_table.remove();
        grid.group_table.remove();
        grid.classGroup.hideGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.setData(grid.source_table.data, null, false);
    }
    showGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classGroup.getGroupButtonList();
        grid.options.showGroupPanel = true;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.apply();
    }
    hideGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classGroup.removeGroupButtonList();
        grid.options.showGroupPanel = false;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.apply();
    }
    initGroupData() {
        const grid = this.grid;
        grid.setGridMode('');
        grid.group_column_table.remove();
        grid.sort_column_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();
        grid.classGroup.removeGroupButtonList();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        //if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data, null, false);
        grid.setData(grid.source_table.data, null, false);
        grid.apply();
    }
    getGroupRow(columnName) { return this.grid.group_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName); }
    expandGroup() {
        let selector = this.selector;
        const grid = this.grid;
        if (grid.group_column_table.count() == 0)
            return;
        let openDepth = grid.classGroup.openDepth;
        if (grid.null(grid.classGroup.openDepth))
            openDepth = 1;
        else
            openDepth += 1;
        if (openDepth > grid.group_column_table.count() + 1)
            openDepth = grid.group_column_table.count();
        grid.classGroup.openDepth = openDepth;
        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }
    collapseGroup() {
        let selector = this.selector;
        const grid = this.grid;
        if (grid.group_column_table.count() == 0)
            return;
        let openDepth = grid.classGroup.openDepth;
        if (grid.null(grid.classGroup.openDepth))
            openDepth = grid.group_column_table.count();
        else
            openDepth -= 1;
        if (openDepth <= 0)
            openDepth = 1;
        grid.classGroup.openDepth = openDepth;
        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }
}


/***/ }),

/***/ 7304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: function() { return /* binding */ TbsGridPage; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridPage {
    constructor(grid) {
        this.user_clickPageFirst = null;
        this.user_clickPagePrev = null;
        this.user_clickPageIndex = null;
        this.user_clickPageNext = null;
        this.user_clickPageLast = null;
        this.grid = grid;
        this.selector = `#${grid.gridId}`;
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
        this.options[optionName] = optionValue;
    }
    setPageData() {
        const selector = this.selector;
        const grid = this.grid;
        if (grid.grid_mode != _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .GridMode */ .G3.page)
            return;
        if (grid.view_table.count() == 0)
            return;
        if (grid.classPage.pageRowCount == 0)
            grid.classPage.pageRowCount = grid.classPage.options.pageRowCount;
        grid.classPage.pageTotalRowCount = grid.page_table.count();
        grid.classPage.pageCount = Math.ceil(grid.page_table.count() / grid.classPage.pageRowCount);
        if (grid.classPage.pageIndex == 0)
            grid.classPage.pageIndex = 1;
        if (grid.classPage.pageIndex < 1)
            grid.classPage.pageIndex = 1;
        else if (grid.classPage.pageIndex > grid.classPage.pageCount)
            grid.classPage.pageIndex = grid.classPage.pageCount;
        grid.startRowIndex = (grid.classPage.pageIndex - 1) * grid.classPage.pageRowCount;
        grid.lastRowIndex = grid.startRowIndex + grid.classPage.pageRowCount - 1;
        if (grid.lastRowIndex > grid.page_table.count() - 1)
            grid.lastRowIndex = grid.page_table.count() - 1;
        grid.view_table.remove();
        for (let i = grid.startRowIndex; i <= grid.lastRowIndex; i++) {
            const row = grid.page_table.data[i];
            grid.view_table.insert(grid.copyJson(row));
        }
        document.querySelector(`${selector} .tbs-grid-panel10-page-select`).textContent = String(this.pageIndex);
    }
}


/***/ }),

/***/ 7018:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ TbsGridRangePanel; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

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
        // if (this.panelName == 'panel40') {
        //     this.data_summary = grid.top_data;
        // }
        // else if (this.panelName == 'panel50') {
        //     this.data_summary = grid.footer_data;
        // }
    }
    selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        const grid = this.grid;
        if (grid.column_table.count() == 0) {
            this.removeRange(0, -1, 0, -1);
            return;
        }
        let classRange = this;
        let panelName = this.panelName;
        if (arguments.length == 2) {
            startCellIndex = 0;
            lastCellIndex = -1;
        }
        //if (lastRowIndex  == -1) { lastRowIndex  = grid.data_summary.length - 1; }
        if (lastCellIndex == -1) {
            lastCellIndex = grid.column_table.count() - 1;
        }
        if (panelName == 'panel40')
            grid.classRange50.removeRange(0, -1, 0, -1);
        else if (panelName == 'panel50')
            grid.classRange40.removeRange(0, -1, 0, -1);
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
        if (type == 'add' || this.selectRangeArray.length == 0) {
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
        }
        else {
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
        topRowIndex = (topRowIndex == undefined) ? grid.getFirstRowIndex() : topRowIndex;
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
        if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.selectMode] == 'cell') {
            startRowIndex = startRowIndex;
            lastRowIndex = startRowIndex;
        }
        //=============================================================	panel31 select
        let data = classRange.data_select_panel31;
        if (lastRowIndex == -1)
            lastRowIndex = data.length - 1;
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
            if (lastCellIndex == -1)
                lastCellIndex = column.length - 1;
            let len = data.length;
            let bCount = false;
            for (let n = 0; n < len; n++) {
                if (rowIndex == data[n][0][0]) {
                    bCount = true;
                    for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                        if (colIndex >= startCellIndex && colIndex <= lastCellIndex) {
                            data[n][1][colIndex] = 1;
                        }
                        else {
                            data[n][1][colIndex] = 0;
                        }
                    }
                    break;
                }
            }
            if (bCount == false) {
                let array = [];
                for (let colIndex = 0; colIndex < columnLen; colIndex++)
                    array.push(0);
                let row = [new Int32Array([rowIndex]), new Int8Array(array)];
                for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                    if (colIndex >= startCellIndex && colIndex <= lastCellIndex)
                        row[1][colIndex] = 1;
                    else
                        row[1][colIndex] = 0;
                }
                data.push(row);
            }
        }
    }
    removeRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let classRange = this;
        let panelName = this.panelName;
        if (classRange.startRowIndex != -1)
            classRange.startRowIndex = -1;
        if (classRange.startCellIndex != -1)
            classRange.startCellIndex = -1;
        if (classRange.lastRowIndex != -1)
            classRange.lastRowIndex = -1;
        if (classRange.lastCellIndex != -1)
            classRange.lastCellIndex = -1;
        if (classRange._startRowIndex != -1)
            classRange._startRowIndex = -1;
        if (classRange._startCellIndex != -1)
            classRange._startCellIndex = -1;
        if (classRange._lastRowIndex != -1)
            classRange._lastRowIndex = -1;
        if (classRange._lastCellIndex != -1)
            classRange._lastCellIndex = -1;
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
        if (grid.fixedColumnIndex != -1) {
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
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }
        let maxCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = classRange.getMaxCellIndexByMouseMove2(panelName2);
            if (num != undefined)
                rowIndexArray.push(num);
            num = classRange.getMaxCellIndexByMouseMove2(panelName0);
            if (num != undefined)
                rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        }
        else {
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
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }
        let minCellIndex;
        const rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            let num = classRange.getMinCellIndexByMouseMove2(panelName2);
            if (num != undefined)
                rowIndexArray.push(num);
            num = classRange.getMinCellIndexByMouseMove2(panelName0);
            if (num != undefined)
                rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        }
        else {
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
        let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        let startColumnIndex, lastColumnIndex;
        if (grid.fixedColumnIndex != -1) {
            if (panelName == 'panel42' || panelName == 'panel52') {
                startColumnIndex = 0;
                lastColumnIndex = grid.fixedColumnIndex + 1;
            }
            else if (panelName == 'panel40' || panelName == 'panel50') {
                startColumnIndex = grid.fixedColumnIndex + 1;
                lastColumnIndex = len;
            }
        }
        else {
            startColumnIndex = 0;
            lastColumnIndex = len;
        }
        for (let x = startColumnIndex; x < lastColumnIndex; x++) {
            let tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                continue;
            let rect = grid.getOffset(tableCell);
            let rectLeft = rect.left;
            //console.log(`rect2.left ${rect2.left} rectLeft ${rectLeft} lastX ${lastX} `);
            if (lastX > rectLeft)
                maxCellIndex = tableCell.cellIndex;
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
        let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        let startColumnIndex, lastColumnIndex;
        if (grid.fixedColumnIndex != -1) {
            if (panelName == 'panel42' || panelName == 'panel52') {
                startColumnIndex = 0;
                lastColumnIndex = grid.fixedColumnIndex;
            }
            else if (panelName == 'panel40' || panelName == 'panel50') {
                startColumnIndex = grid.fixedColumnIndex + 1;
                lastColumnIndex = len - 1;
            }
        }
        else {
            startColumnIndex = 0;
            lastColumnIndex = len - 1;
        }
        for (let x = lastColumnIndex; x >= startColumnIndex; x--) {
            let tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false)
                continue;
            let rect = grid.getOffset(tableCell);
            let rectRight = rect.left + tableCell.getBoundingClientRect().width;
            if (lastX < rectRight)
                minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    }
}


/***/ }),

/***/ 5358:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: function() { return /* binding */ TbsGridRange; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridRange {
    constructor(grid) {
        this.removePanelRange = function (panelName = '') {
            let selector = this.selector;
            const grid = this.grid;
            if (panelName == 'panel30') {
                document.querySelectorAll(selector + ' .tbs-grid-cell-start').forEach(cell => cell.classList.remove('tbs-grid-cell-start'));
                document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
            }
            else if (panelName == 'panel40') {
                document.querySelectorAll(selector + ' .tbs-grid-panel41 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
            }
            else if (panelName == 'panel50') {
                document.querySelectorAll(selector + ' .tbs-grid-panel51 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
                document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-cell-select').forEach(cell => cell.classList.remove('tbs-grid-cell-select'));
            }
        };
        this.selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
            let selector = this.selector;
            const grid = this.grid;
            if (grid.column_table.count() == 0) {
                return;
            }
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
            if (grid.top_table.count() > 0)
                grid.classRange40.removeRange(0, -1, 0, -1);
            if (grid.footer_table.count() > 0)
                grid.classRange50.removeRange(0, -1, 0, -1);
            return grid.classRange.setRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, '');
        };
        this.setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type = 'add') {
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
                const selectRange = {};
                selectRange.startRowIndex = startRowIndex;
                selectRange.startCellIndex = startCellIndex;
                selectRange.lastRowIndex = lastRowIndex;
                selectRange.lastCellIndex = lastCellIndex;
                selectRange._startRowIndex = _startRowIndex;
                selectRange._startCellIndex = _startCellIndex;
                selectRange._lastRowIndex = _lastRowIndex;
                selectRange._lastCellIndex = _lastCellIndex;
                grid.selectRangeArray.push(selectRange);
            }
            else {
                const selectRange = grid.selectRangeArray[0];
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
            topRowIndex = (topRowIndex == undefined) ? grid.getFirstRowIndex() : topRowIndex;
            return topRowIndex;
        };
        this.setRangeValue = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
            let selector = this.selector;
            const grid = this.grid;
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .rowAlias */ .lg.selectMode] == 'cell') {
                startRowIndex = startRowIndex;
                lastRowIndex = startRowIndex;
            }
            //=============================================================	panel31 select
            let data = grid.data_select_panel31;
            if (lastRowIndex == -1)
                lastRowIndex = data.length - 1;
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
                if (lastCellIndex == -1)
                    lastCellIndex = column.length - 1;
                let len = data.length;
                let bCount = false;
                for (let n = 0; n < len; n++) {
                    if (rowIndex == data[n][0][0]) {
                        bCount = true;
                        for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                            if (colIndex >= startCellIndex && colIndex <= lastCellIndex) {
                                data[n][1][colIndex] = 1;
                            }
                            else {
                                data[n][1][colIndex] = 0;
                            }
                        }
                        break;
                    }
                }
                if (bCount == false) {
                    let array = [];
                    for (let colIndex = 0; colIndex < columnLen; colIndex++)
                        array.push(0);
                    let row = [new Int32Array([rowIndex]), new Int8Array(array)];
                    for (let colIndex = 0; colIndex < columnLen; colIndex++) {
                        if (colIndex >= startCellIndex && colIndex <= lastCellIndex)
                            row[1][colIndex] = 1;
                        else
                            row[1][colIndex] = 0;
                    }
                    data.push(row);
                }
            }
            if (grid.headerRowCount > 1) {
                const selectCell = function (trList, colIndex) {
                    for (let i = trList.length - 1; i >= 0; i--) {
                        let cell = trList[i].childNodes[colIndex];
                        if (cell.style.display == 'none')
                            continue;
                        else
                            cell.classList.add('tbs-grid-cell-select');
                    }
                };
                // panel20
                let trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
                for (let x = startCellIndex; x <= lastCellIndex; x++)
                    selectCell(trList, x);
                // panel22
                if (grid.fixedColumnIndex != -1) {
                    trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
                    for (let x = startCellIndex; x <= lastCellIndex; x++)
                        selectCell(trList, x);
                }
            }
            else {
                // panel20
                const tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
                if (tableCells.length == 0)
                    return;
                for (let i = startCellIndex; i <= lastCellIndex; i++) {
                    tableCells[i].classList.add('tbs-grid-cell-select');
                }
            }
        };
        this.removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
            let selector = this.selector;
            const grid = this.grid;
            if (grid.startRowIndex != -1)
                grid.startRowIndex = -1;
            if (grid.startCellIndex != -1)
                grid.startCellIndex = -1;
            if (grid.lastRowIndex != -1)
                grid.lastRowIndex = -1;
            if (grid.lastCellIndex != -1)
                grid.lastCellIndex = -1;
            if (grid._startRowIndex != -1)
                grid._startRowIndex = -1;
            if (grid._startCellIndex != -1)
                grid._startCellIndex = -1;
            if (grid._lastRowIndex != -1)
                grid._lastRowIndex = -1;
            if (grid._lastCellIndex != -1)
                grid._lastCellIndex = -1;
            if (grid.topLineDiv.style.width != '0px')
                grid.topLineDiv.style.width = '0px';
            if (grid.leftLineDiv.style.height != '0px')
                grid.leftLineDiv.style.height = '0px';
            if (grid.bottomLineDiv.style.width != '0px')
                grid.bottomLineDiv.style.width = '0px';
            if (grid.rightLineDiv.style.height != '0px')
                grid.rightLineDiv.style.height = '0px';
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
        this.addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
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
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
}


/***/ }),

/***/ 9359:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ TbsGridRow; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5359);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


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
                _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] + 'px');
                _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', '');
                if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == false) {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', '0px');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', 'none');
                }
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', '0px');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', '0px');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
        else {
            let tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');
            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '0') {
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'display', column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] ? '' : 'none');
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.setCellStyle(tableCell, 'width', column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] + 'px');
                }
            }
        }
    }
    setTableRow(grid, tableRow, rowIndex, panelName = 'panel30') {
        let selector = '#' + grid.gridId;
        tableRow.dataset.rowIndex = rowIndex;
        if (tableRow.style.height != grid.rowHeight + 'px')
            tableRow.style.height = grid.rowHeight + 'px';
        if (tableRow.style.display == 'none')
            tableRow.style.display = '';
        if (grid.group_column_table.count() > 0) {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let rowData = grid.getRow(rowIndex);
                let depth = rowData[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (depth == grid.group_column_table.count() + 1)
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.addUserClass(tableRow, '.tbs-row-color-white');
                else if (depth <= 5)
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.addUserClass(tableRow, 'tbs-row-color' + depth);
                else
                    _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.addUserClass(tableRow, '.tbs-row-color-white');
            }
            if (grid.rowBounding) {
                if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                    let param = { element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex) };
                    grid.tbs_executeEvent(grid.rowBounding, 'rowBounding', param);
                }
            }
        }
        else {
            _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.removeUserClass(tableRow);
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                let param = { element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex) };
                grid.tbs_executeEvent(grid.rowBounding, 'rowBounding', param);
            }
        }
        /* row alternative background color */
        grid.classRow.showAlternativeRowColor(grid, panelName, tableRow, rowIndex);
    }
    showAlternativeRowColor(grid, panelName, tableRow, rowIndex) {
        return;
        // tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
        // if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
        // else tableRow.classList.add('tbs-grid-tr-bg');
    }
    hideTableRows(grid, panelName, tableRows, fromRowIndex, toRowIndex) {
        if (grid.column_table.count() == 0) {
            fromRowIndex = 0;
        }
        for (let i = fromRowIndex, len = tableRows.length; i < len; i++) {
            const tableRow = tableRows[i];
            if (tableRow) {
                if (tableRow.style.display != 'none')
                    tableRow.style.display = 'none';
            }
        }
    }
}


/***/ }),

/***/ 1411:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ TbsGridScrollBase; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridScrollBase {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    setPanelSize() {
        let selector = this.selector;
        const grid = this.grid;
        const rectGrid = document.querySelector(selector).getBoundingClientRect();
        const main = document.querySelector(selector + ' .tbs-grid-main');
        const panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        const panel22 = document.querySelector(selector + ' .tbs-grid-panel22');
        const panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
        const panel42 = document.querySelector(selector + ' .tbs-grid-panel42');
        const panel72 = document.querySelector(selector + ' .tbs-grid-panel72');
        const group20 = document.querySelector(selector + ' .tbs-grid-group20');
        const group21 = document.querySelector(selector + ' .tbs-grid-group21');
        const group30 = document.querySelector(selector + ' .tbs-grid-group30');
        const group31 = document.querySelector(selector + ' .tbs-grid-group31');
        const group40 = document.querySelector(selector + ' .tbs-grid-group40');
        const group41 = document.querySelector(selector + ' .tbs-grid-group41');
        const group50 = document.querySelector(selector + ' .tbs-grid-group50');
        const group51 = document.querySelector(selector + ' .tbs-grid-group51');
        const group70 = document.querySelector(selector + ' .tbs-grid-group70');
        const group71 = document.querySelector(selector + ' .tbs-grid-group71');
        let mainHeight = rectGrid.height;
        if (grid.options.showToolbarPanel)
            mainHeight -= 25;
        if (grid.options.showGroupPanel)
            mainHeight -= 33; // panel80
        if (grid.options.showSortPanel)
            mainHeight -= 33; // panel90
        //if (grid.options.showFilterPanel) mainHeight -= grid.rowHeight * 2; // panel70
        main.style.height = `${mainHeight}px`;
        // header : group21, group22 group20
        const rectTable21 = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table').getBoundingClientRect();
        // Consider hidden columns
        const rectTable20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
        let height = parseInt(rectTable20.height);
        let fixedColumnsWidth = grid.classScroll.getFixedColumnsWidth();
        if (grid.fixedColumnIndex != -1) {
            group21.style.left = '0px';
            group21.style.top = '0px';
            group21.style.bottom = height + 'px';
            group21.style.width = parseInt(rectTable21.width) + parseInt(String(fixedColumnsWidth)) + 'px';
            group21.style.height = height + 'px';
            group20.style.left = parseInt(rectTable21.width) + parseInt(String(fixedColumnsWidth)) + 'px';
            group20.style.height = height + 'px';
            panel22.style.left = parseInt(rectTable21.width) + 'px';
            panel22.style.width = parseInt(String(fixedColumnsWidth)) + 'px';
            panel22.style.height = height + 'px';
        }
        else {
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
            const rectTable70 = document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').getBoundingClientRect();
            if (grid.fixedColumnIndex != -1) {
                group71.style.top = height + 'px';
                group71.style.width = group21.style.width;
                group71.style.height = parseInt(String(rectTable70.height)) + 'px';
                group70.style.top = height + 'px';
                group70.style.left = group21.style.width;
                group70.style.height = parseInt(String(rectTable70.height)) + 'px';
                panel72.style.left = panel22.style.left;
                panel72.style.width = panel22.style.width;
                panel72.style.height = parseInt(String(rectTable70.height)) + 'px';
            }
            else {
                group71.style.top = height + 'px';
                group71.style.width = group21.style.width;
                group71.style.height = parseInt(String(rectTable70.height)) + 'px';
                group70.style.top = height + 'px';
                group70.style.left = group21.style.width;
                group70.style.height = parseInt(String(rectTable70.height)) + 'px';
                panel72.style.width = '0px';
                panel72.style.left = '0px';
                panel72.style.height = '0px';
            }
            height += parseInt(group70.style.height);
        }
        // summary top : group41, group42, group40
        if (grid.top_column_table.count() > 0) {
            const rectTable40 = document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').getBoundingClientRect();
            if (grid.fixedColumnIndex != -1) {
                group41.style.top = height + 'px';
                group41.style.width = group21.style.width;
                group41.style.height = parseInt(String(rectTable40.height)) + 'px';
                group40.style.top = height + 'px';
                group40.style.left = group21.style.width;
                group40.style.height = parseInt(String(rectTable40.height)) + 'px';
                panel42.style.left = panel22.style.left;
                panel42.style.width = panel22.style.width;
                panel42.style.height = parseInt(String(rectTable40.height)) + 'px';
                panel40.style.left = panel20.style.left;
            }
            else {
                group41.style.top = height + 'px';
                group41.style.width = group21.style.width;
                group41.style.height = parseInt(String(rectTable40.height)) + 'px';
                group40.style.top = height + 'px';
                group40.style.left = group21.style.width;
                group40.style.height = parseInt(String(rectTable40.height)) + 'px';
                panel42.style.width = '0px';
                panel40.style.left = '0px';
                panel42.style.height = '0px';
            }
            height += parseInt(String(rectTable40.height));
        }
        // content : group31, group32, group30
        const panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        const panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
        if (grid.fixedColumnIndex != -1) {
            group31.style.top = height + 'px';
            group31.style.width = group21.style.width;
            group30.style.top = height + 'px';
            group30.style.left = group21.style.width;
            panel32.style.width = '0px';
            panel30.style.left = '0px';
            panel32.style.left = panel22.style.left;
            panel32.style.width = panel22.style.width;
        }
        else {
            group31.style.top = height + 'px';
            group31.style.width = group21.style.width;
            group30.style.top = height + 'px';
            group30.style.left = group21.style.width;
            panel32.style.width = '0px';
            panel30.style.left = '0px';
        }
        // summary footer : group51, group52, group50
        if (grid.footer_column_table.count() > 0) {
            const panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
            const panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
            if (grid.fixedColumnIndex != -1) {
                const rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
                group31.style.bottom = parseInt(String(rectTable50.height)) + 'px';
                group30.style.bottom = parseInt(String(rectTable50.height)) + 'px';
                group51.style.width = group21.style.width;
                group51.style.height = parseInt(String(rectTable50.height)) + 'px';
                group50.style.left = group21.style.width;
                group50.style.height = parseInt(String(rectTable50.height)) + 'px';
                panel52.style.left = parseInt(rectTable21.width) + 'px';
                panel52.style.width = parseInt(String(fixedColumnsWidth)) + 'px';
                panel52.style.height = parseInt(String(rectTable50.height)) + 'px';
            }
            else {
                const rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
                group51.style.width = group21.style.width;
                group51.style.height = parseInt(String(rectTable50.height)) + 'px';
                group50.style.left = group21.style.width;
                group50.style.height = parseInt(String(rectTable50.height)) + 'px';
                group31.style.bottom = parseInt(String(rectTable50.height)) + 'px';
                group30.style.bottom = parseInt(String(rectTable50.height)) + 'px';
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
            const table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
            const xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            let railSize = grid.horizontalScroll.railSize;
            let hiddenSize = grid.horizontalScroll.hiddenSize;
            let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
            xBar.style.left = ((curLeft / hiddenSize) * railSize) + 'px';
        }
        else if (type == grid.code_vertical) {
            topRowIndex = grid.null(topRowIndex) ? 0 : topRowIndex;
            if (topRowIndex == 0) {
                document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = '0px';
            }
            else if (grid.isLastTopRowIndex(topRowIndex)) {
                const yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
                yBar.style.top = grid.verticalScroll.railSize + 'px';
            }
            else {
                let styleTop = parseInt(String(Math.ceil(topRowIndex / grid.verticalScroll.moveCount)));
                document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = styleTop + 'px';
                //console.log(`styleTop ${styleTop} topRowIndex ${topRowIndex}`);
            }
        }
    }
    setBarPositionByDirection(type, rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        if (type == 'up') {
            let trTopIndex = grid.getFirstRowIndex() - 1;
            if (trTopIndex < 0)
                return null;
            //-------------------------------------------------------------
            grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
            grid.classPanel30.setDataPanel(trTopIndex);
            //---------------------------------------------------------------
            return trTopIndex;
        }
        if (type == 'down') {
            let trTopIndex = 0;
            if (rowIndex == undefined)
                trTopIndex = grid.getFirstRowIndex() + 1;
            else
                trTopIndex = rowIndex;
            if (grid.pageRowCount > grid.pageIntRowCount) {
                if (trTopIndex > (grid.view_table.count() - grid.pageRowCount + 1))
                    return null;
            }
            else {
                if (trTopIndex > (grid.view_table.count() - grid.pageRowCount))
                    return null;
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
            const divContent = document.querySelector(`${selector} .tbs-grid-panel30`);
            const divHeaderMove = document.querySelector(`${selector} .tbs-grid-panel20 .tbs-grid-table`);
            const divContentMove = document.querySelector(`${selector} .tbs-grid-panel30 .tbs-grid-table`);
            if (divHeaderMove.style.left == (-1 * hiddenSize) + 'px')
                return null;
            let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            if (divContentMove.getBoundingClientRect().width <= divContent.getBoundingClientRect().width)
                return null;
            let sLeft;
            if (curLeft + moveWidth >= hiddenSize)
                sLeft = (-1 * hiddenSize) + 'px';
            else
                sLeft = (divHeaderMove.style.left.replace('px', '') - moveWidth) + 'px';
            grid.classScroll.setContentPanelLeft(sLeft);
            grid.classScroll.setBarPosition(grid.code_horizontal);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            return grid.getFirstRowIndex() + 1;
        }
        if (type == 'left') {
            let moveWidth = 15;
            const divHeaderMove = document.querySelector(`${selector} .tbs-grid-panel20  .tbs-grid-table`);
            if (divHeaderMove.style.left == '0px')
                return null;
            let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            let sLeft;
            if (curLeft - moveWidth <= 0)
                sLeft = '0px';
            else
                sLeft = (-1 * curLeft + moveWidth) + 'px';
            grid.classScroll.setContentPanelLeft(sLeft);
            grid.classScroll.setBarPosition(grid.code_horizontal);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            return grid.getFirstRowIndex() + 1;
        }
    }
    getContentPanelLeft(value) {
        let selector = this.selector;
        const grid = this.grid;
        const panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
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
        const panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        const panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        const panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
        const panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
        const panel70 = document.querySelector(selector + ' .tbs-grid-panel70');
        if (grid.notNull(panel20.childNodes[0]))
            panel20.childNodes[0].style.left = value;
        if (grid.notNull(panel30.childNodes[0]))
            panel30.childNodes[0].style.left = value;
        if (grid.notNull(panel40.childNodes[0]))
            panel40.childNodes[0].style.left = value;
        if (grid.notNull(panel50.childNodes[0]))
            panel50.childNodes[0].style.left = value;
        if (grid.notNull(panel70.childNodes[0]))
            panel70.childNodes[0].style.left = value;
    }
    setContentPanelLeftMove(value) {
        let selector = this.selector;
        const grid = this.grid;
        const table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        let left = (parseInt(table20.style.left, 10) + value) + 'px';
        grid.classScroll.setContentPanelLeft(left);
    }
    setColumnWidth(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;
        if (panelName == 'panel22')
            grid.classScroll.setColumnWidth22(panelName, colIndex, value);
        else
            grid.classScroll.setColumnWidth20(panelName, colIndex, value);
    }
    setColumnWidth20(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;
        const colList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        const colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        const colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        const colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        const colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
        let nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] = parseInt(value, 10);
        colList[colIndex].style.width = nWidth;
        colList2[colIndex].style.width = nWidth;
        if (grid.top_table.count() > 0)
            colList3[colIndex].style.width = nWidth;
        if (grid.footer_table.count() > 0)
            colList4[colIndex].style.width = nWidth;
        if (grid.options.showFilterPanel)
            colList7[colIndex].style.width = nWidth;
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
    }
    setColumnWidth22(panelName, colIndex, value) {
        let selector = this.selector;
        const grid = this.grid;
        const colList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
        const colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
        const colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
        const colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');
        const colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel72 .tbs-grid-table thead th');
        let nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] = parseInt(value, 10);
        colList[colIndex].style.width = nWidth;
        colList2[colIndex].style.width = nWidth;
        if (grid.top_column_table.count() > 0)
            colList3[colIndex].style.width = nWidth;
        if (grid.footer_column_table.count() > 0)
            colList4[colIndex].style.width = nWidth;
        if (grid.options.showFilterPanel)
            colList7[colIndex].style.width = nWidth;
        grid.classScroll.setPanelSize();
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
    }
    getFixedColumnsWidth() {
        const grid = this.grid;
        let result = 0;
        for (let x = 0; x <= grid.fixedColumnIndex; x++) {
            let column = grid.column_table.data[x];
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible])
                result += Number(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]);
        }
        return result;
    }
    setAllColumnWidth(arr) {
        let selector = this.selector;
        const grid = this.grid;
        const thList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        const thList30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        const thList40 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        const thList50 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        const thList70 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
        for (let x = 0, len = grid.column_table.count(); x < len; x++) {
            grid.column_table.data[x].width = arr[x];
            let nWidth = arr[x] + 'px';
            thList20[x].style.width = nWidth;
            thList30[x].style.width = nWidth;
            if (grid.top_column_table.count() > 0)
                thList40[x].style.width = nWidth;
            if (grid.footer_column_table.data.length > 0)
                thList50[x].style.width = nWidth;
            if (grid.options.showFilterPanel)
                thList70[x].style.width = nWidth;
        }
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
    }
    setPageRowCount(panelName = '') {
        let selector = this.selector;
        const grid = this.grid;
        let rowHeight = grid.rowHeight;
        let contentHeight = parseInt(String(document.querySelector(selector + ' .tbs-grid-group30').getBoundingClientRect().height));
        let pageRowCount = contentHeight / rowHeight > parseInt(String(contentHeight / rowHeight)) ? parseInt(String(contentHeight / rowHeight)) + 1 : parseInt(String(contentHeight / rowHeight));
        let pageIntRowCount = Math.floor(contentHeight / rowHeight);
        grid.pageRowCount = pageRowCount;
        grid.pageIntRowCount = pageIntRowCount;
    }
}


/***/ }),

/***/ 9402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ TbsGridScroll; }
/* harmony export */ });
class TbsGridScroll {
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
        if (type == grid.code_horizontal)
            scroll.setHorizontalScroll();
        else if (type == grid.code_vertical)
            scroll.setVerticalScroll();
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
        if (rectTable20.width > rectPanel20.width)
            classScroll.showScroll(type);
        else
            classScroll.hideScroll(type);
        xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll'); // non-live
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
            scrollBox.style.display = 'none';
    }
    setVerticalScroll() {
        let selector = this.selector;
        const grid = this.grid;
        const scroll = this;
        let type = grid.code_vertical;
        let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
        let wrap = document.querySelector(selector + ' .tbs-grid-wrap');
        let pageRowCount = grid.pageRowCount;
        let dataLength = grid.view_table.count();
        if (dataLength <= grid.pageIntRowCount) {
            scroll.hideScroll(type);
        }
        else if (grid.pageRowCount > grid.pageIntRowCount) {
            if (dataLength >= pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;
                scroll.setScrollSize(type);
            }
            else {
                scroll.hideScroll(type);
            }
        }
        else {
            if (dataLength > pageRowCount) {
                yScroll.style.display = '';
                scrollBox.style.display = '';
                wrap.style.marginRight = grid.verticalScroll.margin;
                scroll.setScrollSize(type);
            }
            else {
                scroll.hideScroll(type);
            }
        }
        yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll'); // non-live
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
            scrollBox.style.display = 'none';
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
        }
        else if (type == grid.code_vertical) {
        }
    }
    hideScroll(type) {
        let selector = this.selector;
        const grid = this.grid;
        let scroll = this;
        if (type == grid.code_horizontal) {
            let wrap = document.querySelector(selector + ' .tbs-grid-wrap');
            const xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            const yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            const scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            const xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            xScroll.style.display = 'none';
            wrap.style.marginBottom = '0px';
            if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
                scrollBox.style.display = 'none';
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
            if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
                scrollBox.style.display = 'none';
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
            const xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            xBar.style.width = scroll.getBarWidth(type, barSize);
        }
        else if (type == grid.code_vertical) {
            let barSize = scroll.getBarSize(type);
            let railSize = scroll.getRailSize(type, barSize);
            let moveCount = scroll.getMoveCount(type, railSize);
            scroll.barSize = barSize; //data
            scroll.railSize = railSize; //data
            scroll.moveCount = moveCount; //data	1px당 trCount
            const yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            yBar.style.height = barSize + 'px';
        }
    }
    /* BarSize */
    getBarSize(type) {
        let selector = this.selector;
        const grid = this.grid;
        let scroll = this;
        if (type == grid.code_horizontal)
            return scroll.getHorizontalBarSize();
        else if (type == grid.code_vertical)
            return scroll.getVerticalBarSize();
    }
    getHorizontalBarSize() {
        let selector = this.selector;
        const grid = this.grid;
        let scroll = this;
        let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let barSize = parseInt(String((panel20.clientWidth / panel20.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth));
        if (barSize > xWrap.clientWidth)
            barSize = xWrap.clientWidth;
        else if (barSize < 35)
            barSize = 35;
        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width)
            barSize = xWrap.clientWidth;
        return barSize;
    }
    getVerticalBarSize() {
        let selector = this.selector;
        const grid = this.grid;
        let scroll = this;
        let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        let rowCount = grid.getRowCount();
        let barSize = yWrap.clientHeight - (rowCount * 6.3);
        if (barSize < 50)
            barSize = 50;
        return barSize;
    }
    /* railSize */
    getRailSize(type, barSize) {
        let selector = this.selector;
        const grid = this.grid;
        let scroll = this;
        if (type == grid.code_horizontal)
            return scroll.getHorizontalRailSize(barSize);
        else if (type == grid.code_vertical)
            return scroll.getVerticalRailSize(barSize);
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
        let rowCount = grid.getRowCount();
        if (pageRowCount > pageIntRowCount)
            moveCount = Number((rowCount - pageRowCount + 1) / railSize);
        else
            moveCount = Number((rowCount - pageRowCount) / railSize);
        return moveCount;
    }
    /* hiddenSize */
    getHiddenSize(type) {
        let selector = this.selector;
        let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        let hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16; // add size( default 14px / add 2px)
        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width)
            hiddenSize = 0;
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
        if (xBarRect.right > wrapRect.right)
            barWidth = barSize - (xBarRect.right - wrapRect.right);
        if (xBarRect.width >= wrapRect.width)
            barWidth = barSize; // - (xBarRect.right - wrapRect.right);
        return barWidth + 'px';
    }
}


/***/ }),

/***/ 659:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: function() { return /* binding */ TbsGridSort; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

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
                let name = sortColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                let column = grid.getColumn(name);
                let type = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.type];
                if (sortColumn['order'] == 'asc') {
                    if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
                        let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                        let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                        if (x < y)
                            return -1;
                        else if (x > y)
                            return 1;
                    }
                    else {
                        if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase())
                            return -1;
                        else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase())
                            return 1;
                    }
                }
                else if (sortColumn['order'] == 'desc') {
                    if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .CellType */ .vZ.number) {
                        let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                        let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                        if (x < y)
                            return 1;
                        else if (x > y)
                            return -1;
                    }
                    else {
                        if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase())
                            return 1;
                        else if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase())
                            return -1;
                    }
                }
            }
        });
    }
    getSortRow(columnName) { return this.grid.sort_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, columnName); }
    changeSortButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;
        /* targetIndex <> name Index */
        let sourceIndex = null;
        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            if (name == dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] && i == targetIndex)
                return;
            else if (name == dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name]) {
                sourceIndex = i;
                break;
            }
        }
        /* new sort data */
        let dataRow = {};
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order] = grid.sort_column_table.selectValue(sourceIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order);
        /* update source column */
        grid.sort_column_table.updateByRowIndex(sourceIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, '_temp_sort');
        /* create sort data */
        if (grid.null(targetIndex))
            grid.sort_column_table.insert(dataRow);
        else
            grid.sort_column_table.insertBefore(dataRow, targetIndex);
        /* remove source */
        sourceIndex = grid.sort_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, '_temp_sort');
        grid.sort_column_table.remove(sourceIndex);
        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classSort.getSortButtonList();
        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    }
    addSortButton(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;
        // add sortColumn in grid.sort_data
        // already existing column
        let dataRows = grid.sort_column_table.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name, 1);
        if (dataRows.length > 0)
            return;
        let dataRow = {};
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name] = name;
        dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order] = order;
        /* create sort data */
        //console.log(name);
        if (grid.null(targetIndex))
            grid.sort_column_table.insert(dataRow);
        else
            grid.sort_column_table.insertBefore(dataRow, targetIndex);
        // add button in group panel
        let button = grid.classSort.createSortButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    }
    removeSortButton(element) {
        let selector = this.selector;
        const grid = this.grid;
        // remove sortColumn in grid.sort_column_table.data
        let name = element.dataset.name;
        //console.log('name :' + name);
        let rowIndex = grid.sort_column_table.selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name, name);
        //console.log('rowIndex :' + rowIndex);
        grid.sort_column_table.remove(rowIndex);
        // remove button in group panel
        let button = element.parentNode;
        button.remove();
        grid.classSort.toggleSortPlaceHolder();
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
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
        for (let i = buttons.length - 1; i >= 0; i--)
            buttons[i].remove();
    }
    getSortButtonList() {
        let selector = this.selector;
        const grid = this.grid;
        grid.classSort.removeSortButtonList();
        let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        for (let i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            let dataRow = grid.sort_column_table.data[i];
            let columnName = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
            let button = grid.classSort.createSortButton(columnName);
            let bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
            if (grid.null(bar))
                return;
            bar.append(button);
        }
        grid.classSort.toggleSortPlaceHolder();
    }
    createSortButton(columnName) {
        let selector = this.selector;
        const grid = this.grid;
        let column = grid.getColumn(columnName);
        let sortColumn = grid.classSort.getSortRow(columnName);
        let order = sortColumn[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.order];
        let orderChar = '';
        if (order == 'asc')
            orderChar = '▲';
        else if (order == 'desc')
            orderChar = '▼';
        else
            orderChar = '';
        let text = document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent = column.header[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.text] + orderChar;
        text.dataset.name = columnName;
        let icon = document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'remove.png)';
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
        const buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        const span = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
        if (buttons.length > 0)
            span.style.display = 'none';
        else
            span.style.display = '';
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
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    }
}


/***/ }),

/***/ 983:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: function() { return /* binding */ TbsGridTable; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5359);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);


class TbsGridTable {
    constructor(grid) {
        this.grid = grid;
    }
    createTable(panelName, startRowIndex, rowCount) {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;
        const table = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createTable();
        /**
         * table head
         */
        this.createTableHead(panelName, table);
        /**
         * table body
         */
        let tbody = document.createElement('tbody');
        for (let rowIndex = startRowIndex; rowIndex < rowCount; rowIndex++)
            this.createTableRow(panelName, tbody);
        table.appendChild(tbody);
        document.querySelector(selector + ' .tbs-grid-' + panelName).innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-' + panelName).appendChild(table);
        if (grid.column_table.count() == 0) {
            const tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody tr');
            for (let i = 0; i < tableRows.length; i++) {
                const tableRow = tableRows[i];
                tableRow.style.display = 'none';
            }
        }
    }
    createTableHead(panelName, table) {
        const grid = this.grid;
        let s = panelName.substring(6);
        if (s == '1')
            this.createTableHead1(panelName, table);
        else if (s == '2')
            this.createTableHead2(panelName, table);
        else
            this.createTableHead0(panelName, table);
    }
    createTableHead1(panelName, table) {
        const grid = this.grid;
        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        for (let i = 0, len = grid.info_column_table.count(); i < len; i++) {
            let dataRow = grid.info_column_table.data[i];
            let th = document.createElement('th');
            th.style.width = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] + 'px';
            th.style.display = dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] ? '' : 'none';
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
            th.style.width = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == true) ? parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]) + 'px' : '0px';
            th.style.display = (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == true) ? '' : 'none';
            sumWidth += (grid.column_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.visible] == true) ? parseInt(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width]) : 0;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        return sumWidth;
    }
    createTableRow(panelName, tbody) {
        let selector = '#' + this.grid.gridId;
        const grid = this.grid;
        let tr = document.createElement('tr');
        if (panelName == 'panel20' || panelName == 'panel22') {
            tr.style = 'height:' + grid.headerRowHeight + 'px';
            for (let i = 0; i < grid.column_table.count(); i++) {
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.display = 'none';
                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');
                td.appendChild(div);
                let input = document.createElement('input');
                input.type = 'checkbox';
                input.classList.add('tbs-grid-html-checkbox');
                input.style.display = 'none';
                div.appendChild(input);
                let span = document.createElement('span');
                span.classList.add('tbs-grid-html-string');
                div.appendChild(span);
                let spanSort = document.createElement('span');
                spanSort.classList.add('tbs-grid-html-sort');
                div.appendChild(spanSort);
                let reSizeDiv = document.createElement('div');
                reSizeDiv.classList.add('tbs-grid-html-resize');
                let sortDiv = document.createElement('div');
                sortDiv.classList.add('tbs-grid-html-sort');
                td.appendChild(div);
                td.appendChild(reSizeDiv);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else if (panelName.substring(6) == '1') {
            tr.style = 'display:;height:' + grid.rowHeight + 'px';
            for (let i = 0; i < grid.info_column_table.count(); i++) {
                const column = grid.info_column_table.data[i];
                const td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] + 'px';
                td.dataset.name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                td.dataset.columnIndex = i;
                let div = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElementCellDiv();
                td.appendChild(div);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else {
            if (panelName == 'panel40' || panelName == 'panel50' || panelName == 'panel70') {
                tr.style = 'display:;height:' + grid.rowHeight + 'px';
            }
            else if (panelName == 'panel22' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
                tr.style = 'display:;height:' + grid.rowHeight + 'px';
            }
            else {
                tr.style = 'display:none;height:' + grid.rowHeight + 'px';
            }
            for (let i = 0; i < grid.column_table.count(); i++) {
                const column = grid.column_table.data[i];
                const td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.width] + 'px';
                if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
                    td.style.display = 'none';
                }
                td.dataset.name = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                td.dataset.columnIndex = i;
                let div = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElementCellDiv();
                let spanText = _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridDom */ .E.createElementCellText();
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
        const tbody = document.querySelector(selector + ' .tbs-grid-' + panelName + ' table tbody');
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex++)
            this.createTableRow(panelName, tbody);
    }
}


/***/ }),

/***/ 3903:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ TbsGridTree; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2978);

class TbsGridTree {
    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.openDepth = null;
    }
    createTreeData() {
        const grid = this.grid;
        grid.tree_table.remove();
        const fn_getChildrenRowIds = function (row) {
            row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children] = [];
            for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                let dataRow = grid.view_table.data[i];
                if (row[grid.options.treeItemName] == dataRow[grid.options.treeParentName]) {
                    row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children].push(dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId]);
                }
            }
        };
        const fn_setRelation = function (row, depth = 1) {
            fn_getChildrenRowIds(row);
            row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth] = depth;
            grid.tree_table.insert(grid.copyJson(row));
            let arr = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
            if (arr.length > 0) {
                for (let i = 0, len = grid.view_table.count(); i < len; i++) {
                    let dataRow = grid.view_table.data[i];
                    if (arr.indexOf(dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId]) != -1)
                        fn_setRelation(dataRow, depth + 1);
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
        if (grid.null(data) || data.length == 0)
            return;
        this.openDepth = openDepth;
        /* create source_data */
        if (isFirst == true) {
            grid.source_table.remove();
            for (let i = 0, len = data.length; i < len; i++) {
                const dataRow = data[i];
                const item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }
                // const dataColumns: any[] = grid.field_table.selectRows();
                // for (let x = 0, len = dataColumns.length; x < len; x++) {
                //     const column = dataColumns[x];
                //     let columnName  = column[columnAlias.name];
                //     item[columnName] = dataRow[columnName];
                // }
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
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowMode] = '';
            dataRow[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.name];
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
            item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false;
            grid.tree_table.insert(item);
        });
        // open depth
        if (grid.notNull(openDepth)) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                let row = grid.view_table.data[i];
                let depth = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.depth];
                if (openDepth != 0 && depth > openDepth)
                    grid.view_table.remove(i);
            }
        }
        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
        if (grid.view_table.count() == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
        }
        else {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = String(grid.view_table.count());
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.autoWidth] == true)
            grid.setColumnAutoWidth();
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }
    setTreeIcon(tableCell, rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let row = grid.getRow(rowIndex);
        let arrayChildren = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
        let element = tableCell.querySelector('.tbs-grid-html-icon');
        if (arrayChildren.length > 0) {
            let nextRow = grid.getRow(rowIndex + 1);
            if (grid.null(nextRow))
                grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
            else {
                if (nextRow[grid.options.treeParentName] == row[grid.options.treeItemName])
                    grid.classTree.toggleTreeIcon(rowIndex, element, 'open');
                else
                    grid.classTree.toggleTreeIcon(rowIndex, element, 'closed');
            }
        }
        else
            grid.classTree.toggleTreeIcon(rowIndex, element);
    }
    toggleTreeIcon(rowIndex, element, type) {
        let selector = this.selector;
        const grid = this.grid;
        if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open)
            element.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'tree_open.png)';
        else if (type == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed)
            element.style['backgroundImage'] = 'url(' + grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .optionAlias */ .s1.imageRoot] + 'tree_closed.png)';
        else
            element.style['backgroundImage'] = '';
    }
    getTreeFlodingStatus(tableCell) {
        let selector = this.selector;
        const grid = this.grid;
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return null;
        if (spanIcon.style['backgroundImage'].includes('tree_open.png'))
            return _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png'))
            return _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed;
        else
            return null;
    }
    setTreeFolding(tableCell) {
        let selector = this.selector;
        const grid = this.grid;
        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return;
        let folding = grid.classTree.getTreeFlodingStatus(tableCell);
        if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open)
            grid.classTree.closeTreeRow(rowIndex);
        else if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed)
            grid.classTree.openTreeRow(rowIndex);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }
    getTreechildRows(folding, rowIndex, isAll = true) {
        // folding : open, closed
        let selector = this.selector;
        const grid = this.grid;
        let dataRows = grid.view_table.data;
        let resultRows = [];
        const fn_getchildRows = function (row, count) {
            if (Object.keys(row).length == 0)
                return;
            if (count > 1)
                resultRows.push(grid.copyJson(row));
            let arr = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.children];
            if (arr.length > 0) {
                //default : get first lower rows
                if (count == 1) {
                    for (let i = 0, len = arr.length; i < len; i++) {
                        let dataRow = grid.getTreeRowByRowId(arr[i]);
                        fn_getchildRows(dataRow, count + 1);
                    }
                }
                else {
                    if (folding == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open) {
                        if (row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen]) {
                            for (let i = 0, len = arr.length; i < len; i++) {
                                let dataRow = grid.getTreeRowByRowId(arr[i]);
                                fn_getchildRows(dataRow, count + 1);
                            }
                        }
                    }
                    else {
                        for (let i = 0, len = arr.length; i < len; i++) {
                            let dataRow = grid.getTreeRowByRowId(arr[i]);
                            fn_getchildRows(dataRow, count + 1);
                        }
                    }
                }
            }
        };
        let row = grid.getRow(rowIndex);
        fn_getchildRows(row, 1);
        return resultRows;
    }
    openTreeRow(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let row = grid.getRow(rowIndex);
        let rowId = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
        for (let i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId])
                grid.source_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = true; // keep folding status
        }
        let rows = grid.classTree.getTreechildRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open, rowIndex, false);
        grid.classTree.addTreeRows(rowIndex);
    }
    closeTreeRow(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let row = grid.getRow(rowIndex);
        let rowId = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId];
        for (let i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId])
                grid.source_table.data[i][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.isOpen] = false; // keep folding status
        }
        let rows = grid.classTree.getTreechildRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.closed, rowIndex, true);
        rows.map(row => grid.classTree.removeTreeRow(row));
    }
    addTreeRows(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;
        let rows = grid.classTree.getTreechildRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.open, rowIndex, false);
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
        }
        else {
            grid.view_table.insertBefore(row, startRowIndex);
        }
    }
    removeTreeRow(row) {
        const grid = this.grid;
        grid.view_table.removeByRowId(row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .columnAlias */ .VM.rowId]);
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }
}


/***/ }),

/***/ 2978:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G3: function() { return /* binding */ GridMode; },
/* harmony export */   OP: function() { return /* binding */ Direction; },
/* harmony export */   RJ: function() { return /* binding */ FilterType; },
/* harmony export */   VM: function() { return /* binding */ columnAlias; },
/* harmony export */   hI: function() { return /* binding */ AddRowDirection; },
/* harmony export */   lg: function() { return /* binding */ rowAlias; },
/* harmony export */   s1: function() { return /* binding */ optionAlias; },
/* harmony export */   uu: function() { return /* binding */ BeforeAfter; },
/* harmony export */   vZ: function() { return /* binding */ CellType; },
/* harmony export */   zf: function() { return /* binding */ ColumnKind; }
/* harmony export */ });
/* unused harmony export treeAlias */
var FilterType;
(function (FilterType) {
    FilterType[FilterType["Select"] = 0] = "Select";
    FilterType[FilterType["Equal"] = 1] = "Equal";
    FilterType[FilterType["NotEqual"] = 2] = "NotEqual";
    FilterType[FilterType["Greater"] = 3] = "Greater";
    FilterType[FilterType["GreaterEqual"] = 4] = "GreaterEqual";
    FilterType[FilterType["Less"] = 5] = "Less";
    FilterType[FilterType["LessEqual"] = 6] = "LessEqual";
    FilterType[FilterType["Between"] = 7] = "Between";
    FilterType[FilterType["Blank"] = 8] = "Blank";
    FilterType[FilterType["Include"] = 9] = "Include";
    FilterType[FilterType["NotInclude"] = 10] = "NotInclude";
    FilterType[FilterType["StartCharacter"] = 11] = "StartCharacter";
    FilterType[FilterType["EndCharacter"] = 12] = "EndCharacter";
})(FilterType || (FilterType = {}));
var ColumnKind;
(function (ColumnKind) {
    ColumnKind["column"] = "column";
    ColumnKind["header"] = "header";
    ColumnKind["empty"] = "empty";
})(ColumnKind || (ColumnKind = {}));
var CellType;
(function (CellType) {
    CellType["string"] = "string";
    CellType["number"] = "number";
    CellType["date"] = "date";
    CellType["combo"] = "combo";
    CellType["checkbox"] = "checkbox";
    CellType["img"] = "img";
    CellType["button"] = "button";
    CellType["link"] = "link";
    CellType["group"] = "group";
    CellType["tree"] = "tree";
})(CellType || (CellType = {}));
var GridMode;
(function (GridMode) {
    GridMode["tree"] = "tree";
    GridMode["page"] = "page";
    GridMode["pagination"] = "pagination";
})(GridMode || (GridMode = {}));
var AddRowDirection;
(function (AddRowDirection) {
    AddRowDirection["top"] = "top";
    AddRowDirection["bottom"] = "bottom";
    AddRowDirection["before"] = "before";
    AddRowDirection["after"] = "after";
})(AddRowDirection || (AddRowDirection = {}));
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
var BeforeAfter;
(function (BeforeAfter) {
    BeforeAfter["before"] = "before";
    BeforeAfter["after"] = "after";
})(BeforeAfter || (BeforeAfter = {}));
var columnAlias;
(function (columnAlias) {
    columnAlias["rowId"] = "_rowId";
    columnAlias["rowMode"] = "_mode";
    columnAlias["isChecked"] = "_isChecked";
    columnAlias["num"] = "_number";
    columnAlias["mode"] = "_mode";
    columnAlias["checkbox"] = "_checkbox";
    columnAlias["parentNum"] = "_parentNumber";
    columnAlias["depth"] = "_depth";
    columnAlias["children"] = "children";
    columnAlias["childRowIds"] = "_childRowIds";
    columnAlias["childRows"] = "_childRows";
    columnAlias["childCount"] = "_childCount";
    columnAlias["isOpen"] = "_isOpen";
    columnAlias["isShow"] = "_isShow";
    columnAlias["open"] = "open";
    columnAlias["closed"] = "closed";
    columnAlias["rowCount"] = "_rowCount";
    /**
     * User Property
     */
    columnAlias["name"] = "name";
    columnAlias["text"] = "text";
    columnAlias["type"] = "type";
    columnAlias["dataType"] = "dataType";
    columnAlias["width"] = "width";
    columnAlias["editable"] = "editable";
    columnAlias["visible"] = "visible";
    columnAlias["align"] = "align";
    columnAlias["scale"] = "scale";
    columnAlias["roundType"] = "roundType";
    columnAlias["fixedScale"] = "fixedScale";
    columnAlias["scaleMax"] = "scaleMax";
    columnAlias["scaleMin"] = "scalemin";
    columnAlias["showZero"] = "showZero";
    columnAlias["commaUnit"] = "commaUnit";
    columnAlias["thousandChar"] = "thousandChar";
    columnAlias["decimalChar"] = "decimalChar";
    columnAlias["currencyChar"] = "currencyChar";
    columnAlias["className"] = "className";
    columnAlias["resizable"] = "resizable";
    columnAlias["sortable"] = "sortable";
    columnAlias["movable"] = "movable";
    columnAlias["autoResizable"] = "autoResizable";
    columnAlias["autoWidth"] = "autoWidth";
    columnAlias["summaryType"] = "summaryType";
    columnAlias["required"] = "required";
    columnAlias["combo"] = "combo";
    columnAlias["format"] = "format";
    columnAlias["kind"] = "kind";
    columnAlias["rowSpan"] = "rowSpan";
    columnAlias["colSpan"] = "colSpan";
    columnAlias["rowIndex"] = "rowIndex";
    columnAlias["colIndex"] = "colIndex";
    columnAlias["subRowSpan"] = "subRowSpan";
    columnAlias["subColSpan"] = "subColSpan";
    columnAlias["order"] = "order";
    columnAlias["value"] = "value";
})(columnAlias || (columnAlias = {}));
/**
 * row property name
 */
var rowAlias;
(function (rowAlias) {
    rowAlias["selectMode"] = "selectMode";
    rowAlias["addRow"] = "addRow";
    rowAlias["delRow"] = "delRow";
})(rowAlias || (rowAlias = {}));
/**
 * tree property name
 */
var treeAlias;
(function (treeAlias) {
    treeAlias["itemName"] = "itemName";
    treeAlias["parentName"] = "parentName";
    treeAlias["rootValue"] = "rootValue";
})(treeAlias || (treeAlias = {}));
var optionAlias;
(function (optionAlias) {
    optionAlias["rowMode"] = "rowMode";
    optionAlias["checkbox"] = "checkbox";
    optionAlias["numWidth"] = "numWidth";
    optionAlias["rowModeWidth"] = "rowModeWidth";
    optionAlias["checkBoxWidth"] = "checkBoxWidth";
    optionAlias["insertRow"] = "insertRow";
    optionAlias["updateRow"] = "updateRow";
    optionAlias["deleteRow"] = "deleteRow";
    optionAlias["zeroChar"] = "zeroChar";
    optionAlias["useToolbar"] = "useToolbar";
    optionAlias["imageRoot"] = "imageRoot";
})(optionAlias || (optionAlias = {}));


/***/ }),

/***/ 347:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__347__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TbsGrid: function() { return /* binding */ TbsGrid; }
/* harmony export */ });
/* harmony import */ var _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(5359);
/* harmony import */ var _export_tbs_grid_excel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7277);
/* harmony import */ var _tbs_grid_scroll_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1411);
/* harmony import */ var _tbs_grid_scroll__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9402);
/* harmony import */ var _columns_tbs_grid_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2609);
/* harmony import */ var _columns_tbs_grid_columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8760);
/* harmony import */ var _tbs_grid_control__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(4678);
/* harmony import */ var _tbs_grid_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5358);
/* harmony import */ var _tbs_grid_range_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7018);
/* harmony import */ var _tbs_grid_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4533);
/* harmony import */ var _tbs_grid_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8980);
/* harmony import */ var _tbs_grid_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7304);
/* harmony import */ var _tbs_grid_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(659);
/* harmony import */ var _tbs_grid_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3903);
/* harmony import */ var _panels_tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6324);
/* harmony import */ var _panels_tbs_grid_panel10__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(486);
/* harmony import */ var _panels_tbs_grid_panel20__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4597);
/* harmony import */ var _panels_tbs_grid_panel30__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6612);
/* harmony import */ var _panels_tbs_grid_panel40__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7947);
/* harmony import */ var _panels_tbs_grid_panel50__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9506);
/* harmony import */ var _panels_tbs_grid_panel70__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4672);
/* harmony import */ var _panels_tbs_grid_panel80__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8327);
/* harmony import */ var _panels_tbs_grid_panel90__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7582);
/* harmony import */ var _summary_tbs_grid_top__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6869);
/* harmony import */ var _summary_tbs_grid_footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3187);
/* harmony import */ var _tbs_grid_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9359);
/* harmony import */ var _tbs_grid_cell__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5043);
/* harmony import */ var _base_tbs_grid_base__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(294);
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2978);
/* harmony import */ var _base_tbs_grid_is__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(9599);
/* harmony import */ var _base_tbs_grid_event__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6359);
/* harmony import */ var _base_tbs_grid_user_event__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(7154);
/* harmony import */ var _base_tbs_grid_line__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(1425);

































class TbsGrid extends _base_tbs_grid_base__WEBPACK_IMPORTED_MODULE_23__/* .TbsGridBase */ .R {
    constructor(gridId, gridConfigs) {
        super(gridId, gridConfigs);
        this.classScroll = new _tbs_grid_scroll_base__WEBPACK_IMPORTED_MODULE_1__/* .TbsGridScrollBase */ .a(this);
        this.verticalScroll = new _tbs_grid_scroll__WEBPACK_IMPORTED_MODULE_27__/* .TbsGridScroll */ .F(this, 'verticalScroll');
        this.horizontalScroll = new _tbs_grid_scroll__WEBPACK_IMPORTED_MODULE_27__/* .TbsGridScroll */ .F(this, 'horizontalScroll');
        this.classHeader = new _columns_tbs_grid_headers__WEBPACK_IMPORTED_MODULE_2__/* .TbsGridHeaders */ .e(this);
        this.classColumn = new _columns_tbs_grid_columns__WEBPACK_IMPORTED_MODULE_3__/* .TbsGridColumns */ .L(this);
        this.classControl = new _tbs_grid_control__WEBPACK_IMPORTED_MODULE_28__/* .TbsGridControl */ .v(this); // memory
        this.classRange = new _tbs_grid_range__WEBPACK_IMPORTED_MODULE_4__/* .TbsGridRange */ .P(this); // memory
        this.classRange40 = new _tbs_grid_range_panel__WEBPACK_IMPORTED_MODULE_5__/* .TbsGridRangePanel */ .z(this, 'panel40'); // memory
        this.classRange50 = new _tbs_grid_range_panel__WEBPACK_IMPORTED_MODULE_5__/* .TbsGridRangePanel */ .z(this, 'panel50'); // memory
        this.classFilter = new _tbs_grid_filter__WEBPACK_IMPORTED_MODULE_6__/* .TbsGridFilter */ .e(this); // memory
        this.classGroup = new _tbs_grid_group__WEBPACK_IMPORTED_MODULE_7__/* .TbsGridGroup */ .l(this); // memory
        this.classPage = new _tbs_grid_page__WEBPACK_IMPORTED_MODULE_8__/* .TbsGridPage */ .X(this); // memory
        this.classSort = new _tbs_grid_sort__WEBPACK_IMPORTED_MODULE_9__/* .TbsGridSort */ .m(this); // memory
        this.classTree = new _tbs_grid_tree__WEBPACK_IMPORTED_MODULE_10__/* .TbsGridTree */ .O(this); // memory
        this.classPanelBase = new _panels_tbs_grid_panel_base__WEBPACK_IMPORTED_MODULE_11__/* .TbsGridPanelBase */ .B(this);
        this.classPanel10 = new _panels_tbs_grid_panel10__WEBPACK_IMPORTED_MODULE_12__/* .TbsGridPanel10 */ .T(this);
        this.classPanel20 = new _panels_tbs_grid_panel20__WEBPACK_IMPORTED_MODULE_13__/* .TbsGridPanel20 */ .i(this);
        this.classPanel30 = new _panels_tbs_grid_panel30__WEBPACK_IMPORTED_MODULE_14__/* .TbsGridPanel30 */ .z(this);
        this.classPanel40 = new _panels_tbs_grid_panel40__WEBPACK_IMPORTED_MODULE_15__/* .TbsGridPanel40 */ .s(this);
        this.classPanel50 = new _panels_tbs_grid_panel50__WEBPACK_IMPORTED_MODULE_16__/* .TbsGridPanel50 */ .H(this);
        this.classPanel70 = new _panels_tbs_grid_panel70__WEBPACK_IMPORTED_MODULE_17__/* .TbsGridPanel70 */ .p(this);
        this.classPanel80 = new _panels_tbs_grid_panel80__WEBPACK_IMPORTED_MODULE_18__/* .TbsGridPanel80 */ .g(this);
        this.classPanel90 = new _panels_tbs_grid_panel90__WEBPACK_IMPORTED_MODULE_19__/* .TbsGridPanel90 */ .j(this);
        this.classTop = new _summary_tbs_grid_top__WEBPACK_IMPORTED_MODULE_20__/* .TbsGridTop */ .B(this);
        this.classFooter = new _summary_tbs_grid_footer__WEBPACK_IMPORTED_MODULE_21__/* .TbsGridFooter */ .h(this);
        this.tbsGridDate;
        this.tbsGridCombo;
        this.classRow = new _tbs_grid_row__WEBPACK_IMPORTED_MODULE_22__/* .TbsGridRow */ .g(this);
        this.classCell = new _tbs_grid_cell__WEBPACK_IMPORTED_MODULE_29__/* .TbsGridCell */ .u(this, null);
        this.topLineDiv = null;
        this.bottomLineDiv = null;
        this.leftLineDiv = null;
        this.rightLineDiv = null;
    }
    getUserImageRoot(columnName) {
        let result = this.gridConfigOptions['userImageRoot'];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer.userImageRoot)
                result = renderer.userImageRoot;
        }
        return result;
    }
    getRenderer(columnName, property) {
        let result = null;
        if (arguments.length == 2) {
            if (this.renderer && this.renderer[columnName] && this.renderer[columnName][property])
                result = this.renderer[columnName][property];
        }
        else if (arguments.length == 1) {
            if (this.renderer && this.renderer[columnName])
                result = this.renderer[columnName];
        }
        else {
            if (this.renderer)
                result = this.renderer;
        }
        return result;
    }
    setRenderer(renderer) {
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
            if (renderer && renderer[columnName])
                result = renderer[columnName];
        }
        else {
            if (renderer)
                result = renderer;
        }
        return result;
    }
    setInfoRenderer(renderer) { this.infoRenderer = renderer; }
    /**
     * Check Box Options
     */
    getTrueValue(columnName) { return this.getBooleanValue(columnName, 'trueValue'); }
    getFalseValue(columnName) { return this.getBooleanValue(columnName, 'falseValue'); }
    getElseValue(columnName) { return this.getBooleanValue(columnName, 'elseValue'); }
    getBooleanValue(columnName, valueType) {
        let result = this.gridConfigOptions[valueType];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer[valueType])
                result = renderer[valueType];
        }
        return result;
    }
    reverseBoolean(value) {
        if (value == 1)
            return 0;
        else if (value == 0)
            return 1;
        else if (value == '1')
            return '0';
        else if (value == '0')
            return '1';
        else if (value == 'y')
            return 'n';
        else if (value == 'n')
            return 'y';
        else if (value == 'Y')
            return 'N';
        else if (value == 'N')
            return 'Y';
        else if (value == true)
            return false;
        else if (value == false)
            return true;
        else
            return null;
    }
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
        let colType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.type];
        let format = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.format];
        if (colType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .CellType */ .vZ.number) {
            result = this.getFormatNumber(column, value);
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.visible] == false
                || (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.showZero] == false && Number(result.value) == 0)) {
                result.text = this.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .optionAlias */ .s1.zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .CellType */ .vZ.combo) {
                const data = grid.renderer[column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name]].data;
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
        let result = {};
        if (grid.null(value))
            result.value = null;
        else if (grid.trim(value) == '')
            result.value = null;
        else if (grid.substr2(value.toString(), 0, 1) == '.')
            result.value = '0'; //php 0.1 => .1
        else {
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.currencyChar])
                value = value.toString().replace(column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.currencyChar], '');
            result.value = value.toString().replace(/,/gi, '');
        }
        if (grid.null(result.value)) {
            result.text = grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .optionAlias */ .s1.zeroChar];
            return result;
        }
        result.text = result.value;
        let type = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.type];
        let scale = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.scale];
        let arr = scale.split(',');
        let decimalPoint = (arr.length > 1) ? this.trim(arr[1]) : '0';
        if (decimalPoint == '')
            decimalPoint = '0';
        let roundType = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.roundType];
        let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        let dpLen = 0; //decimal length
        if (decimalPoint == '0') {
            dpLen = 0;
            if (roundType == 'round') { // @ts-ignore
                n = parseFloat(this.round(n, dpLen));
            }
            else if (roundType == 'ceil') { // @ts-ignore
                n = parseFloat(this.ceil(n, dpLen));
            }
            else if (roundType == 'floor') { // @ts-ignore
                n = parseFloat(this.floor(n, dpLen));
            }
            else { // @ts-ignore
                parseFloat(this.round(n, dpLen));
            }
            result.text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n = (roundType == 'ceil') ? this.ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.floor(n, dpLen).toFixed(dpLen)
                        : this.round(n, dpLen).toFixed(dpLen);
                result.text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.commaUnit] == '0' ? n : formatWon(n);
            }
            else {
                dpLen = parseInt(decimalPoint);
                if (roundType == 'ceil') { // @ts-ignore
                    n = parseFloat(this.ceil(n, dpLen));
                }
                else if (roundType == 'floor') { // @ts-ignore
                    n = parseFloat(this.floor(n, dpLen));
                }
                else { // @ts-ignore
                    n = parseFloat(this.round(n, dpLen));
                }
                // n =   (roundType == 'ceil')  ? parseFloat(this.ceil(n, dpLen))
                //     : (roundType == 'floor') ? parseFloat(this.floor(n, dpLen))
                //         : parseFloat(this.round(n, dpLen));
                result.text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .optionAlias */ .s1.zeroChar] != '')
                result.text = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .optionAlias */ .s1.zeroChar;
        }
        let regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',', column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.thousandChar]);
        result.text = result.text.replaceAll('.', column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.decimalChar]);
        if (column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.currencyChar])
            result.text = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.currencyChar] + result.text;
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
        let format = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.format];
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
    setGroupColumns(groupColumns) {
        this.group_column_table.remove();
        groupColumns.map(column => this.group_column_table.insert(this.copyJson(column)));
    }
    setSortColumns(sortColumns) {
        this.sort_column_table.remove();
        sortColumns.map(column => this.sort_column_table.insert(this.copyJson(column)));
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
    setGridConfig(tbsGridConfig) { this.gridConfig = tbsGridConfig; }
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
        this.topLineDiv = document.querySelector(selector + ' .tbs-grid-top-line');
        this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
        this.leftLineDiv = document.querySelector(selector + ' .tbs-grid-left-line');
        this.rightLineDiv = document.querySelector(selector + ' .tbs-grid-right-line');
    }
    setToolbar(toolbar) {
        const grid = this;
        if (toolbar == undefined)
            return;
        //grid.showToolbarPanel = (toolbar.visible != undefined) ? grid.options.showToolbarPanel = toolbar.visible : grid.options.showToolbarPanel;
    }
    setDataColumns(columns) {
        // columns.map(column => {
        //     const dataRow = {}
        //     dataRow[columnAlias.name] = column[columnAlias.name];
        //     dataRow[columnAlias.dataType] = column[columnAlias.dataType];
        //     this.field_table.insert(dataRow);
        // });
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
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
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
    }
    ;
    getTextWidth2(context, text) {
        let selector = '#' + this.gridId;
        const grid = this;
        let metrics = context.measureText(text);
        return metrics.width;
    }
    ;
    setColumnAutoWidth() {
        let selector = '#' + this.gridId;
        const grid = this;
        let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        let arr = [];
        for (let x = 0, len = grid.column_table.count(); x < len; x++)
            arr[x] = 0;
        let fontSize = grid.getConfigFont('fontSize');
        let fontFamilty = grid.getConfigFont('fontFamily');
        for (let i = 0, len = grid.header_column_table.data.length; i < len; i++) {
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                if (grid.header_column_table.data[i][x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.kind] == 'column') {
                    let width = parseInt(grid.getTextWidth(canvas, grid.header_column_table.data[i][x][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.text], fontSize, fontFamilty));
                    if (width >= arr[x]) {
                        arr[x] = width;
                    }
                }
            }
        }
        for (let i = 0, len = grid.view_table.count(); i < len; i++) {
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                let columnName = grid.getColumnName(x);
                let column = grid.getColumn(columnName);
                let val = grid.getValueByColumnIndex(i, x);
                let width = parseInt(grid.getTextWidth(canvas, grid.getFormatText(column, val), fontSize, fontFamilty));
                if (width >= arr[x])
                    arr[x] = width;
            }
        }
        for (let x = 0, len = grid.column_table.count(); x < len; x++)
            arr[x] += 20;
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
        }
        else {
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
        grid.classPage.pageRowCount = grid.classPage.options['pageRowCount'];
    }
    setGridModePagenation() {
        let selector = '#' + this.gridId;
        const grid = this;
        const page = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';
    }
    setData(data, openDepth = 0, isFirst = true) {
        const grid = this;
        if (grid.group_column_table.count() > 0)
            grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .GridMode */ .G3.tree)
            grid.classTree.setTreeData(data, openDepth, isFirst);
        else
            grid.setGridData(data, isFirst);
    }
    setGridMode(gridMode) {
        let selector = '#' + this.gridId;
        const grid = this;
        grid.grid_mode = grid.trim(gridMode);
        if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .GridMode */ .G3.page) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePage();
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .GridMode */ .G3.pagination) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePagenation();
        }
        else if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .GridMode */ .G3.tree) { }
    }
    setGridData(data, isFirst) {
        let selector = '#' + this.gridId;
        const grid = this;
        if (data == undefined)
            return;
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
            const columns = grid.column_table.selectRows();
            for (let x = 0, len = columns.length; x < len; x++) {
                const column = columns[x];
                let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name];
                source[columnName] = this.null(dataRow[columnName]) ? null : this.getFormatValue(column, dataRow[columnName]);
            }
            // const dataColumns: any[] = grid.field_table.selectRows();
            // for (let x = 0, len = dataColumns.length; x < len; x++) {
            //     const column = dataColumns[x];
            //     let columnName  = column[columnAlias.name];
            //     source[columnName] = dataRow[columnName];
            // }
            this.source_table.insert(source);
            this.view_table.insert(grid.copyJson(source));
            if (grid.grid_mode == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .GridMode */ .G3.page)
                this.page_table.insert(grid.copyJson(source));
        }
        /* create top_data */
        grid.classTop.setTopData();
        /* create footer_data */
        grid.classFooter.setFooterData();
        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();
        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
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
        this.data_select_panel30 = []; // select color : value 0, 1
        this.data_select_panel31 = []; // view - filter
        for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
            let itemSelect = {};
            let itemLeftSelect = {};
            let itemLeftView = {};
            itemSelect[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
            itemSelect = new Uint8ClampedArray([]); //new
            itemLeftView[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] = ''; //insert, update, delete
            itemLeftView[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
            itemLeftSelect[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] = 0; //insert, update, delete
            itemLeftSelect[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
            this.data_select_panel30.push(itemSelect);
            this.data_select_panel31.push(itemLeftSelect);
        }
        this.classRange.removeRange(0, -1);
        this.classPanel30.setDataPanel(0);
    }
    /**
     * Columns API.
     */
    getColumn(name, table) { return this.isNull(table, this.column_table).selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name, name); }
    getColumns(table) { return this.isNull(table, this.column_table).select(); }
    getColumnByIndex(columnIndex, table) { return this.isNull(table, this.column_table).selectRowByRowIndex(columnIndex); }
    getColumnName(columnIndex, table) { return this.isNull(table, this.column_table).selectValue(columnIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name); }
    getColumnIndex(columnName, table) { return this.isNull(table, this.column_table).selectRowIndex(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name, columnName); }
    setColumn(columnName, property, value, table) { this.isNull(table, this.column_table).updateRow(columnName, property, value); }
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
    addColumn(addColumn, targetColumnIndex, orderType) { this.classColumn.addColumn(addColumn, targetColumnIndex, orderType); }
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
                    if (topRowIndex < 0)
                        topRowIndex = 0;
                }
            }
            else {
                if (topRowIndex > (rowCount - this.pageRowCount)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0)
                        topRowIndex = 0;
                }
            }
            if (topRowIndex < 0)
                topRowIndex = 0;
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
        if (bottomRowIndex > this.getRowCount() - 1)
            bottomRowIndex = this.getRowCount() - 1;
        return bottomRowIndex;
    }
    /**
     * view table rows
     */
    getRowCount(table) { return this.isNull(table, this.view_table).count(); }
    getRow(rowIndex, table) { return this.isNull(table, this.view_table).selectRowByRowIndex(rowIndex); }
    getRows(startRowIndex, endRowIndex, table) { return this.isNull(table, this.view_table).selectRowRange(startRowIndex, endRowIndex); }
    getRowByRowId(rowId, table) { return this.isNull(table, this.view_table).selectRowByRowId(rowId); }
    getRowIndexByRowId(rowId, table) { return this.isNull(table, this.view_table).selectRowIndexByRowId(rowId); }
    getCheckedRows() { return this.view_table.selectRows(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.isChecked, true); }
    getSelectedRows() {
        const result = [];
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.isSelectedCell31(i, 0) == 1)
                result.push(this.view_table.selectRowByRowIndex(i));
        }
        return result;
    }
    getSelectedRowsIndexArray() {
        const result = [];
        for (let rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1)
                result.push(rowIndex);
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
            item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
            item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode];
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
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode];
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
            if (row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] == 'I') {
                let item = JSON.parse(JSON.stringify(row));
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
                item[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode] = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode];
                result.push(item);
            }
        }
        return result;
    }
    createRow(row) {
        if (this.null(row))
            row = {};
        const columns = this.column_table.data;
        const item = {};
        for (let i = 0, len = columns.length; i < len; i++) {
            const column = columns[i];
            let columnName = column[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name];
            item[columnName] = this.null(row[columnName]) ? null : row[columnName];
        }
        return item;
    }
    addRow(row, direction) {
        //type : top, bottom, up, down
        const grid = this;
        const dataRow = this.createRow(row);
        const rowIndexList = this.getSelectedRowsIndexArray();
        if (rowIndexList.length == 0)
            direction = _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .AddRowDirection */ .hI.bottom;
        if (direction == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .AddRowDirection */ .hI.top) {
            this.source_table.insertBefore(dataRow, 0);
            this.view_table.insertBefore(dataRow, 0);
            let topRowIndex = 0;
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            this.classRange.selectRange(topRowIndex, topRowIndex);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .AddRowDirection */ .hI.bottom) {
            this.source_table.insert(dataRow);
            this.view_table.insert(dataRow);
            let dataLength = this.view_table.count();
            let topRowIndex = this.getFirstRowIndex();
            topRowIndex = dataLength - this.pageRowCount;
            if (topRowIndex < 0)
                topRowIndex = 0;
            if (this.pageRowCount > this.pageIntRowCount) {
                topRowIndex = topRowIndex + 1;
            }
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .AddRowDirection */ .hI.before) {
            let minRowIndex = rowIndexList[0];
            this.source_table.insertBefore(dataRow, minRowIndex);
            this.view_table.insertBefore(dataRow, minRowIndex);
            let lastRowIndex = this.view_table.count() - 1;
            let topRowIndex = this.getFirstRowIndex();
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (direction == _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .AddRowDirection */ .hI.after) {
            let minRowIndex = rowIndexList[0];
            let addRowIndex = minRowIndex + 1;
            this.source_table.insertAfter(dataRow, minRowIndex);
            this.view_table.insertAfter(dataRow, minRowIndex);
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
        const grid = this;
        if (this.null(rows) || rows.length == 0)
            return;
        let topRowIndex = this.getFirstRowIndex();
        for (let i = 0, len = rows.length; i < len; i++) {
            const row = rows[i];
            let rowId = row[_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId];
            this.source_table.removeByRowId(rowId);
            this.view_table.removeByRowId(rowId);
        }
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(topRowIndex, topRowIndex, 0, 0);
        grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        grid.classPanel30.setDataPanel(_topRowIndex);
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
    getValue(rowIndex, columnName, table) { return this.isNull(table, this.view_table).selectValue(rowIndex, columnName); }
    getValueByColumnIndex(rowIndex, columnIndex, table) {
        let columnName = this.getColumnName(columnIndex, table);
        return this.getValue(rowIndex, columnName, table);
    }
    getText(rowIndex, columnName, table) {
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
        let mode = this.view_table.data[rowIndex][_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode];
        let result = this.getFormat(this.column_table.selectRowByRowIndex(cellIndex), value);
        if (mode == 'I') {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode, 'I');
                let rowId = grid.view_table.selectValue(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId);
                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode, 'I');
            }
        }
        else {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode, 'U');
                let rowId = grid.view_table.selectValue(rowIndex, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowId);
                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, _tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.rowMode, 'U');
            }
        }
    }
    setValueByColumnIndex(rowIndex, cellIndex, value) {
        let columnName = this.getColumnName(cellIndex);
        this.setValue(rowIndex, columnName, value);
    }
    /** info_column_table */
    getInfoValue(columnName, property) {
        const dataRow = this.info_column_table.selectRow(_tbs_grid_types__WEBPACK_IMPORTED_MODULE_24__/* .columnAlias */ .VM.name, columnName);
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
        if (this.view_table.count() == 0 || this.column_table.count() == 0)
            return;
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }
    /**
     * Options
     */
    createOption(options) { this.setOptions(options); }
    setOption(optionName, optionValue) { this.options[optionName] = optionValue; }
    setOptions(options) { for (let key in options)
        this.setOption(key, options[key]); }
    /**
     * Page
     */
    setPageOption(optionName, optionValue) { this.classPage.setPageOption(optionName, optionValue); }
    /**
     * Dom Lib
     */
    addUserClass(element, className) { _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_30__/* .TbsGridDom */ .E.addUserClass(element, className); }
    removeUserClass(element) { _tbs_grid_dom__WEBPACK_IMPORTED_MODULE_30__/* .TbsGridDom */ .E.removeUserClass(element); }
    /**
     * Export Excel
     */
    exportExcel(options) {
        const excel = new _export_tbs_grid_excel__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridExcel */ .P(this);
        excel.exportExcel(options);
    }
}
applyMixins(TbsGrid, [_base_tbs_grid_is__WEBPACK_IMPORTED_MODULE_25__/* .TbsGridIs */ .A, _base_tbs_grid_event__WEBPACK_IMPORTED_MODULE_26__/* .TbsGridEvent */ .C, _base_tbs_grid_user_event__WEBPACK_IMPORTED_MODULE_31__/* .TbsGridUserEvent */ .N, _base_tbs_grid_line__WEBPACK_IMPORTED_MODULE_32__/* .TbsGridLine */ .C]);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});