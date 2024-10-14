import { TbsGridDom } from "./tbs.grid.dom";
import { TbsGridExcel } from "./export/tbs.grid.excel";
import {TbsGridScrollBase} from "./tbs.grid.scroll.base";
import {TbsGridScroll} from "./tbs.grid.scroll";
import {TbsGridHeaders} from "./columns/tbs.grid.headers";
import {TbsGridColumns} from "./columns/tbs.grid.columns";
import {TbsGridControl} from "./tbs.grid.control";
import {TbsGridRange} from "./tbs.grid.range";
import {TbsGridRangePanel} from "./tbs.grid.range.panel";
import {TbsGridFilter} from "./tbs.grid.filter";
import {TbsGridGroup} from "./tbs.grid.group";
import {TbsGridPage} from "./tbs.grid.page";
import {TbsGridSort} from "./tbs.grid.sort";
import {TbsGridTree} from "./tbs.grid.tree";
import {TbsGridPanelBase} from "./panels/tbs.grid.panel.base";
import {TbsGridPanel10} from "./panels/tbs.grid.panel10";
import {TbsGridPanel20} from "./panels/tbs.grid.panel20";
import {TbsGridPanel30} from "./panels/tbs.grid.panel30";
import {TbsGridPanel40} from "./panels/tbs.grid.panel40";
import {TbsGridPanel50} from "./panels/tbs.grid.panel50";
import {TbsGridPanel70} from "./panels/tbs.grid.panel70";
import {TbsGridPanel80} from "./panels/tbs.grid.panel80";
import {TbsGridPanel90} from "./panels/tbs.grid.panel90";
import {TbsGridTop} from "./summary/tbs.grid.top";
import {TbsGridFooter} from "./summary/tbs.grid.footer";
import {TbsGridDate} from "./tbs.grid.date";
import {TbsGridCombo} from "./tbs.grid.combo";
import {TbsGridRow} from "./tbs.grid.row";
import {TbsGridCell} from "./tbs.grid.cell";
import {TbsGridBase} from "./base/tbs.grid.base";
import {AddRowDirection, CellType, columnAlias, GridMode, optionAlias, rowAlias} from "./tbs.grid.types";
import {TbsGridBaseIs} from "./base/tbs.grid.base.is";
import {TbsGridBaseEvent} from "./base/tbs.grid.base.event";
import { TbsGridBaseUserEvent } from "./base/tbs.grid.base.user.event";
import { TbsGridBaseLine } from "./base/tbs.grid.base.line";

export class TbsGrid extends TbsGridBase {

    /**
     * Class
     */

    classScroll: TbsGridScrollBase;
    verticalScroll: TbsGridScroll;
    horizontalScroll: TbsGridScroll;

    classHeader: TbsGridHeaders;
    classColumn: TbsGridColumns;
    classControl: TbsGridControl;
    classRange: TbsGridRange;
    classRange40: TbsGridRangePanel;
    classRange50: TbsGridRangePanel;
    classFilter: TbsGridFilter;
    classGroup: TbsGridGroup;
    classPage: TbsGridPage;
    classSort: TbsGridSort
    classTree: TbsGridTree;

    classPanelBase: TbsGridPanelBase;
    classPanel10: TbsGridPanel10;
    classPanel20: TbsGridPanel20;
    classPanel30: TbsGridPanel30;
    classPanel40: TbsGridPanel40;
    classPanel50: TbsGridPanel50;
    classPanel70: TbsGridPanel70;
    classPanel80: TbsGridPanel80;
    classPanel90: TbsGridPanel90;

    classTop: TbsGridTop;
    classFooter: TbsGridFooter;

    tbsGridDate: TbsGridDate;
    tbsGridCombo: TbsGridCombo;

    classRow: TbsGridRow;
    classCell: TbsGridCell;

    topLineDiv    : any;
    bottomLineDiv : any;
    leftLineDiv   : any;
    rightLineDiv  : any;

    constructor(gridId: string, gridConfigs: object) {
        super(gridId, gridConfigs);

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

        this.classTop    = new TbsGridTop(this);
        this.classFooter = new TbsGridFooter(this);

        this.tbsGridDate;
        this.tbsGridCombo;

        this.classRow = new TbsGridRow(this);
        this.classCell = new TbsGridCell(this, null);

        this.topLineDiv    = null;
        this.bottomLineDiv = null;
        this.leftLineDiv   = null;
        this.rightLineDiv  = null;
    }

    getUserImageRoot(columnName: string) {
        let result = this.gridConfigOptions['userImageRoot'];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer.userImageRoot) result = renderer.userImageRoot;
        }
        return result;
    }

    getRenderer(columnName: string, property: string) {
        let result = null;
        if (arguments.length == 2) {
            if (this.renderer && this.renderer[columnName] && this.renderer[columnName][property])
                result = this.renderer[columnName][property];
        }
        else if (arguments.length == 1) {
            if (this.renderer && this.renderer[columnName]) result = this.renderer[columnName];
        }
        else {
            if (this.renderer) result = this.renderer;
        }
        return result;
    }

    setRenderer(renderer: any) {
        this.renderer = renderer;
    }

    getInfoRenderer(columnName: string, property: string) {
        let result = null;
        const renderer = this.infoRenderer;
        if (arguments.length == 2) {
            if (renderer && renderer[columnName] && renderer[columnName][property])
                result = renderer[columnName][property];
        }
        else if (arguments.length == 1) {
            if (renderer && renderer[columnName]) result = renderer[columnName];
        }
        else {
            if (renderer) result = renderer;
        }
        return result;
    }

    setInfoRenderer(renderer: any) { this.infoRenderer = renderer; }

    /**
     * Check Box Options
     */

    getTrueValue(columnName: string) { return this.getBooleanValue(columnName, 'trueValue' ); }

    getFalseValue(columnName: string){ return this.getBooleanValue(columnName, 'falseValue'); }

    getElseValue(columnName: string) { return this.getBooleanValue(columnName, 'elseValue' ); }

    getBooleanValue(columnName: string, valueType: string) {
        let result = this.gridConfigOptions[valueType];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer[valueType]) result = renderer[valueType];
        }
        return result;
    }

    reverseBoolean(value: string | number | boolean) {
        if      (value == 1)   return 0;
        else if (value == 0)   return 1;
        else if (value == '1') return '0';
        else if (value == '0') return '1';
        else if (value == 'y') return 'n';
        else if (value == 'n') return 'y';
        else if (value == 'Y') return 'N';
        else if (value == 'N') return 'Y';
        else if (value == true)  return false;
        else if (value == false) return true;
        else return null;
    }

    /**
     * Format Functions
     *
     */

    getFormatValue(column: any, value: any){
        let result: any = this.getFormat(column, value);
        return result.value;
    }

    getFormatText(column: any, value: any){
        let result: any = this.getFormat(column, value);
        return result.text;
    }

    getFormat(column: any, value: any) {
        const grid = this;

        let result: any = {};
        result.value = value;
        result.text = value;

        let colType = column[columnAlias.type];
        let format  = column[columnAlias.format];

        if (colType == CellType.number) {
            result = this.getFormatNumber(column, value);
            if (column[columnAlias.visible] == false
                || (column[columnAlias.showZero] == false && Number(result.value) == 0 )) {
                result.text = this.options[optionAlias.zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == CellType.combo) {
                const data = grid.renderer[column[columnAlias.name]].data;

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

    getFormatNumber(column: any, value: any) {
        const grid = this;
        const formatWon = function (n) {
            //return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); safari error
            //return val.toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','); int type error
            let parts = n.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        };

        // result = { value: , text: }
        let result: any = {};
        if      (grid.null(value))        result.value = null;
        else if (grid.trim(value) == '')  result.value = null;
        else if (grid.substr2(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
        else {
            if (column[columnAlias.currencyChar])  value = value.toString().replace(column[columnAlias.currencyChar], '');
            result.value = value.toString().replace(/,/gi, '')
        }

        if (grid.null(result.value)) {
            result.text = grid.options[optionAlias.zeroChar];
            return result;
        }
        result.text = result.value;

        let type = column[columnAlias.type];
        let scale = column[columnAlias.scale];

        let arr = scale.split(',');
        let decimalPoint = (arr.length > 1) ? this.trim(arr[1]) : '0';
        if (decimalPoint == '') decimalPoint = '0';

        let roundType = column[columnAlias.roundType];
        let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        let dpLen = 0; //decimal length

        if (decimalPoint == '0') {
            dpLen = 0;
            if      (roundType == 'round') { // @ts-ignore
                n = parseFloat(this.round(n, dpLen));
            }
            else if (roundType == 'ceil' ) { // @ts-ignore
                n = parseFloat(this.ceil(n, dpLen));
            }
            else if (roundType == 'floor') { // @ts-ignore
                n = parseFloat(this.floor(n, dpLen));
            }
            else { // @ts-ignore
                parseFloat(this.round(n, dpLen));
            }
            result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[columnAlias.fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? this.ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.floor(n, dpLen).toFixed(dpLen)
                        : this.round(n, dpLen).toFixed(dpLen);
                result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
            }
            else {
                dpLen = parseInt(decimalPoint);
                if (roundType == 'ceil') { // @ts-ignore
                    n = parseFloat(this.ceil(n, dpLen));
                }
                else if (roundType == 'floor') { // @ts-ignore
                    n = parseFloat(this.floor(n, dpLen))
                }
                else { // @ts-ignore
                    n = parseFloat(this.round(n, dpLen));
                }
                // n =   (roundType == 'ceil')  ? parseFloat(this.ceil(n, dpLen))
                //     : (roundType == 'floor') ? parseFloat(this.floor(n, dpLen))
                //         : parseFloat(this.round(n, dpLen));
                result.text = column[columnAlias.commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[optionAlias.zeroChar] != '') result.text = optionAlias.zeroChar;
        }
        let regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',',  column[columnAlias.thousandChar]);
        result.text = result.text.replaceAll('.',  column[columnAlias.decimalChar]);
        if (column[columnAlias.currencyChar]) result.text = column[columnAlias.currencyChar] + result.text
        return result;
    }

    getFormatDate(column: any, value: any) {
        const grid = this;
        let result: any = {};
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
        let format = column[columnAlias.format];

        // date char : . - /
        let formatText = format.replace(/\./gi, '');
        formatText = formatText.replace(/\-/gi, '');
        formatText = formatText.replace(/\//gi, '');

        let dateText = result.text;
        let yyyy = '';
        let MM = '';
        let dd = '';

        if (formatText == 'yyyyMMdd') {
            yyyy = grid.substr2(result.text,0, 4);
            MM = grid.substr2(result.text,4, 2);
            dd = grid.substr2(result.text,6, 2);
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

    setGroupColumns(groupColumns: any[]){
        this.group_column_table.remove();
        groupColumns.map(column => this.group_column_table.insert(this.copyJson(column)))
    }

    setSortColumns(sortColumns: any[]){
        this.sort_column_table.remove();
        sortColumns.map(column => this.sort_column_table.insert(this.copyJson(column)))
    }

    /**
     * Tree Functions
     */

    //setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
    setTreeSortColumn(sortColumn: any) { this.classTree.setTreeSortColumns(sortColumn); }

    /**
     *  Panel10 Functions
     */

    showToolbarPanel() { this.classPanel10.showToolbarPanel(); }

    hideToolbarPanel() { this.classPanel10.hideToolbarPanel(); }

    showToolbarButtons(buttonType: string) { this.classPanel10.showToolbarButtons(buttonType); }

    hideToolbarButtons(buttonType: string) { this.classPanel10.hideToolbarButtons(buttonType); }

    showFilterPanel() { this.classFilter.showFilterPanel(); }

    hideFilterPanel() { this.classFilter.hideFilterPanel(); }

    showSortPanel() { this.classSort.showSortPanel(); }

    hideSortPanel() { this.classSort.hideSortPanel(); }

    /**
     *  TbsGrid Config
     */

    setGridConfig(tbsGridConfig: any) { this.gridConfig = tbsGridConfig; }

    /**
     * Column Functions
     */

    setFixedColumn(fixedColumnIndex: number) { this.classColumn.setFixedColumn(fixedColumnIndex); }

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
        this.topLineDiv    = document.querySelector(selector + ' .tbs-grid-top-line');
        this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
        this.leftLineDiv   = document.querySelector(selector + ' .tbs-grid-left-line');
        this.rightLineDiv  = document.querySelector(selector + ' .tbs-grid-right-line');
    }

    setDataColumns(columns: any[]) {
        // columns.map(column => {
        //     const dataRow = {}
        //     dataRow[columnAlias.name] = column[columnAlias.name];
        //     dataRow[columnAlias.dataType] = column[columnAlias.dataType];
        //     this.field_table.insert(dataRow);
        // });
    }

    setGrid(columns: any[], options: any = {}) {
        const grid = this;

        grid.createOption(options);

        grid.columns = grid.copyJson(columns);

        grid.classColumn.createColumns(grid.columns); // add columns(first) or add column

        grid.classColumn.createColumnTable();

        grid.classHeader.createHeaderColumns();

        grid.classHeader.createHeaderColumnTable();

        grid.createGrid();

        grid.classPanel70.setDataPanel();
    }

    createGrid() {
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

    updateGrid() {
        const grid = this;

        this.classPanel20.createTable();
        this.classPanel70.createTable();
        this.classPanel40.createTable();
        this.classPanel50.createTable();

        this.classScroll.setPanelSize();
        this.classPanel30.createTable();

        this.horizontalScroll.setScroll(grid.code_horizontal);;
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
    };

    getTextWidth2(context, text) {
        let selector = '#' + this.gridId;
        const grid = this;

        let metrics = context.measureText(text);
        return metrics.width;
    };

    setColumnAutoWidth(){
        let selector = '#' + this.gridId;
        const grid = this;

        let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        let arr = [];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) arr[x] = 0;

        let fontSize = grid.getConfigFont('fontSize');
        let fontFamilty = grid.getConfigFont('fontFamily');

        for (let i = 0, len = grid.header_column_table.data.length; i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                if (grid.header_column_table.data[i][x][columnAlias.kind] == 'column') {
                    let width = parseInt(grid.getTextWidth(canvas, grid.header_column_table.data[i][x][columnAlias.text], fontSize, fontFamilty));
                    if (width >= arr[x]) {
                        arr[x] = width;
                    }
                }
            }
        }
        for (let i = 0, len = grid.view_table.count(); i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                let columnName = grid.getColumnName(x);
                let column = grid.getColumn(columnName);
                let val = grid.getValueByColumnIndex(i, x);
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
            this.setRowHeight('header' , rowHeight);
            this.setRowHeight('content', rowHeight);
            this.setRowHeight('top'    , rowHeight);
            this.setRowHeight('footer' , rowHeight);
        }
        else {
            if (type == 'header') {
                this.headerRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'content') {
                this.rowHeight = rowHeight;
                (document.querySelector(selector + ' .tbs-grid-input') as any).style.height = rowHeight + 'px';
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'top') {
                this.topRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }
            if (type == 'footer') {
                this.footerRowHeight = rowHeight;
                this.classScroll.setPanelSize();
                this.horizontalScroll.setScroll(grid.code_horizontal);;
                this.verticalScroll.setScroll(grid.code_vertical);
                this.classPanel30.setDataPanel(0);
            }

        }
    }

    setGridModePage() {
        let selector = '#' + this.gridId;
        const grid = this;

        let page: any = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';

        grid.classPage.pageRowCount = grid.classPage.options['pageRowCount'];
    }

    setGridModePagenation() {
        let selector = '#' + this.gridId;
        const grid = this;

        const page: any = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';
    }

    setData(data: any[], openDepth: number = 0, isFirst: boolean = true) {
        const grid = this;

        if (grid.group_column_table.count() > 0) grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == GridMode.tree) grid.classTree.setTreeData(data, openDepth, isFirst);
        else grid.setGridData(data, isFirst);
    }

    setGridMode(gridMode: GridMode) {
        let selector = '#' + this.gridId;
        const grid = this;

        grid.grid_mode = grid.trim(gridMode);

        if (grid.grid_mode == GridMode.page) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePage();
        }
        else if (grid.grid_mode == GridMode.pagination) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePagenation();
        }
        else if (grid.grid_mode == GridMode.tree) {}
    }

    setGridData(data, isFirst) {
        let selector = '#' + this.gridId;
        const grid = this;

        if (data == undefined) return;

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
            const columns: any[] = grid.column_table.selectRows();
            for (let x = 0, len = columns.length; x < len; x++) {
                const column = columns[x];
                let columnName  = column[columnAlias.name];
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
            if (grid.grid_mode == GridMode.page) this.page_table.insert(grid.copyJson(source));
        }

        /* create top_data */
        grid.classTop.setTopData();

        /* create footer_data */
        grid.classFooter.setFooterData();

        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();

        (document.querySelector(selector + ' .tbs-grid-panel10-filter-input') as any).value = '';
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
        this.data_select_panel30 = [];  // select color : value 0, 1
        this.data_select_panel31 = [];	// view - filter

        for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
            let itemSelect = {};
            let itemLeftSelect = {};
            let itemLeftView = {};

            itemSelect[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];
            itemSelect = new Uint8ClampedArray([]); //new

            itemLeftView[columnAlias.rowMode] = ''; //insert, update, delete
            itemLeftView[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];

            itemLeftSelect[columnAlias.rowMode] = 0; //insert, update, delete
            itemLeftSelect[columnAlias.rowId] = data[rowIndex][columnAlias.rowId];

            this.data_select_panel30.push(itemSelect);
            this.data_select_panel31.push(itemLeftSelect);
        }
        this.classRange.removeRange(0, -1);
        this.classPanel30.setDataPanel(0);
    }

    /**
     * Columns API.
     */

    getColumn(name: string, table?) { return this.isNull(table, this.column_table).selectRow(columnAlias.name, name); }

    getColumns(table?: any) { return this.isNull(table, this.column_table).select();  }

    getColumnByIndex(columnIndex: number, table?: any) { return this.isNull(table, this.column_table).selectRowByRowIndex(columnIndex); }

    getColumnName(columnIndex: number, table?: any) { return this.isNull(table, this.column_table).selectValue(columnIndex, columnAlias.name); }

    getColumnIndex(columnName: string, table?: any) { return this.isNull(table, this.column_table).selectRowIndex(columnAlias.name, columnName); }

    setColumn(columnName: string, property: string, value: any, table?: any) { this.isNull(table, this.column_table).updateRow(columnName, property, value); }

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

    getHeaderColumn(rowIndex: number, columnIndex: number) { return this.classHeader.getHeaderColumn(rowIndex, columnIndex); }

    getHeaderColumnByNumber(num) { return this.classHeader.getHeaderColumnByNumber(num); }

    addColumn(addColumn: any, targetColumnIndex: number, orderType: string) { this.classColumn.addColumn(addColumn, targetColumnIndex, orderType);}

    removeColumn(targetColumnIndex: number) { this.classColumn.removeColumn(targetColumnIndex); }

    setHeaderProperty(rowIndex: number, colIndex: number, property: string, value: any) { this.classHeader.setHeaderProperty(rowIndex, colIndex, property, value); }

    /**
     * Row functions
     */

    getPageRowCount(panelName?: string) { return this.pageRowCount; }

    getTopRowIndex(panelName: string, topRowIndex: number) {
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
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            else {
                if (topRowIndex > (rowCount - this.pageRowCount)) {
                    topRowIndex = rowCount - this.pageRowCount;
                    if (topRowIndex < 0) topRowIndex = 0;
                }
            }
            if (topRowIndex < 0) topRowIndex = 0;
        }
        return topRowIndex;
    }

    getBottomRowIndex(panelName: string, topRowIndex: number) {
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
        if (bottomRowIndex > this.getRowCount() - 1) bottomRowIndex = this.getRowCount() - 1;

        return bottomRowIndex;
    }

    /**
     * view table rows
     */

    getRowCount(table?: any) { return this.isNull(table, this.view_table).count(); }

    getRow(rowIndex: number, table?: any) { return this.isNull(table, this.view_table).selectRowByRowIndex(rowIndex); }

    getRows(startRowIndex?: number, endRowIndex?: number, table?: any) { return this.isNull(table, this.view_table).selectRowRange(startRowIndex, endRowIndex); }

    getRowByRowId(rowId: number, table?: any) { return this.isNull(table, this.view_table).selectRowByRowId(rowId); }

    getRowIndexByRowId(rowId: number, table?: any) { return this.isNull(table, this.view_table).selectRowIndexByRowId(rowId); }

    getCheckedRows() { return this.view_table.selectRows(columnAlias.isChecked, true); }

    getSelectedRows() {
        const result = [];
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.isSelectedCell31(i, 0) == 1) result.push(this.view_table.selectRowByRowIndex(i));
        }
        return result;
    }

    getSelectedRowsIndexArray() {
        const result: number[] = [];
        for (let rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
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
            item[columnAlias.rowId] = row[columnAlias.rowId];
            item[columnAlias.rowMode]  = row[columnAlias.rowMode];
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
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode] = row[columnAlias.rowMode];
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
            if (row[columnAlias.rowMode] == 'I') {
                let item = JSON.parse(JSON.stringify(row));
                item[columnAlias.rowId] = row[columnAlias.rowId];
                item[columnAlias.rowMode ] = row[columnAlias.rowMode];
                result.push(item);
            }
        }
        return result;
    }

    createRow(row: any): any {
        if (this.null(row)) row = {};

        const columns = this.column_table.data;
        const item: any = {};

        for (let i = 0, len = columns.length; i < len; i++) {
            const column: any = columns[i];
            let columnName: string = column[columnAlias.name];
            item[columnName] = this.null(row[columnName]) ? null : row[columnName];
        }
        return item;
    }

    addRow(row?: any, direction?: AddRowDirection) {
        //type : top, bottom, up, down
        const grid = this;

        const dataRow = this.createRow(row);

        const rowIndexList = this.getSelectedRowsIndexArray();

        if (rowIndexList.length == 0) direction = AddRowDirection.bottom;

        if (direction == AddRowDirection.top) {
            this.source_table.insertBefore(dataRow, 0)
            this.view_table.insertBefore(dataRow, 0)

            let topRowIndex = 0;

            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            this.classRange.selectRange(topRowIndex, topRowIndex);
            this.classPanel30.setDataPanel(topRowIndex);
        }
        else if (direction == AddRowDirection.bottom) {
            this.source_table.insert(dataRow)
            this.view_table.insert(dataRow)

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
        }
        else if (direction == AddRowDirection.before) {
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
        else if (direction == AddRowDirection.after) {
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

    removeRows(rows: any[]) {
        const grid = this;

        if (this.null(rows) || rows.length == 0) return;

        let topRowIndex = this.getFirstRowIndex();

        for (let i = 0, len = rows.length; i < len; i++) {
            const row = rows[i];
            let rowId = row[columnAlias.rowId];
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

    getSourceRowCount(): number { return this.getRowCount(this.source_table); }

    getSourceRow(rowIndex: number): any { return this.getRow(rowIndex, this.source_table); }

    getSourceRows(startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.source_table); }

    getSourceRowByRowId(rowId: number): any { return this.getRowByRowId(rowId, this.source_table); }

    getSourceRowIndexByRowId(rowId: number): number { return this.getRowIndexByRowId(rowId, this.source_table); }

    /**
     * top table rows
     */

    getTopRowCount(): number { return this.getRowCount(this.top_table); }

    getTopRow(rowIndex: number): any { return this.getRow(rowIndex, this.top_table); }

    getTopRows(startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.top_table); }

    getTopRowByRowId(rowId: number): any { return this.getRowByRowId(rowId, this.top_table); }

    getTopRowIndexByRowId(rowId: number): number { return this.getRowIndexByRowId(rowId, this.top_table); }

    /**
     * footer table rows
     */

    getFooterRowCount(): number { return this.getRowCount(this.footer_table); }

    getFooterRow(rowIndex: number): any { return this.getRow(rowIndex, this.footer_table); }

    getFooterRows(startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.footer_table); }

    getFooterRowByRowId(rowId: number): any { return this.getRowByRowId(rowId, this.footer_table); }

    getFooterRowIndexByRowId(rowId: number): number { return this.getRowIndexByRowId(rowId, this.footer_table); }

    /**
     * tree table rows
     */

    getTreeRowCount(): number { return this.getRowCount(this.tree_table); }

    getTreeRow(rowIndex: number): any { return this.getRow(rowIndex, this.tree_table); }

    getTreeRows(startRowIndex: number, endRowIndex: number): any[] { return this.getRows(startRowIndex, endRowIndex, this.tree_table); }

    getTreeRowByRowId(rowId: number): any { return this.getRowByRowId(rowId, this.tree_table); }

    getTreeRowIndexByRowId(rowId: number): number { return this.getRowIndexByRowId(rowId, this.tree_table); }

    /**
     * Data Value, Text
     */

    getValue(rowIndex: number, columnName: string, table?: any): any { return this.isNull(table, this.view_table).selectValue(rowIndex, columnName); }

    getValueByColumnIndex(rowIndex: number, columnIndex: number, table?: any): any {
        let columnName = this.getColumnName(columnIndex, table);
        return this.getValue(rowIndex, columnName, table);
    }

    getText(rowIndex: number, columnName: string, table?: any): any {
        const column = this.getColumn(columnName); // column_table
        let val = this.getValue(rowIndex, columnName, table);
        return this.getFormatText(column, val);
    }

    getTextByIndex(rowIndex: number, columnIndex: number, table?: any): any {
        let columnName = this.getColumnName(columnIndex); // column_table
        return this.getText(rowIndex, columnName, table);
    }

    setValue(rowIndex: number, columnName: string, value: any): void {
        const grid = this;

        let cellIndex = this.getColumnIndex(columnName);
        let oldValue = this.view_table.data[rowIndex][columnName];
        let mode = this.view_table.data[rowIndex][columnAlias.rowMode];

        let result = this.getFormat(this.column_table.selectRowByRowIndex(cellIndex), value);
        if (mode == 'I') {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, columnAlias.rowMode, 'I');

                let rowId: number = grid.view_table.selectValue(rowIndex, columnAlias.rowId);

                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, columnAlias.rowMode, 'I');
            }
        }
        else {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, columnAlias.rowMode, 'U');

                let rowId: number = grid.view_table.selectValue(rowIndex, columnAlias.rowId);

                grid.source_table.updateByRowId(rowId, columnName, result.value);
                grid.source_table.updateByRowId(rowId, columnAlias.rowMode, 'U');
            }
        }
    }

    setValueByColumnIndex(rowIndex: number, cellIndex: number, value: any): void {
        let columnName = this.getColumnName(cellIndex);
        this.setValue(rowIndex, columnName, value);
    }

    /** info_column_table */

    getInfoValue(columnName: string, property: string): any {
        const dataRow = this.info_column_table.selectRow(columnAlias.name, columnName);
        return dataRow[property];
    }

    setInfoValue(columName: string, property: string, value: any): void { this.info_column_table.update(columName, property, value); }

    /**
     * Range Functiopns
     */

    setRange(rowIndex1: number, toRowIndex2: number, columnIndex1: number, columnIndex2: number): void {
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    selectRange(rowIndex1: number, toRowIndex2: number, columnIndex1: number, columnIndex2: number): void {
        if (this.view_table.count() == 0 || this.column_table.count() == 0) return;
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * Options
     */

    createOption(options: any) { this.setOptions(options); }

    setOption(optionName: string, optionValue: any) { this.options[optionName] = optionValue; }

    setOptions(options: any) { for (let key in options) this.setOption(key, options[key]); }

    /**
     * Page
     */

    setPageOption(optionName: string, optionValue: any) { this.classPage.setPageOption(optionName, optionValue); }

    /**
     * Dom Lib
     */

    addUserClass(element: any, className: string): void { TbsGridDom.addUserClass(element, className); }

    removeUserClass(element: any): void { TbsGridDom.removeUserClass(element); }

    /**
     * Export Excel
     */

    exportExcel(options: any) {
        const excel = new TbsGridExcel(this);
        excel.exportExcel(options);
    }
}

/**
 *
 * Class Mixins
 *
 */

export interface TbsGrid extends TbsGridBaseIs, TbsGridBaseEvent, TbsGridBaseUserEvent, TbsGridBaseLine {}

applyMixins(TbsGrid, [TbsGridBaseIs, TbsGridBaseEvent, TbsGridBaseUserEvent, TbsGridBaseLine]);

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}


