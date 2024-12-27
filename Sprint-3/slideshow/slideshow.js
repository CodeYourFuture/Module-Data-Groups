const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];
let imageValue = 0;
const buttons = document.querySelector(".button-group");
const checkNumber = document.getElementById("image-index");
const imageFinder = document.getElementById("carousel-img");
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
  } else if (value == "decrease") {
    imageValue = (imageValue - 1 + images.length) % images.length;
  }
  return imageValue;
}
function findWhichButton() {
  buttons.addEventListener("click", (e) => {
    if (e.target.id == "forward-btn") {
      //   console.log(findArrayInd("increase"));
      findArrayInd("increase");
      checkNumber.innerText = imageValue;
      imageFinder.src = images[imageValue];
    } else if (e.target.id == "backward-btn") {
      //   console.log(findArrayInd("decrease"));
      findArrayInd("decrease");
      checkNumber.innerText = imageValue;
      imageFinder.src = images[imageValue];
    }
  });
}

window.onload = setup();
