function showRandomQuote() {
  const item = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = item.quote;
  document.getElementById("author").textContent = "- " + item.author;
}

document.getElementById("new-quote").addEventListener("click", showRandomQuote);

showRandomQuote();