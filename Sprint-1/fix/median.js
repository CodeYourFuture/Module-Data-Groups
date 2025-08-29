// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

module.exports = calculateMedian;

function calculateMedian(list) {

   //input: [1, 2, "3", null, undefined, 4], expected: 2 },
  // Return Null if not array
  if (!Array.isArray(list) || list.length === 0) {
    return null
  }
  

// Get an array with only numbers 
const numbersOnly = list.filter(item => typeof item === 'number' && Number.isFinite(item));
// Order the numbers array
const sorted = numbersOnly.sort((a, b) => a - b);

//console.log(sorted); // [1, 2, 3, 4]


if (numbersOnly.length === 0) {
  return null;
}


  // Take the middle number 
  const middleIndex = Math.floor(numbersOnly.length / 2);

  if (numbersOnly.length % 2 === 0) {
    // Even number of items: return average of two middle values
    return (numbersOnly[middleIndex - 1] + numbersOnly[middleIndex]) / 2;
  } else {
    // Odd number of items: return the middle value
    return numbersOnly[middleIndex];
  }
}

console.log("Array:", calculateMedian([3, "apple", 1, null, 2, undefined, 4]))

module.exports = calculateMedian;