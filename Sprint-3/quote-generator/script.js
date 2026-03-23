
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
displayQuote();

const newQuoteBtn = document.querySelector('#new-quote');
function displayQuote() {
    let randomQuote = pickFromArray(quotes);
    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
}
newQuoteBtn.addEventListener('click', displayQuote)