/* globals quotes, pickFromArray */

// Use a constant for the auto-play time to make it easy to change later.
const AUTO_PLAY_INTERVAL_MS = 5000;

// Defines variables to track the state of the app.
// Uses 'let' because the timer ID will change when we start/stop auto-play.
let autoPlayIntervalId = null;

// DOM Elements (fetched once to keep the code efficient)
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const autoPlaySwitch = document.getElementById("auto-play-switch");
const autoPlayStatus = document.getElementById("auto-play-status");

/**
 * Selects and displays a new random quote from the quote list.
 * This function changes the text on the screen.
 */
function displayNewQuote() {
  // Selects a random quote object from the global 'quotes' array.
  const randomQuote = pickFromArray(quotes);

  // Updates the HTML elements with the new quote text and author name.
  quoteElement.innerText = randomQuote.quote;
  authorElement.innerText = randomQuote.author;
}

/**
 * Starts the auto-play feature.
 * This sets up a timer to automatically change the quote every few seconds.
 */
function startAutoPlay() {
  // Clears any existing timer first to prevent multiple timers running at once.
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
  }

  // Shows the "auto-play: ON" status text to inform the user it is active.
  autoPlayStatus.classList.add("active");

  // Sets a repeating timer that calls 'displayNewQuote' every 5000 milliseconds (5 seconds).
  autoPlayIntervalId = setInterval(function () {
    displayNewQuote();
  }, AUTO_PLAY_INTERVAL_MS);
}

/**
 * Stops the auto-play feature.
 * This cancels the timer so the quotes stop changing automatically.
 */
function stopAutoPlay() {
  // Checks if a timer exists, and if so, stops it.
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
    autoPlayIntervalId = null;
  }

  // Hides the "auto-play: ON" status text.
  autoPlayStatus.classList.remove("active");
}

/**
 * Handles the change event when the user toggles the auto-play switch.
 * Decides whether to start or stop auto-play based on the switch position.
 *
 * @param {Event} event - The event object from the click.
 */
function handleAutoPlayToggle(event) {
  // Checks if the toggle switch is currently 'checked' (on).
  if (event.target.checked) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

// Adds an event listener to the "New Quote" button.
// When clicked, it shows a new quote and resets the auto-play timer if it's running.
newQuoteButton.addEventListener("click", function () {
  displayNewQuote();

  // If auto-play is turned on, restarts the timer.
  // This prevents the quote from changing immediately after the user manually clicks.
  if (autoPlaySwitch.checked) {
    startAutoPlay();
  }
});

// Adds an event listener to the auto-play toggle switch.
// When changed, it triggers the handleAutoPlayToggle function.
autoPlaySwitch.addEventListener("change", handleAutoPlayToggle);

// Displays a random quote immediately when the page loads so it isn't empty.
displayNewQuote();
