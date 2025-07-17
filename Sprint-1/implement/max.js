// function findMax(elements) {
// }

// module.exports = findMax;


// In my implementation of findMax:
//  I first checked if the input is an array. If it isn’t, I return -Infinity as a safe fallback (e.g. for non-array inputs).
//  Then, I filtered out all non-numeric values using .filter() and typeof el === "number", so that only valid numbers are considered.
//  If there are no numeric values, I return -Infinity (which is consistent with how Math.max() behaves on an empty array).
//  Finally, I used Math.max(...numbersOnly) with the spread operator to return the highest value from the filtered list.
// This approach ensures that the function handles:
//  Empty arrays
//  Arrays with all non-numbers
//  Mixed arrays (e.g., numbers with strings or null)
//  Positive, negative, and decimal numbers
//  Without mutating the original array
// I also confirmed the function passes all tests, including edge cases.

function findMax(elements) {
    if (!Array.isArray(elements)) return -Infinity;
  
    const numbersOnly = elements.filter((el) => typeof el === "number");
  
    if (numbersOnly.length === 0) return -Infinity;
  
    return Math.max(...numbersOnly);
  }
  
  module.exports = findMax;