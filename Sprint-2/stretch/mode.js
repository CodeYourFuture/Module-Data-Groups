// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// Stage 1: Count how many times each number appears in the array
function countFrequencies(list) {
  // Create a new Map to store each number and its count
  const freqs = new Map();

  for (const num of list) {
    // Skip any value that is not a number
    if (typeof num !== "number") {
      continue;
    }

    // If the number exists in the map, add 1; otherwise start at 1
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Return the Map of frequencies
  return freqs;
}

// Stage 2: Find the number with the highest frequency
function findHighestFrequency(freqs) {
  let maxFreq = 0;
  let mode;

  // Loop through each [number, frequency] pair in the Map
  for (const [num, freq] of freqs) {
    // If this frequency is higher than the current max, update
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  // If no numbers were found, return NaN; otherwise return the mode
  return maxFreq === 0 ? NaN : mode;
}

// Main function: combine both stages
function calculateMode(list) {
  // Stage 1: count frequencies
  const freqs = countFrequencies(list);

  // Stage 2: find the value with the highest frequency
  return findHighestFrequency(freqs);
}

module.exports = calculateMode;

/*
## Brief Explanation

- countFrequencies takes the array and returns a Map. A Map is like an object but it can use any type as a key (including numbers). freqs.set(num, value) sets a value, and freqs.get(num) reads it.
- findHighestFrequency loops through the Map and finds the number that appears the most. If two numbers have the same count, the one that appears first wins (because > does not include equal).
- calculateMode simply calls both functions in order — this is what "refactoring" means: splitting one big function into smaller, clearer pieces.

## How to Test

npx jest stretch/mode.test.js


Expected output:

PASS  ./mode.test.js
  calculateMode()
    ✓ returns the most frequent number in an array
    ✓ returns the first mode in case of multiple modes
    ✓ ignores non-number values
*/