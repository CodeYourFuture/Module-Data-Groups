const calculateMean = require("./mean");

describe("Mean Calculation Tests", () => {
  test.only("The test fails", () => {
    const list = [3, 50, 7];
    const currentOutput = calculateMean(list);
    const targetOutput = 20;
    

    expect(currentOutput).toBe(targetOutput); // 20 is (3 + 50 + 7) / 3
  });
});
