import {AddRowDirection, CellType, columnAlias, GridMode, optionAlias} from "../tbs.grid.types";
import {TbsGrid} from "../tbs.grid";
import {TbsGridDom} from "../tbs.grid.dom";
import {TbsGridExcel} from "../export/tbs.grid.excel";

export class TbsGridBaseMain {

    constructor() {
    }

    getRenderer(this: TbsGrid, columnName: string, property: string) {
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

    setRenderer(this: TbsGrid, renderer: any) {
        this.renderer = renderer;
    }

    getInfoRenderer(this: TbsGrid, columnName: string, property: string) {
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

    setInfoRenderer(this: TbsGrid, renderer: any) { this.infoRenderer = renderer; }

    /**
     * Display grid
     */

    apply(this: TbsGrid) {
        let selector = `#${this.gridId}`;
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

    createHtml(this: TbsGrid) {
        let selector = '#' + this.gridId;
        const grid = this;

        let elementRoot = document.querySelector(selector);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid" tabindex="1" style=""></div>');

        let elementGrid = elementRoot.querySelector('.tbs-grid');
        grid.classPanel10.createHtml(elementGrid);
        grid.classPanel80.createHtml(elementGrid);
        grid.classPanel90.createHtml(elementGrid);

        elementGrid.insertAdjacentHTML('beforeend', '<div class="tbs-grid-main"><div class="tbs-grid-wrap" /></div>');
        let elementMain = document.querySelector(`${selector} .tbs-grid-main`);
        let elementWrap = document.querySelector(`${selector} .tbs-grid-wrap`);

        grid.classPanel20.createHtml(elementWrap);
        grid.classPanel70.createHtml(elementWrap);
        grid.classPanel40.createHtml(elementWrap);
        grid.classPanel30.createHtml(elementWrap);
        grid.classPanel50.createHtml(elementWrap);
        grid.classPanel99.createHtml(elementGrid);

        grid.classPanelBase.createEtcHtml(elementMain);
        elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid-layer" style="left:30000px;display: none;"></div>');
        this.topLineDiv    = document.querySelector(`${selector} .tbs-grid-top-line`);
        this.bottomLineDiv = document.querySelector(`${selector} .tbs-grid-bottom-line`);
        this.leftLineDiv   = document.querySelector(`${selector} .tbs-grid-left-line`);
        this.rightLineDiv  = document.querySelector(`${selector} .tbs-grid-right-line`);
    }

    setGrid(this: TbsGrid, columns: any[], options: any = {}) {
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

    createGrid(this: TbsGrid) {
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

    updateGrid(this: TbsGrid) {
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

    getTextWidth(this: TbsGrid, canvas, text, fontSize, fontFamily) {
        let selector = '#' + this.gridId;
        const grid = this;

        let context = canvas.getContext("2d");
        context.fontSize = fontSize;
        context.fontFamily = fontFamily;
        let metrics = context.measureText(text);
        return metrics.width;
    };

    getTextWidth2(this: TbsGrid, context, text) {
        let selector = '#' + this.gridId;
        const grid = this;

        let metrics = context.measureText(text);
        return metrics.width;
    };

    setColumnAutoWidth(this: TbsGrid){
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

    setRowHeight(this: TbsGrid, type, rowHeight) {
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

    setData(this: TbsGrid, data: any[], openDepth: number = 0, isFirst: boolean = true) {
        const grid = this;

        if (grid.group_column_table.count() > 0) grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == GridMode.tree) grid.classTree.setTreeData(data, openDepth, isFirst);
        else if (grid.grid_mode == GridMode.page) grid.classPage.setPageData(data, isFirst);
        else if (grid.grid_mode == GridMode.pagination) grid.classPagination.setPaginationData(data);
        else grid.setGridData(data, isFirst);
    }

    setGridMode(this: TbsGrid, gridMode: GridMode) {
        const grid = this;

        grid.grid_mode = grid.trim(gridMode);

        if (grid.grid_mode == GridMode.page) {
            grid.classPanel99.showPagePanel();
        }
        else if (grid.grid_mode == GridMode.pagination) {
            grid.classPanel99.showPagePanel();
        }
    }

    setGridData(this: TbsGrid, data: any[], isFirst: boolean) {
        let selector = `#${this.gridId}`;
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
            document.querySelector(`${selector} .tbs-grid-panel21 td div`).textContent = String(data.length);
            grid.classPanel30.setDataPanel(0);
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
    }

    refreshRefData(this: TbsGrid) {
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
     * Range Functiopns
     */

    setRange(this: TbsGrid, rowIndex1: number, toRowIndex2: number, columnIndex1: number, columnIndex2: number): void {
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    selectRange(this: TbsGrid, rowIndex1: number, toRowIndex2: number, columnIndex1: number, columnIndex2: number): void {
        if (this.view_table.count() == 0 || this.column_table.count() == 0) return;
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * Dom Lib
     */

    addUserClass(this: TbsGrid, element: any, className: string): void { TbsGridDom.addUserClass(element, className); }

    removeUserClass(this: TbsGrid, element: any): void { TbsGridDom.removeUserClass(element); }

    /**
     * Export Excel
     */

    exportExcel(this: TbsGrid, options: any) {
        const excel = new TbsGridExcel(this);
        excel.exportExcel(options);
    }

    /**
     * Pagination
     */
    setTotalRowCount(this: TbsGrid, totalRowCount: number) {
        this.classPagination.setTotalRowCount(totalRowCount);
    }
}