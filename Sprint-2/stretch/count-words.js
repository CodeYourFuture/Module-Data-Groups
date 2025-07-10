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
  if (typeof str !== 'string') {
    throw new Error("Invalid input: expected a string");
  }

  // Remove punctuation and normalize to lowercase
  const cleanedText = str
    .replace(/[.,!?]/g, '')  // Remove punctuation
    .toLowerCase();          // Convert to lowercase

  const words = cleanedText.split(/\s+/); // Split by whitespace
  const counts = {};

  for (const word of words) {
    if (word === '') continue; // Skip empty strings
    counts[word] = (counts[word] || 0) + 1;
  }

  // Sort by most common words
  const sortedCounts = Object.fromEntries(
    Object.entries(counts).sort(([, a], [, b]) => b - a)
  );

  return sortedCounts;
}

// Test cases:

console.log(countWords("You and me, and YOU!")); 
// Output: { you: 2, and: 2, me: 1 }

console.log(countWords("Hello, world! Hello again.")); 
// Output: { hello: 2, world: 1, again: 1 }
