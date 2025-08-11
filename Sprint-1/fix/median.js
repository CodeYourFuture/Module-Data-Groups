// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
    if (!Array.isArray(list)) return null;
     if (list.length === 0) return null;

  const numberOnly = list
        .filter(element=>typeof element === "number" && !Number.isNaN(element))
        .sort((a,b)=>(a-b))
       if (numberOnly.length === 0) return null;

  const middleIndex = Math.floor(numberOnly.length / 2);
    if(numberOnly.length % 2 === 0){
  const median = (numberOnly[middleIndex - 1]+  numberOnly[middleIndex]) / 2;
  return median;
    }else{
    return numberOnly[middleIndex]
    }
}
module.exports = calculateMedian;
