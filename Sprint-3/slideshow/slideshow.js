const images = [
  "./assets/dog1.webp",
  "./assets/dog2.webp",
  "./assets/dog3.avif",
  "./assets/dog5.webp",
];
let i = 0;
let autoMoveInterval;
const imageElement = document.getElementById("carousel-img");
const backButton = document.getElementById("backward-btn");
const foreButton = document.getElementById("forward-btn");
const autoBackButton = document.getElementById("autoBackeard-btn");
const autoForeButton = document.getElementById("autoForward-btn");
const stopButton = document.getElementById("stop-btn");
foreButton.addEventListener("click", () => {
  nextImage();
});
function nextImage() {
  i += 1;
  if (i == images.length) {
    //makes a rotation from the last image

    i = 0;
  }
  imageElement.setAttribute("src", images[i]);
}
backButton.addEventListener("click", () => {
  previousImage();
});
function previousImage() {
  i -= 1;
  if (i == -1) {
    //makes a rotation from first image
    i = images.length - 1;
  }

  imageElement.setAttribute("src", images[i]);
}
autoForeButton.addEventListener("click", () => {
  clearInterval(autoMoveInterval);
  autoMoveInterval = setInterval(nextImage, 2000);
});
stopButton.addEventListener("click", () => {
  stopAuto();
});
function stopAuto() {
  clearInterval(autoMoveInterval);
}
autoBackButton.addEventListener("click", () => {
  clearInterval(autoMoveInterval);
  autoMoveInterval = setInterval(previousImage, 2000);
});
