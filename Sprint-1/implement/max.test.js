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
  it("given an empty array,returns -Infinity", () => {
    expect(findMax([])).toEqual([-Infinity]);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  it("given an array with one number,returns that number", () => {
    expect(findMax([5])).toEqual(5);
    expect(findMax([20])).toEqual(20);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall
  it("given an array with both positive and negative numbers, return the largest number overall", () => {
    expect(findMax([5, 8, 3, 0, -1, 2, 16, -8, -16])).toEqual(16);
    expect(findMax([-10, -5, -2, -20, 3, -1])).toEqual(3);
    expect(findMax([-100, 50, -30, 25, 0, 75, -5])).toEqual(75);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero
  it("given an array with just negative numbers, return the closest one to zero", () => {
    expect(findMax([-5, -8, -3, -76, -2, -16, -4])).toEqual(-2);
    expect(findMax([-1, -2, -9, -100])).toEqual(-1);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number
  it("given an array with decimal numbers, returns the largest decimal number", () => {
    expect(findMax([1.5, 3.7, 2.4, 5.9, 4.2])).toEqual(5.9);
    expect(findMax([0.1, 0.9, 0.5])).toEqual(0.9);
    expect(findMax([-1.5, -3.2, -0.5])).toEqual(-0.5);
  });

  // Given an array containing a value that isn't a number
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")
  it("throws when given an array containing a value that isn't a number", () => {
    expect(() => findMax(["banana"])).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });
  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")
  it("throws when given something that isn't an array", () => {
    expect(() => findMax("hey")).toThrow(
      new Error("findMax requires an array of numbers")
    );

    expect(() => findMax(42)).toThrow(
      new Error("findMax requires an array of numbers")
    );

    expect(() => findMax()).toThrow(
      new Error("findMax requires an array of numbers")
    );

    expect(() => findMax(null)).toThrow(
      new Error("findMax requires an array of numbers")
    );

    expect(() => findMax({})).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });
});
