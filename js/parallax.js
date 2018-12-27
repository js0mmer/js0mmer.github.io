function isMobile() {
  return screen.width <= 800;
}

if (isMobile()) {
  $('.banner').css('background-position-y', $(window).scrollTop() / 2);
} else {
  $('.banner').css('background-position-y', -$(window).scrollTop() / 2);
}

$(window).scroll(() => {
  if (isMobile()) {
    $('.banner').css('background-position-y', $(window).scrollTop() / 2);
  } else {
    $('.banner').css('background-position-y', -$(window).scrollTop() / 2);
  }
});