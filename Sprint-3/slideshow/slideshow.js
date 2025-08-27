// Array of image paths used for the slideshow
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Keeps track of the currently displayed image index
let current = 0;

// Holds the ID of the auto-play interval (so we can stop it)
let intervalId = null;

// DOM element references
const img = document.getElementById("carousel-img");
const forward = document.getElementById("forward-btn");
const backward = document.getElementById("backward-btn");
const autoForward = document.getElementById("auto-forward");
const autoBack = document.getElementById("auto-backward");
const stop = document.getElementById("stop");
const delayInput = document.getElementById("delay-input");

// Function to update the image source based on the current index
function updateImage() {
  img.src = images[current];
}

// Moves to the next image and wraps around if needed
forward.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

// Moves to the previous image and wraps around if needed
backward.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});

// Starts auto-forwarding through the images
autoForward.addEventListener("click", () => {
  disableAutoButtons(true);
  const delay = getDelay(); // Get delay from input
  intervalId = setInterval(() => {
    current = (current + 1) % images.length;
    updateImage();
  }, delay);
});

// Starts auto-backward through the images
autoBack.addEventListener("click", () => {
  disableAutoButtons(true);
  const delay = getDelay();
  intervalId = setInterval(() => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  }, delay);
});

// Stops any auto-play action
stop.addEventListener("click", () => {
  clearInterval(intervalId);
  disableAutoButtons(false);
});

// Enables/disables auto-play buttons to prevent overlapping timers
function disableAutoButtons(disable) {
  autoForward.disabled = disable;
  autoBack.disabled = disable;
}

// Returns the delay in milliseconds from the input, with a default fallback
function getDelay() {
  const input = parseInt(delayInput.value, 10);
  return isNaN(input) || input < 500 ? 2000 : input;
}
