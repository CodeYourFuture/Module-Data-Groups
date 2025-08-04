const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
let currentIndex = 0;
const imaEl = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");


// first lets do the forward button
forwardBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    imaEl.src = images[currentIndex];
});

// now the backward button
backwardBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    imaEl.src = images[currentIndex];
});
