// Get the paragraph element that will show the quote text
const quoteElement = document.getElementById("quote");

// Get the paragraph element that will show the author name
const authorElement = document.getElementById("author");

// Get the New Quote button element
const newQuoteButton = document.getElementById("new-quote");

// This function picks a random quote and puts it on the page
function displayQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

// Listen for a click on the button, then run displayQuote
newQuoteButton.addEventListener("click", displayQuote);

// Run displayQuote once when the page loads
displayQuote();
// --- Auto-play Feature (Stretch Goal) ---

// 1. Get the checkbox and status elements from HTML
const autoPlayCheckbox = document.getElementById("auto-play-checkbox");
const autoPlayStatus = document.getElementById("auto-play-status");

// 2. Create a variable to hold the timer ID (so we can stop it later)
let autoPlayInterval;

// 3. Create a function to turn auto-play ON or OFF
function toggleAutoPlay() {
  // Check if the checkbox is checked
  if (autoPlayCheckbox.checked === true) {
    // Turn ON: update text and start the timer (5000 milliseconds = 5 seconds)
    autoPlayStatus.textContent = "auto-play:ON";
    autoPlayInterval = setInterval(displayQuote, 5000);
  } else {
    // Turn OFF: update text and stop the timer
    autoPlayStatus.textContent = "auto-play:OFF";
    clearInterval(autoPlayInterval);
  }
}

// 4. Listen for any "change" (check/uncheck) on the checkbox
autoPlayCheckbox.addEventListener("change", toggleAutoPlay);
