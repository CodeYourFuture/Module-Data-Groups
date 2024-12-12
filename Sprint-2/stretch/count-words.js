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

- Break the string into words= analyze each word.
- Count how often each word appears in the string.
- Store the counts in an object where:
- Keys are the word s/ Values are how many times the word appears.
- Return the object as the result.*/

function countWords(input) {
  //1: Prepare an empty object to store word counts
  const wordCounts = {};

  //2: Clean the input string (remove punctuation and convert to lowercase)
  const cleanedInput = input.toLowerCase().replace(/[.,!?]/g, "");

  //3: Break the cleaned string into words
  const words = cleanedInput.split(" ").filter((word) => word); // Remove empty strings

  //4: Count the words
  for (let word of words) {
    if (wordCounts[word]) {
      wordCounts[word] += 1; // If word exists in the object, increment its count
    } else {
      wordCounts[word] = 1; // Otherwise, set the count to 1
    }
  }

  //5: Return the word counts object
  return wordCounts;
}

module.exports = countWords;
