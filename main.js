$(function() {
	$('#about-btn').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#about').offset().top - $('nav').height()
		}, 500, 'linear');
	});
});

$(function() {
	$('.navbar-brand').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500, 'linear');
	});
});