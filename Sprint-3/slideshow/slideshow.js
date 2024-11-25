let autoBackInterval;
let autoforwardInterval;
const imagesForSlider = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const prevButton = document.querySelector("#backward-btn"),
  nextButton = document.querySelector("#forward-btn"),
  autoForward = document.querySelector("#autoforward-btn"),
  autoBack = document.querySelector("#auto"),
  stopButton = document.querySelector("#stop-btn"),
  image = document.querySelector("#carousel-img");

let curIndex = 1;

function showSlide(index) {
  imagesForSlider.forEach((src, i) => {
    if (i === index) {
      image.src = imagesForSlider[i];
    }
  });
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
  nextImage();
});

prevButton.addEventListener("click", () => {
  prevImage();
});

autoBack.addEventListener("click", () => {
  autoBackInterval = setInterval(prevImage, 2000);
});

autoForward.addEventListener("click", () => {
  autoforwardInterval = setInterval(nextImage, 2000);
});

stopButton.addEventListener("click", () => {
  clearInterval(autoBackInterval);
  clearInterval(autoforwardInterval);
});
showSlide(curIndex);
