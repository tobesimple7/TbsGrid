class TbsGridControl {
    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }
}
/* Column add, remove */
TbsGridControl.prototype.after_changeColumnOrder = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_updateGrid(grid.columns);
    let _topRowIndex = grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel30(_topRowIndex);
    grid.tbs_displayPanel20();
    grid.tbs_displayPanel40();
    grid.tbs_displayPanel50();
    grid.tbs_displayPanel70();

}
TbsGridControl.prototype.after_addColumn = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_updateGrid(grid.columns);
    let _topRowIndex = grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel30(_topRowIndex);
    grid.tbs_displayPanel20();
}
TbsGridControl.prototype.after_removeColumn = function (headerColumns, columns) {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_createColumn(grid.headerColumns);
    grid.tbs_updateGrid(grid.columns);
    let _topRowIndex = grid.tbs_selectRange(0, 0, 0, 0);
    grid.tbs_displayPanel30(_topRowIndex);
    grid.tbs_displayPanel20();
}
TbsGridControl.prototype.after_showFilterPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel70('panel70');
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_hideFilterPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel70('panel70');
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_showSortrPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_hideSortPanel = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
    grid.tbs_setPanelSize();
    grid.tbs_displayPanel30(0);
}
TbsGridControl.prototype.after_setColumnVisible = function () {
    let selector = this.selector;
    let grid = this.grid;
    let classControl = this;

    grid.tbs_removeRange(0, -1);
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
    //this.tbs_displayPanel10(); //tool bar
    //this.tbs_displayPanel70();
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
        if      (panelName == 'panel31') grid.tbs_setDataPanel31(param);
        else if (panelName == 'panel32') grid.classTree.setTreeDataTable32(param);
        else if (panelName == 'panel30') grid.classTree.setTreeDataTable30(param);
    }
    else if (grid.grid_mode == grid.code_group) {
        if      (panelName == 'panel31') grid.tbs_setDataPanel31(param);
        else if (panelName == 'panel32') grid.classGroup.setGroupDataTable32(param);
        else if (panelName == 'panel30') grid.classGroup.setGroupDataTable30(param);
    }
    else {
        if      (panelName == 'panel31') grid.tbs_setDataPanel31(param);
        else if (panelName == 'panel32') grid.tbs_setDataPanel32(param);
        else if (panelName == 'panel30') grid.tbs_setDataPanel30(param);
    }
         if (panelName == 'panel41') grid.tbs_setDataPanel41();
    else if (panelName == 'panel42') grid.tbs_setDataPanel42();
    else if (panelName == 'panel40') grid.tbs_setDataPanel40();
    else if (panelName == 'panel51') grid.tbs_setDataPanel51();
    else if (panelName == 'panel52') grid.tbs_setDataPanel52();
    else if (panelName == 'panel50') grid.tbs_setDataPanel50();
    else if (panelName == 'panel21') grid.tbs_setDataPanel21(param);
    else if (panelName == 'panel22') grid.tbs_setDataPanel22(param);
    else if (panelName == 'panel20') grid.tbs_setDataPanel20(param);
    else if (panelName == 'panel72') grid.tbs_setDataPanel72(param);
    else if (panelName == 'panel70') grid.tbs_setDataPanel70(param);
}
TbsGrid.prototype.tbs_setData = function (data, openDepth = 0, isFirst = true) {
    let selector = '#' + this.gridId;
    let grid = this;

    if (grid.grid_mode == grid.code_group) grid.classGroup.setGroupData(data, openDepth, isFirst);
    else if (grid.grid_mode == grid.code_tree) grid.classTree.setTreeData(data, openDepth, isFirst);
    else grid.tbs_setGridData(data);
}
/* Grid Mode */
TbsGrid.prototype.tbs_setGridMode = function (gridMode) {
    let selector = '#' + this.gridId;
    let grid = this;

    grid.grid_mode = grid.tbs_trim(gridMode);

    if (grid.grid_mode == grid.code_page) {
        grid.hideToolbarButtons('group');
        grid.tbs_setGridModePage();
    }
    else if (grid.grid_mode == grid.code_pagination) {
        grid.hideToolbarButtons('group');
        grid.tbs_setGridModePagenation();
    }
    else if (grid.grid_mode == grid.code_group) {}
}

TbsGrid.prototype.tbs_render = function (column) {
    let selector = '#' + this.gridId;
    let grid = this;

    let result = null;
    let columnType = column[grid.column_type];

    // if (columnType == grid.code_string)     result = grid.readerBase.init(column);
    // if (columnType == grid.code_number)     result = grid.readerNumber.init(column);
    // if (columnType == grid.code_currency)   result = grid.readerNumber.init(column);
    // if (columnType == grid.code_date)       result = grid.readerDate.init(column);
    // if (columnType == grid.code_combo)      result = grid.readerBase.init(column);


}