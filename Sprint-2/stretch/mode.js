// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // track frequency of each value
  let frequencies = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    frequencies.set(num, (frequencies.get(num) || 0) + 1);
  }

  // Find the value with the highest frequency
  let maxFrequencies = 0;
  let mode;
  for (let [num, frequency] of frequencies) {
    if (frequency > maxFrequencies) {
      mode = num;
      maxFrequencies = frequency;
    }
  }

  return maxFrequencies === 0 ? NaN : mode;
}

module.exports = calculateMode;

console.log(calculateMode([2, 4, 1, 2, 3, 2, 1]))
