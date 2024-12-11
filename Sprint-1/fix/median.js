// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 == 0) {
    //to be able to handle an evenly lengthed list
    //need to extract the exact middle index and the one that comes right after it
    //DONT USE SPLICE IN THIS MANNER BECAUSE THE ARRAY IS ALTERED!!
    // const evenLengthMedian = l(list.splice(middleIndex, 1)[0] + list.splice(middleIndex+1, 1)[0]) / 2;

    const evenLengthMedian = (list[middleIndex] + list[middleIndex - 1]) / 2;
    return evenLengthMedian;
  }
  else {
    const oddLengthMedian = list[middleIndex];
    return oddLengthMedian;
  }
}

module.exports = calculateMedian;
