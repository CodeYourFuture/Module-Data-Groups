const images = [
  "./assets/first.jpg",
  "./assets/second.png",
  "./assets/third.webp",
  "./assets/fourth.webp",
  "./assets/final.jpg"
];

let currentIndex = 0;
let intervalId = null;

const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");
const delayInput = document.getElementById("delay-input");

function updateImage() {
  carouselImg.src = images[currentIndex];
}

function forward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function backward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function autoForward() {
  stopInterval();
  const delay = parseInt(delayInput.value, 10) || 3000;
  intervalId = setInterval(forward, delay);
}

function autoBackward() {
  stopInterval();
  const delay = parseInt(delayInput.value, 10) || 3000;
  intervalId = setInterval(backward, delay);
}

function stopInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", autoForward);
autoBackwardBtn.addEventListener("click", autoBackward);
stopBtn.addEventListener("click", stopInterval);

updateImage();
