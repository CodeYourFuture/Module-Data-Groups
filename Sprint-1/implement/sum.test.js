const sum = require("./sum.js");

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("returns 0 for an empty array", () => {
  const list = [];
  const currentOutput = sum(list);
  const targetOutput = 0;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("returns the number when the array contains one number", () => {
  const list = [1];
  const currentOutput = sum(list);
  const targetOutput = 1;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("returns the correct sum with negative numbers", () => {
  const list = [-5, -10, 3];
  const currentOutput = sum(list);
  const targetOutput = -12;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("returns the correct sum with decimal numbers", () => {
  const list = [2.5, 3.5, 4];
  const currentOutput = sum(list);
  const targetOutput = 10;

  expect(currentOutput).toEqual(targetOutput);
});

// Given an array containing a value that isn't a number
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws an error when the array contains a non-number", () => {
  expect(() => sum(["hey", 10, "hi", 60, 10])).toThrow(
    new Error("sum requires an array of numbers")
  );
});

// Given something that isn't an array at all
// When passed to the sum function
// Then it should throw Error("sum requires an array of numbers")
test("throws an error when the input is not an array", () => {
  expect(() => sum("hey")).toThrow(
    new Error("sum requires an array of numbers")
  );

  expect(() => sum(42)).toThrow(new Error("sum requires an array of numbers"));

  expect(() => sum()).toThrow(new Error("sum requires an array of numbers"));
});
