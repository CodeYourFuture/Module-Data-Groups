// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return null;
  } //to handle invalid input
  const sorted= [...list].sort((a, b) => a - b); //sort ascending order

  const numbers = list.filter(item => typeof item === 'number');
  const middle= Math.floor(sorted.length / 2);
if(sorted.length % 2 === 0){
    const median = (sorted[middle - 1] + sorted[middle]) / 2;
    return median;
}else{
    return sorted[middle];
} 
}

module.exports = calculateMedian;
