gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function (event) {
    /* Features Section */
    gsap.to('.features-bg', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1,
            toggleActions: "restart none none reverse"
        },
        'width': '100%',
        'height': '100%',
        'border-radius': '0 0 0 0',
    });

    /* Text banner */

    let textBannerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.text-banner',
            start: 'top 50%',
            end: 'top top',
            scrub: 0.5,
            toggleActions: "restart none none reverse"
        }
    })

    textBannerTimeline.from('.text-banner', {
        background: '#000'
    });

    textBannerTimeline.from('.text-banner__text', {
        color: '#fff'
    }, '-=0.5');

    /* Grid Block */

    function gridBlocksAnimation() {
        let gridBlocksTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.blocks-grid',
                start: 'top top',
                end: '+=100%',
                scrub: 1,
                // fastScrollEnd: true,
                // toggleActions: "restart none none reverse"
            }
        })

        gridBlocksTimeline.to('.blocks-grid .wrapper', {
            scale: 3,
            delay: 0.25,
        });

        gridBlocksTimeline.to('.blocks-grid .wrapper', {
            opacity: 0.3,
        }, "-=0.25");

        gsap.set('.price', { yPercent: 50 })

        ScrollTrigger.create({
            trigger: '.blocks-grid',
            start: 'top top',
            end: '+=200%',
            pin: true,
            pinSpacing: false,
            // toggleActions: "restart none none reverse"
        });

        gridBlocksTimeline.scrollTrigger.refresh();
        ScrollTrigger.refresh()
    }

    if (window.innerWidth >= 1024) {
        gridBlocksAnimation()
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            gridBlocksAnimation()
        }
    });

    /* Testimonials */
    //
    // let sections = gsap.utils.toArray(".testimonials__item");
    // const stopPanel = sections.findIndex((section) => section.dataset.pin);
    //
    // const tl = gsap.timeline({
    //     defaults: {
    //         ease: "none"
    //     },
    //     scrollTrigger: {
    //         trigger: ".testimonials",
    //         pin: true,
    //         scrub: 0.5,
    //         end: "+=4000",
    //     }
    // })
    //     .to(sections, {
    //         xPercent: -(100 * stopPanel),
    //         duration: stopPanel,
    //     })
    //     .to(sections, {
    //         xPercent: -(100 * (sections.length - 1)),
    //         duration: sections.length - stopPanel,
    //     });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});