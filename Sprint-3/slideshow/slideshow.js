
// Write your code here
const prevBtn = document.querySelector('#backward-btn');
const nextBtn = document.querySelector('#forward-btn');
const autoFwdBtn = document.querySelector('#auto-forward-btn');
const autoBwdBtn = document.querySelector('#auto-back-btn');
const quantityInput = document.querySelector('#quantity')
const slides = document.querySelectorAll('.slides img')

let slideIndex = 0
let intervalIdNext = null
let intervalIdPrev = null

 // start the slideshow

function slidesInitializer() { 
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide") // add a displaySlide class which sets the display of the images to block.
    }

}

function showSlides(index){

    if (index >= slides.length) {
        slideIndex = 0
    }

    else if(index < 0){
        slideIndex = slides.length -1
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide")  // remove displaySlide class to hide previous image.
    })
    slides[slideIndex].classList.add("displaySlide")
}

function nextSlide () {
    slideIndex++
    showSlides(slideIndex)
}

function prevSlide () {
    slideIndex --
    showSlides(slideIndex)
}

prevBtn.addEventListener('click', prevSlide); // adding an eventListener 
nextBtn.addEventListener('click', nextSlide);

function getDelay() {
    return parseInt(quantityInput.value) || 5; // Default to 5 seconds if input is invalid.
}

function autoForward() {
    const delay = getDelay()
    intervalIdNext = setInterval(nextSlide, (delay * 1000))  // auto forward each 5 seconds
    clearInterval(intervalIdPrev)   // cancelling if there is any existing setInterval
}

function autoBackward() {
    const delay = getDelay()
    intervalIdPrev = setInterval(prevSlide, (delay * 1000)) // playing backwards automatically each 5 seconds
    clearInterval(intervalIdNext)
}

autoFwdBtn.addEventListener('click', autoForward);
autoBwdBtn.addEventListener('click', autoBackward);

window.onload = slidesInitializer()