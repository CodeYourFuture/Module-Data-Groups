// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {

  // 〰️ Create a copy of the input list to avoid modifying the original array
  const copiedList = [...list].sort((a, b) => a - b); // 〰️ Ensure the list is sorted

  // 〰️ Calculate the index of the middle element
  const middleIndex = Math.floor(copiedList.length / 2)

  // 〰️ If the list length is odd, return the middle element
  if (copiedList.length % 2 === 1) {
    return copiedList[middleIndex]; // 〰️ Directly access the middle element;
  }

  // 〰️ If the list length is even, calculate the average of the two middle elements
  return (copiedList[middleIndex] + copiedList[middleIndex - 1]) / 2; 
}

console.log(calculateMedian([1, 2, 3, 4, 5, 6]));
console.log(calculateMedian([1, 2, 3, 4, 5]));
console.log(calculateMedian([1, 2, 6, 5, 4, 3]));
console.log(calculateMedian([1, 2, 5, 4, 3]));

module.exports = calculateMedian;
