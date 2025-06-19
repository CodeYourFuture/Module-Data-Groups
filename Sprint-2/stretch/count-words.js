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

// takes string input and returns an object where each word is a key and values are how many times the
// word appeared in the input string
// example countWords("you and me and you") output: { you: 2, and: 2, me: 1 }

function countWords(str) {
  if (typeof str === "string") {
    const cleaned = str.toLowerCase().replace(/[.,!?]/g, "");
    const separatedWords = cleaned.split(/\s+/);
    const wordCounts = {};
    for (const word of separatedWords) {
      if (word) {
        if (wordCounts[word]) {
          wordCounts[word] += 1;
        } else {
          wordCounts[word] = 1;
        }
      }
    }
    return wordCounts;
  } else throw new Error("Input must be a string");
}
console.log(countWords("hello my friend"));
