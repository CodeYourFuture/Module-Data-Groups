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
  it("returns for []", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // Given an array with one number
  // When passed to the max function
  // Then it should return that number
  it("returns for [17]", () => {
    expect(findMax([17])).toEqual(17);
  });

  // Given an array with both positive and negative numbers
  // When passed to the max function
  // Then it should return the largest number overall

  it("returns for [-6, 15, 30, 42, -90]", () => {
    expect(findMax([-6, 15, 30, 42, -90])).toEqual(42);
  });

  // Given an array with just negative numbers
  // When passed to the max function
  // Then it should return the closest one to zero

  it("returns for [-6, 15, 30, 42, -90]", () => {
    expect(findMax([-6, 15, 30, 42, -90])).toEqual(42);
  });

  // Given an array with decimal numbers
  // When passed to the max function
  // Then it should return the largest decimal number

  it("returns for [0.5, 1.5, 3.5, 5.5, 7.5]", () => {
    expect(findMax([0.5, 1.5, 3.5, 5.5, 7.5])).toEqual(7.5);
  });

  // Given an array containing a value that isn't a number
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")

  it("returns for [2, 4, 'hello', 6, 8, 10]", () => {
    () =>
      expect(findMax([2, 4, "hello", 6, 8, 10])).toThrow(
        new Error("findMax requires an array of numbers")
      );
  });

  // Given something that isn't an array at all, such as "hey", 42 or no argument
  // When passed to the max function
  // Then it should throw Error("findMax requires an array of numbers")

  it("returns for 'hey'", () => {
    expect(() => findMax("hey")).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });

  it("returns for 42", () => {
    expect(() => findMax(42)).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });

  it("returns for ''", () => {
    expect(() => findMax()).toThrow(
      new Error("findMax requires an array of numbers")
    );
  });
});
