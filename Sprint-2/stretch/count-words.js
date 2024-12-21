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
  if (str.trim() === "") {
    return {}; 
  }

  str = str.toLowerCase();

  // Remove multiple spaces
  const words = str.split(/\s+/);  // Split on one or more spaces

  const wordCounts = {};

  for (const word of words) {
    if (word) {  // Only count non-empty words
      if (wordCounts[word]) {
        wordCounts[word] += 1;
      } else {
        wordCounts[word] = 1;
      }
    }
  }

  return wordCounts;
}

const strtest="You And Me and you";
console.assert(JSON.stringify(countWords(strtest))===JSON.stringify({you:2, and:2,me:1}),"Test Failed")

const emptyStr = "";
console.assert(JSON.stringify(countWords(emptyStr)) === JSON.stringify({}), "Test Failed")

const multipleSpacesStr = "  Hello    world    how   are    you  ";
console.assert(JSON.stringify(countWords(multipleSpacesStr)) === JSON.stringify({hello: 1, world: 1, how: 1, are: 1, you: 1}), "Test Failed: Multiple spaces");
