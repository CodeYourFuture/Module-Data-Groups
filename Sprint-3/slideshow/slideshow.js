const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
let forwardInterval;
let backwardInterval;
let currentIndex = 0;
const image = document.querySelector("#carousel-img");


// Displays the image at the given index from the images array by updating the src of the image element.
function showImage(index) {
  image.src = images[index];
}


// Increments the currentIndex by 1 to move forward in the image list.
// If it's the last image, it wraps back to the first using modular arithmetic (%).
function moveImageForward() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}


// Decrements the currentIndex to go back to the previous image.
// If it's the first image, it wraps around to the last one using modular arithmetic to stay within bounds.
function moveImageBackward() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}


// This function will be used to automatically move forward through the images.
// You can implement a timer or interval here to call moveImageForward() repeatedly.
function autoForward() {

    forwardInterval = setInterval(moveImageForward, 2000); 
};


// This function will be used to automatically move backward through the images.
// You can implement a timer or interval here to call moveImageBackward() repeatedly.
function autoBackward() {
    backwardInterval = setInterval(moveImageBackward, 2000); 
};

function stopButton() {
    clearInterval(forwardInterval);
    clearInterval(backwardInterval);
};


function setup() {

    document.querySelector("#backward-btn").addEventListener("click", ( ) => {
        moveImageBackward()
    });

    document.querySelector("#stop").addEventListener("click", ( ) => {
        stopButton()
    });

    document.querySelector("#forward-btn").addEventListener("click", ( ) => {
        moveImageForward()
    });

    document.querySelector("#auto-backwards").addEventListener("click", ( ) => {
        autoBackward()
    });

    document.querySelector("#auto-forward").addEventListener("click", ( ) => {
        autoForward()
    });

    // Show first image on load
    showImage(currentIndex);

};

setup();