const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here


let currentIndex = 0;
let intervalId = null;

const imageElement = document.getElementById("carousel-image");
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");
const autoBackBtn = document.getElementById("auto-back");
const autoForwardBtn = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop");

function updateImage() {
  imageElement.src = images[currentIndex];
}

backBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

autoForwardBtn.addEventListener("click", () => {
  stopSlide();
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 2000);
});

autoBackBtn.addEventListener("click", () => {
  stopSlide();
  intervalId = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, 2000);
});

stopBtn.addEventListener("click", stopSlide);

function stopSlide() {
  clearInterval(intervalId);
}
