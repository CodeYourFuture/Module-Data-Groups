const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];
// Write your code here

let currentIndex = 0;
let intervalId = null;

const indexDisplay = document.getElementById("image-index"); 
const imageElement = document.getElementById("carousel-image");

function updateImage() {
  imageElement.src = images[currentIndex]; 
  indexDisplay.textContent = `${currentIndex + 1} `;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; 
  updateImage();
}

function AutoPlay(direction) {
  stopAutoPlay();

  intervalId = setInterval(function () {
    if (direction === "forward") {
      nextImage();
    } else {
      previousImage();
    }
  }, 1000); // Every 1 seconds
}

function stopAutoPlay() {
  clearInterval(intervalId);
        
  currentIndex = 0;          // Reset index
  updateImage();  
}

document.getElementById("auto-back").addEventListener("click", function () {
  AutoPlay("back");
});

document.getElementById("back").addEventListener("click", function () {
  previousImage();
});

document.getElementById("forward").addEventListener("click", function () {
  nextImage();
});

document.getElementById("auto-forward").addEventListener("click", function () {
  AutoPlay("forward");
});

document.getElementById("stop").addEventListener("click", stopAutoPlay);


updateImage();
