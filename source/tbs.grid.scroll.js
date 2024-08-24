/**
 * tbs.grid.scroll.js
 *
 */
TbsGrid.prototype.tbs_setPanelSize = function() {
	// Necessary after create header
	let selector = '#' + this.gridId;
	let grid = this;

	let rectGrid= document.querySelector(selector).getBoundingClientRect();
	let main    = document.querySelector(selector + ' .tbs-grid-main');

	let panel10 = document.querySelector(selector + ' .tbs-grid-panel10'); // toolbar
	let panel80 = document.querySelector(selector + ' .tbs-grid-panel80'); // groupping

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
	if (grid.toolbar_visible == true) mainHeight = mainHeight - 25;
	if (grid.options.grouping[grid.option_groupVisible] == true) mainHeight = mainHeight - 33;
	main.style.height = `${mainHeight}px`;

	// header : group21, group22 group20
	let rectTable21= document.querySelector(selector + ' .tbs-grid-panel21	.tbs-grid-table').getBoundingClientRect();
	let rectTable22= document.querySelector(selector + ' .tbs-grid-panel22 .tbs-grid-table').getBoundingClientRect();
	let rectTable20= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();

	let height = parseInt(rectTable20.height);
	if (this.fixedRowIndex != -1 && this.fixedColumnIndex != -1) {
		group21.style.left   = '0px';
		group21.style.top    = '0px';
		group21.style.bottom = height + 'px';
		group21.style.width  = parseInt(rectTable21.width) + parseInt(rectTable22.width) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(rectTable22.width)  + 'px';
		group20.style.height = height + 'px';

		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
	}
	else if (this.fixedColumnIndex != -1) {
		group21.style.left = '0px';
		group21.style.top  = '0px';
		group21.style.bottom = height + 'px';

		group21.style.width  = parseInt(rectTable21.width) + parseInt(rectTable22.width) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(rectTable22.width)  + 'px';
		group20.style.height = height + 'px';
		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
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
	}
	// Filter panel
	if (grid.options.filtering[grid.option_filterVisible]) {
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
			panel70.style.left   = panel20.style.left;
		}
		else {
			group71.style.top    = height + 'px';
			group71.style.width  = group21.style.width;
			group71.style.height = parseInt(rectTable70.height) + 'px';

			group70.style.top    = height + 'px';
			group70.style.left   = group21.style.width;
			group70.style.height = parseInt(rectTable70.height) + 'px';

			panel72.style.width  = '0px';
			panel70.style.left   = '0px';
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

			panel52.style.left   = panel22.style.left;
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
		}
	}

	this.tbs_setPageRowCount();
}

TbsGrid.prototype.tbs_setSizePanel = function(p0, p1, p2) {
	let selector = '#' + this.gridId;
	let grid = this;

	let panel0 = document.querySelector(selector + ' .tbs-grid-' + p0);
	let panel1 = document.querySelector(selector + ' .tbs-grid-' + p1);
	let panel2 = document.querySelector(selector + ' .tbs-grid-' + p2);
}
TbsGrid.prototype.tbs_setSizePanels = function() {
	let selector = '#' + this.gridId;
	let grid = this;
}

TbsGrid.prototype.tbs_setScroll = function(type, initValue) {
	// function :
	let selector = '#' + this.gridId;
	let grid = this;

	grid.tbs_setScroll2(type, initValue, 'scroll');
}
TbsGrid.prototype.tbs_setScroll2_0807 = function(type, initValue, scrollName = 'scroll') {
	// function :
	// @type : this.code_horizontal, this.code_vertical
	// @initValue : 0, auto, undefined
	// @scrollName : scroll = '', scroll2, scroll6

	// scroll  : hori  verti   box
	// scroll2 : hori  panel32
	// scroll6 : verti panel60

	let selector = '#' + this.gridId;
	let grid = this;

	let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
	let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
	let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
	let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

	if (type == this.code_horizontal) {
		let header = document.querySelector(selector + ' .tbs-grid-panel20');
		let headerTable = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');

		let headerRect = header.getBoundingClientRect();
		let headerTableRect = headerTable.getBoundingClientRect();

		// 1) table area >  panel area : scroll setting
		// 2) table area <= panel area : scroll hidden
		if (headerTableRect.width > headerRect.width) {
			xScroll.style.display = '';
			scrollBox.style.display = '';
			wrap.style.marginBottom = this.scroll.margin;
			this.tbs_setScrollSize(type);
		} else {
			document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left = '0px';
			document.querySelector(selector + ' .tbs-grid-panel20').childNodes[0].style.left = '0px';
			if (document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table').length > 0)
				document.querySelector(selector + ' .tbs-grid-panel30').childNodes[0].style.left = '0px';
			xScroll.style.display = 'none';
			wrap.style.marginBottom = '0px';
		}
		// to be end function ??
		if (xScroll.style.display == 'none' && yScroll.style.display == 'none') {
			scrollBox.style.display = 'none';
		}
		//let rowHeight = this.rowHeight;
		//let contentHeight = parseInt(document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect().height);
		this.tbs_setPageRowCount();
		let pageRowCount = this.pageRowCount;
		let pageIntRowCount = this.pageIntRowCount;

		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		//==================================================================
		// tr count control
		//==================================================================
		let leftTrList    = document.querySelectorAll(selector + ' .tbs-grid-panel31 tbody tr');
		let contentTrList = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
		let len = leftTrList.length;
		if (len == 0) return;

		let leftTable = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
		let contentTable = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let leftCount = leftTrList.length;
		let contentCount = contentTrList.length;

		for (let i = 0; i < pageRowCount; i++) {
			let leftTr = leftTrList[0].cloneNode(true);
			let contentTr = contentTrList[0].cloneNode(true);

			leftTable.childNodes[1].append(leftTr);
			contentTable.childNodes[1].append(contentTr);
		}
		for (let i = 0; i < leftCount   ; i++) leftTable.deleteRow(-1);
		for (let i = 0; i < contentCount; i++) contentTable.deleteRow(-1);
	}
	else if (type == this.code_vertical) {
		let pageRowCount = this.pageRowCount;
		let dataLength = this.data_view.length;

		if (grid.fixedRowIndex != -1) {
			dataLength = dataLength - (grid.fixedRowIndex + 1);

			if (this.pageRowCount > this.pageIntRowCount) {
				if (dataLength >= pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					this.tbs_setScrollSize(type);
				} else {
					yScroll.style.display = 'none';
					scrollBox.style.display = 'none';
					wrap.style.marginRight = '0px';
				}
			}
			else {
				if (dataLength > pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					this.tbs_setScrollSize(type);
				} else {
					yScroll.style.display = 'none';
					scrollBox.style.display = 'none';
					wrap.style.marginRight = this.scroll.margin;
				}
			}
			if (xScroll.style.display == 'none' && yScroll.style.display == 'none') {
				scrollBox.style.display = 'none';
			}

			let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
			yBar.style.top = '0px';	document.querySelector(selector + ' .tbs-grid-panel30').childNodes[0].style.left = '0px';
		}
		else {
			if (this.pageRowCount > this.pageIntRowCount) {
				if (dataLength >= pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					this.tbs_setScrollSize(type);
				} else {
					yScroll.style.display = 'none';
					scrollBox.style.display = 'none';
					wrap.style.marginRight = '0px';
				}
			}
			else {
				if (dataLength > pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					this.tbs_setScrollSize(type);
				} else {
					yScroll.style.display = 'none';
					scrollBox.style.display = 'none';
					wrap.style.marginRight = this.scroll.margin;
				}
			}
			if (xScroll.style.display == 'none' && yScroll.style.display == 'none') {
				scrollBox.style.display = 'none';
			}

			let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
			yBar.style.top = '0px';	document.querySelector(selector + ' .tbs-grid-panel30').childNodes[0].style.left = '0px';
		}
	}
}
/**
 * @function: tbs_setScroll2
 *
 * @Description :
 * @Param Type grid.code_horizontal, grid.code_vertical
 * @Param scrollName scroll, scroll2(horizontal, panel32), scroll6(vertical, panel60)
 */
TbsGrid.prototype.tbs_setScroll2 = function(type, scrollName = 'scroll') {
	let selector = '#' + this.gridId;
	let grid = this;

	let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
	let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
	let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
	let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

	if (type == this.code_horizontal) {
		let header = document.querySelector(selector + ' .tbs-grid-panel20');
		let headerTable = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');

		let headerRect = header.getBoundingClientRect();
		let headerTableRect = headerTable.getBoundingClientRect();

		// 1) table area > panel area : scroll setting
		if (headerTableRect.width > headerRect.width) grid.tbs_showScroll(type, scrollName);
		else grid.tbs_hideScroll(type, scrollName);

		// to be end function ??
		//if (xScroll.style.display == 'none' && yScroll.style.display == 'none') {
		//	scrollBox.style.display = 'none';
		//}

		//==================================================================
		// table tr count control
		//==================================================================
		this.tbs_setPageRowCount();
		let pageRowCount = this.pageRowCount;
		let pageIntRowCount = this.pageIntRowCount;

		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let leftTrList    = document.querySelectorAll(selector + ' .tbs-grid-panel31 tbody tr');
		let contentTrList = document.querySelectorAll(selector + ' .tbs-grid-panel30 tbody tr');
		let len = leftTrList.length;
		if (len == 0) return;

		let leftTable = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
		let contentTable = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let leftCount = leftTrList.length;
		let contentCount = contentTrList.length;

		for (let i = 0; i < pageRowCount; i++) {
			let leftTr = leftTrList[0].cloneNode(true);
			let contentTr = contentTrList[0].cloneNode(true);

			leftTable.childNodes[1].append(leftTr);
			contentTable.childNodes[1].append(contentTr);
		}
		for (let i = 0; i < leftCount   ; i++) leftTable.deleteRow(-1);
		for (let i = 0; i < contentCount; i++) contentTable.deleteRow(-1);
	}
	else if (type == this.code_vertical) {
		let pageRowCount = this.pageRowCount;
		let dataLength = this.data_view.length;

		if (grid.fixedRowIndex != -1) {
			dataLength = dataLength - (grid.fixedRowIndex + 1);
			if (dataLength <= this.pageIntRowCount) {
				grid.tbs_hideScroll(type);
			}
			else if (this.pageRowCount > this.pageIntRowCount) {
				if (dataLength >= pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;
					this.tbs_setScrollSize(type);
				} else {
					grid.tbs_hideScroll(type);
				}
			}
			else {
				if (dataLength > pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;
					this.tbs_setScrollSize(type);
				} else {
					grid.tbs_hideScroll(type);
				}
			}
		}
		else {
			if (dataLength <= this.pageIntRowCount) {
				grid.tbs_hideScroll(type);
			}
			else if (this.pageRowCount > this.pageIntRowCount) {
				if (dataLength >= pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					grid.tbs_setScrollSize(type);
				} else {
					grid.tbs_hideScroll(type);
				}
			}
			else {
				if (dataLength > pageRowCount) {
					yScroll.style.display = '';
					scrollBox.style.display = '';
					wrap.style.marginRight = this.scroll.margin;

					grid.tbs_setScrollSize(type);
				} else {
					grid.tbs_hideScroll(type);
				}
			}
		}
	}
}
/**
 * @function tbs_setScroll2
 *
 * @Description
 * @Param Type grid.code_horizontal, grid.code_vertical
 * @Param scrollName scroll, scroll2(horizontal, panel32), scroll6(vertical, panel60)
 */
TbsGrid.prototype.tbs_showScroll = function(type, scrollName) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (type == this.code_horizontal) {
		let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
		let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
		let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
		let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

		xScroll.style.display = '';
		scrollBox.style.display = '';
		wrap.style.marginBottom = this.scroll.margin;
		this.tbs_setScrollSize(type, scrollName);
	}
	else if (type == this.code_vertical) {

	}
}
/**
 * @function tbs_setHideScroll
 *
 * @Description
 * @Param Type grid.code_horizontal, grid.code_vertical
 */
TbsGrid.prototype.tbs_hideScroll = function(type) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (type == this.code_horizontal) {
		//console.log(`tbs_hideScroll ${type}`);
		let wrap = document.querySelector(selector + ' .tbs-grid-wrap');

		let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
		let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
		let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');

		xScroll.style.display = 'none';
		wrap.style.marginBottom = '0px';
		if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';

		document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').style.left = '0px';
		document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').style.left = '0px';
		document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table').style.left = '0px';
		document.querySelector(selector + ' .tbs-grid-panel40 .tbs-grid-table').style.left = '0px';
		document.querySelector(selector + ' .tbs-grid-panel50 .tbs-grid-table').style.left = '0px';
		document.querySelector(selector + ' .tbs-grid-panel60 .tbs-grid-table').style.left = '0px';
	}
	else if (type == this.code_vertical) {
		let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
		let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');
		let scrollBox = document.querySelector(selector + ' .tbs-grid-scroll-box');

		yScroll.style.display = 'none';
		if (xScroll.style.display == 'none' && yScroll.style.display == 'none') scrollBox.style.display = 'none';
	}
}
TbsGrid.prototype.tbs_setScrollSize = function(type) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (type == this.code_horizontal) {
		let barSize = grid.tbs_getScrollHorizontalBarSize('scroll');
		let hiddenSize = grid.tbs_getScrollHorizontalHiddenSize('scroll');
		let railSize = grid.tbs_getScrollHorizontalRailSize('scroll', barSize);

		this.scroll.xBarSize = barSize;
		this.scroll.xHiddenSize = hiddenSize;
		this.scroll.xRailSize = railSize;

		let xBar  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		xBar.style.width = grid.tbs_getScrollHorizontalBarWidth('scroll', barSize);
	}
	if (type == this.code_vertical) {
		let barSize  = grid.tbs_getScrollVerticalBarSize('scroll');
		let railSize = grid.tbs_getScrollVerticalRailSize('scroll', barSize);
		let moveCount= grid.tbs_getScrollVerticalMoveCount('scroll', railSize);

		this.scroll.yBarSize = barSize; //data
		this.scroll.yRailSize = railSize; //data
		this.scroll.yMoveCount = moveCount; //data	1px당 trCount

		let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
		yBar.style.height = barSize + 'px';
 	}
}
TbsGrid.prototype.tbs_setBarPosition = function (type, value) {
	// function : set xBar, yBar Position
	//
	// @type  : code_horizontal, this.code_vertical
	// @value : displayTopRowIndex
	//          moved size  - pixel size
	let selector = '#' + this.gridId;
	let grid = this;

	if (type == this.code_horizontal) {
		let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');

		let railSize = this.scroll.xRailSize;
		let hiddenSize = this.scroll.xHiddenSize;

		let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
		xBar.style.left = ((curLeft / hiddenSize) * railSize) + 'px';
	}
	if (type == this.code_vertical) {
		let displayTopRowIndex = (value == undefined) ? 0 : value;
		if (displayTopRowIndex == 0) document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar').style.top = '0px';
		else {
			let movedSize = (value == undefined) ? 0 : value;
			let styleTop = ((parseInt(Math.ceil(movedSize) / this.scroll.yMoveCount)));
			//console.log(`styleTop ${styleTop} movedSize ${movedSize}`);
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
		this.tbs_setBarPosition(this.code_vertical, displayTopRowIndex);
		this.tbs_displayPanel30(trTopIndex)
		//---------------------------------------------------------------
		return trTopIndex;
	}
	if (type == 'down') {
		let displayTopRowIndex = this.tbs_getFirstDisplayRowIndex();
		let trTopIndex = 0;
		if (rowIndex == undefined) trTopIndex = this.tbs_getFirstRowIndex() + 1;
		else trTopIndex = rowIndex;

		if (this.pageRowCount > this.pageIntRowCount) {
			if (trTopIndex > (this.data_view.length - this.pageRowCount + 1))	return false;
		}
		else {
			if (trTopIndex > (this.data_view.length - this.pageRowCount)) 	return false;
		}
		//-------------------------------------------------------------
		this.tbs_setBarPosition(this.code_vertical, displayTopRowIndex);
		this.tbs_displayPanel30(trTopIndex)
		//-------------------------------------------------------------
		return trTopIndex;
	}
	if (type == 'right') {
		let hiddenSize = this.scroll.xHiddenSize;
		let moveWidth = 15;
		let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
		let divHeaderMove  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
		let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
		let footer  = document.querySelector(selector + ' .tbs-grid-panel50');
		if (divHeaderMove.style.left == (-1 * hiddenSize) + 'px') return;

		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let railSize = this.scroll.xRailSize;

		let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
		if (divContentMove.getBoundingClientRect().width <=	divContent.getBoundingClientRect().width) return;

		let sLeft;
		if (curLeft + moveWidth >= hiddenSize) sLeft = (-1 * hiddenSize) + 'px';
		else sLeft = (divHeaderMove.style.left.replace('px', '') - moveWidth) + 'px';
		this.tbs_setContentPanelLeft(sLeft);
		this.tbs_setBarPosition(this.code_horizontal);
		this.tbs_displayPanel30(this.tbs_getFirstRowIndex());
	}
	if (type == 'left') {
		let moveWidth = 15;
		let divHeaderMove  = document.querySelector(selector + ' .tbs-grid-panel20  .tbs-grid-table');
		let divContentMove = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
		let footer  = document.querySelector(selector + ' .tbs-grid-panel50');
		if (divHeaderMove.style.left == '0px') return false;
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let railSize = this.scroll.xRailSize;
		let hiddenSize = this.scroll.xHiddenSize;
		let curLeft = Math.abs(parseInt(divHeaderMove.style.left.replace('px', '')));
		let sLeft;
		if (curLeft - moveWidth <= 0) sLeft = '0px';
		else sLeft = (-1 * curLeft + moveWidth) + 'px';

		this.tbs_setContentPanelLeft(sLeft);
		this.tbs_setBarPosition(this.code_horizontal);
		this.tbs_displayPanel30(this.tbs_getFirstRowIndex());
	}
}
TbsGrid.prototype.tbs_getContentPanelLeft = function (value) {
	let selector = '#' + this.gridId;
	let grid = this;

	let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
	value = parseInt(value, 10);

    let railSize = this.scroll.xRailSize;
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
TbsGrid.prototype.tbs_setColumnWidth = function (colIndex, value) {
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
	if (grid.options.filtering[grid.option_filterVisible]) colList7[colIndex].style.width = nWidth;
    this.tbs_setScroll(this.code_horizontal);
	this.tbs_setScroll(this.code_vertical);

	//if (grid.pageIntRowCount == grid.tbs_getRowCount())
	//	//hide scroll bar
	//	this.tbs_setScroll(this.code_vertical);
	//else if (grid.pageRowCount > grid.pageIntRowCount && grid.tbs_getRowCount() > grid.pageIntRowCount)
	//	//show scroll bar
	//	this.tbs_setScroll(this.code_vertical);
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
		if (grid.options.filtering[grid.option_filterVisible]) thList70[x].style.width = nWidth;
	}
    this.tbs_setScroll(this.code_horizontal);
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
//================================================================
//
// functions for scrollSize
//
//================================================================
TbsGrid.prototype.tbs_getScrollHorizontalBarSize = function(scrollName) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {

		return 1;
	}
	else {
		scrollName = 'scroll';
		let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
		let xWrap  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
		let barSize = parseInt((panel20.clientWidth / panel20.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth);
		if (barSize > xWrap.clientWidth) barSize = xWrap.clientWidth;
		else if (barSize < 35) barSize = 35;

		if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) barSize = xWrap.clientWidth;
		return barSize;
		// let barSize = parseInt((header.clientWidth / header.childNodes[0].childNodes[0].clientWidth) * xWrap.clientWidth);
		// if (barSize > xWrap.clientWidth) barSize = xWrap.clientWidth;
		// else if (barSize < 35) barSize = 35;
	}
}
TbsGrid.prototype.tbs_getScrollHorizontalHiddenSize = function(scrollName) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {

		return 1;
	}
	else {
		let panel20= document.querySelector(selector + ' .tbs-grid-panel20');
		let hiddenSize = Number(panel20.scrollWidth - panel20.clientWidth) + 16;	// add size( default 14px / add 2px)
		if (panel20.childNodes[0].getBoundingClientRect().width < panel20.getBoundingClientRect().width) hiddenSize = 0;
		return hiddenSize;
		//let hiddenSize = Number(header.scrollWidth - header.clientWidth) + 16;
		//if (header.childNodes[0].getBoundingClientRect().width < header.getBoundingClientRect().width) {
		//	barSize = xWrap.clientWidth;
		//	hiddenSize = 0;
		//}
	}
}
TbsGrid.prototype.tbs_getScrollHorizontalRailSize = function(scrollName, barSize) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {
		return 1;
	}
	else {
		let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
		return xWrap.clientWidth - barSize;
	}
}
TbsGrid.prototype.tbs_getScrollHorizontalBarWidth = function(scrollName, barSize) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {

		return 1;
	}
	else {
		let wrapRect = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap').getBoundingClientRect();
		let xBarRect  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar').getBoundingClientRect();
		let barWidth = barSize;
		if (xBarRect.right > wrapRect.right) barWidth = barSize - (xBarRect.right - wrapRect.right);
		return barWidth + 'px';

		// xBar.style.width = barSize + 'px';
		// let wrapRect = xWrap.getBoundingClientRect();
		// let xBarRect = xBar.getBoundingClientRect();
		// if (xBarRect.right > wrapRect.right) xBar.style.width = (barSize - (xBarRect.right - wrapRect.right)) + 'px';
	}
}

TbsGrid.prototype.tbs_getScrollVerticalBarSize = function(scrollName) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {

		return 1;
	}
	else {
		if (grid.fixedRowIndex != -1) {
			let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
			let rowCount = this.tbs_getRowCount() - (grid.fixedRowIndex + 1);
			let barSize = yWrap.clientHeight - (rowCount * 5.3);
			if (barSize < 50) barSize = 50;
			return barSize
		}
		else {
			let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
			let rowCount = this.tbs_getRowCount();
			let barSize = yWrap.clientHeight - (rowCount * 5.3);
			if (barSize < 50) barSize = 50;
			return barSize
		}
	}
}
TbsGrid.prototype.tbs_getScrollVerticalRailSize = function(scrollName, barSize) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll2') {
		return 1;
	}
	else {
		let yWrap = document.querySelector(selector + ' .tbs-grid-vertical-scroll-wrap');
		let railSize = yWrap.clientHeight - barSize;
		return railSize;
	}
}
TbsGrid.prototype.tbs_getScrollVerticalMoveCount = function(scrollName, railSize) {
	let selector = '#' + this.gridId;
	let grid = this;

	if (scrollName == 'scroll6') {

		return 1;
	}
	else {
		let moveCount = 0;
		let pageIntRowCount = this.pageIntRowCount;
		let pageRowCount = this.pageRowCount;
		if (grid.fixedRowIndex != -1) {
			let rowCount = this.tbs_getRowCount() - (this.fixedRowIndex + 1);
			if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
			else moveCount = Number((rowCount - pageRowCount) / railSize);  // 50 , 10 / 1000 px
		}
		else {
			let rowCount = this.tbs_getRowCount();
			if (pageRowCount > pageIntRowCount) moveCount = Number((rowCount - pageRowCount + 1) / railSize);
			else moveCount = Number((rowCount - pageRowCount) / railSize);
		}
		return moveCount;
	}
}


TbsGrid.prototype.tbs_setPanelSize_0815 = function() {
	// Necessary after create header
	let selector = '#' + this.gridId;
	let grid = this;

	let rectGrid= document.querySelector(selector).getBoundingClientRect();
	let main    = document.querySelector(selector + ' .tbs-grid-main');

	let panel10 = document.querySelector(selector + ' .tbs-grid-panel10'); // toolbar
	let panel80 = document.querySelector(selector + ' .tbs-grid-panel80'); // group

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

	let mainHeight = rectGrid.height;
	if (grid.toolbar_visible == true) mainHeight = mainHeight - 25;
	if (grid.options.grouping[grid.option_groupVisible] == true) mainHeight = mainHeight - 33;
	main.style.height = `${mainHeight}px`;

	// header : group21, group22 group20
	let rectTable21= document.querySelector(selector + ' .tbs-grid-panel21	.tbs-grid-table').getBoundingClientRect();
	let rectTable22= document.querySelector(selector + ' .tbs-grid-panel22 .tbs-grid-table').getBoundingClientRect();
	let rectTable20= document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table').getBoundingClientRect();

	let height = parseInt(rectTable20.height);
	if (this.fixedRowIndex != -1 && this.fixedColumnIndex != -1) {
		group21.style.left   = '0px';
		group21.style.top    = '0px';
		group21.style.bottom = height + 'px';
		group21.style.width  = parseInt(rectTable21.width) + parseInt(rectTable22.width) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(rectTable22.width)  + 'px';
		group20.style.height = height + 'px';

		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
	}
	else if (this.fixedColumnIndex != -1) {
		group21.style.left = '0px';
		group21.style.top  = '0px';
		group21.style.bottom = height + 'px';

		group21.style.width  = parseInt(rectTable21.width) + parseInt(rectTable22.width) + 'px';
		group21.style.height = height + 'px';

		group20.style.left   = parseInt(rectTable21.width) + parseInt(rectTable22.width)  + 'px';
		group20.style.height = height + 'px';
		panel22.style.left   = parseInt(rectTable21.width)  + 'px';
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

			panel52.style.left   = panel22.style.left;
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
		}
	}

	this.tbs_setPageRowCount();
}