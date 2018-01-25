$(function() {
	$('.navbar-brand').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500, 'linear');
	});
});