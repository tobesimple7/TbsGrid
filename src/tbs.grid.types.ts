export interface FormatData {
    text: string,
    value: string | number
}

export interface TopColumn {
    name: string,
    text?: string,
    align?: string,
    summaryType?: string,
    className?:  string,
}

export interface FooterColumn {
    name: string,
    text?: string,
    align?: string,
    summaryType?: string,
    className?:  string,
}

export interface GroupColumn {
    name: string
}

export interface SortColumn {
    name: string,
    order: string,
    orderNumber: number
}

export interface FilterColumn {
    name: string,
    type: string,
    value: any,
}

export interface Column {
    _rowId: number,
    _rowMode: string,
    _isChecked: boolean,
    _number: number,
    _parentNumber: number,
    _depth: number;

    _childRowIds: any[],
    _childRows: any[],
    _childCount: number,
    _isOpen: boolean,

    /**
     * User Property
     */
    name: string,
    text?: string,
    type?: string,
    children?: string,
    dataType?: string,
    width?: string | number,
    editable?: boolean,
    visible?: boolean,
    align?: string,
    scale?: string,
    roundType?: string,
    fixedScale?: string,
    scaleMax?: string,
    scaleMin?: string,
    showZero?: boolean,
    commaUnit?: boolean,
    thousandChar?: boolean,
    decimalChar?: string,
    currencyChar?: string,
    className?:  string,
    resizable?: boolean,
    sortable?: boolean,
    movable?: boolean,
    autoResizable?: boolean,
    autoWidth?: boolean,
    summaryType?: string,
    required?: boolean,
    format?: boolean,
    kind?: ColumnKind,
}

export interface GridOption {
    showToolbarPanel?: boolean,
    showFilterPanel?: boolean,
    showSortPanel?: boolean,
    showGroupPanel?: boolean,

    // Columns GridOption
    sortable?: boolean,
    resizable?: boolean,
    movable?: boolean,
    autoResizable?: boolean,
    autoWidth?: boolean,

    // Rows GridOption
    selectMode?: string,
    addRow?: boolean,
    delRow?: boolean,
    insertRow?: boolean,
    updateRow?: boolean,
    deleteRow?: boolean,
    zeroChar?: string,
    useToolbar?: boolean,
    imageRoot?: string,

    // Tree Options
    treeItemName?: string,
    treeParentName?: string,
    treeRootValue?: string,

    // Paging Options
    pageRowCount?: number;
    pageRowCountList?: number[];

    trueValue?: any;
    falseValue?: any;
    elseValue?: any;
}

export interface GridRenderer {
    trueValue?: any;
    falseValue?: any;
    elseValue?: any;
}
export enum ClickPageOrder {
    first = 'first',
    last = 'last',
    prev = 'prev',
    next = 'next'
}

export enum FilterType {
    Select         =  0,
    Equal          =  1,
    NotEqual       =  2,
    Greater        =  3,
    GreaterEqual   =  4,
    Less           =  5,
    LessEqual      =  6,
    Between        =  7,
    Blank          =  8,
    Include        =  9,
    NotInclude     = 10,
    StartCharacter = 11,
    EndCharacter   = 12,
}

export enum ColumnKind {
    column = 'column',
    header = 'header',
    empty  = 'empty',
}

export enum CellType {
    string = 'string',
    number = 'number',
    date = 'date',
    combo = 'combo',
    checkbox = 'checkbox',
    img = 'img',
    button = 'button',
    link = 'link',
    group = 'group',
    tree = 'tree'
}

export enum GridMode {
    grid = '',
    tree = 'tree',
    page = 'page',
    pagination = 'pagination',
}

export enum AddRowDirection {
    top = 'top',
    bottom = 'bottom',
    before = 'before',
    after = 'after'
}

export enum Direction {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right',
}

export enum BeforeAfter {
    before = 'before',
    after = 'after'
}

/**
 * Alias
 */

export enum OptionAlias {
    rowMode = 'rowMode',
    checkbox = 'checkbox',
    numWidth = 'numWidth',
    rowModeWidth = 'rowModeWidth',
    checkBoxWidth = 'checkBoxWidth',
    insertRow = 'insertRow',
    updateRow = 'updateRow',
    deleteRow = 'deleteRow',
    zeroChar  = 'zeroChar',
    useToolbar = 'useToolbar',
    imageRoot = 'imageRoot',
}

export enum ColumnAlias {
    rowId = '_rowId',
    rowMode = '_mode',
    isChecked = '_isChecked',
    num = '_number',
    mode = '_mode',
    checkbox = '_checkbox',
    parentNum = '_parentNumber',
    depth = '_depth',
    children = 'children',
    childRowIds = '_childRowIds',
    childRows = '_childRows',
    childCount = '_childCount',
    isOpen = '_isOpen',
    isShow = '_isShow',
    open = 'open',
    closed = 'closed',
    rowCount = '_rowCount',
    /**
     * User Property
     */
    name = 'name',
    text = 'text',
    type = 'type',
    dataType = 'dataType',
    width = 'width',
    editable = 'editable',
    visible = 'visible',
    align = 'align',
    scale = 'scale',
    roundType = 'roundType',
    fixedScale = 'fixedScale',
    scaleMax = 'scaleMax',
    scaleMin = 'scalemin',
    showZero = 'showZero',
    commaUnit = 'commaUnit',  // to be deprecated, Fixed 3
    thousandChar = 'thousandChar',
    decimalChar = 'decimalChar',
    currencyChar = 'currencyChar',
    className = 'className', // className
    resizable = 'resizable',
    sortable = 'sortable',
    movable = 'movable',
    autoResizable = 'autoResizable',
    autoWidth = 'autoWidth',
    summaryType = 'summaryType',
    required = 'required',
    combo = 'combo',
    format = 'format',
    kind = 'kind', //header, column, empty
    rowSpan = 'rowSpan',
    colSpan = 'colSpan',
    rowIndex = 'rowIndex',
    colIndex = 'colIndex',
    subRowSpan = 'subRowSpan',
    subColSpan = 'subColSpan',
    order = 'order',
    value = 'value'
}

export enum RowAlias {
    selectMode = 'selectMode',
    addRow = 'addRow',
    delRow = 'delRow'
}

export enum TreeAlias {
    itemName = 'itemName',
    parentName = 'parentName',
    rootValue = 'rootValue',
}




