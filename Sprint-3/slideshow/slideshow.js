const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

//1: get element needed
const backwardButton = document.querySelector("#backward-btn");
const forwardButton = document.querySelector("#forward-btn");
const carouselImage = document.querySelector("#carousel-img");

let currentIndex = 0;

backwardButton.addEventListener("click", () => {
// access the images array and replace current image with next image on the list.
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImage.src = images[currentIndex]; // Update image source
});

forwardButton.addEventListener("click", () => {
// access the images array and replace current image with next image on the list.
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  carouselImage.src = images[currentIndex]; // Update image source
});