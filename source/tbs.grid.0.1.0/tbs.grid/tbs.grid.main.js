/**
 * tbs.grid.main.js
 *
 */
TbsGrid.prototype.tbs_createFrame = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let s = '';
    s += '<div class="tbs-grid" tabindex="1" style="">';
    // Toolbar : panel10
    let isShowToolbar = (grid.options.toolbar[grid.toolbar_visible]) ? 'tbs-grid-show' : 'tbs-grid-hide';
    s += '<div class="tbs-grid-panel10 ' + isShowToolbar + '">';
        s += '<div class="tbs-grid-panel10-wrap">';
        s += '<div class="tbs-grid-panel10-filter" style="display:none;">';
            s += '<input class="tbs-grid-panel10-filter-input" placeholder="Search">';
            s += '</div>';
                s += '<div class="tbs-grid-panel10-page" style="display:none;">';
                s += '<span class="tbs-grid-panel10-page-first">◁◁</span>';
                s += '<span class="tbs-grid-panel10-page-prev">◀</span>';
                s += '<span class="tbs-grid-panel10-page-select">1</span>';
                s += '<span class="tbs-grid-panel10-page-next">▶</span>';
                s += '<span class="tbs-grid-panel10-page-last">▷▷</span>';
            s += '</div>';
            s += '<div class="tbs-grid-panel10-buttons" style="display:;">';
                s += '<div class="tbs-grid-panel10-buttons-wrap">';
                    s += '<span class="tbs-grid-panel10-buttons-filter">'+grid.getConfigLabel('toolbar_button_filter')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-filter-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-sort">'+grid.getConfigLabel('toolbar_button_sorting')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-sort-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-group">'+grid.getConfigLabel('toolbar_button_grouping')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-group-expand">'+grid.getConfigLabel('toolbar_button_expand')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-group-collapse">'+grid.getConfigLabel('toolbar_button_collapse')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-group-reset">'+grid.getConfigLabel('toolbar_button_reset')+'</span>';
                    s += '<span class="tbs-grid-panel10-buttons-fixed-column">'+grid.getConfigLabel('toolbar_button_fixedColumn')+'</span>';
                s += '</div>';
            s += '</div>';
        s += '</div>';
    s += '</div>';
    // Grouping : panel80
    let className = grid.options[grid.option_showGroupPanel] ? 'tbs-grid-show' : 'tbs-grid-hide';
    s += '<div class="tbs-grid-panel80 ' + className + '"></div>';
    // sorting  : panel90
    if (grid.options[grid.option_showSortPanel] == true) s += '<div class="tbs-grid-panel90 tbs-grid-show"></div>';
    else s += '<div class="tbs-grid-panel90 tbs-grid-hide"></div>';
    s += '<div class="tbs-grid-main">';
    s += '<div class="tbs-grid-wrap">';
        /* Header Panel */
        s += '<div class="tbs-grid-group21">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel21"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel22"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group20">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel20"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        /* Filter Panel */
        s += '<div class="tbs-grid-group71">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel71"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel72"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group70">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel70"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        /* Summary Top */
        s += '<div class="tbs-grid-group41">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel41"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel42"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group40">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel40"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        /* Fixed Row */
        s += '<div class="tbs-grid-group61">';
        s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel61"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel62"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group60">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel60"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        /* Content Panel */
        s += '<div class="tbs-grid-group31">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel31"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel32"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group30">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel30"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        /* Summary Footer */
        s += '<div class="tbs-grid-group51">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel51"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel52"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group50">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel50"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
    s += '</div>'; // end wrap
    //content vertical scroll
    s += '<div class="tbs-grid-vertical-scroll" style="display:none;">';
        s += '<div class="tbs-grid-vertical-scroll-wrap">';
            s += '<div class="tbs-grid-vertical-scroll-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-vertical-scroll-up"><div>▲</div></div>';
        s += '<div class="tbs-grid-vertical-scroll-down"><div>▼</div></div>';
    s += '</div>';
    //content horizontal scroll
    s += '<div class="tbs-grid-horizontal-scroll" style="display:none;">';
        s += '<div class="tbs-grid-horizontal-scroll-wrap">';
            s += '<div class="tbs-grid-horizontal-scroll-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-horizontal-scroll-left"><div>◀</div></div>';
        s += '<div class="tbs-grid-horizontal-scroll-right"><div>▶</div></div>';
    s += '</div>';
    //frozen vertical scroll
    s += '<div class="tbs-grid-vertical-scroll60" style="display:none;">';
        s += '<div class="tbs-grid-vertical-scroll60-wrap">';
            s += '<div class="tbs-grid-vertical-scroll6-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-vertical-scroll60-up">▲</div>';
        s += '<div class="tbs-grid-vertical-scroll60-down">▼</div>';
    s += '</div>';
    //frozen horizontal scroll
    s += '<div class="tbs-grid-horizontal-scroll32" style="display:none;">';
        s += '<div class="tbs-grid-horizontal-scroll32-wrap">';
            s += '<div class="tbs-grid-horizontal-scroll2-bar"></div>';
        s += '</div>';
        s += '<div class="tbs-grid-horizontal-scroll32-left"><div>◀</div></div>';
        s += '<div class="tbs-grid-horizontal-scroll32-right"><div>▶</div></div>';
    s += '</div>';
    /* ETC */
    s += '<div class="tbs-grid-scroll-box" style="display:none;"></div>';
    s += '<div class="tbs-grid-top-line" style="left:30000px;"></div>';
    s += '<div class="tbs-grid-bottom-line"	style="left:30000px;"></div>';
    s += '<div class="tbs-grid-left-line" style="left:30000px;"></div>';
    s += '<div class="tbs-grid-right-line" style="left:30000px;"></div>';
    s += '<div class="tbs-grid-input-panel" style="left:30000px;"></div>';
    s += '<div class="tbs-grid-canvas"></div>';
    s += '<div class="tbs-grid-panel-input">';
        s += '<input type="text" class="tbs-grid-input"  data-type="" data-click=""/>';
        s += '<img class="tbs-grid-panel-input-icon" data-type="" data-click="" />';
    s += '</div>';
    s += '<input type="text" class="tbs-grid-input-code" data-type="" data-click="" style="left:30000px;"/>';
    s += '</div>'; // end main

    s += '<div class="tbs-grid-layer" style="left:30000px;display: none;"></div>';
    s += '</div>'; // end grid

    document.querySelector(selector).innerHTML = s;
    document.querySelector(selector + ' .tbs-grid-canvas').appendChild(document.createElement('canvas'));

    this.topLineDiv    = document.querySelector(selector + ' .tbs-grid-top-line');
    this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
    this.leftLineDiv   = document.querySelector(selector + ' .tbs-grid-left-line');
    this.rightLineDiv  = document.querySelector(selector + ' .tbs-grid-right-line');
}
TbsGrid.prototype.tbs_setToolbar = function (toolbar) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (toolbar == undefined) return;
    this.toolbar_visible = (toolbar.visible != undefined) ? this.toolbar_visible = toolbar.visible : this.toolbar_visible;
}
TbsGrid.prototype.tbs_setGrid = function (columns, options = {}, headers = []) {
    let selector = '#' + this.gridId;
    let grid = this;

    this.tbs_createOption(options);
    this.tbs_createColumn(columns, headers);
    this.tbs_createGrid(grid.columns);
}
TbsGrid.prototype.tbs_createGrid = function (column) {
    let selector = '#' + this.gridId;
    let grid = this;

    this.tbs_createFrame();
    this.tbs_createTable10(); // Toolbar panel
    this.tbs_createTable80(); // Grouping panel
    this.tbs_createTable90(); // Srot panel

    this.tbs_createTable20();
    this.tbs_createTable70(); // Filter panel
    this.tbs_createTable40();
    this.tbs_createTable50();

    this.tbs_setPanelSize();
    this.tbs_createTable30();

    this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    this.tbs_addEventAll();
    //this.tbs_setData([]);
}
TbsGrid.prototype.tbs_updateGrid = function (column) {
    let selector = '#' + this.gridId;
    let grid = this;

    this.tbs_createTable10(); // Toolbar panel
    this.tbs_createTable80(); // Grouping panel
    this.tbs_createTable90(); // Srot panel

    this.tbs_createTable20();
    this.tbs_createTable70(); // Filter panel
    this.tbs_createTable40();
    this.tbs_createTable50();

    this.tbs_setPanelSize();
    this.tbs_createTable30();

    this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    this.tbs_addEventAll();
    //this.tbs_setData([]);
}
//============================================================

TbsGrid.prototype.tbs_createTable20 = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    const clickTopCheckBoxEvent = function (e) {
        let checkbox = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-cell-checkbox');
        if (checkbox.checked == true) {
            for (let i = 0, len = grid.data_view.length; i < len; i++) {
                grid.data_view[i].check = true;
            }
            grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
        }
        else {
            for (let i = 0, len = grid.data_view.length; i < len; i++) {
                grid.data_view[i].check = false;
            }
            grid.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
        }
    }
    //=============================================================	top div
    let table, thead, tbody, tr, th, td;
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    let tableWidth = this.options[grid.option_numWidth];
    tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    tr.style.height = this.headerRowHeight * this.headerRowCount + 'px';
    td = document.createElement('td');
    td.classList.add('tbs-grid-cell');
    td.style.textAlign = 'center';
    td.style.width = this.options[grid.option_numWidth] + 'px';
    div = document.createElement('div');
    div.classList.add('tbs-grid-cell-div');
    div.textContent = '';
    td.appendChild(div);
    tr.appendChild(td);
    //=============================================================	rowMode
    tableWidth = tableWidth + ((this.options[grid.option_rowMode]) ? this.options[grid.option_rowModeWidth] : 0);
    //=============================================================
    td = document.createElement('td');
    td.classList.add('tbs-grid-cell');
    td.style.textAlign = 'center';
    td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
    td.style.width = this.options[grid.option_rowModeWidth] + 'px';

    div = document.createElement('div');
    div.classList.add('tbs-grid-cell-div');
    div.textContent = 's';
    div.style.textAlign = 'center';
    td.appendChild(div);
    tr.appendChild(td);
    //=============================================================	checkbox
    tableWidth = tableWidth + ((this.options[grid.option_checkbox]) ? this.options[grid.option_checkBoxWidth] : 0);
    //=============================================================
    document.querySelector(selector + ' .tbs-grid-group21').style.width = tableWidth + 'px';
    document.querySelector(selector + ' .tbs-grid-panel21').style.width = tableWidth + 'px';
    td = document.createElement('td');
    td.classList.add('tbs-grid-cell');
    td.style.textAlign = 'center';
    td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
    td.style.width = this.options[grid.option_checkBoxWidth] + 'px';

    div = grid.tbs_createElementCellDiv();
    let input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('tbs-grid-cell-checkbox');
    div.appendChild(input);

    td.appendChild(div);
    tr.appendChild(td);

    tbody.appendChild(tr);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel21').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel21').appendChild(table);
    if (this.options[grid.option_checkbox] == true) {
        document.querySelector(selector + ' .tbs-grid-cell-checkbox').addEventListener('click', clickTopCheckBoxEvent)
    }

    let headerRowCount = this.headerRowCount;

    /* panel22: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel22', table);

    /* panel22: tbody */
    tbody = document.createElement('tbody');
    for (let rowIndex = 0; rowIndex < headerRowCount; rowIndex++) {
        grid.tbs_createTableRow('panel22', tbody);
    }
    table.appendChild(tbody);
    document.querySelector(selector + ' .tbs-grid-panel22').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel22').appendChild(table);

    /* panel20: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel20', table);

    /* panel20: tbody */
    tbody = document.createElement('tbody');
    for (let rowIndex = 0; rowIndex < headerRowCount; rowIndex++) {
        grid.tbs_createTableRow('panel20', tbody);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel20').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel20').appendChild(table);

    this.tbs_displayPanel20();
}
TbsGrid.prototype.tbs_createTable30 = function () {
    let selector = '#' + this.gridId;
    let grid = this;
    let table, thead, tbody, tr, th, td;
    let pageRowCount = this.pageRowCount;

    /* panel31: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead1('panel31', table);

    /* panel31: table body */
    tbody = document.createElement('tbody');
    for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
        tr = document.createElement('tr');
        let attr = document.createAttribute('data-rowId');

        tr.setAttributeNode(attr);
        tr.style = 'display:none;height' + this.rowHeight + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = '';
        div.style = 'text-align:center;';
        td.appendChild(div);

        td.style.width = this.options[grid.option_numWidth] + 'px';
        tr.appendChild(td);
        //=============================================================	rowMode
        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = ''; //(rowIndex + 1).toString();
        div.style.textAlign = 'center;';
        td.appendChild(div);

        td.style.width = this.options[grid.option_rowModeWidth] + 'px';
        tr.appendChild(td);
        //=============================================================	checkbox
        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = ''; //(rowIndex + 1).toString();
        div.style.textAlign = 'center;';

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        input.classList.add('tbs-grid-cell-checkbox');
        div.appendChild(input);
        td.appendChild(div);

        td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
        tr.appendChild(td);

        tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel31').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel31').appendChild(table);

    /* panel32: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel30', table);

    /* panel32: table body */
    tbody = document.createElement('tbody');
    for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
        grid.tbs_createTableRow('panel30', tbody);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel32').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel32').appendChild(table);

    /* panel30: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    let sumWidth = grid.tbs_createTableHead0('panel30', table);

    /* panel30: table body */
    tbody = document.createElement('tbody');
    for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
        grid.tbs_createTableRow('panel30', tbody);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel30').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel30').appendChild(table);

    document.querySelector(selector + ' .tbs-grid-group31').style.width = sumWidth + 'px';
    document.querySelector(selector + ' .tbs-grid-panel31').style.width = sumWidth + 'px';
}
TbsGrid.prototype.tbs_createTable40 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let topColumns = this.topColumns;
    if (topColumns.length == 0) return;

    let table, thead, tbody, tr, th, td, input;

    /* panel41: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead1('panel41', table);

    /* panel41: table body */
    tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    tr.style.height = this.rowHeight + 'px';

    td = document.createElement('td');
    td.classList.add('tbs-grid-cell');
    td.style.textAlign = 'center';
    div = document.createElement('div');
    div.classList.add('tbs-grid-cell-div');
    div.textContent = '∑';

    td.style.width = this.options[grid.option_numWidth] + 'px';
    td.appendChild(div);
    tr.appendChild(td);
    let tableWidth = this.options[grid.option_numWidth];
    if (this.options[grid.option_rowMode] == true) {
        tableWidth += this.options[grid.option_rowModeWidth];
        //table.style.width = tableWidth + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.textAlign = 'center';

        div = document.createElement('div');
        div.classList.add('tbs-grid-div');
        div.textContent = '';

        td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
        td.appendChild(div);
        tr.appendChild(td);
    }
    if (this.options[grid.option_checkbox] == true) {
        tableWidth += this.options[grid.option_checkBoxWidth];
        //table.style.width = tableWidth + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.textAlign = 'center';

        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');

        td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
        td.appendChild(div);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel41').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel41').appendChild(table);

    /* panel42: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel40', table);

    /* panel42: table body */
    tbody = document.createElement('tbody');
    grid.tbs_createTableRow('panel40', tbody);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel42').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel42').appendChild(table);

    /* panel40: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel40', table);

    /* panel40: table body */
    tbody = document.createElement('tbody');
    grid.tbs_createTableRow('panel40', tbody);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel40').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel40').appendChild(table);
}
TbsGrid.prototype.tbs_createTable50 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let footerColumns = this.footerColumns;
    if (footerColumns.length == 0) return;

    let table, thead, tbody, tr, th, td, input;

    /* panel51: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead1('panel51', table);

    /* panel51: table body */
    tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    tr.style.height = this.rowHeight + 'px';
    td = document.createElement('td');
    td.classList.add('tbs-grid-cell');
    td.style.textAlign = 'center';
    div = document.createElement('div');
    div.classList.add('tbs-grid-cell-div');
    div.textContent = '∑';

    td.style.width = this.options[grid.option_numWidth] + 'px';
    td.appendChild(div);
    tr.appendChild(td);
    let tableWidth = this.options[grid.option_numWidth];
    if (this.options[grid.option_rowMode] == true) {
        tableWidth += this.options[grid.option_rowModeWidth];
        //table.style.width = tableWidth + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.textAlign = 'center';

        div = document.createElement('div');
        div.classList.add('tbs-grid-div');
        div.textContent = '';

        td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
        td.appendChild(div);
        tr.appendChild(td);
    }
    if (this.options[grid.option_checkbox] == true) {
        tableWidth += this.options[grid.option_checkBoxWidth];
        //table.style.width = tableWidth + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.textAlign = 'center';

        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');

        td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
        td.appendChild(div);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel51').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel51').appendChild(table);

    /* panel52: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel52', table);

    /* panel52: tbody */
    tbody = document.createElement('tbody');
    grid.tbs_createTableRow('panel52', tbody);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel52').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel52').appendChild(table);

    /* panel50: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel50', table);

    /* panel50: tbody */
    tbody = document.createElement('tbody');
    grid.tbs_createTableRow('panel50', tbody);
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel50').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel50').appendChild(table);
}
TbsGrid.prototype.tbs_createTable70 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let table, thead, tbody, tr, th, td, input;

    /* panel71: table head */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead1('panel71', table);

    /* panel71 table body */
    tbody = document.createElement('tbody');
    for (let i = 0; i < 2; i++) {
        // 1.Number
        tr = document.createElement('tr');
        tr.style.height = this.rowHeight + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.textAlign = 'center';
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = (i == 0)? '' : 'R';

        td.style.width = this.options[grid.option_numWidth] + 'px';
        td.appendChild(div);
        tr.appendChild(td);

        let tableWidth = this.options[grid.option_numWidth];
        // 2.RowMode
        if (grid.options[grid.option_rowMode] == true) {
            tableWidth += this.options[grid.option_rowModeWidth];
            //table.style.width = tableWidth + 'px';

            td = document.createElement('td');
            td.classList.add('tbs-grid-cell');
            td.style.textAlign = 'center';

            div = document.createElement('div');
            div.classList.add('tbs-grid-cell-div');
            div.textContent = '';

            td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
            td.appendChild(div);
            tr.appendChild(td);
        }
        // 3.Checkbox
        if (grid.options[grid.option_checkbox] == true) {
            tableWidth += this.options[grid.option_checkBoxWidth];
            //table.style.width = tableWidth + 'px';

            td = document.createElement('td');
            td.classList.add('tbs-grid-cell');
            td.style.textAlign = 'center';

            div = document.createElement('div');
            div.classList.add('tbs-grid-cell-div');

            td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.querySelector(selector + ' .tbs-grid-panel71').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel71').appendChild(table);

    /* panel72: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel72', table);

    /* panel72: tbody */
    tbody = document.createElement('tbody');
    for (let i = 0; i < 2; i++) {
        grid.tbs_createTableRow('panel72', tbody);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel72').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel72').appendChild(table);

    /* panel70: thead */
    table = document.createElement('table');
    table.className = 'tbs-grid-table';
    grid.tbs_createTableHead0('panel70', table);

    /* panel70: tbody */
    tbody = document.createElement('tbody');
    for (let i = 0; i < 2; i++) {
        grid.tbs_createTableRow('panel70', tbody);
    }
    table.appendChild(tbody);

    document.querySelector(selector + ' .tbs-grid-panel70').innerHTML = '';
    document.querySelector(selector + ' .tbs-grid-panel70').appendChild(table);
}
TbsGrid.prototype.tbs_createTable10 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let panel10 = document.querySelector(selector + ' .tbs-grid-panel10');
    panel10.classList.add('tbs-grid-show');
    //let div = document.createElement('div');
    //div.className = 'tbs-grid-panel10-wrap';
    //div.innerHTML =  '<div class="tbs-grid-panel10-filter"><input class="tbs-grid-panel10-filter-input" placeholder="' + this.toolbar_filter_placeholder + '"></div>';
    //div.innerHTML += '<button class="tbs-grid-button" style="width:60px;">Excel</button>';
    //div.innerHTML += '<button class="tbs-grid-button bg-red font-white" style="width:60px;">Unsort</button>';
    //div.innerHTML += '<button class="tbs-grid-button" style="width:95px;">Freeze Panes(C)</button>';
    //div.innerHTML += '<button class="tbs-grid-button" style="width:95px;">Freeze Panes(R)</button>';
    //div.innerHTML += '<button class="tbs-grid-button bg-red font-white" style="width:95px;">Unfreeze Panes</button>';
    //document.querySelector(selector + ' .tbs-grid-panel10').innerHTML = '';
    //document.querySelector(selector + ' .tbs-grid-panel10').appendChild(div);
}
TbsGrid.prototype.tbs_createTable80 = function () {
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
TbsGrid.prototype.tbs_createTable90 = function () {
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

//============================================================

TbsGrid.prototype.tbs_createTableHead1 = function (panelName, table) {
    let selector = '#' + this.gridId;
    let grid = this;

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th'); th.style.width = this.options[grid.option_numWidth] + 'px'; tr.appendChild(th);
    th = document.createElement('th'); th.style.width = (this.options[grid.option_rowMode]) ? this.options[grid.option_rowModeWidth]  + 'px' : '0px'; th.style.display = (this.options[grid.option_rowMode]) ? '' : 'none'; tr.appendChild(th);
    th = document.createElement('th'); th.style.width = (this.options[grid.option_checkbox])? this.options[grid.option_checkBoxWidth] + 'px' : '0px'; th.style.display = (this.options[grid.option_checkbox])? '' : 'none'; tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
}
TbsGrid.prototype.tbs_createTableHead2 = function (panelName, table) {
    let selector = '#' + this.gridId;
    let grid = this;

    return grid.tbs_createTableHead0(panelName, table);
}
TbsGrid.prototype.tbs_createTableHead0 = function (panelName, table) {
    let selector = '#' + this.gridId;
    let grid = this;

    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let sumWidth = 0;
    for (let i = 0, len = grid.columns.length; i < len; i++) {
        let column = grid.columns[i];
        let th = document.createElement('th');
        th.style.width = (column[grid.column_visible] == true) ? parseInt(column[grid.column_width]) + 'px' : '0px';
        th.style.display = (column[grid.column_visible] == true) ? '' : 'none';
        sumWidth += (this.columns[i][grid.column_visible] == true) ? parseInt(column[grid.column_width]) : 0;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    return sumWidth;
}

TbsGrid.prototype.tbs_createTableRow = function (panelName, tbody) {
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

        for (let i = 0; i < grid.columns.length; i++) {
            let column = grid.columns[i];
            let td = document.createElement('td');
            td.classList.add('tbs-grid-cell');
            td.style.width = column[grid.column_width] + 'px';

            if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62' || panelName == 'panel72') {
                td.style.display = 'none';
            }

            td.dataset.name = column[grid.column_name];
            td.dataset.cellIndex = i;

            let div = grid.tbs_createElementCellDiv();
            let spanText = grid.tbs_createElementCellText();
            div.appendChild(spanText);
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

//============================================================

TbsGrid.prototype.tbs_updateTableRows30 = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let table, thead, tbody, tr, th, td;
    let pageRowCount = this.pageRowCount;

    let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
    if (tableRows.length >= this.pageRowCount) return;

    let addRowCount = this.pageRowCount - tableRows.length;
    //=============================================================
    // panel31
    //=============================================================
    tbody = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody');
    if (grid.null(tbody)) return;

    for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
        tr = document.createElement('tr');
        let attr = document.createAttribute('data-rowId');

        tr.setAttributeNode(attr);
        tr.style = 'display:none;height' + this.rowHeight + 'px';

        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = '';
        div.style = 'text-align:center;';
        td.appendChild(div);

        td.style.width = this.options[grid.option_numWidth] + 'px';
        tr.appendChild(td);
        //=============================================================	rowMode
        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = ''; //(rowIndex + 1).toString();
        div.style.textAlign = 'center;';
        td.appendChild(div);

        td.style.width = this.options[grid.option_rowModeWidth] + 'px';
        tr.appendChild(td);
        //=============================================================	checkbox
        td = document.createElement('td');
        td.classList.add('tbs-grid-cell');
        td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
        div = document.createElement('div');
        div.classList.add('tbs-grid-cell-div');
        div.textContent = ''; //(rowIndex + 1).toString();
        div.style.textAlign = 'center;';

        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');

        input.classList.add('tbs-grid-cell-checkbox');
        div.appendChild(input);
        td.appendChild(div);

        td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
        tr.appendChild(td);

        tbody.appendChild(tr);
    }

    /* panel32 row count update */
    tbody = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody');
    for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
        tr = document.createElement('tr');
        tr.style = 'display:none;height:' + this.rowHeight + 'px';
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            let td = document.createElement('td');
            td.className = 'tbs-grid-cell';
            td.style.display = (column[grid.column_visible] == true) ? '' : 'none';

            let div = grid.tbs_createElementCellDiv();
            let spanText = grid.tbs_createElementCellText();
            div.appendChild(spanText);
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    /* panel30 row count update */
    tbody = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody');
    for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
        tr = document.createElement('tr');
        tr.style = 'display:none;height:' + this.rowHeight + 'px';
        for (let i = 0; i < this.columns.length; i++) {
            let column = this.columns[i];
            let td = document.createElement('td');
            td.className = 'tbs-grid-cell';
            td.style.display = (column[grid.column_visible] == true) ? '' : 'none';

            let div = grid.tbs_createElementCellDiv();
            let spanText = grid.tbs_createElementCellText();
            div.appendChild(spanText);
            td.appendChild(div);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

//================================================================



TbsGrid.prototype.tbs_setFrozenRow = function(fixedRowIndex, fixedRowCount) {
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
    if (fixedRowIndex + 1 > this.tbs_getRowCount() && fixedRowCount > grid.pageRowCount) {
        this.fixedRowIndex = -1;
        this.fixedRowCount = 0;
        return;
    }
    this.fixedRowIndex = fixedRowIndex;
    this.fixedRowCount = fixedRowCount;

    let table31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
    let table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

    let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
    let panel60 = document.querySelector(selector + ' .tbs-grid-panel60');
    let panel62 = document.querySelector(selector + ' .tbs-grid-panel62');

    //table31 clone
    let copyTable= table31.cloneNode(true);
    let trList= copyTable.querySelectorAll('tbody tr');

    for (let i = trList.length - 1; i >= 0; i--) {
        if (i > fixedRowIndex) copyTable.deleteRow(-1);
    }
    panel61.innerHTML = '';
    panel61.appendChild(copyTable);

    //table30 clone
    copyTable   = table30.cloneNode(true);
    trList  = copyTable.querySelectorAll('tbody tr');

    for (let i = trList.length - 1; i >= 0; i--) {
        if (i > fixedRowIndex) copyTable.deleteRow(-1);
    }

    panel60.innerHTML = '';
    panel60.appendChild(copyTable);

    if (this.fixedColumnIndex != -1) {
        grid.tbs_createFrozenColumnTable(table30, panel62, fixedColumnIndex, 'panel62');
    }

    //this.event_select('fixRight');
    //this.event_select('fixLeft');

    this.tbs_setPanelSize();
    this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    this.verticalScroll.tbs_setScroll(grid.code_vertical);
    this.tbs_displayPanel30(grid.fixedRowIndex);
}
TbsGrid.prototype.tbs_removeFrozenRow = function() {
    let selector = '#' + this.gridId;
    let grid = this;

    this.fixedRowIndex = -1;
    this.fixedRowCount = 0;

    let panel61= document.querySelector(selector + ' .tbs-grid-panel61');
    let panel60= document.querySelector(selector + ' .tbs-grid-panel60');

    panel61.childNodes[0].innerHTML = '';
    panel60.childNodes[0].innerHTML = '';

    this.tbs_setPanelSize();
    this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    this.verticalScroll.tbs_setScroll(grid.code_vertical);
    this.tbs_displayPanel30(0);
}

// Group, Merge
TbsGrid.prototype.getGroupRowInit = function(row, id){
    let selector = '#' + this.gridId;
    let grid = this;

    for (let colIndex = 0; colIndex < grid.columns.length; colIndex++) {
        let col = grid.columns[colIndex];
        if (id == ''){
            if (col[grid.column_type] == 'number') {
                row[col[grid.column_name]] = 0;
                // row.layout[col[grid.column_name]][grid.layout_text] = '';
            }
            else {
                row[col[grid.column_name]] = '';
                // row.layout[col[grid.column_name]][grid.layout_text] = '';
            }
            // row.layout[this.summaryColumns[0][grid.column_name]][grid.layout_text] = grid.option_sumChar;
        }
        else {
            if (col[grid.column_name] != id){
                if (col[grid.column_type] == 'number') {
                    row[col[grid.column_name]] = 0;
                }
                else {
                    row[col[grid.column_name]] = '';
                }
            }
            else {
                if (id != '') row[col[grid.column_name]] + grid.option_sumChar;

            }
        }
    }
}
TbsGrid.prototype.getGroupRowSum = function(row, srow, erow){
    let selector = '#' + this.gridId;
    let grid = this;

    for (let i = srow; i <= erow; i++){
        for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
            let col = this.columns[colIndex];
            if (col[grid.column_summaryType] != '') {
                row[col[grid.column_name]] += this.data_view[i][col.column_id];
                //row.layout[col[grid.column_name]][grid.layout_text] = this.tbs_getFormatText(col, row[col[grid.column_name]]);
            }
            // row.layout[col.column_id][grid.column_visible] = true;
            // row.layout[col.column_id][grid.layout_rowSpan] = 1;
            // row.layout[col.column_id][grid.layout_subRowSpan] = 1;
        }
    }
}
TbsGrid.prototype.getGroupNode = function(node){
    let result = {};
    for (let i = 0, len = this.data_view.length; i < len; i++){
        for (let x = 0; x < this.columns.length; x++) {
            let layout = this.data_view[i].layout[this.columns[x].column_id];
            if (layout.node == node) {
                result.row = this.data_view[i];
                result.rowIndex = i;
                result.colIndex = x;
                result.id = this.tbs_getColumnName(x);
                result = this.data_view[i][this.columns[x].column_id];
                result.layout = this.data_view[i].layout[this.columns[x].column_id];
                break;
            }
        }
    }
    return result;
}
TbsGrid.prototype.setGroup = function (sortColumns, summaryColumns, mergeType) {
    let selector = this.gridId;
    let grid = this;
    if (this.data_view.length == 0) return;
    this.merge = true;
    this.classSort.sortColumns  = sortColumns;
    this.summaryColumns = summaryColumns;
    this.mergeType   = mergeType;

    //grid.classSort.setSortData(this.data_view, this.classSort.sortColumns);
    //============================================================= [Start] groupView with
    let groupView = []; //srow, erow(scol, ecol), depth, node, parentNode, firstChild, lastChild
    let direction = 'vertical';
    for(let i = 0, len = grid.data_view.length; i < len; i++){
        let groupRow = {};
        for(let x = 0, colLen = grid.columns.length; x < colLen; x++){
            let id = grid.columns[x].column_id;
            groupRow[id] = {};
            groupRow[id].srow = -1;
            groupRow[id].erow = -1;
            groupRow[id].scol = -1;
            groupRow[id].ecol = -1;
            groupRow[id].depth = -1;
            groupRow[id].node = -1;
            groupRow[id].parentNode = 0;
            groupRow[id].firstChild = false;
            groupRow[id].lastChild = false;
            groupRow[id].mergeClass = '';
        }
        groupView.push(groupRow);
    }
    //=============================================================
    let nextGroupId = function(id){
        for (let i = 0, len = grid.summaryColumns.length; i < len; i++){
            if (id == grid.summaryColumns[i].column_id) { if (i + 1 < len) return grid.summaryColumns[i + 1].column_id; }
        }
        return id;
    }
    let getLastRowIndex = function(rowIndex, erow, id){
        let val = grid.tbs_getValue(rowIndex, id);
        let lastRowIndex = rowIndex;

        for (let i = rowIndex + 1; i <= erow; i++) {
            if (val == grid.tbs_getValue(i, id)) {
                lastRowIndex = i;
                continue;
            }
            else break;
        }
        return lastRowIndex;
    }
    //=============================================================
    let node = 0;
    let setGroupBy = function(srow, erow, id, depth, parentNode){
        let colIndex = grid.tbs_getColumnIndex(id);
        let startRowIndex = 0, lastRowIndex = 0;
        for (let i = srow; i <= erow; i++){
            startRowIndex = i;
            i = getLastRowIndex(i, erow, id);
            lastRowIndex = i;
            node += 1;
            let group = groupView[startRowIndex][id];
            group.id = id;
            group.srow = startRowIndex;
            group.erow = lastRowIndex;
            group.node = node;
            group.parentNode = parentNode;
            group.depth = depth;
            group.firstChild = (startRowIndex == srow) ? true : false;
            group.lastChild  = (lastRowIndex  == erow) ? true : false;
            //id, srow, erow(scol, ecol), depth, node, parentNode, firstChild, lastChild
            let nextId = nextGroupId(id)
            if (id != nextId) setGroupBy(startRowIndex, lastRowIndex, nextId, depth + 1, node);
        }
    }
    if (grid.summaryColumns.length > 0) setGroupBy(0, grid.data_view.length - 1, grid.summaryColumns[0].column_id, 0, 0);
    grid.classGroup.groupView = groupView;
    //============================================================= [End] groupView with

    //============================================================= layout
    let setRowSpan = function(srow, erow, id){
        for(let i = srow, k = 0; i <= erow; i++, k++){
            let layout = grid.data_view[i].layout[id];
            if (grid.mergeType == 1) {
                //layout[grid.layout_visible]    = (i == srow) ? true : false; //hide
                layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
                layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
            }
            else if (grid.mergeType == 2) {
                //layout[grid.layout_visible]    = true;
                layout[grid.layout_text] 	  = (i == srow) ?  layout[grid.layout_text] : '';
                layout[grid.layout_rowSpan]    = 1;
                layout[grid.layout_subRowSpan] = 1;
                for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
                    if (i < erow) layout.mergeClass = 'tbs-grid-cell-bottom-none';
                }
            }
            else if (grid.mergeType == 3) {
                //layout[grid.layout_visible]    = true;
                layout[grid.layout_rowSpan]    = 1;
                layout[grid.layout_subRowSpan] = 1;
            }
            else if (grid.mergeType == 4) {
                //layout[grid.layout_visible]    = true;
                layout[grid.layout_text] 	  = (i == srow) ?  layout[grid.layout_text] : '';
                layout[grid.layout_rowSpan]    = 1;
                layout[grid.layout_subRowSpan] = 1;
            }
            else if (grid.mergeType == 5) {
                //layout[grid.layout_visible]    = (i == srow) ? true : false;
                layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
                layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
            }
            else if (grid.mergeType == 6) {
                //layout[grid.layout_visible]    = (i == srow) ? true : false;
                layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
                layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
            }
        }
    }
    for(let i = 0, len = grid.data_view.length; i < len; i++){
        for(let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
            let id = summaryColumns[x].column_id;
            let layout = grid.data_view[i].layout[id];
            let group  = grid.classGroup.groupView[i][id];
            if (group.srow != -1) {
                layout.layout_srow       = group.srow      ;
                layout.layout_erow       = group.erow      ;
                layout.layout_scol       = group.scol      ;
                layout.layout_ecol       = group.ecol      ;
                layout.layout_depth      = group.depth     ;
                layout.layout_node       = group.node      ;
                layout.layout_parentNode = group.parentNode;
                layout.layout_firstChild = group.firstChild;
                layout.layout_lastChild  = group.lastChild ;
                layout.layout_mergeClass = group.mergeClass;
                setRowSpan(layout.srow, layout.erow, id);
            }
        }
    }
    //=============================================================
    // sum row
    //=============================================================
    let newView = [];
    let addRow = function(node){
        let result = grid.getGroupNode(node);
        if (result.row == undefined) return;
        let srow = result.layout.srow;
        let erow = result.layout.erow;
        let tmpRow = JSON.parse(JSON.stringify(result.row));
        let id = result.id;
        let layout = result.layout;
        //=============================================================
        let tmpView = [];
        if (layout.depth == grid.summaryColumns.length - 1){
            for (let i = srow; i <= erow; i++) tmpView.push(JSON.parse(JSON.stringify(grid.data_view[i])));
        }
        //============================================================= mergeClass
        if(grid.mergeType == 4){
            for (let i = 0, len = tmpView.length; i < len - 1; i++){
                for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
                    if (i < erow) tmpView[i].layout[grid.summaryColumns[x].column_id].mergeClass = 'tbs-grid-cell-bottom-none';
                    if (i == 0) tmpView[i].layout[grid.summaryColumns[x].column_id][grid.layout_text] = tmpView[i][id];
                }
            }
        }
        if(grid.mergeType == 5){ //rowSpan subRowSpan 조정
            let rowCount = tmpView.length;
            for (let i = 0, k = 0, len = tmpView.length; i < len; i++, k++){
                for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
                    tmpView[i].layout[grid.summaryColumns[x].column_id][grid.column_visible]    = (i == 0) ? true : false;
                    tmpView[i].layout[grid.summaryColumns[x].column_id].rowSpan    = (i == 0) ? rowCount - k : 1;
                    tmpView[i].layout[grid.summaryColumns[x].column_id].subRowSpan = rowCount - k;
                }
            }
        }
        //============================================================= data init, sum
        grid.getGroupRowInit(tmpRow, id);
        grid.getGroupRowSum(tmpRow, srow, erow);
        //=============================================================
        tmpRow[grid.code_mode] = 'S';
        tmpRow.colorDepth = layout.depth;
        tmpView.push(JSON.parse(JSON.stringify(tmpRow)));

        for (let i = 0, len = tmpView.length; i < len; i++){
            newView.push(JSON.parse(JSON.stringify(tmpView[i])));
        }
        if(layout.lastChild && layout.depth != 0) {
            addRow(layout.parentNode);
        }
    }
    let addTotalSum = function(){
        let srow = 0;
        let erow = grid.data_view.length - 1;
        let tmpRow = JSON.parse(JSON.stringify(grid.data_view[0]));
        //============================================================= data init, sum
        grid.getGroupRowInit(tmpRow, '');
        grid.getGroupRowSum(tmpRow, srow, erow);
        //=============================================================
        tmpRow[grid.code_mode] = 'S';
        tmpRow.colorDepth = '';
        newView.push(JSON.parse(JSON.stringify(tmpRow)));
    }
    let getSum = function(aid) {
        let id = this.summaryColumns[this.summaryColumns.length - 1].column_id;
        for (let i = 0; i < grid.data_view.length; i++){
            let row = grid.data_view[i];
            if (row.layout[id].srow != undefined && row.layout[id].srow != -1) {
                addRow(row.layout[id].node);
            }
        }
        addTotalSum();
    }
    if (mergeType == 3) {
        getSum();
        grid.data_view = [];
        grid.data_view = newView;
    }
    else if (mergeType == 4) {
        getSum();
        grid.data_view = [];
        grid.data_view = newView;
    }
    else if (mergeType == 5) {
        getSum();
        grid.data_view = [];
        grid.data_view = newView;
    }
    //============================================================= test
    //grid.tbs_displayDataView(groupView, 'groupView');
    //grid.tbs_displayDataView(grid.view, 'layout');
    //=============================================================
    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_refreshRefData();
    grid.tbs_displayPanel30(0);
}
//===================================================================================
TbsGrid.prototype.tbs_getHeaderCell = function(colIndex) {
    //return : table cell
    //colIndex : displayed colIndex
    let selector = '#' + this.gridId;
    let grid = this;

    let tableRows= document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
    let rowCount = this.headerRowCount;
    if (rowCount > 1) {
        for (let i = rowCount - 1; i >= 0; i--) {
            let tableRow = tableRows[i];
            if (tableRow.childNodes[colIndex].dataset.name != '') {
                return tableRow.childNodes[colIndex];
            }
        }
    }
    else {
        return tableRows[0].childNodes[colIndex];
    }
}
//===================================================================================
TbsGrid.prototype.getTextWidth = function(canvas, text, fontSize, fontFamily) {
    let selector = '#' + this.gridId;
    let grid = this;

    let context = canvas.getContext("2d");
    context.fontSize = fontSize;
    context.fontFamily = fontFamily;
    let metrics = context.measureText(text);
    return metrics.width;
};
TbsGrid.prototype.getTextWidth2 = function(context, text) {
    let selector = '#' + this.gridId;
    let grid = this;

    let metrics = context.measureText(text);
    return metrics.width;
};
TbsGrid.prototype.tbs_setColumnAutoWidth = function(){
    let selector = '#' + this.gridId;
    let grid = this;

    let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
    let arr = [];
    for (let x = 0, len = grid.columns.length; x < len; x++) arr[x] = 0;

    let fontSize = grid.getConfigFont('fontSize');
    let fontFamilty = grid.getConfigFont('fontFamily');

    for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
        for (let x = 0, len2 = grid.columns.length; x < len2; x++){
            if (grid.headerColumnTable[i][x][grid.column_kind] == 'column') {
                let width = parseInt(grid.getTextWidth(canvas, grid.headerColumnTable[i][x][grid.column_text], fontSize, fontFamilty));
                if (width >= arr[x]) {
                    arr[x] = width;
                }
            }
        }
    }
    for (let i = 0, len = grid.data_view.length; i < len; i++){
        for (let x = 0, len2 = grid.columns.length; x < len2; x++){
            let columnName = grid.tbs_getColumnName(x);
            let column = grid.tbs_getColumn(columnName);
            let val = grid.tbs_getValueByIndex(i, x);
            let width = parseInt(grid.getTextWidth(canvas, grid.tbs_getFormatText(column, val), fontSize, fontFamilty));
            //let width = parseInt(grid.getTextWidth(canvas, grid.data_view[i].layout[id][grid.layout_text], fontSize, fontFamilty));


            if (width >= arr[x]) {
                arr[x] = width;
            }
        }
    }
    for (let x = 0, len = grid.columns.length; x < len; x++) arr[x] += 20;
    grid.tbs_setAllColumnWidth(arr);
    grid.tbs_displayPanel20();
}
TbsGrid.prototype.setRowHeight = function (type, rowHeight) {
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
            this.tbs_setPanelSize();
            this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
            this.verticalScroll.tbs_setScroll(grid.code_vertical);
            this.tbs_displayPanel30(0);
        }
        if (type == 'content') {
            this.rowHeight = rowHeight;
            document.querySelector(selector + ' .tbs-grid-input').style.height = rowHeight + 'px';
            this.tbs_setPanelSize();
            this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
            this.verticalScroll.tbs_setScroll(grid.code_vertical);
            this.tbs_displayPanel30(0);
        }
        if (type == 'top') {
            this.topRowHeight = rowHeight;
            this.tbs_setPanelSize();
            this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
            this.verticalScroll.tbs_setScroll(grid.code_vertical);
            this.tbs_displayPanel30(0);
        }
        if (type == 'footer') {
            this.footerRowHeight = rowHeight;
            this.tbs_setPanelSize();
            this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
            this.verticalScroll.tbs_setScroll(grid.code_vertical);
            this.tbs_displayPanel30(0);
        }

    }
}
TbsGrid.prototype.selector = document.querySelector;
TbsGrid.prototype.selectorAll = document.querySelectorAll;

TbsGrid.prototype.tbs_setGridModePage = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
    page.style.display = '';

    grid.classPage.pageRowcount = grid.classPage.options.pageRowCount;
}
TbsGrid.prototype.tbs_setGridModePagenation = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
    page.style.display = '';
    grid1.setGridMode(grid1.code_page);
}
