const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const catImage = document.getElementById("carousel-img"); // manipulated the html to get the carousel image id and stored it in a variable.
const backwardButton = document.getElementById("backward-btn"); // manipulated the html to get the backward button id and stored it in a variable.
const forwardButton = document.getElementById("forward-btn"); // manipulated the html to get the forward button id and stored it in a variable.

function catCarousel(options) {
  // ctreated a function to display the images in the carousel.
  let currentImageIndex = 0; // created a variable to store the current image index.

  backwardButton.addEventListener("click", function () {
    // created an event listener for the backward button.
    currentImageIndex--; // decremented the current image index by 1 when the button is clicked.

    if (currentImageIndex < 0) {
      // created a condition to check if the current image index is less than 0.
      currentImageIndex = images.length - 1; // if the condition is true, set the current image index to the last image index.
    }
    catImage.src = images[currentImageIndex]; // set the image source to the current image index.
  });

  forwardButton.addEventListener("click", function () {
    // created an event listener for the forward button.
    currentImageIndex++; // incremented the current image index by 1 when the button is clicked.

    if (currentImageIndex > images.length - 1) {
      // created a condition to check if the current image index is greater than the last image index.
      currentImageIndex = 0; // if the condition is true, set the current image index to 0.
    }
    catImage.src = images[currentImageIndex]; // set the image source to the current image index.
  });
  const autoForwardButton = document.createElement("button"); // created a button element for auto-forward.
  autoForwardButton.type = "button"; // set the type of the button to button.
  autoForwardButton.id = "auto-forward"; // set the id of the button to auto-forward.
  autoForwardButton.textContent = "Auto-Forward"; // set the text content of the button to Auto-Forward.
  document.body.appendChild(autoForwardButton); // appended the button to the body of the document.

  let autoForwardInterval; // created a variable to store the auto-forward interval.
  autoForwardButton.addEventListener("click", function () {
    // created an event listener for the auto-forward button.
    autoForwardInterval = setInterval(function () {
      // set the interval for the auto-forward button.
      currentImageIndex++; // incremented the current image index by 1.
      if (currentImageIndex > images.length - 1) {
        // declared a statement to check if the current image index is greater than the last image index.
        currentImageIndex = 0; // if the condition is true, set the current image index to 0.
      }
      catImage.src = images[currentImageIndex]; // set the image source to the current image index.
    }, 2000); // set the interval to 2000 milliseconds.
    autoBackwardButton.disabled = true; // disabled the auto-backward button.
    autoForwardButton.disabled = true; // disabled the auto-forward button.
  });

  const autoBackwardButton = document.createElement("button"); // created a button element for auto-backward.
  autoBackwardButton.type = "button"; // set the type of the button to button.
  autoBackwardButton.id = "auto-backward"; // set the id of the button to auto-backward.
  autoBackwardButton.textContent = "Auto-Backward"; // set the text content of the button to Auto-Backward.
  document.body.appendChild(autoBackwardButton); // appended the button to the body of the document.
  let autoBackwardInterval; // created a variable to store the auto-backward interval.
  autoBackwardButton.addEventListener("click", function () {
    // created an event listener for the auto-backward button.
    autoBackwardInterval = setInterval(function () {
      // set the interval for the auto-backward button.
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // if the condition is true, set the current image index to the last image index.
      }
      catImage.src = images[currentImageIndex];
    }, 2000);
    autoBackwardButton.disabled = true;
    autoForwardButton.disabled = true;
  });
  const stopButton = document.createElement("button"); // created a button element for stop.
  stopButton.type = "button";
  stopButton.id = "stop";
  stopButton.textContent = "Stop";
  document.body.appendChild(stopButton); // append the stop button to the body of the document.

  stopButton.addEventListener("click", function () {
    // called when the stop button is clicked.
    clearInterval(autoForwardInterval); // clear the interval for auto-forward.
    clearInterval(autoBackwardInterval); // clear the interval for auto-backward.
    autoBackwardButton.disabled = false;
    autoForwardButton.disabled = false;
  });
}
catCarousel();
