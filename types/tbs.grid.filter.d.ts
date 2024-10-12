import { TbsGrid } from "./tbs.grid";
export declare class TbsGridFilter {
    grid: TbsGrid;
    selector: string;
    constructor(grid: TbsGrid);
    showFilterPanel(): void;
    hideFilterPanel(): void;
    filters(): void;
    filter(data: any, filterColumn: any): any;
    filterNumberByType(filterType: any, n: any, targetNumber: any): boolean;
    filterStringByType(filterType: any, s: any, targetString: any): any;
    setFilterColumn(column: any, filterType: any, word: any): void;
    removeFilterColumn(column: any): void;
    createFilterCombo(column: any): HTMLSelectElement;
    addFilterComboOption(combo: any, value: any, text: any): void;
    initFilterData(): void;
}
//# sourceMappingURL=tbs.grid.filter.d.ts.map