const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentIndex = 0;

// Get references to DOM elements
const imgElement = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");

// Function to update the image src
function updateImage() {
  imgElement.src = images[currentIndex];
}

// Event listeners for buttons
forwardButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

backwardButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});
