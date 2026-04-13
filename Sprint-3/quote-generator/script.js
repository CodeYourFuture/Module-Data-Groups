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


const container = document.querySelector("#container-quote");
const secondButton = document.createElement("button");
secondButton.textContent = "Play Auto-Quotes";
secondButton.classList.add("btn");
container.appendChild(secondButton);

let quoteInterval;

secondButton.addEventListener("click", () => {
  if (quoteInterval) {
    clearInterval(quoteInterval);
    quoteInterval = null;
    secondButton.textContent = "Play Auto-Quotes";
  } else {
    quoteInterval = setInterval(randomQuoteGenerate, 5000);
    secondButton.textContent = "Stop (auto-play:ON)";
  }
});




