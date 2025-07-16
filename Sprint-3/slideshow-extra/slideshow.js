/* put the stretch version here as it messes with the tests */

document.addEventListener("DOMContentLoaded", () => {
    const carouselImg = document.getElementById("image");
const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");

const autoForwardBtn = document.getElementById("autoForwardBtn");
const autoBackwardBtn = document.getElementById("autoBackwardBtn");
const stopBtn = document.getElementById("stopAutoBtn");
const delayInput = document.getElementById("delayInput");

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;

let autoPlayIntervalId;
let intervalTime = parseFloat(delayInput.value) * 1000;

function updateImage() {
  carouselImg.src = images[currentIndex];
}

function setAutoPlayButtonState(disabled) {
  autoForwardBtn.disabled = disabled;
  autoBackwardBtn.disabled = disabled;
  forwardBtn.disabled = disabled;
  backwardBtn.disabled = disabled;
  delayInput.disabled = disabled;
}

function startAutoForward() {
  stopAutoPlay();
  setAutoPlayButtonState(true);
  autoPlayIntervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, intervalTime);
}

function startAutoBackward() {
  stopAutoPlay();
  setAutoPlayButtonState(true);
  autoPlayIntervalId = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, intervalTime);
}

function stopAutoPlay() {
  clearInterval(autoPlayIntervalId);
  setAutoPlayButtonState(false);
}

forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopAutoPlay);

delayInput.addEventListener("change", () => {
  intervalTime = parseFloat(delayInput.value) * 1000;
  if (autoPlayIntervalId) {
    stopAutoPlay();
  }
});

updateImage();
}
);