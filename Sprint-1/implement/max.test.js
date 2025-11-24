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
// This one is good to go!
test("given an empty array, returns -Infinity",() => {
  const input = [];
  const result = findMax(input); 
  expect(result).toEqual(-Infinity); 
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with 1 number, it returns the number ",() => {;
  const inputMax1 = [3];
    const result = findMax(inputMax1);
expect(result).toEqual(3);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("give 2 positive numbers return the largest nunber",() => {
    const inputMax2= [5,8];
    const result = findMax(inputMax2);
    expect(result).toEqual(8);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test ("Given an array with just negative numbers return colest to Zero",() =>{
const inputMax3= [-5,-3];
const result = findMax(inputMax3);
expect (result).toEqual(-3);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test ("Given an array with decimal numbers, should return the largest decimal number",() => {
const inputMax4= [2.4,3.5];
const result= findMax(inputMax4);
expect(result).toEqual(3.5);
});

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("Given an array with non-number values,it should return the max and ignore non-numeric values ",() => {
const inputMax5 = [2, "apple", 5, "banana", 8, "watermelon"];
const result= findMax(inputMax5);
expect(result).toEqual(8);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test(" Given an array with only non-number values,it should return the least surprising value given how it behaves for all other inputs ", () => {
    const inputMax6= [ "computer", "bike", "car", "ball"];
const result= findMax(inputMax6);
expect(result).toEqual(-Infinity);
});

