const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

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


function setup() {

    document.querySelector("#backward-btn").addEventListener("click", ( ) => {
        moveImageBackward()
    });

    document.querySelector("#forward-btn").addEventListener("click", ( ) => {
        moveImageForward()
    });

    // Show first image on load
    showImage(currentIndex);

};

setup();