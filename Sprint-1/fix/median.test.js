// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  it("returns the median for [1, 2, 3]", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
  });

  it("returns the median for [1, 2, 3, 4, 5]", () => {
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  it("returns the median for [1, 2, 3, 4]", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
  });

  it("returns the median for [1, 2, 3, 4, 5, 6]", () => {
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  it("returns the correct median for unsorted array [3, 1, 2]", () => {
    expect(calculateMedian([3, 1, 2])).toEqual(2);
  });

  it("returns the correct median for unsorted array [5, 1, 3, 4, 2]", () => {
    expect(calculateMedian([5, 1, 3, 4, 2])).toEqual(3);
  });

  it("returns the correct median for unsorted array [4, 2, 1, 3]", () => {
    expect(calculateMedian([4, 2, 1, 3])).toEqual(2.5);
  });

  it("returns the correct median for unsorted array [6, 1, 5, 3, 2, 4]", () => {
    expect(calculateMedian([6, 1, 5, 3, 2, 4])).toEqual(3.5);
  });

  it("returns the correct median for unsorted array [110, 20, 0]", () => {
    expect(calculateMedian([110, 20, 0])).toEqual(20);
  });

  it("returns the correct median for unsorted array [6, -2, 2, 12, 14]", () => {
    expect(calculateMedian([6, -2, 2, 12, 14])).toEqual(6);
  });

  // There is no median of an empty array, so calculateMedian should throw an error
  it("throws when given an empty array", () => {
    expect(() => calculateMedian([])).toThrow(
      new Error("calculateMedian requires a non-empty array")
    );
  });

  // Input that isn't an array should throw an error
  it("throws when given a string", () => {
    expect(() => calculateMedian("banana")).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws when given a number", () => {
    expect(() => calculateMedian(123)).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws when given null", () => {
    expect(() => calculateMedian(null)).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws when given an object", () => {
    expect(() => calculateMedian({})).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws when called with no argument", () => {
    expect(() => calculateMedian()).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  // Arrays containing any non-number value should throw an error , rather than filtering them out
  it("throws for an array of strings", () => {
    expect(() => calculateMedian(["ten", "twenty", "thirty"])).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws for an array mixing numbers and strings", () => {
    expect(() => calculateMedian([1, "2", 3, "4", 5])).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws for an array containing null", () => {
    expect(() => calculateMedian([1, 2, null, 4])).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });

  it("throws for an array containing undefined", () => {
    expect(() => calculateMedian([3, 1, undefined, 2])).toThrow(
      new Error("calculateMedian requires an array of numbers")
    );
  });
});
