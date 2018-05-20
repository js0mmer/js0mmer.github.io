/* global $ */

$('.banner').css('background-position-y', -$(window).scrollTop() / 2);

$(window).scroll(function() {
  $('.banner').css('background-position-y', -$(window).scrollTop() / 2);
});