export class TbsGridUserEvent {
    onClick: any;
    onDblclick: any;
    onEdit: any;
    onClickCheckbox: any;
    onClickInfoCheckBox: any;
    onClickButton: any;
    onClickLink: any;
    onRowBounding: any;
    onClickPageFirst: any;
    onClickPagePrev: any;
    onClickPageIndex: any;
    onClickPageNext: any;
    onClickPageLast: any;

    constructor() {
        /**
         * user event
         */

        this.onClick = null; // (grid, row)

        this.onDblclick = null; // (grid, row)

        this.onEdit = null; // (grid, state, row)

        this.onClickCheckbox = null; // (grid, row)

        this.onClickInfoCheckBox = null; // (grid, row)

        this.onClickButton = null; // (grid, row)

        this.onClickLink = null; // (grid, row)

        this.onRowBounding = null; // grid, element, row

        this.onClickPageFirst = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.onClickPagePrev = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.onClickPageIndex = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.onClickPageNext = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.onClickPageLast = null; // (grid, pageIndex, selectedPageCount, userFunction)
    }
}