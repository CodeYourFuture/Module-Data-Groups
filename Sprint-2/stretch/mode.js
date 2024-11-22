// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function calculateMode(list) {
  // Stage 1: Track the frequency of each value
  function freqq(list) {
    let freqs = new Map();

    for (let num of list) {
      if (typeof num !== "number") {
        continue; // Skip non-numeric values
      }

      freqs.set(num, (freqs.get(num) || 0) + 1);
    }

    return freqs;
  }

  // Stage 2: Find the value with the highest frequency
  function maxfreqq(freqs) {
    let maxFreq = 0;
    let mode;

    for (let [num, freq] of freqs) {
      if (freq > maxFreq) {
        mode = num;
        maxFreq = freq;
      }
    }

    return maxFreq === 0 ? NaN : mode; // Return NaN if no mode is found
  }

  // Execute the stages and return the result
  const freqs = freqq(list); // Calculate frequency
  return maxfreqq(freqs);    // Find the mode
}


module.exports = calculateMode;
