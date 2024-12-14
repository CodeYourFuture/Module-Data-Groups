// const images = [
//     "./assets/cute-cat-a.png",
//     "./assets/cute-cat-b.jpg",
//     "./assets/cute-cat-c.jpg",
// ];


// Write your code here

document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "./assets/cute-cat-a.png",
      "./assets/cute-cat-b.jpg",
      "./assets/cute-cat-c.jpg",
    ];
  
    const imageContainer = document.getElementById("image-container");
    let currentIndex = 0;
    let autoSlideInterval = null;  // This will hold the interval for auto-forward/backward
  
    // Function to render the current image
    function renderImage() {
      imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="carousel image">`;
    }
  
    // Function to go to the previous image
    function moveBack() {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      renderImage();
    }
  
    // Function to go to the next image
    function moveForward() {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      renderImage();
    }
  
    // Event listeners for manual navigation
    document.getElementById("back-btn").addEventListener("click", moveBack);
    document.getElementById("forward-btn").addEventListener("click", moveForward);
  
    // Function to start the auto-forward slideshow
    function startAutoForward() {
      if (autoSlideInterval) return; // If there's already an interval running, do nothing
  
      autoSlideInterval = setInterval(moveForward, 5000); // Change image every 5 seconds
    }
  
    // Function to start the auto-backward slideshow
    function startAutoBackward() {
      if (autoSlideInterval) return; // If there's already an interval running, do nothing
  
      autoSlideInterval = setInterval(moveBack, 5000); // Change image every 5 seconds
    }
  
    // Function to stop the slideshow
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null; // Reset the interval
    }
  
    // Event listeners for auto navigation buttons
    document.getElementById("auto-forward-btn").addEventListener("click", startAutoForward);
    document.getElementById("stop-btn").addEventListener("click", stopAutoSlide);
    document.getElementById("auto-backward-btn").addEventListener("click", startAutoBackward);
  
    // Initial render of the first image
    renderImage();
  });
  