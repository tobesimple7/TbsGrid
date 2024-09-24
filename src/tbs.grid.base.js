import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsBase } from './tbs.base';
import { TbsDatabase } from './tbs.database';
import { TbsDataTable } from './tbs.data.table';
import { TbsGridCell	    } from './tbs.grid.cell';
import { TbsGridColumns	    } from './tbs.grid.columns';
import { TbsGridCombo	    } from './tbs.grid.combo';
import { TbsGridControl	    } from './tbs.grid.control';
import { TbsGridDate	    } from './tbs.grid.date';
import { TbsGridDom	        } from './tbs.grid.dom';
import { TbsGridRow	        } from './tbs.grid.row';
import { TbsGridFilter	    } from './tbs.grid.filter';
import { TbsGridFilterLayer } from './tbs.grid.filter.layer';
import { TbsGridFooter	    } from './tbs.grid.footer';
import { TbsGridGroup	    } from './tbs.grid.group';
import { TbsGridPage	    } from './tbs.grid.page';
import { TbsGridPanelBase   } from './panels/tbs.grid.panel.base';
import { TbsGridPanel10	    } from './panels/tbs.grid.panel10';
import { TbsGridPanel20	    } from './panels/tbs.grid.panel20';
import { TbsGridPanel30	    } from './panels/tbs.grid.panel30';
import { TbsGridPanel40	    } from './panels/tbs.grid.panel40';
import { TbsGridPanel50	    } from './panels/tbs.grid.panel50';
import { TbsGridPanel70	    } from './panels/tbs.grid.panel70';
import { TbsGridPanel80	    } from './panels/tbs.grid.panel80';
import { TbsGridPanel90	    } from './panels/tbs.grid.panel90';
import { TbsGridRange	    } from './tbs.grid.range';
import { TbsGridRangePanel  } from './tbs.grid.range.panel';
import { TbsGridRender	    } from './tbs.grid.render';
import { TbsGridRenderInfo  } from './tbs.grid.render.info';
import { TbsGridScrollBase  } from './tbs.grid.scroll.base';
import { TbsGridScroll	    } from './tbs.grid.scroll';
import { TbsGridSort	    } from './tbs.grid.sort';
import { TbsGridTop	        } from './tbs.grid.top';
import { TbsGridTree	    } from './tbs.grid.tree';

export class TbsGridBase extends TbsBase {
    constructor(gridId) {
        super();
        this.util = new TbsBase();
        this.gridId = gridId;
        this.gridConfig = tbsGridConfigs[Object.keys(tbsGridConfigs)[0]];
        this.grid_mode = '';

        /**
         * @description mobile, user agent
         *
         */
        this.md = new MobileDetect(window.navigator.userAgent);
        this.mobile = this.md.mobile(); // not mobile : null
        this.userAgent = this.md.userAgent(); // safari

        /**
         * columns, headerColumnTable
         */
        this.columns = [];
        this.headerColumnTable = [];

        /**
         * create database
         */
        this.db = new TbsDatabase();

        /**
         * create columns table
         */
        this.db.createTable('column');  // columns table
        this.column_table = this.db.getTable('column');

        /**
         * create source table
         */
        this.db.createTable('source');    // source_table
        this.source_table = this.db.getTable('source');

        /**
         * create view table
         */
        this.db.createView('view');    // view_table
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
        this.db.createTable('tbs_info');  // info table
        this.info_table = this.db.getTable('tbs_info');

        this.info_table.insert({ name: 'num'      , type: 'number'  , align: 'center',  width: 50, visible: true  });
        this.info_table.insert({ name: 'mode'     , type: 'string'  , align: 'center',  width: 20, visible: false });
        this.info_table.insert({ name: 'selection', type: 'checkbox', align: 'center',  width: 25, visible: true  });

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

        /**
         * @description tool bar - do not touch
         *
         */
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
        this.options[tbsGridNames.column.sortable] = true;
        this.options[tbsGridNames.column.resizable] = true;
        this.options[tbsGridNames.column.movable] = true;
        this.options[tbsGridNames.column.autoResizable] = true;
        this.options[tbsGridNames.column.autoWidth] = false;

        // Rows Options
        this.options[tbsGridNames.row.selectMode] = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
        this.options[tbsGridNames.row.addRow] = false; 	//== row option
        this.options[tbsGridNames.row.delRow] = false;

        // Panel21 options
        this.options[tbsGridNames.option.rowMode] = false;		//value : true, false, null
        this.options[tbsGridNames.option.checkbox] = false;		//value : true, false
        this.options[tbsGridNames.option.numWidth] = 50;
        this.options[tbsGridNames.option.rowModeWidth] = 20;
        this.options[tbsGridNames.option.checkBoxWidth] = 25;

        this.options[tbsGridNames.option.insertRow] = false;
        this.options[tbsGridNames.option.updateRow] = false;
        this.options[tbsGridNames.option.deleteRow] = false;
        this.options[tbsGridNames.option.zeroChar] = this.getConfigCulture('zeroChar');
        this.options[tbsGridNames.option.useToolbar] = true;
        this.options[tbsGridNames.option.imageRoot] = this.getConfigOption('imageRoot');

        this.grid_mousePointRange = 15;

        /**
         * @description layout
         *
         */
        this.fixedColumnIndex = -1;
        this.fixedRowCount = 0;  // required
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
        this.code_vertical   = 'vertical';

        /**
         * @description class
         *
         */
        this.classScroll    = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classColumn    = new TbsGridColumns(this);
        this.classControl   = new TbsGridControl(this); // memory
        this.classRange     = new TbsGridRange(this);// memory
        this.classRange40   = new TbsGridRangePanel(this, 'panel40');// memory
        this.classRange50   = new TbsGridRangePanel(this, 'panel50');// memory
        this.classFilter    = new TbsGridFilter(this);// memory
        this.classGroup     = new TbsGridGroup(this);// memory
        this.classPage      = new TbsGridPage(this);// memory
        this.classSort      = new TbsGridSort(this);// memory
        this.classTree      = new TbsGridTree(this);// memory

        this.classPanelBase = new TbsGridPanelBase(this);
        this.classPanel10 = new TbsGridPanel10(this);
        this.classPanel20 = new TbsGridPanel20(this);
        this.classPanel30 = new TbsGridPanel30(this);
        this.classPanel40 = new TbsGridPanel40(this);
        this.classPanel50 = new TbsGridPanel50(this);
        this.classPanel70 = new TbsGridPanel70(this);
        this.classPanel80 = new TbsGridPanel80(this);
        this.classPanel90 = new TbsGridPanel90(this);

        //this.classRender = new TbsGridRender(this);

        this.classTop    = new TbsGridTop(this);// memory
        this.classFooter = new TbsGridFooter(this);// memory

        this.tbsGridDate;// memory
        this.tbsGridCombo;// memory

        this.classDom = new TbsGridDom();
        this.classRow = new TbsGridRow(this);
        this.classCell = new TbsGridCell(this, null);
    }

    /**
     * Select Line Functions
     *
     */

    getFirstSelectedTableCell(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let startCell;
        let startRowIndex = grid._startRowIndex;
        if (grid.fixedRowIndex != -1) {
            let panel;
            if (startRowIndex <= grid.fixedRowIndex) panel = 'panel61';
            else {
                panel = 'panel31';
                let rowIndex1 = grid.getFirstRowIndex();
                let rowIndex2 = grid.getLastRowIndex();
                if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;
            }
            let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

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
        else {
            let rowIndex1 = grid.getFirstRowIndex();
            let rowIndex2 = grid.getLastRowIndex();

            if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;

            let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

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
        let grid = this;

        let lastCell;
        let lastRowIndex = this._lastRowIndex;

        if (grid.fixedRowIndex != -1) {
            let panel;
            if (lastRowIndex <= grid.fixedRowIndex) panel = 'panel61';
            else {
                panel = 'panel31';
                let rowIndex1 = grid.getFirstRowIndex();
                let rowIndex2 = grid.getLastRowIndex();
                if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;
            }

            let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

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
        else {
            let rowIndex1 = grid.getFirstRowIndex();
            let rowIndex2 = grid.getLastRowIndex();

            if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;

            let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
            let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

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
        this.topLineDiv.style    = 'width :0px;top:0px;left:0px;';
        this.leftLineDiv.style   = 'height:0px;top:0px;left:0px;';
        this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
        this.rightLineDiv.style  = 'height:0px;top:0px;left:0px;';
    }

    setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {

        if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight)) this.clearSelectedLine();
        else {
            this.topLineDiv.style    = 'width:'  + lineWidth        + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.leftLineDiv.style   = 'height:' + lineHeight       + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
            this.rightLineDiv.style  = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop     + 'px;left:' + rectRight + 'px;';
            this.bottomLineDiv.style = 'width:'  + lineWidth        + 'px;top:' + rectBottom  + 'px;left:' + rectLeft  + 'px;';
        }
    }

    displaySelectedLine() {
        let selector = '#' + this.gridId;
        let grid = this;

        if (grid.view_table.count() == 0) {
            grid.classRange.removeRange(0, -1);
            return;
        }
        if (grid.fixedRowIndex != -1) {
            let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0) return;

            let fixedColumnIndex = this.fixedColumnIndex;

            /* Get startCell, lastCell */
            let startCell, lastCell;
            if (grid._startRowIndex <= grid.fixedRowIndex) startCell = grid.getFirstSelectedTableCell('panel60');
            else startCell = grid.getFirstSelectedTableCell('panel30');

            if (grid._lastRowIndex <= grid.fixedRowIndex) lastCell = grid.getLastSelectedTableCell('panel60');
            else lastCell = grid.getLastSelectedTableCell('panel30');

            if (startCell == undefined || lastCell == undefined) { grid.clearSelectedLine(); return; }
            //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);

            let startCellIndex = grid._startCellIndex;
            let lastCellIndex  = grid._lastCellIndex;

            let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
            let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
            let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
            let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

            let startRect= startCell.getBoundingClientRect();
            let lastRect = lastCell.getBoundingClientRect();

            let beforeLeft   = rectTable31.left;

            let rectTop    = startRect.top - rectMain.top;
            let rectBottom = lastRect.top  - rectMain.top + lastRect.height;

            let rectLeft   = startRect.left - beforeLeft;
            let rectRight  = lastRect.left  - beforeLeft + lastRect.width;

            let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
            let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
            let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

            // case outside line
            if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
            if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
            if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

            let lineHeight= rectBottom - rectTop;
            let lineWidth = rectRight - rectLeft;
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
        else if (grid.fixedColumnIndex != -1) {
            let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0) return;

            let fixedColumnIndex = this.fixedColumnIndex;

            /* Get startCell, lastCell */
            let startCell, lastCell;
            //console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
            if (grid._startCellIndex <= grid.fixedColumnIndex) startCell = grid.getFirstSelectedTableCell('panel32');
            else startCell = grid.getFirstSelectedTableCell('panel30');

            if (grid._lastCellIndex <= grid.fixedColumnIndex) lastCell = grid.getLastSelectedTableCell('panel32');
            else lastCell = grid.getLastSelectedTableCell('panel30');
            if (startCell == undefined || lastCell == undefined) { grid.clearSelectedLine(); return; }

            //console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);
            let startCellIndex = startCell.cellIndex;
            let lastCellIndex  = lastCell.cellIndex;

            let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
            let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
            let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
            let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

            let startRect= startCell.getBoundingClientRect();
            let lastRect = lastCell.getBoundingClientRect();

            let beforeLeft = rectTable31.left;

            let rectTop   = startRect.top  - rectMain.top;
            let rectBottom= lastRect.top  - rectMain.top + lastRect.height;

            let rectLeft  = startRect.left - beforeLeft;
            let rectRight = lastRect.left  - beforeLeft + lastRect.width;

            let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
            let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
            let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

            // case outside line
            if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
            if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
            if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

            let lineHeight= rectBottom - rectTop;
            let lineWidth = rectRight - rectLeft;
            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
        else {
            let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
            if (grid.getRowCount() == 0) return;

            let startCell = grid.getFirstSelectedTableCell('panel30');
            let lastCell = grid.getLastSelectedTableCell('panel30');

            if (startCell == undefined || lastCell == undefined) { grid.clearSelectedLine(); return; }

            let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
            let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
            let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

            let startRect = startCell.getBoundingClientRect();
            let lastRect = lastCell.getBoundingClientRect();

            let rectTop   = startRect.top  - rectMain.top;
            let rectLeft  = startRect.left - rectTable31.left;
            let rectBottom= lastRect.top  - rectMain.top     + lastRect.height;
            let rectRight = lastRect.left - rectTable31.left + lastRect.width;

            let rectPanelLeft  = rectPanel30.left  - rectTable31.left;
            let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
            let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

            // case outside line
            if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
            if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
            if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

            let lineHeight= rectBottom - rectTop;
            let lineWidth = rectRight - rectLeft;

            grid.setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
        }
    }

    displayOneSelection(startRowIndex, startCellIndex) {
        let selector = '#' + this.gridId;
        let grid = this;

        let column = this.column_table.data;

        this.startRowIndex  = startRowIndex;
        this.lastRowIndex   = startRowIndex;

        this.startCellIndex = startCellIndex;
        this.lastCellIndex  = startCellIndex;

        this._startRowIndex = startRowIndex;
        this._lastRowIndex  = startRowIndex;

        this._startCellIndex= startCellIndex;
        this._lastCellIndex = startCellIndex;

        this.classRange.setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);


        let count = this.view_table.count();
        let topRowIndex = this.getFirstRowIndex();
        //============================================================= table display
        let trLeftList    	= document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
        let trFixLeftList   = document.querySelectorAll(selector + ' .tbs-grid-panel61   .tbs-grid-table tbody tr');
        let trContentList 	= document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
        let trFixBottomtList= document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');

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
            if (accWidth + contentTableLeft > 0) { startColumnIndex = i; break; }
        }
        accWidth = contentTableRect.width;
        for (let i = column.length - 1; i >= 0; i--) {
            accWidth -= parseInt(column[i].width);
            if (accWidth + contentTableLeft < contentRect.width) { lastColumnIndex = i; break; }
        }
        //============================================================= left, content, fixBottom
        let viewCount = grid.view_table.count();
        let i = 0;
        for (let ri = topRowIndex; ri < count; ri++) {
            if (ri > viewCount - 1) break;
            let trLeft = trLeftList[i];
            let trContent = trContentList[i];
            let trFixBottom = trFixBottomtList[i]
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
        if (this.fixedRowIndex != -1){
            let i = 0;
            for (let ri = 0; ri <= this.fixedRowIndex; ri++) {
                if (ri > viewCount - 1) break;
                let trLeft      = trFixLeftList[i];
                let trContent   = trFixRightList[i];
                let row         = grid.view_table.data[ri];
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
        let grid = this;

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
                if      (e.keyCode == 37 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.addRow('up');   grid.input_focus();}   //left arrow //type : first, last, up, down
                else if (e.keyCode == 39 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.addRow('down'); grid.input_focus();}   //right arrow
                else if (e.keyCode == 38 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.addRow('first');grid.input_focus();}   //up arrow
                else if (e.keyCode == 40 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.addRow('last'); grid.input_focus();}   //down arrow
                //else if (e.keyCode == 46 && mode == '') { if(!(grid.options[tbsGridNames.row.addRow])) return; grid.editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
            }
            else {
                if      (e.keyCode == 37  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('left' ); grid.input_focus();}
                else if (e.keyCode == 39  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();}
                else if (e.keyCode == 38  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == ''))  { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter
                else if (e.keyCode == 9   && (mode == ''))  { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab

                else if (e.keyCode == 37  && (mode == 'key')) {}
                else if (e.keyCode == 39  && (mode == 'key')) {}
                else if (e.keyCode == 38  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == 'key')) { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
                else if (e.keyCode == 9   && (mode == 'key')) { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

                else if (e.keyCode == 37  && (mode == 'mouse')) {}
                else if (e.keyCode == 39  && (mode == 'mouse')) {}
                else if (e.keyCode == 38  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
                else if (e.keyCode == 40  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
                else if (e.keyCode == 13  && (mode == 'mouse')) { grid.editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
                else if (e.keyCode == 9   && (mode == 'mouse')) { grid.editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

                else if (e.keyCode >= 0   && e.keyCode <= 7)  {} //function ctrlkey shifkey tabkey(9)등등
                else if (e.keyCode >= 9   && e.keyCode <= 32) {}
                else if (e.keyCode == 8)    {} //backspace key
                else if (e.keyCode == 127)  {}
                else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {}
                else if (e.keyCode >= 112 && e.keyCode <= 123) {}
                else {
                    //console.log('input');
                    let cellIndex = grid.startCellIndex;
                    let column = grid.classColumn.getColumnByIndex(cellIndex);
                    if (grid.notNull(column[tbsGridNames.column.editable]) && column[tbsGridNames.column.editable]) {
                        if (grid.notNull(grid.user_edit)) { // state
                            //console.log(`panelInput.style.left : ${panelInput.style.left}`);
                            if (panelInput.style.left == '30000px') {
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
            let input = document.querySelector(selector + ' .tbs-grid-input');
            let colType = input.dataset.type;
        };
        const clickEvent = function(e) {
            let column = grid.column_table.data;
            let input = document.querySelector(selector + ' .tbs-grid-input');
            let colType = grid.column_table.data[grid.startCellIndex][tbsGridNames.column.type];
        }
        const blurEvent = function(e) {

            //console.dir(e);
            //console.log(`SCROLL : blur event`);

            let input = document.querySelector(selector + ' .tbs-grid-input');
            let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
            let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

            let mode = input.dataset.mode;
            let rowIndex  = input.dataset.rowIndex;
            let cellIndex = input.dataset.cellIndex;

            let column = grid.column_table.data[cellIndex];

            if (rowIndex == undefined || cellIndex == undefined) {
                grid.input_hide();
                return
            }
            /* user blur event stop */
            if (input.dataset.mode == undefined || input.dataset.mode == '') { e.stopImmediatePropagation(); }

            if (rowIndex == -1 || cellIndex == -1) return;

            if (grid.notNull(grid.user_edit)) {
                grid.editEnd(e, 'key');
            }
            else {
                if (isNaN(cellIndex)) return;
                let s = input.value;
                if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.combo) s = input_code.value;
                else if (column[tbsGridNames.column.type] == 'number' && grid.trim(s) == grid.options[tbsGridNames.option.zeroChar]) s = '0';
                grid.setValueByIndex(rowIndex, cellIndex, grid.getFormatValue(column, s));
                grid.input_hide();
            }
            grid.apply();
        }
        const wheelEvent = function(e) {}
        const copyEvent = function(e) {
            let ta = document.createElement('textarea');
            let s = '';
            if (grid.classRange40.data_select_panel30.length > 0) {
                let startRowIndex  = 0;
                let startCellIndex = grid.classRange40._startCellIndex;
                let lastRowIndex  = 0;
                let lastCellIndex = grid.classRange40._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let columnName = grid.column_table.selectValue(colIndex, tbsGridNames.column.name);
                        let val = grid.getValue(rowIndex, columnName, grid.top_table);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else if (grid.classRange50.data_select_panel30.length > 0) {
                let startRowIndex  = 0;
                let startCellIndex = grid.classRange50._startCellIndex;
                let lastRowIndex  = 0;
                let lastCellIndex = grid.classRange50._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.classFooter.getFooterValueByIndex(rowIndex, colIndex);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            else {
                let startRowIndex  = grid._startRowIndex;
                let startCellIndex = grid._startCellIndex;
                let lastRowIndex  = grid._lastRowIndex;
                let lastCellIndex = grid._lastCellIndex;

                for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
                    for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
                        let val = grid.getValueByIndex(rowIndex, colIndex);
                        if (grid.null(val)) val = '';
                        s += val;
                        if (colIndex < lastCellIndex) s += '\t';
                    }
                    if (rowIndex < lastRowIndex) s += '\r\n'
                }
                ta.textContent = s;
                document.body.appendChild(ta);
                ta.select();

                document.execCommand('copy');
                document.body.removeChild(ta);
            }
        }
        const pasteEvent = function(e){
            let data = e.clipboardData.getData('text/plain')
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
        }
        const cutEvent = function(e){}

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
        let grid = this;

        let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
        let colType = input_icon.dataset.type;
        const mousedownEvent = function(e) {
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
                grid.tbsGridDate = new TbsGridDate(grid, column, input);
                // input_panel.style.width = '250px';
                // input_panel.style.height = '146px';
            }
            else if (colType == tbsGridTypes.CellType.combo) {
                grid.tbsGridCombo = new TbsGridCombo(grid, column, input, input_code);
                // input_panel.style.width = '200px';
                // input_panel.style.height = '146px';
            }
        }
        input_icon.addEventListener('mousedown', mousedownEvent);
    }
    
    input_show(e, mode) { //type : header, content, left, top
        let selector = '#' + this.gridId;
        let grid = this;

        let lineWeight = 3;
        let rowIndex  = grid.startRowIndex;
        let cellIndex = grid.startCellIndex;

        let columns = grid.column_table.data;
        let column = columns[cellIndex];
        let colType  = column[tbsGridNames.column.type];

        let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
        let input = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
        let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

        let panelMain =  document.querySelector(selector + ' .tbs-grid-main');
        let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
        if (td == null) return;

        let value  = this.getValue(rowIndex, column[tbsGridNames.column.name]);
        let result = this.getFormat(column, value); //result.value, result.text

        if (column[tbsGridNames.column.editable] == false) return;

        grid.tbs_moveCellLine(td, rowIndex, cellIndex);

        let left = td.getBoundingClientRect().left;
        let top  = td.getBoundingClientRect().top;

        let leftMain = panelMain.getBoundingClientRect().left;
        let topMain = panelMain.getBoundingClientRect().top;

        if (mode == 'mouse') {
            if (colType == 'number' && grid.trim(result.text) == grid.options[tbsGridNames.option.zeroChar]) input.value = '0';
            else input.value = result.text;
            input_code.value = result.value;
        }

        panelInput.style.top  = (top - topMain + lineWeight) + 'px';
        panelInput.style.left = (left - leftMain + lineWeight) + 'px';
        panelInput.style.height = (grid.rowHeight - lineWeight) + 'px';
        input.dataset.mode = mode;
        input.dataset.type = colType;
        input.dataset.rowIndex = grid.startRowIndex;
        input.dataset.cellIndex = grid.startCellIndex;
        input.dataset.click = '';

        if (colType == 'date') {
            let width = parseInt(column[[tbsGridNames.column.width]]);
            panelInput.style.width = (width - 15 - 3) + 'px';

            input_icon.style.display = '';
            input_icon.style.top  = top  + 'px';
            input_icon.style.left = `${left + width - 15}px`;
            input_icon.dataset.type = colType;

            input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
        }
        else if (colType == tbsGridTypes.CellType.combo) {
            let width = parseInt(column[[tbsGridNames.column.width]]);
            panelInput.style.width = (width - 15 - 3) + 'px';

            input_icon.style.display = '';
            input_icon.style.top  = top  + 'px';
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
            panelInput.style.width = (parseInt(column[[tbsGridNames.column.width]]) - lineWeight) + 'px';
        }
        if (mode == 'mouse') input.select();
    }
    
    input_hide() {
        let selector = '#' + this.gridId;
        let grid = this;

        let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
        let input      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

        // date, combo layer
        let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
        let input_panel= document.querySelector(selector + ' .tbs-grid-input-panel');

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


        if (this.tbsGridDate ) { this.tbsGridDate.destroy();  this.tbsGridDate = null; }
        if (this.tbsGridCombo) { this.tbsGridCombo.tbs_destroy(); this.tbsGridCombo = null; }
    }
    
    input_focus() {
        let selector = '#' + this.gridId;
        let grid = this;

        if (this.null(this.mobile)) {
            document.querySelector(selector + ' .tbs-grid-input').focus();
        }
    }
    
    editStart(e, mode) {
        let selector = '#' + this.gridId;
        let grid = this;

        let state = 0;
        let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
        let input      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

        let result = true;
        let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

        let column = grid.classColumn.getColumnByIndex(cellIndex);
        let columnName = grid.classColumn.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text  = grid.getText(rowIndex, columnName);

        let eventData = {};
        let eventRow = grid.getRow(rowIndex);
        eventRow.rowIndex    = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName  = columnName;
        eventRow.value       = value;
        eventRow.text        = text;
        eventRow.state       = state;
        eventRow.newValue    = input.value;
        eventRow.data        = eventRow;
        if (column[tbsGridNames.column.editable] == true && grid.notNull(grid.user_edit)) {
            let result = true;
            result = grid.tbs_edit(grid, state, eventRow, grid.user_edit);
            if (grid.null(result) || result == true) {
                grid.input_show(e, mode);
                //console.log(0);
            }
            else {
                //grid.input_hide(); grid.apply(); // not certain
                document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
            }
        }
    }

    editing(e, mode) {
        let selector = '#' + this.gridId;
        let grid = this;

        let state = 1;
        let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
        let input      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

        if (input.dataset.cellIndex == -1) { grid.input_hide(); return; }

        let result = true;
        let rowIndex  = (state == 0) ? grid.startRowIndex  : input.dataset.rowIndex;
        let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

        let column = grid.classColumn.getColumnByIndex(cellIndex);
        let columnName = grid.classColumn.getColumnName(cellIndex);
        let value = grid.getValue(rowIndex, columnName);
        let text  = grid.getText(rowIndex, columnName);

        let eventData = {};
        let eventRow = grid.getRow(rowIndex);
        eventRow.rowIndex    = rowIndex;
        eventRow.columnIndex = cellIndex;
        eventRow.columnName  = columnName;
        eventRow.value       = value;
        eventRow.text        = text;
        eventRow.state       = state;
        eventRow.newValue    = input.value;
        eventRow.data        = eventRow;
        if (column[tbsGridNames.column.editable] == true && grid.notNull(grid.user_edit)) {
            let result = true;
            if (state == 1 && panelInput.style.left != '30000px') {
                result = grid.tbs_edit(grid, state, eventRow, grid.user_edit);
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
        let grid = this;

        let state = 2;
        let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
        let input      = document.querySelector(selector + ' .tbs-grid-input');
        let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

        if (grid.null(input.dataset.cellIndex) || input.dataset.cellIndex == -1) {
            grid.input_hide();
        }
        else {
            let result = true;
            let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
            let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

            let column = grid.classColumn.getColumnByIndex(cellIndex);
            //let column = grid.column_table.selectRowByRowIndex(cellInex);
            let columnName = grid.classColumn.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text  = grid.getText(rowIndex, columnName);

            let eventData = {};
            let eventRow = grid.getRow(rowIndex);
            eventRow.rowIndex    = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName  = columnName;
            eventRow.value       = value;
            eventRow.text        = text;
            eventRow.state       = state;
            eventRow.newValue    = input.value;
            eventRow.data        = eventRow;
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
        let grid = this;

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

        document.addEventListener('scroll', function(e) {
            let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-panel-input');
            let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
            let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-panel-input-icon');
            let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');

            for (let i = 0; i < inputList.length; i++) {
                let panelInput = panelInputList[i];
                let input      = inputList[i];
                let input_icon = inputIconList[i];
                let input_panel= inputPanelList[i];
                input.value = '';

                panelInput.style.left = '30000px';
                panelInput.style.width= '0px';

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

        const mouseDownGridEvent = function(e) {

            let name = e.target.className;
            //console.log('gird: ' + name)
            e.stopPropagation();
            if (   name.indexOf('tbs-grid-panel10-filter-input') != -1
                || name.indexOf('tbs-grid-cell-filter-input' ) != -1
                || name.indexOf('tbs-grid-layer'             ) != -1
                || name.indexOf('tbs-grid-cell-filter-input' ) != -1
                || name.indexOf('tbs-grid-cell-filter-combo' ) != -1) {}
            else {
                document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
                document.querySelector(selector + ' .tbs-grid-layer').style.height = '0px';
                document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
                document.querySelector(selector + ' .tbs-grid-layer').style.display = 'none';
                // document.querySelector(selector + ' .tbs-grid-input').focus();
                grid.input_focus();
            }
        }
        document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);

        const windowResizeEvent = function(e) {
            setTimeout(() => { grid.apply(); }, 200);
        }
        window.addEventListener('resize', windowResizeEvent, true);
    }

    event_columnSort(cell) {
        let selector = '#' + this.gridId;
        let grid = this;

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
        }
        else {
            curSortKind = '';
        }

        if (curSortKind == 'desc') sortKind = '';
        else if (curSortKind == 'asc') sortKind = 'desc';
        else sortKind = 'asc';

        if (grid.sort_column_table.isRow(tbsGridNames.column.name, columnName)) {
            let dataRow = grid.sort_column_table.selectRow(tbsGridNames.column.name, columnName);
            let rowId = dataRow[tbsGridNames.column.rowId];
            grid.sort_column_table.updateByRowId(rowId, tbsGridNames.column.order, sortKind);
        }
        else {
            let dataRow = {};
            dataRow[tbsGridNames.column.name] = columnName;
            dataRow[tbsGridNames.column.order] = sortKind;
            grid.sort_column_table.insert(dataRow);
        }

        if (grid.sort_column_table.count() == 0) { grid.classSort.initSortData(); }

        if (grid.options[grid.option_showFilterPanel]) grid.classFilter.filters();

        grid.classSort.getSortButtonList();

        if (grid.grid_mode == tbsGridTypes.GridMode.group || grid.grid_mode == tbsGridTypes.GridMode.tree) {
            grid.setData(grid.view_table.data, null, false);
        }
        else {
            if (grid.isSortableColumn()) {
                grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);
                grid.classRange.removeRange(0, -1);
                grid.apply();
            }
        }
    }

    event_mobileTouchDrag() { //type : header, content
        let selector = '#' + this.gridId;
        let grid = this;

        let startRowIndex, startCellIndex;
        let lastRowIndex , lastCellIndex;

        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos = { left: 0, x : 0 }
        let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        let yPos = { top: 0, y : 0 }
        let actveTopRowIndex = -1;
        const touchStartEvent = function(e) {
            e.preventDefault();
            document.body.style.overflow = 'hidden';
            actveTopRowIndex = -1;

            let col;
            if (e.target.tagName == 'DIV')  { col = e.target.parentNode; }
            else if (e.target.tagName == 'SPAN')  { col = e.target.parentNode.parentNode; }
            else { col = e.target; }
            let rowIndex = grid.classColumn.getRowIndexInTable(col.parentNode.rowIndex)
            //grid.classRange.removeRange(0, -1);
            //let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
            yPos.top = Number(yBar.style.top.replace('px', ''));
            yPos.y = e.changedTouches[0].clientY;

            xPos.left = Number(xBar.style.left.replace('px', ''));
            xPos.x = e.changedTouches[0].clientX;

            document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchmove', touchMoveEvent);
            document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchend', touchEndEvent);
        }
        const touchMoveEvent = function(e) {
            //e.stopPropagation();
            let xMove = e.changedTouches[0].clientX - xPos.x;
            let yMove = e.changedTouches[0].clientY - yPos.y;;

            if (Math.abs(xMove) > Math.abs(yMove)) {
                let left = xPos.left - xMove;
                let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
                if (left < 0) left = 0;
                if (left > xRailWidth) left = xRailWidth;
                xBar.style.left = left.toString() + 'px';

                let header  = document.querySelector(selector + ' .tbs-grid-panel20');
                let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
                let nLeft = (left * -1 * ratio).toString();
                grid.classScroll.setContentPanelLeft(nLeft);
                //grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
                grid.apply();
            }
            else if (Math.abs(xMove) < Math.abs(yMove)) {
                let yBarTop = yPos.top - yMove;
                if (yBarTop < 0) yBarTop = 0;
                if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

                let displayTopRowIndex = Math.floor(yBarTop * grid.verticalScroll.moveCount);
                actveTopRowIndex = displayTopRowIndex;

                let topRowIndex = displayTopRowIndex;
                if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

                //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
                setTimeout(function(){ grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
                setTimeout(function(){ grid.classPanel30.setDataPanel(topRowIndex);}, 5);
            }
        }
        const touchEndEvent = function(e) {
            //e.stopPropagation();
            let xMove = e.changedTouches[0].clientX - xPos.x;
            let yMove = e.changedTouches[0].clientY - yPos.y;

            let tableCell;

            if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div-text')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
            else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
            let eventPanelName  = 'panel30';
            startCellIndex = tableCell.cellIndex;
            lastCellIndex  = startCellIndex;
            startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
            lastRowIndex   = startRowIndex;

            if  (Math.abs(xMove) < 5 && Math.abs(yMove) < 5)  {
                grid.classRange.removeRange(0, -1, 0, -1);
                let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
                grid.apply();
            }

            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
            document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
            document.body.style.overflow = 'auto';
        }
        document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
    }

    event_columnResize(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let startX     = 0; // mouse start x position
        let movedWidth = 0; // moved width
        let cellWidth  = 0; // header cell width
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
            }
            else return;

            eventDetail = e.detail;
            if (eventDetail == 1) {
                e.stopPropagation();
                // if (grid.options[tbsGridNames.column.resizable] == false) return;

                let isResizable = grid.isResizableColumn(tableCell.dataset.name);
                if (!isResizable) return;

                startX =  window.pageXOffset + e.clientX;

                const style = window.getComputedStyle(tableCell);
                cellWidth = parseInt(style.width, 10);
                tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);

                resizer.classList.add('.tbs-grid-cell-resizing');

                if (tableCell.dataset.name == '') {
                    let cellIndex = tableCell.cellIndex;
                    let lastCellIndex = cellIndex + tableCell.colSpan;

                    childList = [];
                    initWidth = [];

                    let thCells = document.querySelectorAll(selector  + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
                    for (let i = cellIndex; i < lastCellIndex; i++) {
                        let thCell= thCells[i];
                        let width = parseInt(thCell.style.width, 10);
                        childList.push(i);     // cell index
                        initWidth.push(width); // cell width
                    }
                }
                document.addEventListener('mousemove', mouseMoveEvent);
                document.addEventListener('mouseup', mouseUpEvent);
            }
            else if (eventDetail == 2){
                e.stopPropagation();
                if (grid.isClassName(e.target, 'tbs-grid-cell-resize') != true) return;

                let cell = e.target.parentElement;
                let columnName = grid.classColumn.getColumnName(cell.cellIndex);

                let isAutoResizable = grid.isAutoResizableColumn(columnName);
                if (isAutoResizable != true) return;

                let colIndex   = cell.cellIndex + parseInt(cell.colSpan) - 1;
                let column     = grid.classColumn.getColumn(columnName);
                let firstWidth = parseInt(column[tbsGridNames.column.width]);
                let maxWidth  = 0;

                let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];

                let fontSize = grid.getConfigFont('fontSize');
                let fontFamilty = grid.getConfigFont('fontFamily');

                for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
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
                        let moveWidth = parseInt(movedWidth/count);
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
                        let moveWidth = parseInt(movedWidth/count);
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
            if (eventDetail == 1){
                e.stopPropagation();
                resizer.classList.remove('.tbs-grid-cell-resizing');
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            }
        };

        const panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
        panel.addEventListener('mousedown', mouseDownEvent, false);
    }

    event_checkBox() { //type : header, content
        let selector = '#' + this.gridId;
        let grid = this;
        const checkDowntEvent = function(e) {
            if (e.target.tagName == 'INPUT') {
                let tr = e.target.parentNode.parentNode.parentNode;
                let rowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;

                if (e.target.checked) grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.isChecked, false);
                else grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.isChecked, true);
                // if (e.target.checked) grid.view_table.data[rowIndex].check = false;
                // else grid.view_table.data[rowIndex].check = true;
            }
        }
        document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').addEventListener('mousedown', checkDowntEvent, false);
    }

    event_wheel() { //mouse wheel event
        let selector = '#' + this.gridId;
        let grid = this;
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
        };
        document.querySelector(selector).addEventListener('wheel', mouseWheelEvent);
    }

    event_scrollButton() {
        //mouse wheel event
        //onmousedown -> onmouseup -> click
        let selector = '#' + this.gridId;
        let grid = this;

        let leftButton  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-left');
        let rightButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-right');

        let upButton    = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-up');
        let downButton  = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-down');
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
                setTimeout(function() {doInterval(type);}, 500);
                grid.classScroll.setBarPositionByDirection(type);
            }
        }
    }

    event_railClick() {
        let selector = '#' + this.gridId;
        let grid = this;
        const xWrapClickEvent = function (e) {
            let bar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
            let left = parseInt(bar.style.left.replace('px', ''));
            if (isNaN(left)) left = 0;
            let barSize  = grid.horizontalScroll.barSize;
            if (e.offsetX >= left && e.offsetX <= (left + barSize)) return;

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
            if (e.offsetY >= top && e.offsetY <= (top + barSize)) return;

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
        let grid = this;

        let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
        let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
        let xPos = { left: 0, x : 0 }
        //== x scroll
        const xMouseDownEvent = function(e) {
            grid.editEnd();
            e.stopPropagation();

            if (e.target.className != 'tbs-grid-horizontal-scroll-bar') return;
            xPos.left = Number(xBar.style.left.replace('px', ''));
            xPos.x = e.clientX;
            document.addEventListener('mousemove', xMouseMoveEvent);
            document.addEventListener('mouseup', xMouseUpEvent);
        }
        const xMouseMoveEvent = function(e) {
            //e.preventDefault();	// next stop
            //e.stopPropagation();	// up stop
            let xMove = e.clientX - xPos.x;
            let left = xPos.left + xMove;
            let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
            if (left < 0) left = 0;
            if (left > xRailWidth) left = xRailWidth;
            xBar.style.left = left.toString() + 'px';

            let header  = document.querySelector(selector + ' .tbs-grid-panel20');
            let content = document.querySelector(selector + ' .tbs-grid-panel30');
            let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
            let footer  = document.querySelector(selector + ' .tbs-grid-panel50');

            let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
            grid.classScroll.setContentPanelLeft((left * -1 * ratio).toString());
            grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
        }
        const xMouseUpEvent = function(e) {
            document.removeEventListener('mousemove', xMouseMoveEvent);
            document.removeEventListener('mouseup', xMouseUpEvent);
        }
        xBar.addEventListener('mousedown', xMouseDownEvent, false);

        //== y scroll
        let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
        let yPos = { top: 0, y : 0 }
        let actveTopRowIndex = -1;
        const yMouseDownEvent = function(e) {
            grid.editEnd();
            e.stopPropagation();

            actveTopRowIndex = -1;
            if (e.target.className != 'tbs-grid-vertical-scroll-bar') return;
            yPos.top = Number(yBar.style.top.replace('px', ''));
            yPos.y = e.clientY;

            document.addEventListener('mousemove', yMouseMoveEvent);
            document.addEventListener('mouseup', yMouseUpEvent);
        }
        const yMouseMoveEvent = function(e) {
            //e.stopPropagation();
            let yBarTop = yPos.top + e.clientY - yPos.y;
            if (yBarTop < 0) yBarTop = 0;
            if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

            let displayTopRowIndex = Math.floor(yBarTop * grid.verticalScroll.moveCount);
            actveTopRowIndex = displayTopRowIndex;

            let topRowIndex = displayTopRowIndex;
            if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

            //console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
            setTimeout(function(){ grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
            setTimeout(function(){ grid.classPanel30.setDataPanel(topRowIndex);}, 5);
        }
        const yMouseUpEvent = function(e) {
            e.stopPropagation();
            document.removeEventListener('mousemove', yMouseMoveEvent);
            document.removeEventListener('mouseup', yMouseUpEvent);
        }
        yBar.addEventListener('mousedown', yMouseDownEvent, false);
    }

    tbs_moveCellLine(cell, rowIndex, cellIndex) {
        let selector = '#' + this.gridId;
        let grid = this;

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
        return (movedX < this.grid_mousePointRange && movedY < this.grid_mousePointRange);
    }

    tbs_executeEvent(isUserFunction, eventType, param) {
        let selector = '#' + this.gridId;
        let grid = this;

        let e = null;
        let mode = null;
        let rowIndex = null;
        let cellIndex = null;
        let element = null;

        if (eventType == 'rowBounding') {
            element = param.element;
            rowIndex = param.rowIndex;

            let eventRow = {};
            eventRow.rowIndex    = rowIndex;
            eventRow.data        = grid.getRow(rowIndex);

            if (grid.notNull(grid.user_rowBounding)) { let flag = grid.tbs_rowBounding(grid, element, eventRow, grid.user_rowBounding); } //user function call
        }
        else if (eventType == 'cellBounding') {
            element = param.element;

            rowIndex = param.rowIndex;
            cellIndex = param.cellIndex;

            let column = grid.classColumn.getColumnByIndex(cellIndex);
            let columnName = grid.classColumn.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text  = grid.getText(rowIndex, columnName);

            let eventRow = {};
            eventRow.rowIndex    = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName  = columnName;
            eventRow.value       = value;
            eventRow.text        = text;
            eventRow.data        = grid.getRow(rowIndex);
            if (grid.notNull(grid.user_cellBounding)) { let flag = grid.tbs_cellBounding(grid, element, eventRow, grid.user_cellBounding); } //user function call
        }
        else if (eventType == 'click' || eventType == 'dblclick') {
            e = param.e;
            mode = param.mode; //mouse, key
            rowIndex = param.rowIndex;
            cellIndex = param.cellIndex;

            let column = grid.classColumn.getColumnByIndex(cellIndex);
            let columnName = grid.classColumn.getColumnName(cellIndex);
            let value = grid.getValue(rowIndex, columnName);
            let text  = grid.getText(rowIndex, columnName);

            let eventRow = {};
            eventRow.rowIndex    = rowIndex;
            eventRow.columnIndex = cellIndex;
            eventRow.columnName  = columnName;
            eventRow.value       = value;
            eventRow.text        = text;
            eventRow.data        = grid.getRow(rowIndex);
            if (eventType == 'click') {
                if (grid.notNull(grid.user_click)) { let flag = grid.tbs_click(grid, eventRow, grid.user_click); } //user function call
            }
            else if (eventType == 'dblclick') {
                if (grid.notNull(grid.user_dblclick)) { let flag = grid.tbs_dblclick(grid, eventRow, grid.user_dblclick); } //user function call
            }
        }
    }

    tbs_getMaxRowIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        let grid = this;

        let maxRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxRowIndex = Math.max(...rowIndexArray);
        }
        else if (grid.fixedRowIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxRowIndex = Math.max(...rowIndexArray);
        }
        else if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxRowIndex = Math.max(...rowIndexArray);
        } else {
            maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
        }
        return maxRowIndex;
    }

    tbs_getMinRowIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        let grid = this;

        let minRowIndex;
        const rowIndexArray = [];
        let num;
        if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

            minRowIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedRowIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            minRowIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            minRowIndex = Math.min(...rowIndexArray);
        } else {
            minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
        }
        return minRowIndex;
    }

    tbs_getMaxCellIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        let grid = this;

        let maxCellIndex, num;
        const rowIndexArray = [];
        if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        }
        else if (grid.fixedRowIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        }
        else if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            maxCellIndex = Math.max(...rowIndexArray);
        } else {
            maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
        }
        return maxCellIndex;
    }

    tbs_getMinCellIndexByMouseMove = function() {
        let selector = '#' + this.gridId;
        let grid = this;

        let minCellIndex;
        const rowIndexArray = [];
        if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

            minCellIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedRowIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        }
        else if (grid.fixedColumnIndex != -1) {
            num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
            num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
            minCellIndex = Math.min(...rowIndexArray);
        } else {
            minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
        }
        return minCellIndex;
    }

    tbs_getMaxRowIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let lastY = this.lastY;
        let maxRowIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let len = (tableRows) ? tableRows.length : 0;

        let startRowIndex, lastRowIndex;
        if (grid.fixedRowIndex != -1) {
            if (panelName == 'panel60') {
                startRowIndex = 0;
                lastRowIndex = this.fixedRowIndex;
            }
            else if (panelName == 'panel30') {
                startRowIndex = 0;
                lastRowIndex = len - 1;
            }
        }
        else {
            startRowIndex = 0;
            lastRowIndex = len - 1;
        }

        for (let i= startRowIndex; i < lastRowIndex + 1; i++) {
            let tableRow = tableRows[i];
            let tableRowIndex = i + 1;
            let rect = grid.getOffset(tableRow);
            let top = rect.top;
            if (lastY > top) maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
        }
        return maxRowIndex;
    }

    tbs_getMinRowIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let lastY = this.lastY;
        let minRowIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
        let len = (tableRows) ? tableRows.length : 0;

        let startRowIndex, lastRowIndex;
        if (grid.fixedRowIndex != -1) {
            if (panelName == 'panel60') {
                startRowIndex = 0;
                lastRowIndex = this.fixedRowIndex;
            }
            else if (panelName == 'panel30') {
                startRowIndex = 0;
                lastRowIndex = len - 1;
            }
        }
        else {
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
    }

    tbs_getMaxCellIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let lastX = this.lastX;
        let maxCellIndex;
        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
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
            let tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[tbsGridNames.column.visible] == false) continue;
            let rect = grid.getOffset(tableCell);
            let rectLeft = rect.left;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
            if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
        }
        return maxCellIndex
    }

    tbs_getMinCellIndexByMouseMove2 = function(panelName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let lastX = this.lastX;
        let minCellIndex;

        let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
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
            let tableCell = tableRow.childNodes[x];
            let column = grid.column_table.data[x];
            if (column[tbsGridNames.column.visible] == false) continue;
            let rect = grid.getOffset(tableCell);
            let rectRight= rect.left + tableCell.getBoundingClientRect().width;
            //console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
            if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
        }
        return minCellIndex;
    }

    getOffset(el) {
        let _x = 0;
        let _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
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
        let grid = this;

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

    tbs_moveCell(type) { //type : left, right, up, down
        let selector = '#' + this.gridId;
        let grid = this;

        let cellIndex = -1;

        let tableRows     = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let tableRowIndex, dataRowIndex;

        let tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
        if (grid.null(tableCell)) return;

        tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
        dataRowIndex =  parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
        cellIndex = tableCell.cellIndex;

        if (type == 'left') {
            let startCellIndex = cellIndex;
            cellIndex = cellIndex - 1;
            for (let i = cellIndex; i >= 0; i--) {
                let column = this.column_table.data[i];
                if (column[tbsGridNames.column.visible] == false) cellIndex -= 1;
                else break;
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
                let moveWidth= left2 - left1;
                let table20  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                let table30  = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

                let hiddenSize = this.horizontalScroll.hiddenSize;
                let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                let sLeft;
                if (curLeft - moveWidth < 0) sLeft = 0 + 'px';
                else sLeft = -1 * curLeft + moveWidth + 'px';

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
            for (let i = cellIndex, len = this.column_table.count(); i < len; i++){
                let column = this.column_table.data[i]
                if (column[tbsGridNames.column.visible] == false) cellIndex += 1;
                else break;
            }
            if (cellIndex >= this.column_table.count()) cellIndex = startCellIndex;

            let tableRow = tableRows[tableRowIndex - 1];
            let right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;

            let panel30= document.querySelector(selector + ' .tbs-grid-panel30');
            let right2 = window.pageYOffset + panel30.getBoundingClientRect().right;

            if (right1 > right2) {
                let moveWidth = right1 - right2;
                let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
                let hiddenSize = this.horizontalScroll.hiddenSize;
                let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
                let sLeft;
                if (curLeft + moveWidth > hiddenSize) sLeft = -1 * hiddenSize + 'px';
                else sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';

                grid.classScroll.setContentPanelLeft(sLeft);
                grid.classScroll.setBarPosition(grid.code_horizontal);
            }
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
        }
        else if (type == 'up') {
            if (this.fixedRowIndex != -1) {
                dataRowIndex -= 1;
                let topRowIndex = this.getFirstRowIndex();
                if (dataRowIndex <= this.fixedRowIndex) topRowIndex = this.fixedRowIndex + 1;

                if (topRowIndex  < 0) topRowIndex = 0;
                if (dataRowIndex < 0) dataRowIndex = 0;

                if (dataRowIndex >= topRowIndex) { //OK
                    this.classRange.removeRange(0, -1);
                    let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    this.classPanel30.setDataPanel(_topRowIndex);
                }
                else if (dataRowIndex < topRowIndex && dataRowIndex == topRowIndex - 1) {
                    this.classRange.removeRange(0, -1);
                    let rowIndex = this.classScroll.setBarPositionByDirection('up');
                    this.displayOneSelection(rowIndex, cellIndex);
                }
                else {
                    this.classRange.removeRange(0, -1);
                    let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
                    this.classPanel30.setDataPanel(_topRowIndex);
                }
            }
            else {
                dataRowIndex -= 1;
                let topRowIndex = this.getFirstRowIndex();

                if (topRowIndex  < 0) topRowIndex = 0;
                if (dataRowIndex < 0) dataRowIndex = 0;

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
        }
        else if (type == 'down') {
            let topRowIndex = this.getFirstRowIndex();
            let lastRowIndex = this.getLastRowIndex();
            if (grid.fixedRowIndex != -1 && dataRowIndex == grid.fixedRowIndex){
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

    /**
     * Excel Functions
     *
     */

    excelExport(options) {
        let selector = '#' + this.gridId;
        let grid = this;

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
            th.style.width = (column[tbsGridNames.column.visible] == true) ? parseInt(column.width) + 'px' : '0px';
            th.style.display = (column[tbsGridNames.column.visible]== true) ? '' : 'none';
            sumWidth += (column[tbsGridNames.column.visible] == true) ? parseInt(column.width) : 0;
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
                    if (i == 0) td.rowSpan = headerRowCount;
                    else if (i < len - 1) td.rowSpan = headerRowCount - i; // 3 - 1

                    td.style = 'border:1px solid #ccc;background: #fcf1f4;';
                    td.style.textAlign = 'center';

                    let width = (headerColumn['width'] != '') ? headerColumn['width'] : '100';
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
                }
                else if (headerColumn[tbsGridNames.column.text] != undefined) {
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
                }
                else {
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
                    let width = (column[tbsGridNames.column.width] != '') ? column[tbsGridNames.column.width] : '100';
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


