// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  const numericValue = list.filter(n => typeof n === 'number' && !isNaN(n));
  if (numericalValue === 0) return null;
  numericValue.sort((a,b)=>a-b);

  const middleIndex = Math.floor(numericValue.length / 2);
  if (numericValue.length % 2===0){
    return(numericValue[middleIndex-1]+numericValue[middleIndex])/2;
   }
   else {
    return numericValue[middleIndex]
   }
  }

module.exports = calculateMedian;
