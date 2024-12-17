// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }
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


    
  // Find the value with the highest frequency

  // Function to find the mode from frequencies
function findMode(freqs) {
  let maxFreq = 0;
  let mode;
  let mode = null;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

module.exports = calculateMode;

// Main function to calculate the mode
function calculateMode(list) {
  const numbers = filterNumbers(list);
  const freqs = calculateFrequencies(numbers);
  return findMode(freqs);
}

// module.exports = calculateMode;

console.log(calculateMode([1, 2, 2, 3, 3, 3, 3, "a", {}, 2]));