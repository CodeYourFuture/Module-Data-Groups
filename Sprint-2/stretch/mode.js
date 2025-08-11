// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// Step 1: Function to track frequency of each value
function trackFrequency(list) {
  const freqs = new Map();

  for (let num of list) {
      if (typeof num !== "number") {
          continue;  
      }
      freqs.set(num, (freqs.get(num) || 0) + 1); 
  }

  return freqs;  
}

// Step 2: Function to find the mode from the frequency map
function findMode(freqs) {
  let maxFreq = 0;
  let mode;

  for (let [num, freq] of freqs) {
      if (freq > maxFreq) {
          mode = num;  
          maxFreq = freq; 
      }
  }

  return maxFreq === 0 ? NaN : mode;  
}

 
function calculateMode(list) {
  const freqs = trackFrequency(list);  
  return findMode(freqs); 
}

module.exports = calculateMode;
 

 