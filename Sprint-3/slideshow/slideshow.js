const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const imgSlider = document.getElementById("carousel-img");

let index = 0;

forwardBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    imgSlider.src = images[index];
});

backwardBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    imgSlider.src = images[index];
});

