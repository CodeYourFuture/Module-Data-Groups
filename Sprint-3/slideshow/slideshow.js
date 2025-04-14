const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let forwardBtn = document.getElementById("forward-btn");
let autoForwardBtn = document.getElementById("auto-forward-btn");
let backwardBtn = document.getElementById("backward-btn");
let autoBackwardBtn = document.getElementById("auto-backward-btn");
let stopBtn = document.getElementById("stop-btn");
let carouselImg = document.getElementById("carousel-img");
let currentImage = 0;

forwardBtn.addEventListener("click", () => {
    currentImage++;
    if (currentImage == images.length){
        currentImage = 0;
    }
    carouselImg.setAttribute("src", images[currentImage]);
});

autoForwardBtn.addEventListener("click", () => {
    let interval = setInterval(function(){
        currentImage++;
        if (currentImage == images.length){
            currentImage = 0;
        }
        stopBtn.addEventListener("click",()=>{
            clearInterval(interval);
        });
        carouselImg.setAttribute("src", images[currentImage]);
    }, 3000);
});
autoBackwardBtn.addEventListener("click", ()=>{
    let interval =setInterval(function(){
        currentImage--;
        if ( currentImage < 0){
            currentImage=images.length-1;
        }
        stopBtn.addEventListener("click", ()=>{
            clearInterval(interval);
        });
        carouselImg.setAttribute("src", images[currentImage]);
    },3000);
});


backwardBtn.addEventListener("click",() =>{
    currentImage--;
    if ( currentImage < 0){
        currentImage=images.length-1;
    }
    carouselImg.setAttribute("src", images[currentImage]);
});


