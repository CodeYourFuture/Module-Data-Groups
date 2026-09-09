const authorDisplay = document.querySelector("#author");
const quoteDisplay = document.querySelector("#quote");
const displayButton = document.querySelector("#new-quote");
 
function displayQuote() {
  const generateRandomQuote = pickFromArray(quotes);
  quoteDisplay.textContent = generateRandomQuote.quote;
  authorDisplay.textContent = generateRandomQuote.author;
}
displayButton.addEventListener("click", displayQuote);

displayQuote();
 