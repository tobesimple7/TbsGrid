import { TbsGrid } from "./tbs.grid";
export declare class TbsGridDate {
    colType: any;
    grid: TbsGrid;
    gridId: string;
    column: object;
    input: HTMLInputElement;
    constructor(grid: TbsGrid, column: object, input: HTMLInputElement);
    create(): void;
    clear(): void;
    setData(data?: any): void;
    getToday(): string;
    today(): void;
    prev(): void;
    next(): void;
    selectMonth(value: any): void;
    addEvent(): void;
    addZero(value: any): any;
    destroy(): void;
}
//# sourceMappingURL=tbs.grid.date.d.ts.map