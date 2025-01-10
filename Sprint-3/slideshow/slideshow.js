const images = [
  "./assets/lifeofpi.jpg",
  "./assets/schindlerslist.png",
  "./assets/thematrixreloaded.jpg",
  "./assets/thefountain.jpg",
  "./assets/thetrumanshow.jpg",
  "./assets/inception.jpg",
  "./assets/vforvendetta.jpg",
  "./assets/pulpfiction.jpg",
  "./assets/theshining.jpg",
  "./assets/et.jpg",
  "./assets/breakfastattiffanys.jpg",
  "./assets/interstellar.jpg",
  "./assets/eternalsunshineofthespotlessmind.jpg",
  "./assets/thegrandbudapesthotel.jpg",
];

let currentIndex = 0;
let autoPlayInterval = null;
let intervalTime = 500;

const imgElement = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");
const delayInput = document.getElementById("delay-input");
const applyDelayBtn = document.getElementById("apply-delay");

const updateImage = () => {
  imgElement.src = images[currentIndex];
};

forwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

backwardBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

autoForwardBtn.addEventListener("click", () => {
  stopAutoPlay();
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, intervalTime);
});

autoBackBtn.addEventListener("click", () => {
  stopAutoPlay();
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  }, intervalTime);
});

stopBtn.addEventListener("click", () => {
  stopAutoPlay();
  enableAutoButtons();
});

const stopAutoPlay = () => {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
};

const disableAutoButtons = () => {
  autoForwardBtn.disabled = true;
  autoBackBtn.disabled = true;
};

const enableAutoButtons = () => {
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
};

applyDelayBtn.addEventListener("click", () => {
  const newDelay = parseFloat(delayInput.value) * 1000;
  if (newDelay >= 500) {
    intervalTime = newDelay;
    alert(`Delay time updated to ${newDelay / 1000} seconds`);
  } else {
    alert("Please enter a delay of at least 0.5 seconds");
  }
});
