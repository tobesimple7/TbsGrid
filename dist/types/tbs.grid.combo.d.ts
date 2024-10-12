import { TbsGrid } from "./tbs.grid";
export declare class TbsGridCombo {
    colType: any;
    grid: TbsGrid;
    gridId: string;
    column: object;
    input: HTMLInputElement;
    input_code: HTMLInputElement;
    constructor(grid: TbsGrid, column: any, input: any, input_code: any);
    create(): void;
    clear(): void;
    setData(): void;
    AddEvent(): void;
    destroy(): void;
}
//# sourceMappingURL=tbs.grid.combo.d.ts.map