$(document).ready(function() {

  $("#nav-toggle").on("click", function(event){
    event.preventDefault();
    $(".mobile-list").slideToggle();
    $(this).toggleClass("active");
  });

  $(".mobile-list a").on("click", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });

  });

})
