const images = [
  "https://images.unsplash.com/photo-1751795195789-8dab6693475d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1753184600735-a370f974871d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1753236404576-b4c1a4b5f0dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1751870296111-ecc21309ecf1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
];

// Write your code here

let currentIndex = 0;
let autoIntervalId = null;

const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const autoBackBtn = document.getElementById("auto-back-btn");
const stopBtn = document.getElementById("stop-btn");

function updateImage() {
  imgElement.src = images[currentIndex];
}

function stopAuto() {
  if (autoIntervalId !== null) {
    clearInterval(autoIntervalId);
    autoIntervalId = null;
  }
}

function changeImage(direction) {
  stopAuto();
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateImage();
}

forwardBtn.addEventListener("click", () => changeImage(1));
backwardBtn.addEventListener("click", () => changeImage(-1));

function startAutoPlay(direction) {
  stopAuto();
  autoIntervalId = setInterval(() => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateImage();
  }, 5000);
}

autoForwardBtn.addEventListener("click", () => startAutoPlay(1));
autoBackBtn.addEventListener("click", () => startAutoPlay(-1));

stopBtn.addEventListener("click", stopAuto);
