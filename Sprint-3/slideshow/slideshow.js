const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

//Write your code here
let currentIndex = 0;
let intervalId = null;

const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

function updateImage() {
  imgElement.src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

// ---- AUTOMATIC SLIDESHOW ----

function startAuto(direction) {
  stopAuto(); // clear any previous interval

  // Disable auto buttons
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

  intervalId = setInterval(() => {
    direction === "forward" ? moveForward() : moveBackward();
  }, 2000);
}

function stopAuto() {
  clearInterval(intervalId);
  intervalId = null;

  // Re-enable buttons
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

autoForwardBtn.addEventListener("click", () => startAuto("forward"));
autoBackwardBtn.addEventListener("click", () => startAuto("backward"));
stopBtn.addEventListener("click", stopAuto);
