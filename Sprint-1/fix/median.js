// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  list = list.filter((element) => typeof element === "number");
  if (list.length === 0) {
    return null;
  } else {
    list.sort((a, b) => a - b);
    const middleIndex = Math.floor(list.length / 2);
    if (list.length % 2 === 0) {
      return (list[middleIndex - 1] + list[middleIndex]) / 2;
    } else {
      return list[middleIndex];
    }
  }
}
// const numbers = elements.filter((element) => typeof element === "number");
console.log(calculateMedian(["banana", 5, 3, "apple", 1, 4, 6, 2]));
module.exports = calculateMedian;
