// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const numbersOnly = list.filter((element) => typeof element === "number");
  numbersOnly.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbersOnly.length / 2);
  let middle = 0;
  if (numbersOnly.length === 0) {
    return null;
  }
  if (numbersOnly.length % 2 === 0) {
    middle = numbersOnly[middleIndex];
    return middle;
  } else {
    let oneDown = numbersOnly.length / 2 - 1;
    let oneUp = numbersOnly.length / 2;
    middle = (numbersOnly[oneDown] + numbersOnly[oneUp]) / 2;
    return middle;
  }
}
// const numbers = elements.filter((element) => typeof element === "number");
console.log(calculateMedian(["banana", 5, 3, "apple", 1, 4, 6, 2]));
module.exports = calculateMedian;
