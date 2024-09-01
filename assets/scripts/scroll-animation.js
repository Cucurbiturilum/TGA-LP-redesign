gsap.registerPlugin(ScrollTrigger);
document.addEventListener("DOMContentLoaded", function (event) {
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
                scale: 2,
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
                end: '+=150%',
                pin: true,
                pinSpacing: false,
                toggleActions: "restart none none reverse",
            });
        }
    }


    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
            gridBlocksAnimation();
        },
        all: function () {
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
        },
    });
});

window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});