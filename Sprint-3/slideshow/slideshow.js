const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const carouselImg = document.getElementById("carousel-img");
const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");
const delayInput = document.getElementById("delay-input");

let currentIndex = 0;
let intervalId = null;

// Show image at currentIndex
function showImage() {
  carouselImg.src = images[currentIndex];
}

// Move forward one image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

// Move backward one image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Start automatic slideshow moving forward
function startAutoForward() {
  stopAuto(); // Clear any existing interval
  intervalId = setInterval(nextImage, delayInput.value * 1000);
}

// Start automatic slideshow moving backward
function startAutoBackward() {
  stopAuto();
  intervalId = setInterval(prevImage, delayInput.value * 1000);
}

// Stop automatic slideshow
function stopAuto() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

// Event listeners
forwardBtn.addEventListener("click", () => {
  stopAuto();
  nextImage();
});

backwardBtn.addEventListener("click", () => {
  stopAuto();
  prevImage();
});

autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopAuto);

// Update interval delay if changed while slideshow running
delayInput.addEventListener("change", () => {
  if (intervalId !== null) {
    // Restart interval with new delay
    stopAuto();
    // Detect if auto forward or backward was running
    if (autoForwardBtn.disabled === false) {
      startAutoForward();
    } else if (autoBackwardBtn.disabled === false) {
      startAutoBackward();
    }
  }
});

// Initialize
showImage();
