const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");


let intervalId = null;  // <-- declare intervalId

function updateImage() {
  imgElement.src = images[currentIndex];
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
}

function enableAutoButtons() {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
  stopBtn.disabled = true;
}

autoForwardBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 2000);
  disableAutoButtons();
});

autoBackBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, 2000);
  disableAutoButtons();
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  enableAutoButtons();
});
