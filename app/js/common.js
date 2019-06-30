$(document).ready(function() {
    $('.main-slider').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true
    });

    $('.project-slider').slick({
        dots: false,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        slidesToShow: 3,
        appendArrows: '.project-slider-nav'
    });

    $(".project-slider").on('afterChange', function(event, slick, currentSlide){
        $(".cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
        $(".cp2").text(currentSlide<10?`0${currentSlide+1}`:currentSlide+1);
    });

    $('.letters-slider').slick({
        slidesToShow: 5,
        dots: true,
        appendArrows: '.letters-slider-nav',
        appendDots: '.letters-slider-nav',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
    });


    $('.products-slider').slick({
        slidesToShow: 3,
        dots: true,
        appendArrows: '.products-slider-nav',
        appendDots: '.products-slider-nav',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>'
    });
});
