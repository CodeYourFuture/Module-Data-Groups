// Let’s consider a problem where we calculate the mean of a list of numbers.

// Given an array of numbers
// When we call calculateMean with the array of numbers
// Then we get the mean.

const calculateMean = require('./median');

test("calculates the mean of a list of numbers", () => {
    const list = [3, 50, 7];
    const currentOutput = calculateMean(list);
    const targetOutput = 20;
    
    expect(currentOutput).toEqual(targetOutput); // 20 is (3 + 50 + 7) / 3
});
