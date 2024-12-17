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



// Function clean and normalize the input string (remove punctuations and convert to all lower case)
function removePunctuations(inputStr) {
  return inputStr
    .replace(/[.,!?]/g, '')
    .toLowerCase();
}
// Function to split a string into words
function splitToWords(removePunctuations) {
  return removePunctuations.split(/\s+/);
}

// Function to count occurences of words in an array
// Function to count occurrences of words in an array
function countWordNumber(words) {
  const wordCount = {};

  words.forEach(word => {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  });
  return wordCount;
}
// Function to sort word counts by frequency
function sortWords(wordCount) {
  return Object.fromEntries(
    Object.entries(wordCount).sort((a, b) => b[1] - a[1])
  );
}
// Main function to count words in a given string
function countWords(inputStr) {
  const removedPunctuations = removePunctuations(inputStr);
  const words = splitToWords(removedPunctuations);
  const wordCount = countWordNumber(words);
  return sortWords(wordCount);
}
console.log(countWords("you and me and you"));