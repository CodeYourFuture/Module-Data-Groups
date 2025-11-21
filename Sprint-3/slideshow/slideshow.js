
// Write your code here
// ARRAY OF IMAGES: This stores the file paths or URLs of all images in our carousel
// We need at least 4 images as specified in the requirements
const images = [
  "./assets/cute-cat-a.png", // Local file in assets folder
  "./assets/cute-cat-c.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1280px-Cat_August_2010-4.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbw_nRUZfGp9Bma2RQDW_5l5apC36i7Rfp16ahrhvsXrUp6pmlShZH546EisOrwCsrPP9Bdlob5pFltdHlzjGOgcsobmsPP6Rl950b9iLmAw&s=10", // Local file in assets folder
];

// CURRENT IMAGE INDEX: This variable keeps track of which image we're currently showing
// We start at 0 because array indexes start at 0 (0 = first image, 1 = second image, etc.)
let currentImageIndex = 0;

// GET HTML ELEMENTS: We find the HTML elements we need to work with
// These are like "handles" that let us control the elements with JavaScript
const carouselImg = document.getElementById("carousel-img");      // The <img> tag that shows the current picture
const backwardBtn = document.getElementById("backward-btn");      // The "Back" button
const forwardBtn = document.getElementById("forward-btn");        // The "Forward" button

// FUNCTION: updateImage - This updates the webpage to show the current image
function updateImage() {
    // Set the image source to the current image in our array
    // images[currentImageIndex] gets the image path/URL at the current position
    // Example: if currentImageIndex = 2, then images[2] = "./assets/cute-cat-c.jpg"
    carouselImg.src = images[currentImageIndex];
    
    // Update the alt text for accessibility (screen readers for visually impaired users)
    // This describes what the image shows
    carouselImg.alt = `Cat picture ${currentImageIndex + 1}`;
    // currentImageIndex + 1 because we want "Cat picture 1" instead of "Cat picture 0"
}

// FUNCTION: showNextImage - This shows the next image when forward button is clicked
function showNextImage() {
    // Move to the next index by adding 1 to currentImageIndex
    // Example: if current was 0, now it becomes 1
    currentImageIndex++;
    
    // CHECK FOR LOOPING: If we've gone past the last image, go back to the first
    // images.length tells us how many images are in the array (in this case, 4)
    // If currentImageIndex becomes 4 or more, we've gone too far
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;  // Reset to first image (index 0)
    }
    
    // Now update the actual image on the webpage
    updateImage();
}

// FUNCTION: showPreviousImage - This shows the previous image when back button is clicked  
function showPreviousImage() {
    // Move to the previous index by subtracting 1 from currentImageIndex
    // Example: if current was 2, now it becomes 1
    currentImageIndex--;
    
    // CHECK FOR LOOPING: If we've gone before the first image, go to the last image
    // If currentImageIndex becomes negative (less than 0), we've gone too far back
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;  // Go to last image (index 3 for 4 images)
        // images.length - 1 because arrays start at 0, so last index is length-1
    }
    
    // Now update the actual image on the webpage
    updateImage();
}

// SET UP BUTTON CLICK HANDLERS: Make the buttons actually work
// When someone clicks the forward button, run the showNextImage function
forwardBtn.addEventListener("click", showNextImage);

// When someone clicks the backward button, run the showPreviousImage function
backwardBtn.addEventListener("click", showPreviousImage);

// INITIALIZATION: The carousel is ready to go!
// The first image automatically shows because:
// 1. currentImageIndex starts at 0 (first image)
// 2. Our HTML already has src="./assets/cute-cat-a.png" which is the first image
// 3. When page loads, the browser shows that image immediately