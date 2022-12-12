function myFunction(x) {
  x.classList.toggle("change");

}
$(document).ready(function () {
  $('.menu').click(function () {
    $('ul#menu').toggleClass('active');
    $('header').toggleClass('h_active');
  })
})

$(document).ready(function () {
  $('.slide').slick({
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows:false,
    dots:true,
    variableWidth: true,
    variableHeight: true,
    cssEase: 'linear',
    
  });  
})
$(document).ready(function(){
  $('.slider').slick({
    arrows:true,
    dots:false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow:"<img class='slick-next' src='img/arrow.png'>",
    prevArrow:"<img class='slick-prev' src='img/arrow_prev.png'>",
  })
})
