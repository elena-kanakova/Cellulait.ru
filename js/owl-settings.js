$(document).ready(function() {
	$('#').owlCarousel({
		margin:0, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера        
        itemElement:'div',
        navClass:[ 'btn-gallery-left', 'btn-gallery-right'],
        navText: false,
        dots: true,
        dotsContainer: '.upper-slider-control',
        dotsClass: '.upper-slider-dots',
        dotClass: 'upper-slider-control', 
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	});
});

