// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// function calculateMode(list) {
//   // track frequency of each value
//   let freqs = new Map();

//   for (let num of list) {
//     if (typeof num !== "number") {
//       continue;
//     }

//     freqs.set(num, (freqs.get(num) || 0) + 1);
//   }

//   // Find the value with the highest frequency
//   let maxFreq = 0;
//   let mode;
//   for (let [num, freq] of freqs) {
//     if (freq > maxFreq) {
//       mode = num;
//       maxFreq = freq;
//     }
//   }

//   return maxFreq === 0 ? NaN : mode;
//}


// -------------- refactored  ------------- //

// Phase 1: Count the frequency of each number

function countFrequency(list) {
  const frequency = new Map();

  for (const num of list) {
    if (typeof num !== "number") continue; // skip non-numbers
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  return frequency;
}

// Stage 2: Find the number with the highest frequency
function findMode(frequency) {
  let maxFreq = 0;
  let mode;

  for (const [num, freq] of frequency) {
    if (freq > maxFreq) {
      maxFreq = freq;
      mode = num;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

// Main function
function calculateMode(list) {
  const frequency = countFrequency(list);
  return findMode(frequency);
}
console.log(calculateMode([1, 2, 2, 3, 3, 3, 4]));

module.exports = calculateMode;

// In mode.js function calculateMode refactored. 
