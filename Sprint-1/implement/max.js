function findMax(elements) {
  /*
Here we check if the input is actually an array and checks whether the array is empty. 
If the array is not an array or the array is empty then it returns -Infinity. 
*/
  if (!Array.isArray(elements) || elements.length === 0) return -Infinity;

  /*
next we assign a new variable "max" with the value -Infinity (which is the lowest possible value) rather than 0, as there may be a zero or negative numbers in the array.
This ensures that any number in the array will be greater than -Infinity, allowing us to find the maximum value correctly.
Next we loop through each element in the array and check if the element is a number and not NaN.
If this is the case, we compare the current element with the current maximum value and update the maximum value if the current element is greater using Math.max.
If the element is not a number or is NaN, it is ignored and max remains unchanged.
Then we return max, which will be the largest number found in the array or -Infinity if no valid numbers were found.
*/
  let max = -Infinity;
  for (const element of elements) {
    if (typeof element === "number" && !isNaN(element)) {
      max = Math.max(max, element);
    }
  }
  return max;
}

module.exports = findMax;
