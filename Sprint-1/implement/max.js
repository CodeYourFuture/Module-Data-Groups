;
function findMax(arr) {
    // Filter out non-numerical values and find the maximum number
    const numbers = arr.filter(item => typeof item === 'number');
    
    // Return -Infinity if there are no numbers in the array
    if (numbers.length === 0) {
      return -Infinity;
    }
  
    // Return the maximum value in the array
    return Math.max(...numbers);
  }
  
  module.exports = findMax;
  