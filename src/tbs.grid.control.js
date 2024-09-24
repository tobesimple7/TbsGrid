import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

export class TbsGridControl {

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
    }

    after_changeColumnOrder() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classColumn.updateColumnTable();
        grid.classColumn.createHeaderColumns();
        grid.classColumn.createHeaderColumnTable();
        grid.updateGrid(grid.column_table.data);

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
        grid.classPanel70.setDataPanel();
    }

    after_addColumn() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classColumn.updateColumnTable();
        grid.classColumn.createHeaderColumns();
        grid.classColumn.createHeaderColumnTable();
        grid.updateGrid(grid.column_table.data);

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    }

    after_removeColumn(headerColumns, columns) {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;


        grid.classColumn.updateColumnTable();
        grid.classColumn.createHeaderColumns();
        grid.classColumn.createHeaderColumnTable();
        grid.updateGrid(grid.column_table.data);

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
        grid.classPanel20.setDataPanel();
    }

    after_showFilterPanel() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel70.setDataPanel();
        grid.classPanel30.setDataPanel(0);
    }

    after_hideFilterPanel() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel70.setDataPanel();
        grid.classPanel30.setDataPanel(0);
    }

    after_showSortrPanel() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel30.setDataPanel(0);
    }

    after_hideSortPanel() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.classPanel30.setDataPanel(0);
    }

    after_setColumnVisible() {
        let selector = this.selector;
        let grid = this.grid;
        let classControl = this;

        grid.classRange.removeRange(0, -1);
        grid.apply();
    }
}



