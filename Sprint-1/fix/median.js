// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)){ //check if variable is array
    return null;
  }
  const numbersOnly = list.filter(item => typeof item === "number" && !isNaN(item));
  if (numbersOnly.length == 0){
    return null;
  }
  const sorted =[...numbersOnly].sort((a,b) => a-b ); //we created a new arrey where we saved sorted element (as string) and turned them to numbers.
  
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0){ //for odds length of arrey
    return sorted[middleIndex]
  }
  else{
    return (sorted[middleIndex -1] + sorted[middleIndex]) / 2; //for even length of arrey
  }
}

module.exports = calculateMedian;
