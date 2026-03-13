
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
callQuote();

const newCodeButton = document.querySelector('#new-quote');
function callQuote() {
    let randomQuote = pickFromArray(quotes);
    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
}
newCodeButton.addEventListener('click', callQuote)