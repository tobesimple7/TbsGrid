TbsGrid = function (gridId) {
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
	this.data_user   = []; // Data User
	this.data_table  = []; // Data Table
	this.data_view   = []; // Data View : View Conversion Data, fixed data, filter, sort
	this.data_page   = []; // Data Page
	this.data_top    = [];
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

	this.startRowIndex  = -1;
	this.startCellIndex = -1;
	this.lastRowIndex   = -1;
	this.lastCellIndex  = -1;

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

	/* main */
	this.module_default	    	= null;
	this.module_toolbar 	    = 'toolbar';
	this.module_header 	   	 	= 'header';
	this.module_content 	    = 'content';
	this.module_top   			= 'top';
	this.module_footer 			= 'footer';
	this.module_fixedRow 		= 'fixedRow';
	this.module_fixedColumn		= 'fixedColumn';
	this.module_filtering    	= 'filtering';
	this.module_grouping     	= 'grouping';
	this.module_sorting	    	= 'sorting';
	this.module_column        	= 'column';
	this.module_paging          = 'paging';
	this.module_pagination      = 'pagination';

	this.toolbar 	= {};
	this.filtering  = {};
	this.grouping   = {};
	this.sorting	= {};




	/**
	 * @description Column constance
	 *
	 */
	this.column_name             = 'name'       ;
	this.column_text             = 'text'       ;
	this.column_type             = 'type'       ;
	this.column_width            = 'width'      ;
	this.column_editable         = 'editable'   ;
	this.column_visible          = 'visible'    ;
	this.column_align            = 'align'      ;
	this.column_scale            = 'scale'      ;
	this.column_roundType        = 'roundType'  ;
	this.column_fixedScale       = 'fixedScale' ;
	this.column_scaleMax         = 'scaleMax'   ;
	this.column_scaleMin         = 'scalemin'   ;
	this.column_showZero         = 'showZero'   ;
	this.column_commaUnit        = 'commaUnit'  ;  // to be deprecated, Fixed 3
	this.column_thousandChar     = 'thousandChar';
	this.column_decimalChar      = 'decimalChar';
	this.column_currencyChar     = 'currencyChar';
	this.column_className		 = 'className'  ; // className

	// this.column_resizable     = 'resizable'  ;
	// this.column_sortable   	  = 'sortable'   ;
	// this.column_movable       = 'movable'    ;
	// this.column_autoResizable = 'autoResizable';
	// this.column_autoWidth     = 'autoWidth'  ;

	this.column_summaryType   = 'summaryType';
	this.column_required      = 'required'   ;
	this.column_combo         = 'combo'      ;
	this.column_format        = 'format'     ;
	this.column_children      = 'children'   ;
	this.column_kind          = 'kind'       ; //header, column, empty
	this.column_rowSpan       = 'rowSpan'	 ;
	this.column_colSpan       = 'colSpan' 	 ;
	this.column_rowIndex      = 'rowIndex' 	 ;
	this.column_colIndex      = 'colIndex' 	 ;
	this.column_fromcol       = 'fromcol' 	 ;
	this.column_tocol         = 'tocol'	     ;
	this.column_num           = 'number'     ;
	this.column_parentNum     = 'parentNumber';
	this.column_subRowSpan    = 'subRowSpan' ;
	this.column_subColSpan    = 'subColSpan' ;
	this.column_order         = 'order'     ;

	//this.layout_visible       = 'visible'   ; // not allow merged.
	this.layout_rowSpan       = 'rowSpan'   ;
	this.layout_colSpan       = 'colSpan'   ;
	this.layout_subRowSpan    = 'subRowSpan';
	this.layout_subColSpan    = 'subColSpan';
	this.layout_color         = 'color'     ;
	this.layout_backgroundColor    = 'backgroundColor';
	this.layout_text          = 'text'      ;
	/**
	 * @description Columns
	 *
	 */
	this.columns = [];
	// Sort after filter
	this.filterColumns = [];	// [{ name : 'columnName', value : , toValue, type : , excludedValues : []}]

	this.const_filterValue    		= 'value';
	this.const_filterToValue 		= 'toValue';
	this.const_filterType      		= 'type';
	this.const_filterexcludedValues = 'excludedValues';

	this.const_filterEqual          = 1 ; //'Equal'					 	; // =
	this.const_filterNotEqual       = 2 ; //'Does not equal'			; // !=
	this.const_filterGreater        = 3 ; //'Greater than'			 	; // >
	this.const_filterGreaterEqual   = 4 ; //'Greater than or Equal to'	; // >=
	this.const_filterLess           = 5 ; //'Less than'				 	; // <
	this.const_filterLessEqual      = 6 ; //'Less than or Equal to'	 	; // <=
	this.const_filterBetween        = 7 ; //'Between'				    ; // Between
	this.const_filterBlank          = 8 ; //'Blank'					 	; // Blank
	this.const_filterInclude 		= 9 ; //'Include' 					;
	this.const_filterNotInclude 	= 10; //'Not Include'				;
	this.const_filterStartCharacter = 11; //'Start Characters'			;
	this.const_filterEndCharacter	= 12; //'End Characters'  			;

	this.const_filterReset = 'Reset';
	this.const_filterSave  = 'Save';

	this.sortColumns = []; 	 // [{ name : 'layout', order : 'asc'}, { name : 'layout', order : 'asc'}]
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
	this.option_filterVisible   = 'showFilterPanel';
	this.options[this.option_filterVisible] = false;

	/* sort optons */
	this.option_sortVisible     = 'showSortPanel';
	this.options[this.option_sortVisible] = false;

	/* group optons */
	this.option_groupVisible = 'showGroupPanel';
	this.options[this.option_groupVisible] = false;

	/* Columns Options */
	this.option_sortable	  = 'sortable'	   ;
	this.option_resizable	  = 'resizable'	   ;
	this.option_movable	  	  = 'movable'	   ;
	this.option_autoResizable = 'autoResizable';
	this.option_autoWidth	  = 'autoWidth'    ;

	this.options[this.option_sortable]      = true;
	this.options[this.option_resizable]     = true;
	this.options[this.option_movable]       = true;
	this.options[this.option_autoResizable] = true;
	this.options[this.option_autoWidth]     = false;

	// Rows Options
	this.option_selectMode	  = 'selectMode'   ;
	this.option_addRow	  	  = 'addRow'	   ;
	this.option_delRow	  	  = 'delRow'	   ;

	this.options[this.option_selectMode]   = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
	this.options[this.option_addRow]       = false; 	//== row option
	this.options[this.option_delRow]       = false;

	// Panel21 options
	this.option_rowMode	 = 'rowMode' ;
	this.option_checkbox = 'checkbox';
	this.option_numWidth	  = 'numWidth'	   ;
	this.option_rowModeWidth  = 'rowModeWidth' ;
	this.option_checkBoxWidth = 'checkBoxWidth';

	this.options[this.option_rowMode]      = false;		//value : true, false, null
	this.options[this.option_checkbox]     = false;		//value : true, false
	this.options[this.option_numWidth]     = 50;
	this.options[this.option_rowModeWidth] = 20;
	this.options[this.option_checkBoxWidth]= 25;

	this.option_insertRow	  = 'insertRow'	   ;
	this.option_updateRow	  = 'updateRow'	   ;
	this.option_deleteRow	  = 'deleteRow'	   ;
	this.option_zeroChar	  = 'zeroChar'	   ;
	this.option_useToolbar	  = 'useToolbar'   ;
	this.option_imageRoot     = 'imageRoot'    ;

	this.options[this.option_insertRow]    = false;
	this.options[this.option_updateRow]    = false;
	this.options[this.option_deleteRow]    = false;
	this.options[this.option_zeroChar]     = this.gridConfig.culture.zeroChar;
	this.options[this.option_useToolbar]   = true;
	this.options[this.option_imageRoot]    = this.gridConfig.options.imageRoot;

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
	this.rowHeight       = 25;
	this.topRowHeight    = 25;
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
	this.user_click		 = null;
	this.user_dblclick	 = null;

	this.user_editStart = null; // system
	this.user_edit      = null; // system
	this.user_editEnd   = null; // system

	this.user_keydown	 = ''; // not used
	this.user_keyup		 = ''; // not used
	this.user_blur		 = ''; // not used
	/**
	 * @description code
	 *
	 */
	/* mode */
	this.debug_mode  = true;
	this.grid_mode    = ''; // '', tree, pivot, grouping, merge, paging

	this.code_tree    = 'tree';
	this.code_pivot   = 'pivot';
	this.code_group   = 'group';
	this.code_page    = 'page';  //options : paging, grouping, filtering, sorting

	this.code_mode           = '_mode'   ;
	this.code_rowId          = '_rowId'  ;
	this.code_isOpen         = 'isOpen';

	this.code_string  = 'string';
	this.code_number  = 'number';
	this.code_currency= 'currency';
	this.code_date    = 'date';
	this.code_combo   = 'combo';

	this.code_up    = 'up'   ;
	this.code_down  = 'down' ;
	this.code_left  = 'left' ;
	this.code_right = 'right';

	this.code_before = 'before';
	this.code_after  = 'after';

	this.code_front = 'front';
	this.code_back  = 'back';

	this.code_horizontal = 'horizontal';
	this.code_vertical   = 'vertical';

	/* group, tree */
	this.code_depth		= 'depth'   ;
	this.code_children  = 'children';
	this.code_num       = 'number';
	this.code_parentNum = 'parentNumber';
	this.code_open      = 'open';
	this.code_closed    = 'closed';

	/**
	 * @description class
	 *
	 */

	this.tbsGridDate; // class
	this.tbsGridCombo; // class

	this.classControl     = new TbsGridControl(this);
	this.classRange40     = new TbsGridRange(this, 'panel40');
	this.classRange50     = new TbsGridRange(this, 'panel50');
	this.classFilter      = new TbsGridFilter(this);
	this.classGroup       = new TbsGridGroup(this);
	this.classPage        = new TbsGridPage(this);
	this.classSort        = new TbsGridSort(this);
	this.classTree        = new TbsGridTree(this);
	this.verticalScroll   = new TbsGridScroll(this, 'verticalScroll');
	this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');
}
