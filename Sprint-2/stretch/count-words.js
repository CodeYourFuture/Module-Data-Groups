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
    if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }

  // Remove punctuation using regex and convert to lowercase
 const cleanedStr = str
    .replace(/[.,!?;:"'(){}\[\]-]/g, "") // More comprehensive punctuation removal
    .toLowerCase()
    .trim()

  // Split the string into words
  const words = cleanedStr.split(/\s+/);

  // Create an object to store word counts
  const wordCount = {};

  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  // Sort by frequency (descending)
  const sortedWordCount = Object.fromEntries(
    Object.entries(wordCount).sort(([, a], [, b]) => b - a)
  );

  return sortedWordCount;
}
  // Optional: Sort the results by frequency (most common first)
  const sortedWordCount = Object.fromEntries(
Object.entries(wordCount).sort(([, countA], [, countB]) => countB - countA)
  );

  return sortedWordCount;
}

// Example usage
console.log(countWords("You and me and YOU!"));
console.log(countWords("Hello,World! Hello World!"));  
console.log(countWords("constructor constructor"));  
console.log(countWords("          Hello World      ")); 
module.exports = countWords;
