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
test("given an empty array, returns 0", () => {
    expect(sum([""])).toEqual(0);
});

test("given an empty array, returns 0", () => {
    expect(sum([])).toEqual(0);
});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("given an array with just one number, then it should return that number", () => {
expect(sum([2])).toEqual(2);
}
);

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("given an array containing negative numbers, then it should return the correct sum", () => {
    expect(sum([-2,-2-9-10-2,])).toEqual(-25);
    }
    );

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
test("given an array with decimal/float numbers, then it should return the correct sum", () => {
    expect(sum([1.25,1.75,1.6])).toEqual(4.6);
    }
    );

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
test("given an array with non numerical values, then it should return the sum of the numerical elements", () => {
    expect(sum([2,3,undefined,"c"])).toEqual(5);
    }
    );

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, it should return the least surprising value", () => {
    expect(sum([2])).toEqual(2);
});

