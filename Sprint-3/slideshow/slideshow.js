const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
/* <img id="carousel-img" src="./assets/cute-cat-a.png" alt="cat-pic" />
    <button type="button" id="backward-btn">Backwards</button>
    <button type="button" id="forward-btn">Forward</button>*/

    let displayedImage = document.querySelector("#carousel-img")
    let back = document.querySelector("#backward-btn")
    let forward = document.querySelector("#forward-btn")
    let autoForward = document.querySelector("#auto-forward-btn")
    let autoBack = document.querySelector("#auto-backward-btn")
    let stop = document.querySelector("#stop-btn")
 
    let i = 0 //index of the desplayed image

    displayedImage.style.width = "300px"
    displayedImage.style.height = "200px"
    displayedImage.style.objectFit = "cover"
    
forward.addEventListener("click", function(){
        if (i < images.length - 1){
            i++
        }
        displayedImage.src = images[i]
    })

    back.addEventListener("click", function(){
        if (i > 0){
            i--
        }
        displayedImage.src = images[i]
        
    })

    let intervalId = null

autoForward.addEventListener("click", function(){
    clearInterval(intervalId)
   intervalId = setInterval(function automaticForward(){
        if (i < images.length - 1){
            i++
        }else {i = 0}
        displayedImage.src = images[i]
    },  3000)
})

autoBack.addEventListener("click", function(){
    clearInterval(intervalId) 
    intervalId = setInterval(function automaticBack(){
        if (i > 0){
            i--
        }else {i = images.length - 1}
        displayedImage.src = images[i]
    },  3000)
})

stop.addEventListener("click", function(){
    clearInterval(intervalId)
   
})