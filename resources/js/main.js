$(document).ready(function() {

  //Offset navbar when clicking anchor

  $(".navbar a").on("click", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("body, html").animate({
      scrollTop : newScrollCoordinate
    });
  });

  //Offset & animate jumbotron anchor

  $(".jumbotron a").on("click", function(event){
    event.preventDefault();
    var navHeight = $("nav").height();
    var id = $(this).attr("href");
    var originalScrollCoordinate = $(id).offset().top;
    var newScrollCoordinate = originalScrollCoordinate - navHeight;
    $("body, html").animate({
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
  
  //Contact Form
  $.ajax({
    url: "/rest/contact/",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    data: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        message: message
    }),
    cache: false,
    success: function (response) {
        if (response.errorMessage) {
            this.error(response.errorMessage);
            return;
        }

        // process success message
    },
    error: function (msg) {
        // process errors
    }
});
  
  //JSON
  $('[data-customer-form]').on('submit', function (e) {
                e.preventDefault();
                var json = $(this).formToJson({pretty: true, delimiter: '.'});
                console.log(json);
            });

});
