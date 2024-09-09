let tbsGridConfigs = {}
tbsGridConfigs.en = {
    culture: {
        name: 'us',
        language: 'us',
        currencyChar: '$',
        decimalChar: '.',
        thousandChar: ',',
        zeroChar: '-',
    },
    calendar: {
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayShortNames: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
        dayPattern: 'MM-dd-yyyy',
        months : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        prevLinkName : 'prev',
        nextLinkName : 'next',
        todayLinkName: 'today'
    },
    font: {
        fontSize: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },
    options: {
        imageRoot: '/tbs.grid/img/',
        groupInfoText: 'Drag columns to group.',
        sortInfoText: 'Drag columns to sort .'
    },
    labels: {
        filter_select        : 'Select',
        filter_equal         : 'Equal',
        filter_notEqual      : 'Does not equal',
        filter_greater       : 'Greater than',
        filter_greaterEqual  : 'Greater than or Equal to',
        filter_less          : 'Less than',
        filter_lessEqual     : 'Less than or Equal to',
        filter_between       : 'Between',
        filter_blank         : 'Blank',
        filter_include 		 : 'Include',
        filter_notInclude 	 : 'Not Include',
        filter_startCharacter: 'Start Characters',
        filter_endCharacter	 : 'End Characters',
    }
};
tbsGridConfigs.ko = {
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
        dayShortNames: ['일', '월', '화', '수', '목', '금.', '토'],
        dayPattern: 'yyyy-MM-dd',
        months : ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        prevLinkName : '이전',
        nextLinkName : '다음',
        todayLinkName: '오늘'
    },
    font: {
        fontSize: '12px',
        fontFamily: 'Nanum Gothic, Arial, Helvetica, sans-serif',
    },
    options: {
        imageRoot : '/tbs.grid/img/',
        groupInfoText : '그룹 컬럼을 드래그 하세요.',
        sortInfoText : '소팅 컬럼을 드래그 하세요.'
    },
    labels: {
        /* Filter Lables */
        filter_select        : '[선택]',
        filter_equal         : '같음',
        filter_notEqual      : '같지 않음',
        filter_greater       : '보다 큼',
        filter_greaterEqual  : '크거나 같음',
        filter_less          : '보다 작음',
        filter_lessEqual     : '작거나 같음',
        filter_between       : '범위',
        filter_blank         : '공백',
        filter_include 		 : '포함',
        filter_notInclude 	 : '포함 안함',
        filter_startCharacter: '시작 문자',
        filter_endCharacter	 : '끝 문자',
    }
};

