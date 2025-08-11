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
function countWords(inputString) {
  // Step 1: Initialize an empty object to store the word counts
  const wordCount = {};// This object will store the word counts. The word itself will be the key, and the count (number of times the word appears) will be the value

  // Step 2: Convert the string to lowercase and remove punctuation
  // Use regular expression to remove punctuation
  inputString = inputString.toLowerCase().replace(/[.,!?]/g, ""); //We use toLowerCase() to make sure that we don't differentiate between upper and lower case letters (e.g., "Hello" and "hello" should be counted as the same word), replace(/[.,!?]/g, "") uses a regular expression to remove common punctuation marks (like ., ,, !, ?) from the string to tidy it up.

  // Step 3: Split the string into individual words
  const words = inputString.split(" "); //The split(" ") method splits the string into an array of words by using the space character as a delimiter.

  // Step 4: Loop through each word
  for (let word of words) {
    // If the word already exists in the wordCount object, increment its value
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      // Otherwise, set the word's count to 1
      wordCount[word] = 1;
    }
  }

  // Step 5: Return the wordCount object
  return wordCount;
}
console.log(countWords("charger and computer and terminal"));

function countWords(inputString) {
  const wordCount = {};

  inputString = inputString.toLowerCase().replace(/[.,!?]/g, "");
  const words = inputString.split(" ");

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  // Convert object to array and sort by frequency (value)
  const sortedWordCount = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return sortedWordCount;
}
console.log(countWords("charger and computer and charger"));