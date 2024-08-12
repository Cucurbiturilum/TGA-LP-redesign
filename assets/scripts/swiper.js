document.addEventListener("DOMContentLoaded", function (event) {

    function createHeroSlider(selector, reverseDirection = false) {
        return new Swiper(selector, {
            speed: 7000,
            loop: true,
            slidesPerView: "auto",
            allowTouchMove: false,
            spaceBetween: 12,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: reverseDirection
            },
            breakpoints: {
                992: {
                    direction: "vertical",
                    spaceBetween: 32,
                }
            }
        });
    }

    const heroSliderTop = createHeroSlider(".hero-slider-top");
    const heroSliderBottom = createHeroSlider(".hero-slider-bottom", true);


    /* Price box */

    const priceBoxes = new Swiper(".price-boxes", {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            768:{
                slidesPerView: 2.1,
                centeredSlides: false
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false
            }
        }
    });
});