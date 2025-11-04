// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) { 
  let newList = 0;

  // validate input
  if (list === null || !Array.isArray(list) || !list[0])
    return null;

  // filter out non-numeric values inside the list
  list = list.filter(item => Number.isFinite(item));

  // to avoid dealing with empty arrays
  if (list.length === 0)
    return null;

  // sort the list
  list.sort((a, b) => a - b);

  if ( list.length % 2 == 0 ) { // even
    // return the sum of the two middle numbers divided by 2
    const middleIndex = list.length / 2;
    newList = list[middleIndex - 1] + list[middleIndex];
    newList = newList / 2;
    return newList;
  } // else will be odd
  
  // just return the middle number
  newList = list[Math.floor(list.length / 2)];

  return newList;
}

console.log(calculateMedian(["apple", null, undefined]));
module.exports = calculateMedian;
