const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.jpg",
    "./assets/cute-cat-e.jpg",
    "./assets/cute-cat-f.jpg",

];


// Write your code here
let currentIndex = 0; // Index of the current image
let autoInterval = null; // Interval ID for automatic movement

const imageElement = document.querySelector("#carousel-img"); // Select image element
const buttons = {
  forward: document.querySelector("#forward-btn"),
  backward: document.querySelector("#backward-btn"),
  stop: document.querySelector("#stop"),
  autoForward: document.querySelector("#auto-forward"),
  autoBackward: document.querySelector("#auto-backward")
};

// Update the image source based on currentIndex
function updateImage() {
    imageElement.src = images[currentIndex];
}

// Move the image forward (1) or backward (-1)
function move(direction) {
    // Update currentIndex based on direction (1 for forward, -1 for backward)
    currentIndex = (currentIndex + direction + images.length) % images.length;
    // Update the image displayed
    updateImage();
}

// Start automatic movement in a direction (forward or backward)
function startAutoMovement(direction) {
    stopAutoMovement(); // Clear any existing interval
    // Disable movement buttons to prevent multiple intervals
    // This ensures that the user cannot activate multiple automatic movements simultaneously.
    buttons.autoForward.disabled = buttons.autoBackward.disabled = true;
    // Start automatic movement in the specified direction
    // The `setInterval` function executes the `move` function every 2000 milliseconds (2 seconds).
    autoInterval = setInterval(() => move(direction), 2000);
}

// Stop automatic movement
function stopAutoMovement() {
    // Clear the interval that was previously set with `setInterval`.
    // The `clearInterval` function stops the repeated execution of the function
    clearInterval(autoInterval); // Stop the automatic movement
    autoInterval = null; // Reset interval ID
    // Turn the "Auto Forward" and "Auto Backward" buttons back on.
    // This lets the user start a new automatic movement.
    // Setting `disabled = false` makes the buttons clickable again.
    buttons.autoForward.disabled = buttons.autoBackward.disabled = false;
}

// Event listeners for each button
buttons.forward.addEventListener("click", () => move(1));
buttons.backward.addEventListener("click", () => move(-1));
buttons.autoForward.addEventListener("click", () => startAutoMovement(1));
buttons.autoBackward.addEventListener("click", () => startAutoMovement(-1));
buttons.stop.addEventListener("click", stopAutoMovement);

// Initialize with the first image
updateImage();