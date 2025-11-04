function findMax(elements) {
  // Filter out non-numerical elements and find max
  const numericalElements = elements.filter((item) => typeof item === "number");

  // Return max of numerical elements, or null if no numerical elements
  return numericalElements.length > 0
    ? Math.max(...numericalElements)
    : "-Infinity";
}

// Example usage
// console.log(findMax(["hey", 10, "hi", 60, 10])); // Output: 60

/* 
elements.filter(item => typeof item === 'number') creates a new array containing only numerical elements
typeof item === 'number' checks if each item is a number
Math.max(...numericalElements) spreads the numerical elements and finds the maximum
If no numerical elements exist, it returns null

 */

module.exports = findMax;
