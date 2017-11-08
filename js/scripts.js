//Скрипт для подложки меню при прокрутке
$(function () {
 
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 94) {
        $(".main-header-background").fadeIn();
    }
    else {
        $(".main-header-background").fadeOut();
    }
    });
 
});

//Табы к слайдеру с отзывами
(function($) {
$(function() {

	$('ul.screen-7-nav-slider').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.screen-7-slider-wrap').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);

//Мобильное меню с фоном
$(function () {
    $('.mobile-nav-btn').on('click', function() {
        if ($('.main-nav').css("display") == "none") {
            $('.main-nav').fadeIn();
            $('.overlay').fadeIn();
        }
        else {
            $('.main-nav').fadeOut();
            $('.overlay').fadeOut();
        };        
    });
    
    
    
    if ($(window).width() <= 450 ) {
        $(('a[name=link]')).on('click', function() {
            $('.main-nav').fadeOut();
            $('.overlay').fadeOut();
    });
    };
    
});

