const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let initIndex = 0;
//i used dom to get my image and button sections from the html
const carImgSec = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
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
