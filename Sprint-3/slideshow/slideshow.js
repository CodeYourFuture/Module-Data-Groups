const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here


let currentIndex = 0;
let intervalId = null;

const imageElements = document.querySelectorAll('.carousel-image');
const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");
const autoBackBtn = document.getElementById("auto-back");
const autoForwardBtn = document.getElementById("auto-forward");
const stopBtn = document.getElementById("stop");

function updateImage() {
  imageElements.forEach((img, idx) => {
    img.style.display = (idx === currentIndex) ? 'block' : 'none';
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

backBtn.addEventListener("click", previousImage);
forwardBtn.addEventListener("click", nextImage);

autoForwardBtn.addEventListener("click", () => {
  stopSlide();
  intervalId = setInterval(nextImage, 2000);
});

autoBackBtn.addEventListener("click", () => {
  stopSlide();
  intervalId = setInterval(previousImage, 2000);
});

stopBtn.addEventListener("click", stopSlide);

function stopSlide() {
  clearInterval(intervalId);
}

updateImage(); 