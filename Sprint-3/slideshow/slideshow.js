const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.jpg",
    "./assets/cute-cat-e.jpg"
];


// Write your code here
let currentImgIndx = 0
let intervalId = null
const carouselImg = document.getElementById('carousel-img')
const backwardBtn = document.getElementById('backward-btn')
const forwardBtn = document.getElementById('forward-btn')
const autoForwardBtn = document.getElementById('auto-forward-btn')
const autoBackwardBtn = document.getElementById('auto-backward-btn')
const stopBtn = document.getElementById('stop-btn')

function updateSlide(){
    carouselImg.src = images[currentImgIndx]
}

function showNextSlide () {
    currentImgIndx++
    if(currentImgIndx>=images.length){
        currentImgIndx = 0
    }
    updateSlide()
}

function showPreviousSlide(){
    currentImgIndx--
    if (currentImgIndx<0) {
        currentImgIndx = images.length-1
    }
    updateSlide()
}

function autoForwardSlide(){
        if(intervalId !==null){
        clearInterval(intervalId)
    }
    intervalId = setInterval(showNextSlide,1500)

}

function autoBackwardSlide(){
    if(intervalId !==null){
        clearInterval(intervalId)
    }
    intervalId = setInterval(showPreviousSlide,1500)
}


function stopSlide() {
    if(intervalId!== null) {
        clearInterval(intervalId)
        intervalId =null
    }
}

backwardBtn.addEventListener('click',showPreviousSlide)
forwardBtn.addEventListener('click',showNextSlide)
autoForwardBtn.addEventListener('click',autoForwardSlide)
autoBackwardBtn.addEventListener('click',autoBackwardSlide)
stopBtn.addEventListener('click',stopSlide)