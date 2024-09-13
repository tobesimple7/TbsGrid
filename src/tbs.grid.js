﻿import TbsGridBase        from './tbs.grid.class.base';
import TbsGridCell        from './tbs.grid.class.cell';
import TbsGridTemplate    from './tbs.grid.class.cell.template';
import TbsGridColumn      from './tbs.grid.class.column';
import TbsGridCombo       from './tbs.grid.class.combo';
import TbsGridControl     from './tbs.grid.class.control';
import TbsGridDate        from './tbs.grid.class.date';
import TbsGridFilter      from './tbs.grid.class.filter';
import TbsGridFilterlaye  from './tbs.grid.class.filter.layer';
import TbsGridFooter      from './tbs.grid.class.footer';
import TbsGridGroup       from './tbs.grid.class.group';
import TbsGridHeader      from './tbs.grid.class.header';
import TbsGridPage        from './tbs.grid.class.page';
import TbsGridPanelbase   from './tbs.grid.class.panel.base';
import TbsGridPanel10     from './tbs.grid.class.panel10';
import TbsGridPanel20     from './tbs.grid.class.panel20';
import TbsGridPanel30     from './tbs.grid.class.panel30';
import TbsGridPanel40     from './tbs.grid.class.panel40';
import TbsGridPanel50     from './tbs.grid.class.panel50';
import TbsGridPanel70     from './tbs.grid.class.panel70';
import TbsGridPanel80     from './tbs.grid.class.panel80';
import TbsGridPanel90     from './tbs.grid.class.panel90';
import TbsGridRange       from './tbs.grid.class.range';
import TbsGridRangePanel  from './tbs.grid.class.rangePanel';
import TbsGridRender      from './tbs.grid.class.render';
import TbsGridScrollbase  from './tbs.grid.class.scroll.base';
import TbsGridScroll      from './tbs.grid.class.scroll';
import TbsGridSort        from './tbs.grid.class.sort';
import TbsGridTop         from './tbs.grid.class.top';
import TbsGridTree        from './tbs.grid.class.tree';
import TbsGridType        from './tbs.grid.class.type';
import tbsGridConfigs     from './tbs.grid.configs';

class TbsGrid extends TbsGridBase {

	/**
	 * Select Line Functions
	 *
	 */

	tbs_getFirstSelectedTableCell(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let startCell;
		let startRowIndex = grid._startRowIndex;
		if (grid.fixedRowIndex != -1) {
			let panel;
			if (startRowIndex <= grid.fixedRowIndex) panel = 'panel61';
			else {
				panel = 'panel31';
				let rowIndex1 = grid.tbs_getFirstRowIndex();
				let rowIndex2 = grid.tbs_getLastRowIndex();
				if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;
			}
			let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
			let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

			Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
				let tableRow31 = tableRows31[i];
				let tableRow = tableRows[i];

				let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
				if (rowIndex == startRowIndex) {
					for (let x = 0; x < this.columns.length; x++) {
						let tableCell = tableRow.childNodes[x];
						if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
							startCell = tableCell;
							break Loop1;
						}
					}
				}
			}
		}
		else {
			let rowIndex1 = grid.tbs_getFirstRowIndex();
			let rowIndex2 = grid.tbs_getLastRowIndex();

			if (startRowIndex < rowIndex1) startRowIndex = rowIndex1;

			let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
			let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

			Loop1: for (let i = 0, len = tableRows31.length; i < len; i++) {
				let tableRow31 = tableRows31[i];
				let tableRow = tableRows[i];

				let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
				if (rowIndex == startRowIndex) {
					for (let x = 0; x < this.columns.length; x++) {
						let tableCell = tableRow.childNodes[x];
						if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
							startCell = tableCell;
							break Loop1;
						}
					}
				}
			}
		}
		return startCell;
	}
	tbs_getLastSelectedTableCell(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let lastCell;
		let lastRowIndex = this._lastRowIndex;

		if (grid.fixedRowIndex != -1) {
			let panel;
			if (lastRowIndex <= grid.fixedRowIndex) panel = 'panel61';
			else {
				panel = 'panel31';
				let rowIndex1 = grid.tbs_getFirstRowIndex();
				let rowIndex2 = grid.tbs_getLastRowIndex();
				if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;
			}

			let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-' + panel     + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
			let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');

			for (let i = tableRows31.length - 1; i >= 0; i--) {
				if (lastCell != undefined) break;
				let tableRow31 = tableRows31[i];
				let tableRow30 = tableRows[i];

				let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
				if (rowIndex == lastRowIndex) {
					for (let x = this.columns.length - 1; x >= 0; x--) {
						let tableCell = tableRow30.childNodes[x];
						if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
							lastCell = tableCell;
							break;
						}
					}
				}
			}
			return lastCell;
		}
		else {
			let rowIndex1 = grid.tbs_getFirstRowIndex();
			let rowIndex2 = grid.tbs_getLastRowIndex();

			if (lastRowIndex  > rowIndex2) lastRowIndex = rowIndex2;

			let tableRows31= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display: none"])');
			let tableRows  = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + '  .tbs-grid-table tbody tr:not([style*="display: none"])');

			for (let i = tableRows31.length - 1; i >= 0; i--) {
				if (lastCell != undefined) break;
				let tableRow31 = tableRows31[i];
				let tableRow30 = tableRows[i];

				let rowIndex = tableRow31.childNodes[0].dataset.rowIndex;
				if (rowIndex == lastRowIndex) {
					for (let x = this.columns.length - 1; x >= 0; x--) {
						let tableCell = tableRow30.childNodes[x];
						if (tableCell.classList.contains('tbs-grid-cell-start') || tableCell.classList.contains('tbs-grid-cell-select')) {
							lastCell = tableCell;
							break;
						}
					}
				}
			}
			return lastCell;
		}
	}
	tbs_clearSelectedLine() {
		this.topLineDiv.style    = 'width :0px;top:0px;left:0px;';
		this.leftLineDiv.style   = 'height:0px;top:0px;left:0px;';
		this.bottomLineDiv.style = 'width :0px;top:0px;left:0px;';
		this.rightLineDiv.style  = 'height:0px;top:0px;left:0px;';
	}
	tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight) {

		if (Number(rectTop) > Number(rectBottom) || Number(rectLeft) > Number(rectRight)) this.tbs_clearSelectedLine();
		else {
			this.topLineDiv.style    = 'width:'  + lineWidth        + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
			this.leftLineDiv.style   = 'height:' + lineHeight       + 'px;top:' + rectTop     + 'px;left:' + rectLeft  + 'px;';
			this.rightLineDiv.style  = 'height:' + (lineHeight + 1) + 'px;top:' + rectTop     + 'px;left:' + rectRight + 'px;';
			this.bottomLineDiv.style = 'width:'  + lineWidth        + 'px;top:' + rectBottom  + 'px;left:' + rectLeft  + 'px;';
		}
	}
	tbs_displaySelectedLine() {
		let selector = '#' + this.gridId;
		let grid = this;

		if (grid.data_view.length == 0) {
			grid.classRange.removeRange(0, -1);
			return;
		}
		if (grid.fixedRowIndex != -1) {
			let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
			if (grid.tbs_getRowCount() == 0) return;

			let fixedColumnIndex = this.fixedColumnIndex;

			/* Get startCell, lastCell */
			let startCell, lastCell;
			if (grid._startRowIndex <= grid.fixedRowIndex) startCell = grid.tbs_getFirstSelectedTableCell('panel60');
			else startCell = grid.tbs_getFirstSelectedTableCell('panel30');

			if (grid._lastRowIndex <= grid.fixedRowIndex) lastCell = grid.tbs_getLastSelectedTableCell('panel60');
			else lastCell = grid.tbs_getLastSelectedTableCell('panel30');

			if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }
			//console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);

			let startCellIndex = grid._startCellIndex;
			let lastCellIndex  = grid._lastCellIndex;

			let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
			let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
			let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
			let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

			let startRect= startCell.getBoundingClientRect();
			let lastRect = lastCell.getBoundingClientRect();

			let beforeLeft   = rectTable31.left;

			let rectTop    = startRect.top - rectMain.top;
			let rectBottom = lastRect.top  - rectMain.top + lastRect.height;  // Check point

			let rectLeft   = startRect.left - beforeLeft;
			let rectRight  = lastRect.left  - beforeLeft + lastRect.width;

			let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
			let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
			let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

			// case outside line
			if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
			if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
			if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

			let lineHeight= rectBottom - rectTop;
			let lineWidth = rectRight - rectLeft;
			grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
		}
		else if (grid.fixedColumnIndex != -1) {
			let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
			if (grid.tbs_getRowCount() == 0) return;

			let fixedColumnIndex = this.fixedColumnIndex;

			/* Get startCell, lastCell */
			let startCell, lastCell;
			//console.log(`grid._startCellIndex : ${grid._startCellIndex} / grid._lastCellIndex : ${ grid.fixedColumnIndex}`);
			if (grid._startCellIndex <= grid.fixedColumnIndex) startCell = grid.tbs_getFirstSelectedTableCell('panel32');
			else startCell = grid.tbs_getFirstSelectedTableCell('panel30');

			if (grid._lastCellIndex <= grid.fixedColumnIndex) lastCell = grid.tbs_getLastSelectedTableCell('panel32');
			else lastCell = grid.tbs_getLastSelectedTableCell('panel30');
			if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }

			//console.log(`startCell.cellIndex : ${startCell.cellIndex} / lastCell.cellIndex : ${lastCell.cellIndex}`);
			let startCellIndex = startCell.cellIndex;
			let lastCellIndex  = lastCell.cellIndex;

			let rectMain   = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
			let rectTable31= document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
			let rectWrap   = document.querySelector(selector + ' .tbs-grid-wrap').getBoundingClientRect();
			let rectPanel30= document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

			let startRect= startCell.getBoundingClientRect();
			let lastRect = lastCell.getBoundingClientRect();

			let beforeLeft = rectTable31.left;

			let rectTop   = startRect.top  - rectMain.top;
			let rectBottom= lastRect.top  - rectMain.top + lastRect.height;

			let rectLeft  = startRect.left - beforeLeft;
			let rectRight = lastRect.left  - beforeLeft + lastRect.width;

			let rectPanelLeft  = (startCellIndex <= fixedColumnIndex) ?  rectLeft : rectPanel30.left  - rectTable31.left;
			let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
			let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

			// case outside line
			if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
			if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
			if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

			let lineHeight= rectBottom - rectTop;
			let lineWidth = rectRight - rectLeft;
			grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
		}
		else {
			let tableRows30= document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
			if (grid.tbs_getRowCount() == 0) return;

			let startCell = grid.tbs_getFirstSelectedTableCell('panel30');
			let lastCell = grid.tbs_getLastSelectedTableCell('panel30');

			if (startCell == undefined || lastCell == undefined) { grid.tbs_clearSelectedLine(); return; }

			let rectMain = document.querySelector(selector + ' .tbs-grid-main').getBoundingClientRect();
			let rectTable31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').getBoundingClientRect();
			let rectPanel30 = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();

			let startRect = startCell.getBoundingClientRect();
			let lastRect = lastCell.getBoundingClientRect();

			let rectTop   = startRect.top  - rectMain.top;
			let rectLeft  = startRect.left - rectTable31.left;
			let rectBottom= lastRect.top  - rectMain.top     + lastRect.height;
			let rectRight = lastRect.left - rectTable31.left + lastRect.width;

			let rectPanelLeft  = rectPanel30.left  - rectTable31.left;
			let rectPanelBottom= rectPanel30.top   - rectMain.top      + rectPanel30.height;
			let rectPanelRight = rectPanel30.left  - rectTable31.left  + rectPanel30.width;

			// case outside line
			if (rectLeft   <= rectPanelLeft)   rectLeft   = rectPanelLeft;
			if (rectBottom >= rectPanelBottom) rectBottom = rectPanelBottom - 2;
			if (rectRight  >= rectPanelRight)  rectRight  = rectPanelRight;

			let lineHeight= rectBottom - rectTop;
			let lineWidth = rectRight - rectLeft;

			grid.tbs_setSelectedLine(lineWidth, lineHeight, rectTop, rectBottom, rectLeft, rectRight);
		}
	}
	tbs_displayOneSelection(startRowIndex, startCellIndex) {
		let selector = '#' + this.gridId;
		let grid = this;

		let column = this.columns;

		this.startRowIndex  = startRowIndex;
		this.lastRowIndex   = startRowIndex;

		this.startCellIndex = startCellIndex;
		this.lastCellIndex  = startCellIndex;

		this._startRowIndex = startRowIndex;
		this._lastRowIndex  = startRowIndex;

		this._startCellIndex= startCellIndex;
		this._lastCellIndex = startCellIndex;

		this.classRange.setRangeValue(startRowIndex, startRowIndex, startCellIndex, startCellIndex);


		let count = this.data_view.length;
		let topRowIndex = this.tbs_getFirstRowIndex();
		//============================================================= table display
		let trLeftList    	= document.querySelectorAll(selector + ' .tbs-grid-panel31  .tbs-grid-table tbody tr');
		let trFixLeftList   = document.querySelectorAll(selector + ' .tbs-grid-panel61   .tbs-grid-table tbody tr');
		let trContentList 	= document.querySelectorAll(selector + ' .tbs-grid-panel30   .tbs-grid-table tbody tr');
		let trFixBottomtList= document.querySelectorAll(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody tr');

		count = topRowIndex + this.pageRowCount;
		//=============================================================
		let contentRect = document.querySelector(selector + ' .tbs-grid-panel30').getBoundingClientRect();
		let contentTableRect = document.querySelector(selector + ' .tbs-grid-panel30 > table').getBoundingClientRect();
		let contentTableLeft = parseInt(document.querySelector(selector + ' .tbs-grid-panel30 > table').style.left, 10);

		let startColumnIndex = 0;
		let lastColumnIndex = column.length - 1;

		let accWidth = 0;
		for (let i = 0, len = column.length; i < len; i++) {
			accWidth += parseInt(column[i].width);
			if (accWidth + contentTableLeft > 0) { startColumnIndex = i; break; }
		}
		accWidth = contentTableRect.width;
		for (let i = column.length - 1; i >= 0; i--) {
			accWidth -= parseInt(column[i].width);
			if (accWidth + contentTableLeft < contentRect.width) { lastColumnIndex = i; break; }
		}
		//============================================================= left, content, fixBottom
		let viewCount = this.data_view.length;
		let i = 0;
		for (let ri = topRowIndex; ri < count; ri++) {
			if (ri > viewCount - 1) break;
			let trLeft = trLeftList[i];
			let trContent = trContentList[i];
			let trFixBottom = trFixBottomtList[i]
			let row = this.data_view[ri];
			//============================================================= left
			leftTd = trLeft.childNodes[0];
			let selectedValue = this.tbs_isSelectedCell31(ri, 0);
			if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
			//============================================================= content
			for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
				let td = trContent.childNodes[x];
				let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
				if (selectedValue == 1) {
					if (this.startRowIndex == ri && this.startCellIndex == x) {
						td.classList.add('tbs-grid-cell-start');
					}
				}
			}
			//============================================================= fixBottom
			if (this.fixedColumnIndex != -1) {
				for (let x = 0; x <= this.fixedColumnIndex; x++) {
					let td = trFixBottom.childNodes[x];
					let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
					if (selectedValue == 1) {
						if (this.startRowIndex == ri && this.startCellIndex == x) {
							td.classList.add('tbs-grid-cell-start');
						}
					}
				}
			}
			i += 1;
		}
		//=============================================================
		if (this.fixedRowIndex != -1){
			let i = 0;
			for (let ri = 0; ri <= this.fixedRowIndex; ri++) {
				if (ri > viewCount - 1) break;
				let trLeft      = trFixLeftList[i];
				let trContent   = trFixRightList[i];
				let row         = this.data_view[ri];
				//============================================================= left
				leftTd = trLeft.childNodes[0];
				leftTd.dataset.rowIndex = ri;
				let selectedValue = this.tbs_isSelectedCell31(ri, 0);
				if (selectedValue == 1) leftTd.classList.add('tbs-grid-cell-select');
				//============================================================= content
				for (let x = startColumnIndex; x <= lastColumnIndex; x++) {
					let td = trContent.childNodes[x];
					let selectedValue = this.tbs_isSelectedCell30(ri, x); //new
					if (selectedValue == 1) {
						if (this.startRowIndex == ri && this.startCellIndex == x) {
							td.classList.add('tbs-grid-cell-start');
						}
					}
				}
			}
			i += 1;
		}
		this.tbs_displaySelectedLine();
	}

	/**
	 * Input Functions
	 */

	event_input = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input = document.querySelector(selector + ' .tbs-grid-input');
		let colType = input.dataset.type;

		const keydownEvent = function (e) {
			//e.preventDefault();
			//e.stopPropagation();
			//e.stopImmediatePropagation();
			let input = document.querySelector(selector + ' .tbs-grid-input');
			let mode = input.dataset.mode;
			if (mode == undefined) mode = '';
			if (e.ctrlKey) {
				if      (e.keyCode == 37 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('up');   grid.input_focus();}   //left arrow //type : first, last, up, down
				else if (e.keyCode == 39 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('down'); grid.input_focus();}   //right arrow
				else if (e.keyCode == 38 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('first');grid.input_focus();}   //up arrow
				else if (e.keyCode == 40 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_addRow('last'); grid.input_focus();}   //down arrow
				else if (e.keyCode == 46 && mode == '') { if(!(grid.options[grid.option_addRow])) return; grid.tbs_editEnd(); grid.tbs_removeRow(); grid.input_focus();}   //delete key
			}
			else {
				if      (e.keyCode == 37  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('left' ); grid.input_focus();}
				else if (e.keyCode == 39  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();}
				else if (e.keyCode == 38  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
				else if (e.keyCode == 40  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
				else if (e.keyCode == 13  && (mode == ''))  { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter
				else if (e.keyCode == 9   && (mode == ''))  { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab

				else if (e.keyCode == 37  && (mode == 'key')) {}
				else if (e.keyCode == 39  && (mode == 'key')) {}
				else if (e.keyCode == 38  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
				else if (e.keyCode == 40  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
				else if (e.keyCode == 13  && (mode == 'key')) { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
				else if (e.keyCode == 9   && (mode == 'key')) { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

				else if (e.keyCode == 37  && (mode == 'mouse')) {}
				else if (e.keyCode == 39  && (mode == 'mouse')) {}
				else if (e.keyCode == 38  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('up'   ); grid.input_focus();}
				else if (e.keyCode == 40  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('down' ); grid.input_focus();}
				else if (e.keyCode == 13  && (mode == 'mouse')) { grid.tbs_editEnd(); grid.tbs_moveCell('right'); grid.input_focus();} //enter key
				else if (e.keyCode == 9   && (mode == 'mouse')) { grid.tbs_editEnd(); e.preventDefault(); grid.tbs_moveCell('right'); grid.input_focus();} //tab key

				else if (e.keyCode >= 0   && e.keyCode <= 7)  {} //function ctrlkey shifkey tabkey(9)등등
				else if (e.keyCode >= 9   && e.keyCode <= 32) {}
				else if (e.keyCode == 8)    {} //backspace key
				else if (e.keyCode == 127)  {}
				else if (e.ctrlKey || e.keyCode == 9 || e.keyCode == 46) {}
				else if (e.keyCode >= 112 && e.keyCode <= 123) {}
				else {
					//console.log('input');
					let cellIndex = grid.startCellIndex;
					let column = grid.classColumn.getColumnByIndex(cellIndex);
					if (grid.notNull(column[grid.column_editable]) && column[grid.column_editable]) {
						if (grid.notNull(grid.user_edit)) { // state
							//console.log(`panelInput.style.left : ${panelInput.style.left}`);
							if (panelInput.style.left == '30000px') {
								grid.tbs_editStart(e, 'key');
							}
							else {
								grid.tbs_editing(e, 'key');
							}
						}
						else {
							grid.input_show(e, 'key');
						}
					}
				}
			}
		};
		const keyupEvent = function (e) {
			//e.preventDefault();
			//e.stopPropagation();
			//e.stopImmediatePropagation();
			let input = document.querySelector(selector + ' .tbs-grid-input');
			let colType = input.dataset.type;
		};
		const clickEvent = function(e) {
			let column = grid.columns;
			let input = document.querySelector(selector + ' .tbs-grid-input');
			let colType = grid.columns[grid.startCellIndex][grid.column_type];
		}
		const blurEvent = function(e) {

			//console.dir(e);
			//console.log(`SCROLL : blur event`);

			let input = document.querySelector(selector + ' .tbs-grid-input');
			let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
			let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

			let mode = input.dataset.mode;
			let rowIndex  = input.dataset.rowIndex;
			let cellIndex = input.dataset.cellIndex;

			let column = grid.columns[cellIndex];

			if (rowIndex == undefined || cellIndex == undefined) {
				grid.input_hide();
				return
			}
			/* user blur event stop */
			if (input.dataset.mode == undefined || input.dataset.mode == '') { e.stopImmediatePropagation(); }

			if (rowIndex == -1 || cellIndex == -1) return;

			if (grid.notNull(grid.user_edit)) {
				grid.tbs_editEnd(e, 'key');
			}
			else {
				if (isNaN(cellIndex)) return;
				let s = input.value;
				if (column[grid.column_type] == grid.code_combo) s = input_code.value;
				else if (column[grid.column_type] == 'number' && grid.tbs_trim(s) == grid.options[grid.option_zeroChar]) s = '0';
				else if (column[grid.column_type] == 'currency' && grid.tbs_trim(s) == grid.options[grid.option_zeroChar]) s = '0';
				//console.log(s);
				grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_getFormatValue(column, s));
				grid.input_hide();
			}
			grid.tbs_apply();
		}
		const wheelEvent = function(e) {}
		const copyEvent = function(e) {
			let ta = document.createElement('textarea');
			let s = '';
			if (grid.classRange40.data_select_panel30.length > 0) {
				let startRowIndex  = 0;
				let startCellIndex = grid.classRange40._startCellIndex;
				let lastRowIndex  = 0;
				let lastCellIndex = grid.classRange40._lastCellIndex;

				for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
					for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
						let val = grid.classTop.getTopValueByIndex(rowIndex, colIndex);
						if (grid.null(val)) val = '';
						s += val;
						if (colIndex < lastCellIndex) s += '\t';
					}
					if (rowIndex < lastRowIndex) s += '\r\n'
				}
				ta.textContent = s;
				document.body.appendChild(ta);
				ta.select();

				document.execCommand('copy');
				document.body.removeChild(ta);
			}
			else if (grid.classRange50.data_select_panel30.length > 0) {
				let startRowIndex  = 0;
				let startCellIndex = grid.classRange50._startCellIndex;
				let lastRowIndex  = 0;
				let lastCellIndex = grid.classRange50._lastCellIndex;

				for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
					for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
						let val = grid.classFooter.getFooterValueByIndex(rowIndex, colIndex);
						if (grid.null(val)) val = '';
						s += val;
						if (colIndex < lastCellIndex) s += '\t';
					}
					if (rowIndex < lastRowIndex) s += '\r\n'
				}
				ta.textContent = s;
				document.body.appendChild(ta);
				ta.select();

				document.execCommand('copy');
				document.body.removeChild(ta);
			}
			else {
				let startRowIndex  = grid._startRowIndex;
				let startCellIndex = grid._startCellIndex;
				let lastRowIndex  = grid._lastRowIndex;
				let lastCellIndex = grid._lastCellIndex;

				for (let rowIndex = startRowIndex; rowIndex <= lastRowIndex; rowIndex++) {
					for (let colIndex = startCellIndex; colIndex <= lastCellIndex; colIndex++) {
						let val = grid.tbs_getValueByIndex(rowIndex, colIndex);
						if (grid.null(val)) val = '';
						s += val;
						if (colIndex < lastCellIndex) s += '\t';
					}
					if (rowIndex < lastRowIndex) s += '\r\n'
				}
				ta.textContent = s;
				document.body.appendChild(ta);
				ta.select();

				document.execCommand('copy');
				document.body.removeChild(ta);
			}
		}
		const pasteEvent = function(e){
			let data = e.clipboardData.getData('text/plain')
			let startRowIndex = grid.startRowIndex;
			let startCellIndex = grid.startCellIndex;
			//-------------------------------------------------------------
			let td = grid.classColumn.getSelectedTableCell();
			if (td == 'undefined' || td == null) return;
			//-------------------------------------------------------------
			let rowArray = data.split('\r\n');
			let i = 0;
			for (let rowIndex = startRowIndex; rowIndex < startRowIndex + rowArray.length; rowIndex++) {
				if (rowIndex >= grid.data_view.length) break;
				let colArray = rowArray[i].split('\t');
				let j = 0;

				for (let colIndex = startCellIndex; colIndex < startCellIndex + colArray.length; colIndex++) {
					//if (grid.columns[colIndex].column_readonly == true) continue;
					if (grid.columns[colIndex][grid.column_editable] == false) continue;
					grid.tbs_setValueByIndex(rowIndex, colIndex, colArray[j]);
					j += 1;
				}
				i += 1;
			}
			grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
		}
		const cutEvent = function(e){}

		input.addEventListener('keydown', keydownEvent, true);
		input.addEventListener('keyup', keyupEvent, true);
		input.addEventListener('click', clickEvent, true);
		input.addEventListener('blur', blurEvent, true);
		input.addEventListener('wheel', wheelEvent, true);
		input.addEventListener('copy', copyEvent, true);
		input.addEventListener('paste', pasteEvent, true);
		input.addEventListener('cut', cutEvent, true);
	}
	event_input_icon = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
		let colType = input_icon.dataset.type;
		const mousedownEvent = function(e) {
			//console.dir(e)
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();

			let input = document.querySelector(selector + ' .tbs-grid-input');
			let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
			let input_panel = document.querySelector(selector + ' .tbs-grid-input-panel');
			let column = grid.columns[grid.startCellIndex];
			let colType = grid.columns[grid.startCellIndex][grid.column_type];

			//tbs-grid-input-panel : calendar, combo
			if (colType == 'date') {
				grid.tbsGridDate = new TbsGridDate(grid, column, input);
				// input_panel.style.width = '250px';
				// input_panel.style.height = '146px';
			}
			else if (colType == grid.code_combo) {
				grid.tbsGridCombo = new TbsGridCombo(grid, column, input, input_code);
				// input_panel.style.width = '200px';
				// input_panel.style.height = '146px';
			}
		}
		input_icon.addEventListener('mousedown', mousedownEvent);
	}
	input_show = function(e, mode) { //type : header, content, left, top
		let selector = '#' + this.gridId;
		let grid = this;

		let lineWeight = 3;
		let rowIndex  = grid.startRowIndex;
		let cellIndex = grid.startCellIndex;

		let columns = grid.columns;
		let column = columns[cellIndex];
		let colType  = column[grid.column_type];

		let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input = document.querySelector(selector + ' .tbs-grid-input');
		let input_code = document.querySelector(selector + ' .tbs-grid-input-code');
		let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');

		let panelMain =  document.querySelector(selector + ' .tbs-grid-main');
		let td = document.querySelector(selector + ' .tbs-grid-group30 .tbs-grid-cell-start');
		if (td == null) return;

		let value  = this.tbs_getValue(rowIndex, column[grid.column_name]);
		let result = this.tbs_getFormat(column, value); //result.value, result.text

		if (column[grid.column_editable] == false) return;
		//if (columns[cellIndex].column_autoWidth == true) return;
		//if (grid.data_view[rowIndex].mode != 'I') return;

		grid.tbs_moveCellLine(td, rowIndex, cellIndex);

		let left = td.getBoundingClientRect().left;
		let top  = td.getBoundingClientRect().top;

		let leftMain = panelMain.getBoundingClientRect().left;
		let topMain = panelMain.getBoundingClientRect().top;

		if (mode == 'mouse') {
			if (colType == 'number' && grid.tbs_trim(result.text) == grid.options[grid.option_zeroChar]) input.value = '0';
			else input.value = result.text;
			input_code.value = result.value;
		}

		panelInput.style.top  = (top - topMain + lineWeight) + 'px';
		panelInput.style.left = (left - leftMain + lineWeight) + 'px';
		panelInput.style.height = (grid.rowHeight - lineWeight) + 'px';
		input.dataset.mode = mode;
		input.dataset.type = colType;
		input.dataset.rowIndex = grid.startRowIndex;
		input.dataset.cellIndex = grid.startCellIndex;
		input.dataset.click = '';

		if (colType == 'date') {
			let width = parseInt(column[[grid.column_width]]);
			panelInput.style.width = (width - 15 - 3) + 'px';

			input_icon.style.display = '';
			input_icon.style.top  = top  + 'px';
			input_icon.style.left = `${left + width - 15}px`;
			input_icon.dataset.type = colType;

			input_icon.src = grid.getConfigOption('imageRoot') + 'calendar.png';
		}
		else if (colType == grid.code_combo) {
			let width = parseInt(column[[grid.column_width]]);
			panelInput.style.width = (width - 15 - 3) + 'px';

			input_icon.style.display = '';
			input_icon.style.top  = top  + 'px';
			input_icon.style.left = `${left + width - 15}px`;
			input_icon.dataset.type = colType;

			input_icon.src = grid.getConfigOption('imageRoot') + 'down-arrow.png';
		}
		else {
			input_icon.style.diplay = 'none';
			input.style.backgroundRepeat = '';
			input.style.backgroundImage = '';
			input.style.backgroundPosition = '';
			input.style.backgroundSize = '';
			panelInput.style.width = (parseInt(column[[grid.column_width]]) - lineWeight) + 'px';
		}
		if (mode == 'mouse') input.select();
	}
	input_hide = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let panelInput = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input      = document.querySelector(selector + ' .tbs-grid-input');
		let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

		// date, combo layer
		let input_icon = document.querySelector(selector + ' .tbs-grid-panel-input-icon');
		let input_panel= document.querySelector(selector + ' .tbs-grid-input-panel');

		panelInput.style.left = '30000px';
		panelInput.style.width = '0px';
		input.value = '';
		input_code.value = '';

		input.dataset.rowIndex = -1;
		input.dataset.cellIndex = -1;
		input.dataset.mode = '';
		input.dataset.type = '';

		input_icon.style.display = 'none';
		input_icon.dataset.rowIndex = -1;
		input_icon.dataset.cellIndex = -1;
		input_icon.dataset.mode = '';
		input_icon.dataset.type = '';

		// date, combo layer
		input_panel.innerHTML = '';
		input_panel.style.width = '0px';
		input_panel.style.left = '30000px';
		input_panel.dataset.rowIndex = -1;
		input_panel.dataset.cellIndex = -1;
		input_panel.dataset.mode = '';
		input_panel.dataset.type = '';


		if (this.tbsGridDate ) { this.tbsGridDate.destroy();  this.tbsGridDate = null; }
		if (this.tbsGridCombo) { this.tbsGridCombo.tbs_destroy(); this.tbsGridCombo = null; }
	}
	Tnput_focus = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		if (this.null(this.mobile)) {
			document.querySelector(selector + ' .tbs-grid-input').focus();
		}
	}
	tbs_editStart = function(e, mode) {
		let selector = '#' + this.gridId;
		let grid = this;

		let state = 0;
		let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input      = document.querySelector(selector + ' .tbs-grid-input');
		let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

		let result = true;
		let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
		let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

		let column = grid.classColumn.getColumnByIndex(cellIndex);
		let columnName = grid.classColumn.getColumnName(cellIndex);
		let value = grid.tbs_getValue(rowIndex, columnName);
		let text  = grid.tbs_getText(rowIndex, columnName);

		let eventData = {};
		let eventRow = grid.tbs_getRow(rowIndex);
		eventRow.rowIndex    = rowIndex;
		eventRow.columnIndex = cellIndex;
		eventRow.columnName  = columnName;
		eventRow.value       = value;
		eventRow.text        = text;
		eventRow.state       = state;
		eventRow.newValue    = input.value;
		eventRow.data        = eventRow;
		if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
			let result = true;
			result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
			if (grid.null(result) || result == true) {
				grid.input_show(e, mode);
				//console.log(0);
			}
			else {
				//grid.input_hide(); grid.tbs_apply(); // not certain
				document.querySelector(selector + ' .tbs-grid-input').blur(); // blur is certain
			}
		}
	}
	tbs_editing = function(e, mode) {
		let selector = '#' + this.gridId;
		let grid = this;

		let state = 1;
		let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input      = document.querySelector(selector + ' .tbs-grid-input');
		let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

		if (input.dataset.cellIndex == -1) { grid.input_hide(); return; }

		let result = true;
		let rowIndex  = (state == 0) ? grid.startRowIndex  : input.dataset.rowIndex;
		let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

		let column = grid.classColumn.getColumnByIndex(cellIndex);
		let columnName = grid.classColumn.getColumnName(cellIndex);
		let value = grid.tbs_getValue(rowIndex, columnName);
		let text  = grid.tbs_getText(rowIndex, columnName);

		let eventData = {};
		let eventRow = grid.tbs_getRow(rowIndex);
		eventRow.rowIndex    = rowIndex;
		eventRow.columnIndex = cellIndex;
		eventRow.columnName  = columnName;
		eventRow.value       = value;
		eventRow.text        = text;
		eventRow.state       = state;
		eventRow.newValue    = input.value;
		eventRow.data        = eventRow;
		if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
			let result = true;
			if (state == 1 && panelInput.style.left != '30000px') {
				result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
				if (grid.null(result) || result == true) {

				}
				else {
					grid.input_hide();
					grid.tbs_apply();
				}
			}
		}
	}
	tbs_editEnd = function(e, mode) {
		let selector = '#' + this.gridId;
		let grid = this;

		let state = 2;
		let panelInput  = document.querySelector(selector + ' .tbs-grid-panel-input');
		let input      = document.querySelector(selector + ' .tbs-grid-input');
		let input_code = document.querySelector(selector + ' .tbs-grid-input-code');

		if (grid.null(input.dataset.cellIndex) || input.dataset.cellIndex == -1) {
			grid.input_hide();
		}
		else {
			let result = true;
			let rowIndex  = (state == 0) ? grid.startRowIndex : input.dataset.rowIndex;
			let cellIndex = (state == 0) ? grid.startCellIndex : input.dataset.cellIndex;

			let column = grid.classColumn.getColumnByIndex(cellIndex);
			let columnName = grid.classColumn.getColumnName(cellIndex);
			let value = grid.tbs_getValue(rowIndex, columnName);
			let text  = grid.tbs_getText(rowIndex, columnName);

			let eventData = {};
			let eventRow = grid.tbs_getRow(rowIndex);
			eventRow.rowIndex    = rowIndex;
			eventRow.columnIndex = cellIndex;
			eventRow.columnName  = columnName;
			eventRow.value       = value;
			eventRow.text        = text;
			eventRow.state       = state;
			eventRow.newValue    = input.value;
			eventRow.data        = eventRow;
			if (column[grid.column_editable] == true && grid.notNull(grid.user_edit)) {
				let result = true;
				if (state == 2 && panelInput.style.left != '30000px') {
					result = grid.tbs_edit(e, grid, state, eventRow, grid.user_edit);
					if (grid.null(result) || result == true) {
						//console.log(2);
						let s = input.value;
						if (column[grid.column_type] == grid.code_combo) s = input_code.value;
						grid.tbs_setValueByIndex(rowIndex, cellIndex, grid.tbs_getFormatValue(column, s));
						grid.input_hide();
						grid.tbs_apply();
					}
					else {
						grid.input_hide();
						grid.tbs_apply();
					}
				}
			}
		}
		document.querySelector(selector + ' .tbs-grid-input').blur();
	}

	/**
	 * Main Functions
	 */

	tbs_createHtml = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let elementRoot = document.querySelector(selector);
		elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid" tabindex="1" style=""></div>');

		let elementGrid = elementRoot.querySelector('.tbs-grid');
		grid.classPanel10.createHtml(elementGrid);
		grid.classPanel80.createHtml(elementGrid);
		grid.classPanel90.createHtml(elementGrid);

		elementGrid.insertAdjacentHTML('beforeend', '<div class="tbs-grid-main"><div class="tbs-grid-wrap" /></div>');
		let elementMain = document.querySelector(selector + ' .tbs-grid-main');
		let elementWrap = document.querySelector(selector + ' .tbs-grid-wrap');

		grid.classPanel20.createHtml(elementWrap);
		grid.classPanel70.createHtml(elementWrap);
		grid.classPanel40.createHtml(elementWrap);
		grid.classPanel30.createHtml(elementWrap);
		grid.classPanel50.createHtml(elementWrap);

		grid.classPanelBase.createEtcHtml(elementMain);
		elementRoot.insertAdjacentHTML('beforeend', '<div class="tbs-grid-layer" style="left:30000px;display: none;"></div>');
		this.topLineDiv    = document.querySelector(selector + ' .tbs-grid-top-line');
		this.bottomLineDiv = document.querySelector(selector + ' .tbs-grid-bottom-line');
		this.leftLineDiv   = document.querySelector(selector + ' .tbs-grid-left-line');
		this.rightLineDiv  = document.querySelector(selector + ' .tbs-grid-right-line');
	}
	tbs_setToolbar = function (toolbar) {
		let selector = '#' + this.gridId;
		let grid = this;

		if (toolbar == undefined) return;
		this.toolbar_visible = (toolbar.visible != undefined) ? this.toolbar_visible = toolbar.visible : this.toolbar_visible;
	}
	tbs_setGrid = function (columns, options = {}, headers = []) {
		let selector = '#' + this.gridId;
		let grid = this;

		this.tbs_createOption(options);
		this.classColumn.createColumn(columns, headers);
		this.tbs_createGrid(grid.columns);
	}
	tbs_createGrid = function (column) {
		let selector = '#' + this.gridId;
		let grid = this;

		this.tbs_createHtml();
		this.tbs_createTable10();
		this.tbs_createTable80();
		this.tbs_createTable90();

		this.tbs_createTable20();
		this.tbs_createTable70();
		this.tbs_createTable40();
		this.tbs_createTable50();

		this.classScroll.setPanelSize();
		this.tbs_createTable30();

		this.horizontalScroll.setScroll(grid.code_horizontal);
		this.tbs_addEventAll();
	}
	tbs_updateGrid = function (column) {
		let selector = '#' + this.gridId;
		let grid = this;

		this.tbs_createTable20();
		this.tbs_createTable70();
		this.tbs_createTable40();
		this.tbs_createTable50();

		this.classScroll.setPanelSize();
		this.tbs_createTable30();

		this.horizontalScroll.setScroll(grid.code_horizontal);;
		this.tbs_addEventAll();
	}
	tbs_createTable20 = function () {
		let selector = '#' + this.gridId;
		let grid = this;
		const clickTopCheckBoxEvent = function (e) {
			let checkbox = document.querySelector(selector + ' .tbs-grid-panel21 .tbs-grid-cell-checkbox');
			if (checkbox.checked == true) {
				for (let i = 0, len = grid.data_view.length; i < len; i++) {
					grid.data_view[i].check = true;
				}
				grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
			}
			else {
				for (let i = 0, len = grid.data_view.length; i < len; i++) {
					grid.data_view[i].check = false;
				}
				grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
			}
		}
		//=============================================================	top div
		let table, thead, tbody, tr, th, td, div;
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		let tableWidth = this.options[grid.option_numWidth];
		tbody = document.createElement('tbody');
		tr = document.createElement('tr');
		tr.style.height = this.headerRowHeight * this.headerRowCount + 'px';
		td = document.createElement('td');
		td.classList.add('tbs-grid-cell');
		td.style.textAlign = 'center';
		td.style.width = this.options[grid.option_numWidth] + 'px';
		div = document.createElement('div');
		div.classList.add('tbs-grid-cell-div');
		div.textContent = '';
		td.appendChild(div);
		tr.appendChild(td);
		//=============================================================	rowMode
		tableWidth = tableWidth + ((this.options[grid.option_rowMode]) ? this.options[grid.option_rowModeWidth] : 0);
		//=============================================================
		td = document.createElement('td');
		td.classList.add('tbs-grid-cell');
		td.style.textAlign = 'center';
		td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
		td.style.width = this.options[grid.option_rowModeWidth] + 'px';

		div = document.createElement('div');
		div.classList.add('tbs-grid-cell-div');
		div.textContent = 's';
		div.style.textAlign = 'center';
		td.appendChild(div);
		tr.appendChild(td);
		//=============================================================	checkbox
		tableWidth = tableWidth + ((this.options[grid.option_checkbox]) ? this.options[grid.option_checkBoxWidth] : 0);
		//=============================================================
		document.querySelector(selector + ' .tbs-grid-group21').style.width = tableWidth + 'px';
		document.querySelector(selector + ' .tbs-grid-panel21').style.width = tableWidth + 'px';
		td = document.createElement('td');
		td.classList.add('tbs-grid-cell');
		td.style.textAlign = 'center';
		td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
		td.style.width = this.options[grid.option_checkBoxWidth] + 'px';

		div = grid.tbs_createElementCellDiv();
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.classList.add('tbs-grid-cell-checkbox');
		div.appendChild(input);

		td.appendChild(div);
		tr.appendChild(td);

		tbody.appendChild(tr);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel21').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel21').appendChild(table);
		if (this.options[grid.option_checkbox] == true) {
			document.querySelector(selector + ' .tbs-grid-cell-checkbox').addEventListener('click', clickTopCheckBoxEvent)
		}

		let headerRowCount = this.headerRowCount;

		/* panel22: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel22', table);

		/* panel22: tbody */
		tbody = document.createElement('tbody');
		for (let rowIndex = 0; rowIndex < headerRowCount; rowIndex++) {
			grid.tbs_createTableRow('panel22', tbody);
		}
		table.appendChild(tbody);
		document.querySelector(selector + ' .tbs-grid-panel22').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel22').appendChild(table);

		/* panel20: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel20', table);

		/* panel20: tbody */
		tbody = document.createElement('tbody');
		for (let rowIndex = 0; rowIndex < headerRowCount; rowIndex++) {
			grid.tbs_createTableRow('panel20', tbody);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel20').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel20').appendChild(table);

		this.classPanel20.setDataPanel();
	}
	tbs_createTable30 = function () {
		let selector = '#' + this.gridId;
		let grid = this;
		let table, thead, tbody, tr, th, td, div;
		let pageRowCount = this.pageRowCount;

		/* panel31: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead1('panel31', table);

		/* panel31: table body */
		tbody = document.createElement('tbody');
		for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
			tr = document.createElement('tr');
			let attr = document.createAttribute('data-rowId');

			tr.setAttributeNode(attr);
			tr.style = 'display:none;height' + this.rowHeight + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = '';
			div.style = 'text-align:center;';
			td.appendChild(div);

			td.style.width = this.options[grid.option_numWidth] + 'px';
			tr.appendChild(td);
			//=============================================================	rowMode
			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = ''; //(rowIndex + 1).toString();
			div.style.textAlign = 'center;';
			td.appendChild(div);

			td.style.width = this.options[grid.option_rowModeWidth] + 'px';
			tr.appendChild(td);
			//=============================================================	checkbox
			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = ''; //(rowIndex + 1).toString();
			div.style.textAlign = 'center;';

			let input = document.createElement('input');
			input.setAttribute('type', 'checkbox');

			input.classList.add('tbs-grid-cell-checkbox');
			div.appendChild(input);
			td.appendChild(div);

			td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
			tr.appendChild(td);

			tbody.appendChild(tr);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel31').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel31').appendChild(table);

		/* panel32: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel30', table);

		/* panel32: table body */
		tbody = document.createElement('tbody');
		for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
			grid.tbs_createTableRow('panel30', tbody);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel32').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel32').appendChild(table);

		/* panel30: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		let sumWidth = grid.tbs_createTableHead0('panel30', table);

		/* panel30: table body */
		tbody = document.createElement('tbody');
		for (let rowIndex = 0; rowIndex < pageRowCount; rowIndex++) {
			grid.tbs_createTableRow('panel30', tbody);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel30').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel30').appendChild(table);

		document.querySelector(selector + ' .tbs-grid-group31').style.width = sumWidth + 'px';
		document.querySelector(selector + ' .tbs-grid-panel31').style.width = sumWidth + 'px';
	}
	tbs_createTable40 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let topColumns = this.topColumns;
		if (topColumns.length == 0) return;

		let table, thead, tbody, tr, th, td, input, div;

		/* panel41: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead1('panel41', table);

		/* panel41: table body */
		tbody = document.createElement('tbody');
		tr = document.createElement('tr');
		tr.style.height = this.rowHeight + 'px';

		td = document.createElement('td');
		td.classList.add('tbs-grid-cell');
		td.style.textAlign = 'center';
		div = document.createElement('div');
		div.classList.add('tbs-grid-cell-div');
		div.textContent = '∑';

		td.style.width = this.options[grid.option_numWidth] + 'px';
		td.appendChild(div);
		tr.appendChild(td);
		let tableWidth = this.options[grid.option_numWidth];
		if (this.options[grid.option_rowMode] == true) {
			tableWidth += this.options[grid.option_rowModeWidth];
			//table.style.width = tableWidth + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.textAlign = 'center';

			div = document.createElement('div');
			div.classList.add('tbs-grid-div');
			div.textContent = '';

			td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
			td.appendChild(div);
			tr.appendChild(td);
		}
		if (this.options[grid.option_checkbox] == true) {
			tableWidth += this.options[grid.option_checkBoxWidth];
			//table.style.width = tableWidth + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.textAlign = 'center';

			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');

			td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
			td.appendChild(div);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel41').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel41').appendChild(table);

		/* panel42: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel40', table);

		/* panel42: table body */
		tbody = document.createElement('tbody');
		grid.tbs_createTableRow('panel40', tbody);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel42').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel42').appendChild(table);

		/* panel40: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel40', table);

		/* panel40: table body */
		tbody = document.createElement('tbody');
		grid.tbs_createTableRow('panel40', tbody);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel40').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel40').appendChild(table);
	}
	tbs_createTable50 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let footerColumns = this.footerColumns;
		if (footerColumns.length == 0) return;

		let table, thead, tbody, tr, th, td, input, div;

		/* panel51: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead1('panel51', table);

		/* panel51: table body */
		tbody = document.createElement('tbody');
		tr = document.createElement('tr');
		tr.style.height = this.rowHeight + 'px';
		td = document.createElement('td');
		td.classList.add('tbs-grid-cell');
		td.style.textAlign = 'center';
		div = document.createElement('div');
		div.classList.add('tbs-grid-cell-div');
		div.textContent = '∑';

		td.style.width = this.options[grid.option_numWidth] + 'px';
		td.appendChild(div);
		tr.appendChild(td);
		let tableWidth = this.options[grid.option_numWidth];
		if (this.options[grid.option_rowMode] == true) {
			tableWidth += this.options[grid.option_rowModeWidth];
			//table.style.width = tableWidth + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.textAlign = 'center';

			div = document.createElement('div');
			div.classList.add('tbs-grid-div');
			div.textContent = '';

			td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
			td.appendChild(div);
			tr.appendChild(td);
		}
		if (this.options[grid.option_checkbox] == true) {
			tableWidth += this.options[grid.option_checkBoxWidth];
			//table.style.width = tableWidth + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.textAlign = 'center';

			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');

			td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
			td.appendChild(div);
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel51').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel51').appendChild(table);

		/* panel52: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel52', table);

		/* panel52: tbody */
		tbody = document.createElement('tbody');
		grid.tbs_createTableRow('panel52', tbody);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel52').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel52').appendChild(table);

		/* panel50: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel50', table);

		/* panel50: tbody */
		tbody = document.createElement('tbody');
		grid.tbs_createTableRow('panel50', tbody);
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel50').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel50').appendChild(table);
	}
	tbs_createTable70 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let table, thead, tbody, tr, th, td, input, div;

		/* panel71: table head */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead1('panel71', table);

		/* panel71 table body */
		tbody = document.createElement('tbody');
		for (let i = 0; i < 2; i++) {
			// 1.Number
			tr = document.createElement('tr');
			tr.style.height = this.rowHeight + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.textAlign = 'center';
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = (i == 0)? '' : 'R';

			td.style.width = this.options[grid.option_numWidth] + 'px';
			td.appendChild(div);
			tr.appendChild(td);

			let tableWidth = this.options[grid.option_numWidth];
			// 2.RowMode
			if (grid.options[grid.option_rowMode] == true) {
				tableWidth += this.options[grid.option_rowModeWidth];
				//table.style.width = tableWidth + 'px';

				td = document.createElement('td');
				td.classList.add('tbs-grid-cell');
				td.style.textAlign = 'center';

				div = document.createElement('div');
				div.classList.add('tbs-grid-cell-div');
				div.textContent = '';

				td.style.width = td.style.width = this.options[grid.option_rowModeWidth] + 'px';
				td.appendChild(div);
				tr.appendChild(td);
			}
			// 3.Checkbox
			if (grid.options[grid.option_checkbox] == true) {
				tableWidth += this.options[grid.option_checkBoxWidth];
				//table.style.width = tableWidth + 'px';

				td = document.createElement('td');
				td.classList.add('tbs-grid-cell');
				td.style.textAlign = 'center';

				div = document.createElement('div');
				div.classList.add('tbs-grid-cell-div');

				td.style.width = td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
				td.appendChild(div);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		table.appendChild(tbody);
		document.querySelector(selector + ' .tbs-grid-panel71').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel71').appendChild(table);

		/* panel72: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel72', table);

		/* panel72: tbody */
		tbody = document.createElement('tbody');
		for (let i = 0; i < 2; i++) {
			grid.tbs_createTableRow('panel72', tbody);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel72').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel72').appendChild(table);

		/* panel70: thead */
		table = document.createElement('table');
		table.className = 'tbs-grid-table';
		grid.tbs_createTableHead0('panel70', table);

		/* panel70: tbody */
		tbody = document.createElement('tbody');
		for (let i = 0; i < 2; i++) {
			grid.tbs_createTableRow('panel70', tbody);
		}
		table.appendChild(tbody);

		document.querySelector(selector + ' .tbs-grid-panel70').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel70').appendChild(table);
	}
	tbs_createTable10 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let panel10 = document.querySelector(selector + ' .tbs-grid-panel10');
		panel10.classList.add('tbs-grid-show');
		//let div = document.createElement('div');
		//div.className = 'tbs-grid-panel10-wrap';
		//div.innerHTML =  '<div class="tbs-grid-panel10-filter"><input class="tbs-grid-panel10-filter-input" placeholder="' + this.toolbar_filter_placeholder + '"></div>';
		//div.innerHTML += '<button class="tbs-grid-button" style="width:60px;">Excel</button>';
		//div.innerHTML += '<button class="tbs-grid-button bg-red font-white" style="width:60px;">Unsort</button>';
		//div.innerHTML += '<button class="tbs-grid-button" style="width:95px;">Freeze Panes(C)</button>';
		//div.innerHTML += '<button class="tbs-grid-button" style="width:95px;">Freeze Panes(R)</button>';
		//div.innerHTML += '<button class="tbs-grid-button bg-red font-white" style="width:95px;">Unfreeze Panes</button>';
		//document.querySelector(selector + ' .tbs-grid-panel10').innerHTML = '';
		//document.querySelector(selector + ' .tbs-grid-panel10').appendChild(div);
	}
	tbs_createTable80 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let div = document.createElement('div');
		div.className = 'tbs-grid-panel-bar';

		let span = document.createElement('span');
		span.className = 'tbs-grid-panel-bar-span';
		span.textContent = grid.getConfigLabel('group_placeholder');
		div.appendChild(span);
		//document.querySelector(selector + ' .tbs-grid-panel80').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel80').appendChild(div);
	}
	tbs_createTable90 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		//if (grid.options[grid.option_showSortPanel] != true) return;

		let div = document.createElement('div');
		div.className = 'tbs-grid-panel-bar';

		let span = document.createElement('span');
		span.className = 'tbs-grid-panel-bar-span';
		span.textContent = grid.getConfigLabel('sort_placeholder');
		div.appendChild(span);
		document.querySelector(selector + ' .tbs-grid-panel90').innerHTML = '';
		document.querySelector(selector + ' .tbs-grid-panel90').appendChild(div);
	}
	tbs_createTableHead1 = function (panelName, table) {
		let selector = '#' + this.gridId;
		let grid = this;

		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		let th = document.createElement('th'); th.style.width = this.options[grid.option_numWidth] + 'px'; tr.appendChild(th);
		th = document.createElement('th'); th.style.width = (this.options[grid.option_rowMode]) ? this.options[grid.option_rowModeWidth]  + 'px' : '0px'; th.style.display = (this.options[grid.option_rowMode]) ? '' : 'none'; tr.appendChild(th);
		th = document.createElement('th'); th.style.width = (this.options[grid.option_checkbox])? this.options[grid.option_checkBoxWidth] + 'px' : '0px'; th.style.display = (this.options[grid.option_checkbox])? '' : 'none'; tr.appendChild(th);
		thead.appendChild(tr);
		table.appendChild(thead);
	}
	tbs_createTableHead2 = function (panelName, table) {
		let selector = '#' + this.gridId;
		let grid = this;

		return grid.tbs_createTableHead0(panelName, table);
	}
	tbs_createTableHead0 = function (panelName, table) {
		let selector = '#' + this.gridId;
		let grid = this;

		let thead = document.createElement('thead');
		let tr = document.createElement('tr');
		let sumWidth = 0;
		for (let i = 0, len = grid.columns.length; i < len; i++) {
			let column = grid.columns[i];
			let th = document.createElement('th');
			th.style.width = (column[grid.column_visible] == true) ? parseInt(column[grid.column_width]) + 'px' : '0px';
			th.style.display = (column[grid.column_visible] == true) ? '' : 'none';
			sumWidth += (this.columns[i][grid.column_visible] == true) ? parseInt(column[grid.column_width]) : 0;
			tr.appendChild(th);
		}
		thead.appendChild(tr);
		table.appendChild(thead);
		return sumWidth;
	}
	tbs_createTableRow = function (panelName, tbody) {
		let selector = '#' + this.gridId;
		let grid = this;

		let tr = document.createElement('tr');
		if (panelName == 'panel20' || panelName == 'panel22') {
			tr.style = 'height:' + this.headerRowHeight + 'px';
			for (let i = 0, len = this.headerColumnTable[0].length; i < len; i++) {
				let td = document.createElement('td');

				td.classList.add('tbs-grid-cell');
				td.style.display = 'none';

				let div = document.createElement('div');
				div.classList.add('tbs-grid-cell-div');
				td.appendChild(div);

				let span = document.createElement('span');
				span.classList.add('tbs-grid-cell-span');
				div.appendChild(span);

				let spanSort = document.createElement('span');
				spanSort.classList.add('tbs-grid-cell-span-sort');
				div.appendChild(spanSort);

				let reSizeDiv = document.createElement('div');
				reSizeDiv.classList.add('tbs-grid-cell-resize');

				let sortDiv = document.createElement('div');
				sortDiv.classList.add('tbs-grid-cell-sort');

				td.appendChild(div);
				td.appendChild(reSizeDiv);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		else {
			if (panelName == 'panel40' || panelName == 'panel50' || panelName == 'panel70') {
				tr.style = 'display:;height:' + grid.rowHeight + 'px';
			}
			else if (panelName == 'panel22' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel72') {
				tr.style = 'display:;height:' + grid.rowHeight + 'px';
			}
			else {
				tr.style = 'display:none;height:' + grid.rowHeight + 'px';
			}

			for (let i = 0; i < grid.columns.length; i++) {
				let column = grid.columns[i];
				let td = document.createElement('td');
				td.classList.add('tbs-grid-cell');
				td.style.width = column[grid.column_width] + 'px';

				if (panelName == 'panel22' || panelName == 'panel32' || panelName == 'panel42' || panelName == 'panel52' || panelName == 'panel62' || panelName == 'panel72') {
					td.style.display = 'none';
				}

				td.dataset.name = column[grid.column_name];
				td.dataset.cellIndex = i;

				let div = grid.tbs_createElementCellDiv();
				let spanText = grid.tbs_createElementCellText();
				div.appendChild(spanText);
				td.appendChild(div);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
	}
	tbs_updateTableRows30 = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let table, thead, tbody, tr, th, td, div;
		let pageRowCount = this.pageRowCount;

		let tableRows = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
		if (tableRows.length >= this.pageRowCount) return;

		let addRowCount = this.pageRowCount - tableRows.length;
		//=============================================================
		// panel31
		//=============================================================
		tbody = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody');
		if (grid.null(tbody)) return;

		for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
			tr = document.createElement('tr');
			let attr = document.createAttribute('data-rowId');

			tr.setAttributeNode(attr);
			tr.style = 'display:none;height' + this.rowHeight + 'px';

			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = '';
			div.style = 'text-align:center;';
			td.appendChild(div);

			td.style.width = this.options[grid.option_numWidth] + 'px';
			tr.appendChild(td);
			//=============================================================	rowMode
			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.display = (this.options[grid.option_rowMode]) ? '' : 'none';
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = ''; //(rowIndex + 1).toString();
			div.style.textAlign = 'center;';
			td.appendChild(div);

			td.style.width = this.options[grid.option_rowModeWidth] + 'px';
			tr.appendChild(td);
			//=============================================================	checkbox
			td = document.createElement('td');
			td.classList.add('tbs-grid-cell');
			td.style.display = (this.options[grid.option_checkbox]) ? '' : 'none';
			div = document.createElement('div');
			div.classList.add('tbs-grid-cell-div');
			div.textContent = ''; //(rowIndex + 1).toString();
			div.style.textAlign = 'center;';

			let input = document.createElement('input');
			input.setAttribute('type', 'checkbox');

			input.classList.add('tbs-grid-cell-checkbox');
			div.appendChild(input);
			td.appendChild(div);

			td.style.width = this.options[grid.option_checkBoxWidth] + 'px';
			tr.appendChild(td);

			tbody.appendChild(tr);
		}

		/* panel32 row count update */
		tbody = document.querySelector(selector + ' .tbs-grid-panel32 .tbs-grid-table tbody');
		for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
			tr = document.createElement('tr');
			tr.style = 'display:none;height:' + this.rowHeight + 'px';
			for (let i = 0; i < this.columns.length; i++) {
				let column = this.columns[i];
				let td = document.createElement('td');
				td.className = 'tbs-grid-cell';
				td.style.display = (column[grid.column_visible] == true) ? '' : 'none';

				let div = grid.tbs_createElementCellDiv();
				let spanText = grid.tbs_createElementCellText();
				div.appendChild(spanText);
				td.appendChild(div);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}

		/* panel30 row count update */
		tbody = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody');
		for (let rowIndex = 0; rowIndex < addRowCount; rowIndex++) {
			tr = document.createElement('tr');
			tr.style = 'display:none;height:' + this.rowHeight + 'px';
			for (let i = 0; i < this.columns.length; i++) {
				let column = this.columns[i];
				let td = document.createElement('td');
				td.className = 'tbs-grid-cell';
				td.style.display = (column[grid.column_visible] == true) ? '' : 'none';

				let div = grid.tbs_createElementCellDiv();
				let spanText = grid.tbs_createElementCellText();
				div.appendChild(spanText);
				td.appendChild(div);
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
	}
	tbs_setFrozenRow = function(fixedRowIndex, fixedRowCount) {
		// role : Exist rowIndex in Html Table
		let selector = '#' + this.gridId;
		let grid = this;

		//if (fixedRowIndex >= this.pageRowCount) { this.fixedRowIndex = -1; return; }
		const fn_getTableRowIndex = function (rowIndex) {
			let result = 0;
			let tableRows= document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr:not([style*="display:"])');
			for (let i = 0, len = tableRows.length; i < tableRows.length; i++) {
				let tableRow = tableRows[i]
				let index = parseInt(tableRow.childNodes[0].dataset.rowIndex);
				if (index == rowIndex) {
					result = tablesRow.rowIndex;
					break;
				}
			}
			return result;
		}
		if (grid.null(fixedRowCount)) {
			fixedRowCount = fn_getTableRowIndex(rowIndex);
		}
		if (fixedRowIndex + 1 > this.tbs_getRowCount() && fixedRowCount > grid.pageRowCount) {
			this.fixedRowIndex = -1;
			this.fixedRowCount = 0;
			return;
		}
		this.fixedRowIndex = fixedRowIndex;
		this.fixedRowCount = fixedRowCount;

		let table31 = document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table');
		let table30 = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

		//table31 clone
		let copyTable= table31.cloneNode(true);
		let trList= copyTable.querySelectorAll('tbody tr');

		for (let i = trList.length - 1; i >= 0; i--) {
			if (i > fixedRowIndex) copyTable.deleteRow(-1);
		}
		panel61.innerHTML = '';
		panel61.appendChild(copyTable);

		//table30 clone
		copyTable   = table30.cloneNode(true);
		trList  = copyTable.querySelectorAll('tbody tr');

		for (let i = trList.length - 1; i >= 0; i--) {
			if (i > fixedRowIndex) copyTable.deleteRow(-1);
		}

		panel60.innerHTML = '';
		panel60.appendChild(copyTable);

		if (this.fixedColumnIndex != -1) {
			grid.tbs_createFrozenColumnTable(table30, panel62, fixedColumnIndex, 'panel62');
		}

		//this.event_select('fixRight');
		//this.event_select('fixLeft');

		this.classScroll.setPanelSize();
		this.horizontalScroll.setScroll(grid.code_horizontal);;
		this.verticalScroll.setScroll(grid.code_vertical);
		this.classPanel30.setDataPanel(grid.fixedRowIndex);
	}
	tbs_removeFrozenRow = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		this.fixedRowIndex = -1;
		this.fixedRowCount = 0;

		let panel61= document.querySelector(selector + ' .tbs-grid-panel61');
		let panel60= document.querySelector(selector + ' .tbs-grid-panel60');

		panel61.childNodes[0].innerHTML = '';
		panel60.childNodes[0].innerHTML = '';

		this.classScroll.setPanelSize();
		this.horizontalScroll.setScroll(grid.code_horizontal);;
		this.verticalScroll.setScroll(grid.code_vertical);
		this.classPanel30.setDataPanel(0);
	}
	getGroupRowInit = function(row, id){
		let selector = '#' + this.gridId;
		let grid = this;

		for (let colIndex = 0; colIndex < grid.columns.length; colIndex++) {
			let col = grid.columns[colIndex];
			if (id == ''){
				if (col[grid.column_type] == 'number') {
					row[col[grid.column_name]] = 0;
					// row.layout[col[grid.column_name]][grid.layout_text] = '';
				}
				else {
					row[col[grid.column_name]] = '';
					// row.layout[col[grid.column_name]][grid.layout_text] = '';
				}
				// row.layout[this.summaryColumns[0][grid.column_name]][grid.layout_text] = grid.option_sumChar;
			}
			else {
				if (col[grid.column_name] != id){
					if (col[grid.column_type] == 'number') {
						row[col[grid.column_name]] = 0;
					}
					else {
						row[col[grid.column_name]] = '';
					}
				}
				else {
					if (id != '') row[col[grid.column_name]] + grid.option_sumChar;

				}
			}
		}
	}
	getGroupRowSum = function(row, srow, erow){
		let selector = '#' + this.gridId;
		let grid = this;

		for (let i = srow; i <= erow; i++){
			for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
				let col = this.columns[colIndex];
				if (col[grid.column_summaryType] != '') {
					row[col[grid.column_name]] += this.data_view[i][col.column_id];
					//row.layout[col[grid.column_name]][grid.layout_text] = this.tbs_getFormatText(col, row[col[grid.column_name]]);
				}
				// row.layout[col.column_id][grid.column_visible] = true;
				// row.layout[col.column_id][grid.layout_rowSpan] = 1;
				// row.layout[col.column_id][grid.layout_subRowSpan] = 1;
			}
		}
	}
	getGroupNode = function(node){
		let result = {};
		for (let i = 0, len = this.data_view.length; i < len; i++){
			for (let x = 0; x < this.columns.length; x++) {
				let layout = this.data_view[i].layout[this.columns[x].column_id];
				if (layout.node == node) {
					result.row = this.data_view[i];
					result.rowIndex = i;
					result.colIndex = x;
					result.id = this.classColumn.getColumnName(x);
					result = this.data_view[i][this.columns[x].column_id];
					result.layout = this.data_view[i].layout[this.columns[x].column_id];
					break;
				}
			}
		}
		return result;
	}
	setGroup = function (sortColumns, summaryColumns, mergeType) {
		let selector = this.gridId;
		let grid = this;
		if (this.data_view.length == 0) return;
		this.merge = true;
		this.classSort.sortColumns  = sortColumns;
		this.summaryColumns = summaryColumns;
		this.mergeType   = mergeType;

		//grid.classSort.setSortData(this.data_view, this.classSort.sortColumns);
		//============================================================= [Start] groupView with
		let groupView = []; //srow, erow(scol, ecol), depth, node, parentNode, firstChild, lastChild
		let direction = 'vertical';
		for(let i = 0, len = grid.data_view.length; i < len; i++){
			let groupRow = {};
			for(let x = 0, colLen = grid.columns.length; x < colLen; x++){
				let id = grid.columns[x].column_id;
				groupRow[id] = {};
				groupRow[id].srow = -1;
				groupRow[id].erow = -1;
				groupRow[id].scol = -1;
				groupRow[id].ecol = -1;
				groupRow[id].depth = -1;
				groupRow[id].node = -1;
				groupRow[id].parentNode = 0;
				groupRow[id].firstChild = false;
				groupRow[id].lastChild = false;
				groupRow[id].mergeClass = '';
			}
			groupView.push(groupRow);
		}
		//=============================================================
		let nextGroupId = function(id){
			for (let i = 0, len = grid.summaryColumns.length; i < len; i++){
				if (id == grid.summaryColumns[i].column_id) { if (i + 1 < len) return grid.summaryColumns[i + 1].column_id; }
			}
			return id;
		}
		let getLastRowIndex = function(rowIndex, erow, id){
			let val = grid.tbs_getValue(rowIndex, id);
			let lastRowIndex = rowIndex;

			for (let i = rowIndex + 1; i <= erow; i++) {
				if (val == grid.tbs_getValue(i, id)) {
					lastRowIndex = i;
					continue;
				}
				else break;
			}
			return lastRowIndex;
		}
		//=============================================================
		let node = 0;
		let setGroupBy = function(srow, erow, id, depth, parentNode){
			let colIndex = grid.classColumn.getColumnIndex(id);
			let startRowIndex = 0, lastRowIndex = 0;
			for (let i = srow; i <= erow; i++){
				startRowIndex = i;
				i = getLastRowIndex(i, erow, id);
				lastRowIndex = i;
				node += 1;
				let group = groupView[startRowIndex][id];
				group.id = id;
				group.srow = startRowIndex;
				group.erow = lastRowIndex;
				group.node = node;
				group.parentNode = parentNode;
				group.depth = depth;
				group.firstChild = (startRowIndex == srow) ? true : false;
				group.lastChild  = (lastRowIndex  == erow) ? true : false;
				//id, srow, erow(scol, ecol), depth, node, parentNode, firstChild, lastChild
				let nextId = nextGroupId(id)
				if (id != nextId) setGroupBy(startRowIndex, lastRowIndex, nextId, depth + 1, node);
			}
		}
		if (grid.summaryColumns.length > 0) setGroupBy(0, grid.data_view.length - 1, grid.summaryColumns[0].column_id, 0, 0);
		grid.classGroup.groupView = groupView;
		//============================================================= [End] groupView with

		//============================================================= layout
		let setRowSpan = function(srow, erow, id){
			for(let i = srow, k = 0; i <= erow; i++, k++){
				let layout = grid.data_view[i].layout[id];
				if (grid.mergeType == 1) {
					//layout[grid.layout_visible]    = (i == srow) ? true : false; //hide
					layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
					layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
				}
				else if (grid.mergeType == 2) {
					//layout[grid.layout_visible]    = true;
					layout[grid.layout_text] 	  = (i == srow) ?  layout[grid.layout_text] : '';
					layout[grid.layout_rowSpan]    = 1;
					layout[grid.layout_subRowSpan] = 1;
					for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
						if (i < erow) layout.mergeClass = 'tbs-grid-cell-bottom-none';
					}
				}
				else if (grid.mergeType == 3) {
					//layout[grid.layout_visible]    = true;
					layout[grid.layout_rowSpan]    = 1;
					layout[grid.layout_subRowSpan] = 1;
				}
				else if (grid.mergeType == 4) {
					//layout[grid.layout_visible]    = true;
					layout[grid.layout_text] 	  = (i == srow) ?  layout[grid.layout_text] : '';
					layout[grid.layout_rowSpan]    = 1;
					layout[grid.layout_subRowSpan] = 1;
				}
				else if (grid.mergeType == 5) {
					//layout[grid.layout_visible]    = (i == srow) ? true : false;
					layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
					layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
				}
				else if (grid.mergeType == 6) {
					//layout[grid.layout_visible]    = (i == srow) ? true : false;
					layout[grid.layout_rowSpan]    = (i == srow) ? erow - srow + 1 - k : 1;
					layout[grid.layout_subRowSpan] = erow - srow + 1 - k;
				}
			}
		}
		for(let i = 0, len = grid.data_view.length; i < len; i++){
			for(let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
				let id = summaryColumns[x].column_id;
				let layout = grid.data_view[i].layout[id];
				let group  = grid.classGroup.groupView[i][id];
				if (group.srow != -1) {
					layout.layout_srow       = group.srow      ;
					layout.layout_erow       = group.erow      ;
					layout.layout_scol       = group.scol      ;
					layout.layout_ecol       = group.ecol      ;
					layout.layout_depth      = group.depth     ;
					layout.layout_node       = group.node      ;
					layout.layout_parentNode = group.parentNode;
					layout.layout_firstChild = group.firstChild;
					layout.layout_lastChild  = group.lastChild ;
					layout.layout_mergeClass = group.mergeClass;
					setRowSpan(layout.srow, layout.erow, id);
				}
			}
		}
		//=============================================================
		// sum row
		//=============================================================
		let newView = [];
		let addRow = function(node){
			let result = grid.getGroupNode(node);
			if (result.row == undefined) return;
			let srow = result.layout.srow;
			let erow = result.layout.erow;
			let tmpRow = JSON.parse(JSON.stringify(result.row));
			let id = result.id;
			let layout = result.layout;
			//=============================================================
			let tmpView = [];
			if (layout.depth == grid.summaryColumns.length - 1){
				for (let i = srow; i <= erow; i++) tmpView.push(JSON.parse(JSON.stringify(grid.data_view[i])));
			}
			//============================================================= mergeClass
			if(grid.mergeType == 4){
				for (let i = 0, len = tmpView.length; i < len - 1; i++){
					for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
						if (i < erow) tmpView[i].layout[grid.summaryColumns[x].column_id].mergeClass = 'tbs-grid-cell-bottom-none';
						if (i == 0) tmpView[i].layout[grid.summaryColumns[x].column_id][grid.layout_text] = tmpView[i][id];
					}
				}
			}
			if(grid.mergeType == 5){ //rowSpan subRowSpan 조정
				let rowCount = tmpView.length;
				for (let i = 0, k = 0, len = tmpView.length; i < len; i++, k++){
					for (let x = 0, len2 = grid.summaryColumns.length; x < len2; x++){
						tmpView[i].layout[grid.summaryColumns[x].column_id][grid.column_visible]    = (i == 0) ? true : false;
						tmpView[i].layout[grid.summaryColumns[x].column_id].rowSpan    = (i == 0) ? rowCount - k : 1;
						tmpView[i].layout[grid.summaryColumns[x].column_id].subRowSpan = rowCount - k;
					}
				}
			}
			//============================================================= data init, sum
			grid.getGroupRowInit(tmpRow, id);
			grid.getGroupRowSum(tmpRow, srow, erow);
			//=============================================================
			tmpRow[grid.code_mode] = 'S';
			tmpRow.colorDepth = layout.depth;
			tmpView.push(JSON.parse(JSON.stringify(tmpRow)));

			for (let i = 0, len = tmpView.length; i < len; i++){
				newView.push(JSON.parse(JSON.stringify(tmpView[i])));
			}
			if(layout.lastChild && layout.depth != 0) {
				addRow(layout.parentNode);
			}
		}
		let addTotalSum = function(){
			let srow = 0;
			let erow = grid.data_view.length - 1;
			let tmpRow = JSON.parse(JSON.stringify(grid.data_view[0]));
			//============================================================= data init, sum
			grid.getGroupRowInit(tmpRow, '');
			grid.getGroupRowSum(tmpRow, srow, erow);
			//=============================================================
			tmpRow[grid.code_mode] = 'S';
			tmpRow.colorDepth = '';
			newView.push(JSON.parse(JSON.stringify(tmpRow)));
		}
		let getSum = function(aid) {
			let id = this.summaryColumns[this.summaryColumns.length - 1].column_id;
			for (let i = 0; i < grid.data_view.length; i++){
				let row = grid.data_view[i];
				if (row.layout[id].srow != undefined && row.layout[id].srow != -1) {
					addRow(row.layout[id].node);
				}
			}
			addTotalSum();
		}
		if (mergeType == 3) {
			getSum();
			grid.data_view = [];
			grid.data_view = newView;
		}
		else if (mergeType == 4) {
			getSum();
			grid.data_view = [];
			grid.data_view = newView;
		}
		else if (mergeType == 5) {
			getSum();
			grid.data_view = [];
			grid.data_view = newView;
		}
		//============================================================= test
		//grid.tbs_displayDataView(groupView, 'groupView');
		//grid.tbs_displayDataView(grid.view, 'layout');
		//=============================================================
		grid.horizontalScroll.setScroll(grid.code_horizontal);;
		grid.verticalScroll.setScroll(grid.code_vertical);
		grid.tbs_refreshRefData();
		grid.classPanel30.setDataPanel(0);
	}
	tbs_getHeaderCell = function(colIndex) {
		//return : table cell
		//colIndex : displayed colIndex
		let selector = '#' + this.gridId;
		let grid = this;

		let tableRows= document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table tbody tr');
		let rowCount = this.headerRowCount;
		if (rowCount > 1) {
			for (let i = rowCount - 1; i >= 0; i--) {
				let tableRow = tableRows[i];
				if (tableRow.childNodes[colIndex].dataset.name != '') {
					return tableRow.childNodes[colIndex];
				}
			}
		}
		else {
			return tableRows[0].childNodes[colIndex];
		}
	}
	getTextWidth = function(canvas, text, fontSize, fontFamily) {
		let selector = '#' + this.gridId;
		let grid = this;

		let context = canvas.getContext("2d");
		context.fontSize = fontSize;
		context.fontFamily = fontFamily;
		let metrics = context.measureText(text);
		return metrics.width;
	};
	getTextWidth2 = function(context, text) {
		let selector = '#' + this.gridId;
		let grid = this;

		let metrics = context.measureText(text);
		return metrics.width;
	};
	tbs_setColumnAutoWidth = function(){
		let selector = '#' + this.gridId;
		let grid = this;

		let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];
		let arr = [];
		for (let x = 0, len = grid.columns.length; x < len; x++) arr[x] = 0;

		let fontSize = grid.getConfigFont('fontSize');
		let fontFamilty = grid.getConfigFont('fontFamily');

		for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
			for (let x = 0, len2 = grid.columns.length; x < len2; x++){
				if (grid.headerColumnTable[i][x][grid.column_kind] == 'column') {
					let width = parseInt(grid.getTextWidth(canvas, grid.headerColumnTable[i][x][grid.column_text], fontSize, fontFamilty));
					if (width >= arr[x]) {
						arr[x] = width;
					}
				}
			}
		}
		for (let i = 0, len = grid.data_view.length; i < len; i++){
			for (let x = 0, len2 = grid.columns.length; x < len2; x++){
				let columnName = grid.classColumn.getColumnName(x);
				let column = grid.classColumn.getColumn(columnName);
				let val = grid.tbs_getValueByIndex(i, x);
				let width = parseInt(grid.getTextWidth(canvas, grid.tbs_getFormatText(column, val), fontSize, fontFamilty));
				//let width = parseInt(grid.getTextWidth(canvas, grid.data_view[i].layout[id][grid.layout_text], fontSize, fontFamilty));


				if (width >= arr[x]) {
					arr[x] = width;
				}
			}
		}
		for (let x = 0, len = grid.columns.length; x < len; x++) arr[x] += 20;
		grid.classScroll.setAllColumnWidth(arr);
		grid.classPanel20.setDataPanel();
	}
	setRowHeight = function (type, rowHeight) {
		let selector = '#' + this.gridId;
		let grid = this;

		if (type == undefined) {
			this.setRowHeight('header' , rowHeight);
			this.setRowHeight('content', rowHeight);
			this.setRowHeight('top'    , rowHeight);
			this.setRowHeight('footer' , rowHeight);
		}
		else {
			if (type == 'header') {
				this.headerRowHeight = rowHeight;
				this.classScroll.setPanelSize();
				this.horizontalScroll.setScroll(grid.code_horizontal);;
				this.verticalScroll.setScroll(grid.code_vertical);
				this.classPanel30.setDataPanel(0);
			}
			if (type == 'content') {
				this.rowHeight = rowHeight;
				document.querySelector(selector + ' .tbs-grid-input').style.height = rowHeight + 'px';
				this.classScroll.setPanelSize();
				this.horizontalScroll.setScroll(grid.code_horizontal);;
				this.verticalScroll.setScroll(grid.code_vertical);
				this.classPanel30.setDataPanel(0);
			}
			if (type == 'top') {
				this.topRowHeight = rowHeight;
				this.classScroll.setPanelSize();
				this.horizontalScroll.setScroll(grid.code_horizontal);;
				this.verticalScroll.setScroll(grid.code_vertical);
				this.classPanel30.setDataPanel(0);
			}
			if (type == 'footer') {
				this.footerRowHeight = rowHeight;
				this.classScroll.setPanelSize();
				this.horizontalScroll.setScroll(grid.code_horizontal);;
				this.verticalScroll.setScroll(grid.code_vertical);
				this.classPanel30.setDataPanel(0);
			}

		}
	}
	tbs_setGridModePage = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
		page.style.display = '';

		grid.classPage.pageRowcount = grid.classPage.options.pageRowCount;
	}
	tbs_setGridModePagenation = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let page = document.querySelector(selector + ' .tbs-grid-panel10-page');
		page.style.display = '';
		grid1.setGridMode(grid1.code_page);
	}

	/**
	 * Data Functions
	 */
	tbs_setGridData = function (data) {
		let selector = '#' + this.gridId;
		let grid = this;

		if (data == undefined) return;
		let column = this.columns;
		this.data_insert = [];
		this.data_update = [];
		this.data_delete = [];

		this.data_select_panel30 = [];  //select color : value 0, 1
		this.data_select_panel31 = [];	//view - filter
		for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
			data[rowIndex][grid.code_rowId] = rowIndex;
		}

		this.data_user = grid.tbs_copyJson(data);
		this.data_table = [];
		this.data_view = [];
		let count = data.length;
		for (let i = 0; i < count; i++) {
			let source = {};
			let data30 = {};
			let page = {};

			let row = data[i];
			source[grid.code_rowId] = row[grid.code_rowId];
			data30[grid.code_rowId] = row[grid.code_rowId];
			page[grid.code_rowId] = row[grid.code_rowId];

			source[grid.code_mode] = '';
			data30[grid.code_mode] = '';
			page[grid.code_mode] = '';

			// source.layout = {};
			// data30.layout = {};
			// page.layout = {};

			for (let colIndex = 0, len = column.length; colIndex < len; colIndex++) {
				let col = column[colIndex];
				let columnName  = col[grid.column_name];
				let val = this.null(row[columnName]) ? null : this.tbs_getFormatValue(col, row[columnName]); // undefined or null is null value.
				let colType = column[colIndex][grid.column_type];

				source[columnName] = val;
				data30[columnName] = val;
				page[columnName] = val;

				// source.layout[columnName] = {};
				// source.layout[columnName][grid.layout_text] = this.tbs_getFormatText(col, row[columnName]);
				// source.layout[columnName][grid.layout_color]     = '';
				// source.layout[columnName][grid.layout_backgroundColor]= '';
				// for merging
				//source.layout[columnName][grid.layout_visible] = col[grid.column_visible];
				// source.layout[columnName][grid.layout_rowSpan] = 1;
				// source.layout[columnName][grid.layout_colSpan] = 1;
				// source.layout[columnName][grid.layout_subRowSpan] = 1;
				// source.layout[columnName][grid.layout_subColSpan] = 1;

				// data30.layout[columnName] = {};
				// data30.layout[columnName][grid.layout_text] = this.tbs_getFormatText(col, row[columnName]);
				// data30.layout[columnName][grid.layout_color]     = '';
				// data30.layout[columnName][grid.layout_backgroundColor]= '';
				// for merging
				//data30.layout[columnName][grid.layout_visible] = col[grid.column_visible];
				// data30.layout[columnName][grid.layout_rowSpan] = 1;
				// data30.layout[columnName][grid.layout_colSpan] = 1;
				// data30.layout[columnName][grid.layout_subRowSpan] = 1;
				// data30.layout[columnName][grid.layout_subColSpan] = 1;

				// page.layout[columnName] = {};
				// page.layout[columnName][grid.layout_text] = this.tbs_getFormatText(col, row[columnName]);
				// page.layout[columnName][grid.layout_color]     = '';
				// page.layout[columnName][grid.layout_backgroundColor]= '';
				// for merging
				//page.layout[columnName][grid.layout_visible] = col[grid.column_visible];
				// page.layout[columnName][grid.layout_rowSpan] = 1;
				// page.layout[columnName][grid.layout_colSpan] = 1;
				// page.layout[columnName][grid.layout_subRowSpan] = 1;
				// page.layout[columnName][grid.layout_subColSpan] = 1;

			}
			this.data_table.push(source);
			this.data_view.push(data30);
			if (grid.grid_mode == grid.code_page) this.data_page.push(page);
		}
		this.maxRowId = data.length;

		/* create data_top */
		grid.classTop.setTopData();

		/* create data_footer */
		grid.classFooter.setFooterData();

		if (this.tbs_isAutoWidthColumn()) this.tbs_setColumnAutoWidth();

		document.querySelector(selector + ' .tbs-grid-panel10-filter-input').value = '';
		this.classRange.removeRange(0, -1);
		let _topRowIndex = this.classRange.selectRange(0, 0, 0, 0);

		if (data.length == 0) {
			document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = '0';
			grid.classPanel30.setDataPanel(0);
			grid.verticalScroll.setScroll(grid.code_vertical);
		}
		else {
			document.querySelector(selector + ' .tbs-grid-panel21 td div').textContent = data.length;
			grid.classPanel30.setDataPanel(0);
			grid.verticalScroll.setScroll(grid.code_vertical);
			grid.classPanel40.setDataPanel();
			grid.classPanel50.setDataPanel();
		}

	}
	tbs_refreshRefData = function () {
		// Data Init
		let selector = '#' + this.gridId;
		let grid = this;

		let data = this.data_view;
		this.data_select_panel30 = [];  // select color : value 0, 1
		this.data_select_panel31 = [];	// view - filter

		for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
			let itemSelect = {};
			let itemLeftSelect = {};
			let itemLeftView = {};

			itemSelect[grid.code_rowId] = data[rowIndex][grid.code_rowId];
			itemSelect = new Uint8ClampedArray([]); //new

			itemLeftView[grid.code_mode] = ''; //insert, update, delete
			itemLeftView[grid.code_rowId] = data[rowIndex][grid.code_rowId];

			itemLeftSelect[grid.code_mode] = 0; //insert, update, delete
			itemLeftSelect[grid.code_rowId] = data[rowIndex][grid.code_rowId];

			this.data_select_panel30.push(itemSelect);
			this.data_select_panel31.push(itemLeftSelect);
		}
		this.classRange.removeRange(0, -1);
		this.classPanel30.setDataPanel(0);
	}
	tbs_getValue = function (rowIndex, columnName) {
		/**
		 * when currency, number type => return number type
		 * @param rowIndex
		 * @param columnName
		 * @returns {*|number}
		 */
		let column = this.classColumn.getColumn(columnName);
		let columnType = column[this.column_type];
		let val = this.data_view[rowIndex][columnName];

		if (columnType == this.code_number) return Number(val);
		else if (columnType == this.code_currency) return Number(val);
		else return val;
	}
	tbs_getValueByIndex = function (rowIndex, colIndex) {
		let columnName = this.classColumn.getColumnName(colIndex);
		return this.tbs_getValue(rowIndex, columnName);
	}
	tbs_getText = function (rowIndex, columnName) {
		// return this.data_view[rowIndex].layout[columnName][this.layout_text];
		let column = this.classColumn.getColumn(columnName);
		let val = this.tbs_getValue(rowIndex, columnName);
		return this.tbs_getFormatText(column, val);
	}
	tbs_getTextByIndex = function (rowIndex, colIndex) {
		let columnName = this.classColumn.getColumnName(colIndex);
		return this.tbs_getText(rowIndex, columnName);
	}
	tbs_getSourceText = function (rowIndex, columnName) {
		// rowIndex : data_table rowIndex
		// return this.data_table[rowIndex].layout[name][this.layout_text];
		let val = this.data_table[rowIndex][columnName];
		let column = this.getColumn(columnName);
		return this.tbs_getFormatText(column, val);
	}
	tbs_setValue = function (rowIndex, id, value) {
		let selector = '#' + this.gridId;
		let grid = this;
		this.tbs_setDataValue(rowIndex, id, value);
		//this.classPanel30.setDataPanel(this.tbs_getFirstRowIndex());
	}
	tbs_setValueByIndex = function (rowIndex, cellIndex, value) {
		rowIndex = parseInt(rowIndex);
		cellIndex = parseInt(cellIndex);
		let id = this.classColumn.getColumnName(cellIndex);
		this.tbs_setValue(rowIndex, id, value);
	}
	tbs_setDataValue = function (rowIndex, id, value) {
		let selector = '#' + this.gridId;
		let grid = this;

		let cellIndex = this.classColumn.getColumnIndex(id);
		let oldValue = this.data_view[rowIndex][id];
		let mode = this.data_view[rowIndex][grid.code_mode];

		let result = this.tbs_getFormat(this.columns[cellIndex], value);
		if (mode == 'I') {
			if (oldValue != result.value) {
				this.data_view[rowIndex][id] = result.value;
				//this.tbs_setLayoutValue(rowIndex, id, this.layout_text, result.text);
				let rowId = this.data_view[rowIndex][grid.code_rowId];
				for (let i = 0; i < this.data_table.length; i++) {
					if (rowId == this.data_table[i][grid.code_rowId]) {
						this.data_table[i][id] = result.value;
						this.data_table[i][grid.code_mode]= 'I';
						break;
					}
				}
			}
		}
		else {
			if (oldValue != result.value) {
				this.data_view[rowIndex][id] = result.value;
				this.data_view[rowIndex][grid.code_mode] = 'U';
				//this.tbs_setLayoutValue(rowIndex, id, this.layout_text, result.text);
				let rowId = this.data_view[rowIndex][grid.code_rowId];
				for (let i = 0; i < this.data_table.length; i++) {
					if (rowId == this.data_table[i][grid.code_rowId]) {
						this.data_table[i][id] = result.value;
						this.data_table[i][grid.code_mode] = 'U';
						break;
					}
				}
			}
		}
	}
	tbs_setDataByIndex = function (rowIndex, cellIndex, value) {
		rowIndex = parseInt(rowIndex);
		cellIndex = parseInt(cellIndex);
		let id = this.classColumn.getColumnName(cellIndex);
		this.tbs_setDataValue(rowIndex, id, value);
	}

	tbs_createEmptyRow = function (rowId) {
		let selector = '#' + this.gridId;
		let grid = this;

		let columns = grid.columns;

		let row = {};
		row[grid.code_rowId] = rowId;
		row[grid.code_mode] = '';
		// row.layout = {};

		for (let i = 0, len = columns.length; i < len; i++) {
			let column = columns[i];
			let columnName = column[grid.column_name];
			row[columnName] = this.null(row[columnName]) ? null : row[columnName];
			// row.layout[columnName] = {};
			// row.layout[columnName][grid.layout_text] = '';
			// row.layout[columnName][grid.layout_color] = '';
			// row.layout[columnName][grid.layout_backgroundColor] = '';

			//row.layout[columnName][grid.layout_visible] = true;
			// row.layout[columnName][grid.layout_rowSpan] = 1;
			// row.layout[columnName][grid.layout_colSpan] = 1;
			// row.layout[columnName][grid.layout_subRowSpan] = 1;
			// row.layout[columnName][grid.layout_subColSpan] = 1;
		}
		return row;
	}
	tbs_createRow = function (row) {
		let selector = '#' + this.gridId;
		let grid = this;

		let columns = this.columns;
		this.maxRowId = this.maxRowId + 1;
		let rowId = this.maxRowId;

		let source = {};
		source[grid.code_rowId] = rowId;
		source[grid.code_mode] = 'I';
		// source.layout = {};

		let data30 = {};
		data30[grid.code_rowId] = rowId;
		data30[grid.code_mode] = 'I';
		// data30.layout = {};

		for (let i = 0, len = columns.length; i < len; i++) {
			let column = columns[i];
			let id = column[grid.column_name];
			source[id] = this.null(row[id]) ? null : row[id];
			// source.layout[id] = {};
			//source.layout[id][grid.layout_visible] = column[grid.layout_visible];
			// source.layout[id][grid.layout_rowSpan] = 1;
			// source.layout[id][grid.layout_colSpan] = 1;
			// source.layout[id][grid.layout_subRowSpan] = 1;
			// source.layout[id][grid.layout_subColSpan] = 1;
			// source.layout[id][grid.layout_color]      = '';
			// source.layout[id][grid.layout_backgroundColor] = '';
			// source.layout[id][grid.layout_text] = this.tbs_getFormatText(column, row[id]);

			data30[id] = this.null(row[id]) ? null : row[id];
			// data30.layout[id] = {};
			//data30.layout[id][grid.layout_visible] = column[grid.layout_visible];
			// data30.layout[id][grid.layout_rowSpan] = 1;
			// data30.layout[id][grid.layout_colSpan] = 1;
			// data30.layout[id][grid.layout_subRowSpan] = 1;
			// data30.layout[id][grid.layout_subColSpan] = 1;
			// data30.layout[id][grid.layout_color]      = '';
			// data30.layout[id][grid.layout_backgroundColor] = '';
			// data30.layout[id][grid.layout_text] = this.tbs_getFormatText(column, row[id]);
		}
		return { source : source, data30 : data30 };
	}
	tbs_getRowCount = function () {
		return this.data_view.length;
	}
	tbs_getRow = function (rowIndex) {
		let grid = this;
		if (rowIndex < 0 || rowIndex >= grid.data_view.length) return null;
		return grid.tbs_copyJson(grid.data_view[rowIndex]);
	}
	tbs_getRows = function (startRowIndex = 0, endRowIndex = -1) {
		let grid = this;

		let result = [];
		let rows = this.data_view;
		if (arguments.length == 0) {
			rows.map(row => result.push(grid.tbs_copyJson(row)));
		}
		else {
			if (endRowIndex == -1) endRowIndex = rows.length - 1;
			for (let i = startRowIndex; i <= endRowIndex; i++) {
				let row = rows[i];
				result.push(grid.tbs_copyJson(row));
			}
		}
		return result;
	}
	tbs_getTempRowByRowId = function (rowId) {
		let result = {};
		let grid = this;
		for (let i = 0, len = this.data_temp.length; i < len; i++) {
			if (this.data_temp[i][grid.code_rowId] == rowId) {
				result = grid.tbs_copyJson(this.data_temp[i]);
				break;
			}
		}
		return result;
	}
	tbs_getSourceRowByRowId = function (rowId) {
		let result = {};
		let grid = this;
		for (let i = 0, len = this.data_table.length; i < len; i++) {
			if (this.data_table[i][grid.code_rowId] == rowId) {
				result = grid.tbs_copyJson(this.data_table[i]);
				break;
			}
		}
		return result;
	}
	tbs_getRowByRowId = function (rowId) {
		let result = {};
		let grid = this;
		for (let i = 0, len = this.data_view.length; i < len; i++) {
			if (this.data_view[i][grid.code_rowId] == rowId) {
				result = grid.tbs_copyJson(this.data_view[i]);
				break;
			}
		}
		return result;
	}
	tbs_getRowIndexByRowId = function (rowId) {
		let result = {};
		let grid = this;
		for (let i = 0, len = this.data_view.length; i < len; i++) {
			if (this.data_view[i][grid.code_rowId] == rowId) {
				result = i;
				break;
			}
		}
		return result;
	}
	tbs_getSelectedRow = function () {
		let data = this.tbs_getSelectedRows();
		return (data.length > 0) ? data[0] : null;
	}
	tbs_getSelectedRows = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = [];
		let len = grid.data_view.length;
		for (rowIndex = 0; rowIndex < len; rowIndex++) {
			let item = {};
			item[grid.code_rowId] = grid.data_view[rowIndex][grid.code_rowId];
			item[grid.code_mode]  = grid.data_view[rowIndex][grid.code_mode];
			item.rowIndex = rowIndex;
			item = grid.tbs_copyJson(grid.data_view[rowIndex]);
			if (this.tbs_isSelectedCell31(rowIndex, 0) == 1) result.push(item);
		}
		return result;
	}
	tbs_getCheckedRows = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = [];
		for (let i = 0, len = this.data_view.length; i < len; i++) {
			let row = this.data_view[i];
			if (row.check) {
				result.push(JSON.parse(JSON.stringify(row)));
			}
		}
		return result;
	}
	tbs_validateTopRowIndex = function (panelName, topRowIndex) {
		// function : Validate Top rowIndex
		//
		// @panelName   : panel area name
		// @topRowIndex : topRowIndex
		//
		// @return : topRowIndex
		let selector = '#' + this.gridId;
		let grid = this;

		if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
			if (this.fixedRowIndex != -1) {
				let topRowIndex2 = topRowIndex - (this.fixedRowIndex + 1);
				let rowCount = this.tbs_getRowCount() - (this.fixedRowIndex + 1);

				if (this.pageRowCount > this.pageIntRowCount) {
					if (topRowIndex2 > (rowCount - this.pageRowCount + 1)) {
						topRowIndex2 = rowCount - this.pageRowCount;
						if (topRowIndex2 < 0) topRowIndex2 = 0;
					}
				}
				else {
					if (topRowIndex2 > (rowCount - this.pageRowCount)) {
						topRowIndex2 = rowCount - this.pageRowCount;
						if (topRowIndex2 < 0) topRowIndex2 = 0;
					}
				}
				if (topRowIndex2 < 0) topRowIndex2 = 0;
				topRowIndex = topRowIndex2 + (this.fixedRowIndex + 1);
			}
			else {
				let rowCount = this.tbs_getRowCount();
				if (this.pageRowCount > this.pageIntRowCount) {
					if (topRowIndex > (rowCount - this.pageRowCount + 1)) {
						topRowIndex = rowCount - this.pageRowCount;
						if (topRowIndex < 0) topRowIndex = 0;
					}
				}
				else {
					if (topRowIndex > (rowCount - this.pageRowCount)) {
						topRowIndex = rowCount - this.pageRowCount;
						if (topRowIndex < 0) topRowIndex = 0;
					}
				}
				if (topRowIndex < 0) topRowIndex = 0;
			}
		}
		else if (panelName == 'panel60') {
			let rowCount = this.fixedRowCount;
			if (topRowIndex > (rowCount - this.fixedRowCount)) {
				topRowIndex = rowCount - this.fixedRowCount;
				if (topRowIndex < 0) topRowIndex = 0;
			}
			if (topRowIndex < 0) topRowIndex = 0;
		}
		return topRowIndex;
	}
	tbs_validateBottomRowIndex = function (panelName, topRowIndex) {
		// function : Validate Bottom rowIndex
		//
		// @panelName   : panel area name
		// @topRowIndex : topRowIndex
		//
		// @return : bottomRowIndex
		let selector = '#' + this.gridId;
		let grid = this;
		let bottomRowIndex = 0;

		if (this.fixedRowIndex != -1) {
			if (panelName == 'panel31' || panelName == 'panel32' || panelName == 'panel30') {
				let rowCount = this.tbs_getRowCount() - (this.fixedRowIndex + 1);
				let displayTopRowIndex = topRowIndex - (this.fixedRowIndex + 1);
				bottomRowIndex = displayTopRowIndex + this.tbs_getPageRowCount(panelName) - 1;
				if (bottomRowIndex > rowCount - 1) bottomRowIndex = rowCount - 1;
				bottomRowIndex = bottomRowIndex + (this.fixedRowIndex + 1);
				//console.log(`tbs_validateBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
			}
			else if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') {
				bottomRowIndex = topRowIndex + this.fixedRowCount - 1;
				if (bottomRowIndex > this.fixedRowCount - 1) bottomRowIndex = this.fixedRowCount - 1;
				//console.log(`tbs_validateBottomRowIndex ${panelName} this.pageRowCount ${this.pageRowCount} topRowIndex ${topRowIndex} bottomRowIndex ${bottomRowIndex}`);
			}
		}
		else {
			bottomRowIndex = topRowIndex + this.pageRowCount - 1;
			if (bottomRowIndex > this.tbs_getRowCount() - 1) bottomRowIndex = this.tbs_getRowCount() - 1;
		}
		return bottomRowIndex;
	}
	tbs_getPageRowCount = function (panelName) {
		// function : Validate Bottom rowIndex
		//
		// @panelName   : panel area name
		// @topRowIndex : topRowIndex
		//
		// @return : bottomRowIndex
		let selector = '#' + this.gridId;
		let grid = this;

		if (panelName == 'panel61' || panelName == 'panel62' || panelName == 'panel60') {
			return this.fixedRowCount;
		}
		else {
			return this.pageRowCount;
		}
	}
	tbs_getChangedRowsData_ref = function () {
		let grid = this;

		let d = this.data_table;
		let c = d.length;
		let result = [];
		for (let i = 0; i < c; i++) {
			let r = d[i];
			if (r[grid.code_mode] != 'U' && r[grid.code_mode] != 'I') continue;
			if (r[grid.code_mode] == 'U') {
				let column = this.columns;
				for (let key in r) {
					for (let x = 0; x < column.length; x++) {
						let c = column[x];
						if (key == c[grid.column_name] && c[grid.column_required] == true && c[grid.column_autoWidth] != true) {
							let value = r[key].replace(/ /gi, '');
							if (value == '') { alert('input required values'); return; }
						}
					}
				}
			}
			if (r.mode == 'I') {
				let column = this.columns;
				let colCheckCount = 0;
				let colCount = 0;
				for (let key in r) {
					for (let x = 0; x < column.length; x++) {
						let c = column[x];
						if (key == c[grid.column_name]) {
							if (c[grid.column_required] == true && c[grid.column_autoWidth] != true) {
								colCount += 1;
								let value = r[key].replace(/ /gi, '');
								if (value != '') colCheckCount += 1;
							}
						}
					}
				}
				if (colCount > colCheckCount) { alert('input required values'); return; }
			}
			let item = JSON.parse(JSON.stringify(d[i]));
			result.push(item);
		}
		return result;
	}
	tbs_getChangedRowsData = function () {
		let result = [];
		let rows = this.tbs_getDeletedRowsData();
		for (let i = 0, len = rows.length; i < len; i++) {
			result.push(rows[i]);
		}
		rows = this.tbs_getUpdatedRowsData();
		for (let i = 0, len = rows.length; i < len; i++) {
			result.push(rows[i]);
		}
		rows = this.tbs_getInsertedRowsData();
		for (let i = 0, len = rows.length; i < len; i++) {
			result.push(rows[i]);
		}
		return result;
	}
	tbs_getDeletedRowsData = function () {
		let rows = this.data_delete;
		let result = [];
		for (let i = 0, len = rows.length; i < len; i++) {
			let row = rows[i];
			let item = JSON.parse(JSON.stringify(row));
			item[grid.code_rowId] = row[grid.code_rowId];
			item[grid.code_mode]  = row[grid.code_mode];
			result.push(item);
		}
		return result;
	}
	tbs_getUpdatedRowsData = function () {
		let rows = this.data_table;
		let result = [];
		for (let i = 0, len = rows.length; i < len; i++) {
			let row = rows[i];
			if (row.mode == 'U') {
				let item = JSON.parse(JSON.stringify(row));
				item[grid.code_rowId] = row[grid.code_rowId];
				item[grid.code_mode] = row[grid.code_mode];
				result.push(item);
			}
		}
		return result;
	}
	tbs_getInsertedRowsData = function () {
		let rows = this.data_table;
		let result = [];
		for (let i = 0, len = rows.length; i < len; i++) {
			let row = rows[i];
			if (row[grid.code_mode] == 'I') {
				let item = JSON.parse(JSON.stringify(row));
				item[this.code_rowId] = row[grid.code_rowId];
				item[this.code_mode ] = row[grid.code_mode];
				result.push(item);
			}
		}
		return result;
	}
	tbs_addRow = function (row, type = 'bottom') {
		//type : top, bottom, up, down
		let selector = '#' + this.gridId;
		let grid = this;

		let columns = this.columns;
		let rowId = this.maxRowId + 1;
		this.maxRowId = rowId;

		let json = this.tbs_createRow(row);
		let source = json.source;
		let data30 = json.data30;

		let rowIndexList = this.tbs_getSelectedRowIndex();
		if (rowIndexList.length == 0) type = 'bottom';

		if (type == 'top') {
			this.data_table.unshift(source);
			this.data_view.unshift(data30);

			let topRowIndex = 0;

			this.verticalScroll.setScroll(grid.code_vertical);
			this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(topRowIndex, topRowIndex);
			this.classPanel30.setDataPanel(topRowIndex);
			return;
		}
		if (type == 'bottom') {
			this.data_table.push(source);
			this.data_view.push(data30);

			let dataLength = this.data_view.length;
			let topRowIndex = this.tbs_getFirstRowIndex();

			topRowIndex = dataLength - this.pageRowCount;
			if (topRowIndex < 0) topRowIndex = 0;
			if (this.pageRowCount > this.pageIntRowCount) {
				topRowIndex = topRowIndex + 1;
			}
			this.verticalScroll.setScroll(grid.code_vertical);
			this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(dataLength - 1, dataLength - 1);
			this.classPanel30.setDataPanel(topRowIndex);
			return;
		}
		if (type == 'up') {
			let minRowIndex = rowIndexList[0];
			this.data_table.splice(minRowIndex, 0, source);
			this.data_view.splice(minRowIndex, 0, data30);
			//this.insertData.push(insertItem);

			let lastRowIndex = this.data_view.length - 1;
			let topRowIndex = this.tbs_getFirstRowIndex();

			this.verticalScroll.setScroll(grid.code_vertical);
			this.classScroll.setBarPosition(grid.code_vertical, topRowIndex);
			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(minRowIndex, minRowIndex);
			this.classPanel30.setDataPanel(_topRowIndex);
			return;
		}
		if (type == 'down') {
			let minRowIndex = rowIndexList[0];
			let addRowIndex = minRowIndex + 1;
			if (minRowIndex == this.data_view.length - 1) {
				this.data_table.push(source);
				this.data_view.push(data30);
				addRowIndex = minRowIndex + 1;
			}
			else {
				this.data_table.splice(addRowIndex, 0, source);
				this.data_view.splice(addRowIndex, 0, data30);
			}

			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
			this.classPanel30.setDataPanel(_topRowIndex);

			if (this.pageRowCount > this.pageIntRowCount) {
				if (addRowIndex == this.tbs_getLastRowIndex()) {
					this.tbs_moveCell('down');

					this.classRange.removeRange(0, -1);
					let _topRowIndex = this.classRange.selectRange(addRowIndex, addRowIndex);
					this.classPanel30.setDataPanel(_topRowIndex);

					this.verticalScroll.setScroll(grid.code_vertical);
					this.classScroll.setBarPosition(grid.code_vertical, grid.tbs_getFirstRowIndex());
				}
			}
		}
	}
	tbs_removeRows = function (rows) {
		// let rows = this.tbs_getSelectedRows();
		let selector = '#' + this.gridId;
		let grid = this;

		if (this.null(rows) || rows.length == 0) return;

		let data = this.data_view;

		// before delete, find next, prev rowid (default. next rowid)
		let prevRowId = -1;
		let nextRowId = -1;
		let nextRowIndex = -1;

		for (let i = 0; i < data.length; i++) { 	// find next rowIndex
			if (data[i][grid.code_rowId] == rows[rows.length - 1][grid.code_rowId]) { nextRowIndex = i + 1; break; }
		}

		nextRowIndex = (nextRowIndex > data.length - 1) ? nextRowIndex - 1 : nextRowIndex;
		nextRowId = data[nextRowIndex][grid.code_rowId];

		//Data 삭제
		data = this.data_table;
		for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][grid.code_rowId] == rows[x][grid.code_rowId]) { data.splice(i, 1); break; } } }

		data = this.data_view;
		for (let i = data.length - 1; i >= 0; i--) {
			for (let x = rows.length - 1; x >= 0; x--) {
				if (data[i][grid.code_rowId] == rows[x][grid.code_rowId]) { data.splice(i, 1); break; }
			}
		}
		data = this.data_delete;
		for (let i = data.length - 1; i >= 0; i--) { for (let x = rows.length - 1; x >= 0; x--) { if (data[i][grid.code_rowId] == rows[x][grid.code_rowId]) { data.splice(i, 1); break; } } }
		for (let i = 0; i < rows.length; i++) {
			if (rows[i][grid.code_mode] == '' || rows[i][grid.code_mode] == 'U') { rows[i][grid.code_mode] = 'D'; data.push(rows[i]); }
		}
		//==============================================
		let deleteFirstRowIndex = rows[0].rowIndex;
		let topRowIndex = this.tbs_getFirstRowIndex();
		//==============================================
		this.tbs_refreshRefData();
		//==============================================
		data = this.data_view;
		let realStartRowIndex = deleteFirstRowIndex;
		if (realStartRowIndex < 0) realStartRowIndex = 0;
		if (realStartRowIndex > this.data_view.length - 1) {
			realStartRowIndex = this.data_view.length - 1;
		}
		grid.verticalScroll.setScroll(grid.code_vertical);
		grid.classRange.removeRange(0, -1);
		let _topRowIndex = grid.classRange.selectRange(realStartRowIndex, realStartRowIndex, 0, 0);
		grid.classPanel30.setDataPanel(_topRowIndex);

		grid.classScroll.setBarPosition(grid.code_vertical, grid.tbs_getFirstRowIndex());

		if (grid.pageRowCount > grid.pageIntRowCount) {
			let lastRowIndex = grid.tbs_getLastRowIndex();
			if (realStartRowIndex == lastRowIndex) {
				grid.classScroll.setBarPositionByDirection('down');
				grid.verticalScroll.setScroll(grid.code_vertical);
				grid.classScroll.setBarPosition(grid.code_vertical, grid.tbs_getFirstRowIndex());

			}
		}
	}

	tbs_getFirstDisplayRowIndex = function (panelName = '') {
		let selector = '#' + this.gridId;
		let grid = this;

		if (this.data_view.length == 0) return -1;

		let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
		let displayRowIndex = parseInt(trList[0].childNodes[0].dataset.displayRowIndex);

		if (isNaN(displayRowIndex)) displayRowIndex = 0;
		return displayRowIndex;
	}
	tbs_getFirstRowIndex = function (panelName = '') {
		// return : topRowIndex
		let selector = '#' + this.gridId;
		let grid = this;

		if (this.data_view.length == 0) return -1;

		let trList = document.querySelectorAll(selector + ' .tbs-grid-panel31 .tbs-grid-table tbody tr');
		let topRowIndex = parseInt(trList[0].childNodes[0].dataset.rowIndex);

		if (panelName == '') {
			if (grid.fixedRowIndex != -1) {
				if (isNaN(topRowIndex)) topRowIndex = grid.fixedRowIndex + 1;
				return topRowIndex;
			}
			else {
				if (isNaN(topRowIndex)) topRowIndex = 0;
				return topRowIndex;
			}
		}
	}
	tbs_getLastRowIndex = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		if (this.data_view.length == 0) return -1;
		let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
		let topRowIndex = this.tbs_getFirstRowIndex();
		return topRowIndex + trList.length - 1;
	}
	tbs_getLastTableRowIndex = function () {
		let selector = '#' + this.gridId;
		let grid = this;

		let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
		return parseInt(trList.length) - 1;
	}
	tbs_getSelectedRowIndex = function() {
		let result = [];
		for (rowIndex = 0, len = this.data_view.length; rowIndex < len; rowIndex++) {
			if (this.tbs_isSelectedCell31(rowIndex, 0) == 1) result.push(rowIndex);
		}
		return result;
	}

	tbs_removeRow = function (rowToDelete) {
		let selector = '#' + this.gridId;
		let grid = this;
		grid.tbs_removeRowInPanel30(rowToDelete);
		//grid.tbs_removeRowInPanel31(rowToDelete);
		grid.tbs_removeRowInSource(rowToDelete);
		grid.data_select_panel30 = [];
		grid.data_select_panel31 = [];
	}
	tbs_removeRowInPanel30 = function (rowToDelete) {
		let selector = '#' + this.gridId;
		let grid = this;

		let dataRows= grid.data_view;
		for (let i= 0, len= dataRows.length; i < len; i++) {
			let dataRow = dataRows[i];
			if (rowToDelete[grid.code_rowId] == dataRow[grid.code_rowId]) {
				dataRows.splice(i, 1);
				break;
			}
		}
	}
	tbs_removeRowInSource = function (rowToDelete) {
		let selector = '#' + this.gridId;
		let grid = this;

		let dataRows= grid.data_table;
		for (let i= 0, len= dataRows.length; i < len; i++) {
			let dataRow = dataRows[i];
			if (rowToDelete[grid.code_rowId] == dataRow[grid.code_rowId]) {
				dataRows.splice(i, 1);
				break;
			}
		}
	}
	tbs_setComboData = function (keyName, valueName, comboData) {
		let selector = '#' + this.gridId;
		let grid = this;

		let item = {};
		item['key']  = keyName;
		item['val']  = valueName;
		item['data'] = comboData;
		return item;
	}

	/**
	 * Event Functions
	 *
	 */
	tbs_addEventAll = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		this.classPanel20.panel21_select();
		this.classPanel20.panel20_select('panel20');
		this.classPanel20.panel20_select('panel22');

		this.classPanel30.panel30_select('panel30');
		this.classPanel30.panel31_select('panel31');
		this.classPanel30.panel30_select('panel32');

		this.classPanel40.panel40_select('panel40');
		this.classPanel40.panel41_select('panel41');
		this.classPanel40.panel40_select('panel42');

		this.classPanel40.panel40_select('panel50');
		this.classPanel40.panel41_select('panel51');
		this.classPanel40.panel40_select('panel52');

		this.classPanel70.panel70_select('panel70');
		this.classPanel70.panel70_select('panel72');
		// this.classPanel80.panel80_select();
		// this.classPanel90.panel90_select();

		//================================================================== select event
		this.event_wheel();

		this.event_scrollButton();
		this.event_railClick();
		this.event_dragScrollBar();

		this.event_columnResize('panel20');
		this.event_columnResize('panel22');
		//================================================================== select event
		this.event_input();
		this.event_input_icon();
		this.event_checkBox();



		this.event_mobileTouchDrag();

		document.addEventListener('scroll', function(e) {
			let panelInputList = document.querySelectorAll(selector + ' .tbs-grid-panel-input');
			let inputList = document.querySelectorAll(selector + ' .tbs-grid-input');
			let inputIconList = document.querySelectorAll(selector + ' .tbs-grid-panel-input-icon');
			let inputPanelList = document.querySelectorAll(selector + ' .tbs-grid-input-panel');

			for (let i = 0; i < inputList.length; i++) {
				let panelInput = panelInputList[i];
				let input      = inputList[i];
				let input_icon = inputIconList[i];
				let input_panel= inputPanelList[i];
				input.value = '';

				panelInput.style.left = '30000px';
				panelInput.style.width= '0px';

				input.dataset.rowIndex = -1;
				input.dataset.cellIndex = -1;
				input.dataset.mode = '';
				input.dataset.type = '';

				input_icon.style.display = 'none';
				input_icon.dataset.rowIndex = -1;
				input_icon.dataset.cellIndex = -1;
				input_icon.dataset.mode = '';
				input_icon.dataset.type = '';

				input_panel.innerHTML = '';
				input_panel.style.width = '0px';
				input_panel.style.left = '30000px';
				input_panel.dataset.rowIndex = -1;
				input_panel.dataset.cellIndex = -1;
				input_panel.dataset.mode = '';
				input_panel.dataset.type = '';

			}
		});

		// @deprecated
		// const bodyMouseDownEvent = function(e) {
		//     let name = e.target.className;
		//     //console.log('body: ' + name)
		//     if (name.indexOf('tbs-grid-panel10-filter-input') == -1
		//         && name.indexOf('tbs-grid-cell-filter-input') == -1
		//         && name.indexOf('tbs-grid-input') == -1
		//         && name.indexOf('tbs-grid-cell-filter-input') == -1
		//         && name.indexOf('tbs-grid-cell-filter-combo') == -1
		//         && (name.indexOf('tbs-grid-date') == -1 && name.indexOf('tbs-grid-combo') == -1)) {
		//         let input = document.querySelector(selector + ' .tbs-grid-input');
		//     }
		// };
		// document.body.addEventListener('mousedown', bodyMouseDownEvent);

		const mouseDownGridEvent = function(e) {

			let name = e.target.className;
			//console.log('gird: ' + name)
			e.stopPropagation();
			if (   name.indexOf('tbs-grid-panel10-filter-input') != -1
				|| name.indexOf('tbs-grid-cell-filter-input' ) != -1
				|| name.indexOf('tbs-grid-layer'             ) != -1
				|| name.indexOf('tbs-grid-cell-filter-input' ) != -1
				|| name.indexOf('tbs-grid-cell-filter-combo' ) != -1) {}
			else {
				document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
				document.querySelector(selector + ' .tbs-grid-layer').style.height = '0px';
				document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
				document.querySelector(selector + ' .tbs-grid-layer').style.display = 'none';
				// document.querySelector(selector + ' .tbs-grid-input').focus();
				grid.input_focus();
			}
		}
		document.querySelector(selector).addEventListener('mousedown', mouseDownGridEvent);

		const windowResizeEvent = function(e) {
			setTimeout(() => { grid.tbs_apply(); }, 200);
		}
		window.addEventListener('resize', windowResizeEvent, true);
	}
	event_columnSort = function(cell) {
		let selector = '#' + this.gridId;
		let grid = this;

		let column = grid.classColumn.getColumn(cell.dataset.name);
		let columnName = cell.dataset.name;
		// * sort(▼), (▲), (■) order
		if (cell == undefined) return false;

		let isSortable = grid.tbs_isSortableColumn(cell.dataset.name);
		if (!isSortable) return false;

		//let sortDiv = cell.querySelector('.tbs-grid-cell-span-sort');
		let curSortKind = '';
		let sortKind = '';
		if (grid.tbs_isSortColumnName(columnName)) {
			let sortColumn = grid.classSort.getSortColumn(columnName);
			curSortKind = sortColumn[grid.column_order];
		}
		else {
			curSortKind = '';
		}
		if      (curSortKind == 'desc') { sortKind = ''; }
		else if (curSortKind == 'asc') { sortKind = 'desc'; }
		else    sortKind = 'asc';

		// if      (sortDiv.textContent == '▼') { sortKind = ''; }
		// else if (sortDiv.textContent == '▲') { sortKind = 'desc'; }
		// else                                 { sortKind = 'asc'; }

		// let divList = document.querySelectorAll(selector + ' .tbs-grid-panel20 .tbs-grid-table .tbs-grid-cell-span-sort');
		// for (let i = 0; i < divList.length; i++) {
		//         divList[i].textContent = '';
		// }
		// let sortDiv = cell.querySelector('.tbs-grid-cell-span-sort');
		// if (grid.notNull(sortDiv)) {
		//     if      (sortKind == 'asc' ) { sortDiv.textContent = '▲'; }
		//     else if (sortKind == 'desc') { sortDiv.textContent = '▼'; }
		//     else                         { sortDiv.textContent = '' ; }
		// }
		//grid.classSort.sortColumns = [];
		if (grid.tbs_isSortColumnName(columnName)) {
			let sortColumn = grid.classSort.getSortColumn(columnName);
			sortColumn[grid.column_order] = sortKind
		}
		else {
			let item = {};
			item[grid.column_name] = columnName;
			item[grid.column_order]= sortKind;
			grid.classSort.sortColumns.push(item);
		}

		// if (sortKind != ''){
		//     let item = {};
		//     item[grid.column_name] = columnName;
		//     item.order = sortKind;
		//     grid.classSort.sortColumns.push(item);
		// }

		// for (let i = grid.classSort.sortColumns.length - 1; i >= 0; i--){
		//     if (grid.classSort.sortColumns[i]['order'] == '') {
		//         grid.classSort.sortColumns.splice(i, 1);
		//     }
		// }
		if (grid.classSort.sortColumns.length == 0) { grid.classSort.initSortData(); }

		if (grid.options[grid.option_showFilterPanel]) grid.classFilter.filters();

		grid.classSort.getSortButtonList();

		if (grid.grid_mode == grid.code_group || grid.grid_mode == grid.code_tree) {
			grid.tbs_setData(grid.data_view, null, false);
		}
		else {
			if (grid.tbs_isSortableColumn()) {
				grid.classSort.setSortData(grid.data_view, grid.classSort.sortColumns);
				grid.classRange.removeRange(0, -1);
				grid.tbs_apply();
			}
		}
	}
	event_mobileTouchDrag = function() { //type : header, content
		let selector = '#' + this.gridId;
		let grid = this;

		let startRowIndex, startCellIndex;
		let lastRowIndex , lastCellIndex;

		let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let xPos = { left: 0, x : 0 }
		let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
		let yPos = { top: 0, y : 0 }
		let actveTopRowIndex = -1;
		const touchStartEvent = function(e) {
			e.preventDefault();
			document.body.style.overflow = 'hidden';
			actveTopRowIndex = -1;

			let col;
			if (e.target.tagName == 'DIV')  { col = e.target.parentNode; }
			else if (e.target.tagName == 'SPAN')  { col = e.target.parentNode.parentNode; }
			else { col = e.target; }
			let rowIndex = grid.classColumn.getRowIndexInTable(col.parentNode.rowIndex)
			//grid.classRange.removeRange(0, -1);
			//let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, col.cellIndex, col.cellIndex);
			yPos.top = Number(yBar.style.top.replace('px', ''));
			yPos.y = e.changedTouches[0].clientY;

			xPos.left = Number(xBar.style.left.replace('px', ''));
			xPos.x = e.changedTouches[0].clientX;

			document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchmove', touchMoveEvent);
			document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchend', touchEndEvent);
		}
		const touchMoveEvent = function(e) {
			//e.stopPropagation();
			let xMove = e.changedTouches[0].clientX - xPos.x;
			let yMove = e.changedTouches[0].clientY - yPos.y;;

			if (Math.abs(xMove) > Math.abs(yMove)) {
				let left = xPos.left - xMove;
				let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
				if (left < 0) left = 0;
				if (left > xRailWidth) left = xRailWidth;
				xBar.style.left = left.toString() + 'px';

				let header  = document.querySelector(selector + ' .tbs-grid-panel20');
				let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
				let nLeft = (left * -1 * ratio).toString();
				grid.classScroll.setContentPanelLeft(nLeft);
				//grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
				grid.tbs_apply();
			}
			else if (Math.abs(xMove) < Math.abs(yMove)) {
				let yBarTop = yPos.top - yMove;
				if (yBarTop < 0) yBarTop = 0;
				if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

				let displayTopRowIndex = Math.floor(yBarTop * grid.verticalScroll.moveCount);
				actveTopRowIndex = displayTopRowIndex;

				let topRowIndex = displayTopRowIndex;
				if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

				//console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
				setTimeout(function(){ grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
				setTimeout(function(){ grid.classPanel30.setDataPanel(topRowIndex);}, 5);
			}
		}
		const touchEndEvent = function(e) {
			//e.stopPropagation();
			let xMove = e.changedTouches[0].clientX - xPos.x;
			let yMove = e.changedTouches[0].clientY - yPos.y;

			let tableCell;

			if      (e.target.classList.contains('tbs-grid-cell-div-icon')) { targetName = 'icon'; tableCell = e.target.parentNode.parentNode; }
			else if (e.target.classList.contains('tbs-grid-cell-div-img'))  { targetName = 'img' ; tableCell = e.target.parentNode.parentNode; }
			else if (e.target.classList.contains('tbs-grid-cell-div-text')) { targetName = 'text'; tableCell = e.target.parentNode.parentNode; }
			else if (e.target.classList.contains('tbs-grid-cell-div'))      { targetName = 'div' ; tableCell = e.target.parentNode; }
			else if (e.target.classList.contains('tbs-grid-cell'))          { targetName = 'cell'; tableCell = e.target; }
			let eventPanelName  = 'panel30';
			startCellIndex = tableCell.cellIndex;
			lastCellIndex  = startCellIndex;
			startRowIndex  = grid.classColumn.getRowIndexInTable(tableCell.parentNode.rowIndex, eventPanelName);
			lastRowIndex   = startRowIndex;

			if  (Math.abs(xMove) < 5 && Math.abs(yMove) < 5)  {
				grid.classRange.removeRange(0, -1, 0, -1);
				let _topRowIndex = grid.classRange.selectRange(startRowIndex, startRowIndex, startCellIndex, lastCellIndex);
				grid.tbs_apply();
			}

			document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchmove', touchMoveEvent);
			document.querySelector(selector + ' .tbs-grid-panel30').removeEventListener('touchend', touchEndEvent);
			document.body.style.overflow = 'auto';
		}
		document.querySelector(selector + ' .tbs-grid-panel30').addEventListener('touchstart', touchStartEvent, false);
	}
	event_columnResize = function(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;
		const createResizableColumn = function (tableCell, resizer) {
			let startX     = 0; // mouse start x position
			let movedWidth = 0; // moved width
			let cellWidth  = 0; // header cell width
			let tableWidth = 0;

			let initWidth = [];
			let childList = [];

			let eventDetail = 0; // 1 : click (resize), 2 : dblclick(auto resize)
			const mouseDownEvent = function (e) {
				eventDetail = e.detail;
				if (eventDetail == 1) {
					e.stopPropagation();
					// if (grid.options[grid.option_resizable] == false) return;

					let isResizable = grid.tbs_isResizableColumn(tableCell.dataset.name);
					if (!isResizable) return;

					startX =  window.pageXOffset + e.clientX;

					const style = window.getComputedStyle(tableCell);
					cellWidth = parseInt(style.width, 10);
					tableWidth = parseInt(document.querySelector(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table').getBoundingClientRect().width);

					resizer.classList.add('.tbs-grid-cell-resizing');

					if (tableCell.dataset.name == '') {
						let cellIndex = tableCell.cellIndex;
						let lastCellIndex = cellIndex + tableCell.colSpan;

						childList = [];
						initWidth = [];

						let thCells = document.querySelectorAll(selector  + ' .tbs-grid-' + panelName + ' .tbs-grid-table thead th');
						for (let i = cellIndex; i < lastCellIndex; i++) {
							let thCell= thCells[i];
							let width = parseInt(thCell.style.width, 10);
							childList.push(i);     // cell index
							initWidth.push(width); // cell width
						}
					}
					document.addEventListener('mousemove', mouseMoveEvent);
					document.addEventListener('mouseup', mouseUpEvent);
				}
				else if (eventDetail == 2){
					e.stopPropagation();
					if (grid.tbs_isClassName(e.target, 'tbs-grid-cell-resize') != true) return;

					let cell = e.target.parentElement;
					let columnName = grid.classColumn.getColumnName(cell.cellIndex);

					let isAutoResizable = grid.tbs_isAutoResizableColumn(columnName);
					if (isAutoResizable != true) return;

					let colIndex   = cell.cellIndex + parseInt(cell.colSpan) - 1;
					let column     = grid.classColumn.getColumn(columnName);
					let firstWidth = parseInt(column[grid.column_width]);
					let maxWidth  = 0;

					let canvas = document.querySelector(selector + ' .tbs-grid-canvas').childNodes[0];

					let fontSize = grid.getConfigFont('fontSize');
					let fontFamilty = grid.getConfigFont('fontFamily');

					for (let i = 0, len = grid.headerColumnTable.length; i < len; i++){
						let headerColumn = grid.headerColumnTable[i];
						if (headerColumn[colIndex][grid.column_kind] == 'column') {
							let width = parseInt(grid.getTextWidth(canvas, headerColumn[colIndex][grid.column_text], fontSize, fontFamilty));
							if (width >= maxWidth) maxWidth = width;
						}
					}
					for (let i = 0, len = grid.data_view.length; i < len; i++) {
						//let width = parseInt(grid.getTextWidth(canvas, grid.data_view[i].layout[columnName][grid.layout_text], fontSize, fontFamilty));
						let val = grid.tbs_getText(i, columnName);
						let width = parseInt(grid.getTextWidth(canvas, val, fontSize, fontFamilty));
						if (width >= maxWidth) maxWidth = width;
					}
					grid.classScroll.setColumnWidth(panelName, colIndex, maxWidth + 20); // 20 is Correction value
					grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
				}
			};
			//eventColumnResize
			const mouseMoveEvent = function (e) {
				if (eventDetail == 1) {
					e.stopPropagation();
					if (panelName == 'panel22') {
						movedWidth = e.clientX - startX;

						if (tableCell.dataset.name == '') {
							let count = childList.length;
							let moveWidth = parseInt(movedWidth/count);
							for (let i = 0, len = childList.length; i < len; i++) {
								let cellIndex = childList[i];
								let nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';

								grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
							}
							grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
						}
						else {
							let cellIndex = tableCell.cellIndex;
							let nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';

							grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
							grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
						}
					}
					else if (panelName == 'panel20') {
						movedWidth = e.clientX - startX;

						if (tableCell.dataset.name == '') {
							let count = childList.length;
							let moveWidth = parseInt(movedWidth/count);
							for (let i = 0, len = childList.length; i < len; i++) {
								let cellIndex = childList[i];
								let nWidth = (initWidth[i] + moveWidth) < 10 ? 10 : (initWidth[i] + moveWidth) + 'px';

								grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
							}
							grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
						}
						else {
							let cellIndex = tableCell.cellIndex;
							let nWidth = ((cellWidth + movedWidth) < 10 ? 10 : (cellWidth + movedWidth)) + 'px';

							grid.classScroll.setColumnWidth(panelName, cellIndex, nWidth);
							grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
						}
					}
				}
			};
			//eventColumnResize
			const mouseUpEvent = function (e) {
				if (eventDetail == 1){
					e.stopPropagation();
					resizer.classList.remove('.tbs-grid-cell-resizing');
					document.removeEventListener('mousemove', mouseMoveEvent);
					document.removeEventListener('mouseup', mouseUpEvent);
				}
			};
			resizer.addEventListener('mousedown', mouseDownEvent, false);
		};
		const tablesCells = document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table td');
		[].forEach.call(tablesCells, function (tableCell) {
			let resizer = tableCell.querySelector('.tbs-grid-cell-resize');
			if (resizer) createResizableColumn(tableCell, resizer);
		});
	}
	event_checkBox = function() { //type : header, content
		let selector = '#' + this.gridId;
		let grid = this;
		const checkDowntEvent = function(e) {
			if (e.target.tagName == 'INPUT') {
				let tr = e.target.parentNode.parentNode.parentNode;
				let rowIndex = parseInt(tr.childNodes[0].childNodes[0].textContent) - 1;
				if (e.target.checked) grid.data_view[rowIndex].check = false;
				else grid.data_view[rowIndex].check = true;
			}
		}
		document.querySelector(selector + ' .tbs-grid-panel31 .tbs-grid-table').addEventListener('mousedown', checkDowntEvent, false);
	}
	tbs_moveCellLine = function(cell, rowIndex, cellIndex) {
		let selector = '#' + this.gridId;
		let grid = this;

		let input = document.querySelector(selector + ' .tbs-grid-input');
		let cellRect = cell.getBoundingClientRect();
		let content = document.querySelector(selector + ' .tbs-grid-panel30');
		let contentRect = content.getBoundingClientRect();
		let table = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');
		//let tableRect = table.getBoundingClientRect();

		if (cellRect.left < contentRect.left) {
			grid.value = contentRect.left - cellRect.left;
			grid.classScroll.setContentPanelLeftMove(value);
			grid.classScroll.setBarPosition(grid.code_horizontal);
		}
		else if (cellRect.right > contentRect.right) {
			let value = contentRect.right - cellRect.right;
			grid.classScroll.setContentPanelLeftMove(value);
			grid.classScroll.setBarPosition(grid.code_horizontal);
		}
		grid.classRange.removeRange(0, -1);
		let _topRowIndex = grid.classRange.selectRange(rowIndex, rowIndex, cellIndex, cellIndex);
		grid.classPanel30.setDataPanel(_topRowIndex);
	}
	tbs_clickPageFirst = function (e, grid, pageIndex, selectedPageCount, userFunction) {
		let val = userFunction(e, grid, pageIndex, selectedPageCount);
		return val;
	}
	tbs_clickPagePrev = function (e, grid, pageIndex, selectedPageCount, userFunction) {
		let val = userFunction(e, grid, pageIndex, selectedPageCount);
		return val;
	}
	tbs_clickPageIndex = function (e, grid, pageIndex, selectedPageCount, userFunction) {
		let val = userFunction(e, grid, pageIndex, selectedPageCount);
		return val;
	}
	tbs_clickPageNext = function (e, grid, pageIndex, selectedPageCount, userFunction) {
		let val = userFunction(e, grid, pageIndex, selectedPageCount);
		return val;
	}
	tbs_clickPageLast = function (e, grid, pageIndex, selectedPageCount, userFunction) {
		let val = userFunction(e, grid, pageIndex, selectedPageCount);
		return val;
	}
	tbs_isMovedPositionInConstRange = function(startX, startY, lastX, lastY) {
		let movedX = Math.abs(startX - lastX);
		let movedY = Math.abs(startY - lastY);
		return (movedX < this.grid_mousePointRange && movedY < this.grid_mousePointRange);
	}
	tbs_executeEvent = function(isUserFunction, eventType, param) {
		let selector = '#' + this.gridId;
		let grid = this;

		let e = null;
		let mode = null;
		let rowIndex = null;
		let cellIndex = null;
		let element = null;

		if (eventType == 'rowBounding') {
			element = param.element;
			rowIndex = param.rowIndex;

			let eventRow = {};
			eventRow.rowIndex    = rowIndex;
			eventRow.data        = grid.tbs_getRow(rowIndex);

			if (grid.notNull(grid.user_rowBounding)) { let flag = grid.tbs_rowBounding(grid, element, eventRow, grid.user_rowBounding); } //user function call
		}
		else if (eventType == 'cellBounding') {
			element = param.element;

			rowIndex = param.rowIndex;
			cellIndex = param.cellIndex;

			let column = grid.classColumn.getColumnByIndex(cellIndex);
			let columnName = grid.classColumn.getColumnName(cellIndex);
			let value = grid.tbs_getValue(rowIndex, columnName);
			let text  = grid.tbs_getText(rowIndex, columnName);

			let eventRow = {};
			eventRow.rowIndex    = rowIndex;
			eventRow.columnIndex = cellIndex;
			eventRow.columnName  = columnName;
			eventRow.value       = value;
			eventRow.text        = text;
			eventRow.data        = grid.tbs_getRow(rowIndex);
			if (grid.notNull(grid.user_cellBounding)) { let flag = grid.tbs_cellBounding(grid, element, eventRow, grid.user_cellBounding); } //user function call
		}
		else if (eventType == 'click' || eventType == 'dblclick') {
			e = param.e;
			mode = param.mode; //mouse, key
			rowIndex = param.rowIndex;
			cellIndex = param.cellIndex;

			let column = grid.classColumn.getColumnByIndex(cellIndex);
			let columnName = grid.classColumn.getColumnName(cellIndex);
			let value = grid.tbs_getValue(rowIndex, columnName);
			let text  = grid.tbs_getText(rowIndex, columnName);

			let eventRow = {};
			eventRow.rowIndex    = rowIndex;
			eventRow.columnIndex = cellIndex;
			eventRow.columnName  = columnName;
			eventRow.value       = value;
			eventRow.text        = text;
			eventRow.data        = grid.tbs_getRow(rowIndex);
			if (eventType == 'click') {
				if (grid.notNull(grid.user_click)) { let flag = grid.tbs_click(e, grid, eventRow, grid.user_click); } //user function call
			}
			else if (eventType == 'dblclick') {
				if (grid.notNull(grid.user_dblclick)) { let flag = grid.tbs_dblclick(e, grid, eventRow, grid.user_dblclick); } //user function call
			}
		}
	}
	tbs_getMaxRowIndexByMouseMove = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let maxRowIndex;
		const rowIndexArray = [];
		let num;
		if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxRowIndex = Math.max(...rowIndexArray);
		}
		else if (grid.fixedRowIndex != -1) {
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxRowIndex = Math.max(...rowIndexArray);
		}
		else if (grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxRowIndex = Math.max(...rowIndexArray);
		} else {
			maxRowIndex = grid.tbs_getMaxRowIndexByMouseMove2('panel30');
		}
		return maxRowIndex;
	}
	tbs_getMinRowIndexByMouseMove = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let minRowIndex;
		const rowIndexArray = [];
		let num;
		if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMinRowIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

			minRowIndex = Math.min(...rowIndexArray);
		}
		else if (grid.fixedRowIndex != -1) {
			num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinRowIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			minRowIndex = Math.min(...rowIndexArray);
		}
		else if (grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMinRowIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinRowIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			minRowIndex = Math.min(...rowIndexArray);
		} else {
			minRowIndex = grid.tbs_getMinRowIndexByMouseMove2('panel30');
		}
		return minRowIndex;
	}
	tbs_getMaxCellIndexByMouseMove = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let maxCellIndex, num;
		const rowIndexArray = [];
		if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxCellIndex = Math.max(...rowIndexArray);
		}
		else if (grid.fixedRowIndex != -1) {
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxCellIndex = Math.max(...rowIndexArray);
		}
		else if (grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMaxCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			maxCellIndex = Math.max(...rowIndexArray);
		} else {
			maxCellIndex = grid.tbs_getMaxCellIndexByMouseMove2('panel30');
		}
		return maxCellIndex;
	}
	tbs_getMinCellIndexByMouseMove = function() {
		let selector = '#' + this.gridId;
		let grid = this;

		let minCellIndex;
		const rowIndexArray = [];
		if (grid.fixedRowIndex != -1 && grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMinCellIndexByMouseMove2('panel62'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);

			minCellIndex = Math.min(...rowIndexArray);
		}
		else if (grid.fixedRowIndex != -1) {
			num = grid.tbs_getMinCellIndexByMouseMove2('panel60'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			minCellIndex = Math.min(...rowIndexArray);
		}
		else if (grid.fixedColumnIndex != -1) {
			num = grid.tbs_getMinCellIndexByMouseMove2('panel30'); if (num != undefined) rowIndexArray.push(num);
			num = grid.tbs_getMinCellIndexByMouseMove2('panel32'); if (num != undefined) rowIndexArray.push(num);
			minCellIndex = Math.min(...rowIndexArray);
		} else {
			minCellIndex = grid.tbs_getMinCellIndexByMouseMove2('panel30');
		}
		return minCellIndex;
	}
	tbs_getMaxRowIndexByMouseMove2 = function(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let lastY = this.lastY;
		let maxRowIndex;

		let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
		let len = (tableRows) ? tableRows.length : 0;

		let startRowIndex, lastRowIndex;
		if (grid.fixedRowIndex != -1) {
			if (panelName == 'panel60') {
				startRowIndex = 0;
				lastRowIndex = this.fixedRowIndex;
			}
			else if (panelName == 'panel30') {
				startRowIndex = 0;
				lastRowIndex = len - 1;
			}
		}
		else {
			startRowIndex = 0;
			lastRowIndex = len - 1;
		}

		for (let i= startRowIndex; i < lastRowIndex + 1; i++) {
			let tableRow = tableRows[i];
			let tableRowIndex = i + 1;
			let rect = grid.tbs_getOffset(tableRow);
			let top = rect.top;
			if (lastY > top) maxRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);
		}
		return maxRowIndex;
	}
	tbs_getMinRowIndexByMouseMove2 = function(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let lastY = this.lastY;
		let minRowIndex;

		let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
		let len = (tableRows) ? tableRows.length : 0;

		let startRowIndex, lastRowIndex;
		if (grid.fixedRowIndex != -1) {
			if (panelName == 'panel60') {
				startRowIndex = 0;
				lastRowIndex = this.fixedRowIndex;
			}
			else if (panelName == 'panel30') {
				startRowIndex = 0;
				lastRowIndex = len - 1;
			}
		}
		else {
			startRowIndex = 0;
			lastRowIndex = len - 1;
		}
		for (let i = lastRowIndex; i >= startRowIndex; i--) {
			let tableRow = tableRows[i];
			let tableRowIndex = i + 1;
			let rect = grid.tbs_getOffset(tableRow);
			//console.log(`${panelName} i ${i} : rect.top ${rect.top} lastRowIndex ${lastRowIndex} : minRowIndex ${minRowIndex}  : lastY  ${this.lastY}`);
			let bottom = rect.top + tableRow.getBoundingClientRect().height;
			if (lastY < bottom) minRowIndex = grid.classColumn.getRowIndexInTable(tableRowIndex, panelName);

		}
		return minRowIndex;
	}
	tbs_getMaxCellIndexByMouseMove2 = function(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let lastX = this.lastX;
		let maxCellIndex;
		let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
		let tableRow = tableRows[0];
		let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;

		let startColumnIndex, lastColumnIndex;
		if (grid.fixedColumnIndex != -1) {
			if (panelName == 'panel32') {
				startColumnIndex = 0;
				lastColumnIndex = this.fixedColumnIndex + 1;
			}
			else if (panelName == 'panel30') {
				startColumnIndex = this.fixedColumnIndex + 1;
				lastColumnIndex = len;
			}
		}
		else {
			startColumnIndex = 0;
			lastColumnIndex = len;
		}
		for (let x = startColumnIndex; x < lastColumnIndex; x++) {
			let tableCell = tableRow.childNodes[x];
			let column = grid.columns[x];
			if (column[grid.column_visible] == false) continue;
			let rect = grid.tbs_getOffset(tableCell);
			let rectLeft = rect.left;
			//console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : maxCellIndex ${maxCellIndex} : rect.left  ${rect.left} : rectRight ${rectLeft} : lastX  ${this.lastX}`);
			if (lastX > rectLeft) maxCellIndex = tableCell.cellIndex;
		}
		return maxCellIndex
	}
	tbs_getMinCellIndexByMouseMove2 = function(panelName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let lastX = this.lastX;
		let minCellIndex;

		let tableRows= document.querySelectorAll(selector + ' .tbs-grid-' + panelName + ' .tbs-grid-table tbody tr:not([style*="display: none"])');
		let tableRow = tableRows[0];
		let len = (tableRow && tableRow.childNodes) ? tableRow.childNodes.length : 0;
		let startColumnIndex, lastColumnIndex;
		if (grid.fixedColumnIndex != -1) {
			if (panelName == 'panel32') {
				startColumnIndex = 0;
				lastColumnIndex = this.fixedColumnIndex;
			}
			else if (panelName == 'panel30') {
				startColumnIndex = this.fixedColumnIndex + 1;
				lastColumnIndex = len - 1;
			}
		}
		else {
			startColumnIndex = 0;
			lastColumnIndex = len - 1;
		}
		for (let x = lastColumnIndex; x >= startColumnIndex; x--) {
			let tableCell = tableRow.childNodes[x];
			let column = grid.columns[x];
			if (column[grid.column_visible] == false) continue;
			let rect = grid.tbs_getOffset(tableCell);
			let rectRight= rect.left + tableCell.getBoundingClientRect().width;
			//console.log(`${panelName} : tableCell.cellIndex  ${tableCell.cellIndex} : minCellIndex ${minCellIndex} : rect.left  ${rect.left} : rectRight ${rectRight} : lastX  ${this.lastX}`);
			if (lastX < rectRight) minCellIndex = tableCell.cellIndex;
		}
		return minCellIndex;
	}
	tbs_getOffset = function(el) {
		let _x = 0;
		let _y = 0;
		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
			_x += el.offsetLeft - el.scrollLeft;
			_y += el.offsetTop - el.scrollTop;
			el = el.offsetParent;
		}
		return { top: _y, left: _x };
	}
	tbs_moveNextRowCell = function (type) {
		//tbs_moveNextRowCell: none use => need to improve
		//type : left, right, up, down
		let selector = '#' + this.gridId;
		let grid = this;

		let rowIndex = -1;
		let cellIndex = -1;
		let trList = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display:"])');
		let td = document.querySelector(selector + ' .tbs-grid-cell-start');
		if (td == null) return;
		let tableRowIndex = parseInt(td.parentNode.rowIndex);
		let dataRowIndex = this.classColumn.getRowIndexInTable(tableRowIndex);

		cellIndex = td.cellIndex;
		if (cellIndex == this.columns.length - 1 && dataRowIndex < this.data_view.length - 1) {
			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(dataRowIndex + 1, dataRowIndex + 1, 0, 0);
			this.classPanel30.setDataPanel(_topRowIndex);

			let topRowIndex = this.tbs_getFirstRowIndex();
			let lastRowIndex = this.tbs_getLastRowIndex();

			let movedLeft = grid.classScroll.getContentPanelLeft(0);
			grid.classScroll.setContentPanelLeft(movedLeft);

			if (dataRowIndex == lastRowIndex - 1) this.classPanel30.setDataPanel(topRowIndex + 1);

			let input = document.querySelector(selector + ' .tbs-grid-input');
			this.input_focus();
		}
		else {
			this.tbs_moveCell(type);
			let topRowIndex = this.tbs_getFirstRowIndex();

			let movedLeft = grid.classScroll.getContentPanelLeft(0);
			grid.classScroll.setContentPanelLeft(movedLeft);

			grid.classScroll.setBarPosition(grid.code_vertical, topRowIndex);

			let input = document.querySelector(selector + ' .tbs-grid-input');
			this.input_focus();
		}
	}
	tbs_moveCell = function (type) { //type : left, right, up, down
		let selector = '#' + this.gridId;
		let grid = this;

		let cellIndex = -1;

		let tableRows     = document.querySelectorAll(selector + ' .tbs-grid-panel30 .tbs-grid-table tbody tr:not([style*="display: none"])');
		let tableRowIndex, dataRowIndex;

		let tableCell = document.querySelector(selector + ' .tbs-grid-cell-start');
		if (grid.null(tableCell)) return;

		tableRowIndex = parseInt(tableCell.parentNode.rowIndex);
		dataRowIndex =  parseInt(tableCell.parentNode.dataset.rowIndex); //dataRowIndex
		cellIndex = tableCell.cellIndex;

		if (type == 'left') {
			let startCellIndex = cellIndex;
			cellIndex = cellIndex - 1;
			for (let i = cellIndex; i >= 0; i--) {
				let column = this.columns[i];
				if (column[grid.column_visible] == false) cellIndex -= 1;
				else break;
			}
			if (cellIndex < 0 || this.columns[cellIndex][grid.column_visible] == false) {
				grid.classRange.removeRange(0, -1);
				let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, startCellIndex, startCellIndex);
				grid.classPanel30.setDataPanel(_topRowIndex);
				return;
			}

			let tableRow = tableRows[tableRowIndex - 1];
			let left1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().left;

			let divContent = document.querySelector(selector + ' .tbs-grid-panel30');
			let left2 = window.pageYOffset + divContent.getBoundingClientRect().left;

			if (left1 < left2) {
				let moveWidth= left2 - left1;
				let table20  = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
				let table30  = document.querySelector(selector + ' .tbs-grid-panel30 .tbs-grid-table');

				let hiddenSize = this.horizontalScroll.hiddenSize;
				let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
				let sLeft;
				if (curLeft - moveWidth < 0) sLeft = 0 + 'px';
				else sLeft = -1 * curLeft + moveWidth + 'px';

				grid.classScroll.setContentPanelLeft(sLeft);
				grid.classScroll.setBarPosition(grid.code_horizontal);
			}
			grid.classRange.removeRange(0, -1);
			let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
			grid.classPanel30.setDataPanel(_topRowIndex);
		}
		else if (type == 'right') {
			let startCellIndex = cellIndex;
			cellIndex = cellIndex + 1;
			for (let i = cellIndex, len = this.columns.length; i < len; i++){
				let column = this.columns[i]
				if (column[grid.column_visible] == false) cellIndex += 1;
				else break;
			}
			if (cellIndex >= this.columns.length) cellIndex = startCellIndex;

			let tableRow = tableRows[tableRowIndex - 1];
			let right1 = window.pageYOffset + tableRow.childNodes[cellIndex].getBoundingClientRect().right;

			let panel30= document.querySelector(selector + ' .tbs-grid-panel30');
			let right2 = window.pageYOffset + panel30.getBoundingClientRect().right;

			if (right1 > right2) {
				let moveWidth = right1 - right2;
				let table20 = document.querySelector(selector + ' .tbs-grid-panel20 .tbs-grid-table');
				let hiddenSize = this.horizontalScroll.hiddenSize;
				let curLeft = Math.abs(parseInt(table20.style.left.replace('px', '')));
				let sLeft;
				if (curLeft + moveWidth > hiddenSize) sLeft = -1 * hiddenSize + 'px';
				else sLeft = table20.style.left.replace('px', '') - moveWidth + 'px';

				grid.classScroll.setContentPanelLeft(sLeft);
				grid.classScroll.setBarPosition(grid.code_horizontal);
			}
			this.classRange.removeRange(0, -1);
			let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
			this.classPanel30.setDataPanel(_topRowIndex);
		}
		else if (type == 'up') {
			if (this.fixedRowIndex != -1) {
				dataRowIndex -= 1;
				let topRowIndex = this.tbs_getFirstRowIndex();
				if (dataRowIndex <= this.fixedRowIndex) topRowIndex = this.fixedRowIndex + 1;

				if (topRowIndex  < 0) topRowIndex = 0;
				if (dataRowIndex < 0) dataRowIndex = 0;

				if (dataRowIndex >= topRowIndex) { //OK
					this.classRange.removeRange(0, -1);
					let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
					this.classPanel30.setDataPanel(_topRowIndex);
				}
				else if (dataRowIndex < topRowIndex && dataRowIndex == topRowIndex - 1) {
					this.classRange.removeRange(0, -1);
					let rowIndex = this.classScroll.setBarPositionByDirection('up');
					this.tbs_displayOneSelection(rowIndex, cellIndex);
				}
				else {
					this.classRange.removeRange(0, -1);
					let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
					this.classPanel30.setDataPanel(_topRowIndex);
				}
			}
			else {
				dataRowIndex -= 1;
				let topRowIndex = this.tbs_getFirstRowIndex();

				if (topRowIndex  < 0) topRowIndex = 0;
				if (dataRowIndex < 0) dataRowIndex = 0;

				if (topRowIndex <= dataRowIndex) {
					this.classRange.removeRange(0, -1);
					let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
					this.classPanel30.setDataPanel(_topRowIndex);
				}
				else {
					this.classRange.removeRange(0, -1);
					let rowIndex = this.classScroll.setBarPositionByDirection('up');
					this.tbs_displayOneSelection(rowIndex, cellIndex);
				}
			}
		}
		else if (type == 'down') {
			let topRowIndex = this.tbs_getFirstRowIndex();
			let lastRowIndex = this.tbs_getLastRowIndex();
			if (grid.fixedRowIndex != -1 && dataRowIndex == grid.fixedRowIndex){
				dataRowIndex += 1;
				grid.classRange.removeRange(0, -1);
				let _topRowIndex = grid.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex, dataRowIndex);
				grid.classPanel30.setDataPanel(_topRowIndex);
				grid.classScroll.setBarPosition(grid.code_vertical, dataRowIndex);
				return;
			}
			if (this.pageRowCount > this.pageIntRowCount) {
				if (tableRows.length == this.pageRowCount) {
					if (dataRowIndex == lastRowIndex) {
						if (dataRowIndex == this.data_view.length - 1) {
							this.classRange.removeRange(0, -1);
							this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
							this.tbs_displayOneSelection(dataRowIndex, cellIndex);
						}
						else {
							dataRowIndex += 1;
							this.classRange.removeRange(0, -1);
							this.classScroll.setBarPositionByDirection('down', topRowIndex + 2);
							this.tbs_displayOneSelection(dataRowIndex, cellIndex);
						}
					}
					else if (dataRowIndex == lastRowIndex - 1) {
						dataRowIndex += 1;
						this.classRange.removeRange(0, -1);
						this.classScroll.setBarPositionByDirection('down', topRowIndex + 1);
						this.tbs_displayOneSelection(dataRowIndex, cellIndex);

					}
					else {
						dataRowIndex += 1;
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
				}
				else {
					if (dataRowIndex == lastRowIndex) {
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
					else {
						dataRowIndex += 1;
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
				}
			}
			else {
				if (tableRows.length == this.pageRowCount) {
					if (dataRowIndex == lastRowIndex) {
						if (dataRowIndex == this.data_view.length - 1) {
							this.classRange.removeRange(0, -1);
							let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
							this.classPanel30.setDataPanel(_topRowIndex);
						}
						else {
							dataRowIndex += 1;
							this.classRange.removeRange(0, -1);
							this.classScroll.setBarPositionByDirection('down');
							this.tbs_displayOneSelection(dataRowIndex, cellIndex);
						}
					}
					else {
						dataRowIndex += 1;
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
				}
				else {
					if (dataRowIndex == lastRowIndex) {
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
					else {
						dataRowIndex += 1;
						this.classRange.removeRange(0, -1);
						let _topRowIndex = this.classRange.selectRange(dataRowIndex, dataRowIndex, cellIndex, cellIndex);
						this.classPanel30.setDataPanel(_topRowIndex);
					}
				}
			}
		}
	}
	event_wheel = function() { //mouse wheel event
		let selector = '#' + this.gridId;
		let grid = this;
		let xScroll = document.querySelector(selector + ' .tbs-grid-horizontal-scroll');
		let yScroll = document.querySelector(selector + ' .tbs-grid-vertical-scroll');

		const mouseWheelEvent = function (e) {
			grid.tbs_editEnd();
			if (yScroll.style.display == '') {
				if (e.deltaY > 0) {
					e.preventDefault();
					e.returnValue = false;
					grid.classScroll.setBarPositionByDirection('down');
				}
				if (e.deltaY < 0) {
					e.preventDefault();
					e.returnValue = false;
					grid.classScroll.setBarPositionByDirection('up');
				}
			}
			else if (xScroll.style.display == '') {
				if (e.deltaY > 0) {
					e.preventDefault();
					e.returnValue = false;
					//grid.classScroll.setBarPositionByDirection('right');
				}
				if (e.deltaY < 0) {
					e.preventDefault();
					e.returnValue = false;
					//this.classScroll.setBarPositionByDirection('left');
				}
			}
		};
		document.querySelector(selector).addEventListener('wheel', mouseWheelEvent);
	}
	event_scrollButton = function() {
		//mouse wheel event
		//onmousedown -> onmouseup -> click
		let selector = '#' + this.gridId;
		let grid = this;

		let leftButton  = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-left');
		let rightButton = document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-right');

		let upButton    = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-up');
		let downButton  = document.querySelector(selector + ' .tbs-grid-vertical-scroll .tbs-grid-vertical-scroll-down');
		let flag = false;
		//-----------------------------------------------------------------
		const leftButtonMouseDownEvent = function (e) {
			document.addEventListener('mouseup', leftButtonMouseUpEvent);
			flag = true;
			doInterval('left');
		};
		const leftButtonMouseUpEvent = function (e) {
			flag = false;
			document.removeEventListener('mouseup', leftButtonMouseUpEvent);
		};
		//-----------------------------------------------------------------
		const rightButtonMouseDownEvent = function (e) {
			document.addEventListener('mouseup', rightButtonMouseUpEvent);
			flag = true;
			doInterval('right');
		};
		const rightButtonMouseUpEvent = function (e) {
			flag = false;
			document.removeEventListener('mouseup', rightButtonMouseUpEvent);
		};
		//-----------------------------------------------------------------
		const upButtonMouseDownEvent = function (e) {
			document.addEventListener('mouseup', upButtonMouseUpEvent);
			flag = true;
			doInterval('up');
		};
		const upButtonMouseUpEvent = function (e) {
			flag = false;
			document.removeEventListener('mouseup', upButtonMouseUpEvent);
		};
		//-----------------------------------------------------------------
		const downButtonMouseDownEvent = function (e) {
			document.addEventListener('mouseup', downButtonMouseUpEvent);
			flag = true;
			doInterval('down');
		};
		const downButtonMouseUpEvent = function (e) {
			flag = false;
			document.removeEventListener('mouseup', downButtonMouseUpEvent);
		};
		//-----------------------------------------------------------------
		leftButton.addEventListener('mousedown', leftButtonMouseDownEvent);
		rightButton.addEventListener('mousedown', rightButtonMouseDownEvent);
		upButton.addEventListener('mousedown', upButtonMouseDownEvent);
		downButton.addEventListener('mousedown', downButtonMouseDownEvent);
		function doInterval(type) {
			if (flag) {
				setTimeout(function() {doInterval(type);}, 500);
				grid.classScroll.setBarPositionByDirection(type);
			}
		}
	}
	event_railClick = function() {
		let selector = '#' + this.gridId;
		let grid = this;
		const xWrapClickEvent = function (e) {
			let bar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
			let left = parseInt(bar.style.left.replace('px', ''));
			if (isNaN(left)) left = 0;
			let barSize  = grid.horizontalScroll.barSize;
			if (e.offsetX >= left && e.offsetX <= (left + barSize)) return;

			if (e.target.className != 'tbs-grid-horizontal-scroll-bar') {
				if (e.offsetX > left) {
					let move = e.offsetX - (left + barSize);
					bar.style.left = (left + move) + 'px';
				}
				if (e.offsetX < left) {
					let move = e.offsetX;
					bar.style.left = (e.offsetX) + 'px';
				}

				let movedLeft = grid.classScroll.getContentPanelLeft(bar.style.left);
				grid.classScroll.setContentPanelLeft(movedLeft);

				grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
			}
		};
		const yWrapClickEvent = function (e) {
			let bar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
			let top = bar.style.top != '' ? parseInt(bar.style.top, 10) : 0;
			let barSize = grid.verticalScroll.barSize;
			if (e.offsetY >= top && e.offsetY <= (top + barSize)) return;

			if (e.target.className != 'tbs-grid-vertical-scroll-bar') {
				if (e.offsetY > top) {
					let move = e.offsetY - (top + barSize);
					bar.style.top = (top + move) + 'px';
				}
				else if (e.offsetY < top) {
					let move = e.offsetY;
					bar.style.top = e.offsetY + 'px';
				}
				// let topRowIndex = grid.tbs_getFirstRowIndex('panel30');
				// if (grid.isLastRowIndex(topRowIndex)) bar.style.top = grid.verticalScroll.railSize + 'px';
				e = null;

				let moveCount = grid.verticalScroll.moveCount;
				/*
                @issue : parseInt(bar.style.top, 10) * moveCount < 0, topRowIndex always is 0.
                7 * 0.063 = 0.48  ceil => yMovecount.
            */
				let trTopIndex = Math.ceil(parseInt(bar.style.top, 10) * moveCount);
				bar = null;
				grid.classPanel30.setDataPanel(trTopIndex);
			}
		};
		//-----------------------------------------------------------------
		document.querySelector(selector + ' .tbs-grid-horizontal-scroll .tbs-grid-horizontal-scroll-wrap').addEventListener('click', xWrapClickEvent);
		document.querySelector(selector + ' .tbs-grid-vertical-scroll   .tbs-grid-vertical-scroll-wrap').addEventListener('click', yWrapClickEvent);
	}
	event_dragScrollBar = function() {
		// function : drag scroll bar
		let selector = '#' + this.gridId;
		let grid = this;

		let xWrap = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-wrap');
		let xBar = document.querySelector(selector + ' .tbs-grid-horizontal-scroll-bar');
		let xPos = { left: 0, x : 0 }
		//== x scroll
		const xMouseDownEvent = function(e) {
			grid.tbs_editEnd();
			e.stopPropagation();

			if (e.target.className != 'tbs-grid-horizontal-scroll-bar') return;
			xPos.left = Number(xBar.style.left.replace('px', ''));
			xPos.x = e.clientX;
			document.addEventListener('mousemove', xMouseMoveEvent);
			document.addEventListener('mouseup', xMouseUpEvent);
		}
		const xMouseMoveEvent = function(e) {
			//e.preventDefault();	// next stop
			//e.stopPropagation();	// up stop
			let xMove = e.clientX - xPos.x;
			let left = xPos.left + xMove;
			let xRailWidth = xWrap.clientWidth - xBar.clientWidth;
			if (left < 0) left = 0;
			if (left > xRailWidth) left = xRailWidth;
			xBar.style.left = left.toString() + 'px';

			let header  = document.querySelector(selector + ' .tbs-grid-panel20');
			let content = document.querySelector(selector + ' .tbs-grid-panel30');
			let sum     = document.querySelector(selector + ' .tbs-grid-panel40');
			let footer  = document.querySelector(selector + ' .tbs-grid-panel50');

			let ratio =  (header.childNodes[0].clientWidth - header.clientWidth) / xRailWidth;
			grid.classScroll.setContentPanelLeft((left * -1 * ratio).toString());
			grid.classPanel30.setDataPanel(grid.tbs_getFirstRowIndex());
		}
		const xMouseUpEvent = function(e) {
			document.removeEventListener('mousemove', xMouseMoveEvent);
			document.removeEventListener('mouseup', xMouseUpEvent);
		}
		xBar.addEventListener('mousedown', xMouseDownEvent, false);

		//== y scroll
		let yBar = document.querySelector(selector + ' .tbs-grid-vertical-scroll-bar');
		let yPos = { top: 0, y : 0 }
		let actveTopRowIndex = -1;
		const yMouseDownEvent = function(e) {
			grid.tbs_editEnd();
			e.stopPropagation();

			actveTopRowIndex = -1;
			if (e.target.className != 'tbs-grid-vertical-scroll-bar') return;
			yPos.top = Number(yBar.style.top.replace('px', ''));
			yPos.y = e.clientY;

			document.addEventListener('mousemove', yMouseMoveEvent);
			document.addEventListener('mouseup', yMouseUpEvent);
		}
		const yMouseMoveEvent = function(e) {
			//e.stopPropagation();
			let yBarTop = yPos.top + e.clientY - yPos.y;
			if (yBarTop < 0) yBarTop = 0;
			if (yBarTop > grid.verticalScroll.railSize) yBarTop = grid.verticalScroll.railSize;

			let displayTopRowIndex = Math.floor(yBarTop * grid.verticalScroll.moveCount);
			actveTopRowIndex = displayTopRowIndex;

			let topRowIndex = displayTopRowIndex;
			if (grid.fixedRowIndex != -1) topRowIndex = displayTopRowIndex + grid.fixedRowIndex + 1;

			//console.log(`topRowIndex ${topRowIndex} / displayTopRowIndex ${displayTopRowIndex} `);
			setTimeout(function(){ grid.classScroll.setBarPosition(grid.code_vertical, displayTopRowIndex);}, 1);
			setTimeout(function(){ grid.classPanel30.setDataPanel(topRowIndex);}, 5);
		}
		const yMouseUpEvent = function(e) {
			e.stopPropagation();
			document.removeEventListener('mousemove', yMouseMoveEvent);
			document.removeEventListener('mouseup', yMouseUpEvent);
		}
		yBar.addEventListener('mousedown', yMouseDownEvent, false);
	}

	/**
	 * Excel Functions
	 *
	 */
	excelExport = function(options) {
		let selector = '#' + this.gridId;
		let grid = this;

		let headerRowCount = this.headerRowCount;
		let headerColumns = this.headerColumnTable;
		let columns = this.columns;
		let rows = this.tbs_getRows();
		let table, thead, tbody, tr, th, td, input;

		table = document.createElement('table');
		table.style = 'border:1px solid #ccc;';

		thead = document.createElement('thead');
		tr = document.createElement('tr');
		let sumWidth = 0;
		columns.map(column => {
			th = document.createElement('th');
			th.style.width = (column[grid.column_visible] == true) ? parseInt(column.width) + 'px' : '0px';
			th.style.display = (column[grid.column_visible]== true) ? '' : 'none';
			sumWidth += (column[grid.column_visible] == true) ? parseInt(column.width) : 0;
			tr.appendChild(th);
		});
		thead.appendChild(tr);
		table.appendChild(thead);
		tbody = document.createElement('tbody');

		for (let i = 0; i < headerColumns.length; i++) {
			tr = document.createElement('tr');
			tr.style = 'height:' + this.rowHeight + 'px';
			sumWidth = 0;
			headerColumns[i].map(headerColumn => {
				if (headerColumn[grid.column_name]) {
					let td = document.createElement('td');
					if (i == 0) td.rowSpan = headerRowCount;
					else if (i < len - 1) td.rowSpan = headerRowCount - i; // 3 - 1

					td.style = 'border:1px solid #ccc;background: #fcf1f4;';
					td.style.textAlign = 'center';

					let width = (headerColumn['width'] != '') ? headerColumn['width'] : '100';
					td.style.width = width + 'px';
					sumWidth += Number(width);
					//------------------------------------------------------
					let div = document.createElement('div');
					div.classList.add('tbs-grid-cell-div');
					td.appendChild(div);

					let span = document.createElement('span');
					span.classList.add('tbs-grid-cell-span');
					span.textContent = headerColumn[grid.column_text];
					div.appendChild(span);

					td.appendChild(div);
					tr.appendChild(td);
				}
				else if (headerColumn[grid.column_text] != undefined) {
					let td = document.createElement('td');
					td.colSpan = headerColumn[grid.column_colSpan];
					td.style = 'border:1px solid #ccc;background: #fcf1f4;';
					td.style.textAlign = 'center';

					let div = document.createElement('div');
					div.classList.add('tbs-grid-cell-div');

					let span = document.createElement('span');
					span.classList.add('tbs-grid-cell-span');
					span.textContent = headerColumn[grid.column_text];
					div.appendChild(span);

					td.appendChild(div);
					tr.appendChild(td);
				}
				else {
					let td = document.createElement('td');
					td.style.display = 'none';
					td.classList.add('tbs-grid-cell');
					td.style.textAlign = 'center';

					let div = document.createElement('div');
					div.classList.add('tbs-grid-cell-div');

					let span = document.createElement('span');
					span.classList.add('tbs-grid-cell-span');
					span.textContent = headerColumn[grid.column_text];
					div.appendChild(span);

					td.appendChild(div);
					tr.appendChild(td);
				}
			});
			tbody.appendChild(tr);
			rows.map(row => {
				tr = document.createElement('tr');
				tr.style = 'height:' + this.rowHeight + 'px';
				for (let x = 0, len = columns.length; x < len; x++) {
					let column = columns[x];
					let td = document.createElement('td');
					td.style = 'border:1px solid #ccc;';
					let width = (column[grid.column_width] != '') ? column[grid.column_width] : '100';
					td.style.width = width + 'px';
					sumWidth += Number(width);

					let div = document.createElement('div');
					div.classList.add('tbs-grid-cell-div');
					td.appendChild(div);

					let span = document.createElement('span');
					span.classList.add('tbs-grid-cell-span');
					span.textContent = row[column[grid.column_name]];
					div.appendChild(span);

					td.appendChild(div);
					tr.appendChild(td);
				}
				tbody.appendChild(tr);
			});
		}
		table.appendChild(tbody);

		let type = options.type;
		let fileName = options.fileName;

		let blob = new Blob([table.outerHTML], {
			type: 'application/vnd.ms-excel;charset=utf-8'
		});
		saveAs(blob, fileName);

		// const myJsonString = '<table><tr><td>1</td><td>1</td><td>1</td></tr></table><table><tr><td>1</td><td>1</td><td>1</td></tr></table>';
		// const blob = new Blob([myJsonString], {
		// 	type: "application/vnd.ms-excel;charset=utf-8"
		// });
		// saveAs(blob, "table.xls");
		//      , {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=" + document.characterSet})
	}

	/**
	 * Is Functions
	 *
	 */
	tbs_isSortableColumn = function (columnName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = false;
		//let column = grid.classColumn.getColumn(columnName);

		// if (column[grid.column_sortable] == true)  result = true;
		// else if (column[grid.column_sortable] == false) result = false;
		// else {
		result = grid.options[grid.option_sortable];
		//}
		return result;
	}
	tbs_isResizableColumn = function (columnName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = false;
		//let column = grid.classColumn.getColumn(columnName);

		// if (column[grid.column_resizable] == true)  result = true;
		// else if (column[grid.column_resizable] == false) result = false;
		// else {
		result = grid.options[grid.option_resizable];
		// }
		return result;
	}
	tbs_isMovableColumn = function (columnName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = false;
		//let column = grid.classColumn.getColumn(columnName);

		// if (column[grid.column_movable] == true)  result = true;
		// else if (column[grid.column_movable] == false) result = false;
		// else {
		result = grid.options[grid.option_movable];
		// }
		return result;
	}
	tbs_isAutoResizableColumn = function (columnName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = false;
		//let column = grid.classColumn.getColumn(columnName);

		// if (column[grid.column_autoResizable] == true)  result = true;
		// else if (column[grid.column_autoResizable] == false) result = false;
		// else {
		result = grid.options[grid.option_autoResizable];
		//}
		return result;
	}
	tbs_isAutoWidthColumn = function (columnName) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = false;
		//let column = grid.classColumn.getColumn(columnName);

		// if (column[grid.column_autoResizable] == true)  result = true;
		// else if (column[grid.column_autoResizable] == false) result = false;
		// else {
		result = grid.options[grid.option_autoWidth];
		//}
		return result;
	}
	tbs_isClassName = function (element, className) {
		let selector = '#' + this.gridId;
		let grid = this;

		let result = element.classList.contains(className);
		return result;
	}
	tbs_isNotValidColumnType = function (columnType) {
		let arr = ['string', 'number', 'combo', 'date'];
		return arr.indexOf(columnType) == -1 ? true : false;
	}
	tbs_isInPanel = function(e, panelName, startX, startY) {  //tbs-grid-panel30
		/**
		 * @function  tbs_isInPanel
		 *
		 * @Description is existed in panel
		 * @param e
		 * @param panelName
		 * @deprecated startX
		 * @deprecated startY
		 * @returns {boolean}
		 */
		let selector = '#' + this.gridId;
		let grid = this;

		//let lastX = window.pageXOffset + e.clientX;
		//let lastY = window.pageYOffset + e.clientY;

		let lastX = this.lastX;
		let lastY = this.lastY;

		let moveX = lastX - startX;
		let moveY = lastY - startY;

		let panel = document.querySelector(selector + ' .tbs-grid-' + panelName);
		let absRect = grid.tbs_getOffset(panel);

		let rect= panel.getBoundingClientRect();
		let groupTop    = absRect.top;
		let groupBottom = absRect.top + rect.height;
		let groupLeft   = absRect.left;
		let groupRight  = absRect.left + rect.width;
		//outside area
		if (lastX < groupLeft || lastX > groupRight || lastY < groupTop || lastY > groupBottom) return false;
		else return true;
	}
	tbs_isSelectedCell = function (panelName, rowIndex, cellIndex) {
		//selected 1, 0
		let result = 0;
		let rows = [];
		if      (panelName == 'panel31') rows = this.data_select_panel31;
		else if (panelName == 'panel32') rows = this.data_select_panel30;
		else if (panelName == 'panel30') rows = this.data_select_panel30;

		else if (panelName == 'panel41') rows = this.classRange40.data_select_panel31;
		else if (panelName == 'panel42') rows = this.classRange40.data_select_panel30;
		else if (panelName == 'panel40') rows = this.classRange40.data_select_panel30;

		else if (panelName == 'panel51') rows = this.classRange50.data_select_panel31;
		else if (panelName == 'panel52') rows = this.classRange50.data_select_panel30;
		else if (panelName == 'panel50') rows = this.classRange50.data_select_panel30;

		else if (panelName == 'panel61') rows = this.data_select_panel31;
		else if (panelName == 'panel62') rows = this.data_select_panel30;
		else if (panelName == 'panel60') rows = this.data_select_panel30;
		else rows = this.data_select_panel30;

		for (let i = 0, len= rows.length; i < len; i++) {
			let row = rows[i];
			if (rowIndex == row[0][0]) {
				result = row[1][cellIndex];
				break;
			}
		}
		return result;
	}
	tbs_isSelectedHeaderCell = function (panelName, cellIndex) {
		//selected 1, 0
		let result = 0;
		let rows = this.data_select_panel30;

		for (let i = 0, len= rows.length; i < len; i++) {
			let row = rows[i];
			if (row[1][cellIndex] == 1) {
				result = row[1][cellIndex];
				break;
			}
		}
		return result;
	}
	tbs_isSelectedCell31 = function (rowIndex, cellIndex) {
		//selected 1, 0
		let result = 0;
		let rows = this.data_select_panel31;
		for (let i = 0, len= rows.length; i < len; i++) {
			let row = rows[i];
			if (rowIndex == row[0][0]) {
				result = row[1][cellIndex];
				break;
			}
		}
		return result;
	}
	tbs_isSelectedCell30 = function (rowIndex, cellIndex) {
		//selected 1, 0
		let result = 0;
		let rows = this.data_select_panel30;
		for (let i = 0, len= rows.length; i < len; i++) {
			let row = rows[i];
			if (rowIndex == row[0][0]) {
				result = row[1][cellIndex];
				break;
			}
		}
		return result;
	}
	tbs_isColumnName = function (columnName) {
		let grid = this;

		let result = false;
		for (let i = 0, len = this.columns.length; i < len; i++) {
			let column = this.columns[i];
			if (columnName == column[grid.column_name]) {
				result = true;
				break;
			}
		}
		return result;
	}
	tbs_isColumnTypeNumber = function (columnName) {
		let grid = this;

		let result = false;
		let column = grid.getColumn(columnName)
		if (column[grid.column_type] == grid.code_number || column[grid.column_type] == grid.code_currency) result = true;
		return result;
	}
	tbs_isSortColumnName = function (columnName) {
		let grid = this;

		let result = false;
		for (let i = 0, len = this.classSort.sortColumns.length; i < len; i++) {
			let sortColumn = this.classSort.sortColumns[i];
			if (columnName == sortColumn[grid.column_name]) {
				result = true;
				break;
			}
		}
		return result;
	}
	tbs_isFilterColumnName = function (columnName) {
		let grid = this;

		let result = false;
		for (let i = 0, len = this.filterColumns.length; i < len; i++) {
			let filterColumn = this.filterColumns[i];
			if (columnName == filterColumn[grid.column_name]) {
				result = true;
				break;
			}
		}
		return result;
	}
	tbs_isLastTopRowIndex = function (rowIndex) {
		let grid = this;

		let result = false;
		let rowCount = grid.getRowCount() - 1;
		if (grid.pageIntRowCount >= rowCount - rowIndex + 1) {
			return true;
		}
		return result;
	}

	//==================================================================================================================
	//==================================================================================================================

	/**
	 * User Event Functions
	 */

	click(userFunction) { this.user_click = userFunction;}
	dblclick(userFunction) { this.user_dblclick = userFunction;}
	edit(userFunction) { this.user_edit = userFunction;}
	editStart(userFunction) { this.user_editStart = userFunction;}
	editing(userFunction) { this.user_editing = userFunction;}
	editEnd(userFunction) { this.user_editEnd = userFunction;}
	rowBounding(userFunction) { this.user_rowBounding = userFunction;}
	cellBounding(userFunction) { this.user_cellBounding = userFunction;}

	/**
	 * User Functions
	 */

	addUserClass(element, className) { this.tbs_addUserClass(element, className); }

	/**
	 *  Group Functions
	 */

	showGroupPanel() { this.classGroup.showGroupPanel(); }
	hideGroupPanel() { this.classGroup.hideGroupPanel(); }
	setGroupColumns(groupColumns) { this.classGroup.setGroupColumns(groupColumns); }

	/**
	 * Tree Functions
	 */

	setTreeOption(optionName, optionValue) { this.classTree.setTreeOption(optionName, optionValue); }
	setTreeSortColumn(sortColumn) { this.classTree.setTreeSortColumns(sortColumn); }

	/**
	 *  Panel10 Functions
	 */

	showToolbarPanel() { this.classPanel10.showToolbarPanel(); }
	hideToolbarPanel() { this.classPanel10.hideToolbarPanel(); }

	showToolbarButtons(buttonType) { this.classPanel10.showToolbarButtons(buttonType); }
	hideToolbarButtons(buttonType) { this.classPanel10.hideToolbarButtons(buttonType); }

	showFilterPanel() { this.classFilter.showFilterPanel(); }
	hideFilterPanel() { this.classFilter.hideFilterPanel(); }

	showSortPanel() { this.classSort.showSortPanel(); }
	hideSortPanel() { this.classSort.hideSortPanel(); }

	/**
	 *  TbsGrid Config
	 */

	setGridConfig(tbsGridConfig) { this.gridConfig = tbsGridConfig;	}

	/**
	 * Column Functions
 	 */

	setFixedColumn(fixedColumnIndex) { this.classColumn.setFixedColumn(fixedColumnIndex); }
	removeFixedColumn() { this.classColumn.removeFixedColumn(); }

	/**
	 * User Event : Paging
	 */

	clickPageFirst(userFunction) { this.user_clickPageFirst = userFunction; }
	clickPagePrev (userFunction) { this.user_clickPagePrev  = userFunction; }
	clickPageIndex(userFunction) { this.user_clickPageIndex = userFunction; }
	clickPageNext (userFunction) { this.user_clickPageNext  = userFunction; }
	clickPageLast (userFunction) { this.user_clickPageNext  = userFunction; }

	/* Grid Mode */

	setGridMode(gridMode) { this.tbs_setGridMode(gridMode); }

	/* Display grid */

	apply() { this.tbs_apply(); }

	/* Header Columns API. */

	getHeaderColumn(rowIndex, columnIndex) { return grid.classHeader.getHeaderColumn(rowIndex, columnIndex); }
	getHeaderColumnByNumber(num) { return grid.classHeader.getHeaderColumnByNumber(num); }

	/* Columns API. */

	getColumn(columnName) { return this.tbs_copyJson(this.classColumn.getColumn(columnName)); }
	getColumnByIndex(columnIndex) { return this.tbs_copyJson(this.classColumn.getColumnByIndex(columnIndex)); }
	getColumns() { return this.tbs_copyJson(this.classColumn.getColumns()); }
	getColumnName(columnIndex) { return this.classColumn.getColumnName(columnIndex); }
	getColumnIndex(columnName) { return this.classColumn.getColumnIndex(columnName); }
	setColumn(columnName, property, value) { this.classColumn.setColumn(columnName, property, value);}
	setColumnByType(columnType, property, value) {this.classColumn.setColumnByType(columnType, property, value);}
	addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType) { this.classColumn.addColumn(addColumn, targetRowIndex, targetColumnIndex, orderType);}
	removeColumn(targetRowIndex, targetColumnIndex) { this.classColumn.removeColumn(targetRowIndex, targetColumnIndex); }

	/* Main */

	setToolbar(toolbar) { this.tbs_setToolbar(toolbar); }
	setGrid(columns, options) { this.tbs_setGrid(columns, options); }
	setData(data, openDepth) { this.tbs_setData(data, openDepth); }

	/* Data */

	getValue(rowIndex, columnName) { return this.tbs_getValue(rowIndex, columnName); }
	getValueByIndex(rowIndex, colIndex) { return this.tbs_getValueByIndex(rowIndex, colIndex); }
	getText(rowIndex, columnName) { return this.tbs_getText(rowIndex, columnName); }
	getTextByIndex(rowIndex, colIndex) { return this.tbs_getTextByIndex(rowIndex, colIndex); }
	setValue(rowIndex, columnName, value) { this.tbs_setValue(rowIndex, columnName, value); }
	setValueByIndex(rowIndex, colIndex, value) { this.tbs_setValueByIndex(rowIndex, colIndex, value); }
	setDataValue(rowIndex, columnName, value) { this.tbs_setDataValue(rowIndex, columnName, value); }
	setComboData(keyName, valueName, comboData) { return this.tbs_setComboData(keyName, valueName, comboData); }

	/* Row functions */

	getRowCount() { return this.tbs_getRowCount(); }
	getRow(rowIndex) { return this.tbs_getRow(rowIndex); }
	getRows(startRowIndex, endRowIndex) { return this.tbs_getRows(startRowIndex, endRowIndex); }
	getSelectedRow() { return this.tbs_getSelectedRow(); }
	getSelectedRows() { return this.tbs_getSelectedRows(); }
	setRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) { let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2); this.classPanel30.setDataPanel(_topRowIndex);}
	selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2) { let _topRowIndex = this.classRange.selectRange(rowIndex1, toRowIndex2, columnIndex1, columnIndex2); this.classPanel30.setDataPanel(_topRowIndex);}
	getCheckedRows() { return this.tbs_getCheckedRows(); }
	getChangedRowsData() { return this.tbs_getChangedRowsData(); }
	getDeletedRowsData() { return this.tbs_getDeletedRowsData(); }
	getUpdatedRowsData() { return this.tbs_getUpdatedRowsData(); }
	getInsertRowsData() { return this.tbs_getInsertedRowsData(); }

	/* add row, remove row */

	addRow(row, type = 'bottom') { this.tbs_addRow(row, type); }
	removeRows(rows) { this.tbs_removeRows(rows); }

	/* Columns */

	setColumn(columnName, columnProperty, value) { this.classColumn.setColumn(columnName, columnProperty, value); }
	setColumnByType(columnType, columnProperty, value) { this.classColumn.setColumnByType(columnType, columnProperty, value);}
	setTopColumns(topColumns) { this.classTop.setTopColumns(topColumns); }
	setFooterColumns(footerColumns) { this.classFooter.setFooterColumns(footerColumns); }

	/* Frozen */

	setFrozenRow = function(fixedRowIndex) { let fixedRowCount = fixedRowIndex + 1; this.tbs_setFrozenRow(fixedRowIndex, fixedRowCount); }
	removeFrozenRow = function() { this.tbs_removeFrozenRow(); }

	/* Options */

	setOption(optionName, optionValue) { this.tbs_setOption(optionName, optionValue); }
	setOptions(options) { this.tbs_setOptions(options); }

	/* Page */

	setPageOption(optionName, optionValue) { this.classPage.setPageOption(optionName, optionValue); }
}

export default TbsGrid;
