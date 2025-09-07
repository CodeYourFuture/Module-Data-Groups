const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackBtn = document.getElementById("auto-back-btn");
const stopBtn = document.getElementById("stop-btn");

const delayInput = document.getElementById("delay-input");

let intervalId = null;

function updateImage() {
  imgElement.src = images[currentIndex];
}

function getDelay() {
  // Get delay in milliseconds, default to 2000 if invalid
  const delay = Number(delayInput.value);
  return isNaN(delay) || delay < 1 ? 2000 : delay * 1000;
}

forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

function disableAutoButtons() {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  stopBtn.disabled = false;
  delayInput.disabled = true; // disable while auto-playing
}

function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
  stopBtn.disabled = true;
  delayInput.disabled = false; // enable when stopped
}

autoForwardBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, getDelay());
  disableAutoButtons();
});

autoBackBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, getDelay());
  disableAutoButtons();
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  enableAutoButtons();
});
