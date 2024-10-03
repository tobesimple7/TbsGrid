import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderCheckbox {
    addElement(param) {
        const element = TbsGridDom.createElement('checkbox');
        const tableCell = param.tableCell;

        if (tableCell.childNodes[0].innerHTML != '') tableCell.childNodes[0].innerHTML = '';
        if (tableCell.querySelectorAll('.tbs-grid-html-checkbox').length == 0) tableCell.childNodes[0].append(element);
    }

    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-checkbox');
        if (!element) return;

        TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        if (['panel30', 'panel32'].indexOf(param.panelName) != -1) {
            TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        }
        TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.checked = param.cellValue;
    }
}