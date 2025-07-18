const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];
function setup(){
buttonBack = document.getElementById("backward-btn");
buttonForward = document.getElementById("forward-btn");
buttonForward.addEventListener("click", forwardImg);
buttonBack.addEventListener("click", backwardImg);
}
let flag = 0
img = document.getElementById("carousel-img");

function backwardImg(){
    if (flag>0){
        flag -= 1;
    } else {
        flag = images.length - 1;
    }
    img.src = images[flag];
}
function forwardImg(){
    if (flag < images.length-1){
        flag += 1;
    } else {
        flag = 0;
    }
    img.src = images[flag];
}

 
window.onload = setup;
/**
  ****
function stopAuto(){
    clearInterval(interval) 
interval = setInterval(moveBackward, 4000);
    
    */

// Write your code here