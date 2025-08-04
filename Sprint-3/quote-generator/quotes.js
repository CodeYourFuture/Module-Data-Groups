function getRandomQuote() {
  const quoteDom = document.getElementById("quote");
  const authorDom = document.getElementById("author");
  const randomEntry = pickFromArray(quotes);
  if (randomEntry === null) {
    alert("No quotes found in the database!");
    quoteDom.textContent = "No quotes available";
    authorDom.textContent = "";
    return;
  }
  const quote = randomEntry.quote;
  const author = randomEntry.author;
  quoteDom.textContent = quote;
  authorDom.textContent = author;
}
// add quote when page loaded first time
document.addEventListener('DOMContentLoaded', function () {
  getRandomQuote();
});
// add event to button for changing quotes
const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", () => {
  getRandomQuote();
});

// DO NOT EDIT BELOW HERE

// pickFromArray is a function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item at random from the given array.
//
// Examples of use
// ---------------
// pickFromArray(['a','b','c','d'])     // maybe returns 'c'

// You don't need to change this function

function pickFromArray(choices) {
  if (!Array.isArray(choices) || choices.length === 0) return null;
  return choices[Math.floor(Math.random() * choices.length)];
}
// A list of quotes you can use in your app.
// DO NOT modify this array, otherwise the tests may break!
const quotes = [
  
];

//console.log(pickFromArray(quotes));
// call pickFromArray with the quotes array to check you get a random quote