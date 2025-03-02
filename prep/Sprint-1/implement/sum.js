function sum(elements) {
  if (!Array.isArray(elements)) {
    return 0; // Array.isArray checks if "elements" is an array and if the function is called with something other than an array, it returns 0
  }
  function isNumber(value) {
    return typeof value === "number"; // checks if an item from the array is a type of number
  }
  elements = elements.filter((num) => isNumber(num)); // filter goes through every item(num) in the array(elements) one at a time and the function checks if it is a number
  return elements.reduce((acc, curr) => acc + curr, 0); // reduce() sums the numbers in the filtered array
} // acc(accumulator) stores the running sum while curr(current element)represents each number in the filtered array, one at a time.

module.exports = sum;
