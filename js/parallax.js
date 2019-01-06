var isMobile = () => screen.width <= 800;

function parallax(selector, offsetY=0) {
  // align bg on load
  adjustBgPos(selector, offsetY);

  $(window).scroll(() => {
    adjustBgPos(selector, offsetY);
  });

  // fix bg position when window resizes
  $(window).resize(() => {
    adjustBgPos(selector, offsetY);
    if (isMobile()) $(selector).css('background-position-x', '50%'); // center bg horizontally on mobile
  });
}

function adjustBgPos(selector, offsetY) {
  if (isMobile()) {
    $(selector).css('background-position-y', $(window).scrollTop() / 2);
  } else {
    $(selector).css('background-position-y', -$(window).scrollTop() / 2 - offsetY);
  }
}