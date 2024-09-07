
TbsGrid.prototype.tbs_setPanelSize = function() {
	// Necessary after create header
	let selector = '#' + this.gridId;
	let grid = this;

	let rectGrid= document.querySelector(selector).getBoundingClientRect();
	let main    = document.querySelector(selector + ' .tbs-grid-main');

	let panel10 = document.querySelector(selector + ' .tbs-grid-panel10'); // toolbar
	let panel80 = document.querySelector(selector + ' .tbs-grid-panel80'); // groupping
	let panel90 = document.querySelector(selector + ' .tbs-grid-panel90'); // sort

	let panel20 = document.querySelector(selector + ' .tbs-grid-panel20');
	let panel21 = document.querySelector(selector + ' .tbs-grid-panel21');
	let panel22 = document.querySelector(selector + ' .tbs-grid-panel22');

	let panel30 = document.querySelector(selector + ' .tbs-grid-panel30');
	let panel31 = document.querySelector(selector + ' .tbs-grid-panel31');
	let panel32 = document.querySelector(selector + ' .tbs-grid-panel32');

	let panel40 = document.querySelector(selector + ' .tbs-grid-panel40');
	let panel41 = document.querySelector(selector + ' .tbs-grid-panel41');
	let panel42 = document.querySelector(selector + ' .tbs-grid-panel42');

	let panel50 = document.querySelector(selector + ' .tbs-grid-panel50');
	let panel51 = document.querySelector(selector + ' .tbs-grid-panel51');
	let panel52 = document.querySelector(selector + ' .tbs-grid-panel52');

	let panel60 = document.querySelector(selector + ' .tbs-grid-panel60');
	let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
	let panel62 = document.querySelector(selector + ' .tbs-grid-panel62');

	let panel70 = document.querySelector(selector + ' .tbs-grid-panel70');
	let panel71 = document.querySelector(selector + ' .tbs-grid-panel71');
	let panel72 = document.querySelector(selector + ' .tbs-grid-panel72');

	let group20 = document.querySelector(selector + ' .tbs-grid-group20');
	let group21 = document.querySelector(selector + ' .tbs-grid-group21');

	let group30 = document.querySelector(selector + ' .tbs-grid-group30');
	let group31 = document.querySelector(selector + ' .tbs-grid-group31');

	let group40 = document.querySelector(selector + ' .tbs-grid-group40');
	let group41 = document.querySelector(selector + ' .tbs-grid-group41');

	let group50 = document.querySelector(selector + ' .tbs-grid-group50');
	let group51 = document.querySelector(selector + ' .tbs-grid-group51');

	let group60 = document.querySelector(selector + ' .tbs-grid-group60');
	let group61 = document.querySelector(selector + ' .tbs-grid-group61');

	let group70 = document.querySelector(selector + ' .tbs-grid-group70');
	let group71 = document.querySelector(selector + ' .tbs-grid-group71');

	let mainHeight = rectGrid.height;

	if (grid.toolbar_visible == true) mainHeight -= 25;
	if (grid.options[grid.option_groupVisible])  mainHeight -= 33; // panel80
	if (grid.options[grid.option_sortVisible])   mainHeight -= 33; // panel90
	//if (grid.options[grid.option_filterVisible]) mainHeight -= grid.rowHeight * 2; // panel70

	main.style.height = `${mainHeight}px`;

	// header : group21, group22 group20
	let rectTable21= document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-table').getBoundingClientRect();
	let rectTable22= document.querySelector(selector + ' .tbs-grid-panel22 .tbs-grid-table').getBoundingClientRect();

	// Consider hidden columns
	let rectTable20= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();

	let height = parseInt(rectTable20.height);

	let fixedColumnsWidth = grid.tbs_getFixedColumnsWidth();

	if (this.fixedRowIndex != -1 && this.fixedColumnIndex != -1) {
		group21.style.left   = '0px';
		group21.style.top    = '0px';
		group21.style.bottom = height + 'px';
		group21.style.width  = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth)  + 'px';
		group20.style.height = height + 'px';

		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
	}
	else if (this.fixedColumnIndex != -1) {
		group21.style.left = '0px';
		group21.style.top  = '0px';
		group21.style.bottom = height + 'px';

		group21.style.width  = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(fixedColumnsWidth)  + 'px';
		group20.style.height = height + 'px';

		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
		panel22.style.width  = parseInt(fixedColumnsWidth) + 'px';
		panel22.style.height = height + 'px';
	}
	else {
		group21.style.left = '0px';
		group21.style.top  = '0px';
		group21.style.bottom = height + 'px';

		group21.style.width  = parseInt(rectTable21.width)  + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width)  + 'px';
		group20.style.height = height + 'px';

		panel22.style.width  = '0px';
		panel22.style.height = '0px';
	}
	// Filter panel
	if (grid.options[grid.option_filterVisible]) {
		let rectTable71 = document.querySelector(selector + ' .tbs-grid-panel71 .tbs-grid-table').getBoundingClientRect();
		let rectTable72 = document.querySelector(selector + ' .tbs-grid-panel72 .tbs-grid-table').getBoundingClientRect();
		let rectTable70 = document.querySelector(selector + ' .tbs-grid-panel70 .tbs-grid-table').getBoundingClientRect();
		if (this.fixedColumnIndex != -1) {
			group71.style.top    = height + 'px';
			group71.style.width  = group21.style.width;
			group71.style.height = parseInt(rectTable70.height) + 'px';

			group70.style.top    = height + 'px';
			group70.style.left   = group21.style.width;
			group70.style.height = parseInt(rectTable70.height) + 'px';

			panel72.style.left   = panel22.style.left;
			panel72.style.width  = panel22.style.width;
			panel72.style.height = parseInt(rectTable70.height) + 'px';
		}
		else {
			group71.style.top    = height + 'px';
			group71.style.width  = group21.style.width;
			group71.style.height = parseInt(rectTable70.height) + 'px';

			group70.style.top    = height + 'px';
			group70.style.left   = group21.style.width;
			group70.style.height = parseInt(rectTable70.height) + 'px';

			panel72.style.width  = '0px';
			panel72.style.left   = '0px';
			panel72.style.height = '0px';
		}
		height += parseInt(rectTable71.height);
	}
	// summary top : group41, group42, group40
	if (this.topColumns.length > 0){
		let rectTable41 = document.querySelector(selector + ' .tbs-grid-panel41 .tbs-grid-table').getBoundingClientRect();
		let rectTable42 = document.querySelector(selector + ' .tbs-grid-panel42 .tbs-grid-table').getBoundingClientRect();
		let rectTable40 = document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').getBoundingClientRect();
		if (this.fixedRowIndex != -1 && this.fixedColumnIndex != -1) {
			group41.style.top    = height + 'px';
			group41.style.width  = group21.style.width;
			group41.style.height = parseInt(rectTable40.height) + 'px';

			group40.style.top    = height + 'px';
			group40.style.left   = group21.style.width;
			group40.style.height = parseInt(rectTable40.height) + 'px';

			panel42.style.left   = panel22.style.left;
			panel42.style.width  = panel22.style.width;
			panel42.style.height = parseInt(rectTable40.height) + 'px';
			panel40.style.left   = panel20.style.left;
		}
		else if (this.fixedColumnIndex != -1) {
			group41.style.top    = height + 'px';
			group41.style.width  = group21.style.width;
			group41.style.height = parseInt(rectTable40.height) + 'px';

			group40.style.top    = height + 'px';
			group40.style.left   = group21.style.width;
			group40.style.height = parseInt(rectTable40.height) + 'px';

			panel42.style.left   = panel22.style.left;
			panel42.style.width  = panel22.style.width;
			panel42.style.height = parseInt(rectTable40.height) + 'px';
			panel40.style.left   = panel20.style.left;
		}
		else {
			group41.style.top    = height + 'px';
			group41.style.width  = group21.style.width;
			group41.style.height = parseInt(rectTable40.height) + 'px';

			group40.style.top    = height + 'px';
			group40.style.left   = group21.style.width;
			group40.style.height = parseInt(rectTable40.height) + 'px';

			panel42.style.width  = '0px';
			panel40.style.left   = '0px';
			panel42.style.height = '0px';
		}
		height += parseInt(rectTable40.height);
	}
	// frozen row : group61, group62, group60
	if (this.fixedRowIndex != -1 && this.fixedColumnIndex != -1) {
		group61.style.top    = height + 'px';
		group61.style.left   = group21.style.left;
		group61.style.width  = group21.style.width;
		group61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

		group60.style.top    = height + 'px';
		group60.style.left   = group20.style.left;
		group60.style.width  = group20.style.width;
		group60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

		panel61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
		panel61.style.width  = panel21.style.width;

		panel62.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
		panel62.style.width  = panel22.style.width;
		panel62.style.left   = panel22.style.left;

		panel60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
		panel60.style.width  = group20.style.width;

		height += this.fixedRowCount * grid.rowHeight;
	}
	else if (this.fixedRowIndex != -1) {
		let panel61 = document.querySelector(selector + ' .tbs-grid-panel61');
		let rectTable61 = document.querySelector(selector + ' .tbs-grid-panel61 .tbs-grid-table').getBoundingClientRect();

		group61.style.top    = height + 'px';
		group61.style.left   = group21.style.left;
		group61.style.width  = group21.style.width;
		group61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

		group60.style.top    = height + 'px';
		group60.style.left   = group20.style.left;
		group60.style.width  = group20.style.width;
		group60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

		panel61.style.height = grid.fixedRowCount * grid.rowHeight + 'px';
		panel60.style.height = grid.fixedRowCount * grid.rowHeight + 'px';

		//panel60.style.width  = group20.style.width;

		height += this.fixedRowCount * grid.rowHeight;
	}
	// content : group31, group32, group30
	if (this.fixedRowIndex != -1) {
		let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
		let rectTable32 = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table').getBoundingClientRect();
		let rectTable30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').getBoundingClientRect();

		group31.style.top    = height + 'px';
		group30.style.top    = height + 'px';

		group31.style.width  = group21.style.width;
		group31.style.height = parseInt(rectTable30.height) + 'px';

		group30.style.left   = group21.style.width;
		//group30.style.height = parseInt(rectTable30.height) + 'px';

		panel32.style.left   = panel22.style.left;
		panel32.style.width  = panel22.style.width;
		panel40.style.left   = panel20.style.left;

		// let scroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
		// scroll.style.top = group31.style.top;
		// let scroll6 = document.querySelector(selector + ' .tbs-grid-vertical-scroll6');
		// scroll6.style.height = height + 'px';
		// scroll6.style.display = '';
	}
	else if (this.fixedColumnIndex != -1) {
		let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
		let rectTable32 = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table').getBoundingClientRect();
		let rectTable30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').getBoundingClientRect();

		group31.style.top    = height + 'px';
		group31.style.width  = group21.style.width;

		group30.style.top    = height + 'px';
		group30.style.left   = group21.style.width;

		panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
		panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

		panel32.style.width  = '0px';
		panel30.style.left   = '0px';

		panel32.style.left   = panel22.style.left;
		panel32.style.width  = panel22.style.width;
	}
	else {
		group31.style.top    = height + 'px';
		group31.style.width  = group21.style.width;

		group30.style.top    = height + 'px';
		group30.style.left   = group21.style.width;

		panel32 = document.querySelector(selector + ' .tbs-grid-panel32');
		panel30 = document.querySelector(selector + ' .tbs-grid-panel30');

		panel32.style.width  = '0px';
		panel30.style.left   = '0px';
	}
	// summary footer : group51, group52, group50
	if (this.footerColumns.length > 0) {
		if (this.fixedColumnIndex != -1 && this.fixedRowIndex != -1) {
			let rectTable50  = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
			group31.style.bottom = parseInt(rectTable50.height) + 'px';
			group30.style.bottom = parseInt(rectTable50.height) + 'px';

			group51.style.width  = group21.style.width;
			group51.style.height = parseInt(rectTable50.height) + 'px';

			group50.style.left   = group21.style.width;
			group50.style.height = parseInt(rectTable50.height) + 'px';

			panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
			panel50 = document.querySelector(selector + ' .tbs-grid-panel50');

			panel52.style.left   = panel22.style.left;
		}
		else if (this.fixedColumnIndex != -1) {
			let rectTable50  = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
			group31.style.bottom = parseInt(rectTable50.height) + 'px';
			group30.style.bottom = parseInt(rectTable50.height) + 'px';

			group51.style.width  = group21.style.width;
			group51.style.height = parseInt(rectTable50.height) + 'px';

			group50.style.left   = group21.style.width;
			group50.style.height = parseInt(rectTable50.height) + 'px';

			panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
			panel50 = document.querySelector(selector + ' .tbs-grid-panel50');

			panel52.style.left   = parseInt(rectTable21.width)  + 'px';
			panel52.style.width  = parseInt(fixedColumnsWidth) + 'px';
			panel52.style.height = parseInt(rectTable50.height) + 'px';
		}
		else {
			let rectTable50  = document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').getBoundingClientRect();
			group51.style.width  = group21.style.width;
			group51.style.height = parseInt(rectTable50.height) + 'px';

			group50.style.left   = group21.style.width;
			group50.style.height = parseInt(rectTable50.height) + 'px';

			group31.style.bottom = parseInt(rectTable50.height) + 'px';
			group30.style.bottom = parseInt(rectTable50.height) + 'px';

			panel52 = document.querySelector(selector + ' .tbs-grid-panel52');
			panel50 = document.querySelector(selector + ' .tbs-grid-panel50');

			panel52.style.width = '0px';
			panel50.style.left  = '0px';
			panel52.style.height = '0px';

		}
	}

	this.tbs_setPageRowCount();
}
TbsGrid.prototype.tbs_setBarPosition = function (type, topRowIndex) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (type == grid.code_horizontal) {
		let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');

		let railSize = grid.horizontalScroll.railSize;
		let hiddenSize = grid.horizontalScroll.hiddenSize;

		let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
		xBar.style.left = ((curLeft / hiddenSize) * railSize) + 'px';
	}
	else if (type == grid.code_vertical) {
		topRowIndex = grid.null(topRowIndex) ? 0 : topRowIndex;
		if (topRowIndex == 0) document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = '0px';
		else if (grid.tbs_isLastTopRowIndex(topRowIndex)) {
			document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = grid.verticalScroll.railSize + 'px';
		}
		else {
			let styleTop = parseInt(Math.ceil(topRowIndex / grid.verticalScroll.moveCount));
			//console.log(`styleTop ${styleTop} topRowIndex ${topRowIndex}`);
			document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = styleTop + 'px';
		}
	}
}
TbsGrid.prototype.tbs_setBarPositionByDirection = function(type, rowIndex) {
	//tbs_setBarPositionByDirection
	//grid, type: up, down, right, left
	let selector = '#' + this.gridId;
	let grid = this;
	if (type == 'up') {
		let displayTopRowIndex = this.tbs_getFirstDisplayRowIndex();
		let trTopIndex = this.tbs_getFirstRowIndex() - 1;

		if (trTopIndex < 0) return false;
		//-------------------------------------------------------------
		grid.tbs_setBarPosition(grid.code_vertical, trTopIndex);
		grid.tbs_displayPanel30(trTopIndex)
		//---------------------------------------------------------------
		return trTopIndex;
	}
	if (type == 'down') {
		let displayTopRowIndex = this.tbs_getFirstDisplayRowIndex();
		let trTopIndex = 0;
		if (rowIndex == undefined) trTopIndex = this.tbs_getFirstRowIndex() + 1;
		else trTopIndex = rowIndex;

		if (grid.pageRowCount > grid.pageIntRowCount) {
			if (trTopIndex > (grid.data_view.length - grid.pageRowCount + 1)) return null;
		}
		else {
			if (trTopIndex > (grid.data_view.length - grid.pageRowCount)) return null;
		}
		//-------------------------------------------------------------
		grid.tbs_setBarPosition(grid.code_vertical, trTopIndex);
		grid.tbs_displayPanel30(trTopIndex)
		//-------------------------------------------------------------
		return trTopIndex;
	}
	if (type == 'right') {
		let hiddenSize = this.horizontalScroll.hiddenSize;
		let moveWidth = 15;
		let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
		let divHeaderMove  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
		let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
		let footer  = document.querySelector(selector + ' .tbs-grid-panel50');
		if (divHeaderMove.style.left == (-1 * hiddenSize) + 'px') return;

		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let railSize = this.horizontalScroll.railSize;

		let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
		if (divContentMove.getBoundingClientRect().width <=	divContent.getBoundingClientRect().width) return;

		let sLeft;
		if (curLeft + moveWidth >= hiddenSize) sLeft = (-1 * hiddenSize) + 'px';
		else sLeft = (divHeaderMove.style.left.replace('px', '') - moveWidth) + 'px';
		this.tbs_setContentPanelLeft(sLeft);
		this.tbs_setBarPosition(grid.code_horizontal);
		this.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
	}
	if (type == 'left') {
		let moveWidth = 15;
		let divHeaderMove  = document.querySelector(selector + ' .tbs-grid-panel20  .tbs-grid-table');
		let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
		let footer  = document.querySelector(selector + ' .tbs-grid-panel50');
		if (divHeaderMove.style.left == '0px') return false;
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let railSize = this.horizontalScroll.railSize;
		let hiddenSize = this.horizontalScroll.hiddenSize;
		let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
		let sLeft;
		if (curLeft - moveWidth <= 0) sLeft = '0px';
		else sLeft = (-1 * curLeft + moveWidth) + 'px';

		this.tbs_setContentPanelLeft(sLeft);
		this.tbs_setBarPosition(grid.code_horizontal);
		this.tbs_displayPanel30(grid.tbs_getFirstRowIndex());
	}
}

TbsGrid.prototype.tbs_getContentPanelLeft = function (value) {
	let selector = '#' + this.gridId;
	let grid = this;

	let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
	value = parseInt(value, 10);

    let railSize = this.horizontalScroll.railSize;
    let ratio = (panel20.childNodes[0].clientWidth - panel20.clientWidth) / railSize;
	let sLeft = (value * -1 * ratio).toString() + 'px';
	return sLeft;
}
TbsGrid.prototype.tbs_setContentPanelLeft = function (value) {
	let selector = '#' + this.gridId;
	let grid = this;

	value = parseInt(value, 10) + 'px';

	let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
	let panel30= document.querySelector(selector + ' .tbs-grid-panel30');
	let panel40= document.querySelector(selector + ' .tbs-grid-panel40');
	let panel50= document.querySelector(selector + ' .tbs-grid-panel50');
	let panel60= document.querySelector(selector + ' .tbs-grid-panel60');
	let panel70= document.querySelector(selector + ' .tbs-grid-panel70');

	if(this.notNull(panel20.childNodes[0])) panel20.childNodes[0].style.left = value;
	if(this.notNull(panel30.childNodes[0])) panel30.childNodes[0].style.left = value;
	if(this.notNull(panel40.childNodes[0])) panel40.childNodes[0].style.left = value;
	if(this.notNull(panel50.childNodes[0])) panel50.childNodes[0].style.left = value;
	if(this.notNull(panel60.childNodes[0])) panel60.childNodes[0].style.left = value;
	if(this.notNull(panel70.childNodes[0])) panel70.childNodes[0].style.left = value;
	/*
	if (this.fixedRowIndex        != -1) document.querySelector(selector + ' .tbs-grid-panel60 .tbs-grid-table').style.left  = left;
	if (this.topColumns.length    >  0) document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').style.left  = left;
	if (this.footerColumns.length >  0) document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').style.left  = left;
	*/
}
TbsGrid.prototype.tbs_setContentPanelLeftMove = function (value) {
	let selector = '#' + this.gridId;
	let grid = this;
	let table20= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
	let left = (parseInt(table20.style.left, 10) + value) + 'px';
	this.tbs_setContentPanelLeft(left);
}

TbsGrid.prototype.tbs_setColumnWidth = function (panelName, colIndex, value) {
	let selector = '#' + this.gridId;;
	let grid = this;

	if (panelName == 'panel22') grid.tbs_setColumnWidth22(panelName, colIndex, value);
	else grid.tbs_setColumnWidth20(panelName, colIndex, value);

}
TbsGrid.prototype.tbs_setColumnWidth20 = function (panelName, colIndex, value) {
	let selector = '#' + this.gridId;;
	let grid = this;

	let colList  = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
	let colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
	let colList5 = document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-table thead th');
	let colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
	let colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
	let colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');

	let nWidth = parseInt(value) + 'px';
	grid.columns[colIndex][grid.column_width] = parseInt(value, 10);

	colList[colIndex].style.width  = nWidth;
	colList2[colIndex].style.width = nWidth;
	if (grid.fixedRowIndex        != -1) colList5[colIndex].style.width = nWidth;
	if (grid.topColumns.length    > 0  ) colList3[colIndex].style.width = nWidth;
	if (grid.footerColumns.length > 0  ) colList4[colIndex].style.width = nWidth;
	if (grid.options[grid.option_filterVisible]) colList7[colIndex].style.width = nWidth;
	this.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
	this.verticalScroll.tbs_setScroll(grid.code_vertical);
}
TbsGrid.prototype.tbs_setColumnWidth22 = function (panelName, colIndex, value) {
	let selector = '#' + this.gridId;;
	let grid = this;

	let colList  = document.querySelectorAll(selector + ' .tbs-grid-panel22 .tbs-grid-table thead th');
	let colList2 = document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table thead th');
	let colList5 = document.querySelectorAll(selector + ' .tbs-grid-panel62 .tbs-grid-table thead th');
	let colList3 = document.querySelectorAll(selector + ' .tbs-grid-panel42 .tbs-grid-table thead th');
	let colList4 = document.querySelectorAll(selector + ' .tbs-grid-panel52 .tbs-grid-table thead th');
	let colList7 = document.querySelectorAll(selector + ' .tbs-grid-panel72 .tbs-grid-table thead th');

	let nWidth = parseInt(value) + 'px';
	grid.columns[colIndex][grid.column_width] = parseInt(value, 10);

	colList[colIndex].style.width  = nWidth;
	colList2[colIndex].style.width = nWidth;

	if (grid.fixedRowIndex        != -1) colList5[colIndex].style.width = nWidth;
	if (grid.topColumns.length    > 0  ) colList3[colIndex].style.width = nWidth;
	if (grid.footerColumns.length > 0  ) colList4[colIndex].style.width = nWidth;
	if (grid.options[grid.option_filterVisible]) colList7[colIndex].style.width = nWidth;

	grid.tbs_setPanelSize();
	grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
	grid.verticalScroll.tbs_setScroll(grid.code_vertical);
}

TbsGrid.prototype.tbs_getFixedColumnsWidth = function () {
	let selector = '#' + this.gridId;;
	let grid = this;

	let result = 0;
	for (let x = 0; x <= grid.fixedColumnIndex; x++){
		let column = grid.columns[x];
		if (column[grid.column_visible]) result += Number(column[grid.column_width]);
	}
	//console.log(result);
	return result;
}
TbsGrid.prototype.tbs_setAllColumnWidth = function (arr) {
	let selector = '#' + this.gridId;;
	let grid = this;

	let thList20 = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table thead th');
	let thList30 = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table thead th');
	let thList40 = document.querySelectorAll(selector + ' .tbs-grid-panel40 .tbs-grid-table thead th');
	let thList50 = document.querySelectorAll(selector + ' .tbs-grid-panel50 .tbs-grid-table thead th');
	let thList60 = document.querySelectorAll(selector + ' .tbs-grid-panel60 .tbs-grid-table thead th');
	let thList70 = document.querySelectorAll(selector + ' .tbs-grid-panel70 .tbs-grid-table thead th');
	for (let x = 0, len = grid.columns.length; x < len; x++){
		grid.columns[x].width = arr[x];
		let nWidth = arr[x] + 'px';
		thList20[x].style.width = nWidth;
		thList30[x].style.width = nWidth;
		if (grid.topColumns.length    > 0) thList40[x].style.width = nWidth;
		if (grid.footerColumns.length > 0) thList50[x].style.width = nWidth;
		if (grid.fixedRowIndex      != -1) thList60[x].style.width = nWidth;
		if (grid.options[grid.option_filterVisible]) thList70[x].style.width = nWidth;
	}
	grid.horizontalScroll.tbs_setScroll(grid.code_horizontal);;
}
TbsGrid.prototype.tbs_setPageRowCount = function(panelName = '') {
	let selector = '#' + this.gridId;
	let grid = this;

	let rowHeight = this.rowHeight;
	let contentHeight = parseInt(document.querySelector(selector + ' .tbs-grid-group30').getBoundingClientRect().height);
	let pageRowCount = contentHeight/rowHeight > parseInt(contentHeight/rowHeight) ?  parseInt(contentHeight/rowHeight) + 1 : parseInt(contentHeight/rowHeight);
	let pageIntRowCount = Math.floor(contentHeight/rowHeight);

	this.pageRowCount    = pageRowCount;
	this.pageIntRowCount = pageIntRowCount;
}
