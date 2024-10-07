import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

import { TbsBase            } from './base/tbs.base.js';
import { TbsDatabase        } from './base/tbs.database.js';
import { TbsDataTable       } from './base/tbs.data.table.js';
import { TbsDataArrayTable  } from './base/tbs.data.table.js';
import { TbsGridCell	    } from './tbs.grid.cell.js';
import { TbsGridColumns	    } from './columns/tbs.grid.columns.js';
import { TbsGridCombo	    } from './tbs.grid.combo.js';
import { TbsGridControl	    } from './tbs.grid.control.js';
import { TbsGridDate	    } from './tbs.grid.date.js';
import { TbsGridDom	        } from './tbs.grid.dom.js';
import { TbsGridRow	        } from './tbs.grid.row.js';
import { TbsGridFilter	    } from './tbs.grid.filter.js';
import { TbsGridFilterLayer } from './tbs.grid.filter.layer.js';
import { TbsGridFooter	    } from './summary/tbs.grid.footer.js';
import { TbsGridGroup	    } from './tbs.grid.group.js';
import { TbsGridPage	    } from './tbs.grid.page.js';
import { TbsGridPanelBase   } from './panels/tbs.grid.panel.base.js';
import { TbsGridPanel10	    } from './panels/tbs.grid.panel10.js';
import { TbsGridPanel20	    } from './panels/tbs.grid.panel20.js';
import { TbsGridPanel30	    } from './panels/tbs.grid.panel30.js';
import { TbsGridPanel40	    } from './panels/tbs.grid.panel40.js';
import { TbsGridPanel50	    } from './panels/tbs.grid.panel50.js';
import { TbsGridPanel70	    } from './panels/tbs.grid.panel70.js';
import { TbsGridPanel80	    } from './panels/tbs.grid.panel80.js';
import { TbsGridPanel90	    } from './panels/tbs.grid.panel90.js';
import { TbsGridRange	    } from './tbs.grid.range.js';
import { TbsGridRangePanel  } from './tbs.grid.range.panel.js';
import { TbsGridRenderPanel30	    } from './panels/tbs.grid.render.panel30.js';
import { TbsGridRenderPanelInfo  } from './panels/tbs.grid.render.panel.info.js';
import { TbsGridScrollBase  } from './tbs.grid.scroll.base.js';
import { TbsGridScroll	    } from './tbs.grid.scroll.js';
import { TbsGridSort	    } from './tbs.grid.sort.js';
import { TbsGridTop	        } from './summary/tbs.grid.top.js';
import { TbsGridTree	    } from './tbs.grid.tree.js';
import {tbsGridConfigs} from "./tbs.grid.configs.js";
import {TbsGrid} from "./tbs.grid.js";
import {TbsGridHeaders} from "./columns/tbs.grid.headers.js";

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridBase extends TbsBase {

    constructor(gridId, gridConfigs) {
        super();
        this.gridId = gridId;
        this.gridConfig = gridConfigs ?
            gridConfigs[Object.keys(gridConfigs)[0]] : tbsGridConfigs[Object.keys(tbsGridConfigs)[0]];
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

        this.temp_table       = this.db.createTable('temp');

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

        this.panel31_table = this.db.createView('panel21');
        this.panel31_table = this.db.createView('panel20');
        this.panel31_table = this.db.createView('panel31');

        /**
         * cell template table
         */
        this.db.createTable('cellTemplate');
        this.cell_template_table = this.db.getTable('cellTemplate')

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
        this.options[tbsGridNames.column.sortable] = true;
        this.options[tbsGridNames.column.resizable] = true;
        this.options[tbsGridNames.column.movable] = true;
        this.options[tbsGridNames.column.autoResizable] = true;
        this.options[tbsGridNames.column.autoWidth] = false;

        // Rows Options
        this.options[tbsGridNames.row.selectMode] = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
        this.options[tbsGridNames.row.addRow] = false; 	//== row option
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
         * @description class
         *
         */

        this.classScroll    = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classHeader    = new TbsGridHeaders(this);
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

        this.classRow = new TbsGridRow(this);
        this.classCell = new TbsGridCell(this, null);
    }

    /**
     * Is Functions
     *
     */

    isEditableColumn(columnName) {
        let result = this.column_table.selectRow(tbsGridNames.column.name, columnName);
        return result.editable ? result.editable : false;
    }

    isSortableColumn(columnName) {
        const grid = this;

        let result = false;
        //let column = grid.getColumn(columnName);

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
        //let column = grid.getColumn(columnName);

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
        //let column = grid.getColumn(columnName);

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
        //let column = grid.getColumn(columnName);

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
        //let column = grid.getColumn(columnName);

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

    isInPanel(e, panelName, startX, startY) {  //tbs-grid-panel30
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

        let rect= panel.getBoundingClientRect();
        let groupTop    = absRect.top;
        let groupBottom = absRect.top + rect.height;
        let groupLeft   = absRect.left;
        let groupRight  = absRect.left + rect.width;
        //outside area
        if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;
        else return true;
    }

    isSelectedCell(panelName, rowIndex, cellIndex) {
        //selected 1, 0
        let result = 0;
        let rows = [];
        if      (panelName == 'panel31') rows = this.data_select_panel31;
        else if (panelName == 'panel32') rows = this.data_select_panel30;
        else if (panelName == 'panel30') rows = this.data_select_panel30;

        else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;
        else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;
        else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;

        else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;
        else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;
        else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;

        else rows = this.data_select_panel30;

        for (let i = 0, len= rows.length; i < len; i++) {
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

        for (let i = 0, len= rows.length; i < len; i++) {
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
        for (let i = 0, len= rows.length; i < len; i++) {
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
        for (let i = 0, len= rows.length; i < len; i++) {
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
        let column = grid.getColumn(columnName)
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

        return startCell;
    }

    getLastSelectedTableCell(panelName) {
        let selector = '#' + this.gridId;
        const grid = this;

        let lastCell;
        let lastRowIndex = this._lastRowIndex;

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
        const grid = this;

        if (grid.view_table.count() == 0) {
            grid.classRange.removeRange(0, -1);
            return;
        }
        if (grid.fixedColumnIndex != -1) {
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
        const grid = this;

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
        const trLeftList    	= document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
        const trContentList 	= document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
        const trFixBottomtList= document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');

        count = topRowIndex + this.pageRowCount;
        //=============================================================
        const contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
        const contentTableRect = document.querySelector(selector + ' .tbs-grid-panel30 > table').getBoundingClientRect();
        const contentTableLeft = parseInt(document.querySelector(selector + ' .tbs-grid-panel30 > table').style.left, 10);

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
        this.displaySelectedLine();
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
            if (isNaN(topRowIndex)) topRowIndex = 0;
            return topRowIndex;
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

}



