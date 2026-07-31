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
