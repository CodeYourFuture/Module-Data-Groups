  function findMax(array) {
    // Filter out non-numerical elements and ignore NaN values
    const numericalArray = array.filter(item => typeof item === 'number' && !isNaN(item));
    
    // If the array is empty (no numerical elements), return -Infinity
    if (numericalArray.length === 0) {
      return -Infinity;
    }
  
    // Find the maximum value in the numerical array
    return Math.max(...numericalArray);
}

module.exports = findMax;
