import {TbsGridDom} from "../tbs.grid.dom.js";
import {tbsGridNames} from "../tbs.grid.types.js";

export class TbsGridRenderImg {

    addElement(param) {
        const element = TbsGridDom.createElement('img');
        const tableCell = param.tableCell;

        //if (tableCell.childNodes[0].innerHTML != '') tableCell.childNodes[0].innerHTML = '';
        if (tableCell.querySelectorAll('.tbs-grid-html-img').length == 0) tableCell.childNodes[0].append(element);
    }

    setBounding(param) {
        const element = param.tableCell.querySelector('.tbs-grid-html-img');

        TbsGridDom.setStyle(param.tableCell, param); // editable, align, className,
        //TbsGridDom.setCell(element, 'disabled', (param.editable ? '' : 'disabled'));

        // set value
        element.src = param.grid.getUserImageRoot(param.columnName) + param.cellValue;
        element.width = param.grid.getRenderer(param.columnName, 'width') ?
                        param.grid.getRenderer(param.columnName, 'width') : param.column[tbsGridNames.column.width];
        element.height = param.grid.getRenderer(param.columnName, 'height') ?
                        param.grid.getRenderer(param.columnName, 'height') : param.grid.rowHeight;
    }
}