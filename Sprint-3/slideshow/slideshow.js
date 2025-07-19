const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentImageIndex = 0;
let autoScrollTimer = null;                                                                     // To store the interval ID used for auto-scrolling 

// ---- DOM Elements ----
const imageDisplay = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

// ----Functions ----
function showImage() {
    imageDisplay.src = images[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;                                 // Increment index: go to next image and loop to first if at end
    showImage();                                                                                 // Update display
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;                 // Decrement index: go to previous image and loop to last if at beginning
    showImage();
}

function disableAutoButtons() {                                                                  // Prevent user from starting another auto-scroll while one is active
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
}

function enableAutoButtons() {                                                                   // Re-enable auto-scroll buttons to allow user to start auto-scroll again
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
}

function stopAutoScroll() {                     
    clearInterval(autoScrollTimer);                                                              // Stop the current auto-scroll interval
    autoScrollTimer = null;                                                                      // Reset timer variable
    enableAutoButtons();                                                                         // Stop any ongoing auto-scroll and re-enables the auto-scroll buttons
}

function startAutoForward() {                                                                    
    stopAutoScroll();                                                                            // Ensure no other auto-scroll is running
    disableAutoButtons();                                                                        // Prevent starting another auto-scroll
    autoScrollTimer = setInterval(showNextImage, 2000);                                          // Start scrolling images forward every 2 seconds
}

function startAutoBackward() {
    stopAutoScroll();                                                                            // Stop any ongoing auto-scroll
    disableAutoButtons();                                                                        // Disable buttons to prevent conflict
    autoScrollTimer = setInterval(showPreviousImage, 2000);                                      // Show previous image every 2 seconds
}

// ---- Event listeners ----
forwardBtn.addEventListener("click", () => {
    stopAutoScroll();                                                                           // Stop auto mode on manual click
    showNextImage();                                                                            // Move to next image
});

backwardBtn.addEventListener("click", () => {
    stopAutoScroll();                                                                           // Stop auto mode on manual click
    showPreviousImage();                                                              
});

autoForwardBtn.addEventListener("click", startAutoForward);                                     // Start auto-forward scrolling
autoBackBtn.addEventListener("click", startAutoBackward);                                       // Start auto-backward scrolling
stopBtn.addEventListener("click", stopAutoScroll);

window.addEventListener("DOMContentLoaded", showImage);                                         // Show first image once page is fully loaded