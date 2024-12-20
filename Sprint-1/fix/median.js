// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {

  // [...list] creates a new list which is copy of the list input
  const sortedList = [...list].sort((a, b) => a-b)

  const middleIndex = Math.floor(list.length/2);

  let median;

  if(list.length % 2 !== 0){
     median = sortedList[middleIndex];
  }else{
     median = ((sortedList[middleIndex]+sortedList[middleIndex -1])/2);
  }

  return median;

}

module.exports = calculateMedian;

console.log(calculateMedian([1, 5, 3, 67, 45]));
