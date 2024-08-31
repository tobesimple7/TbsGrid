class TbsGridControl {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }
}
/* Column add, remove */
TbsGridControl.prototype.act_addColumn = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_createGrid(grid.columns);
    grid.tbs_selectRange(0, 0, 0, 0);
}
TbsGridControl.prototype.act_removeColumn = function (headerColumns, columns) {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;
    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_createGrid(grid.columns);
    grid.tbs_selectRange(0, 0, 0, 0);
}
TbsGridControl.prototype.act_changeColumnOrder = function () {
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
TbsGrid.prototype.tbs_apply = function () {
    let selector = '#' + this.gridId;
    let grid = this;

    let topRowIndex = grid.tbs_getFirstRowIndex();
    this.tbs_displayPanel20(topRowIndex);
    this.tbs_displayPanel30(topRowIndex);
    this.tbs_displayPanel40();
    this.tbs_displayPanel50();
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
        else if (panelName == 'panel61') { if (this.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable1(param); }
        else if (panelName == 'panel62') { if (this.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable2(param); }
        else if (panelName == 'panel60') { if (this.fixedRowIndex == -1) return; grid.tbs_setTreeDataTable3(param); }
    }
    else if (grid.grid_mode == grid.code_group) {
        if      (panelName == 'panel31') grid.tbs_setDataTable1(param);
        else if (panelName == 'panel32') grid.tbs_setDataTable2(param);
        else if (panelName == 'panel30') grid.tbs_setGroupDataTable3(param);
        else if (panelName == 'panel61') { if (this.fixedRowIndex == -1) return; grid.tbs_setDataTable1(param);}
        else if (panelName == 'panel62') { if (this.fixedRowIndex == -1) return; grid.tbs_setDataTable2(param);}
        else if (panelName == 'panel60') { if (this.fixedRowIndex == -1) return; grid.tbs_setGroupDataTable3(param); }
    }
    else {
        if (panelName == 'panel31') this.tbs_setDataTable1(param);
        else if (panelName == 'panel32') this.tbs_setDataTable2(param);
        else if (panelName == 'panel30') this.tbs_setDataTable3(param);
        else if (panelName == 'panel61') { if (this.fixedRowIndex == -1) return; this.tbs_setDataTable1(param); }
        else if (panelName == 'panel62') { if (this.fixedRowIndex == -1) return; this.tbs_setDataTable2(param); }
        else if (panelName == 'panel60') { if (this.fixedRowIndex == -1) return; this.tbs_setDataTable3(param); }
    }
         if (panelName == 'panel41') this.tbs_setDataTopTable1();
    else if (panelName == 'panel42') this.tbs_setDataTopTable2();
    else if (panelName == 'panel40') this.tbs_setDataTopTable3();
    else if (panelName == 'panel51') this.tbs_setDataFooterTable1();
    else if (panelName == 'panel52') this.tbs_setDataFooterTable2();
    else if (panelName == 'panel50') this.tbs_setDataFooterTable3();
    else if (panelName == 'panel21') this.tbs_setDataHeaderTable1(param);
    else if (panelName == 'panel22') this.tbs_setDataHeaderTable1(param);
    else if (panelName == 'panel20') this.tbs_setDataHeaderTable3(param);
    else if (panelName == 'panel70') grid.tbs_setDataFilterTable(param);
}