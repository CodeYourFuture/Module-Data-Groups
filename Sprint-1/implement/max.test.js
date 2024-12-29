/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
describe("findMax", () => {
    test("returns -Infinity for an empty array", () => {
      expect(findMax([])).toBe(-Infinity);
    });
  
// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");
test("returns the number for an array with one number", () => {
    expect(findMax([10])).toBe(10);
  });

  test("returns the largest number in an array with both positive and negative numbers", () => {
    expect(findMax([30, 50, 10, 40])).toBe(50);
    expect(findMax([-10, -50, 30, 0])).toBe(30);
  });

  test("returns the closest to zero in an array with only negative numbers", () => {
    expect(findMax([-10, -50, -5, -100])).toBe(-5);
  });

  test("returns the largest decimal number", () => {
    expect(findMax([1.5, 2.3, 3.1, 2.9])).toBe(3.1);
  });

  test("ignores non-number values and returns the max number", () => {
    expect(findMax(['hey', 10, 'hi', 60, 10])).toBe(60);
  });

  test("returns -Infinity for an array with only non-number values", () => {
    expect(findMax(['hey', 'hi', 'hello'])).toBe(-Infinity);
  });
});


// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
 


  