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

function countWordsAdvanced(str) {
  if (!str.trim()) return {};

  // 1 & 2: Convert to lowercase and strip punctuation using Regex
  const cleanedStr = str
    .toLowerCase()
    .replace(/[^\w\s]|_/g, ""); // Removes punctuation like .,!?- etc.

  // Match words, splitting on whitespace
  const words = cleanedStr.match(/\b\w+\b/g);
  if (!words) return {};

  const wordCounts = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  // 3: Sort the result by frequency (most common first)
  const sortedEntries = Object.entries(wordCounts).sort(
    (a, b) => b[1] - a[1]
  );

  // Convert back into an object (maintains insertion order in modern JavaScript)
  return Object.fromEntries(sortedEntries);
}

// Example usage:
console.log(countWordsAdvanced("You and me! And you, and ME..."));
// Output: { and: 3, you: 2, me: 2 }