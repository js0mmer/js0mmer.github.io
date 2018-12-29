function scrollTop(e) {
  e.preventDefault();
  
  $('html, body').animate({
    scrollTop: 0
  }, 500, 'linear');
}

// scroll to top when brand is clicked
$('.navbar-brand').on('click', (e) => {
  scrollTop(e)
});

// scroll to top when active tab is clicked
$('.active').on('click', (e) => {
  scrollTop(e)
});

// remove blur and make text invisible when mobile nav collapses
$('nav').on('hide.bs.collapse', () => {
  $('.content').css('filter', 'none');
  $('.navbar-nav li a').css('color', 'transparent');
});

// add blur and make text visible when mobile nav expands
$('nav').on('show.bs.collapse', () => {
  $('.content').css('filter', 'blur(4px) opacity(75%)');
  $('.navbar-nav li a').css('color', '#333');
});

// fix stuff in case window resizes, convert between mobile & desktop site
$(window).resize(() => {
  if(screen.width > 800) { // desktop site
    $('.content').css('filter', 'none');
    $('.navbar-nav li a').css('color', '#777');
    $('.navbar-header').css('background', 'transparent');
    
    if ($('.jumbotron').hasClass('home-bg') && $(window).scrollTop() <= 20) { // if on top of home page
      $('.navbar').css('background', 'transparent'); // make navbar transparent
      $('.navbar').css('border-color', 'transparent'); // and remove the border
    } else {
      $('.navbar').css('background', 'rgb(231, 231, 231)'); // otherwise give it a bg color
    }
  } else { // mobile site
    $('.navbar-nav').css('background', 'transparent');
    $('.navbar').css('background', 'transparent');
    
    // if its not the home page or the user scrolled then give the navbar a bg color
    if (!$('.jumbotron').hasClass('home-bg') || $(window).scrollTop() > 20) $('.navbar-header').css('background', 'rgb(231, 231, 231)');
    
    if ($('.navbar-collapse').hasClass('in')) { // if navbar is expanded
      // make sure blur and colors are correct
      $('.content').css('filter', 'blur(4px) opacity(75%)');
      $('.navbar-nav li a').css('color', '#333');
    }
  }
});