let backgroundSound = new Audio("assets/SPACE.mp3");
let isSoundStarted = false;

function playSound() {
  if (!navigator.userAgent.includes("jsdom")) {
    backgroundSound.play().catch((error) => {
      console.log("Esperando interacción para el audio");
    });
  }
}

function pickFromArray(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const container = document.querySelector("#container-quote");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const button = document.querySelector("#new-quote");

function randomQuoteGenerate() {
  const randomArr = pickFromArray(quotes);
  quoteText.textContent = randomArr.quote;
  quoteAuthor.textContent = randomArr.author;
}

window.onload = () => {
  randomQuoteGenerate();
};

button.addEventListener("click", () => {
  randomQuoteGenerate();
  if (!isSoundStarted) {
    playSound();
    isSoundStarted = true;
  }
});

const secondButton = document.createElement("button");
secondButton.textContent = "Play Auto-Quotes";
secondButton.classList.add("btn");

container.appendChild(secondButton);

let quoteInterval;

secondButton.addEventListener("click", () => {
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = null;
    secondButton.textContent = "Play Auto-Quotes";
  } else {
    quoteInterval = setInterval(randomQuoteGenerate, 2000);
    secondButton.textContent = "Stop";
    if (!isSoundStarted) {
      playSound();
      isSoundStarted = true;
    }
  }
});
