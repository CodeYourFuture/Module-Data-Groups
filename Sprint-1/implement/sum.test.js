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
it("Given an empty array", () => {
    const list = [];
    const result = sum(list);
    expect(result).toEqual(0);  
  });


// Given an array with just one number
// When passed to the sum function
// Then it should return that number
it("Given an array with just one number", () => {
    const list = [1];
    const result = sum(list);
    expect(result).toEqual(1);  
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum
it("Given an array containing negative numbers", () => {
    const list = [1, -1, -2, 5];
    const result = sum(list);
    expect(result).toEqual(3);  
  });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum
  it("Given an array with decimal/float numbers", () => {
    const list = [1, 1.2, -5.2, 5];
    const result = sum(list);
    expect(result).toBeCloseTo(2, 5);  // Use tolerance for floating point comparison
  });
  
// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements
it("Given an array containing non-number values", () => {
    const list = [1, 2.2, -5.2, 5, "Jesus", null];
    const result = sum(list);
    expect(result).toBeCloseTo(3, 5);  
  });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs
it("Given an array with only non-number values, return the least surprising value given how it behaves for all other inputs", () => {
    const list = ["London", "Hello", "CYF" , "Zebra"];
    const result = sum(list);
    expect(result).toEqual(0);
  });

  it("Given an array with only one non-number values, return 0", () => {
    const list = ["A"];
    const result = sum(list);
    expect(result).toEqual(0);
  });