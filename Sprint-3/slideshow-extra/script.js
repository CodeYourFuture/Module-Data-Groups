let currentSlideIndex = 0;
let delay = 3000; // Default delay time in milliseconds

const slides = [
    "assets/world.png",
    // Add more images here if needed
];

function showSlide(index) {
    const slideElement = document.getElementById("slide");
    slideElement.src = slides[index];
}

function startSlideshow() {
    const delayInput = document.getElementById("delay-time");
    delay = delayInput.value * 1000; // Convert seconds to milliseconds
    showNextSlide();
}

function showNextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
    setTimeout(showNextSlide, delay);
}

// Initial setup
showSlide(currentSlideIndex);
document.getElementById("start-slideshow").addEventListener("click", startSlideshow);
