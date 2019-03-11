var isMobile = () => window.innerWidth <= 800;

export function parallax(selector, offsetY=0, enableOnMobile=true) {
  var scrollTop = document.documentElement.scrollTop;

  if (isMobile() && enableOnMobile) {
    selector.style.backgroundPositionY = scrollTop / 2 + 'px';
  } else if (!isMobile()) {
    selector.style.backgroundPositionY = -scrollTop / 2 - offsetY + 'px';
  } else {
    selector.style.backgroundPositionY = 0;
  }
}