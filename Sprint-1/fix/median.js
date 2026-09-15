// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' isn't an array, is empty,
// or contains values that aren't numbers (the function is expected to throw - see the tests).

function calculateMedian(list) {
  if (!Array.isArray(list)){
    return null;
  }
  const numbersOnly = list.filter(item => typeof item === "number");
  if (numbersOnly.length === 0){
    return null;
  }
  numbersOnly.sort((a,b)=>a-b)

  const middleIndex = Math.floor(numbersOnly.length / 2);
  if (numbersOnly.length % 2 === 0){
    return (numbersOnly[middleIndex-1] + numbersOnly[middleIndex])/2;
  } else {
    return numbersOnly[middleIndex];
  }
  const median = numbersOnly.splice(middleIndex, 1)[0];
  return median;
 
}

module.exports = calculateMedian;
