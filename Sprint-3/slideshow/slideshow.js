
/*const images = [
  "./assets/cute-cat-1.png",
  "./assets/cute-cat-2.jpg",
  "./assets/cute-cat-3.jpg",
  "./assets/cute-cat-4.jpg",
  "./assets/cute-cat-5.jpg",
];
*/

// Write your code here

let number_img = 1;
const total_images = 5;

function img_change_add() {
  var img = document.getElementById("img");
  

   if (number_img < total_images) {
     number_img += 1;
   } else {
     number_img = 1; 
   }
  img.src = "/Sprint-3/slideshow/assets/cute-cat-" + number_img + ".jpg";
}

function img_change_sub() {
  var img = document.getElementById("img");
  
 if (number_img > 1) {
   number_img -= 1;
 } else {
   number_img = total_images;
 }
 img.src = "/Sprint-3/slideshow/assets/cute-cat-" + number_img + ".jpg";
}
