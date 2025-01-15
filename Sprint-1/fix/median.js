// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory
//function calculateMedian(list) {
 // const middleIndex = Math.floor(list.length / 2);
  //const median = list.splice(middleIndex, 1)[0];
  //return median

//list.slice(): Creates a copy of the input list to avoid modifying the original.
//sort((a, b) => a - b): Sorts the copied list in ascending order.
//Calculates the middle index, rounding down for both even and odd-length lists.


/*function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b); 
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // Even length: average of two middle elements
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // Odd length: middle element
    return sortedList[middleIndex];
  }
};*/

function calculateMedian(list) {
  const sortedList = list.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    // Even length: average of two middle elements
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    // Odd length: middle element
    return sortedList[middleIndex];
  }
}

module.exports = calculateMedian;


