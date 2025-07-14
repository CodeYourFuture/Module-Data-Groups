
const images = [
  "./assets/first.jpg",
  "./assets/second.png",
  "./assets/third.webp",
  "./assets/fourth.webp",
  "./assets/final.jpg"
];

const altTexts = [
  "programming-not-easy-pic",
  "I-hate-programming-pic",
  "stretching-pic",
  "routine-habit-to-programming-pic",
  "happiness-from-programming-pic"
];

let currentIndex = 0;
let intervalId = null;
const interval = 2000;  

const carouselImg = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const stopBtn = document.getElementById("stop-btn");

function updateImage() {
  carouselImg.src = images[currentIndex];
  carouselImg.alt = altTexts[currentIndex];
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
  intervalId = setInterval(forward, interval);
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

function autoBackward() {
  stopInterval();
  intervalId = setInterval(backward, interval);
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

function stopInterval() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);
autoForwardBtn.addEventListener("click", autoForward);
autoBackwardBtn.addEventListener("click", autoBackward);
stopBtn.addEventListener("click", stopInterval);

updateImage();

