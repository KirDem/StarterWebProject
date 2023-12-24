$(document).ready(function() {
    $('.reviews-slider').slick({
      infinite: true,
      speed: 500,
      prevArrow: $("#reviews-previous"),
      nextArrow: $("#reviews-next"),
      fade: true,
      swipe: false, 
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    
    $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
      $('#reviews-number').text('0' + (currentSlide + 1));
    });

}
