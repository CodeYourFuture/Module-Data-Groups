const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("carousel-img");
    const counterElement = document.getElementById("counter");
    let currentIndex = 0;
    let intervalId;

    function updateImage() {
        imgElement.src = images[currentIndex];
        counterElement.textContent = `Image: ${currentIndex}`;
    }

    document.getElementById("backward-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    document.getElementById("forward-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    document.getElementById("auto-backward-btn").addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }, 1000);
    });

    document.getElementById("auto-forward-btn").addEventListener("click", () => {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }, 1000);
    });

    document.getElementById("stop-btn").addEventListener("click", () => {
        clearInterval(intervalId);
    });

    // Initial image setup
    updateImage();
});
