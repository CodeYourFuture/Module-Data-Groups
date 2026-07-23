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
test("given an empty array,when passed to the sun function it returns 0",()=>
    {expect(sum([])).toBe(0);

});

// Given an array with just one number
// When passed to the sum function
// Then it should return that number
test("Test case 2: given an array with just one number ,when passed to the sun function it returns that  number", () => {
  expect(sum([5])).toBe(5);
});

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
test("Test case 3: given an array containing negative number ,when passed to the sun function it returns the correct total sum ", () => {
  expect(sum([-5,-3,-8])).toBe(-16);
});

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
describe("Test case 4: given an array containing decimal/float numbers ,when passed to the sun function it returns the correct total sum ", () => {
    [
      { input: [1.1, 2.2, 3.3], expected: 6.6 },
      { input: [-1.1, -2.2, -3.3], expected: -6.6 },
    ].forEach(({ input, expected }) => it(`returns the correct total sum for [${input}]`,()=>{
      expect(sum(input)).toBeCloseTo(expected);

    }));
  
});


// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

test("Test case 5: given an array containing both numeric and non-numeric  values ,when passed to the sun function it returns the  sum of the numeric elements and ignore the non-numerical value  ", () => {
  expect(sum(["Toby", 6, "undefine","NaN",10, 11])).toBe(27);
});

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
