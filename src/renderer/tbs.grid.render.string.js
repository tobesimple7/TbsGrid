import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderString {
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    addElement(param) {
        const element = TbsGridDom.createElement('string');
        const tableCell = param.tableCell;

        let count = tableCell.querySelectorAll('.tbs-grid-html-string').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;

        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0) tableCell.childNodes[0].append(element);
    }
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    setBounding(param) {
        TbsGridDom.setStyle(param.tableCell, param);
        if (param.depth && param.columnIndex == 0) {
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
        }
        else {
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        }

        const element = param.tableCell.querySelector('.tbs-grid-html-string');
        if (param.cellValue) {
            TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
        else {
            TbsGridDom.setCell(element, 'textContent', '');
        }
    }
}