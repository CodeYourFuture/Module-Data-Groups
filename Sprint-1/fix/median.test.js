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
    expect(calculateMedian([25, 18, 73, 90, 83, 15])).toEqual(49);//15,18,25,73,83,90
    expect(calculateMedian([6, 1, 2, 3, 4, 5])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
  });
});
