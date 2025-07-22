const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
]


let currentIndex = 0;
const carouselImg = document.getElementById("carousel-img");

function showNextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; // wrap to start
  }
  carouselImg.src = images[currentIndex];
}
 document.getElementById("forward-btn").addEventListener("click",function(){
    showNextImage()

 })
 function showPreviousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;  // assign the last index to currentIndex
  }
  carouselImg.src = images[currentIndex];
}
 document.getElementById("backward-btn").addEventListener("click",function(){
    showPreviousImage()

 })