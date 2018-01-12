var titles = [
    'VUILE HANDEN - GRAFISCH ONTWERP EN KRITISCH ENGAGEMENT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;INLEIDING',
    'VUILE HANDEN - GRAFISCH ONTWERP EN KRITISCH ENGAGEMENT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;KRITIEK - DETOURNEMENT',
    'VUILE HANDEN - GRAFISCH ONTWERP EN KRITISCH ENGAGEMENT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;THE SPRAWL - INSTRUMENTALISATIE',
    'VUILE HANDEN - GRAFISCH ONTWERP EN KRITISCH ENGAGEMENT&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;VAN TOORNS BILJET - EXCES - SELLOUT'
];

$(window).scroll(function(){
    var pos = $(this).scrollTop();
    
    if(pos < 200) {
        $('.headerOne').slideUp().text(titles[0]);
    }
    if(pos > 200) {
        $('.headerOne').slideDown();
    }
    if(pos > 700) {
        $('.headerOne').text(titles[1]);
    }
    if(pos > 1300) {
        $('.headerOne').text(titles[2]);
    }
    if(pos > 1800) {
        $('.headerOne').text(titles[3]);
    }
});