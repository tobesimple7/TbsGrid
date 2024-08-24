TbsConfig = function () {
    this.configs = [];

    let config = {
        culture: {
            name: 'us',
            language: 'us',
            currencyType: '$',
            currencyComma: 3,
        },
        calendar: {
            daysName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShortName: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
            daysPattern: 'mm-dd-yy',
        },
        font: {
            fontSize: '12px',
            fontFamily: 'Arial, Helvetica, sans-serif',
        }
    };
    this.configs.push(config);
}
let tbsConfig = new TbsConfig();
// [Start] Change config setting.

// [End]
