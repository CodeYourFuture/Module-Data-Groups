// call pickFromArray with the quotes array to check you get a random quote

function displayRandomQuote() {
  const selectedQuote = pickFromArray(quotes);

  document.getElementById("quote").textContent = selectedQuote.quote;
  document.getElementById("author").textContent = selectedQuote.author;
}

function setup() {
  const newQuoteButton = document.getElementById("new-quote");

  newQuoteButton.addEventListener("click", displayRandomQuote);

  displayRandomQuote();
}

window.onload = setup;
