import {TbsGrid} from "./tbs.grid";
import {columnAlias, GridMode, optionAlias} from "./tbs.grid.types";

export class TbsGridGroup {
    grid: TbsGrid;
    selector: string;
    openDepth: number;
    splitChar: string;

    constructor(grid) {
        this.grid       = grid;
        this.selector   = '#' + grid.gridId;
        this.openDepth = null;
        this.splitChar = '__$__'
    }

    setGroupData(data, openDepth = 1, isFirst = true) {
        let selector = this.selector;
        const grid = this.grid;

        if (isFirst) { if (grid.null(data) || data.length == 0) return; }

        /**
         * set openDepth
         */

        openDepth = grid.isNull(openDepth, grid.group_column_table.count() + 1);

        if (openDepth == 0) openDepth = grid.group_column_table.count() + 1;
        else if (openDepth > grid.group_column_table.count() + 1) openDepth = grid.group_column_table.count() + 1;

        this.openDepth = openDepth;

        // create source_data, view_table.data
        if (isFirst) {
            grid.source_table.remove();

            for (let i = 0, len = data.length; i < len; i++) {
                const dataRow = data[i];

                const item = {};
                for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[columnAlias.name];
                    let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];
                    item[columnName] = val;
                }

                // const dataColumns: any[] = grid.field_table.selectRows();
                // for (let x = 0, len = dataColumns.length; x < len; x++) {
                //     const column = dataColumns[x];
                //     let columnName  = column[columnAlias.name];
                //     item[columnName] = dataRow[columnName];
                // }

                grid.source_table.insert(item);
            }
        }

        grid.group_header_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();


        grid.source_table.data.map(dataRow => grid.view_table.insert(grid.copyJson(dataRow)));

        /* Filter */
        grid.classFilter.filters();

        /* Add Group Column */
        grid.sort_column_table.data.map(dataRow => grid.temp_table.insert(grid.copyJson(dataRow)));
        grid.sort_column_table.remove();

        grid.group_column_table.data.map(dataRow => {
            let columnName = dataRow[columnAlias.name];
            //let groupOrder = grid.isNull(dataRow[columnAlias.order], '');

            const row = grid.temp_table.selectRow(columnAlias.name, columnName);
            if (row) {
                let order = row[columnAlias.order];
                if (order == '') order = 'asc';

                row[columnAlias.order] = order;
                grid.sort_column_table.insert(row);
                // grid.group_column_table.update(columnName, columnAlias.order, order);
            }
            else {
                const item = {};
                item[columnAlias.name] = columnName;
                item[columnAlias.order] = 'asc';
                grid.sort_column_table.insert(item);
                // grid.group_column_table.update(columnName, columnAlias.order, 'asc');
            }
            let rowIndex = grid.temp_table.selectRowIndex(columnAlias.name, columnName);
            if (grid.notNull(rowIndex)) grid.temp_table.remove(rowIndex);
        });

        grid.temp_table.data.map(dataRow => grid.sort_column_table.insert(grid.copyJson(dataRow)));
        grid.temp_table.remove();

        /* Sorting */
        grid.classSort.setSortData(grid.view_table.data, grid.sort_column_table.data);

        /* create group data */
        grid.classGroup.createGroupData();

        /* insert into view_table from group_table */
        grid.view_table.remove();
        for (let i = 0, len = grid.group_table.count(); i < len; i++) {
            let dataRow = grid.group_table.data[i];

            dataRow[columnAlias.rowMode]   = ''; // S, U, I, D, blank
            dataRow[columnAlias.isOpen] = false;

            for (let x = 0, len = grid.column_table.count(); x < len; x++) {
                let column = grid.column_table.data[x];
                let columnName = column[columnAlias.name];
                let val = grid.null(dataRow[columnName]) ? null : dataRow[columnName];

                dataRow[columnName] = val;
            }
            grid.view_table.insert(grid.copyJson(dataRow));
        }
        grid.group_table.remove();

        /* Summary */
        grid.classGroup.getGroupSummary();

        // open depth
        grid.view_table.data.map(row => {
            let depth = row[columnAlias.depth];

            row[columnAlias.isOpen] = (depth < openDepth) ? true : false;
            row[columnAlias.childRows] = [];
        })

        if (openDepth <= grid.group_column_table.count()) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                const rootRow = grid.view_table.selectRowByRowIndex(i);
                let rootDepth = rootRow[columnAlias.depth];

                if (rootDepth == openDepth && rootDepth <= grid.group_column_table.count()) {
                    this.closeGroupRow(i);
                }
            }
        }

        (document.querySelector(selector + ' .tbs-grid-panel10-filter-input') as any).value = '';
        if (grid.view_table.count() == 0) {
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
        }
        else {
            // @ts-ignore
            document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = toString(grid.view_table.count());

            grid.verticalScroll.setScroll(grid.code_vertical);
            grid.classPanel30.setDataPanel(0);
            grid.classPanel40.setDataPanel();
            grid.classPanel50.setDataPanel();
        }
        if (grid.options[columnAlias.autoWidth] == true)  grid.setColumnAutoWidth();

        grid.classGroup.getGroupButtonList();
        grid.classScroll.setPanelSize();

        grid.classRange.removeRange(0, -1);
        let _topRowIndex = grid.classRange.selectRange(0, 0, 0, 0);
        grid.classPanel30.setDataPanel(_topRowIndex);
    }

    createGroupData(){
        const grid = this.grid;

        // create group data
        const groupData = grid.classGroup.createGroupKeyData(grid.view_table.data);
        groupData.map(row => {
            grid.source_table.currentRowId += 1;
            row[columnAlias.rowId] = grid.source_table.currentRowId;
            grid.group_header_table.insert(grid.copyJson(row));
        });

        // insert group table  select * from view_table, group_header_table
        for (let i = 0, len = grid.group_header_table.count(); i < len; i++) {
            const rootRow = grid.group_header_table.selectRowByRowIndex(i);
            const children = [];
            const item = {}
            let rootDepth = rootRow[columnAlias.depth];
            let rootString = this.getGroupKeyByDepth(rootRow, rootDepth);

            // get children group
            let isChild = false;
            for (let x = 0, len2 = grid.group_header_table.count(); x < len2; x++) {
                const row = grid.group_header_table.selectRowByRowIndex(x);
                let depth = row[columnAlias.depth];
                let childString = this.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootString == childString) {
                    isChild = true;
                    children.push(row[columnAlias.rowId]);
                }
                else {
                    if (isChild) break;
                }
            }

            // insert group_header_table
            rootRow[columnAlias.childRowIds] = children;
            rootRow[columnAlias.isOpen] = false;
            grid.group_table.insert(rootRow);

            // insert view_table
            const arr = []
            isChild = false;
            if (rootDepth == grid.group_column_table.count()) {
                for (let x = 0, len2 = grid.view_table.count(); x < len2; x++) {
                    const row = grid.view_table.selectRowByRowIndex(x);
                    let depth = grid.group_column_table.count() + 1;
                    let childString = this.getGroupKeyByDepth(row, rootDepth);
                    if (rootString == childString) {
                        isChild = true;
                        children.push(row[columnAlias.rowId]);
                        arr.push(x);
                        row[columnAlias.isOpen] = false;
                        row[columnAlias.depth] = grid.group_column_table.count() + 1;
                        grid.group_table.insert(grid.copyJson(row));
                    }
                    else {
                        if (isChild) break;
                    }
                }
                rootRow[columnAlias.childRowIds] = children;
                //delete row
                if (arr.length > 0) {
                    let startRowIndex = arr[0]
                    let lastRowIndex = arr[arr.length - 1];
                    for (let x = lastRowIndex; x >= startRowIndex; x--) {
                        if (arr.indexOf(x) != -1) grid.view_table.remove(x);
                    }
                }
            }
        }
    }

    createGroupKeyData(dataRows, depth = 1){
        const grid = this.grid;
        const resultRows = [];
        const result = [];

        for (let i = depth, len = grid.group_column_table.count() + 1; i < len; i++) {
            let rows = dataRows.reduce((acc, row) => {
                let key = grid.classGroup.getGroupKeyByDepth(row, i);
                let tempRow = grid.classGroup.getGroupKeyRowByDepth(row, i);
                if (acc.hasOwnProperty(key) == false) acc[key] = tempRow;
                return acc;
            }, {});
            rows = Object.values(rows);
            rows.map(row => resultRows.push(row));
        }

        const addRow = function (dataRow) {
            let rootDepth = dataRow[columnAlias.depth];
            let rootStr = grid.classGroup.getGroupKeyByDepth(dataRow, rootDepth);

            result.push(dataRow);

            for (let i = depth, len = resultRows.length; i < len; i++) {
                const row = resultRows[i];
                let depth = row[columnAlias.depth];
                let str = grid.classGroup.getGroupKeyByDepth(row, rootDepth);
                if (rootDepth + 1 == depth && rootStr == str) {
                    addRow(row);
                }
            }
        }

        for (let i = 0, len = resultRows.length; i < len; i++) {
            let depth = resultRows[i][columnAlias.depth];
            if (depth == 1) addRow(resultRows[i]);
        }
        return result;
    }

    getGroupKeyByDepth(row, depth) {
        const grid = this.grid;
        let key = '';
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[columnAlias.name];
            key += this.splitChar + grid.isNull(row[name], '');
        }
        return key;
    }

    getGroupKeyRowByDepth(row, depth) {
        const grid = this.grid;

        let tempRow = {};
        for (let i = 0; i < depth; i++) {
            let groupColumn = grid.group_column_table.data[i];
            let name = groupColumn[columnAlias.name];
            tempRow[name] = row[name];
            tempRow[columnAlias.depth] = depth;
        }
        return tempRow;
    }

    /**
     * Group Sum, Avg
     */
    getGroupDepthSummary(rowIndex) {
        // 최 하위 depth
        const grid = this.grid;

        const rootRow = grid.view_table.selectRowByRowIndex(rowIndex)
        const rootDepth = rootRow[columnAlias.depth];

        // if (rootDepth <= grid.group_column_table.count()) return;

        const resultRows = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.data[i];

            if (grid.null(row)) break;

            let depth = row[columnAlias.depth];
            if (rootDepth + 1 == depth) resultRows.push(row);
            else if (rootDepth == depth) break;
        }

        for (let i = 0, len = grid.column_table.count(); i < len; i++) {
            const column = grid.column_table.data[i];
            let columnName = column[columnAlias.name];

            if (grid.null(column[columnAlias.summaryType])) continue;

            let summaryType = column[columnAlias.summaryType];

            const arrayItem = [];
            resultRows.map(row => {
                let item = grid.isNull(row[columnName], 0);
                item = item == '' ? 0  : item;
                arrayItem.push(Number(item));
            });

            let result;
            if (summaryType == 'sum') {
                result = arrayItem.reduce((a, b) => a + b, 0);
            }
            else if (summaryType == 'avg') {
                result = arrayItem.reduce((a, b) => a + b, 0);
            }
            else if (summaryType == 'max') {
                result = Math.max.apply(null, arrayItem);
            }
            else if (summaryType == 'min') {
                result = Math.min.apply(null, arrayItem);
            }
            rootRow[columnName] = result;
        }

        let childCount = 0;
        if (rootDepth < grid.group_column_table.count()) {
            resultRows.map(row => childCount += row[columnAlias.childCount]);
        }
        else {
            childCount = resultRows.length;
        }
        rootRow[columnAlias.childCount] = childCount;
    }

    getGroupSummary() {
        const grid = this.grid;

        for (let depthIndex = grid.group_column_table.count(); depthIndex >= 1; depthIndex--) {
            for (let i = grid.view_table.count() - 1; i >= 0; i--) {
                const row = grid.view_table.data[i];
                let depth = row[columnAlias.depth];
                if (depth == depthIndex) this.getGroupDepthSummary(i);
            }
        }

        // agv 만 나중에...
        for (let i = grid.view_table.count() - 1; i >= 0; i--) {
            const row = grid.view_table.data[i];
            let depth = row[columnAlias.depth];
            if (depth <= grid.group_column_table.count()) {
                for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
                    const column = grid.column_table.data[x];
                    let columnName = column[columnAlias.name];
                    let summaryType = grid.isNull(column[columnAlias.summaryType], '');
                    if (summaryType == 'avg') {
                        row[columnName] = row[columnName] / row[columnAlias.childCount];
                    }
                }
            }
        }
    }

    // getGroupSummary2() {
    //     let selector = this.selector;
    //     const grid = this.grid;
    //
    //     const getGroupSummary = function (array, columnName, isLastDepth) {
    //         let result = {};
    //         result.rowCount = 0;
    //         result.sum = 0;
    //
    //         for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //             let row = grid.view_table.data[i];
    //             let rowId = row[columnAlias.rowId];
    //             array.map(item => {
    //                 if (rowId == item) {
    //                     result.sum      += grid.null(row[columnName]) ? 0 : Number(row[columnName]);
    //                     result.rowCount += grid.null(row[columnAlias.rowCount]) ? 1 : row[columnAlias.rowCount];
    //                 }
    //             });
    //         }
    //         return result;
    //     }
    //     /* Create Sum By Depth Unit */
    //     let depth = grid.group_column_table.count();
    //     for (let depthIndex = depth; depthIndex >= 1; depthIndex--) {
    //         for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //             let row = grid.view_table.data[i];
    //             let rowId = row[columnAlias.rowId];
    //             let depth = row[columnAlias.depth];
    //
    //             if (depthIndex == depth) {
    //                 for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
    //                     let column = grid.column_table.data[x];
    //                     let columnName = column[columnAlias.name];
    //                     let columnType = column[columnAlias.type];
    //                     if (columnType == CellType.number) {
    //                         let result = null;
    //                         result = getGroupSummary(row[columnAlias.childRowIds], columnName);
    //                         row[columnName] = result.sum.toString();
    //                         row[columnAlias.rowCount] = result.rowCount;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     /* Create Avg By Depth Unit */
    //     for (let i = 0, len = grid.view_table.count(); i < len; i++) {
    //         let row = grid.view_table.data[i];
    //         let rowId = row[columnAlias.rowId];
    //         let rowCount = row[columnAlias.childRowIds].length;
    //
    //         for (let x = 0, len2 = grid.column_table.count(); x < len2; x++) {
    //             let column = grid.column_table.data[x];
    //             let columnName = column[columnAlias.name];
    //             let groupColumn = grid.classGroup.getGroupRow(columnName);
    //             let summaryType = grid.null(column[columnAlias.summaryType]) ? null : column[columnAlias.summaryType];
    //             let columnType = column[columnAlias.type];
    //
    //             if (rowCount > 0 && columnType == CellType.number) {
    //                 // summaryType = 'sum';
    //                 if (grid.null(summaryType)) row[columnName] = null;
    //                 else if (summaryType == 'avg') row[columnName] = (row[columnName] / row[columnAlias.rowCount]);
    //             }
    //         }
    //     }
    // }

    /**
     * spanIcon, spanImg, spanText
     */

    setGroupIcon(tableCell, rowIndex) {
        const grid = this.grid;

        let row = grid.getRow(rowIndex);
        const childRows = grid.isNull(row[columnAlias.childRows], []);
        let element = tableCell.querySelector('.tbs-grid-html-icon');

        if (childRows.length > 0) grid.classGroup.toggleGroupIcon(rowIndex, element, 'closed');
        else grid.classGroup.toggleGroupIcon(rowIndex, element, 'open');
    }

    toggleGroupIcon(rowIndex, element, type) {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.null(element)) return;

        if      (type == columnAlias.open) {
            element.style['backgroundImage'] = 'url(' + grid.options[optionAlias.imageRoot] + 'tree_open.png)';
        }
        else if (type == columnAlias.closed) {
            element.style['backgroundImage'] = 'url(' + grid.options[optionAlias.imageRoot] + 'tree_closed.png)';
        }
        else element.style['backgroundImage'] = '';
    }

    isGroupChildrenRow(rowIndex) {
        let selector = this.selector;
        const grid = this.grid;

        let result = false;
        let row = grid.getRow(rowIndex);
        let childRow = grid.getRow(rowIndex + 1);

        if (grid.null(childRow)) result = false;
        else {
            if (row[columnAlias.num] == childRow[columnAlias.parentNum]) result = true;
        }
        return result;
    }

    getGroupchildRows(folding, rowIndex) {
        const grid = this.grid;
        const result = [];

        let rowId = grid.view_table.selectRowIdByRowIndex(rowIndex);
        let startRowIndex = grid.group_table.selectRowIndexByRowId(rowId);
        const rootRow = grid.group_table.selectRowByRowIndex(startRowIndex);
        let rootDepth = rootRow[columnAlias.depth];

        let isChild = false;
        if (folding == columnAlias.open) {
            grid.group_table.updateByRowIndex(rowIndex, columnAlias.isOpen, true);
            grid.group_table.updateByRowId(rowId, columnAlias.isOpen, true);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[columnAlias.depth];
                let isOpen = dataRow[columnAlias.isOpen];
                if (depth == rootDepth + 1) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth) break;
                }
            }
        }
        else if (folding == columnAlias.closed) {
            grid.group_table.updateByRowIndex(rowIndex, columnAlias.isOpen, false);
            grid.group_table.updateByRowId(rowId, columnAlias.isOpen, false);
            for (let i = startRowIndex + 1, len = grid.group_table.count(); i < len; i++) {
                const dataRow = grid.group_table.selectRowByRowIndex(i);
                let depth = dataRow[columnAlias.depth];
                if (depth > rootDepth) {
                    isChild = true;
                    result.push(grid.copyJson(dataRow));
                }
                else {
                    if (depth == rootDepth) break;
                }
            }
        }
        return result;
    }

    setGroupFolding(tableCell) {
        let selector = this.selector;
        const grid = this.grid;

        let rowIndex = parseInt(tableCell.parentNode.dataset.rowIndex);
        let row = grid.getRow(rowIndex);
        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon)) return;

        let folding = grid.classGroup.getGroupFlodingStatus(tableCell);
        if      (folding == columnAlias.open)   grid.classGroup.closeGroupRow(rowIndex);
        else if (folding == columnAlias.closed) grid.classGroup.openGroupRow(rowIndex);

        grid.horizontalScroll.setScroll(grid.code_horizontal);;
        grid.verticalScroll.setScroll(grid.code_vertical);
        grid.classPanel30.setDataPanel(grid.getFirstRowIndex());
    }

    getGroupFlodingStatus(tableCell) {
        const grid = this.grid;

        let spanIcon = tableCell.querySelector('.tbs-grid-html-icon');
        if (grid.null(spanIcon)) return null;

        if (spanIcon.style['backgroundImage'].includes('tree_open.png')) return columnAlias.open;
        else if (spanIcon.style['backgroundImage'].includes('tree_closed.png')) return columnAlias.closed;
        else return null;
    }

    openChildRow(arrayRows, rootRow) {
        const rootDepth = rootRow[columnAlias.depth];
        const rootChildRows = [...rootRow[columnAlias.childRows]];

        let isOpen = rootRow[columnAlias.isOpen];

        if (isOpen && rootChildRows.length > 0) {
            rootRow[columnAlias.childRows] = [];
            arrayRows.push(rootRow);

            for (let i = 0; i < rootChildRows.length; i++) {
                const row = rootChildRows[i];
                this.openChildRow(arrayRows, row)
            }
        }
        else {
            arrayRows.push(rootRow);
        }
    }

    openGroupRow(rowIndex?: number) {
        const grid = this.grid;

        const arrayRows = [];

        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[columnAlias.depth];
        const rootChildRows = [...rootDataRow[columnAlias.childRows]];

        rootDataRow[columnAlias.childRows] = [];
        rootDataRow[columnAlias.isOpen] = true;

        if (rootChildRows.length == 0) return;

        for (let i = 0; i < rootChildRows.length; i++) {
            this.openChildRow(arrayRows, rootChildRows[i])
        }

        grid.view_table.insertRowsAfter(arrayRows, rowIndex);

        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }

    closeChildRow(rowIndex) {
        const grid = this.grid;

        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[columnAlias.depth];

        const rootChildRows = grid.isNull(rootDataRow[columnAlias.childRows], []);

        if (rootChildRows.length > 0) return;

        const arrayRowIndex = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row)) break;

            let depth = row[columnAlias.depth];
            if (depth == rootDepth + 1) {
                rootDataRow[columnAlias.childRows].push(row);
                arrayRowIndex.push(i);
            }
            else break;
        }

        for (let i = arrayRowIndex.length - 1; i >= 0; i--) grid.view_table.remove(arrayRowIndex[i]);
    }

    closeGroupRow(rowIndex) {
        const grid = this.grid;

        const rootDataRow = grid.view_table.selectRowByRowIndex(rowIndex);
        const rootDepth = rootDataRow[columnAlias.depth];
        rootDataRow[columnAlias.isOpen] = false;

        const arrayRowIndex = [];
        for (let i = rowIndex + 1, len = grid.view_table.count(); i < len; i++) {
            const row = grid.view_table.selectRowByRowIndex(i);
            if (grid.null(row)) break;
            let depth = row[columnAlias.depth];
            if (depth > rootDepth && depth <= grid.group_column_table.count()) arrayRowIndex.push(i);
            else if (depth == rootDepth) break;
        }

        for (let i = arrayRowIndex.length - 1; i >= 0; i--) this.closeChildRow(arrayRowIndex[i]);

        this.closeChildRow(rowIndex);

        grid.data_select_panel30 = [];
        grid.data_select_panel31 = [];
    }

    /**
     * Group Button
     */

    changeGroupButtonOrder(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;

        let groupColumns = grid.group_column_table.data;

        /* targetIndex != name Index */
        let sourceIndex = grid.group_column_table.selectRowIndex(columnAlias.name, name);
        if (sourceIndex == targetIndex) return;

        /* create column */
        let dataRow = {};
        dataRow[columnAlias.name] = name;
        dataRow[columnAlias.text] = text;

        /* update source column */
        grid.group_column_table.updateByRowIndex(sourceIndex, columnAlias.name, '_temp_group');

        /* add dataRow */
        if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);
        else grid.group_column_table.insertBefore(dataRow, targetIndex);

        /* remove source */
        sourceIndex = grid.group_column_table.selectRowIndex(columnAlias.name, '_temp_group');
        grid.group_column_table.remove(sourceIndex);

        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        grid.classGroup.toggleGroupPlaceHolder();
        grid.classGroup.setGroupData(grid.view_table.data, null, false);
    }

    addGroupButton(name, text, order, targetIndex) {
        let selector = this.selector;
        const grid = this.grid;

        /* Check Existing */
        if (grid.group_column_table.selectRows(columnAlias.name, name, 1).length > 0) return;

        /* create dataRow */
        let dataRow = {};
        dataRow[columnAlias.name] = name;
        dataRow[columnAlias.text] = text;

        /* add dataRow */
        if (grid.null(targetIndex)) grid.group_column_table.insert(dataRow);
        else grid.group_column_table.insertBefore(dataRow, targetIndex);

        /* add button in group panel */
        let button = grid.classGroup.createGroupButton(name);
        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        if (grid.notNull(targetIndex)) bar.insertBefore(button, bar.childNodes[targetIndex]);
        else bar.append(button);

        //grid.classGroup.toggleGroupPlaceHolder();
        let data = grid.view_table.data;
        grid.classGroup.setGroupData(data, this.openDepth, false);
    }

    removeGroupButton(element) {
        let selector = this.selector;
        const grid = this.grid;

        /* get column name */
        let name = element.dataset.name;

        /* remove group data */
        let rowIndex = grid.group_column_table.selectRowIndex(columnAlias.name, name);
        grid.group_column_table.remove(rowIndex);

        // remove button in group panel
        let button = element.parentNode;
        button.remove();

        grid.classGroup.toggleGroupPlaceHolder();

        if (grid.group_column_table.count() > 0) {
            let data = grid.view_table.data;
            grid.classGroup.setGroupData(data, null, false);
        }
        else {
            this.initGroupData();
        }
    }

    removeGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;

        let buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        for (let i = buttons.length - 1; i >= 0; i--) buttons[i].remove();
    }

    getGroupButtonList() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classGroup.removeGroupButtonList();

        let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
        let groupColumns= grid.group_column_table.data;

        for (let i = 0, len = groupColumns.length; i < len; i++) {
            let groupColumn = groupColumns[i];
            let button = grid.classGroup.createGroupButton(groupColumn[columnAlias.name]);
            let bar = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar');
            if (grid.null(bar)) return;
            bar.append(button);
        }
        grid.classGroup.toggleGroupPlaceHolder();
    }

    createGroupButton(columnName) {
        let selector = this.selector;
        const grid = this.grid;

        let column = grid.getColumn(columnName);

        let text= document.createElement('span');
        text.classList.add('tbs-grid-panel-button-text');
        text.textContent  = column.header[columnAlias.text];
        text.dataset.name = columnName;

        let icon= document.createElement('span');
        icon.classList.add('tbs-grid-panel-button-icon');
        icon.style['backgroundImage'] = 'url(' + grid.options[optionAlias.imageRoot] + 'remove.png)';
        icon.dataset.name = columnName;

        let button = document.createElement('div');
        button.classList.add('tbs-grid-panel-button');
        button.dataset.name = columnName;

        button.append(text);
        button.append(icon);

        return button;
    }

    toggleGroupPlaceHolder() {
        let selector = this.selector;
        const grid = this.grid;

        const buttons = document.querySelectorAll(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar .tbs-grid-panel-button');
        const span: any = document.querySelector(selector + ' .tbs-grid-panel80 .tbs-grid-panel-bar-span');
        if (buttons.length > 0) span.style.display = 'none';
        else span.style.display = '';

        grid.classControl.after_setColumnVisible();
    }

    destroy() {
        const grid = this.grid;

        grid.setGridMode(GridMode.grid)
        grid.group_column_table.remove();
        grid.group_table.remove();
        grid.classGroup.hideGroupPanel();
        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.setData(grid.source_table.data, null, false);
    }

    showGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classGroup.getGroupButtonList();

        grid.options.showGroupPanel = true;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-hide');
        panel.classList.add('tbs-grid-show');

        grid.apply();
    }

    hideGroupPanel() {
        let selector = this.selector;
        const grid = this.grid;

        grid.classGroup.removeGroupButtonList();

        grid.options.showGroupPanel = false;
        let panel = document.querySelector(selector + ' .tbs-grid-panel80');
        panel.classList.remove('tbs-grid-show');
        panel.classList.add('tbs-grid-hide');

        grid.apply();
    }

    initGroupData() {
        const grid = this.grid;

        grid.setGridMode(GridMode.grid);
        grid.group_column_table.remove();
        grid.sort_column_table.remove();
        grid.group_table.remove();
        grid.view_table.remove();

        grid.classGroup.removeGroupButtonList();

        grid.classRange.removeRange(0, -1);
        grid.classScroll.setPanelSize();
        grid.verticalScroll.setScroll(grid.code_vertical);
        //if (grid.view_table.count() >= 0 && grid.null(grid.view_table.data[0]['group_column'])) grid.setData(grid.view_table.data, null, false);
        grid.setData(grid.source_table.data, null, false);
        grid.apply();
    }

    getGroupRow(columnName) { return this.grid.group_column_table.selectRow(columnAlias.name, columnName); }

    expandGroup() {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.group_column_table.count() == 0) return;
        let openDepth = grid.classGroup.openDepth;

        if (grid.null(grid.classGroup.openDepth)) openDepth = 1;
        else openDepth += 1;

        if (openDepth > grid.group_column_table.count() + 1) openDepth =  grid.group_column_table.count();

        grid.classGroup.openDepth = openDepth;

        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }

    collapseGroup() {
        let selector = this.selector;
        const grid = this.grid;

        if (grid.group_column_table.count() == 0) return;
        let openDepth = grid.classGroup.openDepth;

        if (grid.null(grid.classGroup.openDepth)) openDepth = grid.group_column_table.count();
        else openDepth -= 1;

        if (openDepth <= 0) openDepth =  1;

        grid.classGroup.openDepth = openDepth;

        grid.classGroup.setGroupData(grid.view_table.data, openDepth, false);
    }
}
