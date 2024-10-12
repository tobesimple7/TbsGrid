import { TbsBase } from './base/tbs.base';

export class TbsGridDom extends TbsBase {

    static createElement(type){
        let tag = 'span';
        let tagType = '';
        let className = 'tbs-grid-html-string';

        if (type == 'string') {}
        else if (type == 'icon') {
            tag = 'span';
            className = 'tbs-grid-html-icon';
        }
        else if (type == 'checkbox') {
            tag = 'input';
            tagType = 'checkbox';
            className = 'tbs-grid-html-checkbox';
        }
        else if (type == 'button') {
            tag = 'button';
            tagType = 'button';
            className = 'tbs-grid-html-button';
        }
        else if (type == 'link') {
            tag = 'a';
            //tagType = 'button';
            className = 'tbs-grid-html-link';
        }
        else if (type == 'img') {
            tag = 'img';
            //tagType = 'button';
            className = 'tbs-grid-html-img';
        }
        return TbsGridDom.createHtml(tag, tagType, className);
    }

    static createHtml(tag, tagType, className) {
        const element = document.createElement(tag);
        element.classList.add(className);
        if (tag == 'input') element.type = tagType;
        return element;
    }

    static addElement() {

    }

    static setBounding() {

    }

    static setStyle(tableCell, param)  {
        let className = param.className;
        let display = param.visible == true ? '' : 'none';
        let textAlign = param.align;
        let width = param.width;

        TbsGridDom.addUserClass(tableCell, className); // user event
        TbsGridDom.setCellStyle(tableCell, 'display', display);
        TbsGridDom.setCellStyle(tableCell, 'textAlign', textAlign); // user event
        TbsGridDom.setCellStyle(tableCell, 'width', width);
    }

    static setCell(element, property, value) {
        if (element[property] != value) element[property] = value;
    }

    static setCellStyle(tableCell, property, value) {
        if (tableCell.style[property] != value) tableCell.style[property] = value;
    }

    static addUserClass(tableCell, className) {
        TbsGridDom.removeUserClass(tableCell);
        if (className && className != '') tableCell.classList.add(className);
    }

    static removeUserClass(tableCell) {
        // Create classNameArray : for remove except tbs-* className
        const classNameArray = [];
        for (let i = 0, len = tableCell.classList.length; i < len; i++) {
            if (tableCell.classList[i].startsWith('tbs-grid-')) continue;
            else classNameArray.push(tableCell.classList[i]);
        }
        // Remove classNameArray
        for (let i = 0, len = classNameArray.length; i < len; i++) tableCell.classList.remove(classNameArray[i]);
    }

    /**
     * Base Functions
     *
     */

    // null(p) { return p == null || p == undefined; }
    //
    // notNull(p) { return !(p == null || p == undefined); }
    //
    // empty(p) { return p == '';  }
    //
    // notEmpty(p) { return this.notNull(p) && p != ''; }

    /**
     * Dom Functions
     *
     */
    static createElementCheckbox() {
        const element = document.createElement('input');
        element.type = 'checkbox';
        element.classList.add('tbs-grid-html-checkbox');
        return element;
    }

    static createElementCellDiv() {
        const element = document.createElement('div');
        element.classList.add('tbs-grid-cell-div');
        return element;
    }

    static createElementCellIcon() {
        const element = document.createElement('span');
        element.classList.add('tbs-grid-html-icon');
        return element;
    }

    static createElementCellText() {
        const element = document.createElement('span');
        element.classList.add('tbs-grid-html-string');
        element.textContent = '';
        return element;
    }

    static prependCheckbox(element, childElement) {
        const el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined) element.prepend(childElement);
    }

    static prependIcon(element, childElement) {
        const el = element.querySelector('.tbs-grid-html-icon');
        if (el == undefined) element.prepend(childElement);
    }

    /**
     * Table Functions
     */
    static createTable() {
        const table = document.createElement('table');
        table.className = 'tbs-grid-table';
        return table;
    }
}

