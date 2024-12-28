const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
let imageValue = 0;
const buttons = document.querySelector(".button-group");
const checkNumber = document.getElementById("image-index");
const imageFinder = document.getElementById("carousel-img");
//for interval
let forwardIntervalId;
let backwardIntervalId;
function setup() {
  const makeDemo1 = document.createElement("h1");
  makeDemo1.textContent = "Image Carousel.Level 1 Demo";
  document.body.prepend(makeDemo1);
  //   findArrayInd();
  findWhichButton();
  checkNumber.innerText = imageValue;
  //   const queryImage=
}
function findArrayInd(value) {
  if (value == "increase") {
    imageValue = (imageValue + 1) % images.length;
    checkNumber.innerText = imageValue;
    imageFinder.src = images[imageValue];
  } else if (value == "decrease") {
    imageValue = (imageValue - 1 + images.length) % images.length;
    checkNumber.innerText = imageValue;
    imageFinder.src = images[imageValue];
  } else if (value == "auto-forward-btn") {
    if (forwardIntervalId) {
      clearInterval(forwardIntervalId);
    }
    forwardIntervalId = setInterval(() => {
      imageValue = (imageValue + 1) % images.length;
      checkNumber.innerText = imageValue;
      imageFinder.src = images[imageValue];
    }, 1000);
  } else if (value == "auto-backward-btn") {
    if (backwardIntervalId) {
      clearInterval(backwardIntervalId);
    }
    backwardIntervalId = setInterval(() => {
      imageValue = (imageValue - 1 + images.length) % images.length;
      checkNumber.innerText = imageValue;
      imageFinder.src = images[imageValue];
    }, 1000);
  } else if (value == "stop-btn") {
    if (forwardIntervalId) {
      clearInterval(forwardIntervalId);
    }
    if (backwardIntervalId) {
      clearInterval(backwardIntervalId);
    }
  }
  return imageValue;
}
function findWhichButton() {
  buttons.addEventListener("click", (e) => {
    if (e.target.id == "forward-btn") {
      findArrayInd("increase");
    } else if (e.target.id == "backward-btn") {
      findArrayInd("decrease");
    } else if (e.target.id == "auto-backward-btn") {
      findArrayInd("auto-backward-btn");
    } else if (e.target.id == "stop-btn") {
      findArrayInd("stop-btn");
    } else if (e.target.id == "auto-forward-btn") {
      findArrayInd("auto-forward-btn");
    }
  });
}

window.onload = setup;
