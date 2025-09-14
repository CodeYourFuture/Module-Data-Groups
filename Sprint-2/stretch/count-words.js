// Basic implementation of word counting


// Given a string of words
// When the string is passed to countWords
// Then it should return an object with the count of each word

// Example:
// Given "you and me and you"
// When countWords is called on this string
// Then it should return { you: 2, and: 2, me: 1 }

function countWords(str) {
  const counts = {};

  // ✅ Basic: split on spaces
  const words = str.split(" ");

  for (const word of words) {
    if (!counts[word]) {
      counts[word] = 1;
    } else {
      counts[word]++;
    }
  }

  return counts;
}

module.exports = countWords;


// Advanced challenges are implemented in countWordsAdvanced
/*
### Advanced challenges (implemented separately)

1. Remove punctuation
   → Use regex to strip punctuation before splitting.

2. Ignore case
   → Convert the string to lowercase before counting.

3. Order results
   → Convert the counts object into an array, sort it, and return it in order.

*/

function countWordsAdvanced(str) {
  const counts = Object.create(null);

  // 1. Remove punctuation
  const noPunctuation = str.replace(/[.,!?]/g, "");

  // 2. Ignore case
  const words = noPunctuation.toLowerCase().split(/\s+/);

  for (const word of words) {
    if (!word) continue; // skip empty strings
    counts[word] = (counts[word] || 0) + 1;
  }

  // 3. Order results (most common first)
  const sortedEntries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  return Object.fromEntries(sortedEntries);
}

// Example usage
// console.log(countWords("you and me and you"));
// console.log(countWordsAdvanced("You, you! and me? And YOU."));