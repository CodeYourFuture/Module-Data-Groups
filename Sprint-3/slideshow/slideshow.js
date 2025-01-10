const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
//LEVEL 1 implementation
const body = document.querySelector("body");
const image = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");
const stopButton = document.getElementById("stop");
const autoForwardButton = document.getElementById("auto-forward-btn");
const autoBackwardButton = document.getElementById("auto-backward-btn");

let forwardsRunning = null;
let backwardsRunning = null;
let index = 0;
image.src = images[index];

//separate moving mechanism into functions since they are used many times
function moveForward(imagesArray) {
    if (index < imagesArray.length - 1) {
        index++;
        image.src = imagesArray[index];

    }
    else {
        index = 0;
        image.src = imagesArray[index];

    }

}

function moveBackwards(imagesArray) {
    if (index > 0) {
        index--;
        image.src = imagesArray[index];

    }
    else {
        index = imagesArray.length - 1;
        image.src = imagesArray[index];
    }


}
function carousel(imagesArray) {


    body.style.textAlign = "center";
    image.style.width = "50%";

    forwardButton.addEventListener("click", function () {
        moveForward(imagesArray);

    })

    backwardButton.addEventListener("click", function () {
        moveBackwards(imagesArray);
    })

    //Level 2 implementation


    autoForwardButton.addEventListener("click", function name() {
        if (forwardsRunning) {
            clearInterval(forwardsRunning);
        }

        forwardsRunning = setInterval(() => {
            moveForward(imagesArray);
        }, 5000);
    });

    autoBackwardButton.addEventListener("click", function () {

        if (backwardsRunning) {
            clearInterval(backwardsRunning);
        }

        backwardsRunning = setInterval(function () {
            moveBackwards(imagesArray);
        }, 5000);

    })
    //clear both to stop it
    stopButton.addEventListener("click", function () {
        clearInterval(backwardsRunning);
        clearInterval(forwardsRunning);

    })
}

carousel(images);

