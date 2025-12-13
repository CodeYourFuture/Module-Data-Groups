/* globals quotes, pickFromArray */

// Defines the auto-play interval duration (60 seconds) as a constant for maintainability.
const AUTO_PLAY_INTERVAL_MS = 60000;

// Tracks the state of the auto-play timer.
// Initializes as null to indicate no active timer.
let autoPlayIntervalId = null;

// Caches DOM references to avoid repeated lookups during runtime.
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const autoPlaySwitch = document.getElementById('auto-play-switch');
const autoPlayStatus = document.getElementById('auto-play-status');

// Retrieves a random quote from the data source and updates the DOM.
// Updates both the quote text and the author name.
function displayNewQuote() {
  // Selects a random quote object from the global 'quotes' array.
  const randomQuote = pickFromArray(quotes);

  // Updates the HTML elements with the new quote text and author name.
  quoteElement.innerText = randomQuote.quote;
  authorElement.innerText = randomQuote.author;
}

// Initiates the auto-play feature.
// Establishes a recurring timer to refresh the displayed quote.
function startAutoPlay() {
  // Clears any existing timer to prevent overlapping intervals.
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
  }

  // Activates the visual status indicator for auto-play.
  autoPlayStatus.classList.add('active');

  // Schedules the 'displayNewQuote' function to execute every 60 seconds.
  autoPlayIntervalId = setInterval(function () {
    displayNewQuote();
  }, AUTO_PLAY_INTERVAL_MS);
}

// Terminates the auto-play feature.
// Clears the active timer and resets the state.
function stopAutoPlay() {
  // Verifies if a timer exists before attempting to clear it.
  if (autoPlayIntervalId) {
    clearInterval(autoPlayIntervalId);
    autoPlayIntervalId = null;
  }

  // Deactivates the visual status indicator.
  autoPlayStatus.classList.remove('active');
}

// Manages the state change when the auto-play switch is toggled.
// Routes execution to start or stop auto-play based on the switch state.
function handleAutoPlayToggle(event) {
  // Evaluates the checked state of the toggle switch.
  if (event.target.checked) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
}

// Attaches a click event listener to the "New quote" button.
// Triggers a manual update of the quote and resets the auto-play timer if active.
newQuoteButton.addEventListener('click', function () {
  displayNewQuote();

  // Restarts the auto-play timer if the feature is currently enabled.
  // Ensures the full interval elapses before the next automatic update.
  if (autoPlaySwitch.checked) {
    startAutoPlay();
  }
});

// Attaches a change event listener to the auto-play toggle switch.
// Invokes the handler function whenever the user interacts with the switch.
autoPlaySwitch.addEventListener('change', handleAutoPlayToggle);

// Initializes the view by displaying a random quote upon page load.
displayNewQuote();
