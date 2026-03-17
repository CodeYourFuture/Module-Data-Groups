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
test("given an empty array should return -Infinity", () => {
  const list = [];
  expect(findMax(list)).toEqual(-Infinity);
});
test("Array with one number should return that number", () => {
    const list =[7];
    expect(findMax(list)).toEqual(7);
});
test("An array with both positive and negative number should return the largest overall", () =>{
    const list = [-10, 5, 30, -3];
    expect(findMax(list)).toEqual(30);
});
test("Array with just negative number should return the closest on to zero", () =>{
    const list = [-10, -3, -20,-7,-4]
    expect(findMax(list)).toEqual(-3);
});
test("An array with decimal number should return largest decimal number", ()=>{
   const list = [1.2, 3.5, 2.8]
    expect(findMax(list)).toEqual(3.5);
});
test("An array with non-numeric values should return the max and ignore non-numeric", () =>{
    const list = ['hey', 10, 'hi', 60, 50];
    expect(findMax(list)).toEqual(60);
});
test("An array with non numeric value should  return the least surprising value given how it behaves for all other inputs", ()=> {
    const list = ['a', 'b', 'hello'];
    expect(findMax(list)).toEqual(-Infinity);
})

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
