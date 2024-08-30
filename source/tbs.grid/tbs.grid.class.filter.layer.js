TbsGridFilterLayer = function (grid, icon, input, column) {
    this.grid = grid;
    this.gridId = grid.gridId;
    this.column = column;
    this.iconElement = icon;
    this.inputElement = input;

    this.tbs_createFilter();
    this.tbs_showFilterLayer();
    this.tbs_AddEvent();
    this.tbs_setData();
};
TbsGridFilterLayer.prototype.tbs_getComboData = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;

    let combo = document.createElement('select');
    combo.classList.add('tbs-grid-layer-filter-combo');
    //combo.multiple = 'multiple';
    if (column[grid.column_type] == grid.code_string) {
        let option;
        gridFilter.tbs_addComboOption(combo, grid.const_filterEqual         , 'Equal'           );
        gridFilter.tbs_addComboOption(combo, grid.const_filterInclude 		, 'Include'         );
        gridFilter.tbs_addComboOption(combo, grid.const_filterStartCharacter, 'Start Characters');
        gridFilter.tbs_addComboOption(combo, grid.const_filterEndCharacter	, 'End Characters'  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterBlank         , 'Blank'           );
        gridFilter.tbs_addComboOption(combo, grid.const_filterNotEqual      , 'Does not equal'  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterNotInclude 	, 'Not Include'     );
    }
    else if (column[grid.column_type] == grid.code_number) {
        let option;
        gridFilter.tbs_addComboOption(combo, grid.const_filterEqual       , 'Equal'					  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterGreaterEqual, 'Greater than or Equal to');
        gridFilter.tbs_addComboOption(combo, grid.const_filterLessEqual   , 'Less than or Equal to'	  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterGreater     , 'Greater than'			  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterLess        , 'Less than'				  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterBetween     , 'Between'				  );
        gridFilter.tbs_addComboOption(combo, grid.const_filterBlank       , 'Blank'					  );
    }
    return combo;
}
TbsGridFilterLayer.prototype.tbs_addComboOption = function(combo, value, text) {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;

    let option = document.createElement('option');
    option.value = value;
    option.text = text;
    combo.add(option);
}
TbsGridFilterLayer.prototype.tbs_createFilter = function(){
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let combo = gridFilter.tbs_getComboData();
    let s = '';
    s += '<div class="tbs-grid-layer-filter">';
    s += '  <div class="tbs-grid-layer-filter-main">';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += combo.outerHTML;
    s += '      </div>';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += '          <input class="tbs-grid-layer-filter-content-input" placeholder="Words to filter">';
    s += '      </div>';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += '          <input class="tbs-grid-layer-filter-content-input-to" style="display:none;" placeholder="Words to filter">';
    s += '      </div>';
    s += '      <div class="tbs-grid-layer-filter-content">';
    s += '              <button class="tbs-grid-layer-filter-content-button-save">save</button>';
    s += '              <button class="tbs-grid-layer-filter-content-button-reset">reset</button>';
    s += '      </div>';
    s += '  </div>';
    s += '</div>';
    document.querySelector(selector + ' .tbs-grid-layer').innerHTML = s;
}
TbsGridFilterLayer.prototype.tbs_showFilterLayer = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;

    let rectIcon = this.iconElement.getBoundingClientRect();

    let top = rectIcon.top;
    let left = rectIcon.left;
    let right = rectIcon.right;
    let height = rectIcon.height;

    let layer = document.querySelector(selector + ' .tbs-grid-layer');
    layer.style.width  = '192px';
    layer.style.height = '102px';

    let rectDocument = document.documentElement.getBoundingClientRect();
    let documentRight = rectDocument.right;
    let documentBottom = rectDocument.bottom;

    if (left + 150 > documentRight) {
        layer.style.left   = `${right - 150}px`;
    }
    else {
        layer.style.left  = `${left}px`;
    }
    if (top + height + 180 > documentBottom) {
        layer.style.top   = `${top - 180}px`;
    }
    else {
        layer.style.top   = `${top + height}px`;
    }
    //this.tbs_setData();
    //this.tbs_AddEvent();
}
TbsGridFilterLayer.prototype.tbs_AddEvent = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let iconElement = this.iconElement
    let inputElement =this.inputElement

    const changeEvent = function (e) {
        let combo = e.target;
        let columnType = column[grid.column_type];
        if (columnType == grid.code_number) {
            let toInput = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to');
            if (combo.selectedOptions[0].value == grid.const_filterBetween) toInput.style.display = '';
            else toInput.style.display = 'none';
        }
    };
    const saveEvent = function (e) {
        let combo  = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');
        let filterType = combo.selectedOptions[0].value;

        let word   = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value;
        let toWord = document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value;

        grid.tbs_setFilterColumn(column, filterType, word, toWord);
        grid.tbs_filters();

        inputElement.value = word;

        document.querySelector(selector + ' .tbs-grid-layer').innerHTML = '';
        document.querySelector(selector + ' .tbs-grid-layer').style.width = '0px';
        document.querySelector(selector + ' .tbs-grid-layer').style.left = '30000px';
    };
    const resetEvent = function (e) {
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = '';
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value = '';
    };
    document.querySelector(selector + ' .tbs-grid-layer-filter-combo').addEventListener('change', changeEvent);
    document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-save').addEventListener('mousedown', saveEvent);
    document.querySelector(selector + ' .tbs-grid-layer-filter-content-button-reset').addEventListener('mousedown', resetEvent);
}
TbsGridFilterLayer.prototype.tbs_setData = function() {
    let selector = '#' + this.grid.gridId;
    let grid = this.grid;
    let column = this.column;
    let gridFilter = this;
    let iconElement = this.iconElement
    let inputElement =this.inputElement

    let filterColumn = grid.tbs_getJsonRow(grid.filterColumns, grid.column_name, column[grid.column_name]);
    if (grid.notNull(filterColumn)) {
        let combo = document.querySelector(selector + ' .tbs-grid-layer-filter-combo');

        for (let i = 0, len = combo.options.length; i < len; i++) {
            if (filterColumn.type == combo.options[i].value) {
                combo.selectedIndex = i;
                break;
            }
        }
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-input').value = filterColumn.value;
        document.querySelector(selector + ' .tbs-grid-layer-filter-content-input-to').value = filterColumn.toValue;
    }
}
