// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // first we sort list in asc order e.g [1,2,3,4,5,6....etc]
  list.sort((a,b) => a - b )

  // divide length by 2 to get middle num/indx
  const middleIndex = Math.floor(list.length / 2);
  // check for odd number
  if(list.length % 2 !== 0) {
    return list[middleIndex]
  } else {
    return (list[middleIndex -1] + list[middleIndex]) /2;

  }
 
}



module.exports = calculateMedian;
