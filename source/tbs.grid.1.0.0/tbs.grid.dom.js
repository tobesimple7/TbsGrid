/* cell property, style functions */
TbsGrid.prototype.tbs_setCell = function(tableCell, property, value) {
    if (tableCell[property] != value) tableCell[property] = value;
}
TbsGrid.prototype.tbs_setCellStyle = function(tableCell, property, value) {
    if (tableCell.style[property] != value) tableCell.style[property] = value;
}
/* Create Element */
TbsGrid.prototype.tbs_createElementCellDiv = function () {
    let element = document.createElement('div');
    element.classList.add('tbs-grid-cell-div');
    return element;
}
TbsGrid.prototype.tbs_createElementCellIcon = function () {
    let element = document.createElement('span');
    element.classList.add('tbs-grid-cell-div-icon');
    return element;
}
TbsGrid.prototype.tbs_createElementCellImg = function () {
    let element = document.createElement('span');
    element.classList.add('tbs-grid-cell-div-img');
    return element;
}
TbsGrid.prototype.tbs_createElementCellText = function () {
    let element = document.createElement('span');
    element.classList.add('tbs-grid-cell-div-text');
    element.textContent = '';
    return element;
}
/* spanIcon, spanImg, spanText */
TbsGrid.prototype.tbs_prependIcon = function (element, childElement) {
    let el = element.querySelector('.tbs-grid-cell-div-icon');
    if (el == undefined) element.childNodes[0].prepend(childElement);
}
TbsGrid.prototype.tbs_prependImg = function (element, childElement) {
    let el = element.querySelector('.tbs-grid-cell-div-img');
    if (el == undefined) element.childNodes[0].prepend(childElement);
}
TbsGrid.prototype.tbs_setValueInIcon = function (element, value) {
    let el = element.querySelector('.tbs-grid-cell-div-icon');
    if (el == undefined) {}
}
TbsGrid.prototype.tbs_setValueInImg= function (element, value) {
    let el = element.querySelector('.tbs-grid-cell-div-img');
    if (el == undefined) {}
}
TbsGrid.prototype.tbs_setValueInText= function (element, value) {
    let el = element.querySelector('.tbs-grid-cell-div-text');
    if (el == undefined) el.textContent = value;
}