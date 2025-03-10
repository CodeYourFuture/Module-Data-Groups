const forwardButton = document.querySelector("#forward-btn");
const backwardsButton = document.querySelector("#backward-btn");
const carousel = document.querySelector("#carousel-img");

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/daria-shatova-46TvM-BVrRI-unsplash.jpg",
  "./assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
];

let index = 0;
carousel.setAttribute("src", images[index]);

function moveForward() {
  if (index == images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  carousel.setAttribute("src", images[index]);
}

function moveBackwards() {
  if (index == 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  carousel.setAttribute("src", images[index]);
}

forwardButton.addEventListener("click", moveForward);
backwardsButton.addEventListener("click", moveBackwards);
