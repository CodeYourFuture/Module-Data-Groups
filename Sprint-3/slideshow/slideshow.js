const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let autoTimer = null;

function showImage() {
  document.getElementById("carousel-img").src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function setAutoButtons(disabled) {
  document.getElementById("auto-forward").disabled = disabled;
  document.getElementById("auto-backward").disabled = disabled;
}

document.getElementById("forward-btn").addEventListener("click", moveForward);
document.getElementById("backward-btn").addEventListener("click", moveBackward);

document.getElementById("auto-forward").addEventListener("click", () => {
  setAutoButtons(true);
  autoTimer = setInterval(moveForward, 2000);
});

document.getElementById("auto-backward").addEventListener("click", () => {
  setAutoButtons(true);
  autoTimer = setInterval(moveBackward, 2000);
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(autoTimer);
  autoTimer = null;
  setAutoButtons(false);
});