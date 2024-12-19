const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "https://images.unsplash.com/photo-1706755347832-0a8c8caa7647?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    'https://images.unsplash.com/photo-1517692247-f4062c18fa05?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1710030733204-6816ffb0a1b2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1701004806780-18aad764aee2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1604521235800-e06712a0dc8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const backBtn = document.getElementById('backward-btn');
const forwardBtn = document.getElementById('forward-btn');
const image = document.getElementById('carousel-img');
const autoBack = document.getElementById('auto-back');
const autoForward = document.getElementById('auto-forward');
const stopBtn = document.getElementById('stop');
let currentImageIndex = 0;
let interval;

function updateImage () {
    image.src = images[currentImageIndex];
};

function autoplayBack() {
    clearInterval(interval)
    interval = setInterval(() => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }, 1000);
}

function autoplayForward() {
    clearInterval(interval)
    interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }, 1000)
}

backBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

autoBack.addEventListener('click', () => {
    autoplayBack();

});

autoForward.addEventListener('click', () => {
    autoplayForward();
})

forwardBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
})