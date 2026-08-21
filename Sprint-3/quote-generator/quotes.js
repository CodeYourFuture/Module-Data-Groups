// DO NOT EDIT BELOW HERE

function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// A list of quotes you can use in your app.

// DO NOT modify this array, otherwise the tests may break!

const quotes = [
  {
    quote: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  },

  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },

  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },

  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },

  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },

  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },

  // KEEP ALL YOUR OTHER QUOTES HERE UNCHANGED

  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];

// ----------------------------------
// YOUR CODE GOES BELOW THE ARRAY
// ----------------------------------

function showRandomQuote() {
  const randomQuote = pickFromArray(quotes);

  document.getElementById("quote").textContent = randomQuote.quote;
  document.getElementById("author").textContent = randomQuote.author;
}

// Show a random quote when the page loads
showRandomQuote();

// Show another random quote when button is clicked
document.getElementById("new-quote").addEventListener("click", showRandomQuote);
