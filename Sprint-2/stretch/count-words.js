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
function countWords(sentence) {
  if (typeof sentence !== "string") {
    throw new Error("Input must be an string");
  }

  // Split the sentence into words
  const items = sentence
    .toLowerCase() // Convert to lowercase to ignore case
    .replace(/[.,!?]/g, "") // Remove punctuation
    .split(/\s+/); // Split by whitespace give us an array of words
  
  
  const result = {};

  // Build array of unique items
  const uniqueItems = [...new Set(items)];

  // Loop through each unique item
  for (let i = 0; i < uniqueItems.length; i++) {
    const currentItem = uniqueItems[i];
    let count = 0;

    // Count how many times it appears in the original array
    for (let j = 0; j < items.length; j++) {
      if (items[j] === currentItem) {
        count++;
      };
    };
    // Add the item and count to result
    result[currentItem] = count;
  };
  // Sort the entries by count (descending)
  const sortedEntries = Object.entries(result).sort((a, b) => b[1] - a[1]);

  // Convert back to object
  const sortedResult = Object.fromEntries(sortedEntries);
  return sortedResult;
};

console.log(countWords("you and me and you."));