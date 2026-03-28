// Get references to the HTML elements that will display
// the quote, the author, and the button
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Store the currently displayed quote so that
// the same quote is not shown twice in a row
let currentQuote = null;

/**
 * Returns a random quote object from the quotes array.
 * If a quote is already being displayed, this function
 * keeps picking again until it gets a different one.
 */
function getNewRandomQuote() {
  let randomQuote = pickFromArray(quotes);

  while (quotes.length > 1 && randomQuote === currentQuote) {
    randomQuote = pickFromArray(quotes);
  }

  return randomQuote;
}

/**
 * Displays a random quote and its author on the page.
 */
function displayRandomQuote() {
  const selectedQuote = getNewRandomQuote();

  quoteElement.textContent = `"${selectedQuote.quote}"`;
  authorElement.textContent = selectedQuote.author;

  currentQuote = selectedQuote;
}

/**
 * Runs when the page loads.
 * It shows the first quote and sets up the button click event.
 */
function setup() {
  displayRandomQuote();
  newQuoteButton.addEventListener("click", displayRandomQuote);
}

// Run setup when the page has finished loading
window.addEventListener("load", setup);
