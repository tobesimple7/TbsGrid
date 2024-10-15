import {TbsGrid} from "../tbs.grid";
import {columnAlias, GridMode} from "../tbs.grid.types";

export class TbsGridPage {
    grid: TbsGrid;
    selector: string;

    pageIndex: number;
    pageCount: number;
    //pageRowCount: number;
    pageTotalRowCount: number;

    constructor(grid: TbsGrid) {
        this.grid = grid;
        this.selector = `#${grid.gridId}`;

        this.pageIndex = 0;
        this.pageCount = 0;
        //this.pageRowCount = 0;
        this.pageTotalRowCount = 0;
    }

    setPageData2() {
        const selector = this.selector;
        const grid = this.grid;

        if (grid.grid_mode != GridMode.page) return;
        if (grid.page_table.count() == 0) return;

        let pageRowCount = grid.options.pageRowCount;

        this.pageTotalRowCount = grid.page_table.count();
        this.pageCount = Math.ceil(grid.page_table.count() / pageRowCount);

        if (this.pageIndex == 0) this.pageIndex = 1;

        if (this.pageIndex < 1) this.pageIndex = 1;
        else if (this.pageIndex > this.pageCount) this.pageIndex = this.pageCount;

        grid.startRowIndex = (this.pageIndex - 1) * pageRowCount;
        grid.lastRowIndex =  grid.startRowIndex + pageRowCount - 1;

        if (grid.lastRowIndex > grid.page_table.count() - 1) grid.lastRowIndex = grid.page_table.count() - 1;

        grid.view_table.remove();
        for (let i = grid.startRowIndex; i <= grid.lastRowIndex; i++) {
            const row = grid.page_table.data[i];
            grid.view_table.insert(grid.copyJson(row));
        }
    }
    setPageData(data: any[], isFirst: boolean = false) {
        let selector = this.selector;
        const grid = this.grid;

        if (data == undefined) return;

        if (isFirst) {
            grid.source_table.remove();
            grid.view_table.remove();
            grid.page_table.remove();
            grid.data_select_panel30 = [];
            grid.data_select_panel31 = [];

            for (let i = 0, len = data.length; i < len; i++) {
                const dataRow = data[i];

                const source = {};
                const columns: any[] = grid.column_table.selectRows();
                for (let x = 0, len = columns.length; x < len; x++) {
                    const column = columns[x];
                    let columnName  = column[columnAlias.name];
                    source[columnName] = grid.null(dataRow[columnName]) ? null : grid.getFormatValue(column, dataRow[columnName]);
                }

                grid.source_table.insert(source);
            }

            grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

            /* Filter */
            grid.classFilter.filters();

            /* Sorting */
            grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

            /**
             * pageIndex
             */

            grid.view_table.data.map(dataRow => grid.page_table.insert(grid.copyJson(dataRow)));
            this.setPageData2();
        }
        else {
            grid.view_table.remove();
            grid.page_table.remove();

            grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

            /* Filter */
            grid.classFilter.filters();

            /* Sorting */
            grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

            /**
             * pageIndex
             */

            grid.view_table.data.map(dataRow => grid.page_table.insert(grid.copyJson(dataRow)));

            this.setPageData2();
        }

        /* create top_data */
        //grid.classTop.setTopData();

        /* create footer_data */
        //grid.classFooter.setFooterData();

        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();

        grid.classRange.removeRange(0, -1);
        grid.classRange.selectRange(0, 0, 0, 0);

        if (data.length == 0) {
            document.querySelector(`${selector} .tbs-grid-panel21 td div`).textContent = '0';
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
        const span = document.querySelector(`${selector} .tbs-grid-panel99-page-select`);
        span.textContent = `${this.pageIndex} / ${this.pageCount}`;

    }
}

