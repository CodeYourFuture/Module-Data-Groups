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
document.getElementById("auto-forward-btn").addEventListener("click", () => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null; // Stop auto mode
  } else {
    slideshowInterval = setInterval(goForward, 1000); // Start auto forward
  }
});

// Auto Backward logic
document.getElementById("auto-backward-btn").addEventListener("click", () => {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null; // Stop auto mode
  } else {
    slideshowInterval = setInterval(goBackward, 1000); // Start auto backward
  }
});

updateImage();
