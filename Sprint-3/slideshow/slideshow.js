const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
];

// Write your code here
const carouselImg = document.getElementById("carousel-img");
const prevBtn = document.getElementById("backward-btn");
const nextBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const stopBtn = document.getElementById("stop-btn");
const autoBackwardBtn = document.getElementById("auto-backward-btn");

let currentImageIndex = 0;

const updatePicture = () => {
  //make pics the same size
  carouselImg.style.width = "400px";
  carouselImg.style.height = "400px";
  carouselImg.style.objectFit = "contain";
  //swap to next
  carouselImg.src = images[currentImageIndex];
};

const back = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex = currentImageIndex - 1;
  }
};
//add event listeners to buttons
prevBtn.addEventListener("click", () => {
  back();
  updatePicture();
});

const forward = () => {
  if (currentImageIndex === images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex = currentImageIndex + 1;
  }
};

nextBtn.addEventListener("click", () => {
  forward();
  updatePicture();
});

//automated slideshow button event listeners
autoForwardBtn.addEventListener("click", () => setInterval(forward, 1500));

autoBackwardBtn.addEventListener("click", () => setInterval(back, 1500));

//stop button event listener
// refresh page
stopBtn.addEventListener("click", () => {
  autoSlideInterval = null;
});
