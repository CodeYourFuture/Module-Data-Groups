// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length ===0) {
    return null
  }
  const onlyNumbers = list.filter(item => typeof item  === "number" &&  !isNaN(item))
  if (onlyNumbers.length === 0) {
    return null
  }
  const sortedList = [...onlyNumbers].sort((a,b) => a - b)
  const middleIndex = Math.floor(sortedList.length / 2);
  if (sortedList.length % 2 === 0) {
    const median1 = sortedList[middleIndex - 1]
    const median2 = sortedList[middleIndex]
    return (median1 + median2)/2
  } else {
    const median = sortedList[middleIndex]
    return median
  }
}


console.log(calculateMedian([1, 2, 3]))
console.log(calculateMedian([1, 2, 3, 4, 5]))
console.log(calculateMedian([1, 2, 3,4]))
console.log(calculateMedian([3, 1, 2]))
console.log(calculateMedian([5, 1, 3, 4, 2]))
console.log(calculateMedian([4, 2, 1, 3]))
console.log(calculateMedian([6, 1, 5, 3, 2, 4]))
console.log(calculateMedian([1, 2, "3", null, undefined, 4]))
console.log(calculateMedian(["apple", 1, 2, 3, "banana", 4]))
console.log(calculateMedian([1, "2", 3, "4", 5]))
console.log(calculateMedian([1, "apple", 2, null, 3, undefined, 4]))
console.log(calculateMedian([3, "apple", 1, null, 2, undefined, 4]))
console.log(calculateMedian(["banana", 5, 3, "apple", 1, 4, 2]))


module.exports = calculateMedian;

