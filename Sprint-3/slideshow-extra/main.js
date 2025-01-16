/*RECAP:

1- BRING ALL THE Slides = COSNT querySelectorAl
2- CHANGE THE backgroundImage TO THE FIST IMAGE "ACTIVE"
3- LOOP FOR ALL THE slides
4- REMOVE THE ACTIVE class to the next one ( increment or decrement) */

// 1= FIRST get the elements need to slide to work//

/*const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// 3= define index to start function//

let activeSlide = 0;*/

// 7 = Add Event Listener to Active Slide change with background/
// Incrementing moving to next slide

/*rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  //9- sett images to body
  setBgToBody();
  setActiveSlide();
});

// left button =
// 9 Decrementing backwards the slides/ opposite direction

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  //9- sett images to body

  setBgToBody();
  setActiveSlide();
});

// 4= call the fucntion//

//2-A =Set background to the body()

setBgToBody();*/



// 2= SECOND ADD FUNCTION TO SELECT THE BODY and Set the image to the body// Remember delete css body image link

const slides = document.querySelectorAll(".slide");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const body = document.body;

let activeSlide = 0;

// Initial background setup
setBgToBody();
setActiveSlide();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}

//defractoring the old function  
function changeSlide(direction) {
  if (direction === "right") {
    activeSlide++;
    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }
  } else if (direction === "left") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }
  }

  setBgToBody();
  setActiveSlide();
}

// Event listeners now use the generic function
rightBtn.addEventListener("click", () => {
  changeSlide("right");
});

leftBtn.addEventListener("click", () => {
  changeSlide("left");
});


function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// 5 == looping trough the active class slides//

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active")); 

  slides[activeSlide].classList.add("active");
}
