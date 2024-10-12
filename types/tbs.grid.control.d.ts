import { TbsGrid } from "./tbs.grid";
export declare class TbsGridControl {
    grid: TbsGrid;
    selector: string;
    constructor(grid: TbsGrid);
    after_changeColumnOrder(): void;
    after_addColumn(): void;
    after_removeColumn(headerColumns: any, columns: any): void;
    after_showFilterPanel(): void;
    after_hideFilterPanel(): void;
    after_showSortrPanel(): void;
    after_hideSortPanel(): void;
    after_setColumnVisible(): void;
}
//# sourceMappingURL=tbs.grid.control.d.ts.map