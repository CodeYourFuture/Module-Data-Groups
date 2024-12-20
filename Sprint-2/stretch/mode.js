// You are given an implementation of calculateMode

// calculateMode's implementation can be broken down into two stages:

// Stage 1. One part of the code tracks the frequency of each value
// Stage 2. The other part finds the value with the highest frequency

// refactor calculateMode by splitting up the code
// into smaller functions using the stages above
function trackFrequency(listValue) {
  //function to track the frequency

  let freqs = new Map();

  //Object called freqs will be created which is a Map type object
  for (let num of listValue) {
    if (typeof num !== "number") {
      //if typeof is not a number continue to loop through the list
      continue;
    }

    //set the number of the number being dealt with to 1 or an increment of 1
    freqs.set(num, (freqs.get(num) || 0) + 1);
  }
  return freqs;
}

function highestFrequency(list) {
  // track frequency of each value
  let currentFreqs = trackFrequency(list);
  let maxFreq = 0;
  let mode;
  for (let [num, freq] of currentFreqs) {
    if (freq > maxFreq) {
      mode = num;
      maxFreq = freq;
    }
  }

  return maxFreq === 0 ? NaN : mode;
}

function calculateMode(list) {
  // Find the value with the highest frequency
  return highestFrequency(list);


}
// const list = [1, 2, 2, 3, "a", 1, 3, 3];
// console.log(calculateMode(list));

// const nums = [2, 4, 1, 2, 3, 2, 1];
// console.log(calculateMode(nums));
module.exports = calculateMode;
