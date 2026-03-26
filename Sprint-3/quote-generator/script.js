
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
getQuote();

const newQuoteBtn = document.querySelector('#new-quote');
function getQuote() {
    let randomQuote = pickFromArray(quotes);
    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
}
newQuoteBtn.addEventListener('click', getQuote)