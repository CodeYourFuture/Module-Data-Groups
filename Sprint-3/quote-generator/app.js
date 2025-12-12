/* globals quotes, pickFromArray */

// Constants for configuration
// Sets the time interval for the auto-play feature in milliseconds.
const AUTO_PLAY_INTERVAL_MS = 5000; // 5 seconds for testing/demo

/**
 * Variables to track the auto-play interval state.
 */
let autoPlayIntervalId = null;

// DOM Elements
const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const autoPlaySwitch = document.querySelector("#auto-play-switch");
const autoPlayStatus = document.querySelector("#auto-play-status");

/**
 * Updates the displayed quote and author on the screen.
 * Uses the global pickFromArray function and quotes array.
 */
function displayNewQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteElement.innerText = randomQuote.quote;
  authorElement.innerText = randomQuote.author;
}

/**
 * Starts the auto-play functionality.
 * Sets an interval to update the quote and shows the status indicator.
 */
function startAutoPlay() {
  // Clear any existing interval just in case
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
  }

  // Show status
  autoPlayStatus.classList.add("active");

  // Set interval
  autoPlayIntervalId = setInterval(function () {
    displayNewQuote();
  }, AUTO_PLAY_INTERVAL_MS);
}

/**
 * Stops the auto-play functionality.
 * Clears the interval and hides the status indicator.
 */
function stopAutoPlay() {
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
    autoPlayIntervalId = null;
  }

  // Hide status
  autoPlayStatus.classList.remove("active");
}

/**
 * Toggles auto-play based on the checkbox state.
 * @param event - The change event from the checkbox.
 */
function handleAutoPlayToggle(event) {
  if (event.target.checked) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

// Event Listeners

// Handle "New Quote" button click
newQuoteButton.addEventListener("click", function () {
  displayNewQuote();

  // If auto-play is on, reset the timer so it doesn't change immediately after manual click
  if (autoPlaySwitch.checked) {
    startAutoPlay();
  }
});

// Handle Auto-play switch toggle
autoPlaySwitch.addEventListener("change", handleAutoPlayToggle);

// Initial Load
// Display a random quote when the app starts
displayNewQuote();
