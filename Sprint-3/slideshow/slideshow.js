const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
// To complete this exercise you should understand
    // Strings and string manipulation
    // Loops
    // Comparison inside if statements
    // Setting values on an object

    //This is a boolean to store whether the slideshow is auto playing or not
    let autoToggle=false;

    //This variable is created to prevent stacking the auto play button intervals when we clearing the interval
    let autoToggleInterval=0;


function slideshow() {
    document.getElementById('next-btn').addEventListener('click',next);
    document.getElementById('previous-btn').addEventListener('click',previous);
    document.getElementById('auto-play-next-btn').addEventListener('click',autoPlayNext);
    document.getElementById('stop-auto-btn').addEventListener('click',stopAutoPlay);
    document.getElementById('auto-play-previous-btn').addEventListener('click',autoPlayPrevious);

}


function autoPlayNext() {
    //we swap the value of autoToggle boolean, this makes the auto play to act as a stop button if it's clinked twice, because each time we click the boolean value which controls the execution of autoplay reverses. If it's clicked once, it will act as a play button.  We also clear the interval if it's already running to prevent stacking the intervals. This will also prevent to use auto play previous or forward at the same time, and mandatory forces the stop if they are both clicked consecutively. However the user still can use previous and next button when auto toggle is active.
    autoToggle=!autoToggle;
    
    //To prevent the user to use the same button to stop the auto toggle we disable the button temporarily, however they still can use previous button to stop auto play 
    
    clearInterval(autoToggleInterval)
    if(autoToggle){
        next();
        autoToggleInterval=setInterval(next, 5000);
        disableAutoNextAndPrevious()
    }
}

function autoPlayPrevious() {
    autoToggle=!autoToggle;
    
    
    clearInterval(autoToggleInterval);
    if(autoToggle){
        previous();
        autoToggleInterval=setInterval(previous, 5000);
        disableAutoNextAndPrevious()
        
    }
}



function stopAutoPlay() {
    
    //hard setting the autoToggle to false and clear the interval, which stops the execution of autoplay
    if (autoToggle || autoToggle===false){
        autoToggle=false;
        clearInterval(autoToggleInterval);
        enablingAutoNextAndPrevious()

    }

}



function disableAutoNextAndPrevious() {
    document.getElementById('auto-play-next-btn').disabled=true;
    document.getElementById('auto-play-previous-btn').disabled=true;
}
function enablingAutoNextAndPrevious() {
    document.getElementById('auto-play-next-btn').disabled=false;
    document.getElementById('auto-play-previous-btn').disabled=false;
}
//determines the index of the previous image
function previous() {
    let currentIndex = currentImageIndex();
    if (currentIndex === -1) return; // Prevent errors if index is not found

    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
        previousIndex = images.length - 1;
    }
    document.getElementById("carousel-img").src = images[previousIndex];
}

// Determines the index of the next image
function next() {
    let currentIndex = currentImageIndex();
    if (currentIndex === -1) return; // Prevent errors if index is not found

    let nextIndex = currentIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }
    document.getElementById("carousel-img").src = images[nextIndex];
}

//Determines the index of the current displayed image
function currentImageIndex(){

    const currentImageSrc=document.getElementById('carousel-img').src;

    const currentImageName = currentImageSrc.substring(currentImageSrc.lastIndexOf("/") + 1);

    // Find the index in the images array,https://www.w3schools.com/jsref/jsref_findindex.asp
    return images.findIndex((img) => img.includes(currentImageName));
    //https://www.w3schools.com/jsref/jsref_indexof.asp
}
window.onload = slideshow;
