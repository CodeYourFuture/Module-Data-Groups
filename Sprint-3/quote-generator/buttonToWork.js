const pQuote = document.getElementById("quote");
const pAuthor = document.getElementById("author");
const button = document.getElementById("new-quote");

function displayQuote() {
  const result = pickFromArray(quotes);

  pQuote.textContent = result.quote;
  pAuthor.textContent = result.author;
}

displayQuote();

button.addEventListener("click", displayQuote);
