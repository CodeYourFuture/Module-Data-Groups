const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

// Selecting elements images and buttons
const image = document.querySelector("#carousel-img");

const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");

const stopBtn = document.querySelector("#stop");

const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackBtn = document.querySelector("#auto-backward");

let id = 0;
// will store the ID returned by the setInterval() function, used to control automatic image switching.
let intervalID;  

// eventListener
document.addEventListener("DOMContentLoaded", getImageOnload); // 
forwardBtn.addEventListener("click", getNextPic); // show next picture
backwardBtn.addEventListener("click", getPreviousPic); // show last picture
autoForwardBtn.addEventListener("click", showAutoForward); // auto forward play
autoBackBtn.addEventListener("click", showAutoBack); // auto back play
stopBtn.addEventListener("click", stopAutoPlay); // stop auto play pictures

// functions....

function getImageOnload() { // display first image when page loads
    image.src = images[0];
  }
  
  function getNextPic() {
    id++;
    if (id >= images.length) {
      id = 0;
    }
    image.src = images[id];
  }
  
  function getPreviousPic() {
    id--;
    if (id < 0) {
      id = images.length - 1;
    }
    image.src = images[id];
  }
  
  function showAutoForward() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      getNextPic();
    }, 2000);
  }
  
  function showAutoBack() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
    clearInterval(intervalID);
    intervalID = setInterval(() => {
      getPreviousPic();
    }, 2000);
  }
  
  function stopAutoPlay() {
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
    clearInterval(intervalID);
  }