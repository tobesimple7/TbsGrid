export class TbsGridTypes {
    constructor() {
        this.FilterType = {
            Select         :  0,
            Equal          :  1,
            NotEqual       :  2,
            Greater        :  3,
            GreaterEqual   :  4,
            Less           :  5,
            LessEqual      :  6,
            Between        :  7,
            Blank          :  8,
            Include        :  9,
            NotInclude     : 10,
            StartCharacter : 11,
            EndCharacter   : 12,
        }

        this.ColumnKind = {
            column: 'column',
            header: 'header',
            empty: 'empty',
        }

        this.GridMode = {
            tree: 'tree',
            group: 'group',
            page: 'page',
            pagination: 'pagination',
        }

        this.CellType = {
            string: 'string',
            number: 'number',
            date: 'date',
            combo: 'combo',
            checkbox: 'checkbox',
            image: 'image',
            button: 'button',
            link: 'link',
        }

        this.Direction = {
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right',
        }

        this.BeforeAfter = {
            before: 'before',
            after: 'after'
        }

    }
}

export class TbsGridNames {
    constructor() {
        /**
         * column property name
         */
        this.column = {
            /**
             * System Property
             */
            rowId: '_rowId',
            rowMode: '_mode',
            isChecked: '_isChecked',
            num: '_number',
            parentNum: '_parentNumber',
            depth: '_depth',
            children: 'children',
            open: 'open',
            closed: 'closed',
            rowCount: '_rowCount',
            isOpen: '_isOpen',

            /**
             * User Property
             */
            name: 'name',
            text: 'text',
            type: 'type',
            width: 'width',
            editable: 'editable',
            visible: 'visible',
            align: 'align',
            scale: 'scale',
            roundType: 'roundType',
            fixedScale: 'fixedScale',
            scaleMax: 'scaleMax',
            scaleMin: 'scalemin',
            showZero: 'showZero',
            commaUnit: 'commaUnit',  // to be deprecated, Fixed 3
            thousandChar: 'thousandChar',
            decimalChar: 'decimalChar',
            currencyChar: 'currencyChar',
            className: 'className', // className
            resizable: 'resizable',
            sortable: 'sortable',
            movable: 'movable',
            autoResizable: 'autoResizable',
            autoWidth: 'autoWidth',
            summaryType: 'summaryType',
            required: 'required',
            combo: 'combo',
            format: 'format',
            kind: 'kind', //header, column, empty
            rowSpan: 'rowSpan',
            colSpan: 'colSpan',
            rowIndex: 'rowIndex',
            colIndex: 'colIndex',
            fromcol: 'fromcol',
            tocol: 'tocol',
            subRowSpan: 'subRowSpan',
            subColSpan: 'subColSpan',
            order: 'order',
            value: 'value'
        }

        /**
         * row property name
         */
        this.row = {
            selectMode: 'selectMode',
            addRow: 'addRow',
            delRow: 'delRow'
        }

        /**
         * tree property name
         */
        this.tree = {
            itemName: 'itemName',
            parentName: 'parentName',
            rootValue: 'rootValue',
        }
        this.option = {
            // Panel21 options
            rowMode: 'rowMode',
            checkbox: 'checkbox',
            numWidth: 'numWidth',
            rowModeWidth: 'rowModeWidth',
            checkBoxWidth: 'checkBoxWidth',
            insertRow: 'insertRow',
            updateRow: 'updateRow',
            deleteRow: 'deleteRow',
            zeroChar : 'zeroChar',
            useToolbar: 'useToolbar',
            imageRoot: 'imageRoot',
        }
    }
}
