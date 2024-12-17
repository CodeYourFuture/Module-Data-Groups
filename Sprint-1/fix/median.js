// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  //to sort the array first slice the original array
  //.sort in JS compares to elements against each other
  //when subtraction is performed on them positive values remain first in line
  //negative values go to the back
  const sortedList = list.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(list.length / 2);
  if (sortedList.length % 2 == 0) {
    //to be able to handle an evenly lengthed list
    //need to extract the exact middle index and the one that comes right after it
    //DONT USE SPLICE IN THIS MANNER BECAUSE THE ARRAY IS ALTERED!!
    // const evenLengthMedian = l(list.splice(middleIndex, 1)[0] + list.splice(middleIndex+1, 1)[0]) / 2;

    const evenLengthMedian = (sortedList[middleIndex] + sortedList[middleIndex - 1]) / 2;
    return evenLengthMedian;
  }
  else {
    const oddLengthMedian = sortedList[middleIndex];
    return oddLengthMedian;
  }
}

module.exports = calculateMedian;
