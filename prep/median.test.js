const { calculateMedian, calculateMean } = require("./median.js");
test("calculates the median of odd numbers", () => {
  const salaries = [10, 20, 30, 40, 60, 80, 80];
  const currentOutput = calculateMedian(salaries);
  const targetOutput = 40;

  expect(currentOutput).toEqual(targetOutput);
});

test("calculates the mean of a salaries", () => {
  const salaries = [10, 20, 30, 40, 60, 80, 80];
  const currentOutput = calculateMean(salaries);
  const targetOutput = 320 / 7;

  expect(currentOutput).toEqual(targetOutput);
});

test("calculates the median of even numbers", () => {
  const salaries = [10, 20, 30, 40, 60, 80];
  const currentOutput = calculateMedian(salaries);
  const targetOutput = 35;

  expect(currentOutput).toEqual(targetOutput);
});
