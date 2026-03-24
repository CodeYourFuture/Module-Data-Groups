/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that:
    - takes a string as an argument
    - returns an object where:
        - the keys are the words from the string
        - the values are the number of times each word appears

  Example:
  countWords("you and me and you")
  returns { you: 2, and: 2, me: 1 }

  Advanced improvements included:
    - removes punctuation
    - ignores case
    - handles extra whitespace
    - safely counts words like "constructor"
*/

function countWords(text) {
  // Validate input
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  // Convert to lowercase, replace punctuation with spaces, and trim edges
  const cleanedText = text
    .toLowerCase()
    .replace(/[.,!?;:]/g, " ")
    .trim();

  // Return an empty object if nothing remains after cleaning
  if (cleanedText === "") {
    return Object.create(null);
  }

  // Split on one or more whitespace characters
  const words = cleanedText.split(/\s+/);

  // Use an object with no inherited properties
  const counts = Object.create(null);

  for (const word of words) {
    if (counts[word] !== undefined) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  }

  return counts;
}

module.exports = countWords;
