// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

/* function calculateMode(list) {
  // track frequency of each value
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  // Find the value with the highest frequency
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
} */
function calculateMode(list) {
  const frequencies = trackFrequencies(list);

  return findMode(frequencies); // Find the value with the highest frequency
}

function trackFrequencies(list) {
  const freqs = new Map(); 
  // Map track all occurrence of each num (store each num as a key + count frequencies)

  for (let num of list) {
    if (typeof num !== "number"){
      continue; // skip it
    } 
    freqs.set(num, (freqs.get(num) || 0) + 1);
    // use map's set method to initialize or increment the frequency count for each num
  }

  return freqs;
}

function findMode(freqs) {
  let maxFreq = 0; // initialize it to 0
  let mode; // var to store the mood
  
  for (let [num, freq] of freqs) {
    // go through each [key, value] in the map
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    } 
    // check if current freq > maxFreq update mode to current num and maxFreq to current frq
  }
  return maxFreq === 0 ? NaN : mode;
}
module.exports = calculateMode;
