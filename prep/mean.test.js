/*
test("does something as described below", () => {   
    // test implementation goes here    
});


*/
//mean.test.js
const mean = require("./mean"); // Import the mean function from mean.js
test("calculates the mean of a list of numbers", () => {
  expect(mean([3, 50, 7])).toBe(20); // 20 is (3 + 50 + 7) / 3
  expect(mean([4.6, 5.03, 7.99, 8.01])).toBeCloseTo(6.4075); // 6.4075 is (4.6 + 5.03 + 7.99 + 8.01) / 4
  expect(mean([10, 20, 30, 40, 50])).toBe(30); // 30 is (10 + 20 + 30 + 40 + 50) / 5
  expect(mean([1, 2, 3, 4, 5, 6])).toBe(3.5); // 3.5 is (1 + 2 + 3 + 4 + 5 + 6) / 6
});
/*
The expect statement is used to create an assertion that checks if the output of the mean function matches the expected value.
test("calculates the mean of a list of numbers", () => {
  const list = [3, 50, 7];
  const currentOutput = calculateMean(list);
  const targetOutput = 20;

  expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});

*/
