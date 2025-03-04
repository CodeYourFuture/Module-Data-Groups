
// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */

function calculateMode(list) {
  // Step 1: Track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    // Skip non-number values
    if (typeof num !== "number") {
      continue;
    }

    // Update frequency count for each number
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Step 2: Find the number with the highest frequency
  let maxFreq = 0;
  let mode;

  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return mode;
}

module.exports = calculateMode;
