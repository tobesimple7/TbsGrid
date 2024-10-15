import {TbsGrid} from "../tbs.grid";
import {columnAlias, GridMode} from "../tbs.grid.types";

export class TbsGridPagination {
    grid: TbsGrid;
    selector: string;

    pageIndex: number;
    pageCount: number;
    pageTotalRowCount: number;

    constructor(grid: TbsGrid) {
        this.grid = grid;
        this.selector = `#${grid.gridId}`;

        this.pageIndex = 1;
        this.pageCount = 0;
        this.pageTotalRowCount = 0;
    }

    setTotalRowCount(totalRowCount: number) {
        this.pageCount = Math.ceil(totalRowCount / this.grid.options.pageRowCount);
        this.pageTotalRowCount = totalRowCount;
    }

    setPaginationData(data: any[]) {
        const selector = this.selector;
        const grid = this.grid;

        if (data == undefined) return;

        grid.source_table.remove();
        grid.view_table.remove();

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

        /* create top_data */
        //grid.classTop.setTopData();

        /* create footer_data */
        //grid.classFooter.setFooterData();

        //if (this.isAutoWidthColumn()) this.setColumnAutoWidth();

        (document.querySelector(`${selector} .tbs-grid-panel10-filter-input`) as any).value = '';
        grid.classRange.removeRange(0, -1);
        grid.classRange.selectRange(0, 0, 0, 0);

        document.querySelector(`${selector} .tbs-grid-panel21 td div`).textContent = String(this.pageTotalRowCount);
        grid.classPanel30.setDataPanel(0);
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel40.setDataPanel();
        grid.classPanel50.setDataPanel();
    }
}

