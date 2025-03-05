// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests



describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2);
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]);
  });
});


function calculateMedian(arr) {
  // Sort the array in ascending order
  const sortedArr = [...arr].sort((a, b) => a - b);  // Avoid mutating the input
  
  const length = sortedArr.length;
  
  // If the length is odd, return the middle element
  if (length % 2 === 1) {
    return sortedArr[Math.floor(length / 2)];
  }
  
  // If the length is even, return the average of the two middle elements
  const mid1 = sortedArr[length / 2 - 1];
  const mid2 = sortedArr[length / 2];
  
  // Debug log: print values of mid1 and mid2 for clarity
  console.log("mid1:", mid1, "mid2:", mid2);
  
  return (mid1 + mid2) / 2;
}

module.exports = calculateMedian;
