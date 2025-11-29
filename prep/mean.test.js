test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput);
});

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

test("doesn't modify the input", () => {
  const list = [1, 2, 3];
  calculateMedian(list);

  expect(list).toEqual([1, 2, 3]); // Note that the toEqual matcher checks the values inside arrays when comparing them - it doesn't use `===` on the arrays, we know that would always evaluate to false.
});
