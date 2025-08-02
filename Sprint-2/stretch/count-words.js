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

  const formatted = text
    .toLowerCase()
    .replace(/[.,!?]/g, " ") // Replace punctuation with space
    .trim();

  const words = formatted.split(/\s+/).filter(Boolean); // Split + filter empty strings

  const result = Object.create(null); // Prevent issues with 'constructor'

  for (const word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  const sorted = Object.entries(result).sort(([, a], [, b]) => b - a);
  return Object.fromEntries(sorted);
}

// Tests for countWords

test("Handles repeated words with punctuation", () => {
  expect(countWords("Hello,World! Hello World!")).toEqual({
    hello: 2,
    world: 2,
  });
});

test("Handles built-in object key like 'constructor'", () => {
  expect(countWords("constructor constructor")).toEqual({
    constructor: 2,
  });
});

test("Handles leading and trailing spaces", () => {
  expect(countWords("       Hello World      ")).toEqual({
    hello: 1,
    world: 1,
  });
});

test("Returns empty object for empty string", () => {
  expect(countWords("")).toEqual({});
});

test("Throws error for non-string input", () => {
  expect(() => countWords(123)).toThrow("Input must be a string");
});
