$(document).ready(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    /* Just changed this to get the bottom dots navigation */
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
  });
  
  // hamburger menu toggle
  $(".menu").hide();
  $(".hamburger").click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
    });
  });
  
});