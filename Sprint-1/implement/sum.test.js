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
test ("Get an empty array, return 0", () =>{
    EmptArr = sum([]);
    expect(EmptArr).toEqual(0);
    
})

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

test ("Get an array with only one value,return that value", () => {
    OneArr = sum([7]);
    expect(OneArr).toEqual(7);
})

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

test ("Get an array with +&- numbers,return the correct value",() =>{
    MixArr = sum([1,-2,3,4]);
    expect(MixArr).toEqual(6);
})
// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test ("Get an array with decimal value,return the correct sum",() => {
    DecArr = sum ([1.5,1.6]);
    expect(DecArr).toEqual(3.1);
})
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test ("Get an array mixed with non-number & number value, add the number values ", () => {
    MixArr = sum (['a',1,2,3,'c']);
    expect(MixArr).toEqual(6);
})
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

test ("Get an array with all string values, return the array has no number message",() =>{
    StrArr = sum (['a','b','c']);
    expect(StrArr).toEqual('There is no numbers in this array');
})