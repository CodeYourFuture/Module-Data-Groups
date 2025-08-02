// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above

function trackFreq(list) {
  // track frequency of each value
  let freqs = new Map(); //initialize an empty Map object to track frequencies of values in the list

  for (let num of list) {
    //iterate through each number in the list
    if (typeof num !== "number") {
      //check if the current number is not a number
      continue;
    }

    freqs.set(num, (freqs.get(num) || 0) + 1); //get the current frequency of the number from the Map, or default to 0 if it doesn't exist, and increment it by 1 if it has been seen before
  }

  return freqs;
}

function highestFreqVal(freqs) {
  let maxFreq = 0; //initialize a variable to track the maximum frequency found so far

  let mode; //initialize a variable to track the mode (the value with the highest frequency)

  //loop through each entry in the "freqs" Map object where num is the value from the list and freq is how many times it appeared
  for (let [num, freq] of freqs) {
    if (freq > maxFreq) {
      //check if the current frequency is greater than the highest frequency found so far

      // if so, update the mode to the current number
      mode = num;

      //update the maxFreq to the current frequency
      maxFreq = freq;
    }
  }
  // if no mode was found, return NaN (a common way to indicate that a numeric result is not defined or not available), otherwise return the mode
  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  //return the value that appears most frequently in the list
  return highestFreqVal(trackFreq(list));
}

module.exports = calculateMode;
