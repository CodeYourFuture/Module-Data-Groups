const forwardButton = document.querySelector("#forward-btn");
const backwardsButton = document.querySelector("#backward-btn");
const carousel = document.querySelector("#carousel-img");

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/daria-shatova-46TvM-BVrRI-unsplash.jpg",
  "./assets/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
];
let index = 1;

function moveForward() {
        carousel.setAttribute("src", images[index]);
        if (index == (images.length) - 1) {
            index = 0
        } else {
            index++
        } 
        console.log(index)
        }

    // for(let index = 0; index < images.length; index++) {
    //     console.log(images[index])
    //     carousel.setAttribute("src", images[index]);
    //     if (index == images.length) {
    //         index = -1
    //     }
    // }


forwardButton.addEventListener("click", moveForward);
backwardsButton.addEventListener("click", moveForward);
