/**
 * tbs.grid.js
 *
 */
TbsGrid = function (gridId) {
	this.gridId = gridId;
	this.maxRowId = -1; // maxRowId

	this.debug_mode  = true;
	this.grid_mode   = ''; //'', tree, pivot, group, merge
	/**
	 * @description code
	 *
	 */
	this.code_grid    = '';
	this.code_tree    = 'tree';
	this.code_pivot   = 'pivot';
	this.code_group   = 'group';

	this.code_string  = 'string';
	this.code_number  = 'number';
	this.code_currency= 'currency';
	this.code_date    = 'date';
	this.code_combo   = 'combo';

	this.code_up    = 'up'   ;
	this.code_down  = 'down' ;
	this.code_left  = 'left' ;
	this.code_right = 'right';

	this.code_horizontal = 'horizontal';
	this.code_vertical   = 'vertical';
	/**
	 * @description constance
	 *
	 */
	this.const_mode           = '_mode'   ;
	this.const_rowId          = '_rowId'  ;
	this.const_groupingPlaceHolder= 'Drag a column header here to group by that column.'; //@deprected
	this.const_isOpen         = 'isOpen';

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

	// this.column_resizable     = 'resizable'  ;
	// this.column_sortable   	  = 'sortable'   ;
	// this.column_movable       = 'movable'    ;
	// this.column_autoResizable = 'autoResizable';
	// this.column_autoWidth     = 'autoWidth'  ;

	this.column_summaryType   = 'summaryType';
	this.column_required      = 'required'   ;
	this.column_combo         = 'combo'      ;
	this.column_format        = 'format'     ;
	this.header_name          = 'headerName' ;
	this.header_align         = 'headerAlign';
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

	this.layout_visible       = 'visible'   ;
	this.layout_rowSpan       = 'rowSpan'   ;
	this.layout_colSpan       = 'colSpan'   ;
	this.layout_subRowSpan    = 'subRowSpan';
	this.layout_subColSpan    = 'subColSpan';
	this.layout_color         = 'color'     ;
	this.layout_background    = 'background';
	this.layout_text          = 'text'      ;


	/**
	 * @description Columns
	 *
	 */
	this.columns = [];
	this.headerColumns = [];
	this.topColumns = [];
	this.footerColumns = [];

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
	this.groupColumns = [];  // => group column
	this.groupView = [];
	this.groupColumn = [];
	this.headerRowCount = 0;
	// summaryColumns -> summaryColumns
	// groupColumns -> summaryColumns

	//================================================================

	/**
	 * @description Options
	 *
	 * The TbsGrid Developing Guide
	 * 		Use grid.options.tree
	 * 		Don't use options[i].tree (not array index)
	 */

	/* This rule is for developtment */
	/* Option Fixed Options : Use constant variable instead of string value */
	this.option_selectMode	  = 'selectMode'   ;
	this.option_dateChar	  = 'dateChar'	   ;
	this.option_addRow	  	  = 'addRow'	   ;
	this.option_delRow	  	  = 'delRow'	   ;
	this.option_rowMode	      = 'rowMode'	   ;
	this.option_checkbox	  = 'checkbox'	   ;
	this.option_fixedColIndex = 'fixedColumnIndex'; //deprecated
	this.option_fixedRowIndex = 'fixedRowIndex'; //deprecated
	this.option_insertRow	  = 'insertRow'	   ;
	this.option_updateRow	  = 'updateRow'	   ;
	this.option_deleteRow	  = 'deleteRow'	   ;
	this.option_zeroChar	  = 'zeroChar'	   ;
	this.option_numWidth	  = 'numWidth'	   ;
	this.option_rowModeWidth  = 'rowModeWidth' ;
	this.option_checkBoxWidth = 'checkBoxWidth';
	this.option_useToolbar	  = 'useToolbar'   ;
	this.option_imageRoot     = 'imageRoot'    ;

	this.options = {}
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
	this.module_tree 		    = 'tree';
	this.module_column        	= 'column';

	/* Option Fixed Options */
	this.options.toolbar 	   = {};
	this.options.header 	   = {};
	this.options.content 	   = {};
	this.options.summaryTop    = {};
	this.options.summaryFooter = {};
	this.options.fixedRows 	   = {};
	this.options.tree 		   = {};
	/**
	 * @description tool bar - do not touch
	 *
	 */
	this.toolbar_filter_placeholder = 'Search'; //Integrated filter(space key unit)
	this.toolbar_visible = true;

	this.options.toolbar = {};
	this.options.toolbar[this.toolbar_visible] = false;

	/* filter optons */
	this.option_filterVisible   = 'filterVisible';

	this.options.filtering = {};
	this.options.filtering[this.option_filterVisible] = false;

	/* sort optons */
	this.option_sortVisible     = 'sortVisible'  ;

	this.options.sorting = {};
	this.options.sorting[this.option_sortVisible] = false;

	/* group optons */
	this.option_groupVisible    = 'visible' ;

	this.options.grouping = {};
	this.options.grouping[this.option_groupVisible] = false;

	/* Tree Options */
	this.option_treeItemName	= 'name'		;
	this.option_treeParentName	= 'parentName'	;
	this.option_treeRootValue	= 'rootValue'	;
	this.option_treeSortColumns	= 'sortColumns'	; // deprecated

	this.options.tree = {};

	/* Columns Options */
	this.option_sortable	  = 'sortable'	   ;
	this.option_resizable	  = 'resizable'	   ;
	this.option_movable	  	  = 'movable'	   ;
	this.option_autoResizable = 'autoResizable';
	this.option_autoWidth	  = 'autoWidth'    ;

	this.options.column = {};
	this.options.column[this.option_sortable]      = true;
	this.options.column[this.option_resizable]     = true;
	this.options.column[this.option_movable]       = true;
	this.options.column[this.option_autoResizable] = true;
	this.options.column[this.option_autoWidth]     = false;

	// Rows Options
	this.options.rows = {};
	this.options[this.option_selectMode]   = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
	this.options[this.option_dateChar]     = '.'; 		//== date option
	this.options[this.option_addRow]       = false; 	//== row option
	this.options[this.option_delRow]       = false;

	this.options[this.option_rowMode]      = false;		//value : true, false, null
	this.options[this.option_checkbox]     = false;		//value : true, false
	this.options[this.option_fixedColIndex]  = -1;
	//this.options[this.option_fixRowCount]  =  0;
	this.options[this.option_insertRow]    = false;
	this.options[this.option_updateRow]    = false;
	this.options[this.option_deleteRow]    = false;
	this.options[this.option_zeroChar]     = tbsConfig.culture.zeroChar;
	this.options[this.option_numWidth]     = 50;
	this.options[this.option_rowModeWidth] = 15;
	this.options[this.option_checkBoxWidth]= 18;
	this.options[this.option_useToolbar]   = true;
	this.options[this.option_imageRoot]    = '/tbs.grid.2.0.0/img';

	this.grid_mousePointRange = 5;
	this.grid_event = '';
	this.popupActive = 0;

	//================================================================

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
	 * @description data
	 *
	 */
	this.data_user   = []; // Data User
	this.data_table  = []; // Data Table
	this.data_view   = []; // Data View  : View Conversion Data, fixed data, filter, sort

	/* keep */
	this.data_select_panel30 = [];
	this.data_select_panel31 = [];

	/* necessary */
	this.data_select_panel40 = [];
	this.data_select_panel41 = [];
	this.data_select_panel50 = [];
	this.data_select_panel51 = [];

	/**
	 * @description layout
	 *
	 */
	this.layout_source 	 	 = []; //
	this.layout_panel30  	 = []; //content data
	/**
	 * @description insert, delete, update Data
	 *
	 */
	this.data_update = [];
	this.data_insert = [];
	this.data_delete = [];

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
	 * @description scroll
	 *
	 */
	this.scroll = {};
	this.scroll.yBarSize 	= 0;
	this.scroll.yRailSize 	= 0;
	this.scroll.yMoveCount 	= 0; // table Rows Count per 1px
	this.scroll.margin 		= '14px';

	this.scroll.xBarSize 	= 0;
	this.scroll.xRailSize 	= 0;
	this.scroll.xHiddenSize = 0;

	/**
	 * @description user event
	 *
	 */
	this.user_click		 = null;
	this.user_dblclick	 = null;
	this.user_edit       = null;
	this.user_keydown	 = ''; // not used
	this.user_keyup		 = ''; // not used
	this.user_blur		 = ''; // not used
	/**
	 * @description constant value
	 *
	 */
	this.TBS_PATH = '#' + this.gridId;
	this.headerRowHeight = 25;
	this.rowHeight       = 25;
	this.sumRowHeight    = 25;
	this.footerRowHeight = 25;
	/**
	 * @description Grid Object : tree, pivio, group, calendar, date
	 *
	 */
	this.tbsGridDate;
	this.tbsGridCombo;
	this.tbsGridFilter;

	this.pivot;  // this.tbsGridPivot;
	this.tree;	 // this.tbsGridTree;
	this.group;	 // this.tbsGridGroup;
	this.filter; // this.tbsGridFilter;
	/**
	 * @description mobile, user agent
	 *
	 */
	this.md = new MobileDetect(window.navigator.userAgent);
	this.mobile = this.md.mobile(); // not mobile : null
	this.userAgent = this.md.userAgent(); // safari

	/**
	 * @description Tree
	 *
	 */
	this.const_depth		  = 'depth'   ;
	this.const_children       = 'children';
	this.const_num            = 'number';
	this.const_parentNum      = 'parentNumber';

	this.const_open          = 'open';
	this.const_closed        = 'closed';

	if (tbsConfig) {
		let element = document.querySelector('#' + this.gridId);
		element.style.fontSize = tbsConfig.font.fontSize;
		element.style.fontFamily = tbsConfig.font.fontFamily;
	}
}

