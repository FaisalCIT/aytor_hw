$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'slider_dots',
    });

    $('.arrival_slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow:'<i class="fa-solid fa-chevron-left arrival_arrow"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right arrival_arrow"></i>',
    })
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))