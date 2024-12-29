let autoBackInterval;
let autoforwardInterval;
const imagesForSlider = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "https://www.animalleague.org/wp-content/uploads/2022/02/beth-blog-feb2022-white-grey-kitten-400x401.jpg",
];

let seconds = 1;

const prevButton = document.querySelector("#backward-btn"),
  nextButton = document.querySelector("#forward-btn"),
  autoForward = document.querySelector("#autoforward-btn"),
  autoBack = document.querySelector("#autoback-btn"),
  stopButton = document.querySelector("#stop-btn"),
  image = document.querySelector("#carousel-img"),
  secondsDelay = document.getElementById("seconds-input");

let curIndex = 1;

function showSlide(index) {
      image.src = imagesForSlider[index];
}

function nextImage() {
  curIndex = (curIndex + 1) % imagesForSlider.length;
  showSlide(curIndex);
}
function prevImage() {
  curIndex = (curIndex - 1 + imagesForSlider.length) % imagesForSlider.length;
  showSlide(curIndex);
}

nextButton.addEventListener("click", () => {
  if (!autoBackInterval && !autoforwardInterval) {
      nextImage();
  }
});

prevButton.addEventListener("click", () => {
  if (!autoBackInterval && !autoforwardInterval) {
    prevImage()
  }
});

autoBack.addEventListener("click", () => {
  if (!autoBackInterval && !autoforwardInterval) {
   autoBackInterval = setInterval(prevImage, seconds * 1000); 
  }
});

autoForward.addEventListener("click", () => {
  if (!autoBackInterval && !autoforwardInterval) {
    autoforwardInterval = setInterval(nextImage, seconds * 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(autoBackInterval);
  autoBackInterval = null;
  clearInterval(autoforwardInterval);
  autoforwardInterval = null;
});

secondsDelay.addEventListener('input', () => {
  seconds = secondsDelay.value;
} )


showSlide(curIndex);
