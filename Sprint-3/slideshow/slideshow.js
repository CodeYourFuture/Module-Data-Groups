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
let index = 0;
image.src = images[index];
function carousel(imagesArray) {


    body.style.textAlign = "center";
    image.style.width = "50%";

    forwardButton.addEventListener("click", function () {
        if (index < imagesArray.length - 1) {
            index++;
            image.src = imagesArray[index];

        }
        else {
            index = 0;
            image.src = imagesArray[index];

        }

    })

    backwardButton.addEventListener("click", function () {
        if (index > 0) {
            index--;
            image.src = imagesArray[index];

        }
        else {
            index = imagesArray.length - 1;
            image.src = imagesArray[index];
        }

    })
}

carousel(images);