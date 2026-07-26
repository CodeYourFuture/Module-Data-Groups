const findMax = require("./max.js");

test("Given an array with only +ve numbers and should return the largest of them", () => {
  expect(findMax([2, 4, 2, 1, 5])).toEqual(5);
});

test("Given an empty array should return -Infinity", () => {
  expect(findMax([])).toEqual(-Infinity);
});

test("Given an array with one number only  and it should return that number", () => {
  expect(findMax([7])).toEqual(7);
});

test("Given an array with both positive and negative numbers and it should return the largest number", () => {
  expect(findMax([1, -3, -2, 3, 4])).toEqual(4);
});

test("Given an array with negative numbers and it should return the largest number", () => {
  expect(findMax([-2, -5, -5, -3, -10])).toEqual(-2);
});

test("Given an array with decimal numbers and it should return the largest decimal numbers", () => {
  expect(findMax([2.7, 2.01, 4.4, 5.2])).toEqual(5.2);
});

test("Given an array a mix of non-numeric values and numeric values and it should return the largest from only the numeric values and ignore the non-numeric ones", () => {
  expect(findMax([2, "a", 8, "12", 8.1])).toEqual(8.1);
});

test("Given an array with only non-numeric values and it should return -Infinity", () => {
  expect(findMax(["a", "e", "I", "o", "U"])).toEqual(-Infinity);
});
