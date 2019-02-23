$(document).on('click', 'a[href^="#"]', function(e) {
  e.preventDefault();
  
  $('.nav-toggle').removeClass('open');
  $('.menu').removeClass('active');
  $('.banner').removeClass('blur');
  $('.construction').toggleClass('blur');
  
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 32
  }, 500);
});