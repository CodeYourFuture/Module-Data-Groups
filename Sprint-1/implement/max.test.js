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
test.todo("given an empty array, returns -Infinity");
test("an empty array should return infinity", () => {
    expect(findMax([])).toEqual(-Infinity);
});


// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given an array with one number,return the number", () => {
    expect(findMax([2])).toEqual(2);
});

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given an array with both positive and negative numbers", () => {
    expect(findMax([2,5,0,-1,-1])).toEqual(5);
});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with just negative numbers", () => {
    expect(findMax([-1,-1,-10,-18])).toEqual(-1);
});

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers", () => {
    expect(findMax([0.345,0.231, 0.999])).toEqual(0.999);
}
);

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("when an array with non-number values is passed, it should return the max and ignore non-numeric values", () =>{
 expect(findMax([0,-1,-1,3,4,"a","b","2"])).toEqual(4);
});

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("when an array with only non-number values are passed, it should return -Infinity", () =>{
    expect(findMax([,undefined,"one", "a", "b"])).toEqual(-Infinity);
});