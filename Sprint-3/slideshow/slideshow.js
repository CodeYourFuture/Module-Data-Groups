const images = [
  "https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2",
  "https://plus.unsplash.com/premium_photo-1664304444016-44b5d41a01eb",
  "https://plus.unsplash.com/premium_photo-1661809060766-f96a928a00a5",
  "https://plus.unsplash.com/premium_photo-1664302716901-63777e888686",
];

let currentIndex = 0;

const slide = document.getElementById("slide");
const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");

function updateSlide() {
  slide.src = images[currentIndex];
}

backButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});

forwardButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  // makes a loop so that the last pic leads to the first pic and vv
  updateSlide();
});

// show first image on load
updateSlide();

let autoId;

function startAuto(direction) {
  stopAuto(); // clear any existing interval first
  autoId = setInterval(() => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateSlide();
  }, 5000);
}

function stopAuto() {
  clearInterval(autoId);
}

document.getElementById("auto-forward").addEventListener("click", () => {
  startAuto(1);
});

document.getElementById("auto-back").addEventListener("click", () => {
  startAuto(-1);
});

document.getElementById("stop").addEventListener("click", stopAuto);
