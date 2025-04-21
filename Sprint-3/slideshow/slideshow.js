const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");
let slideshowInterval = null;
const imageCountText = document.getElementById("image-count");

const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

function updateImage() {
  carouselImg.setAttribute("src", images[currentIndex]);
  imageCountText.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}

function goForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function goBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

document.getElementById("forward-btn").addEventListener("click", goForward);
document.getElementById("backward-btn").addEventListener("click", goBackward);

// Auto Forward logic
function startAutoForward() {
  stopSlideshow();
  slideshowInterval = setInterval(goForward, 2000);
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

// Auto Backward logic
function startAutoBackward() {
  stopSlideshow();
  slideshowInterval = setInterval(goBackward, 2000);
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
}

//Stop Logic
function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = null;
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopSlideshow);
updateImage();
