// const { calculateMedian } = require("./median");
const calculateMedian = require("./median");


const calculateMean = require("./mean");
// const { calculateMean } = require("./mean");

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
})

test("calculates the median of an odd-length array", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMedian(list); // sorted = [3, 7, 50], median = 7
  const expectedOutput = 7;

  expect(currentOutput).toEqual(expectedOutput);
});

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 40];
  const currentOutput = calculateMedian(list);
  const targetOutput = 25;

  expect(currentOutput).toEqual(targetOutput);
}) 

// Both functions access the same array 
// because JavaScript passes objects and 
// arrays by reference — they all point to the same memory location.

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
const mean = calculateMean(salaries);
console.log(salaries, "<--- salaries input before we call calculateMean");
console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);





