/**
 * tbs.grid.util.js
 *
 */
//================================================================
//
// Common
//
//================================================================
TbsGrid.prototype.null = function(p) {
    return p == null || p == undefined;
}
TbsGrid.prototype.notNull = function(p) {
    return !(p == null || p == undefined);
}
TbsGrid.prototype.tbs_error = function(p) {
    if (this.debug_mode) { console.log('[TbsGrid error] ' + p); r = false; }
}
TbsGrid.prototype.tbs_caution = function(p) {
    if (this.debug_mode) { console.log('[TbsGrid caution] ' + p); r = false; }
}
/**
 * @function tbs_copyJson
 *
 * @description deep copy
 * @param p
 * @returns {any}
 */
TbsGrid.prototype.tbs_copyJson = function(p) {
    return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
}
//================================================================
//
// String
//
//================================================================
TbsGrid.prototype.tbs_empty = function(p) {
    return p == null || p == undefined || this.tbs_trim(p) == '';
}
TbsGrid.prototype.tbs_substr = function (s, index, len) {
    let result = '';
    try {
        s = s.toString();
        if (arguments.length == 2) result = s.substring(index);
        else if (arguments.length == 3) result = s.substring(index).substring(0, len);
        return result;
    }
    catch (e) {
        return result;
    }
}
TbsGrid.prototype.tbs_trim = function (s) {
    if (this.null(s)) return '';
    else return s.toString().replace(/^\s+|\s+$/gi,"");
}
//================================================================
//
// Number
//
//================================================================
TbsGrid.prototype.tbs_round = function(num, dpLen) {
    if (num > 0) return + (Math.round(num.toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
    else return -(Math.round(Math.abs(num).toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
}
TbsGrid.prototype.tbs_ceil = function(num, dpLen) {
    let s = '1';
    for (let i = 0; i < dpLen; i++) { s += '0'; }
    let n = parseInt(s);
    return (Math.ceil(num * n) / n);
}
TbsGrid.prototype.tbs_floor= function(num, dpLen) {
    let s = '1';
    for (let i = 0; i < dpLen; i++) { s += '0'; }
    let n = parseInt(s);
    return (Math.floor(num * n) / n);
}
//================================================================
//
// Tree Util
//
//================================================================
TbsGrid.prototype.tbs_getTreeRowCount = function(columns) {
    let grid = this;
    let column_children = grid.column_children;
    const getDepth = (column) => {
        return 1 + (column[column_children] ? Math.max(...column[column_children].map(getDepth)) : 0);
    }
    let depthList = [];
    for (let i = 0, len = columns.length; i < len; i++) {
        depthList.push(getDepth(columns[i]));
    }
    return Math.max(0, ...depthList);
}
//================================================================
//
// deprecated
//
//================================================================
TbsGrid.prototype.changeOrderArray = function(arrayList, selectIndex, targetIndex) {
    if (arrayList.length == 0) return [];
    if (targetIndex == -1) newIndex = arrayList.length - 1;
    else if (targetIndex == 0) newIndex = 0;
    else newIndex = selectIndex + targetIndex;

    if (newIndex < 0 || newIndex >= arrayList.length) return;

    const newArrayList = JSON.parse(JSON.stringify(arrayList));
    const target = newArrayList.splice(selectIndex, 1)[0];
    newArrayList.splice(newIndex, 0, target);
    arrayList = newArrayList;
    return newArrayList;
}
TbsGrid.prototype.spliceAfter = function(arr, selectIndex, targetIndex) {
    if (targetIndex == null) {targetIndex = 0;}
    else targetIndex += 1;
    if (targetIndex == selectIndex) return arr;
    arr.splice(targetIndex, 0, JSON.parse(JSON.stringify(arr[selectIndex])));
    if (targetIndex < selectIndex) selectIndex += 1;
    arr.splice(selectIndex, 1);

    for (let x = 0, colLen = arr.length; x < colLen; x++) {
        arr[x].colIndex = x;
    }

    return JSON.parse(JSON.stringify(arr));
}
TbsGrid.prototype.insertAfter = function(selectCol, targetCol) {
    if (targetCol == null) {
        selectCol.parentNode.insertBefore(selectCol, selectCol.parentNode.firstChild);
    }
    else {
        if (targetCol.cellIndex == this.columns.length - 1) {
            let cellIndex = targetCol.cellIndex;
            if (cellIndex >= this.columns.length) return;
            selectCol.parentNode.insertBefore(selectCol, null);
        }
        else {
            let cellIndex = targetCol.cellIndex + 1;
            if (cellIndex >= this.columns.length) return;
            selectCol.parentNode.insertBefore(selectCol, targetCol.parentNode.childNodes[cellIndex]);
        }
    }
}
