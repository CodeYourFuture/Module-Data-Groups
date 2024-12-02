function findMax(elements) {

// 〰️ Filter the array to include only numbers
  const numericElements = elements.filter((el) => typeof el === "number");

  // 〰️ Return -Infinity for an empty array (or no numeric values)
  if (numericElements.length === 0) {
    return -Infinity;
  }

  // 〰️ Use Math.max to find the largest number in the array
  return Math.max(...numericElements);

}

console.log(findMax([]));
console.log(findMax([42]));
console.log(findMax([30, -10, 20, -50]));
console.log(findMax([-30, -10, -50]));
console.log(findMax([1.5, 2.7, 2.1]));
console.log(findMax(["hello", 10, true, 60, null]));
console.log(findMax(["hello", true, null, undefined]));

module.exports = findMax;
