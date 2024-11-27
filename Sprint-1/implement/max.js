function findMax(elements) {
      // Filter the array to include only numbers
    const numbers = arr.filter(item => typeof item === 'number');
    
    // If there are no numbers in the array, return -Infinity
    if (numbers.length === 0) {
      return -Infinity;
    }
  
    // Return the largest number in the array
    return Math.max(...numbers);
  }
module.exports = findMax;
