const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("new-quote");

function displayQuote() {
  const quoteAndAuthor = pickFromArray(quotes);
  quote.textContent = quoteAndAuthor.quote;
  author.textContent = quoteAndAuthor.author;
}

displayQuote();

button.addEventListener("click", displayQuote);
