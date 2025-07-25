const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentImage = 0;
const imageDom = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");

function moveCarousel(isDirectionForward) {
    isDirectionForward ? currentImage++ : currentImage--;
    if (currentImage == images.length) {
        currentImage = 0;
    }
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    imageDom.setAttribute("src", images[currentImage]);
}

forwardButton.addEventListener("click", () => {
    moveCarousel(true);
});

backwardButton.addEventListener("click", () => {
    moveCarousel(false);
});

const stopButton = document.getElementById("stop-btn");
const autoForwardButton = document.getElementById("auto-forward-btn");
const autoBackwardButton = document.getElementById("auto-backward-btn");

autoForwardButton.addEventListener("click", () => {
    stopButton.click();// if user does not press stop before choose other direction
    const interval = setInterval(function () {
        moveCarousel(true);
        stopButton.addEventListener("click", () => {
            clearInterval(interval);
        });
    }, 2000);
});

autoBackwardButton.addEventListener("click", () => {
    stopButton.click();// if user does not press stop before choose other direction
    const interval = setInterval(function () {
        moveCarousel(false);
        stopButton.addEventListener("click", () => {
            clearInterval(interval);
        });
    }, 2000);
});