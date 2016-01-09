$(document).ready(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: '20px',
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
    $('.dropdown-menu').hide();
  });
  
  // Submenu dropdown
  $('.dropdown').on('click.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').slideToggle();
  });

  
  function initialize() {
    var myCenter=new google.maps.LatLng(33.759753,-117.991321);
    var mapProp = {
      center: myCenter,
      zoom: 13,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
      position:myCenter,
      animation:google.maps.Animation.BOUNCE
      });
    google.maps.event.addListener(map, 'click', function(event){
          this.setOptions({scrollwheel:true});
      });
    marker.setMap(map);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
  
  
  
});

