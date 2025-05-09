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
// Your countWords function
function countWords(string) {
  const punctuation = [".", ",", "!", "?", '"'];
  const counter = {};
  const words = string.split(" ");

  const cleanWords = words.map((word) => {
    let cleanWord = "";
    for (let char of word) {
      if (!punctuation.includes(char)) {
        cleanWord += char;
      }
    }
    cleanWord = cleanWord.toLowerCase();
    return cleanWord;
  });

  for (const word of cleanWords) {
    if (word) {
      counter[word] = (counter[word] || 0) + 1;
    }
  }

  const sortedWordCount = Object.entries(counter)
    .sort(([, countA], [, countB]) => countB - countA)
    .reduce((acc, [word, value]) => {
      acc[word] = value;
      return acc;
    }, {});
  return sortedWordCount;
}

console.log(
  countWords("Hello, hello! How are you? Are you doing well, or are you busy?")
);
