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

function countWords (str){
  // clean up the string
  str = str.toLowerCase().replace(/[^a-z\s]/g, " "); // // Replace all non-alphabetic characters (except spaces) with spaces + convert to lowercase

  const wordCounts = {};
  const words = str.split(" "); // split it into words

  for (const word of words) {
    if (word) {
      // skip empty strings
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  }
  const orderedCounts = Object.fromEntries(
    Object.entries(wordCounts).sort(([, a], [, b]) => b - a)
    // Object.entries(wordCounts) converts obj > array of ky-value pairs
    // .sort(([, a], [, b]) => b - a) sorts by value
    // Object.fromEntries converts the sorted array back into obj
  );

  return orderedCounts;
}

console.log(countWords("you and me and you"));
console.log(countWords("??"));
console.log(countWords(" "));
console.log(countWords("you you you"));
console.log(countWords("hello, Hello"));
console.log(countWords("one"));
console.log(countWords("A.A A A_A A$A"))