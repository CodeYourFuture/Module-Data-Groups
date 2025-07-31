const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];
// Write your code here

let currentIndex = 0;
let intervalId = null;

const imageElement = document.getElementById("carousel-image");

function updateImage() {
  imageElement.src = images[currentIndex]; 
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to previous, wrap to end
  updateImage();
}

//forwardBtn.addEventListener("click", nextImage);
document.getElementById("forward").addEventListener("click", function () {
  nextImage();
});

document.getElementById("back").addEventListener("click", function () {
  previousImage();
});

updateImage();
