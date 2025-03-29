// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

const calculateMedian = require("./median.js");

describe("calculateMedian", () => {
  test("returns the median for odd length array", () => {
    expect(calculateMedian([1, 2, 3])).toEqual(2); // Odd length
    expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3); // Odd length
  });

  test("returns the average of middle values for even length array", () => {
    expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5); // Even length
    expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5); // Even length
  });

  test("doesn't modify the input", () => {
    const list = [1, 2, 3];
    calculateMedian(list);

    expect(list).toEqual([1, 2, 3]); // Verify input is unmodified
  });

  test("returns undefined for empty array", () => {
    expect(calculateMedian([])).toBeUndefined(); // Empty list case
  });

  test("returns undefined for undefined input", () => {
    expect(calculateMedian()).toBeUndefined(); // Undefined input case
  });
});



//const calculateMedian = require("./median.js");

//describe("calculateMedian", () => {
  //test("returns the median for odd length array", () => {
    //expect(calculateMedian([1, 2, 3])).toEqual(2);
    //expect(calculateMedian([1, 2, 3, 4, 5])).toEqual(3);
  //});

  //test("returns the average of middle values for even length array", () => {
    //expect(calculateMedian([1, 2, 3, 4])).toEqual(2.5);
    //expect(calculateMedian([1, 2, 3, 4, 5, 6])).toEqual(3.5);
  //});

  //test("doesn't modify the input", () => {
    //const list = [1, 2, 3];
    //calculateMedian(list);

    //expect(list).toEqual([1, 2, 3]);
  //});
//});

//=======> solution to the right codes to solve the issue is below

// median.js (the file containing calculateMedian)
function calculateMedian(list) {
  if (!list || list.length === 0) {
    return undefined;
  }

  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;
