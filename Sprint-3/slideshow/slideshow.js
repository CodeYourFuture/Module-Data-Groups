const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const carouselImage = document.getElementById("carousel-img");
const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");

let currentImage = 0;

function forward() {
  // currentImage++;
  currentImage = (currentImage+1)%images.length
  // if (currentImage === images.length) {
  //   currentImage = 0;
  // }
  carouselImage.src = images[currentImage];
}

function backward() {
 currentImage = (currentImage - 1)%images.length
 if (currentImage < 0) {
  currentImage = images.length - 1
 }
  carouselImage.src = images[currentImage];
}

forwardBtn.addEventListener("click", forward);
backwardBtn.addEventListener("click", backward);

// Write your code here
