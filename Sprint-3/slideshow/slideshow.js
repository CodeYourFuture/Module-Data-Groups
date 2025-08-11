const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex=0;
let intervalId = null;

const imageElement = document.getElementById("carousel-img");
const forwardBtn= document.getElementById("forward-btn");
const backwardBtn= document.getElementById("backward-btn");
const autoForwardBtn= document.getElementById("auto-forward");
const autoBackwardBtn= document.getElementById("auto-backward");
const stopBtn= document.getElementById("stop");


forwardBtn.addEventListener("click", ()=> {
    currentIndex= (currentIndex + 1)% images.length;
    imageElement.src= images[currentIndex];
});

backwardBtn.addEventListener("click", () => {
    currentIndex= (currentIndex - 1 + images.length)% images.length;
    imageElement.src = images[currentIndex];
});

autoForwardBtn.addEventListener("click", ()=> {
    clearInterval(intervalId);

    autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

    intervalId= setInterval(()=>{
        currentIndex= (currentIndex + 1)% images.length;
        imageElement.src= images[currentIndex];
    }, 2000);
});

autoBackwardBtn.addEventListener("click", ()=> {
    clearInterval(intervalId);

    autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

    intervalId= setInterval(()=>{
        currentIndex= (currentIndex - 1 + images.length)% images.length;
        imageElement.src= images[currentIndex];
    }, 2000);
});

stopBtn.addEventListener("click", () =>{
    clearInterval(intervalId);
    

    autoForwardBtn.disabled = false;
    autoBackwardBtn.disabled = false;

});


// Write your code here