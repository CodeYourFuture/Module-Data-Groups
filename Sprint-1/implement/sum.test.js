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
test("Given an empty array, should return 0", function() {
    const result = sum([]);
    expect(result).toEqual(0)
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Given an array with one number, should return the same number", function() {
    const result = sum([5]);
    expect(result).toEqual(5);
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Given an array with negative numbers, should return the correct total sum", function() {
    const result = sum([10, -5, 15, -10]);
    expect(result).toEqual(10);
  });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal numbers, should return the correct total sum", function() {
    const result = sum([10.5, 20.3, -5.2, 5]);
    expect(result).toEqual(30.6); // 10.5 + 20.3 - 5.2 + 5 = 30.6
  });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array with non-numerical values, should ignore them and return the sum of numbers", function() {
    const result = sum(['hey', 10, 'hi', 60, 10]);
    expect(result).toEqual(80); // 10 + 60 + 10 = 80
  });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values, should return 0", function() {
    const result = sum(['hey', 'hi', 'world']);
    expect(result).toEqual(0); // No numbers to sum, so result is 0
  });
