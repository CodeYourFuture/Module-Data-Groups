/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
        - the keys are the words from the string and
        - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  ## Advanced challenges

  1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results
  2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)
  3. Order the results to find out which word is the most common in the input
*/

// Count how many times each word appears in a string
function countWords(str) {
  // If the string is empty, return an empty object
  if (str.trim().length === 0) {
    return {};
  }

  // Advanced challenge 1: Remove punctuation marks from the string
  const cleaned = str.replace(/[.,!?;:'"()]/g, "");

  // Advanced challenge 2: Convert the whole string to lowercase so "Hello" and "hello" count as the same word
  const lowered = cleaned.toLowerCase();

  // Split the string into an array of individual words (split by spaces)
  const words = lowered.split(" ");

  // Create an empty object to store the word counts
  const counts = {};

  // Loop through each word in the array
  for (const word of words) {
    // Skip empty strings that may result from extra spaces
    if (word === "") {
      continue;
    }

    // If the word already exists in counts, add 1; otherwise start at 1
    counts[word] = (counts[word] || 0) + 1;
  }

  // Advanced challenge 3: Sort words by count (most common first)
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  // Convert the sorted array back into an object
  const sortedCounts = {};
  for (const [word, count] of sorted) {
    sortedCounts[word] = count;
  }

  return sortedCounts;
}

// Test the function
console.log(countWords("you and me and you"));
console.log(countWords("Hello hello world! World."));
console.log(countWords("the cat sat on the mat, the cat sat"));

/*
## Brief Explanation

- `str.replace(/[.,!?;:'"()]/g, "")` removes all punctuation. The `/g` flag means "find all matches, not just the first one".
- `.toLowerCase()` converts everything to lowercase so "Hello" and "hello" are treated as the same word.
- `.split(" ")` breaks the string into an array at every space.
- The `for` loop counts each word using the same pattern as the `tally` function you already completed.
- `Object.entries(counts).sort((a, b) => b[1] - a[1])` sorts the entries by count from highest to lowest.

## How to Test

node count-words.js


Expected output:

{ you: 2, and: 2, me: 1 }
{ hello: 2, world: 2 }
{ the: 3, cat: 2, sat: 2, on: 1, mat: 1 }
*/
