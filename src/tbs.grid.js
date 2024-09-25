import { TbsGridTypes, TbsGridNames } from './tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsGridBase } from './tbs.grid.base.js';

export class TbsGrid extends TbsGridBase {

    /**
     * Format Functions
     *
     */

    getFormatValue(col, value){
        let result = this.getFormat(col, value);
        return result.value;
    }

    getFormatText(col, value){
        let result = this.getFormat(col, value);
        return result.text;
    }

    getFormat(column, value) {
        let grid = this;

        let result = {};
        result.value = value;
        result.text = value;

        let colType = column[tbsGridNames.column.type];
        let format  = column[tbsGridNames.column.format];

        if (colType == tbsGridTypes.CellType.number) {
            result = this.getFormatNumber(column, value);
            if (column[tbsGridNames.column.visible] == false
                || (column[tbsGridNames.column.showZero] == false && Number(result.value) == 0 )) {
                result.text = this.options[tbsGridNames.option.zeroChar];
            }
            return result;
        }
        else {
            if (this.null(value)) {
                result.value = '';
                result.text = '';
                return result;
            }
            if (colType == tbsGridTypes.CellType.combo) {
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
                return this.getFormatDate(column, value);
            }
            else {
                result.text = value;
                return result;
            }
        }
    }

    getFormatNumber(column, value) {
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
        else if (grid.trim(value) == '')  result.value = null;
        else if (grid.substr2(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
        else {
            if (column[tbsGridNames.column.currencyChar])  value = value.toString().replace(column[tbsGridNames.column.currencyChar], '');
            result.value = value.toString().replace(/,/gi, '')
        }

        if (grid.null(result.value)) {
            result.text = grid.options[tbsGridNames.option.zeroChar];
            return result;
        }
        result.text = result.value;

        let type = column[tbsGridNames.column.type];
        let scale = column[tbsGridNames.column.scale];

        let arr = scale.split(',');
        let decimalPoint = (arr.length > 1) ? this.trim(arr[1]) : '0';
        if (decimalPoint == '') decimalPoint = '0';

        let roundType = column[tbsGridNames.column.roundType];
        let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
        let dpLen = 0; //decimal length

        if (decimalPoint == '0') {
            dpLen = 0;
            if      (roundType == 'round') n = parseFloat(this.round(n, dpLen));
            else if (roundType == 'ceil' ) n = parseFloat(this.ceil(n, dpLen));
            else if (roundType == 'floor') n = parseFloat(this.floor(n, dpLen));
            else     parseFloat(this.round(n, dpLen));
            result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
        }
        else if (decimalPoint != '0') {
            result.text = formatWon(parseFloat(n));
            if (column[tbsGridNames.column.fixedScale]) {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? this.ceil(n, dpLen).toFixed(dpLen)
                    : (roundType == 'floor') ? this.floor(n, dpLen).toFixed(dpLen)
                        : this.round(n, dpLen).toFixed(dpLen);
                result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
            }
            else {
                dpLen = parseInt(decimalPoint);
                n =   (roundType == 'ceil')  ? parseFloat(this.ceil(n, dpLen))
                    : (roundType == 'floor') ? parseFloat(this.floor(n, dpLen))
                        : parseFloat(this.round(n, dpLen));
                result.text = column[tbsGridNames.column.commaUnit] == '0' ? n : formatWon(n);
            }
        }
        if (result.text == '0') {
            if (grid.options[tbsGridNames.option.zeroChar] == false) result.text = tbsGridNames.option.zeroChar;
        }
        let regExp = new RegExp('', 'gi');
        result.text = result.text.replaceAll(',',  column[tbsGridNames.column.thousandChar]);
        result.text = result.text.replaceAll('.',  column[tbsGridNames.column.decimalChar]);
        if (column[tbsGridNames.column.currencyChar]) result.text = column[tbsGridNames.column.currencyChar] + result.text
        return result;
    }

    getFormatDate(column, value) {
        let grid = this;
        let result = {};
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
        let format = column[tbsGridNames.column.format];

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
     * User Event Functions
     */

    tbs_click(grid, row, userFunction) { let val = userFunction(grid, row); return val; }
    tbs_dblclick(grid, row, userFunction) { let val = userFunction(grid, row); return val; }
    tbs_edit(grid, row, state, userFunction) { let val = userFunction(grid, row, state); return val; }
    tbs_rowBounding(grid, element, row, userFunction) { let val = userFunction(grid, element, row); return val; }
    tbs_cellBounding(grid, element, row, userFunction) { let val = userFunction(grid, element, row); return val; }

    click(userFunction) { this.user_click = userFunction;}
    dblclick(userFunction) { this.user_dblclick = userFunction;}
    edit(userFunction) { this.user_edit = userFunction;}
    rowBounding(userFunction) { this.user_rowBounding = userFunction;}
    cellBounding(userFunction) { this.user_cellBounding = userFunction;}

    /**
     * User Event : Paging
     */

    tbs_clickPageFirst(grid, pageIndex, selectedPageCount, userFunction) {
        let val = userFunction(grid, pageIndex, selectedPageCount);
        return val;
    }
    tbs_clickPagePrev(grid, pageIndex, selectedPageCount, userFunction) {
        let val = userFunction(grid, pageIndex, selectedPageCount);
        return val;
    }
    tbs_clickPageIndex(grid, pageIndex, selectedPageCount, userFunction) {
        let val = userFunction(grid, pageIndex, selectedPageCount);
        return val;
    }
    tbs_clickPageNext(grid, pageIndex, selectedPageCount, userFunction) {
        let val = userFunction(grid, pageIndex, selectedPageCount);
        return val;
    }
    tbs_clickPageLast(grid, pageIndex, selectedPageCount, userFunction) {
        let val = userFunction(grid, pageIndex, selectedPageCount);
        return val;
    }

    clickPageFirst(userFunction) { this.user_clickPageFirst = userFunction; }
    clickPagePrev (userFunction) { this.user_clickPagePrev  = userFunction; }
    clickPageIndex(userFunction) { this.user_clickPageIndex = userFunction; }
    clickPageNext (userFunction) { this.user_clickPageNext  = userFunction; }
    clickPageLast (userFunction) { this.user_clickPageLast  = userFunction; }

    /**
     *  Group Functions
     */

    showGroupPanel() { this.classGroup.showGroupPanel(); }
    hideGroupPanel() { this.classGroup.hideGroupPanel(); }
    setGroupColumns(groupColumns) { this.classGroup.setGroupColumns(groupColumns); }

    /**
     * Tree Functions
     */

    setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
    setTreeSortColumn(sortColumn) { this.classTree.setTreeSortColumns(sortColumn); }

    /**
     *  Panel10 Functions
     */

    showToolbarPanel() { this.classPanel10.showToolbarPanel(); }
    hideToolbarPanel() { this.classPanel10.hideToolbarPanel(); }

    showToolbarButtons(buttonType) { this.classPanel10.showToolbarButtons(buttonType); }
    hideToolbarButtons(buttonType) { this.classPanel10.hideToolbarButtons(buttonType); }

    showFilterPanel() { this.classFilter.showFilterPanel(); }
    hideFilterPanel() { this.classFilter.hideFilterPanel(); }

    showSortPanel() { this.classSort.showSortPanel(); }
    hideSortPanel() { this.classSort.hideSortPanel(); }

    /**
     *  TbsGrid Config
     */

    setGridConfig(tbsGridConfig) { this.gridConfig = tbsGridConfig;	}

    /**
     * Column Functions
     */

    setFixedColumn(fixedColumnIndex) { this.classColumn.setFixedColumn(fixedColumnIndex); }
    removeFixedColumn() { this.classColumn.removeFixedColumn(); }

    /**
     * Display grid
     */

    apply() {
        let selector = '#' + this.gridId;
        let grid = this;

        let topRowIndex = grid.getFirstRowIndex();
        grid.classPanel20.setDataPanel(topRowIndex);
        grid.classPanel30.setDataPanel(topRowIndex);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    }

    /**
     * Header Columns API.
     */

    getHeaderColumn(rowIndex, columnIndex) { return grid.classColumn.getHeaderColumn(rowIndex, columnIndex); }
    getHeaderColumnByNumber(num) { return grid.classColumn.getHeaderColumnByNumber(num); }

    /**
     * Columns API.
     */

    getColumn(columnName) { return this.copyJson(this.classColumn.getColumn(columnName)); }
    getColumnName(columnIndex) { return this.classColumn.getColumnName(columnIndex); }
    getColumnIndex(columnName) { return this.classColumn.getColumnIndex(columnName); }

    getColumnByIndex(columnIndex) { return this.copyJson(this.classColumn.getColumnByIndex(columnIndex)); }
    getColumns() { return this.copyJson(this.classColumn.getColumns()); }
    setColumn(columnName, property, value) { this.classColumn.setColumn(columnName, property, value);}
    setColumnByType(columnType, property, value) {this.classColumn.setColumnByType(columnType, property, value);}
    addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) { this.classColumn.addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType);}
    removeColumn(targetRowIndex, targetColumnIndex) { this.classColumn.removeColumn(targetRowIndex, targetColumnIndex); }
    setHeaderProperty(rowIndex, colIndex, property, value) { this.classColumn.setHeaderProperty(rowIndex, colIndex, property, value); }

    /**
     * Filter Columns
     */
    getFilterColumn(columnName) {
        let grid = this.grid;
        return grid.filter_column_table.selectRow(tbsGridNames.column.name, columnName);
    }
    getFilterColumnName(colIndex) {
        let grid = this.grid;
        return grid.filter_column_table.selectValue(colIndex, tbsGridNames.column.name);
    }
    getFilterColumnIndex(columnName) {
        let grid = this.grid;
        return grid.filter_column_table.selectRowIndex(tbsGridNames.column.name, columnName);
    }

    /**
     * Main Functions
     */

    createHtml() {
        let selector = '#' + this.gridId;
        let grid = this;

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
    setToolbar(toolbar) {
        let grid = this;

        if (toolbar == undefined) return;
        grid.toolbar_visible = (toolbar.visible != undefined) ? grid.toolbar_visible = toolbar.visible : grid.toolbar_visible;
    }
    setGrid(columns, options = {}) {
        let grid = this;

        grid.createOption(options);

        grid.columns = grid.copyJson(columns); //important

        grid.classColumn.updateColumns(grid.columns); // add columns(first) or add column

        grid.classColumn.updateColumnTable();

        grid.classColumn.createHeaderColumns();

        grid.classColumn.createHeaderColumnTable();

        grid.createGrid(grid.column_table.data);
    }
    createGrid(column) {
        let selector = '#' + this.gridId;
        let grid = this;

        this.createHtml();
        this.createTable10();
        this.createTable80();
        this.createTable90();

        this.createTable20();
        this.createTable70();
        this.createTable40();
        this.createTable50();

        this.classScroll.setPanelSize();
        this.createTable30();

        this.horizontalScroll.setScroll(grid.code_horizontal);
        this.tbs_addEventAll();
    }
    updateGrid(column) {
        let selector = '#' + this.gridId;
        let grid = this;

        this.createTable20();
        this.createTable70();
        this.createTable40();
        this.createTable50();

        this.classScroll.setPanelSize();
        this.createTable30();

        this.horizontalScroll.setScroll(grid.code_horizontal);;
        //this.tbs_addEventAll();
    }

    createTable(panelName, startRowIndex, rowCount) {
        let selector = '#' + this.gridId;
        let grid = this;

        let table = grid.classDom.createTable();

        /**
         * table head
         */

        grid.createTableHead(panelName, table);

        /**
         * table body
         */

        let tbody = document.createElement('tbody');
        for (let rowIndex= startRowIndex; rowIndex < rowCount; rowIndex++) grid.createTableRow(panelName, tbody);
        table.appendChild(tbody);

        document.querySelector(selector + ' .tbs-grid-' + panelName).innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-' + panelName).appendChild(table);
    }

    createTable20() {
        let grid = this;

        grid.createTable('panel21', 0, this.headerRowCount);
        grid.createTable('panel22', 0, this.headerRowCount);
        grid.createTable('panel20', 0, this.headerRowCount);

        this.classPanel20.setDataPanel();
    }
    createTable30() {
        let grid = this;
        let pageRowCount = this.pageRowCount;

        grid.createTable('panel31', 0, grid.pageRowCount);
        grid.createTable('panel32', 0, grid.pageRowCount);
        grid.createTable('panel30', 0, grid.pageRowCount);
    }
    createTable40() {
        let grid = this;

        if (grid.top_column_table.count() == 0) return;

        grid.createTable('panel41', 0, 1);
        grid.createTable('panel42', 0, 1);
        grid.createTable('panel40', 0, 1);

    }
    createTable50() {
        let grid = this;

        if(grid.footer_column_table.count() == 0) return;

        grid.createTable('panel51', 0, 1);
        grid.createTable('panel52', 0, 1);
        grid.createTable('panel50', 0, 1);

    }
    createTable70() {
        //let selector = '#' + this.gridId;
        let grid = this;

        grid.createTable('panel71', 0, 2);
        grid.createTable('panel72', 0, 2);
        grid.createTable('panel70', 0, 2);
    }
    createTable10() {
        let selector = '#' + this.gridId;
        let grid = this;

        let panel10 = document.querySelector(selector + ' .tbs-grid-panel10');
        panel10.classList.add('tbs-grid-show');
    }
    createTable80() {
        let selector = '#' + this.gridId;
        let grid = this;

        let div = document.createElement('div');
        div.className = 'tbs-grid-panel-bar';

        let span = document.createElement('span');
        span.className = 'tbs-grid-panel-bar-span';
        span.textContent = grid.getConfigLabel('group_placeholder');
        div.appendChild(span);
        //document.querySelector(selector + ' .tbs-grid-panel80').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-panel80').appendChild(div);
    }
    createTable90() {
        let selector = '#' + this.gridId;
        let grid = this;

        //if (grid.options[grid.option_showSortPanel] != true) return;

        let div = document.createElement('div');
        div.className = 'tbs-grid-panel-bar';

        let span = document.createElement('span');
        span.className = 'tbs-grid-panel-bar-span';
        span.textContent = grid.getConfigLabel('sort_placeholder');
        div.appendChild(span);
        document.querySelector(selector + ' .tbs-grid-panel90').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-panel90').appendChild(div);
    }

    createTableHead(panelName, table) {
        let grid = this;
        let s = panelName.substring(6);
        if (s == '1') grid.createTableHead1(panelName, table);
        else if (s == '2') grid.createTableHead2(panelName, table);
        else grid.createTableHead0(panelName, table);
    }
    createTableHead1(panelName, table) {
        let grid = this;

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        for (let i = 0, len = grid.info_table.count(); i < len; i++) {
            let dataRow = grid.info_table.data[i];

            let th = document.createElement('th');
            th.style.width = dataRow[tbsGridNames.column.width] + 'px';
            th.style.display = dataRow[tbsGridNames.column.visible] ? '' : 'none';
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
    }
    createTableHead2(panelName, table) {
        let selector = '#' + this.gridId;
        let grid = this;

        return grid.createTableHead0(panelName, table);
    }
    createTableHead0(panelName, table) {
        let selector = '#' + this.gridId;
        let grid = this;

        let thead = document.createElement('thead');
        let tr = document.createElement('tr');
        let sumWidth = 0;
        for (let i = 0, len = grid.column_table.count(); i < len; i++) {
            let column = grid.column_table.data[i];
            let th = document.createElement('th');
            th.style.width = (column[tbsGridNames.column.visible] == true) ? parseInt(column[tbsGridNames.column.width]) + 'px' : '0px';
            th.style.display = (column[tbsGridNames.column.visible] == true) ? '' : 'none';
            sumWidth += (this.column_table.data[i][tbsGridNames.column.visible] == true) ? parseInt(column[tbsGridNames.column.width]) : 0;
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
        return sumWidth;
    }

    createTableRow(panelName, tbody) {
        let selector = '#' + this.gridId;
        let grid = this;

        let tr = document.createElement('tr');
        if (panelName == 'panel20' || panelName == 'panel22') {
            tr.style = 'height:' + this.headerRowHeight + 'px';
            for (let i = 0, len = this.headerColumnTable[0].length; i < len; i++) {
                let td = document.createElement('td');

                td.classList.add('tbs-grid-cell');
                td.style.display = 'none';

                let div = document.createElement('div');
                div.classList.add('tbs-grid-cell-div');
                td.appendChild(div);

                let span = document.createElement('span');
                span.classList.add('tbs-grid-cell-span');
                div.appendChild(span);

                let spanSort = document.createElement('span');
                spanSort.classList.add('tbs-grid-cell-span-sort');
                div.appendChild(spanSort);

                let reSizeDiv = document.createElement('div');
                reSizeDiv.classList.add('tbs-grid-cell-resize');

                let sortDiv = document.createElement('div');
                sortDiv.classList.add('tbs-grid-cell-sort');

                td.appendChild(div);
                td.appendChild(reSizeDiv);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        else if (panelName.substring(6) == '1') {
            tr.style = 'display:;height:' + grid.rowHeight + 'px';

            for (let i = 0; i < grid.info_table.count(); i++) {
                let column = grid.info_table.data[i];
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbsGridNames.column.width] + 'px';
                td.dataset.name = column[tbsGridNames.column.name];
                td.dataset.cellIndex = i;

                let div = grid.classDom.createElementCellDiv();
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

            for (let i = 0; i < grid.column_table.count(); i++) {
                let column = grid.column_table.data[i];
                let td = document.createElement('td');
                td.classList.add('tbs-grid-cell');
                td.style.width = column[tbsGridNames.column.width] + 'px';

                if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62' || panelName == 'panel72') {
                    td.style.display = 'none';
                }

                td.dataset.name = column[tbsGridNames.column.name];
                td.dataset.cellIndex = i;

                let div = grid.classDom.createElementCellDiv();
                let spanText = grid.classDom.createElementCellText();
                div.appendChild(spanText);
                td.appendChild(div);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }

    tbs_setFrozenRow(fixedRowIndex, fixedRowCount) {
        // role : Exist rowIndex in Html Table
        let selector = '#' + this.gridId;
        let grid = this;

        //if (fixedRowIndex >= this.pageRowCount) { this.fixedRowIndex = -1; return; }
        const fn_getTableRowIndex = function (rowIndex) {
            let result = 0;
            let tableRows= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display:"])');
            for (let i = 0, len = tableRows.length; i < tableRows.length; i++) {
                let tableRow = tableRows[i]
                let index = parseInt(tableRow.childNodes[0].dataset.rowIndex);
                if (index == rowIndex) {
                    result = tablesRow.rowIndex;
                    break;
                }
            }
            return result;
        }
        if (grid.null(fixedRowCount)) {
            fixedRowCount = fn_getTableRowIndex(rowIndex);
        }
        if (fixedRowIndex + 1 > this.getRowCount() && fixedRowCount > grid.pageRowCount) {
            this.fixedRowIndex = -1;
            this.fixedRowCount = 0;
            return;
        }
        this.fixedRowIndex = fixedRowIndex;
        this.fixedRowCount = fixedRowCount;

        let table31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
        let table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

        //table31 clone
        let copyTable= table31.cloneNode(true);
        let trList= copyTable.querySelectorAll('tbody tr');

        for (let i = trList.length - 1; i >= 0; i--) {
            if (i > fixedRowIndex) copytable.removeRow(-1);
        }
        panel61.innerHTML = '';
        panel61.appendChild(copyTable);

        //table30 clone
        copyTable   = table30.cloneNode(true);
        trList  = copyTable.querySelectorAll('tbody tr');

        for (let i = trList.length - 1; i >= 0; i--) {
            if (i > fixedRowIndex) copytable.removeRow(-1);
        }

        panel60.innerHTML = '';
        panel60.appendChild(copyTable);

        if (this.fixedColumnIndex != -1) {
            grid.tbs_createFrozenColumnTable(table30, panel62, fixedColumnIndex, 'panel62');
        }

        //this.event_select('fixRight');
        //this.event_select('fixLeft');

        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(grid.fixedRowIndex);
    }
    tbs_removeFrozenRow() {
        let selector = '#' + this.gridId;
        let grid = this;

        this.fixedRowIndex = -1;
        this.fixedRowCount = 0;

        let panel61= document.querySelector(selector + ' .tbs-grid-panel61');
        let panel60= document.querySelector(selector + ' .tbs-grid-panel60');

        panel61.childNodes[0].innerHTML = '';
        panel60.childNodes[0].innerHTML = '';

        this.classScroll.setPanelSize();
        this.horizontalScroll.setScroll(grid.code_horizontal);;
        this.verticalScroll.setScroll(grid.code_vertical);
        this.classPanel30.setDataPanel(0);
    }
    getTextWidth(canvas, text, fontSize, fontFamily) {
        let selector = '#' + this.gridId;
        let grid = this;

        let context = canvas.getContext("2d");
        context.fontSize = fontSize;
        context.fontFamily = fontFamily;
        let metrics = context.measureText(text);
        return metrics.width;
    };
    getTextWidth2(context, text) {
        let selector = '#' + this.gridId;
        let grid = this;

        let metrics = context.measureText(text);
        return metrics.width;
    };
    setColumnAutoWidth(){
        let selector = '#' + this.gridId;
        let grid = this;

        let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
        let arr = [];
        for (let x = 0, len = grid.column_table.count(); x < len; x++) arr[x] = 0;

        let fontSize = grid.getConfigFont('fontSize');
        let fontFamilty = grid.getConfigFont('fontFamily');

        for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                if (grid.headerColumnTable[i][x][tbsGridNames.column.kind] == 'column') {
                    let width = parseInt(grid.getTextWidth(canvas, grid.headerColumnTable[i][x][tbsGridNames.column.text], fontSize, fontFamilty));
                    if (width >= arr[x]) {
                        arr[x] = width;
                    }
                }
            }
        }
        for (let i = 0, len = grid.view_table.count(); i < len; i++){
            for (let x = 0, len2 = grid.column_table.count(); x < len2; x++){
                let columnName = grid.classColumn.getColumnName(x);
                let column = grid.classColumn.getColumn(columnName);
                let val = grid.getValueByIndex(i, x);
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
        let grid = this;

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
                document.querySelector(selector + ' .tbs-grid-input').style.height = rowHeight + 'px';
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
        let grid = this;

        let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';

        grid.classPage.pageRowcount = grid.classPage.options.pageRowCount;
    }
    setGridModePagenation() {
        let selector = '#' + this.gridId;
        let grid = this;

        let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
        page.style.display = '';
    }
    setData(data, openDepth = 0, isFirst = true) {
        let selector = '#' + this.gridId;
        let grid = this;

        if (grid.grid_mode == tbsGridTypes.GridMode.group) grid.classGroup.setGroupData(data, openDepth, isFirst);
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree) grid.classTree.setTreeData(data, openDepth, isFirst);
        else grid.setGridData(data);
    }
    setGridMode(gridMode) {
        let selector = '#' + this.gridId;
        let grid = this;

        grid.grid_mode = grid.trim(gridMode);

        if (grid.grid_mode == tbsGridTypes.GridMode.page) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePage();
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.pagination) {
            grid.classPanel10.hideToolbarButtons('group');
            grid.setGridModePagenation();
        }
        else if (grid.grid_mode == tbsGridTypes.GridMode.tree) {}
    }
    setGridData(data) {
        let selector = '#' + this.gridId;
        let grid = this;

        if (data == undefined) return;

        this.data_insert = [];
        this.data_update = [];
        this.data_delete = [];

        this.data_select_panel30 = [];
        this.data_select_panel31 = [];

        for (let i = 0, len = data.length; i < len; i++) {
            let dataRow = data[i];

            let source = {};
            let columns = grid.column_table.select();
            for (let x = 0, len = columns.length; x < len; x++) {
                let column = columns[x];
                let columnName  = column[tbsGridNames.column.name];
                let val = this.null(dataRow[columnName]) ? null : this.getFormatValue(column, dataRow[columnName]);

                source[columnName] = val;
            }

            this.source_table.insert(source);
            this.view_table.insert(grid.copyJson(source));
            if (grid.grid_mode == tbsGridTypes.GridMode.page) this.page_table.insert(grid.copyJson(source));
        }

        /* create top_data */
        grid.classTop.setTopData();

        /* create footer_data */
        grid.classFooter.setFooterData();

        if (this.isAutoWidthColumn()) this.setColumnAutoWidth();

        document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
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
        let grid = this;

        let data = this.view_table.data;
        this.data_select_panel30 = [];  // select color : value 0, 1
        this.data_select_panel31 = [];	// view - filter

        for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
            let itemSelect = {};
            let itemLeftSelect = {};
            let itemLeftView = {};

            itemSelect[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];
            itemSelect = new Uint8ClampedArray([]); //new

            itemLeftView[tbsGridNames.column.mode] = ''; //insert, update, delete
            itemLeftView[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];

            itemLeftSelect[tbsGridNames.column.mode] = 0; //insert, update, delete
            itemLeftSelect[tbsGridNames.column.rowId] = data[rowIndex][tbsGridNames.column.rowId];

            this.data_select_panel30.push(itemSelect);
            this.data_select_panel31.push(itemLeftSelect);
        }
        this.classRange.removeRange(0, -1);
        this.classPanel30.setDataPanel(0);
    }

    /**
     * Data Value, Text
     */

    getValue(rowIndex, columnName, table) {
        let grid = this;

        if (grid.null(table)) table = grid.view_table;
        let column = this.classColumn.getColumn(columnName);
        let columnType = column[this.column_type];

        let val = table.data[rowIndex][columnName];

        if (columnType == tbsGridTypes.CellType.number) return Number(val);
        else return val;
    }

    getValueByIndex(rowIndex, colIndex, table) {
        let columnName = this.classColumn.getColumnName(colIndex);
        return this.getValue(rowIndex, columnName, table);
    }

    getText(rowIndex, columnName, table) {
        let grid = this;

        let column = this.classColumn.getColumn(columnName);
        let val = this.getValue(rowIndex, columnName, table);
        return this.getFormatText(column, val);
    }

    getTextByIndex(rowIndex, colIndex, table) {
        let columnName = this.classColumn.getColumnName(colIndex, table);
        return this.getText(rowIndex, columnName, table);
    }

    setValue(rowIndex, columnName, value) {
        let grid = this;

        let cellIndex = this.classColumn.getColumnIndex(columnName);
        let oldValue = this.view_table.data[rowIndex][columnName];
        let mode = this.view_table.data[rowIndex][tbsGridNames.column.mode];

        let result = this.getFormat(this.column_table.selectRowIndex(cellIndex), value);
        if (mode == 'I') {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);

                let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);

                grid.source_table.updateByRowId(tbsGridNames.column.rowId, columnName, result.value);
                grid.source_table.updateByRowId(tbsGridNames.column.rowId, tbsGridNames.column.mode, 'I');
            }
        }
        else {
            if (oldValue != result.value) {
                grid.view_table.updateByRowIndex(rowIndex, columnName, result.value);
                grid.view_table.updateByRowIndex(rowIndex, tbsGridNames.column.mode, 'U');

                let rowId = grid.view_table.selectValue(rowIndex, tbsGridNames.column.rowId);

                grid.source_table.updateByRowId(tbsGridNames.column.rowId, columnName, result.value);
                grid.source_table.updateByRowId(tbsGridNames.column.rowId, tbsGridNames.column.mode, 'I');
            }
        }
    }

    setValueByIndex(rowIndex, cellIndex, value) {
        rowIndex = parseInt(rowIndex);
        cellIndex = parseInt(cellIndex);
        let columnName = this.classColumn.getColumnName(cellIndex);
        this.setValue(rowIndex, columnName, value);
    }

    setComboData(keyName, valueName, comboData) {
        let grid = this;

        let item = {};
        item['key']  = keyName;
        item['val']  = valueName;
        item['data'] = comboData;
        return item;
    }


    /**
     * Row functions
     */

    getPageRowCount(panelName) {
        let grid = this;

        if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') return grid.fixedRowCount;
        else return grid.pageRowCount;
    }

    getTopRowIndex(panelName, topRowIndex) {
        // function : Validate Top rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : topRowIndex
        let selector = '#' + this.gridId;
        let grid = this;

        if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
            if (this.fixedRowIndex != -1) {
                let topRowIndex2 = topRowIndex - (this.fixedRowIndex + 1);
                let rowCount = this.getRowCount() - (this.fixedRowIndex + 1);

                if (this.pageRowCount > this.pageIntRowCount) {
                    if (topRowIndex2 > (rowCount - this.pageRowCount + 1)) {
                        topRowIndex2 = rowCount - this.pageRowCount;
                        if (topRowIndex2 < 0) topRowIndex2 = 0;
                    }
                }
                else {
                    if (topRowIndex2 > (rowCount - this.pageRowCount)) {
                        topRowIndex2 = rowCount - this.pageRowCount;
                        if (topRowIndex2 < 0) topRowIndex2 = 0;
                    }
                }
                if (topRowIndex2 < 0) topRowIndex2 = 0;
                topRowIndex = topRowIndex2 + (this.fixedRowIndex + 1);
            }
            else {
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
        }
        else if (panelName == 'panel60') {
            let rowCount = this.fixedRowCount;
            if (topRowIndex > (rowCount - this.fixedRowCount)) {
                topRowIndex = rowCount - this.fixedRowCount;
                if (topRowIndex < 0) topRowIndex = 0;
            }
            if (topRowIndex < 0) topRowIndex = 0;
        }
        return topRowIndex;
    }

    getBottomRowIndex(panelName, topRowIndex) {
        // function : Validate Bottom rowIndex
        //
        // @panelName   : panel area name
        // @topRowIndex : topRowIndex
        //
        // @return : bottomRowIndex
        let selector = '#' + this.gridId;
        let grid = this;
        let bottomRowIndex = 0;

        if (this.fixedRowIndex != -1) {
            if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
                let rowCount = this.getRowCount() - (this.fixedRowIndex + 1);
                let displayTopRowIndex = topRowIndex - (this.fixedRowIndex + 1);
                bottomRowIndex = displayTopRowIndex + this.getPageRowCount(panelName) - 1;
                if (bottomRowIndex > rowCount - 1) bottomRowIndex = rowCount - 1;
                bottomRowIndex = bottomRowIndex + (this.fixedRowIndex + 1);
                //console.log(`getBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
            }
            else if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') {
                bottomRowIndex = topRowIndex + this.fixedRowCount - 1;
                if (bottomRowIndex > this.fixedRowCount - 1) bottomRowIndex = this.fixedRowCount - 1;
                //console.log(`getBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
            }
        }
        else {
            bottomRowIndex = topRowIndex + this.pageRowCount - 1;
            if (bottomRowIndex > this.getRowCount() - 1) bottomRowIndex = this.getRowCount() - 1;
        }
        return bottomRowIndex;
    }

    createRow(row) {
        let selector = '#' + this.gridId;
        let grid = this;

        let columns = this.column_table.data;
        this.maxRowId = this.maxRowId + 1;
        let rowId = this.maxRowId;

        let source = {};
        source[tbsGridNames.column.rowId] = rowId;
        source[tbsGridNames.column.mode] = 'I';

        let data30 = {};
        view[tbsGridNames.column.rowId] = rowId;
        view[tbsGridNames.column.mode] = 'I';

        for (let i = 0, len = columns.length; i < len; i++) {
            let column = columns[i];
            let columnName = column[tbsGridNames.column.name];
            source[columnName] = this.null(row[columnName]) ? null : row[columnName];
            view[columnName]   = this.null(row[columnName]) ? null : row[columnName];
        }
        return { source : source, view : view };
    }

    getRowCount () {
        return this.view_table.count();
    }

    getRow(rowIndex) {
        let grid = this;
        if (rowIndex < 0 || rowIndex >= grid.view_table.count()) return null;
        return grid.copyJson(grid.view_table.data[rowIndex]);
    }

    getRows(startRowIndex = 0, endRowIndex = -1) {
        let grid = this;

        let result = [];
        let rows = this.view_table.data;
        if (arguments.length == 0) {
            rows.map(row => result.push(grid.copyJson(row)));
        }
        else {
            if (endRowIndex == -1) endRowIndex = rows.length - 1;
            for (let i = startRowIndex; i <= endRowIndex; i++) {
                let row = rows[i];
                result.push(grid.copyJson(row));
            }
        }
        return result;
    }

    getTreeRowByRowId(rowId) {
        let grid = this;
        return grid.getRowByRowId(rowId, grid.tree_table);
    }

    getSourceRowByRowId(rowId) {
        let grid = this;
        return grid.getRowByRowId(rowId, grid.source_table);
    }

    getRowByRowId(rowId, table) {
        let grid = this;

        if (grid.null(table)) table = grid.view_table;
        return table.selectRow(tbsGridNames.column.rowId, rowId);
    }

    getRowIndexByRowId(rowId) {
        let result = {};
        let grid = this;
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            if (this.view_table.data[i][tbsGridNames.column.rowId] == rowId) {
                result = i;
                break;
            }
        }
        return result;
    }

    getSelectedRow() {
        let data = this.getSelectedRows();
        return (data.length > 0) ? data[0] : null;
    }

    getSelectedRows() {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = [];
        let len = grid.view_table.count();
        for (rowIndex = 0; rowIndex < len; rowIndex++) {
            let item = {};
            item[tbsGridNames.column.rowId] = grid.view_table.data[rowIndex][tbsGridNames.column.rowId];
            item[tbsGridNames.column.mode]  = grid.view_table.data[rowIndex][tbsGridNames.column.mode];
            item.rowIndex = rowIndex;
            item = grid.copyJson(grid.view_table.data[rowIndex]);
            if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(item);
        }
        return result;
    }

    getCheckedRows() {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = [];
        for (let i = 0, len = this.view_table.count(); i < len; i++) {
            let row = this.view_table.data[i];
            if (row.check) {
                result.push(JSON.parse(JSON.stringify(row)));
            }
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
            item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
            item[tbsGridNames.column.mode]  = row[tbsGridNames.column.mode];
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
                item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
                item[tbsGridNames.column.mode] = row[tbsGridNames.column.mode];
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
            if (row[tbsGridNames.column.mode] == 'I') {
                let item = JSON.parse(JSON.stringify(row));
                item[tbsGridNames.column.rowId] = row[tbsGridNames.column.rowId];
                item[tbsGridNames.column.mode ] = row[tbsGridNames.column.mode];
                result.push(item);
            }
        }
        return result;
    }

    getFirstDisplayRowIndex(panelName = '') {
        let selector = '#' + this.gridId;
        let grid = this;

        if (this.view_table.count() == 0) return -1;

        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        let displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);

        if (isNaN(displayRowIndex)) displayRowIndex = 0;
        return displayRowIndex;
    }

    getFirstRowIndex(panelName = '') {
        // return : topRowIndex
        let selector = '#' + this.gridId;
        let grid = this;

        if (this.view_table.count() == 0) return -1;

        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
        let topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);

        if (panelName == '') {
            if (grid.fixedRowIndex != -1) {
                if (isNaN(topRowIndex)) topRowIndex = grid.fixedRowIndex + 1;
                return topRowIndex;
            }
            else {
                if (isNaN(topRowIndex)) topRowIndex = 0;
                return topRowIndex;
            }
        }
    }

    getLastRowIndex() {
        let selector = '#' + this.gridId;
        let grid = this;

        if (this.view_table.count() == 0) return -1;
        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        let topRowIndex = this.getFirstRowIndex();
        return topRowIndex + trList.length - 1;
    }

    getLastTableRowIndex() {
        let selector = '#' + this.gridId;
        let grid = this;

        let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
        return parseInt(trList.length) - 1;
    }

    getSelectedRowIndex() {
        let result = [];
        for (rowIndex = 0, len = this.view_table.count(); rowIndex < len; rowIndex++) {
            if (this.isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
        }
        return result;
    }

    addRow(row, type = 'bottom') {
        //type : top, bottom, up, down
        let selector = '#' + this.gridId;
        let grid = this;

        let columns = this.column_table.data;
        let rowId = this.maxRowId + 1;
        this.maxRowId = rowId;

        let json = this.createRow(row);
        let source = json.source;
        let data30 = json.data30;

        let rowIndexList = this.getSelectedRowIndex();
        if (rowIndexList.length == 0) type = 'bottom';

        if (type == 'top') {
            this.source_table.data.unshift(source);
            this.view_table.data.unshift(data30);

            let topRowIndex = 0;

            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(topRowIndex, topRowIndex);
            this.classPanel30.setDataPanel(topRowIndex);
            return;
        }
        if (type == 'bottom') {
            this.source_table.insert(source);
            this.view_table.insert(data30);

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
            return;
        }
        if (type == 'up') {
            let minRowIndex = rowIndexList[0];
            this.source_table.insertBefore(source, minRowIndex);
            this.view_table.insertBefore(data30, minRowIndex);

            let lastRowIndex = this.view_table.count() - 1;
            let topRowIndex = this.getFirstRowIndex();

            this.verticalScroll.setScroll(grid.code_vertical);
            this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
            this.classRange.removeRange(0, -1);
            let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
            this.classPanel30.setDataPanel(_topRowIndex);
            return;
        }
        if (type == 'down') {
            let minRowIndex = rowIndexList[0];
            let addRowIndex = minRowIndex + 1;
            if (minRowIndex == this.view_table.count() - 1) {
                this.source_table.insert(source);
                this.view_table.insert(data30);
                addRowIndex = minRowIndex + 1;
            }
            else {
                this.source_table.insertBefore(source, addRowIndex);
                this.view_table.insertBefore(data30, addRowIndex);
            }

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

    removeRows(rows) {
        // let rows = this.getSelectedRows();
        let selector = '#' + this.gridId;
        let grid = this;

        if (this.null(rows) || rows.length == 0) return;

        let data = this.view_table.select();

        // before delete, find next, prev rowid (default. next rowid)
        let prevRowId = -1;
        let nextRowId = -1;
        let nextRowIndex = -1;

        for (let i = 0; i < data.length; i++) { 	// find next rowIndex
            if (data[i][tbsGridNames.column.rowId] == rows[rows.length - 1][tbsGridNames.column.rowId]) { nextRowIndex = i + 1; break; }
        }

        nextRowIndex = (nextRowIndex > data.length - 1) ? nextRowIndex - 1 : nextRowIndex;
        nextRowId = data[nextRowIndex][tbsGridNames.column.rowId];

        //Data 삭제
        data = this.source_table.data;
        for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) { data.splice(i, 1); break; } } }

        data = this.view_table.select();
        for (let i = data.length - 1; i >= 0; i--) {
            for (let x = rows.length - 1; x >= 0; x--) {
                if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) { data.splice(i, 1); break; }
            }
        }
        data = this.data_delete;
        for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][tbsGridNames.column.rowId] == rows[x][tbsGridNames.column.rowId]) { data.splice(i, 1); break; } } }
        for (let i = 0; i < rows.length; i++) {
            if (rows[i][tbsGridNames.column.mode] == '' || rows[i][tbsGridNames.column.mode] == 'U') { rows[i][tbsGridNames.column.mode] = 'D'; data.push(rows[i]); }
        }
        //==============================================
        let deleteFirstRowIndex = rows[0].rowIndex;
        let topRowIndex = this.getFirstRowIndex();
        //==============================================
        this.refreshRefData();
        //==============================================
        data = this.view_table.select();
        let realStartRowIndex = deleteFirstRowIndex;
        if (realStartRowIndex < 0) realStartRowIndex = 0;
        if (realStartRowIndex > this.view_table.count() - 1) {
            realStartRowIndex = this.view_table.count() - 1;
        }
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(realStartRowIndex, realStartRowIndex, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);

        grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());

        if (grid.pageRowCount > grid.pageIntRowCount) {
            let lastRowIndex = grid.getLastRowIndex();
            if (realStartRowIndex == lastRowIndex) {
                grid.classScroll.setBarPositionByDirection('down');
                grid.verticalScroll.setScroll(grid.code_vertical);
                grid.classScroll.setBarPosition(grid.code_vertical, grid.getFirstRowIndex());

            }
        }
    }

    /**
     * Range Functiopns
     */

    setRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) {
        let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2);
        this.classPanel30.setDataPanel(_topRowIndex);
    }

    /**
     * Columns
     */

    setColumn(columnName, columnProperty, value) { this.classColumn.setColumn(columnName, columnProperty, value); }
    setColumnByType(columnType, columnProperty, value) { this.classColumn.setColumnByType(columnType, columnProperty, value);}
    setTopColumns(topColumns) { this.classTop.setTopColumns(topColumns); }
    setFooterColumns(footerColumns) { this.classFooter.setFooterColumns(footerColumns); }

    /**
     * Options
     */

    createOption(options) {
        let grid = this;

        grid.setOptions(options);
    }

    setOption(optionName, optionValue) {
        let grid = this;
        grid.options[optionName] = optionValue;
    }

    setOptions(options) {
        let grid = this;
        for (let key in options) grid.setOption(optionMenu, key);
    }

    /**
     * Page
     */

    setPageOption(optionName, optionValue) { this.classPage.setPageOption(optionName, optionValue); }

    /**
     * Is Functions
     *
     */

    isSortableColumn(columnName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = false;
        //let column = grid.classColumn.getColumn(columnName);

        // if (column[tbsGridNames.column.sortable] == true)  result = true;
        // else if (column[tbsGridNames.column.sortable] == false) result = false;
        // else {
        result = grid.options[tbsGridNames.column.sortable];
        //}
        return result;
    }

    isResizableColumn(columnName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = false;
        //let column = grid.classColumn.getColumn(columnName);

        // if (column[tbsGridNames.column.resizable] == true)  result = true;
        // else if (column[tbsGridNames.column.resizable] == false) result = false;
        // else {
        result = grid.options[tbsGridNames.column.resizable];
        // }
        return result;
    }

    isMovableColumn(columnName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = false;
        //let column = grid.classColumn.getColumn(columnName);

        // if (column[tbsGridNames.column.movable] == true)  result = true;
        // else if (column[tbsGridNames.column.movable] == false) result = false;
        // else {
        result = grid.options[tbsGridNames.column.movable];
        // }
        return result;
    }

    isAutoResizableColumn(columnName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = false;
        //let column = grid.classColumn.getColumn(columnName);

        // if (column[tbsGridNames.column.autoResizable] == true)  result = true;
        // else if (column[tbsGridNames.column.autoResizable] == false) result = false;
        // else {
        result = grid.options[tbsGridNames.column.autoResizable];
        //}
        return result;
    }

    isAutoWidthColumn(columnName) {
        let selector = '#' + this.gridId;
        let grid = this;

        let result = false;
        //let column = grid.classColumn.getColumn(columnName);

        // if (column[tbsGridNames.column.autoResizable] == true)  result = true;
        // else if (column[tbsGridNames.column.autoResizable] == false) result = false;
        // else {
        result = grid.options[tbsGridNames.column.autoWidth];
        //}
        return result;
    }

    isClassName(element, className) {
        let selector = '#' + this.gridId;
        let grid = this;

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
        let grid = this;

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

        else if (panelName == 'panel61') rows = this.data_select_panel31;
        else if (panelName == 'panel62') rows = this.data_select_panel30;
        else if (panelName == 'panel60') rows = this.data_select_panel30;
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
        let grid = this;

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
        let grid = this;

        let result = false;
        let column = grid.getColumn(columnName)
        if (column[tbsGridNames.column.type] == tbsGridTypes.CellType.number) result = true;
        return result;
    }

    isFilterColumnName(columnName) {
        let grid = this;
        return grid.filter_column_table.isRow(tbsGridNames.column.name, columnName);
    }

    isLastTopRowIndex(rowIndex) {
        let grid = this;

        let result = false;
        let rowCount = grid.getRowCount() - 1;
        if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
            return true;
        }
        return result;
    }

    /**
     * get configs value
     */

    getConfigCulture (label) { return this.null(this.gridConfig.culture[label])  ? 'No Label' : this.gridConfig.culture[label]; }

    getConfigCalendar(label) { return this.null(this.gridConfig.calendar[label]) ? 'No Label' : this.gridConfig.calendar[label]; }

    getConfigFont    (label) { return this.null(this.gridConfig.font[label])     ? 'No Label' : this.gridConfig.font[label]; }

    getConfigOption  (label) { return this.null(this.gridConfig.options[label])  ? 'No Label' : this.gridConfig.options[label]; }

    getConfigLabel   (label) { return this.null(this.gridConfig.labels[label])   ? 'No Label' : this.gridConfig.labels[label]; }

    /**
     * Dom Lib
     */

    addUserClass(element, className) { grid.classDom.addUserClass(element, className); }

    removeUserClass(tableCell, className) { grid.classDom.removeUserClass(element, className); }
}


