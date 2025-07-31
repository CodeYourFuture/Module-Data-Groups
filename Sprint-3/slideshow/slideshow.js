const images = [
  "./assets/cute-cat-a.jpg",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
  "./assets/cute-cat-e.jpg",
  "./assets/cute-cat-f.jpg",
  "./assets/cute-cat-g.jpg",
  "./assets/cute-cat-h.jpg",
  "./assets/cute-cat-i.jpg",
  "./assets/cute-cat-j.jpg",
  "./assets/cute-cat-k.jpg",
  "./assets/cute-cat-l.jpg",
  "./assets/cute-cat-m.jpg",
  "./assets/cute-cat-n.jpg",
];

// Write your code here
let currentIndex = 0; // Keeps track of which image is showing
let intervalId = null; // Holds the setInterval ID if auto-play is running

const imageElement = document.getElementById("carousel-image"); // The image tag in your HTML

// <--Main function-->

function updateImage() {
  imageElement.src = images[currentIndex]; // Display image at current index
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Go to next, wrap to 0
  updateImage();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Go to previous, wrap to end
  updateImage();
}

function startAutoPlay(direction) {
  stopAutoPlay(); // Stop any existing auto-play

  intervalId = setInterval(function () {
    if (direction === "forward") {
      nextImage();
    } else {
      previousImage();
    }
  }, 2000); // Every 2 seconds
}

function stopAutoPlay() {
  clearInterval(intervalId); // Clear interval if running
}

// <--Event Listeners-->

document.getElementById("forward").addEventListener("click", function () {
  stopAutoPlay(); // Stop auto mode if user clicks manually
  nextImage();
});

document.getElementById("back").addEventListener("click", function () {
  stopAutoPlay();
  previousImage();
});

document.getElementById("auto-forward").addEventListener("click", function () {
  startAutoPlay("forward");
});

document.getElementById("auto-back").addEventListener("click", function () {
  startAutoPlay("back");
});

document.getElementById("stop").addEventListener("click", stopAutoPlay);

updateImage(); // Show first image when the page loads
