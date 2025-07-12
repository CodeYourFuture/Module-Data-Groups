function findMax(elements) {
  if (elements.length === 0) {  // If the array is empty, return -Infinity
    return -Infinity;  
  }
  let max = -Infinity;  // Initialize max with the first numeric value found

  for (const element of elements) {
    if (typeof element === 'number') { // Check if the element is a number
      
      if (element > max) {
        max = element;
      }
    }
  }

  return max;
}

module.exports = findMax;
