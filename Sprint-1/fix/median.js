// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  if (list.length % 2 === 0){
    let middleIndex = (list.length / 2);
    console.log(middleIndex);
    median = list.splice(middleIndex, 1)[0];
  }
  else
  {  
    let middleIndex = (list.length / 2);
    median = list.splice(middleIndex, 1)[0];
  }
  return median;
}

module.exports = calculateMedian;
