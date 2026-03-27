const calculateMean = require("./mean.js");

test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});

test("calculates the mean of a list of numbers", () => {
  const list = [0];
  const currentOutput = calculateMean(list);
  const targetOutput = 0;

  expect(currentOutput).toEqual(targetOutput); 0
});
