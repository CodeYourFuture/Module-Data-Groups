const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

let autoMoveInterval; // Store the interval ID

// Function to update the image source
function updateImage() {
  imgElement.src = images[currentIndex];
}

// Move image forward
forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Move image backward
backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Start moving forward automatically
autoForwardBtn.addEventListener("click", () => {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true; // Disable both auto buttons when one is clicked

  // Start moving forward every 1 second
  autoMoveInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 1000);
});

// Start moving backward automatically
autoBackBtn.addEventListener("click", () => {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;

  // Start moving backward every 1 second
  autoMoveInterval = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, 1000);
});

// Stop automatic movement
stopBtn.addEventListener("click", () => {
  clearInterval(autoMoveInterval); // Stop the interval when stop button is clicked
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false; // Re-enable the auto buttons
});
