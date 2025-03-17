// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

/*function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
   if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2; 
  } else {
    return list[middleIndex]; 
  }
}
console.log(calculateMedian([1,2,3,6,7,9]));
module.exports = calculateMedian;*/
function calculateMedian(list) {
  const sortedList = [...list].sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedList.length / 2);

  if (sortedList.length % 2 === 0) {
    return (sortedList[middleIndex - 1] + sortedList[middleIndex]) / 2;
  } else {
    return sortedList[middleIndex];
  }
}
console.log(calculateMedian([1,2,3,6,7,9]));
module.exports = calculateMedian;