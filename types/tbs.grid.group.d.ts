import { TbsGrid } from "./tbs.grid";
import { columnAlias } from "./tbs.grid.types";
export declare class TbsGridGroup {
    grid: TbsGrid;
    selector: string;
    openDepth: number;
    splitChar: string;
    constructor(grid: any);
    setGroupData(data: any, openDepth?: number, isFirst?: boolean): void;
    createGroupData(): void;
    createGroupKeyData(dataRows: any, depth?: number): any[];
    getGroupKeyByDepth(row: any, depth: any): string;
    getGroupKeyRowByDepth(row: any, depth: any): {};
    /**
     * Group Sum, Avg
     */
    getGroupDepthSummary(rowIndex: any): void;
    getGroupSummary(): void;
    /**
     * spanIcon, spanImg, spanText
     */
    setGroupIcon(tableCell: any, rowIndex: any): void;
    toggleGroupIcon(rowIndex: any, element: any, type: any): void;
    isGroupChildrenRow(rowIndex: any): boolean;
    getGroupchildRows(folding: any, rowIndex: any): any[];
    setGroupFolding(tableCell: any): void;
    getGroupFlodingStatus(tableCell: any): columnAlias.open | columnAlias.closed;
    openChildRow(arrayRows: any, rootRow: any): void;
    openGroupRow(rowIndex?: number): void;
    closeChildRow(rowIndex: any): void;
    closeGroupRow(rowIndex: any): void;
    /**
     * Group Button
     */
    changeGroupButtonOrder(name: any, text: any, order: any, targetIndex: any): void;
    addGroupButton(name: any, text: any, order: any, targetIndex: any): void;
    removeGroupButton(element: any): void;
    removeGroupButtonList(): void;
    getGroupButtonList(): void;
    createGroupButton(columnName: any): HTMLDivElement;
    toggleGroupPlaceHolder(): void;
    destroy(): void;
    showGroupPanel(): void;
    hideGroupPanel(): void;
    initGroupData(): void;
    getGroupRow(columnName: any): object;
    expandGroup(): void;
    collapseGroup(): void;
}
//# sourceMappingURL=tbs.grid.group.d.ts.map