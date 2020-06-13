const navRef = $(".navbar");
const returnToTop = $('#return-to-top');
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            navRef.addClass("bg-white");
            navRef.addClass("shadow");
            navRef.addClass("pt-2");
            navRef.removeClass("pt-4");
        } else {
            navRef.removeClass("bg-white");
            navRef.removeClass("shadow");
            navRef.addClass("pt-4");
            navRef.removeClass("pt-2");
        }
        if (scroll >= 50) {        // If page is scrolled more than 50px
            returnToTop.fadeIn(200);    // Fade in the arrow
        } else {
            returnToTop.fadeOut(200);   // Else fade out the arrow
        }
    });
});
returnToTop.click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});