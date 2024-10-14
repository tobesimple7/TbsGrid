import {TbsGrid} from "../tbs.grid";

export class TbsGridBaseOptions {

    constructor() {
    }

    /**
     *  TbsGrid Config
     */

    setGridConfig(this: TbsGrid, tbsGridConfig: any) { this.gridConfig = tbsGridConfig; }

    getUserImageRoot(this: TbsGrid, columnName: string) {
        let result = this.gridConfigOptions['userImageRoot'];
        if (this.notNull(this.renderer) && this.notNull(this.renderer[columnName])) {
            const renderer = this.renderer[columnName];
            if (renderer.userImageRoot) result = renderer.userImageRoot;
        }
        return result;
    }

    /**
     *  Group Functions
     */

    showGroupPanel(this: TbsGrid) { this.classGroup.showGroupPanel(); }

    hideGroupPanel(this: TbsGrid) { this.classGroup.hideGroupPanel(); }

    setGroupColumns(this: TbsGrid, groupColumns: any[]){
        this.group_column_table.remove();
        groupColumns.map(column => this.group_column_table.insert(this.copyJson(column)))
    }

    setSortColumns(this: TbsGrid, sortColumns: any[]){
        this.sort_column_table.remove();
        sortColumns.map(column => this.sort_column_table.insert(this.copyJson(column)))
    }

    /**
     * Tree Functions
     */

    //setTreeOption(this: TbsGrid, optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }

    setTreeSortColumn(this: TbsGrid, sortColumn: any) { this.classTree.setTreeSortColumns(sortColumn); }

    /**
     *  Panel10 Functions
     */

    showToolbarPanel(this: TbsGrid) { this.classPanel10.showToolbarPanel(); }

    hideToolbarPanel(this: TbsGrid) { this.classPanel10.hideToolbarPanel(); }

    showToolbarButtons(this: TbsGrid, buttonType: string) { this.classPanel10.showToolbarButtons(buttonType); }

    hideToolbarButtons(this: TbsGrid, buttonType: string) { this.classPanel10.hideToolbarButtons(buttonType); }

    showFilterPanel(this: TbsGrid) { this.classFilter.showFilterPanel(); }

    hideFilterPanel(this: TbsGrid) { this.classFilter.hideFilterPanel(); }

    showSortPanel(this: TbsGrid) { this.classSort.showSortPanel(); }

    hideSortPanel(this: TbsGrid) { this.classSort.hideSortPanel(); }

    /**
     * Options
     */

    createOption(this: TbsGrid, options: any) { this.setOptions(options); }

    setOption(this: TbsGrid, optionName: string, optionValue: any) { this.options[optionName] = optionValue; }

    setOptions(this: TbsGrid, options: any) { for (let key in options) this.setOption(key, options[key]); }

    /**
     * Page
     */

    setPageOption(this: TbsGrid, optionName: string, optionValue: any) { this.classPage.setPageOption(optionName, optionValue); }
}