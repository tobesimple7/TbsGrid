export class TbsGridUserEvent {
    click: any;
    dblclick: any;
    edit: any;
    clickCheckbox: any;
    clickInfoCheckBox: any;
    clickButton: any;
    clickLink: any;
    rowBounding: any;
    clickPageFirst: any;
    clickPagePrev: any;
    clickPageIndex: any;
    clickPageNext: any;
    clickPageLast: any;

    constructor() {
        /**
         * user event
         */

        this.click = null; // (grid, row)

        this.dblclick = null; // (grid, row)

        this.edit = null; // (grid, state, row)

        this.clickCheckbox = null; // (grid, row)

        this.clickInfoCheckBox = null; // (grid, row)

        this.clickButton = null; // (grid, row)

        this.clickLink = null; // (grid, row)

        this.rowBounding = null; // grid, element, row

        this.clickPageFirst = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.clickPagePrev = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.clickPageIndex = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.clickPageNext = null; // (grid, pageIndex, selectedPageCount, userFunction)

        this.clickPageLast = null; // (grid, pageIndex, selectedPageCount, userFunction)
    }
}