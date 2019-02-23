var isMobile = () => screen.width <= 800;

function parallax(selector, offsetY=0, enableOnMobile=true) {
  // align bg on load
  adjustBgPos(selector, offsetY, enableOnMobile);

  // do the parallax effect on scroll
  $(window).scroll(() => {
    adjustBgPos(selector, offsetY, enableOnMobile);
  });

  // fix bg position when window resizes
  $(window).resize(() => {
    adjustBgPos(selector, offsetY, enableOnMobile);
  });
}

function adjustBgPos(selector, offsetY, enableOnMobile) {
  if (isMobile() && enableOnMobile) {
    $(selector).css('background-position-y', $(window).scrollTop() / 2);
  } else if (!isMobile()) {
    $(selector).css('background-position-y', -$(window).scrollTop() / 2 - offsetY);
  } else {
    $(selector).css('background-position-y', 0);
  }
}