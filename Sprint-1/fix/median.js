// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  // const oddMiddleIndex = Math.floor(list.length / 2);
  // const oddMedian = list.splice(oddMiddleIndex, 1)[0];
  const middleIndex = Math.floor(list.length / 2);
  // const evenMiddleIndex = list.length / 2;
  // const evenMedian = ((list.splice(evenMiddleIndex -1 ,1)[0]) + (list.splice(evenMiddleIndex ,1)[0])) / 2;
  if (list.length % 2 === 1) return middleIndex ;
  else return (list[middleIndex - 1] + list[middleIndex]) / 2;
};


module.exports = calculateMedian;

console.log(calculateMedian([1, 2, 3, 4, 5]));
console.log(calculateMedian([1, 2, 3, 4, 5, 6]));
console.log(calculateMedian([1, 2, 3, 4]));
console.log(calculateMedian([1, 2, 3]));