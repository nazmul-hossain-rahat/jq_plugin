$(document).ready(function(){

// owlcarousel
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    // nav:true,

     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
// slick
 $('.autoplay').slick({
  // centerMode: true,
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
   dots: true,
    arrows: false,
  
});
   // slick


});