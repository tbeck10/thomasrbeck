$(document).ready(function() {

  //Offset navbar when clicking anchor

  $(".navbar a").on("click touch", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  //Offset & animate jumbotron anchor

  $(".jumbotron a").on("click touch", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  //Slick carousel

  $('.carousel').slick({
    slidesToShow: 1,
    SlidestoScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    draggable: false,
    pauseOnFocus: false,
  });

});
