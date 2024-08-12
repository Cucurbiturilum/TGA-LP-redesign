document.addEventListener("DOMContentLoaded", function (event) {

    gsap.registerPlugin(ScrollTrigger)

    /* Features Section */

    gsap.to('.features', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1,
        },
        background: "#000",
        toggleActions: "play pause play reverse"
    });

    /* Text banner */

    let textBannerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.text-banner',
            start: 'top 50%',
            end: '+=200px',
            scrub: 1
        }
    })

    textBannerTimeline.from('.text-banner', {

        background: '#000',
        toggleActions: "play pause play reverse"
    });

    textBannerTimeline.from('.text-banner__text', {
        color: '#fff',
        toggleActions: "play pause play reverse"
    }, '<');

    /* Grid Block */
});