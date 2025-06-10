// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
    if (!Array.isArray(list)) return null;
     if (list.length === 0) return null;

  const numberOnly = list.sort().filter(element=>typeof element === "number")
       if (numberOnly.length === 0) return null;

  if(numberOnly.length % 2 ===0){
const middleIndexsSum = numberOnly.splice((numberOnly.length/2-1),2).reduce((sum,element)=>sum + element,0) 
const median = middleIndexsSum/2
return median
  }
const middleIndex = Math.floor(numberOnly.length / 2);
  const median = numberOnly.splice(middleIndex, 1)[0];
  return median;
}


module.exports = calculateMedian;
