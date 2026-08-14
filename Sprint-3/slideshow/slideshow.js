const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let timer = null;

const image = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

// Display the current image
function displayImage() {
  image.src = images[currentIndex];
}

// Move forward
function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage();
}

// Move backward
function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayImage();
}

// Manual controls
forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

// Automatic forward
autoForwardBtn.addEventListener("click", () => {
  timer = setInterval(moveForward, 2000);

  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
});

// Automatic backward
autoBackBtn.addEventListener("click", () => {
  timer = setInterval(moveBackward, 2000);

  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
});

// Stop automatic movement
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
});

// Show first image when page loads
displayImage();
