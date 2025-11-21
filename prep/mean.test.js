test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});

// In this test, we’re checking we get a value of 20 by adding together 3 + 50 + 7 and then dividing by the number of items (3).
// We calculate the mean of a list of numbers by:
// summing the numbers in the array.
// dividing the sum by the length of the array.
