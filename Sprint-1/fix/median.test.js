// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  it("returns median for sorted arrays", () =>{
    expect(calculateMedian([1, 2, 3])).toBe(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toBe(3);
    expect(calculateMedian([1, 2, 3, 4])).toBe(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toBe(3.5);
  });

  it("returns median for unsorted arrays", () =>{
    expect(calculateMedian([3, 1, 2])).toBe(2);
    expect(calculateMedian([5, 1, 3, 4, 2])).toBe(3);
    expect(calculateMedian([4, 2, 1, 3])).toBe(2.5);
    expect(calculateMedian([6, 1, 5, 3, 2, 4])).toBe(3.5);
    expect(calculateMedian([110, 20, 0])).toBe(20);
    expect(calculateMedian([6, -2, 2, 12, 14])).toBe(6);
  });

  it("does not modify the original array", () => {
    const arr = [3, 1, 2];
    calculateMedian(arr);
    expect(arr).toEqual([3, 1, 2]);
  });

  it("returns null for invalid or empty arrays", () =>{
    expect(calculateMedian("not an array")).toBe(null);
    expect(calculateMedian(123)).toBe(null);
    expect(calculateMedian(null)).toBe(null);
    expect(calculateMedian(undefined)).toBe(null);
    expect(calculateMedian({})).toBe(null);
    expect(calculateMedian([])).toBe(null);
    expect(calculateMedian(["apple", null, undefined])).toBe(null);
  });

  it("filters out non-numbers and returns correct median", () =>{
    expect(calculateMedian([1, 2, "3", null, undefined, 4])).toBe(2);
    expect(calculateMedian(["apple", 1, 2, 3, "banana", 4])).toBe(2.5);
    expect(calculateMedian([1, "2", 3, "4", 5])).toBe(3);
    expect(calculateMedian([1, "apple", 2, null, 3, undefined, 4])).toBe(2.5);
    expect(calculateMedian([3, "apple", 1, null, 2, undefined, 4])).toBe(2.5);
    expect(calculateMedian(["banana", 5, 3, "apple", 1, 4, 2])).toBe(3);
  });
});
