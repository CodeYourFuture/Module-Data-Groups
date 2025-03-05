/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/


// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test.todo("given an empty array, returns -Infinity");

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs




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
