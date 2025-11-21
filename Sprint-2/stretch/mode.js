// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFrequency(list) {
  let frequency = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue;
    }

    frequency.set(num, (frequency.get(num) || 0) + 1);
  }
  return frequency;
}

function highestFrequency(frequencyMap) {
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of frequencyMap) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }
  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  // track frequency of each value
  const frequencyMap = trackFrequency(list);

  // Find the value with the highest frequency

  return highestFrequency(frequencyMap);
}

calculateMode([1, 3, "2", 2, 3, null]);

module.exports = calculateMode;
