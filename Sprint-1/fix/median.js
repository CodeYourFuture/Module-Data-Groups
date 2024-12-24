// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// First, we create a copy of the input list using the spread operator [...list].
// This ensures we don’t accidentally change the original list.

function calculateMedian(list) {

// First, we create a copy of the input list using the spread operator [...list].
// This ensures we don’t accidentally change the original list.
  const sortedList = [...list].sort((a, b) => a-b)

// We calculate the middle index of the list to find where the median would be.
  const middleIndex = Math.floor(list.length/2);

  let median; // Variable to store the median value.

// Now we check if the list has an odd or even number of elements:
  if(list.length % 2 !== 0){
    // If the list length is odd, the median is the middle element in the sorted list.
     median = sortedList[middleIndex];
  }else{
    // If the list length is even, the median is the average of the two middle elements.
     median = ((sortedList[middleIndex]+sortedList[middleIndex -1])/2);
  }

  return median;

}

module.exports = calculateMedian;

console.log(calculateMedian([1, 5, 3, 67, 45]));
