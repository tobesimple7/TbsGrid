import { TbsGrid } from "../tbs.grid";
export declare class TbsGridHeaders {
    grid: TbsGrid;
    selector: string;
    constructor(grid: TbsGrid);
    createHeaderColumns(): void;
    createHeaderColumnTable(): void;
    updateHeaderFixedColumns(): void;
    getDisplayedHeaderColumn(panelName?: string): {
        startColumnIndex: number;
        lastColumnIndex: number;
    };
    getHeaderRootColumn(rowId: any): void;
    getHeaderParentColumn(rowId: any): void;
    getHeaderColumnByRowId(rowId: any): void;
    getHeaderChildColumns(rowId: any, depth?: number): void;
    setHeaderValue(rowIndex: any, columnIndex: any, value: any): void;
    getHeaderColumn(rowIndex: any, columnIndex: any): object;
    getHeaderColumnByNumber(num: any): any;
    getHeaderPropertyByIndex(columnIndex: any, property: any): any;
    getHeaderProperty(columnName: any, property: any): any;
    setHeaderProperty(rowIndex: any, colIndex: any, property: any, value: any): void;
}
//# sourceMappingURL=tbs.grid.headers.d.ts.map