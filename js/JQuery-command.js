
$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
      navigation : true,
      items:4,
      navigation:false,
    });
   

    $("#slider2").owlCarousel({
   
        navigation : true, // Show next and prev button
        slideSpeed : 300,
        paginationSpeed : 400,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        navigation:false,
        autoplay:true,
        autoplayTimeout:2000,
        paginationNumbers:true,
        goToFirst:true,
    });
  });
   