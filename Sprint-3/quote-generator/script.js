const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const buttonElement = document.querySelector("#new-quote");
const autoPlayElement = document.querySelector("#auto-play");
const statusElement = document.querySelector("#status");

let intervalId = null;

function displayRandomQuote() {
  const randomQuote = pickFromArray(quotes);

  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

function toggleAutoPlay() {
  if (autoPlayElement.checked) {
    statusElement.textContent = "auto-play: ON";

    if (intervalId) {
      clearInterval(intervalId);
    }

    intervalId = setInterval(displayRandomQuote, 3000);
  } else {
    statusElement.textContent = "auto-play: OFF";

    clearInterval(intervalId);
    intervalId = null;
  }
}

function setup() {
  displayRandomQuote();
  buttonElement.addEventListener("click", displayRandomQuote);
  autoPlayElement.addEventListener("change", toggleAutoPlay);
}

window.addEventListener("load", setup);
