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

// Helper to update the carousel image
function updateImage() {
  carouselImg.src = images[currentIndex];
}

// Move forward
function moveForward() {
  currentIndex = (currentIndex + 1) % images.length; // Wrap around to the start
  updateImage();
}

// Move backward
function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the end
  updateImage();
}

// Set up auto-play
function autoPlay(direction) {
  stopAutoPlay(); // Clear any existing interval
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

  autoInterval = setInterval(() => {
    if (direction === "forward") {
      moveForward();
    } else if (direction === "backward") {
      moveBackward();
    }
  }, 2000);
}

// Stop auto-play
function stopAutoPlay() {
  clearInterval(autoInterval);
  autoInterval = null;
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Event listeners
forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

autoForwardBtn.addEventListener("click", () => autoPlay("forward"));
autoBackwardBtn.addEventListener("click", () => autoPlay("backward"));

stopBtn.addEventListener("click", stopAutoPlay);

// Initialize the carousel
updateImage();
