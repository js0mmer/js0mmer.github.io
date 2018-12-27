function scrollTop(e) {
  e.preventDefault();
  
  $('html, body').animate({
    scrollTop: 0
  }, 500, 'linear');
}

// Scroll to top when brand is clicked
$('.navbar-brand').on('click', (e) => {
  scrollTop(e)
});

// Scroll to top when active tab is clicked
$('.active').on('click', (e) => {
  scrollTop(e)
});

// remove blur and make text invisible when mobile nav collapses
$('nav').on('hide.bs.collapse', function() {
  $('.content').css('filter', 'none');
  $('.navbar-nav li a').css('color', 'transparent');
});

// add blur and make text visible when mobile nav expands
$('nav').on('show.bs.collapse', function() {
  $('.content').css('filter', 'blur(4px) opacity(75%)');
  $('.navbar-nav li a').css('color', '#333');
  // in case window resizes
  $('.navbar-nav').css('background', 'transparent');
  $('.navbar').css('background', 'transparent');
});

// fix stuff in case window resizes, convert between mobile & desktop site
$(window).resize(() => {
  if(screen.width > 800) {
    $('.content').css('filter', 'none');
    $('.navbar-nav li a').css('color', '#777');
    $('.navbar').css('background', 'rgb(231, 231, 231)');
    $('.navbar-header').css('background', 'transparent');
  } else {
    $('.navbar-nav').css('background', 'transparent');
    $('.navbar').css('background', 'transparent');
    
    if ($('.navbar-collapse').hasClass('in')) { // if navbar is expanded
      // make sure blur and colors are correct
      $('.content').css('filter', 'blur(4px) opacity(75%)');
      $('.navbar-nav li a').css('color', '#333');
    }
  }
});