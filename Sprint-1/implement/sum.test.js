/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
test.todo("given an empty array, returns 0")

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

// __________________________________________SOLUTION______________________________________________



describe("sum", () => {
  test("given an empty array, returns 0", () => {
    expect(sum([])).toBe(0);
  });

  test("given an array with just one number, returns that number", () => {
    expect(sum([42])).toBe(42);
  });

  test("given an array containing negative numbers, returns the correct total sum", () => {
    expect(sum([-10, -20, 30, 40])).toBe(40); // -10 + -20 + 30 + 40 = 40
  });

  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    expect(sum([1.5, 2.5, 3.5])).toBe(7.5); // 1.5 + 2.5 + 3.5 = 7.5
  });

  test("given an array containing non-number values, ignores non-numerical values and returns the sum", () => {
    expect(sum([10, "hello", undefined, 20, 5])).toBe(35); // 10 + 20 + 5 = 35
  });

  test("given an array with only non-number values, returns 0", () => {
    expect(sum(["hello", null, {}, "world"])).toBe(0); // No numeric values
  });

  test("given an array with decimal/float numbers, returns the correct total sum", () => {
    const result = sum([1.1, 1.1, 1.1]); 
    const expected = 3.3;
    const epsilon = 0.00001; // Tolerance for floating-point comparison
    expect(Math.abs(result - expected)).toBeLessThan(epsilon);
  });
});
