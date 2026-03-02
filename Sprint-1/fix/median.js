// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  let newOrder = list;
  let i = 0;
  while (i < newOrder.length) {
    if (typeof newOrder[i] !== "number") newOrder.splice(i, 1);
    else i++;
  }
  if (newOrder.length === 0) {
    return null;
  }
  newOrder = list.sort((a, b) => a - b);
  const middleIndex = Math.floor(newOrder.length / 2);
  if (newOrder.length % 2 !== 0) {
    return newOrder[middleIndex];
  } else {
    const middleTwo = (newOrder[middleIndex] + newOrder[middleIndex - 1]) / 2;
    return middleTwo;
  }
}
module.exports = calculateMedian;
console.log(calculateMedian([110, 20, 0]));
console.log(calculateMedian([3, "apple", 1, 2, undefined, 4]));
console.log(calculateMedian([]));
