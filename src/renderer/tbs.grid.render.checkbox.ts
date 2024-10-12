import {TbsGridDom} from "../tbs.grid.dom";

export class TbsGridRenderCheckbox {
    addElement(param) {
        const element = TbsGridDom.createElement('checkbox');
        const tableCell = param.tableCell;

        let count = tableCell.querySelectorAll('.tbs-grid-html-checkbox').length;
        let rootChildCount = tableCell.childNodes[0].childNodes.length;

        if (rootChildCount > 1 || (rootChildCount == 1 && count == 0)) {
            tableCell.childNodes[0].innerHTML = '';
            tableCell.childNodes[0].append(element);
        }
        else if (count == 0) tableCell.childNodes[0].append(element);
    }

    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-checkbox');
        if (!element) return;

        TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        if (['panel30', 'panel31', 'panel32'].indexOf(param.panelName) != -1) {
            TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));
        }
        TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');
        // set value
        element.checked = param.cellValue;
    }
}