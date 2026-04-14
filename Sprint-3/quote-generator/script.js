// added extra functionality to play music when the user click on autoplay
let backgroundSound = new Audio("assets/SPACE.mp3");
let isSoundStarted = false;

//avoid auto-playing sound in test environment and jsdom which does not implement audio playback
function playSound() {
  if (!navigator.userAgent.includes("jsdom")) {
    backgroundSound.play().catch((error) => {
      console.log("waiting for user interaction to start sound");
    });
  }
}

//generated random quote from the array of quotes
function pickFromArray(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const container = document.querySelector("#container-quote");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const button = document.querySelector("#new-quote");

// updates the quote and author text in the HTML
function randomQuoteGenerate() {
  const randomArr = pickFromArray(quotes);
  quoteText.textContent = randomArr.quote;
  quoteAuthor.textContent = randomArr.author;
}

// triggers the first random quote display once the window is fully loaded
window.onload = () => {
  randomQuoteGenerate();
};

// listens for clicks to change quotes manually and start the background sound
button.addEventListener("click", () => {
  randomQuoteGenerate();
  if (!isSoundStarted) {
    playSound();
    isSoundStarted = true;
  }
});

let quoteInterval;

// toggles the automatic quote generator and manages the play/stop state
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
