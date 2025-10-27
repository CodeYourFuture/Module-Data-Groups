const calculateMedian = require("./median");

test("Calculate the median of the list of numbers", () => {
  const list = [10, 20, 30, 40, 50];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

test("should not modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]);
});

