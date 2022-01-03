// Carrousel header
var myCarousel = document.querySelector('#carouselSiscoMobile', '#carouselSiscoSm', '#carouselSiscoMd')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    wrap: true,
    touch: true
})

var myCarouselXl = document.getElementById('carouselSiscoXl',)
var carouselXl = new bootstrap.Carousel(myCarouselXl, {
    interval: 6000,
    wrap: true,
    touch: true
})

var myCarouselLg = document.getElementById('carouselSiscoLg',)
var carouselLg = new bootstrap.Carousel(myCarouselLg, {
    interval: 6000,
    wrap: true,
    touch: true
})