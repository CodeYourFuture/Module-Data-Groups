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
test("given an empty array should return -Infinity", () => {
  const list = [];
  expect(sum(list)).toEqual(0);
});
test("Array with one number should return that number", () => {
    const list =[7];
    expect(sum(list)).toEqual(7);
});
test("An array with both positive and negative number should return the largest overall", () =>{
    const list = [-10, 5, 30, -3];
    expect(sum(list)).toEqual(22);
});
test("Array with just negative number should return the closest on to zero", () =>{
    const list = [-10, -3, -20,-7,-4]
    expect(sum(list)).toEqual(-44);
});
test("An array with decimal number should return largest decimal number", ()=>{
   const list = [1.2, 3.5, 2.8]
    expect(sum(list)).toEqual(7.5);
});
test("An array with non-numeric values should return the max and ignore non-numeric", () =>{
    const list = ['hey', 10, 'hi', 60, 50];
    expect(sum(list)).toEqual(120);
});
test("An array with non numeric value should  return the least surprising value given how it behaves for all other inputs", ()=> {
    const list = ['a', 'b', 'hello'];
    expect(sum(list)).toEqual(0);
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
