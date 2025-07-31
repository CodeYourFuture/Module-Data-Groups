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
  const punctuation = /[\.,?!]/g; // regular expression to check the following punctuation marks (".", ",", "!", "?")
  const stringsIntoArray = string
  .replace(punctuation, "")
  .toLowerCase()
  .split(" ")
  .filter(word => word !== ""); // remove the punctuation (e.g. ".", ",", "!", "?") from the string and make the string in lower case then split each word as an element of the array and remove if there are empty strings
  const wordObject = {}; // create an empty object {}

  for (const word of stringsIntoArray) {
    if (wordObject[word]){
      wordObject[word] += 1;
    }
    else {
      wordObject[word] = 1;
    }
  }
  // Find the most common word (advanced step)
  let mostCommonWord = "";
  let maxCount = 0;
  for (const [word, count] of Object.entries(wordObject)) {
    if (count > maxCount) {
      maxCount = count;
      mostCommonWord = word;
    }
  }  
  return wordObject
}