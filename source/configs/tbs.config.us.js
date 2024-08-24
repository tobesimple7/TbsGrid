TbsConfig = function () {
    this.culture = {
        name: 'us',
        language: 'us',
        currencyChar: '$',
        decimalChar: '.',
        thousandChar: ',',
        zeroChar: '-',
    };
    this.calendar = {
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayShortNames: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        dayPattern: 'MM-dd-yyyy',
    };
    this.font = {
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
    };
}
let tbsConfig = new TbsConfig();
// [Start] Change config setting.

// [End]
