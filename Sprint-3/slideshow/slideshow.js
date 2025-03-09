const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const carouselImg = document.querySelector(`#carousel-img`);
const backButton = document.querySelector(`#backward-btn`);
const forwardButton = document.querySelector(`#forward-btn`);
const autoBackBtn = document.querySelector(`#auto-backward`);
const stopBtn = document.querySelector(`#stop`);
const autoForwardBtn = document.querySelector(`#auto-forward`);
const input = document.querySelector(`#input`);

let i = 0;

function forward() {
  if (i < images.length - 1 && i >= 0) {
    i++;
    carouselImg.src = images[i];
  } else {
    i = 0;
    carouselImg.src = images[i];
  }
}

function backward() {
  i--;
  carouselImg.src = images[i];
  if (i < 0) {
    i = images.length - 1;
    carouselImg.src = images[i];
  }
}

let mySetInterval;

function autoForward() {
  let delay = input.value.length > 0 ? parseInt(input.value + `000`) : 2000;
  mySetInterval = setInterval(forward, delay);
  autoForwardBtn.disabled = true;
  forwardButton.disabled = true;
  backButton.disabled = true;
  autoBackBtn.disabled = true;
}

function autoBackward() {
  let delay = input.value.length > 0 ? parseInt(input.value + `000`) : 2000;
  mySetInterval = setInterval(backward, delay);
  autoForwardBtn.disabled = true;
  forwardButton.disabled = true;
  backButton.disabled = true;
  autoBackBtn.disabled = true;
}

function stopAuto() {
  clearInterval(mySetInterval);
  autoForwardBtn.disabled = false;
  autoBackBtn.disabled = false;
  forwardButton.disabled = false;
  backButton.disabled = false;
}

forwardButton.addEventListener(`click`, forward);
backButton.addEventListener(`click`, backward);
autoForwardBtn.addEventListener(`click`, autoForward);
autoBackBtn.addEventListener(`click`, autoBackward);
stopBtn.addEventListener(`click`, stopAuto);
