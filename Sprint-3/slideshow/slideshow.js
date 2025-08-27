const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
// Start at the first image
let currentIndex = 0;
let intervalId = null; // To track interval for auto-slideshow

// Get DOM elements
const image = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

// ========== Core Functionality ==========

// Update the image based on currentIndex
function updateImage() {
  image.src = images[currentIndex];
}

// Move forward once
function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

// Move backward once
function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Start auto-slideshow forward
function startAutoForward() {
  disableButtons();
  intervalId = setInterval(moveForward, 2000);
}

// Start auto-slideshow backward
function startAutoBackward() {
  disableButtons();
  intervalId = setInterval(moveBackward, 2000);
}

// Stop the slideshow
function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
  enableButtons();
}

// Disable auto buttons during auto-play
function disableButtons() {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
}

// Re-enable auto buttons
function enableButtons() {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
}

// ========== Event Listeners ==========

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopSlideshow);

// ========== Initial Setup ==========
updateImage();
