const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/black-cat.jpg",
  "./assets/giraffe.jpg",
  "./assets/Lion.jpg",
  "./assets/lions-painting.jpg",
  "./assets/nature.jpg",
  "./assets/elephant.jpg",
];

const backwardBtn = document.querySelector("#backward-btn");
const forwardBtn = document.querySelector("#forward-btn");
const autoBackBtn = document.querySelector("#auto-backward");
const autoForwardBtn = document.querySelector("#auto-forward");
const stopAutoBtn = document.querySelector("#auto-stop");
const timer = document.querySelector("#timer");
let intervalTimer = Number(timer.value);
let interval
const img = document.querySelector("#carousel-img");
img.src = images[0]
let x = 0;

function moveForward(){
    if (x === images.length-1){
        x = 0
    }else {
        x += 1;
    }
    img.src = images[x];
    return x
}
function moveBackward() {
    if ((x === 0)) {
      x = images.length - 1;
    } else {
      x -= 1;
    }
    img.src = images[x];
    return x
}
timer.addEventListener("input", () => {
    intervalTimer = Number(timer.value);
})
function moveBackwardAuto(){
    clearInterval(interval);
    if (intervalTimer <= 0) {
        interval = setInterval(moveBackward, 4000);
    } else {
        interval = setInterval(moveBackward, (intervalTimer * 1000));
    }
    timer.value = "";
    
}
function moveForwardAuto(){
    clearInterval(interval);
    if (intervalTimer <= 0) {
        interval = setInterval(moveForward, 4000);
    } else {
        interval = setInterval(moveForward, (intervalTimer * 1000));
    }
    timer.value = "";
}
function stopAuto(){
    clearInterval(interval)
}
backwardBtn.addEventListener("click", moveBackward);
forwardBtn.addEventListener("click", moveForward);
autoBackBtn.addEventListener("click", moveBackwardAuto);
autoForwardBtn.addEventListener("click", moveForwardAuto);
stopAutoBtn.addEventListener("click", stopAuto)
// Write your code here