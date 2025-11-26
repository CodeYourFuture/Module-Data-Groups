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



/* The implementation:
function countWords(str) {
  const result = {};

  if (!str || str.trim().length === 0) {
    return result;
  }

  const words = str.split(" ");

  for (const word of words) {
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }

  return result;
}

module.exports = countWords;
*/

/* The tests:

const countWords = require("./countWords.js");

test("counts words from a string", () => {
  expect(countWords("you and me and you")).toEqual({
    you: 2,
    and: 2,
    me: 1,
  });
});

test("returns empty object for empty string", () => {
  expect(countWords("")).toEqual({});
  expect(countWords("   ")).toEqual({});
});

test("counts correctly with single word", () => {
  expect(countWords("hello")).toEqual({ hello: 1 });
});
*/