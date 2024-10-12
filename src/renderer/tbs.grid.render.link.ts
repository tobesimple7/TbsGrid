import {TbsGridDom} from "../tbs.grid.dom";

export class TbsGridRenderLink {

    addElement(param) {
        const element = TbsGridDom.createElement('link');
        const tableCell = param.tableCell;

        let count = tableCell.querySelectorAll('.tbs-grid-html-link').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;

        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0) tableCell.childNodes[0].append(element);
    }

    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-link');

        TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.href = param.cellValue;
        element.innerHTML = param.cellText;
        element.target = '_blank';
    }
}