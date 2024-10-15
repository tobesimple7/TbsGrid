(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xlsx"));
	else if(typeof define === 'function' && define.amd)
		define(["xlsx"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("xlsx")) : factory(root["XLSX"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__5412__) {
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

/***/ 3079:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseColumns = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridBaseColumns = /** @class */ (function () {
    function TbsGridBaseColumns() {
    }
    /**
     * Column Functions
     */
    TbsGridBaseColumns.prototype.setFixedColumn = function (fixedColumnIndex) { this.classColumn.setFixedColumn(fixedColumnIndex); };
    TbsGridBaseColumns.prototype.removeFixedColumn = function () { this.classColumn.removeFixedColumn(); };
    /**
     * Columns API.
     */
    TbsGridBaseColumns.prototype.getColumn = function (name, table) { return this.isNull(table, this.column_table).selectRow(tbs_grid_types_1.columnAlias.name, name); };
    TbsGridBaseColumns.prototype.getColumns = function (table) { return this.isNull(table, this.column_table).select(); };
    TbsGridBaseColumns.prototype.getColumnByIndex = function (columnIndex, table) { return this.isNull(table, this.column_table).selectRowByRowIndex(columnIndex); };
    TbsGridBaseColumns.prototype.getColumnName = function (columnIndex, table) { return this.isNull(table, this.column_table).selectValue(columnIndex, tbs_grid_types_1.columnAlias.name); };
    TbsGridBaseColumns.prototype.getColumnIndex = function (columnName, table) { return this.isNull(table, this.column_table).selectRowIndex(tbs_grid_types_1.columnAlias.name, columnName); };
    TbsGridBaseColumns.prototype.setColumn = function (columnName, property, value, table) { this.isNull(table, this.column_table).updateRow(columnName, property, value); };
    /**
     * Filter Columns
     */
    TbsGridBaseColumns.prototype.getFilterColumn = function (columnName) { return this.getColumn(columnName, this.filter_column_table); };
    TbsGridBaseColumns.prototype.getFilterColumnName = function (columnIndex) { return this.getColumnName(columnIndex, this.filter_column_table); };
    TbsGridBaseColumns.prototype.getFilterColumnIndex = function (columnName) { return this.getColumnIndex(columnName, this.filter_column_table); };
    /**
     * Columns API
     */
    TbsGridBaseColumns.prototype.setTopColumns = function (topColumns) { this.classTop.setTopColumns(topColumns); };
    TbsGridBaseColumns.prototype.setFooterColumns = function (footerColumns) { this.classFooter.setFooterColumns(footerColumns); };
    /**
     * Header Columns API.
     */
    TbsGridBaseColumns.prototype.getHeaderColumn = function (rowIndex, columnIndex) { return this.classHeader.getHeaderColumn(rowIndex, columnIndex); };
    TbsGridBaseColumns.prototype.getHeaderColumnByNumber = function (num) { return this.classHeader.getHeaderColumnByNumber(num); };
    TbsGridBaseColumns.prototype.addColumn = function (addColumn, targetColumnIndex, orderType) { this.classColumn.addColumn(addColumn, targetColumnIndex, orderType); };
    TbsGridBaseColumns.prototype.removeColumn = function (targetColumnIndex) { this.classColumn.removeColumn(targetColumnIndex); };
    TbsGridBaseColumns.prototype.setHeaderProperty = function (rowIndex, colIndex, property, value) { this.classHeader.setHeaderProperty(rowIndex, colIndex, property, value); };
    return TbsGridBaseColumns;
}());
exports.TbsGridBaseColumns = TbsGridBaseColumns;


/***/ }),

/***/ 9330:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseData = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridBaseData = /** @class */ (function () {
    function TbsGridBaseData() {
    }
    /**
     * Data Value, Text
     */
    TbsGridBaseData.prototype.getValue = function (rowIndex, columnName, table) { return this.isNull(table, this.view_table).selectValue(rowIndex, columnName); };
    TbsGridBaseData.prototype.getValueByColumnIndex = function (rowIndex, columnIndex, table) {
        var columnName = this.getColumnName(columnIndex, table);
        return this.getValue(rowIndex, columnName, table);
    };
    TbsGridBaseData.prototype.getText = function (rowIndex, columnName, table) {
        var column = this.getColumn(columnName); // column_table
        var val = this.getValue(rowIndex, columnName, table);
        return this.getFormatText(column, val);
    };
    TbsGridBaseData.prototype.getTextByIndex = function (rowIndex, columnIndex, table) {
        var columnName = this.getColumnName(columnIndex); // column_table
        return this.getText(rowIndex, columnName, table);
    };
    TbsGridBaseData.prototype.setValue = function (rowIndex, columnName, value) {
        var grid = this;
        var cellIndex = this.getColumnIndex(columnName);
        var oldValue = this.view_table.data[rowIndex][columnName];
        var mode = this.view_table.data[rowIndex][tbs_grid_types_1.columnAlias.rowMode];
        var result = this.getFormat(this.column_table.selectRowByRowIndex(cellIndex), value);
        if (mode == 'I') {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, tbs_grid_types_1.columnAlias.rowMode, 'I');
                var rowId = grid.view_table.selectValue(rowIndex, tbs_grid_types_1.columnAlias.rowId);
                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.rowMode, 'I');
            }
        }
        else {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, tbs_grid_types_1.columnAlias.rowMode, 'U');
                var rowId = grid.view_table.selectValue(rowIndex, tbs_grid_types_1.columnAlias.rowId);
                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.rowMode, 'U');
            }
        }
    };
    TbsGridBaseData.prototype.setValueByColumnIndex = function (rowIndex, cellIndex, value) {
        var columnName = this.getColumnName(cellIndex);
        this.setValue(rowIndex, columnName, value);
    };
    /** info_column_table */
    TbsGridBaseData.prototype.getInfoValue = function (columnName, property) {
        var dataRow = this.info_column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
        return dataRow[property];
    };
    TbsGridBaseData.prototype.setInfoValue = function (columName, property, value) { this.info_column_table.update(columName, property, value); };
    /**
     * Check Box Options
     */
    TbsGridBaseData.prototype.getTrueValue = function (columnName) { return this.getBooleanValue(columnName, 'trueValue'); };
    TbsGridBaseData.prototype.getFalseValue = function (columnName) { return this.getBooleanValue(columnName, 'falseValue'); };
    TbsGridBaseData.prototype.getElseValue = function (columnName) { return this.getBooleanValue(columnName, 'elseValue'); };
    TbsGridBaseData.prototype.getBooleanValue = function (columnName, valueType) {
        var result = this.gridConfigOptions[valueType];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            var renderer = this.renderer[columnName];
            if (renderer[valueType])
                result = renderer[valueType];
        }
        return result;
    };
    TbsGridBaseData.prototype.reverseBoolean = function (value) {
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
    };
    /**
     * Format Functions
     *
     */
    TbsGridBaseData.prototype.getFormatValue = function (column, value) {
        var result = this.getFormat(column, value);
        return result.value;
    };
    TbsGridBaseData.prototype.getFormatText = function (column, value) {
        var result = this.getFormat(column, value);
        return result.text;
    };
    TbsGridBaseData.prototype.getFormat = function (column, value) {
        var grid = this;
        var result = {};
        result.value = value;
        result.text = value;
        var colType = column[tbs_grid_types_1.columnAlias.type];
        var format = column[tbs_grid_types_1.columnAlias.format];
        if (colType == tbs_grid_types_1.CellType.number) {
            result = this.getFormatNumber(column, value);
            if (column[tbs_grid_types_1.columnAlias.visible] == false
                || (column[tbs_grid_types_1.columnAlias.showZero] == false && Number(result.value) == 0)) {
                result.text = this.options[tbs_grid_types_1.optionAlias.zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == tbs_grid_types_1.CellType.combo) {
                var data = grid.renderer[column[tbs_grid_types_1.columnAlias.name]].data;
                var key = data.valueName;
                var val = data.textName;
                for (var i = 0, len = data.rows.length; i < len; i++) {
                    var row = data.rows[i];
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
    };
    TbsGridBaseData.prototype.getFormatNumber = function (column, value) {
        var grid = this;
        var formatWon = function (n) {
            //return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); safari error
            //return val.toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','); int type error
            var parts = n.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };
        // result = { value: , text: }
        var result = {};
        if (grid.null(value))
            result.value = null;
        else if (grid.trim(value) == '')
            result.value = null;
        else if (grid.substr2(value.toString(), 0, 1) == '.')
            result.value = '0'; //php 0.1 => .1
        else {
            if (column[tbs_grid_types_1.columnAlias.currencyChar])
                value = value.toString().replace(column[tbs_grid_types_1.columnAlias.currencyChar], '');
            result.value = value.toString().replace(/,/gi, '');
        }
        if (grid.null(result.value)) {
            result.text = grid.options[tbs_grid_types_1.optionAlias.zeroChar];
            return result;
        }
        result.text = result.value;
        var type = column[tbs_grid_types_1.columnAlias.type];
        var scale = column[tbs_grid_types_1.columnAlias.scale];
        var arr = scale.split(',');
        var decimalPoint = (arr.length > 1) ? this.trim(arr[1]) : '0';
        if (decimalPoint == '')
            decimalPoint = '0';
        var roundType = column[tbs_grid_types_1.columnAlias.roundType];
        var n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        var dpLen = 0; //decimal length
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
            result.text = column[tbs_grid_types_1.columnAlias.commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[tbs_grid_types_1.columnAlias.fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n = (roundType == 'ceil') ? this.ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.floor(n, dpLen).toFixed(dpLen)
                        : this.round(n, dpLen).toFixed(dpLen);
                result.text = column[tbs_grid_types_1.columnAlias.commaUnit] == '0' ? n : formatWon(n);
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
                result.text = column[tbs_grid_types_1.columnAlias.commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[tbs_grid_types_1.optionAlias.zeroChar] != '')
                result.text = tbs_grid_types_1.optionAlias.zeroChar;
        }
        var regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',', column[tbs_grid_types_1.columnAlias.thousandChar]);
        result.text = result.text.replaceAll('.', column[tbs_grid_types_1.columnAlias.decimalChar]);
        if (column[tbs_grid_types_1.columnAlias.currencyChar])
            result.text = column[tbs_grid_types_1.columnAlias.currencyChar] + result.text;
        return result;
    };
    TbsGridBaseData.prototype.getFormatDate = function (column, value) {
        var grid = this;
        var result = {};
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
        var format = column[tbs_grid_types_1.columnAlias.format];
        // date char : . - /
        var formatText = format.replace(/\./gi, '');
        formatText = formatText.replace(/\-/gi, '');
        formatText = formatText.replace(/\//gi, '');
        var dateText = result.text;
        var yyyy = '';
        var MM = '';
        var dd = '';
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
    };
    return TbsGridBaseData;
}());
exports.TbsGridBaseData = TbsGridBaseData;


/***/ }),

/***/ 9288:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseEvent = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var tbs_grid_date_1 = __webpack_require__(2633);
var tbs_grid_combo_1 = __webpack_require__(6875);
var TbsGridBaseEvent = /** @class */ (function () {
    function TbsGridBaseEvent() {
    }
    TbsGridBaseEvent.prototype.event_input = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var panelInputt = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var colType = input.dataset.type;
        var keydownEvent = function (e) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            var input = document.querySelector(selector + ' .tbs-grid-input');
            var mode = input.dataset.mode;
            if (mode == undefined)
                mode = '';
            if (e.ctrlKey) {
                if (e.keyCode == 37 && mode == '') {
                    if (!(grid.options[tbs_grid_types_1.rowAlias.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, tbs_grid_types_1.AddRowDirection.before);
                    grid.input_focus();
                } //left arrow //type : first, last, up, down
                else if (e.keyCode == 39 && mode == '') {
                    if (!(grid.options[tbs_grid_types_1.rowAlias.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, tbs_grid_types_1.AddRowDirection.after);
                    grid.input_focus();
                } //right arrow
                else if (e.keyCode == 38 && mode == '') {
                    if (!(grid.options[tbs_grid_types_1.rowAlias.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, tbs_grid_types_1.AddRowDirection.top);
                    grid.input_focus();
                } //up arrow
                else if (e.keyCode == 40 && mode == '') {
                    if (!(grid.options[tbs_grid_types_1.rowAlias.addRow]))
                        return;
                    grid.editEnd();
                    grid.addRow({}, tbs_grid_types_1.AddRowDirection.bottom);
                    grid.input_focus();
                } //down arrow
                //else if (e.keyCode == 46 && mode == '') { if(!(grid.options[rowAlias.addRow])) return; grid.editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
                else if ((e.keyCode == 65 || e.keyCode == 97) && mode == '') { //ctrl + a, A
                    if (!(grid.options[tbs_grid_types_1.rowAlias.addRow])) {
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
                    var cellIndex = grid.startCellIndex;
                    var column = grid.getColumnByIndex(cellIndex);
                    if (grid.isNull(column[tbs_grid_types_1.columnAlias.editable], false)) {
                        if (grid.notNull(grid.onEdit)) { // state
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
        var keyupEvent = function (e) {
            //e.preventDefault();
            //e.stopPropagation();
            //e.stopImmediatePropagation();
            var input = document.querySelector(selector + ' .tbs-grid-input');
            var colType = input.dataset.type;
        };
        var clickEvent = function (e) {
            var column = grid.column_table.data;
            var input = document.querySelector(selector + ' .tbs-grid-input');
            var colType = grid.column_table.data[grid.startCellIndex][tbs_grid_types_1.columnAlias.type];
        };
        var blurEvent = function (e) {
            // inputLayerPanel 일 살아 있을 경우.
            // focus가 사라진다 해도..input은 남아 있어야 해.
            var inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            if (inputLayerPanel.style.left != '30000px')
                return;
            var input = document.querySelector(selector + ' .tbs-grid-input');
            var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
            var input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
            var mode = input.dataset.mode;
            var rowIndex = input.dataset.rowIndex;
            var cellIndex = input.dataset.columnIndex;
            var column = grid.column_table.data[cellIndex];
            /* user blur event stop */
            if (rowIndex == undefined || cellIndex == undefined) {
                grid.input_hide();
                return;
            }
            if (input.dataset.mode == undefined || input.dataset.mode == '')
                return; //{ e.stopImmediatePropagation(); }
            if (rowIndex == -1 || cellIndex == -1)
                return;
            if (grid.notNull(grid.onEdit)) {
                grid.editEnd(e, 'key');
            }
            else {
                if (isNaN(cellIndex))
                    return;
                var s = input.value;
                if (column[tbs_grid_types_1.columnAlias.type] == tbs_grid_types_1.CellType.combo)
                    s = input_code.value;
                else if (column[tbs_grid_types_1.columnAlias.type] == 'number' && grid.trim(s) == grid.options[tbs_grid_types_1.optionAlias.zeroChar])
                    s = '0';
                grid.setValueByColumnIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
                grid.input_hide();
            }
            grid.apply();
        };
        var wheelEvent = function (e) { };
        var copyEvent = function (e) {
            var ta = document.createElement('textarea');
            var s = '';
            if (grid.classRange40.data_select_panel30.length > 0) {
                var startRowIndex = 0;
                var startCellIndex = grid.classRange40._startCellIndex;
                var lastRowIndex = 0;
                var lastCellIndex = grid.classRange40._lastCellIndex;
                for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (var colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        var columnName = grid.column_table.selectValue(colIndex, tbs_grid_types_1.columnAlias.name);
                        var val = grid.getValue(rowIndex, columnName, grid.top_table);
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
                var startRowIndex = 0;
                var startCellIndex = grid.classRange50._startCellIndex;
                var lastRowIndex = 0;
                var lastCellIndex = grid.classRange50._lastCellIndex;
                for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (var colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        var val = grid.getValueByColumnIndex(rowIndex, colIndex, this.footer_table);
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
                var startRowIndex = grid._startRowIndex;
                var startCellIndex = grid._startCellIndex;
                var lastRowIndex = grid._lastRowIndex;
                var lastCellIndex = grid._lastCellIndex;
                for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (var colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        var val = grid.getValueByColumnIndex(rowIndex, colIndex);
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
        var pasteEvent = function (e) {
            var data = e.clipboardData.getData('text/plain');
            var startRowIndex = grid.startRowIndex;
            var startCellIndex = grid.startCellIndex;
            //-------------------------------------------------------------
            var td = grid.classColumn.getSelectedTableCell();
            if (td == 'undefined' || td == null)
                return;
            //-------------------------------------------------------------
            var rowArray = data.split('\r\n');
            var i = 0;
            for (var rowIndex = startRowIndex; rowIndex < startRowIndex + rowArray.length; rowIndex++) {
                if (rowIndex >= grid.view_table.count())
                    break;
                var colArray = rowArray[i].split('\t');
                var j = 0;
                for (var colIndex = startCellIndex; colIndex < startCellIndex + colArray.length; colIndex++) {
                    //if (grid.column_table.data[colIndex].column_readonly == true) continue;
                    if (grid.column_table.data[colIndex][tbs_grid_types_1.columnAlias.editable] == false)
                        continue;
                    grid.setValueByColumnIndex(rowIndex, colIndex, colArray[j]);
                    j += 1;
                }
                i += 1;
            }
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        };
        var cutEvent = function (e) { };
        input.addEventListener('keydown', keydownEvent, true);
        input.addEventListener('keyup', keyupEvent, true);
        input.addEventListener('click', clickEvent, true);
        input.addEventListener('blur', blurEvent, true);
        input.addEventListener('wheel', wheelEvent, true);
        input.addEventListener('copy', copyEvent, true);
        input.addEventListener('paste', pasteEvent, true);
        input.addEventListener('cut', cutEvent, true);
    };
    TbsGridBaseEvent.prototype.event_input_icon = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        var colType = input_icon.dataset.type;
        var mousedownEvent = function (e) {
            //console.dir(e)
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            var input = document.querySelector(selector + ' .tbs-grid-input');
            var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
            var input_panel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
            var column = grid.column_table.data[grid.startCellIndex];
            var colType = grid.column_table.data[grid.startCellIndex][tbs_grid_types_1.columnAlias.type];
            //tbs-grid-input-layer-panel : calendar, combo
            if (colType == 'date') {
                grid.tbsGridDate = new tbs_grid_date_1.TbsGridDate(grid, column, input);
            }
            else if (colType == tbs_grid_types_1.CellType.combo) {
                grid.tbsGridCombo = new tbs_grid_combo_1.TbsGridCombo(grid, column, input, input_code);
            }
        };
        input_icon.addEventListener('mousedown', mousedownEvent);
    };
    TbsGridBaseEvent.prototype.input_show = function (e, mode) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lineWeight = 3;
        var rowIndex = grid.startRowIndex;
        var cellIndex = grid.startCellIndex;
        var columns = grid.column_table.data;
        var column = columns[cellIndex];
        var colType = column[tbs_grid_types_1.columnAlias.type];
        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        var input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
        var panelMain = document.querySelector(selector + ' .tbs-grid-main');
        var td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
        if (td == null)
            return;
        var value = this.getValue(rowIndex, column[tbs_grid_types_1.columnAlias.name]);
        var result = this.getFormat(column, value); //result.value, result.text
        if (column[tbs_grid_types_1.columnAlias.editable] == false)
            return;
        grid.tbs_moveCellLine(td, rowIndex, cellIndex);
        var left = td.getBoundingClientRect().left;
        var top = td.getBoundingClientRect().top;
        var leftMain = panelMain.getBoundingClientRect().left;
        var topMain = panelMain.getBoundingClientRect().top;
        if (mode == 'mouse') {
            if (colType == 'number' && grid.trim(result.text) == grid.options[tbs_grid_types_1.optionAlias.zeroChar])
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
            var width = parseInt(column[tbs_grid_types_1.columnAlias.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';
            input_icon.style.display = '';
            input_icon.style.top = top + 'px';
            input_icon.style.left = "".concat(left + width - 15, "px");
            input_icon.dataset.type = colType;
            input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
        }
        else if (colType == tbs_grid_types_1.CellType.combo) {
            var width = parseInt(column[tbs_grid_types_1.columnAlias.width]);
            panelInput.style.width = (width - 15 - 3) + 'px';
            input_icon.style.display = '';
            input_icon.style.top = top + 'px';
            input_icon.style.left = "".concat(left + width - 15, "px");
            input_icon.dataset.type = colType;
            input_icon.src = grid.getConfigOption('imageRoot') + 'down-arrow.png';
        }
        else {
            input_icon.style.diplay = 'none';
            input.style.backgroundRepeat = '';
            input.style.backgroundImage = '';
            input.style.backgroundPosition = '';
            input.style.backgroundSize = '';
            panelInput.style.width = (parseInt(column[tbs_grid_types_1.columnAlias.width]) - lineWeight) + 'px';
        }
        if (mode == 'mouse')
            input.select();
    };
    TbsGridBaseEvent.prototype.input_hide = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        // date, combo layer
        var input_icon = document.querySelector(selector + ' .tbs-grid-input-panel-icon');
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
    };
    TbsGridBaseEvent.prototype.input_focus = function () { if (this.isMobile == false)
        document.querySelector('#' + this.gridId + ' .tbs-grid-input').focus(); };
    TbsGridBaseEvent.prototype.editStart = function (e, mode) {
        var selector = '#' + this.gridId;
        var grid = this;
        var state = 0;
        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        var result = true;
        var rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        var cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
        var eventRow = grid.getRow(rowIndex);
        if (grid.group_column_table.count() > 0) {
            if (eventRow[tbs_grid_types_1.columnAlias.depth] <= grid.group_column_table.count())
                return;
        }
        var column = grid.getColumnByIndex(cellIndex);
        var columnName = grid.getColumnName(cellIndex);
        var value = grid.getValue(rowIndex, columnName);
        var text = grid.getText(rowIndex, columnName);
        var eventData = {};
        eventRow.rowIndex = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName = columnName;
        eventRow.value = value;
        eventRow.text = text;
        eventRow.state = state;
        eventRow.newValue = input.value;
        eventRow.data = eventRow;
        if (mode == 'key') {
            if (column[tbs_grid_types_1.columnAlias.editable] == true && grid.notNull(grid.onEdit)) {
                var result_1 = grid.onEdit(grid, state, eventRow);
                if (grid.isNull(result_1, true)) {
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
            if (column[tbs_grid_types_1.columnAlias.editable] == true && grid.notNull(grid.onEdit)) {
                var result_2 = true;
                result_2 = grid.onEdit(grid, state, eventRow);
                if (grid.null(result_2) || result_2 == true) {
                    grid.input_show(e, mode);
                }
                else {
                    //grid.input_hide(); grid.apply(); // not certain
                    document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
                }
            }
        }
    };
    TbsGridBaseEvent.prototype.editing = function (e, mode) {
        var selector = '#' + this.gridId;
        var grid = this;
        var state = 1;
        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        if (input.dataset.columnIndex == -1) {
            grid.input_hide();
            return;
        }
        var result = true;
        var rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        var cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
        var column = grid.getColumnByIndex(cellIndex);
        var columnName = grid.getColumnName(cellIndex);
        var value = grid.getValue(rowIndex, columnName);
        var text = grid.getText(rowIndex, columnName);
        var eventRow = grid.getRow(rowIndex);
        var eventData = {};
        eventData.rowIndex = rowIndex;
        eventData.columnIndex = cellIndex;
        eventData.columnName = columnName;
        eventData.value = value;
        eventData.text = text;
        eventData.state = state;
        eventData.newValue = input.value;
        eventData.data = eventRow;
        if (column[tbs_grid_types_1.columnAlias.editable] == true && grid.notNull(grid.onEdit)) {
            var result_3 = true;
            if (state == 1 && panelInput.style.left != '30000px') {
                result_3 = grid.onEdit(grid, state, eventRow);
                if (grid.null(result_3) || result_3 == true) {
                }
                else {
                    grid.input_hide();
                    grid.apply();
                }
            }
        }
    };
    TbsGridBaseEvent.prototype.editEnd = function (e, mode) {
        var selector = '#' + this.gridId;
        var grid = this;
        var state = 2;
        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        if (grid.null(input.dataset.columnIndex) || input.dataset.columnIndex == -1) {
            grid.input_hide();
        }
        else {
            var result = true;
            var rowIndex = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
            var cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.columnIndex;
            var column = grid.getColumnByIndex(cellIndex);
            //let column = grid.column_table.selectRowByRowIndex(cellInex);
            var columnName = grid.getColumnName(cellIndex);
            var value = grid.getValue(rowIndex, columnName);
            var text = grid.getText(rowIndex, columnName);
            var eventRow = grid.getRow(rowIndex);
            var eventData = {};
            eventData.rowIndex = rowIndex;
            eventData.columnIndex = cellIndex;
            eventData.columnName = columnName;
            eventData.value = value;
            eventData.text = text;
            eventData.state = state;
            eventData.newValue = input.value;
            eventData.data = eventRow;
            if (column[tbs_grid_types_1.columnAlias.editable] == true && grid.notNull(grid.onEdit)) {
                var result_4 = true;
                if (state == 2 && panelInput.style.left != '30000px') {
                    result_4 = grid.onEdit(grid, state, eventRow);
                    if (grid.null(result_4) || result_4 == true) {
                        //console.log(2);
                        var s = input.value;
                        if (column[tbs_grid_types_1.columnAlias.type] == tbs_grid_types_1.CellType.combo)
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
    };
    /**
     * Event Functions
     *
     */
    TbsGridBaseEvent.prototype.tbs_addEventAll = function () {
        var selector = '#' + this.gridId;
        var grid = this;
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
            var panelInputList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');
            var inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
            var inputIconList = document.querySelectorAll(selector + ' .tbs-grid-input-panel-icon');
            var inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-layer-panel');
            for (var i = 0; i < inputList.length; i++) {
                var panelInput = panelInputList[i];
                var input = inputList[i];
                var input_icon = inputIconList[i];
                var input_panel = inputPanelList[i];
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
        var bodyMouseDownEvent = function (e) {
            var name = e.target.className;
            var inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
            var inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
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
        var mouseDownGridEvent = function (e) {
            var name = e.target.className;
            var inputPanel = document.querySelector(selector + ' .tbs-grid-input-panel');
            var inputLayerPanel = document.querySelector(selector + ' .tbs-grid-input-layer-panel');
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
        var windowResizeEvent = function (e) {
            setTimeout(function () { grid.apply(); }, 200);
        };
        window.addEventListener('resize', windowResizeEvent, true);
    };
    TbsGridBaseEvent.prototype.event_columnSort = function (cell) {
        var selector = '#' + this.gridId;
        var grid = this;
        var column = grid.getColumn(cell.dataset.name);
        var columnName = cell.dataset.name;
        // * sort(▼), (▲), (■) order
        if (cell == undefined)
            return false;
        var isSortable = grid.isSortableColumn(cell.dataset.name);
        if (!isSortable)
            return false;
        //let sortDiv = cell.querySelector('.tbs-grid-html-sort');
        var curSortKind = '';
        var sortKind = '';
        if (grid.sort_column_table.isRow(tbs_grid_types_1.columnAlias.name, columnName)) {
            var dataRow = grid.sort_column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
            curSortKind = dataRow[tbs_grid_types_1.columnAlias.order];
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
        if (grid.sort_column_table.isRow(tbs_grid_types_1.columnAlias.name, columnName)) {
            var dataRow = grid.sort_column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
            var rowId = dataRow[tbs_grid_types_1.columnAlias.rowId];
            grid.sort_column_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.order, sortKind);
        }
        else {
            var dataRow = {};
            dataRow[tbs_grid_types_1.columnAlias.name] = columnName;
            dataRow[tbs_grid_types_1.columnAlias.order] = sortKind;
            grid.sort_column_table.insert(dataRow);
        }
        var count = grid.sort_column_table.count();
        var emptyCount = grid.sort_column_table.count('order', '');
        if (count == emptyCount) {
            grid.classSort.initSortData();
        }
        if (grid.options.showFilterPanel)
            grid.classFilter.filters();
        grid.classSort.getSortButtonList();
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, grid.classGroup.openDepth, false);
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.tree) {
            grid.setData(grid.view_table.data, grid.classTree.openDepth, false);
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.page) {
            grid.setData(grid.view_table.data, null, false);
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
            grid.setData(grid.view_table.data);
        }
        else {
            if (grid.isSortableColumn()) {
                grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
                grid.classRange.removeRange(0, -1);
                grid.apply();
            }
        }
    };
    TbsGridBaseEvent.prototype.event_mobileTouchDrag = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var startRowIndex, startCellIndex;
        var lastRowIndex, lastCellIndex;
        var xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        var xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        var xPos = { left: 0, x: 0 };
        var yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        var yPos = { top: 0, y: 0 };
        var actveTopRowIndex = -1;
        var touchStartEvent = function (e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            actveTopRowIndex = -1;
            var col;
            if (e.target.tagName == 'DIV') {
                col = e.target.parentNode;
            }
            else if (e.target.tagName == 'SPAN') {
                col = e.target.parentNode.parentNode;
            }
            else {
                col = e.target;
            }
            var rowIndex = grid.classColumn.getRowIndexInTable(col.parentNode.rowIndex);
            //grid.classRange.removeRange(0, -1);
            //let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
            yPos.top = Number(yBar.style.top.replace('px', ''));
            yPos.y = e.changedTouches[0].clientY;
            xPos.left = Number(xBar.style.left.replace('px', ''));
            xPos.x = e.changedTouches[0].clientX;
            document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchmove', touchMoveEvent);
            document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchend', touchEndEvent);
        };
        var touchMoveEvent = function (e) {
            //e.stopPropagation();
            var xMove = e.changedTouches[0].clientX - xPos.x;
            var yMove = e.changedTouches[0].clientY - yPos.y;
            ;
            if (Math.abs(xMove) > Math.abs(yMove)) {
                var left = xPos.left - xMove;
                var xRailWidth = xWrap.clientWidth - xBar.clientWidth;
                if (left < 0)
                    left = 0;
                if (left > xRailWidth)
                    left = xRailWidth;
                xBar.style.left = left.toString() + 'px';
                var header = document.querySelector(selector + ' .tbs-grid-panel20');
                var ratio = (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
                var nLeft = (left * -1 * ratio).toString();
                grid.classScroll.setContentPanelLeft(nLeft);
                //grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                grid.apply();
            }
            else if (Math.abs(xMove) < Math.abs(yMove)) {
                var yBarTop = yPos.top - yMove;
                if (yBarTop < 0)
                    yBarTop = 0;
                if (yBarTop > grid.verticalScroll.railSize)
                    yBarTop = grid.verticalScroll.railSize;
                var displayTopRowIndex_1 = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
                actveTopRowIndex = displayTopRowIndex_1;
                var topRowIndex_1 = displayTopRowIndex_1;
                //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
                setTimeout(function () { grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex_1); }, 1);
                setTimeout(function () { grid.classPanel30.setDataPanel(topRowIndex_1); }, 5);
            }
        };
        var touchEndEvent = function (e) {
            //e.stopPropagation();
            var xMove = e.changedTouches[0].clientX - xPos.x;
            var yMove = e.changedTouches[0].clientY - yPos.y;
            var tableCell, targetName;
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
            var eventPanelName = 'panel30';
            startCellIndex = tableCell.cellIndex;
            lastCellIndex = startCellIndex;
            startRowIndex = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex = startRowIndex;
            if (Math.abs(xMove) < 5 && Math.abs(yMove) < 5) {
                grid.classRange.removeRange(0, -1, 0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
                grid.apply();
            }
            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
            document.body.style.overflow = 'auto';
        };
        document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
    };
    TbsGridBaseEvent.prototype.event_columnResize = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var startX = 0; // mouse start x position
        var movedWidth = 0; // moved width
        var cellWidth = 0; // header cell width
        var tableWidth = 0;
        var initWidth = [];
        var childList = [];
        var tableCell, resizer;
        var eventDetail = 0; // 1 : click (resize), 2 : onDblclick(auto resize)
        var mouseDownEvent = function (e) {
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
                var isResizable = grid.isResizableColumn(tableCell.dataset.name);
                if (!isResizable)
                    return;
                startX = window.pageXOffset + e.clientX;
                var style = window.getComputedStyle(tableCell);
                cellWidth = parseInt(style.width, 10);
                // @ts-ignore
                tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);
                resizer.classList.add('.tbs-grid-html-resizing');
                if (tableCell.dataset.name == '') {
                    var cellIndex = tableCell.cellIndex;
                    var lastCellIndex = cellIndex + tableCell.colSpan;
                    childList = [];
                    initWidth = [];
                    var thCells = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
                    for (var i = cellIndex; i < lastCellIndex; i++) {
                        var thCell = thCells[i];
                        var width = parseInt(thCell.style.width, 10);
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
                var cell = e.target.parentElement;
                var columnName = grid.getColumnName(cell.cellIndex);
                var isAutoResizable = grid.isAutoResizableColumn(columnName);
                if (isAutoResizable != true)
                    return;
                var colIndex = cell.cellIndex + parseInt(cell.colSpan) - 1;
                var column = grid.getColumn(columnName);
                var firstWidth = parseInt(column[tbs_grid_types_1.columnAlias.width]);
                var maxWidth = 0;
                var canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
                var fontSize = grid.getConfigFont('fontSize');
                var fontFamilty = grid.getConfigFont('fontFamily');
                for (var i = 0, len = grid.header_column_table.count(); i < len; i++) {
                    var headerColumns = grid.header_column_table.data[i];
                    if (headerColumns[colIndex][tbs_grid_types_1.columnAlias.kind] == 'column') {
                        var width = parseInt(grid.getTextWidth(canvas, headerColumns[colIndex][tbs_grid_types_1.columnAlias.text], fontSize, fontFamilty));
                        if (width >= maxWidth)
                            maxWidth = width;
                    }
                }
                for (var i = 0, len = grid.view_table.count(); i < len; i++) {
                    var val = grid.getText(i, columnName);
                    var width = parseInt(grid.getTextWidth(canvas, val, fontSize, fontFamilty));
                    if (width >= maxWidth)
                        maxWidth = width;
                }
                grid.classScroll.setColumnWidth(panelName, colIndex, maxWidth + 20); // 20 is Correction value
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }
        };
        //eventColumnResize
        var mouseMoveEvent = function (e) {
            if (eventDetail == 1) {
                e.stopPropagation();
                if (panelName == 'panel22') {
                    movedWidth = e.clientX - startX;
                    if (tableCell.dataset.name == '') {
                        var count = childList.length;
                        // @ts-ignore
                        var moveWidth = parseInt(movedWidth / count);
                        for (var i = 0, len = childList.length; i < len; i++) {
                            var cellIndex = childList[i];
                            var nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';
                            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        }
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                    else {
                        var cellIndex = tableCell.cellIndex;
                        var nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';
                        grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                }
                else if (panelName == 'panel20') {
                    movedWidth = e.clientX - startX;
                    if (tableCell.dataset.name == '') {
                        var count = childList.length;
                        // @ts-ignore
                        var moveWidth = parseInt(movedWidth / count);
                        for (var i = 0, len = childList.length; i < len; i++) {
                            var cellIndex = childList[i];
                            var nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';
                            grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        }
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                    else {
                        var cellIndex = tableCell.cellIndex;
                        var nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';
                        grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
                        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                    }
                }
            }
        };
        //eventColumnResize
        var mouseUpEvent = function (e) {
            if (eventDetail == 1) {
                e.stopPropagation();
                resizer.classList.remove('.tbs-grid-html-resizing');
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
        };
        var panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        panel.addEventListener('mousedown', mouseDownEvent, false);
    };
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
    TbsGridBaseEvent.prototype.event_wheel = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        var mouseWheelEvent = function (e) {
            var name = e.target.className;
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
    };
    TbsGridBaseEvent.prototype.event_scrollButton = function () {
        //mouse wheel event
        //onmousedown -> onmouseup -> click
        var selector = '#' + this.gridId;
        var grid = this;
        var leftButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-left');
        var rightButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-right');
        var upButton = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-up');
        var downButton = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-down');
        var flag = false;
        //-----------------------------------------------------------------
        var leftButtonMouseDownEvent = function (e) {
            document.addEventListener('mouseup', leftButtonMouseUpEvent);
            flag = true;
            doInterval('left');
        };
        var leftButtonMouseUpEvent = function (e) {
            flag = false;
            document.removeEventListener('mouseup', leftButtonMouseUpEvent);
        };
        //-----------------------------------------------------------------
        var rightButtonMouseDownEvent = function (e) {
            document.addEventListener('mouseup', rightButtonMouseUpEvent);
            flag = true;
            doInterval('right');
        };
        var rightButtonMouseUpEvent = function (e) {
            flag = false;
            document.removeEventListener('mouseup', rightButtonMouseUpEvent);
        };
        //-----------------------------------------------------------------
        var upButtonMouseDownEvent = function (e) {
            document.addEventListener('mouseup', upButtonMouseUpEvent);
            flag = true;
            doInterval('up');
        };
        var upButtonMouseUpEvent = function (e) {
            flag = false;
            document.removeEventListener('mouseup', upButtonMouseUpEvent);
        };
        //-----------------------------------------------------------------
        var downButtonMouseDownEvent = function (e) {
            document.addEventListener('mouseup', downButtonMouseUpEvent);
            flag = true;
            doInterval('down');
        };
        var downButtonMouseUpEvent = function (e) {
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
    };
    TbsGridBaseEvent.prototype.event_railClick = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var xWrapClickEvent = function (e) {
            var bar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            var left = parseInt(bar.style.left.replace('px', ''));
            if (isNaN(left))
                left = 0;
            var barSize = grid.horizontalScroll.barSize;
            if (e.offsetX >= left && e.offsetX <= (left + barSize))
                return;
            if (e.target.className != 'tbs-grid-horizontal-scroll-bar') {
                if (e.offsetX > left) {
                    var move = e.offsetX - (left + barSize);
                    bar.style.left = (left + move) + 'px';
                }
                if (e.offsetX < left) {
                    var move = e.offsetX;
                    bar.style.left = (e.offsetX) + 'px';
                }
                var movedLeft = grid.classScroll.getContentPanelLeft(bar.style.left);
                grid.classScroll.setContentPanelLeft(movedLeft);
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }
        };
        var yWrapClickEvent = function (e) {
            var bar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            var top = bar.style.top != '' ? parseInt(bar.style.top, 10) : 0;
            var barSize = grid.verticalScroll.barSize;
            if (e.offsetY >= top && e.offsetY <= (top + barSize))
                return;
            if (e.target.className != 'tbs-grid-vertical-scroll-bar') {
                if (e.offsetY > top) {
                    var move = e.offsetY - (top + barSize);
                    bar.style.top = (top + move) + 'px';
                }
                else if (e.offsetY < top) {
                    var move = e.offsetY;
                    bar.style.top = e.offsetY + 'px';
                }
                // let topRowIndex = grid.getFirstRowIndex('panel30');
                // if (grid.isLastRowIndex(topRowIndex)) bar.style.top = grid.verticalScroll.railSize + 'px';
                e = null;
                var moveCount = grid.verticalScroll.moveCount;
                /*
                @issue : parseInt(bar.style.top, 10) * moveCount < 0, topRowIndex always is 0.
                7 * 0.063 = 0.48  ceil => yMovecount.
            */
                var trTopIndex = Math.ceil(parseInt(bar.style.top, 10) * moveCount);
                bar = null;
                grid.classPanel30.setDataPanel(trTopIndex);
            }
        };
        //-----------------------------------------------------------------
        document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-wrap').addEventListener('click', xWrapClickEvent);
        document.querySelector(selector + ' .tbs-grid-vertical-scroll   .tbs-grid-vertical-scroll-wrap').addEventListener('click', yWrapClickEvent);
    };
    TbsGridBaseEvent.prototype.event_dragScrollBar = function () {
        // function : drag scroll bar
        var selector = '#' + this.gridId;
        var grid = this;
        var xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        var xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        var xPos = { left: 0, x: 0 };
        //== x scroll
        var xMouseDownEvent = function (e) {
            grid.editEnd();
            e.stopPropagation();
            if (e.target.className != 'tbs-grid-horizontal-scroll-bar')
                return;
            xPos.left = Number(xBar.style.left.replace('px', ''));
            xPos.x = e.clientX;
            document.addEventListener('mousemove', xMouseMoveEvent);
            document.addEventListener('mouseup', xMouseUpEvent);
        };
        var xMouseMoveEvent = function (e) {
            //e.preventDefault();	// next stop
            //e.stopPropagation();	// up stop
            var xMove = e.clientX - xPos.x;
            var left = xPos.left + xMove;
            var xRailWidth = xWrap.clientWidth - xBar.clientWidth;
            if (left < 0)
                left = 0;
            if (left > xRailWidth)
                left = xRailWidth;
            xBar.style.left = left.toString() + 'px';
            var header = document.querySelector(selector + ' .tbs-grid-panel20');
            var content = document.querySelector(selector + ' .tbs-grid-panel30');
            var sum = document.querySelector(selector + ' .tbs-grid-panel40');
            var footer = document.querySelector(selector + ' .tbs-grid-panel50');
            var ratio = (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
            grid.classScroll.setContentPanelLeft((left * -1 * ratio).toString());
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        };
        var xMouseUpEvent = function (e) {
            document.removeEventListener('mousemove', xMouseMoveEvent);
            document.removeEventListener('mouseup', xMouseUpEvent);
        };
        xBar.addEventListener('mousedown', xMouseDownEvent, false);
        //== y scroll
        var yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        var yPos = { top: 0, y: 0 };
        var actveTopRowIndex = -1;
        var yMouseDownEvent = function (e) {
            grid.editEnd();
            e.stopPropagation();
            actveTopRowIndex = -1;
            if (e.target.className != 'tbs-grid-vertical-scroll-bar')
                return;
            var yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            if (grid.empty(yBar.style.top))
                yPos.top = 0;
            else
                yPos.top = parseInt(yBar.style.top, 10);
            yPos.y = e.clientY;
            document.addEventListener('mousemove', yMouseMoveEvent);
            document.addEventListener('mouseup', yMouseUpEvent);
        };
        var yMouseMoveEvent = function (e) {
            var yBarTop = yPos.top + e.clientY - yPos.y;
            if (yBarTop < 0)
                yBarTop = 0;
            else if (yBarTop >= grid.verticalScroll.railSize)
                yBarTop = grid.verticalScroll.railSize;
            var topRowIndex = Math.ceil(yBarTop * grid.verticalScroll.moveCount);
            if (yBarTop >= grid.verticalScroll.railSize)
                topRowIndex = grid.view_table.count() - grid.pageIntRowCount;
            //console.log(`topRowIndex ${topRowIndex} / yBarTop ${yBarTop} / railSize ${grid.verticalScroll.railSize} `);
            setTimeout(function () { grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex); }, 10);
            setTimeout(function () { grid.classPanel30.setDataPanel(topRowIndex); }, 50);
        };
        var yMouseUpEvent = function (e) {
            e.stopPropagation();
            document.removeEventListener('mousemove', yMouseMoveEvent);
            document.removeEventListener('mouseup', yMouseUpEvent);
        };
        yBar.addEventListener('mousedown', yMouseDownEvent, false);
    };
    TbsGridBaseEvent.prototype.tbs_moveCellLine = function (cell, rowIndex, cellIndex) {
        var selector = '#' + this.gridId;
        var grid = this;
        var input = document.querySelector(selector + ' .tbs-grid-input');
        var cellRect = cell.getBoundingClientRect();
        var content = document.querySelector(selector + ' .tbs-grid-panel30');
        var contentRect = content.getBoundingClientRect();
        var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
        //let tableRect = table.getBoundingClientRect();
        if (cellRect.left < contentRect.left) {
            var value = contentRect.left - cellRect.left;
            grid.classScroll.setContentPanelLeftMove(value);
            grid.classScroll.setBarPosition(grid.code_horizontal);
        }
        else if (cellRect.right > contentRect.right) {
            var value = contentRect.right - cellRect.right;
            grid.classScroll.setContentPanelLeftMove(value);
            grid.classScroll.setBarPosition(grid.code_horizontal);
        }
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, cellIndex, cellIndex);
        grid.classPanel30.setDataPanel(_topRowIndex);
    };
    TbsGridBaseEvent.prototype.isMovedPositionInConstRange = function (startX, startY, lastX, lastY) {
        var movedX = Math.abs(startX - lastX);
        var movedY = Math.abs(startY - lastY);
        return (movedX < this.mousePointRange && movedY < this.mousePointRange);
    };
    TbsGridBaseEvent.prototype.tbs_executeEvent = function (isUserFunction, eventType, param) {
        var grid = this;
        var e = null;
        var mode = null;
        var rowIndex = null;
        var cellIndex = null;
        var element = null;
        if (eventType == 'onRowBounding') {
            element = param.element;
            rowIndex = param.rowIndex;
            var eventRow = {};
            eventRow.rowIndex = rowIndex;
            eventRow.data = grid.getRow(rowIndex);
            if (grid.notNull(grid.onRowBounding)) {
                var flag = grid.onRowBounding(grid, element, eventRow);
            } //user function call
        }
        else if (eventType == 'onClick' || eventType == 'onDblclick') {
            e = param.e;
            mode = param.mode; //mouse, key
            rowIndex = param.rowIndex;
            cellIndex = param.cellIndex;
            var column = grid.getColumnByIndex(cellIndex);
            var columnName = grid.getColumnName(cellIndex);
            var value = grid.getValue(rowIndex, columnName);
            var text = grid.getText(rowIndex, columnName);
            var eventRow = {};
            eventRow.rowIndex = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName = columnName;
            eventRow.value = value;
            eventRow.text = text;
            eventRow.data = grid.getRow(rowIndex);
            if (eventType == 'onClick') {
                if (grid.notNull(grid.onClick)) {
                    var flag = grid.onClick(grid, eventRow);
                } //user function call
            }
            else if (eventType == 'onDblclick') {
                if (grid.notNull(grid.onDblclick)) {
                    var flag = grid.onDblclick(grid, eventRow);
                } //user function call
            }
        }
    };
    TbsGridBaseEvent.prototype.tbs_getMaxRowIndexByMouseMove = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var maxRowIndex;
        var rowIndexArray = [];
        var num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            maxRowIndex = Math.max.apply(Math, rowIndexArray);
        }
        else {
            maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
        }
        return maxRowIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMinRowIndexByMouseMove = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var minRowIndex;
        var rowIndexArray = [];
        var num;
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            minRowIndex = Math.min.apply(Math, rowIndexArray);
        }
        else {
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
        }
        return minRowIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMaxCellIndexByMouseMove = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var maxCellIndex, num;
        var rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            maxCellIndex = Math.max.apply(Math, rowIndexArray);
        }
        else {
            maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
        }
        return maxCellIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMinCellIndexByMouseMove = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var minCellIndex, num;
        var rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30');
            if (num != undefined)
                rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel32');
            if (num != undefined)
                rowIndexArray.push(num);
            minCellIndex = Math.min.apply(Math, rowIndexArray);
        }
        else {
            minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
        }
        return minCellIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMaxRowIndexByMouseMove2 = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lastY = this.lastY;
        var maxRowIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var len = (tableRows) ? tableRows.length : 0;
        var startRowIndex, lastRowIndex;
        startRowIndex = 0;
        lastRowIndex = len - 1;
        for (var i = startRowIndex; i < lastRowIndex + 1; i++) {
            var tableRow = tableRows[i];
            var tableRowIndex = i + 1;
            var rect = grid.getOffset(tableRow);
            var top_1 = rect.top;
            if (lastY > top_1)
                maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return maxRowIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMinRowIndexByMouseMove2 = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lastY = this.lastY;
        var minRowIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var len = (tableRows) ? tableRows.length : 0;
        var startRowIndex, lastRowIndex;
        startRowIndex = 0;
        lastRowIndex = len - 1;
        for (var i = lastRowIndex; i >= startRowIndex; i--) {
            var tableRow = tableRows[i];
            var tableRowIndex = i + 1;
            var rect = grid.getOffset(tableRow);
            //console.log(`${panelName} i ${i} : rect.top ${rect.top} lastRowIndex ${lastRowIndex} : minRowIndex ${minRowIndex}  : lastY  ${this.lastY}`);
            var bottom = rect.top + tableRow.getBoundingClientRect().height;
            if (lastY < bottom)
                minRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return minRowIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMaxCellIndexByMouseMove2 = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lastX = this.lastX;
        var maxCellIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRow = tableRows[0];
        var len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        var startColumnIndex, lastColumnIndex;
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
        for (var x = startColumnIndex; x < lastColumnIndex; x++) {
            var tableCell = tableRow.childNodes[x];
            var column = grid.column_table.data[x];
            if (column[tbs_grid_types_1.columnAlias.visible] == false)
                continue;
            var rect = grid.getOffset(tableCell);
            var rectLeft = rect.left;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
            if (lastX > rectLeft)
                maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex;
    };
    TbsGridBaseEvent.prototype.tbs_getMinCellIndexByMouseMove2 = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lastX = this.lastX;
        var minCellIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRow = tableRows[0];
        var len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        var startColumnIndex, lastColumnIndex;
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
        for (var x = lastColumnIndex; x >= startColumnIndex; x--) {
            var tableCell = tableRow.childNodes[x];
            var column = grid.column_table.data[x];
            if (column[tbs_grid_types_1.columnAlias.visible] == false)
                continue;
            var rect = grid.getOffset(tableCell);
            var rectRight = rect.left + tableCell.getBoundingClientRect().width;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
            if (lastX < rectRight)
                minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    };
    TbsGridBaseEvent.prototype.getOffset = function (el) {
        var _x = 0;
        var _y = 0;
        while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    };
    TbsGridBaseEvent.prototype.tbs_moveNextRowCell = function (type) {
        //tbs_moveNextRowCell: none use => need to improve
        //type : left, right, up, down
        var selector = '#' + this.gridId;
        var grid = this;
        var rowIndex = -1;
        var cellIndex = -1;
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
        var td = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (td == null)
            return;
        var tableRowIndex = td.parentNode.rowIndex;
        var dataRowIndex = this.classColumn.getRowIndexInTable(tableRowIndex);
        cellIndex = td.cellIndex;
        if (cellIndex == this.column_table.count() - 1 && dataRowIndex < this.view_table.count() - 1) {
            this.classRange.removeRange(0, -1);
            var _topRowIndex = this.classRange.selectRange(dataRowIndex + 1, dataRowIndex + 1, 0, 0);
            this.classPanel30.setDataPanel(_topRowIndex);
            var topRowIndex = this.getFirstRowIndex();
            var lastRowIndex = this.getLastRowIndex();
            var movedLeft = grid.classScroll.getContentPanelLeft(0);
            grid.classScroll.setContentPanelLeft(movedLeft);
            if (dataRowIndex == lastRowIndex - 1)
                this.classPanel30.setDataPanel(topRowIndex + 1);
            var input = document.querySelector(selector + ' .tbs-grid-input');
            this.input_focus();
        }
        else {
            this.tbs_moveCell(type);
            var topRowIndex = this.getFirstRowIndex();
            var movedLeft = grid.classScroll.getContentPanelLeft(0);
            grid.classScroll.setContentPanelLeft(movedLeft);
            grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            var input = document.querySelector(selector + ' .tbs-grid-input');
            this.input_focus();
        }
    };
    TbsGridBaseEvent.prototype.tbs_moveCell = function (type) {
        var selector = '#' + this.gridId;
        var grid = this;
        var cellIndex = -1;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRowIndex, dataRowIndex;
        var tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (grid.null(tableCell))
            return;
        tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
        dataRowIndex = parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
        cellIndex = tableCell.cellIndex;
        if (type == 'left') {
            var startCellIndex = cellIndex;
            cellIndex = cellIndex - 1;
            for (var i = cellIndex; i >= 0; i--) {
                var column = this.column_table.data[i];
                if (column[tbs_grid_types_1.columnAlias.visible] == false)
                    cellIndex -= 1;
                else
                    break;
            }
            if (cellIndex < 0 || this.column_table.data[cellIndex][tbs_grid_types_1.columnAlias.visible] == false) {
                grid.classRange.removeRange(0, -1);
                var _topRowIndex_1 = grid.classRange.selectRange(dataRowIndex, dataRowIndex, startCellIndex, startCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex_1);
                return;
            }
            var tableRow = tableRows[tableRowIndex - 1];
            var left1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().left;
            var divContent = document.querySelector(selector + ' .tbs-grid-panel30');
            var left2 = window.pageYOffset + divContent.getBoundingClientRect().left;
            if (left1 < left2) {
                var moveWidth = left2 - left1;
                var table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                var table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
                var hiddenSize = this.horizontalScroll.hiddenSize;
                var curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                var sLeft = void 0;
                if (curLeft - moveWidth < 0)
                    sLeft = 0 + 'px';
                else
                    sLeft = -1 * curLeft + moveWidth + 'px';
                grid.classScroll.setContentPanelLeft(sLeft);
                grid.classScroll.setBarPosition(grid.code_horizontal);
            }
            grid.classRange.removeRange(0, -1);
            var _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (type == 'right') {
            var startCellIndex = cellIndex;
            cellIndex = cellIndex + 1;
            for (var i = cellIndex, len = this.column_table.count(); i < len; i++) {
                var column = this.column_table.data[i];
                if (column[tbs_grid_types_1.columnAlias.visible] == false)
                    cellIndex += 1;
                else
                    break;
            }
            if (cellIndex >= this.column_table.count())
                cellIndex = startCellIndex;
            var tableRow = tableRows[tableRowIndex - 1];
            var right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;
            var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
            var right2 = window.pageYOffset + panel30.getBoundingClientRect().right;
            if (right1 > right2) {
                var moveWidth = right1 - right2;
                var table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                var hiddenSize = this.horizontalScroll.hiddenSize;
                var curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                var sLeft = void 0;
                if (curLeft + moveWidth > hiddenSize)
                    sLeft = -1 * hiddenSize + 'px';
                else
                    sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';
                grid.classScroll.setContentPanelLeft(sLeft);
                grid.classScroll.setBarPosition(grid.code_horizontal);
            }
            this.classRange.removeRange(0, -1);
            var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (type == 'up') {
            dataRowIndex -= 1;
            var topRowIndex = this.getFirstRowIndex();
            if (topRowIndex < 0)
                topRowIndex = 0;
            if (dataRowIndex < 0)
                dataRowIndex = 0;
            if (topRowIndex <= dataRowIndex) {
                this.classRange.removeRange(0, -1);
                var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                this.classPanel30.setDataPanel(_topRowIndex);
            }
            else {
                this.classRange.removeRange(0, -1);
                var rowIndex = this.classScroll.setBarPositionByDirection('up');
                this.displayOneSelection(rowIndex, cellIndex);
            }
        }
        else if (type == 'down') {
            var topRowIndex = this.getFirstRowIndex();
            var lastRowIndex = this.getLastRowIndex();
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
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
                else {
                    if (dataRowIndex == lastRowIndex) {
                        this.classRange.removeRange(0, -1);
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
            }
            else {
                if (tableRows.length == this.pageRowCount) {
                    if (dataRowIndex == lastRowIndex) {
                        if (dataRowIndex == this.view_table.count() - 1) {
                            this.classRange.removeRange(0, -1);
                            var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
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
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
                else {
                    if (dataRowIndex == lastRowIndex) {
                        this.classRange.removeRange(0, -1);
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                    else {
                        dataRowIndex += 1;
                        this.classRange.removeRange(0, -1);
                        var _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                        this.classPanel30.setDataPanel(_topRowIndex);
                    }
                }
            }
        }
    };
    return TbsGridBaseEvent;
}());
exports.TbsGridBaseEvent = TbsGridBaseEvent;


/***/ }),

/***/ 1902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseIs = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridBaseIs = /** @class */ (function () {
    function TbsGridBaseIs() {
    }
    /**
     * Is Functions
     *
     */
    TbsGridBaseIs.prototype.isEditableColumn = function (columnName) {
        var result = this.column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
        return result.editable ? result.editable : false;
    };
    TbsGridBaseIs.prototype.isSortableColumn = function (columnName) {
        var grid = this;
        var result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.sortable] == true)  result = true;
        // else if (column[columnAlias.sortable] == false) result = false;
        // else {
        result = grid.options[tbs_grid_types_1.columnAlias.sortable];
        //}
        return result;
    };
    TbsGridBaseIs.prototype.isResizableColumn = function (columnName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.resizable] == true)  result = true;
        // else if (column[columnAlias.resizable] == false) result = false;
        // else {
        result = grid.options[tbs_grid_types_1.columnAlias.resizable];
        // }
        return result;
    };
    TbsGridBaseIs.prototype.isMovableColumn = function (columnName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.movable] == true)  result = true;
        // else if (column[columnAlias.movable] == false) result = false;
        // else {
        result = grid.options[tbs_grid_types_1.columnAlias.movable];
        // }
        return result;
    };
    TbsGridBaseIs.prototype.isAutoResizableColumn = function (columnName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[tbs_grid_types_1.columnAlias.autoResizable];
        //}
        return result;
    };
    TbsGridBaseIs.prototype.isAutoWidthColumn = function (columnName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var result = false;
        //let column = grid.getColumn(columnName);
        // if (column[columnAlias.autoResizable] == true)  result = true;
        // else if (column[columnAlias.autoResizable] == false) result = false;
        // else {
        result = grid.options[tbs_grid_types_1.columnAlias.autoWidth];
        //}
        return result;
    };
    TbsGridBaseIs.prototype.isClassName = function (element, className) {
        var selector = '#' + this.gridId;
        var grid = this;
        var result = element.classList.contains(className);
        return result;
    };
    TbsGridBaseIs.prototype.isNotValidColumnType = function (columnType) {
        var arr = ['string', 'number', 'combo', 'date'];
        return arr.indexOf(columnType) == -1 ? true : false;
    };
    TbsGridBaseIs.prototype.isInPanel = function (e, panelName, startX, startY) {
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
        var selector = '#' + this.gridId;
        var grid = this;
        //let lastX = window.pageXOffset + e.clientX;
        //let lastY = window.pageYOffset + e.clientY;
        var lastX = this.lastX;
        var lastY = this.lastY;
        var moveX = lastX - startX;
        var moveY = lastY - startY;
        var panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        var absRect = grid.getOffset(panel);
        var rect = panel.getBoundingClientRect();
        var groupTop = absRect.top;
        var groupBottom = absRect.top + rect.height;
        var groupLeft = absRect.left;
        var groupRight = absRect.left + rect.width;
        //outside area
        if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom)
            return false;
        else
            return true;
    };
    TbsGridBaseIs.prototype.isSelectedCell = function (panelName, rowIndex, cellIndex) {
        //selected 1, 0
        var result = 0;
        var rows = [];
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
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    };
    TbsGridBaseIs.prototype.isSelectedHeaderCell = function (panelName, cellIndex) {
        //selected 1, 0
        var result = 0;
        var rows = this.data_select_panel30;
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (row[1][cellIndex] == 1) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    };
    TbsGridBaseIs.prototype.isSelectedCell31 = function (rowIndex, cellIndex) {
        //selected 1, 0
        var result = 0;
        var rows = this.data_select_panel31;
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    };
    TbsGridBaseIs.prototype.isSelectedCell30 = function (rowIndex, cellIndex) {
        //selected 1, 0
        var result = 0;
        var rows = this.data_select_panel30;
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (rowIndex == row[0][0]) {
                result = row[1][cellIndex];
                break;
            }
        }
        return result;
    };
    TbsGridBaseIs.prototype.isColumnName = function (columnName) {
        var grid = this;
        var result = false;
        for (var i = 0, len = this.column_table.count(); i < len; i++) {
            var column = this.column_table.data[i];
            if (columnName == column[tbs_grid_types_1.columnAlias.name]) {
                result = true;
                break;
            }
        }
        return result;
    };
    TbsGridBaseIs.prototype.isColumnTypeNumber = function (columnName) {
        var grid = this;
        var result = false;
        var column = grid.getColumn(columnName);
        if (column[tbs_grid_types_1.columnAlias.type] == tbs_grid_types_1.CellType.number)
            result = true;
        return result;
    };
    TbsGridBaseIs.prototype.isFilterColumnName = function (columnName) {
        var grid = this;
        return grid.filter_column_table.isRow(tbs_grid_types_1.columnAlias.name, columnName);
    };
    TbsGridBaseIs.prototype.isLastTopRowIndex = function (rowIndex) {
        var grid = this;
        var result = false;
        var rowCount = grid.getRowCount() - 1;
        if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
            return true;
        }
        return result;
    };
    return TbsGridBaseIs;
}());
exports.TbsGridBaseIs = TbsGridBaseIs;


/***/ }),

/***/ 9344:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseLine = void 0;
var TbsGridBaseLine = /** @class */ (function () {
    function TbsGridBaseLine() {
    }
    /**
     * Select Line Functions
     *
     */
    TbsGridBaseLine.prototype.getFirstSelectedTableCell = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var startCell;
        var startRowIndex = grid._startRowIndex;
        var rowIndex1 = grid.getFirstRowIndex();
        var rowIndex2 = grid.getLastRowIndex();
        if (startRowIndex < rowIndex1)
            startRowIndex = rowIndex1;
        var tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
        Loop1: for (var i = 0, len = tableRows31.length; i < len; i++) {
            var tableRow31 = tableRows31[i];
            var tableRow = tableRows[i];
            var rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == startRowIndex) {
                for (var x = 0; x < this.column_table.count(); x++) {
                    var tableCell = tableRow.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        startCell = tableCell;
                        break Loop1;
                    }
                }
            }
        }
        return startCell;
    };
    TbsGridBaseLine.prototype.getLastSelectedTableCell = function (panelName) {
        var selector = '#' + this.gridId;
        var grid = this;
        var lastCell;
        var lastRowIndex = this._lastRowIndex;
        var rowIndex1 = grid.getFirstRowIndex();
        var rowIndex2 = grid.getLastRowIndex();
        if (lastRowIndex > rowIndex2)
            lastRowIndex = rowIndex2;
        var tableRows31 = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');
        for (var i = tableRows31.length - 1; i >= 0; i--) {
            if (lastCell != undefined)
                break;
            var tableRow31 = tableRows31[i];
            var tableRow30 = tableRows[i];
            var rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
            if (rowIndex == lastRowIndex) {
                for (var x = this.column_table.count() - 1; x >= 0; x--) {
                    var tableCell = tableRow30.childNodes[x];
                    if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
                        lastCell = tableCell;
                        break;
                    }
                }
            }
        }
        return lastCell;
    };
    TbsGridBaseLine.prototype.clearSelectedLine = function () {
        this.topLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.leftLineDiv.style = 'height:0px;top:0px;left:0px;';
        this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.rightLineDiv.style = 'height:0px;top:0px;left:0px;';
    };
    TbsGridBaseLine.prototype.setSelectedLine = function (lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {
        if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight))
            this.clearSelectedLine();
        else {
            this.topLineDiv.style = 'width:' + lineWidth + 'px;top:' + rectTop + 'px;left:' + rectLeft + 'px;';
            this.leftLineDiv.style = 'height:' + lineHeight + 'px;top:' + rectTop + 'px;left:' + rectLeft + 'px;';
            this.rightLineDiv.style = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop + 'px;left:' + rectRight + 'px;';
            this.bottomLineDiv.style = 'width:' + lineWidth + 'px;top:' + rectBottom + 'px;left:' + rectLeft + 'px;';
        }
    };
    TbsGridBaseLine.prototype.displaySelectedLine = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        if (grid.view_table.count() == 0) {
            grid.classRange.removeRange(0, -1);
            return;
        }
        if (grid.fixedColumnIndex != -1) {
            var tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0)
                return;
            var fixedColumnIndex = this.fixedColumnIndex;
            /* Get startCell, lastCell */
            var startCell = void 0, lastCell = void 0;
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
            var startCellIndex = startCell.cellIndex;
            var lastCellIndex = lastCell.cellIndex;
            var rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
            var rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
            var rectWrap = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
            var rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
            var startRect = startCell.getBoundingClientRect();
            var lastRect = lastCell.getBoundingClientRect();
            var beforeLeft = rectTable31.left;
            var rectTop = startRect.top - rectMain.top;
            var rectBottom = lastRect.top - rectMain.top + lastRect.height;
            var rectLeft = startRect.left - beforeLeft;
            var rectRight = lastRect.left - beforeLeft + lastRect.width;
            var rectPanelLeft = (startCellIndex <= fixedColumnIndex) ? rectLeft : rectPanel30.left - rectTable31.left;
            var rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
            var rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;
            // case outside line
            if (rectLeft <= rectPanelLeft)
                rectLeft = rectPanelLeft;
            if (rectBottom >= rectPanelBottom)
                rectBottom = rectPanelBottom - 2;
            if (rectRight >= rectPanelRight)
                rectRight = rectPanelRight;
            var lineHeight = rectBottom - rectTop;
            var lineWidth = rectRight - rectLeft;
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
        else {
            var tableRows30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0)
                return;
            var startCell = grid.getFirstSelectedTableCell('panel30');
            var lastCell = grid.getLastSelectedTableCell('panel30');
            if (startCell == undefined || lastCell == undefined) {
                grid.clearSelectedLine();
                return;
            }
            var rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
            var rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
            var rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
            var startRect = startCell.getBoundingClientRect();
            var lastRect = lastCell.getBoundingClientRect();
            var rectTop = startRect.top - rectMain.top;
            var rectLeft = startRect.left - rectTable31.left;
            var rectBottom = lastRect.top - rectMain.top + lastRect.height;
            var rectRight = lastRect.left - rectTable31.left + lastRect.width;
            var rectPanelLeft = rectPanel30.left - rectTable31.left;
            var rectPanelBottom = rectPanel30.top - rectMain.top + rectPanel30.height;
            var rectPanelRight = rectPanel30.left - rectTable31.left + rectPanel30.width;
            // case outside line
            if (rectLeft <= rectPanelLeft)
                rectLeft = rectPanelLeft;
            if (rectBottom >= rectPanelBottom)
                rectBottom = rectPanelBottom - 2;
            if (rectRight >= rectPanelRight)
                rectRight = rectPanelRight;
            var lineHeight = rectBottom - rectTop;
            var lineWidth = rectRight - rectLeft;
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
    };
    TbsGridBaseLine.prototype.displayOneSelection = function (startRowIndex, startCellIndex) {
        var selector = '#' + this.gridId;
        var grid = this;
        var column = this.column_table.data;
        this.startRowIndex = startRowIndex;
        this.lastRowIndex = startRowIndex;
        this.startCellIndex = startCellIndex;
        this.lastCellIndex = startCellIndex;
        this._startRowIndex = startRowIndex;
        this._lastRowIndex = startRowIndex;
        this._startCellIndex = startCellIndex;
        this._lastCellIndex = startCellIndex;
        this.classRange.setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);
        var count = this.view_table.count();
        var topRowIndex = this.getFirstRowIndex();
        //============================================================= table display
        var trLeftList = document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
        var trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
        var trFixBottomtList = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');
        count = topRowIndex + this.pageRowCount;
        //=============================================================
        var contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
        var contentTableRect = document.querySelector(selector + ' .tbs-grid-panel30 > table').getBoundingClientRect();
        // @ts-ignore
        var contentTableLeft = parseInt(document.querySelector(selector + ' .tbs-grid-panel30 > table').style.left, 10);
        var startColumnIndex = 0;
        var lastColumnIndex = column.length - 1;
        var accWidth = 0;
        for (var i_1 = 0, len = column.length; i_1 < len; i_1++) {
            accWidth += parseInt(column[i_1].width);
            if (accWidth + contentTableLeft > 0) {
                startColumnIndex = i_1;
                break;
            }
        }
        accWidth = contentTableRect.width;
        for (var i_2 = column.length - 1; i_2 >= 0; i_2--) {
            accWidth -= parseInt(column[i_2].width);
            if (accWidth + contentTableLeft < contentRect.width) {
                lastColumnIndex = i_2;
                break;
            }
        }
        //============================================================= left, content, fixBottom
        var viewCount = grid.view_table.count();
        var i = 0;
        for (var ri = topRowIndex; ri < count; ri++) {
            if (ri > viewCount - 1)
                break;
            var trLeft = trLeftList[i];
            var trContent = trContentList[i];
            var trFixBottom = trFixBottomtList[i];
            var row = grid.view_table.data[ri];
            //============================================================= left
            var leftTd = trLeft.childNodes[0];
            var selectedValue = this.isSelectedCell31(ri, 0);
            if (selectedValue == 1)
                leftTd.classList.add('tbs-grid-cell-select');
            //============================================================= content
            for (var x = startColumnIndex; x <= lastColumnIndex; x++) {
                var td = trContent.childNodes[x];
                var selectedValue_1 = this.isSelectedCell30(ri, x); //new
                if (selectedValue_1 == 1) {
                    if (this.startRowIndex == ri && this.startCellIndex == x) {
                        td.classList.add('tbs-grid-cell-start');
                    }
                }
            }
            //============================================================= fixBottom
            if (this.fixedColumnIndex != -1) {
                for (var x = 0; x <= this.fixedColumnIndex; x++) {
                    var td = trFixBottom.childNodes[x];
                    var selectedValue_2 = this.isSelectedCell30(ri, x); //new
                    if (selectedValue_2 == 1) {
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
    };
    TbsGridBaseLine.prototype.getFirstDisplayRowIndex = function (panelName) {
        if (panelName === void 0) { panelName = ''; }
        var selector = '#' + this.gridId;
        var grid = this;
        if (this.view_table.count() == 0)
            return -1;
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        // @ts-ignore
        var displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);
        if (isNaN(displayRowIndex))
            displayRowIndex = 0;
        return displayRowIndex;
    };
    TbsGridBaseLine.prototype.getFirstRowIndex = function (panelName) {
        if (panelName === void 0) { panelName = ''; }
        // return : topRowIndex
        var selector = '#' + this.gridId;
        var grid = this;
        if (this.view_table.count() == 0)
            return -1;
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        // @ts-ignore
        var topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);
        if (panelName == '') {
            if (isNaN(topRowIndex))
                topRowIndex = 0;
            return topRowIndex;
        }
    };
    TbsGridBaseLine.prototype.getLastRowIndex = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        if (this.view_table.count() == 0)
            return -1;
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        var topRowIndex = this.getFirstRowIndex();
        return topRowIndex + trList.length - 1;
    };
    TbsGridBaseLine.prototype.getLastTableRowIndex = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        return trList.length - 1;
    };
    return TbsGridBaseLine;
}());
exports.TbsGridBaseLine = TbsGridBaseLine;


/***/ }),

/***/ 3051:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseMain = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var tbs_grid_dom_1 = __webpack_require__(5359);
var tbs_grid_excel_1 = __webpack_require__(7277);
var TbsGridBaseMain = /** @class */ (function () {
    function TbsGridBaseMain() {
    }
    TbsGridBaseMain.prototype.getRenderer = function (columnName, property) {
        var result = null;
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
    };
    TbsGridBaseMain.prototype.setRenderer = function (renderer) {
        this.renderer = renderer;
    };
    TbsGridBaseMain.prototype.getInfoRenderer = function (columnName, property) {
        var result = null;
        var renderer = this.infoRenderer;
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
    };
    TbsGridBaseMain.prototype.setInfoRenderer = function (renderer) { this.infoRenderer = renderer; };
    /**
     * Display grid
     */
    TbsGridBaseMain.prototype.apply = function () {
        var selector = "#".concat(this.gridId);
        var grid = this;
        var topRowIndex = grid.getFirstRowIndex();
        grid.classPanel20.setDataPanel(topRowIndex);
        grid.classPanel30.setDataPanel(topRowIndex);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    };
    /**
     * Main Functions
     */
    TbsGridBaseMain.prototype.createHtml = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var elementRoot = document.querySelector(selector);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid" tabindex="1" style=""></div>');
        var elementGrid = elementRoot.querySelector('.tbs-grid');
        grid.classPanel10.createHtml(elementGrid);
        grid.classPanel80.createHtml(elementGrid);
        grid.classPanel90.createHtml(elementGrid);
        elementGrid.insertAdjacentHTML('beforeend', '<div class="tbs-grid-main"><div class="tbs-grid-wrap" /></div>');
        var elementMain = document.querySelector("".concat(selector, " .tbs-grid-main"));
        var elementWrap = document.querySelector("".concat(selector, " .tbs-grid-wrap"));
        grid.classPanel20.createHtml(elementWrap);
        grid.classPanel70.createHtml(elementWrap);
        grid.classPanel40.createHtml(elementWrap);
        grid.classPanel30.createHtml(elementWrap);
        grid.classPanel50.createHtml(elementWrap);
        grid.classPanel99.createHtml(elementGrid);
        grid.classPanelBase.createEtcHtml(elementMain);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid-layer" style="left:30000px;display: none;"></div>');
        this.topLineDiv = document.querySelector("".concat(selector, " .tbs-grid-top-line"));
        this.bottomLineDiv = document.querySelector("".concat(selector, " .tbs-grid-bottom-line"));
        this.leftLineDiv = document.querySelector("".concat(selector, " .tbs-grid-left-line"));
        this.rightLineDiv = document.querySelector("".concat(selector, " .tbs-grid-right-line"));
    };
    TbsGridBaseMain.prototype.setGrid = function (columns, options) {
        if (options === void 0) { options = {}; }
        var grid = this;
        grid.createOption(options);
        grid.columns = grid.copyJson(columns);
        grid.classColumn.createColumns(grid.columns); // add columns(first) or add column
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.createGrid();
        grid.classPanel70.setDataPanel();
    };
    TbsGridBaseMain.prototype.createGrid = function () {
        var grid = this;
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
    };
    TbsGridBaseMain.prototype.updateGrid = function () {
        var grid = this;
        this.classPanel20.createTable();
        this.classPanel70.createTable();
        this.classPanel40.createTable();
        this.classPanel50.createTable();
        this.classScroll.setPanelSize();
        this.classPanel30.createTable();
        this.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        //this.tbs_addEventAll();
    };
    TbsGridBaseMain.prototype.getTextWidth = function (canvas, text, fontSize, fontFamily) {
        var selector = '#' + this.gridId;
        var grid = this;
        var context = canvas.getContext("2d");
        context.fontSize = fontSize;
        context.fontFamily = fontFamily;
        var metrics = context.measureText(text);
        return metrics.width;
    };
    ;
    TbsGridBaseMain.prototype.getTextWidth2 = function (context, text) {
        var selector = '#' + this.gridId;
        var grid = this;
        var metrics = context.measureText(text);
        return metrics.width;
    };
    ;
    TbsGridBaseMain.prototype.setColumnAutoWidth = function () {
        var selector = '#' + this.gridId;
        var grid = this;
        var canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        var arr = [];
        for (var x = 0, len = grid.column_table.count(); x < len; x++)
            arr[x] = 0;
        var fontSize = grid.getConfigFont('fontSize');
        var fontFamilty = grid.getConfigFont('fontFamily');
        for (var i = 0, len = grid.header_column_table.data.length; i < len; i++) {
            for (var x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                if (grid.header_column_table.data[i][x][tbs_grid_types_1.columnAlias.kind] == 'column') {
                    var width = parseInt(grid.getTextWidth(canvas, grid.header_column_table.data[i][x][tbs_grid_types_1.columnAlias.text], fontSize, fontFamilty));
                    if (width >= arr[x]) {
                        arr[x] = width;
                    }
                }
            }
        }
        for (var i = 0, len = grid.view_table.count(); i < len; i++) {
            for (var x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                var columnName = grid.getColumnName(x);
                var column = grid.getColumn(columnName);
                var val = grid.getValueByColumnIndex(i, x);
                var width = parseInt(grid.getTextWidth(canvas, grid.getFormatText(column, val), fontSize, fontFamilty));
                if (width >= arr[x])
                    arr[x] = width;
            }
        }
        for (var x = 0, len = grid.column_table.count(); x < len; x++)
            arr[x] += 20;
        grid.classScroll.setAllColumnWidth(arr);
        grid.classPanel20.setDataPanel();
    };
    TbsGridBaseMain.prototype.setRowHeight = function (type, rowHeight) {
        var selector = '#' + this.gridId;
        var grid = this;
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
    };
    // setGridModePage(this: TbsGrid) {
    //     let selector = `#${this.gridId}`;
    //     const grid = this;
    //
    //     let page: any = document.querySelector(`${selector} .tbs-grid-panel10-page`);
    //     page.style.display = '';
    //
    //     grid.classPage.pageRowCount = grid.options.pageRowCount;
    // }
    //
    // setGridModePagination(this: TbsGrid) {
    //     let selector = `#${this.gridId}`;
    //     const grid = this;
    //
    //     const page: any = document.querySelector(`${selector} .tbs-grid-panel10-page`);
    //     page.style.display = '';
    // }
    TbsGridBaseMain.prototype.setData = function (data, openDepth, isFirst) {
        if (openDepth === void 0) { openDepth = 0; }
        if (isFirst === void 0) { isFirst = true; }
        var grid = this;
        if (grid.group_column_table.count() > 0)
            grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.tree)
            grid.classTree.setTreeData(data, openDepth, isFirst);
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
            grid.classPage.setPageData(data, isFirst);
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
            grid.classPagination.setPaginationData(data);
        else
            grid.setGridData(data, isFirst);
    };
    TbsGridBaseMain.prototype.setGridMode = function (gridMode) {
        var grid = this;
        grid.grid_mode = grid.trim(gridMode);
        if (grid.grid_mode == tbs_grid_types_1.GridMode.page) {
            grid.classPanel99.showPagePanel();
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
            grid.classPanel99.showPagePanel();
        }
    };
    TbsGridBaseMain.prototype.setGridData = function (data, isFirst) {
        var selector = "#".concat(this.gridId);
        var grid = this;
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
        for (var i = 0, len = data.length; i < len; i++) {
            var dataRow = data[i];
            var source = {};
            var columns = grid.column_table.selectRows();
            for (var x = 0, len_1 = columns.length; x < len_1; x++) {
                var column = columns[x];
                var columnName = column[tbs_grid_types_1.columnAlias.name];
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
        }
        /* create top_data */
        grid.classTop.setTopData();
        /* create footer_data */
        grid.classFooter.setFooterData();
        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();
        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
        this.classRange.removeRange(0, -1);
        var _topRowIndex = this.classRange.selectRange(0, 0, 0, 0);
        if (data.length == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
        }
        else {
            document.querySelector("".concat(selector, " .tbs-grid-panel21 td div")).textContent = String(data.length);
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
    };
    TbsGridBaseMain.prototype.refreshRefData = function () {
        // Data Init
        var selector = '#' + this.gridId;
        var grid = this;
        var data = this.view_table.data;
        this.data_select_panel30 = []; // select color : value 0, 1
        this.data_select_panel31 = []; // view - filter
        for (var rowIndex = 0; rowIndex < data.length; rowIndex++) {
            var itemSelect = {};
            var itemLeftSelect = {};
            var itemLeftView = {};
            itemSelect[tbs_grid_types_1.columnAlias.rowId] = data[rowIndex][tbs_grid_types_1.columnAlias.rowId];
            itemSelect = new Uint8ClampedArray([]); //new
            itemLeftView[tbs_grid_types_1.columnAlias.rowMode] = ''; //insert, update, delete
            itemLeftView[tbs_grid_types_1.columnAlias.rowId] = data[rowIndex][tbs_grid_types_1.columnAlias.rowId];
            itemLeftSelect[tbs_grid_types_1.columnAlias.rowMode] = 0; //insert, update, delete
            itemLeftSelect[tbs_grid_types_1.columnAlias.rowId] = data[rowIndex][tbs_grid_types_1.columnAlias.rowId];
            this.data_select_panel30.push(itemSelect);
            this.data_select_panel31.push(itemLeftSelect);
        }
        this.classRange.removeRange(0, -1);
        this.classPanel30.setDataPanel(0);
    };
    /**
     * Range Functiopns
     */
    TbsGridBaseMain.prototype.setRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        var _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    };
    TbsGridBaseMain.prototype.selectRange = function (rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        if (this.view_table.count() == 0 || this.column_table.count() == 0)
            return;
        var _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    };
    /**
     * Dom Lib
     */
    TbsGridBaseMain.prototype.addUserClass = function (element, className) { tbs_grid_dom_1.TbsGridDom.addUserClass(element, className); };
    TbsGridBaseMain.prototype.removeUserClass = function (element) { tbs_grid_dom_1.TbsGridDom.removeUserClass(element); };
    /**
     * Export Excel
     */
    TbsGridBaseMain.prototype.exportExcel = function (options) {
        var excel = new tbs_grid_excel_1.TbsGridExcel(this);
        excel.exportExcel(options);
    };
    /**
     * Pagination
     */
    TbsGridBaseMain.prototype.setTotalRowCount = function (totalRowCount) {
        this.classPagination.setTotalRowCount(totalRowCount);
    };
    return TbsGridBaseMain;
}());
exports.TbsGridBaseMain = TbsGridBaseMain;


/***/ }),

/***/ 935:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseRows = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridBaseRows = /** @class */ (function () {
    function TbsGridBaseRows() {
    }
    /**
     * view table rows
     */
    TbsGridBaseRows.prototype.getRowCount = function (table) { return this.isNull(table, this.view_table).count(); };
    TbsGridBaseRows.prototype.getRow = function (rowIndex, table) { return this.isNull(table, this.view_table).selectRowByRowIndex(rowIndex); };
    TbsGridBaseRows.prototype.getRows = function (startRowIndex, endRowIndex, table) { return this.isNull(table, this.view_table).selectRowRange(startRowIndex, endRowIndex); };
    TbsGridBaseRows.prototype.getRowByRowId = function (rowId, table) { return this.isNull(table, this.view_table).selectRowByRowId(rowId); };
    TbsGridBaseRows.prototype.getRowIndexByRowId = function (rowId, table) { return this.isNull(table, this.view_table).selectRowIndexByRowId(rowId); };
    TbsGridBaseRows.prototype.getCheckedRows = function () { return this.view_table.selectRows(tbs_grid_types_1.columnAlias.isChecked, true); };
    TbsGridBaseRows.prototype.getSelectedRows = function () {
        var result = [];
        for (var i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.isSelectedCell31(i, 0) == 1)
                result.push(this.view_table.selectRowByRowIndex(i));
        }
        return result;
    };
    TbsGridBaseRows.prototype.getSelectedRowsIndexArray = function () {
        var result = [];
        for (var rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1)
                result.push(rowIndex);
        }
        return result;
    };
    TbsGridBaseRows.prototype.getChangedRowsData = function () {
        var result = [];
        var rows = this.getDeletedRowsData();
        for (var i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getUpdatedRowsData();
        for (var i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        rows = this.getInsertedRowsData();
        for (var i = 0, len = rows.length; i < len; i++) {
            result.push(rows[i]);
        }
        return result;
    };
    TbsGridBaseRows.prototype.getDeletedRowsData = function () {
        var rows = this.data_delete;
        var result = [];
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            var item = JSON.parse(JSON.stringify(row));
            item[tbs_grid_types_1.columnAlias.rowId] = row[tbs_grid_types_1.columnAlias.rowId];
            item[tbs_grid_types_1.columnAlias.rowMode] = row[tbs_grid_types_1.columnAlias.rowMode];
            result.push(item);
        }
        return result;
    };
    TbsGridBaseRows.prototype.getUpdatedRowsData = function () {
        var rows = this.source_table.data;
        var result = [];
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (row.mode == 'U') {
                var item = JSON.parse(JSON.stringify(row));
                item[tbs_grid_types_1.columnAlias.rowId] = row[tbs_grid_types_1.columnAlias.rowId];
                item[tbs_grid_types_1.columnAlias.rowMode] = row[tbs_grid_types_1.columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    };
    TbsGridBaseRows.prototype.getInsertedRowsData = function () {
        var rows = this.source_table.data;
        var result = [];
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            if (row[tbs_grid_types_1.columnAlias.rowMode] == 'I') {
                var item = JSON.parse(JSON.stringify(row));
                item[tbs_grid_types_1.columnAlias.rowId] = row[tbs_grid_types_1.columnAlias.rowId];
                item[tbs_grid_types_1.columnAlias.rowMode] = row[tbs_grid_types_1.columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    };
    TbsGridBaseRows.prototype.createRow = function (row) {
        if (this.null(row))
            row = {};
        var columns = this.column_table.data;
        var item = {};
        for (var i = 0, len = columns.length; i < len; i++) {
            var column = columns[i];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            item[columnName] = this.null(row[columnName]) ? null : row[columnName];
        }
        return item;
    };
    TbsGridBaseRows.prototype.addRow = function (row, direction) {
        //type : top, bottom, up, down
        var grid = this;
        var dataRow = this.createRow(row);
        var rowIndexList = this.getSelectedRowsIndexArray();
        if (rowIndexList.length == 0)
            direction = tbs_grid_types_1.AddRowDirection.bottom;
        if (direction == tbs_grid_types_1.AddRowDirection.top) {
            this.source_table.insertBefore(dataRow, 0);
            this.view_table.insertBefore(dataRow, 0);
            var topRowIndex = 0;
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            this.classRange.selectRange(topRowIndex, topRowIndex);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == tbs_grid_types_1.AddRowDirection.bottom) {
            this.source_table.insert(dataRow);
            this.view_table.insert(dataRow);
            var dataLength = this.view_table.count();
            var topRowIndex = this.getFirstRowIndex();
            topRowIndex = dataLength - this.pageRowCount;
            if (topRowIndex < 0)
                topRowIndex = 0;
            if (this.pageRowCount > this.pageIntRowCount) {
                topRowIndex = topRowIndex + 1;
            }
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            var _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == tbs_grid_types_1.AddRowDirection.before) {
            var minRowIndex = rowIndexList[0];
            this.source_table.insertBefore(dataRow, minRowIndex);
            this.view_table.insertBefore(dataRow, minRowIndex);
            var lastRowIndex = this.view_table.count() - 1;
            var topRowIndex = this.getFirstRowIndex();
            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            var _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (direction == tbs_grid_types_1.AddRowDirection.after) {
            var minRowIndex = rowIndexList[0];
            var addRowIndex = minRowIndex + 1;
            this.source_table.insertAfter(dataRow, minRowIndex);
            this.view_table.insertAfter(dataRow, minRowIndex);
            this.classRange.removeRange(0, -1);
            var _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
            if (this.pageRowCount > this.pageIntRowCount) {
                if (addRowIndex == this.getLastRowIndex()) {
                    this.tbs_moveCell('down');
                    this.classRange.removeRange(0, -1);
                    var _topRowIndex_1 = this.classRange.selectRange(addRowIndex, addRowIndex);
                    this.classPanel30.setDataPanel(_topRowIndex_1);
                    this.verticalScroll.setScroll(grid.code_vertical);
                    this.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
                }
            }
        }
    };
    TbsGridBaseRows.prototype.removeRows = function (rows) {
        var grid = this;
        if (this.null(rows) || rows.length == 0)
            return;
        var topRowIndex = this.getFirstRowIndex();
        for (var i = 0, len = rows.length; i < len; i++) {
            var row = rows[i];
            var rowId = row[tbs_grid_types_1.columnAlias.rowId];
            this.source_table.removeByRowId(rowId);
            this.view_table.removeByRowId(rowId);
        }
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(topRowIndex, topRowIndex, 0, 0);
        grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());
        grid.classPanel30.setDataPanel(_topRowIndex);
    };
    /**
     * source table rows
     */
    TbsGridBaseRows.prototype.getSourceRowCount = function () { return this.getRowCount(this.source_table); };
    TbsGridBaseRows.prototype.getSourceRow = function (rowIndex) { return this.getRow(rowIndex, this.source_table); };
    TbsGridBaseRows.prototype.getSourceRows = function (startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.source_table); };
    TbsGridBaseRows.prototype.getSourceRowByRowId = function (rowId) { return this.getRowByRowId(rowId, this.source_table); };
    TbsGridBaseRows.prototype.getSourceRowIndexByRowId = function (rowId) { return this.getRowIndexByRowId(rowId, this.source_table); };
    /**
     * top table rows
     */
    TbsGridBaseRows.prototype.getTopRowCount = function () { return this.getRowCount(this.top_table); };
    TbsGridBaseRows.prototype.getTopRow = function (rowIndex) { return this.getRow(rowIndex, this.top_table); };
    TbsGridBaseRows.prototype.getTopRows = function (startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.top_table); };
    TbsGridBaseRows.prototype.getTopRowByRowId = function (rowId) { return this.getRowByRowId(rowId, this.top_table); };
    TbsGridBaseRows.prototype.getTopRowIndexByRowId = function (rowId) { return this.getRowIndexByRowId(rowId, this.top_table); };
    /**
     * footer table rows
     */
    TbsGridBaseRows.prototype.getFooterRowCount = function () { return this.getRowCount(this.footer_table); };
    TbsGridBaseRows.prototype.getFooterRow = function (rowIndex) { return this.getRow(rowIndex, this.footer_table); };
    TbsGridBaseRows.prototype.getFooterRows = function (startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.footer_table); };
    TbsGridBaseRows.prototype.getFooterRowByRowId = function (rowId) { return this.getRowByRowId(rowId, this.footer_table); };
    TbsGridBaseRows.prototype.getFooterRowIndexByRowId = function (rowId) { return this.getRowIndexByRowId(rowId, this.footer_table); };
    /**
     * tree table rows
     */
    TbsGridBaseRows.prototype.getTreeRowCount = function () { return this.getRowCount(this.tree_table); };
    TbsGridBaseRows.prototype.getTreeRow = function (rowIndex) { return this.getRow(rowIndex, this.tree_table); };
    TbsGridBaseRows.prototype.getTreeRows = function (startRowIndex, endRowIndex) { return this.getRows(startRowIndex, endRowIndex, this.tree_table); };
    TbsGridBaseRows.prototype.getTreeRowByRowId = function (rowId) { return this.getRowByRowId(rowId, this.tree_table); };
    TbsGridBaseRows.prototype.getTreeRowIndexByRowId = function (rowId) { return this.getRowIndexByRowId(rowId, this.tree_table); };
    /**
     * Row functions
     */
    TbsGridBaseRows.prototype.getPageRowCount = function (panelName) { return this.pageRowCount; };
    TbsGridBaseRows.prototype.getTopRowIndex = function (panelName, topRowIndex) {
        // function : Validate Top rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : topRowIndex
        var selector = '#' + this.gridId;
        var grid = this;
        if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
            var rowCount = this.getRowCount();
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
    };
    TbsGridBaseRows.prototype.getBottomRowIndex = function (panelName, topRowIndex) {
        // function : Validate Bottom rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : bottomRowIndex
        var selector = '#' + this.gridId;
        var grid = this;
        var bottomRowIndex = 0;
        bottomRowIndex = topRowIndex + this.pageRowCount - 1;
        if (bottomRowIndex > this.getRowCount() - 1)
            bottomRowIndex = this.getRowCount() - 1;
        return bottomRowIndex;
    };
    return TbsGridBaseRows;
}());
exports.TbsGridBaseRows = TbsGridBaseRows;


/***/ }),

/***/ 294:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBase = void 0;
var tbs_base_1 = __webpack_require__(5052);
var tbs_database_1 = __webpack_require__(132);
var tbs_grid_configs_1 = __webpack_require__(4476);
var TbsGridBase = /** @class */ (function (_super) {
    __extends(TbsGridBase, _super);
    function TbsGridBase(gridId, gridConfigs) {
        var _this = _super.call(this) || this;
        _this.renderer = null;
        _this.infoRenderer = null;
        _this.gridId = gridId;
        _this.gridConfig = gridConfigs ?
            gridConfigs[Object.keys(gridConfigs)[0]] : tbs_grid_configs_1.tbsGridConfigs[Object.keys(tbs_grid_configs_1.tbsGridConfigs)[0]];
        _this.gridConfigOptions = gridConfigs ? gridConfigs['options'] : tbs_grid_configs_1.tbsGridConfigs['options'];
        _this.grid_mode = '';
        _this.mousePointRange = 15;
        /**
         * @description mobile, user agent
         *
         */
        _this.isMobile = _this.gridConfigOptions['isMobile'];
        _this.userAgent = _this.gridConfigOptions['userAgent'];
        /**
         * columns, headerColumnTable
         */
        _this.columns = [];
        _this.headerColumnTable = [];
        _this.renderer = null;
        _this.infoRenderer = null;
        /**
         * create database
         */
        _this.db = new tbs_database_1.TbsDatabase();
        // this.field_table        = this.db.createTable('field');
        _this.header_column_table = _this.db.createArrayTable('header_column');
        _this.column_table = _this.db.createTable('column');
        _this.top_column_table = _this.db.createTable('top_column');
        _this.footer_column_table = _this.db.createTable('footer_column');
        _this.sort_column_table = _this.db.createTable('sort_column');
        _this.filter_column_table = _this.db.createTable('filter_column');
        _this.group_column_table = _this.db.createTable('group_column');
        _this.source_table = _this.db.createTable('source');
        _this.view_table = _this.db.createView('view');
        _this.group_table = _this.db.createView('group');
        _this.group_header_table = _this.db.createView('group_header');
        _this.tree_table = _this.db.createView('tree');
        _this.page_table = _this.db.createView('page');
        _this.top_table = _this.db.createTable('top');
        _this.footer_table = _this.db.createTable('footer');
        _this.temp_table = _this.db.createTable('temp');
        _this.data_update = [];
        _this.data_insert = [];
        _this.data_delete = [];
        /**
         * create info table
         */
        _this.info_column_table = _this.db.createTable('info_column');
        _this.info_column_table.insert({ name: 'num', type: 'number', align: 'center', width: 50, visible: true });
        _this.info_column_table.insert({ name: 'mode', type: 'string', align: 'center', width: 20, visible: false });
        _this.info_column_table.insert({ name: 'checkbox', type: 'checkbox', align: 'center', width: 25, visible: false, editable: true });
        _this.panel21_table = _this.db.createView('panel21');
        _this.panel20_table = _this.db.createView('panel20');
        _this.panel31_table = _this.db.createView('panel31');
        /**
         * cell template table
         */
        _this.cell_template_table = _this.db.createTable('cellTemplate');
        _this.cell_template_table.insert({ type: 'checkbox', cellTemplate: 1, children: ['checkbox', 'string'] }); //default
        _this.cell_template_table.insert({ type: 'checkbox', cellTemplate: 2, children: ['string', 'checkbox'] });
        _this.cell_template_table.insert({ type: 'group', cellTemplate: 1, children: ['icon', 'string'] });
        _this.cell_template_table.insert({ type: 'group', cellTemplate: 2, children: ['icon', 'img', 'string'] });
        _this.cell_template_table.insert({ type: 'tree', cellTemplate: 1, children: ['icon', 'string'] });
        _this.cell_template_table.insert({ type: 'tree', cellTemplate: 2, children: ['icon', 'img', 'string'] });
        /**
         * @description selection data
         *
         */
        _this.data_select_panel30 = [];
        _this.data_select_panel31 = [];
        /**
         * @description Row Count / Select Range
         *
         */
        _this.pageRowCount = 0;
        _this.pageIntRowCount = 0;
        _this.startRowIndex = -1;
        _this.startCellIndex = -1;
        _this.lastRowIndex = -1;
        _this.lastCellIndex = -1;
        _this._startRowIndex = -1;
        _this._startCellIndex = -1;
        _this._lastRowIndex = -1;
        _this._lastCellIndex = -1;
        _this.selectRangeArray = [];
        _this.startX = 0;
        _this.startY = 0;
        _this.lastX = 0;
        _this.lastY = 0;
        _this.const_filterValue = 'value';
        _this.const_filterType = 'type';
        _this.const_filterReset = 'Reset';
        _this.const_filterSave = 'Save';
        _this.headerRowCount = 0;
        /**
         * @description layout
         *
         */
        _this.fixedColumnIndex = -1;
        /**
         * @description constant value
         *
         */
        _this.headerRowHeight = 25;
        _this.rowHeight = 25;
        _this.topRowHeight = 25;
        _this.footerRowHeight = 25;
        /**
         * @description code
         *
         */
        _this.debug_mode = true;
        _this.code_horizontal = 'horizontal';
        _this.code_vertical = 'vertical';
        return _this;
    }
    return TbsGridBase;
}(tbs_base_1.TbsBase));
exports.TbsGridBase = TbsGridBase;


/***/ }),

/***/ 1119:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridBaseUserEvent = void 0;
var TbsGridBaseUserEvent = /** @class */ (function () {
    function TbsGridBaseUserEvent() {
        /**
         * user event
         */
        this.onClick = null; // (grid, row)
        this.onDblclick = null; // (grid, row)
        this.onEdit = null; // (grid, state, row)
        this.onClickCheckbox = null; // (grid, row)
        this.onClickInfoCheckBox = null; // (grid, row)
        this.onClickButton = null; // (grid, row)
        this.onClickLink = null; // (grid, row)
        this.onRowBounding = null; // grid, element, row
        this.onClickPage = null;
        this.onChangePageRowCount = null;
        this.onClickPageFirst = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.onClickPagePrev = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.onClickPageIndex = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.onClickPageNext = null; // (grid, pageIndex, selectedPageCount, userFunction)
        this.onClickPageLast = null; // (grid, pageIndex, selectedPageCount, userFunction)
    }
    return TbsGridBaseUserEvent;
}());
exports.TbsGridBaseUserEvent = TbsGridBaseUserEvent;


/***/ }),

/***/ 8760:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridColumns = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridColumns = /** @class */ (function () {
    function TbsGridColumns(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    TbsGridColumns.prototype.getUserColumns = function () {
        var grid = this.grid;
        var userColumns = [];
        var getChildren = function (node, rowIndex, startColumnIndex, lastColumnIndex) {
            node[tbs_grid_types_1.columnAlias.children] = [];
            for (var x = startColumnIndex; x <= lastColumnIndex; x++) {
                var column = grid.header_column_table.selectRowByRowIndex(rowIndex + 1, x);
                if (grid.null(column))
                    break;
                if (column[tbs_grid_types_1.columnAlias.kind] == 'column') {
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    node[tbs_grid_types_1.columnAlias.children].push(grid.getColumn(columnName));
                }
                else if (column[tbs_grid_types_1.columnAlias.kind] == 'header') {
                    node[tbs_grid_types_1.columnAlias.children].push(column);
                    var sIndex = x;
                    var eIndex = x + column[tbs_grid_types_1.columnAlias.colSpan] - 1;
                    getChildren(column, rowIndex + 1, sIndex, eIndex);
                }
            }
        };
        //  header 정보와 컬럼 정보를 가져온다.
        for (var x = 0; x < grid.column_table.count(); x++) {
            var column = grid.header_column_table.selectRowByRowIndex(0, x);
            if (grid.notNull(column[tbs_grid_types_1.columnAlias.num]))
                delete column[tbs_grid_types_1.columnAlias.num];
            if (grid.notNull(column[tbs_grid_types_1.columnAlias.parentNum]))
                delete column[tbs_grid_types_1.columnAlias.parentNum];
            if (column[tbs_grid_types_1.columnAlias.kind] == 'column') {
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                userColumns.push(grid.getColumn(columnName));
            }
            else if (column[tbs_grid_types_1.columnAlias.kind] == 'header') {
                userColumns.push(column);
                var startColumnIndex = x;
                var lastColumnIndex = x + column[tbs_grid_types_1.columnAlias.colSpan] - 1;
                getChildren(column, 0, startColumnIndex, lastColumnIndex);
            }
        }
        return userColumns;
    };
    TbsGridColumns.prototype.setColumnDefaultValue = function (column) {
        var grid = this.grid;
        var columnType = column[tbs_grid_types_1.columnAlias.type];
        if (grid.null(column[tbs_grid_types_1.columnAlias.dataType])) {
            if (columnType == tbs_grid_types_1.CellType.number)
                column[tbs_grid_types_1.columnAlias.dataType] = tbs_grid_types_1.CellType.number;
            else if (columnType == tbs_grid_types_1.CellType.date)
                column[tbs_grid_types_1.columnAlias.dataType] = tbs_grid_types_1.CellType.string;
            else if (columnType == tbs_grid_types_1.CellType.combo)
                column[tbs_grid_types_1.columnAlias.dataType] = tbs_grid_types_1.CellType.string;
            else
                column[tbs_grid_types_1.columnAlias.dataType] = tbs_grid_types_1.CellType.string;
        }
        if (grid.null(column[tbs_grid_types_1.columnAlias.width]))
            column[tbs_grid_types_1.columnAlias.width] = 100;
        if (grid.null(column[tbs_grid_types_1.columnAlias.editable]))
            column[tbs_grid_types_1.columnAlias.editable] = false;
        if (grid.null(column[tbs_grid_types_1.columnAlias.visible]))
            column[tbs_grid_types_1.columnAlias.visible] = true;
        if (columnType == tbs_grid_types_1.CellType.string) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'left';
        }
        else if (columnType == tbs_grid_types_1.CellType.number) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'right';
            if (grid.null(column[tbs_grid_types_1.columnAlias.scale]))
                column[tbs_grid_types_1.columnAlias.scale] = '18,0';
            if (grid.null(column[tbs_grid_types_1.columnAlias.roundType]))
                column[tbs_grid_types_1.columnAlias.roundType] = 'round';
            if (grid.null(column[tbs_grid_types_1.columnAlias.fixedScale]))
                column[tbs_grid_types_1.columnAlias.fixedScale] = true;
            if (grid.null(column[tbs_grid_types_1.columnAlias.showZero]))
                column[tbs_grid_types_1.columnAlias.showZero] = false;
            if (grid.null(column[tbs_grid_types_1.columnAlias.commaUnit]))
                column[tbs_grid_types_1.columnAlias.commaUnit] = 3; // Fixed value.
            if (grid.null(column[tbs_grid_types_1.columnAlias.thousandChar]))
                column[tbs_grid_types_1.columnAlias.thousandChar] = grid.getConfigCulture('thousandChar');
            if (grid.null(column[tbs_grid_types_1.columnAlias.decimalChar]))
                column[tbs_grid_types_1.columnAlias.decimalChar] = grid.getConfigCulture('decimalChar');
            //if (grid.null(column[columnAlias.currencyChar])) column[columnAlias.currencyChar] = grid.getConfigCulture('currencyChar');
        }
        else if (columnType == tbs_grid_types_1.CellType.date) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'center';
            if (grid.null(column[tbs_grid_types_1.columnAlias.format]))
                column[tbs_grid_types_1.columnAlias.format] = grid.getConfigCalendar('dayPattern');
        }
        else if (columnType == tbs_grid_types_1.CellType.combo) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'left';
        }
        return column;
    };
    TbsGridColumns.prototype.createColumns = function (columns) {
        var grid = this.grid;
        var searchColumn = function (column) {
            if (!column[tbs_grid_types_1.columnAlias.children]) {
                var columnType = column[tbs_grid_types_1.columnAlias.type];
                column[tbs_grid_types_1.columnAlias.type] = grid.null(columnType) ? tbs_grid_types_1.CellType.string : columnType;
                grid.classColumn.setColumnDefaultValue(column);
            }
            else
                column[tbs_grid_types_1.columnAlias.children].map(function (n) { return searchColumn(n); });
        };
        columns.map(function (column) { return searchColumn(column); });
    };
    TbsGridColumns.prototype.createColumnTable = function () {
        var grid = this.grid;
        var dataRows = [];
        var searchColumn = function (column) {
            if (!column[tbs_grid_types_1.columnAlias.children])
                dataRows.push(column);
            else
                column[tbs_grid_types_1.columnAlias.children].map(function (n) { return searchColumn(n); });
        };
        grid.columns.map(function (column) { return searchColumn(column); });
        /**
         * columns order changed or add column
         */
        grid.column_table.remove();
        dataRows.map(function (dataRow) { return grid.column_table.insert(grid.copyJson(dataRow)); });
    };
    TbsGridColumns.prototype.addColumn = function (addColumn, columnIndex, orderType) {
        var grid = this.grid;
        grid.columns = this.getUserColumns();
        if (grid.column_table.count() == 0) {
            grid.columns.push(addColumn);
        }
        else if (orderType == tbs_grid_types_1.BeforeAfter.before) {
            grid.columns.splice(columnIndex, 0, addColumn);
        }
        else if (orderType == tbs_grid_types_1.BeforeAfter.after) {
            if (columnIndex + 1 >= grid.columns.length)
                grid.columns.push(addColumn);
            else
                grid.columns.splice(columnIndex + 1, 0, addColumn);
        }
        this.createColumns(grid.columns); // add columns(first) or add column
        this.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.updateGrid();
        grid.apply();
    };
    TbsGridColumns.prototype.removeColumn = function (targetColumnIndex) {
        var grid = this.grid;
        if (grid.column_table.count() == 0)
            return;
        var rootColumn = grid.header_column_table.selectRowByRowIndex(0, targetColumnIndex);
        if (grid.null(rootColumn))
            return;
        var startRowIndex = 0;
        var lastRowIndex = grid.headerRowCount;
        var startColIndex = targetColumnIndex;
        var lastColIndex = targetColumnIndex + rootColumn[tbs_grid_types_1.columnAlias.colSpan] - 1;
        grid.header_column_table.data.map(function (columns) {
            columns.splice(targetColumnIndex, rootColumn[tbs_grid_types_1.columnAlias.colSpan]);
        });
        grid.column_table.data.splice(targetColumnIndex, rootColumn[tbs_grid_types_1.columnAlias.colSpan]);
        grid.updateGrid();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    };
    TbsGridColumns.prototype.getParentTableCell = function (column) {
        var grid = this.grid;
        var result = null;
        var rowIndex = column.rowIndex;
        var colIndex = column.colIndex;
        if (rowIndex == 0)
            return null;
        else {
            var rootRowIndex = rowIndex - 1;
            for (var i = colIndex; i >= 0; i--) {
                var dataRow = grid.header_column_table.data[rootRowIndex][i];
                var kind = dataRow[tbs_grid_types_1.columnAlias.kind];
                if (kind != 'empty') {
                    result = dataRow;
                    break;
                }
            }
            return result;
        }
    };
    TbsGridColumns.prototype.changeColumnOrder = function (moveColumn, targetColumn, orderType) {
        var grid = this.grid;
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
        var moveRootColumn = this.getParentTableCell(moveColumn);
        var targetRootColumn = this.getParentTableCell(targetColumn);
        var moveRootRowId = grid.null(moveRootColumn) ? -1 : moveRootColumn[tbs_grid_types_1.columnAlias.rowId];
        var targetRootRowId = grid.null(targetRootColumn) ? -1 : targetRootColumn[tbs_grid_types_1.columnAlias.rowId];
        if (moveRootRowId != targetRootRowId)
            return;
        var moveRowIndex = moveColumn.rowIndex;
        var moveColIndex = moveColumn.colIndex;
        var targetRowIndex = targetColumn.rowIndex;
        var targetColIndex = targetColumn.colIndex;
        var rangeStartRowIndex = moveRowIndex;
        var rangeLastRowIndex = grid.headerRowCount - 1;
        var rangeStartColIndex = moveColIndex;
        var rangeLastColIndex = moveColIndex + moveColumn.colSpan - 1;
        // 1. moveColumns copy
        // 2. moveColumns name : __changed__
        var temp = [];
        grid.header_column_table.data.map(function (row, index) { return temp[index] = []; });
        for (var i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            var columns = grid.header_column_table.data[i];
            temp[i];
            for (var x = rangeStartColIndex; x <= rangeLastColIndex; x++) {
                var column = columns[x];
                temp[i].push(grid.copyJson(column));
                column[tbs_grid_types_1.columnAlias.name] = '__$$changed$$__';
            }
        }
        // 3. targetColum insert
        for (var i = rangeStartRowIndex; i <= rangeLastRowIndex; i++) {
            var columns = temp[i];
            if (orderType == 'before') {
                grid.header_column_table.insertRowsBefore(i, columns, targetColIndex);
            }
            else if (orderType == 'after') {
                var index = targetColIndex + targetColumn[tbs_grid_types_1.columnAlias.colSpan] - 1;
                grid.header_column_table.insertRowsAfter(i, columns, index);
            }
        }
        grid.temp_table.remove();
        // 4. delete  '__changed__';
        for (var i = 0; i < grid.header_column_table.count(); i++) {
            var columns = grid.header_column_table.data[i];
            for (var x = columns.length - 1; x >= 0; x--) {
                var column = columns[x];
                if (column[tbs_grid_types_1.columnAlias.name] == '__$$changed$$__')
                    columns.splice(x, 1);
            }
        }
        // colIndex
        grid.header_column_table.makeColIndex();
        // 헤더를 밀어넣은 후에 컬럼을 밀어 넣자.
        var copyColumns = [];
        for (var x = 0; x < grid.column_table.count(); x++) {
            for (var i = 0; i < grid.header_column_table.count(); i++) {
                var column = grid.header_column_table.data[i][x];
                if (column[tbs_grid_types_1.columnAlias.kind] == 'column')
                    copyColumns.push(grid.copyJson(column));
            }
        }
        grid.temp_table.remove();
        grid.column_table.data.map(function (row) { return grid.temp_table.insert(grid.copyJson(row)); });
        grid.column_table.remove();
        copyColumns.map(function (copyColumn) {
            for (var i = 0; i < grid.temp_table.count(); i++) {
                var column = grid.temp_table.selectRowByRowIndex(i);
                if (copyColumn.name == column.name)
                    grid.column_table.insert(grid.copyJson(column));
            }
        });
        grid.temp_table.remove();
        /* Change Fixed Column Index */
        if (grid.fixedColumnIndex != -1) {
            if (moveColumn.colIndex <= grid.fixedColumnIndex && targetColumn.colIndex > grid.fixedColumnIndex) {
                var childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex - childCount;
                if (grid.fixedColumnIndex < 0)
                    grid.classColumn.removeFixedColumn();
                else
                    grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
            else if (moveColumn.colIndex > grid.fixedColumnIndex && targetColumn.colIndex <= grid.fixedColumnIndex) {
                var childCount = Number(moveColumn.colSpan);
                grid.fixedColumnIndex = grid.fixedColumnIndex + childCount;
                grid.classColumn.setFixedColumn(grid.fixedColumnIndex);
            }
        }
        grid.classPanel70.setDataPanel();
        grid.apply();
    };
    TbsGridColumns.prototype.getSelectedTableCell = function (rowIndex, cellIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var td = null;
        var startRowIndex;
        var startCellIndex;
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
        var trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 table tbody tr');
        var trContentList = document.querySelectorAll(selector + ' .tbs-grid-panel30 table tbody tr');
        for (var i = 0; i < trList.length; i++) {
            var tr = trList[i];
            var dataRowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
            if (dataRowIndex == startRowIndex) {
                var td_1 = trContentList[i].childNodes[startCellIndex];
                break;
            }
        }
        return td;
    };
    ;
    TbsGridColumns.prototype.getRowIndexInTable = function (tableRowIndex, panelName) {
        if (panelName === void 0) { panelName = 'panel31'; }
        var selector = this.selector;
        var grid = this.grid;
        var leftPanelName = panelName;
        leftPanelName = 'panel31';
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + leftPanelName + ' .tbs-grid-table tr');
        return parseInt(tableRows[tableRowIndex].childNodes[0]['dataset'].rowIndex);
    };
    TbsGridColumns.prototype.getLeftTableCell = function (rowIndex, panel) {
        if (panel === void 0) { panel = 'panel31'; }
        1;
        var selector = this.selector;
        var grid = this.grid;
        var result = null;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panel + ' .tbs-grid-table tbody tr:not([style*="display:"])');
        for (var i = 0, len = tableRows.length; i < len; i++) {
            var tableRow = tableRows[i];
            var index = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
            if (index == rowIndex) {
                result = tableRow.childNodes[0];
                break;
            }
        }
        return result;
    };
    TbsGridColumns.prototype.getJsonRow = function (jsonArray, name, value) {
        var result;
        for (var i = 0, len = jsonArray.length; i < len; i++) {
            var json = jsonArray[i];
            if (json[name] == value) {
                result = json;
                break;
            }
        }
        return result;
    };
    TbsGridColumns.prototype.setFixedColumn = function (fixedColumnIndex) {
        var selector = this.selector;
        var grid = this.grid;
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
    };
    TbsGridColumns.prototype.removeFixedColumn = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.fixedColumnIndex = -1;
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.classPanel70.setDataPanel();
        grid.apply();
    };
    TbsGridColumns.prototype.getFirstVisibleColumnIndex = function () {
        var grid = this.grid;
        var result = null;
        for (var i = 0; i < grid.column_table.count(); i++) {
            var column = grid.column_table.data[i];
            if (column[tbs_grid_types_1.columnAlias.visible]) {
                result = i;
                break;
            }
        }
        return result;
    };
    TbsGridColumns.prototype.getLastVisibleColumnIndex = function () {
        var grid = this.grid;
        var result = null;
        for (var i = grid.column_table.count() - 1; i >= 0; i--) {
            var column = grid.column_table.data[i];
            if (column[tbs_grid_types_1.columnAlias.visible]) {
                result = i;
                break;
            }
        }
        return result;
    };
    return TbsGridColumns;
}());
exports.TbsGridColumns = TbsGridColumns;


/***/ }),

/***/ 2609:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridHeaders = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridHeaders = /** @class */ (function () {
    function TbsGridHeaders(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    TbsGridHeaders.prototype.createHeaderColumns = function () {
        var grid = this.grid;
        var getChildrenColumnCount = function (userColumn) {
            var columnCount = 0;
            var getCount = function (userColumn) {
                if (userColumn[tbs_grid_types_1.columnAlias.children]) {
                    for (var i = 0, len = userColumn[tbs_grid_types_1.columnAlias.children].length; i < len; i++) {
                        getCount(userColumn[tbs_grid_types_1.columnAlias.children][i]);
                    }
                }
                else
                    columnCount += 1;
            };
            getCount(userColumn);
            return columnCount;
        };
        var getTreeDepth = function (userColumns, depth) {
            if (depth === void 0) { depth = 0; }
            var maxDepth = 1;
            var getDepth = function (userColumn, depth) {
                if (depth === void 0) { depth = 1; }
                if (depth > maxDepth)
                    maxDepth = depth;
                if (userColumn[tbs_grid_types_1.columnAlias.children]) {
                    for (var i = 0, len = userColumn[tbs_grid_types_1.columnAlias.children].length; i < len; i++) {
                        getDepth(userColumn[tbs_grid_types_1.columnAlias.children][i], depth + 1);
                    }
                }
            };
            for (var i = 0, len = userColumns.length; i < len; i++)
                getDepth(userColumns[i]);
            return maxDepth;
        };
        var setNumber = function (userColumns, rowIndex, parentNum) {
            if (parentNum === void 0) { parentNum = 0; }
            userColumns.map(function (userColumn) {
                num = num + 1;
                userColumn[tbs_grid_types_1.columnAlias.num] = num;
                userColumn[tbs_grid_types_1.columnAlias.parentNum] = parentNum;
                userColumn[tbs_grid_types_1.columnAlias.rowIndex] = rowIndex;
                userColumn[tbs_grid_types_1.columnAlias.rowSpan] = userColumn[tbs_grid_types_1.columnAlias.children] ? 1 : headerRowCount - rowIndex;
                userColumn[tbs_grid_types_1.columnAlias.colSpan] = getChildrenColumnCount(userColumn);
                if (userColumn[tbs_grid_types_1.columnAlias.children]) {
                    setNumber(userColumn[tbs_grid_types_1.columnAlias.children], rowIndex + 1, num);
                }
            });
        };
        var num = 0;
        var parentNum = 0;
        var headerRowCount = getTreeDepth(grid.columns);
        grid.headerRowCount = headerRowCount;
        setNumber(grid.columns, 0);
    };
    TbsGridHeaders.prototype.createHeaderColumnTable = function () {
        var grid = this.grid;
        var createHeaderColumns = function (userColumns) {
            userColumns.map(function (userColumn) {
                var headerColumn = {};
                var kind = userColumn[tbs_grid_types_1.columnAlias.children] ? 'header' : 'column';
                var name = null;
                var text = null;
                var align = null;
                var className = null;
                var rowSpan = userColumn[tbs_grid_types_1.columnAlias.rowSpan];
                var colSpan = userColumn[tbs_grid_types_1.columnAlias.colSpan];
                var rowIndex = userColumn[tbs_grid_types_1.columnAlias.rowIndex];
                var colIndex = userColumn[tbs_grid_types_1.columnAlias.colIndex];
                var visible = null;
                var children = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.children], null);
                var num = userColumn[tbs_grid_types_1.columnAlias.num];
                var parentNum = userColumn[tbs_grid_types_1.columnAlias.parentNum];
                var type = 'string';
                if (kind == 'column') {
                    var columnName = userColumn[tbs_grid_types_1.columnAlias.name];
                    var column = grid.getColumn(columnName);
                    name = column[tbs_grid_types_1.columnAlias.name];
                    text = grid.isNull(column.header[tbs_grid_types_1.columnAlias.text], null);
                    align = grid.isNull(column.header[tbs_grid_types_1.columnAlias.align], 'center');
                    className = grid.isNull(column[tbs_grid_types_1.columnAlias.className], null);
                    visible = grid.isNull(column[tbs_grid_types_1.columnAlias.visible], true);
                }
                else {
                    name = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.name], null);
                    align = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.align], 'center');
                    text = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.text], null);
                    className = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.className], null);
                    visible = grid.isNull(userColumn[tbs_grid_types_1.columnAlias.visible], true);
                }
                headerColumn[tbs_grid_types_1.columnAlias.kind] = kind;
                headerColumn[tbs_grid_types_1.columnAlias.name] = name;
                headerColumn[tbs_grid_types_1.columnAlias.align] = align;
                headerColumn[tbs_grid_types_1.columnAlias.text] = text;
                headerColumn[tbs_grid_types_1.columnAlias.className] = className;
                headerColumn[tbs_grid_types_1.columnAlias.visible] = visible;
                headerColumn[tbs_grid_types_1.columnAlias.rowSpan] = rowSpan;
                headerColumn[tbs_grid_types_1.columnAlias.colSpan] = colSpan;
                headerColumn[tbs_grid_types_1.columnAlias.rowIndex] = rowIndex;
                headerColumn[tbs_grid_types_1.columnAlias.colIndex] = colIndex;
                headerColumn[tbs_grid_types_1.columnAlias.children] = children;
                headerColumn[tbs_grid_types_1.columnAlias.num] = num;
                headerColumn[tbs_grid_types_1.columnAlias.parentNum] = parentNum;
                headerColumn[tbs_grid_types_1.columnAlias.type] = type;
                var childrenCount = headerColumn[tbs_grid_types_1.columnAlias.children] ? headerColumn[tbs_grid_types_1.columnAlias.children].length : 0;
                var columnCount = headerColumn[tbs_grid_types_1.columnAlias.colSpan];
                headerColumnRows[rowIndex].push(headerColumn);
                var blankColumn = {};
                blankColumn[tbs_grid_types_1.columnAlias.kind] = 'empty';
                blankColumn[tbs_grid_types_1.columnAlias.name] = name;
                blankColumn[tbs_grid_types_1.columnAlias.align] = align;
                blankColumn[tbs_grid_types_1.columnAlias.text] = text;
                blankColumn[tbs_grid_types_1.columnAlias.className] = className;
                blankColumn[tbs_grid_types_1.columnAlias.visible] = false;
                blankColumn[tbs_grid_types_1.columnAlias.rowSpan] = rowSpan;
                blankColumn[tbs_grid_types_1.columnAlias.colSpan] = colSpan;
                blankColumn[tbs_grid_types_1.columnAlias.rowIndex] = rowIndex;
                blankColumn[tbs_grid_types_1.columnAlias.colIndex] = colIndex;
                blankColumn[tbs_grid_types_1.columnAlias.children] = children;
                blankColumn[tbs_grid_types_1.columnAlias.num] = num;
                blankColumn[tbs_grid_types_1.columnAlias.parentNum] = parentNum;
                headerColumn[tbs_grid_types_1.columnAlias.type] = type;
                //make blank column(row)
                if (childrenCount == 0) {
                    for (var i = rowIndex + 1; i < headerRowCount; i++)
                        headerColumnRows[i].push(blankColumn);
                }
                //make blank column(colums)
                if (columnCount > 1) {
                    for (var i = 1; i < columnCount; i++)
                        headerColumnRows[rowIndex].push(blankColumn);
                }
                if (userColumn[tbs_grid_types_1.columnAlias.children]) {
                    createHeaderColumns(userColumn[tbs_grid_types_1.columnAlias.children]);
                }
            });
        };
        var headerColumnRows = [];
        var headerRowCount = grid.headerRowCount;
        for (var i = 0; i < headerRowCount; i++)
            headerColumnRows[i] = [];
        createHeaderColumns(grid.columns);
        headerColumnRows.map(function (columns, rowIndex) {
            columns.map(function (column, colIndex) {
                column[tbs_grid_types_1.columnAlias.rowIndex] = rowIndex;
                column[tbs_grid_types_1.columnAlias.colIndex] = colIndex;
                delete column[tbs_grid_types_1.columnAlias.children];
            });
        });
        /* insert headerColumnTable */
        grid.header_column_table.remove();
        headerColumnRows.map(function (headerColumns, rowIndex) {
            for (var i = 0, len = headerColumns.length; i < len; i++) {
                var headerColumn = headerColumns[i];
                var item = {};
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
    };
    TbsGridHeaders.prototype.updateHeaderFixedColumns = function () {
        var grid = this.grid;
        if (grid.header_column_table.count() > 1) {
            var rootColumn = void 0;
            var rootColumnIndex = void 0;
            var rootColumnColSpan = void 0;
            for (var x = grid.fixedColumnIndex; x >= 0; x--) {
                var column = grid.header_column_table.selectRowByRowIndex(0, x);
                if (column[tbs_grid_types_1.columnAlias.kind] != 'empty') {
                    rootColumnIndex = x;
                    rootColumnColSpan = column[tbs_grid_types_1.columnAlias.colSpan];
                    break;
                }
            }
            grid.fixedColumnIndex = rootColumnIndex + rootColumnColSpan - 1;
        }
        if (grid.fixedColumnIndex >= grid.column_table.count() - 1) {
            grid.fixedColumnIndex = -1;
            return;
        }
    };
    TbsGridHeaders.prototype.getDisplayedHeaderColumn = function (panelName) {
        if (panelName === void 0) { panelName = 'panel30'; }
        var selector = this.selector;
        var grid = this.grid;
        // let rectPanel = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
        // let rectTable = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').getBoundingClientRect();
        // let styleLeft = document.querySelector(selector + ' .tbs-grid-' + panelName + ' > table').style.left;
        // styleLeft = parseInt(styleLeft, 10);
        var columns = grid.column_table.data;
        if (panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
            var startColumnIndex = 0;
            var lastColumnIndex = grid.fixedColumnIndex;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
        else {
            var startColumnIndex = 0;
            var lastColumnIndex = columns.length - 1;
            if (grid.fixedColumnIndex != -1)
                startColumnIndex = grid.fixedColumnIndex + 1;
            return { startColumnIndex: startColumnIndex, lastColumnIndex: lastColumnIndex };
        }
    };
    TbsGridHeaders.prototype.getHeaderColumn = function (rowIndex, columnIndex) {
        var grid = this.grid;
        return grid.header_column_table.data[rowIndex][columnIndex];
    };
    TbsGridHeaders.prototype.getHeaderColumnByNumber = function (num) {
        var selector = this.selector;
        var grid = this.grid;
        var result;
        var getParentColumn = function (headerColumn) {
            if (headerColumn[tbs_grid_types_1.columnAlias.num] == num) {
                result = headerColumn;
                return;
            }
            if (headerColumn[tbs_grid_types_1.columnAlias.children]) {
                for (var i = 0, len = headerColumn[tbs_grid_types_1.columnAlias.children].length; i < len; i++) {
                    getParentColumn(headerColumn[tbs_grid_types_1.columnAlias.children][i]);
                }
            }
        };
        for (var i = 0; i < grid.columns.length; i++)
            getParentColumn(grid.columns[i]);
        return result;
    };
    TbsGridHeaders.prototype.getHeaderPropertyByIndex = function (columnIndex, property) {
        var selector = this.selector;
        var grid = this.grid;
        var column = grid.column_table.data[columnIndex];
        var result = grid.null(column.header[property]) ? null : column.header[property];
        return result;
    };
    TbsGridHeaders.prototype.getHeaderProperty = function (columnName, property) {
        var selector = this.selector;
        var grid = this.grid;
        var columnIndex = grid.getColumnIndex(columnName);
        return grid.classHeader.getHeaderPropertyByIndex(columnIndex, property);
    };
    TbsGridHeaders.prototype.setHeaderProperty = function (rowIndex, colIndex, property, value) {
        var grid = this.grid;
        var column = grid.header_column_table.data[rowIndex][colIndex];
        var kind = column[tbs_grid_types_1.columnAlias.kind];
        column[property] = value;
        if (kind == tbs_grid_types_1.ColumnKind.column) {
            var name_1 = column[tbs_grid_types_1.columnAlias.name];
            var dataRow = grid.column_table.selectRow(tbs_grid_types_1.columnAlias.name, name_1);
            if (property == tbs_grid_types_1.columnAlias.text) {
                dataRow.header[tbs_grid_types_1.columnAlias.text] = value;
            }
            else if (property == tbs_grid_types_1.columnAlias.className) {
                dataRow.header[tbs_grid_types_1.columnAlias.className] = value;
            }
            else {
                dataRow.header[property] = value;
            }
        }
    };
    return TbsGridHeaders;
}());
exports.TbsGridHeaders = TbsGridHeaders;


/***/ }),

/***/ 176:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsDataArrayTable = void 0;
var tbs_base_1 = __webpack_require__(5052);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsDataArrayTable = /** @class */ (function (_super) {
    __extends(TbsDataArrayTable, _super);
    function TbsDataArrayTable(tableName) {
        var _this = _super.call(this) || this;
        _this.tableName = tableName;
        _this.data = [];
        _this.currentRowId = -1;
        _this.type = 'table';
        return _this;
    }
    /**
     * select functions
     */
    TbsDataArrayTable.prototype.selectRows = function (arrayIndex, field, value, topIndex) {
        var result = [];
        for (var i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            var dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) {
                result.push(dataRow);
                if (topIndex != undefined) {
                    if (result.length == topIndex)
                        break;
                }
            }
        }
        return result;
    };
    TbsDataArrayTable.prototype.selectRow = function (arrayIndex, field, value) {
        var dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    };
    TbsDataArrayTable.prototype.selectRowByRowIndex = function (arrayIndex, rowIndex) { return this.data[arrayIndex][rowIndex]; };
    TbsDataArrayTable.prototype.selectRowByRowId = function (arrayIndex, rowId) {
        var dataRows = this.selectRows(arrayIndex, tbs_grid_types_1.columnAlias.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    };
    TbsDataArrayTable.prototype.selectRowIndexByRowId = function (arrayIndex, rowId) { return this.selectRowIndex(arrayIndex, tbs_grid_types_1.columnAlias.rowId, rowId); };
    TbsDataArrayTable.prototype.selectRowIndex = function (arrayIndex, field, value) {
        var result = null;
        for (var i = 0, len = this.data[arrayIndex].length; i < len; i++) {
            var dataRow = this.data[arrayIndex][i];
            if (dataRow[field] == value) {
                result = i;
                break;
            }
        }
        return result;
    };
    TbsDataArrayTable.prototype.selectRowIdByRowIndex = function (arrayIndex, rowIndex) {
        var dataRow = this.selectRowByRowIndex(arrayIndex, rowIndex);
        return dataRow[tbs_grid_types_1.columnAlias.rowId];
    };
    TbsDataArrayTable.prototype.selectRowRange = function (arrayIndex, startRowIndex, endRowIndex) {
        if (endRowIndex == undefined)
            endRowIndex = this.count() - 1;
        var result = [];
        for (var i = startRowIndex; i <= endRowIndex; i++)
            result.push(this.data[i]);
        return result;
    };
    TbsDataArrayTable.prototype.selectValue = function (arrayIndex, rowIndex, field) {
        return this.data[arrayIndex][rowIndex][field];
    };
    TbsDataArrayTable.prototype.isRow = function (arrayIndex, field, value) {
        var dataRows = this.selectRows(arrayIndex, field, value, 1);
        return dataRows.length > 0;
    };
    /**
     * Insert
     */
    TbsDataArrayTable.prototype.insertRows = function (arrayIndex, dataRows) {
        var _a;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        (_a = this.data[arrayIndex]).push.apply(_a, dataRows);
    };
    TbsDataArrayTable.prototype.insertRowsBefore = function (arrayIndex, dataRows, rowIndex) {
        var _a, _b;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length)
            (_a = this.data[arrayIndex]).splice.apply(_a, __spreadArray([rowIndex, 0], dataRows, false));
        else
            (_b = this.data[arrayIndex]).push.apply(_b, dataRows);
    };
    TbsDataArrayTable.prototype.insertRowsAfter = function (arrayIndex, dataRows, rowIndex) {
        var _a, _b;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
            });
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length)
            (_a = this.data[arrayIndex]).splice.apply(_a, __spreadArray([rowIndex + 1, 0], dataRows, false));
        else
            (_b = this.data[arrayIndex]).push.apply(_b, dataRows);
    };
    TbsDataArrayTable.prototype.insert = function (arrayIndex, dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        this.data[arrayIndex].push(dataRow);
    };
    TbsDataArrayTable.prototype.insertBefore = function (arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex, 0, dataRow);
        else
            this.data[arrayIndex].push(dataRow);
    };
    TbsDataArrayTable.prototype.insertAfter = function (arrayIndex, dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
        }
        if (this.null(this.data[arrayIndex]))
            this.data[arrayIndex] = [];
        if (rowIndex + 1 < this.data[arrayIndex].length)
            this.data[arrayIndex].splice(rowIndex + 1, 0, dataRow);
        else
            this.data[arrayIndex].push(dataRow);
    };
    /**
     * Remove
     */
    TbsDataArrayTable.prototype.remove = function (arrayIndex, rowIndex) {
        if (arguments.length == 2)
            this.data[arrayIndex].splice(rowIndex, 1);
        else if (arguments.length == 1)
            this.data[arrayIndex] = [];
        else
            this.data = [];
    };
    TbsDataArrayTable.prototype.removeByRowId = function (arryIndex, rowId) {
        var rowIndex = this.selectRowIndex(arryIndex, tbs_grid_types_1.columnAlias.rowId, rowId);
        if (this.notNull(rowIndex))
            this.remove(rowIndex);
    };
    /**
     * Update
     */
    TbsDataArrayTable.prototype.update = function (arrayIndex, columnName, field, value) {
        var dataRows = this.selectRows(arrayIndex, tbs_grid_types_1.columnAlias.name, columnName);
        dataRows.map(function (dataRow) { return dataRow[field] = value; });
    };
    TbsDataArrayTable.prototype.updateRow = function (arrayIndex, columnName, field, value) {
        var dataRows = this.selectRows(arrayIndex, tbs_grid_types_1.columnAlias.name, columnName);
        dataRows.map(function (dataRow) { return dataRow[field] = value; });
    };
    TbsDataArrayTable.prototype.updateByRowIndex = function (arrayIndex, rowIndex, name, value) {
        var dataRow = this.data[arrayIndex][rowIndex];
        dataRow[name] = value;
    };
    TbsDataArrayTable.prototype.updateByRowId = function (arrayIndex, rowId, name, value) {
        var dataRow = this.selectRowByRowId(arrayIndex, rowId);
        dataRow[name] = value;
    };
    TbsDataArrayTable.prototype.count = function (arrayIndex, field, value) {
        if (arguments.length == 3) {
            return this.selectRows(arrayIndex, field, value).length;
        }
        else if (arguments.length == 1) {
            return this.data[arrayIndex].length;
        }
        else {
            return this.data.length;
        }
    };
    TbsDataArrayTable.prototype.makeColIndex = function () {
        for (var i = 0; i < this.count(); i++) {
            var columns = this.data[i];
            columns.map(function (column, index) { return column[tbs_grid_types_1.columnAlias.colIndex] = index; });
        }
    };
    return TbsDataArrayTable;
}(tbs_base_1.TbsBase));
exports.TbsDataArrayTable = TbsDataArrayTable;


/***/ }),

/***/ 8303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsDataTable = void 0;
var tbs_base_1 = __webpack_require__(5052);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsDataTable = /** @class */ (function (_super) {
    __extends(TbsDataTable, _super);
    function TbsDataTable(tableName) {
        var _this = _super.call(this) || this;
        _this.tableName = tableName;
        _this.data = [];
        _this.currentRowId = -1;
        _this.type = 'table';
        return _this;
    }
    /**
     * select functions
     */
    TbsDataTable.prototype.select = function () {
        /**
         * whereColumns = [*{name: 'userName', type: include | startWith | lastWith }, count: 10}]
         * orderColumns = [*{name: 'userName', order: asc | desc }]
         * return : [{}, {}];
         */
    };
    TbsDataTable.prototype.selectRows = function (field, value, topIndex) {
        var result = [];
        if (arguments.length == 0) {
            result = this.data;
        }
        else {
            for (var i = 0, len = this.data.length; i < len; i++) {
                var dataRow = this.data[i];
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
    };
    TbsDataTable.prototype.selectRow = function (field, value) {
        var dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    };
    TbsDataTable.prototype.selectRowByRowIndex = function (rowIndex) { return this.data[rowIndex]; };
    TbsDataTable.prototype.selectRowByRowId = function (rowId) {
        var dataRows = this.selectRows(tbs_grid_types_1.columnAlias.rowId, rowId, 1);
        return dataRows.length > 0 ? dataRows[0] : null;
    };
    TbsDataTable.prototype.selectRowIndexByRowId = function (rowId) { return this.selectRowIndex(tbs_grid_types_1.columnAlias.rowId, rowId); };
    TbsDataTable.prototype.selectRowIndex = function (field, value) {
        var result = null;
        for (var i = 0, len = this.data.length; i < len; i++) {
            var dataRow = this.data[i];
            if (dataRow[field] == value) {
                result = i;
                break;
            }
        }
        return result;
    };
    TbsDataTable.prototype.selectRowIdByRowIndex = function (rowIndex) {
        var dataRow = this.selectRowByRowIndex(rowIndex);
        return dataRow[tbs_grid_types_1.columnAlias.rowId];
    };
    TbsDataTable.prototype.selectRowRange = function (startRowIndex, endRowIndex) {
        if (endRowIndex == undefined)
            endRowIndex = this.count() - 1;
        var result = [];
        for (var i = startRowIndex; i <= endRowIndex; i++)
            result.push(this.data[i]);
        return result;
    };
    TbsDataTable.prototype.selectValue = function (rowIndex, field) {
        return this.data[rowIndex][field];
    };
    TbsDataTable.prototype.isRow = function (field, value) {
        var dataRows = this.selectRows(field, value, 1);
        return dataRows.length > 0;
    };
    /**
     * Insert
     */
    TbsDataTable.prototype.insertRows = function (dataRows) {
        var _a;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
            });
        }
        (_a = this.data).push.apply(_a, dataRows);
    };
    TbsDataTable.prototype.insertRowsBefore = function (dataRows, rowIndex) {
        var _a, _b;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
            });
        }
        if (rowIndex < this.data.length)
            (_a = this.data).splice.apply(_a, __spreadArray([rowIndex, 0], dataRows, false));
        else
            (_b = this.data).push.apply(_b, dataRows);
    };
    TbsDataTable.prototype.insertRowsAfter = function (dataRows, rowIndex) {
        var _a, _b;
        var _this = this;
        if (this.type == 'table') {
            dataRows.map(function (dataRow) {
                _this.currentRowId += 1;
                dataRow[tbs_grid_types_1.columnAlias.rowId] = _this.currentRowId;
                dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
            });
        }
        if (rowIndex + 1 < this.data.length)
            (_a = this.data).splice.apply(_a, __spreadArray([rowIndex + 1, 0], dataRows, false));
        else
            (_b = this.data).push.apply(_b, dataRows);
    };
    TbsDataTable.prototype.insert = function (dataRow) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
        }
        this.data.push(dataRow);
    };
    TbsDataTable.prototype.insertBefore = function (dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
        }
        if (rowIndex < this.data.length)
            this.data.splice(rowIndex, 0, dataRow);
        else
            this.data.push(dataRow);
    };
    TbsDataTable.prototype.insertAfter = function (dataRow, rowIndex) {
        if (this.type == 'table') {
            this.currentRowId += 1;
            dataRow[tbs_grid_types_1.columnAlias.rowId] = this.currentRowId;
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = 'I';
        }
        if (rowIndex + 1 < this.data.length)
            this.data.splice(rowIndex + 1, 0, dataRow);
        else
            this.data.push(dataRow);
    };
    /**
     * Remove
     */
    TbsDataTable.prototype.remove = function (rowIndex) {
        if (arguments.length == 1)
            this.data.splice(rowIndex, 1);
        else
            this.data = [];
    };
    TbsDataTable.prototype.removeByRowId = function (rowId) {
        var rowIndex = this.selectRowIndex(tbs_grid_types_1.columnAlias.rowId, rowId);
        if (this.notNull(rowIndex))
            this.remove(rowIndex);
    };
    /**
     * Update
     */
    TbsDataTable.prototype.update = function (columnName, field, value) {
        var dataRows = this.selectRows(tbs_grid_types_1.columnAlias.name, columnName);
        dataRows.map(function (dataRow) { return dataRow[field] = value; });
    };
    TbsDataTable.prototype.updateRow = function (columnName, field, value) {
        var dataRows = this.selectRows(tbs_grid_types_1.columnAlias.name, columnName);
        dataRows.map(function (dataRow) { return dataRow[field] = value; });
    };
    TbsDataTable.prototype.updateByRowIndex = function (rowIndex, name, value) {
        var dataRow = this.data[rowIndex];
        dataRow[name] = value;
    };
    TbsDataTable.prototype.updateByRowId = function (rowId, name, value) {
        var dataRow = this.selectRowByRowId(rowId);
        dataRow[name] = value;
    };
    TbsDataTable.prototype.count = function (field, value) {
        if (arguments.length > 0) {
            return this.selectRows(field, value).length;
        }
        else {
            return this.data.length;
        }
    };
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
    TbsDataTable.prototype.getSum = function (columnName) {
        var result = 0;
        for (var i = 0, len = this.count(); i < len; i++) {
            var dataRow = this.data[i];
            result += isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
        }
        return result;
    };
    TbsDataTable.prototype.getAvg = function (columnName) {
        var rowCount = this.count();
        var result = rowCount == 0 ? 0 : this.getSum(columnName) / rowCount;
        return result;
    };
    TbsDataTable.prototype.getMax = function (columnName) {
        var arrayItem = [];
        var result = 0;
        for (var i = 0, len = this.count(); i < len; i++) {
            var dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.max.apply(null, arrayItem);
    };
    TbsDataTable.prototype.getMin = function (columnName) {
        var arrayItem = [];
        var result = 0;
        for (var i = 0, len = this.count(); i < len; i++) {
            var dataRow = this.data[i];
            result = isNaN(dataRow[columnName]) ? 0 : parseFloat(dataRow[columnName]);
            arrayItem.push(result);
        }
        return Math.min.apply(null, arrayItem);
    };
    return TbsDataTable;
}(tbs_base_1.TbsBase));
exports.TbsDataTable = TbsDataTable;


/***/ }),

/***/ 132:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsDatabase = void 0;
var tbs_base_1 = __webpack_require__(5052);
var tbs_data_table_1 = __webpack_require__(8303);
var tbs_data_array_table_1 = __webpack_require__(176);
var TbsDatabase = /** @class */ (function (_super) {
    __extends(TbsDatabase, _super);
    function TbsDatabase() {
        var _this = _super.call(this) || this;
        _this.tables = [];
        return _this;
    }
    TbsDatabase.prototype.createTable = function (tableName) {
        var table = new tbs_data_table_1.TbsDataTable(tableName);
        table.type = 'table';
        this.tables.push(table);
        return this.getTable(tableName);
    };
    TbsDatabase.prototype.createView = function (tableName) {
        var table = new tbs_data_table_1.TbsDataTable(tableName);
        table.type = 'view';
        this.tables.push(table);
        return this.getTable(tableName);
    };
    TbsDatabase.prototype.createArrayTable = function (tableName) {
        var table = new tbs_data_array_table_1.TbsDataArrayTable(tableName);
        table.type = 'table';
        this.tables.push(table);
        return this.getTable(tableName);
    };
    TbsDatabase.prototype.removeTable = function (tableName) {
        for (var i = 0, len = this.tables.length; i < len; i++) {
            var table = this.tables[i];
            if (table.tableName === tableName) {
                this.tables.splice(i, 1);
                break;
            }
        }
    };
    TbsDatabase.prototype.getTable = function (tableName) {
        var result = null;
        for (var i = 0, len = this.tables.length; i < len; i++) {
            var table = this.tables[i];
            if (table.tableName == tableName) {
                result = table;
                break;
            }
        }
        return result;
    };
    return TbsDatabase;
}(tbs_base_1.TbsBase));
exports.TbsDatabase = TbsDatabase;


/***/ }),

/***/ 7277:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridExcel = void 0;
var XLSX = __webpack_require__(5412);
var file_saver_1 = __webpack_require__(4213);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridExcel = /** @class */ (function () {
    function TbsGridExcel(grid) {
        this.grid = grid;
    }
    TbsGridExcel.prototype.exportExcel = function (options) {
        var grid = this.grid;
        var headerRowCount = grid.headerRowCount;
        var headerColumns = grid.header_column_table.data;
        var columns = grid.column_table.data;
        var rows = grid.getRows();
        var table = document.createElement('table');
        // table.style.border = 'solid 1px #9b9b9b';
        table.style.borderSpacing = '0px';
        var thead = document.createElement('thead');
        var tbody = document.createElement('tbody');
        /**
         * create thead
         */
        var tableRows = this.createTableHead();
        tableRows.map(function (row) { return thead.appendChild(row); });
        /**
         * create panel20
         */
        if (grid.isNull(options.showHeader, true)) {
            tableRows = this.createPanel20();
            tableRows.map(function (row) { return tbody.appendChild(row); });
        }
        /**
         * create panel40
         */
        if (grid.isNull(options.showTop, true)) {
            tableRows = this.createPanel40();
            tableRows.map(function (row) { return tbody.appendChild(row); });
        }
        /**
         * create panel30
         */
        tableRows = this.createPanel30();
        tableRows.map(function (row) { return tbody.appendChild(row); });
        /**
         * create panel50
         */
        if (grid.isNull(options.showFooter, true)) {
            tableRows = this.createPanel50();
            tableRows.map(function (row) { return tbody.appendChild(row); });
        }
        table.appendChild(thead);
        table.appendChild(tbody);
        var extensionType = options.extensionType;
        var fileName = options.fileName;
        // if (extensionType == 'csv') {
        //     const blob = new Blob([table.outerHTML], { type: 'application/vnd.ms-excel;charset=utf-8' });
        //     saveAs(blob, fileName + '.xls');
        // }
        // else
        if (extensionType == 'xls') {
            var wb = XLSX.utils.book_new();
            var worksheet = XLSX.utils.table_to_sheet(table);
            XLSX.utils.book_append_sheet(wb, worksheet, fileName);
            var wbout = XLSX.write(wb, { bookType: 'xls', type: 'binary' });
            (0, file_saver_1.saveAs)(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xls');
        }
        else if (extensionType == 'xlsx') {
            var wb = XLSX.utils.book_new();
            var worksheet = XLSX.utils.table_to_sheet(table);
            XLSX.utils.book_append_sheet(wb, worksheet, fileName);
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
            (0, file_saver_1.saveAs)(new Blob([this.s2ab(wbout)], { type: 'application/octet-stream' }), fileName + '.xlsx');
        }
    };
    TbsGridExcel.prototype.s2ab = function (s) {
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf); //create uint8array as viewer
        for (var i = 0; i < s.length; i++)
            view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;
    };
    TbsGridExcel.prototype.createTableHead = function () {
        var grid = this.grid;
        var result = [];
        var tr = document.createElement('tr');
        grid.column_table.data.map(function (column) {
            var th = document.createElement('th');
            th.style.width = (column[tbs_grid_types_1.columnAlias.visible] == true) ? column.width + 'px' : '0px';
            tr.appendChild(th);
        });
        result.push(tr);
        return result;
    };
    TbsGridExcel.prototype.createPanel20 = function () {
        var grid = this.grid;
        var result = [];
        grid.header_column_table.data.map(function (row) {
            var tr = document.createElement('tr');
            tr.style.height = grid.rowHeight + 'px';
            for (var i = 0, len = row.length; i < len; i++) {
                var column = row[i];
                var kind = column[tbs_grid_types_1.columnAlias.kind];
                if (kind == 'empty')
                    continue;
                var td = document.createElement('td');
                td.rowSpan = column[tbs_grid_types_1.columnAlias.rowSpan];
                td.colSpan = column[tbs_grid_types_1.columnAlias.colSpan];
                td.style.textAlign = column[tbs_grid_types_1.columnAlias.align];
                td.style.borderTop = 'solid 1px #9b9b9b';
                td.style.borderLeft = 'solid 1px #9b9b9b';
                td.style.borderRight = 'solid 1px #9b9b9b';
                td.style.borderBottom = 'solid 1px #9b9b9b';
                td.style.backgroundColor = '#fcf1f4';
                td.textContent = column[tbs_grid_types_1.columnAlias.text];
                tr.appendChild(td);
            }
            result.push(tr);
        });
        return result;
    };
    TbsGridExcel.prototype.createPanel30 = function () {
        var grid = this.grid;
        var result = [];
        grid.view_table.data.map(function (row) {
            var tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (var i = 0, len = grid.column_table.count(); i < len; i++) {
                var column = grid.column_table.selectRowByRowIndex(i);
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                var visible = column[tbs_grid_types_1.columnAlias.visible];
                if (visible == false)
                    continue;
                var formatValue = grid.getFormat(column, row[columnName]);
                var value = formatValue['value'];
                var text = formatValue['text'];
                var td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[tbs_grid_types_1.columnAlias.align];
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
    };
    TbsGridExcel.prototype.createPanel40 = function () {
        var grid = this.grid;
        var result = [];
        grid.top_table.data.map(function (row) {
            var tr = document.createElement('tr');
            // @ts-ignore
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (var i = 0, len = grid.column_table.count(); i < len; i++) {
                var column = grid.column_table.selectRowByRowIndex(i);
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                var visible = column[tbs_grid_types_1.columnAlias.visible];
                if (visible == false)
                    continue;
                var formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                var value = formatValue['value'];
                var text = formatValue['text'];
                if (grid.null(row[columnName])) {
                    value = '';
                    text = '';
                }
                var td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[tbs_grid_types_1.columnAlias.align];
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
    };
    TbsGridExcel.prototype.createPanel50 = function () {
        var grid = this.grid;
        var result = [];
        grid.footer_table.data.map(function (row) {
            var tr = document.createElement('tr');
            tr.style = 'height:' + grid.rowHeight + 'px';
            for (var i = 0, len = grid.column_table.count(); i < len; i++) {
                var column = grid.column_table.selectRowByRowIndex(i);
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                var visible = column[tbs_grid_types_1.columnAlias.visible];
                if (visible == false)
                    continue;
                var formatValue = grid.getFormat(column, grid.isNull(row[columnName], ''));
                var value = formatValue['value'];
                var text = formatValue['text'];
                if (grid.null(row[columnName])) {
                    value = '';
                    text = '';
                }
                var td = document.createElement('td');
                td.rowSpan = 1;
                td.colSpan = 1;
                td.style.textAlign = column[tbs_grid_types_1.columnAlias.align];
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
    };
    return TbsGridExcel;
}());
exports.TbsGridExcel = TbsGridExcel;


/***/ }),

/***/ 6875:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridCombo = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridCombo = /** @class */ (function () {
    function TbsGridCombo(grid, column, input, input_code) {
        this.colType = tbs_grid_types_1.CellType.combo;
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.input_code = input_code;
        this.create();
    }
    TbsGridCombo.prototype.create = function () {
        var selector = "#".concat(this.grid.gridId);
        var div = document.createElement('div');
        div.className = 'tbs-grid-input-combo';
        div.style.display = 'none';
        var s = '';
        s += '<div class="tbs-grid-input-combo">';
        s += '  <div class="tbs-grid-input-combo-content">';
        s += '      <table class="tbs-grid-input-combo-content-table">';
        s += '      <tr>';
        s += '          <td>';
        s += '              <select class="tbs-grid-input-combo-select" multiple>';
        //s += '                  <option class="tbs-grid-input-combo-option" value="1">1월</option>';
        s += '              </select>';
        s += '          <td>';
        s += '      </tr>';
        s += '      </table>';
        s += '  </div>';
        s += '</div>';
        document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).innerHTML = s;
        var inputPanel = document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel"));
        inputPanel.style.width = '140px';
        inputPanel.style.height = '130px';
        var inputRect = this.input.getBoundingClientRect();
        var top = inputRect.top;
        var left = inputRect.left;
        var right = inputRect.right;
        var height = inputRect.height;
        var documentRect = document.documentElement.getBoundingClientRect();
        var documentRight = documentRect.right;
        var documentBottom = documentRect.bottom;
        if (left + 140 > documentRight) {
            var el = document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel"));
            el.style.left = "".concat(right - 140, "px");
        }
        else {
            var el = document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel"));
            el.style.left = "".concat(left, "px");
        }
        if (top + height + 130 > documentBottom) {
            var el = document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel"));
            el.style.top = "".concat(top - 130, "px");
        }
        else {
            var el = document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel"));
            el.style.top = "".concat(top + height, "px");
        }
        this.setData();
        this.AddEvent();
    };
    TbsGridCombo.prototype.clear = function () {
        var selector = "#".concat(this.grid.gridId);
        if (document.querySelector("".concat(selector, " .tbs-grid-input-combo-select"))) {
            var el = document.querySelector("".concat(selector, " .tbs-grid-input-combo-select"));
            el.options.length = 0;
        }
    };
    TbsGridCombo.prototype.setData = function () {
        var selector = "#".concat(this.grid.gridId);
        var grid = this.grid;
        this.clear();
        var input_combo = document.querySelector(selector + ' .tbs-grid-input-combo-select');
        var cellIndex = this.input.dataset.columnIndex;
        var column = grid.column_table.data[cellIndex];
        var columnName = column[tbs_grid_types_1.columnAlias.name];
        var data = grid.renderer[columnName].data;
        var key = data.valueName;
        var val = data.textName;
        var value = this.input.value;
        var eCount = 0;
        input_combo.options.length = 0;
        for (var i = 0, len = data.rows.length; i < len; i++) {
            var row = data.rows[i];
            var option = document.createElement('option');
            option.value = row[key];
            option.text = row[val];
            option.classList.add('tbs-grid-input-combo-option');
            input_combo.append(option);
            eCount = 1;
        }
    };
    TbsGridCombo.prototype.AddEvent = function () {
        var _this = this;
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var input = this.input;
        var input_code = this.input_code;
        var changeEvent = function (e) {
            var combo = document.querySelector("".concat(selector, " .tbs-grid-input-combo-select"));
            input.value = combo.selectedOptions[0].text;
            input_code.value = combo.selectedOptions[0].value;
            grid.input_focus();
            _this.destroy();
        };
        document.querySelector("".concat(selector, " .tbs-grid-input-combo-select")).addEventListener('change', changeEvent);
    };
    TbsGridCombo.prototype.destroy = function () {
        var selector = "#".concat(this.grid.gridId);
        document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).innerHTML = '';
        document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.width = '0px';
        document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.left = '30000px';
    };
    return TbsGridCombo;
}());
exports.TbsGridCombo = TbsGridCombo;
;


/***/ }),

/***/ 2633:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridDate = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridDate = /** @class */ (function () {
    function TbsGridDate(grid, column, input) {
        this.colType = 'date';
        this.grid = grid;
        this.gridId = grid.gridId;
        this.column = column;
        this.input = input;
        this.create();
    }
    TbsGridDate.prototype.create = function () {
        var selector = "#".concat(this.grid.gridId);
        var grid = this.grid;
        if (this.grid.null(this.grid))
            return;
        /* culture */
        var months = grid.getConfigCalendar('months');
        var dayShortNames = grid.getConfigCalendar('dayShortNames');
        var prevLinkName = grid.getConfigCalendar('prevLinkName');
        var todayLinkName = grid.getConfigCalendar('todayLinkName');
        var nextLinkName = grid.getConfigCalendar('nextLinkName');
        var s = '';
        s += '<div class="tbs-grid-input-date">';
        s += '<div class="tbs-grid-input-date-header">';
        s += '<table class="tbs-grid-input-date-header-table" style="width:100%;">';
        s += '<tr>';
        s += '<td class="tbs-grid-input-date-prev"  onclick="' + this.grid.gridId + '.tbsGridDate.prev();" style="width:40px;">' + prevLinkName + '</td>';
        s += '<td class="tbs-grid-input-date-month" style="width:100px;">';
        s += '<select class="tbs-grid-input-date-select-month" style="width:100px;" onchange="' + this.grid.gridId + '.tbsGridDate.selectMonth(this.value);">';
        var array = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        for (var i = 0; i < 12; i++) {
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
        for (var i = 0; i < 6; i++) {
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
        document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).innerHTML = s;
        var inputRect = this.input.getBoundingClientRect();
        var top = inputRect.top;
        var left = inputRect.left;
        var right = inputRect.right;
        var height = window.scrollX + inputRect.height;
        var documentRect = document.documentElement.getBoundingClientRect();
        var documentRight = documentRect.right;
        var documentBottom = documentRect.bottom;
        if (left + 231 > documentRight) {
            document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.left = "".concat(right - 231, "px");
        }
        else {
            document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.left = "".concat(left, "px");
        }
        if (top + height + 187 > documentBottom) {
            document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.top = "".concat(top - 187, "px");
        }
        else {
            document.querySelector("".concat(selector, " .tbs-grid-input-layer-panel")).style.top = "".concat(top + height, "px");
        }
        this.setData();
        this.addEvent();
    };
    TbsGridDate.prototype.clear = function () {
        var cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        var count = cells.length;
        for (var i = 0; i < count; i++) {
            var cell = cells[i];
            cell.childNodes[0].innerHTML = '';
        }
        document.querySelector('.tbs-grid-input-date').style.display = '';
    };
    TbsGridDate.prototype.setData = function (data) {
        this.clear();
        var yearCell = document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year');
        if (this.grid.null(data))
            data = new Date();
        else {
            data = new Date(data);
        }
        var year = data.getFullYear();
        var month = data.getMonth() + 1;
        var d = new Date(year, month, 0);
        var curYear = d.getFullYear();
        var curMonth = d.getMonth() + 1;
        var curLastDay = d.getDate();
        yearCell.innerHTML = curYear;
        document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value = this.addZero(curMonth);
        d = new Date(curYear, curMonth - 1, 0);
        var prevYear = curMonth - 1 == 0 ? curYear - 1 : curYear;
        var prevMonth = curMonth - 1 == 0 ? 12 : curMonth - 1;
        var prevLastDay = d.getDate();
        var prevLastYoil = d.getDay();
        //========================================================================== prev month, prev day
        var trList = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table tr');
        var tr = trList[0];
        var count = 7;
        for (var i = 0; i < count; i++) {
            var cell = trList[1].children[i];
            if (prevLastYoil == i) {
                cell.childNodes[0].innerHTML = prevLastDay;
                cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(prevLastDay);
                break;
            }
        }
        for (var i = prevLastYoil; i >= 0; i--) {
            var cell = trList[1].children[i];
            var day = (cell.childNodes[0].innerHTML == '') ? prevLastDay - (prevLastYoil - i) : cell.childNodes[0].innerHTML;
            cell.childNodes[0].innerHTML = day;
            cell.childNodes[0].style.color = 'grey';
            cell.dataset.value = prevYear + '-' + this.addZero(prevMonth) + '-' + this.addZero(day);
        }
        var cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        count = cells.length;
        var k = 1;
        var nextMonth = 0;
        for (var i = prevLastYoil + 1; i < cells.length; i++) {
            var cell = cells[i];
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
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (cell.style.color == 'black')
                cell.style.color = 'red';
        }
        cells = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-div-end');
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            if (cell.style.color == 'black')
                cell.style.color = 'blue';
        }
    };
    TbsGridDate.prototype.getToday = function () {
        var d = new Date();
        var curYear = d.getFullYear();
        var curMonth = d.getMonth() + 1;
        var curDay = d.getDate();
        return curYear + '-' + this.addZero(curMonth) + '-' + this.addZero(curDay);
    };
    TbsGridDate.prototype.today = function () {
        var d = new Date();
        var curYear = d.getFullYear();
        var curMonth = d.getMonth() + 1;
        var curDay = d.getDate();
        var selector = '#' + this.grid;
        var grid = this.grid;
        var format = this.column[tbs_grid_types_1.columnAlias.format];
        format = format.replace('yyyy', curYear);
        format = format.replace('MM', this.addZero(curMonth));
        format = format.replace('dd', this.addZero(curDay));
        this.input.value = format;
        this.input.focus();
        this.input.select();
        this.destroy();
    };
    TbsGridDate.prototype.prev = function () {
        var currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        var currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
        var year, month;
        year = currentYear;
        month = currentMonth - 1;
        if (month < 1) {
            year -= 1;
            month = 12;
        }
        this.setData(year + '-' + month + '-01');
    };
    TbsGridDate.prototype.next = function () {
        var currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        var currentMonth = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-select-month').value);
        var year, month;
        year = currentYear;
        month = currentMonth + 1;
        if (month > 12) {
            year += 1;
            month = 1;
        }
        this.setData(year + '-' + month + '-01');
    };
    TbsGridDate.prototype.selectMonth = function (value) {
        var currentYear = parseInt(document.querySelector('.tbs-grid-input-date .tbs-grid-input-date-year').innerHTML.replace('', ''));
        var currentMonth = parseInt(value);
        var year, month;
        year = currentYear;
        month = currentMonth;
        this.setData(year + '-' + month + '-01');
    };
    TbsGridDate.prototype.addEvent = function () {
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var input = this.input;
        var gridDate = this;
        var column = this.column;
        var mouseDownEvent = function (e) {
            e.stopPropagation();
            var dateText = e.currentTarget.dataset.value;
            var yyyy = grid.substr2(dateText, 0, 4);
            var MM = grid.substr2(dateText, 5, 2);
            var dd = grid.substr2(dateText, 8, 2);
            var format = column[tbs_grid_types_1.columnAlias.format];
            format = format.replace('yyyy', yyyy);
            format = format.replace('MM', MM);
            format = format.replace('dd', dd);
            gridDate.destroy();
            input.value = format;
            input.focus();
            input.select();
        };
        var cols = document.querySelectorAll('.tbs-grid-input-date .tbs-grid-input-date-content-table td');
        [].forEach.call(cols, function (cell) {
            cell.addEventListener('mousedown', mouseDownEvent);
        });
        var changeEvent = function (e) {
            var combo = document.querySelector('.tbs-grid-datecombo-select');
            document.querySelector(selector + ' .tbs-grid-input').focus();
            document.querySelector(selector + ' .tbs-grid-input').select();
            gridDate.destroy();
        };
        //document.querySelector('.tbs-grid-input-date').addEventListener('mousedown', mousedownEvent);
    };
    TbsGridDate.prototype.addZero = function (value) {
        value = parseInt(value);
        return (value < 10 ? '0' + value.toString() : value.toString());
    };
    TbsGridDate.prototype.destroy = function () {
        var selector = '#' + this.grid.gridId;
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').style.width = '0px';
        document.querySelector(selector + ' .tbs-grid-input-layer-panel').style.left = '30000px';
    };
    return TbsGridDate;
}());
exports.TbsGridDate = TbsGridDate;


/***/ }),

/***/ 146:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPage = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPage = /** @class */ (function () {
    function TbsGridPage(grid) {
        this.grid = grid;
        this.selector = "#".concat(grid.gridId);
        this.pageIndex = 0;
        this.pageCount = 0;
        //this.pageRowCount = 0;
        this.pageTotalRowCount = 0;
    }
    TbsGridPage.prototype.setPageData2 = function () {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.grid_mode != tbs_grid_types_1.GridMode.page)
            return;
        if (grid.page_table.count() == 0)
            return;
        var pageRowCount = grid.options.pageRowCount;
        this.pageTotalRowCount = grid.page_table.count();
        this.pageCount = Math.ceil(grid.page_table.count() / pageRowCount);
        if (this.pageIndex == 0)
            this.pageIndex = 1;
        if (this.pageIndex < 1)
            this.pageIndex = 1;
        else if (this.pageIndex > this.pageCount)
            this.pageIndex = this.pageCount;
        grid.startRowIndex = (this.pageIndex - 1) * pageRowCount;
        grid.lastRowIndex = grid.startRowIndex + pageRowCount - 1;
        if (grid.lastRowIndex > grid.page_table.count() - 1)
            grid.lastRowIndex = grid.page_table.count() - 1;
        grid.view_table.remove();
        for (var i = grid.startRowIndex; i <= grid.lastRowIndex; i++) {
            var row = grid.page_table.data[i];
            grid.view_table.insert(grid.copyJson(row));
        }
    };
    TbsGridPage.prototype.setPageData = function (data, isFirst) {
        if (isFirst === void 0) { isFirst = false; }
        var selector = this.selector;
        var grid = this.grid;
        if (data == undefined)
            return;
        if (isFirst) {
            grid.source_table.remove();
            grid.view_table.remove();
            grid.page_table.remove();
            grid.data_select_panel30 = [];
            grid.data_select_panel31 = [];
            for (var i = 0, len = data.length; i < len; i++) {
                var dataRow = data[i];
                var source = {};
                var columns = grid.column_table.selectRows();
                for (var x = 0, len_1 = columns.length; x < len_1; x++) {
                    var column = columns[x];
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    source[columnName] = grid.null(dataRow[columnName]) ? null : grid.getFormatValue(column, dataRow[columnName]);
                }
                grid.source_table.insert(source);
            }
            grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
            /* Filter */
            grid.classFilter.filters();
            /* Sorting */
            grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
            /**
             * pageIndex
             */
            grid.view_table.data.map(function (dataRow) { return grid.page_table.insert(grid.copyJson(dataRow)); });
            this.setPageData2();
        }
        else {
            grid.view_table.remove();
            grid.page_table.remove();
            grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
            /* Filter */
            grid.classFilter.filters();
            /* Sorting */
            grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
            /**
             * pageIndex
             */
            grid.view_table.data.map(function (dataRow) { return grid.page_table.insert(grid.copyJson(dataRow)); });
            this.setPageData2();
        }
        /* create top_data */
        //grid.classTop.setTopData();
        /* create footer_data */
        //grid.classFooter.setFooterData();
        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();
        grid.classRange.removeRange(0, -1);
        grid.classRange.selectRange(0, 0, 0, 0);
        if (data.length == 0) {
            document.querySelector("".concat(selector, " .tbs-grid-panel21 td div")).textContent = '0';
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
        }
        else {
            document.querySelector("".concat(selector, " .tbs-grid-panel21 td div")).textContent = String(data.length);
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        var span = document.querySelector("".concat(selector, " .tbs-grid-panel99-page-select"));
        span.textContent = "".concat(this.pageIndex, " / ").concat(this.pageCount);
    };
    return TbsGridPage;
}());
exports.TbsGridPage = TbsGridPage;


/***/ }),

/***/ 3401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPagination = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPagination = /** @class */ (function () {
    function TbsGridPagination(grid) {
        this.grid = grid;
        this.selector = "#".concat(grid.gridId);
        this.pageIndex = 1;
        this.pageCount = 0;
        this.pageTotalRowCount = 0;
    }
    TbsGridPagination.prototype.setTotalRowCount = function (totalRowCount) {
        this.pageCount = Math.ceil(totalRowCount / this.grid.options.pageRowCount);
        this.pageTotalRowCount = totalRowCount;
    };
    TbsGridPagination.prototype.setPaginationData = function (data) {
        var selector = this.selector;
        var grid = this.grid;
        if (data == undefined)
            return;
        grid.source_table.remove();
        grid.view_table.remove();
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
        for (var i = 0, len = data.length; i < len; i++) {
            var dataRow = data[i];
            var source = {};
            var columns = grid.column_table.selectRows();
            for (var x = 0, len_1 = columns.length; x < len_1; x++) {
                var column = columns[x];
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                source[columnName] = grid.null(dataRow[columnName]) ? null : grid.getFormatValue(column, dataRow[columnName]);
            }
            grid.source_table.insert(source);
        }
        grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
        /* Filter */
        grid.classFilter.filters();
        /* Sorting */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        /**
         * pageIndex
         */
        grid.view_table.data.map(function (dataRow) { return grid.page_table.insert(grid.copyJson(dataRow)); });
        /* create top_data */
        //grid.classTop.setTopData();
        /* create footer_data */
        //grid.classFooter.setFooterData();
        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();
        document.querySelector("".concat(selector, " .tbs-grid-panel10-filter-input")).value = '';
        grid.classRange.removeRange(0, -1);
        grid.classRange.selectRange(0, 0, 0, 0);
        document.querySelector("".concat(selector, " .tbs-grid-panel21 td div")).textContent = String(this.pageTotalRowCount);
        grid.classPanel30.setDataPanel(0);
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    };
    return TbsGridPagination;
}());
exports.TbsGridPagination = TbsGridPagination;


/***/ }),

/***/ 6324:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanelBase = void 0;
var tbs_base_1 = __webpack_require__(5052);
var TbsGridPanelBase = /** @class */ (function (_super) {
    __extends(TbsGridPanelBase, _super);
    function TbsGridPanelBase(grid) {
        var _this = _super.call(this) || this;
        _this.grid = grid;
        _this.selector = '#' + grid.gridId;
        _this.panelName = null;
        _this.panelName1 = null;
        _this.panelName2 = null;
        _this.panelName0 = null;
        return _this;
    }
    /**
     *  Panel Interface
     */
    TbsGridPanelBase.prototype.createHtml = function (parentElement) { };
    TbsGridPanelBase.prototype.createEtcHtml = function (parentElement) {
        var s = '';
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
    };
    return TbsGridPanelBase;
}(tbs_base_1.TbsBase));
exports.TbsGridPanelBase = TbsGridPanelBase;


/***/ }),

/***/ 486:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel10 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var TbsGridPanel10 = /** @class */ (function (_super) {
    __extends(TbsGridPanel10, _super);
    function TbsGridPanel10(grid) {
        var _this = _super.call(this, grid) || this;
        _this.grid = grid;
        _this.panelName = 'panel10';
        return _this;
    }
    TbsGridPanel10.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        //super.createHtml(parentElement);
        var isShowToolbar = (grid.options['showToolbarPanel']) ? 'tbs-grid-show' : 'tbs-grid-hide';
        var s = '';
        s += '<div class="tbs-grid-panel10 ' + isShowToolbar + '">';
        s += '<div class="tbs-grid-panel10-wrap">';
        s += '<div class="tbs-grid-panel10-filter" style="display:none;">';
        s += '<input class="tbs-grid-panel10-filter-input" placeholder="Search">';
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
    };
    TbsGridPanel10.prototype.createTable = function () {
        var selector = '#' + this.grid.gridId;
        var panel = document.querySelector(selector + ' .tbs-grid-panel10');
        panel.classList.add('tbs-grid-show');
    };
    TbsGridPanel10.prototype.panel10_select = function () {
        var selector = this.selector;
        var grid = this.grid;
        /* Filter Panel */
        var showFilterPanelEvent = function (e) {
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
        var resetFilterPanelEvent = function (e) {
            e.stopPropagation();
            grid.classFilter.initFilterData();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset').addEventListener('mousedown', resetFilterPanelEvent);
        /* Sort Panel */
        var showSortPanelEvent = function (e) {
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
        var resetSortPanelEvent = function (e) {
            e.stopPropagation();
            grid.classSort.initSortData();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset').addEventListener('mousedown', resetSortPanelEvent);
        /* Group Panel */
        var showGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.options.showGroupPanel)
                grid.classGroup.hideGroupPanel();
            else
                grid.classGroup.showGroupPanel();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group').addEventListener('mousedown', showGroupPanelEvent);
        var expandGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0)
                grid.classGroup.expandGroup();
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand').addEventListener('mousedown', expandGroupPanelEvent);
        var collapseGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.collapseGroup();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse').addEventListener('mousedown', collapseGroupPanelEvent);
        var resetGroupPanelEvent = function (e) {
            e.stopPropagation();
            if (grid.group_column_table.count() > 0) {
                grid.classGroup.initGroupData();
            }
        };
        if (document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset'))
            document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset').addEventListener('mousedown', resetGroupPanelEvent);
        /* Fixled Column Panel */
        var showFixedColumnPanelEvent = function (e) {
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
    };
    TbsGridPanel10.prototype.showToolbarPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showToolbarPanel = true;
        var panel = document.querySelector("".concat(selector, " .tbs-grid-panel10"));
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    };
    TbsGridPanel10.prototype.hideToolbarPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showToolbarPanel = false;
        var panel = document.querySelector("".concat(selector, " .tbs-grid-panel10"));
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    };
    TbsGridPanel10.prototype.showToolbarButtons = function (buttonType) {
        var selector = this.selector;
        var grid = this.grid;
        if (buttonType == 'filter') {
            var button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-filter"));
            button.style.display = '';
            button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-filter-reset"));
            button.style.display = '';
        }
        else if (buttonType == 'sort') {
            var button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-sort"));
            button.style.display = '';
            button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-sort-reset"));
            button.style.display = '';
        }
        else if (buttonType == 'group') {
            var button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-group"));
            button.style.display = '';
            button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-group-expand"));
            button.style.display = '';
            button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-group-collapse"));
            button.style.display = '';
            button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-group-reset"));
            button.style.display = '';
        }
        else if (buttonType == 'fixedColumn') {
            var button = document.querySelector("".concat(selector, " .tbs-grid-panel10-buttons-fixed-column"));
            button.style.display = '';
        }
    };
    TbsGridPanel10.prototype.hideToolbarButtons = function (buttonType) {
        var selector = this.selector;
        var grid = this.grid;
        if (buttonType == 'filter') {
            var button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-filter-reset');
            button.style.display = 'none';
        }
        else if (buttonType == 'sort') {
            var button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-sort-reset');
            button.style.display = 'none';
        }
        else if (buttonType == 'group') {
            var button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-expand');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-collapse');
            button.style.display = 'none';
            button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-group-reset');
            button.style.display = 'none';
        }
        else if (buttonType == 'fixedColumn') {
            var button = document.querySelector(selector + ' .tbs-grid-panel10-buttons-fixed-column');
            button.style.display = 'none';
        }
    };
    return TbsGridPanel10;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel10 = TbsGridPanel10;


/***/ }),

/***/ 4597:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel20 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_render_panel_info_1 = __webpack_require__(3787);
var tbs_grid_table_1 = __webpack_require__(983);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel20 = /** @class */ (function (_super) {
    __extends(TbsGridPanel20, _super);
    function TbsGridPanel20(grid) {
        var _this = _super.call(this, grid) || this;
        _this.isChecked = false;
        _this.panelName = 'panel20';
        _this.panelName1 = 'panel21';
        _this.panelName2 = 'panel22';
        _this.panelName0 = 'panel20';
        return _this;
    }
    TbsGridPanel20.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
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
    };
    TbsGridPanel20.prototype.createTable = function () {
        var grid = this.grid;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.createTable('panel21', 0, grid.headerRowCount);
        classTable.createTable('panel22', 0, grid.headerRowCount);
        classTable.createTable('panel20', 0, grid.headerRowCount);
        this.setDataPanel();
    };
    TbsGridPanel20.prototype.setDataPanel = function (topRowIndex) {
        var grid = this.grid;
        this.setDataPanel1({ panelName: 'panel21' });
        this.setDataPanel2({ panelName: 'panel22' });
        this.setDataPanel0({ panelName: 'panel20' });
        grid.horizontalScroll.setScroll(grid.code_horizontal); // Necessary
    };
    TbsGridPanel20.prototype.setDataPanel1 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName1;
        /* create table thead */
        //grid.classRow.setTableHead(grid, panelName);
        /**
         * create table tbody
         */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRowIndex = 0;
        for (var i = 0; i < grid.headerRowCount; i++) {
            var tableRow = tableRows[tableRowIndex];
            // create table tr
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            for (var x = 0; x < grid.info_column_table.count(); x++) {
                var tableCell = tableRow.childNodes[x];
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, tbs_grid_types_1.columnAlias.type);
                /**
                 * Render: Start
                 */
                var tbsGridRenderInfo = new tbs_grid_render_panel_info_1.TbsGridRenderPanelInfo(grid);
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
        var pageRowCount = grid.getPageRowCount(panelName);
        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);
    };
    TbsGridPanel20.prototype.setDataPanel2 = function (param) {
        this.setDataPanelSub(this.panelName2, param);
    };
    TbsGridPanel20.prototype.setDataPanel0 = function (param) {
        this.setDataPanelSub(this.panelName0, param);
    };
    TbsGridPanel20.prototype.setDataPanelSub = function (panelName, param) {
        var selector = this.selector;
        var grid = this.grid;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tablesRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var startColumnIndex = 0;
        var lastColumnIndex = grid.column_table.count();
        if (panelName == 'panel22') {
            lastColumnIndex = grid.fixedColumnIndex + 1;
        }
        else {
            if (grid.fixedColumnIndex != -1) {
                startColumnIndex = grid.fixedColumnIndex + 1;
                for (var i = 0, rowLen = tablesRows.length; i < rowLen; i++) {
                    var tableRow = tablesRows[i];
                    tableRow.style.height = grid.headerRowHeight + 'px';
                    for (var x = 0; x <= grid.fixedColumnIndex; x++) {
                        var tableCell = tableRow.childNodes[x];
                        tableCell.style.display = 'none';
                    }
                }
            }
        }
        var orderNum = 1;
        grid.sort_column_table.data.map(function (dataRow) {
            if (grid.notEmpty(dataRow['order'])) {
                dataRow['orderNumber'] = orderNum;
                orderNum += 1;
            }
        });
        for (var i = 0, rowLen = grid.header_column_table.count(); i < rowLen; i++) {
            var tableRow = tablesRows[i];
            tableRow.style.height = grid.headerRowHeight + 'px';
            for (var x = startColumnIndex, colLen = lastColumnIndex; x < colLen; x++) {
                var column = grid.column_table.data[x];
                var header = grid.header_column_table.data[i][x];
                var tableCell = tableRow.childNodes[x];
                var selectedValue = grid.isSelectedHeaderCell(panelName, x);
                if (selectedValue == 1)
                    tableCell.classList.add('tbs-grid-cell-select');
                var columnName = header[tbs_grid_types_1.columnAlias.name];
                tableCell.style.display = (header[tbs_grid_types_1.columnAlias.visible] == true) ? '' : 'none';
                tableCell.style.textAlign = header[tbs_grid_types_1.columnAlias.align];
                tableCell.colSpan = header[tbs_grid_types_1.columnAlias.colSpan];
                tableCell.rowSpan = header[tbs_grid_types_1.columnAlias.rowSpan];
                tableCell.dataset.name = (header[tbs_grid_types_1.columnAlias.kind] == 'column') ? columnName : '';
                tableCell.dataset.kind = header[tbs_grid_types_1.columnAlias.kind];
                if (header[tbs_grid_types_1.columnAlias.kind] == 'column') {
                    var className = grid.classHeader.getHeaderProperty(columnName, tbs_grid_types_1.columnAlias.className);
                    if (grid.notNull(className))
                        tableCell.classList.add(className);
                    tableCell.style.display = (column[tbs_grid_types_1.columnAlias.visible] == true) ? '' : 'none';
                    var columnType = column[tbs_grid_types_1.columnAlias.type];
                    if (columnType == tbs_grid_types_1.CellType.checkbox) {
                        var checkbox = tableCell.querySelector('.tbs-grid-html-checkbox');
                        checkbox.style.display = '';
                    }
                    else {
                        var checkbox = tableCell.querySelector('.tbs-grid-html-checkbox');
                        checkbox.style.display = 'none';
                    }
                }
                tableCell.querySelector('.tbs-grid-html-sort').textContent = '';
                if (grid.sort_column_table.isRow(tbs_grid_types_1.columnAlias.name, columnName) && header[tbs_grid_types_1.columnAlias.kind] == 'column') {
                    var sortColumn = grid.classSort.getSortRow(columnName);
                    var sortSymbol = '';
                    var orderNumber = grid.isNull(sortColumn['orderNumber'], '');
                    if (sortColumn['order'] == 'desc')
                        sortSymbol = "\u25BC".concat(orderNumber);
                    else if (sortColumn['order'] == 'asc')
                        sortSymbol = "\u25B2".concat(orderNumber);
                    tableCell.querySelector('.tbs-grid-html-sort').textContent = sortSymbol;
                }
                var textSpan = tableCell.querySelector('.tbs-grid-html-string');
                textSpan.textContent = header[tbs_grid_types_1.columnAlias.text];
            }
        }
    };
    TbsGridPanel20.prototype.panel21_select = function () {
        var selector = this.selector;
        var grid = this.grid;
        var clsPanel = this;
        var table = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table');
        var cickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else
                return;
            var tableCell = e.target.parentNode.parentNode;
            var column = grid.info_column_table.selectRowByRowIndex(tableCell.cellIndex);
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            if (clsPanel.isChecked)
                clsPanel.isChecked = false;
            else
                clsPanel.isChecked = true;
            var callback = grid.getInfoRenderer(columnName, 'callback');
            for (var i = 0, len = grid.view_table.count(); i < len; i++) {
                var dataRow = grid.view_table.selectRowByRowIndex(i);
                if (callback) {
                    var eventRow = {};
                    eventRow.rowIndex = i;
                    eventRow.columnIndex = tableCell.cellIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = dataRow[tbs_grid_types_1.columnAlias.isChecked];
                    eventRow.text = dataRow[tbs_grid_types_1.columnAlias.isChecked];
                    eventRow.data = dataRow;
                    var result = callback(grid, eventRow);
                    if (result.editable == false)
                        continue;
                    else
                        grid.view_table.data[i][tbs_grid_types_1.columnAlias.isChecked] = clsPanel.isChecked;
                }
                else {
                    grid.view_table.data[i][tbs_grid_types_1.columnAlias.isChecked] = clsPanel.isChecked;
                }
            }
            setTimeout(function () {
                grid.classPanel20.setDataPanel();
                grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            }, 20);
        };
        var mouseDownEvent = function (e) {
            document.addEventListener('mouseup', mouseUpEvent);
        };
        var mouseUpEvent = function (e) {
            var targetName;
            if (e.target.classList.contains('tbs-grid-cell')) {
                targetName = 'cell';
            }
            else if (e.target.classList.contains('tbs-grid-cell-div')) {
                targetName = 'cell';
            }
            else
                return;
            if (targetName == 'cell') {
                var col = e.target.closest('.tbs-grid-cell');
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
        var eventPanel = document.querySelector(selector + ' .tbs-grid-panel21');
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', cickEvent);
    };
    TbsGridPanel20.prototype.panel20_select = function (panelName) {
        var selector = this.selector;
        var grid = this.grid;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var moveCell;
        var moveCellLeft;
        var moveCellTop;
        var moveCellIndex;
        var moveCellRowIndex;
        var table = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table');
        var eventPanel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        var mouseDownEvent = function (e) {
            var col = e.target.closest('.tbs-grid-cell');
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
        var mouseMoveEvent = function (e) {
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
        var mouseUpEvent = function (e) {
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            var isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
            var isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);
            if (isInPanel80) {
                // grouping panel
                if (grid.options.showGroupPanel == true && document.querySelectorAll(' .tbs-grid-move').length > 0) {
                    var moveElement = document.querySelector('.tbs-grid-move');
                    var rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                    var rectMoveCell = moveElement.getBoundingClientRect();
                    var columnIndex = moveElement.dataset.columnIndex;
                    var rowIndex = moveElement.dataset.rowIndex;
                    var column = grid.getColumnByIndex(columnIndex);
                    var name_1 = column[tbs_grid_types_1.columnAlias.name];
                    var text = column[tbs_grid_types_1.columnAlias.text];
                    var order = 'asc';
                    // Find the one that is smaller to the button left than then move element left
                    var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                    var targetButton = void 0;
                    var targetIndex = void 0;
                    for (var i = 0, len = buttons.length; i < len; i++) {
                        var button = buttons[i];
                        var buttonLeft = button.getBoundingClientRect().left;
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
                    grid.classGroup.addGroupButton(name_1, text, order, targetIndex);
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
                    var moveElement = document.querySelector('.tbs-grid-move');
                    var rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                    var rectMoveCell = moveElement.getBoundingClientRect();
                    var columnIndex = moveElement.dataset.columnIndex;
                    var rowIndex = moveElement.dataset.rowIndex;
                    var column = grid.getColumnByIndex(columnIndex);
                    var name_2 = column[tbs_grid_types_1.columnAlias.name];
                    var text = column[tbs_grid_types_1.columnAlias.text];
                    var order = 'asc';
                    // Find the one that is smaller to the button left than then move element left
                    var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                    var targetButton = void 0;
                    var targetIndex = void 0;
                    var moveLeft = grid.getOffset(moveElement).left;
                    for (var i = buttons.length + 1; i >= 0; i--) {
                        var button = buttons[i];
                        var buttonLeft = grid.getOffset(button).left;
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
                    if (name_2 != 'group_column')
                        grid.classSort.addSortButton(name_2, text, order, targetIndex);
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
                var tableCell = void 0;
                if (e.target.classList.contains('tbs-grid-html-checkbox')) {
                    tableCell = e.target.parentNode.parentNode;
                    var column = grid.column_table.selectRowByRowIndex(tableCell.cellIndex);
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    // let isChecked = column[columnAlias.isChecked] ? true : false;
                    // if (isChecked) grid.column_table.update(columnName, columnAlias.isChecked, false);
                    // else grid.column_table.update(columnName, columnAlias.isChecked, true);
                    var isChecked = false;
                    if (e.target.checked)
                        isChecked = false;
                    else
                        isChecked = true;
                    var newValue = isChecked ? grid.getTrueValue(columnName) : grid.getFalseValue(columnName);
                    // exclude : disabled checkbox
                    var callback = grid.getRenderer(columnName, 'callback');
                    for (var i = 0, len = grid.view_table.count(); i < len; i++) {
                        var dataRow = grid.view_table.selectRowByRowIndex(i);
                        if (callback) {
                            var eventRow = {};
                            eventRow.rowIndex = i;
                            eventRow.columnIndex = tableCell.cellIndex;
                            eventRow.columnName = columnName;
                            eventRow.value = dataRow[tbs_grid_types_1.columnAlias.name];
                            eventRow.text = dataRow[tbs_grid_types_1.columnAlias.name];
                            eventRow.data = dataRow;
                            var result = callback(grid, eventRow);
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
                    var element = e.target.closest('.tbs-grid-cell');
                    var name_3 = element.dataset.name;
                    if (e.detail == 1) {
                        if (grid.isColumnName(name_3))
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
                        var isInPanel21 = grid.isInPanel(e, 'panel21', lastX, lastY);
                        var isInPanel22 = grid.isInPanel(e, 'panel22', lastX, lastY);
                        /* Set panel */
                        var tdList20 = null;
                        if (isInPanel21 || isInPanel22)
                            tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel22 tbody td:not([style*="display :none"]');
                        else
                            tdList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 tbody td:not([style*="display :none"]');
                        var headerColumns = grid.header_column_table.data;
                        var movingColumn = headerColumns[moveCellRowIndex - 1][moveCellIndex];
                        var targetColumn = void 0;
                        var fixedWidth = 50;
                        for (var x = 0, len = tdList20.length; x < len; x++) {
                            var cell = tdList20[x];
                            targetColumn = grid.header_column_table.data[cell.parentNode.rowIndex - 1][cell.cellIndex];
                            if (lastX - startX > 0) { // right direction move.
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                    && movingColumn[tbs_grid_types_1.columnAlias.rowIndex] == targetColumn[tbs_grid_types_1.columnAlias.rowIndex]
                                    && movingColumn[tbs_grid_types_1.columnAlias.parentNum] == targetColumn[tbs_grid_types_1.columnAlias.parentNum]
                                    && moveCell.cellIndex != cell.cellIndex) {
                                    grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                    break;
                                }
                            }
                            else {
                                if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                    && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                    && movingColumn[tbs_grid_types_1.columnAlias.rowIndex] == targetColumn[tbs_grid_types_1.columnAlias.rowIndex]
                                    && movingColumn[tbs_grid_types_1.columnAlias.parentNum] == targetColumn[tbs_grid_types_1.columnAlias.parentNum]
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
                            var rectMoveCell = document.querySelector('.tbs-grid-move').getBoundingClientRect();
                            var movingColumn = grid.header_column_table.data[moveCellRowIndex - 1][moveCellIndex];
                            var tdList20 = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody td:not([style*="display :none"]');
                            var fixedWidth = 50;
                            var targetColumn = void 0;
                            for (var x = 0, len = tdList20.length; x < len; x++) {
                                var cell = tdList20[x];
                                targetColumn = grid.header_column_table.data[cell.parentNode.rowIndex - 1][cell.cellIndex];
                                if (lastX - startX > 0) { // right direction move.
                                    if ((lastX - fixedWidth <= cell.getBoundingClientRect().right
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().right)
                                        && movingColumn[tbs_grid_types_1.columnAlias.rowIndex] == targetColumn[tbs_grid_types_1.columnAlias.rowIndex]
                                        && movingColumn[tbs_grid_types_1.columnAlias.parentNum] == targetColumn[tbs_grid_types_1.columnAlias.parentNum]
                                        && moveCell.cellIndex != cell.cellIndex) {
                                        grid.classColumn.changeColumnOrder(movingColumn, targetColumn, 'after');
                                        break;
                                    }
                                }
                                else {
                                    if ((lastX - fixedWidth <= cell.getBoundingClientRect().left
                                        && lastX + fixedWidth >= cell.getBoundingClientRect().left)
                                        && movingColumn[tbs_grid_types_1.columnAlias.rowIndex] == targetColumn[tbs_grid_types_1.columnAlias.rowIndex]
                                        && movingColumn[tbs_grid_types_1.columnAlias.parentNum] == targetColumn[tbs_grid_types_1.columnAlias.parentNum] //column_parentNum
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
        var selectCell = function (e, table) {
            if (e.target.classList.contains('tbs-grid-html-checkbox'))
                return;
            var col = e.target.closest('.tbs-grid-cell');
            var column = grid.getColumnByIndex(col.cellIndex);
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            var isMovable = grid.isMovableColumn(columnName);
            if (isMovable) {
                var moveDiv = void 0;
                if (document.querySelectorAll('.tbs-grid-move').length == 0) {
                    moveDiv = document.createElement('div');
                    moveDiv.classList.add('tbs-grid-move');
                    var table_1 = document.createElement('table');
                    table_1.classList.add('tbs-grid-table');
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    td.classList.add('tbs-grid-cell');
                    var div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');
                    var span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    div.appendChild(span);
                    td.appendChild(div);
                    tr.appendChild(td);
                    table_1.appendChild(tr);
                    moveDiv.appendChild(table_1);
                    document.body.appendChild(moveDiv);
                }
                moveDiv = document.querySelector('.tbs-grid-move');
                moveDiv.style.display = 'none';
                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-html-string').innerText;
                moveDiv = document.querySelector('.tbs-grid-move');
                var colRect = col.getBoundingClientRect();
                moveCell = col;
                moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
                moveCellIndex = col.cellIndex;
                moveCellRowIndex = col.parentNode.rowIndex;
                var nWidth = (colRect.width + 2) + 'px';
                var nHeight = colRect.height + 'px';
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
        var selectCellMove = function (e, table) {
            var col = e.target.closest('.tbs-grid-cell');
            flagLeft = false;
            flagRight = false;
            startX = grid.startX;
            startY = grid.startY;
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            //console.log(col);
            //console.log(`selectCellMove ${startX} == ${lastX} ${startY} == ${lastY}`);
            var moveY = lastY - startY;
            var moveX = lastX - startX;
            // let column = grid.getColumnByIndex(col.cellIndex);
            // let columnName = column[columnAlias.name];
            var isMovable = grid.isMovableColumn();
            if (isMovable) {
                var moveDiv = document.querySelector('.tbs-grid-move');
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
            var rect = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
            var rectLeft = window.pageXOffset + rect.left;
            var rectRight = window.pageXOffset + rect.right;
            var rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
            rectRight = window.pageXOffset + rect30.right;
            var type = '';
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
        var selectCellShift = function (e, table) { };
        var select = function (startCellIndex, moveX, moveY, lastX, lastY) {
            var tableRect = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect();
            var top = window.pageYOffset + tableRect.top;
            var bottom = window.pageYOffset + tableRect.bottom;
            var sumRect = document.querySelector(selector + ' .tbs-grid-' + panelName).getBoundingClientRect();
            var right = window.pageXOffset + sumRect.right;
            var left = window.pageXOffset + sumRect.left;
            //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
            //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
            //==================================================================
            var arr = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table td:not([data-name=""])');
            var tdList = Array.from(arr).sort(function (a, b) {
                a = a.cellIndex;
                b = b.cellIndex;
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                var maxCellIndex = void 0;
                for (var x = 0, len = tdList.length; x < len; x++) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var left_1 = window.pageXOffset + cell.getBoundingClientRect().left;
                    if (lastX > left_1)
                        maxCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
            if (moveX < 0) {
                var minCellIndex = void 0;
                for (var x = tdList.length - 1; x >= 0; x--) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var right_1 = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right_1)
                        minCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
        };
        var selectRefresh = function (type, lastX, lastY) {
            var content = document.querySelector(selector + ' .tbs-grid-panel30');
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            var startRowIndex = grid.startRowIndex;
            var lastRowIndex = grid.lastRowIndex;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var trCount = trContent.length;
            var tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
            var minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
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
        var doInterval = function (type, lastX, lastY) {
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
    };
    return TbsGridPanel20;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel20 = TbsGridPanel20;


/***/ }),

/***/ 6612:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel30 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_render_panel30_1 = __webpack_require__(7858);
var tbs_grid_render_panel_info_1 = __webpack_require__(3787);
var tbs_grid_table_1 = __webpack_require__(983);
var tbs_grid_types_1 = __webpack_require__(2978);
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
var TbsGridPanel30 = /** @class */ (function (_super) {
    __extends(TbsGridPanel30, _super);
    function TbsGridPanel30(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel30';
        _this.panelName1 = 'panel31';
        _this.panelName2 = 'panel32';
        _this.panelName0 = 'panel30';
        return _this;
    }
    TbsGridPanel30.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
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
    };
    TbsGridPanel30.prototype.createTable = function () {
        var grid = this.grid;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.createTable('panel31', 0, grid.pageRowCount);
        classTable.createTable('panel32', 0, grid.pageRowCount);
        classTable.createTable('panel30', 0, grid.pageRowCount);
    };
    TbsGridPanel30.prototype.updateTableRows = function () {
        var selector = this.selector;
        var grid = this.grid;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
        var addRowCount = grid.pageRowCount - tableRows.length;
        if (addRowCount == 0)
            return;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.updateTableRows('panel31', addRowCount);
        classTable.updateTableRows('panel32', addRowCount);
        classTable.updateTableRows('panel30', addRowCount);
    };
    TbsGridPanel30.prototype.setDataPanel = function (topRowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var tableRows = document.querySelectorAll("".concat(selector, " .tbs-grid-panel30 tbody tr"));
        if (tableRows.length == 0) {
            grid.classPanel30.createTable();
        }
        else {
            if (tableRows.length < grid.pageRowCount)
                grid.classPanel30.updateTableRows();
        }
        grid.classRange.removePanelRange('panel30');
        this.setDataPanel1({ panelName: 'panel31', topRowIndex: topRowIndex });
        this.setDataPanel2({ panelName: 'panel30', topRowIndex: topRowIndex });
        this.setDataPanel0({ panelName: 'panel32', topRowIndex: topRowIndex });
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.displaySelectedLine();
    };
    TbsGridPanel30.prototype.setDataPanel1 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName1;
        var topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        var bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = 0;
        var lastColumnIndex = grid.info_column_table.count() - 1;
        /* create table thead */
        //grid.classRow.setTableHead(grid, panelName);
        /* create table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRowIndex = 0;
        for (var i = topRowIndex; i < bottomRowIndex + 1; i++) {
            var tableRow = tableRows[tableRowIndex];
            /* create table tr */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            for (var x = 0; x < grid.info_column_table.count(); x++) {
                var tableCell = tableRow.childNodes[x];
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.displayRowIndex = i;
                tableCell.dataset.cellType = grid.info_column_table.selectValue(x, tbs_grid_types_1.columnAlias.type);
                /* Render: Start */
                var tbsGridRenderInfo = new tbs_grid_render_panel_info_1.TbsGridRenderPanelInfo(grid);
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
        var pageRowCount = grid.getPageRowCount(panelName);
        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);
    };
    TbsGridPanel30.prototype.setDataPanel2 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.fixedColumnIndex == -1)
            return;
        var panelName = this.panelName2;
        var topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        var bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn(panelName);
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRowIndex = 0;
        for (var i = topRowIndex; i < bottomRowIndex + 1; i++) {
            var tableRow = tableRows[tableRowIndex];
            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            for (var x = 0; x <= lastColumnIndex; x++) {
                var tableCell = tableRow.childNodes[x];
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
                if (x <= grid.fixedColumnIndex)
                    tableCell = tableRow.childNodes[x];
                /* Render: Start */
                var tbsGridRender = new tbs_grid_render_panel30_1.TbsGridRenderPanel30(grid);
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
        // // panel32 : display rowCount
        // if (param.panelName == 'panel32') {
        //     let rowCount = grid.getRowCount();
        //     if (grid.grid_mode == GridMode.page) rowCount = grid.page_table.count();
        //     document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = rowCount;
        // }
    };
    TbsGridPanel30.prototype.setDataPanel0 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName0;
        var topRowIndex = grid.getTopRowIndex(panelName, param.topRowIndex);
        var bottomRowIndex = grid.getBottomRowIndex(panelName, topRowIndex);
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* create table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* create table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRowIndex = 0;
        for (var i = topRowIndex; i < bottomRowIndex + 1; i++) {
            var tableRow = tableRows[tableRowIndex];
            /* create table tr */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            for (var x = 0; x <= lastColumnIndex; x++) {
                var tableCell = tableRow.childNodes[x];
                tableCell.dataset.rowIndex = i;
                tableCell.dataset.columnIndex = x;
                tableCell.dataset.name = grid.column_table.data[x].name;
                tableCell.childNodes[0].dataset.rowIndex = i;
                tableCell.childNodes[0].dataset.columnIndex = x;
                tableCell.childNodes[0].dataset.name = grid.column_table.data[x].name;
                if (grid.fixedColumnIndex != -1 && x <= grid.fixedColumnIndex)
                    continue;
                /* Render: Start */
                var tbsGridRender = new tbs_grid_render_panel30_1.TbsGridRenderPanel30(grid);
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
        var pageRowCount = grid.getPageRowCount(panelName);
        /* remove table tr */
        grid.classRow.hideTableRows(grid, panelName, tableRows, tableRowIndex, pageRowCount);
        // panel30 : display rowCount
        if (panelName == 'panel30') {
            var rowCount = void 0;
            if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
                rowCount = grid.page_table.count();
            else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
                rowCount = grid.classPagination.pageTotalRowCount;
            else
                rowCount = grid.getRowCount();
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = String(rowCount);
        }
    };
    TbsGridPanel30.prototype.panel30_select = function (eventPanelName) {
        var selector = this.selector;
        var grid = this.grid;
        var targetName;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else if (e.target.classList.contains('tbs-grid-html-button')) { }
            else if (e.target.classList.contains('tbs-grid-html-link')) { }
            else
                return;
            var rowIndex = e.target.parentNode.dataset.rowIndex;
            var columnIndex = e.target.parentNode.dataset.columnIndex;
            var columnName = e.target.parentNode.dataset.name;
            var columnType = grid.column_table.selectValue(columnIndex, tbs_grid_types_1.columnAlias.type);
            var value = grid.view_table.selectValue(rowIndex, columnName);
            if (columnType == tbs_grid_types_1.CellType.checkbox) {
                if (grid.notEmpty(grid.onClickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                    var eventRow = {};
                    var dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    var result = grid.onClickCheckbox(grid, eventRow);
                    if (result) {
                        var newValue = grid.reverseBoolean(value);
                        grid.setValue(rowIndex, columnName, newValue);
                    }
                }
                else {
                    var newValue = grid.reverseBoolean(value);
                    grid.setValue(rowIndex, columnName, newValue);
                }
                setTimeout(function () { return grid.classPanel30.setDataPanel(grid.getFirstRowIndex()); }, 20);
            }
            else if (columnType == tbs_grid_types_1.CellType.button) {
                e.preventDefault();
                if (grid.notEmpty(grid.onClickButton) && e.target.disabled != 'disabled') {
                    var eventRow = {};
                    var dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    grid.onClickButton(grid, eventRow);
                }
            }
            else if (columnType == tbs_grid_types_1.CellType.link) {
                if (grid.notEmpty(grid.onClickLink)) {
                    var eventRow = {};
                    var dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                    eventRow.rowIndex = rowIndex;
                    eventRow.columnIndex = columnIndex;
                    eventRow.columnName = columnName;
                    eventRow.value = value;
                    eventRow.text = value;
                    eventRow.data = dataRows;
                    var result = grid.onClickLink(grid, eventRow);
                    if (!result) {
                        e.preventDefault();
                    }
                }
            }
        };
        var mouseDownEvent = function (e) {
            //if (e.detail == 1) console.log(`click ${e.detail}`);
            //if (e.detail == 2) console.log(`doubleclick ${e.detail}`);
            startX = grid.startX = window.pageXOffset + e.clientX;
            startY = grid.startY = window.pageYOffset + e.clientY;
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
            //console.log(`e.target.className ${e.target.className}`);
            var tableCell;
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
                        if (grid.grid_mode == tbs_grid_types_1.GridMode.tree) {
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
        var mouseMoveEvent = function (e) {
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseMoveEvent : lastX ${lastX} : lastY ${lastY}`)
            e.preventDefault();
            e.stopPropagation();
            //if (grid.option_selectOne == true) return;
            if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell')
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
        var mouseUpEvent = function (e) {
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
            var isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                //======================================================================================================
                // if (e.target.classList.contains('tbs-grid-html-checkbox')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.onClickCheckbox) && grid.isEditableColumn(columnName) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.onClickCheckbox(grid, eventRow);
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
                //     if (grid.notEmpty(grid.onClickButton) && e.target.disabled != 'disabled') {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         grid.onClickButton(grid, eventRow);
                //     }
                // }
                // else if (e.target.classList.contains('tbs-grid-html-link')) {
                //     let rowIndex = e.target.parentNode.dataset.rowIndex;
                //     let columnIndex = e.target.parentNode.dataset.columnIndex;
                //     let columnName = e.target.parentNode.dataset.name;
                //     let columnType = grid.column_table.selectValue(columnIndex, columnAlias.type);
                //     let value = grid.view_table.selectValue(rowIndex, columnName);
                //
                //     if (grid.notEmpty(grid.onClickLink)) {
                //         const eventRow = {};
                //         const dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                //         eventRow.rowIndex = rowIndex;
                //         eventRow.columnIndex = columnIndex;
                //         eventRow.columnName = columnName;
                //         eventRow.value = value;
                //         eventRow.text = value;
                //         eventRow.data = dataRows;
                //         let result = grid.onClickLink(grid, eventRow);
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
                    var param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1) {
                        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
                        if (panelInput.style.left != '30000px') {
                            grid.editEnd();
                            grid.input_focus();
                        }
                        else
                            grid.tbs_executeEvent(true, 'onClick', param);
                    }
                    else if (e.detail == 2) {
                        var isEditable = grid.column_table.data[startCellIndex][tbs_grid_types_1.columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.onEdit)) {
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'onDblclick', param);
                    }
                }
                //}
            }
        };
        var selectCell = function (e) {
            var tableCell;
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
                var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (var i = 0, len = tableRows.length; i < len; i++) {
                    var tableRow = tableRows[i];
                    var rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
            grid.classRange.removeRange(0, -1);
            var _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        };
        var selectCellMove = function (e) {
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
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                if (eventPanelName == 'panel32') {
                    var panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
                    var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                    var rect32 = panel32.getBoundingClientRect();
                    var rect30 = panel30.getBoundingClientRect(); //absolute > relative position.
                    var panelTop = rect32.top;
                    var panelBottom = rect32.top + rect32.height;
                    var panelLeft = rect32.left;
                    var panelRight32 = rect30.left;
                    var panelRight = rect30.left + rect30.width;
                    // Outside the area
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    // if (lastX < panelRight32 && document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left != '0px') {
                    //     flagLeft = true;
                    //     doInterval(Direction.left);
                    // }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                    select(moveX, moveY);
                }
                else {
                    var panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
                    var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                    var rect32 = panel32.getBoundingClientRect();
                    var rect30 = panel30.getBoundingClientRect();
                    var panelTop = rect30.top;
                    var panelBottom = rect30.top + rect30.height;
                    var panelLeft = rect30.left;
                    var panelRight = rect30.left + rect30.width;
                    // Outside the area
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                    select(moveX, moveY);
                }
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var selectCellCtrl = function (e) { };
        var selectCellCtrlMove = function (e) { };
        var selectCellShift = function (e) {
            var tableCell;
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
                var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (var i = 0, len = tableRows.length; i < len; i++) {
                    var tableRow = tableRows[i];
                    var rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            grid.classRange.removeRange(0, -1);
            var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        };
        var selectCellShiftMove = function (e) {
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
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var select = function (moveX, moveY) {
            if (moveY > 0 && moveX > 0) { //down, right
                var maxRowIndex = void 0, maxCellIndex = void 0;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                var maxRowIndex = void 0, minCellIndex = void 0;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 2) $maxRowIndex  ${maxRowIndex} minCellIndex ${minCellIndex}`);
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX > 0) { //up, right
                var minRowIndex = void 0, maxCellIndex = void 0;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName}  3) minRowIndex ${minRowIndex} maxCellIndex ${maxCellIndex}`);
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX < 0) { //up, left
                var minRowIndex = void 0, minCellIndex = void 0;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 4)  minRowIndex ${minRowIndex} minCellIndex ${minCellIndex}`);
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
        };
        var setPanelMove = function (type) {
            // panel outside area
            var startRowIndex = grid.startRowIndex;
            var lastRowIndex = grid.lastRowIndex;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            var tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, -1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    minCellIndex = grid.tbs_getMinCellIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'down') {
                grid.classScroll.setBarPositionByDirection('down');
                if (lastRowIndex < (grid.view_table.count() - 1)) {
                    lastRowIndex += 1;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');
                if (lastRowIndex != 0) {
                    var minRowIndex_1 = lastRowIndex;
                    minRowIndex_1 = grid.tbs_getMinRowIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex_1, startCellIndex, lastCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagUp = false;
            }
        };
        var doInterval = function (type) {
            if (type == tbs_grid_types_1.Direction.left || type == tbs_grid_types_1.Direction.right) {
                if (flagLeft) {
                    //flagLeft  = false;
                    flagRight = false;
                    setTimeout(function () { return doInterval('left'); }, 15);
                    setPanelMove('left');
                }
                if (flagRight) {
                    flagLeft = false;
                    //flagRight = false;
                    setTimeout(function () { return doInterval('right'); }, 15);
                    setPanelMove('right');
                }
            }
            else {
                if (flagUp) {
                    //flagUp    = false;
                    flagDown = false;
                    setTimeout(function () { return doInterval('up'); }, 15);
                    setPanelMove('up');
                }
                if (flagDown) {
                    flagUp = false;
                    //flagDown  = false;
                    setTimeout(function () { return doInterval('down'); }, 15);
                    setPanelMove('down');
                }
            }
        };
        var eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', mouseClickEvent);
    };
    TbsGridPanel30.prototype.panel31_select = function (eventPanelName) {
        var selector = this.selector;
        var grid = this.grid;
        var targetName;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        var mouseClickEvent = function (e) {
            if (e.target.classList.contains('tbs-grid-html-checkbox')) { }
            else
                return;
            var tableCell = e.target.parentNode.parentNode;
            var rowIndex = tableCell.dataset.rowIndex;
            var columnIndex = tableCell.cellIndex;
            var columnName = e.target.parentNode.dataset.name;
            var value = grid.view_table.data[rowIndex][tbs_grid_types_1.columnAlias.isChecked];
            // @ts-ignore
            if (grid.notEmpty(grid.onClickInfoCheckBox) && e.target.disabled != 'disabled') {
                var eventRow = {};
                var dataRows = grid.view_table.selectRowByRowIndex(rowIndex);
                eventRow.rowIndex = rowIndex;
                eventRow.columnIndex = columnIndex;
                eventRow.columnName = columnName;
                eventRow.value = grid.isNull(value, false);
                eventRow.text = grid.isNull(value, false);
                eventRow.data = dataRows;
                // @ts-ignore
                var result = grid.onClickInfoCheckBox(grid, eventRow);
                if (result) {
                    grid.view_table.data[rowIndex][tbs_grid_types_1.columnAlias.isChecked] = grid.isNull(value, false) ? false : true;
                }
            }
            else {
                grid.view_table.data[rowIndex][tbs_grid_types_1.columnAlias.isChecked] = grid.isNull(value, false) ? false : true;
            }
            setTimeout(function () { return grid.classPanel30.setDataPanel(grid.getFirstRowIndex()); }, 20);
        };
        var mouseDownEvent = function (e) {
            //if (e.detail == 1) console.log(`click ${e.detail}`);
            //if (e.detail == 2) console.log(`doubleclick ${e.detail}`);
            startX = grid.startX = window.pageXOffset + e.clientX;
            startY = grid.startY = window.pageYOffset + e.clientY;
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
            //console.log(`e.target.className ${e.target.className}`);
            var tableCell;
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
        var mouseMoveEvent = function (e) {
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseMoveEvent : lastX ${lastX} : lastY ${lastY}`)
            e.preventDefault();
            e.stopPropagation();
            //if (grid.option_selectOne == true) return;
            if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell')
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
        var mouseUpEvent = function (e) {
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
            var isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                    var param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1)
                        grid.tbs_executeEvent(true, 'onClick', param);
                    else if (e.detail == 2) {
                        var isEditable = grid.column_table.data[startCellIndex][tbs_grid_types_1.columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.onEdit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'onDblclick', param);
                    }
                }
            }
        };
        var selectCell = function (e) {
            var tableCell;
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
                var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (var i = 0, len = tableRows.length; i < len; i++) {
                    var tableRow = tableRows[i];
                    var rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            //console.log(`startRowIndex ${startRowIndex} startRowIndex ${startRowIndex} startCellIndex  ${startCellIndex} lastCellIndex ${lastCellIndex}`)
            var fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            var toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            grid.classRange.removeRange(0, -1);
            var _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        };
        var selectCellMove = function (e) {
            flagUp = false;
            flagDown = false;
            flagLeft = false;
            flagRight = false;
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var selectCellCtrl = function (e) { };
        var selectCellCtrlMove = function (e) { };
        var selectCellShift = function (e) {
            var tableCell;
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
                var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
                for (var i = 0, len = tableRows.length; i < len; i++) {
                    var tableRow = tableRows[i];
                    var rect = tableRow.childNodes[0].getBoundingClientRect();
                    if ((window.pageYOffset + rect.top) < startY && startY < (window.pageYOffset + rect.bottom)) {
                        startRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        lastRowIndex = parseInt(tableRow.childNodes[0].childNodes[0].textContent) - 1;
                        break;
                    }
                }
            }
            var fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            var toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            grid.classRange.removeRange(0, -1);
            var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
            grid.classPanel30.setDataPanel(_topRowIndex);
        };
        var selectCellShiftMove = function (e) {
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
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var select = function (moveX, moveY) {
            var fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            var toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            if (moveY > 0 && moveX > 0) { //down, right
                var maxRowIndex = void 0, maxCellIndex = void 0;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY > 0 && moveX < 0) { //down, left
                var maxRowIndex = void 0, minCellIndex = void 0;
                maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, maxRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX > 0) { //up, right
                var minRowIndex = void 0, maxCellIndex = void 0;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            if (moveY < 0 && moveX < 0) { //up, left
                var minRowIndex = void 0, minCellIndex = void 0;
                minRowIndex = grid.tbs_getMinRowIndexByMouseMove();
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex, fromCellIndex, toCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
        };
        var setPanelMove = function (type) {
            // panel outside area
            var startRowIndex = grid.startRowIndex;
            var lastRowIndex = grid.lastRowIndex;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var fromCellIndex = grid.classColumn.getFirstVisibleColumnIndex();
            var toCellIndex = grid.classColumn.getLastVisibleColumnIndex();
            var minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            var tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else if (type == 'down') {
                grid.classScroll.setBarPositionByDirection('down');
                if (lastRowIndex < (grid.view_table.count() - 1)) {
                    lastRowIndex += 1;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagDown = false;
            }
            else if (type == 'up') {
                grid.classScroll.setBarPositionByDirection('up');
                if (lastRowIndex != 0) {
                    var minRowIndex_2 = lastRowIndex;
                    minRowIndex_2 = grid.tbs_getMinRowIndexByMouseMove();
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, minRowIndex_2, fromCellIndex, toCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else
                    flagUp = false;
            }
        };
        var doInterval = function (type) {
            if (flagLeft) {
                flagUp = false;
                flagDown = false;
                //flagLeft  = false;
                flagRight = false;
                setTimeout(function () { return doInterval('left'); }, 15);
                setPanelMove('left');
            }
            if (flagRight) {
                flagUp = false;
                flagDown = false;
                flagLeft = false;
                //flagRight = false;
                setTimeout(function () { return doInterval('right'); }, 15);
                setPanelMove('right');
            }
            if (flagUp) {
                //flagUp    = false;
                flagDown = false;
                flagLeft = false;
                flagRight = false;
                setTimeout(function () { return doInterval('up'); }, 5);
                setPanelMove('up');
            }
            if (flagDown) {
                flagUp = false;
                //flagDown  = false;
                flagLeft = false;
                flagRight = false;
                setTimeout(function () { return doInterval('down'); }, 5);
                setPanelMove('down');
            }
        };
        eventPanel.addEventListener('mousedown', mouseDownEvent);
        eventPanel.addEventListener('click', mouseClickEvent);
    };
    return TbsGridPanel30;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel30 = TbsGridPanel30;


/***/ }),

/***/ 7947:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel40 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_render_panel40_1 = __webpack_require__(2693);
var tbs_grid_table_1 = __webpack_require__(983);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel40 = /** @class */ (function (_super) {
    __extends(TbsGridPanel40, _super);
    function TbsGridPanel40(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel40';
        _this.panelName1 = 'panel41';
        _this.panelName2 = 'panel42';
        _this.panelName0 = 'panel40';
        return _this;
    }
    TbsGridPanel40.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
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
    };
    TbsGridPanel40.prototype.createTable = function () {
        var grid = this.grid;
        if (grid.top_column_table.count() == 0)
            return;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.createTable('panel41', 0, 1);
        classTable.createTable('panel42', 0, 1);
        classTable.createTable('panel40', 0, 1);
    };
    TbsGridPanel40.prototype.setDataPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classRange.removePanelRange('panel40');
        this.setDataPanel2();
        this.setDataPanel1();
        this.setDataPanel0();
    };
    TbsGridPanel40.prototype.setDataPanel1 = function () {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName1;
        if (grid.top_table.count() == 0)
            return;
        var topRowIndex = 0;
        var bottomRowIndex = 0;
        var pageRowCount = 1;
        var rowHeight = grid.rowHeight;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0)
            return;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        var tableRowIndex = 0;
        for (var i = topRowIndex; i < bottomRowIndex + 1; i++) {
            var tableRow = tableRows[tableRowIndex];
            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            var tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;
            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
        }
    };
    TbsGridPanel40.prototype.setDataPanel2 = function () {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.top_table.count() == 0)
            return;
        if (grid.fixedColumnIndex == -1)
            return;
        var panelName = this.panelName2;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRow = tableRows[0];
        for (var x = 0; x <= grid.fixedColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            if (x > grid.fixedColumnIndex && x < startColumnIndex)
                continue;
            var tbsGridRender = new tbs_grid_render_panel40_1.TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, column, 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, column, 0, x);
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    };
    TbsGridPanel40.prototype.setDataPanel0 = function () {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName0;
        if (grid.top_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRow = tableRows[0];
        for (var x = 0, len = grid.column_table.count(); x < len; x++) {
            var column = grid.column_table.data[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            var tableCell = tableRow.childNodes[x];
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
            }
            else {
                if (x < startColumnIndex)
                    continue;
            }
            var tbsGridRender = new tbs_grid_render_panel40_1.TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    };
    TbsGridPanel40.prototype.panel40_select = function (eventPanelName) {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = (eventPanelName == 'panel40' || eventPanelName == 'panel42') ? grid.classRange40 : grid.classRange50;
        var targetName;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        var mouseDownEvent = function (e) {
            startX = grid.startX = window.pageXOffset + e.clientX;
            startY = grid.startY = window.pageYOffset + e.clientY;
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            var tableCell;
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
                        if (grid.grid_mode == tbs_grid_types_1.GridMode.tree) {
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
        var mouseMoveEvent = function (e) {
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseMoveEvent : lastX ${lastX} : lastY ${lastY}`)
            e.preventDefault();
            e.stopPropagation();
            //if (grid.option_selectOne == true) return;
            if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell')
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
        var mouseUpEvent = function (e) {
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
            var isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                    var param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1) {
                        var panelInput = document.querySelector(selector + ' .tbs-grid-input-panel');
                        if (panelInput.style.left != '30000px') {
                            grid.editEnd();
                            grid.input_focus();
                        }
                        else
                            grid.tbs_executeEvent(true, 'onClick', param);
                    }
                    else if (e.detail == 2) {
                        var isEditable = grid.column_table.data[startCellIndex][tbs_grid_types_1.columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.onEdit)) {
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'onDblclick', param);
                    }
                }
            }
        };
        var selectCell = function (e) {
            var tableCell;
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
        var selectCellMove = function (e) {
            flagLeft = false;
            flagRight = false;
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-panel32');
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    else if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-panel30'); // + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    else if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                }
                select(moveX, moveY);
            }
        };
        var selectCellCtrl = function (e) { };
        var selectCellCtrlMove = function (e) { };
        var selectCellShift = function (e) {
            var tableCell;
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
        var selectCellShiftMove = function (e) {
            flagLeft = false;
            flagRight = false;
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var select = function (moveX, moveY) {
            if (moveX > 0) { // right
                var maxRowIndex = void 0, maxCellIndex = void 0;
                maxRowIndex = 0;
                maxCellIndex = classRange.getMaxCellIndexByMouseMove();
                //console.log(`eventPanelName ${eventPanelName} 1) $maxRowIndex  ${maxRowIndex} maxCellIndex ${maxCellIndex}`);
                classRange.removeRange(0, -1);
                classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, maxCellIndex);
            }
            else if (moveX < 0) { // left
                var maxRowIndex = void 0, minCellIndex = void 0;
                maxRowIndex = 0;
                minCellIndex = classRange.getMinCellIndexByMouseMove();
                classRange.removeRange(0, -1);
                classRange.selectRange(startRowIndex, maxRowIndex, startCellIndex, minCellIndex);
            }
        };
        var setPanelMove = function (type) {
            // panel outside area
            var startRowIndex = 0;
            var lastRowIndex = 0;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var maxCellIndex, minCellIndex;
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            var tableCellCount = (tableRows.length > 0) ? tableRows[0].childNodes.length : 0;
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
        var doInterval = function (type) {
            if (flagLeft) {
                //flagLeft  = false;
                flagRight = false;
                setTimeout(function () { return doInterval('left'); }, 15);
                setPanelMove('left');
            }
            if (flagRight) {
                flagLeft = false;
                //flagRight = false;
                setTimeout(function () { return doInterval('right'); }, 15);
                setPanelMove('right');
            }
        };
        eventPanel.addEventListener('mousedown', mouseDownEvent);
    };
    TbsGridPanel40.prototype.panel41_select = function (eventPanelName) {
        var selector = this.selector;
        var grid = this.grid;
        var targetName;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var eventPanel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
        var mouseDownEvent = function (e) {
            //if (e.detail == 1) console.log(`click ${e.detail}`);
            //if (e.detail == 2) console.log(`doubleclick ${e.detail}`);
            startX = grid.startX = window.pageXOffset + e.clientX;
            startY = grid.startY = window.pageYOffset + e.clientY;
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseUpEvent : lastX ${lastX} : lastY ${lastY}`)
            //console.log(`e.target.className ${e.target.className}`);
            var tableCell;
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
        var mouseMoveEvent = function (e) {
            lastX = grid.lastX = window.pageXOffset + e.clientX;
            lastY = grid.lastY = window.pageYOffset + e.clientY;
            //console.log(`mouseMoveEvent : lastX ${lastX} : lastY ${lastY}`)
            e.preventDefault();
            e.stopPropagation();
            //if (grid.option_selectOne == true) return;
            if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell')
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
        var mouseUpEvent = function (e) {
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
            var isInArea = grid.isInPanel(e, eventPanelName, lastX, lastY);
            if (isInArea) {
                if (mouseButton == 0 && grid.isMovedPositionInConstRange(startX, startY, lastX, lastY)) {
                    var param = { e: e, rowIndex: startRowIndex, cellIndex: startCellIndex, mode: 'mouse' };
                    if (e.detail == 1)
                        grid.tbs_executeEvent(true, 'onClick', param);
                    else if (e.detail == 2) {
                        var isEditable = grid.column_table.data[startCellIndex][tbs_grid_types_1.columnAlias.editable];
                        if (isEditable) {
                            if (grid.notNull(grid.onEdit)) {
                                //grid.input_edit(e, 0, 'mouse');
                                grid.editStart(e, 'mouse');
                            }
                            else {
                                grid.input_show(e, 'mouse');
                            }
                        }
                        else
                            grid.tbs_executeEvent(true, 'onDblclick', param);
                    }
                }
            }
        };
        var selectCell = function (e) {
            var tableCell;
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
            var panelName = eventPanelName;
            if (panelName == 'panel41') {
                grid.classRange40.removeRange(0, -1);
                grid.classRange40.selectRange(0, 0);
            }
            else if (panelName == 'panel51') {
                grid.classRange50.removeRange(0, -1);
                grid.classRange50.selectRange(0, 0);
            }
        };
        var selectCellMove = function (e) {
            flagUp = false;
            flagDown = false;
            flagLeft = false;
            flagRight = false;
            var moveY = grid.lastY - grid.startY;
            var moveX = grid.lastX - grid.startX;
            var lastX = grid.lastX;
            var lastY = grid.lastY;
            if (grid.fixedColumnIndex != -1) {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var rect30 = panel30.getBoundingClientRect();
                var absRect30 = grid.getOffset(panel30);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect30.left + rect30.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        this.doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        this.doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        this.doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        this.doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
            else {
                var panel = document.querySelector(selector + ' .tbs-grid-' + eventPanelName);
                var rect = panel.getBoundingClientRect();
                var absRect = grid.getOffset(panel);
                var panelTop = absRect.top;
                var panelBottom = absRect.top + rect.height;
                var panelLeft = absRect.left;
                var panelRight = absRect.left + rect.width;
                // Outside the area
                if (lastX < panelLeft || lastX > panelRight || lastY < panelTop || lastY > panelBottom) {
                    if (lastX < panelLeft) {
                        flagLeft = true;
                        this.doInterval(tbs_grid_types_1.Direction.left);
                    }
                    if (lastX > panelRight) {
                        flagRight = true;
                        this.doInterval(tbs_grid_types_1.Direction.right);
                    }
                    if (lastY < panelTop) {
                        flagUp = true;
                        this.doInterval(tbs_grid_types_1.Direction.up);
                    }
                    if (lastY > panelBottom) {
                        flagDown = true;
                        this.doInterval(tbs_grid_types_1.Direction.down);
                    }
                }
                select(moveX, moveY);
            }
        };
        var selectCellCtrl = function (e) { };
        var selectCellCtrlMove = function (e) { };
        var selectCellShift = function (e) { };
        var selectCellShiftMove = function (e) { };
        var select = function (moveX, moveY) {
            var panelName = eventPanelName;
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
    };
    return TbsGridPanel40;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel40 = TbsGridPanel40;


/***/ }),

/***/ 9506:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel50 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_render_panel40_1 = __webpack_require__(2693);
var tbs_grid_table_1 = __webpack_require__(983);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel50 = /** @class */ (function (_super) {
    __extends(TbsGridPanel50, _super);
    function TbsGridPanel50(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel50';
        _this.panelName1 = 'panel51';
        _this.panelName2 = 'panel52';
        _this.panelName0 = 'panel50';
        return _this;
    }
    TbsGridPanel50.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
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
    };
    TbsGridPanel50.prototype.createTable = function () {
        var grid = this.grid;
        if (grid.footer_column_table.count() == 0)
            return;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.createTable('panel51', 0, 1);
        classTable.createTable('panel52', 0, 1);
        classTable.createTable('panel50', 0, 1);
    };
    TbsGridPanel50.prototype.setDataPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classRange.removePanelRange('panel50');
        this.setDataPanel2();
        this.setDataPanel1();
        this.setDataPanel0();
    };
    TbsGridPanel50.prototype.setDataPanel1 = function () {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName1;
        if (grid.footer_table.count() == 0)
            return;
        var topRowIndex = 0;
        var bottomRowIndex = 0;
        var pageRowCount = 1;
        var rowHeight = grid.rowHeight;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0)
            return;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        var tableRowIndex = 0;
        for (var i = topRowIndex; i < bottomRowIndex + 1; i++) {
            var tableRow = tableRows[tableRowIndex];
            /* Render: TableRow */
            grid.classRow.setTableRow(grid, tableRow, i, panelName);
            var tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;
            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, i);
        }
    };
    TbsGridPanel50.prototype.setDataPanel2 = function () {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.fixedColumnIndex == -1)
            return;
        var panelName = this.panelName2;
        if (grid.footer_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRow = tableRows[0];
        for (var x = 0; x <= lastColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            if (x > grid.fixedColumnIndex && x < startColumnIndex)
                continue;
            var tbsGridRender = new tbs_grid_render_panel40_1.TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, column, 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, column, 0, x);
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        var tbsGridCell = grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    };
    TbsGridPanel50.prototype.setDataPanel0 = function () {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName0;
        if (grid.footer_table.count() == 0)
            return;
        //startColumnIndex, lastColumIndex
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        var tableRow = tableRows[0];
        for (var x = 0, len = grid.column_table.count(); x < len; x++) {
            var column = grid.column_table.data[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            var tableCell = tableRow.childNodes[x];
            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex)
                    continue;
            }
            else {
                if (x < startColumnIndex)
                    continue;
            }
            var tbsGridRender = new tbs_grid_render_panel40_1.TbsGridRenderPanel40(grid);
            tbsGridRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            tbsGridRender = null;
            //grid.classRender.start(panelName, tableCell, grid.column_table.data[x], 0, x);
            grid.classCell.showSelectedCells(grid, panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    };
    return TbsGridPanel50;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel50 = TbsGridPanel50;


/***/ }),

/***/ 4672:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel70 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_table_1 = __webpack_require__(983);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel70 = /** @class */ (function (_super) {
    __extends(TbsGridPanel70, _super);
    function TbsGridPanel70(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel70';
        _this.panelName1 = 'panel71';
        _this.panelName2 = 'panel72';
        _this.panelName0 = 'panel70';
        return _this;
    }
    TbsGridPanel70.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
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
    };
    TbsGridPanel70.prototype.createTable = function () {
        var grid = this.grid;
        var classTable = new tbs_grid_table_1.TbsGridTable(grid);
        classTable.createTable('panel71', 0, 2);
        classTable.createTable('panel72', 0, 2);
        classTable.createTable('panel70', 0, 2);
    };
    TbsGridPanel70.prototype.setDataPanel = function () {
        var grid = this.grid;
        if (grid.column_table.count() == 0)
            return;
        this.setDataPanel2({ panelName: 'panel72' });
        this.setDataPanel0({ panelName: 'panel70' });
    };
    TbsGridPanel70.prototype.setDataPanel2 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName2;
        if (grid.options.showFilterPanel != true)
            return;
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + " .tbs-grid-".concat(panelName, " .tbs-grid-table tbody tr"));
        var tableRow = tableRows[0];
        for (var x = 0; x <= grid.fixedColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            tableCell.style.display = (column[tbs_grid_types_1.columnAlias.visible]) ? '' : 'none';
            tableCell.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
            tableCell.dataset.name = columnName;
            var combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';
            if (grid.isFilterColumnName(columnName)) {
                var filterColumn = grid.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            }
            ;
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
        tableRow = tableRows[1];
        for (var x = 0; x <= grid.fixedColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            tableCell.style.display = (column[tbs_grid_types_1.columnAlias.visible]) ? '' : 'none';
            tableCell.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
            tableCell.dataset.name = columnName;
            // Set input
            var input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if (grid.isFilterColumnName(columnName)) {
                var filterColumn = grid.getFilterColumn(columnName);
                input.value = filterColumn[grid.const_filterValue];
            }
            ;
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(input);
        }
        /* on fixed columns */
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
    };
    TbsGridPanel70.prototype.setDataPanel0 = function (param) {
        var selector = this.selector;
        var grid = this.grid;
        var panelName = this.panelName0;
        if (grid.options.showFilterPanel != true)
            return;
        var result = grid.classHeader.getDisplayedHeaderColumn();
        var startColumnIndex = result.startColumnIndex;
        var lastColumnIndex = result.lastColumnIndex;
        /* table thead */
        grid.classRow.setTableHead(grid, panelName);
        /* table tbody */
        var tableRows = document.querySelectorAll(selector + " .tbs-grid-".concat(panelName, " .tbs-grid-table tbody tr"));
        var tableRow = tableRows[0];
        for (var x = 0; x <= lastColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            tableCell.style.display = (column[tbs_grid_types_1.columnAlias.visible]) ? '' : 'none';
            tableCell.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
            tableCell.dataset.name = columnName;
            var combo = grid.classFilter.createFilterCombo(column);
            combo.classList.add('tbs-grid-cell-filter-combo');
            combo.dataset.name = columnName;
            combo.style.width = '100%';
            if (grid.isFilterColumnName(columnName)) {
                var filterColumn = grid.getFilterColumn(columnName);
                combo.value = filterColumn[grid.const_filterType];
            }
            ;
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(combo);
        }
        // on fixed columns
        grid.classCell.hideTableCells(grid, panelName, tableRow, lastColumnIndex);
        tableRow = tableRows[1];
        for (var x = 0; x <= lastColumnIndex; x++) {
            var column = grid.column_table.data[x];
            var tableCell = tableRow.childNodes[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            tableCell.style.display = (column[tbs_grid_types_1.columnAlias.visible]) ? '' : 'none';
            tableCell.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
            tableCell.dataset.name = columnName;
            // Set input
            var input = document.createElement('input');
            input.classList.add('tbs-grid-cell-filter-input');
            input.dataset.name = columnName;
            input.style.width = '100%';
            if (grid.isFilterColumnName(columnName)) {
                var filterColumn = grid.getFilterColumn(columnName);
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
    };
    TbsGridPanel70.prototype.panel70_select = function (panelName) {
        var selector = this.selector;
        var grid = this.grid;
        var element;
        var targetName;
        var changeEvent = function (e) {
            e.preventDefault();
            e.stopPropagation();
            var combo = e.target;
            var columnName = combo.dataset.name;
            var column = grid.getColumn(columnName);
            var columnIndex = grid.getColumnIndex(columnName);
            var columnType = column[tbs_grid_types_1.columnAlias.type];
            var filterType = combo.selectedOptions[0].value;
            var inputs = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-input');
            var input = inputs[columnIndex];
            var word = input.value;
            if (filterType == '8') {
                input.value = '';
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0 || grid.grid_mode == tbs_grid_types_1.GridMode.tree)
                    grid.setData(grid.view_table.data, null, false);
                else
                    grid.apply();
            }
            else if (filterType != '0' && word != '') {
                var filterColumn = grid.filter_column_table.selectRow(tbs_grid_types_1.columnAlias.name, column[tbs_grid_types_1.columnAlias.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0
                    || grid.grid_mode == tbs_grid_types_1.GridMode.tree
                    || grid.grid_mode == tbs_grid_types_1.GridMode.page
                    || grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                    if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
                        grid.classPage.pageIndex = 1;
                    else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
                        grid.classPagination.pageIndex = 1;
                    grid.setData(grid.view_table.data, null, false);
                }
                else
                    grid.apply();
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.filter_column_table.removeByRowId(column);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0
                    || grid.grid_mode == tbs_grid_types_1.GridMode.tree
                    || grid.grid_mode == tbs_grid_types_1.GridMode.page
                    || grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                    if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
                        grid.classPage.pageIndex = 1;
                    else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
                        grid.classPagination.pageIndex = 1;
                    grid.setData(grid.view_table.data, null, false);
                }
                else
                    grid.apply();
            }
        };
        var keyupEvent = function (e) {
            var input = e.target;
            //if (e.keyCode == 13 || e.keyCode == 9) {
            var columnName = input.dataset.name;
            var column = grid.getColumn(columnName);
            var columnIndex = grid.getColumnIndex(columnName);
            var columnType = column[tbs_grid_types_1.columnAlias.type];
            var combos = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-cell-filter-combo');
            var combo = combos[columnIndex];
            var filterType = combo.selectedOptions[0].value;
            var word = input.value;
            if (filterType != '0') {
                var filterColumn = grid.filter_column_table.selectRow(tbs_grid_types_1.columnAlias.name, column[tbs_grid_types_1.columnAlias.name]);
                grid.classFilter.setFilterColumn(column, filterType, word);
                if (grid.group_column_table.count() > 0
                    || grid.grid_mode == tbs_grid_types_1.GridMode.tree
                    || grid.grid_mode == tbs_grid_types_1.GridMode.page
                    || grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                    if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
                        grid.classPage.pageIndex = 1;
                    else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
                        grid.classPagination.pageIndex = 1;
                    grid.setData(grid.view_table.data, null, false);
                }
                else {
                    grid.classFilter.filters();
                    grid.apply();
                }
            }
            else {
                // delete filterColumn.
                grid.classFilter.removeFilterColumn(column);
                grid.classFilter.filters();
                if (grid.group_column_table.count() > 0
                    || grid.grid_mode == tbs_grid_types_1.GridMode.tree
                    || grid.grid_mode == tbs_grid_types_1.GridMode.page
                    || grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                    if (grid.grid_mode == tbs_grid_types_1.GridMode.page)
                        grid.classPage.pageIndex = 1;
                    else if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination)
                        grid.classPagination.pageIndex = 1;
                    grid.setData(grid.view_table.data, null, false);
                }
                else
                    grid.apply();
            }
        };
        var blurEvent = function (e) {
        };
        // let panel70 = document.querySelectorAll(selector + ' .tbs-grid-panel70');
        //
        // panel70.addEventListener('keyup', keyupEvent);
        // panel70.addEventListener('change', changeEvent);
        var inputs = document.querySelectorAll("".concat(selector, " .tbs-grid-").concat(panelName, " .tbs-grid-cell-filter-input"));
        var combos = document.querySelectorAll("".concat(selector, " .tbs-grid-").concat(panelName, " .tbs-grid-cell-filter-combo"));
        for (var i = 0, len = inputs.length; i < len; i++) {
            inputs[i].addEventListener('keyup', keyupEvent);
            inputs[i].addEventListener('blur', blurEvent);
            combos[i].addEventListener('change', changeEvent);
        }
    };
    return TbsGridPanel70;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel70 = TbsGridPanel70;


/***/ }),

/***/ 8327:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel80 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel80 = /** @class */ (function (_super) {
    __extends(TbsGridPanel80, _super);
    function TbsGridPanel80(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel80';
        return _this;
    }
    TbsGridPanel80.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var className = grid.options.showGroupPanel ? 'tbs-grid-show' : 'tbs-grid-hide';
        var s = '<div class="tbs-grid-panel80 ' + className + '"></div>';
        parentElement.insertAdjacentHTML('beforeend', s);
        grid.classPanel80.panel80_select();
    };
    TbsGridPanel80.prototype.createTable = function () {
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var div = document.createElement('div');
        div.className = 'tbs-grid-panel-bar';
        var span = document.createElement('span');
        span.className = 'tbs-grid-panel-bar-span';
        span.textContent = grid.getConfigLabel('group_placeholder');
        div.appendChild(span);
        document.querySelector(selector + ' .tbs-grid-panel80').appendChild(div);
    };
    TbsGridPanel80.prototype.panel80_select = function () {
        var selector = this.selector;
        var grid = this.grid;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var targetName;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var moveCell;
        var moveCellLeft;
        var moveCellTop;
        var moveCellIndex;
        var moveCellRowIndex;
        var panel80 = document.querySelector(selector + ' .tbs-grid-panel80');
        var mouseDownEvent = function (e) {
            var element;
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
        var mouseMoveEvent = function (e) {
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
        var mouseUpEvent = function (e) {
            var element;
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
            var isInPanel80 = grid.isInPanel(e, 'panel80', lastX, lastY);
            if (isInPanel80) {
                if (mouseButton == 0
                    && startX > lastX - grid.mousePointRange
                    && startX < lastX + grid.mousePointRange
                    && startY > lastY - grid.mousePointRange
                    && startY < lastY + grid.mousePointRange) {
                    var element_1 = e.target;
                    var name_1 = element_1.dataset.name;
                    if (e.detail == 1 && targetName == 'icon') {
                        grid.classGroup.removeGroupButton(element_1);
                    }
                }
                else {
                    if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
                        var moveElement = document.querySelector('.tbs-grid-move');
                        var rectPanel80 = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
                        var rectMoveCell = moveElement.getBoundingClientRect();
                        var name_2 = moveElement.dataset.name;
                        var column = grid.getColumn(name_2);
                        var text = column[tbs_grid_types_1.columnAlias.text];
                        var order = 'asc';
                        // Find the one that is smaller to the button left than then move element left
                        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                        var targetButton = void 0;
                        var targetIndex = void 0;
                        for (var i = 0, len = buttons.length; i < len; i++) {
                            var button = buttons[i];
                            var buttonLeft = button.getBoundingClientRect().left;
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
                        grid.classGroup.changeGroupButtonOrder(name_2, text, order, targetIndex);
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
        var selectCell = function (e, table) {
            var element;
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
                var col = null;
                if (targetName == 'text')
                    col = element.parentNode;
                else
                    col = element;
                var columnName = col.dataset.name;
                var moveDiv = void 0;
                if (document.querySelectorAll('.tbs-grid-move').length == 0) {
                    moveDiv = document.createElement('div');
                    moveDiv.classList.add('tbs-grid-move');
                    var table_1 = document.createElement('table');
                    table_1.classList.add('tbs-grid-table');
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    td.classList.add('tbs-grid-cell');
                    var div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');
                    var span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    div.appendChild(span);
                    td.appendChild(div);
                    tr.appendChild(td);
                    table_1.appendChild(tr);
                    moveDiv.appendChild(table_1);
                    document.body.appendChild(moveDiv);
                }
                moveDiv = document.querySelector('.tbs-grid-move');
                moveDiv.style.display = 'none';
                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
                moveDiv = document.querySelector('.tbs-grid-move');
                var colRect = col.getBoundingClientRect();
                moveCell = col;
                moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
                moveCellIndex = col.cellIndex;
                moveCellRowIndex = col.parentNode.rowIndex;
                var nWidth = (colRect.width + 2) + 'px';
                var nHeight = colRect.height + 'px';
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
        var selectCellMove = function (e, table) {
            var col = e.target.closest('.tbs-grid-cell');
            flagLeft = false;
            flagRight = false;
            startX = grid.startX;
            startY = grid.startY;
            grid.lastX = lastX = window.scrollX + e.clientX;
            grid.lastY = lastY = window.scrollY + e.clientY;
            var moveY = lastY - startY;
            var moveX = lastX - startX;
            var moveDiv = document.querySelector('.tbs-grid-move');
            if (moveDiv) {
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top = (lastY - moveCellTop) + 'px';
                if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20)
                    moveDiv.style.display = '';
            }
            var rect = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
            var rectLeft = window.pageXOffset + rect.left;
            var rectRight = window.pageXOffset + rect.right;
            var rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
            rectRight = window.pageXOffset + rect30.right;
            var type = '';
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
        var selectCellShift = function (e, table) { };
        var select = function (startCellIndex, moveX, moveY, lastX, lastY) {
            var tableRect = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
            var top = window.pageYOffset + tableRect.top;
            var bottom = window.pageYOffset + tableRect.bottom;
            var sumRect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
            var right = window.pageXOffset + sumRect.right;
            var left = window.pageXOffset + sumRect.left;
            //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
            //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
            //==================================================================
            var arr = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td:not([data-name=""])');
            var tdList = Array.from(arr).sort(function (a, b) {
                a = a.cellIndex;
                b = b.cellIndex;
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                var maxCellIndex = void 0;
                for (var x = 0, len = tdList.length; x < len; x++) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var left_1 = window.scrollX + cell.getBoundingClientRect().left;
                    if (lastX > left_1)
                        maxCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
            if (moveX < 0) {
                var minCellIndex = void 0;
                for (var x = tdList.length - 1; x >= 0; x--) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var right_1 = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right_1)
                        minCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
                grid.classPanel30.setDataPanel(_topRowIndex);
            }
            //==================================================================
        };
        var selectRefresh = function (type, lastX, lastY) {
            var content = document.querySelector(selector + ' .tbs-grid-panel30');
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            var startRowIndex = grid.startRowIndex;
            var lastRowIndex = grid.lastRowIndex;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var trCount = trContent.length;
            var tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
            var minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    for (var trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                        for (var cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                            if (grid.column_table.data[cellIndex][tbs_grid_types_1.columnAlias.visible] == false)
                                continue;
                            var left = window.scrollX + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                            if (lastX > left)
                                maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
                        }
                    }
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            //==================================================================
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    for (var rowIndex = 0; rowIndex < trCount; rowIndex++) {
                        for (var cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                            if (grid.column_table.data[cellIndex][tbs_grid_types_1.columnAlias.visible] == false)
                                continue;
                            var right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                            if (lastX < right)
                                minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                        }
                    }
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
        };
        var doInterval = function (type, lastX, lastY) {
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
    };
    return TbsGridPanel80;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel80 = TbsGridPanel80;


/***/ }),

/***/ 7582:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel90 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel90 = /** @class */ (function (_super) {
    __extends(TbsGridPanel90, _super);
    function TbsGridPanel90(grid) {
        var _this = _super.call(this, grid) || this;
        _this.panelName = 'panel90';
        return _this;
    }
    TbsGridPanel90.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var s = '';
        if (grid.options.showSortPanel)
            s += '<div class="tbs-grid-panel90 tbs-grid-show"></div>';
        else
            s += '<div class="tbs-grid-panel90 tbs-grid-hide"></div>';
        parentElement.insertAdjacentHTML('beforeend', s);
        grid.classPanel90.panel90_select();
    };
    TbsGridPanel90.prototype.createTable = function () {
        var selector = this.selector;
        var grid = this.grid;
        //if (grid.options.showSortPanel != true) return;
        var div = document.createElement('div');
        div.className = 'tbs-grid-panel-bar';
        var span = document.createElement('span');
        span.className = 'tbs-grid-panel-bar-span';
        span.textContent = grid.getConfigLabel('sort_placeholder');
        div.appendChild(span);
        document.querySelector(selector + ' .tbs-grid-panel90').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-panel90').appendChild(div);
    };
    TbsGridPanel90.prototype.panel90_select = function () {
        var selector = this.selector;
        var grid = this.grid;
        var startRowIndex, startCellIndex, startX, startY;
        var lastRowIndex, lastCellIndex, lastX, lastY;
        var targetName;
        var mouseButton = 0;
        var flagUp = false;
        var flagDown = false;
        var flagLeft = false;
        var flagRight = false;
        var moveCell;
        var moveCellLeft;
        var moveCellTop;
        var moveCellIndex;
        var moveCellRowIndex;
        var panel90 = document.querySelector(selector + ' .tbs-grid-panel90');
        var mouseDownEvent = function (e) {
            var element;
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
        var mouseMoveEvent = function (e) {
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
        var mouseUpEvent = function (e) {
            var element;
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
            var isInPanel90 = grid.isInPanel(e, 'panel90', lastX, lastY);
            if (isInPanel90) {
                if (mouseButton == 0
                    && startX > lastX - grid.mousePointRange
                    && startX < lastX + grid.mousePointRange
                    && startY > lastY - grid.mousePointRange
                    && startY < lastY + grid.mousePointRange) {
                    var element_1 = e.target;
                    var name_1 = element_1.dataset.name;
                    if (e.detail == 1 && targetName == 'icon') {
                        grid.classSort.removeSortButton(element_1);
                    }
                    else if (e.detail == 1) {
                        grid.event_columnSort(e.target);
                    }
                }
                else {
                    if (document.querySelectorAll(' .tbs-grid-move').length > 0) {
                        var moveElement = document.querySelector('.tbs-grid-move');
                        var rectMoveCell = moveElement.getBoundingClientRect();
                        var name_2 = moveElement.dataset.name;
                        var column = grid.getColumn(name_2);
                        var text = column.header[tbs_grid_types_1.columnAlias.text];
                        var order = 'asc';
                        // Find the one that is smaller to the button left than then move element left
                        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel-bar .tbs-grid-panel-button');
                        var targetButton = void 0;
                        var targetIndex = void 0;
                        for (var i = 0, len = buttons.length; i < len; i++) {
                            var button = buttons[i];
                            var buttonLeft = button.getBoundingClientRect().left;
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
                        grid.classSort.changeSortButtonOrder(name_2, text, order, targetIndex);
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
        var selectCell = function (e, table) {
            var element;
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
                var col = null;
                if (targetName == 'text')
                    col = element.parentNode;
                else
                    col = element;
                var columnName = col.dataset.name;
                var moveDiv = void 0;
                if (document.querySelectorAll('.tbs-grid-move').length == 0) {
                    moveDiv = document.createElement('div');
                    moveDiv.classList.add('tbs-grid-move');
                    var table_1 = document.createElement('table');
                    table_1.classList.add('tbs-grid-table');
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    td.classList.add('tbs-grid-cell');
                    var div = document.createElement('div');
                    div.classList.add('tbs-grid-cell-div');
                    var span = document.createElement('span');
                    span.classList.add('tbs-grid-html-string');
                    div.appendChild(span);
                    td.appendChild(div);
                    tr.appendChild(td);
                    table_1.appendChild(tr);
                    moveDiv.appendChild(table_1);
                    document.body.appendChild(moveDiv);
                }
                moveDiv = document.querySelector('.tbs-grid-move');
                moveDiv.style.display = 'none';
                moveDiv.querySelector('.tbs-grid-html-string').textContent = col.querySelector('.tbs-grid-panel-button-text').textContent;
                moveDiv = document.querySelector('.tbs-grid-move');
                var colRect = col.getBoundingClientRect();
                moveCell = col;
                moveCellLeft = window.pageXOffset + e.clientX - colRect.left;
                moveCellTop = window.pageYOffset + e.clientY - colRect.top;
                moveCellIndex = col.cellIndex;
                moveCellRowIndex = col.parentNode.rowIndex;
                var nWidth = (colRect.width + 2) + 'px';
                var nHeight = colRect.height + 'px';
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
        var selectCellMove = function (e, table) {
            var col = e.target.closest('.tbs-grid-cell');
            flagLeft = false;
            flagRight = false;
            startX = grid.startX;
            startY = grid.startY;
            grid.lastX = lastX = window.pageXOffset + e.clientX;
            grid.lastY = lastY = window.pageYOffset + e.clientY;
            var moveY = lastY - startY;
            var moveX = lastX - startX;
            var moveDiv = document.querySelector('.tbs-grid-move');
            if (moveDiv) {
                moveDiv.style.left = (lastX - moveCellLeft) + 'px';
                moveDiv.style.top = (lastY - moveCellTop) + 'px';
                if (Math.abs(moveX) > 20 || Math.abs(moveY) > 20)
                    moveDiv.style.display = '';
            }
            var rect = document.querySelector(selector + ' .tbs-grid-panel80').getBoundingClientRect();
            var rectLeft = window.pageXOffset + rect.left;
            var rectRight = window.pageXOffset + rect.right;
            var rect30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
            rectRight = window.pageXOffset + rect30.right;
            var type = '';
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
        var selectCellShift = function (e, table) { };
        var select = function (startCellIndex, moveX, moveY, lastX, lastY) {
            var tableRect = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
            var top = window.pageYOffset + tableRect.top;
            var bottom = window.pageYOffset + tableRect.bottom;
            var sumRect = document.querySelector(selector + ' .tbs-grid-panel20').getBoundingClientRect();
            var right = window.pageXOffset + sumRect.right;
            var left = window.pageXOffset + sumRect.left;
            //if (lastX > right) grid.classScroll.setBarPositionByDirection('right');
            //if (lastX < left) grid.classScroll.setBarPositionByDirection('left');
            //==================================================================
            var arr = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table td:not([data-name=""])');
            var tdList = Array.from(arr).sort(function (a, b) {
                a = a.cellIndex;
                b = b.cellIndex;
                if (a > b)
                    return 1;
                if (a < b)
                    return -1;
                return 0;
            });
            if (moveX > 0) {
                var maxCellIndex = void 0;
                for (var x = 0, len = tdList.length; x < len; x++) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var left_1 = window.pageXOffset + cell.getBoundingClientRect().left;
                    if (lastX > left_1)
                        maxCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, maxCellIndex);
            }
            //==================================================================
            if (moveX < 0) {
                var minCellIndex = void 0;
                for (var x = tdList.length - 1; x >= 0; x--) {
                    var cell = tdList[x];
                    if (grid.column_table.data[x][tbs_grid_types_1.columnAlias.visible] == false)
                        continue;
                    var right_1 = window.pageXOffset + cell.getBoundingClientRect().right;
                    if (lastX < right_1)
                        minCellIndex = cell.cellIndex;
                }
                grid.classRange.removeRange(0, -1);
                var _topRowIndex = grid.classRange.selectRange(0, -1, startCellIndex, minCellIndex);
            }
            //==================================================================
        };
        var selectRefresh = function (type, lastX, lastY) {
            var content = document.querySelector(selector + ' .tbs-grid-panel30');
            var table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
            var trContent = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
            var startRowIndex = grid.startRowIndex;
            var lastRowIndex = grid.lastRowIndex;
            var startCellIndex = grid.startCellIndex;
            var lastCellIndex = grid.lastCellIndex;
            var trCount = trContent.length;
            var tdCount = (trContent.length > 0) ? trContent[0].childNodes.length : 0;
            var minRowIndex, maxRowIndex, maxCellIndex, minCellIndex;
            if (type == 'right') {
                if (table.style.left == (-1 * grid.horizontalScroll.hiddenSize) + 'px') {
                    flagRight = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, tdCount - 1);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('right');
                    for (var trRowIndex = 0; trRowIndex < trCount; trRowIndex++) {
                        for (var cellIndex = 0; cellIndex < tdCount; cellIndex++) {
                            if (grid.column_table.data[cellIndex][tbs_grid_types_1.columnAlias.visible] == false)
                                continue;
                            var left = window.scrollX + trContent[trRowIndex].childNodes[cellIndex].getBoundingClientRect().left;
                            if (lastX > left)
                                maxCellIndex = trContent[trRowIndex].childNodes[cellIndex].cellIndex;
                        }
                    }
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, maxCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            //==================================================================
            else if (type == 'left') {
                if (table.style.left == '0px') {
                    flagLeft = false;
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, 0);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
                else {
                    grid.classScroll.setBarPositionByDirection('left');
                    for (var rowIndex = 0; rowIndex < trCount; rowIndex++) {
                        for (var cellIndex = tdCount - 1; cellIndex >= 0; cellIndex--) {
                            if (grid.column_table.data[cellIndex][tbs_grid_types_1.columnAlias.visible] == false)
                                continue;
                            var right = window.pageXOffset + trContent[rowIndex].childNodes[cellIndex].getBoundingClientRect().right;
                            if (lastX < right)
                                minCellIndex = trContent[rowIndex].childNodes[cellIndex].cellIndex;
                        }
                    }
                    grid.classRange.removeRange(0, -1);
                    var _topRowIndex = grid.classRange.selectRange(startRowIndex, lastRowIndex, startCellIndex, minCellIndex);
                    grid.classPanel30.setDataPanel(_topRowIndex);
                }
            }
        };
        var doInterval = function (type, lastX, lastY) {
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
    };
    return TbsGridPanel90;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel90 = TbsGridPanel90;


/***/ }),

/***/ 9677:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridPanel99 = void 0;
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridPanel99 = /** @class */ (function (_super) {
    __extends(TbsGridPanel99, _super);
    function TbsGridPanel99(grid) {
        var _this = _super.call(this, grid) || this;
        _this.grid = grid;
        _this.selector = "#".concat(grid.gridId);
        _this.panelName = 'panel99';
        return _this;
    }
    TbsGridPanel99.prototype.createHtml = function (parentElement) {
        var grid = this.grid;
        var isShowToolbar = grid.grid_mode == tbs_grid_types_1.GridMode.page || grid.grid_mode == tbs_grid_types_1.GridMode.pagination ? 'tbs-grid-show' : 'tbs-grid-hide';
        var s = '';
        s += "<div class=\"tbs-grid-panel99 ".concat(isShowToolbar, "\">");
        s += '<div class="tbs-grid-panel99-wrap">';
        s += '<div class="tbs-grid-panel99-page">';
        s += '<span class="tbs-grid-panel99-page-first">◁◁</span>';
        s += '<span class="tbs-grid-panel99-page-prev">◀</span>';
        s += '<span class="tbs-grid-panel99-page-select">1</span>';
        s += '<span class="tbs-grid-panel99-page-next">▶</span>';
        s += '<span class="tbs-grid-panel99-page-last">▷▷</span>';
        s += '<select class="tbs-grid-panel99-page-combo"></select>';
        s += '</div>';
        s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
        grid.classPanel99.panel99_select();
    };
    TbsGridPanel99.prototype.createTable = function () {
        var panel = document.querySelector("".concat(this.selector, " .tbs-grid-panel99"));
        panel.classList.add('tbs-grid-show');
    };
    TbsGridPanel99.prototype.panel99_select = function () {
        var selector = this.selector;
        var grid = this.grid;
        var firstEvent = function (e) {
            e.stopPropagation();
            if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                grid.classPagination.pageIndex = 1;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, tbs_grid_types_1.ClickPageOrder.first);
                }
            }
            else {
                grid.classPage.pageIndex = 1;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        };
        if (document.querySelector("".concat(selector, " .tbs-grid-panel99-page-first")))
            document.querySelector("".concat(selector, " .tbs-grid-panel99-page-first")).addEventListener('mousedown', firstEvent);
        var prevEvent = function (e) {
            e.stopPropagation();
            if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                grid.classPagination.pageIndex -= 1;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, tbs_grid_types_1.ClickPageOrder.prev);
                }
            }
            else {
                grid.classPage.pageIndex -= 1;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        };
        if (document.querySelector("".concat(selector, " .tbs-grid-panel99-page-prev")))
            document.querySelector("".concat(selector, " .tbs-grid-panel99-page-prev")).addEventListener('mousedown', prevEvent);
        // const curEvent = e => {
        //     e.stopPropagation();
        //     if (grid.grid_mode == GridMode.pagination) {
        //         if (grid.notNull(grid.onClickPage)) {
        //             grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, ClickPageOrder.last);
        //         }
        //     }
        //     else grid.classPanel30.setDataPanel(0);
        // }
        //
        // if (document.querySelector(`${selector} .tbs-grid-panel99-page-select`))
        //     document.querySelector(`${selector} .tbs-grid-panel99-page-select`).addEventListener('mousedown', curEvent);
        var nextEvent = function (e) {
            e.stopPropagation();
            if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                grid.classPagination.pageIndex += 1;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, tbs_grid_types_1.ClickPageOrder.next);
                }
            }
            else {
                grid.classPage.pageIndex += 1;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        };
        if (document.querySelector("".concat(selector, " .tbs-grid-panel99-page-next")))
            document.querySelector("".concat(selector, " .tbs-grid-panel99-page-next")).addEventListener('mousedown', nextEvent);
        var lastEvent = function (e) {
            e.stopPropagation();
            if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                grid.classPagination.pageIndex = grid.classPage.pageCount;
                if (grid.notNull(grid.onClickPage)) {
                    grid.onClickPage(grid, grid.classPage.pageIndex, grid.options.pageRowCount, tbs_grid_types_1.ClickPageOrder.last);
                }
            }
            else {
                grid.classPage.pageIndex = grid.classPage.pageCount;
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        };
        if (document.querySelector("".concat(selector, " .tbs-grid-panel99-page-last")))
            document.querySelector("".concat(selector, " .tbs-grid-panel99-page-last")).addEventListener('mousedown', lastEvent);
        var changeEvent = function (e) {
            e.stopPropagation();
            if (grid.grid_mode == tbs_grid_types_1.GridMode.pagination) {
                grid.classPagination.pageIndex = 1;
                grid.options.pageRowCount = Number(e.target.value);
                if (grid.notNull(grid.onChangePageRowCount)) {
                    grid.onChangePageRowCount(grid, 1, grid.options.pageRowCount);
                }
            }
            else {
                grid.classPage.pageIndex = 1;
                grid.options.pageRowCount = Number(e.target.value);
                grid.classPage.setPageData(grid.view_table.data, false);
            }
        };
        if (document.querySelector("".concat(selector, " .tbs-grid-panel99-page-combo")))
            document.querySelector("".concat(selector, " .tbs-grid-panel99-page-combo")).addEventListener('change', changeEvent);
    };
    TbsGridPanel99.prototype.setPageRowCountList = function (data) {
        var grid = this.grid;
        var selector = this.selector;
        if (grid.null(data)) {
            data = grid.options.pageRowCountList;
        }
        var pageRowcount = grid.options.pageRowCount;
        var combo = document.querySelector("".concat(selector, " .tbs-grid-panel99-page-combo"));
        for (var i = 0, len = data.length; i < len; i++) {
            var row = data[i];
            var option = document.createElement('option');
            option.value = String(row);
            option.text = String(row);
            if (pageRowcount == Number(row))
                option.selected = true;
            combo.append(option);
        }
    };
    TbsGridPanel99.prototype.showPagePanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showToolbarPanel = true;
        var panel = document.querySelector("".concat(selector, " .tbs-grid-panel99"));
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        this.setPageRowCountList();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    };
    TbsGridPanel99.prototype.hidePagePanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showToolbarPanel = false;
        var panel = document.querySelector("".concat(selector, " .tbs-grid-panel99"));
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.apply();
    };
    return TbsGridPanel99;
}(tbs_grid_panel_base_1.TbsGridPanelBase));
exports.TbsGridPanel99 = TbsGridPanel99;


/***/ }),

/***/ 3787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderPanelInfo = void 0;
var tbs_grid_render_string_1 = __webpack_require__(7390);
var tbs_grid_render_checkbox_1 = __webpack_require__(2090);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRenderPanelInfo = /** @class */ (function () {
    function TbsGridRenderPanelInfo(grid) {
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
    TbsGridRenderPanelInfo.prototype.start = function (panelName, tableCell, column, rowIndex, columnIndex) {
        var grid = this.grid;
        var render = this;
        render.panelName = panelName;
        render.tableCell = tableCell;
        render.column = grid.info_column_table.selectRowByRowIndex(columnIndex);
        render.rowIndex = rowIndex;
        render.columnIndex = columnIndex;
        render.columnName = grid.getProperty(column, tbs_grid_types_1.columnAlias.name);
        render.columnType = grid.getProperty(column, tbs_grid_types_1.columnAlias.type);
        render.visible = grid.getProperty(column, tbs_grid_types_1.columnAlias.visible);
        render.width = grid.getProperty(column, tbs_grid_types_1.columnAlias.width);
        render.editable = grid.getProperty(column, tbs_grid_types_1.columnAlias.editable);
        render.align = grid.getProperty(column, tbs_grid_types_1.columnAlias.align);
        render.className = grid.getProperty(column, tbs_grid_types_1.columnAlias.className);
        if (panelName == 'panel41' || panelName == 'panle51' || panelName == 'panle71')
            this.columnType = tbs_grid_types_1.CellType.string;
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
            var dataRow = grid.getRow(render.rowIndex);
            if (render.visible) {
                if (render.columnName == 'num') {
                    if (grid.grid_mode == tbs_grid_types_1.GridMode.page) {
                        render.cellValue = (grid.classPage.pageIndex - 1) * grid.options.pageRowCount + render.rowIndex + 1;
                        render.cellText = render.cellValue;
                    }
                    else if (grid.grid_mode == tbs_grid_types_1.GridMode.page) {
                        render.cellValue = (grid.classPagination.pageIndex - 1) * grid.options.pageRowCount + render.rowIndex + 1;
                        render.cellText = render.cellValue;
                    }
                    else {
                        render.cellValue = render.rowIndex + 1;
                        render.cellText = render.rowIndex + 1;
                    }
                }
                else if (render.columnName == 'mode') {
                    var mode = dataRow[tbs_grid_types_1.columnAlias.rowMode];
                    mode = (mode != '' && mode != 'S') ? mode : '';
                    render.cellValue = mode;
                    render.cellText = mode;
                }
                else if (render.columnName == 'checkbox') {
                    var check = grid.isNull(dataRow[tbs_grid_types_1.columnAlias.isChecked], false);
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
    };
    TbsGridRenderPanelInfo.prototype.createHtml = function () {
        var grid = this.grid;
        if (this.columnType == tbs_grid_types_1.CellType.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                var render = new tbs_grid_render_checkbox_1.TbsGridRenderCheckbox();
                render.addElement(this);
            }
        }
        else {
            var render = new tbs_grid_render_string_1.TbsGridRenderString();
            render.addElement(this);
        }
        this.setBounding();
    };
    TbsGridRenderPanelInfo.prototype.setBounding = function () {
        var grid = this.grid;
        if (grid.infoRenderer && grid.infoRenderer[this.columnName]
            && grid.infoRenderer[this.columnName].callback
            && ['panel31'].indexOf(this.panelName) != -1) {
            var dataRow = grid.view_table.selectRowByRowIndex(this.rowIndex);
            var eventRow = {};
            eventRow.rowIndex = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName = this.columnName;
            eventRow.value = grid.isNull(dataRow[tbs_grid_types_1.columnAlias.isChecked], false);
            eventRow.text = grid.isNull(dataRow[tbs_grid_types_1.columnAlias.isChecked], false);
            eventRow.data = dataRow;
            var result = grid.infoRenderer[this.columnName].callback(grid, eventRow);
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
        var param = {
            className: this.className,
            visible: this.visible,
            align: this.align,
            width: this.width,
        };
        if (this.columnType == tbs_grid_types_1.CellType.checkbox) {
            if (this.visible && (this.panelName == 'panel21' || this.panelName == 'panel31')) {
                var render = new tbs_grid_render_checkbox_1.TbsGridRenderCheckbox();
                render.setBounding(this);
            }
        }
        else {
            var render = new tbs_grid_render_string_1.TbsGridRenderString();
            render.setBounding(this);
        }
    };
    return TbsGridRenderPanelInfo;
}());
exports.TbsGridRenderPanelInfo = TbsGridRenderPanelInfo;


/***/ }),

/***/ 7858:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderPanel30 = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var tbs_grid_render_group_1 = __webpack_require__(3328);
var tbs_grid_render_tree_1 = __webpack_require__(9091);
var tbs_grid_render_checkbox_1 = __webpack_require__(2090);
var tbs_grid_render_button_1 = __webpack_require__(4911);
var tbs_grid_render_link_1 = __webpack_require__(7927);
var tbs_grid_render_img_1 = __webpack_require__(5948);
var tbs_grid_render_string_1 = __webpack_require__(7390);
var TbsGridRenderPanel30 = /** @class */ (function () {
    function TbsGridRenderPanel30(grid) {
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
    TbsGridRenderPanel30.prototype.start = function (panelName, tableCell, column, rowIndex, columnIndex) {
        var grid = this.grid;
        var render = this;
        render.panelName = panelName;
        render.tableCell = tableCell;
        render.column = column;
        render.rowIndex = rowIndex;
        render.columnIndex = columnIndex;
        render.columnName = column[tbs_grid_types_1.columnAlias.name];
        render.columnType = column[tbs_grid_types_1.columnAlias.type];
        render.visible = column[tbs_grid_types_1.columnAlias.visible];
        render.width = column[tbs_grid_types_1.columnAlias.width];
        render.editable = column[tbs_grid_types_1.columnAlias.editable];
        render.align = column[tbs_grid_types_1.columnAlias.align];
        render.className = column[tbs_grid_types_1.columnAlias.className];
        render.cellValue = grid.getValue(render.rowIndex, render.columnName);
        render.cellText = grid.getText(render.rowIndex, render.columnName);
        if (grid.group_column_table.count() > 0)
            render.depth = grid.getValue(render.rowIndex, tbs_grid_types_1.columnAlias.depth);
        render.updateData();
    };
    TbsGridRenderPanel30.prototype.updateData = function () {
        var grid = this.grid;
        var render = this;
        if (grid.group_column_table.count() > 0) {
            if (render.columnIndex == 0) {
                var row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                var rowDepth = row[tbs_grid_types_1.columnAlias.depth];
                if (rowDepth <= grid.group_column_table.count()) {
                    render.cellText = grid.getText(render.rowIndex, grid.group_column_table.data[rowDepth - 1][tbs_grid_types_1.columnAlias.name]) + '(' + row[tbs_grid_types_1.columnAlias.childRowIds].length + ')';
                    this.align = 'left';
                }
                else {
                    render.cellText = grid.getText(render.rowIndex, render.columnName);
                }
            }
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.tree) {
            if (render.columnIndex == 0) {
                var row = grid.view_table.selectRowByRowIndex(render.rowIndex);
                var rowDepth = row[tbs_grid_types_1.columnAlias.depth];
                var children = row[tbs_grid_types_1.columnAlias.children];
                if (children.length > 0) {
                    render.cellText = grid.getText(render.rowIndex, render.columnName) + '(' + row[tbs_grid_types_1.columnAlias.children].length + ')';
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
        if (this.columnType == tbs_grid_types_1.CellType.number) {
            if (this.cellText != '')
                this.cellValue = this.cellText;
        }
        render.createHtml();
    };
    TbsGridRenderPanel30.prototype.createHtml = function () {
        var grid = this.grid;
        if (grid.group_column_table.count() > 0 && this.depth <= grid.group_column_table.count()) {
            var render = new tbs_grid_render_group_1.TbsGridRenderGroup();
            render.addElement(this);
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.tree && this.columnIndex == 0) {
            var render = new tbs_grid_render_tree_1.TbsGridRenderTree();
            render.addElement(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.checkbox) {
            var render = new tbs_grid_render_checkbox_1.TbsGridRenderCheckbox();
            render.addElement(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.button) {
            var render = new tbs_grid_render_button_1.TbsGridRenderButton();
            render.addElement(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.link) {
            var render = new tbs_grid_render_link_1.TbsGridRenderLink();
            render.addElement(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.img) {
            var render = new tbs_grid_render_img_1.TbsGridRenderImg();
            render.addElement(this);
        }
        else {
            var render = new tbs_grid_render_string_1.TbsGridRenderString();
            render.addElement(this);
        }
        this.setBounding();
    };
    TbsGridRenderPanel30.prototype.setBounding = function () {
        var grid = this.grid;
        if (grid.renderer && grid.renderer[this.columnName] && grid.renderer[this.columnName].callback && ['panel30', 'panel32'].indexOf(this.panelName) != -1) {
            var dataRows = grid.view_table.selectRowByRowIndex(this.rowIndex);
            var eventRow = {};
            eventRow.rowIndex = this.rowIndex;
            eventRow.columnIndex = this.columnIndex;
            eventRow.columnName = this.columnName;
            eventRow.value = this.cellValue;
            eventRow.text = this.cellText;
            eventRow.data = dataRows;
            var result = grid.renderer[this.columnName].callback(grid, eventRow);
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
            var render = new tbs_grid_render_group_1.TbsGridRenderGroup();
            render.setBounding(this);
        }
        else if (grid.grid_mode == tbs_grid_types_1.GridMode.tree && this.columnIndex == 0) {
            var render = new tbs_grid_render_tree_1.TbsGridRenderTree();
            render.setBounding(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.checkbox) {
            if (this.cellValue == this.grid.getTrueValue(this.columnName))
                this.cellValue = true;
            else
                this.cellValue = false;
            var render = new tbs_grid_render_checkbox_1.TbsGridRenderCheckbox();
            render.setBounding(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.button) {
            var render = new tbs_grid_render_button_1.TbsGridRenderButton();
            render.setBounding(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.link) {
            var render = new tbs_grid_render_link_1.TbsGridRenderLink();
            render.setBounding(this);
        }
        else if (this.columnType == tbs_grid_types_1.CellType.img) {
            var render = new tbs_grid_render_img_1.TbsGridRenderImg();
            render.setBounding(this);
        }
        else {
            var render = new tbs_grid_render_string_1.TbsGridRenderString();
            render.setBounding(this);
        }
    };
    return TbsGridRenderPanel30;
}());
exports.TbsGridRenderPanel30 = TbsGridRenderPanel30;


/***/ }),

/***/ 2693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderPanel40 = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var tbs_grid_render_string_1 = __webpack_require__(7390);
var TbsGridRenderPanel40 = /** @class */ (function () {
    function TbsGridRenderPanel40(grid) {
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
    TbsGridRenderPanel40.prototype.start = function (panelName, tableCell, column, rowIndex, columnIndex) {
        var grid = this.grid;
        var render = this;
        this.panelName = panelName;
        this.tableCell = tableCell;
        this.column = column;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.columnName = column[tbs_grid_types_1.columnAlias.name];
        this.columnType = column[tbs_grid_types_1.columnAlias.type];
        this.visible = column[tbs_grid_types_1.columnAlias.visible];
        this.width = column[tbs_grid_types_1.columnAlias.width];
        var columnTable = null;
        var dataTable = null;
        if (['panel40', 'panel42'].indexOf(this.panelName) != -1) {
            columnTable = grid.top_column_table;
            dataTable = grid.top_table;
        }
        else if (['panel50', 'panel52'].indexOf(this.panelName) != -1) {
            columnTable = grid.footer_column_table;
            dataTable = grid.footer_table;
        }
        var summaryColumn = columnTable.selectRow(tbs_grid_types_1.columnAlias.name, this.columnName);
        if (grid.notNull(summaryColumn)) {
            this.align = grid.notNull(summaryColumn[tbs_grid_types_1.columnAlias.align]) ?
                summaryColumn[tbs_grid_types_1.columnAlias.align] : column[tbs_grid_types_1.columnAlias.align];
            this.className = grid.notNull(summaryColumn[tbs_grid_types_1.columnAlias.className]) ?
                summaryColumn[tbs_grid_types_1.columnAlias.className] : column[tbs_grid_types_1.columnAlias.className];
            this.cellValue = grid.getValue(this.rowIndex, this.columnName, dataTable);
            this.cellText = grid.getText(this.rowIndex, this.columnName, dataTable);
        }
        else {
            this.align = column[tbs_grid_types_1.columnAlias.align];
            this.className = column[tbs_grid_types_1.columnAlias.className];
        }
        render.updateData();
    };
    TbsGridRenderPanel40.prototype.updateData = function () {
        var grid = this.grid;
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
    };
    TbsGridRenderPanel40.prototype.createHtml = function () {
        var render = new tbs_grid_render_string_1.TbsGridRenderString();
        render.addElement(this);
        this.setBounding();
    };
    TbsGridRenderPanel40.prototype.setBounding = function () {
        var render = new tbs_grid_render_string_1.TbsGridRenderString();
        render.setBounding(this);
    };
    return TbsGridRenderPanel40;
}());
exports.TbsGridRenderPanel40 = TbsGridRenderPanel40;


/***/ }),

/***/ 4911:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderButton = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridRenderButton = /** @class */ (function () {
    function TbsGridRenderButton() {
    }
    TbsGridRenderButton.prototype.addElement = function (param) {
        var element = tbs_grid_dom_1.TbsGridDom.createElement('button');
        var tableCell = param.tableCell;
        var count = tableCell.querySelectorAll('.tbs-grid-html-button').length;
        var rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    };
    TbsGridRenderButton.prototype.setBounding = function (param) {
        var element = param.tableCell.querySelector('.tbs-grid-html-button');
        if (!element)
            return;
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        tbs_grid_dom_1.TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.innerHTML = param.cellText;
    };
    return TbsGridRenderButton;
}());
exports.TbsGridRenderButton = TbsGridRenderButton;


/***/ }),

/***/ 2090:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderCheckbox = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridRenderCheckbox = /** @class */ (function () {
    function TbsGridRenderCheckbox() {
    }
    TbsGridRenderCheckbox.prototype.addElement = function (param) {
        var element = tbs_grid_dom_1.TbsGridDom.createElement('checkbox');
        var tableCell = param.tableCell;
        var count = tableCell.querySelectorAll('.tbs-grid-html-checkbox').length;
        var rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    };
    TbsGridRenderCheckbox.prototype.setBounding = function (param) {
        var element = param.tableCell.querySelector('.tbs-grid-html-checkbox');
        if (!element)
            return;
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        if (['panel30', 'panel31', 'panel32'].indexOf(param.panelName) != -1) {
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        }
        tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.checked = param.cellValue;
    };
    return TbsGridRenderCheckbox;
}());
exports.TbsGridRenderCheckbox = TbsGridRenderCheckbox;


/***/ }),

/***/ 3328:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderGroup = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridRenderGroup = /** @class */ (function () {
    function TbsGridRenderGroup() {
    }
    TbsGridRenderGroup.prototype.addElement = function (param) {
        var row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            var icon = tbs_grid_dom_1.TbsGridDom.createElement('icon');
            var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(icon);
            param.tableCell.childNodes[0].append(element);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
        else {
            var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '')
                param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
    };
    TbsGridRenderGroup.prototype.setBounding = function (param) {
        var row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param);
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
            param.grid.classGroup.setGroupIcon(param.tableCell, param.rowIndex);
            var element = param.tableCell.querySelector('.tbs-grid-html-string');
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param);
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
            var element = param.tableCell.querySelector('.tbs-grid-html-string');
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
        else {
            tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param);
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
            var element = param.tableCell.querySelector('.tbs-grid-html-string');
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
    };
    return TbsGridRenderGroup;
}());
exports.TbsGridRenderGroup = TbsGridRenderGroup;


/***/ }),

/***/ 5948:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderImg = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRenderImg = /** @class */ (function () {
    function TbsGridRenderImg() {
    }
    TbsGridRenderImg.prototype.addElement = function (param) {
        var element = tbs_grid_dom_1.TbsGridDom.createElement('img');
        var tableCell = param.tableCell;
        var count = tableCell.querySelectorAll('.tbs-grid-html-img').length;
        var rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    };
    TbsGridRenderImg.prototype.setBounding = function (param) {
        var element = param.tableCell.querySelector('.tbs-grid-html-img');
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.src = param.grid.getUserImageRoot(param.columnName) + param.cellValue;
        element.width = param.grid.getRenderer(param.columnName, 'width') ?
            param.grid.getRenderer(param.columnName, 'width') : param.column[tbs_grid_types_1.columnAlias.width];
        element.height = param.grid.getRenderer(param.columnName, 'height') ?
            param.grid.getRenderer(param.columnName, 'height') : param.grid.rowHeight;
    };
    return TbsGridRenderImg;
}());
exports.TbsGridRenderImg = TbsGridRenderImg;


/***/ }),

/***/ 7927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderLink = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridRenderLink = /** @class */ (function () {
    function TbsGridRenderLink() {
    }
    TbsGridRenderLink.prototype.addElement = function (param) {
        var element = tbs_grid_dom_1.TbsGridDom.createElement('link');
        var tableCell = param.tableCell;
        var count = tableCell.querySelectorAll('.tbs-grid-html-link').length;
        var rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    };
    TbsGridRenderLink.prototype.setBounding = function (param) {
        var element = param.tableCell.querySelector('.tbs-grid-html-link');
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.href = param.cellValue;
        element.innerHTML = param.cellText;
        element.target = '_blank';
    };
    return TbsGridRenderLink;
}());
exports.TbsGridRenderLink = TbsGridRenderLink;


/***/ }),

/***/ 7390:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderString = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridRenderString = /** @class */ (function () {
    function TbsGridRenderString() {
    }
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    TbsGridRenderString.prototype.addElement = function (param) {
        var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
        var tableCell = param.tableCell;
        var count = tableCell.querySelectorAll('.tbs-grid-html-string').length;
        var rootChildCount = tableCell.childNodes[0].childNodes.length;
        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0)
            tableCell.childNodes[0].append(element);
    };
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    TbsGridRenderString.prototype.setBounding = function (param) {
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param);
        if (param.depth && param.columnIndex == 0) {
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
        }
        else {
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        }
        var element = param.tableCell.querySelector('.tbs-grid-html-string');
        if (param.cellValue) {
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
        else {
            tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', '');
        }
    };
    return TbsGridRenderString;
}());
exports.TbsGridRenderString = TbsGridRenderString;


/***/ }),

/***/ 9091:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRenderTree = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRenderTree = /** @class */ (function () {
    function TbsGridRenderTree() {
    }
    TbsGridRenderTree.prototype.addElement = function (param) {
        var row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        ;
        var children = row[tbs_grid_types_1.columnAlias.children];
        for (var i = param.tableCell.childNodes[0].childNodes.length - 1; i >= 0; i--) {
            param.tableCell.childNodes[0].childNodes[i].remove();
        }
        if (children.length > 0) {
            var icon = tbs_grid_dom_1.TbsGridDom.createElement('icon');
            var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
            param.tableCell.childNodes[0].appendChild(icon);
            param.tableCell.childNodes[0].appendChild(element);
        }
        else {
            var element = tbs_grid_dom_1.TbsGridDom.createElement('string');
            param.tableCell.childNodes[0].appendChild(element);
        }
    };
    TbsGridRenderTree.prototype.setBounding = function (param) {
        var row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        var children = row[tbs_grid_types_1.columnAlias.children];
        var rowDepth = row[tbs_grid_types_1.columnAlias.depth];
        tbs_grid_dom_1.TbsGridDom.setStyle(param.tableCell, param);
        if (children.length > 0) {
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (rowDepth * 15) + 'px');
            param.grid.classTree.setTreeIcon(param.tableCell, param.rowIndex);
        }
        else {
            tbs_grid_dom_1.TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', ((rowDepth * 15) + 15) + 'px');
        }
        var element = param.tableCell.querySelector('.tbs-grid-html-string');
        tbs_grid_dom_1.TbsGridDom.setCell(element, 'textContent', param.cellText);
    };
    return TbsGridRenderTree;
}());
exports.TbsGridRenderTree = TbsGridRenderTree;


/***/ }),

/***/ 3187:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridFooter = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridFooter = /** @class */ (function () {
    function TbsGridFooter(grid) {
        this.grid = grid;
        this.selector = "#".concat(grid.gridId);
    }
    TbsGridFooter.prototype.setFooterColumns = function (columns) {
        var grid = this.grid;
        columns.map(function (column) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'center';
            grid.footer_column_table.insert(column);
        });
    };
    TbsGridFooter.prototype.setFooterData = function () {
        var grid = this.grid;
        if (grid.footer_column_table.count() == 0)
            return;
        var dataRow = {};
        var columns = grid.column_table.data;
        for (var x = 0, len = columns.length; x < len; x++) {
            var column = columns[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            dataRow[columnName] = null;
        }
        grid.footer_table.insert(dataRow);
        /* get sum, avg */
        for (var x = 0, len2 = grid.footer_column_table.count(); x < len2; x++) {
            var footerColumn = grid.footer_column_table.data[x];
            var columnName = footerColumn[tbs_grid_types_1.columnAlias.name];
            var summaryType = footerColumn[tbs_grid_types_1.columnAlias.summaryType];
            var result = null;
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
                grid.footer_table.updateByRowIndex(0, columnName, footerColumn[tbs_grid_types_1.columnAlias.text]);
        }
    };
    TbsGridFooter.prototype.setFooterValue = function (rowIndex, columnName, value) {
        var grid = this.grid;
        var column = grid.column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
        var result = grid.getFormat(column, value);
        grid.footer_table.updateByRowIndex(rowIndex, columnName, result.value);
    };
    return TbsGridFooter;
}());
exports.TbsGridFooter = TbsGridFooter;


/***/ }),

/***/ 6869:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridTop = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridTop = /** @class */ (function () {
    function TbsGridTop(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    TbsGridTop.prototype.setTopColumns = function (columns) {
        var grid = this.grid;
        columns.map(function (column) {
            if (grid.null(column[tbs_grid_types_1.columnAlias.align]))
                column[tbs_grid_types_1.columnAlias.align] = 'center';
            grid.top_column_table.insert(column);
        });
    };
    TbsGridTop.prototype.setTopData = function () {
        var grid = this.grid;
        if (grid.top_column_table.count() == 0)
            return;
        var topColumns = grid.top_column_table.data;
        var dataRow = {};
        var columns = grid.column_table.data;
        for (var x = 0, len = columns.length; x < len; x++) {
            var column = columns[x];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            dataRow[columnName] = null;
        }
        grid.top_table.insert(dataRow);
        /* get sum, avg */
        for (var x = 0, len2 = grid.top_column_table.count(); x < len2; x++) {
            var footerColumn = grid.top_column_table.data[x];
            var columnName = footerColumn[tbs_grid_types_1.columnAlias.name];
            var summaryType = footerColumn[tbs_grid_types_1.columnAlias.summaryType];
            var result = null;
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
                grid.top_table.updateByRowIndex(0, columnName, footerColumn[tbs_grid_types_1.columnAlias.text]);
        }
    };
    TbsGridTop.prototype.setTopValue = function (rowIndex, columnName, value) {
        var grid = this.grid;
        var column = grid.column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
        var result = grid.getFormat(column, value);
        grid.top_table.updateByRowIndex(rowIndex, columnName, result.value);
    };
    return TbsGridTop;
}());
exports.TbsGridTop = TbsGridTop;


/***/ }),

/***/ 5052:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsBase = void 0;
var TbsBase = /** @class */ (function () {
    function TbsBase() {
        this.debug_mode = false;
    }
    TbsBase.prototype.null = function (p) {
        return p == null || p == undefined;
    };
    TbsBase.prototype.notNull = function (p) {
        return !(this.null(p));
    };
    TbsBase.prototype.empty = function (p) {
        return p == null || p == undefined || this.trim(p) == '';
    };
    TbsBase.prototype.notEmpty = function (p) {
        return !(this.empty(p));
    };
    TbsBase.prototype.isNull = function (a, b) {
        return this.null(a) ? b : a;
    };
    TbsBase.prototype.error = function (p) {
        if (this.debug_mode) {
            console.log('[TbsGrid error] ' + p);
        }
    };
    TbsBase.prototype.caution = function (p) {
        if (this.debug_mode) {
            console.log('[TbsGrid caution] ' + p);
        }
    };
    TbsBase.prototype.copyJson = function (p) {
        return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
    };
    TbsBase.prototype.substr2 = function (s, index, len) {
        var result = '';
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
    };
    TbsBase.prototype.trim = function (s) {
        if (this.null(s))
            return '';
        else
            return s.toString().replace(/^\s+|\s+$/gi, "");
    };
    TbsBase.prototype.round = function (num, dpLen) {
        if (num > 0)
            return +(Math.round(Number(num.toString() + 'e+' + dpLen.toString())) + 'e-' + dpLen.toString());
        else
            return -(Math.round(Number(Math.abs(num).toString() + 'e+' + dpLen.toString())) + 'e-' + dpLen.toString());
    };
    TbsBase.prototype.ceil = function (num, dpLen) {
        var s = '1';
        for (var i = 0; i < dpLen; i++) {
            s += '0';
        }
        var n = parseInt(s);
        return (Math.ceil(num * n) / n);
    };
    TbsBase.prototype.floor = function (num, dpLen) {
        var s = '1';
        for (var i = 0; i < dpLen; i++) {
            s += '0';
        }
        var n = parseInt(s);
        return (Math.floor(num * n) / n);
    };
    TbsBase.prototype.getProperty = function (jsonObject, property) {
        if (this.empty(jsonObject[property]))
            return null;
        else
            return jsonObject[property];
    };
    TbsBase.prototype.printMe = function () {
    };
    return TbsBase;
}());
exports.TbsBase = TbsBase;


/***/ }),

/***/ 5043:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridCell = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var TbsGridCell = /** @class */ (function () {
    function TbsGridCell(grid, column) {
        this.grid = grid;
        this.column = column;
    }
    TbsGridCell.prototype.createHtml = function () {
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
    };
    TbsGridCell.prototype.createCell = function () {
    };
    TbsGridCell.prototype.createTemplate = function () {
    };
    TbsGridCell.prototype.hideTableCells = function (grid, panelName, tableRow, lastColumnIndex) {
        if (grid.fixedColumnIndex != -1) {
            for (var x = 0, len = grid.column_table.count(); x < len; x++) {
                var tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
    };
    TbsGridCell.prototype.showSelectedCells = function (grid, panelName, tableCell, rowIndex, cellIndex) {
        var value = grid.isSelectedCell(panelName, rowIndex, cellIndex);
        if (value == 1) {
            if (grid.startRowIndex == rowIndex && grid.startCellIndex == cellIndex)
                tableCell.classList.add('tbs-grid-cell-start');
            else
                tableCell.classList.add('tbs-grid-cell-select');
        }
    };
    return TbsGridCell;
}());
exports.TbsGridCell = TbsGridCell;
/*
export class TbsGridCellGroup extends TbsGridCell {}

export class TbsGridCellTree extends TbsGridCell {}

export class TbsGridCellCheckbox extends TbsGridCell {}

export class TbsGridCellImage extends TbsGridCell {}

export class TbsGridCellButton extends TbsGridCell {}

*/ 


/***/ }),

/***/ 4476:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tbsGridConfigs = void 0;
exports.tbsGridConfigs = {};
/**
 * Basically, the language with the fastest order is applied.
 */
exports.tbsGridConfigs.en = {
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
exports.tbsGridConfigs.ko = {
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
exports.tbsGridConfigs.options = {
    imageRoot: 'https://cdn.jsdelivr.net/npm/tbsgrid@0.2.35/dist/assets/img/',
    userImageRoot: 'https://cdn.jsdelivr.net/npm/tbsgrid@0.2.35/dist/assets/userImg/',
    // imageRoot: '/src/assets/img/',
    // userImageRoot: '/src/assets/userImg/',
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent), // true, false
    userAgent: navigator.userAgent, // 'safari' etc
    trueValue: 'Y', // checkbox value
    falseValue: 'N',
    elseValue: 'N',
};


/***/ }),

/***/ 4678:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridControl = void 0;
var TbsGridControl = /** @class */ (function () {
    function TbsGridControl(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    TbsGridControl.prototype.after_changeColumnOrder = function () {
        var grid = this.grid;
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.updateGrid();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
        grid.classPanel70.setDataPanel();
    };
    TbsGridControl.prototype.after_addColumn = function () {
        var grid = this.grid;
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.updateGrid();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    };
    TbsGridControl.prototype.after_removeColumn = function (headerColumns, columns) {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classColumn.createColumnTable();
        grid.classHeader.createHeaderColumns();
        grid.classHeader.createHeaderColumnTable();
        grid.updateGrid();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    };
    TbsGridControl.prototype.after_showFilterPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel70.setDataPanel();
        grid.classPanel30.setDataPanel(0);
    };
    TbsGridControl.prototype.after_hideFilterPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel70.setDataPanel();
        grid.classPanel30.setDataPanel(0);
    };
    TbsGridControl.prototype.after_showSortrPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel30.setDataPanel(0);
    };
    TbsGridControl.prototype.after_hideSortPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel30.setDataPanel(0);
    };
    TbsGridControl.prototype.after_setColumnVisible = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classControl = this;
        grid.classRange.removeRange(0, -1);
        grid.apply();
    };
    return TbsGridControl;
}());
exports.TbsGridControl = TbsGridControl;


/***/ }),

/***/ 5359:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridDom = void 0;
var tbs_base_1 = __webpack_require__(5052);
var TbsGridDom = /** @class */ (function (_super) {
    __extends(TbsGridDom, _super);
    function TbsGridDom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TbsGridDom.createElement = function (type) {
        var tag = 'span';
        var tagType = '';
        var className = 'tbs-grid-html-string';
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
    };
    TbsGridDom.createHtml = function (tag, tagType, className) {
        var element = document.createElement(tag);
        element.classList.add(className);
        if (tag == 'input')
            element.type = tagType;
        return element;
    };
    TbsGridDom.addElement = function () {
    };
    TbsGridDom.setBounding = function () {
    };
    TbsGridDom.setStyle = function (tableCell, param) {
        var className = param.className;
        var display = param.visible == true ? '' : 'none';
        var textAlign = param.align;
        var width = param.width;
        TbsGridDom.addUserClass(tableCell, className); // user event
        TbsGridDom.setCellStyle(tableCell, 'display', display);
        TbsGridDom.setCellStyle(tableCell, 'textAlign', textAlign); // user event
        TbsGridDom.setCellStyle(tableCell, 'width', width);
    };
    TbsGridDom.setCell = function (element, property, value) {
        if (element[property] != value)
            element[property] = value;
    };
    TbsGridDom.setCellStyle = function (tableCell, property, value) {
        if (tableCell.style[property] != value)
            tableCell.style[property] = value;
    };
    TbsGridDom.addUserClass = function (tableCell, className) {
        TbsGridDom.removeUserClass(tableCell);
        if (className && className != '')
            tableCell.classList.add(className);
    };
    TbsGridDom.removeUserClass = function (tableCell) {
        // Create classNameArray : for remove except tbs-* className
        var classNameArray = [];
        for (var i = 0, len = tableCell.classList.length; i < len; i++) {
            if (tableCell.classList[i].startsWith('tbs-grid-'))
                continue;
            else
                classNameArray.push(tableCell.classList[i]);
        }
        // Remove classNameArray
        for (var i = 0, len = classNameArray.length; i < len; i++)
            tableCell.classList.remove(classNameArray[i]);
    };
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
    TbsGridDom.createElementCheckbox = function () {
        var element = document.createElement('input');
        element.type = 'checkbox';
        element.classList.add('tbs-grid-html-checkbox');
        return element;
    };
    TbsGridDom.createElementCellDiv = function () {
        var element = document.createElement('div');
        element.classList.add('tbs-grid-cell-div');
        return element;
    };
    TbsGridDom.createElementCellIcon = function () {
        var element = document.createElement('span');
        element.classList.add('tbs-grid-html-icon');
        return element;
    };
    TbsGridDom.createElementCellText = function () {
        var element = document.createElement('span');
        element.classList.add('tbs-grid-html-string');
        element.textContent = '';
        return element;
    };
    TbsGridDom.prependCheckbox = function (element, childElement) {
        var el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined)
            element.prepend(childElement);
    };
    TbsGridDom.prependIcon = function (element, childElement) {
        var el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined)
            element.prepend(childElement);
    };
    /**
     * Table Functions
     */
    TbsGridDom.createTable = function () {
        var table = document.createElement('table');
        table.className = 'tbs-grid-table';
        return table;
    };
    return TbsGridDom;
}(tbs_base_1.TbsBase));
exports.TbsGridDom = TbsGridDom;


/***/ }),

/***/ 4533:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridFilter = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridFilter = /** @class */ (function () {
    function TbsGridFilter(grid) {
        this.grid = grid;
        this.selector = "#".concat(grid.gridId);
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
    TbsGridFilter.prototype.showFilterPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showFilterPanel = true;
        grid.classControl.after_showFilterPanel();
    };
    TbsGridFilter.prototype.hideFilterPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.options.showFilterPanel = false;
        grid.classFilter.initFilterData();
        grid.classControl.after_hideFilterPanel();
    };
    TbsGridFilter.prototype.filters = function () {
        var grid = this.grid;
        var result = [];
        grid.source_table.data.map(function (row) { return result.push(grid.copyJson(row)); });
        for (var i = 0, len = grid.filter_column_table.count(); i < len; i++) {
            var filterColumn = grid.filter_column_table.data[i];
            result = grid.classFilter.filter(result, filterColumn);
        }
        grid.view_table.remove();
        result.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classScroll.setBarPosition(grid.code_vertical, 0);
    };
    TbsGridFilter.prototype.filter = function (data, filterColumn) {
        var grid = this.grid;
        var column = grid.getColumn(filterColumn.name);
        var columnType = column[tbs_grid_types_1.columnAlias.type];
        var columnName = filterColumn.name;
        var filterType = filterColumn.type;
        var value = filterColumn.value;
        return data.filter(function (dataRow) {
            var bool = true;
            if (columnType == tbs_grid_types_1.CellType.number) {
                var columnText = dataRow[columnName];
                var isExist = grid.classFilter.filterNumberByType(filterType, value, columnText);
                return isExist;
            }
            else if (columnType == tbs_grid_types_1.CellType.string || columnType == tbs_grid_types_1.CellType.date || columnType || tbs_grid_types_1.CellType.combo) {
                var val = dataRow[columnName];
                var columnText = grid.getFormatText(column, val);
                var isExist = grid.classFilter.filterStringByType(filterType, value, columnText);
                return isExist;
            }
            else
                return true;
        });
    };
    TbsGridFilter.prototype.filterNumberByType = function (filterType, n, targetNumber) {
        var grid = this.grid;
        // @Rule : when number is null, number is zero
        if (grid.null(n))
            n = 0;
        if (grid.null(targetNumber))
            targetNumber = 0;
        var toNumber = null;
        if (filterType == tbs_grid_types_1.FilterType.Between) {
            var arr = n.split('-');
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
        if (filterType == tbs_grid_types_1.FilterType.Equal) {
            return n == targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.NotEqual) {
            return n != targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.Greater) {
            return n < targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.GreaterEqual) {
            return n <= targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.Less) {
            return n > targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.LessEqual) {
            return n >= targetNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.Between) {
            return targetNumber >= n && targetNumber <= toNumber;
        }
        else if (filterType == tbs_grid_types_1.FilterType.Blank) {
            return grid.null(targetNumber) || targetNumber == 0;
        }
    };
    TbsGridFilter.prototype.filterStringByType = function (filterType, s, targetString) {
        var regExp;
        // String comparisons are case-insensitive.
        s = s.toLowerCase();
        targetString = targetString.toLowerCase();
        if (filterType == tbs_grid_types_1.FilterType.Equal) {
            regExp = new RegExp("^".concat(s, "$"));
            return regExp.test(targetString);
        }
        else if (filterType == tbs_grid_types_1.FilterType.NotEqual) {
            regExp = new RegExp("^".concat(s, "$"));
            return regExp.test(targetString) == false;
        }
        else if (filterType == tbs_grid_types_1.FilterType.Include) {
            regExp = new RegExp("".concat(s));
            return regExp.test(targetString);
        }
        else if (filterType == tbs_grid_types_1.FilterType.NotInclude) {
            regExp = new RegExp("".concat(s));
            return regExp.test(targetString) == false;
        }
        else if (filterType == tbs_grid_types_1.FilterType.StartCharacter) {
            regExp = new RegExp("^".concat(s));
            return regExp.test(targetString);
        }
        else if (filterType == tbs_grid_types_1.FilterType.EndCharacter) {
            regExp = new RegExp("".concat(s, "$"));
            return regExp.test(targetString);
        }
        else if (filterType == tbs_grid_types_1.FilterType.Blank) {
            regExp = new RegExp("^$");
            return regExp.test(targetString);
        }
    };
    TbsGridFilter.prototype.setFilterColumn = function (column, filterType, word) {
        var grid = this.grid;
        var dataRow = grid.filter_column_table.selectRow(tbs_grid_types_1.columnAlias.name, column[tbs_grid_types_1.columnAlias.name]);
        if (grid.null(dataRow)) {
            var item = {};
            item.name = column[tbs_grid_types_1.columnAlias.name];
            item.type = filterType;
            item.value = word;
            grid.filter_column_table.insert(item);
        }
        else {
            var rowId = dataRow[tbs_grid_types_1.columnAlias.rowId];
            grid.filter_column_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.type, filterType);
            grid.filter_column_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.value, word);
        }
    };
    TbsGridFilter.prototype.removeFilterColumn = function (column) {
        var grid = this.grid;
        var rowId = column[tbs_grid_types_1.columnAlias.rowId];
        grid.filter_column_table.removeByRowId(rowId);
    };
    TbsGridFilter.prototype.createFilterCombo = function (column) {
        var grid = this.grid;
        var combo = document.createElement('select');
        if (column[tbs_grid_types_1.columnAlias.type] == tbs_grid_types_1.CellType.number) {
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Select, grid.getConfigLabel('filter_select'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Equal, grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.GreaterEqual, grid.getConfigLabel('filter_greaterEqual'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.LessEqual, grid.getConfigLabel('filter_lessEqual'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Greater, grid.getConfigLabel('filter_greater'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Less, grid.getConfigLabel('filter_less'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Between, grid.getConfigLabel('filter_between'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Blank, grid.getConfigLabel('filter_blank'));
        }
        else {
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Include, grid.getConfigLabel('filter_include'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Equal, grid.getConfigLabel('filter_equal'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.StartCharacter, grid.getConfigLabel('filter_startCharacter'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.EndCharacter, grid.getConfigLabel('filter_endCharacter'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.Blank, grid.getConfigLabel('filter_blank'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.NotEqual, grid.getConfigLabel('filter_notEqual'));
            grid.classFilter.addFilterComboOption(combo, tbs_grid_types_1.FilterType.NotInclude, grid.getConfigLabel('filter_notInclude'));
        }
        return combo;
    };
    TbsGridFilter.prototype.addFilterComboOption = function (combo, value, text) {
        var grid = this.grid;
        var option = document.createElement('option');
        option.value = value;
        option.text = text;
        combo.add(option);
    };
    TbsGridFilter.prototype.initFilterData = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.filter_column_table.remove();
        var inputs = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-input');
        var combos = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-cell-filter-combo');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
            combos[i].selectedIndex = 0;
        }
        grid.view_table.remove();
        grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
        grid.classRange.removeRange(0, -1);
        if (grid.group_column_table.count() > 0) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            grid.classRange.removeRange(0, -1);
            grid.apply();
        }
    };
    return TbsGridFilter;
}());
exports.TbsGridFilter = TbsGridFilter;


/***/ }),

/***/ 8980:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridGroup = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridGroup = /** @class */ (function () {
    function TbsGridGroup(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.openDepth = null;
        this.splitChar = '__$__';
    }
    TbsGridGroup.prototype.setGroupData = function (data, openDepth, isFirst) {
        if (openDepth === void 0) { openDepth = 1; }
        if (isFirst === void 0) { isFirst = true; }
        var selector = this.selector;
        var grid = this.grid;
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
            for (var i = 0, len = data.length; i < len; i++) {
                var dataRow = data[i];
                var item = {};
                for (var x = 0, len_1 = grid.column_table.count(); x < len_1; x++) {
                    var column = grid.column_table.data[x];
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    var val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
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
        grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
        /* Filter */
        grid.classFilter.filters();
        /* Add Group Column */
        grid.sort_column_table.data.map(function (dataRow) { return grid.temp_table.insert(grid.copyJson(dataRow)); });
        grid.sort_column_table.remove();
        grid.group_column_table.data.map(function (dataRow) {
            var columnName = dataRow[tbs_grid_types_1.columnAlias.name];
            //let groupOrder = grid.isNull(dataRow[columnAlias.order], '');
            var row = grid.temp_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName);
            if (row) {
                var order = row[tbs_grid_types_1.columnAlias.order];
                if (order == '')
                    order = 'asc';
                row[tbs_grid_types_1.columnAlias.order] = order;
                grid.sort_column_table.insert(row);
                // grid.group_column_table.update(columnName, columnAlias.order, order);
            }
            else {
                var item = {};
                item[tbs_grid_types_1.columnAlias.name] = columnName;
                item[tbs_grid_types_1.columnAlias.order] = 'asc';
                grid.sort_column_table.insert(item);
                // grid.group_column_table.update(columnName, columnAlias.order, 'asc');
            }
            var rowIndex = grid.temp_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, columnName);
            if (grid.notNull(rowIndex))
                grid.temp_table.remove(rowIndex);
        });
        grid.temp_table.data.map(function (dataRow) { return grid.sort_column_table.insert(grid.copyJson(dataRow)); });
        grid.temp_table.remove();
        /* Sorting */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        /* create group data */
        grid.classGroup.createGroupData();
        /* insert into view_table from group_table */
        grid.view_table.remove();
        for (var i = 0, len = grid.group_table.count(); i < len; i++) {
            var dataRow = grid.group_table.data[i];
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = ''; // S, U, I, D, blank
            dataRow[tbs_grid_types_1.columnAlias.isOpen] = false;
            for (var x = 0, len_2 = grid.column_table.count(); x < len_2; x++) {
                var column = grid.column_table.data[x];
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                var val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }
        grid.group_table.remove();
        /* Summary */
        grid.classGroup.getGroupSummary();
        // open depth
        grid.view_table.data.map(function (row) {
            var depth = row[tbs_grid_types_1.columnAlias.depth];
            row[tbs_grid_types_1.columnAlias.isOpen] = (depth < openDepth) ? true : false;
            row[tbs_grid_types_1.columnAlias.childRows] = [];
        });
        if (openDepth <= grid.group_column_table.count()) {
            for (var i = grid.view_table.count() - 1; i >= 0; i--) {
                var rootRow = grid.view_table.selectRowByRowIndex(i);
                var rootDepth = rootRow[tbs_grid_types_1.columnAlias.depth];
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
        if (grid.options[tbs_grid_types_1.columnAlias.autoWidth] == true)
            grid.setColumnAutoWidth();
        grid.classGroup.getGroupButtonList();
        grid.classScroll.setPanelSize();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    };
    TbsGridGroup.prototype.createGroupData = function () {
        var grid = this.grid;
        // create group data
        var groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
        groupData.map(function (row) {
            grid.source_table.currentRowId += 1;
            row[tbs_grid_types_1.columnAlias.rowId] = grid.source_table.currentRowId;
            grid.group_header_table.insert(grid.copyJson(row));
        });
        // insert group table  select * from view_table, group_header_table
        for (var i = 0, len = grid.group_header_table.count(); i < len; i++) {
            var rootRow = grid.group_header_table.selectRowByRowIndex(i);
            var children = [];
            var item = {};
            var rootDepth = rootRow[tbs_grid_types_1.columnAlias.depth];
            var rootString = this.getGroupKeyByDepth(rootRow, rootDepth);
            // get children group
            var isChild = false;
            for (var x = 0, len2 = grid.group_header_table.count(); x < len2; x++) {
                var row = grid.group_header_table.selectRowByRowIndex(x);
                var depth = row[tbs_grid_types_1.columnAlias.depth];
                var childString = this.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootString == childString) {
                    isChild = true;
                    children.push(row[tbs_grid_types_1.columnAlias.rowId]);
                }
                else {
                    if (isChild)
                        break;
                }
            }
            // insert group_header_table
            rootRow[tbs_grid_types_1.columnAlias.childRowIds] = children;
            rootRow[tbs_grid_types_1.columnAlias.isOpen] = false;
            grid.group_table.insert(rootRow);
            // insert view_table
            var arr = [];
            isChild = false;
            if (rootDepth == grid.group_column_table.count()) {
                for (var x = 0, len2 = grid.view_table.count(); x < len2; x++) {
                    var row = grid.view_table.selectRowByRowIndex(x);
                    var depth = grid.group_column_table.count() + 1;
                    var childString = this.getGroupKeyByDepth(row, rootDepth);
                    if (rootString == childString) {
                        isChild = true;
                        children.push(row[tbs_grid_types_1.columnAlias.rowId]);
                        arr.push(x);
                        row[tbs_grid_types_1.columnAlias.isOpen] = false;
                        row[tbs_grid_types_1.columnAlias.depth] = grid.group_column_table.count() + 1;
                        grid.group_table.insert(grid.copyJson(row));
                    }
                    else {
                        if (isChild)
                            break;
                    }
                }
                rootRow[tbs_grid_types_1.columnAlias.childRowIds] = children;
                //delete row
                if (arr.length > 0) {
                    var startRowIndex = arr[0];
                    var lastRowIndex = arr[arr.length - 1];
                    for (var x = lastRowIndex; x >= startRowIndex; x--) {
                        if (arr.indexOf(x) != -1)
                            grid.view_table.remove(x);
                    }
                }
            }
        }
    };
    TbsGridGroup.prototype.createGroupKeyData = function (dataRows, depth) {
        if (depth === void 0) { depth = 1; }
        var grid = this.grid;
        var resultRows = [];
        var result = [];
        var _loop_1 = function (i, len) {
            var rows = dataRows.reduce(function (acc, row) {
                var key = grid.classGroup.getGroupKeyByDepth(row, i);
                var tempRow = grid.classGroup.getGroupKeyRowByDepth(row, i);
                if (acc.hasOwnProperty(key) == false)
                    acc[key] = tempRow;
                return acc;
            }, {});
            rows = Object.values(rows);
            rows.map(function (row) { return resultRows.push(row); });
        };
        for (var i = depth, len = grid.group_column_table.count() + 1; i < len; i++) {
            _loop_1(i, len);
        }
        var addRow = function (dataRow) {
            var rootDepth = dataRow[tbs_grid_types_1.columnAlias.depth];
            var rootStr = grid.classGroup.getGroupKeyByDepth(dataRow, rootDepth);
            result.push(dataRow);
            for (var i = depth, len = resultRows.length; i < len; i++) {
                var row = resultRows[i];
                var depth_1 = row[tbs_grid_types_1.columnAlias.depth];
                var str = grid.classGroup.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth_1 && rootStr == str) {
                    addRow(row);
                }
            }
        };
        for (var i = 0, len = resultRows.length; i < len; i++) {
            var depth_2 = resultRows[i][tbs_grid_types_1.columnAlias.depth];
            if (depth_2 == 1)
                addRow(resultRows[i]);
        }
        return result;
    };
    TbsGridGroup.prototype.getGroupKeyByDepth = function (row, depth) {
        var grid = this.grid;
        var key = '';
        for (var i = 0; i < depth; i++) {
            var groupColumn = grid.group_column_table.data[i];
            var name_1 = groupColumn[tbs_grid_types_1.columnAlias.name];
            key += this.splitChar + grid.isNull(row[name_1], '');
        }
        return key;
    };
    TbsGridGroup.prototype.getGroupKeyRowByDepth = function (row, depth) {
        var grid = this.grid;
        var tempRow = {};
        for (var i = 0; i < depth; i++) {
            var groupColumn = grid.group_column_table.data[i];
            var name_2 = groupColumn[tbs_grid_types_1.columnAlias.name];
            tempRow[name_2] = row[name_2];
            tempRow[tbs_grid_types_1.columnAlias.depth] = depth;
        }
        return tempRow;
    };
    /**
     * Group Sum, Avg
     */
    TbsGridGroup.prototype.getGroupDepthSummary = function (rowIndex) {
        // 최 하위 depth
        var grid = this.grid;
        var rootRow = grid.view_table.selectRowByRowIndex(rowIndex);
        var rootDepth = rootRow[tbs_grid_types_1.columnAlias.depth];
        // if (rootDepth <= grid.group_column_table.count()) return;
        var resultRows = [];
        for (var i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            var row = grid.view_table.data[i];
            if (grid.null(row))
                break;
            var depth = row[tbs_grid_types_1.columnAlias.depth];
            if (rootDepth + 1 == depth)
                resultRows.push(row);
            else if (rootDepth == depth)
                break;
        }
        var _loop_2 = function (i, len) {
            var column = grid.column_table.data[i];
            var columnName = column[tbs_grid_types_1.columnAlias.name];
            if (grid.null(column[tbs_grid_types_1.columnAlias.summaryType]))
                return "continue";
            var summaryType = column[tbs_grid_types_1.columnAlias.summaryType];
            var arrayItem = [];
            resultRows.map(function (row) {
                var item = grid.isNull(row[columnName], 0);
                item = item == '' ? 0 : item;
                arrayItem.push(Number(item));
            });
            var result = void 0;
            if (summaryType == 'sum') {
                result = arrayItem.reduce(function (a, b) { return a + b; }, 0);
            }
            else if (summaryType == 'avg') {
                result = arrayItem.reduce(function (a, b) { return a + b; }, 0);
            }
            else if (summaryType == 'max') {
                result = Math.max.apply(null, arrayItem);
            }
            else if (summaryType == 'min') {
                result = Math.min.apply(null, arrayItem);
            }
            rootRow[columnName] = result;
        };
        for (var i = 0, len = grid.column_table.count(); i < len; i++) {
            _loop_2(i, len);
        }
        var childCount = 0;
        if (rootDepth < grid.group_column_table.count()) {
            resultRows.map(function (row) { return childCount += row[tbs_grid_types_1.columnAlias.childCount]; });
        }
        else {
            childCount = resultRows.length;
        }
        rootRow[tbs_grid_types_1.columnAlias.childCount] = childCount;
    };
    TbsGridGroup.prototype.getGroupSummary = function () {
        var grid = this.grid;
        for (var depthIndex = grid.group_column_table.count(); depthIndex >= 1; depthIndex--) {
            for (var i = grid.view_table.count() - 1; i >= 0; i--) {
                var row = grid.view_table.data[i];
                var depth = row[tbs_grid_types_1.columnAlias.depth];
                if (depth == depthIndex)
                    this.getGroupDepthSummary(i);
            }
        }
        // agv 만 나중에...
        for (var i = grid.view_table.count() - 1; i >= 0; i--) {
            var row = grid.view_table.data[i];
            var depth = row[tbs_grid_types_1.columnAlias.depth];
            if (depth <= grid.group_column_table.count()) {
                for (var x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                    var column = grid.column_table.data[x];
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    var summaryType = grid.isNull(column[tbs_grid_types_1.columnAlias.summaryType], '');
                    if (summaryType == 'avg') {
                        row[columnName] = row[columnName] / row[tbs_grid_types_1.columnAlias.childCount];
                    }
                }
            }
        }
    };
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
    TbsGridGroup.prototype.setGroupIcon = function (tableCell, rowIndex) {
        var grid = this.grid;
        var row = grid.getRow(rowIndex);
        var childRows = grid.isNull(row[tbs_grid_types_1.columnAlias.childRows], []);
        var element = tableCell.querySelector('.tbs-grid-html-icon');
        if (childRows.length > 0)
            grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
        else
            grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');
    };
    TbsGridGroup.prototype.toggleGroupIcon = function (rowIndex, element, type) {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.null(element))
            return;
        if (type == tbs_grid_types_1.columnAlias.open) {
            element.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'tree_open.png)';
        }
        else if (type == tbs_grid_types_1.columnAlias.closed) {
            element.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'tree_closed.png)';
        }
        else
            element.style['backgroundImage'] = '';
    };
    TbsGridGroup.prototype.isGroupChildrenRow = function (rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var result = false;
        var row = grid.getRow(rowIndex);
        var childRow = grid.getRow(rowIndex + 1);
        if (grid.null(childRow))
            result = false;
        else {
            if (row[tbs_grid_types_1.columnAlias.num] == childRow[tbs_grid_types_1.columnAlias.parentNum])
                result = true;
        }
        return result;
    };
    TbsGridGroup.prototype.getGroupchildRows = function (folding, rowIndex) {
        var grid = this.grid;
        var result = [];
        var rowId = grid.view_table.selectRowIdByRowIndex(rowIndex);
        var startRowIndex = grid.group_table.selectRowIndexByRowId(rowId);
        var rootRow = grid.group_table.selectRowByRowIndex(startRowIndex);
        var rootDepth = rootRow[tbs_grid_types_1.columnAlias.depth];
        var isChild = false;
        if (folding == tbs_grid_types_1.columnAlias.open) {
            grid.group_table.updateByRowIndex(rowIndex, tbs_grid_types_1.columnAlias.isOpen, true);
            grid.group_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.isOpen, true);
            for (var i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                var dataRow = grid.group_table.selectRowByRowIndex(i);
                var depth = dataRow[tbs_grid_types_1.columnAlias.depth];
                var isOpen = dataRow[tbs_grid_types_1.columnAlias.isOpen];
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
        else if (folding == tbs_grid_types_1.columnAlias.closed) {
            grid.group_table.updateByRowIndex(rowIndex, tbs_grid_types_1.columnAlias.isOpen, false);
            grid.group_table.updateByRowId(rowId, tbs_grid_types_1.columnAlias.isOpen, false);
            for (var i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                var dataRow = grid.group_table.selectRowByRowIndex(i);
                var depth = dataRow[tbs_grid_types_1.columnAlias.depth];
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
    };
    TbsGridGroup.prototype.setGroupFolding = function (tableCell) {
        var selector = this.selector;
        var grid = this.grid;
        var rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        var row = grid.getRow(rowIndex);
        var spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return;
        var folding = grid.classGroup.getGroupFlodingStatus(tableCell);
        if (folding == tbs_grid_types_1.columnAlias.open)
            grid.classGroup.closeGroupRow(rowIndex);
        else if (folding == tbs_grid_types_1.columnAlias.closed)
            grid.classGroup.openGroupRow(rowIndex);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
    TbsGridGroup.prototype.getGroupFlodingStatus = function (tableCell) {
        var grid = this.grid;
        var spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return null;
        if (spanIcon.style['backgroundImage'].includes('tree_open.png'))
            return tbs_grid_types_1.columnAlias.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png'))
            return tbs_grid_types_1.columnAlias.closed;
        else
            return null;
    };
    TbsGridGroup.prototype.openChildRow = function (arrayRows, rootRow) {
        var rootDepth = rootRow[tbs_grid_types_1.columnAlias.depth];
        var rootChildRows = __spreadArray([], rootRow[tbs_grid_types_1.columnAlias.childRows], true);
        var isOpen = rootRow[tbs_grid_types_1.columnAlias.isOpen];
        if (isOpen && rootChildRows.length > 0) {
            rootRow[tbs_grid_types_1.columnAlias.childRows] = [];
            arrayRows.push(rootRow);
            for (var i = 0; i < rootChildRows.length; i++) {
                var row = rootChildRows[i];
                this.openChildRow(arrayRows, row);
            }
        }
        else {
            arrayRows.push(rootRow);
        }
    };
    TbsGridGroup.prototype.openGroupRow = function (rowIndex) {
        var grid = this.grid;
        var arrayRows = [];
        var rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        var rootDepth = rootDataRow[tbs_grid_types_1.columnAlias.depth];
        var rootChildRows = __spreadArray([], rootDataRow[tbs_grid_types_1.columnAlias.childRows], true);
        rootDataRow[tbs_grid_types_1.columnAlias.childRows] = [];
        rootDataRow[tbs_grid_types_1.columnAlias.isOpen] = true;
        if (rootChildRows.length == 0)
            return;
        for (var i = 0; i < rootChildRows.length; i++) {
            this.openChildRow(arrayRows, rootChildRows[i]);
        }
        grid.view_table.insertRowsAfter(arrayRows, rowIndex);
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    };
    TbsGridGroup.prototype.closeChildRow = function (rowIndex) {
        var grid = this.grid;
        var rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        var rootDepth = rootDataRow[tbs_grid_types_1.columnAlias.depth];
        var rootChildRows = grid.isNull(rootDataRow[tbs_grid_types_1.columnAlias.childRows], []);
        if (rootChildRows.length > 0)
            return;
        var arrayRowIndex = [];
        for (var i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            var row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row))
                break;
            var depth = row[tbs_grid_types_1.columnAlias.depth];
            if (depth == rootDepth + 1) {
                rootDataRow[tbs_grid_types_1.columnAlias.childRows].push(row);
                arrayRowIndex.push(i);
            }
            else
                break;
        }
        for (var i = arrayRowIndex.length - 1; i >= 0; i--)
            grid.view_table.remove(arrayRowIndex[i]);
    };
    TbsGridGroup.prototype.closeGroupRow = function (rowIndex) {
        var grid = this.grid;
        var rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        var rootDepth = rootDataRow[tbs_grid_types_1.columnAlias.depth];
        rootDataRow[tbs_grid_types_1.columnAlias.isOpen] = false;
        var arrayRowIndex = [];
        for (var i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            var row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row))
                break;
            var depth = row[tbs_grid_types_1.columnAlias.depth];
            if (depth > rootDepth && depth <= grid.group_column_table.count())
                arrayRowIndex.push(i);
            else if (depth == rootDepth)
                break;
        }
        for (var i = arrayRowIndex.length - 1; i >= 0; i--)
            this.closeChildRow(arrayRowIndex[i]);
        this.closeChildRow(rowIndex);
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    };
    /**
     * Group Button
     */
    TbsGridGroup.prototype.changeGroupButtonOrder = function (name, text, order, targetIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var groupColumns = grid.group_column_table.data;
        /* targetIndex != name Index */
        var sourceIndex = grid.group_column_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, name);
        if (sourceIndex == targetIndex)
            return;
        /* create column */
        var dataRow = {};
        dataRow[tbs_grid_types_1.columnAlias.name] = name;
        dataRow[tbs_grid_types_1.columnAlias.text] = text;
        /* update source column */
        grid.group_column_table.updateByRowIndex(sourceIndex, tbs_grid_types_1.columnAlias.name, '_temp_group');
        /* add dataRow */
        if (grid.null(targetIndex))
            grid.group_column_table.insert(dataRow);
        else
            grid.group_column_table.insertBefore(dataRow, targetIndex);
        /* remove source */
        sourceIndex = grid.group_column_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, '_temp_group');
        grid.group_column_table.remove(sourceIndex);
        /* add button in group panel */
        var button = grid.classGroup.createGroupButton(name);
        var bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classGroup.toggleGroupPlaceHolder();
        grid.classGroup.setGroupData(grid.view_table.data, null, false);
    };
    TbsGridGroup.prototype.addGroupButton = function (name, text, order, targetIndex) {
        var selector = this.selector;
        var grid = this.grid;
        /* Check Existing */
        if (grid.group_column_table.selectRows(tbs_grid_types_1.columnAlias.name, name, 1).length > 0)
            return;
        /* create dataRow */
        var dataRow = {};
        dataRow[tbs_grid_types_1.columnAlias.name] = name;
        dataRow[tbs_grid_types_1.columnAlias.text] = text;
        /* add dataRow */
        if (grid.null(targetIndex))
            grid.group_column_table.insert(dataRow);
        else
            grid.group_column_table.insertBefore(dataRow, targetIndex);
        /* add button in group panel */
        var button = grid.classGroup.createGroupButton(name);
        var bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        //grid.classGroup.toggleGroupPlaceHolder();
        var data = grid.view_table.data;
        grid.classGroup.setGroupData(data, this.openDepth, false);
    };
    TbsGridGroup.prototype.removeGroupButton = function (element) {
        var selector = this.selector;
        var grid = this.grid;
        /* get column name */
        var name = element.dataset.name;
        /* remove group data */
        var rowIndex = grid.group_column_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, name);
        grid.group_column_table.remove(rowIndex);
        // remove button in group panel
        var button = element.parentNode;
        button.remove();
        grid.classGroup.toggleGroupPlaceHolder();
        if (grid.group_column_table.count() > 0) {
            var data = grid.view_table.data;
            grid.classGroup.setGroupData(data, null, false);
        }
        else {
            this.initGroupData();
        }
    };
    TbsGridGroup.prototype.removeGroupButtonList = function () {
        var selector = this.selector;
        var grid = this.grid;
        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (var i = buttons.length - 1; i >= 0; i--)
            buttons[i].remove();
    };
    TbsGridGroup.prototype.getGroupButtonList = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classGroup.removeGroupButtonList();
        var bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        var groupColumns = grid.group_column_table.data;
        for (var i = 0, len = groupColumns.length; i < len; i++) {
            var groupColumn = groupColumns[i];
            var button = grid.classGroup.createGroupButton(groupColumn[tbs_grid_types_1.columnAlias.name]);
            var bar_1 = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
            if (grid.null(bar_1))
                return;
            bar_1.append(button);
        }
        grid.classGroup.toggleGroupPlaceHolder();
    };
    TbsGridGroup.prototype.createGroupButton = function (columnName) {
        var selector = this.selector;
        var grid = this.grid;
        var column = grid.getColumn(columnName);
        var text = document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent = column.header[tbs_grid_types_1.columnAlias.text];
        text.dataset.name = columnName;
        var icon = document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'remove.png)';
        icon.dataset.name = columnName;
        var button = document.createElement('div');
        button.classList.add('tbs-grid-panel-button');
        button.dataset.name = columnName;
        button.append(text);
        button.append(icon);
        return button;
    };
    TbsGridGroup.prototype.toggleGroupPlaceHolder = function () {
        var selector = this.selector;
        var grid = this.grid;
        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        var span = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
        if (buttons.length > 0)
            span.style.display = 'none';
        else
            span.style.display = '';
        grid.classControl.after_setColumnVisible();
    };
    TbsGridGroup.prototype.destroy = function () {
        var grid = this.grid;
        grid.setGridMode(tbs_grid_types_1.GridMode.grid);
        grid.group_column_table.remove();
        grid.group_table.remove();
        grid.classGroup.hideGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.setData(grid.source_table.data, null, false);
    };
    TbsGridGroup.prototype.showGroupPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classGroup.getGroupButtonList();
        grid.options.showGroupPanel = true;
        var panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.apply();
    };
    TbsGridGroup.prototype.hideGroupPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classGroup.removeGroupButtonList();
        grid.options.showGroupPanel = false;
        var panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.apply();
    };
    TbsGridGroup.prototype.initGroupData = function () {
        var grid = this.grid;
        grid.setGridMode(tbs_grid_types_1.GridMode.grid);
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
    };
    TbsGridGroup.prototype.getGroupRow = function (columnName) { return this.grid.group_column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName); };
    TbsGridGroup.prototype.expandGroup = function () {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.group_column_table.count() == 0)
            return;
        var openDepth = grid.classGroup.openDepth;
        if (grid.null(grid.classGroup.openDepth))
            openDepth = 1;
        else
            openDepth += 1;
        if (openDepth > grid.group_column_table.count() + 1)
            openDepth = grid.group_column_table.count();
        grid.classGroup.openDepth = openDepth;
        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    };
    TbsGridGroup.prototype.collapseGroup = function () {
        var selector = this.selector;
        var grid = this.grid;
        if (grid.group_column_table.count() == 0)
            return;
        var openDepth = grid.classGroup.openDepth;
        if (grid.null(grid.classGroup.openDepth))
            openDepth = grid.group_column_table.count();
        else
            openDepth -= 1;
        if (openDepth <= 0)
            openDepth = 1;
        grid.classGroup.openDepth = openDepth;
        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    };
    return TbsGridGroup;
}());
exports.TbsGridGroup = TbsGridGroup;


/***/ }),

/***/ 7018:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRangePanel = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRangePanel = /** @class */ (function () {
    function TbsGridRangePanel(grid, panelName) {
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
    TbsGridRangePanel.prototype.selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        var grid = this.grid;
        if (grid.column_table.count() == 0) {
            this.removeRange(0, -1, 0, -1);
            return;
        }
        var classRange = this;
        var panelName = this.panelName;
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
    };
    TbsGridRangePanel.prototype.setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type) {
        if (type === void 0) { type = 'add'; }
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
        classRange.startRowIndex = startRowIndex;
        classRange.startCellIndex = startCellIndex;
        classRange.lastRowIndex = lastRowIndex;
        classRange.lastCellIndex = lastCellIndex;
        var _startRowIndex = startRowIndex > lastRowIndex ? lastRowIndex : startRowIndex;
        var _lastRowIndex = startRowIndex > lastRowIndex ? startRowIndex : lastRowIndex;
        var _startCellIndex = startCellIndex > lastCellIndex ? lastCellIndex : startCellIndex;
        var _lastCellIndex = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;
        classRange._startRowIndex = _startRowIndex;
        classRange._startCellIndex = _startCellIndex;
        classRange._lastRowIndex = _lastRowIndex;
        classRange._lastCellIndex = _lastCellIndex;
        if (type == 'add' || this.selectRangeArray.length == 0) {
            var selectRange = {};
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
            var selectRange = classRange.selectRangeArray[0];
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
    };
    TbsGridRangePanel.prototype.setRangeValue = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        // fcuntion : set selected value
        //console.log(`startRowIndex, lastRowIndex, startCellIndex, lastCellIndex`);
        //console.log(`${startRowIndex}, ${lastRowIndex}, ${startCellIndex}, ${lastCellIndex}`);
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
        if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell') {
            startRowIndex = startRowIndex;
            lastRowIndex = startRowIndex;
        }
        //=============================================================	panel31 select
        var data = classRange.data_select_panel31;
        if (lastRowIndex == -1)
            lastRowIndex = data.length - 1;
        for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            var len = data.length;
            var bCount = false;
            for (var n = 0; n < len; n++) {
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
        var column = grid.column_table.data;
        var columnLen = column.length;
        data = classRange.data_select_panel30;
        for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
            if (lastCellIndex == -1)
                lastCellIndex = column.length - 1;
            var len = data.length;
            var bCount = false;
            for (var n = 0; n < len; n++) {
                if (rowIndex == data[n][0][0]) {
                    bCount = true;
                    for (var colIndex = 0; colIndex < columnLen; colIndex++) {
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
                var array = [];
                for (var colIndex = 0; colIndex < columnLen; colIndex++)
                    array.push(0);
                var row = [new Int32Array([rowIndex]), new Int8Array(array)];
                for (var colIndex = 0; colIndex < columnLen; colIndex++) {
                    if (colIndex >= startCellIndex && colIndex <= lastCellIndex)
                        row[1][colIndex] = 1;
                    else
                        row[1][colIndex] = 0;
                }
                data.push(row);
            }
        }
    };
    TbsGridRangePanel.prototype.removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
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
    };
    TbsGridRangePanel.prototype.addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
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
    };
    TbsGridRangePanel.prototype.getMaxCellIndexByMouseMove = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
        var panelName2;
        var panelName0;
        if (panelName == 'panel40') {
            panelName2 = 'panel42';
            panelName0 = 'panel40';
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }
        var maxCellIndex, num;
        var rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            num = classRange.getMaxCellIndexByMouseMove2(panelName2);
            if (num != undefined)
                rowIndexArray.push(num);
            num = classRange.getMaxCellIndexByMouseMove2(panelName0);
            if (num != undefined)
                rowIndexArray.push(num);
            maxCellIndex = Math.max.apply(Math, rowIndexArray);
        }
        else {
            maxCellIndex = classRange.getMaxCellIndexByMouseMove2(panelName0);
        }
        return maxCellIndex;
    };
    TbsGridRangePanel.prototype.getMinCellIndexByMouseMove = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var panelName = this.panelName;
        var panelName2;
        var panelName0;
        if (panelName == 'panel40') {
            panelName2 = 'panel42';
            panelName0 = 'panel40';
        }
        else {
            panelName2 = 'panel52';
            panelName0 = 'panel50';
        }
        var minCellIndex;
        var rowIndexArray = [];
        if (grid.fixedColumnIndex != -1) {
            var num = classRange.getMinCellIndexByMouseMove2(panelName2);
            if (num != undefined)
                rowIndexArray.push(num);
            num = classRange.getMinCellIndexByMouseMove2(panelName0);
            if (num != undefined)
                rowIndexArray.push(num);
            minCellIndex = Math.min.apply(Math, rowIndexArray);
        }
        else {
            minCellIndex = classRange.getMinCellIndexByMouseMove2(panelName0);
        }
        return minCellIndex;
    };
    TbsGridRangePanel.prototype.getMaxCellIndexByMouseMove2 = function (panelName) {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var lastX = grid.lastX;
        var maxCellIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRow = tableRows[0];
        var len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        var startColumnIndex, lastColumnIndex;
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
        for (var x = startColumnIndex; x < lastColumnIndex; x++) {
            var tableCell = tableRow.childNodes[x];
            var column = grid.column_table.data[x];
            if (column[tbs_grid_types_1.columnAlias.visible] == false)
                continue;
            var rect = grid.getOffset(tableCell);
            var rectLeft = rect.left;
            //console.log(`rect2.left ${rect2.left} rectLeft ${rectLeft} lastX ${lastX} `);
            if (lastX > rectLeft)
                maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex;
    };
    TbsGridRangePanel.prototype.getMinCellIndexByMouseMove2 = function (panelName) {
        var selector = this.selector;
        var grid = this.grid;
        var classRange = this;
        var lastX = grid.lastX;
        var minCellIndex;
        var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        var tableRow = tableRows[0];
        var len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
        var startColumnIndex, lastColumnIndex;
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
        for (var x = lastColumnIndex; x >= startColumnIndex; x--) {
            var tableCell = tableRow.childNodes[x];
            var column = grid.column_table.data[x];
            if (column[tbs_grid_types_1.columnAlias.visible] == false)
                continue;
            var rect = grid.getOffset(tableCell);
            var rectRight = rect.left + tableCell.getBoundingClientRect().width;
            if (lastX < rectRight)
                minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    };
    return TbsGridRangePanel;
}());
exports.TbsGridRangePanel = TbsGridRangePanel;


/***/ }),

/***/ 5358:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRange = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRange = /** @class */ (function () {
    function TbsGridRange(grid) {
        this.removePanelRange = function (panelName) {
            if (panelName === void 0) { panelName = ''; }
            var selector = this.selector;
            var grid = this.grid;
            if (panelName == 'panel30') {
                document.querySelectorAll("".concat(selector, " .tbs-grid-cell-start")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-start'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel31 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel32 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel30 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
            }
            else if (panelName == 'panel40') {
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel41 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel42 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel40 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
            }
            else if (panelName == 'panel50') {
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel51 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel52 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel50 .tbs-grid-cell-select")).forEach(function (cell) { return cell.classList.remove('tbs-grid-cell-select'); });
            }
        };
        this.selectRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
            var grid = this.grid;
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
        this.setRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex, type) {
            if (type === void 0) { type = 'add'; }
            var grid = this.grid;
            grid.startRowIndex = startRowIndex;
            grid.startCellIndex = startCellIndex;
            grid.lastRowIndex = lastRowIndex;
            grid.lastCellIndex = lastCellIndex;
            var _startRowIndex = startRowIndex > lastRowIndex ? lastRowIndex : startRowIndex;
            var _lastRowIndex = startRowIndex > lastRowIndex ? startRowIndex : lastRowIndex;
            var _startCellIndex = startCellIndex > lastCellIndex ? lastCellIndex : startCellIndex;
            var _lastCellIndex = startCellIndex > lastCellIndex ? startCellIndex : lastCellIndex;
            grid._startRowIndex = _startRowIndex;
            grid._startCellIndex = _startCellIndex;
            grid._lastRowIndex = _lastRowIndex;
            grid._lastCellIndex = _lastCellIndex;
            if (type == 'add' || grid.selectRangeArray == 0) {
                var selectRange = {};
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
                var selectRange = grid.selectRangeArray[0];
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
            var selector = this.selector;
            var grid = this.grid;
            if (grid.options[tbs_grid_types_1.rowAlias.selectMode] == 'cell') {
                startRowIndex = startRowIndex;
                lastRowIndex = startRowIndex;
            }
            //=============================================================	panel31 select
            var data = grid.data_select_panel31;
            if (lastRowIndex == -1)
                lastRowIndex = data.length - 1;
            for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                var len = data.length;
                var bCount = false;
                for (var n = 0; n < len; n++) {
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
            var column = grid.column_table.data;
            var columnLen = column.length;
            data = grid.data_select_panel30;
            for (var rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                if (lastCellIndex == -1)
                    lastCellIndex = column.length - 1;
                var len = data.length;
                var bCount = false;
                for (var n = 0; n < len; n++) {
                    if (rowIndex == data[n][0][0]) {
                        bCount = true;
                        for (var colIndex = 0; colIndex < columnLen; colIndex++) {
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
                    var array = [];
                    for (var colIndex = 0; colIndex < columnLen; colIndex++)
                        array.push(0);
                    var row = [new Int32Array([rowIndex]), new Int8Array(array)];
                    for (var colIndex = 0; colIndex < columnLen; colIndex++) {
                        if (colIndex >= startCellIndex && colIndex <= lastCellIndex)
                            row[1][colIndex] = 1;
                        else
                            row[1][colIndex] = 0;
                    }
                    data.push(row);
                }
            }
            if (grid.headerRowCount > 1) {
                var selectCell = function (trList, colIndex) {
                    for (var i = trList.length - 1; i >= 0; i--) {
                        var cell = trList[i].childNodes[colIndex];
                        if (cell.style.display == 'none')
                            continue;
                        else
                            cell.classList.add('tbs-grid-cell-select');
                    }
                };
                // panel20
                var trList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
                for (var x = startCellIndex; x <= lastCellIndex; x++)
                    selectCell(trList, x);
                // panel22
                if (grid.fixedColumnIndex != -1) {
                    trList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table tbody tr');
                    for (var x = startCellIndex; x <= lastCellIndex; x++)
                        selectCell(trList, x);
                }
            }
            else {
                // panel20
                var tableCells = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr:last-child td');
                if (tableCells.length == 0)
                    return;
                for (var i = startCellIndex; i <= lastCellIndex; i++) {
                    tableCells[i].classList.add('tbs-grid-cell-select');
                }
            }
        };
        this.removeRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex) {
            var selector = this.selector;
            var grid = this.grid;
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
            document.querySelectorAll("".concat(selector, " .tbs-grid-panel20 .tbs-grid-table td")).forEach(function (td) {
                td.classList.remove('tbs-grid-cell-select');
            });
            if (grid.fixedColumnIndex != -1) {
                document.querySelectorAll("".concat(selector, " .tbs-grid-panel22 .tbs-grid-table td")).forEach(function (td) {
                    td.classList.remove('tbs-grid-cell-select');
                });
            }
        };
        this.addRange = function (startRowIndex, lastRowIndex, startCellIndex, lastCellIndex, topRowIndex) {
            var grid = this.grid;
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
        this.selector = "#".concat(grid.gridId);
    }
    return TbsGridRange;
}());
exports.TbsGridRange = TbsGridRange;


/***/ }),

/***/ 9359:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridRow = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridRow = /** @class */ (function () {
    function TbsGridRow(grid) {
        this.grid = grid;
    }
    TbsGridRow.prototype.setTableHead = function (grid, panelName) {
        var selector = '#' + grid.gridId;
        if (grid.fixedColumnIndex != -1) {
            var tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');
            for (var x = 0, len = grid.column_table.count(); x < len; x++) {
                var column = grid.column_table.data[x];
                var tableCell = tableRow.childNodes[x];
                tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', column[tbs_grid_types_1.columnAlias.width] + 'px');
                tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', '');
                if (column[tbs_grid_types_1.columnAlias.visible] == false) {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
                if (panelName.substring(6) == '2' && x > grid.fixedColumnIndex) {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
                else if (panelName.substring(6) == '0' && x <= grid.fixedColumnIndex) {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', '0px');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', 'none');
                }
            }
        }
        else {
            var tableRow = document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead tr');
            for (var x = 0, len = grid.column_table.count(); x < len; x++) {
                var column = grid.column_table.data[x];
                var tableCell = tableRow.childNodes[x];
                if (panelName.substring(6) == '0') {
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'display', column[tbs_grid_types_1.columnAlias.visible] ? '' : 'none');
                    tbs_grid_dom_1.TbsGridDom.setCellStyle(tableCell, 'width', column[tbs_grid_types_1.columnAlias.width] + 'px');
                }
            }
        }
    };
    TbsGridRow.prototype.setTableRow = function (grid, tableRow, rowIndex, panelName) {
        if (panelName === void 0) { panelName = 'panel30'; }
        var selector = '#' + grid.gridId;
        tableRow.dataset.rowIndex = rowIndex;
        if (tableRow.style.height != grid.rowHeight + 'px')
            tableRow.style.height = grid.rowHeight + 'px';
        if (tableRow.style.display == 'none')
            tableRow.style.display = '';
        if (grid.group_column_table.count() > 0) {
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                var rowData = grid.getRow(rowIndex);
                var depth = rowData[tbs_grid_types_1.columnAlias.depth];
                if (depth == grid.group_column_table.count() + 1)
                    tbs_grid_dom_1.TbsGridDom.addUserClass(tableRow, '.tbs-row-color-white');
                else if (depth <= 5)
                    tbs_grid_dom_1.TbsGridDom.addUserClass(tableRow, 'tbs-row-color' + depth);
                else
                    tbs_grid_dom_1.TbsGridDom.addUserClass(tableRow, '.tbs-row-color-white');
            }
            if (grid.onRowBounding) {
                if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                    var param = { element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex) };
                    grid.tbs_executeEvent(grid.onRowBounding, 'onRowBounding', param);
                }
            }
        }
        else {
            tbs_grid_dom_1.TbsGridDom.removeUserClass(tableRow);
            if (panelName.substring(6) == '0' || panelName.substring(6) == '2') {
                var param = { element: tableRow, rowIndex: rowIndex, data: grid.getRow(rowIndex) };
                grid.tbs_executeEvent(grid.onRowBounding, 'onRowBounding', param);
            }
        }
        /* row alternative background color */
        grid.classRow.showAlternativeRowColor(grid, panelName, tableRow, rowIndex);
    };
    TbsGridRow.prototype.showAlternativeRowColor = function (grid, panelName, tableRow, rowIndex) {
        return;
        // tableRow.classList.remove('tbs-grid-tr-bg', 'tbs-grid-tr-bg2');
        // if (rowIndex % 2) tableRow.classList.add('tbs-grid-tr-bg2');
        // else tableRow.classList.add('tbs-grid-tr-bg');
    };
    TbsGridRow.prototype.hideTableRows = function (grid, panelName, tableRows, fromRowIndex, toRowIndex) {
        if (grid.column_table.count() == 0) {
            fromRowIndex = 0;
        }
        for (var i = fromRowIndex, len = tableRows.length; i < len; i++) {
            var tableRow = tableRows[i];
            if (tableRow) {
                if (tableRow.style.display != 'none')
                    tableRow.style.display = 'none';
            }
        }
    };
    return TbsGridRow;
}());
exports.TbsGridRow = TbsGridRow;


/***/ }),

/***/ 1411:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridScrollBase = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridScrollBase = /** @class */ (function () {
    function TbsGridScrollBase(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }
    TbsGridScrollBase.prototype.setPanelSize = function () {
        var selector = this.selector;
        var grid = this.grid;
        var rectGrid = document.querySelector(selector).getBoundingClientRect();
        var main = document.querySelector(selector + ' .tbs-grid-main');
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        var panel22 = document.querySelector(selector + ' .tbs-grid-panel22');
        var panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
        var panel42 = document.querySelector(selector + ' .tbs-grid-panel42');
        var panel72 = document.querySelector(selector + ' .tbs-grid-panel72');
        var group20 = document.querySelector(selector + ' .tbs-grid-group20');
        var group21 = document.querySelector(selector + ' .tbs-grid-group21');
        var group30 = document.querySelector(selector + ' .tbs-grid-group30');
        var group31 = document.querySelector(selector + ' .tbs-grid-group31');
        var group40 = document.querySelector(selector + ' .tbs-grid-group40');
        var group41 = document.querySelector(selector + ' .tbs-grid-group41');
        var group50 = document.querySelector(selector + ' .tbs-grid-group50');
        var group51 = document.querySelector(selector + ' .tbs-grid-group51');
        var group70 = document.querySelector(selector + ' .tbs-grid-group70');
        var group71 = document.querySelector(selector + ' .tbs-grid-group71');
        var mainHeight = rectGrid.height;
        if (grid.options.showToolbarPanel)
            mainHeight -= 25;
        if (grid.options.showGroupPanel)
            mainHeight -= 33; // panel80
        if (grid.options.showSortPanel)
            mainHeight -= 33; // panel90
        //if (grid.options.showFilterPanel) mainHeight -= grid.rowHeight * 2; // panel70
        main.style.height = "".concat(mainHeight, "px");
        // header : group21, group22 group20
        var rectTable21 = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table').getBoundingClientRect();
        // Consider hidden columns
        var rectTable20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();
        var height = parseInt(rectTable20.height);
        var fixedColumnsWidth = grid.classScroll.getFixedColumnsWidth();
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
            var rectTable70 = document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').getBoundingClientRect();
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
            var rectTable40 = document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').getBoundingClientRect();
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
        var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        var panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
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
            var panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
            var panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
            if (grid.fixedColumnIndex != -1) {
                var rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
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
                var rectTable50 = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
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
    };
    TbsGridScrollBase.prototype.setBarPosition = function (type, topRowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        if (type == grid.code_horizontal) {
            var table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
            var xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            var railSize = grid.horizontalScroll.railSize;
            var hiddenSize = grid.horizontalScroll.hiddenSize;
            var curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
            xBar.style.left = ((curLeft / hiddenSize) * railSize) + 'px';
        }
        else if (type == grid.code_vertical) {
            topRowIndex = grid.null(topRowIndex) ? 0 : topRowIndex;
            if (topRowIndex == 0) {
                document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = '0px';
            }
            else if (grid.isLastTopRowIndex(topRowIndex)) {
                var yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
                yBar.style.top = grid.verticalScroll.railSize + 'px';
            }
            else {
                var styleTop = parseInt(String(Math.ceil(topRowIndex / grid.verticalScroll.moveCount)));
                document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = styleTop + 'px';
                //console.log(`styleTop ${styleTop} topRowIndex ${topRowIndex}`);
            }
        }
    };
    TbsGridScrollBase.prototype.setBarPositionByDirection = function (type, rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        if (type == 'up') {
            var trTopIndex = grid.getFirstRowIndex() - 1;
            if (trTopIndex < 0)
                return null;
            //-------------------------------------------------------------
            grid.classScroll.setBarPosition(grid.code_vertical, trTopIndex);
            grid.classPanel30.setDataPanel(trTopIndex);
            //---------------------------------------------------------------
            return trTopIndex;
        }
        if (type == 'down') {
            var trTopIndex = 0;
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
            var hiddenSize = grid.horizontalScroll.hiddenSize;
            var moveWidth = 15;
            var divContent = document.querySelector("".concat(selector, " .tbs-grid-panel30"));
            var divHeaderMove = document.querySelector("".concat(selector, " .tbs-grid-panel20 .tbs-grid-table"));
            var divContentMove = document.querySelector("".concat(selector, " .tbs-grid-panel30 .tbs-grid-table"));
            if (divHeaderMove.style.left == (-1 * hiddenSize) + 'px')
                return null;
            var curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            if (divContentMove.getBoundingClientRect().width <= divContent.getBoundingClientRect().width)
                return null;
            var sLeft = void 0;
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
            var moveWidth = 15;
            var divHeaderMove = document.querySelector("".concat(selector, " .tbs-grid-panel20  .tbs-grid-table"));
            if (divHeaderMove.style.left == '0px')
                return null;
            var curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
            var sLeft = void 0;
            if (curLeft - moveWidth <= 0)
                sLeft = '0px';
            else
                sLeft = (-1 * curLeft + moveWidth) + 'px';
            grid.classScroll.setContentPanelLeft(sLeft);
            grid.classScroll.setBarPosition(grid.code_horizontal);
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
            return grid.getFirstRowIndex() + 1;
        }
    };
    TbsGridScrollBase.prototype.getContentPanelLeft = function (value) {
        var selector = this.selector;
        var grid = this.grid;
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        value = parseInt(value, 10);
        var railSize = grid.horizontalScroll.railSize;
        var ratio = (panel20.childNodes[0].clientWidth - panel20.clientWidth) / railSize;
        var sLeft = (value * -1 * ratio).toString() + 'px';
        return sLeft;
    };
    TbsGridScrollBase.prototype.setContentPanelLeft = function (value) {
        var selector = this.selector;
        var grid = this.grid;
        value = parseInt(value, 10) + 'px';
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        var panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
        var panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
        var panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
        var panel70 = document.querySelector(selector + ' .tbs-grid-panel70');
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
    };
    TbsGridScrollBase.prototype.setContentPanelLeftMove = function (value) {
        var selector = this.selector;
        var grid = this.grid;
        var table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        var left = (parseInt(table20.style.left, 10) + value) + 'px';
        grid.classScroll.setContentPanelLeft(left);
    };
    TbsGridScrollBase.prototype.setColumnWidth = function (panelName, colIndex, value) {
        var selector = this.selector;
        var grid = this.grid;
        if (panelName == 'panel22')
            grid.classScroll.setColumnWidth22(panelName, colIndex, value);
        else
            grid.classScroll.setColumnWidth20(panelName, colIndex, value);
    };
    TbsGridScrollBase.prototype.setColumnWidth20 = function (panelName, colIndex, value) {
        var selector = this.selector;
        var grid = this.grid;
        var colList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        var colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        var colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        var colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        var colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
        var nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][tbs_grid_types_1.columnAlias.width] = parseInt(value, 10);
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
    };
    TbsGridScrollBase.prototype.setColumnWidth22 = function (panelName, colIndex, value) {
        var selector = this.selector;
        var grid = this.grid;
        var colList = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
        var colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
        var colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
        var colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');
        var colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel72 .tbs-grid-table thead th');
        var nWidth = parseInt(value) + 'px';
        grid.column_table.data[colIndex][tbs_grid_types_1.columnAlias.width] = parseInt(value, 10);
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
    };
    TbsGridScrollBase.prototype.getFixedColumnsWidth = function () {
        var grid = this.grid;
        var result = 0;
        for (var x = 0; x <= grid.fixedColumnIndex; x++) {
            var column = grid.column_table.data[x];
            if (column[tbs_grid_types_1.columnAlias.visible])
                result += Number(column[tbs_grid_types_1.columnAlias.width]);
        }
        return result;
    };
    TbsGridScrollBase.prototype.setAllColumnWidth = function (arr) {
        var selector = this.selector;
        var grid = this.grid;
        var thList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
        var thList30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
        var thList40 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
        var thList50 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
        var thList70 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
        for (var x = 0, len = grid.column_table.count(); x < len; x++) {
            grid.column_table.data[x].width = arr[x];
            var nWidth = arr[x] + 'px';
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
    };
    TbsGridScrollBase.prototype.setPageRowCount = function (panelName) {
        if (panelName === void 0) { panelName = ''; }
        var selector = this.selector;
        var grid = this.grid;
        var rowHeight = grid.rowHeight;
        var contentHeight = parseInt(String(document.querySelector(selector + ' .tbs-grid-group30').getBoundingClientRect().height));
        var pageRowCount = contentHeight / rowHeight > parseInt(String(contentHeight / rowHeight)) ? parseInt(String(contentHeight / rowHeight)) + 1 : parseInt(String(contentHeight / rowHeight));
        var pageIntRowCount = Math.floor(contentHeight / rowHeight);
        grid.pageRowCount = pageRowCount;
        grid.pageIntRowCount = pageIntRowCount;
    };
    return TbsGridScrollBase;
}());
exports.TbsGridScrollBase = TbsGridScrollBase;


/***/ }),

/***/ 9402:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridScroll = void 0;
var TbsGridScroll = /** @class */ (function () {
    function TbsGridScroll(grid, scrollName) {
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
    TbsGridScroll.prototype.setScroll = function (type) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal)
            scroll.setHorizontalScroll();
        else if (type == grid.code_vertical)
            scroll.setVerticalScroll();
    };
    TbsGridScroll.prototype.setHorizontalScroll = function () {
        var selector = this.selector;
        var grid = this.grid;
        var classScroll = this;
        var type = grid.code_horizontal;
        var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        var scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        var table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
        var rectPanel20 = panel20.getBoundingClientRect();
        var rectTable20 = table20.getBoundingClientRect();
        if (rectTable20.width > rectPanel20.width)
            classScroll.showScroll(type);
        else
            classScroll.hideScroll(type);
        xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll'); // non-live
        if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
            scrollBox.style.display = 'none';
    };
    TbsGridScroll.prototype.setVerticalScroll = function () {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var type = grid.code_vertical;
        var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
        var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
        var scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
        var wrap = document.querySelector(selector + ' .tbs-grid-wrap');
        var pageRowCount = grid.pageRowCount;
        var dataLength = grid.view_table.count();
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
    };
    TbsGridScroll.prototype.showScroll = function (type) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal) {
            var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            var scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            var wrap = document.querySelector(selector + ' .tbs-grid-wrap');
            xScroll.style.display = '';
            scrollBox.style.display = '';
            wrap.style.marginBottom = scroll.margin;
            scroll.setScrollSize(type);
        }
        else if (type == grid.code_vertical) {
        }
    };
    TbsGridScroll.prototype.hideScroll = function (type) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal) {
            var wrap = document.querySelector(selector + ' .tbs-grid-wrap');
            var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            var scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            var xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
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
            var xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
            var yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
            var scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
            yScroll.style.display = 'none';
            if (xScroll.style.display == 'none' && yScroll.style.display == 'none')
                scrollBox.style.display = 'none';
        }
    };
    TbsGridScroll.prototype.setScrollSize = function (type) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal) {
            var barSize = scroll.getBarSize(type);
            var hiddenSize = scroll.getHiddenSize(type);
            var railSize = scroll.getRailSize(type, barSize);
            scroll.barSize = barSize;
            scroll.railSize = railSize;
            scroll.hiddenSize = hiddenSize;
            var xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            xBar.style.width = scroll.getBarWidth(type, barSize);
        }
        else if (type == grid.code_vertical) {
            var barSize = scroll.getBarSize(type);
            var railSize = scroll.getRailSize(type, barSize);
            var moveCount = scroll.getMoveCount(type, railSize);
            scroll.barSize = barSize; //data
            scroll.railSize = railSize; //data
            scroll.moveCount = moveCount; //data	1px당 trCount
            var yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
            yBar.style.height = barSize + 'px';
        }
    };
    /* BarSize */
    TbsGridScroll.prototype.getBarSize = function (type) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal)
            return scroll.getHorizontalBarSize();
        else if (type == grid.code_vertical)
            return scroll.getVerticalBarSize();
    };
    TbsGridScroll.prototype.getHorizontalBarSize = function () {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        var xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        var barSize = parseInt(String((panel20.clientWidth / panel20.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth));
        if (barSize > xWrap.clientWidth)
            barSize = xWrap.clientWidth;
        else if (barSize < 35)
            barSize = 35;
        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width)
            barSize = xWrap.clientWidth;
        return barSize;
    };
    TbsGridScroll.prototype.getVerticalBarSize = function () {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        var rowCount = grid.getRowCount();
        var barSize = yWrap.clientHeight - (rowCount * 6.3);
        if (barSize < 50)
            barSize = 50;
        return barSize;
    };
    /* railSize */
    TbsGridScroll.prototype.getRailSize = function (type, barSize) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        if (type == grid.code_horizontal)
            return scroll.getHorizontalRailSize(barSize);
        else if (type == grid.code_vertical)
            return scroll.getVerticalRailSize(barSize);
    };
    TbsGridScroll.prototype.getHorizontalRailSize = function (barSize) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        return xWrap.clientWidth - barSize;
    };
    TbsGridScroll.prototype.getVerticalRailSize = function (barSize) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
        var railSize = yWrap.clientHeight - barSize;
        // if (railSize <= grid.rowHeight) {
        //     railSize = grid.rowHeight + 5;
        //     scroll.barSize = yWrap.clientHeight - railSize;
        // }
        return railSize;
    };
    /* moveCount */
    TbsGridScroll.prototype.getMoveCount = function (type, railSize) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var moveCount = 0;
        var pageIntRowCount = grid.pageIntRowCount;
        var pageRowCount = grid.pageRowCount;
        var rowCount = grid.getRowCount();
        if (pageRowCount > pageIntRowCount)
            moveCount = Number((rowCount - pageRowCount + 1) / railSize);
        else
            moveCount = Number((rowCount - pageRowCount) / railSize);
        return moveCount;
    };
    /* hiddenSize */
    TbsGridScroll.prototype.getHiddenSize = function (type) {
        var selector = this.selector;
        var panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
        var hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16; // add size( default 14px / add 2px)
        if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width)
            hiddenSize = 0;
        return hiddenSize;
    };
    /* barWidth */
    TbsGridScroll.prototype.getBarWidth = function (type, barSize) {
        var selector = this.selector;
        var grid = this.grid;
        var scroll = this;
        var wrapRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap').getBoundingClientRect();
        var xBarRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').getBoundingClientRect();
        var barWidth = barSize;
        if (xBarRect.right > wrapRect.right)
            barWidth = barSize - (xBarRect.right - wrapRect.right);
        if (xBarRect.width >= wrapRect.width)
            barWidth = barSize; // - (xBarRect.right - wrapRect.right);
        return barWidth + 'px';
    };
    return TbsGridScroll;
}());
exports.TbsGridScroll = TbsGridScroll;


/***/ }),

/***/ 659:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridSort = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridSort = /** @class */ (function () {
    function TbsGridSort(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.sortColumns = [];
        this.options = {};
    }
    TbsGridSort.prototype.setSortData = function (data, sortColumns) {
        /**
         * @function tbs_setSortData
         *
         * @param sortColumns : [{ name : , order : }, ...]
         */
        var selector = this.selector;
        var grid = this.grid;
        var len = sortColumns.length;
        data.sort(function (a, b) {
            // a : The first element
            // b : The second element
            for (var i = 0; i < len; i++) {
                var sortColumn = sortColumns[i];
                var name_1 = sortColumn[tbs_grid_types_1.columnAlias.name];
                var column = grid.getColumn(name_1);
                var type = column[tbs_grid_types_1.columnAlias.type];
                if (sortColumn['order'] == 'asc') {
                    if (type == tbs_grid_types_1.CellType.number) {
                        var x = a[name_1] != null && isNaN(a[name_1]) == false ? Number(a[name_1].toString().replace(/\,/g, '')) : 0;
                        var y = b[name_1] != null && isNaN(b[name_1]) == false ? Number(b[name_1].toString().replace(/\,/g, '')) : 0;
                        if (x < y)
                            return -1;
                        else if (x > y)
                            return 1;
                    }
                    else {
                        if ((a[name_1] == null ? '' : a[name_1]).toString().toLowerCase() < (b[name_1] == null ? '' : b[name_1]).toString().toLowerCase())
                            return -1;
                        else if ((a[name_1] == null ? '' : a[name_1]).toString().toLowerCase() > (b[name_1] == null ? '' : b[name_1]).toString().toLowerCase())
                            return 1;
                    }
                }
                else if (sortColumn['order'] == 'desc') {
                    if (type == tbs_grid_types_1.CellType.number) {
                        var x = a[name_1] != null && isNaN(a[name_1]) == false ? Number(a[name_1].toString().replace(/\,/g, '')) : 0;
                        var y = b[name_1] != null && isNaN(b[name_1]) == false ? Number(b[name_1].toString().replace(/\,/g, '')) : 0;
                        if (x < y)
                            return 1;
                        else if (x > y)
                            return -1;
                    }
                    else {
                        if ((a[name_1] == null ? '' : a[name_1]).toString().toLowerCase() < (b[name_1] == null ? '' : b[name_1]).toString().toLowerCase())
                            return 1;
                        else if ((a[name_1] == null ? '' : a[name_1]).toString().toLowerCase() > (b[name_1] == null ? '' : b[name_1]).toString().toLowerCase())
                            return -1;
                    }
                }
            }
        });
    };
    TbsGridSort.prototype.getSortRow = function (columnName) { return this.grid.sort_column_table.selectRow(tbs_grid_types_1.columnAlias.name, columnName); };
    TbsGridSort.prototype.changeSortButtonOrder = function (name, text, order, targetIndex) {
        var selector = this.selector;
        var grid = this.grid;
        /* targetIndex <> name Index */
        var sourceIndex = null;
        for (var i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            var dataRow_1 = grid.sort_column_table.data[i];
            if (name == dataRow_1[tbs_grid_types_1.columnAlias.name] && i == targetIndex)
                return;
            else if (name == dataRow_1[tbs_grid_types_1.columnAlias.name]) {
                sourceIndex = i;
                break;
            }
        }
        /* new sort data */
        var dataRow = {};
        dataRow[tbs_grid_types_1.columnAlias.name] = name;
        dataRow[tbs_grid_types_1.columnAlias.order] = grid.sort_column_table.selectValue(sourceIndex, tbs_grid_types_1.columnAlias.order);
        /* update source column */
        grid.sort_column_table.updateByRowIndex(sourceIndex, tbs_grid_types_1.columnAlias.name, '_temp_sort');
        /* create sort data */
        if (grid.null(targetIndex))
            grid.sort_column_table.insert(dataRow);
        else
            grid.sort_column_table.insertBefore(dataRow, targetIndex);
        /* remove source */
        sourceIndex = grid.sort_column_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, '_temp_sort');
        grid.sort_column_table.remove(sourceIndex);
        var button = grid.classSort.createSortButton(name);
        var bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classSort.getSortButtonList();
        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    };
    TbsGridSort.prototype.addSortButton = function (name, text, order, targetIndex) {
        var selector = this.selector;
        var grid = this.grid;
        // add sortColumn in grid.sort_data
        // already existing column
        var dataRows = grid.sort_column_table.selectRows(tbs_grid_types_1.columnAlias.name, name, 1);
        if (dataRows.length > 0)
            return;
        var dataRow = {};
        dataRow[tbs_grid_types_1.columnAlias.name] = name;
        dataRow[tbs_grid_types_1.columnAlias.order] = order;
        /* create sort data */
        //console.log(name);
        if (grid.null(targetIndex))
            grid.sort_column_table.insert(dataRow);
        else
            grid.sort_column_table.insertBefore(dataRow, targetIndex);
        // add button in group panel
        var button = grid.classSort.createSortButton(name);
        var bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex))
            bar.insertBefore(button, bar.childNodes[targetIndex]);
        else
            bar.append(button);
        grid.classSort.toggleSortPlaceHolder();
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
    };
    TbsGridSort.prototype.removeSortButton = function (element) {
        var selector = this.selector;
        var grid = this.grid;
        // remove sortColumn in grid.sort_column_table.data
        var name = element.dataset.name;
        //console.log('name :' + name);
        var rowIndex = grid.sort_column_table.selectRowIndex(tbs_grid_types_1.columnAlias.name, name);
        //console.log('rowIndex :' + rowIndex);
        grid.sort_column_table.remove(rowIndex);
        // remove button in group panel
        var button = element.parentNode;
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
    };
    TbsGridSort.prototype.removeSortButtonList = function () {
        var selector = this.selector;
        var grid = this.grid;
        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (var i = buttons.length - 1; i >= 0; i--)
            buttons[i].remove();
    };
    TbsGridSort.prototype.getSortButtonList = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.classSort.removeSortButtonList();
        var bar = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
        for (var i = 0, len = grid.sort_column_table.count(); i < len; i++) {
            var dataRow = grid.sort_column_table.data[i];
            var columnName = dataRow[tbs_grid_types_1.columnAlias.name];
            var button = grid.classSort.createSortButton(columnName);
            var bar_1 = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar');
            if (grid.null(bar_1))
                return;
            bar_1.append(button);
        }
        grid.classSort.toggleSortPlaceHolder();
    };
    TbsGridSort.prototype.createSortButton = function (columnName) {
        var selector = this.selector;
        var grid = this.grid;
        var column = grid.getColumn(columnName);
        var sortColumn = grid.classSort.getSortRow(columnName);
        var order = sortColumn[tbs_grid_types_1.columnAlias.order];
        var orderChar = '';
        if (order == 'asc')
            orderChar = '▲';
        else if (order == 'desc')
            orderChar = '▼';
        else
            orderChar = '';
        var text = document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent = column.header[tbs_grid_types_1.columnAlias.text] + orderChar;
        text.dataset.name = columnName;
        var icon = document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'remove.png)';
        icon.dataset.name = columnName;
        var button = document.createElement('div');
        button.classList.add('tbs-grid-panel-button');
        button.dataset.name = columnName;
        button.append(text);
        button.append(icon);
        return button;
    };
    TbsGridSort.prototype.toggleSortPlaceHolder = function () {
        var selector = this.selector;
        var grid = this.grid;
        var buttons = document.querySelectorAll(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar .tbs-grid-panel-button');
        var span = document.querySelector(selector + ' .tbs-grid-panel90 .tbs-grid-panel-bar-span');
        if (buttons.length > 0)
            span.style.display = 'none';
        else
            span.style.display = '';
        grid.classControl.after_setColumnVisible();
    };
    TbsGridSort.prototype.showSortPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.setOption('showSortPanel', true);
        var panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');
        grid.classScroll.setPanelSize();
        //grid.classSort.initSortData();
        //grid.classControl.after_showSortrPanel();
        grid.classSort.getSortButtonList();
        grid.apply();
    };
    TbsGridSort.prototype.hideSortPanel = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.sort_column_table.remove();
        grid.setOption('showSortPanel', false);
        var panel = document.querySelector(selector + ' .tbs-grid-panel90');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');
        grid.classScroll.setPanelSize();
        grid.apply();
        //grid.classSort.initSortData();
        //grid.classControl.after_hideSortPanel();
    };
    TbsGridSort.prototype.initSortData = function () {
        var selector = this.selector;
        var grid = this.grid;
        grid.sort_column_table.remove();
        grid.classSort.getSortButtonList();
        grid.view_table.remove();
        grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
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
    };
    return TbsGridSort;
}());
exports.TbsGridSort = TbsGridSort;


/***/ }),

/***/ 983:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridTable = void 0;
var tbs_grid_dom_1 = __webpack_require__(5359);
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridTable = /** @class */ (function () {
    function TbsGridTable(grid) {
        this.grid = grid;
    }
    TbsGridTable.prototype.createTable = function (panelName, startRowIndex, rowCount) {
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var table = tbs_grid_dom_1.TbsGridDom.createTable();
        /**
         * table head
         */
        this.createTableHead(panelName, table);
        /**
         * table body
         */
        var tbody = document.createElement('tbody');
        for (var rowIndex = startRowIndex; rowIndex < rowCount; rowIndex++)
            this.createTableRow(panelName, tbody);
        table.appendChild(tbody);
        document.querySelector(selector + ' .tbs-grid-' + panelName).innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-' + panelName).appendChild(table);
        if (grid.column_table.count() == 0) {
            var tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' tbody tr');
            for (var i = 0; i < tableRows.length; i++) {
                var tableRow = tableRows[i];
                tableRow.style.display = 'none';
            }
        }
    };
    TbsGridTable.prototype.createTableHead = function (panelName, table) {
        var grid = this.grid;
        var s = panelName.substring(6);
        if (s == '1')
            this.createTableHead1(panelName, table);
        else if (s == '2')
            this.createTableHead2(panelName, table);
        else
            this.createTableHead0(panelName, table);
    };
    TbsGridTable.prototype.createTableHead1 = function (panelName, table) {
        var grid = this.grid;
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        for (var i = 0, len = grid.info_column_table.count(); i < len; i++) {
            var dataRow = grid.info_column_table.data[i];
            var th = document.createElement('th');
            th.style.width = dataRow[tbs_grid_types_1.columnAlias.width] + 'px';
            th.style.display = dataRow[tbs_grid_types_1.columnAlias.visible] ? '' : 'none';
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
    };
    TbsGridTable.prototype.createTableHead2 = function (panelName, table) {
        return this.createTableHead0(panelName, table);
    };
    TbsGridTable.prototype.createTableHead0 = function (panelName, table) {
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var sumWidth = 0;
        for (var i = 0, len = grid.column_table.count(); i < len; i++) {
            var column = grid.column_table.data[i];
            var th = document.createElement('th');
            th.style.width = (column[tbs_grid_types_1.columnAlias.visible] == true) ? parseInt(column[tbs_grid_types_1.columnAlias.width]) + 'px' : '0px';
            th.style.display = (column[tbs_grid_types_1.columnAlias.visible] == true) ? '' : 'none';
            sumWidth += (grid.column_table.data[i][tbs_grid_types_1.columnAlias.visible] == true) ? parseInt(column[tbs_grid_types_1.columnAlias.width]) : 0;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        return sumWidth;
    };
    TbsGridTable.prototype.createTableRow = function (panelName, tbody) {
        var selector = '#' + this.grid.gridId;
        var grid = this.grid;
        var tr = document.createElement('tr');
        if (panelName == 'panel20' || panelName == 'panel22') {
            tr.style = 'height:' + grid.headerRowHeight + 'px';
            for (var i = 0; i < grid.column_table.count(); i++) {
                var td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.display = 'none';
                var div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');
                td.appendChild(div);
                var input = document.createElement('input');
                input.type = 'checkbox';
                input.classList.add('tbs-grid-html-checkbox');
                input.style.display = 'none';
                div.appendChild(input);
                var span = document.createElement('span');
                span.classList.add('tbs-grid-html-string');
                div.appendChild(span);
                var spanSort = document.createElement('span');
                spanSort.classList.add('tbs-grid-html-sort');
                div.appendChild(spanSort);
                var reSizeDiv = document.createElement('div');
                reSizeDiv.classList.add('tbs-grid-html-resize');
                var sortDiv = document.createElement('div');
                sortDiv.classList.add('tbs-grid-html-sort');
                td.appendChild(div);
                td.appendChild(reSizeDiv);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else if (panelName.substring(6) == '1') {
            tr.style = 'display:;height:' + grid.rowHeight + 'px';
            for (var i = 0; i < grid.info_column_table.count(); i++) {
                var column = grid.info_column_table.data[i];
                var td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
                td.dataset.name = column[tbs_grid_types_1.columnAlias.name];
                td.dataset.columnIndex = i;
                var div = tbs_grid_dom_1.TbsGridDom.createElementCellDiv();
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
            for (var i = 0; i < grid.column_table.count(); i++) {
                var column = grid.column_table.data[i];
                var td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbs_grid_types_1.columnAlias.width] + 'px';
                if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
                    td.style.display = 'none';
                }
                td.dataset.name = column[tbs_grid_types_1.columnAlias.name];
                td.dataset.columnIndex = i;
                var div = tbs_grid_dom_1.TbsGridDom.createElementCellDiv();
                var spanText = tbs_grid_dom_1.TbsGridDom.createElementCellText();
                div.appendChild(spanText);
                td.appendChild(div);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    };
    TbsGridTable.prototype.updateTableRows = function (panelName, rowCount) {
        var selector = '#' + this.grid.gridId;
        /**
         * table row add
         */
        var tbody = document.querySelector(selector + ' .tbs-grid-' + panelName + ' table tbody');
        for (var rowIndex = 0; rowIndex < rowCount; rowIndex++)
            this.createTableRow(panelName, tbody);
    };
    return TbsGridTable;
}());
exports.TbsGridTable = TbsGridTable;


/***/ }),

/***/ 3903:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGridTree = void 0;
var tbs_grid_types_1 = __webpack_require__(2978);
var TbsGridTree = /** @class */ (function () {
    function TbsGridTree(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
        this.openDepth = null;
    }
    TbsGridTree.prototype.createTreeData = function () {
        var grid = this.grid;
        grid.tree_table.remove();
        var fn_getChildrenRowIds = function (row) {
            row[tbs_grid_types_1.columnAlias.children] = [];
            for (var i = 0, len = grid.view_table.count(); i < len; i++) {
                var dataRow = grid.view_table.data[i];
                if (row[grid.options.treeItemName] == dataRow[grid.options.treeParentName]) {
                    row[tbs_grid_types_1.columnAlias.children].push(dataRow[tbs_grid_types_1.columnAlias.rowId]);
                }
            }
        };
        var fn_setRelation = function (row, depth) {
            if (depth === void 0) { depth = 1; }
            fn_getChildrenRowIds(row);
            row[tbs_grid_types_1.columnAlias.depth] = depth;
            grid.tree_table.insert(grid.copyJson(row));
            var arr = row[tbs_grid_types_1.columnAlias.children];
            if (arr.length > 0) {
                for (var i = 0, len = grid.view_table.count(); i < len; i++) {
                    var dataRow = grid.view_table.data[i];
                    if (arr.indexOf(dataRow[tbs_grid_types_1.columnAlias.rowId]) != -1)
                        fn_setRelation(dataRow, depth + 1);
                }
            }
        };
        for (var i = 0, len = grid.view_table.count(); i < len; i++) {
            var dataRow = grid.view_table.data[i];
            if (grid.options.treeRootValue == dataRow[grid.options.treeParentName]) {
                fn_setRelation(dataRow);
            }
        }
    };
    TbsGridTree.prototype.setTreeSortColumns = function (sortColumns) {
        var grid = this.grid;
        sortColumns.map(function (column) { return grid.sort_column_table.insert(grid.copyJson(column)); });
    };
    TbsGridTree.prototype.setTreeData = function (data, openDepth, isFirst) {
        if (openDepth === void 0) { openDepth = 0; }
        if (isFirst === void 0) { isFirst = true; }
        var selector = this.selector;
        var grid = this.grid;
        if (grid.null(data) || data.length == 0)
            return;
        this.openDepth = openDepth;
        /* create source_data */
        if (isFirst == true) {
            grid.source_table.remove();
            for (var i = 0, len = data.length; i < len; i++) {
                var dataRow = data[i];
                var item = {};
                for (var x = 0, len_1 = grid.column_table.count(); x < len_1; x++) {
                    var column = grid.column_table.data[x];
                    var columnName = column[tbs_grid_types_1.columnAlias.name];
                    var val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
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
        grid.source_table.data.map(function (dataRow) { return grid.view_table.insert(grid.copyJson(dataRow)); });
        /* Filter */
        grid.classFilter.filters();
        /* Soring */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
        /* insert into tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(function (dataRow) { return grid.tree_table.insert(grid.copyJson(dataRow)); });
        /* create tree data */
        grid.classTree.createTreeData();
        /* insert into view_table from tree_table */
        grid.view_table.remove();
        for (var i = 0, len = grid.tree_table.count(); i < len; i++) {
            var dataRow = grid.tree_table.data[i];
            dataRow[tbs_grid_types_1.columnAlias.rowMode] = '';
            dataRow[tbs_grid_types_1.columnAlias.isOpen] = false;
            for (var x = 0, len_2 = grid.column_table.count(); x < len_2; x++) {
                var column = grid.column_table.data[x];
                var columnName = column[tbs_grid_types_1.columnAlias.name];
                var val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }
        /* Summary */
        // grid.classTree.getGroupSummary();
        /* create tree_table */
        grid.tree_table.remove();
        grid.view_table.data.map(function (dataRow) {
            var item = grid.copyJson(dataRow);
            item[tbs_grid_types_1.columnAlias.isOpen] = false;
            grid.tree_table.insert(item);
        });
        // open depth
        if (grid.notNull(openDepth)) {
            for (var i = grid.view_table.count() - 1; i >= 0; i--) {
                var row = grid.view_table.data[i];
                var depth = row[tbs_grid_types_1.columnAlias.depth];
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
        if (grid.options[tbs_grid_types_1.columnAlias.autoWidth] == true)
            grid.setColumnAutoWidth();
        grid.classRange.removeRange(0, -1);
        var _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    };
    TbsGridTree.prototype.setTreeIcon = function (tableCell, rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var row = grid.getRow(rowIndex);
        var arrayChildren = row[tbs_grid_types_1.columnAlias.children];
        var element = tableCell.querySelector('.tbs-grid-html-icon');
        if (arrayChildren.length > 0) {
            var nextRow = grid.getRow(rowIndex + 1);
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
    };
    TbsGridTree.prototype.toggleTreeIcon = function (rowIndex, element, type) {
        var selector = this.selector;
        var grid = this.grid;
        if (type == tbs_grid_types_1.columnAlias.open)
            element.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'tree_open.png)';
        else if (type == tbs_grid_types_1.columnAlias.closed)
            element.style['backgroundImage'] = 'url(' + grid.options[tbs_grid_types_1.optionAlias.imageRoot] + 'tree_closed.png)';
        else
            element.style['backgroundImage'] = '';
    };
    TbsGridTree.prototype.getTreeFlodingStatus = function (tableCell) {
        var selector = this.selector;
        var grid = this.grid;
        var spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return null;
        if (spanIcon.style['backgroundImage'].includes('tree_open.png'))
            return tbs_grid_types_1.columnAlias.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png'))
            return tbs_grid_types_1.columnAlias.closed;
        else
            return null;
    };
    TbsGridTree.prototype.setTreeFolding = function (tableCell) {
        var selector = this.selector;
        var grid = this.grid;
        var rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        var row = grid.getRow(rowIndex);
        var spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon))
            return;
        var folding = grid.classTree.getTreeFlodingStatus(tableCell);
        if (folding == tbs_grid_types_1.columnAlias.open)
            grid.classTree.closeTreeRow(rowIndex);
        else if (folding == tbs_grid_types_1.columnAlias.closed)
            grid.classTree.openTreeRow(rowIndex);
        grid.horizontalScroll.setScroll(grid.code_horizontal);
        ;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    };
    TbsGridTree.prototype.getTreechildRows = function (folding, rowIndex, isAll) {
        if (isAll === void 0) { isAll = true; }
        // folding : open, closed
        var selector = this.selector;
        var grid = this.grid;
        var dataRows = grid.view_table.data;
        var resultRows = [];
        var fn_getchildRows = function (row, count) {
            if (Object.keys(row).length == 0)
                return;
            if (count > 1)
                resultRows.push(grid.copyJson(row));
            var arr = row[tbs_grid_types_1.columnAlias.children];
            if (arr.length > 0) {
                //default : get first lower rows
                if (count == 1) {
                    for (var i = 0, len = arr.length; i < len; i++) {
                        var dataRow = grid.getTreeRowByRowId(arr[i]);
                        fn_getchildRows(dataRow, count + 1);
                    }
                }
                else {
                    if (folding == tbs_grid_types_1.columnAlias.open) {
                        if (row[tbs_grid_types_1.columnAlias.isOpen]) {
                            for (var i = 0, len = arr.length; i < len; i++) {
                                var dataRow = grid.getTreeRowByRowId(arr[i]);
                                fn_getchildRows(dataRow, count + 1);
                            }
                        }
                    }
                    else {
                        for (var i = 0, len = arr.length; i < len; i++) {
                            var dataRow = grid.getTreeRowByRowId(arr[i]);
                            fn_getchildRows(dataRow, count + 1);
                        }
                    }
                }
            }
        };
        var row = grid.getRow(rowIndex);
        fn_getchildRows(row, 1);
        return resultRows;
    };
    TbsGridTree.prototype.openTreeRow = function (rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var row = grid.getRow(rowIndex);
        var rowId = row[tbs_grid_types_1.columnAlias.rowId];
        for (var i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][tbs_grid_types_1.columnAlias.rowId])
                grid.source_table.data[i][tbs_grid_types_1.columnAlias.isOpen] = true; // keep folding status
        }
        var rows = grid.classTree.getTreechildRows(tbs_grid_types_1.columnAlias.open, rowIndex, false);
        grid.classTree.addTreeRows(rowIndex);
    };
    TbsGridTree.prototype.closeTreeRow = function (rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var row = grid.getRow(rowIndex);
        var rowId = row[tbs_grid_types_1.columnAlias.rowId];
        for (var i = 0, len = grid.source_table.count(); i < len; i++) {
            if (rowId == grid.source_table.data[i][tbs_grid_types_1.columnAlias.rowId])
                grid.source_table.data[i][tbs_grid_types_1.columnAlias.isOpen] = false; // keep folding status
        }
        var rows = grid.classTree.getTreechildRows(tbs_grid_types_1.columnAlias.closed, rowIndex, true);
        rows.map(function (row) { return grid.classTree.removeTreeRow(row); });
    };
    TbsGridTree.prototype.addTreeRows = function (rowIndex) {
        var selector = this.selector;
        var grid = this.grid;
        var rows = grid.classTree.getTreechildRows(tbs_grid_types_1.columnAlias.open, rowIndex, false);
        for (var i = 0, startRowIndex = rowIndex + 1, len = rows.length; i < len; i++, startRowIndex++) {
            grid.classTree.addTreeRow(startRowIndex, rows[i]);
        }
    };
    TbsGridTree.prototype.addTreeRow = function (startRowIndex, row) {
        var selector = this.selector;
        var grid = this.grid;
        startRowIndex = parseInt(startRowIndex);
        if (startRowIndex == grid.view_table.count()) {
            grid.view_table.insert(row);
        }
        else {
            grid.view_table.insertBefore(row, startRowIndex);
        }
    };
    TbsGridTree.prototype.removeTreeRow = function (row) {
        var grid = this.grid;
        grid.view_table.removeByRowId(row[tbs_grid_types_1.columnAlias.rowId]);
        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    };
    return TbsGridTree;
}());
exports.TbsGridTree = TbsGridTree;


/***/ }),

/***/ 7265:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TbsGrid = void 0;
var tbs_grid_scroll_base_1 = __webpack_require__(1411);
var tbs_grid_scroll_1 = __webpack_require__(9402);
var tbs_grid_headers_1 = __webpack_require__(2609);
var tbs_grid_columns_1 = __webpack_require__(8760);
var tbs_grid_control_1 = __webpack_require__(4678);
var tbs_grid_range_1 = __webpack_require__(5358);
var tbs_grid_range_panel_1 = __webpack_require__(7018);
var tbs_grid_filter_1 = __webpack_require__(4533);
var tbs_grid_group_1 = __webpack_require__(8980);
var tbs_grid_page_1 = __webpack_require__(146);
var tbs_grid_sort_1 = __webpack_require__(659);
var tbs_grid_tree_1 = __webpack_require__(3903);
var tbs_grid_panel_base_1 = __webpack_require__(6324);
var tbs_grid_panel10_1 = __webpack_require__(486);
var tbs_grid_panel20_1 = __webpack_require__(4597);
var tbs_grid_panel30_1 = __webpack_require__(6612);
var tbs_grid_panel40_1 = __webpack_require__(7947);
var tbs_grid_panel50_1 = __webpack_require__(9506);
var tbs_grid_panel70_1 = __webpack_require__(4672);
var tbs_grid_panel80_1 = __webpack_require__(8327);
var tbs_grid_panel90_1 = __webpack_require__(7582);
var tbs_grid_panel99_1 = __webpack_require__(9677);
var tbs_grid_top_1 = __webpack_require__(6869);
var tbs_grid_footer_1 = __webpack_require__(3187);
var tbs_grid_row_1 = __webpack_require__(9359);
var tbs_grid_cell_1 = __webpack_require__(5043);
var tbs_grid_base_1 = __webpack_require__(294);
var tbs_grid_base_is_1 = __webpack_require__(1902);
var tbs_grid_base_event_1 = __webpack_require__(9288);
var tbs_grid_base_user_event_1 = __webpack_require__(1119);
var tbs_grid_base_line_1 = __webpack_require__(9344);
var tbs_grid_base_columns_1 = __webpack_require__(3079);
var tbs_grid_base_rows_1 = __webpack_require__(935);
var tbs_grid_base_data_1 = __webpack_require__(9330);
var tbs_grid_base_main_1 = __webpack_require__(3051);
var tbs_grid_pagination_1 = __webpack_require__(3401);
var TbsGrid = /** @class */ (function (_super) {
    __extends(TbsGrid, _super);
    function TbsGrid(gridId, gridConfigs) {
        var _this = _super.call(this, gridId, gridConfigs) || this;
        _this.classScroll = new tbs_grid_scroll_base_1.TbsGridScrollBase(_this);
        _this.verticalScroll = new tbs_grid_scroll_1.TbsGridScroll(_this, 'verticalScroll');
        _this.horizontalScroll = new tbs_grid_scroll_1.TbsGridScroll(_this, 'horizontalScroll');
        _this.classHeader = new tbs_grid_headers_1.TbsGridHeaders(_this);
        _this.classColumn = new tbs_grid_columns_1.TbsGridColumns(_this);
        _this.classControl = new tbs_grid_control_1.TbsGridControl(_this);
        _this.classRange = new tbs_grid_range_1.TbsGridRange(_this);
        _this.classRange40 = new tbs_grid_range_panel_1.TbsGridRangePanel(_this, 'panel40');
        _this.classRange50 = new tbs_grid_range_panel_1.TbsGridRangePanel(_this, 'panel50');
        _this.classFilter = new tbs_grid_filter_1.TbsGridFilter(_this);
        _this.classGroup = new tbs_grid_group_1.TbsGridGroup(_this);
        _this.classPage = new tbs_grid_page_1.TbsGridPage(_this);
        _this.classSort = new tbs_grid_sort_1.TbsGridSort(_this);
        _this.classTree = new tbs_grid_tree_1.TbsGridTree(_this);
        _this.classPanelBase = new tbs_grid_panel_base_1.TbsGridPanelBase(_this);
        _this.classPanel10 = new tbs_grid_panel10_1.TbsGridPanel10(_this);
        _this.classPanel20 = new tbs_grid_panel20_1.TbsGridPanel20(_this);
        _this.classPanel30 = new tbs_grid_panel30_1.TbsGridPanel30(_this);
        _this.classPanel40 = new tbs_grid_panel40_1.TbsGridPanel40(_this);
        _this.classPanel50 = new tbs_grid_panel50_1.TbsGridPanel50(_this);
        _this.classPanel70 = new tbs_grid_panel70_1.TbsGridPanel70(_this);
        _this.classPanel80 = new tbs_grid_panel80_1.TbsGridPanel80(_this);
        _this.classPanel90 = new tbs_grid_panel90_1.TbsGridPanel90(_this);
        _this.classPanel99 = new tbs_grid_panel99_1.TbsGridPanel99(_this);
        _this.classPage = new tbs_grid_page_1.TbsGridPage(_this);
        _this.classPagination = new tbs_grid_pagination_1.TbsGridPagination(_this);
        _this.classTop = new tbs_grid_top_1.TbsGridTop(_this);
        _this.classFooter = new tbs_grid_footer_1.TbsGridFooter(_this);
        _this.tbsGridDate;
        _this.tbsGridCombo;
        _this.classRow = new tbs_grid_row_1.TbsGridRow(_this);
        _this.classCell = new tbs_grid_cell_1.TbsGridCell(_this, null);
        _this.topLineDiv = null;
        _this.bottomLineDiv = null;
        _this.leftLineDiv = null;
        _this.rightLineDiv = null;
        ////////////////////////////////////////////////////////////////////////
        /* GridOptions */
        _this.options = {};
        /* toolbar, filter, sort, group panel optons */
        _this.options.showToolbarPanel = false;
        _this.options.showFilterPanel = false;
        _this.options.showSortPanel = false;
        _this.options.showGroupPanel = false;
        /* Columns Options */
        _this.options.sortable = true;
        _this.options.resizable = true;
        _this.options.movable = true;
        _this.options.autoResizable = true;
        _this.options.autoWidth = false;
        // Rows Options
        _this.options.selectMode = 'cells'; //@value : cell, cells(default) // row, rows : @deprecated
        _this.options.addRow = false; //== row option
        _this.options.delRow = false;
        _this.options.insertRow = false;
        _this.options.updateRow = false;
        _this.options.deleteRow = false;
        _this.options.zeroChar = '-';
        _this.options.useToolbar = true;
        _this.options.imageRoot = _this.getConfigOption('imageRoot');
        _this.options.treeItemName = null;
        _this.options.treeParentName = null;
        _this.options.treeRootValue = null;
        _this.options.pageRowCount = 10;
        _this.options.pageRowCountList = [10, 20, 30, 50, 100];
        return _this;
    }
    /**
     * get configs value
     */
    TbsGrid.prototype.getConfigCulture = function (label) { return this.null(this.gridConfig['culture'][label]) ? 'No Label' : this.gridConfig['culture'][label]; };
    TbsGrid.prototype.getConfigCalendar = function (label) { return this.null(this.gridConfig['calendar'][label]) ? 'No Label' : this.gridConfig['calendar'][label]; };
    TbsGrid.prototype.getConfigFont = function (label) { return this.null(this.gridConfig['font'][label]) ? 'No Label' : this.gridConfig['font'][label]; };
    TbsGrid.prototype.getConfigOption = function (label) { return this.null(this.gridConfigOptions[label]) ? 'No Label' : this.gridConfigOptions[label]; };
    TbsGrid.prototype.getConfigLabel = function (label) { return this.null(this.gridConfig['labels'][label]) ? 'No Label' : this.gridConfig['labels'][label]; };
    /**
     *  TbsGrid Config
     */
    TbsGrid.prototype.setGridConfig = function (tbsGridConfig) { this.gridConfig = tbsGridConfig; };
    TbsGrid.prototype.getUserImageRoot = function (columnName) {
        var result = this.gridConfigOptions['userImageRoot'];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            var renderer = this.renderer[columnName];
            if (renderer.userImageRoot)
                result = renderer.userImageRoot;
        }
        return result;
    };
    /**
     *  Group Functions
     */
    TbsGrid.prototype.showGroupPanel = function () { this.classGroup.showGroupPanel(); };
    TbsGrid.prototype.hideGroupPanel = function () { this.classGroup.hideGroupPanel(); };
    TbsGrid.prototype.setGroupColumns = function (groupColumns) {
        var _this = this;
        this.group_column_table.remove();
        groupColumns.map(function (column) { return _this.group_column_table.insert(_this.copyJson(column)); });
    };
    TbsGrid.prototype.setSortColumns = function (sortColumns) {
        var _this = this;
        this.sort_column_table.remove();
        sortColumns.map(function (column) { return _this.sort_column_table.insert(_this.copyJson(column)); });
    };
    /**
     * Tree Functions
     */
    //setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
    TbsGrid.prototype.setTreeSortColumn = function (sortColumn) { this.classTree.setTreeSortColumns(sortColumn); };
    /**
     *  Panel10 Functions
     */
    TbsGrid.prototype.showToolbarPanel = function () { this.classPanel10.showToolbarPanel(); };
    TbsGrid.prototype.hideToolbarPanel = function () { this.classPanel10.hideToolbarPanel(); };
    TbsGrid.prototype.showToolbarButtons = function (buttonType) { this.classPanel10.showToolbarButtons(buttonType); };
    TbsGrid.prototype.hideToolbarButtons = function (buttonType) { this.classPanel10.hideToolbarButtons(buttonType); };
    TbsGrid.prototype.showFilterPanel = function () { this.classFilter.showFilterPanel(); };
    TbsGrid.prototype.hideFilterPanel = function () { this.classFilter.hideFilterPanel(); };
    TbsGrid.prototype.showSortPanel = function () { this.classSort.showSortPanel(); };
    TbsGrid.prototype.hideSortPanel = function () { this.classSort.hideSortPanel(); };
    /**
     * Options
     */
    TbsGrid.prototype.createOption = function (options) { this.setOptions(options); };
    TbsGrid.prototype.setOption = function (optionName, optionValue) { this.options[optionName] = optionValue; };
    TbsGrid.prototype.setOptions = function (options) { for (var key in options)
        this.setOption(key, options[key]); };
    return TbsGrid;
}(tbs_grid_base_1.TbsGridBase));
exports.TbsGrid = TbsGrid;
applyMixins(TbsGrid, [tbs_grid_base_main_1.TbsGridBaseMain,
    ,
    tbs_grid_base_is_1.TbsGridBaseIs,
    tbs_grid_base_event_1.TbsGridBaseEvent,
    tbs_grid_base_user_event_1.TbsGridBaseUserEvent,
    tbs_grid_base_line_1.TbsGridBaseLine,
    tbs_grid_base_data_1.TbsGridBaseData,
    tbs_grid_base_columns_1.TbsGridBaseColumns,
    tbs_grid_base_rows_1.TbsGridBaseRows]);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}


/***/ }),

/***/ 2978:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.optionAlias = exports.treeAlias = exports.rowAlias = exports.columnAlias = exports.BeforeAfter = exports.Direction = exports.AddRowDirection = exports.GridMode = exports.CellType = exports.ColumnKind = exports.FilterType = exports.ClickPageOrder = void 0;
var ClickPageOrder;
(function (ClickPageOrder) {
    ClickPageOrder["first"] = "first";
    ClickPageOrder["last"] = "last";
    ClickPageOrder["prev"] = "prev";
    ClickPageOrder["next"] = "next";
})(ClickPageOrder || (exports.ClickPageOrder = ClickPageOrder = {}));
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
})(FilterType || (exports.FilterType = FilterType = {}));
var ColumnKind;
(function (ColumnKind) {
    ColumnKind["column"] = "column";
    ColumnKind["header"] = "header";
    ColumnKind["empty"] = "empty";
})(ColumnKind || (exports.ColumnKind = ColumnKind = {}));
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
})(CellType || (exports.CellType = CellType = {}));
var GridMode;
(function (GridMode) {
    GridMode["grid"] = "";
    GridMode["tree"] = "tree";
    GridMode["page"] = "page";
    GridMode["pagination"] = "pagination";
})(GridMode || (exports.GridMode = GridMode = {}));
var AddRowDirection;
(function (AddRowDirection) {
    AddRowDirection["top"] = "top";
    AddRowDirection["bottom"] = "bottom";
    AddRowDirection["before"] = "before";
    AddRowDirection["after"] = "after";
})(AddRowDirection || (exports.AddRowDirection = AddRowDirection = {}));
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (exports.Direction = Direction = {}));
var BeforeAfter;
(function (BeforeAfter) {
    BeforeAfter["before"] = "before";
    BeforeAfter["after"] = "after";
})(BeforeAfter || (exports.BeforeAfter = BeforeAfter = {}));
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
})(columnAlias || (exports.columnAlias = columnAlias = {}));
/**
 * row property name
 */
var rowAlias;
(function (rowAlias) {
    rowAlias["selectMode"] = "selectMode";
    rowAlias["addRow"] = "addRow";
    rowAlias["delRow"] = "delRow";
})(rowAlias || (exports.rowAlias = rowAlias = {}));
/**
 * tree property name
 */
var treeAlias;
(function (treeAlias) {
    treeAlias["itemName"] = "itemName";
    treeAlias["parentName"] = "parentName";
    treeAlias["rootValue"] = "rootValue";
})(treeAlias || (exports.treeAlias = treeAlias = {}));
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
})(optionAlias || (exports.optionAlias = optionAlias = {}));


/***/ }),

/***/ 5412:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5412__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(7265);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});