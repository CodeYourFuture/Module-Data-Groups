const calculateMean = require("./mean");

test("Calculate the average of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20; // 20 is (3 + 50 + 7) / 3
  
  expect(currentOutput).toEqual(targetOutput);
});
