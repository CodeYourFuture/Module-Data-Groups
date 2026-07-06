function findMax(elements) {
  // return -Infinity for empty array or if array only contains non-numbers
  // filter, sort array in ascending order and return last value in the array
  // array with one number - return one number
  // array with positive and negative numbers, return largest number
  // array with negative numbers return the one closest to zero
  // array with decimal numbers return the one with the largest decimal
  // mixed array - ignore non-numbers and return largest number

  // filter to return only numbers or an empty array
  const numbers = elements.filter((item) => Number.isFinite(item));
  // if numbers present in array return largest number or return -Infinity for empty array
  return numbers.length ? Math.max(...numbers) : -Infinity;
}

module.exports = findMax;
