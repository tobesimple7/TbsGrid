/** @Rule
 * - summary top, footer rowCount = 1.
 * - allow left, right movement.
 * - deny up, down movement.
 *
 */
class TbsGridPanel50 extends TbsGridPanelBase {
    constructor(grid) {
        super(grid);
        this.panelName  = 'panel50';

        this.panelName1 = 'panel51';
        this.panelName2 = 'panel52';
        this.panelName0 = 'panel50';
    }
    createHtml(parentElement) {
        let grid = this.grid;
        let s = '';
        s += '<div class="tbs-grid-group51">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel51"><table class="tbs-grid-table"></table></div>';
            s += '<div class="tbs-grid-panel52"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        s += '<div class="tbs-grid-group50">';
            s += '<div class="tbs-grid-panel">';
            s += '<div class="tbs-grid-panel50"><table class="tbs-grid-table"></table></div>';
            s += '</div>';
        s += '</div>';
        parentElement.insertAdjacentHTML('beforeend', s);
    }
    setDataPanel() {
        let selector = this.selector;
        let grid = this.grid;

        grid.classRange.removePanelRange('panel50');
        this.setDataPanel2({panelName: 'panel51', summaryColumns: grid.footerColumns });
        this.setDataPanel1({panelName: 'panel50', summaryColumns: grid.footerColumns });
        this.setDataPanel0({panelName: 'panel52', summaryColumns: grid.footerColumns });
    }
    setDataPanel1() {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName1;

        if (grid.topColumns.length == 0) return;

        let topRowIndex = 0;
        let bottomRowIndex = 0;

        let pageRowCount = 1;
        let rowHeight = grid.rowHeight;

        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        if (tableRows.length == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        let tableRowIndex = 0;

        for (let i = topRowIndex; i < bottomRowIndex + 1; i++) {
            let tableRow = tableRows[tableRowIndex];

            /* Render: TableRow */
            grid.classRender.setTableRow(tableRow, i, panelName);

            let tableCell = tableRow.childNodes[0];
            tableCell.dataset.rowIndex = i;
            tableCell.dataset.displayRowIndex = i;

            tableRow.childNodes[0].dataset.cellType = 'number';
            grid.classRender.showSelectedCells(panelName, tableCell, 0, i);
        }
    }
    setDataPanel2() {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName2;

        if (grid.topColumns.length == 0) return;

        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRender.setTableHead(panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0; x <= lastColumnIndex; x++) {
            let column = grid.columns[x];
            let tableCell = tableRow.childNodes[x];

            if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, column, 0, x);

            grid.classRender.showSelectedCells(panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);
    }
    setDataPanel0() {
        let selector = this.selector;
        let grid = this.grid;
        let panelName = this.panelName0;

        if (grid.topColumns.length == 0) return;
        //startColumnIndex, lastColumIndex
        let result = grid.classHeader.getDisplayedHeaderColumn();
        let startColumnIndex= result.startColumnIndex;
        let lastColumnIndex = result.lastColumnIndex;

        /* table thead */
        grid.classRender.setTableHead(panelName);

        /* table tbody */
        let tableRows = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr');
        let tableRow = tableRows[0];
        for (let x = 0, len = grid.columns.length; x < len; x++) {
            let column = grid.columns[x];
            let columnName = column[grid.column_name];
            let tableCell = tableRow.childNodes[x];

            if (grid.fixedColumnIndex != -1) {
                if (x > grid.fixedColumnIndex && x < startColumnIndex) continue;
            }
            else { if (x < startColumnIndex) continue; }

            /* Render: Start */
            grid.classRender.start(panelName, tableCell, grid.columns[x], 0, x);

            grid.classRender.showSelectedCells(panelName, tableCell, 0, x);
        }
        // on fixed columns
        grid.classRender.hideTableCells(panelName, tableRow, lastColumnIndex);
    }

}

