const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

let currentImageIndex = 0;

function moveForward() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}

function moveBackward() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentImageIndex];
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);

let autoInterval = null;
const AUTO_INTERVAL_TIME = 2000; // 2 seconds

const autoForwardBtn = document.createElement("button");
autoForwardBtn.id = "auto-forward";
autoForwardBtn.textContent = "Auto Forward";
document.body.appendChild(autoForwardBtn);

const autoBackwardBtn = document.createElement("button");
autoBackwardBtn.id = "auto-backward";
autoBackwardBtn.textContent = "Auto Backward";
document.body.appendChild(autoBackwardBtn);

const stopBtn = document.createElement("button");
stopBtn.id = "stop";
stopBtn.textContent = "Stop";
document.body.appendChild(stopBtn);

function startAutoForward() {
    clearInterval(autoInterval);
    autoInterval = setInterval(moveForward, AUTO_INTERVAL_TIME);
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
}

function startAutoBackward() {
    clearInterval(autoInterval);
    autoInterval = setInterval(moveBackward, AUTO_INTERVAL_TIME);
    autoForwardBtn.disabled = true;
    autoBackwardBtn.disabled = true;
}

function stopAuto() {
    clearInterval(autoInterval);
    autoInterval = null;
    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;
}
autoForwardBtn.addEventListener("click", startAutoForward);
autoBackwardBtn.addEventListener("click", startAutoBackward);
stopBtn.addEventListener("click", stopAuto);