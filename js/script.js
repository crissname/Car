let iconMenu = document.querySelectorAll('.menu__icon');
let menuBody = document.querySelector('.menu__body');
let headerLogo = document.querySelector('.header__logo'); 


if (iconMenu) {
    let bodyKey = document.querySelector('body');
    iconMenu.forEach(iconMenu => {
        iconMenu.addEventListener("click", function (e) {
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            headerLogo.classList.toggle('_active');
            bodyKey.classList.toggle('_key')
        });
    });
}
// ----------------------------------------
// let header_container = document.getElementById('header_container');
// let menu_burger = document.getElementById('burger_menu');
// let body_overflow = document.querySelector('body');

// function modifyClass () {
//     if(header_container){
//         header_container.classList.toggle('_active');
//         body_overflow.classList.toggle('no_scroll');
//     }
// }

// menu_burger.addEventListener("click", modifyClass);


$(document).ready(function () {
    $('.cards__block').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.winners__cards').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.reviews__wrapper').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
        
    });
})