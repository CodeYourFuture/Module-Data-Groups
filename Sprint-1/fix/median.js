// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  let sortedList = list.sort();
  if (sortedList.length % 2 !== 0) {
    const middleIndex = Math.floor(sortedList.length / 2);
    const median = sortedList[middleIndex];
    return median;
  } else {
    const afterMiddleIndex = Math.floor(sortedList.length / 2);
    console.log("afterMiddleIndex", afterMiddleIndex);
    const secondMedian = sortedList[afterMiddleIndex];
    console.log("secondMedian", secondMedian);

    const beforeMiddleIndex = Math.floor(sortedList.length / 2) - 1;
    console.log("beforeMiddleIndex", beforeMiddleIndex);
    const firstMedian = sortedList[beforeMiddleIndex];
    console.log("firstMedian", firstMedian);
    return average(secondMedian, firstMedian);
  }
}

function average(num1, num2) {
  return (num1 + num2) / 2;
}

//console.log(calculateMedian([12,42,73,94]))
module.exports = calculateMedian;
