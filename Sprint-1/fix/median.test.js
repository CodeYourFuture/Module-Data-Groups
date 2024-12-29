// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
  });
});

// median.js

function calculateMedian(arr) {
  // Create a copy to avoid modifying the input array
  const sortedArr = [...arr].sort((a, b) => a - b);
  
  const len = sortedArr.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    // Even-length array: average of the two middle values
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    // Odd-length array: middle value
    return sortedArr[mid];
  }
}

module.exports = calculateMedian;
