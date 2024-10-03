import { TbsGridTypes, TbsGridNames } from '../tbs.grid.types.js';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import {TbsGridDom} from "../tbs.grid.dom.js";

export class TbsGridRenderGroup {

    addElement(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);;

        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            const icon = TbsGridDom.createElement('icon');
            const element = TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '') param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(icon);
            param.tableCell.childNodes[0].append(element);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            const element = TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '') param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
        else {
            const element = TbsGridDom.createElement('string');
            if (param.tableCell.childNodes[0].innerHTML != '') param.tableCell.childNodes[0].innerHTML = '';
            param.tableCell.childNodes[0].append(element);
        }
    }

    setBounding(param) {
        const row = param.grid.view_table.selectRowByRowIndex(param.rowIndex);;
        if (param.columnIndex == 0 && param.depth <= param.grid.group_column_table.count()) {
            TbsGridDom.setStyle(param.tableCell, param);
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');
            param.grid.classGroup.setGroupIcon(param.tableCell, param.rowIndex);

            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            TbsGridDom.setCell(element, 'textContent', param.cellText);
        }
        else if (param.columnIndex == 0 && param.depth > param.grid.group_column_table.count()) {
            TbsGridDom.setStyle(param.tableCell, param);
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', (param.depth * 15) + 'px');

            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            TbsGridDom.setCell(element, 'textContent', param.cellText);

        }
        else {
            TbsGridDom.setStyle(param.tableCell, param);
            TbsGridDom.setCellStyle(param.tableCell.childNodes[0], 'paddingLeft', '0px');

            const element = param.tableCell.querySelector('.tbs-grid-html-string');
            TbsGridDom.setCell(element, 'textContent', param.cellText);

        }
    }
}