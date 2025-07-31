const images = [
  "./assets/codingDeskSetup1.jpg",
  "./assets/codingDeskSetup2.jpg",
  "./assets/codingDeskSetup3.jpg",
  "./assets/codingDeskSetup4.jpg",
  "./assets/codingDeskSetup5.jpg",
];

let slideIndex = 0;
let autoSlide;
const imgElement = document.getElementById("carousel-img");
const dots = document.getElementsByClassName("dot");

function showSlide(index) {
  if (index >= images.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = images.length - 1;
  } else {
    slideIndex = index;
  }
  imgElement.src = images[slideIndex];
  updateDots();
}

function updateDots() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
}

document.querySelector(".prev").addEventListener("click", () => {
  stopAuto();
  showSlide(slideIndex - 1);
});
document.querySelector(".next").addEventListener("click", () => {
  stopAuto();
  showSlide(slideIndex + 1);
});

document.querySelector(".autoForward").addEventListener("click", autoForward);
document.querySelector(".autoBackward").addEventListener("click", autoBackward);
document.getElementById("stop").addEventListener("click", stopAuto);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", () => {
    stopAuto();
    showSlide(i);
  });
}

function autoForward() {
  stopAuto();
  showSlide(slideIndex + 1);
  autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);
}

function autoBackward() {
  stopAuto();
  showSlide(slideIndex - 1);
  autoSlide = setInterval(() => showSlide(slideIndex - 1), 5000);
}

function stopAuto() {
  clearInterval(autoSlide);
}

showSlide(slideIndex);
