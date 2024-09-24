(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TbsGridNames),
/* harmony export */   h: () => (/* binding */ TbsGridTypes)
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
      // Panel21 options
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tbsGridConfigs: () => (/* binding */ tbsGridConfigs)
/* harmony export */ });
/* harmony import */ var _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(365);

const tbsGridTypes = new _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridTypes */ .h();
const tbsGridNames = new _tbs_grid_types__WEBPACK_IMPORTED_MODULE_0__/* .TbsGridNames */ .G();
const tbsGridConfigs = {};
tbsGridConfigs.en = {
  culture: {
    name: 'us',
    language: 'us',
    currencyChar: '$',
    decimalChar: '.',
    thousandChar: ',',
    zeroChar: '-'
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
    fontFamily: 'Arial, Helvetica, sans-serif'
  },
  options: {
    imageRoot: '/src/img/'
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
    toolbar_button_reset: 'Reset'
  }
};
tbsGridConfigs.ko = {
  culture: {
    name: 'ko',
    language: 'ko',
    currencyChar: '₩',
    decimalChar: '.',
    thousandChar: ',',
    zeroChar: '-'
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
    fontFamily: 'Nanum Gothic, Arial, Helvetica, sans-serif'
  },
  options: {
    imageRoot: '/src/img/'
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
    toolbar_button_reset: '초기화'
  }
};
//
// export { tbsGridConfigs }
/******/ 	return __webpack_exports__;
/******/ })()
;
});