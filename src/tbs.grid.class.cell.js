class TbsGridCell {

    constructor(grid) {
        this.grid = grid;
        this.selector = '#' + grid.gridId;
    }

    createHtml(cellType) {
        let selector = this.selector;
        let grid = this.grid;

        let result; // element
        if (cellType == 'group') {}
        else if (cellType == 'tree') {}
        else {}
    }

    /*
        createHtml00 : text => string, numeric, currency, date, combo
        createHtml01 : icon + image + text => group, tree
        createHtml02 : checkbox
        createHtml03 : button
        createHtml04 : radio
        createHtml05 : image
        createHtml06 : chart
        createHtml07 :
    */

}