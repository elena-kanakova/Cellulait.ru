$(document).ready(function() {
	$('.slider').owlCarousel({
		margin:0, //Отступ от картино если выводите больше 1
		nav:false, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера     
        autoplaySpeed: 10,
        itemElement:'div',
        navClass:[ 'btn-gallery-left', 'btn-gallery-right'],
        navText: false,
        dots: true,
        dotsContainer: '.upper-slider-control',
        dotsClass: '.screen-1-slider-dots',
        dotClass: '.upper-slider-control', 
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
        0:{
            items:1,
        },
        451:{
            items:1,
        }
    }
	});
});

$(document).ready(function() {
    
    $('.tab-content').owlCarousel({
		margin:0, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:true,
        itemElement:'div',
        navClass:[ 'screen-7-slider-arrow-left', 'screen-7-slider-arrow-right'],
        navText: false,
        dots: false, 
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
        0:{
            items:1,
        },
        451:{
            items:1,
        }
    }
	});
});

$(document).ready(function() {
    
    $('.screen-8-slider').owlCarousel({
		margin:0, //Отступ от картино если выводите больше 1
		nav:true, //Отключил навигацию
		autoplay:true, //Автозапуск слайдера
        itemElement:'div',
        navClass:[ 'screen-8-slider-arrow-left', 'screen-8-slider-arrow-right'],
        navText: false,
        dots: false,
        responsive:{
        0:{
            items:1,
        },
        451:{
            items:3,
        }
    }
	});
});

