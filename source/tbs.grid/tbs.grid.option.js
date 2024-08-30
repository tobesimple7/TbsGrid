TbsGrid.prototype.tbs_createOption = function (options) {
    let grid = this;

    grid.tbs_setOptions(options);
}
TbsGrid.prototype.tbs_setOption = function (optionName, optionValue) {
    let grid = this;
    grid.options[optionName] = optionValue;
}
TbsGrid.prototype.tbs_setOptions = function (options) {
    let grid = this;
    for (let key in options) grid.tbs_setOption(optionMenu, key);
}