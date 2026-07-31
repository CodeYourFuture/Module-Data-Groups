const quoteP = document.querySelector("#quote");
const authorP = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");

function displayRandomQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteP.innerText = randomQuote.quote;
  authorP.innerText = randomQuote.author;
}

window.addEventListener("load", () => {
  displayRandomQuote();
});

newQuoteBtn.addEventListener("click", () => {
  displayRandomQuote();
});

let intervalId = null;
const autoToggle = document.querySelector("#auto-toggle");
const autoStatus = document.querySelector("#auto-status");

autoToggle.addEventListener("change", () => {
  if (autoToggle.checked) {
    autoStatus.innerText = "auto-play:ON";
    intervalId = setInterval(displayRandomQuote, 5000); // 5 seconds for testing
  } else {
    autoStatus.innerText = "auto-play:OFF";
    clearInterval(intervalId);
  }
});
