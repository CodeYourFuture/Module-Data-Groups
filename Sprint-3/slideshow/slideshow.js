const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let intervalId;
const intervalTime = 2000; // 2 seconds

function updateImage() {
    const image = document.getElementById("carousel-img");
    image.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function autoForward() {
    intervalId = setInterval(nextImage, intervalTime);
    disableAutoButtons();
}

function autoBackward() {
    intervalId = setInterval(prevImage, intervalTime);
    disableAutoButtons();
}

function stopAuto() {
    clearInterval(intervalId);
    enableAutoButtons();
}

function disableAutoButtons() {
    const autoForwardBtn = document.getElementById("auto-forward");
    const autoBackwardBtn = document.getElementById("auto-backward");

    if (autoForwardBtn) autoForwardBtn.disabled = true;
    if (autoBackwardBtn) autoBackwardBtn.disabled = true;
}

function enableAutoButtons() {
    const autoForwardBtn = document.getElementById("auto-forward");
    const autoBackwardBtn = document.getElementById("auto-backward");

    if (autoForwardBtn) autoForwardBtn.disabled = false;
    if (autoBackwardBtn) autoBackwardBtn.disabled = false;
}

document.addEventListener("DOMContentLoaded", () => {
    updateImage();

    const forwardBtn = document.getElementById("forward-btn");
    const backwardBtn = document.getElementById("backward-btn");
    const autoForwardBtn = document.getElementById("auto-forward");
    const autoBackwardBtn = document.getElementById("auto-backward");
    const stopBtn = document.getElementById("stop");

    if (forwardBtn) forwardBtn.addEventListener("click", nextImage);
    if (backwardBtn) backwardBtn.addEventListener("click", prevImage);
    if (autoForwardBtn) autoForwardBtn.addEventListener("click", autoForward);
    if (autoBackwardBtn) autoBackwardBtn.addEventListener("click", autoBackward);
    if (stopBtn) stopBtn.addEventListener("click", stopAuto);
});