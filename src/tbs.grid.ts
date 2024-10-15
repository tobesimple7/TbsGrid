import {TbsGridScrollBase} from "./tbs.grid.scroll.base";
import {TbsGridScroll} from "./tbs.grid.scroll";
import {TbsGridHeaders} from "./columns/tbs.grid.headers";
import {TbsGridColumns} from "./columns/tbs.grid.columns";
import {TbsGridControl} from "./tbs.grid.control";
import {TbsGridRange} from "./tbs.grid.range";
import {TbsGridRangePanel} from "./tbs.grid.range.panel";
import {TbsGridFilter} from "./tbs.grid.filter";
import {TbsGridGroup} from "./tbs.grid.group";
import {TbsGridPage} from "./page/tbs.grid.page";
import {TbsGridSort} from "./tbs.grid.sort";
import {TbsGridTree} from "./tbs.grid.tree";
import {TbsGridPanelBase} from "./panels/tbs.grid.panel.base";
import {TbsGridPanel10} from "./panels/tbs.grid.panel10";
import {TbsGridPanel20} from "./panels/tbs.grid.panel20";
import {TbsGridPanel30} from "./panels/tbs.grid.panel30";
import {TbsGridPanel40} from "./panels/tbs.grid.panel40";
import {TbsGridPanel50} from "./panels/tbs.grid.panel50";
import {TbsGridPanel70} from "./panels/tbs.grid.panel70";
import {TbsGridPanel80} from "./panels/tbs.grid.panel80";
import {TbsGridPanel90} from "./panels/tbs.grid.panel90";
import { TbsGridPanel99 } from "./panels/tbs.grid.panel99";
import {TbsGridTop} from "./summary/tbs.grid.top";
import {TbsGridFooter} from "./summary/tbs.grid.footer";
import {TbsGridDate} from "./layer/tbs.grid.date";
import {TbsGridCombo} from "./layer/tbs.grid.combo";
import {TbsGridRow} from "./tbs.grid.row";
import {TbsGridCell} from "./tbs.grid.cell";
import {TbsGridBase} from "./base/tbs.grid.base";
import {TbsGridBaseIs} from "./base/tbs.grid.base.is";
import {TbsGridBaseEvent} from "./base/tbs.grid.base.event";
import {TbsGridBaseUserEvent} from "./base/tbs.grid.base.user.event";
import {TbsGridBaseLine} from "./base/tbs.grid.base.line";
import {TbsGridBaseColumns} from "./base/tbs.grid.base.columns";
import {TbsGridBaseRows} from "./base/tbs.grid.base.rows";
import {TbsGridBaseData} from "./base/tbs.grid.base.data";
import {TbsGridBaseMain} from "./base/tbs.grid.base.main";
import {GridOptions} from "./tbs.grid.types";
import {TbsGridPagination} from "./page/tbs.grid.pagination";

export class TbsGrid extends TbsGridBase {

    /**
     * Class
     */

    classScroll: TbsGridScrollBase;
    verticalScroll: TbsGridScroll;
    horizontalScroll: TbsGridScroll;

    classHeader: TbsGridHeaders;
    classColumn: TbsGridColumns;
    classControl: TbsGridControl;
    classRange: TbsGridRange;
    classRange40: TbsGridRangePanel;
    classRange50: TbsGridRangePanel;
    classFilter: TbsGridFilter;
    classGroup: TbsGridGroup;
    classSort: TbsGridSort
    classTree: TbsGridTree;

    classPanelBase: TbsGridPanelBase;
    classPanel10: TbsGridPanel10;
    classPanel20: TbsGridPanel20;
    classPanel30: TbsGridPanel30;
    classPanel40: TbsGridPanel40;
    classPanel50: TbsGridPanel50;
    classPanel70: TbsGridPanel70;
    classPanel80: TbsGridPanel80;
    classPanel90: TbsGridPanel90;
    classPanel99: TbsGridPanel99;
    classPage: TbsGridPage;
    classPagination: TbsGridPagination;

    classTop: TbsGridTop;
    classFooter: TbsGridFooter;

    tbsGridDate: TbsGridDate;
    tbsGridCombo: TbsGridCombo;

    classRow: TbsGridRow;
    classCell: TbsGridCell;

    topLineDiv    : any;
    bottomLineDiv : any;
    leftLineDiv   : any;
    rightLineDiv  : any;

    options: GridOptions;

    constructor(gridId: string, gridConfigs: object) {
        super(gridId, gridConfigs);

        this.classScroll    = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classHeader    = new TbsGridHeaders(this);
        this.classColumn    = new TbsGridColumns(this);
        this.classControl   = new TbsGridControl(this); 
        this.classRange     = new TbsGridRange(this);
        this.classRange40   = new TbsGridRangePanel(this, 'panel40');
        this.classRange50   = new TbsGridRangePanel(this, 'panel50');
        this.classFilter    = new TbsGridFilter(this);
        this.classGroup     = new TbsGridGroup(this);
        this.classPage      = new TbsGridPage(this);
        this.classSort      = new TbsGridSort(this);
        this.classTree      = new TbsGridTree(this);

        this.classPanelBase = new TbsGridPanelBase(this);
        this.classPanel10 = new TbsGridPanel10(this);
        this.classPanel20 = new TbsGridPanel20(this);
        this.classPanel30 = new TbsGridPanel30(this);
        this.classPanel40 = new TbsGridPanel40(this);
        this.classPanel50 = new TbsGridPanel50(this);
        this.classPanel70 = new TbsGridPanel70(this);
        this.classPanel80 = new TbsGridPanel80(this);
        this.classPanel90 = new TbsGridPanel90(this);
        this.classPanel99 = new TbsGridPanel99(this);

        this.classPage = new TbsGridPage(this);
        this.classPagination = new TbsGridPagination(this);

        this.classTop    = new TbsGridTop(this);
        this.classFooter = new TbsGridFooter(this);

        this.tbsGridDate;
        this.tbsGridCombo;

        this.classRow = new TbsGridRow(this);
        this.classCell = new TbsGridCell(this, null);

        this.topLineDiv    = null;
        this.bottomLineDiv = null;
        this.leftLineDiv   = null;
        this.rightLineDiv  = null;

        ////////////////////////////////////////////////////////////////////////

        /* GridOptions */
        this.options = {}

        /* toolbar, filter, sort, group panel optons */
        this.options.showToolbarPanel = false;
        this.options.showFilterPanel = false;
        this.options.showSortPanel = false;
        this.options.showGroupPanel = false;

        /* Columns Options */
        this.options.sortable = true;
        this.options.resizable = true;
        this.options.movable = true;
        this.options.autoResizable = true;
        this.options.autoWidth = false;

        // Rows Options
        this.options.selectMode = 'cells';	//@value : cell, cells(default) // row, rows : @deprecated
        this.options.addRow = false; 	//== row option
        this.options.delRow = false;
        this.options.insertRow = false;
        this.options.updateRow = false;
        this.options.deleteRow = false;
        this.options.zeroChar = '-';
        this.options.useToolbar = true;
        this.options.imageRoot = this.getConfigOption('imageRoot');

        this.options.treeItemName = null;
        this.options.treeParentName = null;
        this.options.treeRootValue = null;


        this.options.pageRowCount = 10;
        this.options.pageRowCountList = [10, 20, 30, 50, 100];

    }

    /**
     * get configs value
     */

    getConfigCulture (label: string) { return this.null(this.gridConfig['culture'][label])  ? 'No Label' : this.gridConfig['culture'][label]; }

    getConfigCalendar(label: string) { return this.null(this.gridConfig['calendar'][label]) ? 'No Label' : this.gridConfig['calendar'][label]; }

    getConfigFont    (label: string) { return this.null(this.gridConfig['font'][label])     ? 'No Label' : this.gridConfig['font'][label]; }

    getConfigOption  (label: string) { return this.null(this.gridConfigOptions[label])      ? 'No Label' : this.gridConfigOptions[label]; }

    getConfigLabel   (label: string) { return this.null(this.gridConfig['labels'][label])   ? 'No Label' : this.gridConfig['labels'][label]; }

    /**
     *  TbsGrid Config
     */

    setGridConfig(tbsGridConfig: any) { this.gridConfig = tbsGridConfig; }

    getUserImageRoot(columnName: string) {
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

    showGroupPanel() { this.classGroup.showGroupPanel(); }

    hideGroupPanel() { this.classGroup.hideGroupPanel(); }

    setGroupColumns(groupColumns: any[]){
        this.group_column_table.remove();
        groupColumns.map(column => this.group_column_table.insert(this.copyJson(column)))
    }

    setSortColumns(sortColumns: any[]){
        this.sort_column_table.remove();
        sortColumns.map(column => this.sort_column_table.insert(this.copyJson(column)))
    }

    /**
     * Tree Functions
     */

    //setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }

    setTreeSortColumn(sortColumn: any) { this.classTree.setTreeSortColumns(sortColumn); }

    /**
     *  Panel10 Functions
     */

    showToolbarPanel() { this.classPanel10.showToolbarPanel(); }

    hideToolbarPanel() { this.classPanel10.hideToolbarPanel(); }

    showToolbarButtons(buttonType: string) { this.classPanel10.showToolbarButtons(buttonType); }

    hideToolbarButtons(buttonType: string) { this.classPanel10.hideToolbarButtons(buttonType); }

    showFilterPanel() { this.classFilter.showFilterPanel(); }

    hideFilterPanel() { this.classFilter.hideFilterPanel(); }

    showSortPanel() { this.classSort.showSortPanel(); }

    hideSortPanel() { this.classSort.hideSortPanel(); }

    /**
     * Options
     */

    createOption(options: any) { this.setOptions(options); }

    setOption(optionName: string, optionValue: any) { this.options[optionName] = optionValue; }

    setOptions(options: any) { for (let key in options) this.setOption(key, options[key]); }
}

/**
 *
 * Class Mixins
 *
 */

export interface TbsGrid
    extends TbsGridBaseMain
        , TbsGridBaseIs
        , TbsGridBaseEvent
        , TbsGridBaseUserEvent
        , TbsGridBaseLine
        , TbsGridBaseData
        , TbsGridBaseColumns
        , TbsGridBaseRows {}

applyMixins(TbsGrid,
    [TbsGridBaseMain,
        , TbsGridBaseIs
        , TbsGridBaseEvent
        , TbsGridBaseUserEvent
        , TbsGridBaseLine
        , TbsGridBaseData
        , TbsGridBaseColumns
        , TbsGridBaseRows]);

function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}


