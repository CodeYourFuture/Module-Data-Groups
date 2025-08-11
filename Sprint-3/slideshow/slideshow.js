const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg", 
];

let currentIndex = 0;
let intervalId = null;

const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const imageCounter = document.getElementById("image-counter");

const autoForwardBtn = document.createElement("button");
const autoBackwardBtn = document.createElement("button");
const stopBtn = document.createElement("button");

autoForwardBtn.textContent = "Auto Forward";
autoBackwardBtn.textContent = "Auto Backward";
stopBtn.textContent = "Stop";

autoForwardBtn.id = "auto-forward";
autoBackwardBtn.id = "auto-backward";
stopBtn.id = "stop";

document.body.appendChild(autoForwardBtn);
document.body.appendChild(autoBackwardBtn);
document.body.appendChild(stopBtn);

function updateImage(index) {
  imgElement.src = images[index];
  imageCounter.textContent = `Image ${index + 1} of ${images.length}`;
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
}

function startAutoForward() {
  stopSlideshow();
  intervalId = setInterval(moveForward, 2000);
  disableButtons();
}

function startAutoBackward() {
  stopSlideshow();
  intervalId = setInterval(moveBackward, 2000);
  disableButtons();
}

function stopSlideshow() {
  clearInterval(intervalId);
  enableButtons();
}

function disableButtons() {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

function enableButtons() {
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopSlideshow);


updateImage(currentIndex);
