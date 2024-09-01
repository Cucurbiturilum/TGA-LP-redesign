window.addEventListener('load', calculateHeight);
window.addEventListener('resize', calculateHeight);

function calculateHeight() {
    const headerHeight = document.querySelector('.header-main').offsetHeight;
    const screenHeight = window.innerHeight;
    document.querySelector('.home-hero .row').style.minHeight = `${screenHeight - headerHeight}px`;
}

function scrollToSection(selector) {
    debugger
    const element = document.querySelector(selector);

    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}

/* Curren year */
document.getElementById("curren-year").innerHTML = new Date().getFullYear();

/* Chocolat lightbox */
document.addEventListener("DOMContentLoaded", function (event) {
    Chocolat(document.querySelectorAll('.chocolat-parent .chocolat-image'))
})


/* Load More Team */

window.loadMore = function (){
    const teamCards = document.querySelectorAll('.team-card');
    const loadMoreButton = document.getElementById('loadMore');
    let currentCount = 6;

    // Hide all team cards beyond the initial 6
    teamCards.forEach((card, index) => {
        if (index >= currentCount) {
            card.style.display = 'none';
        }
    });

    if(loadMoreButton){
        loadMoreButton.addEventListener('click', () => {
            // Display the next 6 team cards
            for (let i = currentCount; i < currentCount + 6 && i < teamCards.length; i++) {
                teamCards[i].style.display = 'block';
            }

            currentCount += 6;

            // Hide the Load More button if all cards are visible
            if (currentCount >= teamCards.length) {
                loadMoreButton.style.display = 'none';
            }
        });
    }
}

/* Modal */

document.querySelectorAll('.modal-button').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        const href = element.getAttribute('href');
        const modalEl = document.getElementById('theModal');
        const modal = new bootstrap.Modal(modalEl);
        const modalContent = document.querySelector('#theModal .modal-body');

        // Load content into the modal
        fetch(href)
            .then(response => response.text())
            .then(html => {
                modalContent.innerHTML = html;

                modalEl.addEventListener('shown.bs.modal', () => {
                    if (typeof window.initProjectsSliders == "function") {
                        window.initProjectsSliders();
                    }

                    if (typeof window.loadMore == "function") {
                        window.loadMore();
                    }

                    if (typeof window.Chocolat == 'function') {
                        window.Chocolat(document.querySelectorAll('.chocolat-image'));
                    }

                    if(document.querySelectorAll('.masonry-gallery').length > 0){
                        let msnry = new Masonry( '.masonry-gallery');
                    }
                })

                // Show the modal after content is loaded
                modal.show();

            })
            .catch(err => {
                console.error('Error loading content:', err);
            });
    });
});
