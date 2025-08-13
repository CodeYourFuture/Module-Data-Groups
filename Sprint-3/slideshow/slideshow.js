const images = [
  "./images/puppy1.jpg",
  "./images/puppy2.jpg",
  "./images/puppy3.jpg",
  "./images/puppy4.jpg",
];

let currentIndex = 0;
let intervalId = null;
const intervalTime = 2000; // 2 seconds

// Get DOM elements
const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

// Manual navigation
function showImage(index) {
  carouselImg.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

forwardBtn.addEventListener("click", nextImage);
backwardBtn.addEventListener("click", prevImage);

// Auto navigation
function startAuto(directionFn) {
  // Disable auto buttons while running
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

  intervalId = setInterval(directionFn, intervalTime);
}

function stopAuto() {
  clearInterval(intervalId);
  intervalId = null;
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

autoForwardBtn.addEventListener("click", () => startAuto(nextImage));
autoBackwardBtn.addEventListener("click", () => startAuto(prevImage));
stopBtn.addEventListener("click", stopAuto);