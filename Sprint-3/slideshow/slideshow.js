const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('carousel-img');
    const backwardButton = document.getElementById('backward-btn');
    const forwardButton = document.getElementById('forward-btn');

    let currentIndex = 0;

    function updateImage() {
        image.src = images[currentIndex];
    }

    forwardButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    backwardButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    updateImage(); // Initial image load
});