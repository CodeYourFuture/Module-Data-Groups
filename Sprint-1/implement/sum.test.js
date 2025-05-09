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
//test.todo("given an empty array, returns 0")
test (" ", ()=>{
    expect(sum([])).toEqual(0); 
 })
// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test (" ", ()=>{
   expect(sum([10])).toEqual(10); 
})
// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test (" ", ()=>{
    expect(sum([-10,-80])).toEqual(-90); 
 })
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test (" ", ()=>{
    expect(sum([-10.8,-80.2])).toEqual(-91); 
 })
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test (" ", ()=>{
    expect(sum([-10,-80,"a"])).toEqual(-90); 
 })
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test (" ", ()=>{
    expect(sum(["a","b","c"])).toEqual(0); 
 })