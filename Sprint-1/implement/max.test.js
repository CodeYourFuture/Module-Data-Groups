/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]) throws Error("findMax requires an array of numbers") (max can't compare non-numerical elements, so it shouldn't guess)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
describe("findMax", () => {
  it("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number

  it("given an array with one number, returns that number", () => {
    expect(findMax([42])).toEqual(42);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  it("given an array with both positive and negative numbers, returns the largest number overall", () => {
    expect(findMax([30, -50, 10, 40, -5])).toEqual(40);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  it("given an array with just negative numbers, returns the closest one to zero", () => {
    expect(findMax([-10, -3, -50, -5])).toEqual(-3);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  it("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 2.7, 2.1, 0.4])).toEqual(2.7);
  });

  // Given an array containing a value that isn't a number
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")
  it("given an array containing a value that isn't a number, throws an error", () => {
    expect(() => findMax(["hey", 10, "hi", 60, 10])).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });

  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")
  it("given something that isn't an array at all, throws an error", () => {
    expect(() => findMax("hey")).toThrow(
      new Error("findMax requires an array of numbers")
    );
    expect(() => findMax(42)).toThrow(
      new Error("findMax requires an array of numbers")
    );
    expect(() => findMax()).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });
});
