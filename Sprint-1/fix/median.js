// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  const sortedArray = [...list].sort((a, b) => a - b)
  const median = Math.floor(sortedArray.length / 2)
  if(sortedArray.length % 2 === 0) return (sortedArray[median -1]+ sortedArray[median])/2
  else return sortedArray[median]


}

console.log(calculateMedian([7, 2, 6, 9]))
module.exports = calculateMedian;
