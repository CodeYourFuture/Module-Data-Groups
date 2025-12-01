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
function countWords(str){
 str = str.toLowerCase();

  // 2. Remove punctuation (anything that is not a letter, number, or space)
  str = str.replace(/[^\w\s]/g, '');

  // 3. Split the string into words
  const words = str.split(/\s+/);

  // 4. Create an object to store word counts
  const wordCounts = {};

  // 5. Count each word
  for (const word of words) {
    if (word === '') continue; // skip empty strings (in case of multiple spaces)
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }

  // 6. Optional: Sort by frequency (most common first)
  const sortedWordCounts = Object.fromEntries(
    Object.entries(wordCounts).sort((a, b) => b[1] - a[1])
  );
  return sortedWordCounts;
};

console.log(countWords("You and me, and you!"));