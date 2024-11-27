function findMax(arr) {
    // Filter the array to include only finite numbers
    const numbers = arr.filter(item => typeof item === 'number' && Number.isFinite(item));
  
    console.log(numbers); // Debug: log the filtered numbers to see what's inside
    
    // If there are no numbers in the array, return -Infinity
    if (numbers.length === 0) {
      return -Infinity;
    }
  
    // Return the largest number in the array
    return Math.max(...numbers);
  }
  
  module.exports = findMax;
  