// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above


// Function to filter only numbers from the input list
function filterNumbers(list) {
  return list.filter(item => typeof item === "number")
}

// Function to calculate frequencies of numbers
function calculateFrequencies(numbers) {
  let freqs = new Map();
  for (let num of numbers) {
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
return freqs;

}

// Function to find the mode from frequencies
function findMode(freqs) {
  let maxFreq = 0;
  let mode = null;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

// Main function to calculate the mode
function calculateMode(list) {
  const numbers = filterNumbers(list);
  const freqs = calculateFrequencies(numbers);
  return findMode(freqs);
}

module.exports = calculateMode;

