const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
// Write your code here

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");
let intervalId = null;
const intervalTime = 5000;

function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  }
  if (index >= images.length) {
    index = 0;
  }
  currentIndex = index;
  carouselImg.src = images[currentIndex];
}

function moveForward() {
  showImage(currentIndex + 1);
}

function moveBackward() {
  showImage(currentIndex - 1);
}

// Manual Navigation
document.getElementById("forward-btn").addEventListener("click", moveForward);
document.getElementById("backward-btn").addEventListener("click", moveBackward);

// Automatic Navigation
function startAuto(direction) {
  stopAuto();
  intervalId = setInterval(() => {
    if (direction === "forward") {
      moveForward();
    } else if (direction === "backward") {
      moveBackward();
    }
  }, intervalTime);
}

function stopAuto() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

document.getElementById("auto-forward-btn").addEventListener("click", () => {
  startAuto("forward");
});

document.getElementById("auto-backward-btn").addEventListener("click", () => {
  startAuto("backward");
});

document.getElementById("stop-btn").addEventListener("click", stopAuto);
