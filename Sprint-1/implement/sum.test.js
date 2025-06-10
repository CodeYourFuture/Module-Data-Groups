/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");
describe("sum", () => {
// Acceptance Criteria:

// Given an empty array
// When passed to the sum function
// Then it should return 0
//test.todo("given an empty array, returns 0")
test("given an empty array, it should return 0", () => {
    expect(sum([])).toEqual(0);
  });
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, it should return that number", () => {
    expect(sum([1])).toEqual(1);
  });
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, it should return the correct total sum", () => {
    expect(sum([1,3,6,1,9])).toEqual(20);
  });
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array containing decimal/float numbers, it should return the correct total sum", () => {
    expect(sum([0.1,0.3,0.6,0.1,0.9])).toEqual(2);
  });
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, it should ignore the non-numerical values and return the sum of the numerical elements", () => {
    expect(sum(["s",1,3,6,null,1,9,"a"])).toEqual(20);
  });
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values and return the sum of the numerical elements", () => {
    expect(sum(["s",null,"a"])).toEqual(0);
  });
})