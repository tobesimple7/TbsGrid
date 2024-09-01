class TbsGridControl {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }
}
/* Column add, remove */
TbsGridControl.prototype.after_addColumn = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_createGrid(grid.columns);
    grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel20();
}
TbsGridControl.prototype.after_removeColumn = function (headerColumns, columns) {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;
    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_createGrid(grid.columns);
    grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel20();
}
TbsGridControl.prototype.after_changeColumnOrder = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    let topRowIndex = grid.tbs_getFirstRowIndex();
    grid.tbs_displayPanel20(topRowIndex);
    grid.tbs_displayPanel30(topRowIndex);
    grid.tbs_displayPanel40();
    grid.tbs_displayPanel50();
}
TbsGridControl.prototype.after_showFilterPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel70('panel70');
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_hideFilterPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.verticalScroll.tbs_setScroll(grid.code_vertical);
    grid.tbs_displayPanel70('panel70');
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_setColumnVisible = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);
    grid.apply();
}

TbsGrid.prototype.tbs_apply = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let topRowIndex = grid.tbs_getFirstRowIndex();
    this.tbs_displayPanel20(topRowIndex);
    this.tbs_displayPanel30(topRowIndex);
    this.tbs_displayPanel40();
    this.tbs_displayPanel50();
    this.tbs_displayPanel70();
    this.tbs_displayPanel10(); //tool bar
}
/* visible 일 경우, content, header 변경 */
TbsGrid.prototype.tbs_displayPanel = function (topRowIndex, isHeader = false) {
    let selector = this.selector;
    let grid = this.grid;

    if (isHeader) grid.tbs_displayPanel20();
    grid.tbs_displayPanel30(topRowIndex);
    grid.tbs_displayPanel40();
    grid.tbs_displayPanel50();
}
TbsGrid.prototype.tbs_setDataTable = function (param) {
    // param : {panel: panel, topRowIndex: topRowIndex}
    let selector = '#' + this.gridId;
    let grid = this;

    let panelName = param.panelName;
    if (grid.grid_mode == grid.code_tree) {
        if      (panelName == 'panel31') grid.tbs_setTreeDataTable1(param);
        else if (panelName == 'panel32') grid.tbs_setTreeDataTable2(param);
        else if (panelName == 'panel30') grid.tbs_setTreeDataTable3(param);
        else if (panelName == 'panel61') { if (grid.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable1(param); }
        else if (panelName == 'panel62') { if (grid.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable2(param); }
        else if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable3(param); }
    }
    else if (grid.grid_mode == grid.code_group) {
        if      (panelName == 'panel31') grid.tbs_setDataTable1(param);
        else if (panelName == 'panel32') grid.tbs_setDataTable2(param);
        else if (panelName == 'panel30') grid.tbs_setGroupDataTable3(param);
        else if (panelName == 'panel61') { if (grid.fixedRowIndex == -1) return; grid.tbs_setDataTable1(param);}
        else if (panelName == 'panel62') { if (grid.fixedRowIndex == -1) return; grid.tbs_setDataTable2(param);}
        else if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; grid.tbs_setGroupDataTable3(param); }
    }
    else {
        if (panelName == 'panel31') grid.tbs_setDataTable1(param);
        else if (panelName == 'panel32') grid.tbs_setDataTable2(param);
        else if (panelName == 'panel30') grid.tbs_setDataTable3(param);
        else if (panelName == 'panel61') { if (grid.fixedRowIndex == -1) return; grid.tbs_setDataTable1(param); }
        else if (panelName == 'panel62') { if (grid.fixedRowIndex == -1) return; grid.tbs_setDataTable2(param); }
        else if (panelName == 'panel60') { if (grid.fixedRowIndex == -1) return; grid.tbs_setDataTable3(param); }
    }
         if (panelName == 'panel41') grid.tbs_setDataTopTable1();
    else if (panelName == 'panel42') grid.tbs_setDataTopTable2();
    else if (panelName == 'panel40') grid.tbs_setDataTopTable3();
    else if (panelName == 'panel51') grid.tbs_setDataFooterTable1();
    else if (panelName == 'panel52') grid.tbs_setDataFooterTable2();
    else if (panelName == 'panel50') grid.tbs_setDataFooterTable3();
    else if (panelName == 'panel21') grid.tbs_setDataHeaderTable1(param);
    else if (panelName == 'panel22') grid.tbs_setDataHeaderTable1(param);
    else if (panelName == 'panel20') grid.tbs_setDataHeaderTable3(param);
    else if (panelName == 'panel70') grid.tbs_setDataFilterTable(param);
}
TbsGrid.prototype.tbs_setData = function (data, openDepth) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.grid_mode == grid.code_group) grid.tbs_setGroupData(data, openDepth);
    else if (grid.grid_mode == grid.code_tree) grid.tbs_setTreeData(data, openDepth);
    else grid.tbs_setGridData(data);
}
/* Grid Mode */
TbsGrid.prototype.tbs_setGridMode = function (gridMode) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.grid_mode = grid.tbs_trim(gridMode);

    if (grid.grid_mode == grid.code_paging) grid.tbs_setGridModePage();
    else if (grid.grid_mode == grid.module_pagination) grid.tbs_setGridModePagenation();
    else if (grid.grid_mode == grid.code_group) {}
}