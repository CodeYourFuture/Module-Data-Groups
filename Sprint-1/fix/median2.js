// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

function calculateMedian(list) {
  let newList = list.slice();
  const middleIndex = Math.floor(newList.length / 2);
  newList.sort((a, b) => a - b);
  // const median = newList.splice(middleIndex, 1)[0];
  if (newList.length % 2 === 1) {

    return newList[middleIndex];
  } else {
    
    return (newList[middleIndex - 1] + newList[middleIndex]) / 2;
  }
  
}

console.log(calculateMedian([1, 3, 2])); // 2
console.log(calculateMedian([1, 2, 3, 4])); // 2.5

module.exports = calculateMedian;
