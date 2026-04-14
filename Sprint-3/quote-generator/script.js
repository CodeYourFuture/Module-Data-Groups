// Background audio configuration
const backgroundSound = new Audio("assets/SPACE.mp3");
let isSoundStarted = false;

// Attempts to play the audio if not in a test environment (jsdom)
// and if the sound hasn't been triggered yet.
function playSound() {
  if (!navigator.userAgent.includes("jsdom") && !isSoundStarted) {
    backgroundSound
      .play()
      .then(() => (isSoundStarted = true))
      .catch(() =>
        console.log("Waiting for user interaction to play audio...")
      );
  }
}

// Returns a random element from any given array
function pickFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// DOM Elements
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const autoQuoteBtn = document.querySelector("#playButton");


// Selects a random quote and updates the text and author in the DOM
function generateRandomQuote() {
  const randomArr = pickFromArray(quotes);
  quoteText.textContent = randomArr.quote;
  quoteAuthor.textContent = randomArr.author;
}

// Initial quote generation on page load
generateRandomQuote();

// Manual quote change event
newQuoteBtn.addEventListener("click", () => {
  generateRandomQuote();
  playSound();
});

let quoteInterval;


//Toggles the automatic quote generator (Play/Stop states)
autoQuoteBtn.addEventListener("click", () => {
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = null;
    autoQuoteBtn.textContent = "Play Auto-Quotes";
  } else {
    generateRandomQuote();
    quoteInterval = setInterval(generateRandomQuote, 2000);
    autoQuoteBtn.textContent = "Stop";
    playSound();
  }
});
