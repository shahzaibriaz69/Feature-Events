const slider = document.querySelector('.event-slider');
const cards = document.querySelectorAll('.event-card');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let counter = 0;

nextBtn.addEventListener('click', () => {
    const cardWidth = cards[0].clientWidth + 30; // Card width + gap
    if (counter < cards.length - 3) { // Stop at the last set of 3
        counter++;
        slider.style.transform = `translateX(${-cardWidth * counter}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const cardWidth = cards[0].clientWidth + 30;
    if (counter > 0) {
        counter--;
        slider.style.transform = `translateX(${-cardWidth * counter}px)`;
    }
});

function filterEvents() {
    // Get the search input value and convert to lowercase
    const input = document.getElementById('eventSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.event-card');
    const slider = document.querySelector('.event-slider');

    cards.forEach(card => {
        // Get the title of each card
        const title = card.querySelector('h3').innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block"; // Show if matches
        } else {
            card.style.display = "none";  // Hide if no match
        }
    });

    // Reset slider position to start when searching to avoid layout gaps
    slider.style.transform = `translateX(0px)`;
    counter = 0;
}