// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function getFrequencies(list) {
  // track frequency of each value
  const frequencies = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }
  return frequencies;
}

// Find the value with the highest frequency
function getMostFrequentValue(frequencies) {
  let maxFreq = 0;
  let mode;

  for (let [num, freq] of frequencies) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  const frequencies = getFrequencies(list);
  return getMostFrequentValue(frequencies);
}

console.log(calculateMode([1, 2, 2, 3, 4, 4, 4, 5])); // Output: 4
console.log(calculateMode([1, 1, 2, "2", 3, 3])); // Output: 1 (or 2 or 3, since they
module.exports = calculateMode;
