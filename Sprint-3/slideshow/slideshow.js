const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;

let autoPlayIntervalId;
const intervalTime = 2000;

function updateImage() {
  carouselImg.src = images[currentIndex];
}

function setAutoPlayButtonState(disabled) {
  autoForwardBtn.disabled = disabled;
  autoBackwardBtn.disabled = disabled;
  forwardBtn.disabled = disabled;
  backwardBtn.disabled = disabled;
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

updateImage();