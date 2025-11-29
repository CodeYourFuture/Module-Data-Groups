const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote");
const autoPlayToggle = document.querySelector("#auto-play-toggle");
const autoPlayStatus = document.querySelector("#auto-play-status");

// Stores the interval ID to allow stopping auto-play when toggled off
let autoPlayInterval;

// Displays a random quote from the quotes array
function displayRandomQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

// Sets up the event listeners for the application
function setup() {
  displayRandomQuote();

  newQuoteButton.addEventListener("click", displayRandomQuote);

  autoPlayToggle.addEventListener("change", (event) => {
    if (event.target.checked) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  });
}

// Enables automatic quote rotation every 5 seconds for hands-free browsing
// Reference: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
function startAutoPlay() {
  autoPlayStatus.textContent = "(auto play is on)";
  autoPlayInterval = setInterval(displayRandomQuote, 5000);
}

// Stops the automatic quote rotation when the user wants manual control
function stopAutoPlay() {
  autoPlayStatus.textContent = "";
  clearInterval(autoPlayInterval);
}

// Initializes the application when the window loads
window.addEventListener("load", setup);
