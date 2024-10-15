import { TbsGridScrollBase } from "./tbs.grid.scroll.base";
import { TbsGridScroll } from "./tbs.grid.scroll";
import { TbsGridHeaders } from "./columns/tbs.grid.headers";
import { TbsGridColumns } from "./columns/tbs.grid.columns";
import { TbsGridControl } from "./tbs.grid.control";
import { TbsGridRange } from "./tbs.grid.range";
import { TbsGridRangePanel } from "./tbs.grid.range.panel";
import { TbsGridFilter } from "./tbs.grid.filter";
import { TbsGridGroup } from "./tbs.grid.group";
import { TbsGridPage } from "./tbs.grid.page";
import { TbsGridSort } from "./tbs.grid.sort";
import { TbsGridTree } from "./tbs.grid.tree";
import { TbsGridPanelBase } from "./panels/tbs.grid.panel.base";
import { TbsGridPanel10 } from "./panels/tbs.grid.panel10";
import { TbsGridPanel20 } from "./panels/tbs.grid.panel20";
import { TbsGridPanel30 } from "./panels/tbs.grid.panel30";
import { TbsGridPanel40 } from "./panels/tbs.grid.panel40";
import { TbsGridPanel50 } from "./panels/tbs.grid.panel50";
import { TbsGridPanel70 } from "./panels/tbs.grid.panel70";
import { TbsGridPanel80 } from "./panels/tbs.grid.panel80";
import { TbsGridPanel90 } from "./panels/tbs.grid.panel90";
import { TbsGridTop } from "./summary/tbs.grid.top";
import { TbsGridFooter } from "./summary/tbs.grid.footer";
import { TbsGridDate } from "./tbs.grid.date";
import { TbsGridCombo } from "./tbs.grid.combo";
import { TbsGridRow } from "./tbs.grid.row";
import { TbsGridCell } from "./tbs.grid.cell";
import { TbsGridBase } from "./tbs.grid.base";
export declare class TbsGrid extends TbsGridBase {
    classScroll: TbsGridScrollBase;
    verticalScroll: TbsGridScroll;
    horizontalScroll: TbsGridScroll;
    classHeader: TbsGridHeaders;
    classColumn: TbsGridColumns;
    classControl: TbsGridControl;
    classRange: TbsGridRange;
    classRange40: TbsGridRangePanel;
    classRange50: TbsGridRangePanel;
    classFilter: TbsGridFilter;
    classGroup: TbsGridGroup;
    classPage: TbsGridPage;
    classSort: TbsGridSort;
    classTree: TbsGridTree;
    classPanelBase: TbsGridPanelBase;
    classPanel10: TbsGridPanel10;
    classPanel20: TbsGridPanel20;
    classPanel30: TbsGridPanel30;
    classPanel40: TbsGridPanel40;
    classPanel50: TbsGridPanel50;
    classPanel70: TbsGridPanel70;
    classPanel80: TbsGridPanel80;
    classPanel90: TbsGridPanel90;
    classTop: TbsGridTop;
    classFooter: TbsGridFooter;
    tbsGridDate: TbsGridDate;
    tbsGridCombo: TbsGridCombo;
    classRow: TbsGridRow;
    classCell: TbsGridCell;
    topLineDiv: any;
    bottomLineDiv: any;
    leftLineDiv: any;
    rightLineDiv: any;
    constructor(gridId: string, gridConfigs: object);
    /**
     * Is Functions
     *
     */
    isEditableColumn(columnName: any): any;
    isSortableColumn(columnName?: string): boolean;
    isResizableColumn(columnName: string): boolean;
    isMovableColumn(columnName?: string): boolean;
    isAutoResizableColumn(columnName: any): boolean;
    isAutoWidthColumn(columnName: any): boolean;
    isClassName(element: any, className: any): any;
    isNotValidColumnType(columnType: any): boolean;
    isInPanel(e: any, panelName: any, startX: any, startY: any): boolean;
    isSelectedCell(panelName: any, rowIndex: any, cellIndex: any): number;
    isSelectedHeaderCell(panelName: any, cellIndex: any): number;
    isSelectedCell31(rowIndex: any, cellIndex: any): number;
    isSelectedCell30(rowIndex: any, cellIndex: any): number;
    isColumnName(columnName: any): boolean;
    isColumnTypeNumber(columnName: any): boolean;
    isFilterColumnName(columnName: any): boolean;
    isLastTopRowIndex(rowIndex: any): boolean;
    /**
     * Select Line Functions
     *
     */
    getFirstSelectedTableCell(panelName: string): any;
    getLastSelectedTableCell(panelName: any): any;
    clearSelectedLine(): void;
    setSelectedLine(lineWidth: any, lineHeight: any, rectTop: any, rectBottom: any, rectLeft: any, rectRight: any): void;
    displaySelectedLine(): void;
    displayOneSelection(startRowIndex: any, startCellIndex: any): void;
    getFirstDisplayRowIndex(panelName?: string): number;
    getFirstRowIndex(panelName?: string): number;
    getLastRowIndex(): number;
    getLastTableRowIndex(): number;
    event_input(): void;
    event_input_icon(): void;
    input_show(e: any, mode: any): void;
    input_hide(): void;
    input_focus(): void;
    editStart(e: any, mode: any): void;
    editing(e: any, mode: any): void;
    editEnd(e?: any, mode?: any): void;
    /**
     * Event Functions
     *
     */
    tbs_addEventAll(): void;
    event_columnSort(cell: any): boolean;
    event_mobileTouchDrag(): void;
    event_columnResize(panelName: any): void;
    event_wheel(): void;
    event_scrollButton(): void;
    event_railClick(): void;
    event_dragScrollBar(): void;
    tbs_moveCellLine(cell: any, rowIndex: any, cellIndex: any): void;
    isMovedPositionInConstRange(startX: any, startY: any, lastX: any, lastY: any): boolean;
    tbs_executeEvent(isUserFunction: any, eventType: any, param: any): void;
    tbs_getMaxRowIndexByMouseMove: () => any;
    tbs_getMinRowIndexByMouseMove: () => any;
    tbs_getMaxCellIndexByMouseMove: () => any;
    tbs_getMinCellIndexByMouseMove: () => any;
    tbs_getMaxRowIndexByMouseMove2: (panelName: any) => any;
    tbs_getMinRowIndexByMouseMove2: (panelName: any) => any;
    tbs_getMaxCellIndexByMouseMove2: (panelName: any) => any;
    tbs_getMinCellIndexByMouseMove2: (panelName: any) => any;
    getOffset(el: any): {
        top: number;
        left: number;
    };
    tbs_moveNextRowCell(type: any): void;
    tbs_moveCell(type: any): void;
    getUserImageRoot(columnName: string): any;
    getRenderer(columnName: string, property: string): any;
    setRenderer(renderer: any): void;
    getInfoRenderer(columnName: any, property: any): any;
    setInfoRenderer(renderer: any): void;
    /**
     * Check Box Options
     */
    getTrueValue(columnName: any): any;
    getFalseValue(columnName: any): any;
    getElseValue(columnName: any): any;
    getBooleanValue(columnName: any, valueType: any): any;
    reverseBoolean(value: any): boolean | 0 | 1 | "1" | "0" | "Y" | "N" | "n" | "y";
    /**
     * Format Functions
     *
     */
    getFormatValue(col: any, value: any): any;
    getFormatText(col: any, value: any): any;
    getFormat(column: any, value: any): any;
    getFormatNumber(column: any, value: any): any;
    getFormatDate(column: any, value: any): any;
    /**
     *  Group Functions
     */
    showGroupPanel(): void;
    hideGroupPanel(): void;
    setGroupColumns(groupColumns: any): void;
    setSortColumns(sortColumns: any): void;
    /**
     * Tree Functions
     */
    setTreeSortColumn(sortColumn: any): void;
    /**
     *  Panel10 Functions
     */
    showToolbarPanel(): void;
    hideToolbarPanel(): void;
    showToolbarButtons(buttonType: any): void;
    hideToolbarButtons(buttonType: any): void;
    showFilterPanel(): void;
    hideFilterPanel(): void;
    showSortPanel(): void;
    hideSortPanel(): void;
    /**
     *  TbsGrid Config
     */
    setGridConfig(tbsGridConfig: any): void;
    /**
     * Column Functions
     */
    setFixedColumn(fixedColumnIndex: any): void;
    removeFixedColumn(): void;
    /**
     * Display grid
     */
    apply(): void;
    /**
     * Main Functions
     */
    createHtml(): void;
    setToolbar(toolbar: any): void;
    setDataColumns(columns: any): void;
    setGrid(columns: any, options?: {}): void;
    createGrid(column: any): void;
    updateGrid(column: any): void;
    getTextWidth(canvas: any, text: any, fontSize: any, fontFamily: any): any;
    getTextWidth2(context: any, text: any): any;
    setColumnAutoWidth(): void;
    setRowHeight(type: any, rowHeight: any): void;
    setGridModePage(): void;
    setGridModePagenation(): void;
    setData(data: any, openDepth?: number, isFirst?: boolean): void;
    setGridMode(gridMode: any): void;
    setGridData(data: any, isFirst: any): void;
    refreshRefData(): void;
    /**
     * Columns API.
     */
    getColumn(name: any, table?: any): any;
    getColumns(table?: any): any;
    getColumnByIndex(columnIndex: any, table?: any): any;
    getColumnName(columnIndex: any, table?: any): any;
    getColumnIndex(columnName: any, table?: any): any;
    setColumn(columnName: any, property: any, value: any, table?: any): void;
    /**
     * Filter Columns
     */
    getFilterColumn(columnName: any): any;
    getFilterColumnName(columnIndex: any): any;
    getFilterColumnIndex(columnName: any): any;
    /**
     * Columns API
     */
    setTopColumns(topColumns: any): void;
    setFooterColumns(footerColumns: any): void;
    /**
     * Header Columns API.
     */
    getHeaderColumn(rowIndex: any, columnIndex: any): object;
    getHeaderColumnByNumber(num: any): any;
    addColumn(addColumn: any, targetColumnIndex: any, orderType: any): void;
    removeColumn(targetColumnIndex: any): void;
    setHeaderProperty(rowIndex: any, colIndex: any, property: any, value: any): void;
    /**
     * Row functions
     */
    getPageRowCount(panelName: any): number;
    getTopRowIndex(panelName: any, topRowIndex: any): any;
    getBottomRowIndex(panelName: any, topRowIndex: any): number;
    createRow(row: any): void;
    /**
     * view table rows
     */
    getRowCount(table?: any): any;
    getRow(rowIndex: any, table?: any): any;
    getRows(startRowIndex?: any, endRowIndex?: any, table?: any): any;
    getRowByRowId(rowId: any, table?: any): any;
    getRowIndexByRowId(rowId: any, table?: any): any;
    getCheckedRows(): object[];
    getSelectedRows(): any[];
    getSelectedRowsIndexArray(): any[];
    getChangedRowsData(): any[];
    getDeletedRowsData(): any[];
    getUpdatedRowsData(): any[];
    getInsertedRowsData(): any[];
    addRow(row: any, type?: string): void;
    removeRows(rows: any): void;
    /**
     * source table rows
     */
    getSourceRowCount(): any;
    getSourceRow(rowIndex: any): any;
    getSourceRows(startRowIndex: any, endRowIndex: any): any;
    getSourceRowByRowId(rowId: any): any;
    getSourceRowIndexByRowId(rowId: any): any;
    /**
     * top table rows
     */
    getTopRowCount(): any;
    getTopRow(rowIndex: any): any;
    getTopRows(startRowIndex: any, endRowIndex: any): any;
    getTopRowByRowId(rowId: any): any;
    getTopRowIndexByRowId(rowId: any): any;
    /**
     * footer table rows
     */
    getFooterRowCount(): any;
    getFooterRow(rowIndex: any): any;
    getFooterRows(startRowIndex: any, endRowIndex: any): any;
    getFooterRowByRowId(rowId: any): any;
    getFooterRowIndexByRowId(rowId: any): any;
    /**
     * tree table rows
     */
    getTreeRowCount(): any;
    getTreeRow(rowIndex: any): any;
    getTreeRows(startRowIndex: any, endRowIndex: any): any;
    getTreeRowByRowId(rowId: any): any;
    getTreeRowIndexByRowId(rowId: any): any;
    /**
     * Data Value, Text
     */
    getValue(rowIndex: any, columnName: any, table?: any): any;
    getValueByColumnIndex(rowIndex: any, columnIndex: any, table?: any): any;
    getText(rowIndex: any, columnName: any, table?: any): any;
    getTextByIndex(rowIndex: any, columnIndex: any, table: any): any;
    setValue(rowIndex: any, columnName: any, value: any): void;
    setValueByColumnIndex(rowIndex: any, cellIndex: any, value: any): void;
    /** info_column_table */
    getInfoValue(columnName: any, property: any): any;
    setInfoValue(columName: any, property: any, value: any): void;
    /**
     * Range Functiopns
     */
    setRange(rowIndex1: any, toRowIndex2: any, columnIndex1: any, columnIndex2: any): void;
    selectRange(rowIndex1: any, toRowIndex2: any, columnIndex1: any, columnIndex2: any): void;
    /**
     * Options
     */
    createOption(options: any): void;
    setOption(optionName: any, optionValue: any): void;
    setOptions(options: any): void;

    /**
     * Dom Lib
     */
    addUserClass(element: any, className: string): void;
    removeUserClass(element: any): void;
    /**
     * Export Excel
     */
    exportExcel(options: any): void;
}
//# sourceMappingURL=tbs.grid.d.ts.map