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

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the input
*/

function countWords(str) {
  // Remove punctuation, convert to lowercase, then split into words
  const words = str
    .replace(/[.,!?]/g, "")
    .toLowerCase()
    .split(" ");

  const counts = {};

  for (const word of words) {
    if (word) {
      counts[word] = (counts[word] || 0) + 1;
    }
  }

  // Advanced challenge 3: order by most common
  const ordered = {};
  for (const key of Object.keys(counts).sort((a, b) => counts[b] - counts[a])) {
    ordered[key] = counts[key];
  }

  return ordered;
}

// Tests
console.assert(
  JSON.stringify(countWords("you and me and you")) === JSON.stringify({ you: 2, and: 2, me: 1 }),
  "Test 1 failed"
);
console.assert(
  JSON.stringify(countWords("Hello hello HELLO")) === JSON.stringify({ hello: 3 }),
  "Test 2 failed - case insensitive"
);
console.assert(
  JSON.stringify(countWords("hi, there! how are you?")) === JSON.stringify({ hi: 1, there: 1, how: 1, are: 1, you: 1 }),
  "Test 3 failed - punctuation removed"
);
console.assert(
  JSON.stringify(countWords("the the the cat cat dog")) === JSON.stringify({ the: 3, cat: 2, dog: 1 }),
  "Test 4 failed - ordered by most common"
);
console.log("All tests passed!");
