// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b);
  // sort array to calculate the median number, add '(a, b) => a - b' function as a parameter because we need to sort numbers. By default, the sort method converts elements to strings.
  
  if (sortedList.length % 2 === 0) {
    // calculate the median if the length of the array is even.
    const indexMedianNum1 = sortedList.length / 2 - 1;
    // find the index of the first number for median calculation.
    const indexMedianNum2 = sortedList.length / 2;
    // find the index of the second number for median calculation.
    const medianEven = (sortedList[indexMedianNum1] + sortedList[indexMedianNum2]) / 2;
    // calculate the median by adding 2 central numbers and dividing the sum by 2.
    return medianEven;
  } else {
    // calculate the median if length of the array is odd.
    const medianOdd = sortedList[Math.floor(sortedList.length / 2)];
    // calculate the median by finding the index of the median (dividing the length of the array by 2 and rounding down the result).
    return medianOdd;
  }   
}

module.exports = calculateMedian;
