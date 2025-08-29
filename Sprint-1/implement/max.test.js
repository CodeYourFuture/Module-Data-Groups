/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.

describe("find Max", () => {
    it("given an empty array, returns -Infinity", () => {
    const list = [];
    const result = findMax(list);
    expect(result).toEqual(-Infinity);  
  });
 
// Given an array with one number
// When passed to the max function
// Then it should return that number

  it("Given an array with one number, return that number", () => {
    const list = [10];
    const result = findMax(list);
    expect(result).toEqual(10);  
  });


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

  it("Given an array with both positive and negative numbers, return the largest number overall", () => {
    const list = [-10, 5, -100, 2, 1];
    const result = findMax(list);
    expect(result).toEqual(5);  
  });

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

  it("Given an array with just negative numbers, return the closest one to zero", () => {
    const list = [-10, -5, -100, -2, -1];
    const result = findMax(list);
    expect(result).toEqual(-1);
  });


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

  it("Given an array with decimal numbers, return the largest decimal number", () => {
    const list = [-10.05, 5.15, -100.0001, -2.85, -1.46];
    const result = findMax(list);
    expect(result).toEqual(5.15);
  });

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

  it("Given an array with non-number values, return the max and ignore non-numeric values", () => {
    const list = [-10.05, 82.15, "1000", "London", -2.85, true];
    const result = findMax(list);
    expect(result).toEqual(82.15);
  });

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
  it("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const list = ["London", "Hello", "CYF" , "Zebra"];
    const result = findMax(list);
    expect(result).toEqual(-Infinity);
  });

  it("Given an array with one letter, return that letter", () => {
    const list = ["A"];
    const result = findMax(list);
    expect(result).toEqual(-Infinity);
  });

  it("Given an array with one letter and number, return the number", () => {
    const list = ["A", 99];
    const result = findMax(list);
    expect(result).toEqual(99);
  });

  });

  //findMax(["A"]);
  //findMax(["A", 99]);