/**
 * tbs.grid.panel21.js
 *
 */
TbsGrid.prototype.panel21_select = function() { //type : header, content, left, top
    let selector = '#' + this.gridId;
    let grid = this;

    let table = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table');
    const mouseDownEvent = function (e) {
        let col = e.target.closest('.tbs-grid-cell')
        if (col.cellIndex == 0) {
            grid.tbs_removeRange(0, -1);
            grid.tbs_selectRange(0, -1);
        }
        document.addEventListener('mouseup', mouseUpEvent);
    };
    const mouseUpEvent = function (e) {
        document.removeEventListener('mouseup', mouseUpEvent);
        grid.input_focus();
    };
    table.addEventListener('mousedown', mouseDownEvent);             
}

