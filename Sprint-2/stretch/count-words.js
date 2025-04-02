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




//MY RESPONSE:

// Function to count the number of times a word appears in a string

function countWords(str) {
  // Remove punctuation and convert the string to lowercase
  const cleanedStr = str.replace(/[.,!?]/g, '').toLowerCase();
  
  // Split the string into words
  const words = cleanedStr.split(/\s+/); // Split by any whitespace (spaces, tabs, newlines)

  const wordCount = {}; // Object to hold the word counts
  
  // Loop through the array of words
  for (const word of words) {
    if (word) { // Only count non-empty strings (words)
      wordCount[word] = (wordCount[word] || 0) + 1; // Increment the count of the word
    }
  }

  return wordCount;
}

module.exports = countWords;

// Test cases

test("countWords counts the occurrences of each word", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test("countWords handles punctuation", () => {
  expect(countWords("you, and me! and you?")).toEqual({ you: 2, and: 2, me: 1 });
});

test("countWords ignores case sensitivity", () => {
  expect(countWords("You and me and YOU")).toEqual({ you: 2, and: 2, me: 1 });
});

test("countWords handles extra spaces", () => {
  expect(countWords("  you   and  me  and  you ")).toEqual({ you: 2, and: 2, me: 1 });
});

test("countWords returns an empty object for an empty string", () => {
  expect(countWords("")).toEqual({});
});
