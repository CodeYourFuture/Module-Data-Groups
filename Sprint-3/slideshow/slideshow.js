/*const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];*/


// Write your code here
const images = document.querySelectorAll('.carousel-img');
let currentIndex = 0;
let interval;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });

}


document.getElementById('forward-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

document.getElementById('backward-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.getElementById('auto-forward').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 2000);
});

document.getElementById('auto-backward').addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(() => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }, 2000);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});

showImage(currentIndex);