
TbsGrid.prototype.tbs_createOption = function (options) {
    let grid = this;
    grid.tbs_setOptions(grid.module_default, options);
    //if (Object.keys(options).length == 0) return;
}
TbsGrid.prototype.tbs_setOption = function (optionName, optionValue, optionMenu = '') {
    let grid = this;

    if (grid.null(optionMenu) || optionMenu == '') grid.options[optionName] = optionValue;
    else grid.options[optionMenu][optionName] = optionValue;
}
TbsGrid.prototype.tbs_setOptions = function (options, optionMenu = '') {
    let grid = this;
    for (let key in options) grid.tbs_setOption(optionMenu, key, options[key]);
}

