
const calculateMedian = require("./median");

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toBe(targetOutput);
});
