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

describe("sum function", ()=>{
    it("returns 0 for an empty array", () =>{

      expect(sum([])).toBe(0);

    });

// Given an array with just one number
// When passed to the sum function
// Then it should return that number

it("returns that number for a single-element array", ()=>{

    expect(sum([42])).toBe(42);
    
  });

// Given an array containing negative numbers
// When passed to the sum function
// Then it should still return the correct total sum

it("sums negative numbers correctly", ()=>{

    expect(sum([-1, -2, -3])).toBe(-6);

    expect(sum([5, -3, 2])).toBe(4);

  });

// Given an array with decimal/float numbers
// When passed to the sum function
// Then it should return the correct total sum

it("sums decimal numbers correctly", () =>{

    expect(sum([1.5, 2.5, 3])).toBe(7);

    expect(sum([0.1, 0.2, 0.3])).toBeCloseTo(0.6);

  });

// Given an array containing non-number values
// When passed to the sum function
// Then it should ignore the non-numerical values and return the sum of the numerical elements

it("ignores non-numbers and sums only numerical elements", () =>{

    expect(sum(["hi", 10, "hey", 20])).toBe(30);

    expect(sum([1, "apple", 2, null, 3])).toBe(6);

  });

// Given an array with only non-number values
// When passed to the sum function
// Then it should return the least surprising value given how it behaves for all other inputs

it("returns 0 if there are no numerical elements", () =>{

    expect(sum(["apple", null, undefined, "banana"])).toBe(0);

  });
});