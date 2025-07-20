const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

let currentIndex = 0;
let intervalId = null;

const imgElement = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

// New buttons for Level 2
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackwardBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

// Function to update the image source
function updateImage() {
    imgElement.src = images[currentIndex];
}

// Function to handle both forward and backward image changes
function navigateImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateImage();
}
// Forward Button Logic
forwardBtn.addEventListener("click", () => {
    navigateImage(1);  // Move forward by 1
});

// Backward Button Logic
backwardBtn.addEventListener("click", () => {
    navigateImage(-1); // Move backward by 1
});


// Function for Auto-Slideshow (Forward)
function startAutoForward() {
    stopAuto();
    intervalId = setInterval(() => {
        navigateImage(1);  // Move forward by 1 every 2 seconds
    }, 2000);
}

// Function for Auto-Slideshow (Backward)
function startAutoBackward() {
    stopAuto();
    intervalId = setInterval(() => {
        navigateImage(-1); // Move backward by 1 every 2 seconds
    }, 2000);
}

// Stop Auto Slideshow
function stopAuto() {
    clearInterval(intervalId);
}

// Attach event listeners to new buttons
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopAuto);

// Initialize the first image
updateImage();