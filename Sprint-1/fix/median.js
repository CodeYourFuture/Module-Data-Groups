// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) { 
  // [ 'not an array', 123, null, undefined, {}, [], ["apple", null, undefined] ]
  if (typeof list === 'string') {
    return null
  }
   if (typeof list === 'number') {
    return null
  }
  
   if (list === null) {
    return null 
   }
  if (typeof list === 'undefined') {
    return null 
  }

   if (list === undefined) {
    return null 
  }
  if (typeof list === 'object' && !Array.isArray(list)) {
    return null 
  }
  if (Array.isArray(list) && list.length === 0){
    return null
  }
   list = list.filter(element => typeof element === 'number');
   if (list.length === 0) {
    return null 
   }
   list.sort((a, b) => a - b);

  if (list.length % 2 === 0){
    const middleIndexR = Math.floor(list.length / 2);
    const middleIndexL = middleIndexR - 1 
   const evenMedian = (list[middleIndexL] + list[middleIndexR]) / 2;
   
   return evenMedian
  } else {
    const middleIndex = Math.floor(list.length / 2);
  const median = list[middleIndex];
  return median; 
  }
  
}

calculateMedian(['apple'])

module.exports = calculateMedian;
