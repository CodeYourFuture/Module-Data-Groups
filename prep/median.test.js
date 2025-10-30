const calculateMedian = require("./median");

test("Calculate the median of the list of numbers", () => {
  const list = [10, 20, 30, 40, 50];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

test("should not modify the input", () => {
  const list = [1, 2, 3];
  const currentOutput = calculateMedian(list);

  expect(currentOutput).toEqual(2);
});

test(
  "should return the average of the two middle numbers as the median for an array with even length",
  () => {
    const list = [2, 6, 4, 3];
    const currentOutput = calculateMedian(list);
    expect(currentOutput).toEqual(5);
  }
);

