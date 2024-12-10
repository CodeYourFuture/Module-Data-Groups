const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const imgSlider = document.getElementById("carousel-img");

let index = 0;

function moveForward() {
    index = (index + 1) % images.length;
    imgSlider.src = images[index];
}
forwardBtn.addEventListener('click', moveForward);

function moveBackforward() {
    index = (index - 1 + images.length) % images.length;
    imgSlider.src = images[index];
}
backwardBtn.addEventListener('click', moveBackforward);

