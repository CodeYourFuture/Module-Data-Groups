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
test("given an empty array, returns -Infinity" , () => {
    expect(findMax([])).toEqual(-Infinity);

});

// Given an array with one number
// When passed to the max function
// Then it should return that number

test("given an array with one number should return that number" , () => {
    expect(findMax([50])).toEqual(50);
    expect(findMax([100])).toEqual(100);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

test("given an array with positive and negative numbers should return the largest  number" , () => {
    expect(findMax([-50,110,50,-1,-101])).toEqual(110);
    expect(findMax([-5,10,5,-1,-10])).toEqual(10);

});

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

test("given an array with negative numbers should return the number closest to zero" , () => {
    expect(findMax([-50,-110,-50,-1,-101])).toEqual(-1);
    expect(findMax([-5,-4,-3,-2,-1])).toEqual(-1);
    
});


// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

test("given an array with decimal numbers should return the largest decimal number" , () => {
    expect(findMax([0.5,1.3,5.5,5.6])).toEqual(5.6);
    expect(findMax([0.5,0.1,0.67,0.77])).toEqual(0.77);
    
});


// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values


test("given an array with one number should return that number" , () => {
    expect(findMax(["hey","hello",50,"yes","no"])).toEqual(50);
    expect(findMax([,"hello",100,"yes","no"])).toEqual(100);
});


// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-numeric values should return the least surprising value" , () => {
    expect(findMax(["hello", "yes", "no",false])).toEqual(-Infinity);
    expect(findMax(["hello", {}, [], false])).toEqual(-Infinity);
});

