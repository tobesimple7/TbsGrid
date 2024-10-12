import {Options} from './tbs.grid.types';
import {TbsBase} from './base/tbs.base';
import {TbsDatabase, DataTableType} from './base/tbs.database';
import {TbsDataTable} from './base/tbs.data.table';
import {tbsGridConfigs} from "./tbs.grid.configs";
import {TbsDataArrayTable} from "./base/tbs.data.array.table";


export class TbsGridBase extends TbsBase {
    gridId: string;
    gridConfig: object;
    gridConfigOptions: object;
    grid_mode: string;
    mousePointRange: number;

    isMobile: boolean;
    userAgent: string;

    columns: any;
    headerColumnTable: any[];

    renderer = null;
    infoRenderer = null;

    db: TbsDatabase;

    field_table: TbsDataTable;
    header_column_table: TbsDataArrayTable;
    column_table: TbsDataTable;
    top_column_table: TbsDataTable;
    footer_column_table: TbsDataTable;
    sort_column_table: TbsDataTable;
    filter_column_table: TbsDataTable;
    group_column_table: TbsDataTable;
    source_table: TbsDataTable;
    view_table: TbsDataTable;
    group_table: TbsDataTable;
    group_header_table: TbsDataTable;
    tree_table: TbsDataTable;
    page_table: TbsDataTable;
    top_table: TbsDataTable;
    footer_table: TbsDataTable;
    temp_table: TbsDataTable;

    data_update: any[];
    data_insert: any[];
    data_delete: any[];

    info_column_table: TbsDataTable;

    panel21_table: TbsDataTable;
    panel20_table: TbsDataTable;
    panel31_table: TbsDataTable;

    cell_template_table: TbsDataTable;

    data_select_panel30: object[];
    data_select_panel31: object[];

    pageRowCount: number;
    pageIntRowCount: number;

    startRowIndex: number;
    startCellIndex: number;
    lastRowIndex: number;
    lastCellIndex: number;

    _startRowIndex: number;
    _startCellIndex: number;
    _lastRowIndex: number;
    _lastCellIndex: number;

    selectRangeArray: any[];

    startX: number;
    startY: number;
    lastX: number;
    lastY: number;

    const_filterValue: string;
    const_filterType : string;
    const_filterReset: string;
    const_filterSave : string;

    headerRowCount: number;

    options: Options;

    fixedColumnIndex: number;
    headerRowHeight: number;
    rowHeight: number;
    topRowHeight: number;
    footerRowHeight: number;

    debug_mode: boolean;
    code_horizontal: string;
    code_vertical  : string;

    click: any;
    dblclick: any;
    edit: any;
    clickCheckbox: any;
    clickInfoCheckBox: any;
    clickButton: any;
    clickLink: any;
    rowBounding: any;
    clickPageFirst: any;
    clickPagePrev: any;
    clickPageIndex: any;
    clickPageNext: any;
    clickPageLast: any;

    constructor(gridId: string, gridConfigs: object) {
        super();
        this.gridId = gridId;
        this.gridConfig = gridConfigs ?
            gridConfigs[Object.keys(gridConfigs)[0]] : tbsGridConfigs[Object.keys(tbsGridConfigs)[0]];
        this.gridConfigOptions = gridConfigs ? gridConfigs['options'] : tbsGridConfigs['options'];
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
        this.db = new TbsDatabase();

        this.field_table        = this.db.createTable('field');

        this.header_column_table= this.db.createArrayTable('header_column');

        this.column_table       = this.db.createTable('column');
        this.top_column_table   = this.db.createTable('top_column');
        this.footer_column_table= this.db.createTable('footer_column');
        this.sort_column_table  = this.db.createTable('sort_column');
        this.filter_column_table= this.db.createTable('filter_column');
        this.group_column_table = this.db.createTable('group_column');

        this.source_table       = this.db.createTable('source');
        this.view_table         = this.db.createView('view');

        this.group_table        = this.db.createView('group');
        this.group_header_table = this.db.createView('group_header');

        this.tree_table         = this.db.createView('tree');
        this.page_table         = this.db.createView('page');

        this.top_table          = this.db.createTable('top');
        this.footer_table       = this.db.createTable('footer');

        this.temp_table         = this.db.createTable('temp');

        this.data_update = [];
        this.data_insert = [];
        this.data_delete = [];

        /**
         * create info table
         */

        this.info_column_table =  this.db.createTable('info_column');

        this.info_column_table.insert({ name: 'num'     , type: 'number'  , align: 'center',  width: 50, visible: true  });
        this.info_column_table.insert({ name: 'mode'    , type: 'string'  , align: 'center',  width: 20, visible: false });
        this.info_column_table.insert({ name: 'checkbox', type: 'checkbox', align: 'center',  width: 25, visible: false, editable: true });

        this.panel21_table = this.db.createView('panel21');
        this.panel20_table = this.db.createView('panel20');
        this.panel31_table = this.db.createView('panel31');

        /**
         * cell template table
         */
        this.cell_template_table = this.db.createTable('cellTemplate');

        this.cell_template_table.insert({ type: 'checkbox', cellTemplate:  1, children: ['checkbox', 'string'] }); //default
        this.cell_template_table.insert({ type: 'checkbox', cellTemplate:  2, children: ['string', 'checkbox'] });

        this.cell_template_table.insert({ type: 'group', cellTemplate:  1, children: ['icon', 'string'] });
        this.cell_template_table.insert({ type: 'group', cellTemplate:  2, children: ['icon', 'img', 'string'] });

        this.cell_template_table.insert({ type: 'tree', cellTemplate:  1, children: ['icon', 'string'] });
        this.cell_template_table.insert({ type: 'tree', cellTemplate:  2, children: ['icon', 'img', 'string'] });

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
        this.options = {}

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
        this.options.selectMode = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
        this.options.addRow = false; 	//== row option
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
        this.code_vertical   = 'vertical';

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

    /**
     * get configs value
     */

    getConfigCulture (label: string) { return this.null(this.gridConfig['culture'][label])  ? 'No Label' : this.gridConfig['culture'][label]; }
    getConfigCalendar(label: string) { return this.null(this.gridConfig['calendar'][label]) ? 'No Label' : this.gridConfig['calendar'][label]; }
    getConfigFont    (label: string) { return this.null(this.gridConfig['font'][label])     ? 'No Label' : this.gridConfig['font'][label]; }
    getConfigOption  (label: string) { return this.null(this.gridConfigOptions[label])      ? 'No Label' : this.gridConfigOptions[label]; }
    getConfigLabel   (label: string) { return this.null(this.gridConfig['labels'][label])   ? 'No Label' : this.gridConfig['labels'][label]; }

}



