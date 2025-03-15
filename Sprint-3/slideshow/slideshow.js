const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let initIndex = 0;
let interval;
//i used dom to get my image and button sections from the html
const carImgSec = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const delay = document.getElementById("timedelay");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBt = document.getElementById("stop");

//eventlistner for forward button
//when forward button is clicked it will set the src of carlimgsec with element of images array with initindex 1 ,2 ,3 as clicked each time and insure it is always less or equal to 3 by %operation.
//i have used similar manner for the forward button
forwardBtn.addEventListener("click", () => {
  initIndex = (initIndex + 1) % images.length;
  carImgSec.src = images[initIndex];
});
backwardBtn.addEventListener("click", () => {
  initIndex = (initIndex - 1 + images.length) % images.length;
  carImgSec.src = images[initIndex];
});
//event listener for forward/backward autoplay/slideshow
autoForwardBtn.addEventListener("click", () => {
  let delayed = parseInt(delay.value) * 1000 || 1000; //getdelay from input or default to 1sec(1000ms)
  clearInterval(interval); // Clear any existing interval
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  interval = setInterval(() => {
    initIndex = (initIndex + 1) % images.length;
    carImgSec.src = images[initIndex];
  }, delayed);
});
autoBackBtn.addEventListener("click", () => {
  let delayed = parseInt(delay.value) * 1000 || 1000; //getdelay from input or default to 1sec(1000ms)
  clearInterval(interval); // Clear any existing interval
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
  interval = setInterval(() => {
    initIndex = (initIndex - 1 + images.length) % images.length;
    carImgSec.src = images[initIndex];
  }, delayed);
});
stopBt.addEventListener("click", () => {
  clearInterval(interval);
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
});