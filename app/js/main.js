$(document).ready(function () {

  const headerSlider = $('.owl-carousel');
  headerSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 2000
  });



  $('#headerSliderRight').click(function () {
    headerSlider.trigger('next.owl.carousel');
  })

  $('#headerSliderLeft').click(function () {

    headerSlider.trigger('prev.owl.carousel', [300]);
  })

});