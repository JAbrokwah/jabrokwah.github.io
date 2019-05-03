$('.navbar-nav li a').click(function(e){
  e.preventDefault();
  $('.navbar-nav li').removeClass('active').addClass('inactive');
  $(this).parent('li').addClass('active');
});