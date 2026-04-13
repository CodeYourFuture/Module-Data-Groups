const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const button = document.querySelector("#new-quote");

function randomQuoteGenerate() {
  const randomArr = pickFromArray(quotes);
  quoteText.textContent = randomArr.quote;
  quoteAuthor.textContent = randomArr.author;
}

window.onload = () => {
  randomQuoteGenerate();
};

button.addEventListener("click", () => {
  randomQuoteGenerate();
});
