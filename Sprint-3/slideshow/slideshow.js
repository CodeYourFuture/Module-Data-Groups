const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentImageIndex = 0;
let slideshowId;

function displayCurrentImage() {
  const carouselImage = document.getElementById("carousel-img");
  carouselImage.src = images[currentImageIndex];
}

function moveForward() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  displayCurrentImage();
}

function moveBackward() {
  currentImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;

  displayCurrentImage();
}

function startAutoPlay(direction) {
  const autoForwardButton = document.getElementById("auto-forward");
  const autoBackwardButton = document.getElementById("auto-backward");

  window.clearInterval(slideshowId);

  autoForwardButton.disabled = true;
  autoBackwardButton.disabled = true;

  slideshowId = window.setInterval(direction, 2000);
}

function stopAutoPlay() {
  const autoForwardButton = document.getElementById("auto-forward");
  const autoBackwardButton = document.getElementById("auto-backward");

  window.clearInterval(slideshowId);

  autoForwardButton.disabled = false;
  autoBackwardButton.disabled = false;
}

function setup() {
  document
    .getElementById("forward-btn")
    .addEventListener("click", moveForward);

  document
    .getElementById("backward-btn")
    .addEventListener("click", moveBackward);

  document
    .getElementById("auto-forward")
    .addEventListener("click", () => {
      startAutoPlay(moveForward);
    });

  document
    .getElementById("auto-backward")
    .addEventListener("click", () => {
      startAutoPlay(moveBackward);
    });

  document.getElementById("stop").addEventListener("click", stopAutoPlay);
}

setup();