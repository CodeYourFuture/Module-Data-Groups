/* find the maximum element of an array of numbers

in this kata, you will need to implement a function that find the largest numerical element of an array.

e.g. max([30, 50, 10, 40]), target output: 50
e.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

you should implement this function in max.js, and add tests for it in this file.

we have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

describe("findMax function", () => {
  // given an empty array
  // when passed to the max function
  // then it should return -infinity
  // delete this test.todo and replace it with a test.
  it("given an empty array, returns -Infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
  });

  // given an array with one number
  // when passed to the max function
  // then it should return that number
  it("given an array with one number, returns that number", () => {
    expect(findMax([10])).toEqual(10);
  });

  // given an array with both positive and negative numbers
  // when passed to the max function
  // then it should return the largest number overall
  it("give an array with both positive and negative numbers, returns larges number overall", () => {
    expect(findMax([-10, 20, 0, 100, 1])).toEqual(100);
    expect(findMax([-10, -100, 0, 11, 1, -5])).toEqual(11);
  });

  // given an array with just negative numbers
  // when passed to the max function
  // then it should return the closest one to zero
  it("given an array with just negative numbers, returns number closest to zero", () => {
    expect(findMax([-1, -200, -35, -4, -100])).toEqual(-1);
  });
  // given an array with decimal numbers
  // when passed to the max function
  // then it should return the largest decimal number
  it("given an array with decimal numbers, returns largest decimal number", () => {
    expect(findMax([-1.2, 3.14, -0.1, -0.007, 5.5, 5.50001])).toEqual(5.50001);
  });

  // Given an array with non-number values
  // When passed to the max function
  // Then it should return the max and ignore non-numeric values
  it("given an array with non-number values, returns max, non-numeric values ignored", () => {
    expect(
      findMax(["I", 2, "am", -1000, "Lord", "200", "Voldemort", 10])
    ).toEqual(10);
  });

  // Given an array with only non-number values
  // When passed to the max function
  // Then it should return the least surprising value given how it behaves for all other inputs
  it("given an array with only non-numeric values, it returns -Infinity", () => {
    expect(findMax(["I", "am", "Lord", "Voldemort"])).toEqual(-Infinity);
  });
});
