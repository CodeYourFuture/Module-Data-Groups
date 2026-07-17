function findMax(elements) {
  let max = -Infinity; // Start with the smallest possible value.

  // loop
  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      // Check if the current element is a number and ignores strings, objects, null

      if (elements[i] > max) {
        // If it is bigger, update max with this new bigger number
        max = elements[i];
      }
    }
  }
  return max;
}

// Export the function so it can be used in the test file
module.exports = findMax;
