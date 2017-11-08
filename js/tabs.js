(function($) {
$(function() {

	$('ul.screen-7-nav-slider').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.screen-7-slider-wrap').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);