/**
 * tbs.grid.sort.js
 *
 */
/**
 * @function tbs_sortData
 *
 * @param sortColumns : [{ name : , order : }, ...]
 */
TbsGrid.prototype.tbs_sortData = function (data, sortColumns) {
    let grid = this;
    let len = sortColumns.length;
    data.sort((a, b) => {
        // a : The first element
        // b : The second element
        for (let i = 0; i < len; i++) {
            let sortColumn = sortColumns[i];
            let name = sortColumn[grid.column_name];

            let column = grid.tbs_getColumn(name);
            let type = column[grid.column_type];

            if (sortColumn['order'] == 'asc') {
                if (type == 'number'){
                    let x = a.data[name] != null && isNaN(a.data[name]) == false ? Number(a.data[name].toString().replace(/\,/g, '')): 0;
                    let y = b.data[name] != null && isNaN(b.data[name]) == false ? Number(b.data[name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    if (x > y) return 1;
                }
                else {
                    if ((a.data[name] == null ? '' : a.data[name]).toString().toLowerCase() < (b.data[name] == null ? '' : b.data[name]).toString().toLowerCase()) return -1;
                    if ((a.data[name] == null ? '' : a.data[name]).toString().toLowerCase() > (b.data[name] == null ? '' : b.data[name]).toString().toLowerCase()) return 1;
                }
            }
            else if (sortColumn['order'] == 'desc') {
                if (type == 'number'){
                    let x = a.data[name] != null && isNaN(a.data[name]) == false ? Number(a.data[name].toString().replace(/\,/g, '')) : 0;
                    let y = b.data[name] != null && isNaN(b.data[name]) == false ? Number(b.data[name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    if (x > y) return -1;
                }
                else {
                    if ((a.data[name] == null ? '' : a.data[name]).toString().toLowerCase() < (b.data[name] == null ? '' : b.data[name]).toString().toLowerCase()) return 1;
                    if ((a.data[name] == null ? '' : a.data[name]).toString().toLowerCase() > (b.data[name] == null ? '' : b.data[name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
}
/**
 * @function tbs_sortUserData
 *
 * @param sortColumns : [{ name : , order : }, ...]
 */
TbsGrid.prototype.tbs_sortJsonData = function (data, sortColumns) {
    let grid = this;
    let len = sortColumns.length;
    data.sort((a, b) => {
        // a : The first element
        // b : The second element
        for (let i = 0; i < len; i++) {
            let sortColumn = sortColumns[i];
            let name = sortColumn[grid.column_name];

            let column = grid.tbs_getColumn(name);
            let type = column[grid.column_type];

            if (sortColumn['order'] == 'asc') {
                if (type == 'number'){
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')): 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    if (x > y) return 1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                }
            }
            else if (sortColumn['order'] == 'desc') {
                if (type == 'number'){
                    let x = a[name] != null && isNaN(a[name]) == false ? Number(a[name].toString().replace(/\,/g, '')) : 0;
                    let y = b[name] != null && isNaN(b[name]) == false ? Number(b[name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    if (x > y) return -1;
                }
                else {
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() < (b[name] == null ? '' : b[name]).toString().toLowerCase()) return 1;
                    if ((a[name] == null ? '' : a[name]).toString().toLowerCase() > (b[name] == null ? '' : b[name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
}

// @Deprecated
TbsGrid.prototype.setSort = function (sortColumns, display) {
    let grid = this;
    let view = this.data_view;
    //=============================================================
    //for (let i = data_view.length - 1; i >= 0; i--) { if (data_view[i].mode == 'S') { data_view.splice(i, 1); }}
    //=============================================================
    // for (let i = 0, len = data_view.length; i < len; i++) {
    // 	let row = data_view[i];
    // 	if (row.mode != 'S') continue;
    // 	if (!!row.layout) row.layout = {};
    // 	for (let x = 0, len = column.length; x < len; x++) {
    // 		row.layout[column[i][grid.column_name]] = {};
    // 		row.layout[column[i][grid.column_name]][grid.column_visible] = true;
    // 		row.layout[column[i][grid.column_name]].rowSpan = 1;
    // 	}
    // }
    this.sortColumns = sortColumns;
    let len = sortColumns.length;
    if (len == 0) return;
    this.data_view.sort(function (a, b) {
        for (let i = 0; i < len; i++) {
            let row = sortColumns[i];
            let type = (grid.tbs_getColumn(row.name))[grid.column_type];
            // null value check
            if (row['order'] == 'asc') {
                if (type == 'number'){
                    let x = a.data[row.name] != null && isNaN(a.data[row.name]) == false ? Number(a.data[row.name].toString().replace(/\,/g, '')): 0;
                    let y = b.data[row.name] != null && isNaN(b.data[row.name]) == false ? Number(b.data[row.name].toString().replace(/\,/g, '')): 0;
                    if (x < y) return -1;
                    if (x > y) return 1;
                }
                else {
                    if ((a.data[row.name] == null ? '' : a.data[row.name]).toString().toLowerCase() < (b.data[row.name] == null ? '' : b.data[row.name]).toString().toLowerCase()) return -1;
                    if ((a.data[row.name] == null ? '' : a.data[row.name]).toString().toLowerCase() > (b.data[row.name] == null ? '' : b.data[row.name]).toString().toLowerCase()) return 1;
                }
            }
            else if (row['order'] == 'desc') {
                if (type == 'number'){
                    let x = a.data[row.name] != null && isNaN(a.data[row.name]) == false ? Number(a.data[row.name].toString().replace(/\,/g, '')) : 0;
                    let y = b.data[row.name] != null && isNaN(b.data[row.name]) == false ? Number(b.data[row.name].toString().replace(/\,/g, '')) : 0;
                    if (x < y) return 1;
                    if (x > y) return -1;
                }
                else {
                    if ((a.data[row.name] == null ? '' : a.data[row.name]).toString().toLowerCase() < (b.data[row.name] == null ? '' : b.data[row.name]).toString().toLowerCase()) return 1;
                    if ((a.data[row.name] == null ? '' : a.data[row.name]).toString().toLowerCase() > (b.data[row.name] == null ? '' : b.data[row.name]).toString().toLowerCase()) return -1;
                }
            }
        }
    });
    if (display == undefined || display) this.tbs_displayPanel30(0);
}