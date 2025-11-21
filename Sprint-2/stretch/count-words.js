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
  // Use Object.create(null) to avoid inherited properties
  const wordCounts = Object.create(null);

  if (!str || str.trim() === "") {
    return wordCounts;
  }

  // Split into words and handle punctuation/case
  const words = str.split(/\s+/);

  for (const word of words) {
    // Remove punctuation and convert to lowercase
    const cleanWord = word
      .toLowerCase()
      .replace(/[.,!?]/g, "")
      .trim();

    // Skip empty strings
    if (cleanWord === "") continue;

    // Count the word
    if (wordCounts[cleanWord]) {
      wordCounts[cleanWord] += 1;
    } else {
      wordCounts[cleanWord] = 1;
    }
  }

  return wordCounts;
}

module.exports = countWords;