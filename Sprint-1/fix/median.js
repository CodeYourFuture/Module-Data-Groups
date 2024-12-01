// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  let median;
  if(list.length%2===1){
  const middleIndex = Math.floor(list.length / 2);
  //median = list.splice(middleIndex, 1)[0];
  median=list[middleIndex];
}
  else 
  {
    const middleIndex = list.length / 2;
    median = (list[middleIndex - 1] + list[middleIndex]) / 2;
  }


  return median;
}

module.exports = calculateMedian;
