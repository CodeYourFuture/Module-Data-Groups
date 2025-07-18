const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentImage = 0;
let imageDom = document.getElementById("carousel-img");
let forwardButton = document.getElementById("forward-btn");
let backwardButton = document.getElementById("backward-btn");

forwardButton.addEventListener("click", () => {
    currentImage++;
    if (currentImage == images.length) {
        currentImage = 0;
    }
    imageDom.setAttribute("src", images[currentImage]);
});

backwardButton.addEventListener("click", () => {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    imageDom.setAttribute("src", images[currentImage]);
});

let stopButton = document.getElementById("stop-btn");
let autoForwardButton = document.getElementById("auto-forward-btn");
let autoBackwardButton = document.getElementById("auto-backward-btn");

autoForwardButton.addEventListener("click", () => {
    stopButton.click();// if user does not press stop before choose other direction
    let interval = setInterval(function () {
        currentImage++;
        if (currentImage == images.length) {
            currentImage = 0;
        }
        stopButton.addEventListener("click", () => {
            clearInterval(interval);
        });
        imageDom.setAttribute("src", images[currentImage]);
    }, 2000);
});

autoBackwardButton.addEventListener("click", () => {
    stopButton.click();// if user does not press stop before choose other direction
    let interval = setInterval(function () {
        currentImage--;
        if (currentImage < 0) {
            currentImage = images.length - 1;
        }
        stopButton.addEventListener("click", () => {
            clearInterval(interval);
        });
        imageDom.setAttribute("src", images[currentImage]);
    }, 2000);
});