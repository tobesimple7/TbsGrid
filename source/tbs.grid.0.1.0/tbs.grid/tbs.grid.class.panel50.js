/** @Rule
 * - summary top, footer rowCount = 1.
 * - allow left, right movement.
 * - deny up, down movement.
 *
 */
class TbsGridPanel50 extends TbsGridPanelBase {
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
}

