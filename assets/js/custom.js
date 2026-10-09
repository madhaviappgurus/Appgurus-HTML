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
        }]
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
        }]
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
        }]
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
        }]
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
        }]
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
            breakpoint: 767,
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
        touchThreshold: 100,
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
        }]
    });


    $('.wca-bussiness-slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: false,
        slidesToShow: 5,
        touchThreshold: 100,
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
        }]
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


    $(function() {

        var scroll = $(document).scrollTop();
        var navHeight = $('.header-main').outerHeight();

        $(window).scroll(function() {

            var scrolled = $(document).scrollTop();

            if (scrolled > navHeight) {

                $('.header-main').addClass('active');
            } else {
                $('.header-main').removeClass('active');
            }

            if (scrolled > scroll) {
                $('.header-main').removeClass('sticky');
            } else {
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


$(window).on('load', function() {
    setTimeout(function() {
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

$('.sdropdown-slider').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('#menu_servece1,#menu_industries1').click(function() {
    $('.sdropdown-slider').slick('slickPlay');
});

$('#menu_servece1,#menu_industries1').hover(function() {
    $('.sdropdown-slider').slick('slickPlay');
});


// Service Menu Tabs on Header - Hover + Click
if ($('#service-Tabs').length) {
    const $serviceTabs = $('#service-Tabs .nav-link');
    const $tabContent = $('#serviceTabsContent .tab-pane');
    $serviceTabs.on('mouseenter', function() {

        const $this = $(this);
        const target = $this.attr('data-bs-target');

        if (!target) return;

        // Remove active state from all tabs and contents
        $serviceTabs.removeClass('active');
        $tabContent.removeClass('show active');

        // Add active state only to hovered tab
        $this.addClass('active');

        // Show only its corresponding content
        $(target).addClass('show active');
    });

}

// Header Service Menu & Company Menu Backdrop Overlay
(function() {
    if (window.innerWidth > 992) {

        var overlayTimeout = null;

        function activateOverlay() {
            clearTimeout(overlayTimeout);
            $('body').addClass('menu-overlay-active');
        }

        function deactivateOverlay() {
            clearTimeout(overlayTimeout);
            overlayTimeout = setTimeout(function() {
                var isHovered = $('.header-main .navbar-nav > li.service-mega-menu:hover, .header-main .navbar-nav > li.company-main:hover, .header-main .navbar-nav > li.industries_menu:hover').length > 0;
                var isCollapseOpen = $('#servmenu_collapse1.show, #company_collapse1.show, #industries_collapse1.show').length > 0;
                if (!isHovered && !isCollapseOpen) {
                    $('body').removeClass('menu-overlay-active');
                }
            }, 60);
        }

        // Desktop hover events for Service Menu & Company Menu
        $('.header-main .navbar-nav > li.service-mega-menu, .header-main .navbar-nav > li.company-main, .header-main .navbar-nav > li.industries_menu').on('mouseenter', function() {
            if (window.innerWidth >= 992) {
                activateOverlay();
            }
        }).on('mouseleave', function() {
            if (window.innerWidth >= 992) {
                deactivateOverlay();
            }
        });

        // Bootstrap collapse events (clicks on desktop or mobile)
        $('#servmenu_collapse1, #company_collapse1, #industries_collapse1').on('show.bs.collapse shown.bs.collapse', function() {
            activateOverlay();
        }).on('hidden.bs.collapse', function() {
            deactivateOverlay();
        });

        // Dismiss open menus and overlay on clicking outside header when overlay is active
        $(document).on('click', function(e) {
            if ($('body').hasClass('menu-overlay-active') && !$(e.target).closest('.site-header').length) {
                $('#servmenu_collapse1, #company_collapse1, #industries_collapse1').collapse('hide');
                $('body').removeClass('menu-overlay-active');
            }
        });

        // Also close overlay when main navbar collapses (on mobile)
        $('#navbarNavDropdown').on('hidden.bs.collapse', function() {
            deactivateOverlay();
        });

        // Auto-dismiss overlay when user scrolls past the header height threshold
        $(window).on('scroll.menuOverlay', function() {
            if ($('body').hasClass('menu-overlay-active')) {
                var scrolled = $(document).scrollTop();
                var threshold = $('.header-main').outerHeight() || 80;
                if (scrolled > threshold) {
                    $('#servmenu_collapse1, #company_collapse1, #industries_collapse1').collapse('hide');
                    $('body').removeClass('menu-overlay-active');
                }
            }
        });
    }
})();


// AI Tool Js Start
(function () {
    "use strict";

    const widget = document.getElementById("aiWidget");
    const toggle = document.getElementById("aiToggle");
    const panel = document.getElementById("aiPanel");
    const closeButton = document.getElementById("aiClose");
    const toast = document.getElementById("aiToast");

    if (!widget || !toggle || !panel || !closeButton || !toast) return;
    if (widget.dataset.aiInit) return; // guard against double initialisation
    widget.dataset.aiInit = "1";

    const promptText =
        "I am evaluating App Gurus. What are the key takeaways from their website? https://appgurus.com.au";

    const providers = {
        chatgpt: "https://chatgpt.com/?q=" + encodeURIComponent(promptText),
        gemini: "https://www.google.com/search?udm=50&aep=11&q=" +
            encodeURIComponent(promptText)
    };

    let toastTimer;

    function openWidget() {
        widget.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        panel.setAttribute("aria-hidden", "false");
    }

    function closeWidget() {
        widget.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        panel.setAttribute("aria-hidden", "true");
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("show");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("show"), 5000);
    }

    function copyPrompt() {
        // Fire-and-forget so we never delay window.open (keeps user activation)
        try {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(promptText).catch(legacyCopy);
                return;
            }
        } catch (e) {}
        legacyCopy();
    }

    function legacyCopy() {
        try {
            const ta = document.createElement("textarea");
            ta.value = promptText;
            ta.setAttribute("readonly", "");
            Object.assign(ta.style, { position: "fixed", left: "-9999px", top: "0" });
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
        } catch (e) {}
    }

    function openProvider(url) {
        // Open synchronously inside the click handler to avoid popup blocking
        const tab = window.open(url, "_blank", "noopener,noreferrer");
        if (!tab) window.location.href = url; // popup blocked: navigate instead
    }

    toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        widget.classList.contains("is-open") ? closeWidget() : openWidget();
    });

    closeButton.addEventListener("click", (event) => {
        event.stopPropagation();
        closeWidget();
    });

    panel.addEventListener("click", (event) => event.stopPropagation());

    document.addEventListener("click", (event) => {
        if (!widget.contains(event.target)) closeWidget();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") closeWidget();
    });

    document.querySelectorAll(".ai-provider").forEach((button) => {
        button.addEventListener("click", () => {
            const provider = button.dataset.provider;
            if (!providers[provider]) return;

            copyPrompt(); // fallback if the provider drops ?q= on login/verification
            openProvider(providers[provider]);
            closeWidget();

            showToast(
                provider === "chatgpt"
                    ? "ChatGPT opened. If it asks you to log in or verify, just paste your prompt (already copied)."
                    : "Google AI Mode opened with your prompt."
            );
        });
    });
})();
// AI Tool Js End