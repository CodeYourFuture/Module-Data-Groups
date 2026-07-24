// Calculating a mean function to be created on mean.js
// test cases to be written on this file prior to creating the mean function.

test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});