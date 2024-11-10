const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

//===========  Level 1 challenge===========================
const forwardBtn = document.querySelector("#forward-btn");
const backBackwardBtn = document.querySelector("#backward-btn");
const carouselImg = document.querySelector("#carousel-img");

let currentImageIndex = 0;

const showImage = (index) => carouselImg.setAttribute("src", images[index]);

function moveImageForward() {
  currentImageIndex =
    currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1;
  showImage(currentImageIndex);
}

function moveImageBackward() {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex = currentImageIndex - 1;
  }
  showImage(currentImageIndex);
}

forwardBtn.addEventListener("click", moveImageForward);

backBackwardBtn.addEventListener("click", moveImageBackward);

//====================Level 2 challenge==================
