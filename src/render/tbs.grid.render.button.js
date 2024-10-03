import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderButton {

    addElement(param) {
        const element = TbsGridDom.createElement('button');
        const tableCell = param.tableCell;

        if (tableCell.childNodes[0].innerHTML != '') tableCell.childNodes[0].innerHTML = '';
        if (tableCell.querySelectorAll('.tbs-grid-html-button').length == 0) tableCell.childNodes[0].append(element);
    }

    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-button');
        if (!element) return;

        TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));

        TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');

        // set value
        element.innerHTML = param.cellText;
    }
}