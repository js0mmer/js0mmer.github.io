$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault();
  
  $('.nav-toggle').removeClass('open');
  $('.menu').removeClass('active');
  $('.banner').removeClass('blur');
  $('.construction').toggleClass('blur');

  var href = $(this).attr('href');

  if (href == '#') {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  } else {
    $('html, body').animate({
      scrollTop: $().offset().top - 32
    }, 500);
  }
});