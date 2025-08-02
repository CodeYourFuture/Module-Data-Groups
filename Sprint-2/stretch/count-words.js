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
  //validate that the input is a string, if not then throw an error
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  //remove punctuation using regex (match any single character that is ".,!?" and replace it with an empty string, ensure it is all matches using the "g" global flag).convert the string to lowercase and split the words into an array using regex (split by one or more (indicated by the "+") whitespace characters (indicated by the "\s", i.e.spaces, tabs, newlines, etc)
  const cleanWords = str
    .replace(/[.,!?]/g, "")
    .toLowerCase()
    .split(/\s+/);

  //create an object to hold the word counts
  const wordCount = {};

  //loop through the array of words that was just created and count their occurrences
  for (const word of cleanWords) {
    //if "word" is not an empty string, undefined, or null
    if (word) {
      wordCount[word] = (wordCount[word] || 0) + 1; //for each word: if the word is already a key in the wordCount object, increment its count, otherwise if it isn't a key yet, set its count to 1
    }
  }
  const sortedEntries = Object.entries(wordCount).sort((a, b) => b[1] - a[1]); //turns the object into an array of [word, count] pairs and sorts them in descending order by count

  return Object.fromEntries(sortedEntries); //converts the sorted array of [word, count] pairs back into an object
}

module.exports = countWords;
