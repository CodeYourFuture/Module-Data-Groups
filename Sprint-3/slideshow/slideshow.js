const forwardButton = document.querySelector("#forward-btn");
const backwardsButton = document.querySelector("#backward-btn");
const autoForwardButton = document.querySelector("#auto-forward");
const autoBackwardsButton = document.querySelector("#auto-backward");
const stopButton = document.querySelector("#stop");
const carousel = document.querySelector("#carousel-img");

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
//   "./assets/daria-shatova-46TvM-BVrRI-unsplash.jpg",
//   "./assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
// ];

let intervalId;
let index = 0;

// carousel.setAttribute("src", images[index]);

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

function autoMoveForward() {
  forwardButton.disabled = true;
  backwardsButton.disabled = true;
  autoBackwardsButton.disabled = true;
  autoForwardButton.disabled = true;
  clearInterval(intervalId);
  intervalId = setInterval(moveForward, 2000);
}

function autoMoveBackward() {
  forwardButton.disabled = true;
  backwardsButton.disabled = true;
  autoBackwardsButton.disabled = true;
  autoForwardButton.disabled = true;
  clearInterval(intervalId);
  intervalId = setInterval(moveBackwards, 2000);
}

function stopMoving() {
  forwardButton.disabled = false;
  backwardsButton.disabled = false;
  autoBackwardsButton.disabled = false;
  autoForwardButton.disabled = false;
  clearInterval(intervalId);
}

forwardButton.addEventListener("click", moveForward);
backwardsButton.addEventListener("click", moveBackwards);
autoForwardButton.addEventListener("click", autoMoveForward);
autoBackwardsButton.addEventListener("click", autoMoveBackward);
stopButton.addEventListener("click", stopMoving);
