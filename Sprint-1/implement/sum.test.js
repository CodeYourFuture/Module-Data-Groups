const sum = require("./sum.js");

// Given an empty array
// When passed to the sum function
// Then it should return 0
test("given an empty array, returns 0", () => {
  expect(sum([])).toBe(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with one number, returns that number", () => {
  expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("correctly sums arrays containing negative numbers", () => {
  expect(sum([10, -3, 5])).toBe(12);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("correctly sums decimal numbers", () => {
  // تم التعديل هنا باستخدام toBeCloseTo لضمان دقة حساب الأرقام العشرية
  expect(sum([1.5, 2.5, 3.0])).toBeCloseTo(7);
  expect(sum([0.1, 0.2])).toBeCloseTo(0.3);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("ignores non-numeric values and sums only numbers", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toBe(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return 0 (same as empty array behaviour)
test("returns 0 when array contains only non-numeric values", () => {
  expect(sum(["a", null, undefined])).toBe(0);
});
