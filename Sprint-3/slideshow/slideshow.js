const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let autoInterval = null;

const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

// Helper: Update the carousel image
function updateImage() {
  carouselImg.src = images[currentIndex];
}

// Helper: Move carousel in a specific direction
function moveCarousel(direction) {
  if (direction === "forward") {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around to the start
  } else if (direction === "backward") {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the end
  }
  updateImage();
}

// Helper: Enable or disable buttons
function setButtonState(autoForwardDisabled, autoBackwardDisabled) {
  autoForwardBtn.disabled = autoForwardDisabled;
  autoBackwardBtn.disabled = autoBackwardDisabled;
}

// Move forward
function moveForward() {
  moveCarousel("forward");
}

// Move backward
function moveBackward() {
  moveCarousel("backward");
}

// Set up auto-play
function autoPlay(direction) {
  stopAutoPlay(); // Clear any existing interval
  setButtonState(true, true); // Disable both autoplay buttons

  autoInterval = setInterval(() => {
    moveCarousel(direction);
  }, 2000);
}

// Stop auto-play
function stopAutoPlay() {
  clearInterval(autoInterval);
  autoInterval = null;
  setButtonState(false, false); // Enable both autoplay buttons
}

// Event listeners
forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

autoForwardBtn.addEventListener("click", () => autoPlay("forward"));
autoBackwardBtn.addEventListener("click", () => autoPlay("backward"));

stopBtn.addEventListener("click", stopAutoPlay);

// Initialize the carousel
updateImage();
