// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// this code can't handle even-length list as its removes and returns one middle element
// we need to check the list length if its even or odd
// for even length list return the average of the 2 middle 

/*
function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  const median = list.splice(middleIndex, 1)[0];
  return median;
} */

function calculateMedian(list){
  // list.sort((a, b) => a - b); (if I needed to sort the list)

  const middleIndex = Math.floor(list.length / 2);

  if (list.length % 2 === 0){
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  } else {
    return list[middleIndex];
  }

}

module.exports = calculateMedian;
