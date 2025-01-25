const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg"
];

// Select buttons and image element
let forwardBtn = document.getElementById("forward-btn");
let backwardBtn = document.getElementById("backward-btn");
let autoForwardBtn = document.getElementById("auto-forward-btn");
let autoBackBtn = document.getElementById("auto-back-btn");
let stopBtn = document.getElementById("stop-btn");
let image = document.getElementById("carousel-img");

// Function to move forward
const displayForwardImages = () => {
  let currentImage = "./assets/" + image.src.split("/").pop(); // Extract filename
  let indexOfCurrentImage = images.indexOf(currentImage);
  let indexOfNextImage = (indexOfCurrentImage + 1) % images.length; // Loop to start
  image.src = images[indexOfNextImage];
};

// Function to move backward
const displayBackwardImages = () => {
  let currentImage = "./assets/" + image.src.split("/").pop(); // Extract filename
  let indexOfCurrentImage = images.indexOf(currentImage);
  let indexOfNextImage = (indexOfCurrentImage - 1 + images.length) % images.length; // Loop to end
  image.src = images[indexOfNextImage];
};

// Add event listeners for buttons
forwardBtn.addEventListener("click", () => displayForwardImages());
backwardBtn.addEventListener("click", () => displayBackwardImages());



// Auto-play functionality
let forwardHandle = 0;
let backwardHandle = 0;

autoForwardBtn.addEventListener("click", () => {
  forwardHandle = setInterval(displayForwardImages, 1000);
});

autoBackBtn.addEventListener("click", () => {
  backwardHandle = setInterval(displayBackwardImages, 1000);
});




// Stop auto-play
stopBtn.addEventListener("click", () => {
  clearInterval(forwardHandle);
  clearInterval(backwardHandle);
});
