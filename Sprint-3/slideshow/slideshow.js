const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

let currentIndex = 0;
let intervalId = null;

const imgElement = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

// New buttons for Level 2
const autoForwardBtn = document.createElement("button");
autoForwardBtn.textContent = "Auto Forward";
autoForwardBtn.id = "auto-forward";

const autoBackwardBtn = document.createElement("button");
autoBackwardBtn.textContent = "Auto Backward";
autoBackwardBtn.id = "auto-backward";

const stopBtn = document.createElement("button");
stopBtn.textContent = "Stop";
stopBtn.id = "stop";

// Append new buttons to the document
document.body.appendChild(autoForwardBtn);
document.body.appendChild(autoBackwardBtn);
document.body.appendChild(stopBtn);

// Function to update the image source
function updateImage() {
    imgElement.src = images[currentIndex];
}

// Forward Button Logic
forwardBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Backward Button Logic
backwardBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Function for Auto-Slideshow (Forward)
function startAutoForward() {
    stopAuto();
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;

    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 2000);
}

// Function for Auto-Slideshow (Backward)
function startAutoBackward() {
    stopAuto();
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;

    intervalId = setInterval(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    }, 2000);
}

// Stop Auto Slideshow
function stopAuto() {
    clearInterval(intervalId);
    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;
}

// Attach event listeners to new buttons
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopAuto);

// Initialize the first image
updateImage();