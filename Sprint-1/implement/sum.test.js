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
test("given an empty array, returns 0",() =>{
    expect(sum([])).toEqual(0);
}
)

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, returns that number", () => {
  expect(sum([78])).toEqual(78);
});
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, returns the correct total sum", () => {
  expect(sum([1,3,4,-6])).toEqual(2);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, returns the correct total sum", () => {
  expect(sum([1.7, 0.3, 4.5, 0.08])).toEqual(6.58);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array containing non-number values, returns the sum of the numerical elements", () => {
  expect(sum(["hey", 10, "hi", 60, 10])).toEqual(80);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns the least surprising value given how it behaves for all other inputs", () => {
  expect(sum(["hey","test" , "hi", "first"])).toEqual("heytesthifirst");
});