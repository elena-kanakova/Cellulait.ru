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

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollbtn').fadeIn();
        } else {
            $('.scrollbtn').fadeOut();
        }
    });

    $('.scrollbtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, {
            duration: 1000
        });
        return false;
    });
    
    $('a.nav-link, a.nav-link-2').click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + -110 + "px"
        }, {
            duration: 800
        });
    });

});

$(document).ready(function() {
	$('.slider').owlCarousel({
		margin:0, 
		nav:false,
		autoplay:true, 
        autoplaySpeed: 10,
        loop: true,
        itemElement:'div',
        navClass:['btn-gallery-left', 'btn-gallery-right'],
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
    $('.screen-8-slider').owlCarousel({
		margin:0, 
		nav:true, 
		autoplay:false,
        loop: false,
        itemElement:'div',
        navClass: ['screen-8-slider-arrow-left', 'screen-8-slider-arrow-right'],
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

$(document).ready(function() {
    $('.screen-9-slider-wrap').owlCarousel({
		margin:0,
		nav:true, 
		autoplay:false,
        loop: false,
        itemElement:'div',
        navClass: ['screen-9-slider-arrow-left', 'screen-9-slider-arrow-right'],
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

//Табы к слайдеру с отзывами
$(document).ready(function() {
    (function($) {
    $(function() {
        $('ul.screen-7-nav-slider').on('click', 'li:not(.active)', function () {         
           $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.screen-7-slider-wrap').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
    })(jQuery);
    
    $('.screen-7-slider-content-1').owlCarousel({
        loop: false,
		margin:0,
		nav:true, 
		autoplay:false,
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
    
    $('.screen-7-slider-content-2').owlCarousel({
        loop: false,
		margin:0,
		nav:true, 
		autoplay:false,
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
    
    $('.screen-7-slider-content-3').owlCarousel({
        loop: false,
		margin:0,
		nav:true, 
		autoplay:false,
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

//Мобильное меню с фоном
$(window).bind('resize', function(){ 
    if ($(window).width() < 450) {
        $('.main-nav').css('display','none');
        $('.main-nav, .overlay-3').addClass('fadeout'); 
        $('.overlay-3').addClass('fadeout');
} 
else { 
    if ($(window).width() > 450) {  
        $('.main-nav').css('display','block'); 
        $('.main-nav, .overlay-3').removeClass('fadeout');
        $('.overlay-3').css('display','none');
        }
    }
}).trigger('resize');
        
    $('.mobile-nav-btn').on('click', function() {
        if ($('.fadeout').css("display") == "none") {
            $('.fadeout').fadeIn(200);
        }
    });
    
    $(('a.nav-link')).on('click touch', function() { 
        $('.fadeout').fadeOut(200); 
    }); 
    
    $('body').on('click', '.overlay-3', function(event) {
    event.preventDefault();
    $('.fadeout').fadeOut(200);
    });  

//Увеличение фото при клике для слайдера с лицензиями
$(function(){
  $('.screen-9-silder-slide-img').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div class="fullsize"><img src="'+i_path+'"><div class="close-popup flex center"><i><span>x</span></i></div></div>');
    $('.fullsize').css({top: (window.scrollY + 10 + 'px')});
    $('.overlay, .fullsize').fadeIn('200');
  });
  $('body').on('click', '.close-popup, .overlay', function(event) {
    event.preventDefault();
    $('.overlay, .fullsize').fadeOut('200', function() {
      $('.close-popup, .fullsize').remove();
    });
  });
});

//Модальные окна 
$(document).ready(function() {   
    //Модальные окна
    $(('.modal-link')).click(function(e) {
    e.preventDefault();
    
    var id = $(this).attr('href');
    
    $('.overlay').fadeIn(200); 
    $(id).css('top', window.scrollY + 20 + 'px');
    $(id).fadeIn(200); 
    });
    
    $('.close-modal').click(function (e) { 
    e.preventDefault();
    $('.overlay, .modal').fadeOut(200);
    }); 
    
    $('body').on('click', '.overlay', function(event) {
    event.preventDefault();
    $('.overlay, .modal').fadeOut('200');
    });
    
    //Формы
    $(('a.modal-link-2')).click(function(e) {
    e.preventDefault();
    $('#modal-form').css('top', window.scrollY + 100 + 'px');
    $('.overlay-2').fadeIn(200); 
    $('#modal-form').fadeIn(200); 
    });
    
    $('.close-modal-2').click(function (e) { 
    e.preventDefault();
    $('.overlay-2, #modal-form, .modal-form-thank-you').fadeOut('200');
    }); 
    
    $('body').on('click', '.overlay-2', function(event) {
    event.preventDefault();
    $('.overlay, .overlay-2, .modal, #modal-form, .modal-form-thank-you').fadeOut('200');
    });
    
  });
  
//Маска для телефона 
 $(function(){
  $(".phone").mask("+7 (999) 999-9999");
});

//AjaxForm действие после отправки формы
$(document).on('af_complete', function(event, response) {
    var fields = {
        name: "Имя",
        phone: "Телефон",
        message: "Сообщение",
        select: "Направление",
        email: "Email"
    };
    if (response.success) {
        // Скрываем форму и показываем блок!
        $("#modal-form, .overlay-2").fadeOut(200);
        $(".modal-form-thank-you").css('top', window.scrollY + 100 + 'px');
        $(".overlay-2, .modal-form-thank-you").fadeIn(200);
        setTimeout(function(){$('.overlay-2, .modal-form-thank-you').fadeOut('200')}, 4000);
    } else {
        for (var prop in response.data) {
            // Выводим сообщение через jGrowl для всех полей с ошибками.
            // Если хотите, чтобы сообщения оставались, добавьте вторым параметром true
            AjaxForm.Message.error("Заполните поле '"+fields[prop]+"'");
        }
    }
    // Отменяем вывод стандартного сообщения
    response.message='';
});

//Magnific gallery
$(document).ready(function() {
$('.politics-popup-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
});