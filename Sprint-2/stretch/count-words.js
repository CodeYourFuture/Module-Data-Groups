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
function countFrequency(str) {
  str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let result = [];
  let words = str.split(" ");
  //console.log(words);
  for (let word of words) {
    result[word] = result[word] ? result[word] + 1 : 1;
  }
  let sortedArray = Object.entries(result).sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(sortedArray);
}

console.log(countFrequency("aAaabbggshdkajfbshs"));
console.log(countFrequency("My name is Evelyn Nomsa, I live in Cape Town"));
