window.addEventListener('load', calculateHeight);
window.addEventListener('resize', calculateHeight);

function calculateHeight() {
    const headerHeight = document.querySelector('.header-main').offsetHeight;
    const screenHeight = window.innerHeight;
    document.querySelector('.home-hero .row').style.minHeight = `${screenHeight - headerHeight}px`;
}

/* Curren year */
document.getElementById("curren-year").innerHTML = new Date().getFullYear();
