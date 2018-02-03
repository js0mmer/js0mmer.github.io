$(function() {
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
  
  $('.navbar-toggle').on('click', (e) => {
    if($(this).attr("aria-expanded")) {
      $(this).addClass("active-toggle");
    } else {
      $(this).removeClass("active-toggle");
    }
  });
});