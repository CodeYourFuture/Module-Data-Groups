// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // validate the array 
  if (!Array.isArray(list)){
    return null;
  }
  // keep only the real number by filtering the array( excluding string, null, undefined )
  const numbersOnly = list.filter((item) => typeof item === 'number')
  // after filtering return null if nothing is valid 
  if (numbersOnly.length === 0){
    return null ;
  }
  const sorted =[...numbersOnly].sort((a,b) => a-b)
  const middleIndex = Math.floor(sorted.length / 2)

  
  if (sorted.length %2 == 0){
    return (sorted[middleIndex-1] + sorted[middleIndex])/2;
  }else{
    return sorted[middleIndex]
  }
  
  
  
  
}

module.exports = calculateMedian;
