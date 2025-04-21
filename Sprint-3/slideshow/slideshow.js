const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

let currentIndex = 0;

const carouselImg = document.getElementById("carousel-img");
carouselImg.setAttribute("src", images[currentIndex]);

document.getElementById("forward-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImg.setAttribute("src", images[currentIndex]);
});

document.getElementById("backward-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  carouselImg.setAttribute("src", images[currentIndex]);
});
