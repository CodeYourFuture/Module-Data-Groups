const quoteP = document.querySelector("#quote");
const authorP = document.querySelector("#author");
const newQuoteBtn = document.querySelector("#new-quote");
const autoToggle = document.querySelector("#auto-toggle");
const autoStatus = document.querySelector("#auto-status");

const AUTO_PLAY_INTERVAL = 5000;
let intervalId = null;

function displayRandomQuote() {
  const randomQuote = pickFromArray(quotes);
  quoteP.innerText = randomQuote.quote;
  authorP.innerText = randomQuote.author;
}

window.addEventListener("load", () => {
  displayRandomQuote();

  newQuoteBtn.addEventListener("click", displayRandomQuote);

  autoToggle.addEventListener("change", () => {
    if (autoToggle.checked) {
      autoStatus.innerText = "auto-play:ON";
      intervalId = setInterval(displayRandomQuote, AUTO_PLAY_INTERVAL); // 5 seconds for testing
    } else {
      autoStatus.innerText = "auto-play:OFF";
      clearInterval(intervalId);
    }
  });
});
