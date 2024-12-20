const calculateMode = require("./mode.js");

// Acceptance criteria for calculateMode function

// Given an array of numbers
// When calculateMode is called on the array
// Then it should return the number that appears most frequently in the array

// Example:
// Given [2,4,1,2,3,2,1]
// When calculateMode is called on [2,4,1,2,3,2,1]
// Then it should return 2 */



  test("returns the most frequent number in an array", () => {
    const nums = [2, 4, 1, 2, 3, 2, 1];
    expect(calculateMode(nums)).toEqual(2);  
  });

  test("returns the first mode in case of multiple modes", () => {
    const nums = [1, 2, 2, 3, 3];
    expect(calculateMode(nums)).toEqual(2);  
  });


  test("returns NaN for an empty array", () => {
    const nums = [];
    expect(calculateMode(nums)).toBeNaN();  
  });

  test("returns the mode when all numbers are the same", () => {
    const nums = [5, 5, 5, 5];
    expect(calculateMode(nums)).toEqual(5); 
  });

  test("returns NaN when there are no valid numbers", () => {
    const nums = ["a", "b", null, undefined];
    expect(calculateMode(nums)).toBeNaN();  
  });

