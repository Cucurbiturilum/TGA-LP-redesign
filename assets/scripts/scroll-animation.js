gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function (event) {
    /* Features Section */

    const featuresBg = document.querySelector(".features-bg");
    const featuresSection = document.querySelector(".features");

    if (featuresBg && featuresSection) {
        gsap.to(featuresBg, {
            scrollTrigger: {
                trigger: featuresSection,
                start: 'top 90%',
                end: 'top 30%',
                scrub: 1,
                toggleActions: "restart none none reverse"
            },
            'width': '100%',
            'height': '100%',
            'border-radius': '0 0 0 0',
        });
    }


    /* Text banner */

    const textBanner = document.querySelector(".text-banner");
    const titleBannerText = document.querySelector(".text-banner__text");

    if (textBanner && titleBannerText) {
        let textBannerTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: textBanner,
                start: 'top 50%',
                end: 'top top',
                scrub: 0.5,
                toggleActions: "restart none none reverse"
            }
        })

        textBannerTimeline.from(textBanner, {
            background: '#000'
        });

        textBannerTimeline.from(titleBannerText, {
            color: '#fff'
        }, '-=0.5');
    }

    /* Grid Block */

    function gridBlocksAnimation() {
        const blockGridSection = document.querySelector(".blocks-grid");
        const priceSection = document.querySelector(".price");

        console.log(priceSection, blockGridSection);

        if (blockGridSection && priceSection) {
            let gridBlocksTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: blockGridSection,
                    start: 'top top',
                    end: '+=100%',
                    scrub: 1,
                    fastScrollEnd: true,
                    toggleActions: "restart none none reverse"
                }
            })

            gridBlocksTimeline.to('.blocks-grid .wrapper', {
                scale: 3,
                delay: 0.25,
            });

            gridBlocksTimeline.to('.blocks-grid .wrapper', {
                opacity: 0.3,
            }, "-=0.25");

            gridBlocksTimeline.fromTo(priceSection,
                {yPercent: 50},
                {yPercent: 0},
                "-=0.25");


            ScrollTrigger.create({
                trigger: blockGridSection,
                start: 'top top',
                end: '+=200%',
                pin: true,
                pinSpacing: false,
                toggleActions: "restart none none reverse",
            });
        }
    }

    /* Testimonials */

    function testimonialsAnimation() {
        let sections = gsap.utils.toArray(".testimonials__item");

        if (sections.length > 0) {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".testimonials",
                    start: 'top top',
                    end: '+=4000px',
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                }
            });
        }
    }

    if (window.innerWidth >= 1024) {
        gridBlocksAnimation();
        testimonialsAnimation();
    }

    window.addEventListener('resize', function () {
        ScrollTrigger.refresh();
        if (window.innerWidth >= 1024) {
            gridBlocksAnimation();
            testimonialsAnimation()
        }
    });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});