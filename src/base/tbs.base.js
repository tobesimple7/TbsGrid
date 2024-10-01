export class TbsBase {

    constructor() {
        this.debug_mode = false;
    }

    null(p) {
        return p == null || p == undefined;
    }

    notNull(p) {
        return !(this.null(p));
    }

    empty(p) {
        return p == null || p == undefined || this.trim(p) == '';
    }

    notEmpty(p) {
        return !(this.empty(p));
    }

    isNull(a, b) {
        return this.null(a) ?  b : a;
    }

    error(p) {
        if (this.debug_mode) { console.log('[TbsGrid error] ' + p); }
    }

    caution(p) {
        if (this.debug_mode) { console.log('[TbsGrid caution] ' + p); }
    }

    copyJson(p) {
        return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
    }

    substr2 (s, index, len) {
        let result = '';
        try {
            s = s.toString();
            if (arguments.length == 2) result = s.substring(index);
            else if (arguments.length == 3) result = s.substring(index).substring(0, len);
            return result;
        }
        catch (e) {
            return result;
        }
    }

    trim (s) {
        if (this.null(s)) return '';
        else return s.toString().replace(/^\s+|\s+$/gi,"");
    }

    round(num, dpLen) {
        if (num > 0) return + (Math.round(num.toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
        else return -(Math.round(Math.abs(num).toString() + 'e+' + dpLen.toString())  + 'e-' + dpLen.toString());
    }

    ceil(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.ceil(num * n) / n);
    }

    floor(num, dpLen) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.floor(num * n) / n);
    }

    getProperty(jsonObject, property) {
        if (this.empty(jsonObject[property])) return null;
        else return jsonObject[property];
    }


}
