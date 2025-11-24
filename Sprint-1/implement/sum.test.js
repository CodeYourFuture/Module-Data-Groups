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
test("given an empty array, returns 0", () => {
  const inputNumber = [];
  const result = sum(inputNumber);
  expect(result).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test("given an array with 1 number, it returns the sam number", () => {
  const inputNumber = [34];
  const result = sum(inputNumber);
  expect(result).toEqual(34);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test("given an array containing negative numbers",() => {
    const inputNegative = [10, -5, 20, -15];
    const result= sum(inputNegative )
    expect (result).toEqual(10);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("Given an array with decimal/float numbers", () => {
    const inputFloat = [10.2, 10.3];
    const result = sum(inputFloat);
    expect (result).toEqual(20.5);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("Given an array containing non-number values", () => {
    const inputNonNumbers = [1, "apple", 2, true, 3];
    const result = sum(inputNonNumbers);
    expect (result).toEqual(6)
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("Given an array with only non-number values" , () =>{
    const nonNumbers = ["helo", "hi"];
    const result = sum(nonNumbers);
    expect (result).toEqual(0)
});