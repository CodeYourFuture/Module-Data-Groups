const calculateMode = require("./mode.js");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];

    expect(calculateMode(nums)).toEqual(2);
  });

  test("ignores non-number values", () => {
    const nums = [1, 3, "2", 2, 3, null];

    expect(calculateMode(nums)).toEqual(3);
  });
});



/// MY RESPONSES
// calculateMode implementation

function trackFrequency(list) {
  let freqs = new Map();

  for (let num of list) {
    if (typeof num !== "number") {
      continue; // Skip non-number values
    }

    freqs.set(num, (freqs.get(num) || 0) + 1);
  }

  return freqs;
}

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

// Test cases to validate the implementation

describe("calculateMode()", () => {
  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];
    expect(calculateMode(nums)).toEqual(2); // 2 appears most frequently
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];
    expect(calculateMode(nums)).toEqual(2); // 2 and 3 have the same frequency, but 2 appears first
  });

  test("ignores non-number values", () => {
    const nums = [1, 3, "2", 2, 3, null];
    expect(calculateMode(nums)).toEqual(3); // "2" and null are ignored; 3 is the most frequent
  });
});
