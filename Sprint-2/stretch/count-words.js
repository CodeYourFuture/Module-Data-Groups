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
  let countedWords = {};
  let noPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  //remove unnecessary spaces and make lover case
  noPunctuation = noPunctuation.toLowerCase();
  const words = noPunctuation.trim().split(/\s+/);
  for (i = 0; i < words.length; i++) {
    if (countedWords.hasOwnProperty(words[i])) {
      countedWords[words[i]]++;
    } else {
      countedWords[words[i]] = 1;
    }
  }
  let mostCommonWord = '';
  let maxQuantity = 0;
  for (let word in countedWords) {
    if (countedWords[word] > maxQuantity) {
      maxQuantity = countedWords[word];
      mostCommonWord = word;
    }
  }
  console.log("Most common word: " + mostCommonWord);
  return countedWords;
}

console.log(countWords("You. !and Me and You"));
