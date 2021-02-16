$(document).ready(function () {
    $('.dropdown').click(function(event){
        event.preventDefault();
        $('.dropdown-open').slideToggle();
    })
    $('#top').click(function(){
        $('html,body').animate({
            scrollTop:0
        },700)
    })



    lightbox.option({
        'resizeDuration': 1000,
        'wrapAround': true,
        'positionFromTop': 200,
        'showImageNumberLabel':false,
    })

})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });