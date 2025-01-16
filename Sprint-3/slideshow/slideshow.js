
/*const images = [
  "./assets/cute-cat-1.png",
  "./assets/cute-cat-2.jpg",
  "./assets/cute-cat-3.jpg",
  "./assets/cute-cat-4.jpg",
  "./assets/cute-cat-5.jpg",
];
*/

// Write your code here

/*let number_img = 1;
const total_images = 5;

function img_change_add() {
  var img = document.getElementById("img");
  

   if (number_img < total_images) {
     number_img += 1;
   } else {
     number_img = 1; 
   }
  img.src = "/assets/cute-cat-" + number_img + ".jpg";
}

function img_change_sub() {
  var img = document.getElementById("img");
  
 if (number_img > 1) {
   number_img -= 1;
 } else {
   number_img = total_images;
 }
 img.src = "/assets/cute-cat-" + number_img + ".jpg";
}*/

let number_img = 1;
const total_images = 5;

// Function to update the image source
function updateImage() {
  const img = document.getElementById("img");
  img.src = `/Sprint-3/slideshow/assets/cute-cat-${number_img}.jpg`;
}

// Function to go forward
function img_change_add() {
  if (number_img < total_images) {
    number_img += 1;
  } else {
    number_img = 1;
  }
  updateImage();
}

// Function to go backward
function img_change_sub() {
  if (number_img > 1) {
    number_img -= 1;
  } else {
    number_img = total_images;
  }
  updateImage();
}

// Get buttons
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");

// Add event listeners
forwardBtn.addEventListener("click", img_change_add);
backwardBtn.addEventListener("click", img_change_sub);

// Set the initial image
updateImage();
