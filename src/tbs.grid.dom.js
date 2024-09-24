import { TbsGridTypes, TbsGridNames } from './tbs.grid.types';

const tbsGridTypes = new TbsGridTypes();
const tbsGridNames = new TbsGridNames();

import { TbsBase } from "./tbs.base";

export class TbsGridDom extends TbsBase {

    /**
     * Base Functions
     *
     */

    null(p) { return p == null || p == undefined; }

    notNull(p) { return !(p == null || p == undefined); }

    empty(p) { return p == '';  }

    notEmpty(p) { return this.notNull(p) && p != ''; }

    /**
     * Dom Functions
     *
     */

    setCell(tableCell, property, value) {
        if (tableCell[property] != value) tableCell[property] = value;
    }

    setCellStyle(tableCell, property, value) {
        if (tableCell.style[property] != value) tableCell.style[property] = value;
    }

    addUserClass(tableCell, className) {
        this.removeUserClass(tableCell);
        if (this.notNull(className) && this.notEmpty(className)) tableCell.classList.add(className);
    }

    removeUserClass(tableCell, className) {
        // Create classNameArray : for remove except tbs-* className
        let classNameArray = [];
        for (let i = 0, len = tableCell.classList.length; i < len; i++) {
            if (tableCell.classList[i].startsWith('tbs-grid-')) continue;
            else classNameArray.push(tableCell.classList[i]);
        }
        // Remove classNameArray
        for (let i = 0, len = classNameArray.length; i < len; i++) tableCell.classList.remove(classNameArray[i]);
    }

    createElementCheckbox() {
        let element = document.createElement('input');
        element.type = 'checkbox';
        element.classList.add('tbs-grid-cell-checkbox');
        return element;
    }

    createElementCellDiv() {
        let element = document.createElement('div');
        element.classList.add('tbs-grid-cell-div');
        return element;
    }

    createElementCellIcon() {
        let element = document.createElement('span');
        element.classList.add('tbs-grid-cell-div-icon');
        return element;
    }

    createElementCellText() {
        let element = document.createElement('span');
        element.classList.add('tbs-grid-cell-div-text');
        element.textContent = '';
        return element;
    }

    prependCheckbox(element, childElement) {
        let el = element.querySelector('.tbs-grid-cell-div-icon');
        if (el == undefined) element.prepend(childElement);
    }

    prependIcon(element, childElement) {
        let el = element.querySelector('.tbs-grid-cell-div-icon');
        if (el == undefined) element.prepend(childElement);
    }

    /**
     * Table Functions
     */

    createTable() {
        let table = document.createElement('table');
        table.className = 'tbs-grid-table';
        return table;
    }
}

