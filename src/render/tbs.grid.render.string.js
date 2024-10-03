import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderString {
    /**
     * @param { panelName, columnName, tableCell, cellValue, className, visible, align, width }
     */
    addElement(param) {
        const element = TbsGridDom.createElement('string');
        param.tableCell.childNodes[0].innerHTML = '';
        param.tableCell.childNodes[0].append(element);
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

        if (param.cellValue) {
            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
    }
}