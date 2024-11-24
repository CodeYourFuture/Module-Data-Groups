function findMax(elements) {
    // Filter the array to only include numeric values
    const numericElements = elements.filter((item) => typeof item === "number");
  
    // Return -Infinity if the array is empty
    if (numericElements.length === 0) {
      return -Infinity;
    }
  
    // Find and return the maximum number in the numeric elements
    return Math.max(...numericElements);
  }
  
  module.exports = findMax;
  
      