import {TbsGridScrollBase} from "./tbs.grid.scroll.base";
import {TbsGridScroll} from "./tbs.grid.scroll";
import {TbsGridHeaders} from "./columns/tbs.grid.headers";
import {TbsGridColumns} from "./columns/tbs.grid.columns";
import {TbsGridControl} from "./tbs.grid.control";
import {TbsGridRange} from "./tbs.grid.range";
import {TbsGridRangePanel} from "./tbs.grid.range.panel";
import {TbsGridFilter} from "./tbs.grid.filter";
import {TbsGridGroup} from "./tbs.grid.group";
import {TbsGridPage} from "./tbs.grid.page";
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
import { TbsGridBaseOptions } from "./base/tbs.grid.base.options";

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
    classPage: TbsGridPage;
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

    constructor(gridId: string, gridConfigs: object) {
        super(gridId, gridConfigs);

        this.classScroll    = new TbsGridScrollBase(this);
        this.verticalScroll = new TbsGridScroll(this, 'verticalScroll');
        this.horizontalScroll = new TbsGridScroll(this, 'horizontalScroll');

        this.classHeader    = new TbsGridHeaders(this);
        this.classColumn    = new TbsGridColumns(this);
        this.classControl   = new TbsGridControl(this); // memory
        this.classRange     = new TbsGridRange(this);// memory
        this.classRange40   = new TbsGridRangePanel(this, 'panel40');// memory
        this.classRange50   = new TbsGridRangePanel(this, 'panel50');// memory
        this.classFilter    = new TbsGridFilter(this);// memory
        this.classGroup     = new TbsGridGroup(this);// memory
        this.classPage      = new TbsGridPage(this);// memory
        this.classSort      = new TbsGridSort(this);// memory
        this.classTree      = new TbsGridTree(this);// memory

        this.classPanelBase = new TbsGridPanelBase(this);
        this.classPanel10 = new TbsGridPanel10(this);
        this.classPanel20 = new TbsGridPanel20(this);
        this.classPanel30 = new TbsGridPanel30(this);
        this.classPanel40 = new TbsGridPanel40(this);
        this.classPanel50 = new TbsGridPanel50(this);
        this.classPanel70 = new TbsGridPanel70(this);
        this.classPanel80 = new TbsGridPanel80(this);
        this.classPanel90 = new TbsGridPanel90(this);

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
    }
}

/**
 *
 * Class Mixins
 *
 */

export interface TbsGrid
    extends TbsGridBaseMain
        , TbsGridBaseOptions
        , TbsGridBaseIs
        , TbsGridBaseEvent
        , TbsGridBaseUserEvent
        , TbsGridBaseLine
        , TbsGridBaseData
        , TbsGridBaseColumns
        , TbsGridBaseRows {}

applyMixins(TbsGrid,
    [TbsGridBaseMain,
        , TbsGridBaseOptions
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


