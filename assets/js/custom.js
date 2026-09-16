$(document).ready(function() {


    $('.clients-logo-inner').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        // slidesToShow: 5,
        speed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

   

    $('.team-title-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        variableWidth: true,
        autoplaySpeed: 0,
        // slidesToShow: 5,
        speed: 8000,
        cssEase: "linear",
        pauseOnHover: false,
    });

    $('.team-person-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1400,
                settings: {
                    autoplay: true,
                    autoplaySpeed: 2000,
                    slidesToShow: 5,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });



    $('.industries-slider-main').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.case-studies-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    dots: false
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



    $('.blogs-sec-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.testimonials--slider').slick({
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonials--slider .slick-dots'
        // speed: 2000,
    });

    $('.testimonials--slider .slick-dots').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: false,
        // slidesToShow: 10,
        // slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
         asNavFor: '.testimonials--slider',
        autoplaySpeed: 0,
        // pauseOnHover: false,
    });

   


    const $slider = $('.ai-dev-services-slider');
    const $track = $('.custom-scrollbar-track');
    const $thumb = $('.custom-scrollbar-thumb');

    let totalSlides = 0;
    let visibleSlides = 4;

    $slider.on('init', function(event, slick) {
        totalSlides = slick.slideCount;
        visibleSlides = slick.options.slidesToShow;
        updateThumbWidth(slick);
        updateThumbPosition(slick.currentSlide);
    });

    $slider.slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 100,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint:767,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
        updateThumbWidth(slick);
        updateThumbPosition(currentSlide);
    });

    function updateThumbWidth(slick) {
        const trackWidth = $track.width();
        const thumbWidth = (slick.options.slidesToShow / slick.slideCount) * trackWidth;
        $thumb.css('width', thumbWidth + 'px');
    }

    function updateThumbPosition(currentSlide) {
        const trackWidth = $track.width();
        const thumbWidth = $thumb.width();
        const maxScrollable = totalSlides - visibleSlides;
        const maxLeft = trackWidth - thumbWidth;
        const percent = currentSlide / maxScrollable;

        $thumb.css('left', percent * maxLeft + 'px');
    }

    $track.on('click', function(e) {
        const trackOffset = $(this).offset().left;
        const clickX = e.pageX - trackOffset;
        const trackWidth = $(this).width();
        const clickPercent = clickX / trackWidth;
        const maxSlide = totalSlides - visibleSlides;
        const goToSlide = Math.round(clickPercent * maxSlide);

        $slider.slick('slickGoTo', goToSlide);
    });

    // Update on resize
    $(window).on('resize', function() {
        const slick = $slider.slick('getSlick');
        updateThumbWidth(slick);
        updateThumbPosition(slick.currentSlide);
    });



    $('.iot-industry-served-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 100,
        responsive: [{
            breakpoint: 1599,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 580,
            settings: {
                slidesToShow: 1
            }
        }, ]
    });

     $('.ai-client-review-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        slidesToShow: 3,
        touchThreshold:100,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.wca-bussiness-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        slidesToShow: 5,
        touchThreshold:100,
        slidesToScroll: 1,
        // speed: 2000,
        
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    $('.iws_row_slider').slick({
        speed: 5000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        variableWidth: true
    });

    $('.iws_row_slider2').slick({
        speed: 5000,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        swipe: false,
        slidesToScroll: 1,
        rtl: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        variableWidth: true
    });

    // $(".iws_row_slider").slick({
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     speed: 5000,
    //     arrows: false,
    //     swipe: false,
    //     slidesToShow: 4,
    //     cssEase: "linear",
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     rtl: true
    // });






    // var typed = new Typed("#typed", {
    //     stringsElement: '#typed-strings',
    //     typeSpeed: 40,
    //     loop: true,
    //     backDelay: 3000,
    //     backSpeed: 5,
    // });




    // scroll hide and show

    $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $(".navbar-toggler").click(function() {
        $("body").toggleClass("no-scroll");
    });

    $(".header-menu a").click(function() {
        $("body").removeClass("no-scroll");
    });

    $('.header-btn-main a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });


    // top nav header scroll active class add start

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll > 0) {
    //         $(".header-main").addClass("active");
    //     } else {
    //         $(".header-main").removeClass("active");
    //     }
    // });

    
    $(function(){
  
      var scroll = $(document).scrollTop();
      var navHeight = $('.header-main').outerHeight();
      
      $(window).scroll(function(){
        
        var scrolled = $(document).scrollTop();
         
        if(scrolled > navHeight){

          $('.header-main').addClass('active');
            }else{
            $('.header-main').removeClass('active');
            }

          if(scrolled > scroll){
            $('.header-main').removeClass('sticky');
            }else{
            $('.header-main').addClass('sticky');
            }
        
          scroll = $(document).scrollTop();

      }); 

    });



    // top nav header scroll active class add end


    // setInterval(function () {
    //   var $snowflake = $("<div></div>").addClass("snowflake");
    //   $snowflake.css({
    //     left: Math.random() * $(window).width() + "px",
    //     width: (Math.random() * 10) + "px",
    //     height: (Math.random() * 10) + "px", // Ensures height matches width
    //     animationDuration: (Math.random() * 3 + 2) + "s",
    //     opacity: Math.random()
    //   });
    //   $(".banner-sec").append($snowflake);
      
    //   setTimeout(function () {
    //     $snowflake.remove();
    //   }, 3000);
    // }, 100);


}); 




        // var $portfolioItem = $('.grid').isotope({
        //     itemSelector: '.grid-item',
        //     layoutMode: 'fitRows'
        // });

        // $portfolioItem.imagesLoaded(function() {
        //     $portfolioItem.isotope('layout');
        // });

        // $('.filter-button-group button').click(function() {
        //     $('.filter-button-group button').removeClass('is-checked');
        //     $(this).addClass('is-checked');

        //     var selector = $(this).attr('data-filter');
        //     $portfolioItem.isotope({
        //         filter: selector
        //     });
        //     return false;
        // });


        $(window).on('load',function(){
            setTimeout(function(){ 
                $('.portfolio-loader-main').fadeOut('slow');
            });
        });


$('.ai-p-step-info-click').each(function() {
    var $parent = $(this).closest('.ai-p-step-info-main');

    // Hover behavior
    $(this).hover(
        function() {
            $parent.addClass('open-tooltip');
        },
        function() {
            $parent.removeClass('open-tooltip');
        }
    );

    // Click behavior
    // $(this).on('click', function(e) {
    //     e.preventDefault();
    //     $parent.toggleClass('open-tooltip');
    // });
});

