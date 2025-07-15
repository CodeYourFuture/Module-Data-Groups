const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

let currentIndex = 0;

const imgElement = document.getElementById("carousel-img");

function slideShowBack() {
    document.getElementById("backward-btn").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });
  }
  slideShowBack();

  function slideShowForward() {
    document.getElementById("forward-btn").addEventListener("click", () => {
        currentIndex = (currentIndex + 1 + images.length) % images.length;
        imgElement.src = images[currentIndex];
    });
  }
  slideShowForward();

