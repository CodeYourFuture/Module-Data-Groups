/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string
*/
function countWords(sentence) {
  if (!sentence.trim()) {
    return {};
  }
  const wordCounts = {};

  // Remove punctuation and convert to lowercase
  const cleanedSentence = sentence.replace(/[.,!?]/g, "").toLowerCase();

  // Split the sentence into words
  const words = cleanedSentence.split(/\s+/); // Split on any whitespace

  words.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1; // Increment the count
  });

  // Sort by frequency and return as an object
  const sortedWordCounts = Object.entries(wordCounts)
    .sort((a, b) => b[1] - a[1]) // Sort by frequency
    .reduce((acc, [word, count]) => {
      acc[word] = count; // Convert back to an object
      return acc;
    }, {});

  return sortedWordCounts;
}

module.exports = countWords;

module.exports = countWords;
/*
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
