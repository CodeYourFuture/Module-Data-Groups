function findMax(elements) {

// 〰️ Filter the array to include only numbers (excluding NaN)
  const numericElements = elements.filter((el) => typeof el === "number" && !isNaN(el));

  // 〰️ Return -Infinity for an empty array (or no numeric values)
  if (numericElements.length === 0) {
    return -Infinity; // 〰️ This means there were no numbers to compare
  }

  // 〰️ Use Math.max to find the largest number in the array
  // 〰️ The spread operator (...) is used to pass the elements of the array as individual arguments to Math.max
  // 〰️ Math.max() cannot directly take an array, it needs individual numbers as arguments
  return Math.max(...numericElements);

}

console.log(findMax([]));
console.log(findMax([42]));
console.log(findMax([30, -10, 20, -50]));
console.log(findMax([-30, -10, -50]));
console.log(findMax([1.5, 2.7, 2.1]));
console.log(findMax(["hello", 10, true, 60, null]));
console.log(findMax(["hello", true, null, undefined]));
console.log(findMax([-Infinity]));
console.log(findMax([-Infinity, 0]));
console.log(findMax([NaN]));
console.log(findMax([0, NaN, 1]));


module.exports = findMax;
