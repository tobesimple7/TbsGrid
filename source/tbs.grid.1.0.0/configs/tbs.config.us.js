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
        months : ['1월', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        prevLinkName : 'prev',
        nextLinkName : 'next',
        todayLinkName: 'today'
    };
    this.font = {
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
    };
    this.options ={
        imageRoot : '/tbs.grid/img/'
    }
}
let tbsConfig = new TbsConfig();
