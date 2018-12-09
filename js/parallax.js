/* global $ */

var mobile = screen.width <= 800;

if(mobile) {
    $('.banner').css('background-position-y', $(window).scrollTop() / 2);
} else {
    $('.banner').css('background-position-y', -$(window).scrollTop() / 2);
}

$(window).scroll(function() {
    if(mobile) {
        $('.banner').css('background-position-y', $(window).scrollTop() / 2);
    } else {
        $('.banner').css('background-position-y', -$(window).scrollTop() / 2);
    }
});