// Array of images
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Track the current image index
let currentIndex = 0;

// Get the image element
const imgElement = document.getElementById("carousel-img");

// Forward button functionality
document.getElementById("forward-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < images.length) {
    imgElement.src = images[currentIndex];
  } else {
    alert("There are not any more images");
  }
});

// Backward button functionality
document.getElementById("backward-btn").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex >= 0) {
    imgElement.src = images[currentIndex];
  } else {
    alert("There are not any more images");
  }
});

// Get the container for additional buttons
const buttonsContainer = document.getElementById("buttons-container");

// Function to create a button and attach functionality
function createButton(id, text, callback) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  buttonsContainer.appendChild(button);
  button.addEventListener("click", callback);
}
// Add Auto Back functionality
createButton("auto_Back", "Auto Back", () => {
  let interval = setInterval(() => {
    if (currentIndex > 0) {
      currentIndex--;
      imgElement.src = images[currentIndex];
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
// Add Auto Forward functionality
createButton("auto_Forward", "Auto Forward", () => {
  let interval = setInterval(() => {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      imgElement.src = images[currentIndex];
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
