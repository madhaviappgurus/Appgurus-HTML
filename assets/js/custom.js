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

    // $('.testimonials--slider').slick({
    //     dots: true,
    //     arrows: false,
    //     autoplay: false,
    //     infinite: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // speed: 2000,
    // });








    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 40,
        loop: true,
        backDelay: 3000,
        backSpeed: 5,
    });


    /**** testimonial video start ****/

    //play/pause on double click on the video
    $('.videoplayer-modal').on('click', function (e) {
        if (this.paused) {
            this.play();
        }else{
            this.pause();
        }
    });

    //play/pause of the video when the modal opens/closes. 
        $('.video-modal').on('show.bs.modal', function() { //show modal event for an element which has class 'modal'
            var id = $(this).attr('id'); //saves in the var the ID value of the opened modal
            var video = document.getElementById(id).querySelectorAll("video"); //Find the element 'video' inside of the modal defined by the ID previosly saved

            $(video)[0].play(); //plays what we saved on 'video' variable      
        });

        $('.video-modal').on('hidden.bs.modal', function() { //show modal event for an element which has class 'modal'
            var id = $(this).attr('id');//saves in the var the ID value of the closed modal
            var video = document.getElementById(id).querySelectorAll("video");//Find the element 'video' inside of the modal defined by the ID previosly saved

            $(video)[0].pause(); //pauses the video
            $(video)[0].currentTime = 0; //rests the video to 0 for have it from the beging when the user opens the modal again
        });

    /**** testimonial video end ****/


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


