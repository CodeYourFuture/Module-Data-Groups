// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

// Helper function: Tracks how often each number appears in the list
function trackFrequency(list) {
  let frequencies = new Map();

  // Loop through the list and count the occurrences of each number
  for (let number of list) {
    if (typeof number !== "number") {
      continue;  // Ignore non-numeric values
    }

    frequencies.set(number, (frequencies.get(number) || 0) + 1);  // Update the frequency count
  }

  return frequencies;
}

// Helper function: Determines the number with the highest frequency
function findMode(frequencies) {
  let highestFrequency = 0;
  let modeValue;

  // Iterate through the frequency map to find the mode
  for (let [number, frequency] of frequencies) {
    if (frequency > highestFrequency) {
      modeValue = number;
      highestFrequency = frequency;
    }
  }

  return modeValue;
}

// Main function: Calculates the mode by using the helper functions
function calculateMode(list) {
  const frequencies = trackFrequency(list); // Get the frequency count of each number
  return findMode(frequencies); // Find and return the mode (the most frequent number)
}
