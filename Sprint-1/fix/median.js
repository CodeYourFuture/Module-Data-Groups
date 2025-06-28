// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list))return null;
  
  list = list.filter((value) => typeof value === "number" && Number.isFinite(value));
  if (list.length === 0) return null;


  list.sort((a, b) => a - b);
  const mid = Math.floor(list.length / 2);

if (list.length % 2 === 0) {
  return (list[mid -1] + list[mid]) /2;
}
  else 
      return list[mid] ; 
        
}

module.exports = calculateMedian;
