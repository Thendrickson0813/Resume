"use strict";
// $(document).ready(function() {
    /* Create HTML5 element for IE */
    //document.createElement("section");
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('.scroller').addClass('stuck');
        } else {
            $('.scroller').removeClass('stuck');
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 60) {
            $('.scroll').addClass('stuckTwo');
        } else {
            $('.scroll').removeClass('stuckTwo');
        }
    });
// });