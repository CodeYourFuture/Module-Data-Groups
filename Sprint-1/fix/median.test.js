// median.test.js

// Someone has implemented calculateMedian but it isn't
// passing all the tests...
// Fix the implementation of calculateMedian so it passes all tests

function calculateMedian(list) {
  // return null if input is not an array
  if (!Array.isArray(list)) {
    return null;
  }

  // filter only numbers, using a copy to avoid modifying the original
  const numbers = list.filter(item => typeof item === "number");

  // return null if no numbers found
  if (numbers.length === 0) {
    return null;
  }

  // sort the numbers
  numbers.sort((a, b) => a - b);

  const middleIndex = Math.floor(numbers.length / 2);

  // if even number of elements, average the two middle values
  if (numbers.length % 2 === 0) {
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  }

  return numbers[middleIndex];
}

module.exports = calculateMedian;
