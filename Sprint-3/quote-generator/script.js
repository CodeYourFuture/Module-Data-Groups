// --- Configuration & Global Variables ---
const backgroundSound = new Audio("assets/SPACE.mp3");
let isSoundStarted = false; // Using 'let' as the value changes to true once music plays
let quoteInterval; // Using 'let' to store/clear the interval ID

// --- DOM Elements ---
const button = document.querySelector("#new-quote");
const secondButton = document.querySelector("#playButton");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");

// --- Logic Functions ---

/**
 * Picks a random quote from the array and updates the DOM elements.
 */
function randomQuoteGenerate() {
  if (typeof quotes !== "undefined") {
    const randomArr = quotes[Math.floor(Math.random() * quotes.length)];
    if (quoteText && quoteAuthor) {
      quoteText.textContent = randomArr.quote;
      quoteAuthor.textContent = randomArr.author;
    }
  }
}

/**
 * Attempts to play the background audio if not in a test environment.
 */
function playSound() {
  // Check for 'jsdom' to prevent errors during automated testing
  if (!navigator.userAgent.includes("jsdom") && !isSoundStarted) {
    backgroundSound
      .play()
      .then(() => {
        isSoundStarted = true;
      })
      .catch(() =>
        console.log("Waiting for user interaction to play audio...")
      );
  }
}

// --- Callbacks (Event Handler Functions) ---

/**
 * Handles manual quote changes via button click.
 */
function changeQuote() {
  randomQuoteGenerate();
  playSound();
}

/**
 * Toggles the automatic quote generator on or off.
 */
function toggleAutomaticQuote() {
  if (quoteInterval) {
    // Stop the interval if it's already running
    clearInterval(quoteInterval);
    quoteInterval = null;
    secondButton.textContent = "Play Auto-Quotes";
  } else {
    // Start the interval and update every 2 seconds
    randomQuoteGenerate();
    quoteInterval = setInterval(randomQuoteGenerate, 2000);
    secondButton.textContent = "Stop";
    playSound();
  }
}

// --- Initialization ---

/**
 * Sets up the initial state and attaches event listeners once the window has loaded.
 */
window.addEventListener("load", () => {
  // Generate the first quote immediately on load
  randomQuoteGenerate();

  // Attach event listeners to the buttons
  if (button) {
    button.addEventListener("click", changeQuote);
  }

  if (secondButton) {
    secondButton.addEventListener("click", toggleAutomaticQuote);
  }
});
