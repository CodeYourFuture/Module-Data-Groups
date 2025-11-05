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
test.todo("given an empty array, returns 0");
test(     "given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test.todo("Given an array with just one number, return that number");
test(     "Given an array with just one number, return that number", () => {
    expect(sum([4] )).toEqual(4 );
    expect(sum([99])).toEqual(99);
    expect(sum([81])).toEqual(81);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test.todo("Given an array containing negative numbers, return the correct total sum");
test(     "Given an array containing negative numbers, return the correct total sum", () => {
    expect(sum([-81, -4, 44, -12])).toEqual(-53);
    expect(sum([-10, 20, -30, 40])).toEqual(20);
    expect(sum([-5, -15, -10])).toEqual(-30);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test.todo("Given an array with decimal/float numbers, return the correct total sum");
test(     "Given an array with decimal/float numbers, return the correct total sum", () => {
    expect(sum([0.5, 2.5, 3.5])).toEqual(6.5);
    expect(sum([1.1, 2.2, 3.3])).toEqual(6.6);
    expect(sum([10.5, 20.25, 30.75])).toEqual(61.5);
});

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test.todo("Given an array containing non-number values, ignore them and return the sum of the numerical elements");
test(     "Given an array containing non-number values, ignore them and return the sum of the numerical elements", () => {
    expect(sum(['hey', 10, 'hi', 60, 10])).toEqual(80);
    expect(sum([null, 5, undefined, 15, 'test'])).toEqual(20);
    expect(sum([true, 20, false, 30, 'hello'])).toEqual(50);
});
// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test.todo("Given an array with only non-number values, returns 0");
test(     "Given an array with only non-number values, returns 0", () => {
    expect(sum(['a', 'b', 'c'])).toEqual(0);
    expect(sum([null, undefined, 'test'])).toEqual(0);
    expect(sum([true, false, 'hello'])).toEqual(0);
});
