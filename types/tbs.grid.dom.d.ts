import { TbsBase } from './base/tbs.base';
export declare class TbsGridDom extends TbsBase {
    static createElement(type: any): any;
    static createHtml(tag: any, tagType: any, className: any): any;
    static addElement(): void;
    static setBounding(): void;
    static setStyle(tableCell: any, param: any): void;
    static setCell(element: any, property: any, value: any): void;
    static setCellStyle(tableCell: any, property: any, value: any): void;
    static addUserClass(tableCell: any, className: any): void;
    static removeUserClass(tableCell: any): void;
    /**
     * Base Functions
     *
     */
    /**
     * Dom Functions
     *
     */
    static createElementCheckbox(): HTMLInputElement;
    static createElementCellDiv(): HTMLDivElement;
    static createElementCellIcon(): HTMLSpanElement;
    static createElementCellText(): HTMLSpanElement;
    static prependCheckbox(element: any, childElement: any): void;
    static prependIcon(element: any, childElement: any): void;
    /**
     * Table Functions
     */
    static createTable(): HTMLTableElement;
}
//# sourceMappingURL=tbs.grid.dom.d.ts.map