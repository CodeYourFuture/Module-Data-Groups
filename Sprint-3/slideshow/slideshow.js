// Write your code here
// Array of images
// Array of images
const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
  ];
  
  // HTML element references
  const carouselImage = document.getElementById("carousel-image");
  const backButton = document.getElementById("back-button");
  const forwardButton = document.getElementById("forward-button");
  const autoForwardButton = document.getElementById("auto-forward-button");
  const autoBackButton = document.getElementById("auto-back-button");
  const stopButton = document.getElementById("stop-button");
  
  // Current image index
  let currentIndex = 0;
  
  // Timer reference for auto-play
  let autoPlayTimer = null;
  
  // Function to update the displayed image
  function updateImage() {
    carouselImage.src = images[currentIndex];
  }
  
  // Function to move forward
  function moveForward() {
    currentIndex = (currentIndex + 1) % images.length; // Wrap around to the start
    updateImage();
  }
  
  // Function to move backward
  function moveBackward() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Wrap around to the end
    updateImage();
  }
  
  // Event listeners for manual controls
  forwardButton.addEventListener("click", moveForward);
  backButton.addEventListener("click", moveBackward);
  
  // Event listeners for auto-play controls
  autoForwardButton.addEventListener("click", () => {
    clearInterval(autoPlayTimer); // Clear any existing timer
    autoPlayTimer = setInterval(moveForward, 3000); // Move forward every 3 seconds
  });
  
  autoBackButton.addEventListener("click", () => {
    clearInterval(autoPlayTimer); // Clear any existing timer
    autoPlayTimer = setInterval(moveBackward, 3000); // Move backward every 3 seconds
  });
  
  stopButton.addEventListener("click", () => {
    clearInterval(autoPlayTimer); // Stop the auto-play timer
  });
  
  // Initialize with the first image
  updateImage();
  