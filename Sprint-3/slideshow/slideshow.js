const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat-d.jpg",
];


// Write your code here
//LEVEL 1 implementation
const body = document.querySelector("body");
const image = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");
const stopButton = document.getElementById("stop-btn");
const autoForwardButton = document.getElementById("auto-forward-btn");
const autoBackwardButton = document.getElementById("auto-backward-btn");

let forwardsRunning = null;
let backwardsRunning = null;
let index = 0;
image.src = images[index];

//separate moving mechanism into functions since they are used many times
function moveForward(imagesArray) {
    //to get 0 as an index (index + imagesArray.length)%imagesArray.length
    //increment by 1 to move
    index = (index + imagesArray.length + 1) % imagesArray.length;
    image.src = imagesArray[index];

}

function moveBackwards(imagesArray) {

    index = (index + imagesArray.length - 1) % imagesArray.length;
    image.src = imagesArray[index];


}
function carousel(imagesArray) {


    body.style.textAlign = "center";
    image.style.height = "300px";

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
            forwardsRunning = null;
        }

        forwardsRunning = setInterval(() => {
            moveForward(imagesArray);
        }, 5000);
    });

    autoBackwardButton.addEventListener("click", function () {

        if (backwardsRunning) {
            clearInterval(backwardsRunning);
            backwardsRunning = null;
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

