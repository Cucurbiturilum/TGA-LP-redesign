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

    const priceBoxes = document.querySelector(".price-boxes");

    if (priceBoxes) {
        const priceBoxesSlider = new Swiper(priceBoxes, {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
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
    }


    /* Testimonials */

    const testimonialsMobile = document.querySelector(".testimonials__mobile");
    const testimonialsDesktop = document.querySelector(".testimonials__desktop");
    let vwInPx = Math.round(window.innerWidth / 100);

    if (testimonialsMobile) {
        const testimonialsMobileSlider = new Swiper(testimonialsMobile, {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: true,
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.1,
                    centeredSlides: false
                }
            }
        });
    }

    if (testimonialsDesktop) {
        const testimonialsDesktopSlider = new Swiper(testimonialsDesktop, {
            slidesPerView: 'auto',
            spaceBetween: 10 * vwInPx,
            centeredSlides: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /* Projects */

    window.initProjectsSliders = function() {
        let projectItems = document.querySelectorAll(".projects__item");

        for (let i = 0; i < projectItems.length; i++) {

            let swiperContainer = projectItems[i].getElementsByClassName("projects__item-images")[0];

            if (swiperContainer) {
                new Swiper(swiperContainer, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            }
        }
    }

});