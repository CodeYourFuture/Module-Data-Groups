


function findMax(elements) {
  if (elements.length === 0) {
      return undefined; // Return undefined if the array is empty
  }

  // Initialize the max value as the first valid number
  let max = Number.NEGATIVE_INFINITY;  // Set a default max that will be smaller than any number

  for (let i = 0; i < elements.length; i++) {
      // Check if the current element is a number before comparing
      if (typeof elements[i] === 'number') {
          if (elements[i] > max) {
              max = elements[i]; // Update max if a larger number is found
          }
      } else {
          console.warn(`Non-numeric value encountered: ${elements[i]}`); // Warn about non-numeric values
      }
  }

  // Return undefined if no valid number was found
  return max === Number.NEGATIVE_INFINITY ? undefined : max;
}

module.exports = findMax;
