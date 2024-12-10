const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const imgSlider = document.getElementById("carousel-img");
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const forwardBtn = document.getElementById("forward-btn");
const stopBtn = document.getElementById("stop-btn");

let index = 0;

function moveForward() {
    index = (index + 1) % images.length;
    imgSlider.src = images[index];
}

function moveBackward() {
    index = (index - 1 + images.length) % images.length;
    imgSlider.src = images[index];
}

forwardBtn.addEventListener('click', moveForward);
backwardBtn.addEventListener('click', moveBackward);

let showInterval = null;

autoBackwardBtn.addEventListener('click', () => {
    clearInterval(showInterval);
    showInterval = setInterval(moveForward, 5000);
});

autoForwardBtn.addEventListener('click', () => {
    clearInterval(showInterval);
    showInterval = setInterval(moveBackward, 5000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(showInterval);
});



