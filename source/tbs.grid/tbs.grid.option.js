TbsGrid.prototype.tbs_createOption = function (options) {
    let grid = this;

    grid.tbs_setOptions(options);
}
TbsGrid.prototype.tbs_setOption = function (optionName, optionValue) {
    let grid = this;
    grid.options[optionName] = optionValue;

    if (optionName == grid.option_groupVisible) {
        if(optionValue == true) grid.tbs_showGroupPanel();
        else grid.tbs_hideGroupPanel();
    }
}
TbsGrid.prototype.tbs_setOptions = function (options) {
    let grid = this;
    for (let key in options) grid.tbs_setOption(optionMenu, key);
}