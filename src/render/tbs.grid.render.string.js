import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderString {
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    addElement(param) {
        const element = TbsGridDom.createElement('string');
        if (param.tableCell.childNodes[0].innerHTML != '') param.tableCell.childNodes[0].innerHTML = '';
        param.tableCell.childNodes[0].append(element);
    }
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    setBounding(param) {
        TbsGridDom.setStyle(param.tableCell, param);
        if (param.cellValue) {
            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
    }
}