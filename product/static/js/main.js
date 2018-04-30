;
// Start from here!!!!

$(document).ready(function() {
    $('.js-featured__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '.featured-slider__next',
        prevArrow: '.featured-slider__prev',
        infinite: false,
        responsive: [{
            breakpoint: 1330,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 666,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });



    $('.js-clients__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '.clients-slider__next',
        prevArrow: '.clients-slider__prev',
        infinite: false,
        responsive: [{
            breakpoint: 1330,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 666,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

    $('.portfolio-filter li:not(.active)').on('click', function() {
        var slider = $('.js-portfolio-slider');
        var current = $(this).attr('data-filter');

        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
        slider.empty();
        if (current !== 'all') {
            $('.portfolio-slider [data-filter="' + current + '"]').each(function() {
                $(this).clone().appendTo(slider);
            });
        } else {
            slider.html($('.portfolio-slider').html());
        }
        slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,

            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            customPaging: function(slider, i) {
                return '<a class="portfolio-dots"></a>';
            },
        });
        $(this).addClass('active').siblings().removeClass('active');
    }).filter('[data-filter="all"]').click();

    $('.js-articles-slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '.articles-slider__prev',
        nextArrow: '.articles-slider__next',

            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });

    $('.header-nav__toogle').click(function() {
        $('.header-nav').toggleClass('active');
    })


});
