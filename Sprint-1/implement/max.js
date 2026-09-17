// Explanation:

// First we check the input is an array, and that every element is a number.
// If either check fails we throw, because findMax can't sensibly compare
// non-numbers and shouldn't guess.
// Then we walk the array with a for...of loop, keeping track of the largest
// number seen so far. Starting from -Infinity means an empty array returns
// -Infinity, and any real number will be larger than the starting value.

function findMax(elements) {
  if (!Array.isArray(elements)) {
    throw new Error("findMax requires an array of numbers");
  }

  let largest = -Infinity;
  for (const element of elements) {
    if (typeof element !== "number") {
      throw new Error("findMax requires an array of numbers");
    }
    if (element > largest) {
      largest = element;
    }
  }

  return largest;
}

module.exports = findMax;
