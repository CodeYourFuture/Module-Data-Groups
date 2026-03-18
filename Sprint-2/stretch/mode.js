// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function getFrequencies(list) {
  const frequencies = new Map();

  for (const item of list) {
    if (typeof item !== "number") {
      continue;
    }

    frequencies.set(item, (frequencies.get(item) || 0) + 1);
  }

  return frequencies;
}

function getModeFromFrequencies(frequencies) {
  let maxFrequency = 0;
  let mode;

  for (const [value, frequency] of frequencies) {
    if (frequency > maxFrequency) {
      mode = value;
      maxFrequency = frequency;
    }
  }

  return maxFrequency === 0 ? NaN : mode;
}

function calculateMode(list) {
  const frequencies = getFrequencies(list);
  return getModeFromFrequencies(frequencies);
}

module.exports = calculateMode;
