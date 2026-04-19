const images = [
  "https://unsplash.com/photos/three-giraffes-on-brown-grass-field-during-daytime-eQdDUdi5qLk",
  "https://unsplash.com/photos/a-group-of-giraffes-standing-on-a-dirt-road-nUwKN_3PQ7c",
  "https://unsplash.com/photos/giraffe-drinking-water-q73Ehqc4OqY",
  "https://unsplash.com/photos/a-giraffe-standing-next-to-a-tree-in-a-field-aWNGjRw4QpM",
];

let currentIndex = 0;

const slide = document.getElementById("slide");
const backButton = document.getElementById("back");
const forwardButton = document.getElementById("forward");

function updateSlide() {
  slide.src = images[currentIndex];
}

backButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide();
});

forwardButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  // makes a loop so that the last pic leads to the first pic and vv
  updateSlide();
});

// show first image on load
updateSlide();

let autoId;

function startAuto(direction) {
  stopAuto(); // clear any existing interval first
  autoId = setInterval(() => {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateSlide();
  }, 5000);
}

function stopAuto() {
  clearInterval(autoId);
}

document.getElementById("auto-forward").addEventListener("click", () => {
  startAuto(1);
});

document.getElementById("auto-back").addEventListener("click", () => {
  startAuto(-1);
});

document.getElementById("stop").addEventListener("click", stopAuto);
