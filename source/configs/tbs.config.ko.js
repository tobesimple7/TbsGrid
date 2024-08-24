TbsConfig = function () {
    this.configs = [];
    let config = {
        culture: {
            name: 'ko',
            language: 'ko',
            currencyChar: '₩',
            decimalChar: '.',
            thousandChar: ',',
            zeroChar: '-',
        },
        calendar: {
            dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            dayShortNames: ['일', '월', '화', '수', '목', '금', '토'],
            dayPattern: 'yyyy-MM-dd',
        },
        font: {
            fontSize: '12px',
            fontFamily: 'Arial, Helvetica, sans-serif, Nanum Gothic',
        }
    };
    this.configs.push({ key: 'ko', value: config});
}
let tbsConfig = new TbsConfig();
// [Start] Change config setting.

// [End]
