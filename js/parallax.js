/* global $ */

var mobile = screen.width <= 800;
var offsetX = screen.width * 0.01;
var offsetY = screen.height * 0.01;

if(mobile) {
    $('.banner').css('background-position-y', $(window).scrollTop() / 2 - offsetY);
} else {
    $('.banner').css('background-position-y', -$(window).scrollTop() / 2 - offsetY);
}

$(window).scroll(function() {
    if(mobile) {
        $('.banner').css('background-position-y', $(window).scrollTop() / 2 - offsetY);
    } else {
        $('.banner').css('background-position-y', -$(window).scrollTop() / 2 - offsetY);
    }
});