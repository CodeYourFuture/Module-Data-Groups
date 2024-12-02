// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {

  // 〰️ Create a copy of the input list to avoid modifying the original array
  const copiedList = [...list];

  // 〰️ Calculate the index of the middle element
  const middleIndex = Math.floor(copiedList.length / 2)

  // 〰️ If the list length is odd, return the middle element
  if (copiedList.length % 2 === 1) {
    const median = copiedList.splice(middleIndex, 1)[0];
    return median;
  }

  // 〰️ If the list length is even, calculate the average of the two middle elements
  const median1 = copiedList[middleIndex]
  const median2 = copiedList[middleIndex -1] 
  return (median1 + median2) / 2;
}

console.log(calculateMedian([1, 2, 3, 4, 5, 6]));
console.log(calculateMedian([1, 2, 3, 4, 5]));

module.exports = calculateMedian;
