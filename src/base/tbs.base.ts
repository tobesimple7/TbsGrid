export class TbsBase {
    debug_mode: any;

    constructor() {
        this.debug_mode = false;
    }

    null(p: any) {
        return p == null || p == undefined;
    }

    notNull(p: any) {
        return !(this.null(p));
    }

    empty(p: any) {
        return p == null || p == undefined || this.trim(p) == '';
    }

    notEmpty(p: any) {
        return !(this.empty(p));
    }

    isNull(a: any, b: any) {
        return this.null(a) ?  b : a;
    }

    error(p: any) {
        if (this.debug_mode) { console.log('[TbsGrid error] ' + p); }
    }

    caution(p: any) {
        if (this.debug_mode) { console.log('[TbsGrid caution] ' + p); }
    }

    copyJson(p: any) {
        return this.null(p) ? {} : JSON.parse(JSON.stringify(p));
    }

    substr2 (s: any, index: any, len: any) {
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

    trim (s: any) {
        if (this.null(s)) return '';
        else return s.toString().replace(/^\s+|\s+$/gi,"");
    }

    round(num: number, dpLen: number) {
        if (num > 0) return + (Math.round(Number(num.toString() + 'e+' + dpLen.toString()))  + 'e-' + dpLen.toString());
        else return -(Math.round(Number(Math.abs(num).toString() + 'e+' + dpLen.toString()))  + 'e-' + dpLen.toString());
    }

    ceil(num: any, dpLen: any) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.ceil(num * n) / n);
    }

    floor(num: any, dpLen: any) {
        let s = '1';
        for (let i = 0; i < dpLen; i++) { s += '0'; }
        let n = parseInt(s);
        return (Math.floor(num * n) / n);
    }

    getProperty(jsonObject: any, property: any) {
        if (this.empty(jsonObject[property])) return null;
        else return jsonObject[property];
    }

    printMe() {

    }
}
