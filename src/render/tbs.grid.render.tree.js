import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderTree {
    addElement(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);;
        const children = row[tbsGridNames.column.children];
        for (let i = param.tableCell.childNodes[0].childNodes.length - 1; i >= 0; i--) {
            param.tableCell.childNodes[0].childNodes[i].remove();
        }

        if (children.length > 0) {
            const icon = TbsGridDom.createElement('icon');
            const element = TbsGridDom.createElement('string');
            param.tableCell.childNodes[0].appendChild(icon);
            param.tableCell.childNodes[0].appendChild(element);
        }
        else {
            const element = TbsGridDom.createElement('string');
            param.tableCell.childNodes[0].appendChild(element);
        }
    }

    setBounding(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);
        const children = row[tbsGridNames.column.children];
        let rowDepth = row[tbsGridNames.column.depth];

        TbsGridDom.setStyle(param.tableCell, param);

        if (children.length > 0) {
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (rowDepth * 15) + 'px');
            param.grid.classTree.setTreeIcon(param.tableCell, param.rowIndex);
        }
        else {
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', ((rowDepth * 15) + 15) + 'px');
        }

        const element = param.tableCell.querySelector('.tbs-grid-html-string');
        TbsGridDom.setCell(element, 'textContent', param.cellText);
    }
}