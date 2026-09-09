const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let intervalId = null;

function getDelay() {
    return parseInt(document.getElementById("delay-input").value, 10);
}

function updateCounter() {
    document.getElementById("image-counter").textContent =
        `${currentIndex + 1} / ${images.length}`;
}

function showImage(index) {
    document.getElementById("carousel-img").src = images[index];
    updateCounter();
}

function moveForward() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function moveBackward() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function setAutoButtons(disabled) {
    document.getElementById("auto-forward").disabled = disabled;
    document.getElementById("auto-backward").disabled = disabled;
}

document.getElementById("forward-btn").addEventListener("click", moveForward);
document.getElementById("backward-btn").addEventListener("click", moveBackward);

document.getElementById("auto-forward").addEventListener("click", () => {
    setAutoButtons(true);
    intervalId = setInterval(moveForward, getDelay());
});

document.getElementById("auto-backward").addEventListener("click", () => {
    setAutoButtons(true);
    intervalId = setInterval(moveBackward, getDelay());
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    setAutoButtons(false);
});

// Update the delay display label when the slider moves
document.getElementById("delay-input").addEventListener("input", (e) => {
    const seconds = (e.target.value / 1000).toFixed(1);
    document.getElementById("delay-display").textContent = `${seconds}s`;
});
