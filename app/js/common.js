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
        asNavFor: '.project-description-slider',
        appendArrows: '.project-slider-nav',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".project-slider").on('afterChange', function(event, slick, currentSlide){
        $(".cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
        $(".cp2").text(currentSlide<10?`0${currentSlide+1}`:currentSlide+1);
    });

    $('.project-description-slider').slick({
       slidesToShow: 1,
       asNavFor: '.project-slider',
       dots: false,
       arrows: false
    });

    $('.letters-slider').slick({
        slidesToShow: 5,
        dots: true,
        appendArrows: '.letters-slider-nav',
        appendDots: '.letters-slider-nav',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.products-slider').slick({
        slidesToShow: 3,
        dots: true,
        appendArrows: '.products-slider-nav',
        appendDots: '.products-slider-nav',
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.customers-slider').slick({
        slidesToShow: 4,
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breakpoint: 910,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.btn-mobile-menu').click(function () {
       $('.navigation').toggleClass('open');
    });


    // form ajax
    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");

            $(".form").trigger("reset");
        });
        return false;
    });
});
