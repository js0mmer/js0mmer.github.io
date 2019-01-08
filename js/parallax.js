var isMobile = () => screen.width <= 800;

function parallax(selector, offsetY=0, enableOnMobile=true) {
  // align bg on load
  adjustBgPos(selector, offsetY, enableOnMobile);

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
  } else {
    $(selector).css('background-position-y', -$(window).scrollTop() / 2 - offsetY);
  }
}