require("@testing-library/jest-dom");
// Array of quotes
const quotes = [
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
  { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "In the end, it's not the years in your life that count, it's the life in your years.", author: "Abraham Lincoln" },
  // Add more quotes as needed
];

// Select DOM elements
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Update the quote and author text
  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = randomQuote.author;
}

// Set up event listener for the 'New Quote' button
newQuoteButton.addEventListener("click", displayRandomQuote);

// Display a random quote when the page loads
window.onload = displayRandomQuote;
