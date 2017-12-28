$(document).ready(function() {

  $(".navbar-nav a").on("click", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });
  });

});
