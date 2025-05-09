// DO NOT EDIT BELOW HERE
function pickFromArray(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

const quotes = [
    { quote: "Life isn't about getting and having, it's about giving and being.", author: "Kevin Kruse" },
    { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
    // ... (rest of the quotes array - omitted for brevity)
];

// Your code starts here
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

function displayRandomQuote() {
    const randomQuote = pickFromArray(quotes);
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `- ${randomQuote.author}`;
}

displayRandomQuote(); // Display a quote on page load

newQuoteButton.addEventListener("click", displayRandomQuote);