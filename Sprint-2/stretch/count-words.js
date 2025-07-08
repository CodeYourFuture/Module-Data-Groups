/**
 * This function takes a string and returns an object
 * counting how many times each word appears.
 * 
 * It:
 *  - Removes punctuation
 *  - Ignores case
 *  - Sorts the result by most frequent word
 */

function countWords(text) {
  if (typeof text !== "string") {
    throw new Error("Input must be a string");
  }

  // Clean punctuation and lowercase the string
  const formatted = text
    .toLowerCase()
    .replace(/[.,!?]/g, "");

  const words = formatted.split(/\s+/); // Split by one or more spaces

  const result = {};

  for (const word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  // Sort the result by count descending
  const sorted = Object.entries(result).sort(([, a], [, b]) => b - a);

  return Object.fromEntries(sorted);
}

module.exports = countWords;

/* */ 