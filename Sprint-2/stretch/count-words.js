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

function countWords(string) {
  if (typeof string !== "string") {
    console.log(string + " is not a valid string");
    return;
  }

  const wordsCountObject = {};

  // Replace anything that is NOT a word character or a space with an empty string
  const cleanText = string.replace(/[^\w\s]|_/g, "").toLowerCase();

  cleanText.split(" ").forEach((word) => {
    if (Object.hasOwn(wordsCountObject, word)) wordsCountObject[word] += 1;
    else wordsCountObject[word] = 1;
  });

  const sortedArray = Object.entries(wordsCountObject).sort(
    (a, b) => b[1] - a[1]
  );

  return Object.fromEntries(sortedArray);
}

console.log(countWords("you and me and you and me me me me"));
