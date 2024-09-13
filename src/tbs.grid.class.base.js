class TbsGridBase {

    constructor(gridId) {
        this.gridId = gridId;
        this.gridConfig = tbsGridConfigs[Object.keys(tbsGridConfigs)[0]];

        /**
         * @description maxRowId
         *
         */
        this.maxRowId = -1; // maxRowId
        this.topMaxRowId = 1;
        this.footerMaxRowId = 1;

        /**
         * @description data
         *
         */
        this.data_user = []; // Data User
        this.data_table = []; // Data Table
        this.data_view = []; // Data View : View Conversion Data, fixed data, filter, sort
        this.data_temp = []; // group or tree - open, closed

        this.data_page = []; // Data Page
        this.data_top = [];
        this.data_footer = [];

        this.data_update = [];
        this.data_insert = [];
        this.data_delete = [];

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

        /**
         * @description columns
         *
         */
        this.userColumns = [];
        this.headerColumns = [];
        this.headerColumnTable = [];
        this.topColumns = [];
        this.footerColumns = [];


        this.toolbar = {};
        this.filtering = {};
        this.grouping = {};
        this.sorting = {};

        /**
         * @description Column constance
         *
         */
        this.column_name = 'name';
        this.column_text = 'text';
        this.column_type = 'type';
        this.column_width = 'width';
        this.column_editable = 'editable';
        this.column_visible = 'visible';
        this.column_align = 'align';
        this.column_scale = 'scale';
        this.column_roundType = 'roundType';
        this.column_fixedScale = 'fixedScale';
        this.column_scaleMax = 'scaleMax';
        this.column_scaleMin = 'scalemin';
        this.column_showZero = 'showZero';
        this.column_commaUnit = 'commaUnit';  // to be deprecated, Fixed 3
        this.column_thousandChar = 'thousandChar';
        this.column_decimalChar = 'decimalChar';
        this.column_currencyChar = 'currencyChar';
        this.column_className = 'className'; // className

        // this.column_resizable     = 'resizable'  ;
        // this.column_sortable   	  = 'sortable'   ;
        // this.column_movable       = 'movable'    ;
        // this.column_autoResizable = 'autoResizable';
        // this.column_autoWidth     = 'autoWidth'  ;

        this.column_summaryType = 'summaryType';
        this.column_required = 'required';
        this.column_combo = 'combo';
        this.column_format = 'format';
        this.column_children = 'children';
        this.column_kind = 'kind'; //header, column, empty
        this.column_rowSpan = 'rowSpan';
        this.column_colSpan = 'colSpan';
        this.column_rowIndex = 'rowIndex';
        this.column_colIndex = 'colIndex';
        this.column_fromcol = 'fromcol';
        this.column_tocol = 'tocol';
        this.column_num = '_number';
        this.column_parentNum = '_parentNumber';
        this.column_subRowSpan = 'subRowSpan';
        this.column_subColSpan = 'subColSpan';
        this.column_order = 'order';

        /**
         * @description Columns
         *
         */
        this.columns = [];
        // Sort after filter
        this.filterColumns = [];	// [{ name : 'columnName', value : , type : , excludedValues : []}]

        this.const_filterValue = 'value';
        this.const_filterType = 'type';
        this.const_filterexcludedValues = 'excludedValues';

        this.const_filterSelect = 0; //'Select'				 	;
        this.const_filterEqual = 1; //'Equal'					 	; // =
        this.const_filterNotEqual = 2; //'Does not equal'			; // !=
        this.const_filterGreater = 3; //'Greater than'			 	; // >
        this.const_filterGreaterEqual = 4; //'Greater than or Equal to'	; // >=
        this.const_filterLess = 5; //'Less than'				 	; // <
        this.const_filterLessEqual = 6; //'Less than or Equal to'	 	; // <=
        this.const_filterBetween = 7; //'Between'				    ; // Between
        this.const_filterBlank = 8; //'Blank'					 	; // Blank
        this.const_filterInclude = 9; //'Include' 					;
        this.const_filterNotInclude = 10; //'Not Include'				;
        this.const_filterStartCharacter = 11; //'Start Characters'			;
        this.const_filterEndCharacter = 12; //'End Characters'  			;

        this.const_filterReset = 'Reset';
        this.const_filterSave = 'Save';

        //this.sortColumns = []; 	 // [{ name : 'layout', order : 'asc'}, { name : 'layout', order : 'asc'}]
        this.summaryColumns = [];// [{ name : 'layout'}, { name : 'layout']  => summaryColumns

        this.headerRowCount = 0;

        /* Options */
        this.options = {}

        /**
         * @description tool bar - do not touch
         *
         */
        this.toolbar_filter_placeholder = 'Search'; //Integrated filter(space key unit)
        this.toolbar_visible = true;

        this.options.toolbar = {};
        this.options.toolbar[this.toolbar_visible] = true;

        /* filter optons */
        this.option_showFilterPanel = 'showFilterPanel';
        this.options[this.option_showFilterPanel] = false;

        /* sort optons */
        this.option_showSortPanel = 'showSortPanel';
        this.options[this.option_showSortPanel] = false;

        /* group optons */
        this.option_showGroupPanel = 'showGroupPanel';
        this.options[this.option_showGroupPanel] = false;

        /* Columns Options */
        this.option_sortable = 'sortable';
        this.option_resizable = 'resizable';
        this.option_movable = 'movable';
        this.option_autoResizable = 'autoResizable';
        this.option_autoWidth = 'autoWidth';

        this.options[this.option_sortable] = true;
        this.options[this.option_resizable] = true;
        this.options[this.option_movable] = true;
        this.options[this.option_autoResizable] = true;
        this.options[this.option_autoWidth] = false;

        // Rows Options
        this.option_selectMode = 'selectMode';
        this.option_addRow = 'addRow';
        this.option_delRow = 'delRow';

        this.options[this.option_selectMode] = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
        this.options[this.option_addRow] = false; 	//== row option
        this.options[this.option_delRow] = false;

        // Panel21 options
        this.option_rowMode = 'rowMode';
        this.option_checkbox = 'checkbox';
        this.option_numWidth = 'numWidth';
        this.option_rowModeWidth = 'rowModeWidth';
        this.option_checkBoxWidth = 'checkBoxWidth';

        this.options[this.option_rowMode] = false;		//value : true, false, null
        this.options[this.option_checkbox] = false;		//value : true, false
        this.options[this.option_numWidth] = 50;
        this.options[this.option_rowModeWidth] = 20;
        this.options[this.option_checkBoxWidth] = 25;

        this.option_insertRow = 'insertRow';
        this.option_updateRow = 'updateRow';
        this.option_deleteRow = 'deleteRow';
        this.option_zeroChar = 'zeroChar';
        this.option_useToolbar = 'useToolbar';
        this.option_imageRoot = 'imageRoot';

        this.options[this.option_insertRow] = false;
        this.options[this.option_updateRow] = false;
        this.options[this.option_deleteRow] = false;
        this.options[this.option_zeroChar] = this.getConfigCulture('zeroChar');
        this.options[this.option_useToolbar] = true;
        this.options[this.option_imageRoot] = this.getConfigOption('imageRoot');

        this.grid_mousePointRange = 10;
        this.grid_event = '';
        this.popupActive = 0;

        // frozen row, column (fixRow : fixedRowCount, fixCol : fixedColumnIndex)
        /**
         * @description layout
         *
         */
        this.fixedColumnIndex = -1;
        this.fixedRowCount = 0;  // required
        this.fixedRowIndex = -1;
        /**
         * @description merge
         *
         */
        this.merge = false;
        this.mergeType = 0;
        /**
         * @description constant value
         *
         */
        this.headerRowHeight = 25;
        this.rowHeight = 25;
        this.topRowHeight = 25;
        this.footerRowHeight = 25;
        /**
         * @description mobile, user agent
         *
         */
        this.md = new MobileDetect(window.navigator.userAgent);
        this.mobile = this.md.mobile(); // not mobile : null
        this.userAgent = this.md.userAgent(); // safari

        /**
         * @description user event
         *
         */
        this.user_click = null;
        this.user_dblclick = null;

        this.user_editStart = null; // system
        this.user_edit = null; // system
        this.user_editEnd = null; // system

        this.user_keydown = ''; // not used
        this.user_keyup = ''; // not used
        this.user_blur = ''; // not used

        this.user_cellBounding = null; // set data, css
        this.user_rowBounding = null;  // set css
        /**
         * @description code
         *
         */
        /* mode */
        this.debug_mode = true;
        this.grid_mode = ''; // '', tree, pivot, grouping, merge, paging

        this.code_tree = 'tree';
        this.code_pivot = 'pivot';
        this.code_group = 'group';
        this.code_page = 'page';
        this.code_pagination = 'pagination';
        this.code_mode = '_mode';
        this.code_rowId = '_rowId';
        this.code_isOpen = '_isOpen';

        /* Column Type = Cell Type */
        this.code_string = 'string';
        this.code_number = 'number';
        this.code_currency = 'currency';
        this.code_date = 'date';
        this.code_combo = 'combo';
        this.code_checkbox = 'checkbox';
        this.code_image = 'image';

        /* Cell Template */

        // * rowIndex, cellIndex : editing은 생각도 하지 말자.
        // * rowSpan, colSpan 등이 필요하네.


        this.code_up = 'up';
        this.code_down = 'down';
        this.code_left = 'left';
        this.code_right = 'right';

        this.code_before = 'before';
        this.code_after = 'after';

        this.code_front = 'front';
        this.code_back = 'back';

        this.code_horizontal = 'horizontal';
        this.code_vertical = 'vertical';

        /* group, tree */
        this.code_depth = '_depth';
        this.code_children = '_children';
        this.code_num = '_number';
        this.code_parentNum = '_parentNumber';
        this.code_open = 'open';
        this.code_closed = 'closed';
        this.code_rowCount = '_rowCount';

        this.code_itemName = 'itemName';
        this.code_parentName = 'parentName';
        this.code_rootValue = 'rootValue';

        /**
         * @description class
         *
         */
        this.classScroll = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classColumn = new TbsGridColumn(this);
        this.classHeader = new TbsGridHeader(this);

        this.classControl = new TbsGridControl(this);
        this.classRange = new TbsGridRange(this);
        this.classRange40 = new TbsGridRangePanel(this, 'panel40');
        this.classRange50 = new TbsGridRangePanel(this, 'panel50');
        this.classFilter = new TbsGridFilter(this);
        this.classGroup = new TbsGridGroup(this);
        this.classPage = new TbsGridPage(this);
        this.classSort = new TbsGridSort(this);
        this.classTree = new TbsGridTree(this);

        this.classPanelBase = new TbsGridPanelBase(this);
        this.classPanel10 = new TbsGridPanel10(this);
        this.classPanel20 = new TbsGridPanel20(this);
        this.classPanel30 = new TbsGridPanel30(this);
        this.classPanel40 = new TbsGridPanel40(this);
        this.classPanel50 = new TbsGridPanel50(this);
        this.classPanel70 = new TbsGridPanel70(this);
        this.classPanel80 = new TbsGridPanel80(this);
        this.classPanel90 = new TbsGridPanel90(this);

        this.classRender = new TbsGridRender(this);

        this.classTop = new TbsGridTop(this);
        this.classFooter = new TbsGridFooter(this);

        this.tbsGridDate;
        this.tbsGridCombo;

    }

    /**
     * TbsGrid Event functions
     */

    tbs_click(e, grid, row, userFunction) { let val = userFunction(e, grid, row); return val; }
    tbs_dblclick(e, grid, row, userFunction) { let val = userFunction(e, grid, row); return val; }
    tbs_edit(e, grid, row, state, userFunction) { let val = userFunction(e, grid, row, state); return val; }
    tbs_rowBounding(grid, element, row, userFunction) { let val = userFunction(grid, element, row); return val; }
    tbs_cellBounding(grid, element, row, userFunction) { let val = userFunction(grid, element, row); return val; }

    /**
     * Control Functions
     *
     */
    tbs_apply() {
        let selector = '#' + this.gridId;
        let grid = this;

        let topRowIndex = grid.tbs_getFirstRowIndex();
        grid.classPanel20.setDataPanel(topRowIndex);
        grid.classPanel30.setDataPanel(topRowIndex);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    }
    tbs_setData(data, openDepth = 0, isFirst = true) {
        let selector = '#' + this.gridId;
        let grid = this;

        if (grid.grid_mode == grid.code_group) grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == grid.code_tree) grid.classTree.setTreeData(data, openDepth, isFirst);
        else grid.tbs_setGridData(data);
    }
    tbs_setGridMode(gridMode) {
        let selector = '#' + this.gridId;
        let grid = this;

        grid.grid_mode = grid.tbs_trim(gridMode);

        if (grid.grid_mode == grid.code_page) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.tbs_setGridModePage();
        }
        else if (grid.grid_mode == grid.code_pagination) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.tbs_setGridModePagenation();
        }
        else if (grid.grid_mode == grid.code_group) {}
    }
    tbs_render(column) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = null;
        let columnType = column[grid.column_type];
    }

    /**
     * Util Functions
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
    isNull(a, b) {
        return grid.null(a) ?  b : a;
    }
    tbs_error(p) {
        if (this.debug_mode) { console.log('[TbsGrid error] ' + p); }
    }
    tbs_caution(p) {
        if (this.debug_mode) { console.log('[TbsGrid caution] ' + p); }
    }
    tbs_copyJson(p) {
        return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
    }
    tbs_empty(p) {
        return p == null || p == undefined || this.tbs_trim(p) == '';
    }
    tbs_substr (s, index, len) {
        let result = '';
        try {
            s = s.toString();
            if (arguments.length == 2) result = s.substring(index);
            else if (arguments.length == 3) result = s.substring(index).substring(0, len);
            return result;
        }
        catch (e) {
            return result;
        }
    }
    tbs_trim (s) {
        if (this.null(s)) return '';
        else return s.toString().replace(/^\s+|\s+$/gi,"");
    }
    tbs_round(num, dpLen) {
        if (num > 0) return + (Math.round(num.toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
        else return -(Math.round(Math.abs(num).toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
    }
    tbs_ceil(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.ceil(num * n) / n);
    }
    tbs_floor(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.floor(num * n) / n);
    }
    tbs_getTreeRowCount(columns) {
        let grid = this;
        let column_children = grid.column_children;
        const getDepth = (column) => {
            return 1 + (column[column_children] ? Math.max(...column[column_children].map(getDepth)) : 0);
        }
        let depthList = [];
        for (let i = 0, len = columns.length; i < len; i++) {
            depthList.push(getDepth(columns[i]));
        }
        return Math.max(0, ...depthList);
    }
    spliceAfter(arr, selectIndex, targetIndex) {
        if (targetIndex == null) {targetIndex = 0;}
        else targetIndex += 1;
        if (targetIndex == selectIndex) return arr;
        arr.splice(targetIndex, 0, JSON.parse(JSON.stringify(arr[selectIndex])));
        if (targetIndex < selectIndex) selectIndex += 1;
        arr.splice(selectIndex, 1);

        for (let x = 0, colLen = arr.length; x < colLen; x++) {
            arr[x].colIndex = x;
        }

        return JSON.parse(JSON.stringify(arr));
    }
    insertAfter(selectCol, targetCol) {
        if (targetCol == null) {
            selectCol.parentNode.insertBefore(selectCol, selectCol.parentNode.firstChild);
        }
        else {
            if (targetCol.cellIndex == this.columns.length - 1) {
                let cellIndex = targetCol.cellIndex;
                if (cellIndex >= this.columns.length) return;
                selectCol.parentNode.insertBefore(selectCol, null);
            }
            else {
                let cellIndex = targetCol.cellIndex + 1;
                if (cellIndex >= this.columns.length) return;
                selectCol.parentNode.insertBefore(selectCol, targetCol.parentNode.childNodes[cellIndex]);
            }
        }
    }
    getConfigCulture (label) { return this.null(this.gridConfig.culture[label])  ? 'No Label' : this.gridConfig.culture[label]; }
    getConfigCalendar(label) { return this.null(this.gridConfig.calendar[label]) ? 'No Label' : this.gridConfig.calendar[label]; }
    getConfigFont    (label) { return this.null(this.gridConfig.font[label])     ? 'No Label' : this.gridConfig.font[label]; }
    getConfigOption  (label) { return this.null(this.gridConfig.options[label])  ? 'No Label' : this.gridConfig.options[label]; }
    getConfigLabel   (label) { return this.null(this.gridConfig.labels[label])   ? 'No Label' : this.gridConfig.labels[label]; }

    /**
     * Dom Functions
     *
     */

    tbs_setCell(tableCell, property, value) {
        if (tableCell[property] != value) tableCell[property] = value;
    }
    tbs_setCellStyle(tableCell, property, value) {
        if (tableCell.style[property] != value) tableCell.style[property] = value;
    }
    tbs_addUserClass(tableCell, className) {
        this.tbs_removeUserClass(tableCell);
        if (this.notNull(className) && this.notEmpty(className)) tableCell.classList.add(className);
    }
    tbs_removeUserClass(tableCell, className) {
        // Create classNameArray : for remove except tbs-* className
        let classNameArray = [];
        for (let i = 0, len = tableCell.classList.length; i < len; i++) {
            if (tableCell.classList[i].startsWith('tbs-grid-')) continue;
            else classNameArray.push(tableCell.classList[i]);
        }
        // Remove classNameArray
        for (let i = 0, len = classNameArray.length; i < len; i++) tableCell.classList.remove(classNameArray[i]);
    }

    tbs_createElementCellDiv() {
        let element = document.createElement('div');
        element.classList.add('tbs-grid-cell-div');
        return element;
    }
    tbs_createElementCellIcon() {
        let element = document.createElement('span');
        element.classList.add('tbs-grid-cell-div-icon');
        return element;
    }
    tbs_createElementCellImg() {
        let element = document.createElement('span');
        element.classList.add('tbs-grid-cell-div-img');
        return element;
    }
    tbs_createElementCellText() {
        let element = document.createElement('span');
        element.classList.add('tbs-grid-cell-div-text');
        element.textContent = '';
        return element;
    }

    tbs_prependIcon(element, childElement) {
        let el = element.querySelector('.tbs-grid-cell-div-icon');
        if (el == undefined) element.childNodes[0].prepend(childElement);
    }
    tbs_prependImg(element, childElement) {
        let el = element.querySelector('.tbs-grid-cell-div-img');
        if (el == undefined) element.childNodes[0].prepend(childElement);
    }
    tbs_setValueInIcon(element, value) {
        let el = element.querySelector('.tbs-grid-cell-div-icon');
        if (el == undefined) {}
    }
    tbs_setValueInImg(element, value) {
        let el = element.querySelector('.tbs-grid-cell-div-img');
        if (el == undefined) {}
    }
    tbs_setValueInText(element, value) {
        let el = element.querySelector('.tbs-grid-cell-div-text');
        if (el == undefined) el.textContent = value;
    }

    /**
     * Format Functions
     *
     */

    tbs_getFormatValue(col, value){
        let result = this.tbs_getFormat(col, value);
        return result.value;
    }
    tbs_getFormatText(col, value){
        let result = this.tbs_getFormat(col, value);
        return result.text;
    }
    tbs_getFormat(column, value) {
        let grid = this;

        let result = {};
        result.value = value;
        result.text = value;

        let colType = column[grid.column_type];
        let format  = column[grid.column_format];

        if (colType == grid.code_number || colType == grid.code_currency) {
            result = this.tbs_getFormatNumber(column, value);
            if (column[grid.column_visible] == false
                || (column[grid.column_showZero] == false && Number(result.value) == 0 )) {
                result.text = this.options[grid.option_zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == grid.code_combo) {
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
            }
            else if (colType == 'date') {
                return this.tbs_getFormatDate(column, value);
            }
            else {
                result.text = value;
                return result;
            }
        }
    }
    tbs_getFormatNumber(column, value) {
        let grid = this;
        const formatWon = function (n) {
            //return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); safari error
            //return val.toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','); int type error
            let parts = n.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };

        // result = { value: , text: }
        let result = {};
        if      (grid.null(value))            result.value = null;
        else if (grid.tbs_trim(value) == '')  result.value = null;
        else if (grid.tbs_substr(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
        else {
            value = value.toString().replace(grid.getConfigCulture('currencyChar'), '');
            result.value = value.toString().replace(/,/gi, '')
        }

        if (grid.null(result.value)) {
            result.text = grid.options[grid.option_zeroChar];
            return result;
        }
        result.text = result.value;

        let type = column[grid.column_type];
        let scale = column[grid.column_scale];

        let arr = scale.split(',');
        let decimalPoint = (arr.length > 1) ? this.tbs_trim(arr[1]) : '0';
        if (decimalPoint == '') decimalPoint = '0';

        let roundType = column[grid.column_roundType];
        let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        let dpLen = 0; //decimal length

        if (decimalPoint == '0') {
            dpLen = 0;
            if      (roundType == 'round') n = parseFloat(this.tbs_round(n, dpLen));
            else if (roundType == 'ceil' ) n = parseFloat(this.tbs_ceil(n, dpLen));
            else if (roundType == 'floor') n = parseFloat(this.tbs_floor(n, dpLen));
            else     parseFloat(this.tbs_round(n, dpLen));
            result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[grid.column_fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? this.tbs_ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.tbs_floor(n, dpLen).toFixed(dpLen)
                        : this.tbs_round(n, dpLen).toFixed(dpLen);
                result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
            }
            else {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? parseFloat(this.tbs_ceil(n, dpLen))
                    : (roundType == 'floor') ? parseFloat(this.tbs_floor(n, dpLen))
                        : parseFloat(this.tbs_round(n, dpLen));
                result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[grid.option_zeroChar] == false) result.text = grid.option_zeroChar;
        }
        let regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',',  column[grid.column_thousandChar]);
        result.text = result.text.replaceAll('.',  column[grid.column_decimalChar]);
        if (type == grid.code_currency) result.text = column[grid.column_currencyChar] + result.text
        return result;
    }
    tbs_getFormatDate(column, value) {
        let grid = this;
        let result = {};
        value = value.replace(/\./gi, '');
        value = value.replace(/\-/gi, '');
        value = value.replace(/\//gi, '');

        result.value = this.tbs_trim(value);
        result.text = result.value;

        //date : 8 char
        if (result.value == '' || result.value.length != 8) {
            result.value = '';
            result.text = '';
            return result;
        }
        let format = column[grid.column_format];

        // date char : . - /
        let formatText = format.replace(/\./gi, '');
        formatText = formatText.replace(/\-/gi, '');
        formatText = formatText.replace(/\//gi, '');

        let dateText = result.text;
        let yyyy = '';
        let MM = '';
        let dd = '';

        if (formatText == 'yyyyMMdd') {
            yyyy = grid.tbs_substr(result.text,0, 4);
            MM = grid.tbs_substr(result.text,4, 2);
            dd = grid.tbs_substr(result.text,6, 2);
        }
        else if (formatText == 'ddMMyyyy') {
            yyyy = grid.tbs_substr(result.text, 4, 4);
            MM = grid.tbs_substr(result.text, 2, 2);
            dd = grid.tbs_substr(result.text, 0, 2);
        }
        else if (formatText == 'MMddyyyy') {
            yyyy = grid.tbs_substr(result.text, 4, 4);
            MM = grid.tbs_substr(result.text, 0, 2);
            dd = grid.tbs_substr(result.text, 2, 2);
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
     * Options Functions
     *
     */

    tbs_createOption(options) {
        let grid = this;

        grid.tbs_setOptions(options);
    }
    tbs_setOption(optionName, optionValue) {
        let grid = this;
        grid.options[optionName] = optionValue;
    }
    tbs_setOptions(options) {
        let grid = this;
        for (let key in options) grid.tbs_setOption(optionMenu, key);
    }

}
