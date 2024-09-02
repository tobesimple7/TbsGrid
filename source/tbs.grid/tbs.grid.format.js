TbsGrid.prototype.tbs_getFormatValue = function(col, value){
    let result = this.tbs_getFormat(col, value);
    return result.value;
}
TbsGrid.prototype.tbs_getFormatText = function(col, value){
    let result = this.tbs_getFormat(col, value);
    return result.text;
}
TbsGrid.prototype.tbs_getFormat = function (column, value) {
    let grid = this;

    let result = {};
    result.value = value;
    result.text = value;

    let colType = column[grid.column_type];
    let format  = column[grid.column_format];

    if (colType == grid.code_number || colType == grid.code_currency) {
        result = this.tbs_getFormatNumber(column, value);
        if (column[grid.column_visible] == false
            || (column[grid.column_showZero] == false && Number(result.value) == 0 )) {
            result.text = this.options[grid.option_zeroChar];
        }
        return result;
    }
    else {
        if (this.null(value)) {
            result.value = '';
            result.text = '';
            return result;
        }
        if (colType == grid.code_combo) {
            let data = column.renderer;
            let key = column.renderer.valueName;
            let val = column.renderer.labelName;

            for (let i = 0, len = data.length; i < len; i++) {
                if (data[i][key] == value) {
                    result.text = data[i][val];
                    break;
                }
            }
            return result;
        }
        else if (colType == 'date') {
            return this.tbs_getFormatDate(column, value);
        }
        else {
            result.text = value;
            return result;
        }
    }
}
TbsGrid.prototype.tbs_getFormatNumber = function (column, value) {
    let grid = this;
    const formatWon = function (n) {
        //return val.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","); safari error
        //return val.toString().replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ','); int type error
        let parts = n.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };

    // result = { value: , text: }
    let result = {};
    if      (grid.null(value))            result.value = null;
    else if (grid.tbs_trim(value) == '')  result.value = null;
    else if (grid.tbs_substr(value.toString(), 0, 1) == '.') result.value = '0'; //php 0.1 => .1
    else {
        value = value.toString().replace(grid.gridConfig.culture.currencyChar, '');
        result.value = value.toString().replace(/,/gi, '')
    }



    if (grid.null(result.value)) {
        result.text = grid.options[grid.option_zeroChar];
        return result;
    }
    result.text = result.value;

    let type = column[grid.column_type];
    let scale = column[grid.column_scale];

    let arr = scale.split(',');
    let decimalPoint = (arr.length > 1) ? this.tbs_trim(arr[1]) : '0';
    if (decimalPoint == '') decimalPoint = '0';

    let roundType = column[grid.column_roundType];
    let n = (result.value == undefined || result.value == '') ? '0' : result.value.toString(); //전체값
    let dpLen = 0; //decimal length

    if (decimalPoint == '0') {
        dpLen = 0;
        if      (roundType == 'round') n = parseFloat(this.tbs_round(n, dpLen));
        else if (roundType == 'ceil' ) n = parseFloat(this.tbs_ceil(n, dpLen));
        else if (roundType == 'floor') n = parseFloat(this.tbs_floor(n, dpLen));
        else     parseFloat(this.tbs_round(n, dpLen));
        result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
    }
    else if (decimalPoint != '0') {
        result.text = formatWon(parseFloat(n));
        if (column[grid.column_fixedScale]) {
            dpLen = parseInt(decimalPoint);
            n =   (roundType == 'ceil')  ? this.tbs_ceil(n, dpLen).toFixed(dpLen)
                : (roundType == 'floor') ? this.tbs_floor(n, dpLen).toFixed(dpLen)
                : this.tbs_round(n, dpLen).toFixed(dpLen);
            result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
        }
        else {
            dpLen = parseInt(decimalPoint);
            n =   (roundType == 'ceil')  ? parseFloat(this.tbs_ceil(n, dpLen))
                : (roundType == 'floor') ? parseFloat(this.tbs_floor(n, dpLen))
                : parseFloat(this.tbs_round(n, dpLen));
            result.text = column[grid.column_commaUnit] == '0' ? n : formatWon(n);
        }
    }
    if (result.text == '0') {
        if (grid.options[grid.option_zeroChar] == false) result.text = grid.option_zeroChar;
    }
    let regExp = new RegExp('', 'gi');
    result.text = result.text.replaceAll(',',  column[grid.column_thousandChar]);
    result.text = result.text.replaceAll('.',  column[grid.column_decimalChar]);
    if (type == grid.code_currency) result.text = column[grid.column_currencyChar] + result.text
    return result;
}
TbsGrid.prototype.tbs_getFormatDate = function(column, value) {
    let grid = this;
    let result = {};
    value = value.replace(/\./gi, '');
    value = value.replace(/\-/gi, '');
    value = value.replace(/\//gi, '');

    result.value = this.tbs_trim(value);
    result.text = result.value;

    //date : 8 char
    if (result.value == '' || result.value.length != 8) {
        result.value = '';
        result.text = '';
        return result;
    }
    let format = column[grid.column_format];

    // date char : . - /
    let formatText = format.replace(/\./gi, '');
    formatText = formatText.replace(/\-/gi, '');
    formatText = formatText.replace(/\//gi, '');

    let dateText = result.text;
    let yyyy = '';
    let MM = '';
    let dd = '';

    if (formatText == 'yyyyMMdd') {
        yyyy = grid.tbs_substr(result.text,0, 4);
        MM = grid.tbs_substr(result.text,4, 2);
        dd = grid.tbs_substr(result.text,6, 2);
    }
    else if (formatText == 'ddMMyyyy') {
        yyyy = grid.tbs_substr(result.text, 4, 4);
        MM = grid.tbs_substr(result.text, 2, 2);
        dd = grid.tbs_substr(result.text, 0, 2);
    }
    else if (formatText == 'MMddyyyy') {
        yyyy = grid.tbs_substr(result.text, 4, 4);
        MM = grid.tbs_substr(result.text, 0, 2);
        dd = grid.tbs_substr(result.text, 2, 2);
    }

    if (new Date(yyyy + '-' + MM + '-' + dd).toString() == "Invalid Date") {
        result.value = '';
        result.text = '';
        return result;
    }

    format = format.replace('yyyy', yyyy);
    format = format.replace('MM', MM);
    format = format.replace('dd', dd);

    result.value = format;
    result.text = format;
    return result;
}
