const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("carousel-img");
    const counterElement = document.getElementById("counter");

    let currentIndex = 0;
    let intervalId = null;

    function updateImage() {
        imgElement.src = images[currentIndex];
        counterElement.textContent = `Image: ${currentIndex + 1} of ${images.length}`;
    }

    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateImage();
    }

    function startAutoSlide(direction) {
        stopAutoSlide(); // Just to be safe
        intervalId = setInterval(() => changeImage(direction), 1000);
    }

    function stopAutoSlide() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Manual buttons
    document.getElementById("backward-btn").addEventListener("click", () => changeImage(-1));
    document.getElementById("forward-btn").addEventListener("click", () => changeImage(1));

    // Auto-slide buttons
    document.getElementById("auto-backward-btn").addEventListener("click", () => startAutoSlide(-1));
    document.getElementById("auto-forward-btn").addEventListener("click", () => startAutoSlide(1));

    // Stop button
    document.getElementById("stop-btn").addEventListener("click", stopAutoSlide);

    // Initial setup
    updateImage();
});
