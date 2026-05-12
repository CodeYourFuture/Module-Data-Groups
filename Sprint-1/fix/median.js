// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) {return null;} 
  let numberArray = list.filter(n => Number.isFinite(n))
  if (numberArray.length == 0) {return null};
  numberArray.sort((a, b) => a - b)

  if (numberArray.length % 2 == 1) {return numberArray[((numberArray.length - 1) / 2)]}
  else {return (numberArray[((numberArray.length / 2))] + numberArray[((numberArray.length / 2) - 1)]) / 2}
}

module.exports = calculateMedian;
