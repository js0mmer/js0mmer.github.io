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

document.onmousemove = function(e) {
	var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
	
	$('.banner').css('background-position-x', (x - screen.width / 2) / -100 - offsetX);
    
	if(mobile) {
	    $('.banner').css('background-position-y', $(window).scrollTop() / 2 + (y - screen.height / 2) / -100 - offsetY);
	} else {
    	$('.banner').css('background-position-y', -$(window).scrollTop() / 2 + (y - screen.height / 2) / -100 - offsetY);
	}
};