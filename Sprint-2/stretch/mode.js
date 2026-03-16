// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // Stage 1: Count frequencies
  let freqs = {};
  for (let num of list) {
    if (typeof num !== "number") continue; // skip non-number values

    if (freqs[num] === undefined) {
      freqs[num] = 1;
    } else {
      freqs[num] += 1;
    }
  }
  // Stage 2: Find the value with the highest frequency
  let maxFreq = 0;
  let mode = null;

  for (let num in freqs) {
    if (freqs[num] > maxFreq) {
      maxFreq = freqs[num];
      mode = Number(num); // convert string key to number
    }
  }

  return mode;
}

module.exports = calculateMode;
