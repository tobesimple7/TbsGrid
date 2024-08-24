TbsConfig = function () {
    this.configs = [];
    let config = {
        culture: {
            name: 'ko',
            language: 'ko',
            currencyType: '',
            currencyComma: 3,
        },
        calendar: {
            daysName: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            daysShortName: ['일', '월', '화', '수', '목', '금', '토'],
            daysPattern: 'yyyy-MM-dd',
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
