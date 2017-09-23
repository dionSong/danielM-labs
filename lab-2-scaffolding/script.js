$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();    
    $(".button-collapse").sideNav();
    $('.carousel.carousel-slider').on('click', function(){
        $('.carousel.carousel-slider').carousel('next');
    });
});
