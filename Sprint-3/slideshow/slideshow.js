//const images = [
   // "./assets/cute-cat-a.png",
  //  "./assets/cute-cat-b.jpg",
 //   "./assets/cute-cat-c.jpg",
//];


// Write your code here
// Image list stored in the assets folder
const images = [
    "./assets/cute-cat-a.png",  // Image 1
    "./assets/cute-cat-b.jpg",  // Image 2
    "./assets/cute-cat-c.jpg",  // Image 3
  ];
  
  let currentIndex = 0;
  
  // Get elements
  const imgElement = document.getElementById("carousel-img");
  const backwardButton = document.getElementById("backward-btn");
  const forwardButton = document.getElementById("forward-btn");
  const autoBackwardButton = document.getElementById("auto-backward-btn");
  const autoForwardButton = document.getElementById("auto-forward-btn");
  
  // Function to update the image based on the current index
  function updateImage() {
    imgElement.src = images[currentIndex];  // Set the image src to the current image in the array
  }
  
  // Manual navigation - Backward
  backwardButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
  });
  
  // Manual navigation - Forward
  forwardButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
  });
  
  // Auto navigation - Backward
  let autoBackwardInterval;
  autoBackwardButton.addEventListener("click", () => {
    clearInterval(autoBackwardInterval); // Stop any ongoing interval
    autoBackwardInterval = setInterval(() => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateImage();
    }, 2000); // Change image every 2 seconds
  });
  
  // Auto navigation - Forward
  let autoForwardInterval;
  autoForwardButton.addEventListener("click", () => {
    clearInterval(autoForwardInterval); // Stop any ongoing interval
    autoForwardInterval = setInterval(() => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage();
    }, 2000); // Change image every 2 seconds
  });
  