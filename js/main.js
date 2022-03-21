$(document).ready(function() {
    $(".owl-carousel").owlCarousel();


})

// $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     // responsive: {
//     //     0: {
//     //         items: 1
//     //     },
//     //     600: {
//     //         items: 4
//     //     },
//     //     1000: {
//     //         items: 4
//     //     }
//     // }
//     items: 5,
// });




/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 28,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 3,
        }
    }
});

var menu = document.getElementById("bar");
var items = document.getElementById("items");

items.style.right = '-300px';
menu.onclick = function() {
    if (items.style.right == '-300px') {
        items.style.right = '0';
    } else {
        items.style.right = '-300px';
    }
}